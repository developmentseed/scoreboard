var path = require("path");

/**
 * GET /v2/projects/?page=1&action=map
 *
 * accept-language: en-US,en;q=0.9
 * host: tasks-backend.openstreetmap.us
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 404;

  res.setHeader("server", "nginx");
  res.setHeader("date", "Fri, 09 Apr 2021 16:20:44 GMT");
  res.setHeader("content-type", "text/html");
  res.setHeader("content-length", "232");
  res.setHeader("connection", "close");
  res.setHeader("access-control-allow-origin", "*");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("PCFET0NUWVBFIEhUTUwgUFVCTElDICItLy9XM0MvL0RURCBIVE1MIDMuMiBGaW5hbC8vRU4iPgo8dGl0bGU+NDA0IE5vdCBGb3VuZDwvdGl0bGU+CjxoMT5Ob3QgRm91bmQ8L2gxPgo8cD5UaGUgcmVxdWVzdGVkIFVSTCB3YXMgbm90IGZvdW5kIG9uIHRoZSBzZXJ2ZXIuIElmIHlvdSBlbnRlcmVkIHRoZSBVUkwgbWFudWFsbHkgcGxlYXNlIGNoZWNrIHlvdXIgc3BlbGxpbmcgYW5kIHRyeSBhZ2Fpbi48L3A+Cg==", "base64"));
  res.end();

  return __filename;
};
