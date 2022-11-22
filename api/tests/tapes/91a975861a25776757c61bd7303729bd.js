var path = require("path");

/**
 * GET /api/v2/data/challenge/29651
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:05 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=6.9999987317715e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=q8wpWpZdXJzJQ3OmMpmZKYtEQs%2F7%2FV3BUoQE0AfblI9TuwYiisecaA2VFW8J1wi17%2F8wGE%2FDZy%2FuD6uFX2XrGPq%2FwbALdzAM28%2Fh1iHRHWQ8JFvI5%2Fq7MjKSYLayDEGcwzk%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e7396dd75fc4-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5NjUxLCJuYW1lIjoiQXVzdHJhbGlhIC0gVmljdG9yaWEgLSBBbG1vc3QganVuY3Rpb24gLSBLZWVwUmlnaHQhIiwiYWN0aW9ucyI6eyJ0b3RhbCI6OTk1LCJhdmFpbGFibGUiOjk5MCwiZml4ZWQiOjUsImZhbHNlUG9zaXRpdmUiOjAsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MCwidG9vSGFyZCI6MCwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6MTgzMjEyLCJ0YXNrc1dpdGhUaW1lIjo1fX1d", "base64"));
  res.end();

  return __filename;
};
