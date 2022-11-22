var path = require("path");

/**
 * GET /api/v2/data/challenge/29015
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:25 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=7.0000005507609e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=X3ZbuWjv%2BvArUnCLOVY9MyP01SkxqXP8SDxoIB4j1LhbVBIL9iExvZKDBrqfHLw29zLrQwKwVDBEu1tKbYCRb%2BtG75jJJhMw7IhaMgP7rjDg3ksxs9gjVyONMd7htcRxda4%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e7bb6a8a16a9-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5MDE1LCJuYW1lIjoiQXVzdHJhbGlhIC0gVW5rbm93bkhpZ2h3YXlUYWdDaGVjayIsImFjdGlvbnMiOnsidG90YWwiOjQ1LCJhdmFpbGFibGUiOjQxLCJmaXhlZCI6MiwiZmFsc2VQb3NpdGl2ZSI6MCwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjowLCJ0b29IYXJkIjoyLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjoxNTI2MjgsInRhc2tzV2l0aFRpbWUiOjR9fV0=", "base64"));
  res.end();

  return __filename;
};
