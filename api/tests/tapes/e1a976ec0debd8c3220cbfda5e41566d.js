var path = require("path");

/**
 * GET /api/v2/data/challenge/15327
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:03 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "267");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE1MzI3LCJuYW1lIjoiU3BhaW46IGFkZCBkaXJlY3Rpb24gdGFnIHRvIGhpZ2h3YXk9Z2l2ZV93YXkiLCJhY3Rpb25zIjp7InRvdGFsIjo5MCwiYXZhaWxhYmxlIjowLCJmaXhlZCI6OTAsImZhbHNlUG9zaXRpdmUiOjAsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MCwidG9vSGFyZCI6MCwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6NzM5OTksInRhc2tzV2l0aFRpbWUiOjkwfX1d", "base64"));
  res.end();

  return __filename;
};
