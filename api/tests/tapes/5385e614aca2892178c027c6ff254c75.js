var path = require("path");

/**
 * GET /api/v2/data/challenge/29716
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:02 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=6.0000002122251e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=rb1jip3rZJbRJKWnJNJ%2BZSW3X8hiCut7ZtPDFWYNYXdSZ3KL0ONlr6JrQr2L0Tnt1c9y4iq9mY%2Bkxy7XbDQsXhou3px%2BOPTxkqp2umglsg65s%2BP2GYQilibVvQawlSlem%2F0%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e728590b5fc4-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5NzE2LCJuYW1lIjoiYnVpbGRpbmc9KiBuYSBwdW5rdGFjaCB3IFBvbHNjZSAodjMpIiwiYWN0aW9ucyI6eyJ0b3RhbCI6ODEzLCJhdmFpbGFibGUiOjY3NCwiZml4ZWQiOjEzNSwiZmFsc2VQb3NpdGl2ZSI6MCwic2tpcHBlZCI6MSwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjowLCJ0b29IYXJkIjozLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50Ijo1NTgzNiwidGFza3NXaXRoVGltZSI6MTM5fX1d", "base64"));
  res.end();

  return __filename;
};
