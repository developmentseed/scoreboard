var path = require("path");

/**
 * GET /api/v2/data/challenge/29636
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:06 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=6.0000002122251e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Gwhu1z4vzfNG00jzhCIWIlXNBIBvZ6a4iIyvCJeOynZ37Nmje2%2FlriqCnJqtFjiIdEVyEXGNHyh5MhQY1me8il%2BbF4Hr9RwpAShLtYO2TMUJ0BwWyFsz%2FNREB8dcAnWMfp4%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e7408ee70da8-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5NjM2LCJuYW1lIjoiQXVzdHJhbGlhIC0gTlNXIC0gV3JvbmcgcmVzdHJpY3Rpb24gYW5nbGUgLSBLZWVwUmlnaHQhIiwiYWN0aW9ucyI6eyJ0b3RhbCI6MzcsImF2YWlsYWJsZSI6MSwiZml4ZWQiOjcsImZhbHNlUG9zaXRpdmUiOjIyLCJza2lwcGVkIjowLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjcsInRvb0hhcmQiOjAsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjIwOTgwNiwidGFza3NXaXRoVGltZSI6MzZ9fV0=", "base64"));
  res.end();

  return __filename;
};
