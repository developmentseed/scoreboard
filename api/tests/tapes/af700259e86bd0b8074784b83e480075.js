var path = require("path");

/**
 * GET /api/v2/data/challenge/29017
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
  res.setHeader("server-timing", "cf-q-config;dur=5.9999983932357e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=E5W%2BSkiSF2mJVfODE1UqZCSVGuPyITxOh%2Fss53isr5k7jy9Onjd46VNmf6rb5ILIgG4ZjIo70x1CXMlvY2g9Tngw5TOHKGgAFAGWTG%2FzkicvteP3jEd34LX%2BzO9VNpMh1eo%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e7bb4de40da8-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5MDE3LCJuYW1lIjoiQXVzdHJhbGlhIC0gQXBwcm94aW1hdGVXYXlDaGVjayIsImFjdGlvbnMiOnsidG90YWwiOjI0LCJhdmFpbGFibGUiOjAsImZpeGVkIjoyMSwiZmFsc2VQb3NpdGl2ZSI6MSwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjowLCJ0b29IYXJkIjoyLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50Ijo2NjA4MjMsInRhc2tzV2l0aFRpbWUiOjI0fX1d", "base64"));
  res.end();

  return __filename;
};
