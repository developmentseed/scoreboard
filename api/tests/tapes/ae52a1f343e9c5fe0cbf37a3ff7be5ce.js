var path = require("path");

/**
 * GET /api/v2/data/challenge/29016
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:25 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=6.0000002122251e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=8WmO11CMBK1kqhAz1Wc5ARBZ8r6oYDo1HQYksZC8D3VNnlkbUGt8a1vDYaKTY563Jh%2BauFw9eM25rJJi3H1Uoz8Kfi7DBzs7tYiuaEv%2Fm2CvP3fGyIilAF4Co0FXxS8ClrA%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e7bb9c000d95-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5MDE2LCJuYW1lIjoiQXVzdHJhbGlhIC0gVW51c3VhbExheWVyVGFnc0NoZWNrIiwiYWN0aW9ucyI6eyJ0b3RhbCI6MjQzNywiYXZhaWxhYmxlIjoyNDE3LCJmaXhlZCI6NywiZmFsc2VQb3NpdGl2ZSI6MCwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjowLCJ0b29IYXJkIjoxMywiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6MTA3MTgsInRhc2tzV2l0aFRpbWUiOjIwfX1d", "base64"));
  res.end();

  return __filename;
};
