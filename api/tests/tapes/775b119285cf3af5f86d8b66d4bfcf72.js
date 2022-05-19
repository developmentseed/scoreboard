var path = require("path");

/**
 * GET /api/v2/data/challenge/16995
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Mon, 22 Feb 2021 09:47:34 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "261");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE2OTk1LCJuYW1lIjoiUHJvcGVyIGtleSBmb3IgRmFjZWJvb2sgcGFnZSAtIE1leGljbyIsImFjdGlvbnMiOnsidG90YWwiOjY0MywiYXZhaWxhYmxlIjo2MzgsImZpeGVkIjo1LCJmYWxzZVBvc2l0aXZlIjowLCJza2lwcGVkIjowLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjAsInRvb0hhcmQiOjAsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjQ1MDY4LCJ0YXNrc1dpdGhUaW1lIjo1fX1d", "base64"));
  res.end();

  return __filename;
};
