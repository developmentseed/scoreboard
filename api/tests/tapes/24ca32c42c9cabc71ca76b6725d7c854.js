var path = require("path");

/**
 * GET /api/v2/data/challenge/15414
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:54:58 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "258");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE1NDE0LCJuYW1lIjoiUmVzZXJ2b2lyIE5vZGVzIFVTLUdyZWF0UGxhaW5zIiwiYWN0aW9ucyI6eyJ0b3RhbCI6NjkyMywiYXZhaWxhYmxlIjo2OTE5LCJmaXhlZCI6NCwiZmFsc2VQb3NpdGl2ZSI6MCwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjowLCJ0b29IYXJkIjowLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjoyOTUyNTA3LCJ0YXNrc1dpdGhUaW1lIjo0fX1d", "base64"));
  res.end();

  return __filename;
};
