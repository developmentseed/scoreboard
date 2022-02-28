var path = require("path");

/**
 * GET /api/v2/data/challenge/16081
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
  res.setHeader("content-length", "266");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE2MDgxLCJuYW1lIjoiSW5jb3JyZWN0IGJ1aWxkaW5ncyBpbiBHcmFuZCBCbGFuaywgTUkiLCJhY3Rpb25zIjp7InRvdGFsIjozMTgsImF2YWlsYWJsZSI6MCwiZml4ZWQiOjI1OCwiZmFsc2VQb3NpdGl2ZSI6MjIsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MzgsInRvb0hhcmQiOjAsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjg5MDMwLCJ0YXNrc1dpdGhUaW1lIjozMTh9fV0=", "base64"));
  res.end();

  return __filename;
};
