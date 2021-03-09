var path = require("path");

/**
 * GET /api/v2/data/challenge/16960
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Mon, 22 Feb 2021 09:47:35 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "370");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE2OTYwLCJuYW1lIjoiQ29ycmXDp8OjbyBkZSBOb21lcyBkZSBSdWEgZSBBdmVuaWRhcyBhYnJldmlhZGFzIG5vIFN1bCBkbyBCcmFzaWwuIC8gQ29ycmVjdGlvbiBvZiBzdHJlZXQgbmFtZXMgYW5kIGFiYnJldmlhdGVkIGF2ZW51ZXMgaW4gc291dGhlcm4gQnJhemlsLiIsImFjdGlvbnMiOnsidG90YWwiOjEwNzcsImF2YWlsYWJsZSI6Nzg5LCJmaXhlZCI6MTgyLCJmYWxzZVBvc2l0aXZlIjoxOCwic2tpcHBlZCI6ODcsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MSwidG9vSGFyZCI6MCwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6NDYxNjgsInRhc2tzV2l0aFRpbWUiOjI4OH19XQ==", "base64"));
  res.end();

  return __filename;
};
