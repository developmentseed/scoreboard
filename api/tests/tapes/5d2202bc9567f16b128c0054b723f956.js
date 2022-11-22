var path = require("path");

/**
 * GET /api/v2/data/challenge/30037
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
  res.setHeader("server-timing", "cf-q-config;dur=7.0000005507609e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=kqnGGB7Ui9ieF9eA%2BW3hVbQzk%2FqnDK2zn%2FIEPLvFysIMFV682A5ifW7GXh%2FSJyxER1BzMo4gkPnl8%2B37Dro4ldlLh%2BHTVyytV2ZcAgIYd5VxHII1rwFpVn5WoF6prTK6Bp4%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e705682241f7-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjMwMDM3LCJuYW1lIjoiQWRkIFdpa2lkYXRhIHRvIHZpbGxhZ2VzIGluIFNhYXJsYW5kLCBHZXJtYW55IiwiYWN0aW9ucyI6eyJ0b3RhbCI6MTksImF2YWlsYWJsZSI6MCwiZml4ZWQiOjMsImZhbHNlUG9zaXRpdmUiOjE1LCJza2lwcGVkIjowLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjAsInRvb0hhcmQiOjEsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjg0OTMyLCJ0YXNrc1dpdGhUaW1lIjoxOX19XQ==", "base64"));
  res.end();

  return __filename;
};
