var path = require("path");

/**
 * GET /api/v2/data/challenge/16120
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:54:48 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "268");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE2MTIwLCJuYW1lIjoiQWRkZWQgdGhlIG1pc3NpbmcgQnVpbGRpbmcgI1BlaGlhMjAyMSIsImFjdGlvbnMiOnsidG90YWwiOjEwOTksImF2YWlsYWJsZSI6NzA4LCJmaXhlZCI6MjI0LCJmYWxzZVBvc2l0aXZlIjo5NSwic2tpcHBlZCI6OCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjo1NiwidG9vSGFyZCI6OCwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6NDY1NzYsInRhc2tzV2l0aFRpbWUiOjM5MX19XQ==", "base64"));
  res.end();

  return __filename;
};
