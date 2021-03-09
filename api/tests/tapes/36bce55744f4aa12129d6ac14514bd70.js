var path = require("path");

/**
 * GET /api/v2/data/challenge/16963
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
  res.setHeader("content-length", "386");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE2OTYzLCJuYW1lIjoiQ29ycmXDp8OjbyBkZSBOb21lcyBkZSBSdWEgZSBBdmVuaWRhcyBhYnJldmlhZGFzIG5hIFJlZ2nDo28gQ2VudHJvLU9lc3RlIEJyYXNpbCAvIENvcnJlY3Rpb24gb2YgU3RyZWV0IE5hbWVzIGFuZCBBYmJyZXZpYXRlZCBBdmVudWVzIGluIHRoZSBNaWR3ZXN0IFJlZ2lvbiBvZiBCcmF6aWwiLCJhY3Rpb25zIjp7InRvdGFsIjoxNDgwLCJhdmFpbGFibGUiOjE0ODAsImZpeGVkIjowLCJmYWxzZVBvc2l0aXZlIjowLCJza2lwcGVkIjowLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjAsInRvb0hhcmQiOjAsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjAsInRhc2tzV2l0aFRpbWUiOjB9fV0=", "base64"));
  res.end();

  return __filename;
};
