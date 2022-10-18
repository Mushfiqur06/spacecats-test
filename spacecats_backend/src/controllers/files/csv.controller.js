const db = require("../../models");
const Files = db.files;

const fs = require("fs");
const csv = require("fast-csv");
const CsvParser = require("json2csv").Parser;
const csv2json = require("csvtojson");

const upload = async (req, res) => {
  try {
    if (req.file == undefined) {
      return res.status(400).send("Please upload a CSV file!");
    }

    let files = [];
    let path = __basedir + "/uploads/" + req.file.filename;
    const promises = [];

    fs.createReadStream(path)
      .pipe(csv.parse({ headers: true }))
      .on("error", (error) => {
        throw error.message;
      })
      .on("data", async (row) => {
        files.push(row);
      })
      .on("end", async () => {
        const dataPromises = files.map((item) => {
          const insertData = {
            formatted_date: item["Formatted Date"],
            summary: item["Summary"],
            precip_type: item["Precip Type"],
            temperature: item["Temperature (C)"],
            apparent_temperature: item["Apparent Temperature (C)"],
            humidity: item["Humidity"],
            wind_speed: item["Wind Speed (km/h)"],
            wind_bearing: item["Wind Bearing (degrees)"],
            visibility: item["Visibility (km)"],
            loud_cover: item["Loud Cover"],
            pressure: item["Pressure (millibars)"],
            daily_summary: item["Daily Summary"],
          };

          return Files.create(insertData);
        });
        // console.log(data)
        await Promise.all(dataPromises);
      });

    res.status(200).send({
      message: "Uploaded the file successfully: " + req.file.originalname,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Could not upload the file: " + req.file.originalname,
    });
  }
};

const search = async (req, res) => {
  try {
    console.log([, Date.parse(req.query.to)])
    const fileList = await Files.findAll({
      where: {
        formatted_date: {
          [Op.gte]: new Date(Date.parse(req.query.from)),
          [Op.lte]: new Date(Date.parse(req.query.to)).setHours(23)
        }
      }
    });
    res.send(fileList);
  } catch (err) {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving files data.",
    });
  }
};

const getFilesData = async (req, res) => {
  try {
    const fileList = await Files.findAll();
    res.send(fileList);
  } catch (err) {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving files data.",
    });
  }
};

const download = async (req, res) => {
  try {
    let filesData = [];
    const fileList = await Files.findAll();

    fileList.forEach((file) => {
      const { id, name, email } = file;
      filesData.push({ id, name, email });
    });
    const csvFields = ["Id", "Name", "Email"];
    const csvParser = new CsvParser({ csvFields });
    const csvData = csvParser.parse(filesData);

    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=files.csv");

    res.status(200).end(csvData);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while download csv.",
    });
  }
};

module.exports = {
  upload,
  getFilesData,
  download,
  search
};
