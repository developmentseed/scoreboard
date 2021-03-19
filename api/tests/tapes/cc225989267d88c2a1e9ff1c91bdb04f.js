var path = require("path");

/**
 * GET /api/v2/data/challenge/15284
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:06 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "246");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE1Mjg0LCJuYW1lIjoiU0RQIGltcG9ydDogUGhhcm1hY2llcyIsImFjdGlvbnMiOnsidG90YWwiOjYyLCJhdmFpbGFibGUiOjAsImZpeGVkIjo1OCwiZmFsc2VQb3NpdGl2ZSI6MCwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjo0LCJ0b29IYXJkIjowLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50Ijo2Nzk2OTIsInRhc2tzV2l0aFRpbWUiOjYyfX1d", "base64"));
  res.end();

  return __filename;
};
