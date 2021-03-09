var path = require("path");

/**
 * GET /api/v2/data/challenge/15362
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:00 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "269");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE1MzYyLCJuYW1lIjoiU3BhaW46IGFtZW5pdHk9cmVjeWNsaW5nIHdpdGhvdXQgcmVjeWNsaW5nX3R5cGUgIiwiYWN0aW9ucyI6eyJ0b3RhbCI6NywiYXZhaWxhYmxlIjowLCJmaXhlZCI6NywiZmFsc2VQb3NpdGl2ZSI6MCwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjowLCJ0b29IYXJkIjowLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjoxMDcwNTAsInRhc2tzV2l0aFRpbWUiOjd9fV0=", "base64"));
  res.end();

  return __filename;
};
