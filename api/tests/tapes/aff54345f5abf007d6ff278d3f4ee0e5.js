var path = require("path");

/**
 * GET /api/v2/data/challenge/29794
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:00 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=6.0000002122251e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=9nEo8sUmluNbMOWxs%2FBbZUcYlTPd1UWzd0r%2FuyUWdOxscWqg4ni9ys21qQxSC3r0A2nxwY9PkxWOgafSAbbZzPYLRh8zjZ9IXWDMwUZwAYIzCa%2Bgm4jXa4ROmB1LBsfbf9s%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e71bae530cf5-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5Nzk0LCJuYW1lIjoiUWF0YXIgfCBNaXNzaW5nIFJvYWRzIHwgQWwtV2FrcmEiLCJhY3Rpb25zIjp7InRvdGFsIjo0NCwiYXZhaWxhYmxlIjo5LCJmaXhlZCI6MTgsImZhbHNlUG9zaXRpdmUiOjMsInNraXBwZWQiOjQsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6OCwidG9vSGFyZCI6MiwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6NjQwMDkzLCJ0YXNrc1dpdGhUaW1lIjozNX19XQ==", "base64"));
  res.end();

  return __filename;
};
