var path = require("path");

/**
 * GET /api/v2/data/challenge/15594
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:54:56 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "255");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE1NTk0LCJuYW1lIjoidW50YWdnZWQgbGl0dGxlIGZyZWUgbGlicmFyaWVzICIsImFjdGlvbnMiOnsidG90YWwiOjMzLCJhdmFpbGFibGUiOjAsImZpeGVkIjozMywiZmFsc2VQb3NpdGl2ZSI6MCwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjowLCJ0b29IYXJkIjowLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjoxMDg0MTMsInRhc2tzV2l0aFRpbWUiOjMzfX1d", "base64"));
  res.end();

  return __filename;
};
