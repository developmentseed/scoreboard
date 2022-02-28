var path = require("path");

/**
 * GET /api/v2/data/challenge/14893
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
  res.setHeader("content-length", "271");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE0ODkzLCJuYW1lIjoiVW5tYXBwZWQgcmVzaWRlbnRpYWwgYXJlYXMgaW4gR2VybWFueSIsImFjdGlvbnMiOnsidG90YWwiOjI3NDUsImF2YWlsYWJsZSI6MCwiZml4ZWQiOjIxMzMsImZhbHNlUG9zaXRpdmUiOjE5NCwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjo0MTgsInRvb0hhcmQiOjAsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjU2MTc1NywidGFza3NXaXRoVGltZSI6Mjc0NX19XQ==", "base64"));
  res.end();

  return __filename;
};
