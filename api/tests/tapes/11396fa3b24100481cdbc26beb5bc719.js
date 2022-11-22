var path = require("path");

/**
 * GET /api/v2/data/challenge/29790
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
  res.setHeader("server-timing", "cf-q-config;dur=6.9999987317715e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ysRkSCupAK1mYFsR7h5JvjoXdIrF%2FlrmcRckOAdzna0z02A0ibLC7DA6wFy9yFdeq3WLPUOXnFacYsBodgHTAPKlyJOzCwliOEJZpQR69V91VDpf1FTYUa%2F600RhT8m8qDo%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e71e0c8641aa-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5NzkwLCJuYW1lIjoiUWF0YXIgfCBNaXNzaW5nIFJvYWRzIHwgRG9oYSIsImFjdGlvbnMiOnsidG90YWwiOjc2LCJhdmFpbGFibGUiOjAsImZpeGVkIjo1OCwiZmFsc2VQb3NpdGl2ZSI6Miwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjoxMiwidG9vSGFyZCI6NCwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6NTM3MjY1LCJ0YXNrc1dpdGhUaW1lIjo3Nn19XQ==", "base64"));
  res.end();

  return __filename;
};
