var path = require("path");

/**
 * GET /api/v2/data/challenge/29816
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:09:59 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=6.9999987317715e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=PG0Z0GRRq%2FtYHmxbaR35X57u3CvETS0gYo1wOg6dBTn1NnJWQrL7EtcwvpkPU%2FiT2rJvSE4wa4Ww5J%2FMfsp7Jiy9lRhQDdba95OhjY%2Fsyt06wpfC7fBr6BkFUIeNbcnKdXw%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e713e8db73a3-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5ODE2LCJuYW1lIjoiQWRkIGJ1aWxkaW5ncyB0byBSYXBwZXJzd2lsbCBpbiBFZG1vbnRvbiwgQWxiZXJ0YSIsImFjdGlvbnMiOnsidG90YWwiOjM4LCJhdmFpbGFibGUiOjM4LCJmaXhlZCI6MCwiZmFsc2VQb3NpdGl2ZSI6MCwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjowLCJ0b29IYXJkIjowLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjowLCJ0YXNrc1dpdGhUaW1lIjowfX1d", "base64"));
  res.end();

  return __filename;
};
