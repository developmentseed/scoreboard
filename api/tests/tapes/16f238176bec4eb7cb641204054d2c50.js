var path = require("path");

/**
 * GET /api/v2/data/challenge/14143
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:35 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "266");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE0MTQzLCJuYW1lIjoiR2hhbmEgLSBGbG9hdGluZyBXYXlzIC8gRGlzY29ubmVjdGVkIFJvYWRzIiwiYWN0aW9ucyI6eyJ0b3RhbCI6NTIsImF2YWlsYWJsZSI6MCwiZml4ZWQiOjQxLCJmYWxzZVBvc2l0aXZlIjoxLCJza2lwcGVkIjowLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjYsInRvb0hhcmQiOjQsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjUxNzM0NCwidGFza3NXaXRoVGltZSI6NTJ9fV0=", "base64"));
  res.end();

  return __filename;
};
