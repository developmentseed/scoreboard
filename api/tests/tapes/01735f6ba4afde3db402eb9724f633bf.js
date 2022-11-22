var path = require("path");

/**
 * GET /api/v2/data/challenge/29617
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:07 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=7.0000005507609e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=9xR3aEGpQToKSrW0rOpVUuZd%2BjitRbtKSIhjGujJI4Ttea7bdUo3a23ne58xp%2Bq%2Fsrb83dFqyl2vy6O08M0EjNcJGwK3NZ0BJfIPNaRYK%2F7iHIPnVCzKBhO06FSv%2FAnpIAo%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e749c8cb7397-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5NjE3LCJuYW1lIjoiTmV3IFplYWxhbmQgLSBXcm9uZyBkaXJlY3Rpb24gb2YgdG8gbWVtYmVyIC0gS2VlcFJpZ2h0ISIsImFjdGlvbnMiOnsidG90YWwiOjEsImF2YWlsYWJsZSI6MCwiZml4ZWQiOjEsImZhbHNlUG9zaXRpdmUiOjAsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MCwidG9vSGFyZCI6MCwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6NDM1OTIsInRhc2tzV2l0aFRpbWUiOjF9fV0=", "base64"));
  res.end();

  return __filename;
};
