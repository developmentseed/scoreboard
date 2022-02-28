var path = require("path");

/**
 * GET /api/v2/data/challenge/15291
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:05 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "244");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE1MjkxLCJuYW1lIjoiU0RQIGltcG9ydDogQ3JlbWF0b3JpdW0iLCJhY3Rpb25zIjp7InRvdGFsIjoyLCJhdmFpbGFibGUiOjAsImZpeGVkIjoxLCJmYWxzZVBvc2l0aXZlIjowLCJza2lwcGVkIjowLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjEsInRvb0hhcmQiOjAsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjExMDk5NywidGFza3NXaXRoVGltZSI6Mn19XQ==", "base64"));
  res.end();

  return __filename;
};
