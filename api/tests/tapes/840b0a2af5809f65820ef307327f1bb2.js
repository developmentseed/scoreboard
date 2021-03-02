var path = require("path");

/**
 * GET /api/v2/data/challenge/14750
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:12 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "287");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE0NzUwLCJuYW1lIjoiSGVhbHRoIEZhY2lsaXRpZXMgaW4gTm9ydGggV2VzdCBOaWdlcmlhIChOaWdlciBTdGF0ZSk6IFBhcnQgMyIsImFjdGlvbnMiOnsidG90YWwiOjIwMCwiYXZhaWxhYmxlIjoxNjgsImZpeGVkIjoyNywiZmFsc2VQb3NpdGl2ZSI6MCwic2tpcHBlZCI6MiwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjoyLCJ0b29IYXJkIjoxLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50Ijo4NDYxMCwidGFza3NXaXRoVGltZSI6MzJ9fV0=", "base64"));
  res.end();

  return __filename;
};
