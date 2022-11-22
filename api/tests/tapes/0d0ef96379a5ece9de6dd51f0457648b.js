var path = require("path");

/**
 * GET /api/v2/data/challenge/29620
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
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=fjorF724k3EmsZKbrQa7%2BAEc9PuctPMTYuUr7CVfvez3Xrj1zdaVkEujG29Rwl52H6Os4%2F6tvDDlmvhtJuzWJXVrn6C7M25LKTXn9lOhksg9jzMG9fIKNC7k7spJaGqt6rs%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e747b80d16a9-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5NjIwLCJuYW1lIjoiQXVzdHJhbGlhIC0gTm9ydGhlcm4gdGVycml0b3J5IC0gQWxtb3N0IGp1bmN0aW9uIEtlZXBSaWdodCEgIiwiYWN0aW9ucyI6eyJ0b3RhbCI6OTIsImF2YWlsYWJsZSI6MCwiZml4ZWQiOjQsImZhbHNlUG9zaXRpdmUiOjgxLCJza2lwcGVkIjowLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjAsInRvb0hhcmQiOjcsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjkyNjcyLCJ0YXNrc1dpdGhUaW1lIjo5Mn19XQ==", "base64"));
  res.end();

  return __filename;
};
