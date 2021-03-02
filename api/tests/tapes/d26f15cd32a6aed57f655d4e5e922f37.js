var path = require("path");

/**
 * GET /api/v2/data/challenge/14103
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:39 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "265");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE0MTAzLCJuYW1lIjoiQmFuZ2xhZGVzaCAtIENvbm5lY3Rpdml0eSBDaGVjayIsImFjdGlvbnMiOnsidG90YWwiOjE3NjUsImF2YWlsYWJsZSI6NjEsImZpeGVkIjoxNDkwLCJmYWxzZVBvc2l0aXZlIjoxMSwic2tpcHBlZCI6MywiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjoyMDAsInRvb0hhcmQiOjAsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjEwNzU5OCwidGFza3NXaXRoVGltZSI6MTcwNH19XQ==", "base64"));
  res.end();

  return __filename;
};
