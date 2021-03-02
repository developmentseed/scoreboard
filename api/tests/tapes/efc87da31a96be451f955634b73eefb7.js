var path = require("path");

/**
 * GET /api/v2/data/challenge/14746
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
  res.setHeader("content-length", "289");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE0NzQ2LCJuYW1lIjoiSGVhbHRoIGZhY2lsaXRpZXMgaW4gTm9ydGggV2VzdCBOaWdlcmlhIChOaWdlciBTdGF0ZSkgLSBQYXJ0IDIiLCJhY3Rpb25zIjp7InRvdGFsIjoyMDAsImF2YWlsYWJsZSI6MiwiZml4ZWQiOjE5NywiZmFsc2VQb3NpdGl2ZSI6MCwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjoxLCJ0b29IYXJkIjowLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjozMjIyNzUsInRhc2tzV2l0aFRpbWUiOjE5OH19XQ==", "base64"));
  res.end();

  return __filename;
};
