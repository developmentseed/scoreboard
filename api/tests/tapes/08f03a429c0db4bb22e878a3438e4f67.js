var path = require("path");

/**
 * GET /api/v2/data/challenge/16460
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Mon, 22 Feb 2021 09:47:39 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "318");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE2NDYwLCJuYW1lIjoiQWRkIGJ1aWxkaW5ncyBpbiByZXNpZGVudGlhbCBhcmVhcyBpbiBMYW5ka3JlaXMgUm90ZW5idXJnIChXw7xtbWUpLCBOaWVkZXJzYWNoc2VuLCBHZXJtYW55IiwiYWN0aW9ucyI6eyJ0b3RhbCI6NDQ4LCJhdmFpbGFibGUiOjQzNywiZml4ZWQiOjEwLCJmYWxzZVBvc2l0aXZlIjoxLCJza2lwcGVkIjowLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjAsInRvb0hhcmQiOjAsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjM1ODI1MjUsInRhc2tzV2l0aFRpbWUiOjExfX1d", "base64"));
  res.end();

  return __filename;
};
