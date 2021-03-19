var path = require("path");

/**
 * GET /api/v2/data/challenge/16936
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Mon, 22 Feb 2021 09:47:36 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "244");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE2OTM2LCJuYW1lIjoiMXJvYWRBbGxMYW5lczRCQ04iLCJhY3Rpb25zIjp7InRvdGFsIjo3MDg3LCJhdmFpbGFibGUiOjcwODYsImZpeGVkIjoxLCJmYWxzZVBvc2l0aXZlIjowLCJza2lwcGVkIjowLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjAsInRvb0hhcmQiOjAsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjE3OTYwOSwidGFza3NXaXRoVGltZSI6MX19XQ==", "base64"));
  res.end();

  return __filename;
};
