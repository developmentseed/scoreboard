var path = require("path");

/**
 * GET /api/v2/data/challenge/29777
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:00 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=7.9999990703072e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=AQtTJNLF4e96k0uSM1xyN6YbbFZ6sNnfi97dBxCr0xMKg0h2byE9hqIhY4%2B2SccPF5LwyDLCtPpDAY6I%2BdctLNhDLOO9CfBRhAnkS7rCRNIJT44ZC49wEshXH6XfdQkDSug%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e71e4ed941c5-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5Nzc3LCJuYW1lIjoiQWRkIGRpcmVjdGlvbiB0byB0cmFmZmljIHNpZ25hbCAtIEdyZW5vYmxlIiwiYWN0aW9ucyI6eyJ0b3RhbCI6NDAyLCJhdmFpbGFibGUiOjQwMCwiZml4ZWQiOjEsImZhbHNlUG9zaXRpdmUiOjAsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MCwidG9vSGFyZCI6MSwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6MTEzMDY3LCJ0YXNrc1dpdGhUaW1lIjoyfX1d", "base64"));
  res.end();

  return __filename;
};
