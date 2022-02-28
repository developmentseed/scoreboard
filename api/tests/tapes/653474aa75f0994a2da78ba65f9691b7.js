var path = require("path");

/**
 * GET /api/v2/data/challenge/14166
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:33 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "242");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE0MTY2LCJuYW1lIjoiTGFvcyAtIENyb3NzaW5nIFJvYWRzIiwiYWN0aW9ucyI6eyJ0b3RhbCI6NSwiYXZhaWxhYmxlIjowLCJmaXhlZCI6NCwiZmFsc2VQb3NpdGl2ZSI6MCwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjoxLCJ0b29IYXJkIjowLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjoxNTY1NDcsInRhc2tzV2l0aFRpbWUiOjV9fV0=", "base64"));
  res.end();

  return __filename;
};
