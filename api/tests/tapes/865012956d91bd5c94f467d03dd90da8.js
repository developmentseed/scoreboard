var path = require("path");

/**
 * GET /api/v2/data/challenge/15406
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:54:58 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "247");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE1NDA2LCJuYW1lIjoiUmVzZXJ2b2lyIE5vZGVzIFVTLU9SIiwiYWN0aW9ucyI6eyJ0b3RhbCI6Mjc0NywiYXZhaWxhYmxlIjoyNzQzLCJmaXhlZCI6MiwiZmFsc2VQb3NpdGl2ZSI6MCwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjoyLCJ0b29IYXJkIjowLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjoxMTk1MywidGFza3NXaXRoVGltZSI6NH19XQ==", "base64"));
  res.end();

  return __filename;
};
