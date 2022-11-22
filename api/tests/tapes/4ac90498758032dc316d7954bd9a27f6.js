var path = require("path");

/**
 * GET /api/v2/data/challenge/29163
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:17 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=8.0000008892966e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=hgS7xVMdeezoduxurhtK6n9NIeHMXy3WXfkmO94lFEf5j2te5CKLcOJiokz9YZkuHkzPeoT85zuiWa07d8kTp3lzWdZ2k1UwgfamZbYAS27v1IOCQ2EMVAlrp47LVXHrqMA%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e785aae91023-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5MTYzLCJuYW1lIjoiVmVuZXp1ZWxhIC0gU25ha2VSb2FkQ2hlY2siLCJhY3Rpb25zIjp7InRvdGFsIjo3NiwiYXZhaWxhYmxlIjo3NiwiZml4ZWQiOjAsImZhbHNlUG9zaXRpdmUiOjAsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MCwidG9vSGFyZCI6MCwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6MCwidGFza3NXaXRoVGltZSI6MH19XQ==", "base64"));
  res.end();

  return __filename;
};
