var path = require("path");

/**
 * GET /api/v2/data/challenge/14219
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:29 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "300");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE0MjE5LCJuYW1lIjoiRGVtb2NyYXRpYyBSZXB1YmxpYyBvZiB0aGUgQ29uZ28gLSBGbG9hdGluZyBXYXlzIC8gRGlzY29ubmVjdGVkIFJvYWRzIiwiYWN0aW9ucyI6eyJ0b3RhbCI6OTI3LCJhdmFpbGFibGUiOjAsImZpeGVkIjo2NTIsImZhbHNlUG9zaXRpdmUiOjUsInNraXBwZWQiOjIsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MTI3LCJ0b29IYXJkIjoxNDEsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjMzNzI1MiwidGFza3NXaXRoVGltZSI6OTI2fX1d", "base64"));
  res.end();

  return __filename;
};
