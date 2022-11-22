var path = require("path");

/**
 * GET /api/v2/data/challenge/29598
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
  res.setHeader("server-timing", "cf-q-config;dur=8.0000008892966e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=37aNg4Fs4PhnIDLW6SzC9QTrIg658MzBsBhS66qKktrxBaUX5tzHTNBiuNJ5paKkgXFK33g4EAoCuzvnF%2BVFZbeylLQR3wifSbKHUmIEwblzni85Zj%2Bu9vWBdWbKwFb%2BXvU%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e7513f490779-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5NTk4LCJuYW1lIjoiQXVzdHJhbGlhIC0gQUNUIC0gRmxvYXRpbmcgaXNsYW5kIC0gS2VlcFJpZ2h0ISIsImFjdGlvbnMiOnsidG90YWwiOjIsImF2YWlsYWJsZSI6MCwiZml4ZWQiOjAsImZhbHNlUG9zaXRpdmUiOjIsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MCwidG9vSGFyZCI6MCwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6MjY1NzUsInRhc2tzV2l0aFRpbWUiOjJ9fV0=", "base64"));
  res.end();

  return __filename;
};
