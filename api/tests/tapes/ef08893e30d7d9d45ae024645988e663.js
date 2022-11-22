var path = require("path");

/**
 * GET /api/v2/data/challenge/29018
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
  res.setHeader("server-timing", "cf-q-config;dur=3.9999995351536e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=mywr7vlQz5OtvBsWRMG1QSgqa7dnoGb8S7hlItffQ8woAvZo95T2Qf00oU2bEUF%2FqOUXjbcxpSEldlKOBdNZYDc6D3RGyt3GgBhc%2BVJ03sgn9425bjfCa8%2BivzLJBubglOk%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e7b8a8af5fa1-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5MDE4LCJuYW1lIjoiQXVzdHJhbGlhIC0gSGlnaHdheUludGVyc2VjdGlvbkNoZWNrIiwiYWN0aW9ucyI6eyJ0b3RhbCI6OSwiYXZhaWxhYmxlIjowLCJmaXhlZCI6NSwiZmFsc2VQb3NpdGl2ZSI6MSwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjowLCJ0b29IYXJkIjozLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjoxMDQyMjQsInRhc2tzV2l0aFRpbWUiOjl9fV0=", "base64"));
  res.end();

  return __filename;
};
