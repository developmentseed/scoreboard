var path = require("path");

/**
 * GET /api/v2/data/challenge/29704
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:02 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=4.9999998736894e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=LLKNgfAjHgDYn%2BQNfbKyV%2BnuM%2FSHvL8R00inl2VFN3ftDEa69rg0uSJ7h%2BIjp9bZBfMtLZvd9s0%2FYz6Y5I4MCspzQf%2FegavXpU%2FUZrWGdN24yxdlN4SW%2BdZKc6hMozCJxH4%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e72a7f085f9b-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5NzA0LCJuYW1lIjoiSW5jbHVzw6NvIGRlIE5vbWVzIGRlIFJ1YSBlbSBjaWRhZGVzIGRlIE1pbmFzIEdlcmFpcyAtIEJyYXNpbCBQYXJ0ZTEgLyBJbmNsdXPDo28gZGUgTm9tZXMgZGUgUnVhIGVtIGNpZGFkZXMgZGUgTWluYXMgR2VyYWlzIC0gQnJhc2lsLCBQYXJ0ZSAxLiIsImFjdGlvbnMiOnsidG90YWwiOjEwMDAsImF2YWlsYWJsZSI6OTk4LCJmaXhlZCI6MCwiZmFsc2VQb3NpdGl2ZSI6Miwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjowLCJ0b29IYXJkIjowLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50Ijo1MDE1MiwidGFza3NXaXRoVGltZSI6Mn19XQ==", "base64"));
  res.end();

  return __filename;
};
