var path = require("path");

/**
 * GET /api/v2/data/challenge/16471
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
  res.setHeader("content-length", "285");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE2NDcxLCJuYW1lIjoiQWRkIGJ1aWxkaW5ncyBpbiByZXNpZGVudGlhbCBhcmVhcyBpbiBUaMO8cmluZ2VuLCBHZXJtYW55IiwiYWN0aW9ucyI6eyJ0b3RhbCI6NjgxLCJhdmFpbGFibGUiOjYyMywiZml4ZWQiOjU1LCJmYWxzZVBvc2l0aXZlIjowLCJza2lwcGVkIjozLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjAsInRvb0hhcmQiOjAsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjIwNTIxODQsInRhc2tzV2l0aFRpbWUiOjU4fX1d", "base64"));
  res.end();

  return __filename;
};
