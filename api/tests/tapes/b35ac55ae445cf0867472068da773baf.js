var path = require("path");

/**
 * GET /api/v2/data/challenge/14198
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:30 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "287");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE0MTk4LCJuYW1lIjoiUGVydSAtIENvbm5lY3Rpdml0eSBDaGVjayAvIENvbXByb2JhY2nDs24gZGUgY29uZWN0aXZpZGFkIHZpYWwiLCJhY3Rpb25zIjp7InRvdGFsIjo0MDksImF2YWlsYWJsZSI6NDA3LCJmaXhlZCI6MSwiZmFsc2VQb3NpdGl2ZSI6MCwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjoxLCJ0b29IYXJkIjowLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjoxNjAxMDIsInRhc2tzV2l0aFRpbWUiOjJ9fV0=", "base64"));
  res.end();

  return __filename;
};
