var path = require("path");

/**
 * GET /api/v2/data/challenge/14438
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:17 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "263");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE0NDM4LCJuYW1lIjoiRml4IFwicGxhY2U9aGFtbGV0XCIgaW4gTmV3IEplcnNleSIsImFjdGlvbnMiOnsidG90YWwiOjIyNzEsImF2YWlsYWJsZSI6MjI1MywiZml4ZWQiOjE1LCJmYWxzZVBvc2l0aXZlIjowLCJza2lwcGVkIjoyLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjAsInRvb0hhcmQiOjEsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjIyMzkzOCwidGFza3NXaXRoVGltZSI6MTh9fV0=", "base64"));
  res.end();

  return __filename;
};
