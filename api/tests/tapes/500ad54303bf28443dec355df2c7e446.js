var path = require("path");

/**
 * GET /api/v2/data/challenge/14222
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:28 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "273");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE0MjIyLCJuYW1lIjoiRGVtb2NyYXRpYyBSZXB1YmxpYyBvZiB0aGUgQ29uZ28gLSBDcm9zc2luZyBSb2FkcyIsImFjdGlvbnMiOnsidG90YWwiOjU1LCJhdmFpbGFibGUiOjAsImZpeGVkIjo1MywiZmFsc2VQb3NpdGl2ZSI6MCwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjoyLCJ0b29IYXJkIjowLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjoxMjE5OTUsInRhc2tzV2l0aFRpbWUiOjU1fX1d", "base64"));
  res.end();

  return __filename;
};
