var path = require("path");

/**
 * GET /api/v2/data/challenge/16988
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Mon, 22 Feb 2021 09:47:34 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "394");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE2OTg4LCJuYW1lIjoiQ29ycmXDp8OjbyBkZSBOb21lcyBkZSBSdWEgZSBBdmVuaWRhcyBhYnJldmlhZGFzIG5vIGVzdGFkbyBkbyBFc3Bpcml0byBTYW50byBCcmFzaWwuIC8gQ29ycmVjdGlvbiBvZiBzdHJlZXQgbmFtZXMgYW5kIGFiYnJldmlhdGVkIGF2ZW51ZXMgaW4gdGhlIHN0YXRlIG9mIEVzcGlyaXRvIFNhbnRvIEJyYXNpbC4iLCJhY3Rpb25zIjp7InRvdGFsIjo1OCwiYXZhaWxhYmxlIjo1OCwiZml4ZWQiOjAsImZhbHNlUG9zaXRpdmUiOjAsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MCwidG9vSGFyZCI6MCwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6MCwidGFza3NXaXRoVGltZSI6MH19XQ==", "base64"));
  res.end();

  return __filename;
};
