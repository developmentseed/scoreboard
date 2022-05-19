var path = require("path");

/**
 * GET /api/v2/data/challenge/15404
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:54:59 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "247");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE1NDA0LCJuYW1lIjoiUmVzZXJ2b2lyIE5vZGVzIFVTLUNBIiwiYWN0aW9ucyI6eyJ0b3RhbCI6NjUwLCJhdmFpbGFibGUiOjYyNywiZml4ZWQiOjEzLCJmYWxzZVBvc2l0aXZlIjowLCJza2lwcGVkIjozLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjIsInRvb0hhcmQiOjUsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjc0NDI0LCJ0YXNrc1dpdGhUaW1lIjoyM319XQ==", "base64"));
  res.end();

  return __filename;
};
