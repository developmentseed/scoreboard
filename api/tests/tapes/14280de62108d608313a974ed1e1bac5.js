var path = require("path");

/**
 * GET /api/v2/data/challenge/14336
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:24 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "331");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE0MzM2LCJuYW1lIjoi0J/QvtC70YLQsNCy0YHQutC40LUg0YjQutC+0LvRiyAyMjMg0YjRgtGD0LrQuCDQs9C00LUg0LXRgdGC0Ywg0LjQt9Cx0LjRgNCw0YLQtdC70YzQvdGL0LUg0YPRh9Cw0YHRgtC60LgiLCJhY3Rpb25zIjp7InRvdGFsIjoyMjMsImF2YWlsYWJsZSI6MjA1LCJmaXhlZCI6MTAsImZhbHNlUG9zaXRpdmUiOjAsInNraXBwZWQiOjIsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6NCwidG9vSGFyZCI6MiwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6NjI0MTYyLCJ0YXNrc1dpdGhUaW1lIjoxOH19XQ==", "base64"));
  res.end();

  return __filename;
};
