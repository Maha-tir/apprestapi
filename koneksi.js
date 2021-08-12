var mysql = require("mysql");

// Koneksi Database
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_api",
});

conn.connect((err) => {
  if (err) throw err;
  console.log("Mysql Terkoneksi");
});

module.export = conn;
