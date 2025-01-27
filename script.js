const _0x1365fa = _0x621e;
function _0x621e(_0x395328, _0x4337ea) {
  const _0x4f1047 = _0x4f10();
  return (
    (_0x621e = function (_0x621ef9, _0x225895) {
      _0x621ef9 = _0x621ef9 - 0xdf;
      let _0x2663be = _0x4f1047[_0x621ef9];
      return _0x2663be;
    }),
    _0x621e(_0x395328, _0x4337ea)
  );
}
(function (_0x77d952, _0x17fbb1) {
  const _0x169326 = _0x621e,
    _0x541ad9 = _0x77d952();
  while (!![]) {
    try {
      const _0x282ea8 =
        (-parseInt(_0x169326(0xfd)) / 0x1) *
          (-parseInt(_0x169326(0x102)) / 0x2) +
        (-parseInt(_0x169326(0xee)) / 0x3) * (parseInt(_0x169326(0xe3)) / 0x4) +
        (parseInt(_0x169326(0xef)) / 0x5) * (-parseInt(_0x169326(0xe4)) / 0x6) +
        (-parseInt(_0x169326(0xff)) / 0x7) * (parseInt(_0x169326(0xea)) / 0x8) +
        (parseInt(_0x169326(0xf1)) / 0x9) * (-parseInt(_0x169326(0xf4)) / 0xa) +
        (-parseInt(_0x169326(0xe8)) / 0xb) *
          (-parseInt(_0x169326(0x104)) / 0xc) +
        (-parseInt(_0x169326(0xed)) / 0xd) * (-parseInt(_0x169326(0xf7)) / 0xe);
      if (_0x282ea8 === _0x17fbb1) break;
      else _0x541ad9["push"](_0x541ad9["shift"]());
    } catch (_0xc22fab) {
      _0x541ad9["push"](_0x541ad9["shift"]());
    }
  }
})(_0x4f10, 0xebd67);
const passwordInput = document["getElementById"](_0x1365fa(0x107)),
  encodeButton = document[_0x1365fa(0x109)](_0x1365fa(0x100)),
  encodedPassword = document["getElementById"]("encodedPassword"),
  copyButton = document[_0x1365fa(0x109)]("copyButton"),
  copyMessage = document["getElementById"]("copyMessage"),
  togglePassword = document[_0x1365fa(0x109)](_0x1365fa(0x103)),
  secretKey = "SecretToSecret2025";
encodeButton[_0x1365fa(0xfb)]("click", () => {
  const _0x569fff = _0x1365fa,
    _0x459c00 = passwordInput[_0x569fff(0xfa)];
  if (_0x459c00) {
    const _0x9efb48 = encodePasswordWithSecret(_0x459c00, secretKey);
    encodedPassword[_0x569fff(0xfa)] = btoa(_0x9efb48);
  } else alert(_0x569fff(0xf3));
}),
  copyButton[_0x1365fa(0xfb)](_0x1365fa(0xdf), () => {
    const _0x247c39 = _0x1365fa;
    encodedPassword[_0x247c39(0xfa)]
      ? navigator[_0x247c39(0x101)]
          [_0x247c39(0xe9)](encodedPassword["value"])
          ["then"](() => {
            const _0x5622ec = _0x247c39;
            copyMessage["classList"][_0x5622ec(0xe6)]("hidden"),
              setTimeout(() => {
                const _0xb2a763 = _0x5622ec;
                copyMessage[_0xb2a763(0xe1)][_0xb2a763(0xe2)]("hidden");
              }, 0x7d0);
          })
          [_0x247c39(0xe5)]((_0x10966b) => alert(_0x247c39(0x105), _0x10966b))
      : alert(_0x247c39(0xe0));
  }),
  passwordInput[_0x1365fa(0xfb)](_0x1365fa(0xfc), (_0x542013) => {
    const _0x14dc1f = _0x1365fa;
    _0x542013[_0x14dc1f(0xf2)](), alert("Copy\x20is\x20not\x20allowed");
  }),
  passwordInput["addEventListener"](_0x1365fa(0xf8), (_0x27b035) => {
    const _0x1718fe = _0x1365fa;
    _0x27b035[_0x1718fe(0xf2)](), alert(_0x1718fe(0xeb));
  }),
  passwordInput["addEventListener"](_0x1365fa(0xf6), (_0x3e32f6) => {
    const _0x8105ec = _0x1365fa;
    _0x3e32f6["preventDefault"](), alert(_0x8105ec(0xfe));
  }),
  passwordInput[_0x1365fa(0xfb)](_0x1365fa(0xec), (_0x22e09b) => {
    const _0x46fcbb = _0x1365fa;
    _0x22e09b[_0x46fcbb(0xf2)]();
  }),
  togglePassword[_0x1365fa(0xfb)](_0x1365fa(0xdf), () => {
    const _0x157c80 = _0x1365fa,
      _0x53e358 =
        passwordInput[_0x157c80(0x108)] === _0x157c80(0x106)
          ? _0x157c80(0xf9)
          : _0x157c80(0x106);
    (passwordInput[_0x157c80(0x108)] = _0x53e358),
      (togglePassword[_0x157c80(0xf5)] =
        _0x53e358 === _0x157c80(0x106) ? _0x157c80(0xf0) : "🙈");
  });
function _0x4f10() {
  const _0x42d34e = [
    "paste",
    "text",
    "value",
    "addEventListener",
    "copy",
    "73399HPAmPh",
    "Cut\x20is\x20not\x20allowed",
    "21lsyqTt",
    "encodeButton",
    "clipboard",
    "36QBwxCW",
    "togglePassword",
    "12ulIxPc",
    "Failed\x20to\x20copy:\x20",
    "password",
    "passwordInput",
    "type",
    "getElementById",
    "click",
    "No\x20encoded\x20secret\x20to\x20copy",
    "classList",
    "add",
    "172BTkJIc",
    "428196BXoyPr",
    "catch",
    "remove",
    "length",
    "9972490pBhbRn",
    "writeText",
    "649744DOBddY",
    "Paste\x20is\x20not\x20allowed",
    "contextmenu",
    "33683fxyjJt",
    "83319XlKqUz",
    "80AcmUZT",
    "👁️",
    "9qJPgtW",
    "preventDefault",
    "Please\x20enter\x20a\x20secret",
    "12134390WTCMJH",
    "textContent",
    "cut",
    "13678LVcOxG",
  ];
  _0x4f10 = function () {
    return _0x42d34e;
  };
  return _0x4f10();
}
function encodePasswordWithSecret(_0x45b230, _0x4147ba) {
  const _0x5df524 = _0x1365fa;
  let _0x480f34 = "";
  for (
    let _0x23661c = 0x0;
    _0x23661c < _0x45b230[_0x5df524(0xe7)];
    _0x23661c++
  ) {
    _0x480f34 +=
      _0x45b230[_0x23661c] + _0x4147ba[_0x23661c % _0x4147ba[_0x5df524(0xe7)]];
  }
  return _0x480f34;
}