var path = require("path");

/**
 * GET /api/v2/data/challenge/29054
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:23 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=8.0000008892966e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=SGwD9R9kr%2BZ5eb1onytMlYnseQbP9xzSchQLf%2F%2BB3t3Aux9rLob64faQwwOw9Z8TxLq80IEFEagZjesMLj%2FBmNNQbMA3qeA%2FRh2Ilqbw%2FvAZLddzbcauw8rC6IacaU7%2FngE%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e7ab9a1411b4-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5MDU0LCJuYW1lIjoiTWFyeWxhbmQgTm8gTGVmdCBUdXJuIFJlc3RyaWN0aW9ucyIsImFjdGlvbnMiOnsidG90YWwiOjE1MTYsImF2YWlsYWJsZSI6MTUwNiwiZml4ZWQiOjMsImZhbHNlUG9zaXRpdmUiOjEsInNraXBwZWQiOjEsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MywidG9vSGFyZCI6MiwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6MjgyMTE5LCJ0YXNrc1dpdGhUaW1lIjoxMH19XQ==", "base64"));
  res.end();

  return __filename;
};
