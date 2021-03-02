var path = require("path");

/**
 * GET /api/v2/data/challenge/15256
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:09 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "269");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE1MjU2LCJuYW1lIjoiU0RQIGltcG9ydDogQmljeWNsZSBhbmQgQXV0byBSZXBhaXIvU3VwcGx5IiwiYWN0aW9ucyI6eyJ0b3RhbCI6MzgxLCJhdmFpbGFibGUiOjM2MiwiZml4ZWQiOjE2LCJmYWxzZVBvc2l0aXZlIjowLCJza2lwcGVkIjoyLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjEsInRvb0hhcmQiOjAsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjk3MDYwMiwidGFza3NXaXRoVGltZSI6MTh9fV0=", "base64"));
  res.end();

  return __filename;
};
