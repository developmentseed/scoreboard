var path = require("path");

/**
 * GET /api/v2/data/challenge/30028
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:09:57 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=7.0000005507609e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2F9vCn4spnF%2BG%2B03rXHDnHKxfU%2FCBAC2Wu1B4pnbW%2FZbmwQDuKwfDnmipfmuIo5uCtRSSVLSh1v0pGtGqW6GF5M%2Bs6FaVcjMJT1LZza9KH1jO5CfW1H0K3LvIWMRS3n1GPtU%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e707bf290da8-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjMwMDI4LCJuYW1lIjoiR0JSIC0gSW52YWxpZEdlb21ldHJ5Q2hlY2siLCJhY3Rpb25zIjp7InRvdGFsIjozMywiYXZhaWxhYmxlIjoyNywiZml4ZWQiOjUsImZhbHNlUG9zaXRpdmUiOjAsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MCwidG9vSGFyZCI6MSwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6MjMwMTg5LCJ0YXNrc1dpdGhUaW1lIjo2fX1d", "base64"));
  res.end();

  return __filename;
};
