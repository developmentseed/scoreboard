var path = require("path");

/**
 * GET /api/v2/data/challenge/14679
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:13 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "283");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE0Njc5LCJuYW1lIjoiYWVyb3dheT1ydW53YXkgc2hvdWxkIG5vdCBiZSBhIGNsb3NlZCB3YXkgLyBhbiBhcmVhIiwiYWN0aW9ucyI6eyJ0b3RhbCI6NTgzMywiYXZhaWxhYmxlIjo1MDE0LCJmaXhlZCI6Nzg4LCJmYWxzZVBvc2l0aXZlIjowLCJza2lwcGVkIjo3LCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjE4LCJ0b29IYXJkIjo2LCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjoyNTY1MDksInRhc2tzV2l0aFRpbWUiOjgxOX19XQ==", "base64"));
  res.end();

  return __filename;
};
