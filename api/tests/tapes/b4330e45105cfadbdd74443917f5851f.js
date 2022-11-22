var path = require("path");

/**
 * GET /api/v2/data/challenge/29621
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:07 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=4.9999998736894e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=MxaD%2Bji4tdeB5YSLPqpnmDRof0whH7hwlH%2BwBpY0ktsiOmifP%2FrBVlo31n0g8eZAORXm10xGzXEjPj2Gyfbpv6RT7maYjDVXK3uyPtbIpJYqCMLP2bi%2FgijjSlPii1gb3Nc%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e7476ced1023-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5NjIxLCJuYW1lIjoiQXVzdHJhbGlhIC0gTm9ydGhlcm4gdGVycml0b3J5IC0gSGlnaHdheSB3YXRlcndheSAtIEtlZXBSaWdodCEiLCJhY3Rpb25zIjp7InRvdGFsIjo5MCwiYXZhaWxhYmxlIjowLCJmaXhlZCI6MTksImZhbHNlUG9zaXRpdmUiOjAsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MCwidG9vSGFyZCI6NzEsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjk2NjQ4LCJ0YXNrc1dpdGhUaW1lIjo5MH19XQ==", "base64"));
  res.end();

  return __filename;
};
