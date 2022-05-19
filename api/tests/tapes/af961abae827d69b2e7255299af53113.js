var path = require("path");

/**
 * GET /api/v2/data/challenge/15614
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:54:54 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "257");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE1NjE0LCJuYW1lIjoiV2lsbGlhbXMgQ291bnR5LCBPaGlvIFJhcElEIiwiYWN0aW9ucyI6eyJ0b3RhbCI6MTY5MCwiYXZhaWxhYmxlIjoxNjAwLCJmaXhlZCI6NDksImZhbHNlUG9zaXRpdmUiOjM0LCJza2lwcGVkIjowLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjcsInRvb0hhcmQiOjAsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjEwNTE0NywidGFza3NXaXRoVGltZSI6OTB9fV0=", "base64"));
  res.end();

  return __filename;
};
