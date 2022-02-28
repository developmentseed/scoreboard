var path = require("path");

/**
 * GET /api/v2/data/challenge/15290
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:05 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "248");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE1MjkwLCJuYW1lIjoiU0RQIGltcG9ydDogQW11c2VtZW50IFBhcmtzIiwiYWN0aW9ucyI6eyJ0b3RhbCI6NiwiYXZhaWxhYmxlIjowLCJmaXhlZCI6MSwiZmFsc2VQb3NpdGl2ZSI6Mywic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjoyLCJ0b29IYXJkIjowLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjozMjc1NjYsInRhc2tzV2l0aFRpbWUiOjZ9fV0=", "base64"));
  res.end();

  return __filename;
};
