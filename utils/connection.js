const mysql = require("mysql2");

// Connection to server
  const db = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "HugoAl@1991",
    database: "empTracker",
  });


module.exports = db;