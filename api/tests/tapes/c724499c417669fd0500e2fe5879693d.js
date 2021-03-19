var path = require("path");

/**
 * GET /api/v2/data/challenge/14180
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
  res.setHeader("content-length", "255");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE0MTgwLCJuYW1lIjoiTm9ydGggTWFjZWRvbmlhIC0gU2hhcnAgQW5nbGUgUm9hZHMiLCJhY3Rpb25zIjp7InRvdGFsIjoxLCJhdmFpbGFibGUiOjAsImZpeGVkIjowLCJmYWxzZVBvc2l0aXZlIjowLCJza2lwcGVkIjoxLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjAsInRvb0hhcmQiOjAsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjM3NzA0LCJ0YXNrc1dpdGhUaW1lIjoxfX1d", "base64"));
  res.end();

  return __filename;
};
