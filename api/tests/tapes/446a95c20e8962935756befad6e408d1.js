var path = require("path");

/**
 * GET /api/v2/data/challenge/16464
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Mon, 22 Feb 2021 09:47:38 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "288");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE2NDY0LCJuYW1lIjoiQWRkIGJ1aWxkaW5ncyBpbiByZXNpZGVudGlhbCBhcmVhcyBpbiBOaWVkZXJzYWNoc2VuLCBHZXJtYW55IiwiYWN0aW9ucyI6eyJ0b3RhbCI6OTY3LCJhdmFpbGFibGUiOjkxOCwiZml4ZWQiOjM1LCJmYWxzZVBvc2l0aXZlIjoxMCwic2tpcHBlZCI6MiwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjoyLCJ0b29IYXJkIjowLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50Ijo3Mzc0NzIsInRhc2tzV2l0aFRpbWUiOjQ5fX1d", "base64"));
  res.end();

  return __filename;
};
