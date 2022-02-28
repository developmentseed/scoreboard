var path = require("path");

/**
 * GET /api/v2/data/challenge/14444
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:17 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "317");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE0NDQ0LCJuYW1lIjoi0JTQvtC00LDQstCw0L3QvdGPINGC0LAg0YDQtdC00LDQs9GD0LLQsNC90L3RjyDRiNC60ZbQuyDQo9C60YDQsNGX0L3QuCAoMTEyODYpIiwiYWN0aW9ucyI6eyJ0b3RhbCI6MTEyODYsImF2YWlsYWJsZSI6ODExMCwiZml4ZWQiOjI1NDEsImZhbHNlUG9zaXRpdmUiOjcsInNraXBwZWQiOjY0LCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjQ1MCwidG9vSGFyZCI6MTE0LCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50Ijo2MDY2MDMsInRhc2tzV2l0aFRpbWUiOjMxNzJ9fV0=", "base64"));
  res.end();

  return __filename;
};
