var path = require("path");

/**
 * GET /api/v2/data/challenge/29031
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:24 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=7.0000005507609e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=0DANDwdGdxtkapT4PgMy1oonu%2BNImPytRNv1%2FXXgecme5ZsWq1%2BZzIFIGr41sqdc56FcgG9138jexM%2Bv2hjcL3xTDAFGqfd3OQwGt%2BU7J7waMAnNXxReuWCeJ%2F5Tgon%2Bh24%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e7b1da3b0db9-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5MDMxLCJuYW1lIjoiQXVzdHJhbGlhIC0gUm9hZExpbmtDaGVjayIsImFjdGlvbnMiOnsidG90YWwiOjM2LCJhdmFpbGFibGUiOjAsImZpeGVkIjoyNiwiZmFsc2VQb3NpdGl2ZSI6NCwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjoyLCJ0b29IYXJkIjo0LCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjozNzYzNzUsInRhc2tzV2l0aFRpbWUiOjM2fX1d", "base64"));
  res.end();

  return __filename;
};
