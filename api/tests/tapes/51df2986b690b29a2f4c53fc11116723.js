var path = require("path");

/**
 * GET /api/v2/data/challenge/14625
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:13 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "269");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE0NjI1LCJuYW1lIjoiRnVlbCBzdGF0aW9ucyB0b28gZmFyIGZyb20gcm9hZCAtIEZyYW5jZSAoMzgpIiwiYWN0aW9ucyI6eyJ0b3RhbCI6MzQsImF2YWlsYWJsZSI6MCwiZml4ZWQiOjI5LCJmYWxzZVBvc2l0aXZlIjoyLCJza2lwcGVkIjowLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjEsInRvb0hhcmQiOjIsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjY0OTc2NCwidGFza3NXaXRoVGltZSI6MzR9fV0=", "base64"));
  res.end();

  return __filename;
};
