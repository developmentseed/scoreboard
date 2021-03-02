var path = require("path");

/**
 * GET /api/v2/data/challenge/15931
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:54:51 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "279");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE1OTMxLCJuYW1lIjoiVW5tYXBwZWQgaGFtbGV0cyBpbiBSdXNzaWEgKFVyYWwgZmVkZXJhbCBkaXN0cmljdCkiLCJhY3Rpb25zIjp7InRvdGFsIjoxOTYsImF2YWlsYWJsZSI6MCwiZml4ZWQiOjczLCJmYWxzZVBvc2l0aXZlIjoxMDYsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MSwidG9vSGFyZCI6MTYsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjExNjA1NiwidGFza3NXaXRoVGltZSI6MTk2fX1d", "base64"));
  res.end();

  return __filename;
};
