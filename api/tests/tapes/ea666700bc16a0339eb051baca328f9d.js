var path = require("path");

/**
 * GET /api/v2/data/challenge/29669
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:03 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=6.0000002122251e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=QXEZViV5weAn7QQbMYCu%2FGhc%2FyKhGsR2kdeq%2FYcdRkCg1FYq2BbMvsBXTPJ%2FwrUXQpFRnBZcpvkppWX8P5jI2X1uDID0qLwy98cDcXJFR94KzkgpMpvWoAENYY0iy7BwP3E%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e72f7a660da7-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5NjY5LCJuYW1lIjoiQXVzdHJhbGlhIC0gV2VzdGVybiBBVSAtIEhpZ2h3YXkgd2F0ZXJ3YXkgLSBLZWVwUmlnaHQhIiwiYWN0aW9ucyI6eyJ0b3RhbCI6MjkxMiwiYXZhaWxhYmxlIjoyOTA5LCJmaXhlZCI6MCwiZmFsc2VQb3NpdGl2ZSI6MSwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjowLCJ0b29IYXJkIjoyLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjozNDI5OCwidGFza3NXaXRoVGltZSI6M319XQ==", "base64"));
  res.end();

  return __filename;
};
