var path = require("path");

/**
 * GET /api/v2/data/challenge/14458
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:16 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "235");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE0NDU4LCJuYW1lIjoiVHVya2V5IExvb3NlIiwiYWN0aW9ucyI6eyJ0b3RhbCI6NTgsImF2YWlsYWJsZSI6MCwiZml4ZWQiOjAsImZhbHNlUG9zaXRpdmUiOjMsInNraXBwZWQiOjEsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MCwidG9vSGFyZCI6NTQsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjMyOTQxLCJ0YXNrc1dpdGhUaW1lIjo1OH19XQ==", "base64"));
  res.end();

  return __filename;
};
