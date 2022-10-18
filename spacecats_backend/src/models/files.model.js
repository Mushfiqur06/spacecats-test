module.exports = (sequelize, Sequelize) => {
  const Files = sequelize.define("weathers_histories", {
    formatted_date: {
      type: Sequelize.DATE,
    },
    summary: {
      type: Sequelize.STRING,
    },
    precip_type: {
      type: Sequelize.STRING,
    },
    temperature: {
      type: Sequelize.FLOAT(20, 18),
    },
    apparent_temperature: {
      type: Sequelize.FLOAT(20, 18),
    },
    humidity: {
      type: Sequelize.FLOAT(20, 18),
    },
    wind_speed: {
      type: Sequelize.FLOAT(20, 18),
    },
    wind_bearing: {
      type: Sequelize.INTEGER,
    },
    visibility: {
      type: Sequelize.FLOAT(20, 18),
    },
    loud_cover: {
      type: Sequelize.INTEGER,
    },
    pressure: {
      type: Sequelize.STRING,
    },
    daily_summary: {
      type: Sequelize.STRING,
    },
  });

  return Files;
};
