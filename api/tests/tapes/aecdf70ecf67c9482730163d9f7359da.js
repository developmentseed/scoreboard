var path = require("path");

/**
 * GET /api/v2/data/challenge/15908
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:54:52 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "284");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE1OTA4LCJuYW1lIjoiTWlzc2luZyBwbGF5Z3JvdW5kcyBmcm9tIE9TIE9wZW4gR3JlZW5zcGFjZSIsImFjdGlvbnMiOnsidG90YWwiOjI1MDI5LCJhdmFpbGFibGUiOjIzMDUyLCJmaXhlZCI6MTUxMSwiZmFsc2VQb3NpdGl2ZSI6MTk2LCJza2lwcGVkIjo2NCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjo3MywidG9vSGFyZCI6MTMzLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjozMTAwMTcsInRhc2tzV2l0aFRpbWUiOjE5NzV9fV0=", "base64"));
  res.end();

  return __filename;
};
