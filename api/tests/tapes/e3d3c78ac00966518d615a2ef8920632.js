var path = require("path");

/**
 * GET /api/v2/data/challenge/29737
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:01 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=7.0000005507609e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=hupn34gR3aLnRiM4%2BllLzt%2F8AQVkHOC23d9EiPtTpCV3hJN1a2aa89Zpb0q0QmgVbKpvrz%2BFOp9TA45yQwEzZv%2BwX17N7mc62kbv9WX6PApmsEAgL2A%2FhB7vQbJ%2BIAT1Eso%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e72598c412b5-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5NzM3LCJuYW1lIjoiUE9JcyBQcmVmZWl0dXJhIGRlIE1hbmF1cyIsImFjdGlvbnMiOnsidG90YWwiOjM5LCJhdmFpbGFibGUiOjAsImZpeGVkIjozNSwiZmFsc2VQb3NpdGl2ZSI6NCwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjowLCJ0b29IYXJkIjowLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjoxNjE5MTQsInRhc2tzV2l0aFRpbWUiOjM5fX1d", "base64"));
  res.end();

  return __filename;
};
