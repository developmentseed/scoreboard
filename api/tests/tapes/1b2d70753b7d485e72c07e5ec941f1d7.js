var path = require("path");

/**
 * GET /api/v2/data/challenge/16944
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Mon, 22 Feb 2021 09:47:36 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "260");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE2OTQ0LCJuYW1lIjoiRXhwYW5kIGlzbGFuZCBub2RlcyB0byBhcmVhcyBpbiBJZGFobyIsImFjdGlvbnMiOnsidG90YWwiOjY0LCJhdmFpbGFibGUiOjAsImZpeGVkIjo2MSwiZmFsc2VQb3NpdGl2ZSI6MCwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjozLCJ0b29IYXJkIjowLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50Ijo2ODM5MiwidGFza3NXaXRoVGltZSI6NjR9fV0=", "base64"));
  res.end();

  return __filename;
};
