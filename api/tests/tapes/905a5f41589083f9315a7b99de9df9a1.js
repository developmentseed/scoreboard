var path = require("path");

/**
 * GET /api/v2/data/challenge/15292
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
  res.setHeader("content-length", "243");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE1MjkyLCJuYW1lIjoiU0RQIGltcG9ydDogTXVzZXVtcyIsImFjdGlvbnMiOnsidG90YWwiOjIyLCJhdmFpbGFibGUiOjAsImZpeGVkIjoxNCwiZmFsc2VQb3NpdGl2ZSI6NCwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjo0LCJ0b29IYXJkIjowLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50Ijo1MDAxMzYsInRhc2tzV2l0aFRpbWUiOjIyfX1d", "base64"));
  res.end();

  return __filename;
};
