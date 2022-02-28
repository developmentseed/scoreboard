var path = require("path");

/**
 * GET /api/v2/data/challenge/14202
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:30 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "264");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE0MjAyLCJuYW1lIjoiTWlzc2luZyBzZXR0bGVtZW50cyBpbiBFcXVhdGV1ciAoRFJDKSIsImFjdGlvbnMiOnsidG90YWwiOjIzMiwiYXZhaWxhYmxlIjowLCJmaXhlZCI6MjI0LCJmYWxzZVBvc2l0aXZlIjowLCJza2lwcGVkIjowLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjgsInRvb0hhcmQiOjAsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjI2NDI2OCwidGFza3NXaXRoVGltZSI6MjMyfX1d", "base64"));
  res.end();

  return __filename;
};
