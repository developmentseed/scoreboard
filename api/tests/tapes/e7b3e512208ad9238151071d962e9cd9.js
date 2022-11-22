var path = require("path");

/**
 * GET /api/v2/data/challenge/29804
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:09:59 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=6.9999987317715e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=3HI6BUqy7YHD2ByukvcePghBu7RyIPrEVPZXZuwlMT8Hn7%2BMS6a09WxbxeD%2B3KcIkLluBkyFfS50m8cGE6Kxgv%2FgLy7gQrIHd8VTyhMO8vMJ8AfDOxGJrB7uEjzsgerma1I%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e718fd5011c1-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5ODA0LCJuYW1lIjoiQWRkIFdpa2lkYXRhIElEIHRvIFRoZW1lIFBhcmtzIiwiYWN0aW9ucyI6eyJ0b3RhbCI6NTAwLCJhdmFpbGFibGUiOjE1OSwiZml4ZWQiOjc3LCJmYWxzZVBvc2l0aXZlIjoyMDQsInNraXBwZWQiOjUsImRlbGV0ZWQiOjEsImFscmVhZHlGaXhlZCI6MCwidG9vSGFyZCI6MSwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjU0LCJhdmdUaW1lU3BlbnQiOjIwMzgyNSwidGFza3NXaXRoVGltZSI6MjY3fX1d", "base64"));
  res.end();

  return __filename;
};
