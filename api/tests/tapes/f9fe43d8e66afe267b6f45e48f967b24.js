var path = require("path");

/**
 * GET /api/v2/data/challenge/14177
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:31 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "256");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE0MTc3LCJuYW1lIjoiTWFkYWdhc2NhciAtIENvbm5lY3Rpdml0eSBDaGVjayIsImFjdGlvbnMiOnsidG90YWwiOjEzNSwiYXZhaWxhYmxlIjoxMjcsImZpeGVkIjo1LCJmYWxzZVBvc2l0aXZlIjoxLCJza2lwcGVkIjoxLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjEsInRvb0hhcmQiOjAsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjI0MzM0OSwidGFza3NXaXRoVGltZSI6OH19XQ==", "base64"));
  res.end();

  return __filename;
};
