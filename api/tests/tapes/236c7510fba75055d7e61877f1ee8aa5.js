var path = require("path");

/**
 * GET /api/v2/data/challenge/15318
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
  res.setHeader("content-length", "279");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE1MzE4LCJuYW1lIjoiQWRkIGRpcmVjdGlvbiB0byBTdG9wIC0gVVNBIExvcyBBbmdlbGVzIFRpbWV6b25lIiwiYWN0aW9ucyI6eyJ0b3RhbCI6MzM5NDEsImF2YWlsYWJsZSI6MzM4NTMsImZpeGVkIjo4MiwiZmFsc2VQb3NpdGl2ZSI6Mywic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjowLCJ0b29IYXJkIjozLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjoxOTE1NDIsInRhc2tzV2l0aFRpbWUiOjg4fX1d", "base64"));
  res.end();

  return __filename;
};
