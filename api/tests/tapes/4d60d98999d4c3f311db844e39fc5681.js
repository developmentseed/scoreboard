var path = require("path");

/**
 * GET /api/v2/data/challenge/14304
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
  res.setHeader("content-length", "252");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE0MzA0LCJuYW1lIjoiTW9uZ29saWEgLSBDcm9zc2luZyBSb2FkcyIsImFjdGlvbnMiOnsidG90YWwiOjEzNCwiYXZhaWxhYmxlIjoxMjMsImZpeGVkIjoxMCwiZmFsc2VQb3NpdGl2ZSI6MSwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjowLCJ0b29IYXJkIjowLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjoxMjgyMTIsInRhc2tzV2l0aFRpbWUiOjExfX1d", "base64"));
  res.end();

  return __filename;
};
