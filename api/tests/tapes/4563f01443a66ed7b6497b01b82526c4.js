var path = require("path");

/**
 * GET /api/v2/data/challenge/29746
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:01 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=6.0000002122251e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=msBRVdm4tb1%2BzVwMr6I3exkTFtQjDihoLfan1sspR1%2BZ4doPWjpPdgyPRlVZKppL3MDjPY6LrcK0b%2BEMmaHpQzV2F%2B5WyqTT5bSqgRfKne2l6pnHm1%2FVB94ojZ04kMM84bs%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e723192f5fc5-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5NzQ2LCJuYW1lIjoiSW1wb3J0IG9yIG1lcmdlIEFjdGlvbiBzaG9wcyAtIEV1cm9wZSAjY29vcCIsImFjdGlvbnMiOnsidG90YWwiOjIxNTgsImF2YWlsYWJsZSI6MjE1NiwiZml4ZWQiOjEsImZhbHNlUG9zaXRpdmUiOjEsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MCwidG9vSGFyZCI6MCwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6MTkzNTM1LCJ0YXNrc1dpdGhUaW1lIjoyfX1d", "base64"));
  res.end();

  return __filename;
};
