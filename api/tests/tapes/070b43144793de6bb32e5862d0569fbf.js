var path = require("path");

/**
 * GET /api/v2/data/challenge/14280
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:27 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "263");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE0MjgwLCJuYW1lIjoiV2hpY2ggaXMgdGhlIGl0YWxpYW4gbmFtZSBvZiB0aGlzIG9iamVjdD8iLCJhY3Rpb25zIjp7InRvdGFsIjoxMywiYXZhaWxhYmxlIjoxMCwiZml4ZWQiOjAsImZhbHNlUG9zaXRpdmUiOjAsInNraXBwZWQiOjIsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MSwidG9vSGFyZCI6MCwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6NDk3MzksInRhc2tzV2l0aFRpbWUiOjN9fV0=", "base64"));
  res.end();

  return __filename;
};
