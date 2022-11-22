var path = require("path");

/**
 * GET /api/v2/data/challenge/29587
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:09 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=7.0000005507609e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=rTwjENbL%2BI7JPd0pBrklDmRRuYmVaVULv9kDUncs5m6Tpk1BFx%2FxYmuiQnbz%2FI%2F%2BgDex0joPsvTfWLGWLpJTbrz3MZBB1xWFqZuiy1D9e7d5eI2pL8dfOJQXX5Xy4%2BBHMc0%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e7530e8c5fc5-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5NTg3LCJuYW1lIjoiQ2hhbmdlIHN3aW1taW5nIHBvb2wgbm9kZXMgdG8gYXJlYXMgLSBTcGFpbiIsImFjdGlvbnMiOnsidG90YWwiOjcyOCwiYXZhaWxhYmxlIjo2NDEsImZpeGVkIjo3MSwiZmFsc2VQb3NpdGl2ZSI6OSwic2tpcHBlZCI6MiwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjo0LCJ0b29IYXJkIjoxLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjoyMjkwNjYsInRhc2tzV2l0aFRpbWUiOjg3fX1d", "base64"));
  res.end();

  return __filename;
};
