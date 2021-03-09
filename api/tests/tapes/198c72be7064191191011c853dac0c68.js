var path = require("path");

/**
 * GET /api/v2/data/challenge/16861
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Mon, 22 Feb 2021 09:47:37 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "246");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE2ODYxLCJuYW1lIjoiQW1lbmQgY29tbW9uIGxhbmQiLCJhY3Rpb25zIjp7InRvdGFsIjozMzYyLCJhdmFpbGFibGUiOjMzMTQsImZpeGVkIjo0NCwiZmFsc2VQb3NpdGl2ZSI6MCwic2tpcHBlZCI6MywiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjowLCJ0b29IYXJkIjoxLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjoxMzkyOTQsInRhc2tzV2l0aFRpbWUiOjQ4fX1d", "base64"));
  res.end();

  return __filename;
};
