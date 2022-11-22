var path = require("path");

/**
 * GET /api/v2/data/challenge/29912
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:09:58 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=6.0000002122251e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ybp1H6ASfs1lZtq7KVsQZBnRUXNiifWZt9f60lT3H2VeR%2FurELs2YxeU%2BBauuZAf7GfUij47%2FdvV95xP%2FUxyEdxXOJDvpSUvjs6GryX1X9nR%2BJVjsNmcA1AhBgnnkb0R%2B%2Bc%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e7113cee5fa1-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5OTEyLCJuYW1lIjoiVW5pdGVkIEtpbmdkb20gLSBTbmFrZVJvYWRDaGVjayIsImFjdGlvbnMiOnsidG90YWwiOjI0NSwiYXZhaWxhYmxlIjoyMzcsImZpeGVkIjowLCJmYWxzZVBvc2l0aXZlIjozLCJza2lwcGVkIjo1LCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjAsInRvb0hhcmQiOjAsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjIyNjExLCJ0YXNrc1dpdGhUaW1lIjo4fX1d", "base64"));
  res.end();

  return __filename;
};
