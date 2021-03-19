var path = require("path");

/**
 * GET /api/v2/data/challenge/14501
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:15 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "268");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE0NTAxLCJuYW1lIjoiQWRkIGJyYW5kIHRhZ3MgZm9yIFN1YndheSBpbiBFYXN0ZXJuIEV1cm9wZSIsImFjdGlvbnMiOnsidG90YWwiOjg3LCJhdmFpbGFibGUiOjE1LCJmaXhlZCI6NTgsImZhbHNlUG9zaXRpdmUiOjEsInNraXBwZWQiOjIsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MTEsInRvb0hhcmQiOjAsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjg1MDc5LCJ0YXNrc1dpdGhUaW1lIjo3Mn19XQ==", "base64"));
  res.end();

  return __filename;
};
