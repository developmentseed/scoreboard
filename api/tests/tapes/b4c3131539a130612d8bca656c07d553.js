var path = require("path");

/**
 * GET /api/v2/data/challenge/29021
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:25 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=6.9999999823267e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=CbQm0O7Hsl70PURt8qZcHxU%2FH5y9El4VqHHEuwCjzaexx3cIeS3zFMO5ZTyI9INO6xln8vayCOfVPtIi4uJpAyggVdP71kAkwwVfUn5BLZuF8X5iSRCNl4So%2FU39gPBlE%2BI%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e7b89ac00cfc-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5MDIxLCJuYW1lIjoiQXVzdHJhbGlhIC0gU25ha2VSb2FkQ2hlY2siLCJhY3Rpb25zIjp7InRvdGFsIjoyMCwiYXZhaWxhYmxlIjowLCJmaXhlZCI6MTYsImZhbHNlUG9zaXRpdmUiOjQsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MCwidG9vSGFyZCI6MCwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6MTIwNjE0LCJ0YXNrc1dpdGhUaW1lIjoyMH19XQ==", "base64"));
  res.end();

  return __filename;
};
