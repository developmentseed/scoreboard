var path = require("path");

/**
 * GET /api/v2/data/challenge/15288
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:05 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "261");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE1Mjg4LCJuYW1lIjoiU0RQIGltcG9ydDogUmVjeWNsaW5nIENlbnRlci9MYW5kZmlsbCIsImFjdGlvbnMiOnsidG90YWwiOjMzLCJhdmFpbGFibGUiOjAsImZpeGVkIjoyOCwiZmFsc2VQb3NpdGl2ZSI6MCwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjo0LCJ0b29IYXJkIjoxLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50Ijo4ODEwOTEsInRhc2tzV2l0aFRpbWUiOjMzfX1d", "base64"));
  res.end();

  return __filename;
};
