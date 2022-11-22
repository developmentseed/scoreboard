var path = require("path");

/**
 * GET /api/v2/data/challenge/29499
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:11 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=6.0000002122251e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=3STOkLZJ%2FBeVfkVsaa2O2MrBLV88ssO2fB5N7ZN%2BQRQtl%2BN4E7KK6byG%2BZKP5gHfcvVl4QSL7rsBVZq6u8KkfaPWqsnhbUq23LX3hO%2F8zeTE5zMWs0XaccVg8WV67nrd5ao%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e75f6b0f0d73-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5NDk5LCJuYW1lIjoiQ2hhbmdlIHN3aW1taW5nIHBvb2wgbm9kZXMgdG8gYXJlYXMgLSBQeXLDqW7DqWVzLUF0bGFudGlxdWVzIiwiYWN0aW9ucyI6eyJ0b3RhbCI6MTc2MSwiYXZhaWxhYmxlIjoxMDQ0LCJmaXhlZCI6NzE2LCJmYWxzZVBvc2l0aXZlIjowLCJza2lwcGVkIjowLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjEsInRvb0hhcmQiOjAsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjMzODk1LCJ0YXNrc1dpdGhUaW1lIjo3MTd9fV0=", "base64"));
  res.end();

  return __filename;
};
