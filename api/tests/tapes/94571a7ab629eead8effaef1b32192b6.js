var path = require("path");

/**
 * GET /api/v2/data/challenge/15289
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:05 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "247");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE1Mjg5LCJuYW1lIjoiU0RQIGltcG9ydDogUGV0IEdyb29taW5nIiwiYWN0aW9ucyI6eyJ0b3RhbCI6MzAsImF2YWlsYWJsZSI6MjgsImZpeGVkIjoyLCJmYWxzZVBvc2l0aXZlIjowLCJza2lwcGVkIjowLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjAsInRvb0hhcmQiOjAsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjM0ODY3OCwidGFza3NXaXRoVGltZSI6Mn19XQ==", "base64"));
  res.end();

  return __filename;
};
