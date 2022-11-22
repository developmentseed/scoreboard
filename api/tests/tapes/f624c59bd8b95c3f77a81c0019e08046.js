var path = require("path");

/**
 * GET /api/v2/data/challenge/29647
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
  res.setHeader("server-timing", "cf-q-config;dur=3.9999995351536e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ZulqURZ%2BoEmX8PBH%2BOPO7naFPa636OuenPpIhyCpNkeyJ3poCit3lFvJ%2FQFgfnnFddewhv%2BgMF8zVZmX%2Fu5frl9r1yYAOpIHojiArc%2FgLf4nlLZfTllGcLbllQQhX131afg%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e73b78475f9b-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5NjQ3LCJuYW1lIjoiQXVzdHJhbGlhIC0gVGFzbWFuaWEgLSBBbG1vc3QganVuY3Rpb24gLSBLZWVwUmlnaHQhIiwiYWN0aW9ucyI6eyJ0b3RhbCI6NDQsImF2YWlsYWJsZSI6MCwiZml4ZWQiOjksImZhbHNlUG9zaXRpdmUiOjI3LCJza2lwcGVkIjowLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjUsInRvb0hhcmQiOjMsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjExMzc2MywidGFza3NXaXRoVGltZSI6NDR9fV0=", "base64"));
  res.end();

  return __filename;
};
