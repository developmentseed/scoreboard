var path = require("path");

/**
 * GET /api/v2/data/challenge/29048
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
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=R8eDY%2Fvtw%2F%2BL6v3CgM6Xp3ZeZbtnhgqQI4KGBw1PwNyUaydXkFTtS%2FHuDLOcIMIBwCPfjvKuI8VsGQYcsrJmEkSyDHhwEdYkiSP1bDZOXXdklR7ocdLVqyBGD%2Bq45cvWbCk%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e7ae2afa076e-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5MDQ4LCJuYW1lIjoiTWFyeWxhbmQgSGlnaHdheSBJbnRlcmNoYW5nZSBMYW5kc2NhcGVzIiwiYWN0aW9ucyI6eyJ0b3RhbCI6Njg1LCJhdmFpbGFibGUiOjY3OSwiZml4ZWQiOjMsImZhbHNlUG9zaXRpdmUiOjAsInNraXBwZWQiOjIsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MSwidG9vSGFyZCI6MCwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6MzczODYxLCJ0YXNrc1dpdGhUaW1lIjo2fX1d", "base64"));
  res.end();

  return __filename;
};
