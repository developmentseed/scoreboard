var path = require("path");

/**
 * GET /api/v2/data/challenge/14162
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:33 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "248");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE0MTYyLCJuYW1lIjoiSm9yZGFuIC0gT3ZlcmxhcHBpbmcgV2F5cyIsImFjdGlvbnMiOnsidG90YWwiOjU0LCJhdmFpbGFibGUiOjQ5LCJmaXhlZCI6NSwiZmFsc2VQb3NpdGl2ZSI6MCwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjowLCJ0b29IYXJkIjowLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjoxMjYyMjYsInRhc2tzV2l0aFRpbWUiOjV9fV0=", "base64"));
  res.end();

  return __filename;
};
