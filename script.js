function _0x1e1d() {
  const _0x586aae = [
    "copyButton",
    "contextmenu",
    "3330136BIYdaH",
    "getElementById",
    "13970880hqJZMP",
    "56125iHtdQp",
    "value",
    "addEventListener",
    "SecretToSecret2025",
    "passwordInput",
    "1306626LxGkQN",
    "encodeButton",
    "Failed\x20to\x20copy:\x20",
    "Please\x20enter\x20a\x20secret",
    "copy",
    "click",
    "1041132CzFyFu",
    "type",
    "preventDefault",
    "Copy\x20is\x20not\x20allowed",
    "156bcMTNm",
    "cut",
    "paste",
    "length",
    "then",
    "writeText",
    "clipboard",
    "11439757bJTjtk",
    "remove",
    "password",
    "5276055ZQOnQJ",
    "No\x20encoded\x20secret\x20to\x20copy",
    "hidden",
    "👁️",
    "classList",
    "copyMessage",
  ];
  _0x1e1d = function () {
    return _0x586aae;
  };
  return _0x1e1d();
}
const _0x1caaa0 = _0x2624;
(function (_0xd03a70, _0x27085b) {
  const _0x41b853 = _0x2624,
    _0x15d777 = _0xd03a70();
  while (!![]) {
    try {
      const _0xaf9d55 =
        parseInt(_0x41b853(0xcf)) / 0x1 +
        -parseInt(_0x41b853(0xc9)) / 0x2 +
        -parseInt(_0x41b853(0xdd)) / 0x3 +
        -parseInt(_0x41b853(0xe5)) / 0x4 +
        (parseInt(_0x41b853(0xc4)) / 0x5) * (-parseInt(_0x41b853(0xd3)) / 0x6) +
        parseInt(_0x41b853(0xda)) / 0x7 +
        parseInt(_0x41b853(0xc3)) / 0x8;
      if (_0xaf9d55 === _0x27085b) break;
      else _0x15d777["push"](_0x15d777["shift"]());
    } catch (_0x41d26e) {
      _0x15d777["push"](_0x15d777["shift"]());
    }
  }
})(_0x1e1d, 0xd8271);
function _0x2624(_0x2e86cf, _0x2a9f8c) {
  const _0x1e1d43 = _0x1e1d();
  return (
    (_0x2624 = function (_0x262494, _0x59a6bb) {
      _0x262494 = _0x262494 - 0xc3;
      let _0x7a9460 = _0x1e1d43[_0x262494];
      return _0x7a9460;
    }),
    _0x2624(_0x2e86cf, _0x2a9f8c)
  );
}
const passwordInput = document[_0x1caaa0(0xe6)](_0x1caaa0(0xc8)),
  encodeButton = document["getElementById"](_0x1caaa0(0xca)),
  encodedPassword = document[_0x1caaa0(0xe6)]("encodedPassword"),
  copyButton = document[_0x1caaa0(0xe6)](_0x1caaa0(0xe3)),
  copyMessage = document[_0x1caaa0(0xe6)](_0x1caaa0(0xe2)),
  togglePassword = document[_0x1caaa0(0xe6)]("togglePassword"),
  secretKey = _0x1caaa0(0xc7);
encodeButton["addEventListener"]("click", () => {
  const _0x51591d = _0x1caaa0,
    _0x3fd922 = passwordInput[_0x51591d(0xc5)];
  if (_0x3fd922) {
    const _0x16c8c7 = encodePasswordWithSecret(_0x3fd922, secretKey);
    encodedPassword["value"] = btoa(_0x16c8c7) + "@";
  } else alert(_0x51591d(0xcc));
}),
  copyButton["addEventListener"](_0x1caaa0(0xce), () => {
    const _0x615081 = _0x1caaa0;
    encodedPassword[_0x615081(0xc5)]
      ? navigator[_0x615081(0xd9)]
          [_0x615081(0xd8)](encodedPassword[_0x615081(0xc5)])
          [_0x615081(0xd7)](() => {
            const _0x555ed5 = _0x615081;
            copyMessage[_0x555ed5(0xe1)][_0x555ed5(0xdb)]("hidden"),
              setTimeout(() => {
                const _0x27a8b7 = _0x555ed5;
                copyMessage["classList"]["add"](_0x27a8b7(0xdf));
              }, 0x7d0);
          })
          ["catch"]((_0x22803e) => alert(_0x615081(0xcb), _0x22803e))
      : alert(_0x615081(0xde));
  }),
  passwordInput["addEventListener"](_0x1caaa0(0xcd), (_0x36587a) => {
    const _0x2d85ed = _0x1caaa0;
    _0x36587a[_0x2d85ed(0xd1)](), alert(_0x2d85ed(0xd2));
  }),
  passwordInput[_0x1caaa0(0xc6)](_0x1caaa0(0xd5), (_0xe012) => {
    const _0x57ed84 = _0x1caaa0;
    _0xe012[_0x57ed84(0xd1)](), alert("Paste\x20is\x20not\x20allowed");
  }),
  passwordInput[_0x1caaa0(0xc6)](_0x1caaa0(0xd4), (_0x27df30) => {
    const _0x260de1 = _0x1caaa0;
    _0x27df30[_0x260de1(0xd1)](), alert("Cut\x20is\x20not\x20allowed");
  }),
  passwordInput[_0x1caaa0(0xc6)](_0x1caaa0(0xe4), (_0x56ec00) => {
    const _0x2ee67a = _0x1caaa0;
    _0x56ec00[_0x2ee67a(0xd1)]();
  }),
  togglePassword[_0x1caaa0(0xc6)]("click", () => {
    const _0x4a7bd9 = _0x1caaa0,
      _0x42bf34 =
        passwordInput[_0x4a7bd9(0xd0)] === _0x4a7bd9(0xdc)
          ? "text"
          : _0x4a7bd9(0xdc);
    (passwordInput[_0x4a7bd9(0xd0)] = _0x42bf34),
      (togglePassword["textContent"] =
        _0x42bf34 === "password" ? _0x4a7bd9(0xe0) : "🙈");
  });
function encodePasswordWithSecret(_0x47f2e2, _0x40f4fd) {
  const _0x5c6343 = _0x1caaa0;
  let _0x5441f7 = "";
  for (let _0x13068a = 0x0; _0x13068a < _0x47f2e2["length"]; _0x13068a++) {
    _0x5441f7 +=
      _0x47f2e2[_0x13068a] + _0x40f4fd[_0x13068a % _0x40f4fd[_0x5c6343(0xd6)]];
  }
  return _0x5441f7;
}
