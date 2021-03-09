var path = require("path");

/**
 * GET /api/v2/data/challenge/16088
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

  res.write(new Buffer("W3siaWQiOjE2MDg4LCJuYW1lIjoiTW9zdHkgdyBtYXpvd2llY2tpbSIsImFjdGlvbnMiOnsidG90YWwiOjE2MDEsImF2YWlsYWJsZSI6OTQxLCJmaXhlZCI6NTI4LCJmYWxzZVBvc2l0aXZlIjoxMDMsInNraXBwZWQiOjEsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MjUsInRvb0hhcmQiOjMsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjc2NzkyLCJ0YXNrc1dpdGhUaW1lIjo2NjB9fV0=", "base64"));
  res.end();

  return __filename;
};
