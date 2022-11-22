var path = require("path");

/**
 * GET /api/v2/data/challenge/29599
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:08 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=6.9999987317715e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=sQXjF166d3xXIChy9oV5B8ObJLbZqLyZzeZ6d61Vi7OeGfMig2%2FQIX%2Bww6bF3e6FGSgpNmXkpQANeFqO97afmMYE6VN%2FZhcjwTmdLHxHGbI3Ak2wwrXMM%2F4QD%2Bq%2BdsLpxiA%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e750ca610d73-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5NTk5LCJuYW1lIjoiQXVzdHJhbGlhIC0gQUNUIC0gSGlnaHdheSB3YXRlcndheSAtIEtlZXBSaWdodCEiLCJhY3Rpb25zIjp7InRvdGFsIjoxNCwiYXZhaWxhYmxlIjowLCJmaXhlZCI6OSwiZmFsc2VQb3NpdGl2ZSI6MSwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjoxLCJ0b29IYXJkIjozLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjoyMDU2ODYsInRhc2tzV2l0aFRpbWUiOjE0fX1d", "base64"));
  res.end();

  return __filename;
};
