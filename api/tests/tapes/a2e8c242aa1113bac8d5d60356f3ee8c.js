var path = require("path");

/**
 * GET /api/v2/data/challenge/15296
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:04 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "261");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE1Mjk2LCJuYW1lIjoiU0RQIGltcG9ydDogUGV0IERheWNhcmUgYW5kIERvZ3dhbGtpbmciLCJhY3Rpb25zIjp7InRvdGFsIjoxNiwiYXZhaWxhYmxlIjoxNCwiZml4ZWQiOjEsImZhbHNlUG9zaXRpdmUiOjEsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MCwidG9vSGFyZCI6MCwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6NDcyMTExLCJ0YXNrc1dpdGhUaW1lIjoyfX1d", "base64"));
  res.end();

  return __filename;
};
