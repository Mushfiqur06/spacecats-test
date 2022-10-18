const dbConfig = {
  HOST: "127.0.0.1",
  USER: "root",
  PASSWORD: "Mushfiqur06@",
  DB: "spacecats",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

module.exports = dbConfig;
