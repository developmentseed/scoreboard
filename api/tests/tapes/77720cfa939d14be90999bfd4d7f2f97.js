var path = require("path");

/**
 * GET /api/v2/data/challenge/14310
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:25 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "269");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE0MzEwLCJuYW1lIjoiTmlnZXJpYSAtIEZsb2F0aW5nIFdheXMgLyBEaXNjb25uZWN0ZWQgUm9hZHMiLCJhY3Rpb25zIjp7InRvdGFsIjo3MDcsImF2YWlsYWJsZSI6NzA0LCJmaXhlZCI6MiwiZmFsc2VQb3NpdGl2ZSI6MSwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjowLCJ0b29IYXJkIjowLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjoxMjg2OTUsInRhc2tzV2l0aFRpbWUiOjN9fV0=", "base64"));
  res.end();

  return __filename;
};
