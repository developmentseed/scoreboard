var path = require("path");

/**
 * GET /api/v2/data/challenge/15321
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:03 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "241");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE1MzIxLCJuYW1lIjoiUGxhY2UgemFiYXciLCJhY3Rpb25zIjp7InRvdGFsIjoxMjY5LCJhdmFpbGFibGUiOjExNTMsImZpeGVkIjo5NywiZmFsc2VQb3NpdGl2ZSI6MCwic2tpcHBlZCI6NSwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjo2LCJ0b29IYXJkIjo4LCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjoxMDM3OTksInRhc2tzV2l0aFRpbWUiOjExNn19XQ==", "base64"));
  res.end();

  return __filename;
};
