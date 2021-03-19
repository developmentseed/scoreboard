var path = require("path");

/**
 * GET /api/v2/data/challenge/16090
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:54:49 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "249");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE2MDkwLCJuYW1lIjoiTW9zdHkgdyB3aWVsa29wb2xza2ltIiwiYWN0aW9ucyI6eyJ0b3RhbCI6NzgyLCJhdmFpbGFibGUiOjQ4NiwiZml4ZWQiOjI5MCwiZmFsc2VQb3NpdGl2ZSI6Miwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjoyLCJ0b29IYXJkIjoyLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50Ijo0MDY2NSwidGFza3NXaXRoVGltZSI6Mjk2fX1d", "base64"));
  res.end();

  return __filename;
};
