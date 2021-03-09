var path = require("path");

/**
 * GET /api/v2/data/challenge/16950
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Mon, 22 Feb 2021 09:47:35 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "254");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE2OTUwLCJuYW1lIjoiYnVpbGRpbmc9KiBvbiBub2RlcyBpbiBFZ3lwdCIsImFjdGlvbnMiOnsidG90YWwiOjIzOCwiYXZhaWxhYmxlIjoxODIsImZpeGVkIjo1NCwiZmFsc2VQb3NpdGl2ZSI6MCwic2tpcHBlZCI6MiwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjowLCJ0b29IYXJkIjowLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50Ijo0OTQ1MywidGFza3NXaXRoVGltZSI6NTZ9fV0=", "base64"));
  res.end();

  return __filename;
};
