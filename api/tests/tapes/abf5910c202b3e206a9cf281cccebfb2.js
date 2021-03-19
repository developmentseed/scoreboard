var path = require("path");

/**
 * GET /api/v2/data/challenge/16065
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:54:52 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "276");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE2MDY1LCJuYW1lIjoiR2xvYmFsOiBJbXByb3ZlOi9GaXggdGFnIFwiYWNjZXNzPXB1YmxpY1wiIiwiYWN0aW9ucyI6eyJ0b3RhbCI6MTYyOTIsImF2YWlsYWJsZSI6MTU1NTAsImZpeGVkIjo2OTksImZhbHNlUG9zaXRpdmUiOjIsInNraXBwZWQiOjM2LCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjMsInRvb0hhcmQiOjIsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjE2MzU1NywidGFza3NXaXRoVGltZSI6NzQyfX1d", "base64"));
  res.end();

  return __filename;
};
