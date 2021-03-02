var path = require("path");

/**
 * GET /api/v2/data/challenge/15242
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:10 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "248");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE1MjQyLCJuYW1lIjoiU0RQIGltcG9ydDogQWdyaWN1bHR1cmUiLCJhY3Rpb25zIjp7InRvdGFsIjo2OSwiYXZhaWxhYmxlIjo1NCwiZml4ZWQiOjE1LCJmYWxzZVBvc2l0aXZlIjowLCJza2lwcGVkIjowLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjAsInRvb0hhcmQiOjAsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjg2NDY3NSwidGFza3NXaXRoVGltZSI6MTV9fV0=", "base64"));
  res.end();

  return __filename;
};
