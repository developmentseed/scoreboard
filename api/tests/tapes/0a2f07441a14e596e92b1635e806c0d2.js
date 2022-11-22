var path = require("path");

/**
 * GET /api/v2/data/challenge/29193
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:16 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=6.0000002122251e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=sML1LH5ESfkytLi3jBlY3hmuAQOKY0Yzm0NhWZIBMFhBLdjD%2F%2BTwiCqxe0CRrkUbnTGnaQ7Ypo5IoGptQCzsqLCRxIAkFHk%2Fr9df9RtgntZgQD2IQh9GsukGTrgQAUmA36Q%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e782fa8341f7-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5MTkzLCJuYW1lIjoiQ2hhZCBEaXNjb25uZWN0ZWQgU2V0dGxlbWVudHMiLCJhY3Rpb25zIjp7InRvdGFsIjo4MzMxLCJhdmFpbGFibGUiOjgzMzAsImZpeGVkIjowLCJmYWxzZVBvc2l0aXZlIjoxLCJza2lwcGVkIjowLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjAsInRvb0hhcmQiOjAsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjE2MzY2NSwidGFza3NXaXRoVGltZSI6MX19XQ==", "base64"));
  res.end();

  return __filename;
};
