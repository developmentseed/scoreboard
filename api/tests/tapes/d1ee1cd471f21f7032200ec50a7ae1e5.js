var path = require("path");

/**
 * GET /api/v2/data/challenge/14375
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:23 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "244");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE0Mzc1LCJuYW1lIjoiSG90ZWxzIG1pc3NpbmcgRkIiLCJhY3Rpb25zIjp7InRvdGFsIjoxMjksImF2YWlsYWJsZSI6OTAsImZpeGVkIjoyMywiZmFsc2VQb3NpdGl2ZSI6NSwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjowLCJ0b29IYXJkIjoxMSwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6MTM3Mjg5LCJ0YXNrc1dpdGhUaW1lIjozOX19XQ==", "base64"));
  res.end();

  return __filename;
};
