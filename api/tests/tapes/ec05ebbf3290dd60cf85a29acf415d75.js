var path = require("path");

/**
 * GET /api/v2/data/challenge/16909
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Mon, 22 Feb 2021 09:47:37 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "355");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE2OTA5LCJuYW1lIjoiTmFwcmF3YSBicmFrdSBrb250eW51YWNqaSBudW1lcmFjamkgZHLDs2cgdyB0YWdhY2ggUkVGKiB3IFBvbHNjZSB8IFJvdXRlIE51bWJlciBkaXNjb250aW51aXR5IGluICdSRUYqJyB0YWdzIGNhdGVnb3J5IGluIFBvbGFuZCIsImFjdGlvbnMiOnsidG90YWwiOjczNCwiYXZhaWxhYmxlIjowLCJmaXhlZCI6NzAyLCJmYWxzZVBvc2l0aXZlIjoxNywic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjoxNSwidG9vSGFyZCI6MCwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6MTkyNTksInRhc2tzV2l0aFRpbWUiOjczM319XQ==", "base64"));
  res.end();

  return __filename;
};
