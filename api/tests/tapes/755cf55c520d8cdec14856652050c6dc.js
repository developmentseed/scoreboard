var path = require("path");

/**
 * GET /api/v2/data/challenge/14049
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:44 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "251");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE0MDQ5LCJuYW1lIjoiU2VuZWdhbCAtIENvbm5lY3Rpdml0eSBDaGVjayIsImFjdGlvbnMiOnsidG90YWwiOjUxLCJhdmFpbGFibGUiOjQ5LCJmaXhlZCI6MiwiZmFsc2VQb3NpdGl2ZSI6MCwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjowLCJ0b29IYXJkIjowLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50Ijo2ODA2NTMsInRhc2tzV2l0aFRpbWUiOjJ9fV0=", "base64"));
  res.end();

  return __filename;
};
