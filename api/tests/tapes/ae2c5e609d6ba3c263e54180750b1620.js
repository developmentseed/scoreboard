var path = require("path");

/**
 * GET /api/v2/data/challenge/16066
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:54:51 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "284");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE2MDY2LCJuYW1lIjoic2Nob29scyBpbiBCcmF6aWwgLSBDYXhpYXMgKE1BKSBFc2NvbGFzIG5vIEJyYXNpbCBDYXhpYXMiLCJhY3Rpb25zIjp7InRvdGFsIjoyNTUsImF2YWlsYWJsZSI6MCwiZml4ZWQiOjI0MiwiZmFsc2VQb3NpdGl2ZSI6MTAsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MywidG9vSGFyZCI6MCwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6MTA3NzAzLCJ0YXNrc1dpdGhUaW1lIjoyNTV9fV0=", "base64"));
  res.end();

  return __filename;
};
