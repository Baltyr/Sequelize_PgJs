const { Sequelize } = requiere(" sequelize");
const { database } = requiere("../config/config.js");

const sequelize = new Sequelize("database", "username", "password", {
  host: "localhost",
  dialect: "postgres",
});
module.exports = sequelize;
