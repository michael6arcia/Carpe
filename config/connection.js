var mysql = require("mysql");

require("dotenv");
require("dotenv/config.js");
require("./connection");

var connection = mysql.createConnection({
  host: "127.0.0.1",
  port: 8000,
  user: "root",
  password: process.env.DB_PASS,
  database: "goals_db"
});


connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
