var path = require("path");

/**
 * GET /api/v2/data/challenge/15960
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
  res.setHeader("content-length", "289");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE1OTYwLCJuYW1lIjoiVW5tYXBwZWQgaGFtbGV0cyBpbiBSdXNzaWEgKE5vcnRoY2F1Y2FzaWFuIEZlZGVyYWwgRGlzdHJpY3QpIiwiYWN0aW9ucyI6eyJ0b3RhbCI6MjIzLCJhdmFpbGFibGUiOjAsImZpeGVkIjoxMzAsImZhbHNlUG9zaXRpdmUiOjYyLCJza2lwcGVkIjowLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjAsInRvb0hhcmQiOjMxLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjoxNzY0NDEsInRhc2tzV2l0aFRpbWUiOjIyM319XQ==", "base64"));
  res.end();

  return __filename;
};
