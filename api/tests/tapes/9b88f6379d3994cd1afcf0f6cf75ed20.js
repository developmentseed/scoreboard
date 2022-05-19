var path = require("path");

/**
 * GET /api/v2/data/challenge/14533
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:14 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "257");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE0NTMzLCJuYW1lIjoiVU5JQ0VGL0dJR0EgTGliZXJpYSBTY2hvb2xzIiwiYWN0aW9ucyI6eyJ0b3RhbCI6NTg0NiwiYXZhaWxhYmxlIjo0OTg4LCJmaXhlZCI6MCwiZmFsc2VQb3NpdGl2ZSI6ODU2LCJza2lwcGVkIjoyLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjAsInRvb0hhcmQiOjAsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjIyNjc5LCJ0YXNrc1dpdGhUaW1lIjo4NTh9fV0=", "base64"));
  res.end();

  return __filename;
};
