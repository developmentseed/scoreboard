var path = require("path");

/**
 * GET /api/v2/data/challenge/29626
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
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=KWkHYvzEimzHtRkDEeEQW6TMAhQ51OZ%2BSyk6z4kAFNMofKpCorGD70k9JuSrWSE9thUIu7awlz9B13iK8nhVSnyzI%2BLi8WxxgzEb0YlHJM%2BABdqW378Rpwc0uldAEny36%2BY%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e7452cd90d9f-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5NjI2LCJuYW1lIjoiQXVzdHJhbGlhIC0gTlNXIC0gRmxvYXRpbmcgaXNsYW5kcyAtIEtlZXBSaWdodCEgIiwiYWN0aW9ucyI6eyJ0b3RhbCI6NzcsImF2YWlsYWJsZSI6MCwiZml4ZWQiOjM0LCJmYWxzZVBvc2l0aXZlIjoxMiwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjo4LCJ0b29IYXJkIjoyMywiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6MzU4NDY3LCJ0YXNrc1dpdGhUaW1lIjo3N319XQ==", "base64"));
  res.end();

  return __filename;
};
