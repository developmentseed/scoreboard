var path = require("path");

/**
 * GET /api/v2/data/challenge/16990
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
  res.setHeader("content-length", "381");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE2OTkwLCJuYW1lIjoiQ29ycmXDp8OjbyBkZSBOb21lcyBkZSBSdWEgZSBBdmVuaWRhcyBhYnJldmlhZGFzIG5vIEVzdGFkbyBkbyBSaW8gZGUgSmFuZWlyby4gLyAgQ29ycmVjdGlvbiBvZiBTdHJlZXQgTmFtZXMgYW5kIEFiYnJldmlhdGVkIEF2ZW51ZXMgaW4gdGhlIFN0YXRlIG9mIFJpbyBkZSBKYW5laXJvLiIsImFjdGlvbnMiOnsidG90YWwiOjYyLCJhdmFpbGFibGUiOjYyLCJmaXhlZCI6MCwiZmFsc2VQb3NpdGl2ZSI6MCwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjowLCJ0b29IYXJkIjowLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjowLCJ0YXNrc1dpdGhUaW1lIjowfX1d", "base64"));
  res.end();

  return __filename;
};
