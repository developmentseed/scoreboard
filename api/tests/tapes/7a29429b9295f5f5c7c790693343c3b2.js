var path = require("path");

/**
 * GET /api/v2/data/challenge/29600
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
  res.setHeader("server-timing", "cf-q-config;dur=6.0000002122251e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=5GEmWn24Fkmjw1upHEksgOomCXNUULPc8DcVNJP93vhYJlVLnFhLohbWgld9%2BHkFkV6ZIcxzHakqQO1Vhbuzc3m0Unmf8HpfbVsZWfEPaU%2BYU%2F62C4k7oyxCSdBhd5Khpio%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e750bc1173c7-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5NjAwLCJuYW1lIjoiQXVzdHJhbGlhIC0gQUNUIC0gTWl4ZWQgTGF5ZXIgSW50ZXJzZWN0aW9uIC0gS2VlcFJpZ2h0ISIsImFjdGlvbnMiOnsidG90YWwiOjMsImF2YWlsYWJsZSI6MCwiZml4ZWQiOjAsImZhbHNlUG9zaXRpdmUiOjIsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MSwidG9vSGFyZCI6MCwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6MTg3ODE1LCJ0YXNrc1dpdGhUaW1lIjozfX1d", "base64"));
  res.end();

  return __filename;
};
