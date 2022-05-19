var path = require("path");

/**
 * GET /api/v2/data/challenge/14469
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
  res.setHeader("content-length", "257");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE0NDY5LCJuYW1lIjoiTmFtZT1cIkh1dFwiL1wiaHV0XCIgVGFnIEZpeCIsImFjdGlvbnMiOnsidG90YWwiOjkxOSwiYXZhaWxhYmxlIjowLCJmaXhlZCI6NTMyLCJmYWxzZVBvc2l0aXZlIjozNDUsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6NDIsInRvb0hhcmQiOjAsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjE2Njg2LCJ0YXNrc1dpdGhUaW1lIjo5MTl9fV0=", "base64"));
  res.end();

  return __filename;
};
