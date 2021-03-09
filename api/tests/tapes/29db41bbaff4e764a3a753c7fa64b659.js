var path = require("path");

/**
 * GET /api/v2/data/challenge/16949
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Mon, 22 Feb 2021 09:47:35 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "267");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE2OTQ5LCJuYW1lIjoiYnVpbGRpbmc9KiBuYSBwdW5rdGFjaCB3IFBvbHNjZSAodjIpIiwiYWN0aW9ucyI6eyJ0b3RhbCI6MTA0NjQsImF2YWlsYWJsZSI6MTAzNzQsImZpeGVkIjo4NywiZmFsc2VQb3NpdGl2ZSI6MSwic2tpcHBlZCI6MSwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjowLCJ0b29IYXJkIjoxLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjoyNjM4NTYsInRhc2tzV2l0aFRpbWUiOjkwfX1d", "base64"));
  res.end();

  return __filename;
};
