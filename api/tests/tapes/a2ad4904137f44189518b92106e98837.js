var path = require("path");

/**
 * GET /api/v2/data/challenge/14182
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:31 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "261");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE0MTgyLCJuYW1lIjoiTm9ydGggTWFjZWRvbmlhIC0gQ29ubmVjdGl2aXR5IENoZWNrIiwiYWN0aW9ucyI6eyJ0b3RhbCI6MjQsImF2YWlsYWJsZSI6MCwiZml4ZWQiOjE0LCJmYWxzZVBvc2l0aXZlIjowLCJza2lwcGVkIjowLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjEwLCJ0b29IYXJkIjowLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjoxMjY1NDQsInRhc2tzV2l0aFRpbWUiOjI0fX1d", "base64"));
  res.end();

  return __filename;
};
