var path = require("path");

/**
 * GET /api/v2/data/challenge/15258
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:09 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "248");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE1MjU4LCJuYW1lIjoiU0RQIGltcG9ydDogUmVhbCBlc3RhdGUiLCJhY3Rpb25zIjp7InRvdGFsIjo4MDYsImF2YWlsYWJsZSI6ODAxLCJmaXhlZCI6MSwiZmFsc2VQb3NpdGl2ZSI6MSwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjoxLCJ0b29IYXJkIjoyLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjozMjMxNjEsInRhc2tzV2l0aFRpbWUiOjV9fV0=", "base64"));
  res.end();

  return __filename;
};
