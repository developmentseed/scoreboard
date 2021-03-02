var path = require("path");

/**
 * GET /api/v2/data/challenge/16444
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:54:48 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "294");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE2NDQ0LCJuYW1lIjoiQWRkIGJ1aWxkaW5ncyBpbiByZXNpZGVudGlhbCBhcmVhcyBpbiBCYWRlbi1Xw7xydHRlbWJlcmcsIEdlcm1hbnkiLCJhY3Rpb25zIjp7InRvdGFsIjoxODksImF2YWlsYWJsZSI6MCwiZml4ZWQiOjE0MywiZmFsc2VQb3NpdGl2ZSI6MjksInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MTQsInRvb0hhcmQiOjMsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjIzOTM0NSwidGFza3NXaXRoVGltZSI6MTg5fX1d", "base64"));
  res.end();

  return __filename;
};
