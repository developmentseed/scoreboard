var path = require("path");

/**
 * GET /api/v2/data/challenge/29645
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:05 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=7.0000005507609e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=X5WUVuIF%2BUyZu4MWIhcilShkA7UUtPaEcm%2BQ0%2BTNQQOidYNgfbrifKuHKfoldhl%2B4DtwrvxDVEpM2dJD8uL%2FrgKkYzp1smaTFmnwxIrxnRz77aN3cfsJ%2BvXUY0HMlkdrGTc%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e73baee80cf5-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5NjQ1LCJuYW1lIjoiQXVzdHJhbGlhIC0gU291dGggQVUgLSBNaXhlZCBsYXllciBpbnRlcnNlY3Rpb24gLSBLZWVwUmlnaHQhIiwiYWN0aW9ucyI6eyJ0b3RhbCI6NSwiYXZhaWxhYmxlIjowLCJmaXhlZCI6NCwiZmFsc2VQb3NpdGl2ZSI6MCwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjoxLCJ0b29IYXJkIjowLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjozNTI2MzYsInRhc2tzV2l0aFRpbWUiOjV9fV0=", "base64"));
  res.end();

  return __filename;
};
