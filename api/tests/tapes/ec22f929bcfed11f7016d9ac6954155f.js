var path = require("path");

/**
 * GET /api/v2/data/challenge/15293
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
  res.setHeader("content-length", "257");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE1MjkzLCJuYW1lIjoiU0RQIGltcG9ydDogSG9tZSBDb29raW5nIFNlcnZpY2VzIiwiYWN0aW9ucyI6eyJ0b3RhbCI6MjEsImF2YWlsYWJsZSI6OCwiZml4ZWQiOjIsImZhbHNlUG9zaXRpdmUiOjEwLCJza2lwcGVkIjowLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjAsInRvb0hhcmQiOjEsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjM1OTYwMiwidGFza3NXaXRoVGltZSI6MTN9fV0=", "base64"));
  res.end();

  return __filename;
};
