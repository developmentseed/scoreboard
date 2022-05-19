var path = require("path");

/**
 * GET /api/v2/data/challenge/16939
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Mon, 22 Feb 2021 09:47:36 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "274");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE2OTM5LCJuYW1lIjoiTWlzc2luZyBjZW1ldGVyaWVzIGZyb20gT1MgT3BlbiBHcmVlbnNwYWNlIiwiYWN0aW9ucyI6eyJ0b3RhbCI6MjU2OCwiYXZhaWxhYmxlIjoyMzQ5LCJmaXhlZCI6OTQsImZhbHNlUG9zaXRpdmUiOjI5LCJza2lwcGVkIjoxMSwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjowLCJ0b29IYXJkIjo4NSwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6ODM0NTEsInRhc2tzV2l0aFRpbWUiOjIxOX19XQ==", "base64"));
  res.end();

  return __filename;
};
