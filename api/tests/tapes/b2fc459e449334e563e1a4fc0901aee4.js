var path = require("path");

/**
 * GET /api/v2/data/challenge/29602
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
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=y2w3pWVXZo3Wv%2Bz%2ByDc6tifhzGkBBTnmkKod%2FzyNxPymndYa53%2BB2OD%2FRf%2Fdm4C51HcyjCYNzHXWP8hrQ63mtbjh0kNLcrlXx8lzldM1c8%2BB7mOsU0Y2YCIZPO%2BvlWWiWnY%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e74eef6e0da8-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5NjAyLCJuYW1lIjoiQ2hhbmdlIHN3aW1taW5nIHBvb2wgbm9kZXMgdG8gYXJlYXMgLSBTb3V0aCBBZnJpY2EiLCJhY3Rpb25zIjp7InRvdGFsIjo0ODYsImF2YWlsYWJsZSI6NDMzLCJmaXhlZCI6NDQsImZhbHNlUG9zaXRpdmUiOjMsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MiwidG9vSGFyZCI6NCwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6OTg4ODEsInRhc2tzV2l0aFRpbWUiOjUzfX1d", "base64"));
  res.end();

  return __filename;
};
