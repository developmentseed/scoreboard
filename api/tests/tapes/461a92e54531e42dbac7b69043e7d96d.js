var path = require("path");

/**
 * GET /api/v2/data/challenge/14183
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:31 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "255");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE0MTgzLCJuYW1lIjoiTm9ydGggTWFjZWRvbmlhIC0gQ3Jvc3NpbmcgUm9hZHMiLCJhY3Rpb25zIjp7InRvdGFsIjoxMiwiYXZhaWxhYmxlIjowLCJmaXhlZCI6NywiZmFsc2VQb3NpdGl2ZSI6MCwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjo1LCJ0b29IYXJkIjowLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50Ijo1NzM2MDQsInRhc2tzV2l0aFRpbWUiOjEyfX1d", "base64"));
  res.end();

  return __filename;
};