var path = require("path");

/**
 * GET /api/v2/data/challenge/29009
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:26 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=8.0000008892966e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=6sEL6d06VDRCbZuJmnneKW0JrR1dIO3xIYvhBosVhKXHeJFQB%2FZ8dAVM9leOLkIKnqTUSfpxQjRoyDE17UvcpiJRjqTmNOt3ycUAFPezghIdVEKNTlfYSqkR8dgzXIZLYSE%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e7beab9b0db7-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5MDA5LCJuYW1lIjoiQXVzdHJhbGlhIC0gUm91bmRhYm91dE1pc3NpbmdUYWdDaGVjayIsImFjdGlvbnMiOnsidG90YWwiOjQyNSwiYXZhaWxhYmxlIjowLCJmaXhlZCI6MywiZmFsc2VQb3NpdGl2ZSI6MjQ3LCJza2lwcGVkIjowLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjExOCwidG9vSGFyZCI6NTcsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjI5MTI1NCwidGFza3NXaXRoVGltZSI6NDI1fX1d", "base64"));
  res.end();

  return __filename;
};
