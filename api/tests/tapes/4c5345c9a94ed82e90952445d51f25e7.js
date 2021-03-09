var path = require("path");

/**
 * GET /api/v2/data/challenge/15922
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:54:51 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "272");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE1OTIyLCJuYW1lIjoiUmVwbGFjZSBgYW1lbml0eT13YXRlcmAgd2l0aCBtb3JlIHNwZWNpZmljIHRhZyIsImFjdGlvbnMiOnsidG90YWwiOjg3MywiYXZhaWxhYmxlIjo3ODMsImZpeGVkIjo4NywiZmFsc2VQb3NpdGl2ZSI6MCwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjoxLCJ0b29IYXJkIjoyLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50Ijo0NDY0MywidGFza3NXaXRoVGltZSI6OTB9fV0=", "base64"));
  res.end();

  return __filename;
};
