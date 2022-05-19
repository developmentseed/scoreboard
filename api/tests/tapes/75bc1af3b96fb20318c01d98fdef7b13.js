var path = require("path");

/**
 * GET /api/v2/data/challenge/16442
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:54:50 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "278");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE2NDQyLCJuYW1lIjoiQ3JlYXRlIG11bHRpcG9seWdvbnMgZnJvbSBhcmVhcyBpbnNpZGUgbGFuZHVzZXMiLCJhY3Rpb25zIjp7InRvdGFsIjoyMDYzNSwiYXZhaWxhYmxlIjoyMDUyOCwiZml4ZWQiOjkzLCJmYWxzZVBvc2l0aXZlIjo5LCJza2lwcGVkIjowLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjAsInRvb0hhcmQiOjEsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjo0LCJhdmdUaW1lU3BlbnQiOjY3MzgxLCJ0YXNrc1dpdGhUaW1lIjoxMDd9fV0=", "base64"));
  res.end();

  return __filename;
};
