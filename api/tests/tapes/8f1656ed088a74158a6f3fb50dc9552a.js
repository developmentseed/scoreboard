var path = require("path");

/**
 * GET /api/v2/data/challenge/16446
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:54:47 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "303");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE2NDQ2LCJuYW1lIjoiQWRkIGJ1aWxkaW5ncyBpbiByZXNpZGVudGlhbCBhcmVhcyBpbiBCZXJsaW4vQnJlbWVuL0hhbWJ1cmcvU2FhcmxhbmQsIEdlcm1hbnkiLCJhY3Rpb25zIjp7InRvdGFsIjoxMDcsImF2YWlsYWJsZSI6MCwiZml4ZWQiOjk4LCJmYWxzZVBvc2l0aXZlIjo3LCJza2lwcGVkIjowLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjEsInRvb0hhcmQiOjEsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjE4MzI3NiwidGFza3NXaXRoVGltZSI6MTA3fX1d", "base64"));
  res.end();

  return __filename;
};
