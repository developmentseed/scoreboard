var path = require("path");

/**
 * GET /api/v2/data/challenge/15418
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
  res.setHeader("content-length", "263");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE1NDE4LCJuYW1lIjoiUmVzZXJ2b2lyIE5vZGVzIFVTIE5ldyBFbmdsYW5kIiwiYWN0aW9ucyI6eyJ0b3RhbCI6MTUxNywiYXZhaWxhYmxlIjoxMTAxLCJmaXhlZCI6MzU2LCJmYWxzZVBvc2l0aXZlIjoxLCJza2lwcGVkIjoxLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjIxLCJ0b29IYXJkIjozNywiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6NDQ2MjAyLCJ0YXNrc1dpdGhUaW1lIjo0MTZ9fV0=", "base64"));
  res.end();

  return __filename;
};
