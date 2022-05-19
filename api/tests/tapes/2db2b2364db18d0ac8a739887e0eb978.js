var path = require("path");

/**
 * GET /api/v2/data/challenge/14785
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
  res.setHeader("content-length", "263");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE0Nzg1LCJuYW1lIjoiQWRkIGZvb3R3YXlzIGluIGNlbWV0ZXJ5IC0gRnJhbmNlICgzOCkiLCJhY3Rpb25zIjp7InRvdGFsIjo1MDAsImF2YWlsYWJsZSI6NDkxLCJmaXhlZCI6NywiZmFsc2VQb3NpdGl2ZSI6MCwic2tpcHBlZCI6MiwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjowLCJ0b29IYXJkIjowLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjoyNTk2NzQsInRhc2tzV2l0aFRpbWUiOjl9fV0=", "base64"));
  res.end();

  return __filename;
};
