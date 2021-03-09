var path = require("path");

/**
 * GET /api/v2/data/challenge/15286
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
  res.setHeader("content-length", "284");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE1Mjg2LCJuYW1lIjoiU0RQIGltcG9ydDogTGF1bmRyb21hdHMsIExhdW5kcnkgU2VydmljZXMsIGFuZCBEcnljbGVhbmluZyIsImFjdGlvbnMiOnsidG90YWwiOjE5MCwiYXZhaWxhYmxlIjo5MywiZml4ZWQiOjg3LCJmYWxzZVBvc2l0aXZlIjowLCJza2lwcGVkIjoyLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjUsInRvb0hhcmQiOjMsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjU4OTQ4NiwidGFza3NXaXRoVGltZSI6OTd9fV0=", "base64"));
  res.end();

  return __filename;
};
