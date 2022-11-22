var path = require("path");

/**
 * GET /api/v2/data/challenge/29624
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:07 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=6.9999999823267e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2Fbzs1BCzEkl157U6P2Lp74ysOcyCoC7JF7Hdu0sNS07MCIolK6ZxMthJLhAKoOAnMwaByeUloEXS5MpWrNrCv%2BadkE6rUcgUpW14NzT1ml3VtcXUe3l65UBxafxIXJyDolo%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e7457c6b0cfc-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5NjI0LCJuYW1lIjoiQXVzdHJhbGlhIC0gTlNXLSBCcmlkZ2UvdHVubmVsIHRhZ3MgLSBLZWVwUmlnaHQhIiwiYWN0aW9ucyI6eyJ0b3RhbCI6OSwiYXZhaWxhYmxlIjowLCJmaXhlZCI6MCwiZmFsc2VQb3NpdGl2ZSI6NSwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjoyLCJ0b29IYXJkIjoyLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjoxMjU0OTUsInRhc2tzV2l0aFRpbWUiOjl9fV0=", "base64"));
  res.end();

  return __filename;
};
