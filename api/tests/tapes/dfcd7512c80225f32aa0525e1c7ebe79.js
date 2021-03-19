var path = require("path");

/**
 * GET /api/v2/data/challenge/15340
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

  res.write(new Buffer("W3siaWQiOjE1MzQwLCJuYW1lIjoiQ2hlY2sgYWRkcmVzc2VzIGluIEluZG9uZXNpYSAocGFydCAxIG9mICMpIiwiYWN0aW9ucyI6eyJ0b3RhbCI6MTI3MSwiYXZhaWxhYmxlIjoxMjcxLCJmaXhlZCI6MCwiZmFsc2VQb3NpdGl2ZSI6MCwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjowLCJ0b29IYXJkIjowLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjowLCJ0YXNrc1dpdGhUaW1lIjowfX1d", "base64"));
  res.end();

  return __filename;
};
