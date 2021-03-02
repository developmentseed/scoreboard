var path = require("path");

/**
 * GET /api/v2/data/challenge/16109
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:54:48 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "257");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE2MTA5LCJuYW1lIjoiTW9zdHkgdyB3b2pld8OzZHp0d2llIHBvZGxhc2tpbSIsImFjdGlvbnMiOnsidG90YWwiOjI5NiwiYXZhaWxhYmxlIjowLCJmaXhlZCI6MjkzLCJmYWxzZVBvc2l0aXZlIjowLCJza2lwcGVkIjowLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjMsInRvb0hhcmQiOjAsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjM1NTUzLCJ0YXNrc1dpdGhUaW1lIjoyOTZ9fV0=", "base64"));
  res.end();

  return __filename;
};
