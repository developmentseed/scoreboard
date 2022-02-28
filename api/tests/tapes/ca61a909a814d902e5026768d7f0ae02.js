var path = require("path");

/**
 * GET /api/v2/data/challenge/16084
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:54:50 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "251");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE2MDg0LCJuYW1lIjoiTW9zdHkgdyDFm3dpxJl0b2tyenlza2ltIiwiYWN0aW9ucyI6eyJ0b3RhbCI6NjM0LCJhdmFpbGFibGUiOjAsImZpeGVkIjo2MDcsImZhbHNlUG9zaXRpdmUiOjMsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MjQsInRvb0hhcmQiOjAsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjMzOTQ4LCJ0YXNrc1dpdGhUaW1lIjo2MzR9fV0=", "base64"));
  res.end();

  return __filename;
};
