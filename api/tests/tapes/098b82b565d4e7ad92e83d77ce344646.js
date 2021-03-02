var path = require("path");

/**
 * GET /api/v2/data/challenge/16095
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
  res.setHeader("content-length", "253");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE2MDk1LCJuYW1lIjoiTW9zdHkgdyBkb2xub8WbbMSFc2tpbSIsImFjdGlvbnMiOnsidG90YWwiOjE2ODUsImF2YWlsYWJsZSI6NjYwLCJmaXhlZCI6MTAxNiwiZmFsc2VQb3NpdGl2ZSI6MSwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjoxLCJ0b29IYXJkIjo3LCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50Ijo0MTk4NSwidGFza3NXaXRoVGltZSI6MTAyNX19XQ==", "base64"));
  res.end();

  return __filename;
};
