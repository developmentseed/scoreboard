var path = require("path");

/**
 * GET /api/v2/data/challenge/30043
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:09:56 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=6.9999987317715e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=cOoTrhenkaXSk9KhWaMzpEAF%2Bzerk9%2B9hWrkaKBTYADIxvWWZQi9iVnqPskrzvpIiKoBC%2FqlLgEBkU80LRv1wq4if%2F0hnRrmhsClpZhBS13vLwBmt8o7E5uqqY72QpVA7nY%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e7030ec111c2-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjMwMDQzLCJuYW1lIjoiQnVkeW5raSBkd29yY8OzdyBrb2xlam93eWNoIHcgUG9sc2NlIiwiYWN0aW9ucyI6eyJ0b3RhbCI6OTUsImF2YWlsYWJsZSI6MCwiZml4ZWQiOjg3LCJmYWxzZVBvc2l0aXZlIjo3LCJza2lwcGVkIjowLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjEsInRvb0hhcmQiOjAsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjIwODQ1LCJ0YXNrc1dpdGhUaW1lIjo5NX19XQ==", "base64"));
  res.end();

  return __filename;
};
