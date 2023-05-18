import {
    e as st
} from "./events-276ce9ce.js";
import {
    f as K
} from "./main-b9bbb17f.js";
const vt = "PARSE_ERROR",
    yt = "INVALID_REQUEST",
    _t = "METHOD_NOT_FOUND",
    pt = "INVALID_PARAMS",
    at = "INTERNAL_ERROR",
    M = "SERVER_ERROR",
    wt = [-32700, -32600, -32601, -32602, -32603],
    C = {
        [vt]: {
            code: -32700,
            message: "Parse error"
        },
        [yt]: {
            code: -32600,
            message: "Invalid Request"
        },
        [_t]: {
            code: -32601,
            message: "Method not found"
        },
        [pt]: {
            code: -32602,
            message: "Invalid params"
        },
        [at]: {
            code: -32603,
            message: "Internal error"
        },
        [M]: {
            code: -32e3,
            message: "Server error"
        }
    },
    ct = M;

function mt(e) {
    return wt.includes(e);
}

function Y(e) {
    return Object.keys(C).includes(e) ? C[e] : C[ct];
}

function bt(e) {
    const t = Object.values(C).find((i) => i.code === e);
    return t || C[ct];
}

function Et(e, t, i) {
    return e.message.includes("getaddrinfo ENOTFOUND") || e.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${i} RPC url at ${t}`) : e;
}
var Rt = {},
    N = {},
    Ot = {
        get exports() {
            return N;
        },
        set exports(e) {
            N = e;
        }
    };
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
(function(e) {
    var t, i, l, y, v, P, F, x, U, j, D, J, H, R, B, q, V, $, W, G, X, Q, z;
    (function(h) {
        var L = typeof globalThis == "object" ? globalThis : typeof self == "object" ? self : typeof this == "object" ? this : {};
        h(n(L, n(e.exports)));

        function n(r, o) {
            return r !== L && (typeof Object.create == "function" ? Object.defineProperty(r, "__esModule", {
                    value: !0
                }) : r.__esModule = !0),
                function(a, c) {
                    return r[a] = o ? o(a, c) : c;
                };
        }
    })(function(h) {
        var L = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(n, r) {
            n.__proto__ = r;
        } || function(n, r) {
            for (var o in r)
                r.hasOwnProperty(o) && (n[o] = r[o]);
        };
        t = function(n, r) {
            L(n, r);

            function o() {
                this.constructor = n;
            }
            n.prototype = r === null ? Object.create(r) : (o.prototype = r.prototype, new o());
        }, i = Object.assign || function(n) {
            for (var r, o = 1, a = arguments.length; o < a; o++) {
                r = arguments[o];
                for (var c in r)
                    Object.prototype.hasOwnProperty.call(r, c) && (n[c] = r[c]);
            }
            return n;
        }, l = function(n, r) {
            var o = {};
            for (var a in n)
                Object.prototype.hasOwnProperty.call(n, a) && r.indexOf(a) < 0 && (o[a] = n[a]);
            if (n != null && typeof Object.getOwnPropertySymbols == "function")
                for (var c = 0, a = Object.getOwnPropertySymbols(n); c < a.length; c++)
                    r.indexOf(a[c]) < 0 && Object.prototype.propertyIsEnumerable.call(n, a[c]) && (o[a[c]] = n[a[c]]);
            return o;
        }, y = function(n, r, o, a) {
            var c = arguments.length,
                s = c < 3 ? r : a === null ? a = Object.getOwnPropertyDescriptor(r, o) : a,
                u;
            if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
                s = Reflect.decorate(n, r, o, a);
            else
                for (var g = n.length - 1; g >= 0; g--)
                    (u = n[g]) && (s = (c < 3 ? u(s) : c > 3 ? u(r, o, s) : u(r, o)) || s);
            return c > 3 && s && Object.defineProperty(r, o, s), s;
        }, v = function(n, r) {
            return function(o, a) {
                r(o, a, n);
            };
        }, P = function(n, r) {
            if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
                return Reflect.metadata(n, r);
        }, F = function(n, r, o, a) {
            function c(s) {
                return s instanceof o ? s : new o(function(u) {
                    u(s);
                });
            }
            return new(o || (o = Promise))(function(s, u) {
                function g(p) {
                    try {
                        f(a.next(p));
                    } catch (O) {
                        u(O);
                    }
                }

                function w(p) {
                    try {
                        f(a.throw(p));
                    } catch (O) {
                        u(O);
                    }
                }

                function f(p) {
                    p.done ? s(p.value) : c(p.value).then(g, w);
                }
                f((a = a.apply(n, r || [])).next());
            });
        }, x = function(n, r) {
            var o = {
                    label: 0,
                    sent: function() {
                        if (s[0] & 1)
                            throw s[1];
                        return s[1];
                    },
                    trys: [],
                    ops: []
                },
                a, c, s, u;
            return u = {
                next: g(0),
                throw: g(1),
                return: g(2)
            }, typeof Symbol == "function" && (u[Symbol.iterator] = function() {
                return this;
            }), u;

            function g(f) {
                return function(p) {
                    return w([f, p]);
                };
            }

            function w(f) {
                if (a)
                    throw new TypeError("Generator is already executing.");
                for (; o;)
                    try {
                        if (a = 1, c && (s = f[0] & 2 ? c.return : f[0] ? c.throw || ((s = c.return) && s.call(c), 0) : c.next) && !(s = s.call(c, f[1])).done)
                            return s;
                        switch (c = 0, s && (f = [f[0] & 2, s.value]), f[0]) {
                            case 0:
                            case 1:
                                s = f;
                                break;
                            case 4:
                                return o.label++, {
                                    value: f[1],
                                    done: !1
                                };
                            case 5:
                                o.label++, c = f[1], f = [0];
                                continue;
                            case 7:
                                f = o.ops.pop(), o.trys.pop();
                                continue;
                            default:
                                if (s = o.trys, !(s = s.length > 0 && s[s.length - 1]) && (f[0] === 6 || f[0] === 2)) {
                                    o = 0;
                                    continue;
                                }
                                if (f[0] === 3 && (!s || f[1] > s[0] && f[1] < s[3])) {
                                    o.label = f[1];
                                    break;
                                }
                                if (f[0] === 6 && o.label < s[1]) {
                                    o.label = s[1], s = f;
                                    break;
                                }
                                if (s && o.label < s[2]) {
                                    o.label = s[2], o.ops.push(f);
                                    break;
                                }
                                s[2] && o.ops.pop(), o.trys.pop();
                                continue;
                        }
                        f = r.call(n, o);
                    } catch (p) {
                        f = [6, p], c = 0;
                    } finally {
                        a = s = 0;
                    }
                if (f[0] & 5)
                    throw f[1];
                return {
                    value: f[0] ? f[1] : void 0,
                    done: !0
                };
            }
        }, z = function(n, r, o, a) {
            a === void 0 && (a = o), n[a] = r[o];
        }, U = function(n, r) {
            for (var o in n)
                o !== "default" && !r.hasOwnProperty(o) && (r[o] = n[o]);
        }, j = function(n) {
            var r = typeof Symbol == "function" && Symbol.iterator,
                o = r && n[r],
                a = 0;
            if (o)
                return o.call(n);
            if (n && typeof n.length == "number")
                return {
                    next: function() {
                        return n && a >= n.length && (n = void 0), {
                            value: n && n[a++],
                            done: !n
                        };
                    }
                };
            throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
        }, D = function(n, r) {
            var o = typeof Symbol == "function" && n[Symbol.iterator];
            if (!o)
                return n;
            var a = o.call(n),
                c, s = [],
                u;
            try {
                for (;
                    (r === void 0 || r-- > 0) && !(c = a.next()).done;)
                    s.push(c.value);
            } catch (g) {
                u = {
                    error: g
                };
            } finally {
                try {
                    c && !c.done && (o = a.return) && o.call(a);
                } finally {
                    if (u)
                        throw u.error;
                }
            }
            return s;
        }, J = function() {
            for (var n = [], r = 0; r < arguments.length; r++)
                n = n.concat(D(arguments[r]));
            return n;
        }, H = function() {
            for (var n = 0, r = 0, o = arguments.length; r < o; r++)
                n += arguments[r].length;
            for (var a = Array(n), c = 0, r = 0; r < o; r++)
                for (var s = arguments[r], u = 0, g = s.length; u < g; u++, c++)
                    a[c] = s[u];
            return a;
        }, R = function(n) {
            return this instanceof R ? (this.v = n, this) : new R(n);
        }, B = function(n, r, o) {
            if (!Symbol.asyncIterator)
                throw new TypeError("Symbol.asyncIterator is not defined.");
            var a = o.apply(n, r || []),
                c, s = [];
            return c = {}, u("next"), u("throw"), u("return"), c[Symbol.asyncIterator] = function() {
                return this;
            }, c;

            function u(_) {
                a[_] && (c[_] = function(T) {
                    return new Promise(function(A, gt) {
                        s.push([_, T, A, gt]) > 1 || g(_, T);
                    });
                });
            }

            function g(_, T) {
                try {
                    w(a[_](T));
                } catch (A) {
                    O(s[0][3], A);
                }
            }

            function w(_) {
                _.value instanceof R ? Promise.resolve(_.value.v).then(f, p) : O(s[0][2], _);
            }

            function f(_) {
                g("next", _);
            }

            function p(_) {
                g("throw", _);
            }

            function O(_, T) {
                _(T), s.shift(), s.length && g(s[0][0], s[0][1]);
            }
        }, q = function(n) {
            var r, o;
            return r = {}, a("next"), a("throw", function(c) {
                throw c;
            }), a("return"), r[Symbol.iterator] = function() {
                return this;
            }, r;

            function a(c, s) {
                r[c] = n[c] ? function(u) {
                    return (o = !o) ? {
                        value: R(n[c](u)),
                        done: c === "return"
                    } : s ? s(u) : u;
                } : s;
            }
        }, V = function(n) {
            if (!Symbol.asyncIterator)
                throw new TypeError("Symbol.asyncIterator is not defined.");
            var r = n[Symbol.asyncIterator],
                o;
            return r ? r.call(n) : (n = typeof j == "function" ? j(n) : n[Symbol.iterator](), o = {}, a("next"), a("throw"), a("return"), o[Symbol.asyncIterator] = function() {
                return this;
            }, o);

            function a(s) {
                o[s] = n[s] && function(u) {
                    return new Promise(function(g, w) {
                        u = n[s](u), c(g, w, u.done, u.value);
                    });
                };
            }

            function c(s, u, g, w) {
                Promise.resolve(w).then(function(f) {
                    s({
                        value: f,
                        done: g
                    });
                }, u);
            }
        }, $ = function(n, r) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: r
            }) : n.raw = r, n;
        }, W = function(n) {
            if (n && n.__esModule)
                return n;
            var r = {};
            if (n != null)
                for (var o in n)
                    Object.hasOwnProperty.call(n, o) && (r[o] = n[o]);
            return r.default = n, r;
        }, G = function(n) {
            return n && n.__esModule ? n : {
                default: n
            };
        }, X = function(n, r) {
            if (!r.has(n))
                throw new TypeError("attempted to get private field on non-instance");
            return r.get(n);
        }, Q = function(n, r, o) {
            if (!r.has(n))
                throw new TypeError("attempted to set private field on non-instance");
            return r.set(n, o), o;
        }, h("__extends", t), h("__assign", i), h("__rest", l), h("__decorate", y), h("__param", v), h("__metadata", P), h("__awaiter", F), h("__generator", x), h("__exportStar", U), h("__createBinding", z), h("__values", j), h("__read", D), h("__spread", J), h("__spreadArrays", H), h("__await", R), h("__asyncGenerator", B), h("__asyncDelegator", q), h("__asyncValues", V), h("__makeTemplateObject", $), h("__importStar", W), h("__importDefault", G), h("__classPrivateFieldGet", X), h("__classPrivateFieldSet", Q);
    });
})(Ot);
var m = {},
    Z;

function Tt() {
    if (Z)
        return m;
    Z = 1, Object.defineProperty(m, "__esModule", {
        value: !0
    }), m.isBrowserCryptoAvailable = m.getSubtleCrypto = m.getBrowerCrypto = void 0;

    function e() {
        return (globalThis == null ? void 0 : globalThis.crypto) || (globalThis == null ? void 0 : globalThis.msCrypto) || {};
    }
    m.getBrowerCrypto = e;

    function t() {
        const l = e();
        return l.subtle || l.webkitSubtle;
    }
    m.getSubtleCrypto = t;

    function i() {
        return !!e() && !!t();
    }
    return m.isBrowserCryptoAvailable = i, m;
}
var b = {},
    k;

function St() {
    if (k)
        return b;
    k = 1, Object.defineProperty(b, "__esModule", {
        value: !0
    }), b.isBrowser = b.isNode = b.isReactNative = void 0;

    function e() {
        return typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative";
    }
    b.isReactNative = e;

    function t() {
        return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
    }
    b.isNode = t;

    function i() {
        return !e() && !t();
    }
    return b.isBrowser = i, b;
}
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    const t = N;
    t.__exportStar(Tt(), e), t.__exportStar(St(), e);
})(Rt);

function Pt() {
    const e = Date.now() * Math.pow(10, 3),
        t = Math.floor(Math.random() * Math.pow(10, 3));
    return e + t;
}

function Ct(e, t, i) {
    return {
        id: i || Pt(),
        jsonrpc: "2.0",
        method: e,
        params: t
    };
}

function oe(e, t) {
    return {
        id: e,
        jsonrpc: "2.0",
        result: t
    };
}

function jt(e, t, i) {
    return {
        id: e,
        jsonrpc: "2.0",
        error: Lt(t, i)
    };
}

function Lt(e, t) {
    return typeof e > "u" ? Y(at) : (typeof e == "string" && (e = Object.assign(Object.assign({}, Y(M)), {
        message: e
    })), typeof t < "u" && (e.data = t), mt(e.code) && (e = bt(e.code)), e);
}
class ut {}
class ie extends ut {
    constructor(t) {
        super();
    }
}
class Ft extends ut {
    constructor() {
        super();
    }
}
class Dt extends Ft {
    constructor(t) {
        super();
    }
}
const At = "^https?:",
    Nt = "^wss?:";

function It(e) {
    const t = e.match(new RegExp(/^\w+:/, "gi"));
    if (!(!t || !t.length))
        return t[0];
}

function ft(e, t) {
    const i = It(e);
    return typeof i > "u" ? !1 : new RegExp(t).test(i);
}

function tt(e) {
    return ft(e, At);
}

function se(e) {
    return ft(e, Nt);
}

function ae(e) {
    return new RegExp("wss?://localhost(:d{2,5})?").test(e);
}

function lt(e) {
    return typeof e == "object" && "id" in e && "jsonrpc" in e && e.jsonrpc === "2.0";
}

function ce(e) {
    return lt(e) && "method" in e;
}

function Mt(e) {
    return lt(e) && (xt(e) || ht(e));
}

function xt(e) {
    return "result" in e;
}

function ht(e) {
    return "error" in e;
}
class ue extends Dt {
    constructor(t) {
        super(t), this.events = new st.EventEmitter(), this.hasRegisteredEventListeners = !1, this.connection = this.setConnection(t), this.connection.connected && this.registerEventListeners();
    }
    async connect(t = this.connection) {
        await this.open(t);
    }
    async disconnect() {
        await this.close();
    }
    on(t, i) {
        this.events.on(t, i);
    }
    once(t, i) {
        this.events.once(t, i);
    }
    off(t, i) {
        this.events.off(t, i);
    }
    removeListener(t, i) {
        this.events.removeListener(t, i);
    }
    async request(t, i) {
        return this.requestStrict(Ct(t.method, t.params || []), i);
    }
    async requestStrict(t, i) {
        return new Promise(async (l, y) => {
            if (!this.connection.connected)
                try {
                    await this.open();
                } catch (v) {
                    y(v);
                }
            this.events.on(`${t.id}`, (v) => {
                ht(v) ? y(v.error) : l(v.result);
            });
            try {
                await this.connection.send(t, i);
            } catch (v) {
                y(v);
            }
        });
    }
    setConnection(t = this.connection) {
        return t;
    }
    onPayload(t) {
        this.events.emit("payload", t), Mt(t) ? this.events.emit(`${t.id}`, t) : this.events.emit("message", {
            type: t.method,
            data: t.params
        });
    }
    async open(t = this.connection) {
        this.connection === t && this.connection.connected || (this.connection.connected && this.close(), typeof t == "string" && (await this.connection.open(t), t = this.connection), this.connection = this.setConnection(t), await this.connection.open(), this.registerEventListeners(), this.events.emit("connect"));
    }
    async close() {
        await this.connection.close();
    }
    registerEventListeners() {
        this.hasRegisteredEventListeners || (this.connection.on("payload", (t) => this.onPayload(t)), this.connection.on("close", () => this.events.emit("disconnect")), this.connection.on("error", (t) => this.events.emit("error", t)), this.hasRegisteredEventListeners = !0);
    }
}

function Ut(e) {
    if (typeof e != "string")
        throw new Error(`Cannot safe json parse value of type ${typeof e}`);
    try {
        return JSON.parse(e);
    } catch {
        return e;
    }
}

function et(e) {
    return typeof e == "string" ? e : JSON.stringify(e);
}
const Jt = {
        Accept: "application/json",
        "Content-Type": "application/json"
    },
    Ht = "POST",
    nt = {
        headers: Jt,
        method: Ht
    },
    rt = 10;
class fe {
    constructor(t) {
        if (this.url = t, this.events = new st.EventEmitter(), this.isAvailable = !1, this.registering = !1, !tt(t))
            throw new Error(`Provided URL is not compatible with HTTP connection: ${t}`);
        this.url = t;
    }
    get connected() {
        return this.isAvailable;
    }
    get connecting() {
        return this.registering;
    }
    on(t, i) {
        this.events.on(t, i);
    }
    once(t, i) {
        this.events.once(t, i);
    }
    off(t, i) {
        this.events.off(t, i);
    }
    removeListener(t, i) {
        this.events.removeListener(t, i);
    }
    async open(t = this.url) {
        await this.register(t);
    }
    async close() {
        if (!this.isAvailable)
            throw new Error("Connection already closed");
        this.onClose();
    }
    async send(t, i) {
        this.isAvailable || await this.register();
        try {
            const l = et(t),
                v = await (await K(this.url, Object.assign(Object.assign({}, nt), {
                    body: l
                }))).json();
            this.onPayload({
                data: v
            });
        } catch (l) {
            this.onError(t.id, l);
        }
    }
    async register(t = this.url) {
        if (!tt(t))
            throw new Error(`Provided URL is not compatible with HTTP connection: ${t}`);
        if (this.registering) {
            const i = this.events.getMaxListeners();
            return (this.events.listenerCount("register_error") >= i || this.events.listenerCount("open") >= i) && this.events.setMaxListeners(i + 1), new Promise((l, y) => {
                this.events.once("register_error", (v) => {
                    this.resetMaxListeners(), y(v);
                }), this.events.once("open", () => {
                    if (this.resetMaxListeners(), typeof this.isAvailable > "u")
                        return y(new Error("HTTP connection is missing or invalid"));
                    l();
                });
            });
        }
        this.url = t, this.registering = !0;
        try {
            const i = et({
                id: 1,
                jsonrpc: "2.0",
                method: "test",
                params: []
            });
            await K(t, Object.assign(Object.assign({}, nt), {
                body: i
            })), this.onOpen();
        } catch (i) {
            const l = this.parseError(i);
            throw this.events.emit("register_error", l), this.onClose(), l;
        }
    }
    onOpen() {
        this.isAvailable = !0, this.registering = !1, this.events.emit("open");
    }
    onClose() {
        this.isAvailable = !1, this.registering = !1, this.events.emit("close");
    }
    onPayload(t) {
        if (typeof t.data > "u")
            return;
        const i = typeof t.data == "string" ? Ut(t.data) : t.data;
        this.events.emit("payload", i);
    }
    onError(t, i) {
        const l = this.parseError(i),
            y = l.message || l.toString(),
            v = jt(t, y);
        this.events.emit("payload", v);
    }
    parseError(t, i = this.url) {
        return Et(t, i, "HTTP");
    }
    resetMaxListeners() {
        this.events.getMaxListeners() > rt && this.events.setMaxListeners(rt);
    }
}
var d = {};
Object.defineProperty(d, "__esModule", {
    value: !0
});
d.getLocalStorage = d.getLocalStorageOrThrow = d.getCrypto = d.getCryptoOrThrow = zt = d.getLocation = d.getLocationOrThrow = Gt = d.getNavigator = d.getNavigatorOrThrow = Vt = d.getDocument = d.getDocumentOrThrow = d.getFromWindowOrThrow = d.getFromWindow = void 0;

function E(e) {
    let t;
    return typeof window < "u" && typeof window[e] < "u" && (t = window[e]), t;
}
d.getFromWindow = E;

function S(e) {
    const t = E(e);
    if (!t)
        throw new Error(`${e} is not defined in Window`);
    return t;
}
d.getFromWindowOrThrow = S;

function Bt() {
    return S("document");
}
d.getDocumentOrThrow = Bt;

function qt() {
    return E("document");
}
var Vt = d.getDocument = qt;

function $t() {
    return S("navigator");
}
d.getNavigatorOrThrow = $t;

function Wt() {
    return E("navigator");
}
var Gt = d.getNavigator = Wt;

function Xt() {
    return S("location");
}
d.getLocationOrThrow = Xt;

function Qt() {
    return E("location");
}
var zt = d.getLocation = Qt;

function Kt() {
    return S("crypto");
}
d.getCryptoOrThrow = Kt;

function Yt() {
    return E("crypto");
}
d.getCrypto = Yt;

function Zt() {
    return S("localStorage");
}
d.getLocalStorageOrThrow = Zt;

function kt() {
    return E("localStorage");
}
d.getLocalStorage = kt;
var le = (e) => encodeURIComponent(e).replace(/[!'()*]/g, (t) => `%${t.charCodeAt(0).toString(16).toUpperCase()}`),
    dt = "%[a-f0-9]{2}",
    ot = new RegExp("(" + dt + ")|([^%]+?)", "gi"),
    it = new RegExp("(" + dt + ")+", "gi");

function I(e, t) {
    try {
        return [decodeURIComponent(e.join(""))];
    } catch {}
    if (e.length === 1)
        return e;
    t = t || 1;
    var i = e.slice(0, t),
        l = e.slice(t);
    return Array.prototype.concat.call([], I(i), I(l));
}

function te(e) {
    try {
        return decodeURIComponent(e);
    } catch {
        for (var t = e.match(ot) || [], i = 1; i < t.length; i++)
            e = I(t, i).join(""), t = e.match(ot) || [];
        return e;
    }
}

function ee(e) {
    for (var t = {
            "%FE%FF": "��",
            "%FF%FE": "��"
        }, i = it.exec(e); i;) {
        try {
            t[i[0]] = decodeURIComponent(i[0]);
        } catch {
            var l = te(i[0]);
            l !== i[0] && (t[i[0]] = l);
        }
        i = it.exec(e);
    }
    t["%C2"] = "�";
    for (var y = Object.keys(t), v = 0; v < y.length; v++) {
        var P = y[v];
        e = e.replace(new RegExp(P, "g"), t[P]);
    }
    return e;
}
var he = function(e) {
        if (typeof e != "string")
            throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`");
        try {
            return e = e.replace(/\+/g, " "), decodeURIComponent(e);
        } catch {
            return ee(e);
        }
    },
    de = (e, t) => {
        if (!(typeof e == "string" && typeof t == "string"))
            throw new TypeError("Expected the arguments to be of type `string`");
        if (t === "")
            return [e];
        const i = e.indexOf(t);
        return i === -1 ? [e] : [
            e.slice(0, i),
            e.slice(i + t.length)
        ];
    };
export {
    fe as H,
    ie as I,
    ue as J,
    le as a,
    Rt as b,
    d as c,
    he as d,
    et as e,
    jt as f,
    zt as g,
    Vt as h,
    Gt as i,
    se as j,
    ae as k,
    Ut as l,
    Et as m,
    ce as n,
    oe as o,
    Pt as p,
    xt as q,
    ht as r,
    de as s,
    Mt as t,
    Ct as u
};