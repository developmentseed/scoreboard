var path = require("path");

/**
 * GET /api/v2/data/challenge/16952
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Mon, 22 Feb 2021 09:47:35 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "259");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE2OTUyLCJuYW1lIjoiR2VvcmdpYSBVU0dTLUxVTEMgaW1wb3J0IGNsZWFudXAiLCJhY3Rpb25zIjp7InRvdGFsIjozODk5LCJhdmFpbGFibGUiOjM4OTIsImZpeGVkIjo0LCJmYWxzZVBvc2l0aXZlIjoyLCJza2lwcGVkIjowLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjAsInRvb0hhcmQiOjEsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjQyOTkyMiwidGFza3NXaXRoVGltZSI6N319XQ==", "base64"));
  res.end();

  return __filename;
};
