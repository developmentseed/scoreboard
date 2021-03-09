var path = require("path");

/**
 * GET /api/v2/data/challenge/15323
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:03 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "268");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE1MzIzLCJuYW1lIjoiRWxlbWVudCBtaXNzaW5nIGJyYW5kIHRhZ3MgLSBGcmFuY2UiLCJhY3Rpb25zIjp7InRvdGFsIjo0NjM5LCJhdmFpbGFibGUiOjQxMjUsImZpeGVkIjo0NjEsImZhbHNlUG9zaXRpdmUiOjQsInNraXBwZWQiOjI4LCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjE5LCJ0b29IYXJkIjoyLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjoxMzUyOTEsInRhc2tzV2l0aFRpbWUiOjUxNH19XQ==", "base64"));
  res.end();

  return __filename;
};
