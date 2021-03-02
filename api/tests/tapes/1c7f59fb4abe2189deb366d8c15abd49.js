var path = require("path");

/**
 * GET /api/v2/data/challenge/14274
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:27 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "283");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE0Mjc0LCJuYW1lIjoiV2F0ZXIgR2VvbWV0cnkgaW4gRmFpcmZpZWxkIENvdW50eSAoQ29ubmVjdGljdXQpIiwiYWN0aW9ucyI6eyJ0b3RhbCI6Mjc3NCwiYXZhaWxhYmxlIjowLCJmaXhlZCI6MTg1NywiZmFsc2VQb3NpdGl2ZSI6MTc5LCJza2lwcGVkIjowLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjY0OCwidG9vSGFyZCI6OTAsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjI5MzU2MywidGFza3NXaXRoVGltZSI6Mjc3NH19XQ==", "base64"));
  res.end();

  return __filename;
};
