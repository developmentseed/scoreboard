var path = require("path");

/**
 * GET /api/v2/data/challenge/16087
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:54:50 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "246");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE2MDg3LCJuYW1lIjoiTW9zdHkgdyBwb2RrYXJwYWNraW0iLCJhY3Rpb25zIjp7InRvdGFsIjo0NzcsImF2YWlsYWJsZSI6MCwiZml4ZWQiOjQ3NywiZmFsc2VQb3NpdGl2ZSI6MCwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjowLCJ0b29IYXJkIjowLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjoxNTYwOSwidGFza3NXaXRoVGltZSI6NDc3fX1d", "base64"));
  res.end();

  return __filename;
};
