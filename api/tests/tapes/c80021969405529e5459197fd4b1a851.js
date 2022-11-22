var path = require("path");

/**
 * GET /api/v2/data/challenge/29280
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:13 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=9.0000012278324e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=dfUOnsljv%2BFdjzN8RxUNrrzgJLMNUWa9GRpqnt96lkiYEjnjVi0TukDSfnmdES8vWjL43P27LvAyvXtLFt7%2BP%2BgMfzXC5S9qVP%2FnLnTKVq8qNQa5UKgvmi1d7QmxNnhSVSk%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e7709c6b0cf6-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5MjgwLCJuYW1lIjoiVXJ1Z3VheSAtIFNuYWtlUm9hZENoZWNrIiwiYWN0aW9ucyI6eyJ0b3RhbCI6NywiYXZhaWxhYmxlIjo3LCJmaXhlZCI6MCwiZmFsc2VQb3NpdGl2ZSI6MCwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjowLCJ0b29IYXJkIjowLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjowLCJ0YXNrc1dpdGhUaW1lIjowfX1d", "base64"));
  res.end();

  return __filename;
};
