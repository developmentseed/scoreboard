var path = require("path");

/**
 * GET /api/v2/data/challenge/16957
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Mon, 22 Feb 2021 09:47:35 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "395");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE2OTU3LCJuYW1lIjoiQ29ycmXDp8OjbyBkZSBub21lcyBkZSBydWFzIGUgYXZlbmlkYXMgYWJyZXZpYWRhcyBub3MgRXN0YWRvcyBkbyBOb3JkZXN0ZSBkbyAgQnJhc2lsIC8gQ29ycmVjdGlvbiBvZiBhYmJyZXZpYXRlZCBzdHJlZXQgYW5kIGF2ZW51ZSBuYW1lcyBpbiB0aGUgTm9ydGhlYXN0ZXJuIFN0YXRlcyBvZiBCcmF6aWwiLCJhY3Rpb25zIjp7InRvdGFsIjo0NjE5LCJhdmFpbGFibGUiOjQ2MTksImZpeGVkIjowLCJmYWxzZVBvc2l0aXZlIjowLCJza2lwcGVkIjowLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjAsInRvb0hhcmQiOjAsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjAsInRhc2tzV2l0aFRpbWUiOjB9fV0=", "base64"));
  res.end();

  return __filename;
};
