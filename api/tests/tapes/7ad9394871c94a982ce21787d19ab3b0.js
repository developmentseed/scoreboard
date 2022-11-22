var path = require("path");

/**
 * GET /api/v2/data/challenge/28872
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:36 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=2.9999991966179e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=xieReMNN1CH8oYPXp0goV4C1%2BHhwPOGVYVP6iWxJnGc4se0GgjLmZVdvUb4L2%2Bxq48A1%2B8DGm7EcIx2%2FrBCHUhuhINwrNG9MbGidhuIYifbw7Bx2IGoscTJwyI42ZeEbfr0%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e7ffa83d41c5-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI4ODcyLCJuYW1lIjoiUm9tYW5pYSAtIENvbm5lY3Rpdml0eSBDaGVjayIsImFjdGlvbnMiOnsidG90YWwiOjIzLCJhdmFpbGFibGUiOjE0LCJmaXhlZCI6MywiZmFsc2VQb3NpdGl2ZSI6MCwic2tpcHBlZCI6NSwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjowLCJ0b29IYXJkIjoxLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjoxNzAwNjksInRhc2tzV2l0aFRpbWUiOjl9fV0=", "base64"));
  res.end();

  return __filename;
};
