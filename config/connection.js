var mysql = require("mysql");

require("dotenv/config");
require("./connection");

var connection = mysql.createConnection({
  host: "localhost",
  port: process.env.port,
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
