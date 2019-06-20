var mysql = require("mysql");

require("dotenv");
require("dotenv/config.js");
require("./connection");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: process.env.DB_PASS,
  database: "goals_db",
  socketPath: "/var/run/mysqld/mysqld.sock'"
});


connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
