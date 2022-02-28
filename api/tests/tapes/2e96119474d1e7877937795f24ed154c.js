var path = require("path");

/**
 * GET /api/v2/data/challenge/14340
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:23 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "273");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE0MzQwLCJuYW1lIjoi0J/QvtC70YLQsNCy0LAsIDE1NyDRiNC60L7QuyDRgSDRgtC10LPQsNC80LgiLCJhY3Rpb25zIjp7InRvdGFsIjoxNTcsImF2YWlsYWJsZSI6NTEsImZpeGVkIjo2NSwiZmFsc2VQb3NpdGl2ZSI6MCwic2tpcHBlZCI6MTEsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MjgsInRvb0hhcmQiOjIsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjU2MTI3MywidGFza3NXaXRoVGltZSI6MTA2fX1d", "base64"));
  res.end();

  return __filename;
};
