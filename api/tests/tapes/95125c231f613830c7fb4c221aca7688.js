var path = require("path");

/**
 * GET /api/v2/data/challenge/16467
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Mon, 22 Feb 2021 09:47:38 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "291");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE2NDY3LCJuYW1lIjoiQWRkIGJ1aWxkaW5ncyBpbiByZXNpZGVudGlhbCBhcmVhcyBpbiBTYWNoc2VuLUFuaGFsdCwgR2VybWFueSIsImFjdGlvbnMiOnsidG90YWwiOjEwOTUsImF2YWlsYWJsZSI6MTA0NCwiZml4ZWQiOjQzLCJmYWxzZVBvc2l0aXZlIjozLCJza2lwcGVkIjoyLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjEsInRvb0hhcmQiOjIsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjEzNTY0MTMsInRhc2tzV2l0aFRpbWUiOjUxfX1d", "base64"));
  res.end();

  return __filename;
};
