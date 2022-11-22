var path = require("path");

/**
 * GET /api/v2/data/challenge/29005
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
  res.setHeader("server-timing", "cf-q-config;dur=6.0000002122251e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=PMFlau9j92T0r0EB4DxsUJIr2yaHeqxmOltMDzZO0yPxyIqrbOxCZ1Yrob1YjnOEQYv446Gw5bTzxzhDMIdxMsXR9vlHy0PTuzxpIfkp16kcOgxjImu%2FjWprCx%2BaPQ8q2NM%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e7c1db4541aa-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5MDA1LCJuYW1lIjoiQXVzdHJhbGlhIC0gU2hhcnBBbmdsZUNoZWNrIiwiYWN0aW9ucyI6eyJ0b3RhbCI6MTIsImF2YWlsYWJsZSI6MCwiZml4ZWQiOjcsImZhbHNlUG9zaXRpdmUiOjEsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MiwidG9vSGFyZCI6MiwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6NDAzMTMwLCJ0YXNrc1dpdGhUaW1lIjoxMn19XQ==", "base64"));
  res.end();

  return __filename;
};
