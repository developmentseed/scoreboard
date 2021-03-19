var path = require("path");

/**
 * GET /api/v2/data/challenge/16941
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
  res.setHeader("content-length", "265");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE2OTQxLCJuYW1lIjoiUHJvcGVybHkgdGFnIGJhc2ViYWxsIGZpZWxkcyBpbiBDYW5hZGEiLCJhY3Rpb25zIjp7InRvdGFsIjoxMDMsImF2YWlsYWJsZSI6MCwiZml4ZWQiOjYyLCJmYWxzZVBvc2l0aXZlIjoxOSwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjoyMSwidG9vSGFyZCI6MSwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6NjgzOTQsInRhc2tzV2l0aFRpbWUiOjEwM319XQ==", "base64"));
  res.end();

  return __filename;
};
