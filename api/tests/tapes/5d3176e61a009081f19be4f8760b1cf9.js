var path = require("path");

/**
 * GET /api/v2/data/challenge/29055
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:23 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=4.9999998736894e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=9eaqIsiGAX55jU4t%2BdM1XUgNVlJ%2FRVcTgYw2CJ09GFitdGOkm7nk4%2F943XMikVuBblnqCM99gwJGgUElMGQvKzBm6ljugDEP09g6OANL6iJaLvCkAeQXflJ8NGGOYi%2FWP74%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e7ab887616dd-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5MDU1LCJuYW1lIjoiS29yZWFuIGF0dHJhY3Rpb25zIHdpdGhvdXQgYSBlbmdsaXNoIG5hbWVzIiwiYWN0aW9ucyI6eyJ0b3RhbCI6MzIwLCJhdmFpbGFibGUiOjc1LCJmaXhlZCI6MTAzLCJmYWxzZVBvc2l0aXZlIjoxMTgsInNraXBwZWQiOjEyLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjgsInRvb0hhcmQiOjQsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjYxMDI1LCJ0YXNrc1dpdGhUaW1lIjoyNDV9fV0=", "base64"));
  res.end();

  return __filename;
};
