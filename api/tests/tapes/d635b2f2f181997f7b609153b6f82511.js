var path = require("path");

/**
 * GET /api/v2/data/challenge/15279
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:06 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "244");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE1Mjc5LCJuYW1lIjoiU0RQIGltcG9ydDogVGFpbG9yaW5nIiwiYWN0aW9ucyI6eyJ0b3RhbCI6MjcsImF2YWlsYWJsZSI6MjMsImZpeGVkIjo0LCJmYWxzZVBvc2l0aXZlIjowLCJza2lwcGVkIjowLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjAsInRvb0hhcmQiOjAsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjM3MTMyOSwidGFza3NXaXRoVGltZSI6NH19XQ==", "base64"));
  res.end();

  return __filename;
};
