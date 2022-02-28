var path = require("path");

/**
 * GET /api/v2/data/challenge/16445
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:54:48 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "289");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE2NDQ1LCJuYW1lIjoiQWRkIGJ1aWxkaW5ncyBpbiByZXNpZGVudGlhbCBhcmVhcyBpbiBCYXllcm4sIEdlcm1hbnkiLCJhY3Rpb25zIjp7InRvdGFsIjozNzk0LCJhdmFpbGFibGUiOjI1MDEsImZpeGVkIjoxMTk0LCJmYWxzZVBvc2l0aXZlIjozMCwic2tpcHBlZCI6MTIsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6NTcsInRvb0hhcmQiOjAsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjczNTk1NiwidGFza3NXaXRoVGltZSI6MTI5M319XQ==", "base64"));
  res.end();

  return __filename;
};
