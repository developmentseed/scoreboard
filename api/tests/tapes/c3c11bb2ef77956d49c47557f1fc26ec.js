var path = require("path");

/**
 * GET /api/v2/data/challenge/14314
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:24 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "264");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE0MzE0LCJuYW1lIjoiTmlnZXJpYSAgLSBNTCBGYWNpbGl0aWVzIFZhbGlkYXRpb24iLCJhY3Rpb25zIjp7InRvdGFsIjoxMDEsImF2YWlsYWJsZSI6MCwiZml4ZWQiOjQwLCJmYWxzZVBvc2l0aXZlIjoyOSwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjoxMCwidG9vSGFyZCI6MjIsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjEyNDYxNCwidGFza3NXaXRoVGltZSI6MTAxfX1d", "base64"));
  res.end();

  return __filename;
};
