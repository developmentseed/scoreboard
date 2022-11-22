var path = require("path");

/**
 * GET /api/v2/data/challenge/29747
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:01 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=7.9999990703072e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=vaT83b2EH1EHq5a5aeHKpFseSiSfE%2Bys8lQ3ASukl4KywW2vjc2gaa%2FJfRJXy%2BJF1pQ7eh4VWifutkTL094gzMmKYEHyEkuvj8hvHnsxtnwWKLJi6EXh0uH%2B52VZ%2BBnKrqU%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e7230d560cf6-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5NzQ3LCJuYW1lIjoiTXVlbnplciwgd28gc2VpdCBpaHIgZ2VibGllYmVuIiwiYWN0aW9ucyI6eyJ0b3RhbCI6MTU2NzgsImF2YWlsYWJsZSI6MTU2NjYsImZpeGVkIjoxLCJmYWxzZVBvc2l0aXZlIjoxMSwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjowLCJ0b29IYXJkIjowLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50Ijo5MDM3LCJ0YXNrc1dpdGhUaW1lIjoxMn19XQ==", "base64"));
  res.end();

  return __filename;
};
