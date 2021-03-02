var path = require("path");

/**
 * GET /api/v2/data/challenge/15299
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:04 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "272");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE1Mjk5LCJuYW1lIjoiU0RQIGltcG9ydDogUHJpdmF0ZSBUcmFuc3BvcnRhdGlvbiAodGF4aXMsIGV0Yy4pIiwiYWN0aW9ucyI6eyJ0b3RhbCI6MTcsImF2YWlsYWJsZSI6MCwiZml4ZWQiOjEyLCJmYWxzZVBvc2l0aXZlIjoyLCJza2lwcGVkIjowLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjEsInRvb0hhcmQiOjIsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjIyMzkzNCwidGFza3NXaXRoVGltZSI6MTd9fV0=", "base64"));
  res.end();

  return __filename;
};
