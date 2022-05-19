var path = require("path");

/**
 * GET /api/v2/data/challenge/14680
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:12 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "268");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE0NjgwLCJuYW1lIjoiQWRkIERpcmVjdGlvbiB0byBcIkdpdmUgV2F5XCIgU2lnbnMgaW4gSXRhbHkiLCJhY3Rpb25zIjp7InRvdGFsIjo2MSwiYXZhaWxhYmxlIjowLCJmaXhlZCI6MTIsImZhbHNlUG9zaXRpdmUiOjksInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MzksInRvb0hhcmQiOjEsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjg2MzE5LCJ0YXNrc1dpdGhUaW1lIjo2MX19XQ==", "base64"));
  res.end();

  return __filename;
};
