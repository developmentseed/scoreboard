var path = require("path");

/**
 * GET /api/v2/data/challenge/29986
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
  res.setHeader("server-timing", "cf-q-config;dur=7.9999990703072e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=6ures4mdmR5wnjzUdEG9HTZHwWqL0%2Be9UB2nJ73aTz0deMYQ2uP0Esutwn%2FL%2FJFDis5r2l%2BcZJuvVissHIw9jjoCeT2z0cI7%2BXLe4eaorG%2FnwckfFF9lt%2Bob4OfL2lk7qSA%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e70c5858739b-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5OTg2LCJuYW1lIjoiQWRkIFdpa2lkYXRhIHRvIHZpbGxhZ2VzIGluIEJhdmFyaWEsIEdlcm1hbnkiLCJhY3Rpb25zIjp7InRvdGFsIjo3MTc3LCJhdmFpbGFibGUiOjcxMzYsImZpeGVkIjoyMiwiZmFsc2VQb3NpdGl2ZSI6MTMsInNraXBwZWQiOjEsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MCwidG9vSGFyZCI6NSwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6MTY4MjE4LCJ0YXNrc1dpdGhUaW1lIjo0MX19XQ==", "base64"));
  res.end();

  return __filename;
};
