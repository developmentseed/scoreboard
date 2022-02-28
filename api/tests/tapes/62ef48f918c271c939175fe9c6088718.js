var path = require("path");

/**
 * GET /api/v2/data/challenge/15343
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:02 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "231");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE1MzQzLCJuYW1lIjoiYXV0b2ZpeCIsImFjdGlvbnMiOnsidG90YWwiOjcxOSwiYXZhaWxhYmxlIjo3MTUsImZpeGVkIjowLCJmYWxzZVBvc2l0aXZlIjoxLCJza2lwcGVkIjozLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjAsInRvb0hhcmQiOjAsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjE0ODA2LCJ0YXNrc1dpdGhUaW1lIjo0fX1d", "base64"));
  res.end();

  return __filename;
};
