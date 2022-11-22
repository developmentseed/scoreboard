var path = require("path");

/**
 * GET /api/v2/data/challenge/29635
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
  res.setHeader("server-timing", "cf-q-config;dur=6.0000002122251e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=N0ZQK7vWkCF3l99Q4VFrrisAGivTgEQAa4OPewUCTAreWwa%2FenovnOOaWXIDao3aOIWpPWX6L5cAFJIGN%2F0286O0Rq%2B6Yhus%2B52J0ujBJkgdRfYMUkeZ%2FcRa66npvpU49KE%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e7409e4e0c51-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5NjM1LCJuYW1lIjoiQXVzdHJhbGlhIC0gTlNXIC0gV3JvbmcgZGlyZWN0aW9uIC0gS2VlcFJpZ2h0ISIsImFjdGlvbnMiOnsidG90YWwiOjYsImF2YWlsYWJsZSI6MCwiZml4ZWQiOjEsImZhbHNlUG9zaXRpdmUiOjAsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6NSwidG9vSGFyZCI6MCwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6MTU4OTg4LCJ0YXNrc1dpdGhUaW1lIjo2fX1d", "base64"));
  res.end();

  return __filename;
};
