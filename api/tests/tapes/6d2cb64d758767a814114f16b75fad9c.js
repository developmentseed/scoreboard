var path = require("path");

/**
 * GET /api/v2/data/challenge/14719
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:12 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "260");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE0NzE5LCJuYW1lIjoiTGVzIMOpY29xdWFydGllcnMgKEZSQU5DRSwgMjAxMCkiLCJhY3Rpb25zIjp7InRvdGFsIjozNDQsImF2YWlsYWJsZSI6Mjk4LCJmaXhlZCI6MSwiZmFsc2VQb3NpdGl2ZSI6MCwic2tpcHBlZCI6NDUsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MCwidG9vSGFyZCI6MCwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6NzQ2MjM5NSwidGFza3NXaXRoVGltZSI6NDZ9fV0=", "base64"));
  res.end();

  return __filename;
};
