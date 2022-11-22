var path = require("path");

/**
 * GET /api/v2/data/challenge/29597
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:08 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=7.0000005507609e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=XfwJvDbOhGlL%2FEXO3nlu2esTCuRa%2FiSPKrQpFLgAaV2EdwWiDngRVgJ38oEBJGnC4xUwU5H04q3wcQUSR%2Fjyo9tqp3TT6UGal54eZkRQ7ALflpgN%2FzVYh8muLGfvA0NGu%2Fc%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e7513e6541d0-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5NTk3LCJuYW1lIjoiQXVzdHJhbGlhIC0gQUNUIC0gQWxtb3N0IGp1bmN0aW9uIC0gS2VlcFJpZ2h0ISAiLCJhY3Rpb25zIjp7InRvdGFsIjoxOSwiYXZhaWxhYmxlIjowLCJmaXhlZCI6NCwiZmFsc2VQb3NpdGl2ZSI6MTAsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MiwidG9vSGFyZCI6MywiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6MTAzNTAyLCJ0YXNrc1dpdGhUaW1lIjoxOX19XQ==", "base64"));
  res.end();

  return __filename;
};
