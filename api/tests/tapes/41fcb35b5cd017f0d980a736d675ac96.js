var path = require("path");

/**
 * GET /api/v2/data/challenge/14106
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:39 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "257");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE0MTA2LCJuYW1lIjoiQmFuZ2xhZGVzaCAtIE92ZXJsYXBwaW5nIFdheXMiLCJhY3Rpb25zIjp7InRvdGFsIjoxNDEsImF2YWlsYWJsZSI6MCwiZml4ZWQiOjY0LCJmYWxzZVBvc2l0aXZlIjoyOSwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjo0OCwidG9vSGFyZCI6MCwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6MjAxMDk4LCJ0YXNrc1dpdGhUaW1lIjoxNDB9fV0=", "base64"));
  res.end();

  return __filename;
};
