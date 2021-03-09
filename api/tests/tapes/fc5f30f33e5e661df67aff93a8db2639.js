var path = require("path");

/**
 * GET /api/v2/data/challenge/15413
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:54:58 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "248");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE1NDEzLCJuYW1lIjoiUmVzZXJ2b2lyIE5vZGVzIFVTLU1UIiwiYWN0aW9ucyI6eyJ0b3RhbCI6ODA2LCJhdmFpbGFibGUiOjc5MywiZml4ZWQiOjEzLCJmYWxzZVBvc2l0aXZlIjowLCJza2lwcGVkIjowLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjAsInRvb0hhcmQiOjAsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjIyOTk3MSwidGFza3NXaXRoVGltZSI6MTN9fV0=", "base64"));
  res.end();

  return __filename;
};
