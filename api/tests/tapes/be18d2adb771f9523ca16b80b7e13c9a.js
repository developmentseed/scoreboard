var path = require("path");

/**
 * GET /api/v2/data/challenge/14234
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:28 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "249");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE0MjM0LCJuYW1lIjoiVXRhaDogQWRkIFNwZWVkIExpbWl0cyIsImFjdGlvbnMiOnsidG90YWwiOjU4MDUsImF2YWlsYWJsZSI6NTgwMCwiZml4ZWQiOjIsImZhbHNlUG9zaXRpdmUiOjAsInNraXBwZWQiOjIsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MSwidG9vSGFyZCI6MCwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6MTQyNzc1LCJ0YXNrc1dpdGhUaW1lIjo1fX1d", "base64"));
  res.end();

  return __filename;
};
