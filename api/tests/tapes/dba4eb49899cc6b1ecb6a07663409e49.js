var path = require("path");

/**
 * GET /api/v2/data/challenge/14217
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:29 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "254");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE0MjE3LCJuYW1lIjoiVXpiZWtpc3RhbiAtIE92ZXJsYXBwaW5nIFdheXMiLCJhY3Rpb25zIjp7InRvdGFsIjozNiwiYXZhaWxhYmxlIjowLCJmaXhlZCI6MSwiZmFsc2VQb3NpdGl2ZSI6MTMsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MjIsInRvb0hhcmQiOjAsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjEwMjgyNSwidGFza3NXaXRoVGltZSI6MzZ9fV0=", "base64"));
  res.end();

  return __filename;
};
