var path = require("path");

/**
 * GET /api/v2/data/challenge/29008
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
  res.setHeader("server-timing", "cf-q-config;dur=8.0000008892966e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=9toqVh5enkglp1J2HEsgbjqCNJhy%2F5YXTHioYhf8ueVkBVwAGIKkjukOJAfQkXg5m58AEb4WYxMl6IfbFysLL4EZuz5Hw%2BAT3KlLbRarDEbll0j1i5VqXHyOHAZYGp%2BfmJE%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e7befe2d11a2-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5MDA4LCJuYW1lIjoiQXVzdHJhbGlhIC0gUm91bmRhYm91dEhpZ2h3YXlUYWdDaGVjayIsImFjdGlvbnMiOnsidG90YWwiOjI5LCJhdmFpbGFibGUiOjAsImZpeGVkIjoyNywiZmFsc2VQb3NpdGl2ZSI6MCwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjoyLCJ0b29IYXJkIjowLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjozNDcxNjEsInRhc2tzV2l0aFRpbWUiOjI5fX1d", "base64"));
  res.end();

  return __filename;
};
