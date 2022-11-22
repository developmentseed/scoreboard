var path = require("path");

/**
 * GET /api/v2/data/challenge/29711
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:02 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=4.9999998736894e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=R4ekRAo3L7%2BX2zJG23t59JQYIdATZgaVgIKaub7UUI69zMd1SFbxLMxoK%2Bk0Q5PU3NuP2GnDnhqtVddxeffyZvKJFUkI1LDgDydHTOSaIaxxKenBD1aQKlmvA7QJs%2FlBglA%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e72a5b2111c1-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5NzExLCJuYW1lIjoiSW1wb3J0IG9yIG1lcmdlIEdpRmkgc2hvcHMgLSBGcmFuY2UgI2Nvb3AiLCJhY3Rpb25zIjp7InRvdGFsIjo1MzUsImF2YWlsYWJsZSI6NTIzLCJmaXhlZCI6MTIsImZhbHNlUG9zaXRpdmUiOjAsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MCwidG9vSGFyZCI6MCwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6NjE5NjAwLCJ0YXNrc1dpdGhUaW1lIjoxMn19XQ==", "base64"));
  res.end();

  return __filename;
};
