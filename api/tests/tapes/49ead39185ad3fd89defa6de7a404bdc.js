var path = require("path");

/**
 * GET /api/v2/data/challenge/29615
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
  res.setHeader("server-timing", "cf-q-config;dur=5.9999983932357e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=J%2F1sMKR5b9tRiyxL36cs43n5XMfmoi29MJSr72%2Fvo6CDk%2BAPWrFtRk42ohFKwJogeVx2M8EmIH%2BfUwlx1G7dtX3yJyqBXGkK0CBE3nhas7l4V3fykLLdzttU8jE9SZmEMIk%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e74a1d770ffa-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5NjE1LCJuYW1lIjoiTmV3IFplYWxhbmQgLSBNb3RvcndheSBjb25uZWN0ZWQgZGlyZWN0bHkgLSBLZWVwUmlnaHQhIiwiYWN0aW9ucyI6eyJ0b3RhbCI6NywiYXZhaWxhYmxlIjowLCJmaXhlZCI6MCwiZmFsc2VQb3NpdGl2ZSI6Niwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjowLCJ0b29IYXJkIjoxLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjozNTQ3MiwidGFza3NXaXRoVGltZSI6N319XQ==", "base64"));
  res.end();

  return __filename;
};
