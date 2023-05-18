import {
    r as Ko,
    c as Vo,
    s as Yo,
    g as Zn,
    b as jo,
    i as Qo,
    d as Go,
    e as Xn
} from "./main-b9bbb17f.js";
import {
    c as Zo,
    p as Xo,
    s as ea,
    a as ta,
    d as ra,
    b as wt,
    I as na,
    f as _n,
    J as vn,
    H as ia
} from "./index-a7a67b0b.js";
import "./events-276ce9ce.js";
var Lr = {};
Object.defineProperty(Lr, "__esModule", {
    value: !0
});
var ei = Lr.getWindowMetadata = void 0;
const wn = Zo;

function oa() {
    let t, e;
    try {
        t = wn.getDocumentOrThrow(), e = wn.getLocationOrThrow();
    } catch {
        return null;
    }

    function r() {
        const N = t.getElementsByTagName("link"),
            L = [];
        for (let P = 0; P < N.length; P++) {
            const U = N[P],
                $ = U.getAttribute("rel");
            if ($ && $.toLowerCase().indexOf("icon") > -1) {
                const S = U.getAttribute("href");
                if (S)
                    if (S.toLowerCase().indexOf("https:") === -1 && S.toLowerCase().indexOf("http:") === -1 && S.indexOf("//") !== 0) {
                        let k = e.protocol + "//" + e.host;
                        if (S.indexOf("/") === 0)
                            k += S;
                        else {
                            const T = e.pathname.split("/");
                            T.pop();
                            const R = T.join("/");
                            k += R + "/" + S;
                        }
                        L.push(k);
                    } else if (S.indexOf("//") === 0) {
                    const k = e.protocol + S;
                    L.push(k);
                } else
                    L.push(S);
            }
        }
        return L;
    }

    function n(...N) {
        const L = t.getElementsByTagName("meta");
        for (let P = 0; P < L.length; P++) {
            const U = L[P],
                $ = ["itemprop", "property", "name"].map((S) => U.getAttribute(S)).filter((S) => S ? N.includes(S) : !1);
            if ($.length && $) {
                const S = U.getAttribute("content");
                if (S)
                    return S;
            }
        }
        return "";
    }

    function u() {
        let N = n("name", "og:site_name", "og:title", "twitter:title");
        return N || (N = t.title), N;
    }

    function o() {
        return n("description", "og:description", "twitter:description", "keywords");
    }
    const p = u(),
        f = o(),
        b = e.origin,
        I = r();
    return {
        description: f,
        url: b,
        icons: I,
        name: p
    };
}
ei = Lr.getWindowMetadata = oa;
var se = {};
Object.defineProperty(se, "__esModule", {
    value: !0
});
var ti = se.getLocalStorage = hi = se.getLocalStorageOrThrow = fi = se.getCrypto = li = se.getCryptoOrThrow = ui = se.getLocation = ci = se.getLocationOrThrow = si = se.getNavigator = ai = se.getNavigatorOrThrow = oi = se.getDocument = ii = se.getDocumentOrThrow = ni = se.getFromWindowOrThrow = ri = se.getFromWindow = void 0;

function Ge(t) {
    let e;
    return typeof window < "u" && typeof window[t] < "u" && (e = window[t]), e;
}
var ri = se.getFromWindow = Ge;

function ut(t) {
    const e = Ge(t);
    if (!e)
        throw new Error(`${t} is not defined in Window`);
    return e;
}
var ni = se.getFromWindowOrThrow = ut;

function aa() {
    return ut("document");
}
var ii = se.getDocumentOrThrow = aa;

function sa() {
    return Ge("document");
}
var oi = se.getDocument = sa;

function ca() {
    return ut("navigator");
}
var ai = se.getNavigatorOrThrow = ca;

function ua() {
    return Ge("navigator");
}
var si = se.getNavigator = ua;

function la() {
    return ut("location");
}
var ci = se.getLocationOrThrow = la;

function fa() {
    return Ge("location");
}
var ui = se.getLocation = fa;

function ha() {
    return ut("crypto");
}
var li = se.getCryptoOrThrow = ha;

function da() {
    return Ge("crypto");
}
var fi = se.getCrypto = da;

function pa() {
    return ut("localStorage");
}
var hi = se.getLocalStorageOrThrow = pa;

function ga() {
    return Ge("localStorage");
}
ti = se.getLocalStorage = ga;
var ma = globalThis && globalThis.__spreadArrays || function() {
        for (var t = 0, e = 0, r = arguments.length; e < r; e++)
            t += arguments[e].length;
        for (var n = Array(t), u = 0, e = 0; e < r; e++)
            for (var o = arguments[e], p = 0, f = o.length; p < f; p++, u++)
                n[u] = o[p];
        return n;
    },
    _a = (
        /** @class */
        function() {
            function t(e, r, n) {
                this.name = e, this.version = r, this.os = n, this.type = "browser";
            }
            return t;
        }()
    ),
    va = (
        /** @class */
        function() {
            function t(e) {
                this.version = e, this.type = "node", this.name = "node", this.os = process.platform;
            }
            return t;
        }()
    ),
    wa = (
        /** @class */
        function() {
            function t(e, r, n, u) {
                this.name = e, this.version = r, this.os = n, this.bot = u, this.type = "bot-device";
            }
            return t;
        }()
    ),
    ya = (
        /** @class */
        function() {
            function t() {
                this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null;
            }
            return t;
        }()
    ),
    ba = (
        /** @class */
        function() {
            function t() {
                this.type = "react-native", this.name = "react-native", this.version = null, this.os = null;
            }
            return t;
        }()
    ),
    Ma = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,
    xa = /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
    yn = 3,
    Ea = [
        ["aol", /AOLShield\/([0-9\._]+)/],
        ["edge", /Edge\/([0-9\._]+)/],
        ["edge-ios", /EdgiOS\/([0-9\._]+)/],
        ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
        ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
        ["samsung", /SamsungBrowser\/([0-9\.]+)/],
        ["silk", /\bSilk\/([0-9._-]+)\b/],
        ["miui", /MiuiBrowser\/([0-9\.]+)$/],
        ["beaker", /BeakerBrowser\/([0-9\.]+)/],
        ["edge-chromium", /EdgA?\/([0-9\.]+)/],
        [
            "chromium-webview",
            /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/
        ],
        ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
        ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
        ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
        ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
        ["fxios", /FxiOS\/([0-9\.]+)/],
        ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
        ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
        ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
        ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
        ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
        ["ie", /MSIE\s(7\.0)/],
        ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
        ["android", /Android\s([0-9\.]+)/],
        ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
        ["safari", /Version\/([0-9\._]+).*Safari/],
        ["facebook", /FBAV\/([0-9\.]+)/],
        ["instagram", /Instagram\s([0-9\.]+)/],
        ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
        ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
        ["searchbot", Ma]
    ],
    bn = [
        ["iOS", /iP(hone|od|ad)/],
        ["Android OS", /Android/],
        ["BlackBerry OS", /BlackBerry|BB10/],
        ["Windows Mobile", /IEMobile/],
        ["Amazon OS", /Kindle/],
        ["Windows 3.11", /Win16/],
        ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
        ["Windows 98", /(Windows 98)|(Win98)/],
        ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
        ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
        ["Windows Server 2003", /(Windows NT 5.2)/],
        ["Windows Vista", /(Windows NT 6.0)/],
        ["Windows 7", /(Windows NT 6.1)/],
        ["Windows 8", /(Windows NT 6.2)/],
        ["Windows 8.1", /(Windows NT 6.3)/],
        ["Windows 10", /(Windows NT 10.0)/],
        ["Windows ME", /Windows ME/],
        ["Open BSD", /OpenBSD/],
        ["Sun OS", /SunOS/],
        ["Chrome OS", /CrOS/],
        ["Linux", /(Linux)|(X11)/],
        ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
        ["QNX", /QNX/],
        ["BeOS", /BeOS/],
        ["OS/2", /OS\/2/]
    ];

function Sa(t) {
    return t ? Mn(t) : typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative" ? new ba() : typeof navigator < "u" ? Mn(navigator.userAgent) : Ia();
}

function Ca(t) {
    return t !== "" && Ea.reduce(function(e, r) {
        var n = r[0],
            u = r[1];
        if (e)
            return e;
        var o = u.exec(t);
        return !!o && [n, o];
    }, !1);
}

function Mn(t) {
    var e = Ca(t);
    if (!e)
        return null;
    var r = e[0],
        n = e[1];
    if (r === "searchbot")
        return new ya();
    var u = n[1] && n[1].split(/[._]/).slice(0, 3);
    u ? u.length < yn && (u = ma(u, Ra(yn - u.length))) : u = [];
    var o = u.join("."),
        p = ka(t),
        f = xa.exec(t);
    return f && f[1] ? new wa(r, o, p, f[1]) : new _a(r, o, p);
}

function ka(t) {
    for (var e = 0, r = bn.length; e < r; e++) {
        var n = bn[e],
            u = n[0],
            o = n[1],
            p = o.exec(t);
        if (p)
            return u;
    }
    return null;
}

function Ia() {
    var t = typeof process < "u" && process.version;
    return t ? new va(process.version.slice(1)) : null;
}

function Ra(t) {
    for (var e = [], r = 0; r < t; r++)
        e.push("0");
    return e;
}

function Lt(t) {
    return Sa(t);
}

function Ut() {
    const t = Lt();
    return t && t.os ? t.os : void 0;
}

function di() {
    const t = Ut();
    return t ? t.toLowerCase().includes("android") : !1;
}

function pi() {
    const t = Ut();
    return t ? t.toLowerCase().includes("ios") || t.toLowerCase().includes("mac") && navigator.maxTouchPoints > 1 : !1;
}

function gi() {
    return Ut() ? di() || pi() : !1;
}

function mi() {
    const t = Lt();
    return t && t.name ? t.name.toLowerCase() === "node" : !1;
}

function _i() {
    return !mi() && !!vi();
}
const Ta = ri,
    Aa = ni,
    Ba = ii,
    Na = oi,
    Oa = ai,
    vi = si,
    La = ci,
    wi = ui,
    Ua = li,
    Fa = fi,
    Pa = hi,
    Ft = ti;

function br() {
    return ei();
}

function qa(t) {
    if (typeof t != "string")
        throw new Error(`Cannot safe json parse value of type ${typeof t}`);
    try {
        return JSON.parse(t);
    } catch {
        return t;
    }
}

function Da(t) {
    return typeof t == "string" ? t : JSON.stringify(t);
}
const yi = qa,
    bi = Da;

function Ur(t, e) {
    const r = bi(e),
        n = Ft();
    n && n.setItem(t, r);
}

function Fr(t) {
    let e = null,
        r = null;
    const n = Ft();
    return n && (r = n.getItem(t)), e = r && yi(r), e;
}

function Pr(t) {
    const e = Ft();
    e && e.removeItem(t);
}
const It = "WALLETCONNECT_DEEPLINK_CHOICE";

function $a(t, e) {
    const r = encodeURIComponent(t);
    return e.universalLink ? `${e.universalLink}/wc?uri=${r}` : e.deepLink ? `${e.deepLink}${e.deepLink.endsWith(":") ? "//" : "/"}wc?uri=${r}` : "";
}

function Wa(t) {
    const e = t.href.split("?")[0];
    Ur(It, Object.assign(Object.assign({}, t), {
        href: e
    }));
}

function Mi(t, e) {
    return t.filter((r) => r.name.toLowerCase().includes(e.toLowerCase()))[0];
}

function Ha(t, e) {
    let r = t;
    return e && (r = e.map((n) => Mi(t, n)).filter(Boolean)), r;
}
const xi = "https://registry.walletconnect.com";

function za() {
    return xi + "/api/v2/wallets";
}

function Ja() {
    return xi + "/api/v2/dapps";
}

function Ei(t, e = "mobile") {
    var r;
    return {
        name: t.name || "",
        shortName: t.metadata.shortName || "",
        color: t.metadata.colors.primary || "",
        logo: (r = t.image_url.sm) !== null && r !== void 0 ? r : "",
        universalLink: t[e].universal || "",
        deepLink: t[e].native || ""
    };
}

function Ka(t, e = "mobile") {
    return Object.values(t).filter((r) => !!r[e].universal || !!r[e].native).map((r) => Ei(r, e));
}
const Va = /* @__PURE__ */ Object.freeze( /* @__PURE__ */ Object.defineProperty({
        __proto__: null,
        detectEnv: Lt,
        detectOS: Ut,
        formatIOSMobile: $a,
        formatMobileRegistry: Ka,
        formatMobileRegistryEntry: Ei,
        getClientMeta: br,
        getCrypto: Fa,
        getCryptoOrThrow: Ua,
        getDappRegistryUrl: Ja,
        getDocument: Na,
        getDocumentOrThrow: Ba,
        getFromWindow: Ta,
        getFromWindowOrThrow: Aa,
        getLocal: Fr,
        getLocalStorage: Ft,
        getLocalStorageOrThrow: Pa,
        getLocation: wi,
        getLocationOrThrow: La,
        getMobileLinkRegistry: Ha,
        getMobileRegistryEntry: Mi,
        getNavigator: vi,
        getNavigatorOrThrow: Oa,
        getWalletRegistryUrl: za,
        isAndroid: di,
        isBrowser: _i,
        isIOS: pi,
        isMobile: gi,
        isNode: mi,
        mobileLinkChoiceKey: It,
        removeLocal: Pr,
        safeJsonParse: yi,
        safeJsonStringify: bi,
        saveMobileLinkInfo: Wa,
        setLocal: Ur
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Ya = [
        "session_request",
        "session_update",
        "exchange_key",
        "connect",
        "disconnect",
        "display_uri",
        "modal_closed",
        "transport_open",
        "transport_close",
        "transport_error"
    ],
    qr = [
        "eth_sendTransaction",
        "eth_signTransaction",
        "eth_sign",
        "eth_signTypedData",
        "eth_signTypedData_v1",
        "eth_signTypedData_v2",
        "eth_signTypedData_v3",
        "eth_signTypedData_v4",
        "personal_sign",
        "wallet_addEthereumChain",
        "wallet_switchEthereumChain",
        "wallet_getPermissions",
        "wallet_requestPermissions",
        "wallet_registerOnboarding",
        "wallet_watchAsset",
        "wallet_scanQRCode"
    ],
    ja = {
        1: "mainnet",
        3: "ropsten",
        4: "rinkeby",
        5: "goerli",
        42: "kovan"
    };
var Mr = {},
    Qa = {
        get exports() {
            return Mr;
        },
        set exports(t) {
            Mr = t;
        }
    };
(function(t) {
    (function(e, r) {
        function n(y, i) {
            if (!y)
                throw new Error(i || "Assertion failed");
        }

        function u(y, i) {
            y.super_ = i;
            var l = function() {};
            l.prototype = i.prototype, y.prototype = new l(), y.prototype.constructor = y;
        }

        function o(y, i, l) {
            if (o.isBN(y))
                return y;
            this.negative = 0, this.words = null, this.length = 0, this.red = null, y !== null && ((i === "le" || i === "be") && (l = i, i = 10), this._init(y || 0, i || 10, l || "be"));
        }
        typeof e == "object" ? e.exports = o : r.BN = o, o.BN = o, o.wordSize = 26;
        var p;
        try {
            p = Ko.Buffer;
        } catch {}
        o.isBN = function(i) {
            return i instanceof o ? !0 : i !== null && typeof i == "object" && i.constructor.wordSize === o.wordSize && Array.isArray(i.words);
        }, o.max = function(i, l) {
            return i.cmp(l) > 0 ? i : l;
        }, o.min = function(i, l) {
            return i.cmp(l) < 0 ? i : l;
        }, o.prototype._init = function(i, l, h) {
            if (typeof i == "number")
                return this._initNumber(i, l, h);
            if (typeof i == "object")
                return this._initArray(i, l, h);
            l === "hex" && (l = 16), n(l === (l | 0) && l >= 2 && l <= 36), i = i.toString().replace(/\s+/g, "");
            var d = 0;
            i[0] === "-" && d++, l === 16 ? this._parseHex(i, d) : this._parseBase(i, l, d), i[0] === "-" && (this.negative = 1), this.strip(), h === "le" && this._initArray(this.toArray(), l, h);
        }, o.prototype._initNumber = function(i, l, h) {
            i < 0 && (this.negative = 1, i = -i), i < 67108864 ? (this.words = [i & 67108863], this.length = 1) : i < 4503599627370496 ? (this.words = [
                i & 67108863,
                i / 67108864 & 67108863
            ], this.length = 2) : (n(i < 9007199254740992), this.words = [
                i & 67108863,
                i / 67108864 & 67108863,
                1
            ], this.length = 3), h === "le" && this._initArray(this.toArray(), l, h);
        }, o.prototype._initArray = function(i, l, h) {
            if (n(typeof i.length == "number"), i.length <= 0)
                return this.words = [0], this.length = 1, this;
            this.length = Math.ceil(i.length / 3), this.words = new Array(this.length);
            for (var d = 0; d < this.length; d++)
                this.words[d] = 0;
            var v, M, C = 0;
            if (h === "be")
                for (d = i.length - 1, v = 0; d >= 0; d -= 3)
                    M = i[d] | i[d - 1] << 8 | i[d - 2] << 16, this.words[v] |= M << C & 67108863, this.words[v + 1] = M >>> 26 - C & 67108863, C += 24, C >= 26 && (C -= 26, v++);
            else if (h === "le")
                for (d = 0, v = 0; d < i.length; d += 3)
                    M = i[d] | i[d + 1] << 8 | i[d + 2] << 16, this.words[v] |= M << C & 67108863, this.words[v + 1] = M >>> 26 - C & 67108863, C += 24, C >= 26 && (C -= 26, v++);
            return this.strip();
        };

        function f(y, i, l) {
            for (var h = 0, d = Math.min(y.length, l), v = i; v < d; v++) {
                var M = y.charCodeAt(v) - 48;
                h <<= 4, M >= 49 && M <= 54 ? h |= M - 49 + 10 : M >= 17 && M <= 22 ? h |= M - 17 + 10 : h |= M & 15;
            }
            return h;
        }
        o.prototype._parseHex = function(i, l) {
            this.length = Math.ceil((i.length - l) / 6), this.words = new Array(this.length);
            for (var h = 0; h < this.length; h++)
                this.words[h] = 0;
            var d, v, M = 0;
            for (h = i.length - 6, d = 0; h >= l; h -= 6)
                v = f(i, h, h + 6), this.words[d] |= v << M & 67108863, this.words[d + 1] |= v >>> 26 - M & 4194303, M += 24, M >= 26 && (M -= 26, d++);
            h + 6 !== l && (v = f(i, l, h + 6), this.words[d] |= v << M & 67108863, this.words[d + 1] |= v >>> 26 - M & 4194303), this.strip();
        };

        function b(y, i, l, h) {
            for (var d = 0, v = Math.min(y.length, l), M = i; M < v; M++) {
                var C = y.charCodeAt(M) - 48;
                d *= h, C >= 49 ? d += C - 49 + 10 : C >= 17 ? d += C - 17 + 10 : d += C;
            }
            return d;
        }
        o.prototype._parseBase = function(i, l, h) {
            this.words = [0], this.length = 1;
            for (var d = 0, v = 1; v <= 67108863; v *= l)
                d++;
            d--, v = v / l | 0;
            for (var M = i.length - h, C = M % d, m = Math.min(M, M - C) + h, a = 0, _ = h; _ < m; _ += d)
                a = b(i, _, _ + d, l), this.imuln(v), this.words[0] + a < 67108864 ? this.words[0] += a : this._iaddn(a);
            if (C !== 0) {
                var F = 1;
                for (a = b(i, _, i.length, l), _ = 0; _ < C; _++)
                    F *= l;
                this.imuln(F), this.words[0] + a < 67108864 ? this.words[0] += a : this._iaddn(a);
            }
        }, o.prototype.copy = function(i) {
            i.words = new Array(this.length);
            for (var l = 0; l < this.length; l++)
                i.words[l] = this.words[l];
            i.length = this.length, i.negative = this.negative, i.red = this.red;
        }, o.prototype.clone = function() {
            var i = new o(null);
            return this.copy(i), i;
        }, o.prototype._expand = function(i) {
            for (; this.length < i;)
                this.words[this.length++] = 0;
            return this;
        }, o.prototype.strip = function() {
            for (; this.length > 1 && this.words[this.length - 1] === 0;)
                this.length--;
            return this._normSign();
        }, o.prototype._normSign = function() {
            return this.length === 1 && this.words[0] === 0 && (this.negative = 0), this;
        }, o.prototype.inspect = function() {
            return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
        };
        var I = [
                "",
                "0",
                "00",
                "000",
                "0000",
                "00000",
                "000000",
                "0000000",
                "00000000",
                "000000000",
                "0000000000",
                "00000000000",
                "000000000000",
                "0000000000000",
                "00000000000000",
                "000000000000000",
                "0000000000000000",
                "00000000000000000",
                "000000000000000000",
                "0000000000000000000",
                "00000000000000000000",
                "000000000000000000000",
                "0000000000000000000000",
                "00000000000000000000000",
                "000000000000000000000000",
                "0000000000000000000000000"
            ],
            E = [
                0,
                0,
                25,
                16,
                12,
                11,
                10,
                9,
                8,
                8,
                7,
                7,
                7,
                7,
                6,
                6,
                6,
                6,
                6,
                6,
                6,
                5,
                5,
                5,
                5,
                5,
                5,
                5,
                5,
                5,
                5,
                5,
                5,
                5,
                5,
                5,
                5
            ],
            N = [
                0,
                0,
                33554432,
                43046721,
                16777216,
                48828125,
                60466176,
                40353607,
                16777216,
                43046721,
                1e7,
                19487171,
                35831808,
                62748517,
                7529536,
                11390625,
                16777216,
                24137569,
                34012224,
                47045881,
                64e6,
                4084101,
                5153632,
                6436343,
                7962624,
                9765625,
                11881376,
                14348907,
                17210368,
                20511149,
                243e5,
                28629151,
                33554432,
                39135393,
                45435424,
                52521875,
                60466176
            ];
        o.prototype.toString = function(i, l) {
            i = i || 10, l = l | 0 || 1;
            var h;
            if (i === 16 || i === "hex") {
                h = "";
                for (var d = 0, v = 0, M = 0; M < this.length; M++) {
                    var C = this.words[M],
                        m = ((C << d | v) & 16777215).toString(16);
                    v = C >>> 24 - d & 16777215, v !== 0 || M !== this.length - 1 ? h = I[6 - m.length] + m + h : h = m + h, d += 2, d >= 26 && (d -= 26, M--);
                }
                for (v !== 0 && (h = v.toString(16) + h); h.length % l !== 0;)
                    h = "0" + h;
                return this.negative !== 0 && (h = "-" + h), h;
            }
            if (i === (i | 0) && i >= 2 && i <= 36) {
                var a = E[i],
                    _ = N[i];
                h = "";
                var F = this.clone();
                for (F.negative = 0; !F.isZero();) {
                    var q = F.modn(_).toString(i);
                    F = F.idivn(_), F.isZero() ? h = q + h : h = I[a - q.length] + q + h;
                }
                for (this.isZero() && (h = "0" + h); h.length % l !== 0;)
                    h = "0" + h;
                return this.negative !== 0 && (h = "-" + h), h;
            }
            n(!1, "Base should be between 2 and 36");
        }, o.prototype.toNumber = function() {
            var i = this.words[0];
            return this.length === 2 ? i += this.words[1] * 67108864 : this.length === 3 && this.words[2] === 1 ? i += 4503599627370496 + this.words[1] * 67108864 : this.length > 2 && n(!1, "Number can only safely store up to 53 bits"), this.negative !== 0 ? -i : i;
        }, o.prototype.toJSON = function() {
            return this.toString(16);
        }, o.prototype.toBuffer = function(i, l) {
            return n(typeof p < "u"), this.toArrayLike(p, i, l);
        }, o.prototype.toArray = function(i, l) {
            return this.toArrayLike(Array, i, l);
        }, o.prototype.toArrayLike = function(i, l, h) {
            var d = this.byteLength(),
                v = h || Math.max(1, d);
            n(d <= v, "byte array longer than desired length"), n(v > 0, "Requested array length <= 0"), this.strip();
            var M = l === "le",
                C = new i(v),
                m, a, _ = this.clone();
            if (M) {
                for (a = 0; !_.isZero(); a++)
                    m = _.andln(255), _.iushrn(8), C[a] = m;
                for (; a < v; a++)
                    C[a] = 0;
            } else {
                for (a = 0; a < v - d; a++)
                    C[a] = 0;
                for (a = 0; !_.isZero(); a++)
                    m = _.andln(255), _.iushrn(8), C[v - a - 1] = m;
            }
            return C;
        }, Math.clz32 ? o.prototype._countBits = function(i) {
            return 32 - Math.clz32(i);
        } : o.prototype._countBits = function(i) {
            var l = i,
                h = 0;
            return l >= 4096 && (h += 13, l >>>= 13), l >= 64 && (h += 7, l >>>= 7), l >= 8 && (h += 4, l >>>= 4), l >= 2 && (h += 2, l >>>= 2), h + l;
        }, o.prototype._zeroBits = function(i) {
            if (i === 0)
                return 26;
            var l = i,
                h = 0;
            return l & 8191 || (h += 13, l >>>= 13), l & 127 || (h += 7, l >>>= 7), l & 15 || (h += 4, l >>>= 4), l & 3 || (h += 2, l >>>= 2), l & 1 || h++, h;
        }, o.prototype.bitLength = function() {
            var i = this.words[this.length - 1],
                l = this._countBits(i);
            return (this.length - 1) * 26 + l;
        };

        function L(y) {
            for (var i = new Array(y.bitLength()), l = 0; l < i.length; l++) {
                var h = l / 26 | 0,
                    d = l % 26;
                i[l] = (y.words[h] & 1 << d) >>> d;
            }
            return i;
        }
        o.prototype.zeroBits = function() {
            if (this.isZero())
                return 0;
            for (var i = 0, l = 0; l < this.length; l++) {
                var h = this._zeroBits(this.words[l]);
                if (i += h, h !== 26)
                    break;
            }
            return i;
        }, o.prototype.byteLength = function() {
            return Math.ceil(this.bitLength() / 8);
        }, o.prototype.toTwos = function(i) {
            return this.negative !== 0 ? this.abs().inotn(i).iaddn(1) : this.clone();
        }, o.prototype.fromTwos = function(i) {
            return this.testn(i - 1) ? this.notn(i).iaddn(1).ineg() : this.clone();
        }, o.prototype.isNeg = function() {
            return this.negative !== 0;
        }, o.prototype.neg = function() {
            return this.clone().ineg();
        }, o.prototype.ineg = function() {
            return this.isZero() || (this.negative ^= 1), this;
        }, o.prototype.iuor = function(i) {
            for (; this.length < i.length;)
                this.words[this.length++] = 0;
            for (var l = 0; l < i.length; l++)
                this.words[l] = this.words[l] | i.words[l];
            return this.strip();
        }, o.prototype.ior = function(i) {
            return n((this.negative | i.negative) === 0), this.iuor(i);
        }, o.prototype.or = function(i) {
            return this.length > i.length ? this.clone().ior(i) : i.clone().ior(this);
        }, o.prototype.uor = function(i) {
            return this.length > i.length ? this.clone().iuor(i) : i.clone().iuor(this);
        }, o.prototype.iuand = function(i) {
            var l;
            this.length > i.length ? l = i : l = this;
            for (var h = 0; h < l.length; h++)
                this.words[h] = this.words[h] & i.words[h];
            return this.length = l.length, this.strip();
        }, o.prototype.iand = function(i) {
            return n((this.negative | i.negative) === 0), this.iuand(i);
        }, o.prototype.and = function(i) {
            return this.length > i.length ? this.clone().iand(i) : i.clone().iand(this);
        }, o.prototype.uand = function(i) {
            return this.length > i.length ? this.clone().iuand(i) : i.clone().iuand(this);
        }, o.prototype.iuxor = function(i) {
            var l, h;
            this.length > i.length ? (l = this, h = i) : (l = i, h = this);
            for (var d = 0; d < h.length; d++)
                this.words[d] = l.words[d] ^ h.words[d];
            if (this !== l)
                for (; d < l.length; d++)
                    this.words[d] = l.words[d];
            return this.length = l.length, this.strip();
        }, o.prototype.ixor = function(i) {
            return n((this.negative | i.negative) === 0), this.iuxor(i);
        }, o.prototype.xor = function(i) {
            return this.length > i.length ? this.clone().ixor(i) : i.clone().ixor(this);
        }, o.prototype.uxor = function(i) {
            return this.length > i.length ? this.clone().iuxor(i) : i.clone().iuxor(this);
        }, o.prototype.inotn = function(i) {
            n(typeof i == "number" && i >= 0);
            var l = Math.ceil(i / 26) | 0,
                h = i % 26;
            this._expand(l), h > 0 && l--;
            for (var d = 0; d < l; d++)
                this.words[d] = ~this.words[d] & 67108863;
            return h > 0 && (this.words[d] = ~this.words[d] & 67108863 >> 26 - h), this.strip();
        }, o.prototype.notn = function(i) {
            return this.clone().inotn(i);
        }, o.prototype.setn = function(i, l) {
            n(typeof i == "number" && i >= 0);
            var h = i / 26 | 0,
                d = i % 26;
            return this._expand(h + 1), l ? this.words[h] = this.words[h] | 1 << d : this.words[h] = this.words[h] & ~(1 << d), this.strip();
        }, o.prototype.iadd = function(i) {
            var l;
            if (this.negative !== 0 && i.negative === 0)
                return this.negative = 0, l = this.isub(i), this.negative ^= 1, this._normSign();
            if (this.negative === 0 && i.negative !== 0)
                return i.negative = 0, l = this.isub(i), i.negative = 1, l._normSign();
            var h, d;
            this.length > i.length ? (h = this, d = i) : (h = i, d = this);
            for (var v = 0, M = 0; M < d.length; M++)
                l = (h.words[M] | 0) + (d.words[M] | 0) + v, this.words[M] = l & 67108863, v = l >>> 26;
            for (; v !== 0 && M < h.length; M++)
                l = (h.words[M] | 0) + v, this.words[M] = l & 67108863, v = l >>> 26;
            if (this.length = h.length, v !== 0)
                this.words[this.length] = v, this.length++;
            else if (h !== this)
                for (; M < h.length; M++)
                    this.words[M] = h.words[M];
            return this;
        }, o.prototype.add = function(i) {
            var l;
            return i.negative !== 0 && this.negative === 0 ? (i.negative = 0, l = this.sub(i), i.negative ^= 1, l) : i.negative === 0 && this.negative !== 0 ? (this.negative = 0, l = i.sub(this), this.negative = 1, l) : this.length > i.length ? this.clone().iadd(i) : i.clone().iadd(this);
        }, o.prototype.isub = function(i) {
            if (i.negative !== 0) {
                i.negative = 0;
                var l = this.iadd(i);
                return i.negative = 1, l._normSign();
            } else if (this.negative !== 0)
                return this.negative = 0, this.iadd(i), this.negative = 1, this._normSign();
            var h = this.cmp(i);
            if (h === 0)
                return this.negative = 0, this.length = 1, this.words[0] = 0, this;
            var d, v;
            h > 0 ? (d = this, v = i) : (d = i, v = this);
            for (var M = 0, C = 0; C < v.length; C++)
                l = (d.words[C] | 0) - (v.words[C] | 0) + M, M = l >> 26, this.words[C] = l & 67108863;
            for (; M !== 0 && C < d.length; C++)
                l = (d.words[C] | 0) + M, M = l >> 26, this.words[C] = l & 67108863;
            if (M === 0 && C < d.length && d !== this)
                for (; C < d.length; C++)
                    this.words[C] = d.words[C];
            return this.length = Math.max(this.length, C), d !== this && (this.negative = 1), this.strip();
        }, o.prototype.sub = function(i) {
            return this.clone().isub(i);
        };

        function P(y, i, l) {
            l.negative = i.negative ^ y.negative;
            var h = y.length + i.length | 0;
            l.length = h, h = h - 1 | 0;
            var d = y.words[0] | 0,
                v = i.words[0] | 0,
                M = d * v,
                C = M & 67108863,
                m = M / 67108864 | 0;
            l.words[0] = C;
            for (var a = 1; a < h; a++) {
                for (var _ = m >>> 26, F = m & 67108863, q = Math.min(a, i.length - 1), z = Math.max(0, a - y.length + 1); z <= q; z++) {
                    var Q = a - z | 0;
                    d = y.words[Q] | 0, v = i.words[z] | 0, M = d * v + F, _ += M / 67108864 | 0, F = M & 67108863;
                }
                l.words[a] = F | 0, m = _ | 0;
            }
            return m !== 0 ? l.words[a] = m | 0 : l.length--, l.strip();
        }
        var U = function(i, l, h) {
            var d = i.words,
                v = l.words,
                M = h.words,
                C = 0,
                m, a, _, F = d[0] | 0,
                q = F & 8191,
                z = F >>> 13,
                Q = d[1] | 0,
                ee = Q & 8191,
                re = Q >>> 13,
                Pe = d[2] | 0,
                te = Pe & 8191,
                ie = Pe >>> 13,
                xt = d[3] | 0,
                ue = xt & 8191,
                ae = xt >>> 13,
                Le = d[4] | 0,
                ce = Le & 8191,
                he = Le >>> 13,
                g = d[5] | 0,
                s = g & 8191,
                c = g >>> 13,
                w = d[6] | 0,
                x = w & 8191,
                A = w >>> 13,
                O = d[7] | 0,
                J = O & 8191,
                K = O >>> 13,
                ne = d[8] | 0,
                Z = ne & 8191,
                G = ne >>> 13,
                je = d[9] | 0,
                le = je & 8191,
                fe = je >>> 13,
                sn = v[0] | 0,
                de = sn & 8191,
                pe = sn >>> 13,
                cn = v[1] | 0,
                ge = cn & 8191,
                me = cn >>> 13,
                un = v[2] | 0,
                _e = un & 8191,
                ve = un >>> 13,
                ln = v[3] | 0,
                we = ln & 8191,
                ye = ln >>> 13,
                fn = v[4] | 0,
                be = fn & 8191,
                Me = fn >>> 13,
                hn = v[5] | 0,
                xe = hn & 8191,
                Ee = hn >>> 13,
                dn = v[6] | 0,
                Se = dn & 8191,
                Ce = dn >>> 13,
                pn = v[7] | 0,
                ke = pn & 8191,
                Ie = pn >>> 13,
                gn = v[8] | 0,
                Re = gn & 8191,
                Te = gn >>> 13,
                mn = v[9] | 0,
                Ae = mn & 8191,
                Be = mn >>> 13;
            h.negative = i.negative ^ l.negative, h.length = 19, m = Math.imul(q, de), a = Math.imul(q, pe), a = a + Math.imul(z, de) | 0, _ = Math.imul(z, pe);
            var Kt = (C + m | 0) + ((a & 8191) << 13) | 0;
            C = (_ + (a >>> 13) | 0) + (Kt >>> 26) | 0, Kt &= 67108863, m = Math.imul(ee, de), a = Math.imul(ee, pe), a = a + Math.imul(re, de) | 0, _ = Math.imul(re, pe), m = m + Math.imul(q, ge) | 0, a = a + Math.imul(q, me) | 0, a = a + Math.imul(z, ge) | 0, _ = _ + Math.imul(z, me) | 0;
            var Vt = (C + m | 0) + ((a & 8191) << 13) | 0;
            C = (_ + (a >>> 13) | 0) + (Vt >>> 26) | 0, Vt &= 67108863, m = Math.imul(te, de), a = Math.imul(te, pe), a = a + Math.imul(ie, de) | 0, _ = Math.imul(ie, pe), m = m + Math.imul(ee, ge) | 0, a = a + Math.imul(ee, me) | 0, a = a + Math.imul(re, ge) | 0, _ = _ + Math.imul(re, me) | 0, m = m + Math.imul(q, _e) | 0, a = a + Math.imul(q, ve) | 0, a = a + Math.imul(z, _e) | 0, _ = _ + Math.imul(z, ve) | 0;
            var Yt = (C + m | 0) + ((a & 8191) << 13) | 0;
            C = (_ + (a >>> 13) | 0) + (Yt >>> 26) | 0, Yt &= 67108863, m = Math.imul(ue, de), a = Math.imul(ue, pe), a = a + Math.imul(ae, de) | 0, _ = Math.imul(ae, pe), m = m + Math.imul(te, ge) | 0, a = a + Math.imul(te, me) | 0, a = a + Math.imul(ie, ge) | 0, _ = _ + Math.imul(ie, me) | 0, m = m + Math.imul(ee, _e) | 0, a = a + Math.imul(ee, ve) | 0, a = a + Math.imul(re, _e) | 0, _ = _ + Math.imul(re, ve) | 0, m = m + Math.imul(q, we) | 0, a = a + Math.imul(q, ye) | 0, a = a + Math.imul(z, we) | 0, _ = _ + Math.imul(z, ye) | 0;
            var jt = (C + m | 0) + ((a & 8191) << 13) | 0;
            C = (_ + (a >>> 13) | 0) + (jt >>> 26) | 0, jt &= 67108863, m = Math.imul(ce, de), a = Math.imul(ce, pe), a = a + Math.imul(he, de) | 0, _ = Math.imul(he, pe), m = m + Math.imul(ue, ge) | 0, a = a + Math.imul(ue, me) | 0, a = a + Math.imul(ae, ge) | 0, _ = _ + Math.imul(ae, me) | 0, m = m + Math.imul(te, _e) | 0, a = a + Math.imul(te, ve) | 0, a = a + Math.imul(ie, _e) | 0, _ = _ + Math.imul(ie, ve) | 0, m = m + Math.imul(ee, we) | 0, a = a + Math.imul(ee, ye) | 0, a = a + Math.imul(re, we) | 0, _ = _ + Math.imul(re, ye) | 0, m = m + Math.imul(q, be) | 0, a = a + Math.imul(q, Me) | 0, a = a + Math.imul(z, be) | 0, _ = _ + Math.imul(z, Me) | 0;
            var Qt = (C + m | 0) + ((a & 8191) << 13) | 0;
            C = (_ + (a >>> 13) | 0) + (Qt >>> 26) | 0, Qt &= 67108863, m = Math.imul(s, de), a = Math.imul(s, pe), a = a + Math.imul(c, de) | 0, _ = Math.imul(c, pe), m = m + Math.imul(ce, ge) | 0, a = a + Math.imul(ce, me) | 0, a = a + Math.imul(he, ge) | 0, _ = _ + Math.imul(he, me) | 0, m = m + Math.imul(ue, _e) | 0, a = a + Math.imul(ue, ve) | 0, a = a + Math.imul(ae, _e) | 0, _ = _ + Math.imul(ae, ve) | 0, m = m + Math.imul(te, we) | 0, a = a + Math.imul(te, ye) | 0, a = a + Math.imul(ie, we) | 0, _ = _ + Math.imul(ie, ye) | 0, m = m + Math.imul(ee, be) | 0, a = a + Math.imul(ee, Me) | 0, a = a + Math.imul(re, be) | 0, _ = _ + Math.imul(re, Me) | 0, m = m + Math.imul(q, xe) | 0, a = a + Math.imul(q, Ee) | 0, a = a + Math.imul(z, xe) | 0, _ = _ + Math.imul(z, Ee) | 0;
            var Gt = (C + m | 0) + ((a & 8191) << 13) | 0;
            C = (_ + (a >>> 13) | 0) + (Gt >>> 26) | 0, Gt &= 67108863, m = Math.imul(x, de), a = Math.imul(x, pe), a = a + Math.imul(A, de) | 0, _ = Math.imul(A, pe), m = m + Math.imul(s, ge) | 0, a = a + Math.imul(s, me) | 0, a = a + Math.imul(c, ge) | 0, _ = _ + Math.imul(c, me) | 0, m = m + Math.imul(ce, _e) | 0, a = a + Math.imul(ce, ve) | 0, a = a + Math.imul(he, _e) | 0, _ = _ + Math.imul(he, ve) | 0, m = m + Math.imul(ue, we) | 0, a = a + Math.imul(ue, ye) | 0, a = a + Math.imul(ae, we) | 0, _ = _ + Math.imul(ae, ye) | 0, m = m + Math.imul(te, be) | 0, a = a + Math.imul(te, Me) | 0, a = a + Math.imul(ie, be) | 0, _ = _ + Math.imul(ie, Me) | 0, m = m + Math.imul(ee, xe) | 0, a = a + Math.imul(ee, Ee) | 0, a = a + Math.imul(re, xe) | 0, _ = _ + Math.imul(re, Ee) | 0, m = m + Math.imul(q, Se) | 0, a = a + Math.imul(q, Ce) | 0, a = a + Math.imul(z, Se) | 0, _ = _ + Math.imul(z, Ce) | 0;
            var Zt = (C + m | 0) + ((a & 8191) << 13) | 0;
            C = (_ + (a >>> 13) | 0) + (Zt >>> 26) | 0, Zt &= 67108863, m = Math.imul(J, de), a = Math.imul(J, pe), a = a + Math.imul(K, de) | 0, _ = Math.imul(K, pe), m = m + Math.imul(x, ge) | 0, a = a + Math.imul(x, me) | 0, a = a + Math.imul(A, ge) | 0, _ = _ + Math.imul(A, me) | 0, m = m + Math.imul(s, _e) | 0, a = a + Math.imul(s, ve) | 0, a = a + Math.imul(c, _e) | 0, _ = _ + Math.imul(c, ve) | 0, m = m + Math.imul(ce, we) | 0, a = a + Math.imul(ce, ye) | 0, a = a + Math.imul(he, we) | 0, _ = _ + Math.imul(he, ye) | 0, m = m + Math.imul(ue, be) | 0, a = a + Math.imul(ue, Me) | 0, a = a + Math.imul(ae, be) | 0, _ = _ + Math.imul(ae, Me) | 0, m = m + Math.imul(te, xe) | 0, a = a + Math.imul(te, Ee) | 0, a = a + Math.imul(ie, xe) | 0, _ = _ + Math.imul(ie, Ee) | 0, m = m + Math.imul(ee, Se) | 0, a = a + Math.imul(ee, Ce) | 0, a = a + Math.imul(re, Se) | 0, _ = _ + Math.imul(re, Ce) | 0, m = m + Math.imul(q, ke) | 0, a = a + Math.imul(q, Ie) | 0, a = a + Math.imul(z, ke) | 0, _ = _ + Math.imul(z, Ie) | 0;
            var Xt = (C + m | 0) + ((a & 8191) << 13) | 0;
            C = (_ + (a >>> 13) | 0) + (Xt >>> 26) | 0, Xt &= 67108863, m = Math.imul(Z, de), a = Math.imul(Z, pe), a = a + Math.imul(G, de) | 0, _ = Math.imul(G, pe), m = m + Math.imul(J, ge) | 0, a = a + Math.imul(J, me) | 0, a = a + Math.imul(K, ge) | 0, _ = _ + Math.imul(K, me) | 0, m = m + Math.imul(x, _e) | 0, a = a + Math.imul(x, ve) | 0, a = a + Math.imul(A, _e) | 0, _ = _ + Math.imul(A, ve) | 0, m = m + Math.imul(s, we) | 0, a = a + Math.imul(s, ye) | 0, a = a + Math.imul(c, we) | 0, _ = _ + Math.imul(c, ye) | 0, m = m + Math.imul(ce, be) | 0, a = a + Math.imul(ce, Me) | 0, a = a + Math.imul(he, be) | 0, _ = _ + Math.imul(he, Me) | 0, m = m + Math.imul(ue, xe) | 0, a = a + Math.imul(ue, Ee) | 0, a = a + Math.imul(ae, xe) | 0, _ = _ + Math.imul(ae, Ee) | 0, m = m + Math.imul(te, Se) | 0, a = a + Math.imul(te, Ce) | 0, a = a + Math.imul(ie, Se) | 0, _ = _ + Math.imul(ie, Ce) | 0, m = m + Math.imul(ee, ke) | 0, a = a + Math.imul(ee, Ie) | 0, a = a + Math.imul(re, ke) | 0, _ = _ + Math.imul(re, Ie) | 0, m = m + Math.imul(q, Re) | 0, a = a + Math.imul(q, Te) | 0, a = a + Math.imul(z, Re) | 0, _ = _ + Math.imul(z, Te) | 0;
            var er = (C + m | 0) + ((a & 8191) << 13) | 0;
            C = (_ + (a >>> 13) | 0) + (er >>> 26) | 0, er &= 67108863, m = Math.imul(le, de), a = Math.imul(le, pe), a = a + Math.imul(fe, de) | 0, _ = Math.imul(fe, pe), m = m + Math.imul(Z, ge) | 0, a = a + Math.imul(Z, me) | 0, a = a + Math.imul(G, ge) | 0, _ = _ + Math.imul(G, me) | 0, m = m + Math.imul(J, _e) | 0, a = a + Math.imul(J, ve) | 0, a = a + Math.imul(K, _e) | 0, _ = _ + Math.imul(K, ve) | 0, m = m + Math.imul(x, we) | 0, a = a + Math.imul(x, ye) | 0, a = a + Math.imul(A, we) | 0, _ = _ + Math.imul(A, ye) | 0, m = m + Math.imul(s, be) | 0, a = a + Math.imul(s, Me) | 0, a = a + Math.imul(c, be) | 0, _ = _ + Math.imul(c, Me) | 0, m = m + Math.imul(ce, xe) | 0, a = a + Math.imul(ce, Ee) | 0, a = a + Math.imul(he, xe) | 0, _ = _ + Math.imul(he, Ee) | 0, m = m + Math.imul(ue, Se) | 0, a = a + Math.imul(ue, Ce) | 0, a = a + Math.imul(ae, Se) | 0, _ = _ + Math.imul(ae, Ce) | 0, m = m + Math.imul(te, ke) | 0, a = a + Math.imul(te, Ie) | 0, a = a + Math.imul(ie, ke) | 0, _ = _ + Math.imul(ie, Ie) | 0, m = m + Math.imul(ee, Re) | 0, a = a + Math.imul(ee, Te) | 0, a = a + Math.imul(re, Re) | 0, _ = _ + Math.imul(re, Te) | 0, m = m + Math.imul(q, Ae) | 0, a = a + Math.imul(q, Be) | 0, a = a + Math.imul(z, Ae) | 0, _ = _ + Math.imul(z, Be) | 0;
            var tr = (C + m | 0) + ((a & 8191) << 13) | 0;
            C = (_ + (a >>> 13) | 0) + (tr >>> 26) | 0, tr &= 67108863, m = Math.imul(le, ge), a = Math.imul(le, me), a = a + Math.imul(fe, ge) | 0, _ = Math.imul(fe, me), m = m + Math.imul(Z, _e) | 0, a = a + Math.imul(Z, ve) | 0, a = a + Math.imul(G, _e) | 0, _ = _ + Math.imul(G, ve) | 0, m = m + Math.imul(J, we) | 0, a = a + Math.imul(J, ye) | 0, a = a + Math.imul(K, we) | 0, _ = _ + Math.imul(K, ye) | 0, m = m + Math.imul(x, be) | 0, a = a + Math.imul(x, Me) | 0, a = a + Math.imul(A, be) | 0, _ = _ + Math.imul(A, Me) | 0, m = m + Math.imul(s, xe) | 0, a = a + Math.imul(s, Ee) | 0, a = a + Math.imul(c, xe) | 0, _ = _ + Math.imul(c, Ee) | 0, m = m + Math.imul(ce, Se) | 0, a = a + Math.imul(ce, Ce) | 0, a = a + Math.imul(he, Se) | 0, _ = _ + Math.imul(he, Ce) | 0, m = m + Math.imul(ue, ke) | 0, a = a + Math.imul(ue, Ie) | 0, a = a + Math.imul(ae, ke) | 0, _ = _ + Math.imul(ae, Ie) | 0, m = m + Math.imul(te, Re) | 0, a = a + Math.imul(te, Te) | 0, a = a + Math.imul(ie, Re) | 0, _ = _ + Math.imul(ie, Te) | 0, m = m + Math.imul(ee, Ae) | 0, a = a + Math.imul(ee, Be) | 0, a = a + Math.imul(re, Ae) | 0, _ = _ + Math.imul(re, Be) | 0;
            var rr = (C + m | 0) + ((a & 8191) << 13) | 0;
            C = (_ + (a >>> 13) | 0) + (rr >>> 26) | 0, rr &= 67108863, m = Math.imul(le, _e), a = Math.imul(le, ve), a = a + Math.imul(fe, _e) | 0, _ = Math.imul(fe, ve), m = m + Math.imul(Z, we) | 0, a = a + Math.imul(Z, ye) | 0, a = a + Math.imul(G, we) | 0, _ = _ + Math.imul(G, ye) | 0, m = m + Math.imul(J, be) | 0, a = a + Math.imul(J, Me) | 0, a = a + Math.imul(K, be) | 0, _ = _ + Math.imul(K, Me) | 0, m = m + Math.imul(x, xe) | 0, a = a + Math.imul(x, Ee) | 0, a = a + Math.imul(A, xe) | 0, _ = _ + Math.imul(A, Ee) | 0, m = m + Math.imul(s, Se) | 0, a = a + Math.imul(s, Ce) | 0, a = a + Math.imul(c, Se) | 0, _ = _ + Math.imul(c, Ce) | 0, m = m + Math.imul(ce, ke) | 0, a = a + Math.imul(ce, Ie) | 0, a = a + Math.imul(he, ke) | 0, _ = _ + Math.imul(he, Ie) | 0, m = m + Math.imul(ue, Re) | 0, a = a + Math.imul(ue, Te) | 0, a = a + Math.imul(ae, Re) | 0, _ = _ + Math.imul(ae, Te) | 0, m = m + Math.imul(te, Ae) | 0, a = a + Math.imul(te, Be) | 0, a = a + Math.imul(ie, Ae) | 0, _ = _ + Math.imul(ie, Be) | 0;
            var nr = (C + m | 0) + ((a & 8191) << 13) | 0;
            C = (_ + (a >>> 13) | 0) + (nr >>> 26) | 0, nr &= 67108863, m = Math.imul(le, we), a = Math.imul(le, ye), a = a + Math.imul(fe, we) | 0, _ = Math.imul(fe, ye), m = m + Math.imul(Z, be) | 0, a = a + Math.imul(Z, Me) | 0, a = a + Math.imul(G, be) | 0, _ = _ + Math.imul(G, Me) | 0, m = m + Math.imul(J, xe) | 0, a = a + Math.imul(J, Ee) | 0, a = a + Math.imul(K, xe) | 0, _ = _ + Math.imul(K, Ee) | 0, m = m + Math.imul(x, Se) | 0, a = a + Math.imul(x, Ce) | 0, a = a + Math.imul(A, Se) | 0, _ = _ + Math.imul(A, Ce) | 0, m = m + Math.imul(s, ke) | 0, a = a + Math.imul(s, Ie) | 0, a = a + Math.imul(c, ke) | 0, _ = _ + Math.imul(c, Ie) | 0, m = m + Math.imul(ce, Re) | 0, a = a + Math.imul(ce, Te) | 0, a = a + Math.imul(he, Re) | 0, _ = _ + Math.imul(he, Te) | 0, m = m + Math.imul(ue, Ae) | 0, a = a + Math.imul(ue, Be) | 0, a = a + Math.imul(ae, Ae) | 0, _ = _ + Math.imul(ae, Be) | 0;
            var ir = (C + m | 0) + ((a & 8191) << 13) | 0;
            C = (_ + (a >>> 13) | 0) + (ir >>> 26) | 0, ir &= 67108863, m = Math.imul(le, be), a = Math.imul(le, Me), a = a + Math.imul(fe, be) | 0, _ = Math.imul(fe, Me), m = m + Math.imul(Z, xe) | 0, a = a + Math.imul(Z, Ee) | 0, a = a + Math.imul(G, xe) | 0, _ = _ + Math.imul(G, Ee) | 0, m = m + Math.imul(J, Se) | 0, a = a + Math.imul(J, Ce) | 0, a = a + Math.imul(K, Se) | 0, _ = _ + Math.imul(K, Ce) | 0, m = m + Math.imul(x, ke) | 0, a = a + Math.imul(x, Ie) | 0, a = a + Math.imul(A, ke) | 0, _ = _ + Math.imul(A, Ie) | 0, m = m + Math.imul(s, Re) | 0, a = a + Math.imul(s, Te) | 0, a = a + Math.imul(c, Re) | 0, _ = _ + Math.imul(c, Te) | 0, m = m + Math.imul(ce, Ae) | 0, a = a + Math.imul(ce, Be) | 0, a = a + Math.imul(he, Ae) | 0, _ = _ + Math.imul(he, Be) | 0;
            var or = (C + m | 0) + ((a & 8191) << 13) | 0;
            C = (_ + (a >>> 13) | 0) + (or >>> 26) | 0, or &= 67108863, m = Math.imul(le, xe), a = Math.imul(le, Ee), a = a + Math.imul(fe, xe) | 0, _ = Math.imul(fe, Ee), m = m + Math.imul(Z, Se) | 0, a = a + Math.imul(Z, Ce) | 0, a = a + Math.imul(G, Se) | 0, _ = _ + Math.imul(G, Ce) | 0, m = m + Math.imul(J, ke) | 0, a = a + Math.imul(J, Ie) | 0, a = a + Math.imul(K, ke) | 0, _ = _ + Math.imul(K, Ie) | 0, m = m + Math.imul(x, Re) | 0, a = a + Math.imul(x, Te) | 0, a = a + Math.imul(A, Re) | 0, _ = _ + Math.imul(A, Te) | 0, m = m + Math.imul(s, Ae) | 0, a = a + Math.imul(s, Be) | 0, a = a + Math.imul(c, Ae) | 0, _ = _ + Math.imul(c, Be) | 0;
            var ar = (C + m | 0) + ((a & 8191) << 13) | 0;
            C = (_ + (a >>> 13) | 0) + (ar >>> 26) | 0, ar &= 67108863, m = Math.imul(le, Se), a = Math.imul(le, Ce), a = a + Math.imul(fe, Se) | 0, _ = Math.imul(fe, Ce), m = m + Math.imul(Z, ke) | 0, a = a + Math.imul(Z, Ie) | 0, a = a + Math.imul(G, ke) | 0, _ = _ + Math.imul(G, Ie) | 0, m = m + Math.imul(J, Re) | 0, a = a + Math.imul(J, Te) | 0, a = a + Math.imul(K, Re) | 0, _ = _ + Math.imul(K, Te) | 0, m = m + Math.imul(x, Ae) | 0, a = a + Math.imul(x, Be) | 0, a = a + Math.imul(A, Ae) | 0, _ = _ + Math.imul(A, Be) | 0;
            var sr = (C + m | 0) + ((a & 8191) << 13) | 0;
            C = (_ + (a >>> 13) | 0) + (sr >>> 26) | 0, sr &= 67108863, m = Math.imul(le, ke), a = Math.imul(le, Ie), a = a + Math.imul(fe, ke) | 0, _ = Math.imul(fe, Ie), m = m + Math.imul(Z, Re) | 0, a = a + Math.imul(Z, Te) | 0, a = a + Math.imul(G, Re) | 0, _ = _ + Math.imul(G, Te) | 0, m = m + Math.imul(J, Ae) | 0, a = a + Math.imul(J, Be) | 0, a = a + Math.imul(K, Ae) | 0, _ = _ + Math.imul(K, Be) | 0;
            var cr = (C + m | 0) + ((a & 8191) << 13) | 0;
            C = (_ + (a >>> 13) | 0) + (cr >>> 26) | 0, cr &= 67108863, m = Math.imul(le, Re), a = Math.imul(le, Te), a = a + Math.imul(fe, Re) | 0, _ = Math.imul(fe, Te), m = m + Math.imul(Z, Ae) | 0, a = a + Math.imul(Z, Be) | 0, a = a + Math.imul(G, Ae) | 0, _ = _ + Math.imul(G, Be) | 0;
            var ur = (C + m | 0) + ((a & 8191) << 13) | 0;
            C = (_ + (a >>> 13) | 0) + (ur >>> 26) | 0, ur &= 67108863, m = Math.imul(le, Ae), a = Math.imul(le, Be), a = a + Math.imul(fe, Ae) | 0, _ = Math.imul(fe, Be);
            var lr = (C + m | 0) + ((a & 8191) << 13) | 0;
            return C = (_ + (a >>> 13) | 0) + (lr >>> 26) | 0, lr &= 67108863, M[0] = Kt, M[1] = Vt, M[2] = Yt, M[3] = jt, M[4] = Qt, M[5] = Gt, M[6] = Zt, M[7] = Xt, M[8] = er, M[9] = tr, M[10] = rr, M[11] = nr, M[12] = ir, M[13] = or, M[14] = ar, M[15] = sr, M[16] = cr, M[17] = ur, M[18] = lr, C !== 0 && (M[19] = C, h.length++), h;
        };
        Math.imul || (U = P);

        function $(y, i, l) {
            l.negative = i.negative ^ y.negative, l.length = y.length + i.length;
            for (var h = 0, d = 0, v = 0; v < l.length - 1; v++) {
                var M = d;
                d = 0;
                for (var C = h & 67108863, m = Math.min(v, i.length - 1), a = Math.max(0, v - y.length + 1); a <= m; a++) {
                    var _ = v - a,
                        F = y.words[_] | 0,
                        q = i.words[a] | 0,
                        z = F * q,
                        Q = z & 67108863;
                    M = M + (z / 67108864 | 0) | 0, Q = Q + C | 0, C = Q & 67108863, M = M + (Q >>> 26) | 0, d += M >>> 26, M &= 67108863;
                }
                l.words[v] = C, h = M, M = d;
            }
            return h !== 0 ? l.words[v] = h : l.length--, l.strip();
        }

        function S(y, i, l) {
            var h = new k();
            return h.mulp(y, i, l);
        }
        o.prototype.mulTo = function(i, l) {
            var h, d = this.length + i.length;
            return this.length === 10 && i.length === 10 ? h = U(this, i, l) : d < 63 ? h = P(this, i, l) : d < 1024 ? h = $(this, i, l) : h = S(this, i, l), h;
        };

        function k(y, i) {
            this.x = y, this.y = i;
        }
        k.prototype.makeRBT = function(i) {
            for (var l = new Array(i), h = o.prototype._countBits(i) - 1, d = 0; d < i; d++)
                l[d] = this.revBin(d, h, i);
            return l;
        }, k.prototype.revBin = function(i, l, h) {
            if (i === 0 || i === h - 1)
                return i;
            for (var d = 0, v = 0; v < l; v++)
                d |= (i & 1) << l - v - 1, i >>= 1;
            return d;
        }, k.prototype.permute = function(i, l, h, d, v, M) {
            for (var C = 0; C < M; C++)
                d[C] = l[i[C]], v[C] = h[i[C]];
        }, k.prototype.transform = function(i, l, h, d, v, M) {
            this.permute(M, i, l, h, d, v);
            for (var C = 1; C < v; C <<= 1)
                for (var m = C << 1, a = Math.cos(2 * Math.PI / m), _ = Math.sin(2 * Math.PI / m), F = 0; F < v; F += m)
                    for (var q = a, z = _, Q = 0; Q < C; Q++) {
                        var ee = h[F + Q],
                            re = d[F + Q],
                            Pe = h[F + Q + C],
                            te = d[F + Q + C],
                            ie = q * Pe - z * te;
                        te = q * te + z * Pe, Pe = ie, h[F + Q] = ee + Pe, d[F + Q] = re + te, h[F + Q + C] = ee - Pe, d[F + Q + C] = re - te, Q !== m && (ie = a * q - _ * z, z = a * z + _ * q, q = ie);
                    }
        }, k.prototype.guessLen13b = function(i, l) {
            var h = Math.max(l, i) | 1,
                d = h & 1,
                v = 0;
            for (h = h / 2 | 0; h; h = h >>> 1)
                v++;
            return 1 << v + 1 + d;
        }, k.prototype.conjugate = function(i, l, h) {
            if (!(h <= 1))
                for (var d = 0; d < h / 2; d++) {
                    var v = i[d];
                    i[d] = i[h - d - 1], i[h - d - 1] = v, v = l[d], l[d] = -l[h - d - 1], l[h - d - 1] = -v;
                }
        }, k.prototype.normalize13b = function(i, l) {
            for (var h = 0, d = 0; d < l / 2; d++) {
                var v = Math.round(i[2 * d + 1] / l) * 8192 + Math.round(i[2 * d] / l) + h;
                i[d] = v & 67108863, v < 67108864 ? h = 0 : h = v / 67108864 | 0;
            }
            return i;
        }, k.prototype.convert13b = function(i, l, h, d) {
            for (var v = 0, M = 0; M < l; M++)
                v = v + (i[M] | 0), h[2 * M] = v & 8191, v = v >>> 13, h[2 * M + 1] = v & 8191, v = v >>> 13;
            for (M = 2 * l; M < d; ++M)
                h[M] = 0;
            n(v === 0), n((v & -8192) === 0);
        }, k.prototype.stub = function(i) {
            for (var l = new Array(i), h = 0; h < i; h++)
                l[h] = 0;
            return l;
        }, k.prototype.mulp = function(i, l, h) {
            var d = 2 * this.guessLen13b(i.length, l.length),
                v = this.makeRBT(d),
                M = this.stub(d),
                C = new Array(d),
                m = new Array(d),
                a = new Array(d),
                _ = new Array(d),
                F = new Array(d),
                q = new Array(d),
                z = h.words;
            z.length = d, this.convert13b(i.words, i.length, C, d), this.convert13b(l.words, l.length, _, d), this.transform(C, M, m, a, d, v), this.transform(_, M, F, q, d, v);
            for (var Q = 0; Q < d; Q++) {
                var ee = m[Q] * F[Q] - a[Q] * q[Q];
                a[Q] = m[Q] * q[Q] + a[Q] * F[Q], m[Q] = ee;
            }
            return this.conjugate(m, a, d), this.transform(m, a, z, M, d, v), this.conjugate(z, M, d), this.normalize13b(z, d), h.negative = i.negative ^ l.negative, h.length = i.length + l.length, h.strip();
        }, o.prototype.mul = function(i) {
            var l = new o(null);
            return l.words = new Array(this.length + i.length), this.mulTo(i, l);
        }, o.prototype.mulf = function(i) {
            var l = new o(null);
            return l.words = new Array(this.length + i.length), S(this, i, l);
        }, o.prototype.imul = function(i) {
            return this.clone().mulTo(i, this);
        }, o.prototype.imuln = function(i) {
            n(typeof i == "number"), n(i < 67108864);
            for (var l = 0, h = 0; h < this.length; h++) {
                var d = (this.words[h] | 0) * i,
                    v = (d & 67108863) + (l & 67108863);
                l >>= 26, l += d / 67108864 | 0, l += v >>> 26, this.words[h] = v & 67108863;
            }
            return l !== 0 && (this.words[h] = l, this.length++), this;
        }, o.prototype.muln = function(i) {
            return this.clone().imuln(i);
        }, o.prototype.sqr = function() {
            return this.mul(this);
        }, o.prototype.isqr = function() {
            return this.imul(this.clone());
        }, o.prototype.pow = function(i) {
            var l = L(i);
            if (l.length === 0)
                return new o(1);
            for (var h = this, d = 0; d < l.length && l[d] === 0; d++, h = h.sqr())
            ;
            if (++d < l.length)
                for (var v = h.sqr(); d < l.length; d++, v = v.sqr())
                    l[d] !== 0 && (h = h.mul(v));
            return h;
        }, o.prototype.iushln = function(i) {
            n(typeof i == "number" && i >= 0);
            var l = i % 26,
                h = (i - l) / 26,
                d = 67108863 >>> 26 - l << 26 - l,
                v;
            if (l !== 0) {
                var M = 0;
                for (v = 0; v < this.length; v++) {
                    var C = this.words[v] & d,
                        m = (this.words[v] | 0) - C << l;
                    this.words[v] = m | M, M = C >>> 26 - l;
                }
                M && (this.words[v] = M, this.length++);
            }
            if (h !== 0) {
                for (v = this.length - 1; v >= 0; v--)
                    this.words[v + h] = this.words[v];
                for (v = 0; v < h; v++)
                    this.words[v] = 0;
                this.length += h;
            }
            return this.strip();
        }, o.prototype.ishln = function(i) {
            return n(this.negative === 0), this.iushln(i);
        }, o.prototype.iushrn = function(i, l, h) {
            n(typeof i == "number" && i >= 0);
            var d;
            l ? d = (l - l % 26) / 26 : d = 0;
            var v = i % 26,
                M = Math.min((i - v) / 26, this.length),
                C = 67108863 ^ 67108863 >>> v << v,
                m = h;
            if (d -= M, d = Math.max(0, d), m) {
                for (var a = 0; a < M; a++)
                    m.words[a] = this.words[a];
                m.length = M;
            }
            if (M !== 0)
                if (this.length > M)
                    for (this.length -= M, a = 0; a < this.length; a++)
                        this.words[a] = this.words[a + M];
                else
                    this.words[0] = 0, this.length = 1;
            var _ = 0;
            for (a = this.length - 1; a >= 0 && (_ !== 0 || a >= d); a--) {
                var F = this.words[a] | 0;
                this.words[a] = _ << 26 - v | F >>> v, _ = F & C;
            }
            return m && _ !== 0 && (m.words[m.length++] = _), this.length === 0 && (this.words[0] = 0, this.length = 1), this.strip();
        }, o.prototype.ishrn = function(i, l, h) {
            return n(this.negative === 0), this.iushrn(i, l, h);
        }, o.prototype.shln = function(i) {
            return this.clone().ishln(i);
        }, o.prototype.ushln = function(i) {
            return this.clone().iushln(i);
        }, o.prototype.shrn = function(i) {
            return this.clone().ishrn(i);
        }, o.prototype.ushrn = function(i) {
            return this.clone().iushrn(i);
        }, o.prototype.testn = function(i) {
            n(typeof i == "number" && i >= 0);
            var l = i % 26,
                h = (i - l) / 26,
                d = 1 << l;
            if (this.length <= h)
                return !1;
            var v = this.words[h];
            return !!(v & d);
        }, o.prototype.imaskn = function(i) {
            n(typeof i == "number" && i >= 0);
            var l = i % 26,
                h = (i - l) / 26;
            if (n(this.negative === 0, "imaskn works only with positive numbers"), this.length <= h)
                return this;
            if (l !== 0 && h++, this.length = Math.min(h, this.length), l !== 0) {
                var d = 67108863 ^ 67108863 >>> l << l;
                this.words[this.length - 1] &= d;
            }
            return this.strip();
        }, o.prototype.maskn = function(i) {
            return this.clone().imaskn(i);
        }, o.prototype.iaddn = function(i) {
            return n(typeof i == "number"), n(i < 67108864), i < 0 ? this.isubn(-i) : this.negative !== 0 ? this.length === 1 && (this.words[0] | 0) < i ? (this.words[0] = i - (this.words[0] | 0), this.negative = 0, this) : (this.negative = 0, this.isubn(i), this.negative = 1, this) : this._iaddn(i);
        }, o.prototype._iaddn = function(i) {
            this.words[0] += i;
            for (var l = 0; l < this.length && this.words[l] >= 67108864; l++)
                this.words[l] -= 67108864, l === this.length - 1 ? this.words[l + 1] = 1 : this.words[l + 1]++;
            return this.length = Math.max(this.length, l + 1), this;
        }, o.prototype.isubn = function(i) {
            if (n(typeof i == "number"), n(i < 67108864), i < 0)
                return this.iaddn(-i);
            if (this.negative !== 0)
                return this.negative = 0, this.iaddn(i), this.negative = 1, this;
            if (this.words[0] -= i, this.length === 1 && this.words[0] < 0)
                this.words[0] = -this.words[0], this.negative = 1;
            else
                for (var l = 0; l < this.length && this.words[l] < 0; l++)
                    this.words[l] += 67108864, this.words[l + 1] -= 1;
            return this.strip();
        }, o.prototype.addn = function(i) {
            return this.clone().iaddn(i);
        }, o.prototype.subn = function(i) {
            return this.clone().isubn(i);
        }, o.prototype.iabs = function() {
            return this.negative = 0, this;
        }, o.prototype.abs = function() {
            return this.clone().iabs();
        }, o.prototype._ishlnsubmul = function(i, l, h) {
            var d = i.length + h,
                v;
            this._expand(d);
            var M, C = 0;
            for (v = 0; v < i.length; v++) {
                M = (this.words[v + h] | 0) + C;
                var m = (i.words[v] | 0) * l;
                M -= m & 67108863, C = (M >> 26) - (m / 67108864 | 0), this.words[v + h] = M & 67108863;
            }
            for (; v < this.length - h; v++)
                M = (this.words[v + h] | 0) + C, C = M >> 26, this.words[v + h] = M & 67108863;
            if (C === 0)
                return this.strip();
            for (n(C === -1), C = 0, v = 0; v < this.length; v++)
                M = -(this.words[v] | 0) + C, C = M >> 26, this.words[v] = M & 67108863;
            return this.negative = 1, this.strip();
        }, o.prototype._wordDiv = function(i, l) {
            var h = this.length - i.length,
                d = this.clone(),
                v = i,
                M = v.words[v.length - 1] | 0,
                C = this._countBits(M);
            h = 26 - C, h !== 0 && (v = v.ushln(h), d.iushln(h), M = v.words[v.length - 1] | 0);
            var m = d.length - v.length,
                a;
            if (l !== "mod") {
                a = new o(null), a.length = m + 1, a.words = new Array(a.length);
                for (var _ = 0; _ < a.length; _++)
                    a.words[_] = 0;
            }
            var F = d.clone()._ishlnsubmul(v, 1, m);
            F.negative === 0 && (d = F, a && (a.words[m] = 1));
            for (var q = m - 1; q >= 0; q--) {
                var z = (d.words[v.length + q] | 0) * 67108864 + (d.words[v.length + q - 1] | 0);
                for (z = Math.min(z / M | 0, 67108863), d._ishlnsubmul(v, z, q); d.negative !== 0;)
                    z--, d.negative = 0, d._ishlnsubmul(v, 1, q), d.isZero() || (d.negative ^= 1);
                a && (a.words[q] = z);
            }
            return a && a.strip(), d.strip(), l !== "div" && h !== 0 && d.iushrn(h), {
                div: a || null,
                mod: d
            };
        }, o.prototype.divmod = function(i, l, h) {
            if (n(!i.isZero()), this.isZero())
                return {
                    div: new o(0),
                    mod: new o(0)
                };
            var d, v, M;
            return this.negative !== 0 && i.negative === 0 ? (M = this.neg().divmod(i, l), l !== "mod" && (d = M.div.neg()), l !== "div" && (v = M.mod.neg(), h && v.negative !== 0 && v.iadd(i)), {
                div: d,
                mod: v
            }) : this.negative === 0 && i.negative !== 0 ? (M = this.divmod(i.neg(), l), l !== "mod" && (d = M.div.neg()), {
                div: d,
                mod: M.mod
            }) : this.negative & i.negative ? (M = this.neg().divmod(i.neg(), l), l !== "div" && (v = M.mod.neg(), h && v.negative !== 0 && v.isub(i)), {
                div: M.div,
                mod: v
            }) : i.length > this.length || this.cmp(i) < 0 ? {
                div: new o(0),
                mod: this
            } : i.length === 1 ? l === "div" ? {
                div: this.divn(i.words[0]),
                mod: null
            } : l === "mod" ? {
                div: null,
                mod: new o(this.modn(i.words[0]))
            } : {
                div: this.divn(i.words[0]),
                mod: new o(this.modn(i.words[0]))
            } : this._wordDiv(i, l);
        }, o.prototype.div = function(i) {
            return this.divmod(i, "div", !1).div;
        }, o.prototype.mod = function(i) {
            return this.divmod(i, "mod", !1).mod;
        }, o.prototype.umod = function(i) {
            return this.divmod(i, "mod", !0).mod;
        }, o.prototype.divRound = function(i) {
            var l = this.divmod(i);
            if (l.mod.isZero())
                return l.div;
            var h = l.div.negative !== 0 ? l.mod.isub(i) : l.mod,
                d = i.ushrn(1),
                v = i.andln(1),
                M = h.cmp(d);
            return M < 0 || v === 1 && M === 0 ? l.div : l.div.negative !== 0 ? l.div.isubn(1) : l.div.iaddn(1);
        }, o.prototype.modn = function(i) {
            n(i <= 67108863);
            for (var l = (1 << 26) % i, h = 0, d = this.length - 1; d >= 0; d--)
                h = (l * h + (this.words[d] | 0)) % i;
            return h;
        }, o.prototype.idivn = function(i) {
            n(i <= 67108863);
            for (var l = 0, h = this.length - 1; h >= 0; h--) {
                var d = (this.words[h] | 0) + l * 67108864;
                this.words[h] = d / i | 0, l = d % i;
            }
            return this.strip();
        }, o.prototype.divn = function(i) {
            return this.clone().idivn(i);
        }, o.prototype.egcd = function(i) {
            n(i.negative === 0), n(!i.isZero());
            var l = this,
                h = i.clone();
            l.negative !== 0 ? l = l.umod(i) : l = l.clone();
            for (var d = new o(1), v = new o(0), M = new o(0), C = new o(1), m = 0; l.isEven() && h.isEven();)
                l.iushrn(1), h.iushrn(1), ++m;
            for (var a = h.clone(), _ = l.clone(); !l.isZero();) {
                for (var F = 0, q = 1; !(l.words[0] & q) && F < 26; ++F, q <<= 1)
                ;
                if (F > 0)
                    for (l.iushrn(F); F-- > 0;)
                        (d.isOdd() || v.isOdd()) && (d.iadd(a), v.isub(_)), d.iushrn(1), v.iushrn(1);
                for (var z = 0, Q = 1; !(h.words[0] & Q) && z < 26; ++z, Q <<= 1)
                ;
                if (z > 0)
                    for (h.iushrn(z); z-- > 0;)
                        (M.isOdd() || C.isOdd()) && (M.iadd(a), C.isub(_)), M.iushrn(1), C.iushrn(1);
                l.cmp(h) >= 0 ? (l.isub(h), d.isub(M), v.isub(C)) : (h.isub(l), M.isub(d), C.isub(v));
            }
            return {
                a: M,
                b: C,
                gcd: h.iushln(m)
            };
        }, o.prototype._invmp = function(i) {
            n(i.negative === 0), n(!i.isZero());
            var l = this,
                h = i.clone();
            l.negative !== 0 ? l = l.umod(i) : l = l.clone();
            for (var d = new o(1), v = new o(0), M = h.clone(); l.cmpn(1) > 0 && h.cmpn(1) > 0;) {
                for (var C = 0, m = 1; !(l.words[0] & m) && C < 26; ++C, m <<= 1)
                ;
                if (C > 0)
                    for (l.iushrn(C); C-- > 0;)
                        d.isOdd() && d.iadd(M), d.iushrn(1);
                for (var a = 0, _ = 1; !(h.words[0] & _) && a < 26; ++a, _ <<= 1)
                ;
                if (a > 0)
                    for (h.iushrn(a); a-- > 0;)
                        v.isOdd() && v.iadd(M), v.iushrn(1);
                l.cmp(h) >= 0 ? (l.isub(h), d.isub(v)) : (h.isub(l), v.isub(d));
            }
            var F;
            return l.cmpn(1) === 0 ? F = d : F = v, F.cmpn(0) < 0 && F.iadd(i), F;
        }, o.prototype.gcd = function(i) {
            if (this.isZero())
                return i.abs();
            if (i.isZero())
                return this.abs();
            var l = this.clone(),
                h = i.clone();
            l.negative = 0, h.negative = 0;
            for (var d = 0; l.isEven() && h.isEven(); d++)
                l.iushrn(1), h.iushrn(1);
            do {
                for (; l.isEven();)
                    l.iushrn(1);
                for (; h.isEven();)
                    h.iushrn(1);
                var v = l.cmp(h);
                if (v < 0) {
                    var M = l;
                    l = h, h = M;
                } else if (v === 0 || h.cmpn(1) === 0)
                    break;
                l.isub(h);
            } while (!0);
            return h.iushln(d);
        }, o.prototype.invm = function(i) {
            return this.egcd(i).a.umod(i);
        }, o.prototype.isEven = function() {
            return (this.words[0] & 1) === 0;
        }, o.prototype.isOdd = function() {
            return (this.words[0] & 1) === 1;
        }, o.prototype.andln = function(i) {
            return this.words[0] & i;
        }, o.prototype.bincn = function(i) {
            n(typeof i == "number");
            var l = i % 26,
                h = (i - l) / 26,
                d = 1 << l;
            if (this.length <= h)
                return this._expand(h + 1), this.words[h] |= d, this;
            for (var v = d, M = h; v !== 0 && M < this.length; M++) {
                var C = this.words[M] | 0;
                C += v, v = C >>> 26, C &= 67108863, this.words[M] = C;
            }
            return v !== 0 && (this.words[M] = v, this.length++), this;
        }, o.prototype.isZero = function() {
            return this.length === 1 && this.words[0] === 0;
        }, o.prototype.cmpn = function(i) {
            var l = i < 0;
            if (this.negative !== 0 && !l)
                return -1;
            if (this.negative === 0 && l)
                return 1;
            this.strip();
            var h;
            if (this.length > 1)
                h = 1;
            else {
                l && (i = -i), n(i <= 67108863, "Number is too big");
                var d = this.words[0] | 0;
                h = d === i ? 0 : d < i ? -1 : 1;
            }
            return this.negative !== 0 ? -h | 0 : h;
        }, o.prototype.cmp = function(i) {
            if (this.negative !== 0 && i.negative === 0)
                return -1;
            if (this.negative === 0 && i.negative !== 0)
                return 1;
            var l = this.ucmp(i);
            return this.negative !== 0 ? -l | 0 : l;
        }, o.prototype.ucmp = function(i) {
            if (this.length > i.length)
                return 1;
            if (this.length < i.length)
                return -1;
            for (var l = 0, h = this.length - 1; h >= 0; h--) {
                var d = this.words[h] | 0,
                    v = i.words[h] | 0;
                if (d !== v) {
                    d < v ? l = -1 : d > v && (l = 1);
                    break;
                }
            }
            return l;
        }, o.prototype.gtn = function(i) {
            return this.cmpn(i) === 1;
        }, o.prototype.gt = function(i) {
            return this.cmp(i) === 1;
        }, o.prototype.gten = function(i) {
            return this.cmpn(i) >= 0;
        }, o.prototype.gte = function(i) {
            return this.cmp(i) >= 0;
        }, o.prototype.ltn = function(i) {
            return this.cmpn(i) === -1;
        }, o.prototype.lt = function(i) {
            return this.cmp(i) === -1;
        }, o.prototype.lten = function(i) {
            return this.cmpn(i) <= 0;
        }, o.prototype.lte = function(i) {
            return this.cmp(i) <= 0;
        }, o.prototype.eqn = function(i) {
            return this.cmpn(i) === 0;
        }, o.prototype.eq = function(i) {
            return this.cmp(i) === 0;
        }, o.red = function(i) {
            return new j(i);
        }, o.prototype.toRed = function(i) {
            return n(!this.red, "Already a number in reduction context"), n(this.negative === 0, "red works only with positives"), i.convertTo(this)._forceRed(i);
        }, o.prototype.fromRed = function() {
            return n(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this);
        }, o.prototype._forceRed = function(i) {
            return this.red = i, this;
        }, o.prototype.forceRed = function(i) {
            return n(!this.red, "Already a number in reduction context"), this._forceRed(i);
        }, o.prototype.redAdd = function(i) {
            return n(this.red, "redAdd works only with red numbers"), this.red.add(this, i);
        }, o.prototype.redIAdd = function(i) {
            return n(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, i);
        }, o.prototype.redSub = function(i) {
            return n(this.red, "redSub works only with red numbers"), this.red.sub(this, i);
        }, o.prototype.redISub = function(i) {
            return n(this.red, "redISub works only with red numbers"), this.red.isub(this, i);
        }, o.prototype.redShl = function(i) {
            return n(this.red, "redShl works only with red numbers"), this.red.shl(this, i);
        }, o.prototype.redMul = function(i) {
            return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, i), this.red.mul(this, i);
        }, o.prototype.redIMul = function(i) {
            return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, i), this.red.imul(this, i);
        }, o.prototype.redSqr = function() {
            return n(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this);
        }, o.prototype.redISqr = function() {
            return n(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this);
        }, o.prototype.redSqrt = function() {
            return n(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this);
        }, o.prototype.redInvm = function() {
            return n(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this);
        }, o.prototype.redNeg = function() {
            return n(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this);
        }, o.prototype.redPow = function(i) {
            return n(this.red && !i.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, i);
        };
        var T = {
            k256: null,
            p224: null,
            p192: null,
            p25519: null
        };

        function R(y, i) {
            this.name = y, this.p = new o(i, 16), this.n = this.p.bitLength(), this.k = new o(1).iushln(this.n).isub(this.p), this.tmp = this._tmp();
        }
        R.prototype._tmp = function() {
            var i = new o(null);
            return i.words = new Array(Math.ceil(this.n / 13)), i;
        }, R.prototype.ireduce = function(i) {
            var l = i,
                h;
            do
                this.split(l, this.tmp), l = this.imulK(l), l = l.iadd(this.tmp), h = l.bitLength();
            while (h > this.n);
            var d = h < this.n ? -1 : l.ucmp(this.p);
            return d === 0 ? (l.words[0] = 0, l.length = 1) : d > 0 ? l.isub(this.p) : l.strip(), l;
        }, R.prototype.split = function(i, l) {
            i.iushrn(this.n, 0, l);
        }, R.prototype.imulK = function(i) {
            return i.imul(this.k);
        };

        function B() {
            R.call(
                this,
                "k256",
                "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
            );
        }
        u(B, R), B.prototype.split = function(i, l) {
            for (var h = 4194303, d = Math.min(i.length, 9), v = 0; v < d; v++)
                l.words[v] = i.words[v];
            if (l.length = d, i.length <= 9) {
                i.words[0] = 0, i.length = 1;
                return;
            }
            var M = i.words[9];
            for (l.words[l.length++] = M & h, v = 10; v < i.length; v++) {
                var C = i.words[v] | 0;
                i.words[v - 10] = (C & h) << 4 | M >>> 22, M = C;
            }
            M >>>= 22, i.words[v - 10] = M, M === 0 && i.length > 10 ? i.length -= 10 : i.length -= 9;
        }, B.prototype.imulK = function(i) {
            i.words[i.length] = 0, i.words[i.length + 1] = 0, i.length += 2;
            for (var l = 0, h = 0; h < i.length; h++) {
                var d = i.words[h] | 0;
                l += d * 977, i.words[h] = l & 67108863, l = d * 64 + (l / 67108864 | 0);
            }
            return i.words[i.length - 1] === 0 && (i.length--, i.words[i.length - 1] === 0 && i.length--), i;
        };

        function W() {
            R.call(
                this,
                "p224",
                "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
            );
        }
        u(W, R);

        function H() {
            R.call(
                this,
                "p192",
                "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
            );
        }
        u(H, R);

        function Y() {
            R.call(
                this,
                "25519",
                "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
            );
        }
        u(Y, R), Y.prototype.imulK = function(i) {
            for (var l = 0, h = 0; h < i.length; h++) {
                var d = (i.words[h] | 0) * 19 + l,
                    v = d & 67108863;
                d >>>= 26, i.words[h] = v, l = d;
            }
            return l !== 0 && (i.words[i.length++] = l), i;
        }, o._prime = function(i) {
            if (T[i])
                return T[i];
            var l;
            if (i === "k256")
                l = new B();
            else if (i === "p224")
                l = new W();
            else if (i === "p192")
                l = new H();
            else if (i === "p25519")
                l = new Y();
            else
                throw new Error("Unknown prime " + i);
            return T[i] = l, l;
        };

        function j(y) {
            if (typeof y == "string") {
                var i = o._prime(y);
                this.m = i.p, this.prime = i;
            } else
                n(y.gtn(1), "modulus must be greater than 1"), this.m = y, this.prime = null;
        }
        j.prototype._verify1 = function(i) {
            n(i.negative === 0, "red works only with positives"), n(i.red, "red works only with red numbers");
        }, j.prototype._verify2 = function(i, l) {
            n((i.negative | l.negative) === 0, "red works only with positives"), n(
                i.red && i.red === l.red,
                "red works only with red numbers"
            );
        }, j.prototype.imod = function(i) {
            return this.prime ? this.prime.ireduce(i)._forceRed(this) : i.umod(this.m)._forceRed(this);
        }, j.prototype.neg = function(i) {
            return i.isZero() ? i.clone() : this.m.sub(i)._forceRed(this);
        }, j.prototype.add = function(i, l) {
            this._verify2(i, l);
            var h = i.add(l);
            return h.cmp(this.m) >= 0 && h.isub(this.m), h._forceRed(this);
        }, j.prototype.iadd = function(i, l) {
            this._verify2(i, l);
            var h = i.iadd(l);
            return h.cmp(this.m) >= 0 && h.isub(this.m), h;
        }, j.prototype.sub = function(i, l) {
            this._verify2(i, l);
            var h = i.sub(l);
            return h.cmpn(0) < 0 && h.iadd(this.m), h._forceRed(this);
        }, j.prototype.isub = function(i, l) {
            this._verify2(i, l);
            var h = i.isub(l);
            return h.cmpn(0) < 0 && h.iadd(this.m), h;
        }, j.prototype.shl = function(i, l) {
            return this._verify1(i), this.imod(i.ushln(l));
        }, j.prototype.imul = function(i, l) {
            return this._verify2(i, l), this.imod(i.imul(l));
        }, j.prototype.mul = function(i, l) {
            return this._verify2(i, l), this.imod(i.mul(l));
        }, j.prototype.isqr = function(i) {
            return this.imul(i, i.clone());
        }, j.prototype.sqr = function(i) {
            return this.mul(i, i);
        }, j.prototype.sqrt = function(i) {
            if (i.isZero())
                return i.clone();
            var l = this.m.andln(3);
            if (n(l % 2 === 1), l === 3) {
                var h = this.m.add(new o(1)).iushrn(2);
                return this.pow(i, h);
            }
            for (var d = this.m.subn(1), v = 0; !d.isZero() && d.andln(1) === 0;)
                v++, d.iushrn(1);
            n(!d.isZero());
            var M = new o(1).toRed(this),
                C = M.redNeg(),
                m = this.m.subn(1).iushrn(1),
                a = this.m.bitLength();
            for (a = new o(2 * a * a).toRed(this); this.pow(a, m).cmp(C) !== 0;)
                a.redIAdd(C);
            for (var _ = this.pow(a, d), F = this.pow(i, d.addn(1).iushrn(1)), q = this.pow(i, d), z = v; q.cmp(M) !== 0;) {
                for (var Q = q, ee = 0; Q.cmp(M) !== 0; ee++)
                    Q = Q.redSqr();
                n(ee < z);
                var re = this.pow(_, new o(1).iushln(z - ee - 1));
                F = F.redMul(re), _ = re.redSqr(), q = q.redMul(_), z = ee;
            }
            return F;
        }, j.prototype.invm = function(i) {
            var l = i._invmp(this.m);
            return l.negative !== 0 ? (l.negative = 0, this.imod(l).redNeg()) : this.imod(l);
        }, j.prototype.pow = function(i, l) {
            if (l.isZero())
                return new o(1).toRed(this);
            if (l.cmpn(1) === 0)
                return i.clone();
            var h = 4,
                d = new Array(1 << h);
            d[0] = new o(1).toRed(this), d[1] = i;
            for (var v = 2; v < d.length; v++)
                d[v] = this.mul(d[v - 1], i);
            var M = d[0],
                C = 0,
                m = 0,
                a = l.bitLength() % 26;
            for (a === 0 && (a = 26), v = l.length - 1; v >= 0; v--) {
                for (var _ = l.words[v], F = a - 1; F >= 0; F--) {
                    var q = _ >> F & 1;
                    if (M !== d[0] && (M = this.sqr(M)), q === 0 && C === 0) {
                        m = 0;
                        continue;
                    }
                    C <<= 1, C |= q, m++, !(m !== h && (v !== 0 || F !== 0)) && (M = this.mul(M, d[C]), m = 0, C = 0);
                }
                a = 26;
            }
            return M;
        }, j.prototype.convertTo = function(i) {
            var l = i.umod(this.m);
            return l === i ? l.clone() : l;
        }, j.prototype.convertFrom = function(i) {
            var l = i.clone();
            return l.red = null, l;
        }, o.mont = function(i) {
            return new oe(i);
        };

        function oe(y) {
            j.call(this, y), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new o(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv);
        }
        u(oe, j), oe.prototype.convertTo = function(i) {
            return this.imod(i.ushln(this.shift));
        }, oe.prototype.convertFrom = function(i) {
            var l = this.imod(i.mul(this.rinv));
            return l.red = null, l;
        }, oe.prototype.imul = function(i, l) {
            if (i.isZero() || l.isZero())
                return i.words[0] = 0, i.length = 1, i;
            var h = i.imul(l),
                d = h.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                v = h.isub(d).iushrn(this.shift),
                M = v;
            return v.cmp(this.m) >= 0 ? M = v.isub(this.m) : v.cmpn(0) < 0 && (M = v.iadd(this.m)), M._forceRed(this);
        }, oe.prototype.mul = function(i, l) {
            if (i.isZero() || l.isZero())
                return new o(0)._forceRed(this);
            var h = i.mul(l),
                d = h.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                v = h.isub(d).iushrn(this.shift),
                M = v;
            return v.cmp(this.m) >= 0 ? M = v.isub(this.m) : v.cmpn(0) < 0 && (M = v.iadd(this.m)), M._forceRed(this);
        }, oe.prototype.invm = function(i) {
            var l = this.imod(i._invmp(this.m).mul(this.r2));
            return l._forceRed(this);
        };
    })(t, Vo);
})(Qa);
const Ga = Mr;
var Za = Dr;
Dr.strict = Si;
Dr.loose = Ci;
var Xa = Object.prototype.toString,
    es = {
        "[object Int8Array]": !0,
        "[object Int16Array]": !0,
        "[object Int32Array]": !0,
        "[object Uint8Array]": !0,
        "[object Uint8ClampedArray]": !0,
        "[object Uint16Array]": !0,
        "[object Uint32Array]": !0,
        "[object Float32Array]": !0,
        "[object Float64Array]": !0
    };

function Dr(t) {
    return Si(t) || Ci(t);
}

function Si(t) {
    return t instanceof Int8Array || t instanceof Int16Array || t instanceof Int32Array || t instanceof Uint8Array || t instanceof Uint8ClampedArray || t instanceof Uint16Array || t instanceof Uint32Array || t instanceof Float32Array || t instanceof Float64Array;
}

function Ci(t) {
    return es[Xa.call(t)];
}
var ts = Za.strict,
    rs = function(e) {
        if (ts(e)) {
            var r = Buffer.from(e.buffer);
            return e.byteLength !== e.buffer.byteLength && (r = r.slice(e.byteOffset, e.byteOffset + e.byteLength)), r;
        } else
            return Buffer.from(e);
    };
const ki = "hex",
    Ii = "utf8",
    Pt = "0";

function rt(t) {
    return new Uint8Array(t);
}

function Ri(t, e = !1) {
    const r = t.toString(ki);
    return e ? lt(r) : r;
}

function ns(t) {
    return t.toString(Ii);
}

function qt(t) {
    return rs(t);
}

function et(t, e = !1) {
    return Ri(qt(t), e);
}

function is(t) {
    return ns(qt(t));
}

function os(t) {
    return Buffer.from(Je(t), ki);
}

function tt(t) {
    return rt(os(t));
}

function $r(t) {
    return Buffer.from(t, Ii);
}

function as(t) {
    return rt($r(t));
}

function ss(t, e = !1) {
    return Ri($r(t), e);
}

function cs(t, e) {
    return !(typeof t != "string" || !t.match(/^0x[0-9A-Fa-f]*$/) || e && t.length !== 2 + 2 * e);
}

function Ti(...t) {
    let e = [];
    return t.forEach((r) => e = e.concat(Array.from(r))), new Uint8Array([...e]);
}

function us(t, e = 8) {
    const r = t % e;
    return r ? (t - r) / e * e + e : t;
}

function ls(t, e = 8, r = Pt) {
    return fs(t, us(t.length, e), r);
}

function fs(t, e, r = Pt) {
    return ds(t, e, !0, r);
}

function Je(t) {
    return t.replace(/^0x/, "");
}

function lt(t) {
    return t.startsWith("0x") ? t : `0x${t}`;
}

function Ai(t) {
    return t = Je(t), t = ls(t, 2), t && (t = lt(t)), t;
}

function hs(t) {
    const e = t.startsWith("0x");
    return t = Je(t), t = t.startsWith(Pt) ? t.substring(1) : t, e ? lt(t) : t;
}

function ds(t, e, r, n = Pt) {
    const u = e - t.length;
    let o = t;
    if (u > 0) {
        const p = n.repeat(u);
        o = r ? p + t : t + p;
    }
    return o;
}

function xr(t) {
    return qt(new Uint8Array(t));
}

function ps(t, e) {
    return et(new Uint8Array(t), !e);
}

function gs(t) {
    return rt(t).buffer;
}

function ms(t) {
    return $r(t);
}

function _s(t, e) {
    return ss(t, !e);
}

function vs(t) {
    return tt(t).buffer;
}

function Bi(t, e) {
    const r = Je(Ai(new Ga(t).toString(16)));
    return e ? r : lt(r);
}

function Et(t) {
    return Ai(t);
}

function ws(t) {
    return hs(lt(t));
}
const ys = Xo;

function fr() {
    return ((e, r) => {
        for (r = e = ""; e++ < 36; r += e * 51 & 52 ? (e ^ 15 ? 8 ^ Math.random() * (e ^ 20 ? 16 : 4) : 4).toString(16) : "-")
        ;
        return r;
    })();
}

function bs(t, e) {
    let r;
    const n = ja[t];
    return n && (r = `https://${n}.infura.io/v3/${e}`), r;
}

function Ms(t, e) {
    let r;
    const n = bs(t, e.infuraId);
    return e.custom && e.custom[t] ? r = e.custom[t] : n && (r = n), r;
}

function xs(t) {
    return t === "" || typeof t == "string" && t.trim() === "";
}

function Es(t) {
    return !(t && t.length);
}

function Ni(t, e) {
    return cs(t, e);
}

function Ss(t) {
    return typeof t.method < "u";
}

function ht(t) {
    return typeof t.result < "u";
}

function Rt(t) {
    return typeof t.error < "u";
}

function xn(t) {
    return typeof t.event < "u";
}

function Cs(t) {
    return Ya.includes(t) || t.startsWith("wc_");
}

function ks(t) {
    return t.method.startsWith("wc_") ? !0 : !qr.includes(t.method);
}

function Is(t) {
    t = Je(t.toLowerCase());
    const e = Je(Yo.keccak_256(ms(t)));
    let r = "";
    for (let n = 0; n < t.length; n++)
        parseInt(e[n], 16) > 7 ? r += t[n].toUpperCase() : r += t[n];
    return lt(r);
}
const Rs = (t) => t ? t.toLowerCase().substring(0, 2) !== "0x" ? !1 : /^(0x)?[0-9a-f]{40}$/i.test(t) ? /^(0x)?[0-9a-f]{40}$/.test(t) || /^(0x)?[0-9A-F]{40}$/.test(t) ? !0 : t === Is(t) : !1 : !1;

function En(t) {
    return !Es(t) && !Ni(t[0]) && (t[0] = _s(t[0])), t;
}

function hr(t) {
    if (typeof t.type < "u" && t.type !== "0")
        return t;
    if (typeof t.from > "u" || !Rs(t.from))
        throw new Error("Transaction object must include a valid 'from' value.");

    function e(u) {
        let o = u;
        return (typeof u == "number" || typeof u == "string" && !xs(u)) && (Ni(u) ? typeof u == "string" && (o = Et(u)) : o = Bi(u)), typeof o == "string" && (o = ws(o)), o;
    }
    const r = {
            from: Et(t.from),
            to: typeof t.to > "u" ? void 0 : Et(t.to),
            gasPrice: typeof t.gasPrice > "u" ? "" : e(t.gasPrice),
            gas: typeof t.gas > "u" ? typeof t.gasLimit > "u" ? "" : e(t.gasLimit) : e(t.gas),
            value: typeof t.value > "u" ? "" : e(t.value),
            nonce: typeof t.nonce > "u" ? "" : e(t.nonce),
            data: typeof t.data > "u" ? "" : Et(t.data) || "0x"
        },
        n = ["gasPrice", "gas", "value", "nonce"];
    return Object.keys(r).forEach((u) => {
        (typeof r[u] > "u" || typeof r[u] == "string" && !r[u].trim().length) && n.includes(u) && delete r[u];
    }), r;
}

function Ts(t) {
    const e = t.message || "Failed or Rejected Request";
    let r = -32e3;
    if (t && !t.code)
        switch (e) {
            case "Parse error":
                r = -32700;
                break;
            case "Invalid request":
                r = -32600;
                break;
            case "Method not found":
                r = -32601;
                break;
            case "Invalid params":
                r = -32602;
                break;
            case "Internal error":
                r = -32603;
                break;
            default:
                r = -32e3;
                break;
        }
    const n = {
        code: r,
        message: e
    };
    return t.data && (n.data = t.data), n;
}
var Wr = {};
(function(t) {
    const e = ta,
        r = ra,
        n = ea,
        u = (S) => S == null;

    function o(S) {
        switch (S.arrayFormat) {
            case "index":
                return (k) => (T, R) => {
                    const B = T.length;
                    return R === void 0 || S.skipNull && R === null || S.skipEmptyString && R === "" ? T : R === null ? [...T, [b(k, S), "[", B, "]"].join("")] : [
                        ...T, [b(k, S), "[", b(B, S), "]=", b(R, S)].join("")
                    ];
                };
            case "bracket":
                return (k) => (T, R) => R === void 0 || S.skipNull && R === null || S.skipEmptyString && R === "" ? T : R === null ? [...T, [b(k, S), "[]"].join("")] : [...T, [b(k, S), "[]=", b(R, S)].join("")];
            case "comma":
            case "separator":
                return (k) => (T, R) => R == null || R.length === 0 ? T : T.length === 0 ? [
                    [b(k, S), "=", b(R, S)].join("")
                ] : [
                    [T, b(R, S)].join(S.arrayFormatSeparator)
                ];
            default:
                return (k) => (T, R) => R === void 0 || S.skipNull && R === null || S.skipEmptyString && R === "" ? T : R === null ? [...T, b(k, S)] : [...T, [b(k, S), "=", b(R, S)].join("")];
        }
    }

    function p(S) {
        let k;
        switch (S.arrayFormat) {
            case "index":
                return (T, R, B) => {
                    if (k = /\[(\d*)\]$/.exec(T), T = T.replace(/\[\d*\]$/, ""), !k) {
                        B[T] = R;
                        return;
                    }
                    B[T] === void 0 && (B[T] = {}), B[T][k[1]] = R;
                };
            case "bracket":
                return (T, R, B) => {
                    if (k = /(\[\])$/.exec(T), T = T.replace(/\[\]$/, ""), !k) {
                        B[T] = R;
                        return;
                    }
                    if (B[T] === void 0) {
                        B[T] = [R];
                        return;
                    }
                    B[T] = [].concat(B[T], R);
                };
            case "comma":
            case "separator":
                return (T, R, B) => {
                    const H = typeof R == "string" && R.split("").indexOf(S.arrayFormatSeparator) > -1 ? R.split(S.arrayFormatSeparator).map((Y) => I(Y, S)) : R === null ? R : I(R, S);
                    B[T] = H;
                };
            default:
                return (T, R, B) => {
                    if (B[T] === void 0) {
                        B[T] = R;
                        return;
                    }
                    B[T] = [].concat(B[T], R);
                };
        }
    }

    function f(S) {
        if (typeof S != "string" || S.length !== 1)
            throw new TypeError("arrayFormatSeparator must be single character string");
    }

    function b(S, k) {
        return k.encode ? k.strict ? e(S) : encodeURIComponent(S) : S;
    }

    function I(S, k) {
        return k.decode ? r(S) : S;
    }

    function E(S) {
        return Array.isArray(S) ? S.sort() : typeof S == "object" ? E(Object.keys(S)).sort((k, T) => Number(k) - Number(T)).map((k) => S[k]) : S;
    }

    function N(S) {
        const k = S.indexOf("#");
        return k !== -1 && (S = S.slice(0, k)), S;
    }

    function L(S) {
        let k = "";
        const T = S.indexOf("#");
        return T !== -1 && (k = S.slice(T)), k;
    }

    function P(S) {
        S = N(S);
        const k = S.indexOf("?");
        return k === -1 ? "" : S.slice(k + 1);
    }

    function U(S, k) {
        return k.parseNumbers && !Number.isNaN(Number(S)) && typeof S == "string" && S.trim() !== "" ? S = Number(S) : k.parseBooleans && S !== null && (S.toLowerCase() === "true" || S.toLowerCase() === "false") && (S = S.toLowerCase() === "true"), S;
    }

    function $(S, k) {
        k = Object.assign({
            decode: !0,
            sort: !0,
            arrayFormat: "none",
            arrayFormatSeparator: ",",
            parseNumbers: !1,
            parseBooleans: !1
        }, k), f(k.arrayFormatSeparator);
        const T = p(k),
            R = /* @__PURE__ */ Object.create(null);
        if (typeof S != "string" || (S = S.trim().replace(/^[?#&]/, ""), !S))
            return R;
        for (const B of S.split("&")) {
            let [W, H] = n(k.decode ? B.replace(/\+/g, " ") : B, "=");
            H = H === void 0 ? null : ["comma", "separator"].includes(k.arrayFormat) ? H : I(H, k), T(I(W, k), H, R);
        }
        for (const B of Object.keys(R)) {
            const W = R[B];
            if (typeof W == "object" && W !== null)
                for (const H of Object.keys(W))
                    W[H] = U(W[H], k);
            else
                R[B] = U(W, k);
        }
        return k.sort === !1 ? R : (k.sort === !0 ? Object.keys(R).sort() : Object.keys(R).sort(k.sort)).reduce((B, W) => {
            const H = R[W];
            return Boolean(H) && typeof H == "object" && !Array.isArray(H) ? B[W] = E(H) : B[W] = H, B;
        }, /* @__PURE__ */ Object.create(null));
    }
    t.extract = P, t.parse = $, t.stringify = (S, k) => {
        if (!S)
            return "";
        k = Object.assign({
            encode: !0,
            strict: !0,
            arrayFormat: "none",
            arrayFormatSeparator: ","
        }, k), f(k.arrayFormatSeparator);
        const T = (H) => k.skipNull && u(S[H]) || k.skipEmptyString && S[H] === "",
            R = o(k),
            B = {};
        for (const H of Object.keys(S))
            T(H) || (B[H] = S[H]);
        const W = Object.keys(B);
        return k.sort !== !1 && W.sort(k.sort), W.map((H) => {
            const Y = S[H];
            return Y === void 0 ? "" : Y === null ? b(H, k) : Array.isArray(Y) ? Y.reduce(R(H), []).join("&") : b(H, k) + "=" + b(Y, k);
        }).filter((H) => H.length > 0).join("&");
    }, t.parseUrl = (S, k) => {
        k = Object.assign({
            decode: !0
        }, k);
        const [T, R] = n(S, "#");
        return Object.assign({
                url: T.split("?")[0] || "",
                query: $(P(S), k)
            },
            k && k.parseFragmentIdentifier && R ? {
                fragmentIdentifier: I(R, k)
            } : {}
        );
    }, t.stringifyUrl = (S, k) => {
        k = Object.assign({
            encode: !0,
            strict: !0
        }, k);
        const T = N(S.url).split("?")[0] || "",
            R = t.extract(S.url),
            B = t.parse(R, {
                sort: !1
            }),
            W = Object.assign(B, S.query);
        let H = t.stringify(W, k);
        H && (H = `?${H}`);
        let Y = L(S.url);
        return S.fragmentIdentifier && (Y = `#${b(S.fragmentIdentifier, k)}`), `${T}${H}${Y}`;
    };
})(Wr);

function As(t) {
    const e = t.indexOf("?") !== -1 ? t.indexOf("?") : void 0;
    return typeof e < "u" ? t.substr(e) : "";
}

function Bs(t, e) {
    let r = Oi(t);
    return r = Object.assign(Object.assign({}, r), e), t = Ns(r), t;
}

function Oi(t) {
    return Wr.parse(t);
}

function Ns(t) {
    return Wr.stringify(t);
}

function Os(t) {
    return typeof t.bridge < "u";
}

function Ls(t) {
    const e = t.indexOf(":"),
        r = t.indexOf("?") !== -1 ? t.indexOf("?") : void 0,
        n = t.substring(0, e),
        u = t.substring(e + 1, r);

    function o(N) {
        const L = "@",
            P = N.split(L);
        return {
            handshakeTopic: P[0],
            version: parseInt(P[1], 10)
        };
    }
    const p = o(u),
        f = typeof r < "u" ? t.substr(r) : "";

    function b(N) {
        const L = Oi(N);
        return {
            key: L.key || "",
            bridge: L.bridge || ""
        };
    }
    const I = b(f);
    return Object.assign(Object.assign({
        protocol: n
    }, p), I);
}
class Us {
    constructor() {
        this._eventEmitters = [], typeof window < "u" && typeof window.addEventListener < "u" && (window.addEventListener("online", () => this.trigger("online")), window.addEventListener("offline", () => this.trigger("offline")));
    }
    on(e, r) {
        this._eventEmitters.push({
            event: e,
            callback: r
        });
    }
    trigger(e) {
        let r = [];
        e && (r = this._eventEmitters.filter((n) => n.event === e)), r.forEach((n) => {
            n.callback();
        });
    }
}
const Fs = typeof globalThis.WebSocket < "u" ? globalThis.WebSocket : require("ws");
class Ps {
    constructor(e) {
        if (this.opts = e, this._queue = [], this._events = [], this._subscriptions = [], this._protocol = e.protocol, this._version = e.version, this._url = "", this._netMonitor = null, this._socket = null, this._nextSocket = null, this._subscriptions = e.subscriptions || [], this._netMonitor = e.netMonitor || new Us(), !e.url || typeof e.url != "string")
            throw new Error("Missing or invalid WebSocket url");
        this._url = e.url, this._netMonitor.on("online", () => this._socketCreate());
    }
    set readyState(e) {}
    get readyState() {
        return this._socket ? this._socket.readyState : -1;
    }
    set connecting(e) {}
    get connecting() {
        return this.readyState === 0;
    }
    set connected(e) {}
    get connected() {
        return this.readyState === 1;
    }
    set closing(e) {}
    get closing() {
        return this.readyState === 2;
    }
    set closed(e) {}
    get closed() {
        return this.readyState === 3;
    }
    open() {
        this._socketCreate();
    }
    close() {
        this._socketClose();
    }
    send(e, r, n) {
        if (!r || typeof r != "string")
            throw new Error("Missing or invalid topic field");
        this._socketSend({
            topic: r,
            type: "pub",
            payload: e,
            silent: !!n
        });
    }
    subscribe(e) {
        this._socketSend({
            topic: e,
            type: "sub",
            payload: "",
            silent: !0
        });
    }
    on(e, r) {
        this._events.push({
            event: e,
            callback: r
        });
    }
    _socketCreate() {
        if (this._nextSocket)
            return;
        const e = qs(this._url, this._protocol, this._version);
        if (this._nextSocket = new Fs(e), !this._nextSocket)
            throw new Error("Failed to create socket");
        this._nextSocket.onmessage = (r) => this._socketReceive(r), this._nextSocket.onopen = () => this._socketOpen(), this._nextSocket.onerror = (r) => this._socketError(r), this._nextSocket.onclose = () => {
            setTimeout(() => {
                this._nextSocket = null, this._socketCreate();
            }, 1e3);
        };
    }
    _socketOpen() {
        this._socketClose(), this._socket = this._nextSocket, this._nextSocket = null, this._queueSubscriptions(), this._pushQueue();
    }
    _socketClose() {
        this._socket && (this._socket.onclose = () => {}, this._socket.close());
    }
    _socketSend(e) {
        const r = JSON.stringify(e);
        this._socket && this._socket.readyState === 1 ? this._socket.send(r) : (this._setToQueue(e), this._socketCreate());
    }
    async _socketReceive(e) {
        let r;
        try {
            r = JSON.parse(e.data);
        } catch {
            return;
        }
        if (this._socketSend({
                topic: r.topic,
                type: "ack",
                payload: "",
                silent: !0
            }), this._socket && this._socket.readyState === 1) {
            const n = this._events.filter((u) => u.event === "message");
            n && n.length && n.forEach((u) => u.callback(r));
        }
    }
    _socketError(e) {
        const r = this._events.filter((n) => n.event === "error");
        r && r.length && r.forEach((n) => n.callback(e));
    }
    _queueSubscriptions() {
        this._subscriptions.forEach((r) => this._queue.push({
            topic: r,
            type: "sub",
            payload: "",
            silent: !0
        })), this._subscriptions = this.opts.subscriptions || [];
    }
    _setToQueue(e) {
        this._queue.push(e);
    }
    _pushQueue() {
        this._queue.forEach((r) => this._socketSend(r)), this._queue = [];
    }
}

function qs(t, e, r) {
    var n, u;
    const p = (t.startsWith("https") ? t.replace("https", "wss") : t.startsWith("http") ? t.replace("http", "ws") : t).split("?"),
        f = _i() ? {
            protocol: e,
            version: r,
            env: "browser",
            host: ((n = wi()) === null || n === void 0 ? void 0 : n.host) || ""
        } : {
            protocol: e,
            version: r,
            env: ((u = Lt()) === null || u === void 0 ? void 0 : u.name) || ""
        },
        b = Bs(As(p[1] || ""), f);
    return p[0] + "?" + b;
}
const dr = "Session currently connected",
    Qe = "Session currently disconnected",
    Ds = "Session Rejected",
    $s = "Missing JSON RPC response",
    Ws = 'JSON-RPC success response must include "result" field',
    Hs = 'JSON-RPC error response must include "error" field',
    zs = 'JSON RPC request must have valid "method" value',
    Js = 'JSON RPC request must have valid "id" value',
    Ks = "Missing one of the required parameters: bridge / uri / session",
    Sn = "JSON RPC response format is invalid",
    Vs = "URI format is invalid",
    Ys = "QRCode Modal not provided",
    Cn = "User close QRCode Modal";
class js {
    constructor() {
        this._eventEmitters = [];
    }
    subscribe(e) {
        this._eventEmitters.push(e);
    }
    unsubscribe(e) {
        this._eventEmitters = this._eventEmitters.filter((r) => r.event !== e);
    }
    trigger(e) {
        let r = [],
            n;
        Ss(e) ? n = e.method : ht(e) || Rt(e) ? n = `response:${e.id}` : xn(e) ? n = e.event : n = "", n && (r = this._eventEmitters.filter((u) => u.event === n)), (!r || !r.length) && !Cs(n) && !xn(n) && (r = this._eventEmitters.filter((u) => u.event === "call_request")), r.forEach((u) => {
            if (Rt(e)) {
                const o = new Error(e.error.message);
                u.callback(o, null);
            } else
                u.callback(null, e);
        });
    }
}
class Qs {
    constructor(e = "walletconnect") {
        this.storageId = e;
    }
    getSession() {
        let e = null;
        const r = Fr(this.storageId);
        return r && Os(r) && (e = r), e;
    }
    setSession(e) {
        return Ur(this.storageId, e), e;
    }
    removeSession() {
        Pr(this.storageId);
    }
}
const Gs = "walletconnect.org",
    Zs = "abcdefghijklmnopqrstuvwxyz0123456789",
    Li = Zs.split("").map((t) => `https://${t}.bridge.walletconnect.org`);

function Xs(t) {
    let e = t.indexOf("//") > -1 ? t.split("/")[2] : t.split("/")[0];
    return e = e.split(":")[0], e = e.split("?")[0], e;
}

function ec(t) {
    return Xs(t).split(".").slice(-2).join(".");
}

function tc() {
    return Math.floor(Math.random() * Li.length);
}

function rc() {
    return Li[tc()];
}

function nc(t) {
    return ec(t) === Gs;
}

function ic(t) {
    return nc(t) ? rc() : t;
}
class oc {
    constructor(e) {
        if (this.protocol = "wc", this.version = 1, this._bridge = "", this._key = null, this._clientId = "", this._clientMeta = null, this._peerId = "", this._peerMeta = null, this._handshakeId = 0, this._handshakeTopic = "", this._connected = !1, this._accounts = [], this._chainId = 0, this._networkId = 0, this._rpcUrl = "", this._eventManager = new js(), this._clientMeta = br() || e.connectorOpts.clientMeta || null, this._cryptoLib = e.cryptoLib, this._sessionStorage = e.sessionStorage || new Qs(e.connectorOpts.storageId), this._qrcodeModal = e.connectorOpts.qrcodeModal, this._qrcodeModalOptions = e.connectorOpts.qrcodeModalOptions, this._signingMethods = [...qr, ...e.connectorOpts.signingMethods || []], !e.connectorOpts.bridge && !e.connectorOpts.uri && !e.connectorOpts.session)
            throw new Error(Ks);
        e.connectorOpts.bridge && (this.bridge = ic(e.connectorOpts.bridge)), e.connectorOpts.uri && (this.uri = e.connectorOpts.uri);
        const r = e.connectorOpts.session || this._getStorageSession();
        r && (this.session = r), this.handshakeId && this._subscribeToSessionResponse(this.handshakeId, "Session request rejected"), this._transport = e.transport || new Ps({
            protocol: this.protocol,
            version: this.version,
            url: this.bridge,
            subscriptions: [this.clientId]
        }), this._subscribeToInternalEvents(), this._initTransport(), e.connectorOpts.uri && this._subscribeToSessionRequest(), e.pushServerOpts && this._registerPushServer(e.pushServerOpts);
    }
    set bridge(e) {
        e && (this._bridge = e);
    }
    get bridge() {
        return this._bridge;
    }
    set key(e) {
        if (!e)
            return;
        const r = vs(e);
        this._key = r;
    }
    get key() {
        return this._key ? ps(this._key, !0) : "";
    }
    set clientId(e) {
        e && (this._clientId = e);
    }
    get clientId() {
        let e = this._clientId;
        return e || (e = this._clientId = fr()), this._clientId;
    }
    set peerId(e) {
        e && (this._peerId = e);
    }
    get peerId() {
        return this._peerId;
    }
    set clientMeta(e) {}
    get clientMeta() {
        let e = this._clientMeta;
        return e || (e = this._clientMeta = br()), e;
    }
    set peerMeta(e) {
        this._peerMeta = e;
    }
    get peerMeta() {
        return this._peerMeta;
    }
    set handshakeTopic(e) {
        e && (this._handshakeTopic = e);
    }
    get handshakeTopic() {
        return this._handshakeTopic;
    }
    set handshakeId(e) {
        e && (this._handshakeId = e);
    }
    get handshakeId() {
        return this._handshakeId;
    }
    get uri() {
        return this._formatUri();
    }
    set uri(e) {
        if (!e)
            return;
        const {
            handshakeTopic: r,
            bridge: n,
            key: u
        } = this._parseUri(e);
        this.handshakeTopic = r, this.bridge = n, this.key = u;
    }
    set chainId(e) {
        this._chainId = e;
    }
    get chainId() {
        return this._chainId;
    }
    set networkId(e) {
        this._networkId = e;
    }
    get networkId() {
        return this._networkId;
    }
    set accounts(e) {
        this._accounts = e;
    }
    get accounts() {
        return this._accounts;
    }
    set rpcUrl(e) {
        this._rpcUrl = e;
    }
    get rpcUrl() {
        return this._rpcUrl;
    }
    set connected(e) {}
    get connected() {
        return this._connected;
    }
    set pending(e) {}
    get pending() {
        return !!this._handshakeTopic;
    }
    get session() {
        return {
            connected: this.connected,
            accounts: this.accounts,
            chainId: this.chainId,
            bridge: this.bridge,
            key: this.key,
            clientId: this.clientId,
            clientMeta: this.clientMeta,
            peerId: this.peerId,
            peerMeta: this.peerMeta,
            handshakeId: this.handshakeId,
            handshakeTopic: this.handshakeTopic
        };
    }
    set session(e) {
        e && (this._connected = e.connected, this.accounts = e.accounts, this.chainId = e.chainId, this.bridge = e.bridge, this.key = e.key, this.clientId = e.clientId, this.clientMeta = e.clientMeta, this.peerId = e.peerId, this.peerMeta = e.peerMeta, this.handshakeId = e.handshakeId, this.handshakeTopic = e.handshakeTopic);
    }
    on(e, r) {
        const n = {
            event: e,
            callback: r
        };
        this._eventManager.subscribe(n);
    }
    off(e) {
        this._eventManager.unsubscribe(e);
    }
    async createInstantRequest(e) {
        this._key = await this._generateKey();
        const r = this._formatRequest({
            method: "wc_instantRequest",
            params: [{
                peerId: this.clientId,
                peerMeta: this.clientMeta,
                request: this._formatRequest(e)
            }]
        });
        this.handshakeId = r.id, this.handshakeTopic = fr(), this._eventManager.trigger({
            event: "display_uri",
            params: [this.uri]
        }), this.on("modal_closed", () => {
            throw new Error(Cn);
        });
        const n = () => {
            this.killSession();
        };
        try {
            const u = await this._sendCallRequest(r);
            return u && n(), u;
        } catch (u) {
            throw n(), u;
        }
    }
    async connect(e) {
        if (!this._qrcodeModal)
            throw new Error(Ys);
        return this.connected ? {
            chainId: this.chainId,
            accounts: this.accounts
        } : (await this.createSession(e), new Promise(async (r, n) => {
            this.on("modal_closed", () => n(new Error(Cn))), this.on("connect", (u, o) => {
                if (u)
                    return n(u);
                r(o.params[0]);
            });
        }));
    }
    async createSession(e) {
        if (this._connected)
            throw new Error(dr);
        if (this.pending)
            return;
        this._key = await this._generateKey();
        const r = this._formatRequest({
            method: "wc_sessionRequest",
            params: [{
                peerId: this.clientId,
                peerMeta: this.clientMeta,
                chainId: e && e.chainId ? e.chainId : null
            }]
        });
        this.handshakeId = r.id, this.handshakeTopic = fr(), this._sendSessionRequest(r, "Session update rejected", {
            topic: this.handshakeTopic
        }), this._eventManager.trigger({
            event: "display_uri",
            params: [this.uri]
        });
    }
    approveSession(e) {
        if (this._connected)
            throw new Error(dr);
        this.chainId = e.chainId, this.accounts = e.accounts, this.networkId = e.networkId || 0, this.rpcUrl = e.rpcUrl || "";
        const r = {
                approved: !0,
                chainId: this.chainId,
                networkId: this.networkId,
                accounts: this.accounts,
                rpcUrl: this.rpcUrl,
                peerId: this.clientId,
                peerMeta: this.clientMeta
            },
            n = {
                id: this.handshakeId,
                jsonrpc: "2.0",
                result: r
            };
        this._sendResponse(n), this._connected = !0, this._setStorageSession(), this._eventManager.trigger({
            event: "connect",
            params: [{
                peerId: this.peerId,
                peerMeta: this.peerMeta,
                chainId: this.chainId,
                accounts: this.accounts
            }]
        });
    }
    rejectSession(e) {
        if (this._connected)
            throw new Error(dr);
        const r = e && e.message ? e.message : Ds,
            n = this._formatResponse({
                id: this.handshakeId,
                error: {
                    message: r
                }
            });
        this._sendResponse(n), this._connected = !1, this._eventManager.trigger({
            event: "disconnect",
            params: [{
                message: r
            }]
        }), this._removeStorageSession();
    }
    updateSession(e) {
        if (!this._connected)
            throw new Error(Qe);
        this.chainId = e.chainId, this.accounts = e.accounts, this.networkId = e.networkId || 0, this.rpcUrl = e.rpcUrl || "";
        const r = {
                approved: !0,
                chainId: this.chainId,
                networkId: this.networkId,
                accounts: this.accounts,
                rpcUrl: this.rpcUrl
            },
            n = this._formatRequest({
                method: "wc_sessionUpdate",
                params: [r]
            });
        this._sendSessionRequest(n, "Session update rejected"), this._eventManager.trigger({
            event: "session_update",
            params: [{
                chainId: this.chainId,
                accounts: this.accounts
            }]
        }), this._manageStorageSession();
    }
    async killSession(e) {
        const r = e ? e.message : "Session Disconnected",
            n = {
                approved: !1,
                chainId: null,
                networkId: null,
                accounts: null
            },
            u = this._formatRequest({
                method: "wc_sessionUpdate",
                params: [n]
            });
        await this._sendRequest(u), this._handleSessionDisconnect(r);
    }
    async sendTransaction(e) {
        if (!this._connected)
            throw new Error(Qe);
        const r = hr(e),
            n = this._formatRequest({
                method: "eth_sendTransaction",
                params: [r]
            });
        return await this._sendCallRequest(n);
    }
    async signTransaction(e) {
        if (!this._connected)
            throw new Error(Qe);
        const r = hr(e),
            n = this._formatRequest({
                method: "eth_signTransaction",
                params: [r]
            });
        return await this._sendCallRequest(n);
    }
    async signMessage(e) {
        if (!this._connected)
            throw new Error(Qe);
        const r = this._formatRequest({
            method: "eth_sign",
            params: e
        });
        return await this._sendCallRequest(r);
    }
    async signPersonalMessage(e) {
        if (!this._connected)
            throw new Error(Qe);
        e = En(e);
        const r = this._formatRequest({
            method: "personal_sign",
            params: e
        });
        return await this._sendCallRequest(r);
    }
    async signTypedData(e) {
        if (!this._connected)
            throw new Error(Qe);
        const r = this._formatRequest({
            method: "eth_signTypedData",
            params: e
        });
        return await this._sendCallRequest(r);
    }
    async updateChain(e) {
        if (!this._connected)
            throw new Error("Session currently disconnected");
        const r = this._formatRequest({
            method: "wallet_updateChain",
            params: [e]
        });
        return await this._sendCallRequest(r);
    }
    unsafeSend(e, r) {
        return this._sendRequest(e, r), this._eventManager.trigger({
            event: "call_request_sent",
            params: [{
                request: e,
                options: r
            }]
        }), new Promise((n, u) => {
            this._subscribeToResponse(e.id, (o, p) => {
                if (o) {
                    u(o);
                    return;
                }
                if (!p)
                    throw new Error($s);
                n(p);
            });
        });
    }
    async sendCustomRequest(e, r) {
        if (!this._connected)
            throw new Error(Qe);
        switch (e.method) {
            case "eth_accounts":
                return this.accounts;
            case "eth_chainId":
                return Bi(this.chainId);
            case "eth_sendTransaction":
            case "eth_signTransaction":
                e.params && (e.params[0] = hr(e.params[0]));
                break;
            case "personal_sign":
                e.params && (e.params = En(e.params));
                break;
        }
        const n = this._formatRequest(e);
        return await this._sendCallRequest(n, r);
    }
    approveRequest(e) {
        if (ht(e)) {
            const r = this._formatResponse(e);
            this._sendResponse(r);
        } else
            throw new Error(Ws);
    }
    rejectRequest(e) {
        if (Rt(e)) {
            const r = this._formatResponse(e);
            this._sendResponse(r);
        } else
            throw new Error(Hs);
    }
    transportClose() {
        this._transport.close();
    }
    async _sendRequest(e, r) {
        const n = this._formatRequest(e),
            u = await this._encrypt(n),
            o = typeof(r == null ? void 0 : r.topic) < "u" ? r.topic : this.peerId,
            p = JSON.stringify(u),
            f = typeof(r == null ? void 0 : r.forcePushNotification) < "u" ? !r.forcePushNotification : ks(n);
        this._transport.send(p, o, f);
    }
    async _sendResponse(e) {
        const r = await this._encrypt(e),
            n = this.peerId,
            u = JSON.stringify(r),
            o = !0;
        this._transport.send(u, n, o);
    }
    async _sendSessionRequest(e, r, n) {
        this._sendRequest(e, n), this._subscribeToSessionResponse(e.id, r);
    }
    _sendCallRequest(e, r) {
        return this._sendRequest(e, r), this._eventManager.trigger({
            event: "call_request_sent",
            params: [{
                request: e,
                options: r
            }]
        }), this._subscribeToCallResponse(e.id);
    }
    _formatRequest(e) {
        if (typeof e.method > "u")
            throw new Error(zs);
        return {
            id: typeof e.id > "u" ? ys() : e.id,
            jsonrpc: "2.0",
            method: e.method,
            params: typeof e.params > "u" ? [] : e.params
        };
    }
    _formatResponse(e) {
        if (typeof e.id > "u")
            throw new Error(Js);
        const r = {
            id: e.id,
            jsonrpc: "2.0"
        };
        if (Rt(e)) {
            const n = Ts(e.error);
            return Object.assign(Object.assign(Object.assign({}, r), e), {
                error: n
            });
        } else if (ht(e))
            return Object.assign(Object.assign({}, r), e);
        throw new Error(Sn);
    }
    _handleSessionDisconnect(e) {
        const r = e || "Session Disconnected";
        this._connected || (this._qrcodeModal && this._qrcodeModal.close(), Pr(It)), this._connected && (this._connected = !1), this._handshakeId && (this._handshakeId = 0), this._handshakeTopic && (this._handshakeTopic = ""), this._peerId && (this._peerId = ""), this._eventManager.trigger({
            event: "disconnect",
            params: [{
                message: r
            }]
        }), this._removeStorageSession(), this.transportClose();
    }
    _handleSessionResponse(e, r) {
        r ? r.approved ? (this._connected ? (r.chainId && (this.chainId = r.chainId), r.accounts && (this.accounts = r.accounts), this._eventManager.trigger({
            event: "session_update",
            params: [{
                chainId: this.chainId,
                accounts: this.accounts
            }]
        })) : (this._connected = !0, r.chainId && (this.chainId = r.chainId), r.accounts && (this.accounts = r.accounts), r.peerId && !this.peerId && (this.peerId = r.peerId), r.peerMeta && !this.peerMeta && (this.peerMeta = r.peerMeta), this._eventManager.trigger({
            event: "connect",
            params: [{
                peerId: this.peerId,
                peerMeta: this.peerMeta,
                chainId: this.chainId,
                accounts: this.accounts
            }]
        })), this._manageStorageSession()) : this._handleSessionDisconnect(e) : this._handleSessionDisconnect(e);
    }
    async _handleIncomingMessages(e) {
        if (![this.clientId, this.handshakeTopic].includes(e.topic))
            return;
        let n;
        try {
            n = JSON.parse(e.payload);
        } catch {
            return;
        }
        const u = await this._decrypt(n);
        u && this._eventManager.trigger(u);
    }
    _subscribeToSessionRequest() {
        this._transport.subscribe(this.handshakeTopic);
    }
    _subscribeToResponse(e, r) {
        this.on(`response:${e}`, r);
    }
    _subscribeToSessionResponse(e, r) {
        this._subscribeToResponse(e, (n, u) => {
            if (n) {
                this._handleSessionResponse(n.message);
                return;
            }
            ht(u) ? this._handleSessionResponse(r, u.result) : u.error && u.error.message ? this._handleSessionResponse(u.error.message) : this._handleSessionResponse(r);
        });
    }
    _subscribeToCallResponse(e) {
        return new Promise((r, n) => {
            this._subscribeToResponse(e, (u, o) => {
                if (u) {
                    n(u);
                    return;
                }
                ht(o) ? r(o.result) : o.error && o.error.message ? n(o.error) : n(new Error(Sn));
            });
        });
    }
    _subscribeToInternalEvents() {
        this.on("display_uri", () => {
            this._qrcodeModal && this._qrcodeModal.open(this.uri, () => {
                this._eventManager.trigger({
                    event: "modal_closed",
                    params: []
                });
            }, this._qrcodeModalOptions);
        }), this.on("connect", () => {
            this._qrcodeModal && this._qrcodeModal.close();
        }), this.on("call_request_sent", (e, r) => {
            const {
                request: n
            } = r.params[0];
            if (gi() && this._signingMethods.includes(n.method)) {
                const u = Fr(It);
                u && (window.location.href = u.href);
            }
        }), this.on("wc_sessionRequest", (e, r) => {
            e && this._eventManager.trigger({
                event: "error",
                params: [{
                    code: "SESSION_REQUEST_ERROR",
                    message: e.toString()
                }]
            }), this.handshakeId = r.id, this.peerId = r.params[0].peerId, this.peerMeta = r.params[0].peerMeta;
            const n = Object.assign(Object.assign({}, r), {
                method: "session_request"
            });
            this._eventManager.trigger(n);
        }), this.on("wc_sessionUpdate", (e, r) => {
            e && this._handleSessionResponse(e.message), this._handleSessionResponse("Session disconnected", r.params[0]);
        });
    }
    _initTransport() {
        this._transport.on("message", (e) => this._handleIncomingMessages(e)), this._transport.on("open", () => this._eventManager.trigger({
            event: "transport_open",
            params: []
        })), this._transport.on("close", () => this._eventManager.trigger({
            event: "transport_close",
            params: []
        })), this._transport.on("error", () => this._eventManager.trigger({
            event: "transport_error",
            params: ["Websocket connection failed"]
        })), this._transport.open();
    }
    _formatUri() {
        const e = this.protocol,
            r = this.handshakeTopic,
            n = this.version,
            u = encodeURIComponent(this.bridge),
            o = this.key;
        return `${e}:${r}@${n}?bridge=${u}&key=${o}`;
    }
    _parseUri(e) {
        const r = Ls(e);
        if (r.protocol === this.protocol) {
            if (!r.handshakeTopic)
                throw Error("Invalid or missing handshakeTopic parameter value");
            const n = r.handshakeTopic;
            if (!r.bridge)
                throw Error("Invalid or missing bridge url parameter value");
            const u = decodeURIComponent(r.bridge);
            if (!r.key)
                throw Error("Invalid or missing key parameter value");
            const o = r.key;
            return {
                handshakeTopic: n,
                bridge: u,
                key: o
            };
        } else
            throw new Error(Vs);
    }
    async _generateKey() {
        return this._cryptoLib ? await this._cryptoLib.generateKey() : null;
    }
    async _encrypt(e) {
        const r = this._key;
        return this._cryptoLib && r ? await this._cryptoLib.encrypt(e, r) : null;
    }
    async _decrypt(e) {
        const r = this._key;
        return this._cryptoLib && r ? await this._cryptoLib.decrypt(e, r) : null;
    }
    _getStorageSession() {
        let e = null;
        return this._sessionStorage && (e = this._sessionStorage.getSession()), e;
    }
    _setStorageSession() {
        this._sessionStorage && this._sessionStorage.setSession(this.session);
    }
    _removeStorageSession() {
        this._sessionStorage && this._sessionStorage.removeSession();
    }
    _manageStorageSession() {
        this._connected ? this._setStorageSession() : this._removeStorageSession();
    }
    _registerPushServer(e) {
        if (!e.url || typeof e.url != "string")
            throw Error("Invalid or missing pushServerOpts.url parameter value");
        if (!e.type || typeof e.type != "string")
            throw Error("Invalid or missing pushServerOpts.type parameter value");
        if (!e.token || typeof e.token != "string")
            throw Error("Invalid or missing pushServerOpts.token parameter value");
        const r = {
            bridge: this.bridge,
            topic: this.clientId,
            type: e.type,
            token: e.token,
            peerName: "",
            language: e.language || ""
        };
        this.on("connect", async (n, u) => {
            if (n)
                throw n;
            if (e.peerMeta) {
                const o = u.params[0].peerMeta.name;
                r.peerName = o;
            }
            try {
                if (!(await (await fetch(`${e.url}/new`, {
                        method: "POST",
                        headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(r)
                    })).json()).success)
                    throw Error("Failed to register in Push Server");
            } catch {
                throw Error("Failed to register in Push Server");
            }
        });
    }
}

function ac(t) {
    return wt.getBrowerCrypto().getRandomValues(new Uint8Array(t));
}
const Ui = 256,
    Fi = Ui,
    sc = Ui,
    Ke = "AES-CBC",
    cc = `SHA-${Fi}`,
    Er = "HMAC",
    uc = "encrypt",
    lc = "decrypt",
    fc = "sign",
    hc = "verify";

function dc(t) {
    return t === Ke ? {
        length: Fi,
        name: Ke
    } : {
        hash: {
            name: cc
        },
        name: Er
    };
}

function pc(t) {
    return t === Ke ? [uc, lc] : [fc, hc];
}
async function Hr(t, e = Ke) {
    return wt.getSubtleCrypto().importKey("raw", t, dc(e), !0, pc(e));
}
async function gc(t, e, r) {
    const n = wt.getSubtleCrypto(),
        u = await Hr(e, Ke),
        o = await n.encrypt({
            iv: t,
            name: Ke
        }, u, r);
    return new Uint8Array(o);
}
async function mc(t, e, r) {
    const n = wt.getSubtleCrypto(),
        u = await Hr(e, Ke),
        o = await n.decrypt({
            iv: t,
            name: Ke
        }, u, r);
    return new Uint8Array(o);
}
async function _c(t, e) {
    const r = wt.getSubtleCrypto(),
        n = await Hr(t, Er),
        u = await r.sign({
            length: sc,
            name: Er
        }, n, e);
    return new Uint8Array(u);
}

function vc(t, e, r) {
    return gc(t, e, r);
}

function wc(t, e, r) {
    return mc(t, e, r);
}
async function Pi(t, e) {
    return await _c(t, e);
}
async function qi(t) {
    const e = (t || 256) / 8,
        r = ac(e);
    return gs(qt(r));
}
async function Di(t, e) {
    const r = tt(t.data),
        n = tt(t.iv),
        u = tt(t.hmac),
        o = et(u, !1),
        p = Ti(r, n),
        f = await Pi(e, p),
        b = et(f, !1);
    return Je(o) === Je(b);
}
async function yc(t, e, r) {
    const n = rt(xr(e)),
        u = r || await qi(128),
        o = rt(xr(u)),
        p = et(o, !1),
        f = JSON.stringify(t),
        b = as(f),
        I = await vc(o, n, b),
        E = et(I, !1),
        N = Ti(I, o),
        L = await Pi(n, N),
        P = et(L, !1);
    return {
        data: E,
        hmac: P,
        iv: p
    };
}
async function bc(t, e) {
    const r = rt(xr(e));
    if (!r)
        throw new Error("Missing key: required for decryption");
    if (!await Di(t, r))
        return null;
    const u = tt(t.data),
        o = tt(t.iv),
        p = await wc(o, r, u),
        f = is(p);
    let b;
    try {
        b = JSON.parse(f);
    } catch {
        return null;
    }
    return b;
}
const Mc = /* @__PURE__ */ Object.freeze( /* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    decrypt: bc,
    encrypt: yc,
    generateKey: qi,
    verifyHmac: Di
}, Symbol.toStringTag, {
    value: "Module"
}));
class xc extends oc {
    constructor(e, r) {
        super({
            cryptoLib: Mc,
            connectorOpts: e,
            pushServerOpts: r
        });
    }
}
const Ec = /* @__PURE__ */ Zn(Va);
var yt = {},
    Sc = function() {
        return typeof Promise == "function" && Promise.prototype && Promise.prototype.then;
    },
    $i = {},
    Ve = {},
    Cc = {}.toString,
    zr = Array.isArray || function(t) {
        return Cc.call(t) == "[object Array]";
    },
    kc = zr;

function Ic() {
    try {
        var t = new Uint8Array(1);
        return t.__proto__ = {
            __proto__: Uint8Array.prototype,
            foo: function() {
                return 42;
            }
        }, t.foo() === 42;
    } catch {
        return !1;
    }
}
X.TYPED_ARRAY_SUPPORT = Ic();
var kn = X.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;

function X(t, e, r) {
    return !X.TYPED_ARRAY_SUPPORT && !(this instanceof X) ? new X(t, e, r) : typeof t == "number" ? Wi(this, t) : Lc(this, t, e, r);
}
X.TYPED_ARRAY_SUPPORT && (X.prototype.__proto__ = Uint8Array.prototype, X.__proto__ = Uint8Array, typeof Symbol < "u" && Symbol.species && X[Symbol.species] === X && Object.defineProperty(X, Symbol.species, {
    value: null,
    configurable: !0,
    enumerable: !1,
    writable: !1
}));

function Jr(t) {
    if (t >= kn)
        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + kn.toString(16) + " bytes");
    return t | 0;
}

function Rc(t) {
    return t !== t;
}

function nt(t, e) {
    var r;
    return X.TYPED_ARRAY_SUPPORT ? (r = new Uint8Array(e), r.__proto__ = X.prototype) : (r = t, r === null && (r = new X(e)), r.length = e), r;
}

function Wi(t, e) {
    var r = nt(t, e < 0 ? 0 : Jr(e) | 0);
    if (!X.TYPED_ARRAY_SUPPORT)
        for (var n = 0; n < e; ++n)
            r[n] = 0;
    return r;
}

function Tc(t, e) {
    var r = zi(e) | 0,
        n = nt(t, r),
        u = n.write(e);
    return u !== r && (n = n.slice(0, u)), n;
}

function Sr(t, e) {
    for (var r = e.length < 0 ? 0 : Jr(e.length) | 0, n = nt(t, r), u = 0; u < r; u += 1)
        n[u] = e[u] & 255;
    return n;
}

function Ac(t, e, r, n) {
    if (r < 0 || e.byteLength < r)
        throw new RangeError("'offset' is out of bounds");
    if (e.byteLength < r + (n || 0))
        throw new RangeError("'length' is out of bounds");
    var u;
    return r === void 0 && n === void 0 ? u = new Uint8Array(e) : n === void 0 ? u = new Uint8Array(e, r) : u = new Uint8Array(e, r, n), X.TYPED_ARRAY_SUPPORT ? u.__proto__ = X.prototype : u = Sr(t, u), u;
}

function Bc(t, e) {
    if (X.isBuffer(e)) {
        var r = Jr(e.length) | 0,
            n = nt(t, r);
        return n.length === 0 || e.copy(n, 0, 0, r), n;
    }
    if (e) {
        if (typeof ArrayBuffer < "u" && e.buffer instanceof ArrayBuffer || "length" in e)
            return typeof e.length != "number" || Rc(e.length) ? nt(t, 0) : Sr(t, e);
        if (e.type === "Buffer" && Array.isArray(e.data))
            return Sr(t, e.data);
    }
    throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
}

function Hi(t, e) {
    e = e || 1 / 0;
    for (var r, n = t.length, u = null, o = [], p = 0; p < n; ++p) {
        if (r = t.charCodeAt(p), r > 55295 && r < 57344) {
            if (!u) {
                if (r > 56319) {
                    (e -= 3) > -1 && o.push(239, 191, 189);
                    continue;
                } else if (p + 1 === n) {
                    (e -= 3) > -1 && o.push(239, 191, 189);
                    continue;
                }
                u = r;
                continue;
            }
            if (r < 56320) {
                (e -= 3) > -1 && o.push(239, 191, 189), u = r;
                continue;
            }
            r = (u - 55296 << 10 | r - 56320) + 65536;
        } else
            u && (e -= 3) > -1 && o.push(239, 191, 189);
        if (u = null, r < 128) {
            if ((e -= 1) < 0)
                break;
            o.push(r);
        } else if (r < 2048) {
            if ((e -= 2) < 0)
                break;
            o.push(
                r >> 6 | 192,
                r & 63 | 128
            );
        } else if (r < 65536) {
            if ((e -= 3) < 0)
                break;
            o.push(
                r >> 12 | 224,
                r >> 6 & 63 | 128,
                r & 63 | 128
            );
        } else if (r < 1114112) {
            if ((e -= 4) < 0)
                break;
            o.push(
                r >> 18 | 240,
                r >> 12 & 63 | 128,
                r >> 6 & 63 | 128,
                r & 63 | 128
            );
        } else
            throw new Error("Invalid code point");
    }
    return o;
}

function zi(t) {
    if (X.isBuffer(t))
        return t.length;
    if (typeof ArrayBuffer < "u" && typeof ArrayBuffer.isView == "function" && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer))
        return t.byteLength;
    typeof t != "string" && (t = "" + t);
    var e = t.length;
    return e === 0 ? 0 : Hi(t).length;
}

function Nc(t, e, r, n) {
    for (var u = 0; u < n && !(u + r >= e.length || u >= t.length); ++u)
        e[u + r] = t[u];
    return u;
}

function Oc(t, e, r, n) {
    return Nc(Hi(e, t.length - r), t, r, n);
}

function Lc(t, e, r, n) {
    if (typeof e == "number")
        throw new TypeError('"value" argument must not be a number');
    return typeof ArrayBuffer < "u" && e instanceof ArrayBuffer ? Ac(t, e, r, n) : typeof e == "string" ? Tc(t, e) : Bc(t, e);
}
X.prototype.write = function(e, r, n) {
    r === void 0 ? (n = this.length, r = 0) : n === void 0 && typeof r == "string" ? (n = this.length, r = 0) : isFinite(r) && (r = r | 0, isFinite(n) ? n = n | 0 : n = void 0);
    var u = this.length - r;
    if ((n === void 0 || n > u) && (n = u), e.length > 0 && (n < 0 || r < 0) || r > this.length)
        throw new RangeError("Attempt to write outside buffer bounds");
    return Oc(this, e, r, n);
};
X.prototype.slice = function(e, r) {
    var n = this.length;
    e = ~~e, r = r === void 0 ? n : ~~r, e < 0 ? (e += n, e < 0 && (e = 0)) : e > n && (e = n), r < 0 ? (r += n, r < 0 && (r = 0)) : r > n && (r = n), r < e && (r = e);
    var u;
    if (X.TYPED_ARRAY_SUPPORT)
        u = this.subarray(e, r), u.__proto__ = X.prototype;
    else {
        var o = r - e;
        u = new X(o, void 0);
        for (var p = 0; p < o; ++p)
            u[p] = this[p + e];
    }
    return u;
};
X.prototype.copy = function(e, r, n, u) {
    if (n || (n = 0), !u && u !== 0 && (u = this.length), r >= e.length && (r = e.length), r || (r = 0), u > 0 && u < n && (u = n), u === n || e.length === 0 || this.length === 0)
        return 0;
    if (r < 0)
        throw new RangeError("targetStart out of bounds");
    if (n < 0 || n >= this.length)
        throw new RangeError("sourceStart out of bounds");
    if (u < 0)
        throw new RangeError("sourceEnd out of bounds");
    u > this.length && (u = this.length), e.length - r < u - n && (u = e.length - r + n);
    var o = u - n,
        p;
    if (this === e && n < r && r < u)
        for (p = o - 1; p >= 0; --p)
            e[p + r] = this[p + n];
    else if (o < 1e3 || !X.TYPED_ARRAY_SUPPORT)
        for (p = 0; p < o; ++p)
            e[p + r] = this[p + n];
    else
        Uint8Array.prototype.set.call(
            e,
            this.subarray(n, n + o),
            r
        );
    return o;
};
X.prototype.fill = function(e, r, n) {
    if (typeof e == "string") {
        if (typeof r == "string" ? (r = 0, n = this.length) : typeof n == "string" && (n = this.length), e.length === 1) {
            var u = e.charCodeAt(0);
            u < 256 && (e = u);
        }
    } else
        typeof e == "number" && (e = e & 255);
    if (r < 0 || this.length < r || this.length < n)
        throw new RangeError("Out of range index");
    if (n <= r)
        return this;
    r = r >>> 0, n = n === void 0 ? this.length : n >>> 0, e || (e = 0);
    var o;
    if (typeof e == "number")
        for (o = r; o < n; ++o)
            this[o] = e;
    else {
        var p = X.isBuffer(e) ? e : new X(e),
            f = p.length;
        for (o = 0; o < n - r; ++o)
            this[o + r] = p[o % f];
    }
    return this;
};
X.concat = function(e, r) {
    if (!kc(e))
        throw new TypeError('"list" argument must be an Array of Buffers');
    if (e.length === 0)
        return nt(null, 0);
    var n;
    if (r === void 0)
        for (r = 0, n = 0; n < e.length; ++n)
            r += e[n].length;
    var u = Wi(null, r),
        o = 0;
    for (n = 0; n < e.length; ++n) {
        var p = e[n];
        if (!X.isBuffer(p))
            throw new TypeError('"list" argument must be an Array of Buffers');
        p.copy(u, o), o += p.length;
    }
    return u;
};
X.byteLength = zi;
X.prototype._isBuffer = !0;
X.isBuffer = function(e) {
    return !!(e != null && e._isBuffer);
};
Ve.alloc = function(t) {
    var e = new X(t);
    return e.fill(0), e;
};
Ve.from = function(t) {
    return new X(t);
};
var Ue = {},
    Kr, Uc = [
        0,
        // Not used
        26,
        44,
        70,
        100,
        134,
        172,
        196,
        242,
        292,
        346,
        404,
        466,
        532,
        581,
        655,
        733,
        815,
        901,
        991,
        1085,
        1156,
        1258,
        1364,
        1474,
        1588,
        1706,
        1828,
        1921,
        2051,
        2185,
        2323,
        2465,
        2611,
        2761,
        2876,
        3034,
        3196,
        3362,
        3532,
        3706
    ];
Ue.getSymbolSize = function(e) {
    if (!e)
        throw new Error('"version" cannot be null or undefined');
    if (e < 1 || e > 40)
        throw new Error('"version" should be in range from 1 to 40');
    return e * 4 + 17;
};
Ue.getSymbolTotalCodewords = function(e) {
    return Uc[e];
};
Ue.getBCHDigit = function(t) {
    for (var e = 0; t !== 0;)
        e++, t >>>= 1;
    return e;
};
Ue.setToSJISFunction = function(e) {
    if (typeof e != "function")
        throw new Error('"toSJISFunc" is not a valid function.');
    Kr = e;
};
Ue.isKanjiModeEnabled = function() {
    return typeof Kr < "u";
};
Ue.toSJIS = function(e) {
    return Kr(e);
};
var Dt = {};
(function(t) {
    t.L = {
        bit: 1
    }, t.M = {
        bit: 0
    }, t.Q = {
        bit: 3
    }, t.H = {
        bit: 2
    };

    function e(r) {
        if (typeof r != "string")
            throw new Error("Param is not a string");
        var n = r.toLowerCase();
        switch (n) {
            case "l":
            case "low":
                return t.L;
            case "m":
            case "medium":
                return t.M;
            case "q":
            case "quartile":
                return t.Q;
            case "h":
            case "high":
                return t.H;
            default:
                throw new Error("Unknown EC Level: " + r);
        }
    }
    t.isValid = function(n) {
        return n && typeof n.bit < "u" && n.bit >= 0 && n.bit < 4;
    }, t.from = function(n, u) {
        if (t.isValid(n))
            return n;
        try {
            return e(n);
        } catch {
            return u;
        }
    };
})(Dt);

function Ji() {
    this.buffer = [], this.length = 0;
}
Ji.prototype = {
    get: function(t) {
        var e = Math.floor(t / 8);
        return (this.buffer[e] >>> 7 - t % 8 & 1) === 1;
    },
    put: function(t, e) {
        for (var r = 0; r < e; r++)
            this.putBit((t >>> e - r - 1 & 1) === 1);
    },
    getLengthInBits: function() {
        return this.length;
    },
    putBit: function(t) {
        var e = Math.floor(this.length / 8);
        this.buffer.length <= e && this.buffer.push(0), t && (this.buffer[e] |= 128 >>> this.length % 8), this.length++;
    }
};
var Fc = Ji,
    In = Ve;

function bt(t) {
    if (!t || t < 1)
        throw new Error("BitMatrix size must be defined and greater than 0");
    this.size = t, this.data = In.alloc(t * t), this.reservedBit = In.alloc(t * t);
}
bt.prototype.set = function(t, e, r, n) {
    var u = t * this.size + e;
    this.data[u] = r, n && (this.reservedBit[u] = !0);
};
bt.prototype.get = function(t, e) {
    return this.data[t * this.size + e];
};
bt.prototype.xor = function(t, e, r) {
    this.data[t * this.size + e] ^= r;
};
bt.prototype.isReserved = function(t, e) {
    return this.reservedBit[t * this.size + e];
};
var Pc = bt,
    Ki = {};
(function(t) {
    var e = Ue.getSymbolSize;
    t.getRowColCoords = function(n) {
        if (n === 1)
            return [];
        for (var u = Math.floor(n / 7) + 2, o = e(n), p = o === 145 ? 26 : Math.ceil((o - 13) / (2 * u - 2)) * 2, f = [o - 7], b = 1; b < u - 1; b++)
            f[b] = f[b - 1] - p;
        return f.push(6), f.reverse();
    }, t.getPositions = function(n) {
        for (var u = [], o = t.getRowColCoords(n), p = o.length, f = 0; f < p; f++)
            for (var b = 0; b < p; b++)
                f === 0 && b === 0 || // top-left
                f === 0 && b === p - 1 || // bottom-left
                f === p - 1 && b === 0 || u.push([o[f], o[b]]);
        return u;
    };
})(Ki);
var Vi = {},
    qc = Ue.getSymbolSize,
    Rn = 7;
Vi.getPositions = function(e) {
    var r = qc(e);
    return [
        // top-left
        [0, 0],
        // top-right
        [r - Rn, 0],
        // bottom-left
        [0, r - Rn]
    ];
};
var Yi = {};
(function(t) {
    t.Patterns = {
        PATTERN000: 0,
        PATTERN001: 1,
        PATTERN010: 2,
        PATTERN011: 3,
        PATTERN100: 4,
        PATTERN101: 5,
        PATTERN110: 6,
        PATTERN111: 7
    };
    var e = {
        N1: 3,
        N2: 3,
        N3: 40,
        N4: 10
    };
    t.isValid = function(u) {
        return u != null && u !== "" && !isNaN(u) && u >= 0 && u <= 7;
    }, t.from = function(u) {
        return t.isValid(u) ? parseInt(u, 10) : void 0;
    }, t.getPenaltyN1 = function(u) {
        for (var o = u.size, p = 0, f = 0, b = 0, I = null, E = null, N = 0; N < o; N++) {
            f = b = 0, I = E = null;
            for (var L = 0; L < o; L++) {
                var P = u.get(N, L);
                P === I ? f++ : (f >= 5 && (p += e.N1 + (f - 5)), I = P, f = 1), P = u.get(L, N), P === E ? b++ : (b >= 5 && (p += e.N1 + (b - 5)), E = P, b = 1);
            }
            f >= 5 && (p += e.N1 + (f - 5)), b >= 5 && (p += e.N1 + (b - 5));
        }
        return p;
    }, t.getPenaltyN2 = function(u) {
        for (var o = u.size, p = 0, f = 0; f < o - 1; f++)
            for (var b = 0; b < o - 1; b++) {
                var I = u.get(f, b) + u.get(f, b + 1) + u.get(f + 1, b) + u.get(f + 1, b + 1);
                (I === 4 || I === 0) && p++;
            }
        return p * e.N2;
    }, t.getPenaltyN3 = function(u) {
        for (var o = u.size, p = 0, f = 0, b = 0, I = 0; I < o; I++) {
            f = b = 0;
            for (var E = 0; E < o; E++)
                f = f << 1 & 2047 | u.get(I, E), E >= 10 && (f === 1488 || f === 93) && p++, b = b << 1 & 2047 | u.get(E, I), E >= 10 && (b === 1488 || b === 93) && p++;
        }
        return p * e.N3;
    }, t.getPenaltyN4 = function(u) {
        for (var o = 0, p = u.data.length, f = 0; f < p; f++)
            o += u.data[f];
        var b = Math.abs(Math.ceil(o * 100 / p / 5) - 10);
        return b * e.N4;
    };

    function r(n, u, o) {
        switch (n) {
            case t.Patterns.PATTERN000:
                return (u + o) % 2 === 0;
            case t.Patterns.PATTERN001:
                return u % 2 === 0;
            case t.Patterns.PATTERN010:
                return o % 3 === 0;
            case t.Patterns.PATTERN011:
                return (u + o) % 3 === 0;
            case t.Patterns.PATTERN100:
                return (Math.floor(u / 2) + Math.floor(o / 3)) % 2 === 0;
            case t.Patterns.PATTERN101:
                return u * o % 2 + u * o % 3 === 0;
            case t.Patterns.PATTERN110:
                return (u * o % 2 + u * o % 3) % 2 === 0;
            case t.Patterns.PATTERN111:
                return (u * o % 3 + (u + o) % 2) % 2 === 0;
            default:
                throw new Error("bad maskPattern:" + n);
        }
    }
    t.applyMask = function(u, o) {
        for (var p = o.size, f = 0; f < p; f++)
            for (var b = 0; b < p; b++)
                o.isReserved(b, f) || o.xor(b, f, r(u, b, f));
    }, t.getBestMask = function(u, o) {
        for (var p = Object.keys(t.Patterns).length, f = 0, b = 1 / 0, I = 0; I < p; I++) {
            o(I), t.applyMask(I, u);
            var E = t.getPenaltyN1(u) + t.getPenaltyN2(u) + t.getPenaltyN3(u) + t.getPenaltyN4(u);
            t.applyMask(I, u), E < b && (b = E, f = I);
        }
        return f;
    };
})(Yi);
var $t = {},
    He = Dt,
    St = [
        // L  M  Q  H
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        2,
        2,
        1,
        2,
        2,
        4,
        1,
        2,
        4,
        4,
        2,
        4,
        4,
        4,
        2,
        4,
        6,
        5,
        2,
        4,
        6,
        6,
        2,
        5,
        8,
        8,
        4,
        5,
        8,
        8,
        4,
        5,
        8,
        11,
        4,
        8,
        10,
        11,
        4,
        9,
        12,
        16,
        4,
        9,
        16,
        16,
        6,
        10,
        12,
        18,
        6,
        10,
        17,
        16,
        6,
        11,
        16,
        19,
        6,
        13,
        18,
        21,
        7,
        14,
        21,
        25,
        8,
        16,
        20,
        25,
        8,
        17,
        23,
        25,
        9,
        17,
        23,
        34,
        9,
        18,
        25,
        30,
        10,
        20,
        27,
        32,
        12,
        21,
        29,
        35,
        12,
        23,
        34,
        37,
        12,
        25,
        34,
        40,
        13,
        26,
        35,
        42,
        14,
        28,
        38,
        45,
        15,
        29,
        40,
        48,
        16,
        31,
        43,
        51,
        17,
        33,
        45,
        54,
        18,
        35,
        48,
        57,
        19,
        37,
        51,
        60,
        19,
        38,
        53,
        63,
        20,
        40,
        56,
        66,
        21,
        43,
        59,
        70,
        22,
        45,
        62,
        74,
        24,
        47,
        65,
        77,
        25,
        49,
        68,
        81
    ],
    Ct = [
        // L  M  Q  H
        7,
        10,
        13,
        17,
        10,
        16,
        22,
        28,
        15,
        26,
        36,
        44,
        20,
        36,
        52,
        64,
        26,
        48,
        72,
        88,
        36,
        64,
        96,
        112,
        40,
        72,
        108,
        130,
        48,
        88,
        132,
        156,
        60,
        110,
        160,
        192,
        72,
        130,
        192,
        224,
        80,
        150,
        224,
        264,
        96,
        176,
        260,
        308,
        104,
        198,
        288,
        352,
        120,
        216,
        320,
        384,
        132,
        240,
        360,
        432,
        144,
        280,
        408,
        480,
        168,
        308,
        448,
        532,
        180,
        338,
        504,
        588,
        196,
        364,
        546,
        650,
        224,
        416,
        600,
        700,
        224,
        442,
        644,
        750,
        252,
        476,
        690,
        816,
        270,
        504,
        750,
        900,
        300,
        560,
        810,
        960,
        312,
        588,
        870,
        1050,
        336,
        644,
        952,
        1110,
        360,
        700,
        1020,
        1200,
        390,
        728,
        1050,
        1260,
        420,
        784,
        1140,
        1350,
        450,
        812,
        1200,
        1440,
        480,
        868,
        1290,
        1530,
        510,
        924,
        1350,
        1620,
        540,
        980,
        1440,
        1710,
        570,
        1036,
        1530,
        1800,
        570,
        1064,
        1590,
        1890,
        600,
        1120,
        1680,
        1980,
        630,
        1204,
        1770,
        2100,
        660,
        1260,
        1860,
        2220,
        720,
        1316,
        1950,
        2310,
        750,
        1372,
        2040,
        2430
    ];
$t.getBlocksCount = function(e, r) {
    switch (r) {
        case He.L:
            return St[(e - 1) * 4 + 0];
        case He.M:
            return St[(e - 1) * 4 + 1];
        case He.Q:
            return St[(e - 1) * 4 + 2];
        case He.H:
            return St[(e - 1) * 4 + 3];
        default:
            return;
    }
};
$t.getTotalCodewordsCount = function(e, r) {
    switch (r) {
        case He.L:
            return Ct[(e - 1) * 4 + 0];
        case He.M:
            return Ct[(e - 1) * 4 + 1];
        case He.Q:
            return Ct[(e - 1) * 4 + 2];
        case He.H:
            return Ct[(e - 1) * 4 + 3];
        default:
            return;
    }
};
var ji = {},
    Wt = {},
    Qi = Ve,
    dt = Qi.alloc(512),
    Tt = Qi.alloc(256);
(function() {
    for (var e = 1, r = 0; r < 255; r++)
        dt[r] = e, Tt[e] = r, e <<= 1, e & 256 && (e ^= 285);
    for (r = 255; r < 512; r++)
        dt[r] = dt[r - 255];
})();
Wt.log = function(e) {
    if (e < 1)
        throw new Error("log(" + e + ")");
    return Tt[e];
};
Wt.exp = function(e) {
    return dt[e];
};
Wt.mul = function(e, r) {
    return e === 0 || r === 0 ? 0 : dt[Tt[e] + Tt[r]];
};
(function(t) {
    var e = Ve,
        r = Wt;
    t.mul = function(u, o) {
        for (var p = e.alloc(u.length + o.length - 1), f = 0; f < u.length; f++)
            for (var b = 0; b < o.length; b++)
                p[f + b] ^= r.mul(u[f], o[b]);
        return p;
    }, t.mod = function(u, o) {
        for (var p = e.from(u); p.length - o.length >= 0;) {
            for (var f = p[0], b = 0; b < o.length; b++)
                p[b] ^= r.mul(o[b], f);
            for (var I = 0; I < p.length && p[I] === 0;)
                I++;
            p = p.slice(I);
        }
        return p;
    }, t.generateECPolynomial = function(u) {
        for (var o = e.from([1]), p = 0; p < u; p++)
            o = t.mul(o, [1, r.exp(p)]);
        return o;
    };
})(ji);
var Gi = {};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(t) {
    var e = jo,
        r = Qo,
        n = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
    t.Buffer = f, t.SlowBuffer = T, t.INSPECT_MAX_BYTES = 50;
    var u = 2147483647;
    t.kMaxLength = u, f.TYPED_ARRAY_SUPPORT = o(), !f.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
        "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
    );

    function o() {
        try {
            var g = new Uint8Array(1),
                s = {
                    foo: function() {
                        return 42;
                    }
                };
            return Object.setPrototypeOf(s, Uint8Array.prototype), Object.setPrototypeOf(g, s), g.foo() === 42;
        } catch {
            return !1;
        }
    }
    Object.defineProperty(f.prototype, "parent", {
        enumerable: !0,
        get: function() {
            if (f.isBuffer(this))
                return this.buffer;
        }
    }), Object.defineProperty(f.prototype, "offset", {
        enumerable: !0,
        get: function() {
            if (f.isBuffer(this))
                return this.byteOffset;
        }
    });

    function p(g) {
        if (g > u)
            throw new RangeError('The value "' + g + '" is invalid for option "size"');
        var s = new Uint8Array(g);
        return Object.setPrototypeOf(s, f.prototype), s;
    }

    function f(g, s, c) {
        if (typeof g == "number") {
            if (typeof s == "string")
                throw new TypeError(
                    'The "string" argument must be of type string. Received type number'
                );
            return N(g);
        }
        return b(g, s, c);
    }
    f.poolSize = 8192;

    function b(g, s, c) {
        if (typeof g == "string")
            return L(g, s);
        if (ArrayBuffer.isView(g))
            return U(g);
        if (g == null)
            throw new TypeError(
                "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof g
            );
        if (Le(g, ArrayBuffer) || g && Le(g.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (Le(g, SharedArrayBuffer) || g && Le(g.buffer, SharedArrayBuffer)))
            return $(g, s, c);
        if (typeof g == "number")
            throw new TypeError(
                'The "value" argument must not be of type number. Received type number'
            );
        var w = g.valueOf && g.valueOf();
        if (w != null && w !== g)
            return f.from(w, s, c);
        var x = S(g);
        if (x)
            return x;
        if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof g[Symbol.toPrimitive] == "function")
            return f.from(
                g[Symbol.toPrimitive]("string"),
                s,
                c
            );
        throw new TypeError(
            "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof g
        );
    }
    f.from = function(g, s, c) {
        return b(g, s, c);
    }, Object.setPrototypeOf(f.prototype, Uint8Array.prototype), Object.setPrototypeOf(f, Uint8Array);

    function I(g) {
        if (typeof g != "number")
            throw new TypeError('"size" argument must be of type number');
        if (g < 0)
            throw new RangeError('The value "' + g + '" is invalid for option "size"');
    }

    function E(g, s, c) {
        return I(g), g <= 0 ? p(g) : s !== void 0 ? typeof c == "string" ? p(g).fill(s, c) : p(g).fill(s) : p(g);
    }
    f.alloc = function(g, s, c) {
        return E(g, s, c);
    };

    function N(g) {
        return I(g), p(g < 0 ? 0 : k(g) | 0);
    }
    f.allocUnsafe = function(g) {
        return N(g);
    }, f.allocUnsafeSlow = function(g) {
        return N(g);
    };

    function L(g, s) {
        if ((typeof s != "string" || s === "") && (s = "utf8"), !f.isEncoding(s))
            throw new TypeError("Unknown encoding: " + s);
        var c = R(g, s) | 0,
            w = p(c),
            x = w.write(g, s);
        return x !== c && (w = w.slice(0, x)), w;
    }

    function P(g) {
        for (var s = g.length < 0 ? 0 : k(g.length) | 0, c = p(s), w = 0; w < s; w += 1)
            c[w] = g[w] & 255;
        return c;
    }

    function U(g) {
        if (Le(g, Uint8Array)) {
            var s = new Uint8Array(g);
            return $(s.buffer, s.byteOffset, s.byteLength);
        }
        return P(g);
    }

    function $(g, s, c) {
        if (s < 0 || g.byteLength < s)
            throw new RangeError('"offset" is outside of buffer bounds');
        if (g.byteLength < s + (c || 0))
            throw new RangeError('"length" is outside of buffer bounds');
        var w;
        return s === void 0 && c === void 0 ? w = new Uint8Array(g) : c === void 0 ? w = new Uint8Array(g, s) : w = new Uint8Array(g, s, c), Object.setPrototypeOf(w, f.prototype), w;
    }

    function S(g) {
        if (f.isBuffer(g)) {
            var s = k(g.length) | 0,
                c = p(s);
            return c.length === 0 || g.copy(c, 0, 0, s), c;
        }
        if (g.length !== void 0)
            return typeof g.length != "number" || ce(g.length) ? p(0) : P(g);
        if (g.type === "Buffer" && Array.isArray(g.data))
            return P(g.data);
    }

    function k(g) {
        if (g >= u)
            throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + u.toString(16) + " bytes");
        return g | 0;
    }

    function T(g) {
        return +g != g && (g = 0), f.alloc(+g);
    }
    f.isBuffer = function(s) {
        return s != null && s._isBuffer === !0 && s !== f.prototype;
    }, f.compare = function(s, c) {
        if (Le(s, Uint8Array) && (s = f.from(s, s.offset, s.byteLength)), Le(c, Uint8Array) && (c = f.from(c, c.offset, c.byteLength)), !f.isBuffer(s) || !f.isBuffer(c))
            throw new TypeError(
                'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
            );
        if (s === c)
            return 0;
        for (var w = s.length, x = c.length, A = 0, O = Math.min(w, x); A < O; ++A)
            if (s[A] !== c[A]) {
                w = s[A], x = c[A];
                break;
            }
        return w < x ? -1 : x < w ? 1 : 0;
    }, f.isEncoding = function(s) {
        switch (String(s).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return !0;
            default:
                return !1;
        }
    }, f.concat = function(s, c) {
        if (!Array.isArray(s))
            throw new TypeError('"list" argument must be an Array of Buffers');
        if (s.length === 0)
            return f.alloc(0);
        var w;
        if (c === void 0)
            for (c = 0, w = 0; w < s.length; ++w)
                c += s[w].length;
        var x = f.allocUnsafe(c),
            A = 0;
        for (w = 0; w < s.length; ++w) {
            var O = s[w];
            if (Le(O, Uint8Array))
                A + O.length > x.length ? f.from(O).copy(x, A) : Uint8Array.prototype.set.call(
                    x,
                    O,
                    A
                );
            else if (f.isBuffer(O))
                O.copy(x, A);
            else
                throw new TypeError('"list" argument must be an Array of Buffers');
            A += O.length;
        }
        return x;
    };

    function R(g, s) {
        if (f.isBuffer(g))
            return g.length;
        if (ArrayBuffer.isView(g) || Le(g, ArrayBuffer))
            return g.byteLength;
        if (typeof g != "string")
            throw new TypeError(
                'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof g
            );
        var c = g.length,
            w = arguments.length > 2 && arguments[2] === !0;
        if (!w && c === 0)
            return 0;
        for (var x = !1;;)
            switch (s) {
                case "ascii":
                case "latin1":
                case "binary":
                    return c;
                case "utf8":
                case "utf-8":
                    return te(g).length;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return c * 2;
                case "hex":
                    return c >>> 1;
                case "base64":
                    return ue(g).length;
                default:
                    if (x)
                        return w ? -1 : te(g).length;
                    s = ("" + s).toLowerCase(), x = !0;
            }
    }
    f.byteLength = R;

    function B(g, s, c) {
        var w = !1;
        if ((s === void 0 || s < 0) && (s = 0), s > this.length || ((c === void 0 || c > this.length) && (c = this.length), c <= 0) || (c >>>= 0, s >>>= 0, c <= s))
            return "";
        for (g || (g = "utf8");;)
            switch (g) {
                case "hex":
                    return a(this, s, c);
                case "utf8":
                case "utf-8":
                    return d(this, s, c);
                case "ascii":
                    return C(this, s, c);
                case "latin1":
                case "binary":
                    return m(this, s, c);
                case "base64":
                    return h(this, s, c);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return _(this, s, c);
                default:
                    if (w)
                        throw new TypeError("Unknown encoding: " + g);
                    g = (g + "").toLowerCase(), w = !0;
            }
    }
    f.prototype._isBuffer = !0;

    function W(g, s, c) {
        var w = g[s];
        g[s] = g[c], g[c] = w;
    }
    f.prototype.swap16 = function() {
        var s = this.length;
        if (s % 2 !== 0)
            throw new RangeError("Buffer size must be a multiple of 16-bits");
        for (var c = 0; c < s; c += 2)
            W(this, c, c + 1);
        return this;
    }, f.prototype.swap32 = function() {
        var s = this.length;
        if (s % 4 !== 0)
            throw new RangeError("Buffer size must be a multiple of 32-bits");
        for (var c = 0; c < s; c += 4)
            W(this, c, c + 3), W(this, c + 1, c + 2);
        return this;
    }, f.prototype.swap64 = function() {
        var s = this.length;
        if (s % 8 !== 0)
            throw new RangeError("Buffer size must be a multiple of 64-bits");
        for (var c = 0; c < s; c += 8)
            W(this, c, c + 7), W(this, c + 1, c + 6), W(this, c + 2, c + 5), W(this, c + 3, c + 4);
        return this;
    }, f.prototype.toString = function() {
        var s = this.length;
        return s === 0 ? "" : arguments.length === 0 ? d(this, 0, s) : B.apply(this, arguments);
    }, f.prototype.toLocaleString = f.prototype.toString, f.prototype.equals = function(s) {
        if (!f.isBuffer(s))
            throw new TypeError("Argument must be a Buffer");
        return this === s ? !0 : f.compare(this, s) === 0;
    }, f.prototype.inspect = function() {
        var s = "",
            c = t.INSPECT_MAX_BYTES;
        return s = this.toString("hex", 0, c).replace(/(.{2})/g, "$1 ").trim(), this.length > c && (s += " ... "), "<Buffer " + s + ">";
    }, n && (f.prototype[n] = f.prototype.inspect), f.prototype.compare = function(s, c, w, x, A) {
        if (Le(s, Uint8Array) && (s = f.from(s, s.offset, s.byteLength)), !f.isBuffer(s))
            throw new TypeError(
                'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof s
            );
        if (c === void 0 && (c = 0), w === void 0 && (w = s ? s.length : 0), x === void 0 && (x = 0), A === void 0 && (A = this.length), c < 0 || w > s.length || x < 0 || A > this.length)
            throw new RangeError("out of range index");
        if (x >= A && c >= w)
            return 0;
        if (x >= A)
            return -1;
        if (c >= w)
            return 1;
        if (c >>>= 0, w >>>= 0, x >>>= 0, A >>>= 0, this === s)
            return 0;
        for (var O = A - x, J = w - c, K = Math.min(O, J), ne = this.slice(x, A), Z = s.slice(c, w), G = 0; G < K; ++G)
            if (ne[G] !== Z[G]) {
                O = ne[G], J = Z[G];
                break;
            }
        return O < J ? -1 : J < O ? 1 : 0;
    };

    function H(g, s, c, w, x) {
        if (g.length === 0)
            return -1;
        if (typeof c == "string" ? (w = c, c = 0) : c > 2147483647 ? c = 2147483647 : c < -2147483648 && (c = -2147483648), c = +c, ce(c) && (c = x ? 0 : g.length - 1), c < 0 && (c = g.length + c), c >= g.length) {
            if (x)
                return -1;
            c = g.length - 1;
        } else if (c < 0)
            if (x)
                c = 0;
            else
                return -1;
        if (typeof s == "string" && (s = f.from(s, w)), f.isBuffer(s))
            return s.length === 0 ? -1 : Y(g, s, c, w, x);
        if (typeof s == "number")
            return s = s & 255, typeof Uint8Array.prototype.indexOf == "function" ? x ? Uint8Array.prototype.indexOf.call(g, s, c) : Uint8Array.prototype.lastIndexOf.call(g, s, c) : Y(g, [s], c, w, x);
        throw new TypeError("val must be string, number or Buffer");
    }

    function Y(g, s, c, w, x) {
        var A = 1,
            O = g.length,
            J = s.length;
        if (w !== void 0 && (w = String(w).toLowerCase(), w === "ucs2" || w === "ucs-2" || w === "utf16le" || w === "utf-16le")) {
            if (g.length < 2 || s.length < 2)
                return -1;
            A = 2, O /= 2, J /= 2, c /= 2;
        }

        function K(le, fe) {
            return A === 1 ? le[fe] : le.readUInt16BE(fe * A);
        }
        var ne;
        if (x) {
            var Z = -1;
            for (ne = c; ne < O; ne++)
                if (K(g, ne) === K(s, Z === -1 ? 0 : ne - Z)) {
                    if (Z === -1 && (Z = ne), ne - Z + 1 === J)
                        return Z * A;
                } else
                    Z !== -1 && (ne -= ne - Z), Z = -1;
        } else
            for (c + J > O && (c = O - J), ne = c; ne >= 0; ne--) {
                for (var G = !0, je = 0; je < J; je++)
                    if (K(g, ne + je) !== K(s, je)) {
                        G = !1;
                        break;
                    }
                if (G)
                    return ne;
            }
        return -1;
    }
    f.prototype.includes = function(s, c, w) {
        return this.indexOf(s, c, w) !== -1;
    }, f.prototype.indexOf = function(s, c, w) {
        return H(this, s, c, w, !0);
    }, f.prototype.lastIndexOf = function(s, c, w) {
        return H(this, s, c, w, !1);
    };

    function j(g, s, c, w) {
        c = Number(c) || 0;
        var x = g.length - c;
        w ? (w = Number(w), w > x && (w = x)) : w = x;
        var A = s.length;
        w > A / 2 && (w = A / 2);
        for (var O = 0; O < w; ++O) {
            var J = parseInt(s.substr(O * 2, 2), 16);
            if (ce(J))
                return O;
            g[c + O] = J;
        }
        return O;
    }

    function oe(g, s, c, w) {
        return ae(te(s, g.length - c), g, c, w);
    }

    function y(g, s, c, w) {
        return ae(ie(s), g, c, w);
    }

    function i(g, s, c, w) {
        return ae(ue(s), g, c, w);
    }

    function l(g, s, c, w) {
        return ae(xt(s, g.length - c), g, c, w);
    }
    f.prototype.write = function(s, c, w, x) {
        if (c === void 0)
            x = "utf8", w = this.length, c = 0;
        else if (w === void 0 && typeof c == "string")
            x = c, w = this.length, c = 0;
        else if (isFinite(c))
            c = c >>> 0, isFinite(w) ? (w = w >>> 0, x === void 0 && (x = "utf8")) : (x = w, w = void 0);
        else
            throw new Error(
                "Buffer.write(string, encoding, offset[, length]) is no longer supported"
            );
        var A = this.length - c;
        if ((w === void 0 || w > A) && (w = A), s.length > 0 && (w < 0 || c < 0) || c > this.length)
            throw new RangeError("Attempt to write outside buffer bounds");
        x || (x = "utf8");
        for (var O = !1;;)
            switch (x) {
                case "hex":
                    return j(this, s, c, w);
                case "utf8":
                case "utf-8":
                    return oe(this, s, c, w);
                case "ascii":
                case "latin1":
                case "binary":
                    return y(this, s, c, w);
                case "base64":
                    return i(this, s, c, w);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return l(this, s, c, w);
                default:
                    if (O)
                        throw new TypeError("Unknown encoding: " + x);
                    x = ("" + x).toLowerCase(), O = !0;
            }
    }, f.prototype.toJSON = function() {
        return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0)
        };
    };

    function h(g, s, c) {
        return s === 0 && c === g.length ? e.fromByteArray(g) : e.fromByteArray(g.slice(s, c));
    }

    function d(g, s, c) {
        c = Math.min(g.length, c);
        for (var w = [], x = s; x < c;) {
            var A = g[x],
                O = null,
                J = A > 239 ? 4 : A > 223 ? 3 : A > 191 ? 2 : 1;
            if (x + J <= c) {
                var K, ne, Z, G;
                switch (J) {
                    case 1:
                        A < 128 && (O = A);
                        break;
                    case 2:
                        K = g[x + 1], (K & 192) === 128 && (G = (A & 31) << 6 | K & 63, G > 127 && (O = G));
                        break;
                    case 3:
                        K = g[x + 1], ne = g[x + 2], (K & 192) === 128 && (ne & 192) === 128 && (G = (A & 15) << 12 | (K & 63) << 6 | ne & 63, G > 2047 && (G < 55296 || G > 57343) && (O = G));
                        break;
                    case 4:
                        K = g[x + 1], ne = g[x + 2], Z = g[x + 3], (K & 192) === 128 && (ne & 192) === 128 && (Z & 192) === 128 && (G = (A & 15) << 18 | (K & 63) << 12 | (ne & 63) << 6 | Z & 63, G > 65535 && G < 1114112 && (O = G));
                }
            }
            O === null ? (O = 65533, J = 1) : O > 65535 && (O -= 65536, w.push(O >>> 10 & 1023 | 55296), O = 56320 | O & 1023), w.push(O), x += J;
        }
        return M(w);
    }
    var v = 4096;

    function M(g) {
        var s = g.length;
        if (s <= v)
            return String.fromCharCode.apply(String, g);
        for (var c = "", w = 0; w < s;)
            c += String.fromCharCode.apply(
                String,
                g.slice(w, w += v)
            );
        return c;
    }

    function C(g, s, c) {
        var w = "";
        c = Math.min(g.length, c);
        for (var x = s; x < c; ++x)
            w += String.fromCharCode(g[x] & 127);
        return w;
    }

    function m(g, s, c) {
        var w = "";
        c = Math.min(g.length, c);
        for (var x = s; x < c; ++x)
            w += String.fromCharCode(g[x]);
        return w;
    }

    function a(g, s, c) {
        var w = g.length;
        (!s || s < 0) && (s = 0), (!c || c < 0 || c > w) && (c = w);
        for (var x = "", A = s; A < c; ++A)
            x += he[g[A]];
        return x;
    }

    function _(g, s, c) {
        for (var w = g.slice(s, c), x = "", A = 0; A < w.length - 1; A += 2)
            x += String.fromCharCode(w[A] + w[A + 1] * 256);
        return x;
    }
    f.prototype.slice = function(s, c) {
        var w = this.length;
        s = ~~s, c = c === void 0 ? w : ~~c, s < 0 ? (s += w, s < 0 && (s = 0)) : s > w && (s = w), c < 0 ? (c += w, c < 0 && (c = 0)) : c > w && (c = w), c < s && (c = s);
        var x = this.subarray(s, c);
        return Object.setPrototypeOf(x, f.prototype), x;
    };

    function F(g, s, c) {
        if (g % 1 !== 0 || g < 0)
            throw new RangeError("offset is not uint");
        if (g + s > c)
            throw new RangeError("Trying to access beyond buffer length");
    }
    f.prototype.readUintLE = f.prototype.readUIntLE = function(s, c, w) {
        s = s >>> 0, c = c >>> 0, w || F(s, c, this.length);
        for (var x = this[s], A = 1, O = 0; ++O < c && (A *= 256);)
            x += this[s + O] * A;
        return x;
    }, f.prototype.readUintBE = f.prototype.readUIntBE = function(s, c, w) {
        s = s >>> 0, c = c >>> 0, w || F(s, c, this.length);
        for (var x = this[s + --c], A = 1; c > 0 && (A *= 256);)
            x += this[s + --c] * A;
        return x;
    }, f.prototype.readUint8 = f.prototype.readUInt8 = function(s, c) {
        return s = s >>> 0, c || F(s, 1, this.length), this[s];
    }, f.prototype.readUint16LE = f.prototype.readUInt16LE = function(s, c) {
        return s = s >>> 0, c || F(s, 2, this.length), this[s] | this[s + 1] << 8;
    }, f.prototype.readUint16BE = f.prototype.readUInt16BE = function(s, c) {
        return s = s >>> 0, c || F(s, 2, this.length), this[s] << 8 | this[s + 1];
    }, f.prototype.readUint32LE = f.prototype.readUInt32LE = function(s, c) {
        return s = s >>> 0, c || F(s, 4, this.length), (this[s] | this[s + 1] << 8 | this[s + 2] << 16) + this[s + 3] * 16777216;
    }, f.prototype.readUint32BE = f.prototype.readUInt32BE = function(s, c) {
        return s = s >>> 0, c || F(s, 4, this.length), this[s] * 16777216 + (this[s + 1] << 16 | this[s + 2] << 8 | this[s + 3]);
    }, f.prototype.readIntLE = function(s, c, w) {
        s = s >>> 0, c = c >>> 0, w || F(s, c, this.length);
        for (var x = this[s], A = 1, O = 0; ++O < c && (A *= 256);)
            x += this[s + O] * A;
        return A *= 128, x >= A && (x -= Math.pow(2, 8 * c)), x;
    }, f.prototype.readIntBE = function(s, c, w) {
        s = s >>> 0, c = c >>> 0, w || F(s, c, this.length);
        for (var x = c, A = 1, O = this[s + --x]; x > 0 && (A *= 256);)
            O += this[s + --x] * A;
        return A *= 128, O >= A && (O -= Math.pow(2, 8 * c)), O;
    }, f.prototype.readInt8 = function(s, c) {
        return s = s >>> 0, c || F(s, 1, this.length), this[s] & 128 ? (255 - this[s] + 1) * -1 : this[s];
    }, f.prototype.readInt16LE = function(s, c) {
        s = s >>> 0, c || F(s, 2, this.length);
        var w = this[s] | this[s + 1] << 8;
        return w & 32768 ? w | 4294901760 : w;
    }, f.prototype.readInt16BE = function(s, c) {
        s = s >>> 0, c || F(s, 2, this.length);
        var w = this[s + 1] | this[s] << 8;
        return w & 32768 ? w | 4294901760 : w;
    }, f.prototype.readInt32LE = function(s, c) {
        return s = s >>> 0, c || F(s, 4, this.length), this[s] | this[s + 1] << 8 | this[s + 2] << 16 | this[s + 3] << 24;
    }, f.prototype.readInt32BE = function(s, c) {
        return s = s >>> 0, c || F(s, 4, this.length), this[s] << 24 | this[s + 1] << 16 | this[s + 2] << 8 | this[s + 3];
    }, f.prototype.readFloatLE = function(s, c) {
        return s = s >>> 0, c || F(s, 4, this.length), r.read(this, s, !0, 23, 4);
    }, f.prototype.readFloatBE = function(s, c) {
        return s = s >>> 0, c || F(s, 4, this.length), r.read(this, s, !1, 23, 4);
    }, f.prototype.readDoubleLE = function(s, c) {
        return s = s >>> 0, c || F(s, 8, this.length), r.read(this, s, !0, 52, 8);
    }, f.prototype.readDoubleBE = function(s, c) {
        return s = s >>> 0, c || F(s, 8, this.length), r.read(this, s, !1, 52, 8);
    };

    function q(g, s, c, w, x, A) {
        if (!f.isBuffer(g))
            throw new TypeError('"buffer" argument must be a Buffer instance');
        if (s > x || s < A)
            throw new RangeError('"value" argument is out of bounds');
        if (c + w > g.length)
            throw new RangeError("Index out of range");
    }
    f.prototype.writeUintLE = f.prototype.writeUIntLE = function(s, c, w, x) {
        if (s = +s, c = c >>> 0, w = w >>> 0, !x) {
            var A = Math.pow(2, 8 * w) - 1;
            q(this, s, c, w, A, 0);
        }
        var O = 1,
            J = 0;
        for (this[c] = s & 255; ++J < w && (O *= 256);)
            this[c + J] = s / O & 255;
        return c + w;
    }, f.prototype.writeUintBE = f.prototype.writeUIntBE = function(s, c, w, x) {
        if (s = +s, c = c >>> 0, w = w >>> 0, !x) {
            var A = Math.pow(2, 8 * w) - 1;
            q(this, s, c, w, A, 0);
        }
        var O = w - 1,
            J = 1;
        for (this[c + O] = s & 255; --O >= 0 && (J *= 256);)
            this[c + O] = s / J & 255;
        return c + w;
    }, f.prototype.writeUint8 = f.prototype.writeUInt8 = function(s, c, w) {
        return s = +s, c = c >>> 0, w || q(this, s, c, 1, 255, 0), this[c] = s & 255, c + 1;
    }, f.prototype.writeUint16LE = f.prototype.writeUInt16LE = function(s, c, w) {
        return s = +s, c = c >>> 0, w || q(this, s, c, 2, 65535, 0), this[c] = s & 255, this[c + 1] = s >>> 8, c + 2;
    }, f.prototype.writeUint16BE = f.prototype.writeUInt16BE = function(s, c, w) {
        return s = +s, c = c >>> 0, w || q(this, s, c, 2, 65535, 0), this[c] = s >>> 8, this[c + 1] = s & 255, c + 2;
    }, f.prototype.writeUint32LE = f.prototype.writeUInt32LE = function(s, c, w) {
        return s = +s, c = c >>> 0, w || q(this, s, c, 4, 4294967295, 0), this[c + 3] = s >>> 24, this[c + 2] = s >>> 16, this[c + 1] = s >>> 8, this[c] = s & 255, c + 4;
    }, f.prototype.writeUint32BE = f.prototype.writeUInt32BE = function(s, c, w) {
        return s = +s, c = c >>> 0, w || q(this, s, c, 4, 4294967295, 0), this[c] = s >>> 24, this[c + 1] = s >>> 16, this[c + 2] = s >>> 8, this[c + 3] = s & 255, c + 4;
    }, f.prototype.writeIntLE = function(s, c, w, x) {
        if (s = +s, c = c >>> 0, !x) {
            var A = Math.pow(2, 8 * w - 1);
            q(this, s, c, w, A - 1, -A);
        }
        var O = 0,
            J = 1,
            K = 0;
        for (this[c] = s & 255; ++O < w && (J *= 256);)
            s < 0 && K === 0 && this[c + O - 1] !== 0 && (K = 1), this[c + O] = (s / J >> 0) - K & 255;
        return c + w;
    }, f.prototype.writeIntBE = function(s, c, w, x) {
        if (s = +s, c = c >>> 0, !x) {
            var A = Math.pow(2, 8 * w - 1);
            q(this, s, c, w, A - 1, -A);
        }
        var O = w - 1,
            J = 1,
            K = 0;
        for (this[c + O] = s & 255; --O >= 0 && (J *= 256);)
            s < 0 && K === 0 && this[c + O + 1] !== 0 && (K = 1), this[c + O] = (s / J >> 0) - K & 255;
        return c + w;
    }, f.prototype.writeInt8 = function(s, c, w) {
        return s = +s, c = c >>> 0, w || q(this, s, c, 1, 127, -128), s < 0 && (s = 255 + s + 1), this[c] = s & 255, c + 1;
    }, f.prototype.writeInt16LE = function(s, c, w) {
        return s = +s, c = c >>> 0, w || q(this, s, c, 2, 32767, -32768), this[c] = s & 255, this[c + 1] = s >>> 8, c + 2;
    }, f.prototype.writeInt16BE = function(s, c, w) {
        return s = +s, c = c >>> 0, w || q(this, s, c, 2, 32767, -32768), this[c] = s >>> 8, this[c + 1] = s & 255, c + 2;
    }, f.prototype.writeInt32LE = function(s, c, w) {
        return s = +s, c = c >>> 0, w || q(this, s, c, 4, 2147483647, -2147483648), this[c] = s & 255, this[c + 1] = s >>> 8, this[c + 2] = s >>> 16, this[c + 3] = s >>> 24, c + 4;
    }, f.prototype.writeInt32BE = function(s, c, w) {
        return s = +s, c = c >>> 0, w || q(this, s, c, 4, 2147483647, -2147483648), s < 0 && (s = 4294967295 + s + 1), this[c] = s >>> 24, this[c + 1] = s >>> 16, this[c + 2] = s >>> 8, this[c + 3] = s & 255, c + 4;
    };

    function z(g, s, c, w, x, A) {
        if (c + w > g.length)
            throw new RangeError("Index out of range");
        if (c < 0)
            throw new RangeError("Index out of range");
    }

    function Q(g, s, c, w, x) {
        return s = +s, c = c >>> 0, x || z(g, s, c, 4), r.write(g, s, c, w, 23, 4), c + 4;
    }
    f.prototype.writeFloatLE = function(s, c, w) {
        return Q(this, s, c, !0, w);
    }, f.prototype.writeFloatBE = function(s, c, w) {
        return Q(this, s, c, !1, w);
    };

    function ee(g, s, c, w, x) {
        return s = +s, c = c >>> 0, x || z(g, s, c, 8), r.write(g, s, c, w, 52, 8), c + 8;
    }
    f.prototype.writeDoubleLE = function(s, c, w) {
        return ee(this, s, c, !0, w);
    }, f.prototype.writeDoubleBE = function(s, c, w) {
        return ee(this, s, c, !1, w);
    }, f.prototype.copy = function(s, c, w, x) {
        if (!f.isBuffer(s))
            throw new TypeError("argument should be a Buffer");
        if (w || (w = 0), !x && x !== 0 && (x = this.length), c >= s.length && (c = s.length), c || (c = 0), x > 0 && x < w && (x = w), x === w || s.length === 0 || this.length === 0)
            return 0;
        if (c < 0)
            throw new RangeError("targetStart out of bounds");
        if (w < 0 || w >= this.length)
            throw new RangeError("Index out of range");
        if (x < 0)
            throw new RangeError("sourceEnd out of bounds");
        x > this.length && (x = this.length), s.length - c < x - w && (x = s.length - c + w);
        var A = x - w;
        return this === s && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(c, w, x) : Uint8Array.prototype.set.call(
            s,
            this.subarray(w, x),
            c
        ), A;
    }, f.prototype.fill = function(s, c, w, x) {
        if (typeof s == "string") {
            if (typeof c == "string" ? (x = c, c = 0, w = this.length) : typeof w == "string" && (x = w, w = this.length), x !== void 0 && typeof x != "string")
                throw new TypeError("encoding must be a string");
            if (typeof x == "string" && !f.isEncoding(x))
                throw new TypeError("Unknown encoding: " + x);
            if (s.length === 1) {
                var A = s.charCodeAt(0);
                (x === "utf8" && A < 128 || x === "latin1") && (s = A);
            }
        } else
            typeof s == "number" ? s = s & 255 : typeof s == "boolean" && (s = Number(s));
        if (c < 0 || this.length < c || this.length < w)
            throw new RangeError("Out of range index");
        if (w <= c)
            return this;
        c = c >>> 0, w = w === void 0 ? this.length : w >>> 0, s || (s = 0);
        var O;
        if (typeof s == "number")
            for (O = c; O < w; ++O)
                this[O] = s;
        else {
            var J = f.isBuffer(s) ? s : f.from(s, x),
                K = J.length;
            if (K === 0)
                throw new TypeError('The value "' + s + '" is invalid for argument "value"');
            for (O = 0; O < w - c; ++O)
                this[O + c] = J[O % K];
        }
        return this;
    };
    var re = /[^+/0-9A-Za-z-_]/g;

    function Pe(g) {
        if (g = g.split("=")[0], g = g.trim().replace(re, ""), g.length < 2)
            return "";
        for (; g.length % 4 !== 0;)
            g = g + "=";
        return g;
    }

    function te(g, s) {
        s = s || 1 / 0;
        for (var c, w = g.length, x = null, A = [], O = 0; O < w; ++O) {
            if (c = g.charCodeAt(O), c > 55295 && c < 57344) {
                if (!x) {
                    if (c > 56319) {
                        (s -= 3) > -1 && A.push(239, 191, 189);
                        continue;
                    } else if (O + 1 === w) {
                        (s -= 3) > -1 && A.push(239, 191, 189);
                        continue;
                    }
                    x = c;
                    continue;
                }
                if (c < 56320) {
                    (s -= 3) > -1 && A.push(239, 191, 189), x = c;
                    continue;
                }
                c = (x - 55296 << 10 | c - 56320) + 65536;
            } else
                x && (s -= 3) > -1 && A.push(239, 191, 189);
            if (x = null, c < 128) {
                if ((s -= 1) < 0)
                    break;
                A.push(c);
            } else if (c < 2048) {
                if ((s -= 2) < 0)
                    break;
                A.push(
                    c >> 6 | 192,
                    c & 63 | 128
                );
            } else if (c < 65536) {
                if ((s -= 3) < 0)
                    break;
                A.push(
                    c >> 12 | 224,
                    c >> 6 & 63 | 128,
                    c & 63 | 128
                );
            } else if (c < 1114112) {
                if ((s -= 4) < 0)
                    break;
                A.push(
                    c >> 18 | 240,
                    c >> 12 & 63 | 128,
                    c >> 6 & 63 | 128,
                    c & 63 | 128
                );
            } else
                throw new Error("Invalid code point");
        }
        return A;
    }

    function ie(g) {
        for (var s = [], c = 0; c < g.length; ++c)
            s.push(g.charCodeAt(c) & 255);
        return s;
    }

    function xt(g, s) {
        for (var c, w, x, A = [], O = 0; O < g.length && !((s -= 2) < 0); ++O)
            c = g.charCodeAt(O), w = c >> 8, x = c % 256, A.push(x), A.push(w);
        return A;
    }

    function ue(g) {
        return e.toByteArray(Pe(g));
    }

    function ae(g, s, c, w) {
        for (var x = 0; x < w && !(x + c >= s.length || x >= g.length); ++x)
            s[x + c] = g[x];
        return x;
    }

    function Le(g, s) {
        return g instanceof s || g != null && g.constructor != null && g.constructor.name != null && g.constructor.name === s.name;
    }

    function ce(g) {
        return g !== g;
    }
    var he = function() {
        for (var g = "0123456789abcdef", s = new Array(256), c = 0; c < 16; ++c)
            for (var w = c * 16, x = 0; x < 16; ++x)
                s[w + x] = g[c] + g[x];
        return s;
    }();
})(Gi);
var Tn = Ve,
    Zi = ji,
    Dc = Gi.Buffer;

function Vr(t) {
    this.genPoly = void 0, this.degree = t, this.degree && this.initialize(this.degree);
}
Vr.prototype.initialize = function(e) {
    this.degree = e, this.genPoly = Zi.generateECPolynomial(this.degree);
};
Vr.prototype.encode = function(e) {
    if (!this.genPoly)
        throw new Error("Encoder not initialized");
    var r = Tn.alloc(this.degree),
        n = Dc.concat([e, r], e.length + this.degree),
        u = Zi.mod(n, this.genPoly),
        o = this.degree - u.length;
    if (o > 0) {
        var p = Tn.alloc(this.degree);
        return u.copy(p, o), p;
    }
    return u;
};
var $c = Vr,
    Xi = {},
    Ye = {},
    Yr = {};
Yr.isValid = function(e) {
    return !isNaN(e) && e >= 1 && e <= 40;
};
var qe = {},
    eo = "[0-9]+",
    Wc = "[A-Z $%*+\\-./:]+",
    mt = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
mt = mt.replace(/u/g, "\\u");
var Hc = "(?:(?![A-Z0-9 $%*+\\-./:]|" + mt + `)(?:.|[\r
]))+`;
qe.KANJI = new RegExp(mt, "g");
qe.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
qe.BYTE = new RegExp(Hc, "g");
qe.NUMERIC = new RegExp(eo, "g");
qe.ALPHANUMERIC = new RegExp(Wc, "g");
var zc = new RegExp("^" + mt + "$"),
    Jc = new RegExp("^" + eo + "$"),
    Kc = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
qe.testKanji = function(e) {
    return zc.test(e);
};
qe.testNumeric = function(e) {
    return Jc.test(e);
};
qe.testAlphanumeric = function(e) {
    return Kc.test(e);
};
(function(t) {
    var e = Yr,
        r = qe;
    t.NUMERIC = {
        id: "Numeric",
        bit: 1 << 0,
        ccBits: [10, 12, 14]
    }, t.ALPHANUMERIC = {
        id: "Alphanumeric",
        bit: 1 << 1,
        ccBits: [9, 11, 13]
    }, t.BYTE = {
        id: "Byte",
        bit: 1 << 2,
        ccBits: [8, 16, 16]
    }, t.KANJI = {
        id: "Kanji",
        bit: 1 << 3,
        ccBits: [8, 10, 12]
    }, t.MIXED = {
        bit: -1
    }, t.getCharCountIndicator = function(o, p) {
        if (!o.ccBits)
            throw new Error("Invalid mode: " + o);
        if (!e.isValid(p))
            throw new Error("Invalid version: " + p);
        return p >= 1 && p < 10 ? o.ccBits[0] : p < 27 ? o.ccBits[1] : o.ccBits[2];
    }, t.getBestModeForData = function(o) {
        return r.testNumeric(o) ? t.NUMERIC : r.testAlphanumeric(o) ? t.ALPHANUMERIC : r.testKanji(o) ? t.KANJI : t.BYTE;
    }, t.toString = function(o) {
        if (o && o.id)
            return o.id;
        throw new Error("Invalid mode");
    }, t.isValid = function(o) {
        return o && o.bit && o.ccBits;
    };

    function n(u) {
        if (typeof u != "string")
            throw new Error("Param is not a string");
        var o = u.toLowerCase();
        switch (o) {
            case "numeric":
                return t.NUMERIC;
            case "alphanumeric":
                return t.ALPHANUMERIC;
            case "kanji":
                return t.KANJI;
            case "byte":
                return t.BYTE;
            default:
                throw new Error("Unknown mode: " + u);
        }
    }
    t.from = function(o, p) {
        if (t.isValid(o))
            return o;
        try {
            return n(o);
        } catch {
            return p;
        }
    };
})(Ye);
(function(t) {
    var e = Ue,
        r = $t,
        n = Dt,
        u = Ye,
        o = Yr,
        p = zr,
        f = 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0,
        b = e.getBCHDigit(f);

    function I(P, U, $) {
        for (var S = 1; S <= 40; S++)
            if (U <= t.getCapacity(S, $, P))
                return S;
    }

    function E(P, U) {
        return u.getCharCountIndicator(P, U) + 4;
    }

    function N(P, U) {
        var $ = 0;
        return P.forEach(function(S) {
            var k = E(S.mode, U);
            $ += k + S.getBitsLength();
        }), $;
    }

    function L(P, U) {
        for (var $ = 1; $ <= 40; $++) {
            var S = N(P, $);
            if (S <= t.getCapacity($, U, u.MIXED))
                return $;
        }
    }
    t.from = function(U, $) {
        return o.isValid(U) ? parseInt(U, 10) : $;
    }, t.getCapacity = function(U, $, S) {
        if (!o.isValid(U))
            throw new Error("Invalid QR Code version");
        typeof S > "u" && (S = u.BYTE);
        var k = e.getSymbolTotalCodewords(U),
            T = r.getTotalCodewordsCount(U, $),
            R = (k - T) * 8;
        if (S === u.MIXED)
            return R;
        var B = R - E(S, U);
        switch (S) {
            case u.NUMERIC:
                return Math.floor(B / 10 * 3);
            case u.ALPHANUMERIC:
                return Math.floor(B / 11 * 2);
            case u.KANJI:
                return Math.floor(B / 13);
            case u.BYTE:
            default:
                return Math.floor(B / 8);
        }
    }, t.getBestVersionForData = function(U, $) {
        var S, k = n.from($, n.M);
        if (p(U)) {
            if (U.length > 1)
                return L(U, k);
            if (U.length === 0)
                return 1;
            S = U[0];
        } else
            S = U;
        return I(S.mode, S.getLength(), k);
    }, t.getEncodedBits = function(U) {
        if (!o.isValid(U) || U < 7)
            throw new Error("Invalid QR Code version");
        for (var $ = U << 12; e.getBCHDigit($) - b >= 0;)
            $ ^= f << e.getBCHDigit($) - b;
        return U << 12 | $;
    };
})(Xi);
var to = {},
    Cr = Ue,
    ro = 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0,
    Vc = 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1,
    An = Cr.getBCHDigit(ro);
to.getEncodedBits = function(e, r) {
    for (var n = e.bit << 3 | r, u = n << 10; Cr.getBCHDigit(u) - An >= 0;)
        u ^= ro << Cr.getBCHDigit(u) - An;
    return (n << 10 | u) ^ Vc;
};
var no = {},
    Yc = Ye;

function it(t) {
    this.mode = Yc.NUMERIC, this.data = t.toString();
}
it.getBitsLength = function(e) {
    return 10 * Math.floor(e / 3) + (e % 3 ? e % 3 * 3 + 1 : 0);
};
it.prototype.getLength = function() {
    return this.data.length;
};
it.prototype.getBitsLength = function() {
    return it.getBitsLength(this.data.length);
};
it.prototype.write = function(e) {
    var r, n, u;
    for (r = 0; r + 3 <= this.data.length; r += 3)
        n = this.data.substr(r, 3), u = parseInt(n, 10), e.put(u, 10);
    var o = this.data.length - r;
    o > 0 && (n = this.data.substr(r), u = parseInt(n, 10), e.put(u, o * 3 + 1));
};
var jc = it,
    Qc = Ye,
    pr = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
        " ",
        "$",
        "%",
        "*",
        "+",
        "-",
        ".",
        "/",
        ":"
    ];

function ot(t) {
    this.mode = Qc.ALPHANUMERIC, this.data = t;
}
ot.getBitsLength = function(e) {
    return 11 * Math.floor(e / 2) + 6 * (e % 2);
};
ot.prototype.getLength = function() {
    return this.data.length;
};
ot.prototype.getBitsLength = function() {
    return ot.getBitsLength(this.data.length);
};
ot.prototype.write = function(e) {
    var r;
    for (r = 0; r + 2 <= this.data.length; r += 2) {
        var n = pr.indexOf(this.data[r]) * 45;
        n += pr.indexOf(this.data[r + 1]), e.put(n, 11);
    }
    this.data.length % 2 && e.put(pr.indexOf(this.data[r]), 6);
};
var Gc = ot,
    Zc = Ve,
    Xc = Ye;

function at(t) {
    this.mode = Xc.BYTE, this.data = Zc.from(t);
}
at.getBitsLength = function(e) {
    return e * 8;
};
at.prototype.getLength = function() {
    return this.data.length;
};
at.prototype.getBitsLength = function() {
    return at.getBitsLength(this.data.length);
};
at.prototype.write = function(t) {
    for (var e = 0, r = this.data.length; e < r; e++)
        t.put(this.data[e], 8);
};
var eu = at,
    tu = Ye,
    ru = Ue;

function st(t) {
    this.mode = tu.KANJI, this.data = t;
}
st.getBitsLength = function(e) {
    return e * 13;
};
st.prototype.getLength = function() {
    return this.data.length;
};
st.prototype.getBitsLength = function() {
    return st.getBitsLength(this.data.length);
};
st.prototype.write = function(t) {
    var e;
    for (e = 0; e < this.data.length; e++) {
        var r = ru.toSJIS(this.data[e]);
        if (r >= 33088 && r <= 40956)
            r -= 33088;
        else if (r >= 57408 && r <= 60351)
            r -= 49472;
        else
            throw new Error(
                "Invalid SJIS character: " + this.data[e] + `
Make sure your charset is UTF-8`
            );
        r = (r >>> 8 & 255) * 192 + (r & 255), t.put(r, 13);
    }
};
var nu = st;
(function(t) {
    var e = Ye,
        r = jc,
        n = Gc,
        u = eu,
        o = nu,
        p = qe,
        f = Ue,
        b = Go;

    function I(k) {
        return unescape(encodeURIComponent(k)).length;
    }

    function E(k, T, R) {
        for (var B = [], W;
            (W = k.exec(R)) !== null;)
            B.push({
                data: W[0],
                index: W.index,
                mode: T,
                length: W[0].length
            });
        return B;
    }

    function N(k) {
        var T = E(p.NUMERIC, e.NUMERIC, k),
            R = E(p.ALPHANUMERIC, e.ALPHANUMERIC, k),
            B, W;
        f.isKanjiModeEnabled() ? (B = E(p.BYTE, e.BYTE, k), W = E(p.KANJI, e.KANJI, k)) : (B = E(p.BYTE_KANJI, e.BYTE, k), W = []);
        var H = T.concat(R, B, W);
        return H.sort(function(Y, j) {
            return Y.index - j.index;
        }).map(function(Y) {
            return {
                data: Y.data,
                mode: Y.mode,
                length: Y.length
            };
        });
    }

    function L(k, T) {
        switch (T) {
            case e.NUMERIC:
                return r.getBitsLength(k);
            case e.ALPHANUMERIC:
                return n.getBitsLength(k);
            case e.KANJI:
                return o.getBitsLength(k);
            case e.BYTE:
                return u.getBitsLength(k);
        }
    }

    function P(k) {
        return k.reduce(function(T, R) {
            var B = T.length - 1 >= 0 ? T[T.length - 1] : null;
            return B && B.mode === R.mode ? (T[T.length - 1].data += R.data, T) : (T.push(R), T);
        }, []);
    }

    function U(k) {
        for (var T = [], R = 0; R < k.length; R++) {
            var B = k[R];
            switch (B.mode) {
                case e.NUMERIC:
                    T.push([
                        B,
                        {
                            data: B.data,
                            mode: e.ALPHANUMERIC,
                            length: B.length
                        },
                        {
                            data: B.data,
                            mode: e.BYTE,
                            length: B.length
                        }
                    ]);
                    break;
                case e.ALPHANUMERIC:
                    T.push([
                        B,
                        {
                            data: B.data,
                            mode: e.BYTE,
                            length: B.length
                        }
                    ]);
                    break;
                case e.KANJI:
                    T.push([
                        B,
                        {
                            data: B.data,
                            mode: e.BYTE,
                            length: I(B.data)
                        }
                    ]);
                    break;
                case e.BYTE:
                    T.push([{
                        data: B.data,
                        mode: e.BYTE,
                        length: I(B.data)
                    }]);
            }
        }
        return T;
    }

    function $(k, T) {
        for (var R = {}, B = {
                start: {}
            }, W = ["start"], H = 0; H < k.length; H++) {
            for (var Y = k[H], j = [], oe = 0; oe < Y.length; oe++) {
                var y = Y[oe],
                    i = "" + H + oe;
                j.push(i), R[i] = {
                    node: y,
                    lastCount: 0
                }, B[i] = {};
                for (var l = 0; l < W.length; l++) {
                    var h = W[l];
                    R[h] && R[h].node.mode === y.mode ? (B[h][i] = L(R[h].lastCount + y.length, y.mode) - L(R[h].lastCount, y.mode), R[h].lastCount += y.length) : (R[h] && (R[h].lastCount = y.length), B[h][i] = L(y.length, y.mode) + 4 + e.getCharCountIndicator(y.mode, T));
                }
            }
            W = j;
        }
        for (l = 0; l < W.length; l++)
            B[W[l]].end = 0;
        return {
            map: B,
            table: R
        };
    }

    function S(k, T) {
        var R, B = e.getBestModeForData(k);
        if (R = e.from(T, B), R !== e.BYTE && R.bit < B.bit)
            throw new Error('"' + k + '" cannot be encoded with mode ' + e.toString(R) + `.
 Suggested mode is: ` + e.toString(B));
        switch (R === e.KANJI && !f.isKanjiModeEnabled() && (R = e.BYTE), R) {
            case e.NUMERIC:
                return new r(k);
            case e.ALPHANUMERIC:
                return new n(k);
            case e.KANJI:
                return new o(k);
            case e.BYTE:
                return new u(k);
        }
    }
    t.fromArray = function(T) {
        return T.reduce(function(R, B) {
            return typeof B == "string" ? R.push(S(B, null)) : B.data && R.push(S(B.data, B.mode)), R;
        }, []);
    }, t.fromString = function(T, R) {
        for (var B = N(T, f.isKanjiModeEnabled()), W = U(B), H = $(W, R), Y = b.find_path(H.map, "start", "end"), j = [], oe = 1; oe < Y.length - 1; oe++)
            j.push(H.table[Y[oe]].node);
        return t.fromArray(P(j));
    }, t.rawSplit = function(T) {
        return t.fromArray(
            N(T, f.isKanjiModeEnabled())
        );
    };
})(no);
var Bn = Ve,
    Ht = Ue,
    gr = Dt,
    iu = Fc,
    ou = Pc,
    au = Ki,
    su = Vi,
    kr = Yi,
    Ir = $t,
    cu = $c,
    At = Xi,
    uu = to,
    lu = Ye,
    mr = no,
    fu = zr;

function hu(t, e) {
    for (var r = t.size, n = su.getPositions(e), u = 0; u < n.length; u++)
        for (var o = n[u][0], p = n[u][1], f = -1; f <= 7; f++)
            if (!(o + f <= -1 || r <= o + f))
                for (var b = -1; b <= 7; b++)
                    p + b <= -1 || r <= p + b || (f >= 0 && f <= 6 && (b === 0 || b === 6) || b >= 0 && b <= 6 && (f === 0 || f === 6) || f >= 2 && f <= 4 && b >= 2 && b <= 4 ? t.set(o + f, p + b, !0, !0) : t.set(o + f, p + b, !1, !0));
}

function du(t) {
    for (var e = t.size, r = 8; r < e - 8; r++) {
        var n = r % 2 === 0;
        t.set(r, 6, n, !0), t.set(6, r, n, !0);
    }
}

function pu(t, e) {
    for (var r = au.getPositions(e), n = 0; n < r.length; n++)
        for (var u = r[n][0], o = r[n][1], p = -2; p <= 2; p++)
            for (var f = -2; f <= 2; f++)
                p === -2 || p === 2 || f === -2 || f === 2 || p === 0 && f === 0 ? t.set(u + p, o + f, !0, !0) : t.set(u + p, o + f, !1, !0);
}

function gu(t, e) {
    for (var r = t.size, n = At.getEncodedBits(e), u, o, p, f = 0; f < 18; f++)
        u = Math.floor(f / 3), o = f % 3 + r - 8 - 3, p = (n >> f & 1) === 1, t.set(u, o, p, !0), t.set(o, u, p, !0);
}

function _r(t, e, r) {
    var n = t.size,
        u = uu.getEncodedBits(e, r),
        o, p;
    for (o = 0; o < 15; o++)
        p = (u >> o & 1) === 1, o < 6 ? t.set(o, 8, p, !0) : o < 8 ? t.set(o + 1, 8, p, !0) : t.set(n - 15 + o, 8, p, !0), o < 8 ? t.set(8, n - o - 1, p, !0) : o < 9 ? t.set(8, 15 - o - 1 + 1, p, !0) : t.set(8, 15 - o - 1, p, !0);
    t.set(n - 8, 8, 1, !0);
}

function mu(t, e) {
    for (var r = t.size, n = -1, u = r - 1, o = 7, p = 0, f = r - 1; f > 0; f -= 2)
        for (f === 6 && f--;;) {
            for (var b = 0; b < 2; b++)
                if (!t.isReserved(u, f - b)) {
                    var I = !1;
                    p < e.length && (I = (e[p] >>> o & 1) === 1), t.set(u, f - b, I), o--, o === -1 && (p++, o = 7);
                }
            if (u += n, u < 0 || r <= u) {
                u -= n, n = -n;
                break;
            }
        }
}

function _u(t, e, r) {
    var n = new iu();
    r.forEach(function(I) {
        n.put(I.mode.bit, 4), n.put(I.getLength(), lu.getCharCountIndicator(I.mode, t)), I.write(n);
    });
    var u = Ht.getSymbolTotalCodewords(t),
        o = Ir.getTotalCodewordsCount(t, e),
        p = (u - o) * 8;
    for (n.getLengthInBits() + 4 <= p && n.put(0, 4); n.getLengthInBits() % 8 !== 0;)
        n.putBit(0);
    for (var f = (p - n.getLengthInBits()) / 8, b = 0; b < f; b++)
        n.put(b % 2 ? 17 : 236, 8);
    return vu(n, t, e);
}

function vu(t, e, r) {
    for (var n = Ht.getSymbolTotalCodewords(e), u = Ir.getTotalCodewordsCount(e, r), o = n - u, p = Ir.getBlocksCount(e, r), f = n % p, b = p - f, I = Math.floor(n / p), E = Math.floor(o / p), N = E + 1, L = I - E, P = new cu(L), U = 0, $ = new Array(p), S = new Array(p), k = 0, T = Bn.from(t.buffer), R = 0; R < p; R++) {
        var B = R < b ? E : N;
        $[R] = T.slice(U, U + B), S[R] = P.encode($[R]), U += B, k = Math.max(k, B);
    }
    var W = Bn.alloc(n),
        H = 0,
        Y, j;
    for (Y = 0; Y < k; Y++)
        for (j = 0; j < p; j++)
            Y < $[j].length && (W[H++] = $[j][Y]);
    for (Y = 0; Y < L; Y++)
        for (j = 0; j < p; j++)
            W[H++] = S[j][Y];
    return W;
}

function wu(t, e, r, n) {
    var u;
    if (fu(t))
        u = mr.fromArray(t);
    else if (typeof t == "string") {
        var o = e;
        if (!o) {
            var p = mr.rawSplit(t);
            o = At.getBestVersionForData(
                p,
                r
            );
        }
        u = mr.fromString(t, o || 40);
    } else
        throw new Error("Invalid data");
    var f = At.getBestVersionForData(
        u,
        r
    );
    if (!f)
        throw new Error("The amount of data is too big to be stored in a QR Code");
    if (!e)
        e = f;
    else if (e < f)
        throw new Error(
            `
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: ` + f + `.
`
        );
    var b = _u(e, r, u),
        I = Ht.getSymbolSize(e),
        E = new ou(I);
    return hu(E, e), du(E), pu(E, e), _r(E, r, 0), e >= 7 && gu(E, e), mu(E, b), isNaN(n) && (n = kr.getBestMask(
        E,
        _r.bind(null, E, r)
    )), kr.applyMask(n, E), _r(E, r, n), {
        modules: E,
        version: e,
        errorCorrectionLevel: r,
        maskPattern: n,
        segments: u
    };
}
$i.create = function(e, r) {
    if (typeof e > "u" || e === "")
        throw new Error("No input text");
    var n = gr.M,
        u, o;
    return typeof r < "u" && (n = gr.from(r.errorCorrectionLevel, gr.M), u = At.from(r.version), o = kr.from(r.maskPattern), r.toSJISFunc && Ht.setToSJISFunction(r.toSJISFunc)), wu(e, u, n, o);
};
var io = {},
    jr = {};
(function(t) {
    function e(r) {
        if (typeof r == "number" && (r = r.toString()), typeof r != "string")
            throw new Error("Color should be defined as hex string");
        var n = r.slice().replace("#", "").split("");
        if (n.length < 3 || n.length === 5 || n.length > 8)
            throw new Error("Invalid hex color: " + r);
        (n.length === 3 || n.length === 4) && (n = Array.prototype.concat.apply([], n.map(function(o) {
            return [o, o];
        }))), n.length === 6 && n.push("F", "F");
        var u = parseInt(n.join(""), 16);
        return {
            r: u >> 24 & 255,
            g: u >> 16 & 255,
            b: u >> 8 & 255,
            a: u & 255,
            hex: "#" + n.slice(0, 6).join("")
        };
    }
    t.getOptions = function(n) {
        n || (n = {}), n.color || (n.color = {});
        var u = typeof n.margin > "u" || n.margin === null || n.margin < 0 ? 4 : n.margin,
            o = n.width && n.width >= 21 ? n.width : void 0,
            p = n.scale || 4;
        return {
            width: o,
            scale: o ? 4 : p,
            margin: u,
            color: {
                dark: e(n.color.dark || "#000000ff"),
                light: e(n.color.light || "#ffffffff")
            },
            type: n.type,
            rendererOpts: n.rendererOpts || {}
        };
    }, t.getScale = function(n, u) {
        return u.width && u.width >= n + u.margin * 2 ? u.width / (n + u.margin * 2) : u.scale;
    }, t.getImageWidth = function(n, u) {
        var o = t.getScale(n, u);
        return Math.floor((n + u.margin * 2) * o);
    }, t.qrToImageData = function(n, u, o) {
        for (var p = u.modules.size, f = u.modules.data, b = t.getScale(p, o), I = Math.floor((p + o.margin * 2) * b), E = o.margin * b, N = [o.color.light, o.color.dark], L = 0; L < I; L++)
            for (var P = 0; P < I; P++) {
                var U = (L * I + P) * 4,
                    $ = o.color.light;
                if (L >= E && P >= E && L < I - E && P < I - E) {
                    var S = Math.floor((L - E) / b),
                        k = Math.floor((P - E) / b);
                    $ = N[f[S * p + k] ? 1 : 0];
                }
                n[U++] = $.r, n[U++] = $.g, n[U++] = $.b, n[U] = $.a;
            }
    };
})(jr);
(function(t) {
    var e = jr;

    function r(u, o, p) {
        u.clearRect(0, 0, o.width, o.height), o.style || (o.style = {}), o.height = p, o.width = p, o.style.height = p + "px", o.style.width = p + "px";
    }

    function n() {
        try {
            return document.createElement("canvas");
        } catch {
            throw new Error("You need to specify a canvas element");
        }
    }
    t.render = function(o, p, f) {
        var b = f,
            I = p;
        typeof b > "u" && (!p || !p.getContext) && (b = p, p = void 0), p || (I = n()), b = e.getOptions(b);
        var E = e.getImageWidth(o.modules.size, b),
            N = I.getContext("2d"),
            L = N.createImageData(E, E);
        return e.qrToImageData(L.data, o, b), r(N, I, E), N.putImageData(L, 0, 0), I;
    }, t.renderToDataURL = function(o, p, f) {
        var b = f;
        typeof b > "u" && (!p || !p.getContext) && (b = p, p = void 0), b || (b = {});
        var I = t.render(o, p, b),
            E = b.type || "image/png",
            N = b.rendererOpts || {};
        return I.toDataURL(E, N.quality);
    };
})(io);
var oo = {},
    yu = jr;

function Nn(t, e) {
    var r = t.a / 255,
        n = e + '="' + t.hex + '"';
    return r < 1 ? n + " " + e + '-opacity="' + r.toFixed(2).slice(1) + '"' : n;
}

function vr(t, e, r) {
    var n = t + e;
    return typeof r < "u" && (n += " " + r), n;
}

function bu(t, e, r) {
    for (var n = "", u = 0, o = !1, p = 0, f = 0; f < t.length; f++) {
        var b = Math.floor(f % e),
            I = Math.floor(f / e);
        !b && !o && (o = !0), t[f] ? (p++, f > 0 && b > 0 && t[f - 1] || (n += o ? vr("M", b + r, 0.5 + I + r) : vr("m", u, 0), u = 0, o = !1), b + 1 < e && t[f + 1] || (n += vr("h", p), p = 0)) : u++;
    }
    return n;
}
oo.render = function(e, r, n) {
    var u = yu.getOptions(r),
        o = e.modules.size,
        p = e.modules.data,
        f = o + u.margin * 2,
        b = u.color.light.a ? "<path " + Nn(u.color.light, "fill") + ' d="M0 0h' + f + "v" + f + 'H0z"/>' : "",
        I = "<path " + Nn(u.color.dark, "stroke") + ' d="' + bu(p, o, u.margin) + '"/>',
        E = 'viewBox="0 0 ' + f + " " + f + '"',
        N = u.width ? 'width="' + u.width + '" height="' + u.width + '" ' : "",
        L = '<svg xmlns="http://www.w3.org/2000/svg" ' + N + E + ' shape-rendering="crispEdges">' + b + I + `</svg>
`;
    return typeof n == "function" && n(null, L), L;
};
var Mu = Sc,
    Rr = $i,
    ao = io,
    xu = oo;

function Qr(t, e, r, n, u) {
    var o = [].slice.call(arguments, 1),
        p = o.length,
        f = typeof o[p - 1] == "function";
    if (!f && !Mu())
        throw new Error("Callback required as last argument");
    if (f) {
        if (p < 2)
            throw new Error("Too few arguments provided");
        p === 2 ? (u = r, r = e, e = n = void 0) : p === 3 && (e.getContext && typeof u > "u" ? (u = n, n = void 0) : (u = n, n = r, r = e, e = void 0));
    } else {
        if (p < 1)
            throw new Error("Too few arguments provided");
        return p === 1 ? (r = e, e = n = void 0) : p === 2 && !e.getContext && (n = r, r = e, e = void 0), new Promise(function(I, E) {
            try {
                var N = Rr.create(r, n);
                I(t(N, e, n));
            } catch (L) {
                E(L);
            }
        });
    }
    try {
        var b = Rr.create(r, n);
        u(null, t(b, e, n));
    } catch (I) {
        u(I);
    }
}
yt.create = Rr.create;
yt.toCanvas = Qr.bind(null, ao.render);
yt.toDataURL = Qr.bind(null, ao.renderToDataURL);
yt.toString = Qr.bind(null, function(t, e, r) {
    return xu.render(t, r);
});
var Eu = function() {
        var t = document.getSelection();
        if (!t.rangeCount)
            return function() {};
        for (var e = document.activeElement, r = [], n = 0; n < t.rangeCount; n++)
            r.push(t.getRangeAt(n));
        switch (e.tagName.toUpperCase()) {
            case "INPUT":
            case "TEXTAREA":
                e.blur();
                break;
            default:
                e = null;
                break;
        }
        return t.removeAllRanges(),
            function() {
                t.type === "Caret" && t.removeAllRanges(), t.rangeCount || r.forEach(function(u) {
                    t.addRange(u);
                }), e && e.focus();
            };
    },
    Su = Eu,
    On = {
        "text/plain": "Text",
        "text/html": "Url",
        default: "Text"
    },
    Cu = "Copy to clipboard: #{key}, Enter";

function ku(t) {
    var e = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
    return t.replace(/#{\s*key\s*}/g, e);
}

function Iu(t, e) {
    var r, n, u, o, p, f, b = !1;
    e || (e = {}), r = e.debug || !1;
    try {
        u = Su(), o = document.createRange(), p = document.getSelection(), f = document.createElement("span"), f.textContent = t, f.ariaHidden = "true", f.style.all = "unset", f.style.position = "fixed", f.style.top = 0, f.style.clip = "rect(0, 0, 0, 0)", f.style.whiteSpace = "pre", f.style.webkitUserSelect = "text", f.style.MozUserSelect = "text", f.style.msUserSelect = "text", f.style.userSelect = "text", f.addEventListener("copy", function(E) {
            if (E.stopPropagation(), e.format)
                if (E.preventDefault(), typeof E.clipboardData > "u") {
                    r && console.warn("unable to use e.clipboardData"), r && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
                    var N = On[e.format] || On.default;
                    window.clipboardData.setData(N, t);
                } else
                    E.clipboardData.clearData(), E.clipboardData.setData(e.format, t);
            e.onCopy && (E.preventDefault(), e.onCopy(E.clipboardData));
        }), document.body.appendChild(f), o.selectNodeContents(f), p.addRange(o);
        var I = document.execCommand("copy");
        if (!I)
            throw new Error("copy command was unsuccessful");
        b = !0;
    } catch (E) {
        r && console.error("unable to copy using execCommand: ", E), r && console.warn("trying IE specific stuff");
        try {
            window.clipboardData.setData(e.format || "text", t), e.onCopy && e.onCopy(window.clipboardData), b = !0;
        } catch (N) {
            r && console.error("unable to copy using clipboardData: ", N), r && console.error("falling back to prompt"), n = ku("message" in e ? e.message : Cu), window.prompt(n, t);
        }
    } finally {
        p && (typeof p.removeRange == "function" ? p.removeRange(o) : p.removeAllRanges()), f && document.body.removeChild(f), u();
    }
    return b;
}
var Ru = Iu,
    V, pt, Gr, so, Ln, Zr, co, $e = {},
    zt = [],
    Tu = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;

function De(t, e) {
    for (var r in e)
        t[r] = e[r];
    return t;
}

function uo(t) {
    var e = t.parentNode;
    e && e.removeChild(t);
}

function We(t, e, r) {
    var n, u = arguments,
        o = {};
    for (n in e)
        n !== "key" && n !== "ref" && (o[n] = e[n]);
    if (arguments.length > 3)
        for (r = [r], n = 3; n < arguments.length; n++)
            r.push(u[n]);
    if (r != null && (o.children = r), typeof t == "function" && t.defaultProps != null)
        for (n in t.defaultProps)
            o[n] === void 0 && (o[n] = t.defaultProps[n]);
    return Bt(t, o, e && e.key, e && e.ref, null);
}

function Bt(t, e, r, n, u) {
    var o = {
        type: t,
        props: e,
        key: r,
        ref: n,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        constructor: void 0,
        __v: u
    };
    return u == null && (o.__v = o), V.vnode && V.vnode(o), o;
}

function lo() {
    return {};
}

function Mt(t) {
    return t.children;
}

function Fe(t, e) {
    this.props = t, this.context = e;
}

function _t(t, e) {
    if (e == null)
        return t.__ ? _t(t.__, t.__.__k.indexOf(t) + 1) : null;
    for (var r; e < t.__k.length; e++)
        if ((r = t.__k[e]) != null && r.__e != null)
            return r.__e;
    return typeof t.type == "function" ? _t(t) : null;
}

function fo(t) {
    var e, r;
    if ((t = t.__) != null && t.__c != null) {
        for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
            if ((r = t.__k[e]) != null && r.__e != null) {
                t.__e = t.__c.base = r.__e;
                break;
            }
        return fo(t);
    }
}

function kt(t) {
    (!t.__d && (t.__d = !0) && pt.push(t) && !Gr++ || Ln !== V.debounceRendering) && ((Ln = V.debounceRendering) || so)(Au);
}

function Au() {
    for (var t; Gr = pt.length;)
        t = pt.sort(function(e, r) {
            return e.__v.__b - r.__v.__b;
        }), pt = [], t.some(function(e) {
            var r, n, u, o, p, f, b;
            e.__d && (f = (p = (r = e).__v).__e, (b = r.__P) && (n = [], (u = De({}, p)).__v = u, o = Xr(b, p, u, r.__n, b.ownerSVGElement !== void 0, null, n, f ? ? _t(p)), po(n, p), o != f && fo(p)));
        });
}

function ho(t, e, r, n, u, o, p, f, b) {
    var I, E, N, L, P, U, $, S = r && r.__k || zt,
        k = S.length;
    if (f == $e && (f = o != null ? o[0] : k ? _t(r, 0) : null), I = 0, e.__k = ze(e.__k, function(T) {
            if (T != null) {
                if (T.__ = e, T.__b = e.__b + 1, (N = S[I]) === null || N && T.key == N.key && T.type === N.type)
                    S[I] = void 0;
                else
                    for (E = 0; E < k; E++) {
                        if ((N = S[E]) && T.key == N.key && T.type === N.type) {
                            S[E] = void 0;
                            break;
                        }
                        N = null;
                    }
                if (L = Xr(t, T, N = N || $e, n, u, o, p, f, b), (E = T.ref) && N.ref != E && ($ || ($ = []), N.ref && $.push(N.ref, null, T), $.push(E, T.__c || L, T)), L != null) {
                    var R;
                    if (U == null && (U = L), T.__d !== void 0)
                        R = T.__d, T.__d = void 0;
                    else if (o == N || L != f || L.parentNode == null) {
                        e: if (f == null || f.parentNode !== t)
                                t.appendChild(L), R = null;
                            else {
                                for (P = f, E = 0;
                                    (P = P.nextSibling) && E < k; E += 2)
                                    if (P == L)
                                        break e;
                                t.insertBefore(L, f), R = f;
                            }
                        e.type == "option" && (t.value = "");
                    }
                    f = R !== void 0 ? R : L.nextSibling, typeof e.type == "function" && (e.__d = f);
                } else
                    f && N.__e == f && f.parentNode != t && (f = _t(N));
            }
            return I++, T;
        }), e.__e = U, o != null && typeof e.type != "function")
        for (I = o.length; I--;)
            o[I] != null && uo(o[I]);
    for (I = k; I--;)
        S[I] != null && gt(S[I], S[I]);
    if ($)
        for (I = 0; I < $.length; I++)
            go($[I], $[++I], $[++I]);
}

function ze(t, e, r) {
    if (r == null && (r = []), t == null || typeof t == "boolean")
        e && r.push(e(null));
    else if (Array.isArray(t))
        for (var n = 0; n < t.length; n++)
            ze(t[n], e, r);
    else
        r.push(e ? e(typeof t == "string" || typeof t == "number" ? Bt(null, t, null, null, t) : t.__e != null || t.__c != null ? Bt(t.type, t.props, t.key, null, t.__v) : t) : t);
    return r;
}

function Bu(t, e, r, n, u) {
    var o;
    for (o in r)
        o === "children" || o === "key" || o in e || Nt(t, o, null, r[o], n);
    for (o in e)
        u && typeof e[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || r[o] === e[o] || Nt(t, o, e[o], r[o], n);
}

function Un(t, e, r) {
    e[0] === "-" ? t.setProperty(e, r) : t[e] = typeof r == "number" && Tu.test(e) === !1 ? r + "px" : r ? ? "";
}

function Nt(t, e, r, n, u) {
    var o, p, f, b, I;
    if (u ? e === "className" && (e = "class") : e === "class" && (e = "className"), e === "style")
        if (o = t.style, typeof r == "string")
            o.cssText = r;
        else {
            if (typeof n == "string" && (o.cssText = "", n = null), n)
                for (b in n)
                    r && b in r || Un(o, b, "");
            if (r)
                for (I in r)
                    n && r[I] === n[I] || Un(o, I, r[I]);
        }
    else
        e[0] === "o" && e[1] === "n" ? (p = e !== (e = e.replace(/Capture$/, "")), f = e.toLowerCase(), e = (f in t ? f : e).slice(2), r ? (n || t.addEventListener(e, Fn, p), (t.l || (t.l = {}))[e] = r) : t.removeEventListener(e, Fn, p)) : e !== "list" && e !== "tagName" && e !== "form" && e !== "type" && e !== "size" && !u && e in t ? t[e] = r ? ? "" : typeof r != "function" && e !== "dangerouslySetInnerHTML" && (e !== (e = e.replace(/^xlink:?/, "")) ? r == null || r === !1 ? t.removeAttributeNS("http://www.w3.org/1999/xlink", e.toLowerCase()) : t.setAttributeNS("http://www.w3.org/1999/xlink", e.toLowerCase(), r) : r == null || r === !1 && !/^ar/.test(e) ? t.removeAttribute(e) : t.setAttribute(e, r));
}

function Fn(t) {
    this.l[t.type](V.event ? V.event(t) : t);
}

function Xr(t, e, r, n, u, o, p, f, b) {
    var I, E, N, L, P, U, $, S, k, T, R = e.type;
    if (e.constructor !== void 0)
        return null;
    (I = V.__b) && I(e);
    try {
        e: if (typeof R == "function") {
            if (S = e.props, k = (I = R.contextType) && n[I.__c], T = I ? k ? k.props.value : I.__ : n, r.__c ? $ = (E = e.__c = r.__c).__ = E.__E : ("prototype" in R && R.prototype.render ? e.__c = E = new R(S, T) : (e.__c = E = new Fe(S, T), E.constructor = R, E.render = Ou), k && k.sub(E), E.props = S, E.state || (E.state = {}), E.context = T, E.__n = n, N = E.__d = !0, E.__h = []), E.__s == null && (E.__s = E.state), R.getDerivedStateFromProps != null && (E.__s == E.state && (E.__s = De({}, E.__s)), De(E.__s, R.getDerivedStateFromProps(S, E.__s))), L = E.props, P = E.state, N)
                R.getDerivedStateFromProps == null && E.componentWillMount != null && E.componentWillMount(), E.componentDidMount != null && E.__h.push(E.componentDidMount);
            else {
                if (R.getDerivedStateFromProps == null && S !== L && E.componentWillReceiveProps != null && E.componentWillReceiveProps(S, T), !E.__e && E.shouldComponentUpdate != null && E.shouldComponentUpdate(S, E.__s, T) === !1 || e.__v === r.__v && !E.__) {
                    for (E.props = S, E.state = E.__s, e.__v !== r.__v && (E.__d = !1), E.__v = e, e.__e = r.__e, e.__k = r.__k, E.__h.length && p.push(E), I = 0; I < e.__k.length; I++)
                        e.__k[I] && (e.__k[I].__ = e);
                    break e;
                }
                E.componentWillUpdate != null && E.componentWillUpdate(S, E.__s, T), E.componentDidUpdate != null && E.__h.push(function() {
                    E.componentDidUpdate(L, P, U);
                });
            }
            E.context = T, E.props = S, E.state = E.__s, (I = V.__r) && I(e), E.__d = !1, E.__v = e, E.__P = t, I = E.render(E.props, E.state, E.context), e.__k = I != null && I.type == Mt && I.key == null ? I.props.children : Array.isArray(I) ? I : [I], E.getChildContext != null && (n = De(De({}, n), E.getChildContext())), N || E.getSnapshotBeforeUpdate == null || (U = E.getSnapshotBeforeUpdate(L, P)), ho(t, e, r, n, u, o, p, f, b), E.base = e.__e, E.__h.length && p.push(E), $ && (E.__E = E.__ = null), E.__e = !1;
        } else
            o == null && e.__v === r.__v ? (e.__k = r.__k, e.__e = r.__e) : e.__e = Nu(r.__e, e, r, n, u, o, p, b);
        (I = V.diffed) && I(e);
    }
    catch (B) {
        e.__v = null, V.__e(B, e, r);
    }
    return e.__e;
}

function po(t, e) {
    V.__c && V.__c(e, t), t.some(function(r) {
        try {
            t = r.__h, r.__h = [], t.some(function(n) {
                n.call(r);
            });
        } catch (n) {
            V.__e(n, r.__v);
        }
    });
}

function Nu(t, e, r, n, u, o, p, f) {
    var b, I, E, N, L, P = r.props,
        U = e.props;
    if (u = e.type === "svg" || u, o != null) {
        for (b = 0; b < o.length; b++)
            if ((I = o[b]) != null && ((e.type === null ? I.nodeType === 3 : I.localName === e.type) || t == I)) {
                t = I, o[b] = null;
                break;
            }
    }
    if (t == null) {
        if (e.type === null)
            return document.createTextNode(U);
        t = u ? document.createElementNS("http://www.w3.org/2000/svg", e.type) : document.createElement(e.type, U.is && {
            is: U.is
        }), o = null, f = !1;
    }
    if (e.type === null)
        P !== U && t.data != U && (t.data = U);
    else {
        if (o != null && (o = zt.slice.call(t.childNodes)), E = (P = r.props || $e).dangerouslySetInnerHTML, N = U.dangerouslySetInnerHTML, !f) {
            if (P === $e)
                for (P = {}, L = 0; L < t.attributes.length; L++)
                    P[t.attributes[L].name] = t.attributes[L].value;
            (N || E) && (N && E && N.__html == E.__html || (t.innerHTML = N && N.__html || ""));
        }
        Bu(t, U, P, u, f), N ? e.__k = [] : (e.__k = e.props.children, ho(t, e, r, n, e.type !== "foreignObject" && u, o, p, $e, f)), f || ("value" in U && (b = U.value) !== void 0 && b !== t.value && Nt(t, "value", b, P.value, !1), "checked" in U && (b = U.checked) !== void 0 && b !== t.checked && Nt(t, "checked", b, P.checked, !1));
    }
    return t;
}

function go(t, e, r) {
    try {
        typeof t == "function" ? t(e) : t.current = e;
    } catch (n) {
        V.__e(n, r);
    }
}

function gt(t, e, r) {
    var n, u, o;
    if (V.unmount && V.unmount(t), (n = t.ref) && (n.current && n.current !== t.__e || go(n, null, e)), r || typeof t.type == "function" || (r = (u = t.__e) != null), t.__e = t.__d = void 0, (n = t.__c) != null) {
        if (n.componentWillUnmount)
            try {
                n.componentWillUnmount();
            } catch (p) {
                V.__e(p, e);
            }
        n.base = n.__P = null;
    }
    if (n = t.__k)
        for (o = 0; o < n.length; o++)
            n[o] && gt(n[o], e, r);
    u != null && uo(u);
}

function Ou(t, e, r) {
    return this.constructor(t, r);
}

function vt(t, e, r) {
    var n, u, o;
    V.__ && V.__(t, e), u = (n = r === Zr) ? null : r && r.__k || e.__k, t = We(Mt, null, [t]), o = [], Xr(e, (n ? e : r || e).__k = t, u || $e, $e, e.ownerSVGElement !== void 0, r && !n ? [r] : u ? null : zt.slice.call(e.childNodes), o, r || $e, n), po(o, t);
}

function mo(t, e) {
    vt(t, e, Zr);
}

function Lu(t, e) {
    var r, n;
    for (n in e = De(De({}, t.props), e), arguments.length > 2 && (e.children = zt.slice.call(arguments, 2)), r = {}, e)
        n !== "key" && n !== "ref" && (r[n] = e[n]);
    return Bt(t.type, r, e.key || t.key, e.ref || t.ref, null);
}

function _o(t) {
    var e = {},
        r = {
            __c: "__cC" + co++,
            __: t,
            Consumer: function(n, u) {
                return n.children(u);
            },
            Provider: function(n) {
                var u, o = this;
                return this.getChildContext || (u = [], this.getChildContext = function() {
                    return e[r.__c] = o, e;
                }, this.shouldComponentUpdate = function(p) {
                    o.props.value !== p.value && u.some(function(f) {
                        f.context = p.value, kt(f);
                    });
                }, this.sub = function(p) {
                    u.push(p);
                    var f = p.componentWillUnmount;
                    p.componentWillUnmount = function() {
                        u.splice(u.indexOf(p), 1), f && f.call(p);
                    };
                }), n.children;
            }
        };
    return r.Consumer.contextType = r, r.Provider.__ = r, r;
}
V = {
    __e: function(t, e) {
        for (var r, n; e = e.__;)
            if ((r = e.__c) && !r.__)
                try {
                    if (r.constructor && r.constructor.getDerivedStateFromError != null && (n = !0, r.setState(r.constructor.getDerivedStateFromError(t))), r.componentDidCatch != null && (n = !0, r.componentDidCatch(t)), n)
                        return kt(r.__E = r);
                } catch (u) {
                    t = u;
                }
        throw t;
    }
}, Fe.prototype.setState = function(t, e) {
    var r;
    r = this.__s !== this.state ? this.__s : this.__s = De({}, this.state), typeof t == "function" && (t = t(r, this.props)), t && De(r, t), t != null && this.__v && (e && this.__h.push(e), kt(this));
}, Fe.prototype.forceUpdate = function(t) {
    this.__v && (this.__e = !0, t && this.__h.push(t), kt(this));
}, Fe.prototype.render = Mt, pt = [], Gr = 0, so = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Zr = $e, co = 0;
var Ze, Oe, Pn, ct = 0,
    Tr = [],
    qn = V.__r,
    Dn = V.diffed,
    $n = V.__c,
    Wn = V.unmount;

function ft(t, e) {
    V.__h && V.__h(Oe, t, ct || e), ct = 0;
    var r = Oe.__H || (Oe.__H = {
        __: [],
        __h: []
    });
    return t >= r.__.length && r.__.push({}), r.__[t];
}

function en(t) {
    return ct = 1, tn(Eo, t);
}

function tn(t, e, r) {
    var n = ft(Ze++, 2);
    return n.__c || (n.__c = Oe, n.__ = [r ? r(e) : Eo(void 0, e), function(u) {
        var o = t(n.__[0], u);
        n.__[0] !== o && (n.__[0] = o, n.__c.setState({}));
    }]), n.__;
}

function vo(t, e) {
    var r = ft(Ze++, 3);
    !V.__s && nn(r.__H, e) && (r.__ = t, r.__H = e, Oe.__H.__h.push(r));
}

function rn(t, e) {
    var r = ft(Ze++, 4);
    !V.__s && nn(r.__H, e) && (r.__ = t, r.__H = e, Oe.__h.push(r));
}

function wo(t) {
    return ct = 5, Jt(function() {
        return {
            current: t
        };
    }, []);
}

function yo(t, e, r) {
    ct = 6, rn(function() {
        typeof t == "function" ? t(e()) : t && (t.current = e());
    }, r == null ? r : r.concat(t));
}

function Jt(t, e) {
    var r = ft(Ze++, 7);
    return nn(r.__H, e) ? (r.__H = e, r.__h = t, r.__ = t()) : r.__;
}

function bo(t, e) {
    return ct = 8, Jt(function() {
        return t;
    }, e);
}

function Mo(t) {
    var e = Oe.context[t.__c],
        r = ft(Ze++, 9);
    return r.__c = t, e ? (r.__ == null && (r.__ = !0, e.sub(Oe)), e.props.value) : t.__;
}

function xo(t, e) {
    V.useDebugValue && V.useDebugValue(e ? e(t) : t);
}

function Uu(t) {
    var e = ft(Ze++, 10),
        r = en();
    return e.__ = t, Oe.componentDidCatch || (Oe.componentDidCatch = function(n) {
        e.__ && e.__(n), r[1](n);
    }), [r[0], function() {
        r[1](void 0);
    }];
}

function Fu() {
    Tr.some(function(t) {
        if (t.__P)
            try {
                t.__H.__h.forEach(Ar), t.__H.__h.forEach(Br), t.__H.__h = [];
            } catch (e) {
                return t.__H.__h = [], V.__e(e, t.__v), !0;
            }
    }), Tr = [];
}

function Ar(t) {
    t.t && t.t();
}

function Br(t) {
    var e = t.__();
    typeof e == "function" && (t.t = e);
}

function nn(t, e) {
    return !t || e.some(function(r, n) {
        return r !== t[n];
    });
}

function Eo(t, e) {
    return typeof e == "function" ? e(t) : e;
}
V.__r = function(t) {
    qn && qn(t), Ze = 0, (Oe = t.__c).__H && (Oe.__H.__h.forEach(Ar), Oe.__H.__h.forEach(Br), Oe.__H.__h = []);
}, V.diffed = function(t) {
    Dn && Dn(t);
    var e = t.__c;
    if (e) {
        var r = e.__H;
        r && r.__h.length && (Tr.push(e) !== 1 && Pn === V.requestAnimationFrame || ((Pn = V.requestAnimationFrame) || function(n) {
            var u, o = function() {
                    clearTimeout(p), cancelAnimationFrame(u), setTimeout(n);
                },
                p = setTimeout(o, 100);
            typeof window < "u" && (u = requestAnimationFrame(o));
        })(Fu));
    }
}, V.__c = function(t, e) {
    e.some(function(r) {
        try {
            r.__h.forEach(Ar), r.__h = r.__h.filter(function(n) {
                return !n.__ || Br(n);
            });
        } catch (n) {
            e.some(function(u) {
                u.__h && (u.__h = []);
            }), e = [], V.__e(n, r.__v);
        }
    }), $n && $n(t, e);
}, V.unmount = function(t) {
    Wn && Wn(t);
    var e = t.__c;
    if (e) {
        var r = e.__H;
        if (r)
            try {
                r.__.forEach(function(n) {
                    return n.t && n.t();
                });
            } catch (n) {
                V.__e(n, e.__v);
            }
    }
};

function on(t, e) {
    for (var r in e)
        t[r] = e[r];
    return t;
}

function Nr(t, e) {
    for (var r in t)
        if (r !== "__source" && !(r in e))
            return !0;
    for (var n in e)
        if (n !== "__source" && t[n] !== e[n])
            return !0;
    return !1;
}
var So = function(t) {
    var e, r;

    function n(u) {
        var o;
        return (o = t.call(this, u) || this).isPureReactComponent = !0, o;
    }
    return r = t, (e = n).prototype = Object.create(r.prototype), e.prototype.constructor = e, e.__proto__ = r, n.prototype.shouldComponentUpdate = function(u, o) {
        return Nr(this.props, u) || Nr(this.state, o);
    }, n;
}(Fe);

function Co(t, e) {
    function r(u) {
        var o = this.props.ref,
            p = o == u.ref;
        return !p && o && (o.call ? o(null) : o.current = null), e ? !e(this.props, u) || !p : Nr(this.props, u);
    }

    function n(u) {
        return this.shouldComponentUpdate = r, We(t, on({}, u));
    }
    return n.prototype.isReactComponent = !0, n.displayName = "Memo(" + (t.displayName || t.name) + ")", n.t = !0, n;
}
var Hn = V.__b;

function ko(t) {
    function e(r) {
        var n = on({}, r);
        return delete n.ref, t(n, r.ref);
    }
    return e.prototype.isReactComponent = e.t = !0, e.displayName = "ForwardRef(" + (t.displayName || t.name) + ")", e;
}
V.__b = function(t) {
    t.type && t.type.t && t.ref && (t.props.ref = t.ref, t.ref = null), Hn && Hn(t);
};
var zn = function(t, e) {
        return t ? ze(t).reduce(function(r, n, u) {
            return r.concat(e(n, u));
        }, []) : null;
    },
    Io = {
        map: zn,
        forEach: zn,
        count: function(t) {
            return t ? ze(t).length : 0;
        },
        only: function(t) {
            if ((t = ze(t)).length !== 1)
                throw new Error("Children.only() expects only one child.");
            return t[0];
        },
        toArray: ze
    },
    Pu = V.__e;

function Ro(t) {
    return t && ((t = on({}, t)).__c = null, t.__k = t.__k && t.__k.map(Ro)), t;
}

function Ot() {
    this.__u = 0, this.o = null, this.__b = null;
}

function To(t) {
    var e = t.__.__c;
    return e && e.u && e.u(t);
}

function Ao(t) {
    var e, r, n;

    function u(o) {
        if (e || (e = t()).then(function(p) {
                r = p.default || p;
            }, function(p) {
                n = p;
            }), n)
            throw n;
        if (!r)
            throw e;
        return We(r, o);
    }
    return u.displayName = "Lazy", u.t = !0, u;
}

function Xe() {
    this.i = null, this.l = null;
}
V.__e = function(t, e, r) {
    if (t.then) {
        for (var n, u = e; u = u.__;)
            if ((n = u.__c) && n.__c)
                return n.__c(t, e.__c);
    }
    Pu(t, e, r);
}, (Ot.prototype = new Fe()).__c = function(t, e) {
    var r = this;
    r.o == null && (r.o = []), r.o.push(e);
    var n = To(r.__v),
        u = !1,
        o = function() {
            u || (u = !0, n ? n(p) : p());
        };
    e.__c = e.componentWillUnmount, e.componentWillUnmount = function() {
        o(), e.__c && e.__c();
    };
    var p = function() {
        var f;
        if (!--r.__u)
            for (r.__v.__k[0] = r.state.u, r.setState({
                    u: r.__b = null
                }); f = r.o.pop();)
                f.forceUpdate();
    };
    r.__u++ || r.setState({
        u: r.__b = r.__v.__k[0]
    }), t.then(o, o);
}, Ot.prototype.render = function(t, e) {
    return this.__b && (this.__v.__k[0] = Ro(this.__b), this.__b = null), [We(Fe, null, e.u ? null : t.children), e.u && t.fallback];
};
var Jn = function(t, e, r) {
    if (++r[1] === r[0] && t.l.delete(e), t.props.revealOrder && (t.props.revealOrder[0] !== "t" || !t.l.size))
        for (r = t.i; r;) {
            for (; r.length > 3;)
                r.pop()();
            if (r[1] < r[0])
                break;
            t.i = r = r[2];
        }
};
(Xe.prototype = new Fe()).u = function(t) {
    var e = this,
        r = To(e.__v),
        n = e.l.get(t);
    return n[0]++,
        function(u) {
            var o = function() {
                e.props.revealOrder ? (n.push(u), Jn(e, t, n)) : u();
            };
            r ? r(o) : o();
        };
}, Xe.prototype.render = function(t) {
    this.i = null, this.l = /* @__PURE__ */ new Map();
    var e = ze(t.children);
    t.revealOrder && t.revealOrder[0] === "b" && e.reverse();
    for (var r = e.length; r--;)
        this.l.set(e[r], this.i = [1, 0, this.i]);
    return t.children;
}, Xe.prototype.componentDidUpdate = Xe.prototype.componentDidMount = function() {
    var t = this;
    t.l.forEach(function(e, r) {
        Jn(t, r, e);
    });
};
var qu = function() {
    function t() {}
    var e = t.prototype;
    return e.getChildContext = function() {
        return this.props.context;
    }, e.render = function(r) {
        return r.children;
    }, t;
}();

function Du(t) {
    var e = this,
        r = t.container,
        n = We(qu, {
            context: e.context
        }, t.vnode);
    return e.s && e.s !== r && (e.v.parentNode && e.s.removeChild(e.v), gt(e.h), e.p = !1), t.vnode ? e.p ? (r.__k = e.__k, vt(n, r), e.__k = r.__k) : (e.v = document.createTextNode(""), mo("", r), r.appendChild(e.v), e.p = !0, e.s = r, vt(n, r, e.v), e.__k = e.v.__k) : e.p && (e.v.parentNode && e.s.removeChild(e.v), gt(e.h)), e.h = n, e.componentWillUnmount = function() {
        e.v.parentNode && e.s.removeChild(e.v), gt(e.h);
    }, null;
}

function Bo(t, e) {
    return We(Du, {
        vnode: t,
        container: e
    });
}
var Kn = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
Fe.prototype.isReactComponent = {};
var No = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103;

function Or(t, e, r) {
    if (e.__k == null)
        for (; e.firstChild;)
            e.removeChild(e.firstChild);
    return vt(t, e), typeof r == "function" && r(), t ? t.__c : null;
}

function $u(t, e, r) {
    return mo(t, e), typeof r == "function" && r(), t ? t.__c : null;
}
var Vn = V.event;

function wr(t, e) {
    t["UNSAFE_" + e] && !t[e] && Object.defineProperty(t, e, {
        configurable: !1,
        get: function() {
            return this["UNSAFE_" + e];
        },
        set: function(r) {
            this["UNSAFE_" + e] = r;
        }
    });
}
V.event = function(t) {
    Vn && (t = Vn(t)), t.persist = function() {};
    var e = !1,
        r = !1,
        n = t.stopPropagation;
    t.stopPropagation = function() {
        n.call(t), e = !0;
    };
    var u = t.preventDefault;
    return t.preventDefault = function() {
        u.call(t), r = !0;
    }, t.isPropagationStopped = function() {
        return e;
    }, t.isDefaultPrevented = function() {
        return r;
    }, t.nativeEvent = t;
};
var Yn = {
        configurable: !0,
        get: function() {
            return this.class;
        }
    },
    jn = V.vnode;
V.vnode = function(t) {
    t.$$typeof = No;
    var e = t.type,
        r = t.props;
    if (e) {
        if (r.class != r.className && (Yn.enumerable = "className" in r, r.className != null && (r.class = r.className), Object.defineProperty(r, "className", Yn)), typeof e != "function") {
            var n, u, o;
            for (o in r.defaultValue && r.value !== void 0 && (r.value || r.value === 0 || (r.value = r.defaultValue), delete r.defaultValue), Array.isArray(r.value) && r.multiple && e === "select" && (ze(r.children).forEach(function(p) {
                    r.value.indexOf(p.props.value) != -1 && (p.props.selected = !0);
                }), delete r.value), r)
                if (n = Kn.test(o))
                    break;
            if (n)
                for (o in u = t.props = {}, r)
                    u[Kn.test(o) ? o.replace(/[A-Z0-9]/, "-$&").toLowerCase() : o] = r[o];
        }
        (function(p) {
            var f = t.type,
                b = t.props;
            if (b && typeof f == "string") {
                var I = {};
                for (var E in b)
                    /^on(Ani|Tra|Tou)/.test(E) && (b[E.toLowerCase()] = b[E], delete b[E]), I[E.toLowerCase()] = E;
                if (I.ondoubleclick && (b.ondblclick = b[I.ondoubleclick], delete b[I.ondoubleclick]), I.onbeforeinput && (b.onbeforeinput = b[I.onbeforeinput], delete b[I.onbeforeinput]), I.onchange && (f === "textarea" || f.toLowerCase() === "input" && !/^fil|che|ra/i.test(b.type))) {
                    var N = I.oninput || "oninput";
                    b[N] || (b[N] = b[I.onchange], delete b[I.onchange]);
                }
            }
        })(), typeof e == "function" && !e.m && e.prototype && (wr(e.prototype, "componentWillMount"), wr(e.prototype, "componentWillReceiveProps"), wr(e.prototype, "componentWillUpdate"), e.m = !0);
    }
    jn && jn(t);
};
var Wu = "16.8.0";

function Oo(t) {
    return We.bind(null, t);
}

function an(t) {
    return !!t && t.$$typeof === No;
}

function Lo(t) {
    return an(t) ? Lu.apply(null, arguments) : t;
}

function Uo(t) {
    return !!t.__k && (vt(null, t), !0);
}

function Fo(t) {
    return t && (t.base || t.nodeType === 1 && t) || null;
}
var Po = function(t, e) {
    return t(e);
};
const Hu = {
        useState: en,
        useReducer: tn,
        useEffect: vo,
        useLayoutEffect: rn,
        useRef: wo,
        useImperativeHandle: yo,
        useMemo: Jt,
        useCallback: bo,
        useContext: Mo,
        useDebugValue: xo,
        version: "16.8.0",
        Children: Io,
        render: Or,
        hydrate: Or,
        unmountComponentAtNode: Uo,
        createPortal: Bo,
        createElement: We,
        createContext: _o,
        createFactory: Oo,
        cloneElement: Lo,
        createRef: lo,
        Fragment: Mt,
        isValidElement: an,
        findDOMNode: Fo,
        Component: Fe,
        PureComponent: So,
        memo: Co,
        forwardRef: ko,
        unstable_batchedUpdates: Po,
        Suspense: Ot,
        SuspenseList: Xe,
        lazy: Ao
    },
    zu = /* @__PURE__ */ Object.freeze( /* @__PURE__ */ Object.defineProperty({
        __proto__: null,
        Children: Io,
        Component: Fe,
        Fragment: Mt,
        PureComponent: So,
        Suspense: Ot,
        SuspenseList: Xe,
        cloneElement: Lo,
        createContext: _o,
        createElement: We,
        createFactory: Oo,
        createPortal: Bo,
        createRef: lo,
        default: Hu,
        findDOMNode: Fo,
        forwardRef: ko,
        hydrate: $u,
        isValidElement: an,
        lazy: Ao,
        memo: Co,
        render: Or,
        unmountComponentAtNode: Uo,
        unstable_batchedUpdates: Po,
        useCallback: bo,
        useContext: Mo,
        useDebugValue: xo,
        useEffect: vo,
        useErrorBoundary: Uu,
        useImperativeHandle: yo,
        useLayoutEffect: rn,
        useMemo: Jt,
        useReducer: tn,
        useRef: wo,
        useState: en,
        version: Wu
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Ju = /* @__PURE__ */ Zn(zu);

function qo(t) {
    return t && typeof t == "object" && "default" in t ? t.default : t;
}
var Ne = Ec,
    Do = qo(yt),
    Ku = qo(Ru),
    D = Ju;

function Vu(t) {
    Do.toString(t, {
        type: "terminal"
    }).then(console.log);
}
var Yu = `:root {
  --animation-duration: 300ms;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.animated {
  animation-duration: var(--animation-duration);
  animation-fill-mode: both;
}

.fadeIn {
  animation-name: fadeIn;
}

.fadeOut {
  animation-name: fadeOut;
}

#walletconnect-wrapper {
  -webkit-user-select: none;
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  pointer-events: none;
  position: fixed;
  top: 0;
  user-select: none;
  width: 100%;
  z-index: 99999999999999;
}

.walletconnect-modal__headerLogo {
  height: 21px;
}

.walletconnect-modal__header p {
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
  margin: 0;
  align-items: flex-start;
  display: flex;
  flex: 1;
  margin-left: 5px;
}

.walletconnect-modal__close__wrapper {
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 10000;
  background: white;
  border-radius: 26px;
  padding: 6px;
  box-sizing: border-box;
  width: 26px;
  height: 26px;
  cursor: pointer;
}

.walletconnect-modal__close__icon {
  position: relative;
  top: 7px;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(45deg);
}

.walletconnect-modal__close__line1 {
  position: absolute;
  width: 100%;
  border: 1px solid rgb(48, 52, 59);
}

.walletconnect-modal__close__line2 {
  position: absolute;
  width: 100%;
  border: 1px solid rgb(48, 52, 59);
  transform: rotate(90deg);
}

.walletconnect-qrcode__base {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  background: rgba(37, 41, 46, 0.95);
  height: 100%;
  left: 0;
  pointer-events: auto;
  position: fixed;
  top: 0;
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  width: 100%;
  will-change: opacity;
  padding: 40px;
  box-sizing: border-box;
}

.walletconnect-qrcode__text {
  color: rgba(60, 66, 82, 0.6);
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 1.1875em;
  margin: 10px 0 20px 0;
  text-align: center;
  width: 100%;
}

@media only screen and (max-width: 768px) {
  .walletconnect-qrcode__text {
    font-size: 4vw;
  }
}

@media only screen and (max-width: 320px) {
  .walletconnect-qrcode__text {
    font-size: 14px;
  }
}

.walletconnect-qrcode__image {
  width: calc(100% - 30px);
  box-sizing: border-box;
  cursor: none;
  margin: 0 auto;
}

.walletconnect-qrcode__notification {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 16px;
  padding: 16px 20px;
  border-radius: 16px;
  text-align: center;
  transition: all 0.1s ease-in-out;
  background: white;
  color: black;
  margin-bottom: -60px;
  opacity: 0;
}

.walletconnect-qrcode__notification.notification__show {
  opacity: 1;
}

@media only screen and (max-width: 768px) {
  .walletconnect-modal__header {
    height: 130px;
  }
  .walletconnect-modal__base {
    overflow: auto;
  }
}

@media only screen and (min-device-width: 415px) and (max-width: 768px) {
  #content {
    max-width: 768px;
    box-sizing: border-box;
  }
}

@media only screen and (min-width: 375px) and (max-width: 415px) {
  #content {
    max-width: 414px;
    box-sizing: border-box;
  }
}

@media only screen and (min-width: 320px) and (max-width: 375px) {
  #content {
    max-width: 375px;
    box-sizing: border-box;
  }
}

@media only screen and (max-width: 320px) {
  #content {
    max-width: 320px;
    box-sizing: border-box;
  }
}

.walletconnect-modal__base {
  -webkit-font-smoothing: antialiased;
  background: #ffffff;
  border-radius: 24px;
  box-shadow: 0 10px 50px 5px rgba(0, 0, 0, 0.4);
  font-family: ui-rounded, "SF Pro Rounded", "SF Pro Text", medium-content-sans-serif-font,
    -apple-system, BlinkMacSystemFont, ui-sans-serif, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
    "Open Sans", "Helvetica Neue", sans-serif;
  margin-top: 41px;
  padding: 24px 24px 22px;
  pointer-events: auto;
  position: relative;
  text-align: center;
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  will-change: transform;
  overflow: visible;
  transform: translateY(-50%);
  top: 50%;
  max-width: 500px;
  margin: auto;
}

@media only screen and (max-width: 320px) {
  .walletconnect-modal__base {
    padding: 24px 12px;
  }
}

.walletconnect-modal__base .hidden {
  transform: translateY(150%);
  transition: 0.125s cubic-bezier(0.4, 0, 1, 1);
}

.walletconnect-modal__header {
  align-items: center;
  display: flex;
  height: 26px;
  left: 0;
  justify-content: space-between;
  position: absolute;
  top: -42px;
  width: 100%;
}

.walletconnect-modal__base .wc-logo {
  align-items: center;
  display: flex;
  height: 26px;
  margin-top: 15px;
  padding-bottom: 15px;
  pointer-events: auto;
}

.walletconnect-modal__base .wc-logo div {
  background-color: #3399ff;
  height: 21px;
  margin-right: 5px;
  mask-image: url("images/wc-logo.svg") center no-repeat;
  width: 32px;
}

.walletconnect-modal__base .wc-logo p {
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
  margin: 0;
}

.walletconnect-modal__base h2 {
  color: rgba(60, 66, 82, 0.6);
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 1.1875em;
  margin: 0 0 19px 0;
  text-align: center;
  width: 100%;
}

.walletconnect-modal__base__row {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  height: 56px;
  justify-content: space-between;
  padding: 0 15px;
  position: relative;
  margin: 0px 0px 8px;
  text-align: left;
  transition: 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  will-change: transform;
  text-decoration: none;
}

.walletconnect-modal__base__row:hover {
  background: rgba(60, 66, 82, 0.06);
}

.walletconnect-modal__base__row:active {
  background: rgba(60, 66, 82, 0.06);
  transform: scale(0.975);
  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.walletconnect-modal__base__row__h3 {
  color: #25292e;
  font-size: 20px;
  font-weight: 700;
  margin: 0;
  padding-bottom: 3px;
}

.walletconnect-modal__base__row__right {
  align-items: center;
  display: flex;
  justify-content: center;
}

.walletconnect-modal__base__row__right__app-icon {
  border-radius: 8px;
  height: 34px;
  margin: 0 11px 2px 0;
  width: 34px;
  background-size: 100%;
  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);
}

.walletconnect-modal__base__row__right__caret {
  height: 18px;
  opacity: 0.3;
  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  width: 8px;
  will-change: opacity;
}

.walletconnect-modal__base__row:hover .caret,
.walletconnect-modal__base__row:active .caret {
  opacity: 0.6;
}

.walletconnect-modal__mobile__toggle {
  width: 80%;
  display: flex;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 18px;
  background: #d4d5d9;
}

.walletconnect-modal__single_wallet {
  display: flex;
  justify-content: center;
  margin-top: 7px;
  margin-bottom: 18px;
}

.walletconnect-modal__single_wallet a {
  cursor: pointer;
  color: rgb(64, 153, 255);
  font-size: 21px;
  font-weight: 800;
  text-decoration: none !important;
  margin: 0 auto;
}

.walletconnect-modal__mobile__toggle_selector {
  width: calc(50% - 8px);
  background: white;
  position: absolute;
  border-radius: 5px;
  height: calc(100% - 8px);
  top: 4px;
  transition: all 0.2s ease-in-out;
  transform: translate3d(4px, 0, 0);
}

.walletconnect-modal__mobile__toggle.right__selected .walletconnect-modal__mobile__toggle_selector {
  transform: translate3d(calc(100% + 12px), 0, 0);
}

.walletconnect-modal__mobile__toggle a {
  font-size: 12px;
  width: 50%;
  text-align: center;
  padding: 8px;
  margin: 0;
  font-weight: 600;
  z-index: 1;
}

.walletconnect-modal__footer {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

@media only screen and (max-width: 768px) {
  .walletconnect-modal__footer {
    margin-top: 5vw;
  }
}

.walletconnect-modal__footer a {
  cursor: pointer;
  color: #898d97;
  font-size: 15px;
  margin: 0 auto;
}

@media only screen and (max-width: 320px) {
  .walletconnect-modal__footer a {
    font-size: 14px;
  }
}

.walletconnect-connect__buttons__wrapper {
  max-height: 44vh;
}

.walletconnect-connect__buttons__wrapper__android {
  margin: 50% 0;
}

.walletconnect-connect__buttons__wrapper__wrap {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 10px 0;
}

@media only screen and (min-width: 768px) {
  .walletconnect-connect__buttons__wrapper__wrap {
    margin-top: 40px;
  }
}

.walletconnect-connect__button {
  background-color: rgb(64, 153, 255);
  padding: 12px;
  border-radius: 8px;
  text-decoration: none;
  color: rgb(255, 255, 255);
  font-weight: 500;
}

.walletconnect-connect__button__icon_anchor {
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 8px;
  width: 42px;
  justify-self: center;
  flex-direction: column;
  text-decoration: none !important;
}

@media only screen and (max-width: 320px) {
  .walletconnect-connect__button__icon_anchor {
    margin: 4px;
  }
}

.walletconnect-connect__button__icon {
  border-radius: 10px;
  height: 42px;
  margin: 0;
  width: 42px;
  background-size: cover !important;
  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);
}

.walletconnect-connect__button__text {
  color: #424952;
  font-size: 2.7vw;
  text-decoration: none !important;
  padding: 0;
  margin-top: 1.8vw;
  font-weight: 600;
}

@media only screen and (min-width: 768px) {
  .walletconnect-connect__button__text {
    font-size: 16px;
    margin-top: 12px;
  }
}

.walletconnect-search__input {
  border: none;
  background: #d4d5d9;
  border-style: none;
  padding: 8px 16px;
  outline: none;
  font-style: normal;
  font-stretch: normal;
  font-size: 16px;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  border-radius: 8px;
  width: calc(100% - 16px);
  margin: 0;
  margin-bottom: 8px;
}
`;
typeof Symbol < "u" && (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator")));
typeof Symbol < "u" && (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator")));

function ju(t, e) {
    try {
        var r = t();
    } catch (n) {
        return e(n);
    }
    return r && r.then ? r.then(void 0, e) : r;
}
var Qu = "data:image/svg+xml,%3Csvg height='185' viewBox='0 0 300 185' width='300' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m61.4385429 36.2562612c48.9112241-47.8881663 128.2119871-47.8881663 177.1232091 0l5.886545 5.7634174c2.445561 2.3944081 2.445561 6.2765112 0 8.6709204l-20.136695 19.715503c-1.222781 1.1972051-3.2053 1.1972051-4.428081 0l-8.100584-7.9311479c-34.121692-33.4079817-89.443886-33.4079817-123.5655788 0l-8.6750562 8.4936051c-1.2227816 1.1972041-3.205301 1.1972041-4.4280806 0l-20.1366949-19.7155031c-2.4455612-2.3944092-2.4455612-6.2765122 0-8.6709204zm218.7677961 40.7737449 17.921697 17.546897c2.445549 2.3943969 2.445563 6.2764769.000031 8.6708899l-80.810171 79.121134c-2.445544 2.394426-6.410582 2.394453-8.85616.000062-.00001-.00001-.000022-.000022-.000032-.000032l-57.354143-56.154572c-.61139-.598602-1.60265-.598602-2.21404 0-.000004.000004-.000007.000008-.000011.000011l-57.3529212 56.154531c-2.4455368 2.394432-6.4105755 2.394472-8.8561612.000087-.0000143-.000014-.0000296-.000028-.0000449-.000044l-80.81241943-79.122185c-2.44556021-2.394408-2.44556021-6.2765115 0-8.6709197l17.92172963-17.5468673c2.4455602-2.3944082 6.4105989-2.3944082 8.8561602 0l57.3549775 56.155357c.6113908.598602 1.602649.598602 2.2140398 0 .0000092-.000009.0000174-.000017.0000265-.000024l57.3521031-56.155333c2.445505-2.3944633 6.410544-2.3945531 8.856161-.0002.000034.0000336.000068.0000673.000101.000101l57.354902 56.155432c.61139.598601 1.60265.598601 2.21404 0l57.353975-56.1543249c2.445561-2.3944092 6.410599-2.3944092 8.85616 0z' fill='%233b99fc'/%3E%3C/svg%3E",
    Gu = "WalletConnect",
    Zu = 300,
    Xu = "rgb(64, 153, 255)",
    $o = "walletconnect-wrapper",
    Qn = "walletconnect-style-sheet",
    Wo = "walletconnect-qrcode-modal",
    el = "walletconnect-qrcode-close",
    Ho = "walletconnect-qrcode-text",
    tl = "walletconnect-connect-button";

function rl(t) {
    return D.createElement("div", {
        className: "walletconnect-modal__header"
    }, D.createElement("img", {
        src: Qu,
        className: "walletconnect-modal__headerLogo"
    }), D.createElement("p", null, Gu), D.createElement("div", {
        className: "walletconnect-modal__close__wrapper",
        onClick: t.onClose
    }, D.createElement("div", {
        id: el,
        className: "walletconnect-modal__close__icon"
    }, D.createElement("div", {
        className: "walletconnect-modal__close__line1"
    }), D.createElement("div", {
        className: "walletconnect-modal__close__line2"
    }))));
}

function nl(t) {
    return D.createElement("a", {
        className: "walletconnect-connect__button",
        href: t.href,
        id: tl + "-" + t.name,
        onClick: t.onClick,
        rel: "noopener noreferrer",
        style: {
            backgroundColor: t.color
        },
        target: "_blank"
    }, t.name);
}
var il = "data:image/svg+xml,%3Csvg fill='none' height='18' viewBox='0 0 8 18' width='8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath clip-rule='evenodd' d='m.586301.213898c-.435947.33907-.5144813.967342-.175411 1.403292l4.87831 6.27212c.28087.36111.28087.86677 0 1.22788l-4.878311 6.27211c-.33907.436-.260536 1.0642.175412 1.4033.435949.3391 1.064219.2605 1.403289-.1754l4.87832-6.2721c.84259-1.08336.84259-2.60034 0-3.68367l-4.87832-6.27212c-.33907-.4359474-.96734-.514482-1.403289-.175412z' fill='%233c4252' fill-rule='evenodd'/%3E%3C/svg%3E";

function ol(t) {
    var e = t.color,
        r = t.href,
        n = t.name,
        u = t.logo,
        o = t.onClick;
    return D.createElement("a", {
        className: "walletconnect-modal__base__row",
        href: r,
        onClick: o,
        rel: "noopener noreferrer",
        target: "_blank"
    }, D.createElement("h3", {
        className: "walletconnect-modal__base__row__h3"
    }, n), D.createElement("div", {
        className: "walletconnect-modal__base__row__right"
    }, D.createElement("div", {
        className: "walletconnect-modal__base__row__right__app-icon",
        style: {
            background: "url('" + u + "') " + e,
            backgroundSize: "100%"
        }
    }), D.createElement("img", {
        src: il,
        className: "walletconnect-modal__base__row__right__caret"
    })));
}

function al(t) {
    var e = t.color,
        r = t.href,
        n = t.name,
        u = t.logo,
        o = t.onClick,
        p = window.innerWidth < 768 ? (n.length > 8 ? 2.5 : 2.7) + "vw" : "inherit";
    return D.createElement("a", {
        className: "walletconnect-connect__button__icon_anchor",
        href: r,
        onClick: o,
        rel: "noopener noreferrer",
        target: "_blank"
    }, D.createElement("div", {
        className: "walletconnect-connect__button__icon",
        style: {
            background: "url('" + u + "') " + e,
            backgroundSize: "100%"
        }
    }), D.createElement("div", {
        style: {
            fontSize: p
        },
        className: "walletconnect-connect__button__text"
    }, n));
}
var sl = 5,
    yr = 12;

function cl(t) {
    var e = Ne.isAndroid(),
        r = D.useState(""),
        n = r[0],
        u = r[1],
        o = D.useState(""),
        p = o[0],
        f = o[1],
        b = D.useState(1),
        I = b[0],
        E = b[1],
        N = p ? t.links.filter(function(B) {
            return B.name.toLowerCase().includes(p.toLowerCase());
        }) : t.links,
        L = t.errorMessage,
        P = p || N.length > sl,
        U = Math.ceil(N.length / yr),
        $ = [(I - 1) * yr + 1, I * yr],
        S = N.length ? N.filter(function(B, W) {
            return W + 1 >= $[0] && W + 1 <= $[1];
        }) : [],
        k = !e && U > 1,
        T = void 0;

    function R(B) {
        u(B.target.value), clearTimeout(T), B.target.value ? T = setTimeout(function() {
            f(B.target.value), E(1);
        }, 1e3) : (u(""), f(""), E(1));
    }
    return D.createElement("div", null, D.createElement("p", {
        id: Ho,
        className: "walletconnect-qrcode__text"
    }, e ? t.text.connect_mobile_wallet : t.text.choose_preferred_wallet), !e && D.createElement("input", {
        className: "walletconnect-search__input",
        placeholder: "Search",
        value: n,
        onChange: R
    }), D.createElement("div", {
        className: "walletconnect-connect__buttons__wrapper" + (e ? "__android" : P && N.length ? "__wrap" : "")
    }, e ? D.createElement(nl, {
        name: t.text.connect,
        color: Xu,
        href: t.uri,
        onClick: D.useCallback(function() {
            Ne.saveMobileLinkInfo({
                name: "Unknown",
                href: t.uri
            });
        }, [])
    }) : S.length ? S.map(function(B) {
        var W = B.color,
            H = B.name,
            Y = B.shortName,
            j = B.logo,
            oe = Ne.formatIOSMobile(t.uri, B),
            y = D.useCallback(function() {
                Ne.saveMobileLinkInfo({
                    name: H,
                    href: oe
                });
            }, [S]);
        return P ? D.createElement(al, {
            color: W,
            href: oe,
            name: Y || H,
            logo: j,
            onClick: y
        }) : D.createElement(ol, {
            color: W,
            href: oe,
            name: H,
            logo: j,
            onClick: y
        });
    }) : D.createElement(D.Fragment, null, D.createElement("p", null, L.length ? t.errorMessage : t.links.length && !N.length ? t.text.no_wallets_found : t.text.loading))), k && D.createElement("div", {
        className: "walletconnect-modal__footer"
    }, Array(U).fill(0).map(function(B, W) {
        var H = W + 1,
            Y = I === H;
        return D.createElement("a", {
            style: {
                margin: "auto 10px",
                fontWeight: Y ? "bold" : "normal"
            },
            onClick: function() {
                return E(H);
            }
        }, H);
    })));
}

function ul(t) {
    var e = !!t.message.trim();
    return D.createElement("div", {
        className: "walletconnect-qrcode__notification" + (e ? " notification__show" : "")
    }, t.message);
}
var ll = function(t) {
    try {
        var e = "";
        return Promise.resolve(Do.toString(t, {
            margin: 0,
            type: "svg"
        })).then(function(r) {
            return typeof r == "string" && (e = r.replace("<svg", '<svg class="walletconnect-qrcode__image"')), e;
        });
    } catch (r) {
        return Promise.reject(r);
    }
};

function fl(t) {
    var e = D.useState(""),
        r = e[0],
        n = e[1],
        u = D.useState(""),
        o = u[0],
        p = u[1];
    D.useEffect(function() {
        try {
            return Promise.resolve(ll(t.uri)).then(function(b) {
                p(b);
            });
        } catch (b) {
            Promise.reject(b);
        }
    }, []);
    var f = function() {
        var b = Ku(t.uri);
        b ? (n(t.text.copied_to_clipboard), setInterval(function() {
            return n("");
        }, 1200)) : (n("Error"), setInterval(function() {
            return n("");
        }, 1200));
    };
    return D.createElement("div", null, D.createElement("p", {
        id: Ho,
        className: "walletconnect-qrcode__text"
    }, t.text.scan_qrcode_with_wallet), D.createElement("div", {
        dangerouslySetInnerHTML: {
            __html: o
        }
    }), D.createElement("div", {
        className: "walletconnect-modal__footer"
    }, D.createElement("a", {
        onClick: f
    }, t.text.copy_to_clipboard)), D.createElement(ul, {
        message: r
    }));
}

function hl(t) {
    var e = Ne.isAndroid(),
        r = Ne.isMobile(),
        n = r ? t.qrcodeModalOptions && t.qrcodeModalOptions.mobileLinks ? t.qrcodeModalOptions.mobileLinks : void 0 : t.qrcodeModalOptions && t.qrcodeModalOptions.desktopLinks ? t.qrcodeModalOptions.desktopLinks : void 0,
        u = D.useState(!1),
        o = u[0],
        p = u[1],
        f = D.useState(!1),
        b = f[0],
        I = f[1],
        E = D.useState(!r),
        N = E[0],
        L = E[1],
        P = {
            mobile: r,
            text: t.text,
            uri: t.uri,
            qrcodeModalOptions: t.qrcodeModalOptions
        },
        U = D.useState(""),
        $ = U[0],
        S = U[1],
        k = D.useState(!1),
        T = k[0],
        R = k[1],
        B = D.useState([]),
        W = B[0],
        H = B[1],
        Y = D.useState(""),
        j = Y[0],
        oe = Y[1],
        y = function() {
            b || o || n && !n.length || W.length > 0 || D.useEffect(function() {
                var l = function() {
                    try {
                        if (e)
                            return Promise.resolve();
                        p(!0);
                        var h = ju(function() {
                            var d = t.qrcodeModalOptions && t.qrcodeModalOptions.registryUrl ? t.qrcodeModalOptions.registryUrl : Ne.getWalletRegistryUrl();
                            return Promise.resolve(fetch(d)).then(function(v) {
                                return Promise.resolve(v.json()).then(function(M) {
                                    var C = M.listings,
                                        m = r ? "mobile" : "desktop",
                                        a = Ne.getMobileLinkRegistry(Ne.formatMobileRegistry(C, m), n);
                                    p(!1), I(!0), oe(a.length ? "" : t.text.no_supported_wallets), H(a);
                                    var _ = a.length === 1;
                                    _ && (S(Ne.formatIOSMobile(t.uri, a[0])), L(!0)), R(_);
                                });
                            });
                        }, function(d) {
                            p(!1), I(!0), oe(t.text.something_went_wrong), console.error(d);
                        });
                        return Promise.resolve(h && h.then ? h.then(function() {}) : void 0);
                    } catch (d) {
                        return Promise.reject(d);
                    }
                };
                l();
            });
        };
    y();
    var i = r ? N : !N;
    return D.createElement("div", {
        id: Wo,
        className: "walletconnect-qrcode__base animated fadeIn"
    }, D.createElement("div", {
        className: "walletconnect-modal__base"
    }, D.createElement(rl, {
        onClose: t.onClose
    }), T && N ? D.createElement("div", {
        className: "walletconnect-modal__single_wallet"
    }, D.createElement("a", {
        onClick: function() {
            return Ne.saveMobileLinkInfo({
                name: W[0].name,
                href: $
            });
        },
        href: $,
        rel: "noopener noreferrer",
        target: "_blank"
    }, t.text.connect_with + " " + (T ? W[0].name : "") + " ›")) : e || o || !o && W.length ? D.createElement("div", {
        className: "walletconnect-modal__mobile__toggle" + (i ? " right__selected" : "")
    }, D.createElement("div", {
        className: "walletconnect-modal__mobile__toggle_selector"
    }), r ? D.createElement(D.Fragment, null, D.createElement("a", {
        onClick: function() {
            return L(!1), y();
        }
    }, t.text.mobile), D.createElement("a", {
        onClick: function() {
            return L(!0);
        }
    }, t.text.qrcode)) : D.createElement(D.Fragment, null, D.createElement("a", {
        onClick: function() {
            return L(!0);
        }
    }, t.text.qrcode), D.createElement("a", {
        onClick: function() {
            return L(!1), y();
        }
    }, t.text.desktop))) : null, D.createElement("div", null, N || !e && !o && !W.length ? D.createElement(fl, Object.assign({}, P)) : D.createElement(cl, Object.assign({},
        P, {
            links: W,
            errorMessage: j
        }
    )))));
}
var dl = {
        choose_preferred_wallet: "Wähle bevorzugte Wallet",
        connect_mobile_wallet: "Verbinde mit Mobile Wallet",
        scan_qrcode_with_wallet: "Scanne den QR-code mit einer WalletConnect kompatiblen Wallet",
        connect: "Verbinden",
        qrcode: "QR-Code",
        mobile: "Mobile",
        desktop: "Desktop",
        copy_to_clipboard: "In die Zwischenablage kopieren",
        copied_to_clipboard: "In die Zwischenablage kopiert!",
        connect_with: "Verbinden mit Hilfe von",
        loading: "Laden...",
        something_went_wrong: "Etwas ist schief gelaufen",
        no_supported_wallets: "Es gibt noch keine unterstützten Wallet",
        no_wallets_found: "keine Wallet gefunden"
    },
    pl = {
        choose_preferred_wallet: "Choose your preferred wallet",
        connect_mobile_wallet: "Connect to Mobile Wallet",
        scan_qrcode_with_wallet: "Scan QR code with a WalletConnect-compatible wallet",
        connect: "Connect",
        qrcode: "QR Code",
        mobile: "Mobile",
        desktop: "Desktop",
        copy_to_clipboard: "Copy to clipboard",
        copied_to_clipboard: "Copied to clipboard!",
        connect_with: "Connect with",
        loading: "Loading...",
        something_went_wrong: "Something went wrong",
        no_supported_wallets: "There are no supported wallets yet",
        no_wallets_found: "No wallets found"
    },
    gl = {
        choose_preferred_wallet: "Elige tu billetera preferida",
        connect_mobile_wallet: "Conectar a billetera móvil",
        scan_qrcode_with_wallet: "Escanea el código QR con una billetera compatible con WalletConnect",
        connect: "Conectar",
        qrcode: "Código QR",
        mobile: "Móvil",
        desktop: "Desktop",
        copy_to_clipboard: "Copiar",
        copied_to_clipboard: "Copiado!",
        connect_with: "Conectar mediante",
        loading: "Cargando...",
        something_went_wrong: "Algo salió mal",
        no_supported_wallets: "Todavía no hay billeteras compatibles",
        no_wallets_found: "No se encontraron billeteras"
    },
    ml = {
        choose_preferred_wallet: "Choisissez votre portefeuille préféré",
        connect_mobile_wallet: "Se connecter au portefeuille mobile",
        scan_qrcode_with_wallet: "Scannez le QR code avec un portefeuille compatible WalletConnect",
        connect: "Se connecter",
        qrcode: "QR Code",
        mobile: "Mobile",
        desktop: "Desktop",
        copy_to_clipboard: "Copier",
        copied_to_clipboard: "Copié!",
        connect_with: "Connectez-vous à l'aide de",
        loading: "Chargement...",
        something_went_wrong: "Quelque chose a mal tourné",
        no_supported_wallets: "Il n'y a pas encore de portefeuilles pris en charge",
        no_wallets_found: "Aucun portefeuille trouvé"
    },
    _l = {
        choose_preferred_wallet: "원하는 지갑을 선택하세요",
        connect_mobile_wallet: "모바일 지갑과 연결",
        scan_qrcode_with_wallet: "WalletConnect 지원 지갑에서 QR코드를 스캔하세요",
        connect: "연결",
        qrcode: "QR 코드",
        mobile: "모바일",
        desktop: "데스크탑",
        copy_to_clipboard: "클립보드에 복사",
        copied_to_clipboard: "클립보드에 복사되었습니다!",
        connect_with: "와 연결하다",
        loading: "로드 중...",
        something_went_wrong: "문제가 발생했습니다.",
        no_supported_wallets: "아직 지원되는 지갑이 없습니다",
        no_wallets_found: "지갑을 찾을 수 없습니다"
    },
    vl = {
        choose_preferred_wallet: "Escolha sua carteira preferida",
        connect_mobile_wallet: "Conectar-se à carteira móvel",
        scan_qrcode_with_wallet: "Ler o código QR com uma carteira compatível com WalletConnect",
        connect: "Conectar",
        qrcode: "Código QR",
        mobile: "Móvel",
        desktop: "Desktop",
        copy_to_clipboard: "Copiar",
        copied_to_clipboard: "Copiado!",
        connect_with: "Ligar por meio de",
        loading: "Carregamento...",
        something_went_wrong: "Algo correu mal",
        no_supported_wallets: "Ainda não há carteiras suportadas",
        no_wallets_found: "Nenhuma carteira encontrada"
    },
    wl = {
        choose_preferred_wallet: "选择你的钱包",
        connect_mobile_wallet: "连接至移动端钱包",
        scan_qrcode_with_wallet: "使用兼容 WalletConnect 的钱包扫描二维码",
        connect: "连接",
        qrcode: "二维码",
        mobile: "移动",
        desktop: "桌面",
        copy_to_clipboard: "复制到剪贴板",
        copied_to_clipboard: "复制到剪贴板成功！",
        connect_with: "通过以下方式连接",
        loading: "正在加载...",
        something_went_wrong: "出了问题",
        no_supported_wallets: "目前还没有支持的钱包",
        no_wallets_found: "没有找到钱包"
    },
    yl = {
        choose_preferred_wallet: "کیف پول مورد نظر خود را انتخاب کنید",
        connect_mobile_wallet: "به کیف پول موبایل وصل شوید",
        scan_qrcode_with_wallet: "کد QR را با یک کیف پول سازگار با WalletConnect اسکن کنید",
        connect: "اتصال",
        qrcode: "کد QR",
        mobile: "سیار",
        desktop: "دسکتاپ",
        copy_to_clipboard: "کپی به کلیپ بورد",
        copied_to_clipboard: "در کلیپ بورد کپی شد!",
        connect_with: "ارتباط با",
        loading: "...بارگذاری",
        something_went_wrong: "مشکلی پیش آمد",
        no_supported_wallets: "هنوز هیچ کیف پول پشتیبانی شده ای وجود ندارد",
        no_wallets_found: "هیچ کیف پولی پیدا نشد"
    },
    Gn = {
        de: dl,
        en: pl,
        es: gl,
        fr: ml,
        ko: _l,
        pt: vl,
        zh: wl,
        fa: yl
    };

function bl() {
    var t = Ne.getDocumentOrThrow(),
        e = t.getElementById(Qn);
    e && t.head.removeChild(e);
    var r = t.createElement("style");
    r.setAttribute("id", Qn), r.innerText = Yu, t.head.appendChild(r);
}

function Ml() {
    var t = Ne.getDocumentOrThrow(),
        e = t.createElement("div");
    return e.setAttribute("id", $o), t.body.appendChild(e), e;
}

function zo() {
    var t = Ne.getDocumentOrThrow(),
        e = t.getElementById(Wo);
    e && (e.className = e.className.replace("fadeIn", "fadeOut"), setTimeout(function() {
        var r = t.getElementById($o);
        r && t.body.removeChild(r);
    }, Zu));
}

function xl(t) {
    return function() {
        zo(), t && t();
    };
}

function El() {
    var t = Ne.getNavigatorOrThrow().language.split("-")[0] || "en";
    return Gn[t] || Gn.en;
}

function Sl(t, e, r) {
    bl();
    var n = Ml();
    D.render(D.createElement(hl, {
        text: El(),
        uri: t,
        onClose: xl(e),
        qrcodeModalOptions: r
    }), n);
}

function Cl() {
    zo();
}
var Jo = function() {
    return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
};

function kl(t, e, r) {
    console.log(t), Jo() ? Vu(t) : Sl(t, e, r);
}

function Il() {
    Jo() || Cl();
}
var Rl = {
        open: kl,
        close: Il
    },
    Tl = Rl;
class Al extends na {
    constructor(e) {
        super(), this.events = new Xn(), this.accounts = [], this.chainId = 1, this.pending = !1, this.bridge = "https://bridge.walletconnect.org", this.qrcode = !0, this.qrcodeModalOptions = void 0, this.opts = e, this.chainId = (e == null ? void 0 : e.chainId) || this.chainId, this.wc = this.register(e);
    }
    get connected() {
        return typeof this.wc < "u" && this.wc.connected;
    }
    get connecting() {
        return this.pending;
    }
    get connector() {
        return this.wc = this.register(this.opts), this.wc;
    }
    on(e, r) {
        this.events.on(e, r);
    }
    once(e, r) {
        this.events.once(e, r);
    }
    off(e, r) {
        this.events.off(e, r);
    }
    removeListener(e, r) {
        this.events.removeListener(e, r);
    }
    async open(e) {
        if (this.connected) {
            this.onOpen();
            return;
        }
        return new Promise((r, n) => {
            this.on("error", (u) => {
                n(u);
            }), this.on("open", () => {
                r();
            }), this.create(e);
        });
    }
    async close() {
        typeof this.wc > "u" || (this.wc.connected && this.wc.killSession(), this.onClose());
    }
    async send(e) {
        this.wc = this.register(this.opts), this.connected || await this.open(), this.sendPayload(e).then((r) => this.events.emit("payload", r)).catch((r) => this.events.emit("payload", _n(e.id, r.message)));
    }
    register(e) {
        if (this.wc)
            return this.wc;
        this.opts = e || this.opts, this.bridge = e != null && e.connector ? e.connector.bridge : (e == null ? void 0 : e.bridge) || "https://bridge.walletconnect.org", this.qrcode = typeof(e == null ? void 0 : e.qrcode) > "u" || e.qrcode !== !1, this.chainId = typeof(e == null ? void 0 : e.chainId) < "u" ? e.chainId : this.chainId, this.qrcodeModalOptions = e == null ? void 0 : e.qrcodeModalOptions;
        const r = {
            bridge: this.bridge,
            qrcodeModal: this.qrcode ? Tl : void 0,
            qrcodeModalOptions: this.qrcodeModalOptions,
            storageId: e == null ? void 0 : e.storageId,
            signingMethods: e == null ? void 0 : e.signingMethods,
            clientMeta: e == null ? void 0 : e.clientMeta
        };
        if (this.wc = typeof(e == null ? void 0 : e.connector) < "u" ? e.connector : new xc(r), typeof this.wc > "u")
            throw new Error("Failed to register WalletConnect connector");
        return this.wc.accounts.length && (this.accounts = this.wc.accounts), this.wc.chainId && (this.chainId = this.wc.chainId), this.registerConnectorEvents(), this.wc;
    }
    onOpen(e) {
        this.pending = !1, e && (this.wc = e), this.events.emit("open");
    }
    onClose() {
        this.pending = !1, this.wc && (this.wc = void 0), this.events.emit("close");
    }
    onError(e, r = "Failed or Rejected Request", n = -32e3, u) {
        const o = {
            id: e.id,
            jsonrpc: e.jsonrpc,
            error: {
                code: n,
                message: r
            }
        };
        return typeof u < "u" && (o.error.data = u), this.events.emit("payload", o), o;
    }
    create(e) {
        this.wc = this.register(this.opts), this.chainId = e || this.chainId, !(this.connected || this.pending) && (this.pending = !0, this.registerConnectorEvents(), this.wc.createSession({
            chainId: this.chainId
        }).then(() => this.events.emit("created")).catch((r) => this.events.emit("error", r)));
    }
    registerConnectorEvents() {
        this.wc = this.register(this.opts), this.wc.on("connect", (e) => {
            var r, n;
            if (e) {
                this.events.emit("error", e);
                return;
            }
            this.accounts = ((r = this.wc) === null || r === void 0 ? void 0 : r.accounts) || [], this.chainId = ((n = this.wc) === null || n === void 0 ? void 0 : n.chainId) || this.chainId, this.onOpen();
        }), this.wc.on("disconnect", (e) => {
            if (e) {
                this.events.emit("error", e);
                return;
            }
            this.onClose();
        }), this.wc.on("modal_closed", () => {
            this.events.emit("error", new Error("User closed modal"));
        }), this.wc.on("session_update", (e, r) => {
            const {
                accounts: n,
                chainId: u
            } = r.params[0];
            (!this.accounts || n && this.accounts !== n) && (this.accounts = n, this.events.emit("accountsChanged", n)), (!this.chainId || u && this.chainId !== u) && (this.chainId = u, this.events.emit("chainChanged", u));
        });
    }
    async sendPayload(e) {
        this.wc = this.register(this.opts);
        try {
            const r = await this.wc.unsafeSend(e);
            return this.sanitizeResponse(r);
        } catch (r) {
            return this.onError(e, r.message);
        }
    }
    sanitizeResponse(e) {
        return typeof e.error < "u" && typeof e.error.code > "u" ? _n(e.id, e.error.message, e.error.data) : e;
    }
}
class Ll {
    constructor(e) {
        this.events = new Xn(), this.rpc = {
            infuraId: e == null ? void 0 : e.infuraId,
            custom: e == null ? void 0 : e.rpc
        }, this.signer = new vn(new Al(e));
        const r = this.signer.connection.chainId || (e == null ? void 0 : e.chainId) || 1;
        this.http = this.setHttpProvider(r), this.registerEventListeners();
    }
    get connected() {
        return this.signer.connection.connected;
    }
    get connector() {
        return this.signer.connection.connector;
    }
    get accounts() {
        return this.signer.connection.accounts;
    }
    get chainId() {
        return this.signer.connection.chainId;
    }
    get rpcUrl() {
        var e;
        return ((e = this.http) === null || e === void 0 ? void 0 : e.connection).url || "";
    }
    async request(e) {
        switch (e.method) {
            case "eth_requestAccounts":
                return await this.connect(), this.signer.connection.accounts;
            case "eth_accounts":
                return this.signer.connection.accounts;
            case "eth_chainId":
                return this.signer.connection.chainId;
        }
        if (qr.includes(e.method))
            return this.signer.request(e);
        if (typeof this.http > "u")
            throw new Error(`Cannot request JSON-RPC method (${e.method}) without provided rpc url`);
        return this.http.request(e);
    }
    sendAsync(e, r) {
        this.request(e).then((n) => r(null, n)).catch((n) => r(n, void 0));
    }
    async enable() {
        return await this.request({
            method: "eth_requestAccounts"
        });
    }
    async connect() {
        this.signer.connection.connected || await this.signer.connect();
    }
    async disconnect() {
        this.signer.connection.connected && await this.signer.disconnect();
    }
    on(e, r) {
        this.events.on(e, r);
    }
    once(e, r) {
        this.events.once(e, r);
    }
    removeListener(e, r) {
        this.events.removeListener(e, r);
    }
    off(e, r) {
        this.events.off(e, r);
    }
    get isWalletConnect() {
        return !0;
    }
    registerEventListeners() {
        this.signer.connection.on("accountsChanged", (e) => {
            this.events.emit("accountsChanged", e);
        }), this.signer.connection.on("chainChanged", (e) => {
            this.http = this.setHttpProvider(e), this.events.emit("chainChanged", e);
        }), this.signer.on("disconnect", () => {
            this.events.emit("disconnect");
        });
    }
    setHttpProvider(e) {
        const r = Ms(e, this.rpc);
        return typeof r > "u" ? void 0 : new vn(new ia(r));
    }
}
export {
    Ll as
    default
};