var path = require("path");

/**
 * GET /api/v2/data/challenge/14220
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:29 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "281");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE0MjIwLCJuYW1lIjoiRGVtb2NyYXRpYyBSZXB1YmxpYyBvZiB0aGUgQ29uZ28gLSBDb25uZWN0aXZpdHkgQ2hlY2siLCJhY3Rpb25zIjp7InRvdGFsIjoyNTAsImF2YWlsYWJsZSI6MCwiZml4ZWQiOjIwOSwiZmFsc2VQb3NpdGl2ZSI6Miwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjozOSwidG9vSGFyZCI6MCwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6MjE5MTM3LCJ0YXNrc1dpdGhUaW1lIjoyNTB9fV0=", "base64"));
  res.end();

  return __filename;
};
