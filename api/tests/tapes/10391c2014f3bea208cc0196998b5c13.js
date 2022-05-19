var path = require("path");

/**
 * GET /api/v2/data/challenge/14457
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

  res.write(new Buffer("W3siaWQiOjE0NDU3LCJuYW1lIjoiQ2hpbmEgVGlnaHQiLCJhY3Rpb25zIjp7InRvdGFsIjo4MywiYXZhaWxhYmxlIjowLCJmaXhlZCI6MCwiZmFsc2VQb3NpdGl2ZSI6MTgsInNraXBwZWQiOjMsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MCwidG9vSGFyZCI6NjIsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjQyMDQ5LCJ0YXNrc1dpdGhUaW1lIjo4M319XQ==", "base64"));
  res.end();

  return __filename;
};
