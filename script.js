const _0x111f39 = _0x5cf0;
(function (_0x5a2ac6, _0x49bfcc) {
  const _0x1d4196 = _0x5cf0,
    _0x37a049 = _0x5a2ac6();
  while (!![]) {
    try {
      const _0xad62f2 =
        parseInt(_0x1d4196(0x1c9)) / 0x1 +
        parseInt(_0x1d4196(0x1bf)) / 0x2 +
        -parseInt(_0x1d4196(0x1c7)) / 0x3 +
        -parseInt(_0x1d4196(0x1d8)) / 0x4 +
        parseInt(_0x1d4196(0x1da)) / 0x5 +
        (parseInt(_0x1d4196(0x1cb)) / 0x6) *
          (-parseInt(_0x1d4196(0x1d1)) / 0x7) +
        (-parseInt(_0x1d4196(0x1c2)) / 0x8) *
          (-parseInt(_0x1d4196(0x1bd)) / 0x9);
      if (_0xad62f2 === _0x49bfcc) break;
      else _0x37a049["push"](_0x37a049["shift"]());
    } catch (_0xd3dead) {
      _0x37a049["push"](_0x37a049["shift"]());
    }
  }
})(_0x2ee7, 0xa4c04);
const passwordInput = document[_0x111f39(0x1cf)]("passwordInput"),
  encodeButton = document[_0x111f39(0x1cf)](_0x111f39(0x1d7)),
  encodedPassword = document[_0x111f39(0x1cf)](_0x111f39(0x1c0)),
  copyButton = document[_0x111f39(0x1cf)]("copyButton"),
  copyMessage = document[_0x111f39(0x1cf)](_0x111f39(0x1d4)),
  togglePassword = document[_0x111f39(0x1cf)](_0x111f39(0x1cd)),
  secretKey = _0x111f39(0x1d3);
encodeButton[_0x111f39(0x1b7)](_0x111f39(0x1c6), () => {
  const _0x4ad1c1 = _0x111f39,
    _0x271488 = passwordInput[_0x4ad1c1(0x1c8)];
  if (_0x271488) {
    const _0x2a005f = encodePasswordWithSecret(_0x271488, secretKey);
    encodedPassword["value"] = _0x2a005f;
  } else alert("Please\x20enter\x20a\x20secret");
}),
  copyButton[_0x111f39(0x1b7)]("click", () => {
    const _0x229a2c = _0x111f39;
    encodedPassword[_0x229a2c(0x1c8)]
      ? navigator[_0x229a2c(0x1ca)]
          [_0x229a2c(0x1c5)](encodedPassword[_0x229a2c(0x1c8)])
          [_0x229a2c(0x1b8)](() => {
            const _0x2e563a = _0x229a2c;
            copyMessage[_0x2e563a(0x1c1)][_0x2e563a(0x1b9)](_0x2e563a(0x1bc)),
              setTimeout(() => {
                const _0x97dc39 = _0x2e563a;
                copyMessage[_0x97dc39(0x1c1)][_0x97dc39(0x1d5)]("hidden");
              }, 0x7d0);
          })
          [_0x229a2c(0x1d0)]((_0x2f7eeb) => alert(_0x229a2c(0x1ba), _0x2f7eeb))
      : alert("No\x20encoded\x20secret\x20to\x20copy");
  }),
  passwordInput[_0x111f39(0x1b7)](_0x111f39(0x1c3), (_0x5637e9) => {
    const _0x4b847e = _0x111f39;
    _0x5637e9[_0x4b847e(0x1c4)](), alert("Copy\x20is\x20not\x20allowed");
  }),
  passwordInput[_0x111f39(0x1b7)](_0x111f39(0x1bb), (_0x2029cf) => {
    const _0x1e761c = _0x111f39;
    _0x2029cf[_0x1e761c(0x1c4)](), alert(_0x1e761c(0x1cc));
  }),
  passwordInput[_0x111f39(0x1b7)]("cut", (_0xc26109) => {
    _0xc26109["preventDefault"](), alert("Cut\x20is\x20not\x20allowed");
  }),
  passwordInput["addEventListener"](_0x111f39(0x1d9), (_0x49695b) => {
    const _0x4fdff7 = _0x111f39;
    _0x49695b[_0x4fdff7(0x1c4)]();
  }),
  togglePassword["addEventListener"]("click", () => {
    const _0x12c27f = _0x111f39,
      _0x2c98d1 =
        passwordInput[_0x12c27f(0x1ce)] === _0x12c27f(0x1b6)
          ? _0x12c27f(0x1d2)
          : _0x12c27f(0x1b6);
    (passwordInput[_0x12c27f(0x1ce)] = _0x2c98d1),
      (togglePassword[_0x12c27f(0x1be)] =
        _0x2c98d1 === _0x12c27f(0x1b6) ? "👁️" : "🙈");
  });
function _0x5cf0(_0x259359, _0x271a4c) {
  const _0x2ee729 = _0x2ee7();
  return (
    (_0x5cf0 = function (_0x5cf0bf, _0x308371) {
      _0x5cf0bf = _0x5cf0bf - 0x1b6;
      let _0x36e361 = _0x2ee729[_0x5cf0bf];
      return _0x36e361;
    }),
    _0x5cf0(_0x259359, _0x271a4c)
  );
}
function encodePasswordWithSecret(_0xce1850, _0x3e643a) {
  const _0x416268 = _0x111f39;
  let _0x50cac0 = "";
  for (let _0x579aa0 = 0x0; _0x579aa0 < _0xce1850["length"]; _0x579aa0++) {
    _0x50cac0 +=
      _0xce1850[_0x579aa0] + _0x3e643a[_0x579aa0 % _0x3e643a[_0x416268(0x1d6)]];
  }
  return _0x50cac0;
}
function _0x2ee7() {
  const _0x33ef97 = [
    "writeText",
    "click",
    "2592516SSGEYc",
    "value",
    "281596JLjOex",
    "clipboard",
    "516SNqyYy",
    "Paste\x20is\x20not\x20allowed",
    "togglePassword",
    "type",
    "getElementById",
    "catch",
    "67039TmaZjP",
    "text",
    "SecretToSecret2025",
    "copyMessage",
    "add",
    "length",
    "encodeButton",
    "1091360PwhWQc",
    "contextmenu",
    "4971295qkhLcM",
    "password",
    "addEventListener",
    "then",
    "remove",
    "Failed\x20to\x20copy:\x20",
    "paste",
    "hidden",
    "5539266rrMwir",
    "textContent",
    "257302AxlbPV",
    "encodedPassword",
    "classList",
    "16iNhQnz",
    "copy",
    "preventDefault",
  ];
  _0x2ee7 = function () {
    return _0x33ef97;
  };
  return _0x2ee7();
}
