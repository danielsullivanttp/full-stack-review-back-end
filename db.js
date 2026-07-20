const { Sequelize } = require("sequelize");

const DATABASE_URL =
  process.env.VITE_API_URL ||
  "postgres://postgres:root@localhost:5432/playlist_api";

const db = new Sequelize(DATABASE_URL, {
  logging: false,
});

module.exports = db; 