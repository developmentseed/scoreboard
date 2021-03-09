var path = require("path");

/**
 * GET /api/v2/data/challenge/16989
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Mon, 22 Feb 2021 09:47:34 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "392");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE2OTg5LCJuYW1lIjoiQ29ycmlnaXIgTm9tZXMgZGUgUnVhcyBlIEF2ZW5pZGFzIEFicmV2aWFkYXMgbm8gRXN0YWRvIGRlIE1pbmFzIEdlcmFpcyAtIEJyYXNpbC4gLyBDb3JyZWN0IE5hbWVzIG9mIFN0cmVldHMgYW5kIEFiYnJldmlhdGVkIEF2ZW51ZXMgaW4gdGhlIFN0YXRlIG9mIE1pbmFzIEdlcmFpcyAtIEJyYXppbC4iLCJhY3Rpb25zIjp7InRvdGFsIjoxMTM4LCJhdmFpbGFibGUiOjExMzgsImZpeGVkIjowLCJmYWxzZVBvc2l0aXZlIjowLCJza2lwcGVkIjowLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjAsInRvb0hhcmQiOjAsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjAsInRhc2tzV2l0aFRpbWUiOjB9fV0=", "base64"));
  res.end();

  return __filename;
};
