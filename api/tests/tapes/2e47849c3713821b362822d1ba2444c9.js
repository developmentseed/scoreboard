var path = require("path");

/**
 * GET /api/v2/data/challenge/30039
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
  res.setHeader("server-timing", "cf-q-config;dur=4.9999998736894e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ZUr2%2BM%2FBZAFlmxpExNAriEDJTLe7ZVOmyACG%2BidE0mrIWdu5ROb5X%2BoRanT4APkvYVbt4S0SpNpSmt%2BmnHNxXjmFt8ZiODI2Fmc4JlI3tGvwEkmI8rATMD7a5TLClwJXP%2B4%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e7055f7a41b8-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjMwMDM5LCJuYW1lIjoiQWRkIFdpa2lkYXRhIHRvIHZpbGxhZ2VzIGluIFJoaW5lbGFuZC1QYWxhdGluYXRlLCBHZXJtYW55IiwiYWN0aW9ucyI6eyJ0b3RhbCI6Njk3LCJhdmFpbGFibGUiOjY5NSwiZml4ZWQiOjEsImZhbHNlUG9zaXRpdmUiOjEsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MCwidG9vSGFyZCI6MCwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6MTA5ODAwLCJ0YXNrc1dpdGhUaW1lIjoyfX1d", "base64"));
  res.end();

  return __filename;
};
