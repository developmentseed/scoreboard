var path = require("path");

/**
 * GET /api/v2/data/challenge/15244
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:10 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "250");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE1MjQ0LCJuYW1lIjoiU0RQIGltcG9ydDogTWFudWZhY3R1cmluZyIsImFjdGlvbnMiOnsidG90YWwiOjkzOSwiYXZhaWxhYmxlIjo5MzUsImZpeGVkIjozLCJmYWxzZVBvc2l0aXZlIjowLCJza2lwcGVkIjowLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjEsInRvb0hhcmQiOjAsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjE0MTEwNSwidGFza3NXaXRoVGltZSI6NH19XQ==", "base64"));
  res.end();

  return __filename;
};
