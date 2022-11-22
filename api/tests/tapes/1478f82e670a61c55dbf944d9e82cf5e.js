var path = require("path");

/**
 * GET /api/v2/data/challenge/29346
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:12 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=6.9999987317715e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2BiRUHRUJfahtWosP8CiQbGIoI2d9gRrWKnPuX1zCcUsjfRA7AO3ilgUCKZq12Fa01XFnRAWiXloezjiUeJuzZV1URaZ9ZVBrNnx4Mfoz2%2BXrnlm3ZToYCRGMAesyFUCa6oo%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e768c9935f9b-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5MzQ2LCJuYW1lIjoiQ2FybWVsIFNpZGV3YWxrcyIsImFjdGlvbnMiOnsidG90YWwiOjgwOCwiYXZhaWxhYmxlIjo0MzgsImZpeGVkIjozNTEsImZhbHNlUG9zaXRpdmUiOjQsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MTUsInRvb0hhcmQiOjAsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjI5MzQ3MSwidGFza3NXaXRoVGltZSI6MzcwfX1d", "base64"));
  res.end();

  return __filename;
};
