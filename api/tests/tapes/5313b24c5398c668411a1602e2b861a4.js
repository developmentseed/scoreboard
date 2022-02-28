var path = require("path");

/**
 * GET /api/v2/data/challenge/14335
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:24 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "324");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE0MzM1LCJuYW1lIjoi0KjQutC+0LvRiyDQsiDQn9C+0LvRgtCw0LLRgdC60L7QuSDQvtCx0LvQsNGB0YLQuCDQv9C+INC40LfQsdC40YDQsNGC0LXQu9GM0L3Ri9C8INGD0YfQsNGB0YLQutCw0LwgMiIsImFjdGlvbnMiOnsidG90YWwiOjk1NSwiYXZhaWxhYmxlIjo5NTQsImZpeGVkIjowLCJmYWxzZVBvc2l0aXZlIjoxLCJza2lwcGVkIjowLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjAsInRvb0hhcmQiOjAsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjY5NTA1LCJ0YXNrc1dpdGhUaW1lIjoxfX1d", "base64"));
  res.end();

  return __filename;
};
