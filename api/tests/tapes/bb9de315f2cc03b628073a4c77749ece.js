var path = require("path");

/**
 * GET /api/v2/data/challenge/15270
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:07 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "254");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE1MjcwLCJuYW1lIjoiU0RQIGltcG9ydDogSG90ZWxzL01vdGVscyIsImFjdGlvbnMiOnsidG90YWwiOjIzNiwiYXZhaWxhYmxlIjoxMTcsImZpeGVkIjo5NSwiZmFsc2VQb3NpdGl2ZSI6NSwic2tpcHBlZCI6MSwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjoxNywidG9vSGFyZCI6MSwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6MjY1NzIyLCJ0YXNrc1dpdGhUaW1lIjoxMTl9fV0=", "base64"));
  res.end();

  return __filename;
};
