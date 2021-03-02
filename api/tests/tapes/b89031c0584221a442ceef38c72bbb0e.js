var path = require("path");

/**
 * GET /api/v2/data/challenge/15276
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:07 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "252");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE1Mjc2LCJuYW1lIjoiU0RQIGltcG9ydDogSG9tZWxlc3Mgc2hlbHRlciIsImFjdGlvbnMiOnsidG90YWwiOjI5LCJhdmFpbGFibGUiOjAsImZpeGVkIjoyNCwiZmFsc2VQb3NpdGl2ZSI6Miwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjozLCJ0b29IYXJkIjowLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjoyNjQxODMsInRhc2tzV2l0aFRpbWUiOjI5fX1d", "base64"));
  res.end();

  return __filename;
};
