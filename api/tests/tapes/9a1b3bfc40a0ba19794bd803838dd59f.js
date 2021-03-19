var path = require("path");

/**
 * GET /api/v2/data/challenge/15254
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:09 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "248");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE1MjU0LCJuYW1lIjoiU0RQIGltcG9ydDogTmFpbCBTYWxvbnMiLCJhY3Rpb25zIjp7InRvdGFsIjoyNDMsImF2YWlsYWJsZSI6MjM5LCJmaXhlZCI6NCwiZmFsc2VQb3NpdGl2ZSI6MCwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjowLCJ0b29IYXJkIjowLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50Ijo0NjMyMDAsInRhc2tzV2l0aFRpbWUiOjR9fV0=", "base64"));
  res.end();

  return __filename;
};
