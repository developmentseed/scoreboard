var path = require("path");

/**
 * GET /api/v2/data/challenge/29817
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:09:59 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=7.0000000391701e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=nQiVER%2FOOOhpgCqHt5gOdONU%2BK19B%2F4dCQ%2BxmBEvcMfY618PAEo%2Ftul6wvOPVtv40THAyO7iWKHOkPhs3IUNKE5OzoSyjUMidzB27M1TxUdo%2BEf9Na%2FEU79YTO1bj8Dk3JM%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e713ed430773-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5ODE3LCJuYW1lIjoiQWRkIGJ1aWxkaW5ncyB0byBUaGUgUGFsaXNhZGVzIGluIEVkbW9udG9uLCBBbGJlcnRhIiwiYWN0aW9ucyI6eyJ0b3RhbCI6MTcwLCJhdmFpbGFibGUiOjE0OCwiZml4ZWQiOjgsImZhbHNlUG9zaXRpdmUiOjEsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MTMsInRvb0hhcmQiOjAsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjEwNTI4OCwidGFza3NXaXRoVGltZSI6MjJ9fV0=", "base64"));
  res.end();

  return __filename;
};
