var path = require("path");

/**
 * GET /api/v2/data/challenge/29705
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
  res.setHeader("server-timing", "cf-q-config;dur=6.0000002122251e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=RQEA%2BLladh6TKydQ9LuHrSYmRvmlqILOu5Yt%2FwlvYC3lwlZ%2BEWaacgF6QcRF07%2FmNaRe6o80dHny0D6t1doRS5uyS%2BPvE3EYiwR9a0MpUeXo%2B8RKwhQhVb4%2BWbBA5KZ3ipo%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e72a69c30db7-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5NzA1LCJuYW1lIjoiSW5jbHVzw6NvIGRlIE5vbWVzIGRlIFJ1YSBlbSBjaWRhZGVzIGRlIE1pbmFzIEdlcmFpcyAtIEJyYXNpbCBQYXJ0ZSAyIC8gSW5jbHVzw6NvIGRlIE5vbWVzIGRlIFJ1YSBlbSBjaWRhZGVzIGRlIE1pbmFzIEdlcmFpcyAtIEJyYXNpbCwgUGFydCAyLiIsImFjdGlvbnMiOnsidG90YWwiOjEwMDAsImF2YWlsYWJsZSI6MTAwMCwiZml4ZWQiOjAsImZhbHNlUG9zaXRpdmUiOjAsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MCwidG9vSGFyZCI6MCwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6MCwidGFza3NXaXRoVGltZSI6MH19XQ==", "base64"));
  res.end();

  return __filename;
};
