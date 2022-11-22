var path = require("path");

/**
 * GET /api/v2/data/challenge/29701
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:03 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=7.0000005507609e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=3zHMxWDvDDNgsXTqKUfeKXqD1D2A8%2Fd0lVFA7tiMbvXyA%2F0ZJHmDkFxWMAFG3otL%2FWHQu3URImnOjeFcgV4jWF5AE4aECyDFX%2B8Zh0z3NFD6OR%2BXU8vRTWAk82w67z670xo%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e72cfd2111b4-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5NzAxLCJuYW1lIjoiSW5jbHVzw6NvIGRlIE5vbWVzIGRlIFJ1YSBlbSBBZ3JvdmlsYXMgZG8gQnJhc2lsIFBhcnRlIDEgLyBJbmNsdXNpb24gb2YgU3RyZWV0IE5hbWVzIGluIEFncm92aWxhcyBkbyBCcmFzaWwgcGFydCAxIiwiYWN0aW9ucyI6eyJ0b3RhbCI6MTEwMiwiYXZhaWxhYmxlIjoxMTAxLCJmaXhlZCI6MCwiZmFsc2VQb3NpdGl2ZSI6MSwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjowLCJ0b29IYXJkIjowLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjoyNzI0NywidGFza3NXaXRoVGltZSI6MX19XQ==", "base64"));
  res.end();

  return __filename;
};
