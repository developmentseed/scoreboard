var path = require("path");

/**
 * GET /api/v2/data/challenge/15621
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:54:54 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "329");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE1NjIxLCJuYW1lIjoi0J/QsNC80Y/RgtC90LjQutC4INC70LjRh9C90L7RgdGC0Y/QvCDQsiDQoNC+0YHRgdC40Lgg0LHQtdC3IHN1YmplY3Q6d2lraXBlZGlhL3N1YmplY3Q6d2lraWRhdGEiLCJhY3Rpb25zIjp7InRvdGFsIjo0NjMxLCJhdmFpbGFibGUiOjM5MDEsImZpeGVkIjo2NjcsImZhbHNlUG9zaXRpdmUiOjI3LCJza2lwcGVkIjoxNywiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjo0LCJ0b29IYXJkIjoxNSwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6MTkyMDA3LCJ0YXNrc1dpdGhUaW1lIjo3Mjl9fV0=", "base64"));
  res.end();

  return __filename;
};
