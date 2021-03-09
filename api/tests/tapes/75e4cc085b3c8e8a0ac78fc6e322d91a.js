var path = require("path");

/**
 * GET /api/v2/data/challenge/14500
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:15 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "272");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE0NTAwLCJuYW1lIjoiQWRkIGJyYW5kIHRhZ3MgZm9yIEJ1cmdlciBLaW5nIGluIEVhc3Rlcm4gRXVyb3BlIiwiYWN0aW9ucyI6eyJ0b3RhbCI6NTIsImF2YWlsYWJsZSI6MCwiZml4ZWQiOjQ2LCJmYWxzZVBvc2l0aXZlIjoxLCJza2lwcGVkIjowLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjQsInRvb0hhcmQiOjEsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjEwMzcwOSwidGFza3NXaXRoVGltZSI6NTJ9fV0=", "base64"));
  res.end();

  return __filename;
};
