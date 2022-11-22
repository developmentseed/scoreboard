var path = require("path");

/**
 * GET /api/v2/data/challenge/29007
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:26 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=4.9999998736894e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=FstGrydqCbYTLVgXW2u45R76cf1nQ%2BTcc6N%2F%2BUBMGYi29WzVrDOw%2Fc2PA3g5epaQC2wp2Lkq0nI4FDysuz6GTjA0JXFrISw9CzRxAOk7ghuz71eOoqDGMnHJP5NUcYd5%2B3Q%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e7c1de9f5fdc-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5MDA3LCJuYW1lIjoiQXVzdHJhbGlhIC0gUm91bmRhYm91dENvbm5lY3RvckNoZWNrIiwiYWN0aW9ucyI6eyJ0b3RhbCI6MzQzLCJhdmFpbGFibGUiOjAsImZpeGVkIjoyNzgsImZhbHNlUG9zaXRpdmUiOjIzLCJza2lwcGVkIjowLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjMwLCJ0b29IYXJkIjoxMiwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6MzQwOTMwLCJ0YXNrc1dpdGhUaW1lIjozNDJ9fV0=", "base64"));
  res.end();

  return __filename;
};
