var path = require("path");

/**
 * GET /api/v2/data/challenge/29989
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:09:57 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=4.9999998736894e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=LVC6UgLh3GD1s9LO2gD1ARlT%2BG6s7mij8WwwWBt9DooIzNEt%2BJZGbZeG%2Flsq3k5C2J%2FstJhh5LZnWvakc1PDBZuDs0hcQOkf915rdiRRxcuO5iFYCVu0B9PUE%2FAzMmB2jl4%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e70a28640779-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5OTg5LCJuYW1lIjoiQWRkIFdpa2lkYXRhIHRvIHZpbGxhZ2VzIGluIFRodXJpbmdpYSwgR2VybWFueSIsImFjdGlvbnMiOnsidG90YWwiOjEzOTgsImF2YWlsYWJsZSI6MTM4NCwiZml4ZWQiOjE0LCJmYWxzZVBvc2l0aXZlIjowLCJza2lwcGVkIjowLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjAsInRvb0hhcmQiOjAsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjEyMjM2NiwidGFza3NXaXRoVGltZSI6MTR9fV0=", "base64"));
  res.end();

  return __filename;
};
