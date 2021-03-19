var path = require("path");

/**
 * GET /api/v2/data/challenge/15444
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:54:57 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "263");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE1NDQ0LCJuYW1lIjoiR2FzIFN0YXRpb25zIGluIFNhc2thdG9vbiwgU0ssIENhbmFkYSIsImFjdGlvbnMiOnsidG90YWwiOjQxNywiYXZhaWxhYmxlIjozNzIsImZpeGVkIjowLCJmYWxzZVBvc2l0aXZlIjozOCwic2tpcHBlZCI6MSwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjo2LCJ0b29IYXJkIjowLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjoyOTc1OCwidGFza3NXaXRoVGltZSI6NDV9fV0=", "base64"));
  res.end();

  return __filename;
};
