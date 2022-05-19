var path = require("path");

/**
 * GET /api/v2/data/challenge/16058
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:54:51 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "296");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE2MDU4LCJuYW1lIjoiVW5tYXBwZWQgaGFtbGV0cyBpbiBSdXNzaWEgKE5vcnRod2VzdGVybiBGZWRlcmFsIERpc3RyaWN0KSIsImFjdGlvbnMiOnsidG90YWwiOjUzMDIsImF2YWlsYWJsZSI6MjYxNiwiZml4ZWQiOjE3OTYsImZhbHNlUG9zaXRpdmUiOjY2NCwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjozOCwidG9vSGFyZCI6MTg4LCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjoyMDI4OTMsInRhc2tzV2l0aFRpbWUiOjI2ODV9fV0=", "base64"));
  res.end();

  return __filename;
};
