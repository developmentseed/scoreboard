var path = require("path");

/**
 * GET /api/v2/data/challenge/29807
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
  res.setHeader("server-timing", "cf-q-config;dur=6.0000002122251e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=bcYJ%2ByVrGnWymyZgWibHaV2N2LhZX8BhD5dtr2EnqLXoNDtRWLjaUb83ZQbFmnlN71ugMtbcc63cbyS%2FnILyZZ9Bbq96k0IXKODNwSoZByj5CApraqNCOaBLno016isYJGo%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e718f86b41be-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5ODA3LCJuYW1lIjoiVGFuemFuaWEgfCBJc29sYXRlZCBIaWdod2F5cyIsImFjdGlvbnMiOnsidG90YWwiOjEzMSwiYXZhaWxhYmxlIjo5MSwiZml4ZWQiOjMwLCJmYWxzZVBvc2l0aXZlIjowLCJza2lwcGVkIjowLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjAsInRvb0hhcmQiOjEwLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50Ijo0MTU0ODUsInRhc2tzV2l0aFRpbWUiOjQwfX1d", "base64"));
  res.end();

  return __filename;
};
