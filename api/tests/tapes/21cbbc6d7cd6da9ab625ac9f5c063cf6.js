var path = require("path");

/**
 * GET /api/v2/data/challenge/15283
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:06 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "246");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE1MjgzLCJuYW1lIjoiU0RQIGltcG9ydDogUGhvdG9ncmFwaHkiLCJhY3Rpb25zIjp7InRvdGFsIjozNSwiYXZhaWxhYmxlIjoyOSwiZml4ZWQiOjIsImZhbHNlUG9zaXRpdmUiOjQsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MCwidG9vSGFyZCI6MCwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6MTM3NzY0LCJ0YXNrc1dpdGhUaW1lIjo2fX1d", "base64"));
  res.end();

  return __filename;
};
