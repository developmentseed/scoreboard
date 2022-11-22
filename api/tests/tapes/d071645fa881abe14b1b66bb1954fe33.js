var path = require("path");

/**
 * GET /api/v2/data/challenge/29347
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:12 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=8.0000008892966e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=bqAVfJBWPdMRViJY1%2BwIBiM4ZmcdmezbkiZt3kv6Itla3aZxIrJcjCx3%2FHxZ0iGCO4EXMcSgdPwB3otQhddggHYz6gWD9O0q8wAHIlf4787PMRyVY1cLwteP%2FxJZuvUJ0Wg%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e7686b180779-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5MzQ3LCJuYW1lIjoiUmVzdHJpw6fDtWVzIGRlIGNvbnZlcnPDo28gcHJvYmxlbcOhdGljYXMgbm8gQnJhc2lsIC0gUmlvIGRlIEphbmVpcm8gLyBCcmF6aWwgcHJvYmxlbWF0aWMgdHVybiByZXN0cmljdGlvbiIsImFjdGlvbnMiOnsidG90YWwiOjUwLCJhdmFpbGFibGUiOjAsImZpeGVkIjoyOCwiZmFsc2VQb3NpdGl2ZSI6MTgsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MCwidG9vSGFyZCI6NCwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6MzM3MDQ0LCJ0YXNrc1dpdGhUaW1lIjo1MH19XQ==", "base64"));
  res.end();

  return __filename;
};
