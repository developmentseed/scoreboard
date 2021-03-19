var path = require("path");

/**
 * GET /api/v2/data/challenge/14918
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:11 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "309");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE0OTE4LCJuYW1lIjoiTWFwcGluZyBwYXJrcyBpbiBJc3RhbmJ1bCB3aXRoIElzdGFuYnVsIE1ldHJvcG9saXRhbiBNdW5pY2lwYWxpdHkgcHJvdmlkZWQgZGF0YSAiLCJhY3Rpb25zIjp7InRvdGFsIjozMTAsImF2YWlsYWJsZSI6MCwiZml4ZWQiOjI3NiwiZmFsc2VQb3NpdGl2ZSI6MTMsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MjAsInRvb0hhcmQiOjEsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjIyOTcyMiwidGFza3NXaXRoVGltZSI6MzA4fX1d", "base64"));
  res.end();

  return __filename;
};
