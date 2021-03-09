var path = require("path");

/**
 * GET /api/v2/data/challenge/15281
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:06 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "264");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE1MjgxLCJuYW1lIjoiU0RQIGltcG9ydDogUmVsaWdpb3VzIEluc3RpdHV0aW9ucyIsImFjdGlvbnMiOnsidG90YWwiOjM5MSwiYXZhaWxhYmxlIjoxOTAsImZpeGVkIjoxNzQsImZhbHNlUG9zaXRpdmUiOjQsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MjAsInRvb0hhcmQiOjAsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjozLCJhdmdUaW1lU3BlbnQiOjM4NjU2NiwidGFza3NXaXRoVGltZSI6MjAwfX1d", "base64"));
  res.end();

  return __filename;
};
