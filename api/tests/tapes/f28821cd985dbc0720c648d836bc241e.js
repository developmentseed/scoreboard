var path = require("path");

/**
 * GET /api/v2/data/challenge/15345
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:02 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "264");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE1MzQ1LCJuYW1lIjoiVVAgLSBHb25kYSAtIHJlc2lkZW50aWFsIGFyZWFzIiwiYWN0aW9ucyI6eyJ0b3RhbCI6NjA4NywiYXZhaWxhYmxlIjozMDA5LCJmaXhlZCI6MzA0OCwiZmFsc2VQb3NpdGl2ZSI6MCwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjozMCwidG9vSGFyZCI6MCwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6MTQ4MzQxLCJ0YXNrc1dpdGhUaW1lIjozMDc2fX1d", "base64"));
  res.end();

  return __filename;
};
