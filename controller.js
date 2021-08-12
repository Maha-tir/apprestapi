"use strict";

var response = require("./res");
var connection = require("./koneksi");

exports.index = function (req, res) {
  response.ok("Aplikasi REST API Berjalan", res);
};

// Display all student data in database
exports.tampildatasiswa = function (req, res) {
  connection.query("SELECT * FROM siswa", function (error, rows, fileds) {
    if (error) {
      connection.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};
