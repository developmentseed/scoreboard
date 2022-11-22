var path = require("path");

/**
 * GET /api/v2/data/challenge/29549
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:09 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=7.0000005507609e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=95N6ehhsxmG0KvUnmVFzQwhQ1YTbwbV60OKa1Q1Hw0dqnKnGt1l8i3eA9%2FZelAKTU5XpocYOydre3EnEx8T9Pj9e7R4tY7PVQ%2BlZA6rP15CUnUJihOPqOA5qBt%2BXjgAHxZU%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e753ae450d9f-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5NTQ5LCJuYW1lIjoiSHVycmljYW5lIEp1bGlhLCBHdWF0ZW1hbGE6IFJvYWRzIGFuZCBSaXZlcnMiLCJhY3Rpb25zIjp7InRvdGFsIjozOCwiYXZhaWxhYmxlIjoyNiwiZml4ZWQiOjEyLCJmYWxzZVBvc2l0aXZlIjowLCJza2lwcGVkIjowLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjAsInRvb0hhcmQiOjAsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjY4ODIxNCwidGFza3NXaXRoVGltZSI6MTJ9fV0=", "base64"));
  res.end();

  return __filename;
};
