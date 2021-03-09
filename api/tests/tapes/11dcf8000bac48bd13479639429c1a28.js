var path = require("path");

/**
 * GET /api/v2/data/challenge/15901
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:54:52 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "260");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE1OTAxLCJuYW1lIjoiTWFwcGluZyBVbm1hcHBlZCB0b3ducyBpbiBUdXJrZXkiLCJhY3Rpb25zIjp7InRvdGFsIjoxMjAsImF2YWlsYWJsZSI6MCwiZml4ZWQiOjczLCJmYWxzZVBvc2l0aXZlIjoxMSwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjozNCwidG9vSGFyZCI6MiwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6MzM1NTYzLCJ0YXNrc1dpdGhUaW1lIjoxMjB9fV0=", "base64"));
  res.end();

  return __filename;
};
