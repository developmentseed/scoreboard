var path = require("path");

/**
 * GET /api/v2/data/challenge/29558
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:09 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=6.0000002122251e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=72zPg7ItINTEg89PSBGBHQ5JVuejSFPcyfPHp%2Bk84mAdZ1jFomeKS2Wuef%2F%2FmhyUCnM9YSilRV5IkJlBefNmIxFzvhkvumIPmyaQLIFx8sfXfhz%2Bhuoeqg%2Fn6QIBcUpU4Gc%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e7538f3241f7-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5NTU4LCJuYW1lIjoiQWRkIGEgYnJhbmQgdGFnIHRvIGV2ZXJ5IERldXRzY2hlIFBvc3QgbWFpbGJveCBpbiBOaWVkZXJzYWNoc2VuIiwiYWN0aW9ucyI6eyJ0b3RhbCI6NTQyOCwiYXZhaWxhYmxlIjo1MTE5LCJmaXhlZCI6MzA4LCJmYWxzZVBvc2l0aXZlIjowLCJza2lwcGVkIjowLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjEsInRvb0hhcmQiOjAsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjQwMzk4MSwidGFza3NXaXRoVGltZSI6MzA5fX1d", "base64"));
  res.end();

  return __filename;
};
