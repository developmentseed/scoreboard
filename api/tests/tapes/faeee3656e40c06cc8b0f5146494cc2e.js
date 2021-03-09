var path = require("path");

/**
 * GET /api/v2/data/challenge/14159
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:33 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "251");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE0MTU5LCJuYW1lIjoiSm9yZGFuIC0gQ29ubmVjdGl2aXR5IENoZWNrIiwiYWN0aW9ucyI6eyJ0b3RhbCI6MTcsImF2YWlsYWJsZSI6MywiZml4ZWQiOjExLCJmYWxzZVBvc2l0aXZlIjowLCJza2lwcGVkIjowLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjAsInRvb0hhcmQiOjMsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjQwNTA3NiwidGFza3NXaXRoVGltZSI6MTR9fV0=", "base64"));
  res.end();

  return __filename;
};
