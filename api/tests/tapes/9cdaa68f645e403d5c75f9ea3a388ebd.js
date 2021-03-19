var path = require("path");

/**
 * GET /api/v2/data/challenge/15298
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:04 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "285");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE1Mjk4LCJuYW1lIjoiU0RQIGltcG9ydDogSW4tSG9tZSBDYXJlIFNlcnZpY2VzIGZvciBTZW5pb3JzL0FkdWx0cy9DaGlsZHJlbiIsImFjdGlvbnMiOnsidG90YWwiOjQ2LCJhdmFpbGFibGUiOjcsImZpeGVkIjozMywiZmFsc2VQb3NpdGl2ZSI6MSwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjo1LCJ0b29IYXJkIjowLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50Ijo3MzYyMDAsInRhc2tzV2l0aFRpbWUiOjM5fX1d", "base64"));
  res.end();

  return __filename;
};
