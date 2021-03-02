var path = require("path");

/**
 * GET /api/v2/data/challenge/15425
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:54:57 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "267");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE1NDI1LCJuYW1lIjoiQm91bmRhcnkgbWVtYmVycyB3aXRoIGJsYW5rIHJvbGVzIGluIE1leGljbyIsImFjdGlvbnMiOnsidG90YWwiOjIzMCwiYXZhaWxhYmxlIjoyMjQsImZpeGVkIjo2LCJmYWxzZVBvc2l0aXZlIjowLCJza2lwcGVkIjowLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjAsInRvb0hhcmQiOjAsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjUyNTU5LCJ0YXNrc1dpdGhUaW1lIjo2fX1d", "base64"));
  res.end();

  return __filename;
};
