var path = require("path");

/**
 * GET /api/v2/data/challenge/14387
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:21 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "233");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE0Mzg3LCJuYW1lIjoiZ2FyYWdlcyIsImFjdGlvbnMiOnsidG90YWwiOjE4MiwiYXZhaWxhYmxlIjowLCJmaXhlZCI6MTcyLCJmYWxzZVBvc2l0aXZlIjoxLCJza2lwcGVkIjowLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjksInRvb0hhcmQiOjAsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjIwNDAzLCJ0YXNrc1dpdGhUaW1lIjoxODJ9fV0=", "base64"));
  res.end();

  return __filename;
};
