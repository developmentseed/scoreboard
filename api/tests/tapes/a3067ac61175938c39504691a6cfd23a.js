var path = require("path");

/**
 * GET /api/v2/data/challenge/16457
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Mon, 22 Feb 2021 09:51:44 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "305");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE2NDU3LCJuYW1lIjoiQWRkIGJ1aWxkaW5ncyBpbiByZXNpZGVudGlhbCBhcmVhcyBpbiBMYW5ka3JlaXMgTGVlciwgTmllZGVyc2FjaHNlbiwgR2VybWFueSIsImFjdGlvbnMiOnsidG90YWwiOjk1MiwiYXZhaWxhYmxlIjo4NDYsImZpeGVkIjo4NCwiZmFsc2VQb3NpdGl2ZSI6NCwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjoxOCwidG9vSGFyZCI6MCwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6NDMyNzcyLCJ0YXNrc1dpdGhUaW1lIjoxMDZ9fV0=", "base64"));
  res.end();

  return __filename;
};
