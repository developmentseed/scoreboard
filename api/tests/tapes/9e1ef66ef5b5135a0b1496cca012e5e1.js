var path = require("path");

/**
 * GET /api/v2/data/challenge/29019
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
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=PjTwoweeWU5tB1Nj25HvLw7Py0N8SAIAeIErgbEq6xIJyltrdA7GQualKSlkIEJLD5Q3ZDjSLoZ6wo84d2rITUWOZwMuRPPgWWyQcNdugt4HVxY0nkjJDy5SZ3CfzGBB2Bg%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e7b88fe00cf6-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5MDE5LCJuYW1lIjoiQXVzdHJhbGlhIC0gUm91bmRhYm91dFZhbGVuY2VDaGVjayIsImFjdGlvbnMiOnsidG90YWwiOjQxOCwiYXZhaWxhYmxlIjowLCJmaXhlZCI6MjUxLCJmYWxzZVBvc2l0aXZlIjo1NSwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjo0NSwidG9vSGFyZCI6NjcsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjIyMzk3MSwidGFza3NXaXRoVGltZSI6NDE4fX1d", "base64"));
  res.end();

  return __filename;
};
