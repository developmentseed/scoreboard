var path = require("path");

/**
 * GET /api/v2/data/challenge/15278
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:06 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "246");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE1Mjc4LCJuYW1lIjoiU0RQIGltcG9ydDogTGlicmFyaWVzIiwiYWN0aW9ucyI6eyJ0b3RhbCI6MjYsImF2YWlsYWJsZSI6MCwiZml4ZWQiOjE2LCJmYWxzZVBvc2l0aXZlIjowLCJza2lwcGVkIjowLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjEwLCJ0b29IYXJkIjowLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjoxNjU2ODEsInRhc2tzV2l0aFRpbWUiOjI2fX1d", "base64"));
  res.end();

  return __filename;
};
