var path = require("path");

/**
 * GET /api/v2/data/challenge/16447
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:54:47 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "288");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE2NDQ3LCJuYW1lIjoiQWRkIGJ1aWxkaW5ncyBpbiByZXNpZGVudGlhbCBhcmVhcyBpbiBCcmFuZGVuYnVyZywgR2VybWFueSIsImFjdGlvbnMiOnsidG90YWwiOjE5ODEsImF2YWlsYWJsZSI6MTg4OSwiZml4ZWQiOjU0LCJmYWxzZVBvc2l0aXZlIjo3LCJza2lwcGVkIjozMSwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjowLCJ0b29IYXJkIjowLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjoxNTAyNTksInRhc2tzV2l0aFRpbWUiOjkyfX1d", "base64"));
  res.end();

  return __filename;
};
