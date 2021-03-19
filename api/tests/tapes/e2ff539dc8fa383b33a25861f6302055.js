var path = require("path");

/**
 * GET /api/v2/data/challenge/14486
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
  res.setHeader("content-length", "263");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE0NDg2LCJuYW1lIjoiRGVhZCBlbmRlZCBvbmUgd2F5cyAtIEZyYW5jZSIsImFjdGlvbnMiOnsidG90YWwiOjM4MzMsImF2YWlsYWJsZSI6MzA5NywiZml4ZWQiOjI1MSwiZmFsc2VQb3NpdGl2ZSI6MzEzLCJza2lwcGVkIjo3MiwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjo1MCwidG9vSGFyZCI6NTAsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjYwNDMyLCJ0YXNrc1dpdGhUaW1lIjo3MzV9fV0=", "base64"));
  res.end();

  return __filename;
};
