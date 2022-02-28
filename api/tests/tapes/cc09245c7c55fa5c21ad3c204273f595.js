var path = require("path");

/**
 * GET /api/v2/data/challenge/14102
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:39 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "281");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE0MTAyLCJuYW1lIjoiQmFuZ2xhZGVzaCAtIEZsb2F0aW5nIFdheXMgLyBEaXNjb25uZWN0ZWQgUm9hZHMiLCJhY3Rpb25zIjp7InRvdGFsIjozMDA0LCJhdmFpbGFibGUiOjE5NjksImZpeGVkIjo5NTEsImZhbHNlUG9zaXRpdmUiOjE3LCJza2lwcGVkIjo0LCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjYwLCJ0b29IYXJkIjozLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjoyMTE2NjEsInRhc2tzV2l0aFRpbWUiOjEwMzF9fV0=", "base64"));
  res.end();

  return __filename;
};
