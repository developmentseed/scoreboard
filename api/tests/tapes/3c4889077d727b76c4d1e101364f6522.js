var path = require("path");

/**
 * GET /api/v2/data/challenge/15221
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:11 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "288");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE1MjIxLCJuYW1lIjoiQ29udmVydCBiYXNrZXRiYWxsIHBpdGNoIGZyb20gbm9kZSB0byBhcmVhIC0gV29ybGQiLCJhY3Rpb25zIjp7InRvdGFsIjo2OTA5LCJhdmFpbGFibGUiOjQ5OTQsImZpeGVkIjoxMzc0LCJmYWxzZVBvc2l0aXZlIjo2Mywic2tpcHBlZCI6ODMsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6NDksInRvb0hhcmQiOjM0NiwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6MjEyMDUxLCJ0YXNrc1dpdGhUaW1lIjoxOTEzfX1d", "base64"));
  res.end();

  return __filename;
};
