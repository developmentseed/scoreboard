var path = require("path");

/**
 * GET /api/v2/data/challenge/16470
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Mon, 22 Feb 2021 09:47:38 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "296");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE2NDcwLCJuYW1lIjoiQWRkIGJ1aWxkaW5ncyBpbiByZXNpZGVudGlhbCBhcmVhcyBpbiBTdGFkZSwgTmllZGVyc2FjaHNlbiwgR2VybWFueSIsImFjdGlvbnMiOnsidG90YWwiOjM4MywiYXZhaWxhYmxlIjoyNzQsImZpeGVkIjoxMDgsImZhbHNlUG9zaXRpdmUiOjAsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MSwidG9vSGFyZCI6MCwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6MzY1NTc0LCJ0YXNrc1dpdGhUaW1lIjoxMDl9fV0=", "base64"));
  res.end();

  return __filename;
};
