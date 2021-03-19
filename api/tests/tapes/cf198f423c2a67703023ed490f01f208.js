var path = require("path");

/**
 * GET /api/v2/data/challenge/16101
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:54:49 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "249");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE2MTAxLCJuYW1lIjoiTW9zdHkgdyBtYcWCb3BvbHNraW0iLCJhY3Rpb25zIjp7InRvdGFsIjoxNTQ3LCJhdmFpbGFibGUiOjAsImZpeGVkIjoxNTQzLCJmYWxzZVBvc2l0aXZlIjowLCJza2lwcGVkIjowLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjQsInRvb0hhcmQiOjAsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjM2OTc0LCJ0YXNrc1dpdGhUaW1lIjoxNTQ3fX1d", "base64"));
  res.end();

  return __filename;
};
