var path = require("path");

/**
 * GET /api/v2/data/challenge/29627
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:06 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=8.0000008892966e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=2twsj%2BnHqWzX%2BTterMGeCoWv88pL4hLKGX0EQTEKDY%2B2Yqpuxyn%2FZOtB9BFXZu8NIBjYeEOWCyFMPO9z2E%2FIRTmSmlPYc7Ii7IukxybDoe5E%2F1IVohWRQyYhQgjZgVvsQ3s%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e744ce4441f7-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5NjI3LCJuYW1lIjoiQXVzdHJhbGlhIC0gTlNXIC0gSGlnaHdheSBoaWdod2F5IC0gS2VlcFJpZ2h0ISAiLCJhY3Rpb25zIjp7InRvdGFsIjoxNzEsImF2YWlsYWJsZSI6MCwiZml4ZWQiOjEzLCJmYWxzZVBvc2l0aXZlIjo1LCJza2lwcGVkIjowLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjE0NCwidG9vSGFyZCI6OSwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6NDE5MzcsInRhc2tzV2l0aFRpbWUiOjE3MX19XQ==", "base64"));
  res.end();

  return __filename;
};
