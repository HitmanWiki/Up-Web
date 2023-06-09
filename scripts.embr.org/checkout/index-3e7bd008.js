import {
    g as Lr,
    a as Ei,
    j as Qe,
    r as Pa,
    c as re,
    k as Si,
    t as Rd,
    l as Id
} from "./main-b9bbb17f.js";
import {
    e as ki
} from "./events-276ce9ce.js";

function Ad(t, e) {
    for (var r = 0; r < e.length; r++) {
        const n = e[r];
        if (typeof n != "string" && !Array.isArray(n)) {
            for (const i in n)
                if (i !== "default" && !(i in t)) {
                    const s = Object.getOwnPropertyDescriptor(n, i);
                    s && Object.defineProperty(t, i, s.get ? s : {
                        enumerable: !0,
                        get: () => n[i]
                    });
                }
        }
    }
    return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
    }));
}
var ja = {},
    fn = {},
    Ri = {};
Object.defineProperty(Ri, "__esModule", {
    value: !0
});
Ri.walletLogo = void 0;
const Td = (t, e) => {
    let r;
    switch (t) {
        case "standard":
            return r = e, `data:image/svg+xml,%3Csvg width='${e}' height='${r}' viewBox='0 0 1024 1024' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Crect width='1024' height='1024' fill='%230052FF'/%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M152 512C152 710.823 313.177 872 512 872C710.823 872 872 710.823 872 512C872 313.177 710.823 152 512 152C313.177 152 152 313.177 152 512ZM420 396C406.745 396 396 406.745 396 420V604C396 617.255 406.745 628 420 628H604C617.255 628 628 617.255 628 604V420C628 406.745 617.255 396 604 396H420Z' fill='white'/%3E %3C/svg%3E `;
        case "circle":
            return r = e, `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${e}' height='${r}' viewBox='0 0 999.81 999.81'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052fe;%7D.cls-2%7Bfill:%23fefefe;%7D.cls-3%7Bfill:%230152fe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M655-115.9h56c.83,1.59,2.36.88,3.56,1a478,478,0,0,1,75.06,10.42C891.4-81.76,978.33-32.58,1049.19,44q116.7,126,131.94,297.61c.38,4.14-.34,8.53,1.78,12.45v59c-1.58.84-.91,2.35-1,3.56a482.05,482.05,0,0,1-10.38,74.05c-24,106.72-76.64,196.76-158.83,268.93s-178.18,112.82-287.2,122.6c-4.83.43-9.86-.25-14.51,1.77H654c-1-1.68-2.69-.91-4.06-1a496.89,496.89,0,0,1-105.9-18.59c-93.54-27.42-172.78-77.59-236.91-150.94Q199.34,590.1,184.87,426.58c-.47-5.19.25-10.56-1.77-15.59V355c1.68-1,.91-2.7,1-4.06a498.12,498.12,0,0,1,18.58-105.9c26-88.75,72.64-164.9,140.6-227.57q126-116.27,297.21-131.61C645.32-114.57,650.35-113.88,655-115.9Zm377.92,500c0-192.44-156.31-349.49-347.56-350.15-194.13-.68-350.94,155.13-352.29,347.42-1.37,194.55,155.51,352.1,348.56,352.47C876.15,734.23,1032.93,577.84,1032.93,384.11Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-2' d='M1032.93,384.11c0,193.73-156.78,350.12-351.29,349.74-193-.37-349.93-157.92-348.56-352.47C334.43,189.09,491.24,33.28,685.37,34,876.62,34.62,1032.94,191.67,1032.93,384.11ZM683,496.81q43.74,0,87.48,0c15.55,0,25.32-9.72,25.33-25.21q0-87.48,0-175c0-15.83-9.68-25.46-25.59-25.46H595.77c-15.88,0-25.57,9.64-25.58,25.46q0,87.23,0,174.45c0,16.18,9.59,25.7,25.84,25.71Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-3' d='M683,496.81H596c-16.25,0-25.84-9.53-25.84-25.71q0-87.23,0-174.45c0-15.82,9.7-25.46,25.58-25.46H770.22c15.91,0,25.59,9.63,25.59,25.46q0,87.47,0,175c0,15.49-9.78,25.2-25.33,25.21Q726.74,496.84,683,496.81Z' transform='translate(-183.1 115.9)'/%3E%3C/svg%3E`;
        case "text":
            return r = (0.1 * e).toFixed(2), `data:image/svg+xml,%3Csvg width='${e}' height='${r}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E`;
        case "textWithLogo":
            return r = (0.25 * e).toFixed(2), `data:image/svg+xml,%3Csvg width='${e}' height='${r}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E`;
        case "textLight":
            return r = (0.1 * e).toFixed(2), `data:image/svg+xml,%3Csvg width='${e}' height='${r}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E`;
        case "textWithLogoLight":
            return r = (0.25 * e).toFixed(2), `data:image/svg+xml,%3Csvg width='${e}' height='${r}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E`;
        default:
            return r = e, `data:image/svg+xml,%3Csvg width='${e}' height='${r}' viewBox='0 0 1024 1024' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Crect width='1024' height='1024' fill='%230052FF'/%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M152 512C152 710.823 313.177 872 512 872C710.823 872 872 710.823 872 512C872 313.177 710.823 152 512 152C313.177 152 152 313.177 152 512ZM420 396C406.745 396 396 406.745 396 420V604C396 617.255 406.745 628 420 628H604C617.255 628 628 617.255 628 604V420C628 406.745 617.255 396 604 396H420Z' fill='white'/%3E %3C/svg%3E `;
    }
};
Ri.walletLogo = Td;
var Ii = {};
Object.defineProperty(Ii, "__esModule", {
    value: !0
});
Ii.ScopedLocalStorage = void 0;
class Cd {
    constructor(e) {
        this.scope = e;
    }
    setItem(e, r) {
        localStorage.setItem(this.scopedKey(e), r);
    }
    getItem(e) {
        return localStorage.getItem(this.scopedKey(e));
    }
    removeItem(e) {
        localStorage.removeItem(this.scopedKey(e));
    }
    clear() {
        const e = this.scopedKey(""),
            r = [];
        for (let n = 0; n < localStorage.length; n++) {
            const i = localStorage.key(n);
            typeof i == "string" && i.startsWith(e) && r.push(i);
        }
        r.forEach((n) => localStorage.removeItem(n));
    }
    scopedKey(e) {
        return `${this.scope}:${e}`;
    }
}
Ii.ScopedLocalStorage = Cd;
var Er = {},
    Pr = {};
Object.defineProperty(Pr, "__esModule", {
    value: !0
});
const Md = ki;

function xc(t, e, r) {
    try {
        Reflect.apply(t, e, r);
    } catch (n) {
        setTimeout(() => {
            throw n;
        });
    }
}

function xd(t) {
    const e = t.length,
        r = new Array(e);
    for (let n = 0; n < e; n += 1)
        r[n] = t[n];
    return r;
}
let Od = class extends Md.EventEmitter {
    emit(e, ...r) {
        let n = e === "error";
        const i = this._events;
        if (i !== void 0)
            n = n && i.error === void 0;
        else if (!n)
            return !1;
        if (n) {
            let o;
            if (r.length > 0 && ([o] = r), o instanceof Error)
                throw o;
            const a = new Error(`Unhandled error.${o ? ` (${o.message})` : ""}`);
            throw a.context = o, a;
        }
        const s = i[e];
        if (s === void 0)
            return !1;
        if (typeof s == "function")
            xc(s, this, r);
        else {
            const o = s.length,
                a = xd(s);
            for (let c = 0; c < o; c += 1)
                xc(a[c], this, r);
        }
        return !0;
    }
};
Pr.default = Od;
var Ai = {},
    Dt = {},
    wl = hn;
hn.default = hn;
hn.stable = kl;
hn.stableStringify = kl;
var oi = "[...]",
    El = "[Circular]",
    Kt = [],
    Yt = [];

function Sl() {
    return {
        depthLimit: Number.MAX_SAFE_INTEGER,
        edgesLimit: Number.MAX_SAFE_INTEGER
    };
}

function hn(t, e, r, n) {
    typeof n > "u" && (n = Sl()), ua(t, "", 0, [], void 0, 0, n);
    var i;
    try {
        Yt.length === 0 ? i = JSON.stringify(t, e, r) : i = JSON.stringify(t, Rl(e), r);
    } catch {
        return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]");
    } finally {
        for (; Kt.length !== 0;) {
            var s = Kt.pop();
            s.length === 4 ? Object.defineProperty(s[0], s[1], s[3]) : s[0][s[1]] = s[2];
        }
    }
    return i;
}

function gr(t, e, r, n) {
    var i = Object.getOwnPropertyDescriptor(n, r);
    i.get !== void 0 ? i.configurable ? (Object.defineProperty(n, r, {
        value: t
    }), Kt.push([n, r, e, i])) : Yt.push([e, r, t]) : (n[r] = t, Kt.push([n, r, e]));
}

function ua(t, e, r, n, i, s, o) {
    s += 1;
    var a;
    if (typeof t == "object" && t !== null) {
        for (a = 0; a < n.length; a++)
            if (n[a] === t) {
                gr(El, t, e, i);
                return;
            }
        if (typeof o.depthLimit < "u" && s > o.depthLimit) {
            gr(oi, t, e, i);
            return;
        }
        if (typeof o.edgesLimit < "u" && r + 1 > o.edgesLimit) {
            gr(oi, t, e, i);
            return;
        }
        if (n.push(t), Array.isArray(t))
            for (a = 0; a < t.length; a++)
                ua(t[a], a, a, n, t, s, o);
        else {
            var c = Object.keys(t);
            for (a = 0; a < c.length; a++) {
                var u = c[a];
                ua(t[u], u, a, n, t, s, o);
            }
        }
        n.pop();
    }
}

function Nd(t, e) {
    return t < e ? -1 : t > e ? 1 : 0;
}

function kl(t, e, r, n) {
    typeof n > "u" && (n = Sl());
    var i = la(t, "", 0, [], void 0, 0, n) || t,
        s;
    try {
        Yt.length === 0 ? s = JSON.stringify(i, e, r) : s = JSON.stringify(i, Rl(e), r);
    } catch {
        return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]");
    } finally {
        for (; Kt.length !== 0;) {
            var o = Kt.pop();
            o.length === 4 ? Object.defineProperty(o[0], o[1], o[3]) : o[0][o[1]] = o[2];
        }
    }
    return s;
}

function la(t, e, r, n, i, s, o) {
    s += 1;
    var a;
    if (typeof t == "object" && t !== null) {
        for (a = 0; a < n.length; a++)
            if (n[a] === t) {
                gr(El, t, e, i);
                return;
            }
        try {
            if (typeof t.toJSON == "function")
                return;
        } catch {
            return;
        }
        if (typeof o.depthLimit < "u" && s > o.depthLimit) {
            gr(oi, t, e, i);
            return;
        }
        if (typeof o.edgesLimit < "u" && r + 1 > o.edgesLimit) {
            gr(oi, t, e, i);
            return;
        }
        if (n.push(t), Array.isArray(t))
            for (a = 0; a < t.length; a++)
                la(t[a], a, a, n, t, s, o);
        else {
            var c = {},
                u = Object.keys(t).sort(Nd);
            for (a = 0; a < u.length; a++) {
                var l = u[a];
                la(t[l], l, a, n, t, s, o), c[l] = t[l];
            }
            if (typeof i < "u")
                Kt.push([i, e, t]), i[e] = c;
            else
                return c;
        }
        n.pop();
    }
}

function Rl(t) {
    return t = typeof t < "u" ? t : function(e, r) {
            return r;
        },
        function(e, r) {
            if (Yt.length > 0)
                for (var n = 0; n < Yt.length; n++) {
                    var i = Yt[n];
                    if (i[1] === e && i[0] === r) {
                        r = i[2], Yt.splice(n, 1);
                        break;
                    }
                }
            return t.call(this, e, r);
        };
}
Object.defineProperty(Dt, "__esModule", {
    value: !0
});
Dt.EthereumProviderError = Dt.EthereumRpcError = void 0;
const Dd = wl;
let Il = class extends Error {
    constructor(e, r, n) {
        if (!Number.isInteger(e))
            throw new Error('"code" must be an integer.');
        if (!r || typeof r != "string")
            throw new Error('"message" must be a nonempty string.');
        super(r), this.code = e, n !== void 0 && (this.data = n);
    }
    /**
     * Returns a plain object with all public class properties.
     */
    serialize() {
        const e = {
            code: this.code,
            message: this.message
        };
        return this.data !== void 0 && (e.data = this.data), this.stack && (e.stack = this.stack), e;
    }
    /**
     * Return a string representation of the serialized error, omitting
     * any circular references.
     */
    toString() {
        return Dd.default(this.serialize(), jd, 2);
    }
};
Dt.EthereumRpcError = Il;
let Ld = class extends Il {
    /**
     * Create an Ethereum Provider JSON-RPC error.
     * `code` must be an integer in the 1000 <= 4999 range.
     */
    constructor(e, r, n) {
        if (!Pd(e))
            throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');
        super(e, r, n);
    }
};
Dt.EthereumProviderError = Ld;

function Pd(t) {
    return Number.isInteger(t) && t >= 1e3 && t <= 4999;
}

function jd(t, e) {
    if (e !== "[Circular]")
        return e;
}
var Ba = {},
    Lt = {};
Object.defineProperty(Lt, "__esModule", {
    value: !0
});
Lt.errorValues = Lt.errorCodes = void 0;
Lt.errorCodes = {
    rpc: {
        invalidInput: -32e3,
        resourceNotFound: -32001,
        resourceUnavailable: -32002,
        transactionRejected: -32003,
        methodNotSupported: -32004,
        limitExceeded: -32005,
        parse: -32700,
        invalidRequest: -32600,
        methodNotFound: -32601,
        invalidParams: -32602,
        internal: -32603
    },
    provider: {
        userRejectedRequest: 4001,
        unauthorized: 4100,
        unsupportedMethod: 4200,
        disconnected: 4900,
        chainDisconnected: 4901
    }
};
Lt.errorValues = {
    "-32700": {
        standard: "JSON RPC 2.0",
        message: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
    },
    "-32600": {
        standard: "JSON RPC 2.0",
        message: "The JSON sent is not a valid Request object."
    },
    "-32601": {
        standard: "JSON RPC 2.0",
        message: "The method does not exist / is not available."
    },
    "-32602": {
        standard: "JSON RPC 2.0",
        message: "Invalid method parameter(s)."
    },
    "-32603": {
        standard: "JSON RPC 2.0",
        message: "Internal JSON-RPC error."
    },
    "-32000": {
        standard: "EIP-1474",
        message: "Invalid input."
    },
    "-32001": {
        standard: "EIP-1474",
        message: "Resource not found."
    },
    "-32002": {
        standard: "EIP-1474",
        message: "Resource unavailable."
    },
    "-32003": {
        standard: "EIP-1474",
        message: "Transaction rejected."
    },
    "-32004": {
        standard: "EIP-1474",
        message: "Method not supported."
    },
    "-32005": {
        standard: "EIP-1474",
        message: "Request limit exceeded."
    },
    4001: {
        standard: "EIP-1193",
        message: "User rejected the request."
    },
    4100: {
        standard: "EIP-1193",
        message: "The requested account and/or method has not been authorized by the user."
    },
    4200: {
        standard: "EIP-1193",
        message: "The requested method is not supported by this Ethereum provider."
    },
    4900: {
        standard: "EIP-1193",
        message: "The provider is disconnected from all chains."
    },
    4901: {
        standard: "EIP-1193",
        message: "The provider is disconnected from the specified chain."
    }
};
(function(t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.serializeError = t.isValidCode = t.getMessageFromCode = t.JSON_RPC_SERVER_ERROR_MESSAGE = void 0;
    const e = Lt,
        r = Dt,
        n = e.errorCodes.rpc.internal,
        i = "Unspecified error message. This is a bug, please report it.",
        s = {
            code: n,
            message: o(n)
        };
    t.JSON_RPC_SERVER_ERROR_MESSAGE = "Unspecified server error.";

    function o(f, p = i) {
        if (Number.isInteger(f)) {
            const g = f.toString();
            if (b(e.errorValues, g))
                return e.errorValues[g].message;
            if (u(f))
                return t.JSON_RPC_SERVER_ERROR_MESSAGE;
        }
        return p;
    }
    t.getMessageFromCode = o;

    function a(f) {
        if (!Number.isInteger(f))
            return !1;
        const p = f.toString();
        return !!(e.errorValues[p] || u(f));
    }
    t.isValidCode = a;

    function c(f, {
        fallbackError: p = s,
        shouldIncludeStack: g = !1
    } = {}) {
        var S, I;
        if (!p || !Number.isInteger(p.code) || typeof p.message != "string")
            throw new Error("Must provide fallback error with integer number code and string message.");
        if (f instanceof r.EthereumRpcError)
            return f.serialize();
        const _ = {};
        if (f && typeof f == "object" && !Array.isArray(f) && b(f, "code") && a(f.code)) {
            const w = f;
            _.code = w.code, w.message && typeof w.message == "string" ? (_.message = w.message, b(w, "data") && (_.data = w.data)) : (_.message = o(_.code), _.data = {
                originalError: l(f)
            });
        } else {
            _.code = p.code;
            const w = (S = f) === null || S === void 0 ? void 0 : S.message;
            _.message = w && typeof w == "string" ? w : p.message, _.data = {
                originalError: l(f)
            };
        }
        const m = (I = f) === null || I === void 0 ? void 0 : I.stack;
        return g && f && m && typeof m == "string" && (_.stack = m), _;
    }
    t.serializeError = c;

    function u(f) {
        return f >= -32099 && f <= -32e3;
    }

    function l(f) {
        return f && typeof f == "object" && !Array.isArray(f) ? Object.assign({}, f) : f;
    }

    function b(f, p) {
        return Object.prototype.hasOwnProperty.call(f, p);
    }
})(Ba);
var Ti = {};
Object.defineProperty(Ti, "__esModule", {
    value: !0
});
Ti.ethErrors = void 0;
const Ua = Dt,
    Al = Ba,
    Me = Lt;
Ti.ethErrors = {
    rpc: {
        /**
         * Get a JSON RPC 2.0 Parse (-32700) error.
         */
        parse: (t) => $e(Me.errorCodes.rpc.parse, t),
        /**
         * Get a JSON RPC 2.0 Invalid Request (-32600) error.
         */
        invalidRequest: (t) => $e(Me.errorCodes.rpc.invalidRequest, t),
        /**
         * Get a JSON RPC 2.0 Invalid Params (-32602) error.
         */
        invalidParams: (t) => $e(Me.errorCodes.rpc.invalidParams, t),
        /**
         * Get a JSON RPC 2.0 Method Not Found (-32601) error.
         */
        methodNotFound: (t) => $e(Me.errorCodes.rpc.methodNotFound, t),
        /**
         * Get a JSON RPC 2.0 Internal (-32603) error.
         */
        internal: (t) => $e(Me.errorCodes.rpc.internal, t),
        /**
         * Get a JSON RPC 2.0 Server error.
         * Permits integer error codes in the [ -32099 <= -32005 ] range.
         * Codes -32000 through -32004 are reserved by EIP-1474.
         */
        server: (t) => {
            if (!t || typeof t != "object" || Array.isArray(t))
                throw new Error("Ethereum RPC Server errors must provide single object argument.");
            const {
                code: e
            } = t;
            if (!Number.isInteger(e) || e > -32005 || e < -32099)
                throw new Error('"code" must be an integer such that: -32099 <= code <= -32005');
            return $e(e, t);
        },
        /**
         * Get an Ethereum JSON RPC Invalid Input (-32000) error.
         */
        invalidInput: (t) => $e(Me.errorCodes.rpc.invalidInput, t),
        /**
         * Get an Ethereum JSON RPC Resource Not Found (-32001) error.
         */
        resourceNotFound: (t) => $e(Me.errorCodes.rpc.resourceNotFound, t),
        /**
         * Get an Ethereum JSON RPC Resource Unavailable (-32002) error.
         */
        resourceUnavailable: (t) => $e(Me.errorCodes.rpc.resourceUnavailable, t),
        /**
         * Get an Ethereum JSON RPC Transaction Rejected (-32003) error.
         */
        transactionRejected: (t) => $e(Me.errorCodes.rpc.transactionRejected, t),
        /**
         * Get an Ethereum JSON RPC Method Not Supported (-32004) error.
         */
        methodNotSupported: (t) => $e(Me.errorCodes.rpc.methodNotSupported, t),
        /**
         * Get an Ethereum JSON RPC Limit Exceeded (-32005) error.
         */
        limitExceeded: (t) => $e(Me.errorCodes.rpc.limitExceeded, t)
    },
    provider: {
        /**
         * Get an Ethereum Provider User Rejected Request (4001) error.
         */
        userRejectedRequest: (t) => Yr(Me.errorCodes.provider.userRejectedRequest, t),
        /**
         * Get an Ethereum Provider Unauthorized (4100) error.
         */
        unauthorized: (t) => Yr(Me.errorCodes.provider.unauthorized, t),
        /**
         * Get an Ethereum Provider Unsupported Method (4200) error.
         */
        unsupportedMethod: (t) => Yr(Me.errorCodes.provider.unsupportedMethod, t),
        /**
         * Get an Ethereum Provider Not Connected (4900) error.
         */
        disconnected: (t) => Yr(Me.errorCodes.provider.disconnected, t),
        /**
         * Get an Ethereum Provider Chain Not Connected (4901) error.
         */
        chainDisconnected: (t) => Yr(Me.errorCodes.provider.chainDisconnected, t),
        /**
         * Get a custom Ethereum Provider error.
         */
        custom: (t) => {
            if (!t || typeof t != "object" || Array.isArray(t))
                throw new Error("Ethereum Provider custom errors must provide single object argument.");
            const {
                code: e,
                message: r,
                data: n
            } = t;
            if (!r || typeof r != "string")
                throw new Error('"message" must be a nonempty string');
            return new Ua.EthereumProviderError(e, r, n);
        }
    }
};

function $e(t, e) {
    const [r, n] = Tl(e);
    return new Ua.EthereumRpcError(t, r || Al.getMessageFromCode(t), n);
}

function Yr(t, e) {
    const [r, n] = Tl(e);
    return new Ua.EthereumProviderError(t, r || Al.getMessageFromCode(t), n);
}

function Tl(t) {
    if (t) {
        if (typeof t == "string")
            return [t];
        if (typeof t == "object" && !Array.isArray(t)) {
            const {
                message: e,
                data: r
            } = t;
            if (e && typeof e != "string")
                throw new Error("Must specify string message.");
            return [e || void 0, r];
        }
    }
    return [];
}
(function(t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getMessageFromCode = t.serializeError = t.EthereumProviderError = t.EthereumRpcError = t.ethErrors = t.errorCodes = void 0;
    const e = Dt;
    Object.defineProperty(t, "EthereumRpcError", {
        enumerable: !0,
        get: function() {
            return e.EthereumRpcError;
        }
    }), Object.defineProperty(t, "EthereumProviderError", {
        enumerable: !0,
        get: function() {
            return e.EthereumProviderError;
        }
    });
    const r = Ba;
    Object.defineProperty(t, "serializeError", {
        enumerable: !0,
        get: function() {
            return r.serializeError;
        }
    }), Object.defineProperty(t, "getMessageFromCode", {
        enumerable: !0,
        get: function() {
            return r.getMessageFromCode;
        }
    });
    const n = Ti;
    Object.defineProperty(t, "ethErrors", {
        enumerable: !0,
        get: function() {
            return n.ethErrors;
        }
    });
    const i = Lt;
    Object.defineProperty(t, "errorCodes", {
        enumerable: !0,
        get: function() {
            return i.errorCodes;
        }
    });
})(Ai);
var jr = {};
Object.defineProperty(jr, "__esModule", {
    value: !0
});
jr.EVENTS = void 0;
jr.EVENTS = {
    STARTED_CONNECTING: "walletlink_sdk.started.connecting",
    CONNECTED_STATE_CHANGE: "walletlink_sdk.connected",
    DISCONNECTED: "walletlink_sdk.disconnected",
    METADATA_DESTROYED: "walletlink_sdk_metadata_destroyed",
    LINKED: "walletlink_sdk.linked",
    FAILURE: "walletlink_sdk.generic_failure",
    SESSION_CONFIG_RECEIVED: "walletlink_sdk.session_config_event_received",
    ETH_ACCOUNTS_STATE: "walletlink_sdk.eth_accounts_state",
    SESSION_STATE_CHANGE: "walletlink_sdk.session_state_change",
    UNLINKED_ERROR_STATE: "walletlink_sdk.unlinked_error_state",
    SKIPPED_CLEARING_SESSION: "walletlink_sdk.skipped_clearing_session",
    GENERAL_ERROR: "walletlink_sdk.general_error",
    WEB3_REQUEST: "walletlink_sdk.web3.request",
    WEB3_REQUEST_PUBLISHED: "walletlink_sdk.web3.request_published",
    WEB3_RESPONSE: "walletlink_sdk.web3.response",
    UNKNOWN_ADDRESS_ENCOUNTERED: "walletlink_sdk.unknown_address_encountered"
};
var Br = {};
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
var fa = function(t, e) {
    return fa = Object.setPrototypeOf || {
        __proto__: []
    }
    instanceof Array && function(r, n) {
        r.__proto__ = n;
    } || function(r, n) {
        for (var i in n)
            n.hasOwnProperty(i) && (r[i] = n[i]);
    }, fa(t, e);
};

function M(t, e) {
    fa(t, e);

    function r() {
        this.constructor = t;
    }
    t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}

function Sr(t) {
    return typeof t == "function";
}
var Oc = !1,
    Ze = {
        Promise: void 0,
        set useDeprecatedSynchronousErrorHandling(t) {
            if (t) {
                var e = /* @__PURE__ */ new Error();
                "" + e.stack;
            }
            Oc = t;
        },
        get useDeprecatedSynchronousErrorHandling() {
            return Oc;
        }
    };

function pr(t) {
    setTimeout(function() {
        throw t;
    }, 0);
}
var ai = {
        closed: !0,
        next: function(t) {},
        error: function(t) {
            if (Ze.useDeprecatedSynchronousErrorHandling)
                throw t;
            pr(t);
        },
        complete: function() {}
    },
    je = /* @__PURE__ */ function() {
        return Array.isArray || function(t) {
            return t && typeof t.length == "number";
        };
    }();

function Fa(t) {
    return t !== null && typeof t == "object";
}
var Bd = /* @__PURE__ */ function() {
        function t(e) {
            return Error.call(this), this.message = e ? e.length + ` errors occurred during unsubscription:
` + e.map(function(r, n) {
                return n + 1 + ") " + r.toString();
            }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = e, this;
        }
        return t.prototype = /* @__PURE__ */ Object.create(Error.prototype), t;
    }(),
    rn = Bd,
    pe = /* @__PURE__ */ function() {
        function t(e) {
            this.closed = !1, this._parentOrParents = null, this._subscriptions = null, e && (this._ctorUnsubscribe = !0, this._unsubscribe = e);
        }
        return t.prototype.unsubscribe = function() {
            var e;
            if (!this.closed) {
                var r = this,
                    n = r._parentOrParents,
                    i = r._ctorUnsubscribe,
                    s = r._unsubscribe,
                    o = r._subscriptions;
                if (this.closed = !0, this._parentOrParents = null, this._subscriptions = null, n instanceof t)
                    n.remove(this);
                else if (n !== null)
                    for (var a = 0; a < n.length; ++a) {
                        var c = n[a];
                        c.remove(this);
                    }
                if (Sr(s)) {
                    i && (this._unsubscribe = void 0);
                    try {
                        s.call(this);
                    } catch (b) {
                        e = b instanceof rn ? Nc(b.errors) : [b];
                    }
                }
                if (je(o))
                    for (var a = -1, u = o.length; ++a < u;) {
                        var l = o[a];
                        if (Fa(l))
                            try {
                                l.unsubscribe();
                            } catch (f) {
                                e = e || [], f instanceof rn ? e = e.concat(Nc(f.errors)) : e.push(f);
                            }
                    }
                if (e)
                    throw new rn(e);
            }
        }, t.prototype.add = function(e) {
            var r = e;
            if (!e)
                return t.EMPTY;
            switch (typeof e) {
                case "function":
                    r = new t(e);
                case "object":
                    if (r === this || r.closed || typeof r.unsubscribe != "function")
                        return r;
                    if (this.closed)
                        return r.unsubscribe(), r;
                    if (!(r instanceof t)) {
                        var n = r;
                        r = new t(), r._subscriptions = [n];
                    }
                    break;
                default:
                    throw new Error("unrecognized teardown " + e + " added to Subscription.");
            }
            var i = r._parentOrParents;
            if (i === null)
                r._parentOrParents = this;
            else if (i instanceof t) {
                if (i === this)
                    return r;
                r._parentOrParents = [i, this];
            } else if (i.indexOf(this) === -1)
                i.push(this);
            else
                return r;
            var s = this._subscriptions;
            return s === null ? this._subscriptions = [r] : s.push(r), r;
        }, t.prototype.remove = function(e) {
            var r = this._subscriptions;
            if (r) {
                var n = r.indexOf(e);
                n !== -1 && r.splice(n, 1);
            }
        }, t.EMPTY = function(e) {
            return e.closed = !0, e;
        }(new t()), t;
    }();

function Nc(t) {
    return t.reduce(function(e, r) {
        return e.concat(r instanceof rn ? r.errors : r);
    }, []);
}
var ci = /* @__PURE__ */ function() {
        return typeof Symbol == "function" ? /* @__PURE__ */ Symbol("rxSubscriber") : "@@rxSubscriber_" + /* @__PURE__ */ Math.random();
    }(),
    H = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r, n, i) {
            var s = t.call(this) || this;
            switch (s.syncErrorValue = null, s.syncErrorThrown = !1, s.syncErrorThrowable = !1, s.isStopped = !1, arguments.length) {
                case 0:
                    s.destination = ai;
                    break;
                case 1:
                    if (!r) {
                        s.destination = ai;
                        break;
                    }
                    if (typeof r == "object") {
                        r instanceof e ? (s.syncErrorThrowable = r.syncErrorThrowable, s.destination = r, r.add(s)) : (s.syncErrorThrowable = !0, s.destination = new Dc(s, r));
                        break;
                    }
                default:
                    s.syncErrorThrowable = !0, s.destination = new Dc(s, r, n, i);
                    break;
            }
            return s;
        }
        return e.prototype[ci] = function() {
            return this;
        }, e.create = function(r, n, i) {
            var s = new e(r, n, i);
            return s.syncErrorThrowable = !1, s;
        }, e.prototype.next = function(r) {
            this.isStopped || this._next(r);
        }, e.prototype.error = function(r) {
            this.isStopped || (this.isStopped = !0, this._error(r));
        }, e.prototype.complete = function() {
            this.isStopped || (this.isStopped = !0, this._complete());
        }, e.prototype.unsubscribe = function() {
            this.closed || (this.isStopped = !0, t.prototype.unsubscribe.call(this));
        }, e.prototype._next = function(r) {
            this.destination.next(r);
        }, e.prototype._error = function(r) {
            this.destination.error(r), this.unsubscribe();
        }, e.prototype._complete = function() {
            this.destination.complete(), this.unsubscribe();
        }, e.prototype._unsubscribeAndRecycle = function() {
            var r = this._parentOrParents;
            return this._parentOrParents = null, this.unsubscribe(), this.closed = !1, this.isStopped = !1, this._parentOrParents = r, this;
        }, e;
    }(pe),
    Dc = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r, n, i, s) {
            var o = t.call(this) || this;
            o._parentSubscriber = r;
            var a, c = o;
            return Sr(n) ? a = n : n && (a = n.next, i = n.error, s = n.complete, n !== ai && (c = Object.create(n), Sr(c.unsubscribe) && o.add(c.unsubscribe.bind(c)), c.unsubscribe = o.unsubscribe.bind(o))), o._context = c, o._next = a, o._error = i, o._complete = s, o;
        }
        return e.prototype.next = function(r) {
            if (!this.isStopped && this._next) {
                var n = this._parentSubscriber;
                !Ze.useDeprecatedSynchronousErrorHandling || !n.syncErrorThrowable ? this.__tryOrUnsub(this._next, r) : this.__tryOrSetError(n, this._next, r) && this.unsubscribe();
            }
        }, e.prototype.error = function(r) {
            if (!this.isStopped) {
                var n = this._parentSubscriber,
                    i = Ze.useDeprecatedSynchronousErrorHandling;
                if (this._error)
                    !i || !n.syncErrorThrowable ? (this.__tryOrUnsub(this._error, r), this.unsubscribe()) : (this.__tryOrSetError(n, this._error, r), this.unsubscribe());
                else if (n.syncErrorThrowable)
                    i ? (n.syncErrorValue = r, n.syncErrorThrown = !0) : pr(r), this.unsubscribe();
                else {
                    if (this.unsubscribe(), i)
                        throw r;
                    pr(r);
                }
            }
        }, e.prototype.complete = function() {
            var r = this;
            if (!this.isStopped) {
                var n = this._parentSubscriber;
                if (this._complete) {
                    var i = function() {
                        return r._complete.call(r._context);
                    };
                    !Ze.useDeprecatedSynchronousErrorHandling || !n.syncErrorThrowable ? (this.__tryOrUnsub(i), this.unsubscribe()) : (this.__tryOrSetError(n, i), this.unsubscribe());
                } else
                    this.unsubscribe();
            }
        }, e.prototype.__tryOrUnsub = function(r, n) {
            try {
                r.call(this._context, n);
            } catch (i) {
                if (this.unsubscribe(), Ze.useDeprecatedSynchronousErrorHandling)
                    throw i;
                pr(i);
            }
        }, e.prototype.__tryOrSetError = function(r, n, i) {
            if (!Ze.useDeprecatedSynchronousErrorHandling)
                throw new Error("bad call");
            try {
                n.call(this._context, i);
            } catch (s) {
                return Ze.useDeprecatedSynchronousErrorHandling ? (r.syncErrorValue = s, r.syncErrorThrown = !0, !0) : (pr(s), !0);
            }
            return !1;
        }, e.prototype._unsubscribe = function() {
            var r = this._parentSubscriber;
            this._context = null, this._parentSubscriber = null, r.unsubscribe();
        }, e;
    }(H);

function Ha(t) {
    for (; t;) {
        var e = t,
            r = e.closed,
            n = e.destination,
            i = e.isStopped;
        if (r || i)
            return !1;
        n && n instanceof H ? t = n : t = null;
    }
    return !0;
}

function Ud(t, e, r) {
    if (t) {
        if (t instanceof H)
            return t;
        if (t[ci])
            return t[ci]();
    }
    return !t && !e && !r ? new H(ai) : new H(t, e, r);
}
var Ur = /* @__PURE__ */ function() {
    return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();

function Pt(t) {
    return t;
}

function ha() {
    for (var t = [], e = 0; e < arguments.length; e++)
        t[e] = arguments[e];
    return Cl(t);
}

function Cl(t) {
    return t.length === 0 ? Pt : t.length === 1 ? t[0] : function(r) {
        return t.reduce(function(n, i) {
            return i(n);
        }, r);
    };
}
var J = /* @__PURE__ */ function() {
    function t(e) {
        this._isScalar = !1, e && (this._subscribe = e);
    }
    return t.prototype.lift = function(e) {
        var r = new t();
        return r.source = this, r.operator = e, r;
    }, t.prototype.subscribe = function(e, r, n) {
        var i = this.operator,
            s = Ud(e, r, n);
        if (i ? s.add(i.call(s, this.source)) : s.add(this.source || Ze.useDeprecatedSynchronousErrorHandling && !s.syncErrorThrowable ? this._subscribe(s) : this._trySubscribe(s)), Ze.useDeprecatedSynchronousErrorHandling && s.syncErrorThrowable && (s.syncErrorThrowable = !1, s.syncErrorThrown))
            throw s.syncErrorValue;
        return s;
    }, t.prototype._trySubscribe = function(e) {
        try {
            return this._subscribe(e);
        } catch (r) {
            Ze.useDeprecatedSynchronousErrorHandling && (e.syncErrorThrown = !0, e.syncErrorValue = r), Ha(e) ? e.error(r) : console.warn(r);
        }
    }, t.prototype.forEach = function(e, r) {
        var n = this;
        return r = Lc(r), new r(function(i, s) {
            var o;
            o = n.subscribe(function(a) {
                try {
                    e(a);
                } catch (c) {
                    s(c), o && o.unsubscribe();
                }
            }, s, i);
        });
    }, t.prototype._subscribe = function(e) {
        var r = this.source;
        return r && r.subscribe(e);
    }, t.prototype[Ur] = function() {
        return this;
    }, t.prototype.pipe = function() {
        for (var e = [], r = 0; r < arguments.length; r++)
            e[r] = arguments[r];
        return e.length === 0 ? this : Cl(e)(this);
    }, t.prototype.toPromise = function(e) {
        var r = this;
        return e = Lc(e), new e(function(n, i) {
            var s;
            r.subscribe(function(o) {
                return s = o;
            }, function(o) {
                return i(o);
            }, function() {
                return n(s);
            });
        });
    }, t.create = function(e) {
        return new t(e);
    }, t;
}();

function Lc(t) {
    if (t || (t = Ze.Promise || Promise), !t)
        throw new Error("no Promise impl found");
    return t;
}
var Fd = /* @__PURE__ */ function() {
        function t() {
            return Error.call(this), this.message = "object unsubscribed", this.name = "ObjectUnsubscribedError", this;
        }
        return t.prototype = /* @__PURE__ */ Object.create(Error.prototype), t;
    }(),
    Mt = Fd,
    Ml = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r, n) {
            var i = t.call(this) || this;
            return i.subject = r, i.subscriber = n, i.closed = !1, i;
        }
        return e.prototype.unsubscribe = function() {
            if (!this.closed) {
                this.closed = !0;
                var r = this.subject,
                    n = r.observers;
                if (this.subject = null, !(!n || n.length === 0 || r.isStopped || r.closed)) {
                    var i = n.indexOf(this.subscriber);
                    i !== -1 && n.splice(i, 1);
                }
            }
        }, e;
    }(pe),
    xl = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r) {
            var n = t.call(this, r) || this;
            return n.destination = r, n;
        }
        return e;
    }(H),
    Ie = /* @__PURE__ */ function(t) {
        M(e, t);

        function e() {
            var r = t.call(this) || this;
            return r.observers = [], r.closed = !1, r.isStopped = !1, r.hasError = !1, r.thrownError = null, r;
        }
        return e.prototype[ci] = function() {
            return new xl(this);
        }, e.prototype.lift = function(r) {
            var n = new Pc(this, this);
            return n.operator = r, n;
        }, e.prototype.next = function(r) {
            if (this.closed)
                throw new Mt();
            if (!this.isStopped)
                for (var n = this.observers, i = n.length, s = n.slice(), o = 0; o < i; o++)
                    s[o].next(r);
        }, e.prototype.error = function(r) {
            if (this.closed)
                throw new Mt();
            this.hasError = !0, this.thrownError = r, this.isStopped = !0;
            for (var n = this.observers, i = n.length, s = n.slice(), o = 0; o < i; o++)
                s[o].error(r);
            this.observers.length = 0;
        }, e.prototype.complete = function() {
            if (this.closed)
                throw new Mt();
            this.isStopped = !0;
            for (var r = this.observers, n = r.length, i = r.slice(), s = 0; s < n; s++)
                i[s].complete();
            this.observers.length = 0;
        }, e.prototype.unsubscribe = function() {
            this.isStopped = !0, this.closed = !0, this.observers = null;
        }, e.prototype._trySubscribe = function(r) {
            if (this.closed)
                throw new Mt();
            return t.prototype._trySubscribe.call(this, r);
        }, e.prototype._subscribe = function(r) {
            if (this.closed)
                throw new Mt();
            return this.hasError ? (r.error(this.thrownError), pe.EMPTY) : this.isStopped ? (r.complete(), pe.EMPTY) : (this.observers.push(r), new Ml(this, r));
        }, e.prototype.asObservable = function() {
            var r = new J();
            return r.source = this, r;
        }, e.create = function(r, n) {
            return new Pc(r, n);
        }, e;
    }(J),
    Pc = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r, n) {
            var i = t.call(this) || this;
            return i.destination = r, i.source = n, i;
        }
        return e.prototype.next = function(r) {
            var n = this.destination;
            n && n.next && n.next(r);
        }, e.prototype.error = function(r) {
            var n = this.destination;
            n && n.error && this.destination.error(r);
        }, e.prototype.complete = function() {
            var r = this.destination;
            r && r.complete && this.destination.complete();
        }, e.prototype._subscribe = function(r) {
            var n = this.source;
            return n ? this.source.subscribe(r) : pe.EMPTY;
        }, e;
    }(Ie);

function Wa() {
    return function(e) {
        return e.lift(new Hd(e));
    };
}
var Hd = /* @__PURE__ */ function() {
        function t(e) {
            this.connectable = e;
        }
        return t.prototype.call = function(e, r) {
            var n = this.connectable;
            n._refCount++;
            var i = new Wd(e, n),
                s = r.subscribe(i);
            return i.closed || (i.connection = n.connect()), s;
        }, t;
    }(),
    Wd = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r, n) {
            var i = t.call(this, r) || this;
            return i.connectable = n, i;
        }
        return e.prototype._unsubscribe = function() {
            var r = this.connectable;
            if (!r) {
                this.connection = null;
                return;
            }
            this.connectable = null;
            var n = r._refCount;
            if (n <= 0) {
                this.connection = null;
                return;
            }
            if (r._refCount = n - 1, n > 1) {
                this.connection = null;
                return;
            }
            var i = this.connection,
                s = r._connection;
            this.connection = null, s && (!i || s === i) && s.unsubscribe();
        }, e;
    }(H),
    Ol = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r, n) {
            var i = t.call(this) || this;
            return i.source = r, i.subjectFactory = n, i._refCount = 0, i._isComplete = !1, i;
        }
        return e.prototype._subscribe = function(r) {
            return this.getSubject().subscribe(r);
        }, e.prototype.getSubject = function() {
            var r = this._subject;
            return (!r || r.isStopped) && (this._subject = this.subjectFactory()), this._subject;
        }, e.prototype.connect = function() {
            var r = this._connection;
            return r || (this._isComplete = !1, r = this._connection = new pe(), r.add(this.source.subscribe(new $d(this.getSubject(), this))), r.closed && (this._connection = null, r = pe.EMPTY)), r;
        }, e.prototype.refCount = function() {
            return Wa()(this);
        }, e;
    }(J),
    Gd = /* @__PURE__ */ function() {
        var t = Ol.prototype;
        return {
            operator: {
                value: null
            },
            _refCount: {
                value: 0,
                writable: !0
            },
            _subject: {
                value: null,
                writable: !0
            },
            _connection: {
                value: null,
                writable: !0
            },
            _subscribe: {
                value: t._subscribe
            },
            _isComplete: {
                value: t._isComplete,
                writable: !0
            },
            getSubject: {
                value: t.getSubject
            },
            connect: {
                value: t.connect
            },
            refCount: {
                value: t.refCount
            }
        };
    }(),
    $d = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r, n) {
            var i = t.call(this, r) || this;
            return i.connectable = n, i;
        }
        return e.prototype._error = function(r) {
            this._unsubscribe(), t.prototype._error.call(this, r);
        }, e.prototype._complete = function() {
            this.connectable._isComplete = !0, this._unsubscribe(), t.prototype._complete.call(this);
        }, e.prototype._unsubscribe = function() {
            var r = this.connectable;
            if (r) {
                this.connectable = null;
                var n = r._connection;
                r._refCount = 0, r._subject = null, r._connection = null, n && n.unsubscribe();
            }
        }, e;
    }(xl);

function Vd(t, e, r, n) {
    return function(i) {
        return i.lift(new zd(t, e, r, n));
    };
}
var zd = /* @__PURE__ */ function() {
        function t(e, r, n, i) {
            this.keySelector = e, this.elementSelector = r, this.durationSelector = n, this.subjectSelector = i;
        }
        return t.prototype.call = function(e, r) {
            return r.subscribe(new Zd(e, this.keySelector, this.elementSelector, this.durationSelector, this.subjectSelector));
        }, t;
    }(),
    Zd = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r, n, i, s, o) {
            var a = t.call(this, r) || this;
            return a.keySelector = n, a.elementSelector = i, a.durationSelector = s, a.subjectSelector = o, a.groups = null, a.attemptedToUnsubscribe = !1, a.count = 0, a;
        }
        return e.prototype._next = function(r) {
            var n;
            try {
                n = this.keySelector(r);
            } catch (i) {
                this.error(i);
                return;
            }
            this._group(r, n);
        }, e.prototype._group = function(r, n) {
            var i = this.groups;
            i || (i = this.groups = /* @__PURE__ */ new Map());
            var s = i.get(n),
                o;
            if (this.elementSelector)
                try {
                    o = this.elementSelector(r);
                } catch (u) {
                    this.error(u);
                }
            else
                o = r;
            if (!s) {
                s = this.subjectSelector ? this.subjectSelector() : new Ie(), i.set(n, s);
                var a = new da(n, s, this);
                if (this.destination.next(a), this.durationSelector) {
                    var c = void 0;
                    try {
                        c = this.durationSelector(new da(n, s));
                    } catch (u) {
                        this.error(u);
                        return;
                    }
                    this.add(c.subscribe(new qd(n, s, this)));
                }
            }
            s.closed || s.next(o);
        }, e.prototype._error = function(r) {
            var n = this.groups;
            n && (n.forEach(function(i, s) {
                i.error(r);
            }), n.clear()), this.destination.error(r);
        }, e.prototype._complete = function() {
            var r = this.groups;
            r && (r.forEach(function(n, i) {
                n.complete();
            }), r.clear()), this.destination.complete();
        }, e.prototype.removeGroup = function(r) {
            this.groups.delete(r);
        }, e.prototype.unsubscribe = function() {
            this.closed || (this.attemptedToUnsubscribe = !0, this.count === 0 && t.prototype.unsubscribe.call(this));
        }, e;
    }(H),
    qd = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r, n, i) {
            var s = t.call(this, n) || this;
            return s.key = r, s.group = n, s.parent = i, s;
        }
        return e.prototype._next = function(r) {
            this.complete();
        }, e.prototype._unsubscribe = function() {
            var r = this,
                n = r.parent,
                i = r.key;
            this.key = this.parent = null, n && n.removeGroup(i);
        }, e;
    }(H),
    da = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r, n, i) {
            var s = t.call(this) || this;
            return s.key = r, s.groupSubject = n, s.refCountSubscription = i, s;
        }
        return e.prototype._subscribe = function(r) {
            var n = new pe(),
                i = this,
                s = i.refCountSubscription,
                o = i.groupSubject;
            return s && !s.closed && n.add(new Yd(s)), n.add(o.subscribe(r)), n;
        }, e;
    }(J),
    Yd = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r) {
            var n = t.call(this) || this;
            return n.parent = r, r.count++, n;
        }
        return e.prototype.unsubscribe = function() {
            var r = this.parent;
            !r.closed && !this.closed && (t.prototype.unsubscribe.call(this), r.count -= 1, r.count === 0 && r.attemptedToUnsubscribe && r.unsubscribe());
        }, e;
    }(pe),
    Nl = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r) {
            var n = t.call(this) || this;
            return n._value = r, n;
        }
        return Object.defineProperty(e.prototype, "value", {
            get: function() {
                return this.getValue();
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype._subscribe = function(r) {
            var n = t.prototype._subscribe.call(this, r);
            return n && !n.closed && r.next(this._value), n;
        }, e.prototype.getValue = function() {
            if (this.hasError)
                throw this.thrownError;
            if (this.closed)
                throw new Mt();
            return this._value;
        }, e.prototype.next = function(r) {
            t.prototype.next.call(this, this._value = r);
        }, e;
    }(Ie),
    Jd = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r, n) {
            return t.call(this) || this;
        }
        return e.prototype.schedule = function(r, n) {
            return this;
        }, e;
    }(pe),
    vn = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r, n) {
            var i = t.call(this, r, n) || this;
            return i.scheduler = r, i.work = n, i.pending = !1, i;
        }
        return e.prototype.schedule = function(r, n) {
            if (n === void 0 && (n = 0), this.closed)
                return this;
            this.state = r;
            var i = this.id,
                s = this.scheduler;
            return i != null && (this.id = this.recycleAsyncId(s, i, n)), this.pending = !0, this.delay = n, this.id = this.id || this.requestAsyncId(s, this.id, n), this;
        }, e.prototype.requestAsyncId = function(r, n, i) {
            return i === void 0 && (i = 0), setInterval(r.flush.bind(r, this), i);
        }, e.prototype.recycleAsyncId = function(r, n, i) {
            if (i === void 0 && (i = 0), i !== null && this.delay === i && this.pending === !1)
                return n;
            clearInterval(n);
        }, e.prototype.execute = function(r, n) {
            if (this.closed)
                return new Error("executing a cancelled action");
            this.pending = !1;
            var i = this._execute(r, n);
            if (i)
                return i;
            this.pending === !1 && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
        }, e.prototype._execute = function(r, n) {
            var i = !1,
                s = void 0;
            try {
                this.work(r);
            } catch (o) {
                i = !0, s = !!o && o || new Error(o);
            }
            if (i)
                return this.unsubscribe(), s;
        }, e.prototype._unsubscribe = function() {
            var r = this.id,
                n = this.scheduler,
                i = n.actions,
                s = i.indexOf(this);
            this.work = null, this.state = null, this.pending = !1, this.scheduler = null, s !== -1 && i.splice(s, 1), r != null && (this.id = this.recycleAsyncId(n, r, null)), this.delay = null;
        }, e;
    }(Jd),
    Qd = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r, n) {
            var i = t.call(this, r, n) || this;
            return i.scheduler = r, i.work = n, i;
        }
        return e.prototype.schedule = function(r, n) {
            return n === void 0 && (n = 0), n > 0 ? t.prototype.schedule.call(this, r, n) : (this.delay = n, this.state = r, this.scheduler.flush(this), this);
        }, e.prototype.execute = function(r, n) {
            return n > 0 || this.closed ? t.prototype.execute.call(this, r, n) : this._execute(r, n);
        }, e.prototype.requestAsyncId = function(r, n, i) {
            return i === void 0 && (i = 0), i !== null && i > 0 || i === null && this.delay > 0 ? t.prototype.requestAsyncId.call(this, r, n, i) : r.flush(this);
        }, e;
    }(vn),
    pa = /* @__PURE__ */ function() {
        function t(e, r) {
            r === void 0 && (r = t.now), this.SchedulerAction = e, this.now = r;
        }
        return t.prototype.schedule = function(e, r, n) {
            return r === void 0 && (r = 0), new this.SchedulerAction(this, e).schedule(n, r);
        }, t.now = function() {
            return Date.now();
        }, t;
    }(),
    wn = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r, n) {
            n === void 0 && (n = pa.now);
            var i = t.call(this, r, function() {
                return e.delegate && e.delegate !== i ? e.delegate.now() : n();
            }) || this;
            return i.actions = [], i.active = !1, i.scheduled = void 0, i;
        }
        return e.prototype.schedule = function(r, n, i) {
            return n === void 0 && (n = 0), e.delegate && e.delegate !== this ? e.delegate.schedule(r, n, i) : t.prototype.schedule.call(this, r, n, i);
        }, e.prototype.flush = function(r) {
            var n = this.actions;
            if (this.active) {
                n.push(r);
                return;
            }
            var i;
            this.active = !0;
            do
                if (i = r.execute(r.state, r.delay))
                    break;
            while (r = n.shift());
            if (this.active = !1, i) {
                for (; r = n.shift();)
                    r.unsubscribe();
                throw i;
            }
        }, e;
    }(pa),
    Kd = /* @__PURE__ */ function(t) {
        M(e, t);

        function e() {
            return t !== null && t.apply(this, arguments) || this;
        }
        return e;
    }(wn),
    Dl = /* @__PURE__ */ new Kd(Qd),
    Ll = Dl,
    kr = /* @__PURE__ */ new J(function(t) {
        return t.complete();
    });

function Fr(t) {
    return t ? Xd(t) : kr;
}

function Xd(t) {
    return new J(function(e) {
        return t.schedule(function() {
            return e.complete();
        });
    });
}

function We(t) {
    return t && typeof t.schedule == "function";
}
var Pl = function(t) {
    return function(e) {
        for (var r = 0, n = t.length; r < n && !e.closed; r++)
            e.next(t[r]);
        e.complete();
    };
};

function Ga(t, e) {
    return new J(function(r) {
        var n = new pe(),
            i = 0;
        return n.add(e.schedule(function() {
            if (i === t.length) {
                r.complete();
                return;
            }
            r.next(t[i++]), r.closed || n.add(this.schedule());
        })), n;
    });
}

function En(t, e) {
    return e ? Ga(t, e) : new J(Pl(t));
}

function Ci() {
    for (var t = [], e = 0; e < arguments.length; e++)
        t[e] = arguments[e];
    var r = t[t.length - 1];
    return We(r) ? (t.pop(), Ga(t, r)) : En(t);
}

function $a(t, e) {
    return e ? new J(function(r) {
        return e.schedule(ep, 0, {
            error: t,
            subscriber: r
        });
    }) : new J(function(r) {
        return r.error(t);
    });
}

function ep(t) {
    var e = t.error,
        r = t.subscriber;
    r.error(e);
}
var _a;
_a || (_a = {});
var vt = /* @__PURE__ */ function() {
    function t(e, r, n) {
        this.kind = e, this.value = r, this.error = n, this.hasValue = e === "N";
    }
    return t.prototype.observe = function(e) {
        switch (this.kind) {
            case "N":
                return e.next && e.next(this.value);
            case "E":
                return e.error && e.error(this.error);
            case "C":
                return e.complete && e.complete();
        }
    }, t.prototype.do = function(e, r, n) {
        var i = this.kind;
        switch (i) {
            case "N":
                return e && e(this.value);
            case "E":
                return r && r(this.error);
            case "C":
                return n && n();
        }
    }, t.prototype.accept = function(e, r, n) {
        return e && typeof e.next == "function" ? this.observe(e) : this.do(e, r, n);
    }, t.prototype.toObservable = function() {
        var e = this.kind;
        switch (e) {
            case "N":
                return Ci(this.value);
            case "E":
                return $a(this.error);
            case "C":
                return Fr();
        }
        throw new Error("unexpected notification kind value");
    }, t.createNext = function(e) {
        return typeof e < "u" ? new t("N", e) : t.undefinedValueNotification;
    }, t.createError = function(e) {
        return new t("E", void 0, e);
    }, t.createComplete = function() {
        return t.completeNotification;
    }, t.completeNotification = new t("C"), t.undefinedValueNotification = new t("N", void 0), t;
}();

function tp(t, e) {
    return e === void 0 && (e = 0),
        function(n) {
            return n.lift(new rp(t, e));
        };
}
var rp = /* @__PURE__ */ function() {
        function t(e, r) {
            r === void 0 && (r = 0), this.scheduler = e, this.delay = r;
        }
        return t.prototype.call = function(e, r) {
            return r.subscribe(new jl(e, this.scheduler, this.delay));
        }, t;
    }(),
    jl = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r, n, i) {
            i === void 0 && (i = 0);
            var s = t.call(this, r) || this;
            return s.scheduler = n, s.delay = i, s;
        }
        return e.dispatch = function(r) {
            var n = r.notification,
                i = r.destination;
            n.observe(i), this.unsubscribe();
        }, e.prototype.scheduleMessage = function(r) {
            var n = this.destination;
            n.add(this.scheduler.schedule(e.dispatch, this.delay, new np(r, this.destination)));
        }, e.prototype._next = function(r) {
            this.scheduleMessage(vt.createNext(r));
        }, e.prototype._error = function(r) {
            this.scheduleMessage(vt.createError(r)), this.unsubscribe();
        }, e.prototype._complete = function() {
            this.scheduleMessage(vt.createComplete()), this.unsubscribe();
        }, e;
    }(H),
    np = /* @__PURE__ */ function() {
        function t(e, r) {
            this.notification = e, this.destination = r;
        }
        return t;
    }(),
    Va = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r, n, i) {
            r === void 0 && (r = Number.POSITIVE_INFINITY), n === void 0 && (n = Number.POSITIVE_INFINITY);
            var s = t.call(this) || this;
            return s.scheduler = i, s._events = [], s._infiniteTimeWindow = !1, s._bufferSize = r < 1 ? 1 : r, s._windowTime = n < 1 ? 1 : n, n === Number.POSITIVE_INFINITY ? (s._infiniteTimeWindow = !0, s.next = s.nextInfiniteTimeWindow) : s.next = s.nextTimeWindow, s;
        }
        return e.prototype.nextInfiniteTimeWindow = function(r) {
            if (!this.isStopped) {
                var n = this._events;
                n.push(r), n.length > this._bufferSize && n.shift();
            }
            t.prototype.next.call(this, r);
        }, e.prototype.nextTimeWindow = function(r) {
            this.isStopped || (this._events.push(new ip(this._getNow(), r)), this._trimBufferThenGetEvents()), t.prototype.next.call(this, r);
        }, e.prototype._subscribe = function(r) {
            var n = this._infiniteTimeWindow,
                i = n ? this._events : this._trimBufferThenGetEvents(),
                s = this.scheduler,
                o = i.length,
                a;
            if (this.closed)
                throw new Mt();
            if (this.isStopped || this.hasError ? a = pe.EMPTY : (this.observers.push(r), a = new Ml(this, r)), s && r.add(r = new jl(r, s)), n)
                for (var c = 0; c < o && !r.closed; c++)
                    r.next(i[c]);
            else
                for (var c = 0; c < o && !r.closed; c++)
                    r.next(i[c].value);
            return this.hasError ? r.error(this.thrownError) : this.isStopped && r.complete(), a;
        }, e.prototype._getNow = function() {
            return (this.scheduler || Ll).now();
        }, e.prototype._trimBufferThenGetEvents = function() {
            for (var r = this._getNow(), n = this._bufferSize, i = this._windowTime, s = this._events, o = s.length, a = 0; a < o && !(r - s[a].time < i);)
                a++;
            return o > n && (a = Math.max(a, o - n)), a > 0 && s.splice(0, a), s;
        }, e;
    }(Ie),
    ip = /* @__PURE__ */ function() {
        function t(e, r) {
            this.time = e, this.value = r;
        }
        return t;
    }(),
    Hr = /* @__PURE__ */ function(t) {
        M(e, t);

        function e() {
            var r = t !== null && t.apply(this, arguments) || this;
            return r.value = null, r.hasNext = !1, r.hasCompleted = !1, r;
        }
        return e.prototype._subscribe = function(r) {
            return this.hasError ? (r.error(this.thrownError), pe.EMPTY) : this.hasCompleted && this.hasNext ? (r.next(this.value), r.complete(), pe.EMPTY) : t.prototype._subscribe.call(this, r);
        }, e.prototype.next = function(r) {
            this.hasCompleted || (this.value = r, this.hasNext = !0);
        }, e.prototype.error = function(r) {
            this.hasCompleted || t.prototype.error.call(this, r);
        }, e.prototype.complete = function() {
            this.hasCompleted = !0, this.hasNext && t.prototype.next.call(this, this.value), t.prototype.complete.call(this);
        }, e;
    }(Ie),
    sp = 1,
    op = /* @__PURE__ */ function() {
        return /* @__PURE__ */ Promise.resolve();
    }(),
    ba = {};

function jc(t) {
    return t in ba ? (delete ba[t], !0) : !1;
}
var Bc = {
        setImmediate: function(t) {
            var e = sp++;
            return ba[e] = !0, op.then(function() {
                return jc(e) && t();
            }), e;
        },
        clearImmediate: function(t) {
            jc(t);
        }
    },
    ap = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r, n) {
            var i = t.call(this, r, n) || this;
            return i.scheduler = r, i.work = n, i;
        }
        return e.prototype.requestAsyncId = function(r, n, i) {
            return i === void 0 && (i = 0), i !== null && i > 0 ? t.prototype.requestAsyncId.call(this, r, n, i) : (r.actions.push(this), r.scheduled || (r.scheduled = Bc.setImmediate(r.flush.bind(r, null))));
        }, e.prototype.recycleAsyncId = function(r, n, i) {
            if (i === void 0 && (i = 0), i !== null && i > 0 || i === null && this.delay > 0)
                return t.prototype.recycleAsyncId.call(this, r, n, i);
            r.actions.length === 0 && (Bc.clearImmediate(n), r.scheduled = void 0);
        }, e;
    }(vn),
    cp = /* @__PURE__ */ function(t) {
        M(e, t);

        function e() {
            return t !== null && t.apply(this, arguments) || this;
        }
        return e.prototype.flush = function(r) {
            this.active = !0, this.scheduled = void 0;
            var n = this.actions,
                i, s = -1,
                o = n.length;
            r = r || n.shift();
            do
                if (i = r.execute(r.state, r.delay))
                    break;
            while (++s < o && (r = n.shift()));
            if (this.active = !1, i) {
                for (; ++s < o && (r = n.shift());)
                    r.unsubscribe();
                throw i;
            }
        }, e;
    }(wn),
    Bl = /* @__PURE__ */ new cp(ap),
    Qn = Bl,
    Ul = /* @__PURE__ */ new wn(vn),
    Be = Ul,
    up = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r, n) {
            var i = t.call(this, r, n) || this;
            return i.scheduler = r, i.work = n, i;
        }
        return e.prototype.requestAsyncId = function(r, n, i) {
            return i === void 0 && (i = 0), i !== null && i > 0 ? t.prototype.requestAsyncId.call(this, r, n, i) : (r.actions.push(this), r.scheduled || (r.scheduled = requestAnimationFrame(function() {
                return r.flush(null);
            })));
        }, e.prototype.recycleAsyncId = function(r, n, i) {
            if (i === void 0 && (i = 0), i !== null && i > 0 || i === null && this.delay > 0)
                return t.prototype.recycleAsyncId.call(this, r, n, i);
            r.actions.length === 0 && (cancelAnimationFrame(n), r.scheduled = void 0);
        }, e;
    }(vn),
    lp = /* @__PURE__ */ function(t) {
        M(e, t);

        function e() {
            return t !== null && t.apply(this, arguments) || this;
        }
        return e.prototype.flush = function(r) {
            this.active = !0, this.scheduled = void 0;
            var n = this.actions,
                i, s = -1,
                o = n.length;
            r = r || n.shift();
            do
                if (i = r.execute(r.state, r.delay))
                    break;
            while (++s < o && (r = n.shift()));
            if (this.active = !1, i) {
                for (; ++s < o && (r = n.shift());)
                    r.unsubscribe();
                throw i;
            }
        }, e;
    }(wn),
    Fl = /* @__PURE__ */ new lp(up),
    fp = Fl,
    hp = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r, n) {
            r === void 0 && (r = Hl), n === void 0 && (n = Number.POSITIVE_INFINITY);
            var i = t.call(this, r, function() {
                return i.frame;
            }) || this;
            return i.maxFrames = n, i.frame = 0, i.index = -1, i;
        }
        return e.prototype.flush = function() {
            for (var r = this, n = r.actions, i = r.maxFrames, s, o;
                (o = n[0]) && o.delay <= i && (n.shift(), this.frame = o.delay, !(s = o.execute(o.state, o.delay)));)
            ;
            if (s) {
                for (; o = n.shift();)
                    o.unsubscribe();
                throw s;
            }
        }, e.frameTimeFactor = 10, e;
    }(wn),
    Hl = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r, n, i) {
            i === void 0 && (i = r.index += 1);
            var s = t.call(this, r, n) || this;
            return s.scheduler = r, s.work = n, s.index = i, s.active = !0, s.index = r.index = i, s;
        }
        return e.prototype.schedule = function(r, n) {
            if (n === void 0 && (n = 0), !this.id)
                return t.prototype.schedule.call(this, r, n);
            this.active = !1;
            var i = new e(this.scheduler, this.work);
            return this.add(i), i.schedule(r, n);
        }, e.prototype.requestAsyncId = function(r, n, i) {
            i === void 0 && (i = 0), this.delay = r.frame + i;
            var s = r.actions;
            return s.push(this), s.sort(e.sortActions), !0;
        }, e.prototype.recycleAsyncId = function(r, n, i) {}, e.prototype._execute = function(r, n) {
            if (this.active === !0)
                return t.prototype._execute.call(this, r, n);
        }, e.sortActions = function(r, n) {
            return r.delay === n.delay ? r.index === n.index ? 0 : r.index > n.index ? 1 : -1 : r.delay > n.delay ? 1 : -1;
        }, e;
    }(vn);

function ut() {}

function dp(t) {
    return !!t && (t instanceof J || typeof t.lift == "function" && typeof t.subscribe == "function");
}
var pp = /* @__PURE__ */ function() {
        function t() {
            return Error.call(this), this.message = "argument out of range", this.name = "ArgumentOutOfRangeError", this;
        }
        return t.prototype = /* @__PURE__ */ Object.create(Error.prototype), t;
    }(),
    Rr = pp,
    _p = /* @__PURE__ */ function() {
        function t() {
            return Error.call(this), this.message = "no elements in sequence", this.name = "EmptyError", this;
        }
        return t.prototype = /* @__PURE__ */ Object.create(Error.prototype), t;
    }(),
    Sn = _p,
    bp = /* @__PURE__ */ function() {
        function t() {
            return Error.call(this), this.message = "Timeout has occurred", this.name = "TimeoutError", this;
        }
        return t.prototype = /* @__PURE__ */ Object.create(Error.prototype), t;
    }(),
    Wl = bp;

function Ke(t, e) {
    return function(n) {
        if (typeof t != "function")
            throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");
        return n.lift(new gp(t, e));
    };
}
var gp = /* @__PURE__ */ function() {
        function t(e, r) {
            this.project = e, this.thisArg = r;
        }
        return t.prototype.call = function(e, r) {
            return r.subscribe(new mp(e, this.project, this.thisArg));
        }, t;
    }(),
    mp = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r, n, i) {
            var s = t.call(this, r) || this;
            return s.project = n, s.count = 0, s.thisArg = i || s, s;
        }
        return e.prototype._next = function(r) {
            var n;
            try {
                n = this.project.call(this.thisArg, r, this.count++);
            } catch (i) {
                this.destination.error(i);
                return;
            }
            this.destination.next(n);
        }, e;
    }(H);

function Gl(t, e, r) {
    if (e)
        if (We(e))
            r = e;
        else
            return function() {
                for (var n = [], i = 0; i < arguments.length; i++)
                    n[i] = arguments[i];
                return Gl(t, r).apply(void 0, n).pipe(Ke(function(s) {
                    return je(s) ? e.apply(void 0, s) : e(s);
                }));
            };
    return function() {
        for (var n = [], i = 0; i < arguments.length; i++)
            n[i] = arguments[i];
        var s = this,
            o, a = {
                context: s,
                subject: o,
                callbackFunc: t,
                scheduler: r
            };
        return new J(function(c) {
            if (r) {
                var l = {
                    args: n,
                    subscriber: c,
                    params: a
                };
                return r.schedule(yp, 0, l);
            } else {
                if (!o) {
                    o = new Hr();
                    var u = function() {
                        for (var b = [], f = 0; f < arguments.length; f++)
                            b[f] = arguments[f];
                        o.next(b.length <= 1 ? b[0] : b), o.complete();
                    };
                    try {
                        t.apply(s, n.concat([u]));
                    } catch (b) {
                        Ha(o) ? o.error(b) : console.warn(b);
                    }
                }
                return o.subscribe(c);
            }
        });
    };
}

function yp(t) {
    var e = this,
        r = t.args,
        n = t.subscriber,
        i = t.params,
        s = i.callbackFunc,
        o = i.context,
        a = i.scheduler,
        c = i.subject;
    if (!c) {
        c = i.subject = new Hr();
        var u = function() {
            for (var l = [], b = 0; b < arguments.length; b++)
                l[b] = arguments[b];
            var f = l.length <= 1 ? l[0] : l;
            e.add(a.schedule(vp, 0, {
                value: f,
                subject: c
            }));
        };
        try {
            s.apply(o, r.concat([u]));
        } catch (l) {
            c.error(l);
        }
    }
    this.add(c.subscribe(n));
}

function vp(t) {
    var e = t.value,
        r = t.subject;
    r.next(e), r.complete();
}

function $l(t, e, r) {
    if (e)
        if (We(e))
            r = e;
        else
            return function() {
                for (var n = [], i = 0; i < arguments.length; i++)
                    n[i] = arguments[i];
                return $l(t, r).apply(void 0, n).pipe(Ke(function(s) {
                    return je(s) ? e.apply(void 0, s) : e(s);
                }));
            };
    return function() {
        for (var n = [], i = 0; i < arguments.length; i++)
            n[i] = arguments[i];
        var s = {
            subject: void 0,
            args: n,
            callbackFunc: t,
            scheduler: r,
            context: this
        };
        return new J(function(o) {
            var a = s.context,
                c = s.subject;
            if (r)
                return r.schedule(wp, 0, {
                    params: s,
                    subscriber: o,
                    context: a
                });
            if (!c) {
                c = s.subject = new Hr();
                var u = function() {
                    for (var l = [], b = 0; b < arguments.length; b++)
                        l[b] = arguments[b];
                    var f = l.shift();
                    if (f) {
                        c.error(f);
                        return;
                    }
                    c.next(l.length <= 1 ? l[0] : l), c.complete();
                };
                try {
                    t.apply(a, n.concat([u]));
                } catch (l) {
                    Ha(c) ? c.error(l) : console.warn(l);
                }
            }
            return c.subscribe(o);
        });
    };
}

function wp(t) {
    var e = this,
        r = t.params,
        n = t.subscriber,
        i = t.context,
        s = r.callbackFunc,
        o = r.args,
        a = r.scheduler,
        c = r.subject;
    if (!c) {
        c = r.subject = new Hr();
        var u = function() {
            for (var l = [], b = 0; b < arguments.length; b++)
                l[b] = arguments[b];
            var f = l.shift();
            if (f)
                e.add(a.schedule(Uc, 0, {
                    err: f,
                    subject: c
                }));
            else {
                var p = l.length <= 1 ? l[0] : l;
                e.add(a.schedule(Ep, 0, {
                    value: p,
                    subject: c
                }));
            }
        };
        try {
            s.apply(i, o.concat([u]));
        } catch (l) {
            this.add(a.schedule(Uc, 0, {
                err: l,
                subject: c
            }));
        }
    }
    this.add(c.subscribe(n));
}

function Ep(t) {
    var e = t.value,
        r = t.subject;
    r.next(e), r.complete();
}

function Uc(t) {
    var e = t.err,
        r = t.subject;
    r.error(e);
}
var rr = /* @__PURE__ */ function(t) {
        M(e, t);

        function e() {
            return t !== null && t.apply(this, arguments) || this;
        }
        return e.prototype.notifyNext = function(r, n, i, s, o) {
            this.destination.next(n);
        }, e.prototype.notifyError = function(r, n) {
            this.destination.error(r);
        }, e.prototype.notifyComplete = function(r) {
            this.destination.complete();
        }, e;
    }(H),
    Sp = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r, n, i) {
            var s = t.call(this) || this;
            return s.parent = r, s.outerValue = n, s.outerIndex = i, s.index = 0, s;
        }
        return e.prototype._next = function(r) {
            this.parent.notifyNext(this.outerValue, r, this.outerIndex, this.index++, this);
        }, e.prototype._error = function(r) {
            this.parent.notifyError(r, this), this.unsubscribe();
        }, e.prototype._complete = function() {
            this.parent.notifyComplete(this), this.unsubscribe();
        }, e;
    }(H),
    kp = function(t) {
        return function(e) {
            return t.then(function(r) {
                e.closed || (e.next(r), e.complete());
            }, function(r) {
                return e.error(r);
            }).then(null, pr), e;
        };
    };

function Rp() {
    return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var jt = /* @__PURE__ */ Rp(),
    Ip = function(t) {
        return function(e) {
            var r = t[jt]();
            do {
                var n = void 0;
                try {
                    n = r.next();
                } catch (i) {
                    return e.error(i), e;
                }
                if (n.done) {
                    e.complete();
                    break;
                }
                if (e.next(n.value), e.closed)
                    break;
            } while (!0);
            return typeof r.return == "function" && e.add(function() {
                r.return && r.return();
            }), e;
        };
    },
    Ap = function(t) {
        return function(e) {
            var r = t[Ur]();
            if (typeof r.subscribe != "function")
                throw new TypeError("Provided object does not correctly implement Symbol.observable");
            return r.subscribe(e);
        };
    },
    Vl = function(t) {
        return t && typeof t.length == "number" && typeof t != "function";
    };

function zl(t) {
    return !!t && typeof t.subscribe != "function" && typeof t.then == "function";
}
var dn = function(t) {
    if (t && typeof t[Ur] == "function")
        return Ap(t);
    if (Vl(t))
        return Pl(t);
    if (zl(t))
        return kp(t);
    if (t && typeof t[jt] == "function")
        return Ip(t);
    var e = Fa(t) ? "an invalid object" : "'" + t + "'",
        r = "You provided " + e + " where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.";
    throw new TypeError(r);
};

function wt(t, e, r, n, i) {
    if (i === void 0 && (i = new Sp(t, r, n)), !i.closed)
        return e instanceof J ? e.subscribe(i) : dn(e)(i);
}
var Fc = {};

function Tp() {
    for (var t = [], e = 0; e < arguments.length; e++)
        t[e] = arguments[e];
    var r = void 0,
        n = void 0;
    return We(t[t.length - 1]) && (n = t.pop()), typeof t[t.length - 1] == "function" && (r = t.pop()), t.length === 1 && je(t[0]) && (t = t[0]), En(t, n).lift(new za(r));
}
var za = /* @__PURE__ */ function() {
        function t(e) {
            this.resultSelector = e;
        }
        return t.prototype.call = function(e, r) {
            return r.subscribe(new Cp(e, this.resultSelector));
        }, t;
    }(),
    Cp = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r, n) {
            var i = t.call(this, r) || this;
            return i.resultSelector = n, i.active = 0, i.values = [], i.observables = [], i;
        }
        return e.prototype._next = function(r) {
            this.values.push(Fc), this.observables.push(r);
        }, e.prototype._complete = function() {
            var r = this.observables,
                n = r.length;
            if (n === 0)
                this.destination.complete();
            else {
                this.active = n, this.toRespond = n;
                for (var i = 0; i < n; i++) {
                    var s = r[i];
                    this.add(wt(this, s, void 0, i));
                }
            }
        }, e.prototype.notifyComplete = function(r) {
            (this.active -= 1) === 0 && this.destination.complete();
        }, e.prototype.notifyNext = function(r, n, i) {
            var s = this.values,
                o = s[i],
                a = this.toRespond ? o === Fc ? --this.toRespond : this.toRespond : 0;
            s[i] = n, a === 0 && (this.resultSelector ? this._tryResultSelector(s) : this.destination.next(s.slice()));
        }, e.prototype._tryResultSelector = function(r) {
            var n;
            try {
                n = this.resultSelector.apply(this, r);
            } catch (i) {
                this.destination.error(i);
                return;
            }
            this.destination.next(n);
        }, e;
    }(rr);

function Mp(t, e) {
    return new J(function(r) {
        var n = new pe();
        return n.add(e.schedule(function() {
            var i = t[Ur]();
            n.add(i.subscribe({
                next: function(s) {
                    n.add(e.schedule(function() {
                        return r.next(s);
                    }));
                },
                error: function(s) {
                    n.add(e.schedule(function() {
                        return r.error(s);
                    }));
                },
                complete: function() {
                    n.add(e.schedule(function() {
                        return r.complete();
                    }));
                }
            }));
        })), n;
    });
}

function xp(t, e) {
    return new J(function(r) {
        var n = new pe();
        return n.add(e.schedule(function() {
            return t.then(function(i) {
                n.add(e.schedule(function() {
                    r.next(i), n.add(e.schedule(function() {
                        return r.complete();
                    }));
                }));
            }, function(i) {
                n.add(e.schedule(function() {
                    return r.error(i);
                }));
            });
        })), n;
    });
}

function Op(t, e) {
    if (!t)
        throw new Error("Iterable cannot be null");
    return new J(function(r) {
        var n = new pe(),
            i;
        return n.add(function() {
            i && typeof i.return == "function" && i.return();
        }), n.add(e.schedule(function() {
            i = t[jt](), n.add(e.schedule(function() {
                if (!r.closed) {
                    var s, o;
                    try {
                        var a = i.next();
                        s = a.value, o = a.done;
                    } catch (c) {
                        r.error(c);
                        return;
                    }
                    o ? r.complete() : (r.next(s), this.schedule());
                }
            }));
        })), n;
    });
}

function Np(t) {
    return t && typeof t[Ur] == "function";
}

function Dp(t) {
    return t && typeof t[jt] == "function";
}

function Zl(t, e) {
    if (t != null) {
        if (Np(t))
            return Mp(t, e);
        if (zl(t))
            return xp(t, e);
        if (Vl(t))
            return Ga(t, e);
        if (Dp(t) || typeof t == "string")
            return Op(t, e);
    }
    throw new TypeError((t !== null && typeof t || t) + " is not observable");
}

function St(t, e) {
    return e ? Zl(t, e) : t instanceof J ? t : new J(dn(t));
}
var _e = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r) {
            var n = t.call(this) || this;
            return n.parent = r, n;
        }
        return e.prototype._next = function(r) {
            this.parent.notifyNext(r);
        }, e.prototype._error = function(r) {
            this.parent.notifyError(r), this.unsubscribe();
        }, e.prototype._complete = function() {
            this.parent.notifyComplete(), this.unsubscribe();
        }, e;
    }(H),
    be = /* @__PURE__ */ function(t) {
        M(e, t);

        function e() {
            return t !== null && t.apply(this, arguments) || this;
        }
        return e.prototype.notifyNext = function(r) {
            this.destination.next(r);
        }, e.prototype.notifyError = function(r) {
            this.destination.error(r);
        }, e.prototype.notifyComplete = function() {
            this.destination.complete();
        }, e;
    }(H);

function ge(t, e) {
    if (!e.closed) {
        if (t instanceof J)
            return t.subscribe(e);
        var r;
        try {
            r = dn(t)(e);
        } catch (n) {
            e.error(n);
        }
        return r;
    }
}

function Xt(t, e, r) {
    return r === void 0 && (r = Number.POSITIVE_INFINITY), typeof e == "function" ? function(n) {
        return n.pipe(Xt(function(i, s) {
            return St(t(i, s)).pipe(Ke(function(o, a) {
                return e(i, o, s, a);
            }));
        }, r));
    } : (typeof e == "number" && (r = e), function(n) {
        return n.lift(new Lp(t, r));
    });
}
var Lp = /* @__PURE__ */ function() {
        function t(e, r) {
            r === void 0 && (r = Number.POSITIVE_INFINITY), this.project = e, this.concurrent = r;
        }
        return t.prototype.call = function(e, r) {
            return r.subscribe(new Pp(e, this.project, this.concurrent));
        }, t;
    }(),
    Pp = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r, n, i) {
            i === void 0 && (i = Number.POSITIVE_INFINITY);
            var s = t.call(this, r) || this;
            return s.project = n, s.concurrent = i, s.hasCompleted = !1, s.buffer = [], s.active = 0, s.index = 0, s;
        }
        return e.prototype._next = function(r) {
            this.active < this.concurrent ? this._tryNext(r) : this.buffer.push(r);
        }, e.prototype._tryNext = function(r) {
            var n, i = this.index++;
            try {
                n = this.project(r, i);
            } catch (s) {
                this.destination.error(s);
                return;
            }
            this.active++, this._innerSub(n);
        }, e.prototype._innerSub = function(r) {
            var n = new _e(this),
                i = this.destination;
            i.add(n);
            var s = ge(r, n);
            s !== n && i.add(s);
        }, e.prototype._complete = function() {
            this.hasCompleted = !0, this.active === 0 && this.buffer.length === 0 && this.destination.complete(), this.unsubscribe();
        }, e.prototype.notifyNext = function(r) {
            this.destination.next(r);
        }, e.prototype.notifyComplete = function() {
            var r = this.buffer;
            this.active--, r.length > 0 ? this._next(r.shift()) : this.active === 0 && this.hasCompleted && this.destination.complete();
        }, e;
    }(be),
    jp = Xt;

function Za(t) {
    return t === void 0 && (t = Number.POSITIVE_INFINITY), Xt(Pt, t);
}

function ql() {
    return Za(1);
}

function pn() {
    for (var t = [], e = 0; e < arguments.length; e++)
        t[e] = arguments[e];
    return ql()(Ci.apply(void 0, t));
}

function qa(t) {
    return new J(function(e) {
        var r;
        try {
            r = t();
        } catch (i) {
            e.error(i);
            return;
        }
        var n = r ? St(r) : Fr();
        return n.subscribe(e);
    });
}

function Bp() {
    for (var t = [], e = 0; e < arguments.length; e++)
        t[e] = arguments[e];
    if (t.length === 1) {
        var r = t[0];
        if (je(r))
            return Fn(r, null);
        if (Fa(r) && Object.getPrototypeOf(r) === Object.prototype) {
            var n = Object.keys(r);
            return Fn(n.map(function(s) {
                return r[s];
            }), n);
        }
    }
    if (typeof t[t.length - 1] == "function") {
        var i = t.pop();
        return t = t.length === 1 && je(t[0]) ? t[0] : t, Fn(t, null).pipe(Ke(function(s) {
            return i.apply(void 0, s);
        }));
    }
    return Fn(t, null);
}

function Fn(t, e) {
    return new J(function(r) {
        var n = t.length;
        if (n === 0) {
            r.complete();
            return;
        }
        for (var i = new Array(n), s = 0, o = 0, a = function(u) {
                var l = St(t[u]),
                    b = !1;
                r.add(l.subscribe({
                    next: function(f) {
                        b || (b = !0, o++), i[u] = f;
                    },
                    error: function(f) {
                        return r.error(f);
                    },
                    complete: function() {
                        s++, (s === n || !b) && (o === n && r.next(e ? e.reduce(function(f, p, g) {
                            return f[p] = i[g], f;
                        }, {}) : i), r.complete());
                    }
                }));
            }, c = 0; c < n; c++)
            a(c);
    });
}

function Yl(t, e, r, n) {
    return Sr(r) && (n = r, r = void 0), n ? Yl(t, e, r).pipe(Ke(function(i) {
        return je(i) ? n.apply(void 0, i) : n(i);
    })) : new J(function(i) {
        function s(o) {
            arguments.length > 1 ? i.next(Array.prototype.slice.call(arguments)) : i.next(o);
        }
        Jl(t, e, s, i, r);
    });
}

function Jl(t, e, r, n, i) {
    var s;
    if (Hp(t)) {
        var o = t;
        t.addEventListener(e, r, i), s = function() {
            return o.removeEventListener(e, r, i);
        };
    } else if (Fp(t)) {
        var a = t;
        t.on(e, r), s = function() {
            return a.off(e, r);
        };
    } else if (Up(t)) {
        var c = t;
        t.addListener(e, r), s = function() {
            return c.removeListener(e, r);
        };
    } else if (t && t.length)
        for (var u = 0, l = t.length; u < l; u++)
            Jl(t[u], e, r, n, i);
    else
        throw new TypeError("Invalid event target");
    n.add(s);
}

function Up(t) {
    return t && typeof t.addListener == "function" && typeof t.removeListener == "function";
}

function Fp(t) {
    return t && typeof t.on == "function" && typeof t.off == "function";
}

function Hp(t) {
    return t && typeof t.addEventListener == "function" && typeof t.removeEventListener == "function";
}

function Ql(t, e, r) {
    return r ? Ql(t, e).pipe(Ke(function(n) {
        return je(n) ? r.apply(void 0, n) : r(n);
    })) : new J(function(n) {
        var i = function() {
                for (var o = [], a = 0; a < arguments.length; a++)
                    o[a] = arguments[a];
                return n.next(o.length === 1 ? o[0] : o);
            },
            s;
        try {
            s = t(i);
        } catch (o) {
            n.error(o);
            return;
        }
        if (Sr(e))
            return function() {
                return e(i, s);
            };
    });
}

function Wp(t, e, r, n, i) {
    var s, o;
    if (arguments.length == 1) {
        var a = t;
        o = a.initialState, e = a.condition, r = a.iterate, s = a.resultSelector || Pt, i = a.scheduler;
    } else
        n === void 0 || We(n) ? (o = t, s = Pt, i = n) : (o = t, s = n);
    return new J(function(c) {
        var u = o;
        if (i)
            return i.schedule(Gp, 0, {
                subscriber: c,
                iterate: r,
                condition: e,
                resultSelector: s,
                state: u
            });
        do {
            if (e) {
                var l = void 0;
                try {
                    l = e(u);
                } catch (f) {
                    c.error(f);
                    return;
                }
                if (!l) {
                    c.complete();
                    break;
                }
            }
            var b = void 0;
            try {
                b = s(u);
            } catch (f) {
                c.error(f);
                return;
            }
            if (c.next(b), c.closed)
                break;
            try {
                u = r(u);
            } catch (f) {
                c.error(f);
                return;
            }
        } while (!0);
    });
}

function Gp(t) {
    var e = t.subscriber,
        r = t.condition;
    if (!e.closed) {
        if (t.needIterate)
            try {
                t.state = t.iterate(t.state);
            } catch (s) {
                e.error(s);
                return;
            }
        else
            t.needIterate = !0;
        if (r) {
            var n = void 0;
            try {
                n = r(t.state);
            } catch (s) {
                e.error(s);
                return;
            }
            if (!n) {
                e.complete();
                return;
            }
            if (e.closed)
                return;
        }
        var i;
        try {
            i = t.resultSelector(t.state);
        } catch (s) {
            e.error(s);
            return;
        }
        if (!e.closed && (e.next(i), !e.closed))
            return this.schedule(t);
    }
}

function $p(t, e, r) {
    return e === void 0 && (e = kr), r === void 0 && (r = kr), qa(function() {
        return t() ? e : r;
    });
}

function Ir(t) {
    return !je(t) && t - parseFloat(t) + 1 >= 0;
}

function Vp(t, e) {
    return t === void 0 && (t = 0), e === void 0 && (e = Be), (!Ir(t) || t < 0) && (t = 0), (!e || typeof e.schedule != "function") && (e = Be), new J(function(r) {
        return r.add(e.schedule(zp, t, {
            subscriber: r,
            counter: 0,
            period: t
        })), r;
    });
}

function zp(t) {
    var e = t.subscriber,
        r = t.counter,
        n = t.period;
    e.next(r), this.schedule({
        subscriber: e,
        counter: r + 1,
        period: n
    }, n);
}

function Kl() {
    for (var t = [], e = 0; e < arguments.length; e++)
        t[e] = arguments[e];
    var r = Number.POSITIVE_INFINITY,
        n = null,
        i = t[t.length - 1];
    return We(i) ? (n = t.pop(), t.length > 1 && typeof t[t.length - 1] == "number" && (r = t.pop())) : typeof i == "number" && (r = t.pop()), n === null && t.length === 1 && t[0] instanceof J ? t[0] : Za(r)(En(t, n));
}
var Xl = /* @__PURE__ */ new J(ut);

function Zp() {
    return Xl;
}

function ga() {
    for (var t = [], e = 0; e < arguments.length; e++)
        t[e] = arguments[e];
    if (t.length === 0)
        return kr;
    var r = t[0],
        n = t.slice(1);
    return t.length === 1 && je(r) ? ga.apply(void 0, r) : new J(function(i) {
        var s = function() {
            return i.add(ga.apply(void 0, n).subscribe(i));
        };
        return St(r).subscribe({
            next: function(o) {
                i.next(o);
            },
            error: s,
            complete: s
        });
    });
}

function qp(t, e) {
    return e ? new J(function(r) {
        var n = Object.keys(t),
            i = new pe();
        return i.add(e.schedule(Yp, 0, {
            keys: n,
            index: 0,
            subscriber: r,
            subscription: i,
            obj: t
        })), i;
    }) : new J(function(r) {
        for (var n = Object.keys(t), i = 0; i < n.length && !r.closed; i++) {
            var s = n[i];
            t.hasOwnProperty(s) && r.next([s, t[s]]);
        }
        r.complete();
    });
}

function Yp(t) {
    var e = t.keys,
        r = t.index,
        n = t.subscriber,
        i = t.subscription,
        s = t.obj;
    if (!n.closed)
        if (r < e.length) {
            var o = e[r];
            n.next([o, s[o]]), i.add(this.schedule({
                keys: e,
                index: r + 1,
                subscriber: n,
                subscription: i,
                obj: s
            }));
        } else
            n.complete();
}

function ef(t, e) {
    function r() {
        return !r.pred.apply(r.thisArg, arguments);
    }
    return r.pred = t, r.thisArg = e, r;
}

function Bt(t, e) {
    return function(n) {
        return n.lift(new Jp(t, e));
    };
}
var Jp = /* @__PURE__ */ function() {
        function t(e, r) {
            this.predicate = e, this.thisArg = r;
        }
        return t.prototype.call = function(e, r) {
            return r.subscribe(new Qp(e, this.predicate, this.thisArg));
        }, t;
    }(),
    Qp = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r, n, i) {
            var s = t.call(this, r) || this;
            return s.predicate = n, s.thisArg = i, s.count = 0, s;
        }
        return e.prototype._next = function(r) {
            var n;
            try {
                n = this.predicate.call(this.thisArg, r, this.count++);
            } catch (i) {
                this.destination.error(i);
                return;
            }
            n && this.destination.next(r);
        }, e;
    }(H);

function Kp(t, e, r) {
    return [
        Bt(e, r)(new J(dn(t))),
        Bt(ef(e, r))(new J(dn(t)))
    ];
}

function tf() {
    for (var t = [], e = 0; e < arguments.length; e++)
        t[e] = arguments[e];
    if (t.length === 1)
        if (je(t[0]))
            t = t[0];
        else
            return t[0];
    return En(t, void 0).lift(new Xp());
}
var Xp = /* @__PURE__ */ function() {
        function t() {}
        return t.prototype.call = function(e, r) {
            return r.subscribe(new e_(e));
        }, t;
    }(),
    e_ = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r) {
            var n = t.call(this, r) || this;
            return n.hasFirst = !1, n.observables = [], n.subscriptions = [], n;
        }
        return e.prototype._next = function(r) {
            this.observables.push(r);
        }, e.prototype._complete = function() {
            var r = this.observables,
                n = r.length;
            if (n === 0)
                this.destination.complete();
            else {
                for (var i = 0; i < n && !this.hasFirst; i++) {
                    var s = r[i],
                        o = wt(this, s, void 0, i);
                    this.subscriptions && this.subscriptions.push(o), this.add(o);
                }
                this.observables = null;
            }
        }, e.prototype.notifyNext = function(r, n, i) {
            if (!this.hasFirst) {
                this.hasFirst = !0;
                for (var s = 0; s < this.subscriptions.length; s++)
                    if (s !== i) {
                        var o = this.subscriptions[s];
                        o.unsubscribe(), this.remove(o);
                    }
                this.subscriptions = null;
            }
            this.destination.next(n);
        }, e;
    }(rr);

function t_(t, e, r) {
    return t === void 0 && (t = 0), new J(function(n) {
        e === void 0 && (e = t, t = 0);
        var i = 0,
            s = t;
        if (r)
            return r.schedule(r_, 0, {
                index: i,
                count: e,
                start: t,
                subscriber: n
            });
        do {
            if (i++ >= e) {
                n.complete();
                break;
            }
            if (n.next(s++), n.closed)
                break;
        } while (!0);
    });
}

function r_(t) {
    var e = t.start,
        r = t.index,
        n = t.count,
        i = t.subscriber;
    if (r >= n) {
        i.complete();
        return;
    }
    i.next(e), !i.closed && (t.index = r + 1, t.start = e + 1, this.schedule(t));
}

function rf(t, e, r) {
    t === void 0 && (t = 0);
    var n = -1;
    return Ir(e) ? n = Number(e) < 1 && 1 || Number(e) : We(e) && (r = e), We(r) || (r = Be), new J(function(i) {
        var s = Ir(t) ? t : +t - r.now();
        return r.schedule(n_, s, {
            index: 0,
            period: n,
            subscriber: i
        });
    });
}

function n_(t) {
    var e = t.index,
        r = t.period,
        n = t.subscriber;
    if (n.next(e), !n.closed) {
        if (r === -1)
            return n.complete();
        t.index = e + 1, this.schedule(t, r);
    }
}

function i_(t, e) {
    return new J(function(r) {
        var n;
        try {
            n = t();
        } catch (a) {
            r.error(a);
            return;
        }
        var i;
        try {
            i = e(n);
        } catch (a) {
            r.error(a);
            return;
        }
        var s = i ? St(i) : kr,
            o = s.subscribe(r);
        return function() {
            o.unsubscribe(), n && n.unsubscribe();
        };
    });
}

function nf() {
    for (var t = [], e = 0; e < arguments.length; e++)
        t[e] = arguments[e];
    var r = t[t.length - 1];
    return typeof r == "function" && t.pop(), En(t, void 0).lift(new sf(r));
}
var sf = /* @__PURE__ */ function() {
        function t(e) {
            this.resultSelector = e;
        }
        return t.prototype.call = function(e, r) {
            return r.subscribe(new s_(e, this.resultSelector));
        }, t;
    }(),
    s_ = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r, n, i) {
            var s = t.call(this, r) || this;
            return s.resultSelector = n, s.iterators = [], s.active = 0, s.resultSelector = typeof n == "function" ? n : void 0, s;
        }
        return e.prototype._next = function(r) {
            var n = this.iterators;
            je(r) ? n.push(new a_(r)) : typeof r[jt] == "function" ? n.push(new o_(r[jt]())) : n.push(new c_(this.destination, this, r));
        }, e.prototype._complete = function() {
            var r = this.iterators,
                n = r.length;
            if (this.unsubscribe(), n === 0) {
                this.destination.complete();
                return;
            }
            this.active = n;
            for (var i = 0; i < n; i++) {
                var s = r[i];
                if (s.stillUnsubscribed) {
                    var o = this.destination;
                    o.add(s.subscribe());
                } else
                    this.active--;
            }
        }, e.prototype.notifyInactive = function() {
            this.active--, this.active === 0 && this.destination.complete();
        }, e.prototype.checkIterators = function() {
            for (var r = this.iterators, n = r.length, i = this.destination, s = 0; s < n; s++) {
                var o = r[s];
                if (typeof o.hasValue == "function" && !o.hasValue())
                    return;
            }
            for (var a = !1, c = [], s = 0; s < n; s++) {
                var o = r[s],
                    u = o.next();
                if (o.hasCompleted() && (a = !0), u.done) {
                    i.complete();
                    return;
                }
                c.push(u.value);
            }
            this.resultSelector ? this._tryresultSelector(c) : i.next(c), a && i.complete();
        }, e.prototype._tryresultSelector = function(r) {
            var n;
            try {
                n = this.resultSelector.apply(this, r);
            } catch (i) {
                this.destination.error(i);
                return;
            }
            this.destination.next(n);
        }, e;
    }(H),
    o_ = /* @__PURE__ */ function() {
        function t(e) {
            this.iterator = e, this.nextResult = e.next();
        }
        return t.prototype.hasValue = function() {
            return !0;
        }, t.prototype.next = function() {
            var e = this.nextResult;
            return this.nextResult = this.iterator.next(), e;
        }, t.prototype.hasCompleted = function() {
            var e = this.nextResult;
            return Boolean(e && e.done);
        }, t;
    }(),
    a_ = /* @__PURE__ */ function() {
        function t(e) {
            this.array = e, this.index = 0, this.length = 0, this.length = e.length;
        }
        return t.prototype[jt] = function() {
            return this;
        }, t.prototype.next = function(e) {
            var r = this.index++,
                n = this.array;
            return r < this.length ? {
                value: n[r],
                done: !1
            } : {
                value: null,
                done: !0
            };
        }, t.prototype.hasValue = function() {
            return this.array.length > this.index;
        }, t.prototype.hasCompleted = function() {
            return this.array.length === this.index;
        }, t;
    }(),
    c_ = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r, n, i) {
            var s = t.call(this, r) || this;
            return s.parent = n, s.observable = i, s.stillUnsubscribed = !0, s.buffer = [], s.isComplete = !1, s;
        }
        return e.prototype[jt] = function() {
            return this;
        }, e.prototype.next = function() {
            var r = this.buffer;
            return r.length === 0 && this.isComplete ? {
                value: null,
                done: !0
            } : {
                value: r.shift(),
                done: !1
            };
        }, e.prototype.hasValue = function() {
            return this.buffer.length > 0;
        }, e.prototype.hasCompleted = function() {
            return this.buffer.length === 0 && this.isComplete;
        }, e.prototype.notifyComplete = function() {
            this.buffer.length > 0 ? (this.isComplete = !0, this.parent.notifyInactive()) : this.destination.complete();
        }, e.prototype.notifyNext = function(r) {
            this.buffer.push(r), this.parent.checkIterators();
        }, e.prototype.subscribe = function() {
            return ge(this.observable, new _e(this));
        }, e;
    }(be);
const u_ = /* @__PURE__ */ Object.freeze( /* @__PURE__ */ Object.defineProperty({
        __proto__: null,
        ArgumentOutOfRangeError: Rr,
        AsyncSubject: Hr,
        BehaviorSubject: Nl,
        ConnectableObservable: Ol,
        EMPTY: kr,
        EmptyError: Sn,
        GroupedObservable: da,
        NEVER: Xl,
        Notification: vt,
        get NotificationKind() {
            return _a;
        },
        ObjectUnsubscribedError: Mt,
        Observable: J,
        ReplaySubject: Va,
        Scheduler: pa,
        Subject: Ie,
        Subscriber: H,
        Subscription: pe,
        TimeoutError: Wl,
        UnsubscriptionError: rn,
        VirtualAction: Hl,
        VirtualTimeScheduler: hp,
        animationFrame: fp,
        animationFrameScheduler: Fl,
        asap: Qn,
        asapScheduler: Bl,
        async: Be,
        asyncScheduler: Ul,
        bindCallback: Gl,
        bindNodeCallback: $l,
        combineLatest: Tp,
        concat: pn,
        config: Ze,
        defer: qa,
        empty: Fr,
        forkJoin: Bp,
        from: St,
        fromEvent: Yl,
        fromEventPattern: Ql,
        generate: Wp,
        identity: Pt,
        iif: $p,
        interval: Vp,
        isObservable: dp,
        merge: Kl,
        never: Zp,
        noop: ut,
        observable: Ur,
        of: Ci,
        onErrorResumeNext: ga,
        pairs: qp,
        partition: Kp,
        pipe: ha,
        queue: Ll,
        queueScheduler: Dl,
        race: tf,
        range: t_,
        scheduled: Zl,
        throwError: $a,
        timer: rf,
        using: i_,
        zip: nf
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Wr = /* @__PURE__ */ Lr(u_);

function of (t) {
    return function(r) {
        return r.lift(new l_(t));
    };
}
var l_ = /* @__PURE__ */ function() {
        function t(e) {
            this.durationSelector = e;
        }
        return t.prototype.call = function(e, r) {
            return r.subscribe(new f_(e, this.durationSelector));
        }, t;
    }(),
    f_ = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r, n) {
            var i = t.call(this, r) || this;
            return i.durationSelector = n, i.hasValue = !1, i;
        }
        return e.prototype._next = function(r) {
            if (this.value = r, this.hasValue = !0, !this.throttled) {
                var n = void 0;
                try {
                    var i = this.durationSelector;
                    n = i(r);
                } catch (o) {
                    return this.destination.error(o);
                }
                var s = ge(n, new _e(this));
                !s || s.closed ? this.clearThrottle() : this.add(this.throttled = s);
            }
        }, e.prototype.clearThrottle = function() {
            var r = this,
                n = r.value,
                i = r.hasValue,
                s = r.throttled;
            s && (this.remove(s), this.throttled = void 0, s.unsubscribe()), i && (this.value = void 0, this.hasValue = !1, this.destination.next(n));
        }, e.prototype.notifyNext = function() {
            this.clearThrottle();
        }, e.prototype.notifyComplete = function() {
            this.clearThrottle();
        }, e;
    }(be);

function h_(t, e) {
    return e === void 0 && (e = Be), of (function() {
        return rf(t, e);
    });
}

function d_(t) {
    return function(r) {
        return r.lift(new p_(t));
    };
}
var p_ = /* @__PURE__ */ function() {
        function t(e) {
            this.closingNotifier = e;
        }
        return t.prototype.call = function(e, r) {
            return r.subscribe(new __(e, this.closingNotifier));
        }, t;
    }(),
    __ = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r, n) {
            var i = t.call(this, r) || this;
            return i.buffer = [], i.add(ge(n, new _e(i))), i;
        }
        return e.prototype._next = function(r) {
            this.buffer.push(r);
        }, e.prototype.notifyNext = function() {
            var r = this.buffer;
            this.buffer = [], this.destination.next(r);
        }, e;
    }(be);

function b_(t, e) {
    return e === void 0 && (e = null),
        function(n) {
            return n.lift(new g_(t, e));
        };
}
var g_ = /* @__PURE__ */ function() {
        function t(e, r) {
            this.bufferSize = e, this.startBufferEvery = r, !r || e === r ? this.subscriberClass = m_ : this.subscriberClass = y_;
        }
        return t.prototype.call = function(e, r) {
            return r.subscribe(new this.subscriberClass(e, this.bufferSize, this.startBufferEvery));
        }, t;
    }(),
    m_ = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r, n) {
            var i = t.call(this, r) || this;
            return i.bufferSize = n, i.buffer = [], i;
        }
        return e.prototype._next = function(r) {
            var n = this.buffer;
            n.push(r), n.length == this.bufferSize && (this.destination.next(n), this.buffer = []);
        }, e.prototype._complete = function() {
            var r = this.buffer;
            r.length > 0 && this.destination.next(r), t.prototype._complete.call(this);
        }, e;
    }(H),
    y_ = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r, n, i) {
            var s = t.call(this, r) || this;
            return s.bufferSize = n, s.startBufferEvery = i, s.buffers = [], s.count = 0, s;
        }
        return e.prototype._next = function(r) {
            var n = this,
                i = n.bufferSize,
                s = n.startBufferEvery,
                o = n.buffers,
                a = n.count;
            this.count++, a % s === 0 && o.push([]);
            for (var c = o.length; c--;) {
                var u = o[c];
                u.push(r), u.length === i && (o.splice(c, 1), this.destination.next(u));
            }
        }, e.prototype._complete = function() {
            for (var r = this, n = r.buffers, i = r.destination; n.length > 0;) {
                var s = n.shift();
                s.length > 0 && i.next(s);
            }
            t.prototype._complete.call(this);
        }, e;
    }(H);

function v_(t) {
    var e = arguments.length,
        r = Be;
    We(arguments[arguments.length - 1]) && (r = arguments[arguments.length - 1], e--);
    var n = null;
    e >= 2 && (n = arguments[1]);
    var i = Number.POSITIVE_INFINITY;
    return e >= 3 && (i = arguments[2]),
        function(o) {
            return o.lift(new w_(t, n, i, r));
        };
}
var w_ = /* @__PURE__ */ function() {
        function t(e, r, n, i) {
            this.bufferTimeSpan = e, this.bufferCreationInterval = r, this.maxBufferSize = n, this.scheduler = i;
        }
        return t.prototype.call = function(e, r) {
            return r.subscribe(new S_(e, this.bufferTimeSpan, this.bufferCreationInterval, this.maxBufferSize, this.scheduler));
        }, t;
    }(),
    E_ = /* @__PURE__ */ function() {
        function t() {
            this.buffer = [];
        }
        return t;
    }(),
    S_ = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r, n, i, s, o) {
            var a = t.call(this, r) || this;
            a.bufferTimeSpan = n, a.bufferCreationInterval = i, a.maxBufferSize = s, a.scheduler = o, a.contexts = [];
            var c = a.openContext();
            if (a.timespanOnly = i == null || i < 0, a.timespanOnly) {
                var u = {
                    subscriber: a,
                    context: c,
                    bufferTimeSpan: n
                };
                a.add(c.closeAction = o.schedule(Hc, n, u));
            } else {
                var l = {
                        subscriber: a,
                        context: c
                    },
                    b = {
                        bufferTimeSpan: n,
                        bufferCreationInterval: i,
                        subscriber: a,
                        scheduler: o
                    };
                a.add(c.closeAction = o.schedule(af, n, l)), a.add(o.schedule(k_, i, b));
            }
            return a;
        }
        return e.prototype._next = function(r) {
            for (var n = this.contexts, i = n.length, s, o = 0; o < i; o++) {
                var a = n[o],
                    c = a.buffer;
                c.push(r), c.length == this.maxBufferSize && (s = a);
            }
            s && this.onBufferFull(s);
        }, e.prototype._error = function(r) {
            this.contexts.length = 0, t.prototype._error.call(this, r);
        }, e.prototype._complete = function() {
            for (var r = this, n = r.contexts, i = r.destination; n.length > 0;) {
                var s = n.shift();
                i.next(s.buffer);
            }
            t.prototype._complete.call(this);
        }, e.prototype._unsubscribe = function() {
            this.contexts = null;
        }, e.prototype.onBufferFull = function(r) {
            this.closeContext(r);
            var n = r.closeAction;
            if (n.unsubscribe(), this.remove(n), !this.closed && this.timespanOnly) {
                r = this.openContext();
                var i = this.bufferTimeSpan,
                    s = {
                        subscriber: this,
                        context: r,
                        bufferTimeSpan: i
                    };
                this.add(r.closeAction = this.scheduler.schedule(Hc, i, s));
            }
        }, e.prototype.openContext = function() {
            var r = new E_();
            return this.contexts.push(r), r;
        }, e.prototype.closeContext = function(r) {
            this.destination.next(r.buffer);
            var n = this.contexts,
                i = n ? n.indexOf(r) : -1;
            i >= 0 && n.splice(n.indexOf(r), 1);
        }, e;
    }(H);

function Hc(t) {
    var e = t.subscriber,
        r = t.context;
    r && e.closeContext(r), e.closed || (t.context = e.openContext(), t.context.closeAction = this.schedule(t, t.bufferTimeSpan));
}

function k_(t) {
    var e = t.bufferCreationInterval,
        r = t.bufferTimeSpan,
        n = t.subscriber,
        i = t.scheduler,
        s = n.openContext(),
        o = this;
    n.closed || (n.add(s.closeAction = i.schedule(af, r, {
        subscriber: n,
        context: s
    })), o.schedule(t, e));
}

function af(t) {
    var e = t.subscriber,
        r = t.context;
    e.closeContext(r);
}

function R_(t, e) {
    return function(n) {
        return n.lift(new I_(t, e));
    };
}
var I_ = /* @__PURE__ */ function() {
        function t(e, r) {
            this.openings = e, this.closingSelector = r;
        }
        return t.prototype.call = function(e, r) {
            return r.subscribe(new A_(e, this.openings, this.closingSelector));
        }, t;
    }(),
    A_ = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r, n, i) {
            var s = t.call(this, r) || this;
            return s.closingSelector = i, s.contexts = [], s.add(wt(s, n)), s;
        }
        return e.prototype._next = function(r) {
            for (var n = this.contexts, i = n.length, s = 0; s < i; s++)
                n[s].buffer.push(r);
        }, e.prototype._error = function(r) {
            for (var n = this.contexts; n.length > 0;) {
                var i = n.shift();
                i.subscription.unsubscribe(), i.buffer = null, i.subscription = null;
            }
            this.contexts = null, t.prototype._error.call(this, r);
        }, e.prototype._complete = function() {
            for (var r = this.contexts; r.length > 0;) {
                var n = r.shift();
                this.destination.next(n.buffer), n.subscription.unsubscribe(), n.buffer = null, n.subscription = null;
            }
            this.contexts = null, t.prototype._complete.call(this);
        }, e.prototype.notifyNext = function(r, n) {
            r ? this.closeBuffer(r) : this.openBuffer(n);
        }, e.prototype.notifyComplete = function(r) {
            this.closeBuffer(r.context);
        }, e.prototype.openBuffer = function(r) {
            try {
                var n = this.closingSelector,
                    i = n.call(this, r);
                i && this.trySubscribe(i);
            } catch (s) {
                this._error(s);
            }
        }, e.prototype.closeBuffer = function(r) {
            var n = this.contexts;
            if (n && r) {
                var i = r.buffer,
                    s = r.subscription;
                this.destination.next(i), n.splice(n.indexOf(r), 1), this.remove(s), s.unsubscribe();
            }
        }, e.prototype.trySubscribe = function(r) {
            var n = this.contexts,
                i = [],
                s = new pe(),
                o = {
                    buffer: i,
                    subscription: s
                };
            n.push(o);
            var a = wt(this, r, o);
            !a || a.closed ? this.closeBuffer(o) : (a.context = o, this.add(a), s.add(a));
        }, e;
    }(rr);

function T_(t) {
    return function(e) {
        return e.lift(new C_(t));
    };
}
var C_ = /* @__PURE__ */ function() {
        function t(e) {
            this.closingSelector = e;
        }
        return t.prototype.call = function(e, r) {
            return r.subscribe(new M_(e, this.closingSelector));
        }, t;
    }(),
    M_ = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r, n) {
            var i = t.call(this, r) || this;
            return i.closingSelector = n, i.subscribing = !1, i.openBuffer(), i;
        }
        return e.prototype._next = function(r) {
            this.buffer.push(r);
        }, e.prototype._complete = function() {
            var r = this.buffer;
            r && this.destination.next(r), t.prototype._complete.call(this);
        }, e.prototype._unsubscribe = function() {
            this.buffer = void 0, this.subscribing = !1;
        }, e.prototype.notifyNext = function() {
            this.openBuffer();
        }, e.prototype.notifyComplete = function() {
            this.subscribing ? this.complete() : this.openBuffer();
        }, e.prototype.openBuffer = function() {
            var r = this.closingSubscription;
            r && (this.remove(r), r.unsubscribe());
            var n = this.buffer;
            this.buffer && this.destination.next(n), this.buffer = [];
            var i;
            try {
                var s = this.closingSelector;
                i = s();
            } catch (o) {
                return this.error(o);
            }
            r = new pe(), this.closingSubscription = r, this.add(r), this.subscribing = !0, r.add(ge(i, new _e(this))), this.subscribing = !1;
        }, e;
    }(be);

function x_(t) {
    return function(r) {
        var n = new O_(t),
            i = r.lift(n);
        return n.caught = i;
    };
}
var O_ = /* @__PURE__ */ function() {
        function t(e) {
            this.selector = e;
        }
        return t.prototype.call = function(e, r) {
            return r.subscribe(new N_(e, this.selector, this.caught));
        }, t;
    }(),
    N_ = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r, n, i) {
            var s = t.call(this, r) || this;
            return s.selector = n, s.caught = i, s;
        }
        return e.prototype.error = function(r) {
            if (!this.isStopped) {
                var n = void 0;
                try {
                    n = this.selector(r, this.caught);
                } catch (o) {
                    t.prototype.error.call(this, o);
                    return;
                }
                this._unsubscribeAndRecycle();
                var i = new _e(this);
                this.add(i);
                var s = ge(n, i);
                s !== i && this.add(s);
            }
        }, e;
    }(be);

function D_(t) {
    return function(e) {
        return e.lift(new za(t));
    };
}

function L_() {
    for (var t = [], e = 0; e < arguments.length; e++)
        t[e] = arguments[e];
    var r = null;
    return typeof t[t.length - 1] == "function" && (r = t.pop()), t.length === 1 && je(t[0]) && (t = t[0].slice()),
        function(n) {
            return n.lift.call(St([n].concat(t)), new za(r));
        };
}

function P_() {
    for (var t = [], e = 0; e < arguments.length; e++)
        t[e] = arguments[e];
    return function(r) {
        return r.lift.call(pn.apply(void 0, [r].concat(t)));
    };
}

function cf(t, e) {
    return Xt(t, e, 1);
}

function j_(t, e) {
    return cf(function() {
        return t;
    }, e);
}

function B_(t) {
    return function(e) {
        return e.lift(new U_(t, e));
    };
}
var U_ = /* @__PURE__ */ function() {
        function t(e, r) {
            this.predicate = e, this.source = r;
        }
        return t.prototype.call = function(e, r) {
            return r.subscribe(new F_(e, this.predicate, this.source));
        }, t;
    }(),
    F_ = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r, n, i) {
            var s = t.call(this, r) || this;
            return s.predicate = n, s.source = i, s.count = 0, s.index = 0, s;
        }
        return e.prototype._next = function(r) {
            this.predicate ? this._tryPredicate(r) : this.count++;
        }, e.prototype._tryPredicate = function(r) {
            var n;
            try {
                n = this.predicate(r, this.index++, this.source);
            } catch (i) {
                this.destination.error(i);
                return;
            }
            n && this.count++;
        }, e.prototype._complete = function() {
            this.destination.next(this.count), this.destination.complete();
        }, e;
    }(H);

function H_(t) {
    return function(e) {
        return e.lift(new W_(t));
    };
}
var W_ = /* @__PURE__ */ function() {
        function t(e) {
            this.durationSelector = e;
        }
        return t.prototype.call = function(e, r) {
            return r.subscribe(new G_(e, this.durationSelector));
        }, t;
    }(),
    G_ = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r, n) {
            var i = t.call(this, r) || this;
            return i.durationSelector = n, i.hasValue = !1, i;
        }
        return e.prototype._next = function(r) {
            try {
                var n = this.durationSelector.call(this, r);
                n && this._tryNext(r, n);
            } catch (i) {
                this.destination.error(i);
            }
        }, e.prototype._complete = function() {
            this.emitValue(), this.destination.complete();
        }, e.prototype._tryNext = function(r, n) {
            var i = this.durationSubscription;
            this.value = r, this.hasValue = !0, i && (i.unsubscribe(), this.remove(i)), i = ge(n, new _e(this)), i && !i.closed && this.add(this.durationSubscription = i);
        }, e.prototype.notifyNext = function() {
            this.emitValue();
        }, e.prototype.notifyComplete = function() {
            this.emitValue();
        }, e.prototype.emitValue = function() {
            if (this.hasValue) {
                var r = this.value,
                    n = this.durationSubscription;
                n && (this.durationSubscription = void 0, n.unsubscribe(), this.remove(n)), this.value = void 0, this.hasValue = !1, t.prototype._next.call(this, r);
            }
        }, e;
    }(be);

function $_(t, e) {
    return e === void 0 && (e = Be),
        function(r) {
            return r.lift(new V_(t, e));
        };
}
var V_ = /* @__PURE__ */ function() {
        function t(e, r) {
            this.dueTime = e, this.scheduler = r;
        }
        return t.prototype.call = function(e, r) {
            return r.subscribe(new z_(e, this.dueTime, this.scheduler));
        }, t;
    }(),
    z_ = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r, n, i) {
            var s = t.call(this, r) || this;
            return s.dueTime = n, s.scheduler = i, s.debouncedSubscription = null, s.lastValue = null, s.hasValue = !1, s;
        }
        return e.prototype._next = function(r) {
            this.clearDebounce(), this.lastValue = r, this.hasValue = !0, this.add(this.debouncedSubscription = this.scheduler.schedule(Z_, this.dueTime, this));
        }, e.prototype._complete = function() {
            this.debouncedNext(), this.destination.complete();
        }, e.prototype.debouncedNext = function() {
            if (this.clearDebounce(), this.hasValue) {
                var r = this.lastValue;
                this.lastValue = null, this.hasValue = !1, this.destination.next(r);
            }
        }, e.prototype.clearDebounce = function() {
            var r = this.debouncedSubscription;
            r !== null && (this.remove(r), r.unsubscribe(), this.debouncedSubscription = null);
        }, e;
    }(H);

function Z_(t) {
    t.debouncedNext();
}

function kn(t) {
    return t === void 0 && (t = null),
        function(e) {
            return e.lift(new q_(t));
        };
}
var q_ = /* @__PURE__ */ function() {
        function t(e) {
            this.defaultValue = e;
        }
        return t.prototype.call = function(e, r) {
            return r.subscribe(new Y_(e, this.defaultValue));
        }, t;
    }(),
    Y_ = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r, n) {
            var i = t.call(this, r) || this;
            return i.defaultValue = n, i.isEmpty = !0, i;
        }
        return e.prototype._next = function(r) {
            this.isEmpty = !1, this.destination.next(r);
        }, e.prototype._complete = function() {
            this.isEmpty && this.destination.next(this.defaultValue), this.destination.complete();
        }, e;
    }(H);

function uf(t) {
    return t instanceof Date && !isNaN(+t);
}

function J_(t, e) {
    e === void 0 && (e = Be);
    var r = uf(t),
        n = r ? +t - e.now() : Math.abs(t);
    return function(i) {
        return i.lift(new Q_(n, e));
    };
}
var Q_ = /* @__PURE__ */ function() {
        function t(e, r) {
            this.delay = e, this.scheduler = r;
        }
        return t.prototype.call = function(e, r) {
            return r.subscribe(new K_(e, this.delay, this.scheduler));
        }, t;
    }(),
    K_ = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r, n, i) {
            var s = t.call(this, r) || this;
            return s.delay = n, s.scheduler = i, s.queue = [], s.active = !1, s.errored = !1, s;
        }
        return e.dispatch = function(r) {
            for (var n = r.source, i = n.queue, s = r.scheduler, o = r.destination; i.length > 0 && i[0].time - s.now() <= 0;)
                i.shift().notification.observe(o);
            if (i.length > 0) {
                var a = Math.max(0, i[0].time - s.now());
                this.schedule(r, a);
            } else
                this.unsubscribe(), n.active = !1;
        }, e.prototype._schedule = function(r) {
            this.active = !0;
            var n = this.destination;
            n.add(r.schedule(e.dispatch, this.delay, {
                source: this,
                destination: this.destination,
                scheduler: r
            }));
        }, e.prototype.scheduleNotification = function(r) {
            if (this.errored !== !0) {
                var n = this.scheduler,
                    i = new X_(n.now() + this.delay, r);
                this.queue.push(i), this.active === !1 && this._schedule(n);
            }
        }, e.prototype._next = function(r) {
            this.scheduleNotification(vt.createNext(r));
        }, e.prototype._error = function(r) {
            this.errored = !0, this.queue = [], this.destination.error(r), this.unsubscribe();
        }, e.prototype._complete = function() {
            this.scheduleNotification(vt.createComplete()), this.unsubscribe();
        }, e;
    }(H),
    X_ = /* @__PURE__ */ function() {
        function t(e, r) {
            this.time = e, this.notification = r;
        }
        return t;
    }();

function eb(t, e) {
    return e ? function(r) {
        return new rb(r, e).lift(new Wc(t));
    } : function(r) {
        return r.lift(new Wc(t));
    };
}
var Wc = /* @__PURE__ */ function() {
        function t(e) {
            this.delayDurationSelector = e;
        }
        return t.prototype.call = function(e, r) {
            return r.subscribe(new tb(e, this.delayDurationSelector));
        }, t;
    }(),
    tb = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r, n) {
            var i = t.call(this, r) || this;
            return i.delayDurationSelector = n, i.completed = !1, i.delayNotifierSubscriptions = [], i.index = 0, i;
        }
        return e.prototype.notifyNext = function(r, n, i, s, o) {
            this.destination.next(r), this.removeSubscription(o), this.tryComplete();
        }, e.prototype.notifyError = function(r, n) {
            this._error(r);
        }, e.prototype.notifyComplete = function(r) {
            var n = this.removeSubscription(r);
            n && this.destination.next(n), this.tryComplete();
        }, e.prototype._next = function(r) {
            var n = this.index++;
            try {
                var i = this.delayDurationSelector(r, n);
                i && this.tryDelay(i, r);
            } catch (s) {
                this.destination.error(s);
            }
        }, e.prototype._complete = function() {
            this.completed = !0, this.tryComplete(), this.unsubscribe();
        }, e.prototype.removeSubscription = function(r) {
            r.unsubscribe();
            var n = this.delayNotifierSubscriptions.indexOf(r);
            return n !== -1 && this.delayNotifierSubscriptions.splice(n, 1), r.outerValue;
        }, e.prototype.tryDelay = function(r, n) {
            var i = wt(this, r, n);
            if (i && !i.closed) {
                var s = this.destination;
                s.add(i), this.delayNotifierSubscriptions.push(i);
            }
        }, e.prototype.tryComplete = function() {
            this.completed && this.delayNotifierSubscriptions.length === 0 && this.destination.complete();
        }, e;
    }(rr),
    rb = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r, n) {
            var i = t.call(this) || this;
            return i.source = r, i.subscriptionDelay = n, i;
        }
        return e.prototype._subscribe = function(r) {
            this.subscriptionDelay.subscribe(new nb(r, this.source));
        }, e;
    }(J),
    nb = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r, n) {
            var i = t.call(this) || this;
            return i.parent = r, i.source = n, i.sourceSubscribed = !1, i;
        }
        return e.prototype._next = function(r) {
            this.subscribeToSource();
        }, e.prototype._error = function(r) {
            this.unsubscribe(), this.parent.error(r);
        }, e.prototype._complete = function() {
            this.unsubscribe(), this.subscribeToSource();
        }, e.prototype.subscribeToSource = function() {
            this.sourceSubscribed || (this.sourceSubscribed = !0, this.unsubscribe(), this.source.subscribe(this.parent));
        }, e;
    }(H);

function ib() {
    return function(e) {
        return e.lift(new sb());
    };
}
var sb = /* @__PURE__ */ function() {
        function t() {}
        return t.prototype.call = function(e, r) {
            return r.subscribe(new ob(e));
        }, t;
    }(),
    ob = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r) {
            return t.call(this, r) || this;
        }
        return e.prototype._next = function(r) {
            r.observe(this.destination);
        }, e;
    }(H);

function ab(t, e) {
    return function(r) {
        return r.lift(new cb(t, e));
    };
}
var cb = /* @__PURE__ */ function() {
        function t(e, r) {
            this.keySelector = e, this.flushes = r;
        }
        return t.prototype.call = function(e, r) {
            return r.subscribe(new ub(e, this.keySelector, this.flushes));
        }, t;
    }(),
    ub = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r, n, i) {
            var s = t.call(this, r) || this;
            return s.keySelector = n, s.values = /* @__PURE__ */ new Set(), i && s.add(ge(i, new _e(s))), s;
        }
        return e.prototype.notifyNext = function() {
            this.values.clear();
        }, e.prototype.notifyError = function(r) {
            this._error(r);
        }, e.prototype._next = function(r) {
            this.keySelector ? this._useKeySelector(r) : this._finalizeNext(r, r);
        }, e.prototype._useKeySelector = function(r) {
            var n, i = this.destination;
            try {
                n = this.keySelector(r);
            } catch (s) {
                i.error(s);
                return;
            }
            this._finalizeNext(n, r);
        }, e.prototype._finalizeNext = function(r, n) {
            var i = this.values;
            i.has(r) || (i.add(r), this.destination.next(n));
        }, e;
    }(be);

function lf(t, e) {
    return function(r) {
        return r.lift(new lb(t, e));
    };
}
var lb = /* @__PURE__ */ function() {
        function t(e, r) {
            this.compare = e, this.keySelector = r;
        }
        return t.prototype.call = function(e, r) {
            return r.subscribe(new fb(e, this.compare, this.keySelector));
        }, t;
    }(),
    fb = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r, n, i) {
            var s = t.call(this, r) || this;
            return s.keySelector = i, s.hasKey = !1, typeof n == "function" && (s.compare = n), s;
        }
        return e.prototype.compare = function(r, n) {
            return r === n;
        }, e.prototype._next = function(r) {
            var n;
            try {
                var i = this.keySelector;
                n = i ? i(r) : r;
            } catch (a) {
                return this.destination.error(a);
            }
            var s = !1;
            if (this.hasKey)
                try {
                    var o = this.compare;
                    s = o(this.key, n);
                } catch (a) {
                    return this.destination.error(a);
                }
            else
                this.hasKey = !0;
            s || (this.key = n, this.destination.next(r));
        }, e;
    }(H);

function hb(t, e) {
    return lf(function(r, n) {
        return e ? e(r[t], n[t]) : r[t] === n[t];
    });
}

function Mi(t) {
    return t === void 0 && (t = _b),
        function(e) {
            return e.lift(new db(t));
        };
}
var db = /* @__PURE__ */ function() {
        function t(e) {
            this.errorFactory = e;
        }
        return t.prototype.call = function(e, r) {
            return r.subscribe(new pb(e, this.errorFactory));
        }, t;
    }(),
    pb = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r, n) {
            var i = t.call(this, r) || this;
            return i.errorFactory = n, i.hasValue = !1, i;
        }
        return e.prototype._next = function(r) {
            this.hasValue = !0, this.destination.next(r);
        }, e.prototype._complete = function() {
            if (this.hasValue)
                return this.destination.complete();
            var r = void 0;
            try {
                r = this.errorFactory();
            } catch (n) {
                r = n;
            }
            this.destination.error(r);
        }, e;
    }(H);

function _b() {
    return new Sn();
}

function Ya(t) {
    return function(e) {
        return t === 0 ? Fr() : e.lift(new bb(t));
    };
}
var bb = /* @__PURE__ */ function() {
        function t(e) {
            if (this.total = e, this.total < 0)
                throw new Rr();
        }
        return t.prototype.call = function(e, r) {
            return r.subscribe(new gb(e, this.total));
        }, t;
    }(),
    gb = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r, n) {
            var i = t.call(this, r) || this;
            return i.total = n, i.count = 0, i;
        }
        return e.prototype._next = function(r) {
            var n = this.total,
                i = ++this.count;
            i <= n && (this.destination.next(r), i === n && (this.destination.complete(), this.unsubscribe()));
        }, e;
    }(H);

function mb(t, e) {
    if (t < 0)
        throw new Rr();
    var r = arguments.length >= 2;
    return function(n) {
        return n.pipe(Bt(function(i, s) {
            return s === t;
        }), Ya(1), r ? kn(e) : Mi(function() {
            return new Rr();
        }));
    };
}

function yb() {
    for (var t = [], e = 0; e < arguments.length; e++)
        t[e] = arguments[e];
    return function(r) {
        return pn(r, Ci.apply(void 0, t));
    };
}

function vb(t, e) {
    return function(r) {
        return r.lift(new wb(t, e, r));
    };
}
var wb = /* @__PURE__ */ function() {
        function t(e, r, n) {
            this.predicate = e, this.thisArg = r, this.source = n;
        }
        return t.prototype.call = function(e, r) {
            return r.subscribe(new Eb(e, this.predicate, this.thisArg, this.source));
        }, t;
    }(),
    Eb = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r, n, i, s) {
            var o = t.call(this, r) || this;
            return o.predicate = n, o.thisArg = i, o.source = s, o.index = 0, o.thisArg = i || o, o;
        }
        return e.prototype.notifyComplete = function(r) {
            this.destination.next(r), this.destination.complete();
        }, e.prototype._next = function(r) {
            var n = !1;
            try {
                n = this.predicate.call(this.thisArg, r, this.index++, this.source);
            } catch (i) {
                this.destination.error(i);
                return;
            }
            n || this.notifyComplete(!1);
        }, e.prototype._complete = function() {
            this.notifyComplete(!0);
        }, e;
    }(H);

function Sb() {
    return function(t) {
        return t.lift(new kb());
    };
}
var kb = /* @__PURE__ */ function() {
        function t() {}
        return t.prototype.call = function(e, r) {
            return r.subscribe(new Rb(e));
        }, t;
    }(),
    Rb = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r) {
            var n = t.call(this, r) || this;
            return n.hasCompleted = !1, n.hasSubscription = !1, n;
        }
        return e.prototype._next = function(r) {
            this.hasSubscription || (this.hasSubscription = !0, this.add(ge(r, new _e(this))));
        }, e.prototype._complete = function() {
            this.hasCompleted = !0, this.hasSubscription || this.destination.complete();
        }, e.prototype.notifyComplete = function() {
            this.hasSubscription = !1, this.hasCompleted && this.destination.complete();
        }, e;
    }(be);

function ff(t, e) {
    return e ? function(r) {
        return r.pipe(ff(function(n, i) {
            return St(t(n, i)).pipe(Ke(function(s, o) {
                return e(n, s, i, o);
            }));
        }));
    } : function(r) {
        return r.lift(new Ib(t));
    };
}
var Ib = /* @__PURE__ */ function() {
        function t(e) {
            this.project = e;
        }
        return t.prototype.call = function(e, r) {
            return r.subscribe(new Ab(e, this.project));
        }, t;
    }(),
    Ab = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r, n) {
            var i = t.call(this, r) || this;
            return i.project = n, i.hasSubscription = !1, i.hasCompleted = !1, i.index = 0, i;
        }
        return e.prototype._next = function(r) {
            this.hasSubscription || this.tryNext(r);
        }, e.prototype.tryNext = function(r) {
            var n, i = this.index++;
            try {
                n = this.project(r, i);
            } catch (s) {
                this.destination.error(s);
                return;
            }
            this.hasSubscription = !0, this._innerSub(n);
        }, e.prototype._innerSub = function(r) {
            var n = new _e(this),
                i = this.destination;
            i.add(n);
            var s = ge(r, n);
            s !== n && i.add(s);
        }, e.prototype._complete = function() {
            this.hasCompleted = !0, this.hasSubscription || this.destination.complete(), this.unsubscribe();
        }, e.prototype.notifyNext = function(r) {
            this.destination.next(r);
        }, e.prototype.notifyError = function(r) {
            this.destination.error(r);
        }, e.prototype.notifyComplete = function() {
            this.hasSubscription = !1, this.hasCompleted && this.destination.complete();
        }, e;
    }(be);

function Tb(t, e, r) {
    return e === void 0 && (e = Number.POSITIVE_INFINITY), e = (e || 0) < 1 ? Number.POSITIVE_INFINITY : e,
        function(n) {
            return n.lift(new Cb(t, e, r));
        };
}
var Cb = /* @__PURE__ */ function() {
        function t(e, r, n) {
            this.project = e, this.concurrent = r, this.scheduler = n;
        }
        return t.prototype.call = function(e, r) {
            return r.subscribe(new Mb(e, this.project, this.concurrent, this.scheduler));
        }, t;
    }(),
    Mb = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r, n, i, s) {
            var o = t.call(this, r) || this;
            return o.project = n, o.concurrent = i, o.scheduler = s, o.index = 0, o.active = 0, o.hasCompleted = !1, i < Number.POSITIVE_INFINITY && (o.buffer = []), o;
        }
        return e.dispatch = function(r) {
            var n = r.subscriber,
                i = r.result,
                s = r.value,
                o = r.index;
            n.subscribeToProjection(i, s, o);
        }, e.prototype._next = function(r) {
            var n = this.destination;
            if (n.closed) {
                this._complete();
                return;
            }
            var i = this.index++;
            if (this.active < this.concurrent) {
                n.next(r);
                try {
                    var s = this.project,
                        o = s(r, i);
                    if (!this.scheduler)
                        this.subscribeToProjection(o, r, i);
                    else {
                        var a = {
                                subscriber: this,
                                result: o,
                                value: r,
                                index: i
                            },
                            c = this.destination;
                        c.add(this.scheduler.schedule(e.dispatch, 0, a));
                    }
                } catch (u) {
                    n.error(u);
                }
            } else
                this.buffer.push(r);
        }, e.prototype.subscribeToProjection = function(r, n, i) {
            this.active++;
            var s = this.destination;
            s.add(ge(r, new _e(this)));
        }, e.prototype._complete = function() {
            this.hasCompleted = !0, this.hasCompleted && this.active === 0 && this.destination.complete(), this.unsubscribe();
        }, e.prototype.notifyNext = function(r) {
            this._next(r);
        }, e.prototype.notifyComplete = function() {
            var r = this.buffer;
            this.active--, r && r.length > 0 && this._next(r.shift()), this.hasCompleted && this.active === 0 && this.destination.complete();
        }, e;
    }(be);

function xb(t) {
    return function(e) {
        return e.lift(new Ob(t));
    };
}
var Ob = /* @__PURE__ */ function() {
        function t(e) {
            this.callback = e;
        }
        return t.prototype.call = function(e, r) {
            return r.subscribe(new Nb(e, this.callback));
        }, t;
    }(),
    Nb = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r, n) {
            var i = t.call(this, r) || this;
            return i.add(new pe(n)), i;
        }
        return e;
    }(H);

function Db(t, e) {
    if (typeof t != "function")
        throw new TypeError("predicate is not a function");
    return function(r) {
        return r.lift(new hf(t, r, !1, e));
    };
}
var hf = /* @__PURE__ */ function() {
        function t(e, r, n, i) {
            this.predicate = e, this.source = r, this.yieldIndex = n, this.thisArg = i;
        }
        return t.prototype.call = function(e, r) {
            return r.subscribe(new Lb(e, this.predicate, this.source, this.yieldIndex, this.thisArg));
        }, t;
    }(),
    Lb = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r, n, i, s, o) {
            var a = t.call(this, r) || this;
            return a.predicate = n, a.source = i, a.yieldIndex = s, a.thisArg = o, a.index = 0, a;
        }
        return e.prototype.notifyComplete = function(r) {
            var n = this.destination;
            n.next(r), n.complete(), this.unsubscribe();
        }, e.prototype._next = function(r) {
            var n = this,
                i = n.predicate,
                s = n.thisArg,
                o = this.index++;
            try {
                var a = i.call(s || this, r, o, this.source);
                a && this.notifyComplete(this.yieldIndex ? o : r);
            } catch (c) {
                this.destination.error(c);
            }
        }, e.prototype._complete = function() {
            this.notifyComplete(this.yieldIndex ? -1 : void 0);
        }, e;
    }(H);

function Pb(t, e) {
    return function(r) {
        return r.lift(new hf(t, r, !0, e));
    };
}

function jb(t, e) {
    var r = arguments.length >= 2;
    return function(n) {
        return n.pipe(t ? Bt(function(i, s) {
            return t(i, s, n);
        }) : Pt, Ya(1), r ? kn(e) : Mi(function() {
            return new Sn();
        }));
    };
}

function Bb() {
    return function(e) {
        return e.lift(new Ub());
    };
}
var Ub = /* @__PURE__ */ function() {
        function t() {}
        return t.prototype.call = function(e, r) {
            return r.subscribe(new Fb(e));
        }, t;
    }(),
    Fb = /* @__PURE__ */ function(t) {
        M(e, t);

        function e() {
            return t !== null && t.apply(this, arguments) || this;
        }
        return e.prototype._next = function(r) {}, e;
    }(H);

function Hb() {
    return function(t) {
        return t.lift(new Wb());
    };
}
var Wb = /* @__PURE__ */ function() {
        function t() {}
        return t.prototype.call = function(e, r) {
            return r.subscribe(new Gb(e));
        }, t;
    }(),
    Gb = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r) {
            return t.call(this, r) || this;
        }
        return e.prototype.notifyComplete = function(r) {
            var n = this.destination;
            n.next(r), n.complete();
        }, e.prototype._next = function(r) {
            this.notifyComplete(!1);
        }, e.prototype._complete = function() {
            this.notifyComplete(!0);
        }, e;
    }(H);

function ui(t) {
    return function(r) {
        return t === 0 ? Fr() : r.lift(new $b(t));
    };
}
var $b = /* @__PURE__ */ function() {
        function t(e) {
            if (this.total = e, this.total < 0)
                throw new Rr();
        }
        return t.prototype.call = function(e, r) {
            return r.subscribe(new Vb(e, this.total));
        }, t;
    }(),
    Vb = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r, n) {
            var i = t.call(this, r) || this;
            return i.total = n, i.ring = new Array(), i.count = 0, i;
        }
        return e.prototype._next = function(r) {
            var n = this.ring,
                i = this.total,
                s = this.count++;
            if (n.length < i)
                n.push(r);
            else {
                var o = s % i;
                n[o] = r;
            }
        }, e.prototype._complete = function() {
            var r = this.destination,
                n = this.count;
            if (n > 0)
                for (var i = this.count >= this.total ? this.total : this.count, s = this.ring, o = 0; o < i; o++) {
                    var a = n++ % i;
                    r.next(s[a]);
                }
            r.complete();
        }, e;
    }(H);

function zb(t, e) {
    var r = arguments.length >= 2;
    return function(n) {
        return n.pipe(t ? Bt(function(i, s) {
            return t(i, s, n);
        }) : Pt, ui(1), r ? kn(e) : Mi(function() {
            return new Sn();
        }));
    };
}

function Zb(t) {
    return function(e) {
        return e.lift(new qb(t));
    };
}
var qb = /* @__PURE__ */ function() {
        function t(e) {
            this.value = e;
        }
        return t.prototype.call = function(e, r) {
            return r.subscribe(new Yb(e, this.value));
        }, t;
    }(),
    Yb = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r, n) {
            var i = t.call(this, r) || this;
            return i.value = n, i;
        }
        return e.prototype._next = function(r) {
            this.destination.next(this.value);
        }, e;
    }(H);

function Jb() {
    return function(e) {
        return e.lift(new Qb());
    };
}
var Qb = /* @__PURE__ */ function() {
        function t() {}
        return t.prototype.call = function(e, r) {
            return r.subscribe(new Kb(e));
        }, t;
    }(),
    Kb = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r) {
            return t.call(this, r) || this;
        }
        return e.prototype._next = function(r) {
            this.destination.next(vt.createNext(r));
        }, e.prototype._error = function(r) {
            var n = this.destination;
            n.next(vt.createError(r)), n.complete();
        }, e.prototype._complete = function() {
            var r = this.destination;
            r.next(vt.createComplete()), r.complete();
        }, e;
    }(H);

function li(t, e) {
    var r = !1;
    return arguments.length >= 2 && (r = !0),
        function(i) {
            return i.lift(new Xb(t, e, r));
        };
}
var Xb = /* @__PURE__ */ function() {
        function t(e, r, n) {
            n === void 0 && (n = !1), this.accumulator = e, this.seed = r, this.hasSeed = n;
        }
        return t.prototype.call = function(e, r) {
            return r.subscribe(new e0(e, this.accumulator, this.seed, this.hasSeed));
        }, t;
    }(),
    e0 = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r, n, i, s) {
            var o = t.call(this, r) || this;
            return o.accumulator = n, o._seed = i, o.hasSeed = s, o.index = 0, o;
        }
        return Object.defineProperty(e.prototype, "seed", {
            get: function() {
                return this._seed;
            },
            set: function(r) {
                this.hasSeed = !0, this._seed = r;
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype._next = function(r) {
            if (!this.hasSeed)
                this.seed = r, this.destination.next(r);
            else
                return this._tryNext(r);
        }, e.prototype._tryNext = function(r) {
            var n = this.index++,
                i;
            try {
                i = this.accumulator(this.seed, r, n);
            } catch (s) {
                this.destination.error(s);
            }
            this.seed = i, this.destination.next(i);
        }, e;
    }(H);

function xi(t, e) {
    return arguments.length >= 2 ? function(n) {
        return ha(li(t, e), ui(1), kn(e))(n);
    } : function(n) {
        return ha(li(function(i, s, o) {
            return t(i, s, o + 1);
        }), ui(1))(n);
    };
}

function t0(t) {
    var e = typeof t == "function" ? function(r, n) {
        return t(r, n) > 0 ? r : n;
    } : function(r, n) {
        return r > n ? r : n;
    };
    return xi(e);
}

function r0() {
    for (var t = [], e = 0; e < arguments.length; e++)
        t[e] = arguments[e];
    return function(r) {
        return r.lift.call(Kl.apply(void 0, [r].concat(t)));
    };
}

function n0(t, e, r) {
    return r === void 0 && (r = Number.POSITIVE_INFINITY), typeof e == "function" ? Xt(function() {
        return t;
    }, e, r) : (typeof e == "number" && (r = e), Xt(function() {
        return t;
    }, r));
}

function i0(t, e, r) {
    return r === void 0 && (r = Number.POSITIVE_INFINITY),
        function(n) {
            return n.lift(new s0(t, e, r));
        };
}
var s0 = /* @__PURE__ */ function() {
        function t(e, r, n) {
            this.accumulator = e, this.seed = r, this.concurrent = n;
        }
        return t.prototype.call = function(e, r) {
            return r.subscribe(new o0(e, this.accumulator, this.seed, this.concurrent));
        }, t;
    }(),
    o0 = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r, n, i, s) {
            var o = t.call(this, r) || this;
            return o.accumulator = n, o.acc = i, o.concurrent = s, o.hasValue = !1, o.hasCompleted = !1, o.buffer = [], o.active = 0, o.index = 0, o;
        }
        return e.prototype._next = function(r) {
            if (this.active < this.concurrent) {
                var n = this.index++,
                    i = this.destination,
                    s = void 0;
                try {
                    var o = this.accumulator;
                    s = o(this.acc, r, n);
                } catch (a) {
                    return i.error(a);
                }
                this.active++, this._innerSub(s);
            } else
                this.buffer.push(r);
        }, e.prototype._innerSub = function(r) {
            var n = new _e(this),
                i = this.destination;
            i.add(n);
            var s = ge(r, n);
            s !== n && i.add(s);
        }, e.prototype._complete = function() {
            this.hasCompleted = !0, this.active === 0 && this.buffer.length === 0 && (this.hasValue === !1 && this.destination.next(this.acc), this.destination.complete()), this.unsubscribe();
        }, e.prototype.notifyNext = function(r) {
            var n = this.destination;
            this.acc = r, this.hasValue = !0, n.next(r);
        }, e.prototype.notifyComplete = function() {
            var r = this.buffer;
            this.active--, r.length > 0 ? this._next(r.shift()) : this.active === 0 && this.hasCompleted && (this.hasValue === !1 && this.destination.next(this.acc), this.destination.complete());
        }, e;
    }(be);

function a0(t) {
    var e = typeof t == "function" ? function(r, n) {
        return t(r, n) < 0 ? r : n;
    } : function(r, n) {
        return r < n ? r : n;
    };
    return xi(e);
}

function er(t, e) {
    return function(n) {
        var i;
        if (typeof t == "function" ? i = t : i = function() {
                return t;
            }, typeof e == "function")
            return n.lift(new c0(i, e));
        var s = Object.create(n, Gd);
        return s.source = n, s.subjectFactory = i, s;
    };
}
var c0 = /* @__PURE__ */ function() {
    function t(e, r) {
        this.subjectFactory = e, this.selector = r;
    }
    return t.prototype.call = function(e, r) {
        var n = this.selector,
            i = this.subjectFactory(),
            s = n(i).subscribe(e);
        return s.add(r.subscribe(i)), s;
    }, t;
}();

function u0() {
    for (var t = [], e = 0; e < arguments.length; e++)
        t[e] = arguments[e];
    return t.length === 1 && je(t[0]) && (t = t[0]),
        function(r) {
            return r.lift(new l0(t));
        };
}
var l0 = /* @__PURE__ */ function() {
        function t(e) {
            this.nextSources = e;
        }
        return t.prototype.call = function(e, r) {
            return r.subscribe(new f0(e, this.nextSources));
        }, t;
    }(),
    f0 = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r, n) {
            var i = t.call(this, r) || this;
            return i.destination = r, i.nextSources = n, i;
        }
        return e.prototype.notifyError = function() {
            this.subscribeToNextSource();
        }, e.prototype.notifyComplete = function() {
            this.subscribeToNextSource();
        }, e.prototype._error = function(r) {
            this.subscribeToNextSource(), this.unsubscribe();
        }, e.prototype._complete = function() {
            this.subscribeToNextSource(), this.unsubscribe();
        }, e.prototype.subscribeToNextSource = function() {
            var r = this.nextSources.shift();
            if (r) {
                var n = new _e(this),
                    i = this.destination;
                i.add(n);
                var s = ge(r, n);
                s !== n && i.add(s);
            } else
                this.destination.complete();
        }, e;
    }(be);

function h0() {
    return function(t) {
        return t.lift(new d0());
    };
}
var d0 = /* @__PURE__ */ function() {
        function t() {}
        return t.prototype.call = function(e, r) {
            return r.subscribe(new p0(e));
        }, t;
    }(),
    p0 = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r) {
            var n = t.call(this, r) || this;
            return n.hasPrev = !1, n;
        }
        return e.prototype._next = function(r) {
            var n;
            this.hasPrev ? n = [this.prev, r] : this.hasPrev = !0, this.prev = r, n && this.destination.next(n);
        }, e;
    }(H);

function _0(t, e) {
    return function(r) {
        return [
            Bt(t, e)(r),
            Bt(ef(t, e))(r)
        ];
    };
}

function b0() {
    for (var t = [], e = 0; e < arguments.length; e++)
        t[e] = arguments[e];
    var r = t.length;
    if (r === 0)
        throw new Error("list of properties cannot be empty.");
    return function(n) {
        return Ke(g0(t, r))(n);
    };
}

function g0(t, e) {
    var r = function(n) {
        for (var i = n, s = 0; s < e; s++) {
            var o = i != null ? i[t[s]] : void 0;
            if (o !== void 0)
                i = o;
            else
                return;
        }
        return i;
    };
    return r;
}

function m0(t) {
    return t ? er(function() {
        return new Ie();
    }, t) : er(new Ie());
}

function y0(t) {
    return function(e) {
        return er(new Nl(t))(e);
    };
}

function v0() {
    return function(t) {
        return er(new Hr())(t);
    };
}

function w0(t, e, r, n) {
    r && typeof r != "function" && (n = r);
    var i = typeof r == "function" ? r : void 0,
        s = new Va(t, e, n);
    return function(o) {
        return er(function() {
            return s;
        }, i)(o);
    };
}

function E0() {
    for (var t = [], e = 0; e < arguments.length; e++)
        t[e] = arguments[e];
    return function(n) {
        return t.length === 1 && je(t[0]) && (t = t[0]), n.lift.call(tf.apply(void 0, [n].concat(t)));
    };
}

function S0(t) {
    return t === void 0 && (t = -1),
        function(e) {
            return t === 0 ? Fr() : t < 0 ? e.lift(new Gc(-1, e)) : e.lift(new Gc(t - 1, e));
        };
}
var Gc = /* @__PURE__ */ function() {
        function t(e, r) {
            this.count = e, this.source = r;
        }
        return t.prototype.call = function(e, r) {
            return r.subscribe(new k0(e, this.count, this.source));
        }, t;
    }(),
    k0 = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r, n, i) {
            var s = t.call(this, r) || this;
            return s.count = n, s.source = i, s;
        }
        return e.prototype.complete = function() {
            if (!this.isStopped) {
                var r = this,
                    n = r.source,
                    i = r.count;
                if (i === 0)
                    return t.prototype.complete.call(this);
                i > -1 && (this.count = i - 1), n.subscribe(this._unsubscribeAndRecycle());
            }
        }, e;
    }(H);

function R0(t) {
    return function(e) {
        return e.lift(new I0(t));
    };
}
var I0 = /* @__PURE__ */ function() {
        function t(e) {
            this.notifier = e;
        }
        return t.prototype.call = function(e, r) {
            return r.subscribe(new A0(e, this.notifier, r));
        }, t;
    }(),
    A0 = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r, n, i) {
            var s = t.call(this, r) || this;
            return s.notifier = n, s.source = i, s.sourceIsBeingSubscribedTo = !0, s;
        }
        return e.prototype.notifyNext = function() {
            this.sourceIsBeingSubscribedTo = !0, this.source.subscribe(this);
        }, e.prototype.notifyComplete = function() {
            if (this.sourceIsBeingSubscribedTo === !1)
                return t.prototype.complete.call(this);
        }, e.prototype.complete = function() {
            if (this.sourceIsBeingSubscribedTo = !1, !this.isStopped) {
                if (this.retries || this.subscribeToRetries(), !this.retriesSubscription || this.retriesSubscription.closed)
                    return t.prototype.complete.call(this);
                this._unsubscribeAndRecycle(), this.notifications.next(void 0);
            }
        }, e.prototype._unsubscribe = function() {
            var r = this,
                n = r.notifications,
                i = r.retriesSubscription;
            n && (n.unsubscribe(), this.notifications = void 0), i && (i.unsubscribe(), this.retriesSubscription = void 0), this.retries = void 0;
        }, e.prototype._unsubscribeAndRecycle = function() {
            var r = this._unsubscribe;
            return this._unsubscribe = null, t.prototype._unsubscribeAndRecycle.call(this), this._unsubscribe = r, this;
        }, e.prototype.subscribeToRetries = function() {
            this.notifications = new Ie();
            var r;
            try {
                var n = this.notifier;
                r = n(this.notifications);
            } catch {
                return t.prototype.complete.call(this);
            }
            this.retries = r, this.retriesSubscription = ge(r, new _e(this));
        }, e;
    }(be);

function T0(t) {
    return t === void 0 && (t = -1),
        function(e) {
            return e.lift(new C0(t, e));
        };
}
var C0 = /* @__PURE__ */ function() {
        function t(e, r) {
            this.count = e, this.source = r;
        }
        return t.prototype.call = function(e, r) {
            return r.subscribe(new M0(e, this.count, this.source));
        }, t;
    }(),
    M0 = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r, n, i) {
            var s = t.call(this, r) || this;
            return s.count = n, s.source = i, s;
        }
        return e.prototype.error = function(r) {
            if (!this.isStopped) {
                var n = this,
                    i = n.source,
                    s = n.count;
                if (s === 0)
                    return t.prototype.error.call(this, r);
                s > -1 && (this.count = s - 1), i.subscribe(this._unsubscribeAndRecycle());
            }
        }, e;
    }(H);

function x0(t) {
    return function(e) {
        return e.lift(new O0(t, e));
    };
}
var O0 = /* @__PURE__ */ function() {
        function t(e, r) {
            this.notifier = e, this.source = r;
        }
        return t.prototype.call = function(e, r) {
            return r.subscribe(new N0(e, this.notifier, this.source));
        }, t;
    }(),
    N0 = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r, n, i) {
            var s = t.call(this, r) || this;
            return s.notifier = n, s.source = i, s;
        }
        return e.prototype.error = function(r) {
            if (!this.isStopped) {
                var n = this.errors,
                    i = this.retries,
                    s = this.retriesSubscription;
                if (i)
                    this.errors = void 0, this.retriesSubscription = void 0;
                else {
                    n = new Ie();
                    try {
                        var o = this.notifier;
                        i = o(n);
                    } catch (a) {
                        return t.prototype.error.call(this, a);
                    }
                    s = ge(i, new _e(this));
                }
                this._unsubscribeAndRecycle(), this.errors = n, this.retries = i, this.retriesSubscription = s, n.next(r);
            }
        }, e.prototype._unsubscribe = function() {
            var r = this,
                n = r.errors,
                i = r.retriesSubscription;
            n && (n.unsubscribe(), this.errors = void 0), i && (i.unsubscribe(), this.retriesSubscription = void 0), this.retries = void 0;
        }, e.prototype.notifyNext = function() {
            var r = this._unsubscribe;
            this._unsubscribe = null, this._unsubscribeAndRecycle(), this._unsubscribe = r, this.source.subscribe(this);
        }, e;
    }(be);

function D0(t) {
    return function(e) {
        return e.lift(new L0(t));
    };
}
var L0 = /* @__PURE__ */ function() {
        function t(e) {
            this.notifier = e;
        }
        return t.prototype.call = function(e, r) {
            var n = new P0(e),
                i = r.subscribe(n);
            return i.add(ge(this.notifier, new _e(n))), i;
        }, t;
    }(),
    P0 = /* @__PURE__ */ function(t) {
        M(e, t);

        function e() {
            var r = t !== null && t.apply(this, arguments) || this;
            return r.hasValue = !1, r;
        }
        return e.prototype._next = function(r) {
            this.value = r, this.hasValue = !0;
        }, e.prototype.notifyNext = function() {
            this.emitValue();
        }, e.prototype.notifyComplete = function() {
            this.emitValue();
        }, e.prototype.emitValue = function() {
            this.hasValue && (this.hasValue = !1, this.destination.next(this.value));
        }, e;
    }(be);

function j0(t, e) {
    return e === void 0 && (e = Be),
        function(r) {
            return r.lift(new B0(t, e));
        };
}
var B0 = /* @__PURE__ */ function() {
        function t(e, r) {
            this.period = e, this.scheduler = r;
        }
        return t.prototype.call = function(e, r) {
            return r.subscribe(new U0(e, this.period, this.scheduler));
        }, t;
    }(),
    U0 = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r, n, i) {
            var s = t.call(this, r) || this;
            return s.period = n, s.scheduler = i, s.hasValue = !1, s.add(i.schedule(F0, n, {
                subscriber: s,
                period: n
            })), s;
        }
        return e.prototype._next = function(r) {
            this.lastValue = r, this.hasValue = !0;
        }, e.prototype.notifyNext = function() {
            this.hasValue && (this.hasValue = !1, this.destination.next(this.lastValue));
        }, e;
    }(H);

function F0(t) {
    var e = t.subscriber,
        r = t.period;
    e.notifyNext(), this.schedule(t, r);
}

function H0(t, e) {
    return function(r) {
        return r.lift(new W0(t, e));
    };
}
var W0 = /* @__PURE__ */ function() {
        function t(e, r) {
            this.compareTo = e, this.comparator = r;
        }
        return t.prototype.call = function(e, r) {
            return r.subscribe(new G0(e, this.compareTo, this.comparator));
        }, t;
    }(),
    G0 = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r, n, i) {
            var s = t.call(this, r) || this;
            return s.compareTo = n, s.comparator = i, s._a = [], s._b = [], s._oneComplete = !1, s.destination.add(n.subscribe(new $0(r, s))), s;
        }
        return e.prototype._next = function(r) {
            this._oneComplete && this._b.length === 0 ? this.emit(!1) : (this._a.push(r), this.checkValues());
        }, e.prototype._complete = function() {
            this._oneComplete ? this.emit(this._a.length === 0 && this._b.length === 0) : this._oneComplete = !0, this.unsubscribe();
        }, e.prototype.checkValues = function() {
            for (var r = this, n = r._a, i = r._b, s = r.comparator; n.length > 0 && i.length > 0;) {
                var o = n.shift(),
                    a = i.shift(),
                    c = !1;
                try {
                    c = s ? s(o, a) : o === a;
                } catch (u) {
                    this.destination.error(u);
                }
                c || this.emit(!1);
            }
        }, e.prototype.emit = function(r) {
            var n = this.destination;
            n.next(r), n.complete();
        }, e.prototype.nextB = function(r) {
            this._oneComplete && this._a.length === 0 ? this.emit(!1) : (this._b.push(r), this.checkValues());
        }, e.prototype.completeB = function() {
            this._oneComplete ? this.emit(this._a.length === 0 && this._b.length === 0) : this._oneComplete = !0;
        }, e;
    }(H),
    $0 = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r, n) {
            var i = t.call(this, r) || this;
            return i.parent = n, i;
        }
        return e.prototype._next = function(r) {
            this.parent.nextB(r);
        }, e.prototype._error = function(r) {
            this.parent.error(r), this.unsubscribe();
        }, e.prototype._complete = function() {
            this.parent.completeB(), this.unsubscribe();
        }, e;
    }(H);

function V0() {
    return new Ie();
}

function z0() {
    return function(t) {
        return Wa()(er(V0)(t));
    };
}

function Z0(t, e, r) {
    var n;
    return t && typeof t == "object" ? n = t : n = {
            bufferSize: t,
            windowTime: e,
            refCount: !1,
            scheduler: r
        },
        function(i) {
            return i.lift(q0(n));
        };
}

function q0(t) {
    var e = t.bufferSize,
        r = e === void 0 ? Number.POSITIVE_INFINITY : e,
        n = t.windowTime,
        i = n === void 0 ? Number.POSITIVE_INFINITY : n,
        s = t.refCount,
        o = t.scheduler,
        a, c = 0,
        u, l = !1,
        b = !1;
    return function(p) {
        c++;
        var g;
        !a || l ? (l = !1, a = new Va(r, i, o), g = a.subscribe(this), u = p.subscribe({
            next: function(S) {
                a.next(S);
            },
            error: function(S) {
                l = !0, a.error(S);
            },
            complete: function() {
                b = !0, u = void 0, a.complete();
            }
        }), b && (u = void 0)) : g = a.subscribe(this), this.add(function() {
            c--, g.unsubscribe(), g = void 0, u && !b && s && c === 0 && (u.unsubscribe(), u = void 0, a = void 0);
        });
    };
}

function Y0(t) {
    return function(e) {
        return e.lift(new J0(t, e));
    };
}
var J0 = /* @__PURE__ */ function() {
        function t(e, r) {
            this.predicate = e, this.source = r;
        }
        return t.prototype.call = function(e, r) {
            return r.subscribe(new Q0(e, this.predicate, this.source));
        }, t;
    }(),
    Q0 = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r, n, i) {
            var s = t.call(this, r) || this;
            return s.predicate = n, s.source = i, s.seenValue = !1, s.index = 0, s;
        }
        return e.prototype.applySingleValue = function(r) {
            this.seenValue ? this.destination.error("Sequence contains more than one element") : (this.seenValue = !0, this.singleValue = r);
        }, e.prototype._next = function(r) {
            var n = this.index++;
            this.predicate ? this.tryNext(r, n) : this.applySingleValue(r);
        }, e.prototype.tryNext = function(r, n) {
            try {
                this.predicate(r, n, this.source) && this.applySingleValue(r);
            } catch (i) {
                this.destination.error(i);
            }
        }, e.prototype._complete = function() {
            var r = this.destination;
            this.index > 0 ? (r.next(this.seenValue ? this.singleValue : void 0), r.complete()) : r.error(new Sn());
        }, e;
    }(H);

function K0(t) {
    return function(e) {
        return e.lift(new X0(t));
    };
}
var X0 = /* @__PURE__ */ function() {
        function t(e) {
            this.total = e;
        }
        return t.prototype.call = function(e, r) {
            return r.subscribe(new eg(e, this.total));
        }, t;
    }(),
    eg = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r, n) {
            var i = t.call(this, r) || this;
            return i.total = n, i.count = 0, i;
        }
        return e.prototype._next = function(r) {
            ++this.count > this.total && this.destination.next(r);
        }, e;
    }(H);

function tg(t) {
    return function(e) {
        return e.lift(new rg(t));
    };
}
var rg = /* @__PURE__ */ function() {
        function t(e) {
            if (this._skipCount = e, this._skipCount < 0)
                throw new Rr();
        }
        return t.prototype.call = function(e, r) {
            return this._skipCount === 0 ? r.subscribe(new H(e)) : r.subscribe(new ng(e, this._skipCount));
        }, t;
    }(),
    ng = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r, n) {
            var i = t.call(this, r) || this;
            return i._skipCount = n, i._count = 0, i._ring = new Array(n), i;
        }
        return e.prototype._next = function(r) {
            var n = this._skipCount,
                i = this._count++;
            if (i < n)
                this._ring[i] = r;
            else {
                var s = i % n,
                    o = this._ring,
                    a = o[s];
                o[s] = r, this.destination.next(a);
            }
        }, e;
    }(H);

function ig(t) {
    return function(e) {
        return e.lift(new sg(t));
    };
}
var sg = /* @__PURE__ */ function() {
        function t(e) {
            this.notifier = e;
        }
        return t.prototype.call = function(e, r) {
            return r.subscribe(new og(e, this.notifier));
        }, t;
    }(),
    og = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r, n) {
            var i = t.call(this, r) || this;
            i.hasValue = !1;
            var s = new _e(i);
            i.add(s), i.innerSubscription = s;
            var o = ge(n, s);
            return o !== s && (i.add(o), i.innerSubscription = o), i;
        }
        return e.prototype._next = function(r) {
            this.hasValue && t.prototype._next.call(this, r);
        }, e.prototype.notifyNext = function() {
            this.hasValue = !0, this.innerSubscription && this.innerSubscription.unsubscribe();
        }, e.prototype.notifyComplete = function() {}, e;
    }(be);

function ag(t) {
    return function(e) {
        return e.lift(new cg(t));
    };
}
var cg = /* @__PURE__ */ function() {
        function t(e) {
            this.predicate = e;
        }
        return t.prototype.call = function(e, r) {
            return r.subscribe(new ug(e, this.predicate));
        }, t;
    }(),
    ug = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r, n) {
            var i = t.call(this, r) || this;
            return i.predicate = n, i.skipping = !0, i.index = 0, i;
        }
        return e.prototype._next = function(r) {
            var n = this.destination;
            this.skipping && this.tryCallPredicate(r), this.skipping || n.next(r);
        }, e.prototype.tryCallPredicate = function(r) {
            try {
                var n = this.predicate(r, this.index++);
                this.skipping = Boolean(n);
            } catch (i) {
                this.destination.error(i);
            }
        }, e;
    }(H);

function lg() {
    for (var t = [], e = 0; e < arguments.length; e++)
        t[e] = arguments[e];
    var r = t[t.length - 1];
    return We(r) ? (t.pop(), function(n) {
        return pn(t, n, r);
    }) : function(n) {
        return pn(t, n);
    };
}
var fg = /* @__PURE__ */ function(t) {
    M(e, t);

    function e(r, n, i) {
        n === void 0 && (n = 0), i === void 0 && (i = Qn);
        var s = t.call(this) || this;
        return s.source = r, s.delayTime = n, s.scheduler = i, (!Ir(n) || n < 0) && (s.delayTime = 0), (!i || typeof i.schedule != "function") && (s.scheduler = Qn), s;
    }
    return e.create = function(r, n, i) {
        return n === void 0 && (n = 0), i === void 0 && (i = Qn), new e(r, n, i);
    }, e.dispatch = function(r) {
        var n = r.source,
            i = r.subscriber;
        return this.add(n.subscribe(i));
    }, e.prototype._subscribe = function(r) {
        var n = this.delayTime,
            i = this.source,
            s = this.scheduler;
        return s.schedule(e.dispatch, n, {
            source: i,
            subscriber: r
        });
    }, e;
}(J);

function hg(t, e) {
    return e === void 0 && (e = 0),
        function(n) {
            return n.lift(new dg(t, e));
        };
}
var dg = /* @__PURE__ */ function() {
    function t(e, r) {
        this.scheduler = e, this.delay = r;
    }
    return t.prototype.call = function(e, r) {
        return new fg(r, this.delay, this.scheduler).subscribe(e);
    }, t;
}();

function _n(t, e) {
    return typeof e == "function" ? function(r) {
        return r.pipe(_n(function(n, i) {
            return St(t(n, i)).pipe(Ke(function(s, o) {
                return e(n, s, i, o);
            }));
        }));
    } : function(r) {
        return r.lift(new pg(t));
    };
}
var pg = /* @__PURE__ */ function() {
        function t(e) {
            this.project = e;
        }
        return t.prototype.call = function(e, r) {
            return r.subscribe(new _g(e, this.project));
        }, t;
    }(),
    _g = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r, n) {
            var i = t.call(this, r) || this;
            return i.project = n, i.index = 0, i;
        }
        return e.prototype._next = function(r) {
            var n, i = this.index++;
            try {
                n = this.project(r, i);
            } catch (s) {
                this.destination.error(s);
                return;
            }
            this._innerSub(n);
        }, e.prototype._innerSub = function(r) {
            var n = this.innerSubscription;
            n && n.unsubscribe();
            var i = new _e(this),
                s = this.destination;
            s.add(i), this.innerSubscription = ge(r, i), this.innerSubscription !== i && s.add(this.innerSubscription);
        }, e.prototype._complete = function() {
            var r = this.innerSubscription;
            (!r || r.closed) && t.prototype._complete.call(this), this.unsubscribe();
        }, e.prototype._unsubscribe = function() {
            this.innerSubscription = void 0;
        }, e.prototype.notifyComplete = function() {
            this.innerSubscription = void 0, this.isStopped && t.prototype._complete.call(this);
        }, e.prototype.notifyNext = function(r) {
            this.destination.next(r);
        }, e;
    }(be);

function bg() {
    return _n(Pt);
}

function gg(t, e) {
    return e ? _n(function() {
        return t;
    }, e) : _n(function() {
        return t;
    });
}

function mg(t) {
    return function(e) {
        return e.lift(new yg(t));
    };
}
var yg = /* @__PURE__ */ function() {
        function t(e) {
            this.notifier = e;
        }
        return t.prototype.call = function(e, r) {
            var n = new vg(e),
                i = ge(this.notifier, new _e(n));
            return i && !n.seenValue ? (n.add(i), r.subscribe(n)) : n;
        }, t;
    }(),
    vg = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r) {
            var n = t.call(this, r) || this;
            return n.seenValue = !1, n;
        }
        return e.prototype.notifyNext = function() {
            this.seenValue = !0, this.complete();
        }, e.prototype.notifyComplete = function() {}, e;
    }(be);

function wg(t, e) {
    return e === void 0 && (e = !1),
        function(r) {
            return r.lift(new Eg(t, e));
        };
}
var Eg = /* @__PURE__ */ function() {
        function t(e, r) {
            this.predicate = e, this.inclusive = r;
        }
        return t.prototype.call = function(e, r) {
            return r.subscribe(new Sg(e, this.predicate, this.inclusive));
        }, t;
    }(),
    Sg = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r, n, i) {
            var s = t.call(this, r) || this;
            return s.predicate = n, s.inclusive = i, s.index = 0, s;
        }
        return e.prototype._next = function(r) {
            var n = this.destination,
                i;
            try {
                i = this.predicate(r, this.index++);
            } catch (s) {
                n.error(s);
                return;
            }
            this.nextOrComplete(r, i);
        }, e.prototype.nextOrComplete = function(r, n) {
            var i = this.destination;
            Boolean(n) ? i.next(r) : (this.inclusive && i.next(r), i.complete());
        }, e;
    }(H);

function kg(t, e, r) {
    return function(i) {
        return i.lift(new Rg(t, e, r));
    };
}
var Rg = /* @__PURE__ */ function() {
        function t(e, r, n) {
            this.nextOrObserver = e, this.error = r, this.complete = n;
        }
        return t.prototype.call = function(e, r) {
            return r.subscribe(new Ig(e, this.nextOrObserver, this.error, this.complete));
        }, t;
    }(),
    Ig = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r, n, i, s) {
            var o = t.call(this, r) || this;
            return o._tapNext = ut, o._tapError = ut, o._tapComplete = ut, o._tapError = i || ut, o._tapComplete = s || ut, Sr(n) ? (o._context = o, o._tapNext = n) : n && (o._context = n, o._tapNext = n.next || ut, o._tapError = n.error || ut, o._tapComplete = n.complete || ut), o;
        }
        return e.prototype._next = function(r) {
            try {
                this._tapNext.call(this._context, r);
            } catch (n) {
                this.destination.error(n);
                return;
            }
            this.destination.next(r);
        }, e.prototype._error = function(r) {
            try {
                this._tapError.call(this._context, r);
            } catch (n) {
                this.destination.error(n);
                return;
            }
            this.destination.error(r);
        }, e.prototype._complete = function() {
            try {
                this._tapComplete.call(this._context);
            } catch (r) {
                this.destination.error(r);
                return;
            }
            return this.destination.complete();
        }, e;
    }(H),
    df = {
        leading: !0,
        trailing: !1
    };

function Ag(t, e) {
    return e === void 0 && (e = df),
        function(r) {
            return r.lift(new Tg(t, !!e.leading, !!e.trailing));
        };
}
var Tg = /* @__PURE__ */ function() {
        function t(e, r, n) {
            this.durationSelector = e, this.leading = r, this.trailing = n;
        }
        return t.prototype.call = function(e, r) {
            return r.subscribe(new Cg(e, this.durationSelector, this.leading, this.trailing));
        }, t;
    }(),
    Cg = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r, n, i, s) {
            var o = t.call(this, r) || this;
            return o.destination = r, o.durationSelector = n, o._leading = i, o._trailing = s, o._hasValue = !1, o;
        }
        return e.prototype._next = function(r) {
            this._hasValue = !0, this._sendValue = r, this._throttled || (this._leading ? this.send() : this.throttle(r));
        }, e.prototype.send = function() {
            var r = this,
                n = r._hasValue,
                i = r._sendValue;
            n && (this.destination.next(i), this.throttle(i)), this._hasValue = !1, this._sendValue = void 0;
        }, e.prototype.throttle = function(r) {
            var n = this.tryDurationSelector(r);
            n && this.add(this._throttled = ge(n, new _e(this)));
        }, e.prototype.tryDurationSelector = function(r) {
            try {
                return this.durationSelector(r);
            } catch (n) {
                return this.destination.error(n), null;
            }
        }, e.prototype.throttlingDone = function() {
            var r = this,
                n = r._throttled,
                i = r._trailing;
            n && n.unsubscribe(), this._throttled = void 0, i && this.send();
        }, e.prototype.notifyNext = function() {
            this.throttlingDone();
        }, e.prototype.notifyComplete = function() {
            this.throttlingDone();
        }, e;
    }(be);

function Mg(t, e, r) {
    return e === void 0 && (e = Be), r === void 0 && (r = df),
        function(n) {
            return n.lift(new xg(t, e, r.leading, r.trailing));
        };
}
var xg = /* @__PURE__ */ function() {
        function t(e, r, n, i) {
            this.duration = e, this.scheduler = r, this.leading = n, this.trailing = i;
        }
        return t.prototype.call = function(e, r) {
            return r.subscribe(new Og(e, this.duration, this.scheduler, this.leading, this.trailing));
        }, t;
    }(),
    Og = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r, n, i, s, o) {
            var a = t.call(this, r) || this;
            return a.duration = n, a.scheduler = i, a.leading = s, a.trailing = o, a._hasTrailingValue = !1, a._trailingValue = null, a;
        }
        return e.prototype._next = function(r) {
            this.throttled ? this.trailing && (this._trailingValue = r, this._hasTrailingValue = !0) : (this.add(this.throttled = this.scheduler.schedule(Ng, this.duration, {
                subscriber: this
            })), this.leading ? this.destination.next(r) : this.trailing && (this._trailingValue = r, this._hasTrailingValue = !0));
        }, e.prototype._complete = function() {
            this._hasTrailingValue ? (this.destination.next(this._trailingValue), this.destination.complete()) : this.destination.complete();
        }, e.prototype.clearThrottle = function() {
            var r = this.throttled;
            r && (this.trailing && this._hasTrailingValue && (this.destination.next(this._trailingValue), this._trailingValue = null, this._hasTrailingValue = !1), r.unsubscribe(), this.remove(r), this.throttled = null);
        }, e;
    }(H);

function Ng(t) {
    var e = t.subscriber;
    e.clearThrottle();
}

function Dg(t) {
    return t === void 0 && (t = Be),
        function(e) {
            return qa(function() {
                return e.pipe(li(function(r, n) {
                    var i = r.current;
                    return {
                        value: n,
                        current: t.now(),
                        last: i
                    };
                }, {
                    current: t.now(),
                    value: void 0,
                    last: void 0
                }), Ke(function(r) {
                    var n = r.current,
                        i = r.last,
                        s = r.value;
                    return new Lg(s, n - i);
                }));
            });
        };
}
var Lg = /* @__PURE__ */ function() {
    function t(e, r) {
        this.value = e, this.interval = r;
    }
    return t;
}();

function pf(t, e, r) {
    return r === void 0 && (r = Be),
        function(n) {
            var i = uf(t),
                s = i ? +t - r.now() : Math.abs(t);
            return n.lift(new Pg(s, i, e, r));
        };
}
var Pg = /* @__PURE__ */ function() {
        function t(e, r, n, i) {
            this.waitFor = e, this.absoluteTimeout = r, this.withObservable = n, this.scheduler = i;
        }
        return t.prototype.call = function(e, r) {
            return r.subscribe(new jg(e, this.absoluteTimeout, this.waitFor, this.withObservable, this.scheduler));
        }, t;
    }(),
    jg = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r, n, i, s, o) {
            var a = t.call(this, r) || this;
            return a.absoluteTimeout = n, a.waitFor = i, a.withObservable = s, a.scheduler = o, a.scheduleTimeout(), a;
        }
        return e.dispatchTimeout = function(r) {
            var n = r.withObservable;
            r._unsubscribeAndRecycle(), r.add(ge(n, new _e(r)));
        }, e.prototype.scheduleTimeout = function() {
            var r = this.action;
            r ? this.action = r.schedule(this, this.waitFor) : this.add(this.action = this.scheduler.schedule(e.dispatchTimeout, this.waitFor, this));
        }, e.prototype._next = function(r) {
            this.absoluteTimeout || this.scheduleTimeout(), t.prototype._next.call(this, r);
        }, e.prototype._unsubscribe = function() {
            this.action = void 0, this.scheduler = null, this.withObservable = null;
        }, e;
    }(be);

function Bg(t, e) {
    return e === void 0 && (e = Be), pf(t, $a(new Wl()), e);
}

function Ug(t) {
    return t === void 0 && (t = Be), Ke(function(e) {
        return new Fg(e, t.now());
    });
}
var Fg = /* @__PURE__ */ function() {
    function t(e, r) {
        this.value = e, this.timestamp = r;
    }
    return t;
}();

function Hg(t, e, r) {
    return r === 0 ? [e] : (t.push(e), t);
}

function Wg() {
    return xi(Hg, []);
}

function Gg(t) {
    return function(r) {
        return r.lift(new $g(t));
    };
}
var $g = /* @__PURE__ */ function() {
        function t(e) {
            this.windowBoundaries = e;
        }
        return t.prototype.call = function(e, r) {
            var n = new Vg(e),
                i = r.subscribe(n);
            return i.closed || n.add(ge(this.windowBoundaries, new _e(n))), i;
        }, t;
    }(),
    Vg = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r) {
            var n = t.call(this, r) || this;
            return n.window = new Ie(), r.next(n.window), n;
        }
        return e.prototype.notifyNext = function() {
            this.openWindow();
        }, e.prototype.notifyError = function(r) {
            this._error(r);
        }, e.prototype.notifyComplete = function() {
            this._complete();
        }, e.prototype._next = function(r) {
            this.window.next(r);
        }, e.prototype._error = function(r) {
            this.window.error(r), this.destination.error(r);
        }, e.prototype._complete = function() {
            this.window.complete(), this.destination.complete();
        }, e.prototype._unsubscribe = function() {
            this.window = null;
        }, e.prototype.openWindow = function() {
            var r = this.window;
            r && r.complete();
            var n = this.destination,
                i = this.window = new Ie();
            n.next(i);
        }, e;
    }(be);

function zg(t, e) {
    return e === void 0 && (e = 0),
        function(n) {
            return n.lift(new Zg(t, e));
        };
}
var Zg = /* @__PURE__ */ function() {
        function t(e, r) {
            this.windowSize = e, this.startWindowEvery = r;
        }
        return t.prototype.call = function(e, r) {
            return r.subscribe(new qg(e, this.windowSize, this.startWindowEvery));
        }, t;
    }(),
    qg = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r, n, i) {
            var s = t.call(this, r) || this;
            return s.destination = r, s.windowSize = n, s.startWindowEvery = i, s.windows = [new Ie()], s.count = 0, r.next(s.windows[0]), s;
        }
        return e.prototype._next = function(r) {
            for (var n = this.startWindowEvery > 0 ? this.startWindowEvery : this.windowSize, i = this.destination, s = this.windowSize, o = this.windows, a = o.length, c = 0; c < a && !this.closed; c++)
                o[c].next(r);
            var u = this.count - s + 1;
            if (u >= 0 && u % n === 0 && !this.closed && o.shift().complete(), ++this.count % n === 0 && !this.closed) {
                var l = new Ie();
                o.push(l), i.next(l);
            }
        }, e.prototype._error = function(r) {
            var n = this.windows;
            if (n)
                for (; n.length > 0 && !this.closed;)
                    n.shift().error(r);
            this.destination.error(r);
        }, e.prototype._complete = function() {
            var r = this.windows;
            if (r)
                for (; r.length > 0 && !this.closed;)
                    r.shift().complete();
            this.destination.complete();
        }, e.prototype._unsubscribe = function() {
            this.count = 0, this.windows = null;
        }, e;
    }(H);

function Yg(t) {
    var e = Be,
        r = null,
        n = Number.POSITIVE_INFINITY;
    return We(arguments[3]) && (e = arguments[3]), We(arguments[2]) ? e = arguments[2] : Ir(arguments[2]) && (n = Number(arguments[2])), We(arguments[1]) ? e = arguments[1] : Ir(arguments[1]) && (r = Number(arguments[1])),
        function(s) {
            return s.lift(new Jg(t, r, n, e));
        };
}
var Jg = /* @__PURE__ */ function() {
        function t(e, r, n, i) {
            this.windowTimeSpan = e, this.windowCreationInterval = r, this.maxWindowSize = n, this.scheduler = i;
        }
        return t.prototype.call = function(e, r) {
            return r.subscribe(new Kg(e, this.windowTimeSpan, this.windowCreationInterval, this.maxWindowSize, this.scheduler));
        }, t;
    }(),
    Qg = /* @__PURE__ */ function(t) {
        M(e, t);

        function e() {
            var r = t !== null && t.apply(this, arguments) || this;
            return r._numberOfNextedValues = 0, r;
        }
        return e.prototype.next = function(r) {
            this._numberOfNextedValues++, t.prototype.next.call(this, r);
        }, Object.defineProperty(e.prototype, "numberOfNextedValues", {
            get: function() {
                return this._numberOfNextedValues;
            },
            enumerable: !0,
            configurable: !0
        }), e;
    }(Ie),
    Kg = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r, n, i, s, o) {
            var a = t.call(this, r) || this;
            a.destination = r, a.windowTimeSpan = n, a.windowCreationInterval = i, a.maxWindowSize = s, a.scheduler = o, a.windows = [];
            var c = a.openWindow();
            if (i !== null && i >= 0) {
                var u = {
                        subscriber: a,
                        window: c,
                        context: null
                    },
                    l = {
                        windowTimeSpan: n,
                        windowCreationInterval: i,
                        subscriber: a,
                        scheduler: o
                    };
                a.add(o.schedule(_f, n, u)), a.add(o.schedule(em, i, l));
            } else {
                var b = {
                    subscriber: a,
                    window: c,
                    windowTimeSpan: n
                };
                a.add(o.schedule(Xg, n, b));
            }
            return a;
        }
        return e.prototype._next = function(r) {
            for (var n = this.windows, i = n.length, s = 0; s < i; s++) {
                var o = n[s];
                o.closed || (o.next(r), o.numberOfNextedValues >= this.maxWindowSize && this.closeWindow(o));
            }
        }, e.prototype._error = function(r) {
            for (var n = this.windows; n.length > 0;)
                n.shift().error(r);
            this.destination.error(r);
        }, e.prototype._complete = function() {
            for (var r = this.windows; r.length > 0;) {
                var n = r.shift();
                n.closed || n.complete();
            }
            this.destination.complete();
        }, e.prototype.openWindow = function() {
            var r = new Qg();
            this.windows.push(r);
            var n = this.destination;
            return n.next(r), r;
        }, e.prototype.closeWindow = function(r) {
            r.complete();
            var n = this.windows;
            n.splice(n.indexOf(r), 1);
        }, e;
    }(H);

function Xg(t) {
    var e = t.subscriber,
        r = t.windowTimeSpan,
        n = t.window;
    n && e.closeWindow(n), t.window = e.openWindow(), this.schedule(t, r);
}

function em(t) {
    var e = t.windowTimeSpan,
        r = t.subscriber,
        n = t.scheduler,
        i = t.windowCreationInterval,
        s = r.openWindow(),
        o = this,
        a = {
            action: o,
            subscription: null
        },
        c = {
            subscriber: r,
            window: s,
            context: a
        };
    a.subscription = n.schedule(_f, e, c), o.add(a.subscription), o.schedule(t, i);
}

function _f(t) {
    var e = t.subscriber,
        r = t.window,
        n = t.context;
    n && n.action && n.subscription && n.action.remove(n.subscription), e.closeWindow(r);
}

function tm(t, e) {
    return function(r) {
        return r.lift(new rm(t, e));
    };
}
var rm = /* @__PURE__ */ function() {
        function t(e, r) {
            this.openings = e, this.closingSelector = r;
        }
        return t.prototype.call = function(e, r) {
            return r.subscribe(new nm(e, this.openings, this.closingSelector));
        }, t;
    }(),
    nm = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r, n, i) {
            var s = t.call(this, r) || this;
            return s.openings = n, s.closingSelector = i, s.contexts = [], s.add(s.openSubscription = wt(s, n, n)), s;
        }
        return e.prototype._next = function(r) {
            var n = this.contexts;
            if (n)
                for (var i = n.length, s = 0; s < i; s++)
                    n[s].window.next(r);
        }, e.prototype._error = function(r) {
            var n = this.contexts;
            if (this.contexts = null, n)
                for (var i = n.length, s = -1; ++s < i;) {
                    var o = n[s];
                    o.window.error(r), o.subscription.unsubscribe();
                }
            t.prototype._error.call(this, r);
        }, e.prototype._complete = function() {
            var r = this.contexts;
            if (this.contexts = null, r)
                for (var n = r.length, i = -1; ++i < n;) {
                    var s = r[i];
                    s.window.complete(), s.subscription.unsubscribe();
                }
            t.prototype._complete.call(this);
        }, e.prototype._unsubscribe = function() {
            var r = this.contexts;
            if (this.contexts = null, r)
                for (var n = r.length, i = -1; ++i < n;) {
                    var s = r[i];
                    s.window.unsubscribe(), s.subscription.unsubscribe();
                }
        }, e.prototype.notifyNext = function(r, n, i, s, o) {
            if (r === this.openings) {
                var a = void 0;
                try {
                    var c = this.closingSelector;
                    a = c(n);
                } catch (p) {
                    return this.error(p);
                }
                var u = new Ie(),
                    l = new pe(),
                    b = {
                        window: u,
                        subscription: l
                    };
                this.contexts.push(b);
                var f = wt(this, a, b);
                f.closed ? this.closeWindow(this.contexts.length - 1) : (f.context = b, l.add(f)), this.destination.next(u);
            } else
                this.closeWindow(this.contexts.indexOf(r));
        }, e.prototype.notifyError = function(r) {
            this.error(r);
        }, e.prototype.notifyComplete = function(r) {
            r !== this.openSubscription && this.closeWindow(this.contexts.indexOf(r.context));
        }, e.prototype.closeWindow = function(r) {
            if (r !== -1) {
                var n = this.contexts,
                    i = n[r],
                    s = i.window,
                    o = i.subscription;
                n.splice(r, 1), s.complete(), o.unsubscribe();
            }
        }, e;
    }(rr);

function im(t) {
    return function(r) {
        return r.lift(new sm(t));
    };
}
var sm = /* @__PURE__ */ function() {
        function t(e) {
            this.closingSelector = e;
        }
        return t.prototype.call = function(e, r) {
            return r.subscribe(new om(e, this.closingSelector));
        }, t;
    }(),
    om = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r, n) {
            var i = t.call(this, r) || this;
            return i.destination = r, i.closingSelector = n, i.openWindow(), i;
        }
        return e.prototype.notifyNext = function(r, n, i, s, o) {
            this.openWindow(o);
        }, e.prototype.notifyError = function(r) {
            this._error(r);
        }, e.prototype.notifyComplete = function(r) {
            this.openWindow(r);
        }, e.prototype._next = function(r) {
            this.window.next(r);
        }, e.prototype._error = function(r) {
            this.window.error(r), this.destination.error(r), this.unsubscribeClosingNotification();
        }, e.prototype._complete = function() {
            this.window.complete(), this.destination.complete(), this.unsubscribeClosingNotification();
        }, e.prototype.unsubscribeClosingNotification = function() {
            this.closingNotification && this.closingNotification.unsubscribe();
        }, e.prototype.openWindow = function(r) {
            r === void 0 && (r = null), r && (this.remove(r), r.unsubscribe());
            var n = this.window;
            n && n.complete();
            var i = this.window = new Ie();
            this.destination.next(i);
            var s;
            try {
                var o = this.closingSelector;
                s = o();
            } catch (a) {
                this.destination.error(a), this.window.error(a);
                return;
            }
            this.add(this.closingNotification = wt(this, s));
        }, e;
    }(rr);

function am() {
    for (var t = [], e = 0; e < arguments.length; e++)
        t[e] = arguments[e];
    return function(r) {
        var n;
        typeof t[t.length - 1] == "function" && (n = t.pop());
        var i = t;
        return r.lift(new cm(i, n));
    };
}
var cm = /* @__PURE__ */ function() {
        function t(e, r) {
            this.observables = e, this.project = r;
        }
        return t.prototype.call = function(e, r) {
            return r.subscribe(new um(e, this.observables, this.project));
        }, t;
    }(),
    um = /* @__PURE__ */ function(t) {
        M(e, t);

        function e(r, n, i) {
            var s = t.call(this, r) || this;
            s.observables = n, s.project = i, s.toRespond = [];
            var o = n.length;
            s.values = new Array(o);
            for (var a = 0; a < o; a++)
                s.toRespond.push(a);
            for (var a = 0; a < o; a++) {
                var c = n[a];
                s.add(wt(s, c, void 0, a));
            }
            return s;
        }
        return e.prototype.notifyNext = function(r, n, i) {
            this.values[i] = n;
            var s = this.toRespond;
            if (s.length > 0) {
                var o = s.indexOf(i);
                o !== -1 && s.splice(o, 1);
            }
        }, e.prototype.notifyComplete = function() {}, e.prototype._next = function(r) {
            if (this.toRespond.length === 0) {
                var n = [r].concat(this.values);
                this.project ? this._tryProject(n) : this.destination.next(n);
            }
        }, e.prototype._tryProject = function(r) {
            var n;
            try {
                n = this.project.apply(this, r);
            } catch (i) {
                this.destination.error(i);
                return;
            }
            this.destination.next(n);
        }, e;
    }(rr);

function lm() {
    for (var t = [], e = 0; e < arguments.length; e++)
        t[e] = arguments[e];
    return function(n) {
        return n.lift.call(nf.apply(void 0, [n].concat(t)));
    };
}

function fm(t) {
    return function(e) {
        return e.lift(new sf(t));
    };
}
const hm = /* @__PURE__ */ Object.freeze( /* @__PURE__ */ Object.defineProperty({
        __proto__: null,
        audit: of ,
        auditTime: h_,
        buffer: d_,
        bufferCount: b_,
        bufferTime: v_,
        bufferToggle: R_,
        bufferWhen: T_,
        catchError: x_,
        combineAll: D_,
        combineLatest: L_,
        concat: P_,
        concatAll: ql,
        concatMap: cf,
        concatMapTo: j_,
        count: B_,
        debounce: H_,
        debounceTime: $_,
        defaultIfEmpty: kn,
        delay: J_,
        delayWhen: eb,
        dematerialize: ib,
        distinct: ab,
        distinctUntilChanged: lf,
        distinctUntilKeyChanged: hb,
        elementAt: mb,
        endWith: yb,
        every: vb,
        exhaust: Sb,
        exhaustMap: ff,
        expand: Tb,
        filter: Bt,
        finalize: xb,
        find: Db,
        findIndex: Pb,
        first: jb,
        flatMap: jp,
        groupBy: Vd,
        ignoreElements: Bb,
        isEmpty: Hb,
        last: zb,
        map: Ke,
        mapTo: Zb,
        materialize: Jb,
        max: t0,
        merge: r0,
        mergeAll: Za,
        mergeMap: Xt,
        mergeMapTo: n0,
        mergeScan: i0,
        min: a0,
        multicast: er,
        observeOn: tp,
        onErrorResumeNext: u0,
        pairwise: h0,
        partition: _0,
        pluck: b0,
        publish: m0,
        publishBehavior: y0,
        publishLast: v0,
        publishReplay: w0,
        race: E0,
        reduce: xi,
        refCount: Wa,
        repeat: S0,
        repeatWhen: R0,
        retry: T0,
        retryWhen: x0,
        sample: D0,
        sampleTime: j0,
        scan: li,
        sequenceEqual: H0,
        share: z0,
        shareReplay: Z0,
        single: Y0,
        skip: K0,
        skipLast: tg,
        skipUntil: ig,
        skipWhile: ag,
        startWith: lg,
        subscribeOn: hg,
        switchAll: bg,
        switchMap: _n,
        switchMapTo: gg,
        take: Ya,
        takeLast: ui,
        takeUntil: mg,
        takeWhile: wg,
        tap: kg,
        throttle: Ag,
        throttleTime: Mg,
        throwIfEmpty: Mi,
        timeInterval: Dg,
        timeout: Bg,
        timeoutWith: pf,
        timestamp: Ug,
        toArray: Wg,
        window: Gg,
        windowCount: zg,
        windowTime: Yg,
        windowToggle: tm,
        windowWhen: im,
        withLatestFrom: am,
        zip: lm,
        zipAll: fm
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Oi = /* @__PURE__ */ Lr(hm);
var ma = {},
    dm = {
        get exports() {
            return ma;
        },
        set exports(t) {
            ma = t;
        }
    },
    st = {},
    pm = {
        get exports() {
            return st;
        },
        set exports(t) {
            st = t;
        }
    };
/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
(function(t, e) {
    var r = Ei,
        n = r.Buffer;

    function i(o, a) {
        for (var c in o)
            a[c] = o[c];
    }
    n.from && n.alloc && n.allocUnsafe && n.allocUnsafeSlow ? t.exports = r : (i(r, e), e.Buffer = s);

    function s(o, a, c) {
        return n(o, a, c);
    }
    s.prototype = Object.create(n.prototype), i(n, s), s.from = function(o, a, c) {
        if (typeof o == "number")
            throw new TypeError("Argument must not be a number");
        return n(o, a, c);
    }, s.alloc = function(o, a, c) {
        if (typeof o != "number")
            throw new TypeError("Argument must be a number");
        var u = n(o);
        return a !== void 0 ? typeof c == "string" ? u.fill(a, c) : u.fill(a) : u.fill(0), u;
    }, s.allocUnsafe = function(o) {
        if (typeof o != "number")
            throw new TypeError("Argument must be a number");
        return n(o);
    }, s.allocUnsafeSlow = function(o) {
        if (typeof o != "number")
            throw new TypeError("Argument must be a number");
        return r.SlowBuffer(o);
    };
})(pm, st);
var bf = st.Buffer;

function Ni(t, e) {
    this._block = bf.alloc(t), this._finalSize = e, this._blockSize = t, this._len = 0;
}
Ni.prototype.update = function(t, e) {
    typeof t == "string" && (e = e || "utf8", t = bf.from(t, e));
    for (var r = this._block, n = this._blockSize, i = t.length, s = this._len, o = 0; o < i;) {
        for (var a = s % n, c = Math.min(i - o, n - a), u = 0; u < c; u++)
            r[a + u] = t[o + u];
        s += c, o += c, s % n === 0 && this._update(r);
    }
    return this._len += i, this;
};
Ni.prototype.digest = function(t) {
    var e = this._len % this._blockSize;
    this._block[e] = 128, this._block.fill(0, e + 1), e >= this._finalSize && (this._update(this._block), this._block.fill(0));
    var r = this._len * 8;
    if (r <= 4294967295)
        this._block.writeUInt32BE(r, this._blockSize - 4);
    else {
        var n = (r & 4294967295) >>> 0,
            i = (r - n) / 4294967296;
        this._block.writeUInt32BE(i, this._blockSize - 8), this._block.writeUInt32BE(n, this._blockSize - 4);
    }
    this._update(this._block);
    var s = this._hash();
    return t ? s.toString(t) : s;
};
Ni.prototype._update = function() {
    throw new Error("_update must be implemented by subclass");
};
var Gr = Ni,
    _m = Qe,
    gf = Gr,
    bm = st.Buffer,
    gm = [
        1518500249,
        1859775393, -1894007588, -899497514
    ],
    mm = new Array(80);

function Rn() {
    this.init(), this._w = mm, gf.call(this, 64, 56);
}
_m(Rn, gf);
Rn.prototype.init = function() {
    return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this;
};

function ym(t) {
    return t << 5 | t >>> 27;
}

function vm(t) {
    return t << 30 | t >>> 2;
}

function wm(t, e, r, n) {
    return t === 0 ? e & r | ~e & n : t === 2 ? e & r | e & n | r & n : e ^ r ^ n;
}
Rn.prototype._update = function(t) {
    for (var e = this._w, r = this._a | 0, n = this._b | 0, i = this._c | 0, s = this._d | 0, o = this._e | 0, a = 0; a < 16; ++a)
        e[a] = t.readInt32BE(a * 4);
    for (; a < 80; ++a)
        e[a] = e[a - 3] ^ e[a - 8] ^ e[a - 14] ^ e[a - 16];
    for (var c = 0; c < 80; ++c) {
        var u = ~~(c / 20),
            l = ym(r) + wm(u, n, i, s) + o + e[c] + gm[u] | 0;
        o = s, s = i, i = vm(n), n = r, r = l;
    }
    this._a = r + this._a | 0, this._b = n + this._b | 0, this._c = i + this._c | 0, this._d = s + this._d | 0, this._e = o + this._e | 0;
};
Rn.prototype._hash = function() {
    var t = bm.allocUnsafe(20);
    return t.writeInt32BE(this._a | 0, 0), t.writeInt32BE(this._b | 0, 4), t.writeInt32BE(this._c | 0, 8), t.writeInt32BE(this._d | 0, 12), t.writeInt32BE(this._e | 0, 16), t;
};
var Em = Rn,
    Sm = Qe,
    mf = Gr,
    km = st.Buffer,
    Rm = [
        1518500249,
        1859775393, -1894007588, -899497514
    ],
    Im = new Array(80);

function In() {
    this.init(), this._w = Im, mf.call(this, 64, 56);
}
Sm(In, mf);
In.prototype.init = function() {
    return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this;
};

function Am(t) {
    return t << 1 | t >>> 31;
}

function Tm(t) {
    return t << 5 | t >>> 27;
}

function Cm(t) {
    return t << 30 | t >>> 2;
}

function Mm(t, e, r, n) {
    return t === 0 ? e & r | ~e & n : t === 2 ? e & r | e & n | r & n : e ^ r ^ n;
}
In.prototype._update = function(t) {
    for (var e = this._w, r = this._a | 0, n = this._b | 0, i = this._c | 0, s = this._d | 0, o = this._e | 0, a = 0; a < 16; ++a)
        e[a] = t.readInt32BE(a * 4);
    for (; a < 80; ++a)
        e[a] = Am(e[a - 3] ^ e[a - 8] ^ e[a - 14] ^ e[a - 16]);
    for (var c = 0; c < 80; ++c) {
        var u = ~~(c / 20),
            l = Tm(r) + Mm(u, n, i, s) + o + e[c] + Rm[u] | 0;
        o = s, s = i, i = Cm(n), n = r, r = l;
    }
    this._a = r + this._a | 0, this._b = n + this._b | 0, this._c = i + this._c | 0, this._d = s + this._d | 0, this._e = o + this._e | 0;
};
In.prototype._hash = function() {
    var t = km.allocUnsafe(20);
    return t.writeInt32BE(this._a | 0, 0), t.writeInt32BE(this._b | 0, 4), t.writeInt32BE(this._c | 0, 8), t.writeInt32BE(this._d | 0, 12), t.writeInt32BE(this._e | 0, 16), t;
};
var xm = In,
    Om = Qe,
    yf = Gr,
    Nm = st.Buffer,
    Dm = [
        1116352408,
        1899447441,
        3049323471,
        3921009573,
        961987163,
        1508970993,
        2453635748,
        2870763221,
        3624381080,
        310598401,
        607225278,
        1426881987,
        1925078388,
        2162078206,
        2614888103,
        3248222580,
        3835390401,
        4022224774,
        264347078,
        604807628,
        770255983,
        1249150122,
        1555081692,
        1996064986,
        2554220882,
        2821834349,
        2952996808,
        3210313671,
        3336571891,
        3584528711,
        113926993,
        338241895,
        666307205,
        773529912,
        1294757372,
        1396182291,
        1695183700,
        1986661051,
        2177026350,
        2456956037,
        2730485921,
        2820302411,
        3259730800,
        3345764771,
        3516065817,
        3600352804,
        4094571909,
        275423344,
        430227734,
        506948616,
        659060556,
        883997877,
        958139571,
        1322822218,
        1537002063,
        1747873779,
        1955562222,
        2024104815,
        2227730452,
        2361852424,
        2428436474,
        2756734187,
        3204031479,
        3329325298
    ],
    Lm = new Array(64);

function An() {
    this.init(), this._w = Lm, yf.call(this, 64, 56);
}
Om(An, yf);
An.prototype.init = function() {
    return this._a = 1779033703, this._b = 3144134277, this._c = 1013904242, this._d = 2773480762, this._e = 1359893119, this._f = 2600822924, this._g = 528734635, this._h = 1541459225, this;
};

function Pm(t, e, r) {
    return r ^ t & (e ^ r);
}

function jm(t, e, r) {
    return t & e | r & (t | e);
}

function Bm(t) {
    return (t >>> 2 | t << 30) ^ (t >>> 13 | t << 19) ^ (t >>> 22 | t << 10);
}

function Um(t) {
    return (t >>> 6 | t << 26) ^ (t >>> 11 | t << 21) ^ (t >>> 25 | t << 7);
}

function Fm(t) {
    return (t >>> 7 | t << 25) ^ (t >>> 18 | t << 14) ^ t >>> 3;
}

function Hm(t) {
    return (t >>> 17 | t << 15) ^ (t >>> 19 | t << 13) ^ t >>> 10;
}
An.prototype._update = function(t) {
    for (var e = this._w, r = this._a | 0, n = this._b | 0, i = this._c | 0, s = this._d | 0, o = this._e | 0, a = this._f | 0, c = this._g | 0, u = this._h | 0, l = 0; l < 16; ++l)
        e[l] = t.readInt32BE(l * 4);
    for (; l < 64; ++l)
        e[l] = Hm(e[l - 2]) + e[l - 7] + Fm(e[l - 15]) + e[l - 16] | 0;
    for (var b = 0; b < 64; ++b) {
        var f = u + Um(o) + Pm(o, a, c) + Dm[b] + e[b] | 0,
            p = Bm(r) + jm(r, n, i) | 0;
        u = c, c = a, a = o, o = s + f | 0, s = i, i = n, n = r, r = f + p | 0;
    }
    this._a = r + this._a | 0, this._b = n + this._b | 0, this._c = i + this._c | 0, this._d = s + this._d | 0, this._e = o + this._e | 0, this._f = a + this._f | 0, this._g = c + this._g | 0, this._h = u + this._h | 0;
};
An.prototype._hash = function() {
    var t = Nm.allocUnsafe(32);
    return t.writeInt32BE(this._a, 0), t.writeInt32BE(this._b, 4), t.writeInt32BE(this._c, 8), t.writeInt32BE(this._d, 12), t.writeInt32BE(this._e, 16), t.writeInt32BE(this._f, 20), t.writeInt32BE(this._g, 24), t.writeInt32BE(this._h, 28), t;
};
var vf = An,
    Wm = Qe,
    Gm = vf,
    $m = Gr,
    Vm = st.Buffer,
    zm = new Array(64);

function Di() {
    this.init(), this._w = zm, $m.call(this, 64, 56);
}
Wm(Di, Gm);
Di.prototype.init = function() {
    return this._a = 3238371032, this._b = 914150663, this._c = 812702999, this._d = 4144912697, this._e = 4290775857, this._f = 1750603025, this._g = 1694076839, this._h = 3204075428, this;
};
Di.prototype._hash = function() {
    var t = Vm.allocUnsafe(28);
    return t.writeInt32BE(this._a, 0), t.writeInt32BE(this._b, 4), t.writeInt32BE(this._c, 8), t.writeInt32BE(this._d, 12), t.writeInt32BE(this._e, 16), t.writeInt32BE(this._f, 20), t.writeInt32BE(this._g, 24), t;
};
var Zm = Di,
    qm = Qe,
    wf = Gr,
    Ym = st.Buffer,
    $c = [
        1116352408,
        3609767458,
        1899447441,
        602891725,
        3049323471,
        3964484399,
        3921009573,
        2173295548,
        961987163,
        4081628472,
        1508970993,
        3053834265,
        2453635748,
        2937671579,
        2870763221,
        3664609560,
        3624381080,
        2734883394,
        310598401,
        1164996542,
        607225278,
        1323610764,
        1426881987,
        3590304994,
        1925078388,
        4068182383,
        2162078206,
        991336113,
        2614888103,
        633803317,
        3248222580,
        3479774868,
        3835390401,
        2666613458,
        4022224774,
        944711139,
        264347078,
        2341262773,
        604807628,
        2007800933,
        770255983,
        1495990901,
        1249150122,
        1856431235,
        1555081692,
        3175218132,
        1996064986,
        2198950837,
        2554220882,
        3999719339,
        2821834349,
        766784016,
        2952996808,
        2566594879,
        3210313671,
        3203337956,
        3336571891,
        1034457026,
        3584528711,
        2466948901,
        113926993,
        3758326383,
        338241895,
        168717936,
        666307205,
        1188179964,
        773529912,
        1546045734,
        1294757372,
        1522805485,
        1396182291,
        2643833823,
        1695183700,
        2343527390,
        1986661051,
        1014477480,
        2177026350,
        1206759142,
        2456956037,
        344077627,
        2730485921,
        1290863460,
        2820302411,
        3158454273,
        3259730800,
        3505952657,
        3345764771,
        106217008,
        3516065817,
        3606008344,
        3600352804,
        1432725776,
        4094571909,
        1467031594,
        275423344,
        851169720,
        430227734,
        3100823752,
        506948616,
        1363258195,
        659060556,
        3750685593,
        883997877,
        3785050280,
        958139571,
        3318307427,
        1322822218,
        3812723403,
        1537002063,
        2003034995,
        1747873779,
        3602036899,
        1955562222,
        1575990012,
        2024104815,
        1125592928,
        2227730452,
        2716904306,
        2361852424,
        442776044,
        2428436474,
        593698344,
        2756734187,
        3733110249,
        3204031479,
        2999351573,
        3329325298,
        3815920427,
        3391569614,
        3928383900,
        3515267271,
        566280711,
        3940187606,
        3454069534,
        4118630271,
        4000239992,
        116418474,
        1914138554,
        174292421,
        2731055270,
        289380356,
        3203993006,
        460393269,
        320620315,
        685471733,
        587496836,
        852142971,
        1086792851,
        1017036298,
        365543100,
        1126000580,
        2618297676,
        1288033470,
        3409855158,
        1501505948,
        4234509866,
        1607167915,
        987167468,
        1816402316,
        1246189591
    ],
    Jm = new Array(160);

function Tn() {
    this.init(), this._w = Jm, wf.call(this, 128, 112);
}
qm(Tn, wf);
Tn.prototype.init = function() {
    return this._ah = 1779033703, this._bh = 3144134277, this._ch = 1013904242, this._dh = 2773480762, this._eh = 1359893119, this._fh = 2600822924, this._gh = 528734635, this._hh = 1541459225, this._al = 4089235720, this._bl = 2227873595, this._cl = 4271175723, this._dl = 1595750129, this._el = 2917565137, this._fl = 725511199, this._gl = 4215389547, this._hl = 327033209, this;
};

function Vc(t, e, r) {
    return r ^ t & (e ^ r);
}

function zc(t, e, r) {
    return t & e | r & (t | e);
}

function Zc(t, e) {
    return (t >>> 28 | e << 4) ^ (e >>> 2 | t << 30) ^ (e >>> 7 | t << 25);
}

function qc(t, e) {
    return (t >>> 14 | e << 18) ^ (t >>> 18 | e << 14) ^ (e >>> 9 | t << 23);
}

function Qm(t, e) {
    return (t >>> 1 | e << 31) ^ (t >>> 8 | e << 24) ^ t >>> 7;
}

function Km(t, e) {
    return (t >>> 1 | e << 31) ^ (t >>> 8 | e << 24) ^ (t >>> 7 | e << 25);
}

function Xm(t, e) {
    return (t >>> 19 | e << 13) ^ (e >>> 29 | t << 3) ^ t >>> 6;
}

function ey(t, e) {
    return (t >>> 19 | e << 13) ^ (e >>> 29 | t << 3) ^ (t >>> 6 | e << 26);
}

function Ee(t, e) {
    return t >>> 0 < e >>> 0 ? 1 : 0;
}
Tn.prototype._update = function(t) {
    for (var e = this._w, r = this._ah | 0, n = this._bh | 0, i = this._ch | 0, s = this._dh | 0, o = this._eh | 0, a = this._fh | 0, c = this._gh | 0, u = this._hh | 0, l = this._al | 0, b = this._bl | 0, f = this._cl | 0, p = this._dl | 0, g = this._el | 0, S = this._fl | 0, I = this._gl | 0, _ = this._hl | 0, m = 0; m < 32; m += 2)
        e[m] = t.readInt32BE(m * 4), e[m + 1] = t.readInt32BE(m * 4 + 4);
    for (; m < 160; m += 2) {
        var w = e[m - 30],
            A = e[m - 15 * 2 + 1],
            N = Qm(w, A),
            U = Km(A, w);
        w = e[m - 2 * 2], A = e[m - 2 * 2 + 1];
        var F = Xm(w, A),
            P = ey(A, w),
            L = e[m - 7 * 2],
            ie = e[m - 7 * 2 + 1],
            ee = e[m - 16 * 2],
            z = e[m - 16 * 2 + 1],
            q = U + ie | 0,
            K = N + L + Ee(q, U) | 0;
        q = q + P | 0, K = K + F + Ee(q, P) | 0, q = q + z | 0, K = K + ee + Ee(q, z) | 0, e[m] = K, e[m + 1] = q;
    }
    for (var ne = 0; ne < 160; ne += 2) {
        K = e[ne], q = e[ne + 1];
        var he = zc(r, n, i),
            we = zc(l, b, f),
            ye = Zc(r, l),
            ce = Zc(l, r),
            Ce = qc(o, g),
            Ue = qc(g, o),
            E = $c[ne],
            R = $c[ne + 1],
            x = Vc(o, a, c),
            W = Vc(g, S, I),
            y = _ + Ue | 0,
            v = u + Ce + Ee(y, _) | 0;
        y = y + W | 0, v = v + x + Ee(y, W) | 0, y = y + R | 0, v = v + E + Ee(y, R) | 0, y = y + q | 0, v = v + K + Ee(y, q) | 0;
        var k = ce + we | 0,
            O = ye + he + Ee(k, ce) | 0;
        u = c, _ = I, c = a, I = S, a = o, S = g, g = p + y | 0, o = s + v + Ee(g, p) | 0, s = i, p = f, i = n, f = b, n = r, b = l, l = y + k | 0, r = v + O + Ee(l, y) | 0;
    }
    this._al = this._al + l | 0, this._bl = this._bl + b | 0, this._cl = this._cl + f | 0, this._dl = this._dl + p | 0, this._el = this._el + g | 0, this._fl = this._fl + S | 0, this._gl = this._gl + I | 0, this._hl = this._hl + _ | 0, this._ah = this._ah + r + Ee(this._al, l) | 0, this._bh = this._bh + n + Ee(this._bl, b) | 0, this._ch = this._ch + i + Ee(this._cl, f) | 0, this._dh = this._dh + s + Ee(this._dl, p) | 0, this._eh = this._eh + o + Ee(this._el, g) | 0, this._fh = this._fh + a + Ee(this._fl, S) | 0, this._gh = this._gh + c + Ee(this._gl, I) | 0, this._hh = this._hh + u + Ee(this._hl, _) | 0;
};
Tn.prototype._hash = function() {
    var t = Ym.allocUnsafe(64);

    function e(r, n, i) {
        t.writeInt32BE(r, i), t.writeInt32BE(n, i + 4);
    }
    return e(this._ah, this._al, 0), e(this._bh, this._bl, 8), e(this._ch, this._cl, 16), e(this._dh, this._dl, 24), e(this._eh, this._el, 32), e(this._fh, this._fl, 40), e(this._gh, this._gl, 48), e(this._hh, this._hl, 56), t;
};
var Ef = Tn,
    ty = Qe,
    ry = Ef,
    ny = Gr,
    iy = st.Buffer,
    sy = new Array(160);

function Li() {
    this.init(), this._w = sy, ny.call(this, 128, 112);
}
ty(Li, ry);
Li.prototype.init = function() {
    return this._ah = 3418070365, this._bh = 1654270250, this._ch = 2438529370, this._dh = 355462360, this._eh = 1731405415, this._fh = 2394180231, this._gh = 3675008525, this._hh = 1203062813, this._al = 3238371032, this._bl = 914150663, this._cl = 812702999, this._dl = 4144912697, this._el = 4290775857, this._fl = 1750603025, this._gl = 1694076839, this._hl = 3204075428, this;
};
Li.prototype._hash = function() {
    var t = iy.allocUnsafe(48);

    function e(r, n, i) {
        t.writeInt32BE(r, i), t.writeInt32BE(n, i + 4);
    }
    return e(this._ah, this._al, 0), e(this._bh, this._bl, 8), e(this._ch, this._cl, 16), e(this._dh, this._dl, 24), e(this._eh, this._el, 32), e(this._fh, this._fl, 40), t;
};
var oy = Li,
    nr = dm.exports = function(e) {
        e = e.toLowerCase();
        var r = nr[e];
        if (!r)
            throw new Error(e + " is not supported (we accept pull requests)");
        return new r();
    };
nr.sha = Em;
nr.sha1 = xm;
nr.sha224 = Zm;
nr.sha256 = vf;
nr.sha384 = oy;
nr.sha512 = Ef;
var B = {},
    Sf = function() {
        if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
            return !1;
        if (typeof Symbol.iterator == "symbol")
            return !0;
        var e = {},
            r = Symbol("test"),
            n = Object(r);
        if (typeof r == "string" || Object.prototype.toString.call(r) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]")
            return !1;
        var i = 42;
        e[r] = i;
        for (r in e)
            return !1;
        if (typeof Object.keys == "function" && Object.keys(e).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(e).length !== 0)
            return !1;
        var s = Object.getOwnPropertySymbols(e);
        if (s.length !== 1 || s[0] !== r || !Object.prototype.propertyIsEnumerable.call(e, r))
            return !1;
        if (typeof Object.getOwnPropertyDescriptor == "function") {
            var o = Object.getOwnPropertyDescriptor(e, r);
            if (o.value !== i || o.enumerable !== !0)
                return !1;
        }
        return !0;
    },
    Yc = typeof Symbol < "u" && Symbol,
    ay = Sf,
    cy = function() {
        return typeof Yc != "function" || typeof Symbol != "function" || typeof Yc("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : ay();
    },
    uy = "Function.prototype.bind called on incompatible ",
    yo = Array.prototype.slice,
    ly = Object.prototype.toString,
    fy = "[object Function]",
    hy = function(e) {
        var r = this;
        if (typeof r != "function" || ly.call(r) !== fy)
            throw new TypeError(uy + r);
        for (var n = yo.call(arguments, 1), i, s = function() {
                if (this instanceof i) {
                    var l = r.apply(
                        this,
                        n.concat(yo.call(arguments))
                    );
                    return Object(l) === l ? l : this;
                } else
                    return r.apply(
                        e,
                        n.concat(yo.call(arguments))
                    );
            }, o = Math.max(0, r.length - n.length), a = [], c = 0; c < o; c++)
            a.push("$" + c);
        if (i = Function("binder", "return function (" + a.join(",") + "){ return binder.apply(this,arguments); }")(s), r.prototype) {
            var u = function() {};
            u.prototype = r.prototype, i.prototype = new u(), u.prototype = null;
        }
        return i;
    },
    dy = hy,
    Ja = Function.prototype.bind || dy,
    py = Ja,
    _y = py.call(Function.call, Object.prototype.hasOwnProperty),
    te, Ar = SyntaxError,
    kf = Function,
    mr = TypeError,
    vo = function(t) {
        try {
            return kf('"use strict"; return (' + t + ").constructor;")();
        } catch {}
    },
    Qt = Object.getOwnPropertyDescriptor;
if (Qt)
    try {
        Qt({}, "");
    } catch {
        Qt = null;
    }
var wo = function() {
        throw new mr();
    },
    by = Qt ? function() {
        try {
            return arguments.callee, wo;
        } catch {
            try {
                return Qt(arguments, "callee").get;
            } catch {
                return wo;
            }
        }
    }() : wo,
    ur = cy(),
    Tt = Object.getPrototypeOf || function(t) {
        return t.__proto__;
    },
    hr = {},
    gy = typeof Uint8Array > "u" ? te : Tt(Uint8Array),
    yr = {
        "%AggregateError%": typeof AggregateError > "u" ? te : AggregateError,
        "%Array%": Array,
        "%ArrayBuffer%": typeof ArrayBuffer > "u" ? te : ArrayBuffer,
        "%ArrayIteratorPrototype%": ur ? Tt([][Symbol.iterator]()) : te,
        "%AsyncFromSyncIteratorPrototype%": te,
        "%AsyncFunction%": hr,
        "%AsyncGenerator%": hr,
        "%AsyncGeneratorFunction%": hr,
        "%AsyncIteratorPrototype%": hr,
        "%Atomics%": typeof Atomics > "u" ? te : Atomics,
        "%BigInt%": typeof BigInt > "u" ? te : BigInt,
        "%Boolean%": Boolean,
        "%DataView%": typeof DataView > "u" ? te : DataView,
        "%Date%": Date,
        "%decodeURI%": decodeURI,
        "%decodeURIComponent%": decodeURIComponent,
        "%encodeURI%": encodeURI,
        "%encodeURIComponent%": encodeURIComponent,
        "%Error%": Error,
        "%eval%": eval,
        // eslint-disable-line no-eval
        "%EvalError%": EvalError,
        "%Float32Array%": typeof Float32Array > "u" ? te : Float32Array,
        "%Float64Array%": typeof Float64Array > "u" ? te : Float64Array,
        "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? te : FinalizationRegistry,
        "%Function%": kf,
        "%GeneratorFunction%": hr,
        "%Int8Array%": typeof Int8Array > "u" ? te : Int8Array,
        "%Int16Array%": typeof Int16Array > "u" ? te : Int16Array,
        "%Int32Array%": typeof Int32Array > "u" ? te : Int32Array,
        "%isFinite%": isFinite,
        "%isNaN%": isNaN,
        "%IteratorPrototype%": ur ? Tt(Tt([][Symbol.iterator]())) : te,
        "%JSON%": typeof JSON == "object" ? JSON : te,
        "%Map%": typeof Map > "u" ? te : Map,
        "%MapIteratorPrototype%": typeof Map > "u" || !ur ? te : Tt(( /* @__PURE__ */ new Map())[Symbol.iterator]()),
        "%Math%": Math,
        "%Number%": Number,
        "%Object%": Object,
        "%parseFloat%": parseFloat,
        "%parseInt%": parseInt,
        "%Promise%": typeof Promise > "u" ? te : Promise,
        "%Proxy%": typeof Proxy > "u" ? te : Proxy,
        "%RangeError%": RangeError,
        "%ReferenceError%": ReferenceError,
        "%Reflect%": typeof Reflect > "u" ? te : Reflect,
        "%RegExp%": RegExp,
        "%Set%": typeof Set > "u" ? te : Set,
        "%SetIteratorPrototype%": typeof Set > "u" || !ur ? te : Tt(( /* @__PURE__ */ new Set())[Symbol.iterator]()),
        "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? te : SharedArrayBuffer,
        "%String%": String,
        "%StringIteratorPrototype%": ur ? Tt("" [Symbol.iterator]()) : te,
        "%Symbol%": ur ? Symbol : te,
        "%SyntaxError%": Ar,
        "%ThrowTypeError%": by,
        "%TypedArray%": gy,
        "%TypeError%": mr,
        "%Uint8Array%": typeof Uint8Array > "u" ? te : Uint8Array,
        "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? te : Uint8ClampedArray,
        "%Uint16Array%": typeof Uint16Array > "u" ? te : Uint16Array,
        "%Uint32Array%": typeof Uint32Array > "u" ? te : Uint32Array,
        "%URIError%": URIError,
        "%WeakMap%": typeof WeakMap > "u" ? te : WeakMap,
        "%WeakRef%": typeof WeakRef > "u" ? te : WeakRef,
        "%WeakSet%": typeof WeakSet > "u" ? te : WeakSet
    },
    my = function t(e) {
        var r;
        if (e === "%AsyncFunction%")
            r = vo("async function () {}");
        else if (e === "%GeneratorFunction%")
            r = vo("function* () {}");
        else if (e === "%AsyncGeneratorFunction%")
            r = vo("async function* () {}");
        else if (e === "%AsyncGenerator%") {
            var n = t("%AsyncGeneratorFunction%");
            n && (r = n.prototype);
        } else if (e === "%AsyncIteratorPrototype%") {
            var i = t("%AsyncGenerator%");
            i && (r = Tt(i.prototype));
        }
        return yr[e] = r, r;
    },
    Jc = {
        "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
        "%ArrayPrototype%": ["Array", "prototype"],
        "%ArrayProto_entries%": ["Array", "prototype", "entries"],
        "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
        "%ArrayProto_keys%": ["Array", "prototype", "keys"],
        "%ArrayProto_values%": ["Array", "prototype", "values"],
        "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
        "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
        "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
        "%BooleanPrototype%": ["Boolean", "prototype"],
        "%DataViewPrototype%": ["DataView", "prototype"],
        "%DatePrototype%": ["Date", "prototype"],
        "%ErrorPrototype%": ["Error", "prototype"],
        "%EvalErrorPrototype%": ["EvalError", "prototype"],
        "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
        "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
        "%FunctionPrototype%": ["Function", "prototype"],
        "%Generator%": ["GeneratorFunction", "prototype"],
        "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
        "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
        "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
        "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
        "%JSONParse%": ["JSON", "parse"],
        "%JSONStringify%": ["JSON", "stringify"],
        "%MapPrototype%": ["Map", "prototype"],
        "%NumberPrototype%": ["Number", "prototype"],
        "%ObjectPrototype%": ["Object", "prototype"],
        "%ObjProto_toString%": ["Object", "prototype", "toString"],
        "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
        "%PromisePrototype%": ["Promise", "prototype"],
        "%PromiseProto_then%": ["Promise", "prototype", "then"],
        "%Promise_all%": ["Promise", "all"],
        "%Promise_reject%": ["Promise", "reject"],
        "%Promise_resolve%": ["Promise", "resolve"],
        "%RangeErrorPrototype%": ["RangeError", "prototype"],
        "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
        "%RegExpPrototype%": ["RegExp", "prototype"],
        "%SetPrototype%": ["Set", "prototype"],
        "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
        "%StringPrototype%": ["String", "prototype"],
        "%SymbolPrototype%": ["Symbol", "prototype"],
        "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
        "%TypedArrayPrototype%": ["TypedArray", "prototype"],
        "%TypeErrorPrototype%": ["TypeError", "prototype"],
        "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
        "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
        "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
        "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
        "%URIErrorPrototype%": ["URIError", "prototype"],
        "%WeakMapPrototype%": ["WeakMap", "prototype"],
        "%WeakSetPrototype%": ["WeakSet", "prototype"]
    },
    Cn = Ja,
    fi = _y,
    yy = Cn.call(Function.call, Array.prototype.concat),
    vy = Cn.call(Function.apply, Array.prototype.splice),
    Qc = Cn.call(Function.call, String.prototype.replace),
    hi = Cn.call(Function.call, String.prototype.slice),
    wy = Cn.call(Function.call, RegExp.prototype.exec),
    Ey = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
    Sy = /\\(\\)?/g,
    ky = function(e) {
        var r = hi(e, 0, 1),
            n = hi(e, -1);
        if (r === "%" && n !== "%")
            throw new Ar("invalid intrinsic syntax, expected closing `%`");
        if (n === "%" && r !== "%")
            throw new Ar("invalid intrinsic syntax, expected opening `%`");
        var i = [];
        return Qc(e, Ey, function(s, o, a, c) {
            i[i.length] = a ? Qc(c, Sy, "$1") : o || s;
        }), i;
    },
    Ry = function(e, r) {
        var n = e,
            i;
        if (fi(Jc, n) && (i = Jc[n], n = "%" + i[0] + "%"), fi(yr, n)) {
            var s = yr[n];
            if (s === hr && (s = my(n)), typeof s > "u" && !r)
                throw new mr("intrinsic " + e + " exists, but is not available. Please file an issue!");
            return {
                alias: i,
                name: n,
                value: s
            };
        }
        throw new Ar("intrinsic " + e + " does not exist!");
    },
    Pi = function(e, r) {
        if (typeof e != "string" || e.length === 0)
            throw new mr("intrinsic name must be a non-empty string");
        if (arguments.length > 1 && typeof r != "boolean")
            throw new mr('"allowMissing" argument must be a boolean');
        if (wy(/^%?[^%]*%?$/, e) === null)
            throw new Ar("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
        var n = ky(e),
            i = n.length > 0 ? n[0] : "",
            s = Ry("%" + i + "%", r),
            o = s.name,
            a = s.value,
            c = !1,
            u = s.alias;
        u && (i = u[0], vy(n, yy([0, 1], u)));
        for (var l = 1, b = !0; l < n.length; l += 1) {
            var f = n[l],
                p = hi(f, 0, 1),
                g = hi(f, -1);
            if ((p === '"' || p === "'" || p === "`" || g === '"' || g === "'" || g === "`") && p !== g)
                throw new Ar("property names with quotes must have matching quotes");
            if ((f === "constructor" || !b) && (c = !0), i += "." + f, o = "%" + i + "%", fi(yr, o))
                a = yr[o];
            else if (a != null) {
                if (!(f in a)) {
                    if (!r)
                        throw new mr("base intrinsic for " + e + " exists, but the property is not available.");
                    return;
                }
                if (Qt && l + 1 >= n.length) {
                    var S = Qt(a, f);
                    b = !!S, b && "get" in S && !("originalValue" in S.get) ? a = S.get : a = a[f];
                } else
                    b = fi(a, f), a = a[f];
                b && !c && (yr[o] = a);
            }
        }
        return a;
    },
    ya = {},
    Iy = {
        get exports() {
            return ya;
        },
        set exports(t) {
            ya = t;
        }
    };
(function(t) {
    var e = Ja,
        r = Pi,
        n = r("%Function.prototype.apply%"),
        i = r("%Function.prototype.call%"),
        s = r("%Reflect.apply%", !0) || e.call(i, n),
        o = r("%Object.getOwnPropertyDescriptor%", !0),
        a = r("%Object.defineProperty%", !0),
        c = r("%Math.max%");
    if (a)
        try {
            a({}, "a", {
                value: 1
            });
        } catch {
            a = null;
        }
    t.exports = function(b) {
        var f = s(e, i, arguments);
        if (o && a) {
            var p = o(f, "length");
            p.configurable && a(
                f,
                "length", {
                    value: 1 + c(0, b.length - (arguments.length - 1))
                }
            );
        }
        return f;
    };
    var u = function() {
        return s(e, n, arguments);
    };
    a ? a(t.exports, "apply", {
        value: u
    }) : t.exports.apply = u;
})(Iy);
var Rf = Pi,
    If = ya,
    Ay = If(Rf("String.prototype.indexOf")),
    ji = function(e, r) {
        var n = Rf(e, !!r);
        return typeof n == "function" && Ay(e, ".prototype.") > -1 ? If(n) : n;
    },
    Qa = typeof Map == "function" && Map.prototype,
    Eo = Object.getOwnPropertyDescriptor && Qa ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null,
    di = Qa && Eo && typeof Eo.get == "function" ? Eo.get : null,
    Ty = Qa && Map.prototype.forEach,
    Ka = typeof Set == "function" && Set.prototype,
    So = Object.getOwnPropertyDescriptor && Ka ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null,
    pi = Ka && So && typeof So.get == "function" ? So.get : null,
    Cy = Ka && Set.prototype.forEach,
    My = typeof WeakMap == "function" && WeakMap.prototype,
    nn = My ? WeakMap.prototype.has : null,
    xy = typeof WeakSet == "function" && WeakSet.prototype,
    sn = xy ? WeakSet.prototype.has : null,
    Oy = typeof WeakRef == "function" && WeakRef.prototype,
    Kc = Oy ? WeakRef.prototype.deref : null,
    Ny = Boolean.prototype.valueOf,
    Dy = Object.prototype.toString,
    Ly = Function.prototype.toString,
    Py = String.prototype.match,
    Xa = String.prototype.slice,
    Ot = String.prototype.replace,
    jy = String.prototype.toUpperCase,
    Xc = String.prototype.toLowerCase,
    Af = RegExp.prototype.test,
    eu = Array.prototype.concat,
    ft = Array.prototype.join,
    By = Array.prototype.slice,
    tu = Math.floor,
    va = typeof BigInt == "function" ? BigInt.prototype.valueOf : null,
    ko = Object.getOwnPropertySymbols,
    wa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null,
    Tr = typeof Symbol == "function" && typeof Symbol.iterator == "object",
    De = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === Tr || "symbol") ? Symbol.toStringTag : null,
    Tf = Object.prototype.propertyIsEnumerable,
    ru = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(t) {
        return t.__proto__;
    } : null);

function nu(t, e) {
    if (t === 1 / 0 || t === -1 / 0 || t !== t || t && t > -1e3 && t < 1e3 || Af.call(/e/, e))
        return e;
    var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof t == "number") {
        var n = t < 0 ? -tu(-t) : tu(t);
        if (n !== t) {
            var i = String(n),
                s = Xa.call(e, i.length + 1);
            return Ot.call(i, r, "$&_") + "." + Ot.call(Ot.call(s, /([0-9]{3})/g, "$&_"), /_$/, "");
        }
    }
    return Ot.call(e, r, "$&_");
}
var Ea = Pa,
    iu = Ea.custom,
    su = Mf(iu) ? iu : null,
    Uy = function t(e, r, n, i) {
        var s = r || {};
        if (Ct(s, "quoteStyle") && s.quoteStyle !== "single" && s.quoteStyle !== "double")
            throw new TypeError('option "quoteStyle" must be "single" or "double"');
        if (Ct(s, "maxStringLength") && (typeof s.maxStringLength == "number" ? s.maxStringLength < 0 && s.maxStringLength !== 1 / 0 : s.maxStringLength !== null))
            throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
        var o = Ct(s, "customInspect") ? s.customInspect : !0;
        if (typeof o != "boolean" && o !== "symbol")
            throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
        if (Ct(s, "indent") && s.indent !== null && s.indent !== "	" && !(parseInt(s.indent, 10) === s.indent && s.indent > 0))
            throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
        if (Ct(s, "numericSeparator") && typeof s.numericSeparator != "boolean")
            throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
        var a = s.numericSeparator;
        if (typeof e > "u")
            return "undefined";
        if (e === null)
            return "null";
        if (typeof e == "boolean")
            return e ? "true" : "false";
        if (typeof e == "string")
            return Of(e, s);
        if (typeof e == "number") {
            if (e === 0)
                return 1 / 0 / e > 0 ? "0" : "-0";
            var c = String(e);
            return a ? nu(e, c) : c;
        }
        if (typeof e == "bigint") {
            var u = String(e) + "n";
            return a ? nu(e, u) : u;
        }
        var l = typeof s.depth > "u" ? 5 : s.depth;
        if (typeof n > "u" && (n = 0), n >= l && l > 0 && typeof e == "object")
            return Sa(e) ? "[Array]" : "[Object]";
        var b = n1(s, n);
        if (typeof i > "u")
            i = [];
        else if (xf(i, e) >= 0)
            return "[Circular]";

        function f(q, K, ne) {
            if (K && (i = By.call(i), i.push(K)), ne) {
                var he = {
                    depth: s.depth
                };
                return Ct(s, "quoteStyle") && (he.quoteStyle = s.quoteStyle), t(q, he, n + 1, i);
            }
            return t(q, s, n + 1, i);
        }
        if (typeof e == "function" && !ou(e)) {
            var p = qy(e),
                g = Hn(e, f);
            return "[Function" + (p ? ": " + p : " (anonymous)") + "]" + (g.length > 0 ? " { " + ft.call(g, ", ") + " }" : "");
        }
        if (Mf(e)) {
            var S = Tr ? Ot.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1") : wa.call(e);
            return typeof e == "object" && !Tr ? Jr(S) : S;
        }
        if (e1(e)) {
            for (var I = "<" + Xc.call(String(e.nodeName)), _ = e.attributes || [], m = 0; m < _.length; m++)
                I += " " + _[m].name + "=" + Cf(Fy(_[m].value), "double", s);
            return I += ">", e.childNodes && e.childNodes.length && (I += "..."), I += "</" + Xc.call(String(e.nodeName)) + ">", I;
        }
        if (Sa(e)) {
            if (e.length === 0)
                return "[]";
            var w = Hn(e, f);
            return b && !r1(w) ? "[" + ka(w, b) + "]" : "[ " + ft.call(w, ", ") + " ]";
        }
        if (Wy(e)) {
            var A = Hn(e, f);
            return !("cause" in Error.prototype) && "cause" in e && !Tf.call(e, "cause") ? "{ [" + String(e) + "] " + ft.call(eu.call("[cause]: " + f(e.cause), A), ", ") + " }" : A.length === 0 ? "[" + String(e) + "]" : "{ [" + String(e) + "] " + ft.call(A, ", ") + " }";
        }
        if (typeof e == "object" && o) {
            if (su && typeof e[su] == "function" && Ea)
                return Ea(e, {
                    depth: l - n
                });
            if (o !== "symbol" && typeof e.inspect == "function")
                return e.inspect();
        }
        if (Yy(e)) {
            var N = [];
            return Ty.call(e, function(q, K) {
                N.push(f(K, e, !0) + " => " + f(q, e));
            }), au("Map", di.call(e), N, b);
        }
        if (Ky(e)) {
            var U = [];
            return Cy.call(e, function(q) {
                U.push(f(q, e));
            }), au("Set", pi.call(e), U, b);
        }
        if (Jy(e))
            return Ro("WeakMap");
        if (Xy(e))
            return Ro("WeakSet");
        if (Qy(e))
            return Ro("WeakRef");
        if ($y(e))
            return Jr(f(Number(e)));
        if (zy(e))
            return Jr(f(va.call(e)));
        if (Vy(e))
            return Jr(Ny.call(e));
        if (Gy(e))
            return Jr(f(String(e)));
        if (!Hy(e) && !ou(e)) {
            var F = Hn(e, f),
                P = ru ? ru(e) === Object.prototype : e instanceof Object || e.constructor === Object,
                L = e instanceof Object ? "" : "null prototype",
                ie = !P && De && Object(e) === e && De in e ? Xa.call(Ht(e), 8, -1) : L ? "Object" : "",
                ee = P || typeof e.constructor != "function" ? "" : e.constructor.name ? e.constructor.name + " " : "",
                z = ee + (ie || L ? "[" + ft.call(eu.call([], ie || [], L || []), ": ") + "] " : "");
            return F.length === 0 ? z + "{}" : b ? z + "{" + ka(F, b) + "}" : z + "{ " + ft.call(F, ", ") + " }";
        }
        return String(e);
    };

function Cf(t, e, r) {
    var n = (r.quoteStyle || e) === "double" ? '"' : "'";
    return n + t + n;
}

function Fy(t) {
    return Ot.call(String(t), /"/g, "&quot;");
}

function Sa(t) {
    return Ht(t) === "[object Array]" && (!De || !(typeof t == "object" && De in t));
}

function Hy(t) {
    return Ht(t) === "[object Date]" && (!De || !(typeof t == "object" && De in t));
}

function ou(t) {
    return Ht(t) === "[object RegExp]" && (!De || !(typeof t == "object" && De in t));
}

function Wy(t) {
    return Ht(t) === "[object Error]" && (!De || !(typeof t == "object" && De in t));
}

function Gy(t) {
    return Ht(t) === "[object String]" && (!De || !(typeof t == "object" && De in t));
}

function $y(t) {
    return Ht(t) === "[object Number]" && (!De || !(typeof t == "object" && De in t));
}

function Vy(t) {
    return Ht(t) === "[object Boolean]" && (!De || !(typeof t == "object" && De in t));
}

function Mf(t) {
    if (Tr)
        return t && typeof t == "object" && t instanceof Symbol;
    if (typeof t == "symbol")
        return !0;
    if (!t || typeof t != "object" || !wa)
        return !1;
    try {
        return wa.call(t), !0;
    } catch {}
    return !1;
}

function zy(t) {
    if (!t || typeof t != "object" || !va)
        return !1;
    try {
        return va.call(t), !0;
    } catch {}
    return !1;
}
var Zy = Object.prototype.hasOwnProperty || function(t) {
    return t in this;
};

function Ct(t, e) {
    return Zy.call(t, e);
}

function Ht(t) {
    return Dy.call(t);
}

function qy(t) {
    if (t.name)
        return t.name;
    var e = Py.call(Ly.call(t), /^function\s*([\w$]+)/);
    return e ? e[1] : null;
}

function xf(t, e) {
    if (t.indexOf)
        return t.indexOf(e);
    for (var r = 0, n = t.length; r < n; r++)
        if (t[r] === e)
            return r;
    return -1;
}

function Yy(t) {
    if (!di || !t || typeof t != "object")
        return !1;
    try {
        di.call(t);
        try {
            pi.call(t);
        } catch {
            return !0;
        }
        return t instanceof Map;
    } catch {}
    return !1;
}

function Jy(t) {
    if (!nn || !t || typeof t != "object")
        return !1;
    try {
        nn.call(t, nn);
        try {
            sn.call(t, sn);
        } catch {
            return !0;
        }
        return t instanceof WeakMap;
    } catch {}
    return !1;
}

function Qy(t) {
    if (!Kc || !t || typeof t != "object")
        return !1;
    try {
        return Kc.call(t), !0;
    } catch {}
    return !1;
}

function Ky(t) {
    if (!pi || !t || typeof t != "object")
        return !1;
    try {
        pi.call(t);
        try {
            di.call(t);
        } catch {
            return !0;
        }
        return t instanceof Set;
    } catch {}
    return !1;
}

function Xy(t) {
    if (!sn || !t || typeof t != "object")
        return !1;
    try {
        sn.call(t, sn);
        try {
            nn.call(t, nn);
        } catch {
            return !0;
        }
        return t instanceof WeakSet;
    } catch {}
    return !1;
}

function e1(t) {
    return !t || typeof t != "object" ? !1 : typeof HTMLElement < "u" && t instanceof HTMLElement ? !0 : typeof t.nodeName == "string" && typeof t.getAttribute == "function";
}

function Of(t, e) {
    if (t.length > e.maxStringLength) {
        var r = t.length - e.maxStringLength,
            n = "... " + r + " more character" + (r > 1 ? "s" : "");
        return Of(Xa.call(t, 0, e.maxStringLength), e) + n;
    }
    var i = Ot.call(Ot.call(t, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, t1);
    return Cf(i, "single", e);
}

function t1(t) {
    var e = t.charCodeAt(0),
        r = {
            8: "b",
            9: "t",
            10: "n",
            12: "f",
            13: "r"
        }[e];
    return r ? "\\" + r : "\\x" + (e < 16 ? "0" : "") + jy.call(e.toString(16));
}

function Jr(t) {
    return "Object(" + t + ")";
}

function Ro(t) {
    return t + " { ? }";
}

function au(t, e, r, n) {
    var i = n ? ka(r, n) : ft.call(r, ", ");
    return t + " (" + e + ") {" + i + "}";
}

function r1(t) {
    for (var e = 0; e < t.length; e++)
        if (xf(t[e], `
`) >= 0)
            return !1;
    return !0;
}

function n1(t, e) {
    var r;
    if (t.indent === "	")
        r = "	";
    else if (typeof t.indent == "number" && t.indent > 0)
        r = ft.call(Array(t.indent + 1), " ");
    else
        return null;
    return {
        base: r,
        prev: ft.call(Array(e + 1), r)
    };
}

function ka(t, e) {
    if (t.length === 0)
        return "";
    var r = `
` + e.prev + e.base;
    return r + ft.call(t, "," + r) + `
` + e.prev;
}

function Hn(t, e) {
    var r = Sa(t),
        n = [];
    if (r) {
        n.length = t.length;
        for (var i = 0; i < t.length; i++)
            n[i] = Ct(t, i) ? e(t[i], t) : "";
    }
    var s = typeof ko == "function" ? ko(t) : [],
        o;
    if (Tr) {
        o = {};
        for (var a = 0; a < s.length; a++)
            o["$" + s[a]] = s[a];
    }
    for (var c in t)
        Ct(t, c) && (r && String(Number(c)) === c && c < t.length || Tr && o["$" + c] instanceof Symbol || (Af.call(/[^\w$]/, c) ? n.push(e(c, t) + ": " + e(t[c], t)) : n.push(c + ": " + e(t[c], t))));
    if (typeof ko == "function")
        for (var u = 0; u < s.length; u++)
            Tf.call(t, s[u]) && n.push("[" + e(s[u]) + "]: " + e(t[s[u]], t));
    return n;
}
var ec = Pi,
    $r = ji,
    i1 = Uy,
    s1 = ec("%TypeError%"),
    Wn = ec("%WeakMap%", !0),
    Gn = ec("%Map%", !0),
    o1 = $r("WeakMap.prototype.get", !0),
    a1 = $r("WeakMap.prototype.set", !0),
    c1 = $r("WeakMap.prototype.has", !0),
    u1 = $r("Map.prototype.get", !0),
    l1 = $r("Map.prototype.set", !0),
    f1 = $r("Map.prototype.has", !0),
    tc = function(t, e) {
        for (var r = t, n;
            (n = r.next) !== null; r = n)
            if (n.key === e)
                return r.next = n.next, n.next = t.next, t.next = n, n;
    },
    h1 = function(t, e) {
        var r = tc(t, e);
        return r && r.value;
    },
    d1 = function(t, e, r) {
        var n = tc(t, e);
        n ? n.value = r : t.next = {
            // eslint-disable-line no-param-reassign
            key: e,
            next: t.next,
            value: r
        };
    },
    p1 = function(t, e) {
        return !!tc(t, e);
    },
    _1 = function() {
        var e, r, n, i = {
            assert: function(s) {
                if (!i.has(s))
                    throw new s1("Side channel does not contain " + i1(s));
            },
            get: function(s) {
                if (Wn && s && (typeof s == "object" || typeof s == "function")) {
                    if (e)
                        return o1(e, s);
                } else if (Gn) {
                    if (r)
                        return u1(r, s);
                } else if (n)
                    return h1(n, s);
            },
            has: function(s) {
                if (Wn && s && (typeof s == "object" || typeof s == "function")) {
                    if (e)
                        return c1(e, s);
                } else if (Gn) {
                    if (r)
                        return f1(r, s);
                } else if (n)
                    return p1(n, s);
                return !1;
            },
            set: function(s, o) {
                Wn && s && (typeof s == "object" || typeof s == "function") ? (e || (e = new Wn()), a1(e, s, o)) : Gn ? (r || (r = new Gn()), l1(r, s, o)) : (n || (n = {
                    key: {},
                    next: null
                }), d1(n, s, o));
            }
        };
        return i;
    },
    b1 = String.prototype.replace,
    g1 = /%20/g,
    Io = {
        RFC1738: "RFC1738",
        RFC3986: "RFC3986"
    },
    rc = {
        default: Io.RFC3986,
        formatters: {
            RFC1738: function(t) {
                return b1.call(t, g1, "+");
            },
            RFC3986: function(t) {
                return String(t);
            }
        },
        RFC1738: Io.RFC1738,
        RFC3986: Io.RFC3986
    },
    m1 = rc,
    Ao = Object.prototype.hasOwnProperty,
    zt = Array.isArray,
    at = function() {
        for (var t = [], e = 0; e < 256; ++e)
            t.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
        return t;
    }(),
    y1 = function(e) {
        for (; e.length > 1;) {
            var r = e.pop(),
                n = r.obj[r.prop];
            if (zt(n)) {
                for (var i = [], s = 0; s < n.length; ++s)
                    typeof n[s] < "u" && i.push(n[s]);
                r.obj[r.prop] = i;
            }
        }
    },
    Nf = function(e, r) {
        for (var n = r && r.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, i = 0; i < e.length; ++i)
            typeof e[i] < "u" && (n[i] = e[i]);
        return n;
    },
    v1 = function t(e, r, n) {
        if (!r)
            return e;
        if (typeof r != "object") {
            if (zt(e))
                e.push(r);
            else if (e && typeof e == "object")
                (n && (n.plainObjects || n.allowPrototypes) || !Ao.call(Object.prototype, r)) && (e[r] = !0);
            else
                return [e, r];
            return e;
        }
        if (!e || typeof e != "object")
            return [e].concat(r);
        var i = e;
        return zt(e) && !zt(r) && (i = Nf(e, n)), zt(e) && zt(r) ? (r.forEach(function(s, o) {
            if (Ao.call(e, o)) {
                var a = e[o];
                a && typeof a == "object" && s && typeof s == "object" ? e[o] = t(a, s, n) : e.push(s);
            } else
                e[o] = s;
        }), e) : Object.keys(r).reduce(function(s, o) {
            var a = r[o];
            return Ao.call(s, o) ? s[o] = t(s[o], a, n) : s[o] = a, s;
        }, i);
    },
    w1 = function(e, r) {
        return Object.keys(r).reduce(function(n, i) {
            return n[i] = r[i], n;
        }, e);
    },
    E1 = function(t, e, r) {
        var n = t.replace(/\+/g, " ");
        if (r === "iso-8859-1")
            return n.replace(/%[0-9a-f]{2}/gi, unescape);
        try {
            return decodeURIComponent(n);
        } catch {
            return n;
        }
    },
    S1 = function(e, r, n, i, s) {
        if (e.length === 0)
            return e;
        var o = e;
        if (typeof e == "symbol" ? o = Symbol.prototype.toString.call(e) : typeof e != "string" && (o = String(e)), n === "iso-8859-1")
            return escape(o).replace(/%u[0-9a-f]{4}/gi, function(l) {
                return "%26%23" + parseInt(l.slice(2), 16) + "%3B";
            });
        for (var a = "", c = 0; c < o.length; ++c) {
            var u = o.charCodeAt(c);
            if (u === 45 || u === 46 || u === 95 || u === 126 || u >= 48 && u <= 57 || u >= 65 && u <= 90 || u >= 97 && u <= 122 || s === m1.RFC1738 && (u === 40 || u === 41)) {
                a += o.charAt(c);
                continue;
            }
            if (u < 128) {
                a = a + at[u];
                continue;
            }
            if (u < 2048) {
                a = a + (at[192 | u >> 6] + at[128 | u & 63]);
                continue;
            }
            if (u < 55296 || u >= 57344) {
                a = a + (at[224 | u >> 12] + at[128 | u >> 6 & 63] + at[128 | u & 63]);
                continue;
            }
            c += 1, u = 65536 + ((u & 1023) << 10 | o.charCodeAt(c) & 1023), a += at[240 | u >> 18] + at[128 | u >> 12 & 63] + at[128 | u >> 6 & 63] + at[128 | u & 63];
        }
        return a;
    },
    k1 = function(e) {
        for (var r = [{
                obj: {
                    o: e
                },
                prop: "o"
            }], n = [], i = 0; i < r.length; ++i)
            for (var s = r[i], o = s.obj[s.prop], a = Object.keys(o), c = 0; c < a.length; ++c) {
                var u = a[c],
                    l = o[u];
                typeof l == "object" && l !== null && n.indexOf(l) === -1 && (r.push({
                    obj: o,
                    prop: u
                }), n.push(l));
            }
        return y1(r), e;
    },
    R1 = function(e) {
        return Object.prototype.toString.call(e) === "[object RegExp]";
    },
    I1 = function(e) {
        return !e || typeof e != "object" ? !1 : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e));
    },
    A1 = function(e, r) {
        return [].concat(e, r);
    },
    T1 = function(e, r) {
        if (zt(e)) {
            for (var n = [], i = 0; i < e.length; i += 1)
                n.push(r(e[i]));
            return n;
        }
        return r(e);
    },
    Df = {
        arrayToObject: Nf,
        assign: w1,
        combine: A1,
        compact: k1,
        decode: E1,
        encode: S1,
        isBuffer: I1,
        isRegExp: R1,
        maybeMap: T1,
        merge: v1
    },
    Lf = _1,
    Ra = Df,
    on = rc,
    C1 = Object.prototype.hasOwnProperty,
    cu = {
        brackets: function(e) {
            return e + "[]";
        },
        comma: "comma",
        indices: function(e, r) {
            return e + "[" + r + "]";
        },
        repeat: function(e) {
            return e;
        }
    },
    mt = Array.isArray,
    M1 = String.prototype.split,
    x1 = Array.prototype.push,
    Pf = function(t, e) {
        x1.apply(t, mt(e) ? e : [e]);
    },
    O1 = Date.prototype.toISOString,
    uu = on.default,
    Ae = {
        addQueryPrefix: !1,
        allowDots: !1,
        charset: "utf-8",
        charsetSentinel: !1,
        delimiter: "&",
        encode: !0,
        encoder: Ra.encode,
        encodeValuesOnly: !1,
        format: uu,
        formatter: on.formatters[uu],
        // deprecated
        indices: !1,
        serializeDate: function(e) {
            return O1.call(e);
        },
        skipNulls: !1,
        strictNullHandling: !1
    },
    N1 = function(e) {
        return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "symbol" || typeof e == "bigint";
    },
    To = {},
    D1 = function t(e, r, n, i, s, o, a, c, u, l, b, f, p, g, S, I) {
        for (var _ = e, m = I, w = 0, A = !1;
            (m = m.get(To)) !== void 0 && !A;) {
            var N = m.get(e);
            if (w += 1, typeof N < "u") {
                if (N === w)
                    throw new RangeError("Cyclic object value");
                A = !0;
            }
            typeof m.get(To) > "u" && (w = 0);
        }
        if (typeof c == "function" ? _ = c(r, _) : _ instanceof Date ? _ = b(_) : n === "comma" && mt(_) && (_ = Ra.maybeMap(_, function(ce) {
                return ce instanceof Date ? b(ce) : ce;
            })), _ === null) {
            if (s)
                return a && !g ? a(r, Ae.encoder, S, "key", f) : r;
            _ = "";
        }
        if (N1(_) || Ra.isBuffer(_)) {
            if (a) {
                var U = g ? r : a(r, Ae.encoder, S, "key", f);
                if (n === "comma" && g) {
                    for (var F = M1.call(String(_), ","), P = "", L = 0; L < F.length; ++L)
                        P += (L === 0 ? "" : ",") + p(a(F[L], Ae.encoder, S, "value", f));
                    return [p(U) + (i && mt(_) && F.length === 1 ? "[]" : "") + "=" + P];
                }
                return [p(U) + "=" + p(a(_, Ae.encoder, S, "value", f))];
            }
            return [p(r) + "=" + p(String(_))];
        }
        var ie = [];
        if (typeof _ > "u")
            return ie;
        var ee;
        if (n === "comma" && mt(_))
            ee = [{
                value: _.length > 0 ? _.join(",") || null : void 0
            }];
        else if (mt(c))
            ee = c;
        else {
            var z = Object.keys(_);
            ee = u ? z.sort(u) : z;
        }
        for (var q = i && mt(_) && _.length === 1 ? r + "[]" : r, K = 0; K < ee.length; ++K) {
            var ne = ee[K],
                he = typeof ne == "object" && typeof ne.value < "u" ? ne.value : _[ne];
            if (!(o && he === null)) {
                var we = mt(_) ? typeof n == "function" ? n(q, ne) : q : q + (l ? "." + ne : "[" + ne + "]");
                I.set(e, w);
                var ye = Lf();
                ye.set(To, I), Pf(ie, t(
                    he,
                    we,
                    n,
                    i,
                    s,
                    o,
                    a,
                    c,
                    u,
                    l,
                    b,
                    f,
                    p,
                    g,
                    S,
                    ye
                ));
            }
        }
        return ie;
    },
    L1 = function(e) {
        if (!e)
            return Ae;
        if (e.encoder !== null && typeof e.encoder < "u" && typeof e.encoder != "function")
            throw new TypeError("Encoder has to be a function.");
        var r = e.charset || Ae.charset;
        if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1")
            throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        var n = on.default;
        if (typeof e.format < "u") {
            if (!C1.call(on.formatters, e.format))
                throw new TypeError("Unknown format option provided.");
            n = e.format;
        }
        var i = on.formatters[n],
            s = Ae.filter;
        return (typeof e.filter == "function" || mt(e.filter)) && (s = e.filter), {
            addQueryPrefix: typeof e.addQueryPrefix == "boolean" ? e.addQueryPrefix : Ae.addQueryPrefix,
            allowDots: typeof e.allowDots > "u" ? Ae.allowDots : !!e.allowDots,
            charset: r,
            charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : Ae.charsetSentinel,
            delimiter: typeof e.delimiter > "u" ? Ae.delimiter : e.delimiter,
            encode: typeof e.encode == "boolean" ? e.encode : Ae.encode,
            encoder: typeof e.encoder == "function" ? e.encoder : Ae.encoder,
            encodeValuesOnly: typeof e.encodeValuesOnly == "boolean" ? e.encodeValuesOnly : Ae.encodeValuesOnly,
            filter: s,
            format: n,
            formatter: i,
            serializeDate: typeof e.serializeDate == "function" ? e.serializeDate : Ae.serializeDate,
            skipNulls: typeof e.skipNulls == "boolean" ? e.skipNulls : Ae.skipNulls,
            sort: typeof e.sort == "function" ? e.sort : null,
            strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : Ae.strictNullHandling
        };
    },
    P1 = function(t, e) {
        var r = t,
            n = L1(e),
            i, s;
        typeof n.filter == "function" ? (s = n.filter, r = s("", r)) : mt(n.filter) && (s = n.filter, i = s);
        var o = [];
        if (typeof r != "object" || r === null)
            return "";
        var a;
        e && e.arrayFormat in cu ? a = e.arrayFormat : e && "indices" in e ? a = e.indices ? "indices" : "repeat" : a = "indices";
        var c = cu[a];
        if (e && "commaRoundTrip" in e && typeof e.commaRoundTrip != "boolean")
            throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
        var u = c === "comma" && e && e.commaRoundTrip;
        i || (i = Object.keys(r)), n.sort && i.sort(n.sort);
        for (var l = Lf(), b = 0; b < i.length; ++b) {
            var f = i[b];
            n.skipNulls && r[f] === null || Pf(o, D1(
                r[f],
                f,
                c,
                u,
                n.strictNullHandling,
                n.skipNulls,
                n.encode ? n.encoder : null,
                n.filter,
                n.sort,
                n.allowDots,
                n.serializeDate,
                n.format,
                n.formatter,
                n.encodeValuesOnly,
                n.charset,
                l
            ));
        }
        var p = o.join(n.delimiter),
            g = n.addQueryPrefix === !0 ? "?" : "";
        return n.charsetSentinel && (n.charset === "iso-8859-1" ? g += "utf8=%26%2310003%3B&" : g += "utf8=%E2%9C%93&"), p.length > 0 ? g + p : "";
    },
    Cr = Df,
    Ia = Object.prototype.hasOwnProperty,
    j1 = Array.isArray,
    ke = {
        allowDots: !1,
        allowPrototypes: !1,
        allowSparse: !1,
        arrayLimit: 20,
        charset: "utf-8",
        charsetSentinel: !1,
        comma: !1,
        decoder: Cr.decode,
        delimiter: "&",
        depth: 5,
        ignoreQueryPrefix: !1,
        interpretNumericEntities: !1,
        parameterLimit: 1e3,
        parseArrays: !0,
        plainObjects: !1,
        strictNullHandling: !1
    },
    B1 = function(t) {
        return t.replace(/&#(\d+);/g, function(e, r) {
            return String.fromCharCode(parseInt(r, 10));
        });
    },
    jf = function(t, e) {
        return t && typeof t == "string" && e.comma && t.indexOf(",") > -1 ? t.split(",") : t;
    },
    U1 = "utf8=%26%2310003%3B",
    F1 = "utf8=%E2%9C%93",
    H1 = function(e, r) {
        var n = {},
            i = r.ignoreQueryPrefix ? e.replace(/^\?/, "") : e,
            s = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit,
            o = i.split(r.delimiter, s),
            a = -1,
            c, u = r.charset;
        if (r.charsetSentinel)
            for (c = 0; c < o.length; ++c)
                o[c].indexOf("utf8=") === 0 && (o[c] === F1 ? u = "utf-8" : o[c] === U1 && (u = "iso-8859-1"), a = c, c = o.length);
        for (c = 0; c < o.length; ++c)
            if (c !== a) {
                var l = o[c],
                    b = l.indexOf("]="),
                    f = b === -1 ? l.indexOf("=") : b + 1,
                    p, g;
                f === -1 ? (p = r.decoder(l, ke.decoder, u, "key"), g = r.strictNullHandling ? null : "") : (p = r.decoder(l.slice(0, f), ke.decoder, u, "key"), g = Cr.maybeMap(
                    jf(l.slice(f + 1), r),
                    function(S) {
                        return r.decoder(S, ke.decoder, u, "value");
                    }
                )), g && r.interpretNumericEntities && u === "iso-8859-1" && (g = B1(g)), l.indexOf("[]=") > -1 && (g = j1(g) ? [g] : g), Ia.call(n, p) ? n[p] = Cr.combine(n[p], g) : n[p] = g;
            }
        return n;
    },
    W1 = function(t, e, r, n) {
        for (var i = n ? e : jf(e, r), s = t.length - 1; s >= 0; --s) {
            var o, a = t[s];
            if (a === "[]" && r.parseArrays)
                o = [].concat(i);
            else {
                o = r.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
                var c = a.charAt(0) === "[" && a.charAt(a.length - 1) === "]" ? a.slice(1, -1) : a,
                    u = parseInt(c, 10);
                !r.parseArrays && c === "" ? o = {
                    0: i
                } : !isNaN(u) && a !== c && String(u) === c && u >= 0 && r.parseArrays && u <= r.arrayLimit ? (o = [], o[u] = i) : c !== "__proto__" && (o[c] = i);
            }
            i = o;
        }
        return i;
    },
    G1 = function(e, r, n, i) {
        if (e) {
            var s = n.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e,
                o = /(\[[^[\]]*])/,
                a = /(\[[^[\]]*])/g,
                c = n.depth > 0 && o.exec(s),
                u = c ? s.slice(0, c.index) : s,
                l = [];
            if (u) {
                if (!n.plainObjects && Ia.call(Object.prototype, u) && !n.allowPrototypes)
                    return;
                l.push(u);
            }
            for (var b = 0; n.depth > 0 && (c = a.exec(s)) !== null && b < n.depth;) {
                if (b += 1, !n.plainObjects && Ia.call(Object.prototype, c[1].slice(1, -1)) && !n.allowPrototypes)
                    return;
                l.push(c[1]);
            }
            return c && l.push("[" + s.slice(c.index) + "]"), W1(l, r, n, i);
        }
    },
    $1 = function(e) {
        if (!e)
            return ke;
        if (e.decoder !== null && e.decoder !== void 0 && typeof e.decoder != "function")
            throw new TypeError("Decoder has to be a function.");
        if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1")
            throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        var r = typeof e.charset > "u" ? ke.charset : e.charset;
        return {
            allowDots: typeof e.allowDots > "u" ? ke.allowDots : !!e.allowDots,
            allowPrototypes: typeof e.allowPrototypes == "boolean" ? e.allowPrototypes : ke.allowPrototypes,
            allowSparse: typeof e.allowSparse == "boolean" ? e.allowSparse : ke.allowSparse,
            arrayLimit: typeof e.arrayLimit == "number" ? e.arrayLimit : ke.arrayLimit,
            charset: r,
            charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : ke.charsetSentinel,
            comma: typeof e.comma == "boolean" ? e.comma : ke.comma,
            decoder: typeof e.decoder == "function" ? e.decoder : ke.decoder,
            delimiter: typeof e.delimiter == "string" || Cr.isRegExp(e.delimiter) ? e.delimiter : ke.delimiter,
            // eslint-disable-next-line no-implicit-coercion, no-extra-parens
            depth: typeof e.depth == "number" || e.depth === !1 ? +e.depth : ke.depth,
            ignoreQueryPrefix: e.ignoreQueryPrefix === !0,
            interpretNumericEntities: typeof e.interpretNumericEntities == "boolean" ? e.interpretNumericEntities : ke.interpretNumericEntities,
            parameterLimit: typeof e.parameterLimit == "number" ? e.parameterLimit : ke.parameterLimit,
            parseArrays: e.parseArrays !== !1,
            plainObjects: typeof e.plainObjects == "boolean" ? e.plainObjects : ke.plainObjects,
            strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : ke.strictNullHandling
        };
    },
    V1 = function(t, e) {
        var r = $1(e);
        if (t === "" || t === null || typeof t > "u")
            return r.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
        for (var n = typeof t == "string" ? H1(t, r) : t, i = r.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, s = Object.keys(n), o = 0; o < s.length; ++o) {
            var a = s[o],
                c = G1(a, n[a], r, typeof t == "string");
            i = Cr.merge(i, c, r);
        }
        return r.allowSparse === !0 ? i : Cr.compact(i);
    },
    z1 = P1,
    Z1 = V1,
    q1 = rc,
    Y1 = {
        formats: q1,
        parse: Z1,
        stringify: z1
    },
    Mn = {};
(function(t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.ProviderType = t.RegExpString = t.IntNumber = t.BigIntString = t.AddressString = t.HexString = t.OpaqueType = void 0;

    function e() {
        return (n) => n;
    }
    t.OpaqueType = e, t.HexString = e(), t.AddressString = e(), t.BigIntString = e();

    function r(n) {
        return Math.floor(n);
    }
    t.IntNumber = r, t.RegExpString = e(),
        function(n) {
            n.CoinbaseWallet = "CoinbaseWallet", n.MetaMask = "MetaMask", n.Unselected = "";
        }(t.ProviderType || (t.ProviderType = {}));
})(Mn);
var J1 = re && re.__importDefault || function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
};
Object.defineProperty(B, "__esModule", {
    value: !0
});
B.isInIFrame = B.createQrUrl = B.getFavicon = B.range = B.isBigNumber = B.ensureParsedJSONObject = B.ensureBN = B.ensureRegExpString = B.ensureIntNumber = B.ensureBuffer = B.ensureAddressString = B.ensureEvenLengthHexString = B.ensureHexString = B.isHexString = B.prepend0x = B.strip0x = B.has0xPrefix = B.hexStringFromIntNumber = B.intNumberFromHexString = B.bigIntStringFromBN = B.hexStringFromBuffer = B.hexStringToUint8Array = B.uint8ArrayToHex = B.randomBytesHex = void 0;
const xt = J1(Si),
    Q1 = Y1,
    Je = Mn,
    Bf = /^[0-9]*$/,
    Uf = /^[a-f0-9]*$/;

function K1(t) {
    return Ff(crypto.getRandomValues(new Uint8Array(t)));
}
B.randomBytesHex = K1;

function Ff(t) {
    return [...t].map((e) => e.toString(16).padStart(2, "0")).join("");
}
B.uint8ArrayToHex = Ff;

function X1(t) {
    return new Uint8Array(t.match(/.{1,2}/g).map((e) => parseInt(e, 16)));
}
B.hexStringToUint8Array = X1;

function ev(t, e = !1) {
    const r = t.toString("hex");
    return (0, Je.HexString)(e ? "0x" + r : r);
}
B.hexStringFromBuffer = ev;

function tv(t) {
    return (0, Je.BigIntString)(t.toString(10));
}
B.bigIntStringFromBN = tv;

function rv(t) {
    return (0, Je.IntNumber)(new xt.default(On(t, !1), 16).toNumber());
}
B.intNumberFromHexString = rv;

function nv(t) {
    return (0, Je.HexString)("0x" + new xt.default(t).toString(16));
}
B.hexStringFromIntNumber = nv;

function nc(t) {
    return t.startsWith("0x") || t.startsWith("0X");
}
B.has0xPrefix = nc;

function Bi(t) {
    return nc(t) ? t.slice(2) : t;
}
B.strip0x = Bi;

function Hf(t) {
    return nc(t) ? "0x" + t.slice(2) : "0x" + t;
}
B.prepend0x = Hf;

function xn(t) {
    if (typeof t != "string")
        return !1;
    const e = Bi(t).toLowerCase();
    return Uf.test(e);
}
B.isHexString = xn;

function Wf(t, e = !1) {
    if (typeof t == "string") {
        const r = Bi(t).toLowerCase();
        if (Uf.test(r))
            return (0, Je.HexString)(e ? "0x" + r : r);
    }
    throw new Error(`"${String(t)}" is not a hexadecimal string`);
}
B.ensureHexString = Wf;

function On(t, e = !1) {
    let r = Wf(t, !1);
    return r.length % 2 === 1 && (r = (0, Je.HexString)("0" + r)), e ? (0, Je.HexString)("0x" + r) : r;
}
B.ensureEvenLengthHexString = On;

function iv(t) {
    if (typeof t == "string") {
        const e = Bi(t).toLowerCase();
        if (xn(e) && e.length === 40)
            return (0, Je.AddressString)(Hf(e));
    }
    throw new Error(`Invalid Ethereum address: ${String(t)}`);
}
B.ensureAddressString = iv;

function sv(t) {
    if (Buffer.isBuffer(t))
        return t;
    if (typeof t == "string")
        if (xn(t)) {
            const e = On(t, !1);
            return Buffer.from(e, "hex");
        } else
            return Buffer.from(t, "utf8");
    throw new Error(`Not binary data: ${String(t)}`);
}
B.ensureBuffer = sv;

function Gf(t) {
    if (typeof t == "number" && Number.isInteger(t))
        return (0, Je.IntNumber)(t);
    if (typeof t == "string") {
        if (Bf.test(t))
            return (0, Je.IntNumber)(Number(t));
        if (xn(t))
            return (0, Je.IntNumber)(new xt.default(On(t, !1), 16).toNumber());
    }
    throw new Error(`Not an integer: ${String(t)}`);
}
B.ensureIntNumber = Gf;

function ov(t) {
    if (t instanceof RegExp)
        return (0, Je.RegExpString)(t.toString());
    throw new Error(`Not a RegExp: ${String(t)}`);
}
B.ensureRegExpString = ov;

function av(t) {
    if (t !== null && (xt.default.isBN(t) || $f(t)))
        return new xt.default(t.toString(10), 10);
    if (typeof t == "number")
        return new xt.default(Gf(t));
    if (typeof t == "string") {
        if (Bf.test(t))
            return new xt.default(t, 10);
        if (xn(t))
            return new xt.default(On(t, !1), 16);
    }
    throw new Error(`Not an integer: ${String(t)}`);
}
B.ensureBN = av;

function cv(t) {
    if (typeof t == "string")
        return JSON.parse(t);
    if (typeof t == "object")
        return t;
    throw new Error(`Not a JSON string or an object: ${String(t)}`);
}
B.ensureParsedJSONObject = cv;

function $f(t) {
    if (t == null || typeof t.constructor != "function")
        return !1;
    const {
        constructor: e
    } = t;
    return typeof e.config == "function" && typeof e.EUCLID == "number";
}
B.isBigNumber = $f;

function uv(t, e) {
    return Array.from({
        length: e - t
    }, (r, n) => t + n);
}
B.range = uv;

function lv() {
    const t = document.querySelector('link[sizes="192x192"]') || document.querySelector('link[sizes="180x180"]') || document.querySelector('link[rel="icon"]') || document.querySelector('link[rel="shortcut icon"]'),
        {
            protocol: e,
            host: r
        } = document.location,
        n = t ? t.getAttribute("href") : null;
    return !n || n.startsWith("javascript:") ? null : n.startsWith("http://") || n.startsWith("https://") || n.startsWith("data:") ? n : n.startsWith("//") ? e + n : `${e}//${r}${n}`;
}
B.getFavicon = lv;

function fv(t, e, r, n, i, s) {
    const o = n ? "parent-id" : "id",
        a = (0, Q1.stringify)({
            [o]: t,
            secret: e,
            server: r,
            v: i,
            chainId: s
        });
    return `${r}/#/link?${a}`;
}
B.createQrUrl = fv;

function hv() {
    try {
        return window.frameElement !== null;
    } catch {
        return !1;
    }
}
B.isInIFrame = hv;
Object.defineProperty(Br, "__esModule", {
    value: !0
});
Br.Session = void 0;
const dv = Wr,
    lu = Oi,
    fu = ma,
    hu = B,
    Co = "session:id",
    du = "session:secret",
    pu = "session:linked";
class ic {
    constructor(e, r, n, i) {
        this._storage = e, this._id = r || (0, hu.randomBytesHex)(16), this._secret = n || (0, hu.randomBytesHex)(32), this._key = new fu.sha256().update(`${this._id}, ${this._secret} WalletLink`).digest("hex"), this._linked = !!i;
    }
    static load(e) {
        const r = e.getItem(Co),
            n = e.getItem(pu),
            i = e.getItem(du);
        return r && i ? new ic(e, r, i, n === "1") : null;
    }
    static get persistedSessionIdChange$() {
        return (0, dv.fromEvent)(window, "storage").pipe((0, lu.filter)((e) => e.key === Co), (0, lu.map)((e) => ({
            oldValue: e.oldValue || null,
            newValue: e.newValue || null
        })));
    }
    /**
     * Takes in a session ID and returns the sha256 hash of it.
     * @param sessionId session ID
     */
    static hash(e) {
        return new fu.sha256().update(e).digest("hex");
    }
    get id() {
        return this._id;
    }
    get secret() {
        return this._secret;
    }
    get key() {
        return this._key;
    }
    get linked() {
        return this._linked;
    }
    set linked(e) {
        this._linked = e, this.persistLinked();
    }
    save() {
        return this._storage.setItem(Co, this._id), this._storage.setItem(du, this._secret), this.persistLinked(), this;
    }
    persistLinked() {
        this._storage.setItem(pu, this._linked ? "1" : "0");
    }
}
Br.Session = ic;
var it = {};
Object.defineProperty(it, "__esModule", {
    value: !0
});
it.WalletSDKRelayAbstract = it.APP_VERSION_KEY = it.LOCAL_STORAGE_ADDRESSES_KEY = it.WALLET_USER_NAME_KEY = void 0;
const _u = Ai;
it.WALLET_USER_NAME_KEY = "walletUsername";
it.LOCAL_STORAGE_ADDRESSES_KEY = "Addresses";
it.APP_VERSION_KEY = "AppVersion";
class pv {
    async makeEthereumJSONRPCRequest(e, r) {
        if (!r)
            throw new Error("Error: No jsonRpcUrl provided");
        return window.fetch(r, {
            method: "POST",
            body: JSON.stringify(e),
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            }
        }).then((n) => n.json()).then((n) => {
            if (!n)
                throw _u.ethErrors.rpc.parse({});
            const i = n,
                {
                    error: s
                } = i;
            if (s)
                throw (0, _u.serializeError)(s);
            return i;
        });
    }
}
it.WalletSDKRelayAbstract = pv;
var bn = {},
    _v = {
        get exports() {
            return bn;
        },
        set exports(t) {
            bn = t;
        }
    },
    Vf = ki.EventEmitter,
    Mo, bu;

function bv() {
    if (bu)
        return Mo;
    bu = 1;

    function t(f, p) {
        var g = Object.keys(f);
        if (Object.getOwnPropertySymbols) {
            var S = Object.getOwnPropertySymbols(f);
            p && (S = S.filter(function(I) {
                return Object.getOwnPropertyDescriptor(f, I).enumerable;
            })), g.push.apply(g, S);
        }
        return g;
    }

    function e(f) {
        for (var p = 1; p < arguments.length; p++) {
            var g = arguments[p] != null ? arguments[p] : {};
            p % 2 ? t(Object(g), !0).forEach(function(S) {
                r(f, S, g[S]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(f, Object.getOwnPropertyDescriptors(g)) : t(Object(g)).forEach(function(S) {
                Object.defineProperty(f, S, Object.getOwnPropertyDescriptor(g, S));
            });
        }
        return f;
    }

    function r(f, p, g) {
        return p in f ? Object.defineProperty(f, p, {
            value: g,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : f[p] = g, f;
    }

    function n(f, p) {
        if (!(f instanceof p))
            throw new TypeError("Cannot call a class as a function");
    }

    function i(f, p) {
        for (var g = 0; g < p.length; g++) {
            var S = p[g];
            S.enumerable = S.enumerable || !1, S.configurable = !0, "value" in S && (S.writable = !0), Object.defineProperty(f, S.key, S);
        }
    }

    function s(f, p, g) {
        return p && i(f.prototype, p), g && i(f, g), f;
    }
    var o = Ei,
        a = o.Buffer,
        c = Pa,
        u = c.inspect,
        l = u && u.custom || "inspect";

    function b(f, p, g) {
        a.prototype.copy.call(f, p, g);
    }
    return Mo = /* @__PURE__ */ function() {
        function f() {
            n(this, f), this.head = null, this.tail = null, this.length = 0;
        }
        return s(f, [{
            key: "push",
            value: function(g) {
                var S = {
                    data: g,
                    next: null
                };
                this.length > 0 ? this.tail.next = S : this.head = S, this.tail = S, ++this.length;
            }
        }, {
            key: "unshift",
            value: function(g) {
                var S = {
                    data: g,
                    next: this.head
                };
                this.length === 0 && (this.tail = S), this.head = S, ++this.length;
            }
        }, {
            key: "shift",
            value: function() {
                if (this.length !== 0) {
                    var g = this.head.data;
                    return this.length === 1 ? this.head = this.tail = null : this.head = this.head.next, --this.length, g;
                }
            }
        }, {
            key: "clear",
            value: function() {
                this.head = this.tail = null, this.length = 0;
            }
        }, {
            key: "join",
            value: function(g) {
                if (this.length === 0)
                    return "";
                for (var S = this.head, I = "" + S.data; S = S.next;)
                    I += g + S.data;
                return I;
            }
        }, {
            key: "concat",
            value: function(g) {
                if (this.length === 0)
                    return a.alloc(0);
                for (var S = a.allocUnsafe(g >>> 0), I = this.head, _ = 0; I;)
                    b(I.data, S, _), _ += I.data.length, I = I.next;
                return S;
            }
            // Consumes a specified amount of bytes or characters from the buffered data.
        }, {
            key: "consume",
            value: function(g, S) {
                var I;
                return g < this.head.data.length ? (I = this.head.data.slice(0, g), this.head.data = this.head.data.slice(g)) : g === this.head.data.length ? I = this.shift() : I = S ? this._getString(g) : this._getBuffer(g), I;
            }
        }, {
            key: "first",
            value: function() {
                return this.head.data;
            }
            // Consumes a specified amount of characters from the buffered data.
        }, {
            key: "_getString",
            value: function(g) {
                var S = this.head,
                    I = 1,
                    _ = S.data;
                for (g -= _.length; S = S.next;) {
                    var m = S.data,
                        w = g > m.length ? m.length : g;
                    if (w === m.length ? _ += m : _ += m.slice(0, g), g -= w, g === 0) {
                        w === m.length ? (++I, S.next ? this.head = S.next : this.head = this.tail = null) : (this.head = S, S.data = m.slice(w));
                        break;
                    }
                    ++I;
                }
                return this.length -= I, _;
            }
            // Consumes a specified amount of bytes from the buffered data.
        }, {
            key: "_getBuffer",
            value: function(g) {
                var S = a.allocUnsafe(g),
                    I = this.head,
                    _ = 1;
                for (I.data.copy(S), g -= I.data.length; I = I.next;) {
                    var m = I.data,
                        w = g > m.length ? m.length : g;
                    if (m.copy(S, S.length - g, 0, w), g -= w, g === 0) {
                        w === m.length ? (++_, I.next ? this.head = I.next : this.head = this.tail = null) : (this.head = I, I.data = m.slice(w));
                        break;
                    }
                    ++_;
                }
                return this.length -= _, S;
            }
            // Make sure the linked list only shows the minimal necessary information.
        }, {
            key: l,
            value: function(g, S) {
                return u(this, e({}, S, {
                    // Only inspect one level.
                    depth: 0,
                    // It should not recurse.
                    customInspect: !1
                }));
            }
        }]), f;
    }(), Mo;
}

function gv(t, e) {
    var r = this,
        n = this._readableState && this._readableState.destroyed,
        i = this._writableState && this._writableState.destroyed;
    return n || i ? (e ? e(t) : t && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = !0, process.nextTick(Aa, this, t)) : process.nextTick(Aa, this, t)), this) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(t || null, function(s) {
        !e && s ? r._writableState ? r._writableState.errorEmitted ? process.nextTick(Kn, r) : (r._writableState.errorEmitted = !0, process.nextTick(gu, r, s)) : process.nextTick(gu, r, s) : e ? (process.nextTick(Kn, r), e(s)) : process.nextTick(Kn, r);
    }), this);
}

function gu(t, e) {
    Aa(t, e), Kn(t);
}

function Kn(t) {
    t._writableState && !t._writableState.emitClose || t._readableState && !t._readableState.emitClose || t.emit("close");
}

function mv() {
    this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finalCalled = !1, this._writableState.prefinished = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1);
}

function Aa(t, e) {
    t.emit("error", e);
}

function yv(t, e) {
    var r = t._readableState,
        n = t._writableState;
    r && r.autoDestroy || n && n.autoDestroy ? t.destroy(e) : t.emit("error", e);
}
var zf = {
        destroy: gv,
        undestroy: mv,
        errorOrDestroy: yv
    },
    ir = {};

function vv(t, e) {
    t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
}
var Zf = {};

function Xe(t, e, r) {
    r || (r = Error);

    function n(s, o, a) {
        return typeof e == "string" ? e : e(s, o, a);
    }
    var i = /* @__PURE__ */ function(s) {
        vv(o, s);

        function o(a, c, u) {
            return s.call(this, n(a, c, u)) || this;
        }
        return o;
    }(r);
    i.prototype.name = r.name, i.prototype.code = t, Zf[t] = i;
}

function mu(t, e) {
    if (Array.isArray(t)) {
        var r = t.length;
        return t = t.map(function(n) {
            return String(n);
        }), r > 2 ? "one of ".concat(e, " ").concat(t.slice(0, r - 1).join(", "), ", or ") + t[r - 1] : r === 2 ? "one of ".concat(e, " ").concat(t[0], " or ").concat(t[1]) : "of ".concat(e, " ").concat(t[0]);
    } else
        return "of ".concat(e, " ").concat(String(t));
}

function wv(t, e, r) {
    return t.substr(!r || r < 0 ? 0 : +r, e.length) === e;
}

function Ev(t, e, r) {
    return (r === void 0 || r > t.length) && (r = t.length), t.substring(r - e.length, r) === e;
}

function Sv(t, e, r) {
    return typeof r != "number" && (r = 0), r + e.length > t.length ? !1 : t.indexOf(e, r) !== -1;
}
Xe("ERR_INVALID_OPT_VALUE", function(t, e) {
    return 'The value "' + e + '" is invalid for option "' + t + '"';
}, TypeError);
Xe("ERR_INVALID_ARG_TYPE", function(t, e, r) {
    var n;
    typeof e == "string" && wv(e, "not ") ? (n = "must not be", e = e.replace(/^not /, "")) : n = "must be";
    var i;
    if (Ev(t, " argument"))
        i = "The ".concat(t, " ").concat(n, " ").concat(mu(e, "type"));
    else {
        var s = Sv(t, ".") ? "property" : "argument";
        i = 'The "'.concat(t, '" ').concat(s, " ").concat(n, " ").concat(mu(e, "type"));
    }
    return i += ". Received type ".concat(typeof r), i;
}, TypeError);
Xe("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF");
Xe("ERR_METHOD_NOT_IMPLEMENTED", function(t) {
    return "The " + t + " method is not implemented";
});
Xe("ERR_STREAM_PREMATURE_CLOSE", "Premature close");
Xe("ERR_STREAM_DESTROYED", function(t) {
    return "Cannot call " + t + " after a stream was destroyed";
});
Xe("ERR_MULTIPLE_CALLBACK", "Callback called multiple times");
Xe("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable");
Xe("ERR_STREAM_WRITE_AFTER_END", "write after end");
Xe("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
Xe("ERR_UNKNOWN_ENCODING", function(t) {
    return "Unknown encoding: " + t;
}, TypeError);
Xe("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event");
ir.codes = Zf;
var kv = ir.codes.ERR_INVALID_OPT_VALUE;

function Rv(t, e, r) {
    return t.highWaterMark != null ? t.highWaterMark : e ? t[r] : null;
}

function Iv(t, e, r, n) {
    var i = Rv(e, n, r);
    if (i != null) {
        if (!(isFinite(i) && Math.floor(i) === i) || i < 0) {
            var s = n ? r : "highWaterMark";
            throw new kv(s, i);
        }
        return Math.floor(i);
    }
    return t.objectMode ? 16 : 16 * 1024;
}
var qf = {
        getHighWaterMark: Iv
    },
    Av = Tv;

function Tv(t, e) {
    if (xo("noDeprecation"))
        return t;
    var r = !1;

    function n() {
        if (!r) {
            if (xo("throwDeprecation"))
                throw new Error(e);
            xo("traceDeprecation") ? console.trace(e) : console.warn(e), r = !0;
        }
        return t.apply(this, arguments);
    }
    return n;
}

function xo(t) {
    try {
        if (!globalThis.localStorage)
            return !1;
    } catch {
        return !1;
    }
    var e = globalThis.localStorage[t];
    return e == null ? !1 : String(e).toLowerCase() === "true";
}
var Oo, yu;

function Yf() {
    if (yu)
        return Oo;
    yu = 1, Oo = P;

    function t(y) {
        var v = this;
        this.next = null, this.entry = null, this.finish = function() {
            W(v, y);
        };
    }
    var e;
    P.WritableState = U;
    var r = {
            deprecate: Av
        },
        n = Vf,
        i = Ei.Buffer,
        s = globalThis.Uint8Array || function() {};

    function o(y) {
        return i.from(y);
    }

    function a(y) {
        return i.isBuffer(y) || y instanceof s;
    }
    var c = zf,
        u = qf,
        l = u.getHighWaterMark,
        b = ir.codes,
        f = b.ERR_INVALID_ARG_TYPE,
        p = b.ERR_METHOD_NOT_IMPLEMENTED,
        g = b.ERR_MULTIPLE_CALLBACK,
        S = b.ERR_STREAM_CANNOT_PIPE,
        I = b.ERR_STREAM_DESTROYED,
        _ = b.ERR_STREAM_NULL_VALUES,
        m = b.ERR_STREAM_WRITE_AFTER_END,
        w = b.ERR_UNKNOWN_ENCODING,
        A = c.errorOrDestroy;
    Qe(P, n);

    function N() {}

    function U(y, v, k) {
        e = e || Mr(), y = y || {}, typeof k != "boolean" && (k = v instanceof e), this.objectMode = !!y.objectMode, k && (this.objectMode = this.objectMode || !!y.writableObjectMode), this.highWaterMark = l(this, y, "writableHighWaterMark", k), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
        var O = y.decodeStrings === !1;
        this.decodeStrings = !O, this.defaultEncoding = y.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function(j) {
            he(v, j);
        }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.emitClose = y.emitClose !== !1, this.autoDestroy = !!y.autoDestroy, this.bufferedRequestCount = 0, this.corkedRequestsFree = new t(this);
    }
    U.prototype.getBuffer = function() {
            for (var v = this.bufferedRequest, k = []; v;)
                k.push(v), v = v.next;
            return k;
        },
        function() {
            try {
                Object.defineProperty(U.prototype, "buffer", {
                    get: r.deprecate(function() {
                        return this.getBuffer();
                    }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
                });
            } catch {}
        }();
    var F;
    typeof Symbol == "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] == "function" ? (F = Function.prototype[Symbol.hasInstance], Object.defineProperty(P, Symbol.hasInstance, {
        value: function(v) {
            return F.call(this, v) ? !0 : this !== P ? !1 : v && v._writableState instanceof U;
        }
    })) : F = function(v) {
        return v instanceof this;
    };

    function P(y) {
        e = e || Mr();
        var v = this instanceof e;
        if (!v && !F.call(P, this))
            return new P(y);
        this._writableState = new U(y, this, v), this.writable = !0, y && (typeof y.write == "function" && (this._write = y.write), typeof y.writev == "function" && (this._writev = y.writev), typeof y.destroy == "function" && (this._destroy = y.destroy), typeof y.final == "function" && (this._final = y.final)), n.call(this);
    }
    P.prototype.pipe = function() {
        A(this, new S());
    };

    function L(y, v) {
        var k = new m();
        A(y, k), process.nextTick(v, k);
    }

    function ie(y, v, k, O) {
        var j;
        return k === null ? j = new _() : typeof k != "string" && !v.objectMode && (j = new f("chunk", ["string", "Buffer"], k)), j ? (A(y, j), process.nextTick(O, j), !1) : !0;
    }
    P.prototype.write = function(y, v, k) {
        var O = this._writableState,
            j = !1,
            h = !O.objectMode && a(y);
        return h && !i.isBuffer(y) && (y = o(y)), typeof v == "function" && (k = v, v = null), h ? v = "buffer" : v || (v = O.defaultEncoding), typeof k != "function" && (k = N), O.ending ? L(this, k) : (h || ie(this, O, y, k)) && (O.pendingcb++, j = z(this, O, h, y, v, k)), j;
    }, P.prototype.cork = function() {
        this._writableState.corked++;
    }, P.prototype.uncork = function() {
        var y = this._writableState;
        y.corked && (y.corked--, !y.writing && !y.corked && !y.bufferProcessing && y.bufferedRequest && ce(this, y));
    }, P.prototype.setDefaultEncoding = function(v) {
        if (typeof v == "string" && (v = v.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((v + "").toLowerCase()) > -1))
            throw new w(v);
        return this._writableState.defaultEncoding = v, this;
    }, Object.defineProperty(P.prototype, "writableBuffer", {
        // making it explicit this property is not enumerable
        // because otherwise some prototype manipulation in
        // userland will fail
        enumerable: !1,
        get: function() {
            return this._writableState && this._writableState.getBuffer();
        }
    });

    function ee(y, v, k) {
        return !y.objectMode && y.decodeStrings !== !1 && typeof v == "string" && (v = i.from(v, k)), v;
    }
    Object.defineProperty(P.prototype, "writableHighWaterMark", {
        // making it explicit this property is not enumerable
        // because otherwise some prototype manipulation in
        // userland will fail
        enumerable: !1,
        get: function() {
            return this._writableState.highWaterMark;
        }
    });

    function z(y, v, k, O, j, h) {
        if (!k) {
            var d = ee(v, O, j);
            O !== d && (k = !0, j = "buffer", O = d);
        }
        var C = v.objectMode ? 1 : O.length;
        v.length += C;
        var D = v.length < v.highWaterMark;
        if (D || (v.needDrain = !0), v.writing || v.corked) {
            var oe = v.lastBufferedRequest;
            v.lastBufferedRequest = {
                chunk: O,
                encoding: j,
                isBuf: k,
                callback: h,
                next: null
            }, oe ? oe.next = v.lastBufferedRequest : v.bufferedRequest = v.lastBufferedRequest, v.bufferedRequestCount += 1;
        } else
            q(y, v, !1, C, O, j, h);
        return D;
    }

    function q(y, v, k, O, j, h, d) {
        v.writelen = O, v.writecb = d, v.writing = !0, v.sync = !0, v.destroyed ? v.onwrite(new I("write")) : k ? y._writev(j, v.onwrite) : y._write(j, h, v.onwrite), v.sync = !1;
    }

    function K(y, v, k, O, j) {
        --v.pendingcb, k ? (process.nextTick(j, O), process.nextTick(R, y, v), y._writableState.errorEmitted = !0, A(y, O)) : (j(O), y._writableState.errorEmitted = !0, A(y, O), R(y, v));
    }

    function ne(y) {
        y.writing = !1, y.writecb = null, y.length -= y.writelen, y.writelen = 0;
    }

    function he(y, v) {
        var k = y._writableState,
            O = k.sync,
            j = k.writecb;
        if (typeof j != "function")
            throw new g();
        if (ne(k), v)
            K(y, k, O, v, j);
        else {
            var h = Ce(k) || y.destroyed;
            !h && !k.corked && !k.bufferProcessing && k.bufferedRequest && ce(y, k), O ? process.nextTick(we, y, k, h, j) : we(y, k, h, j);
        }
    }

    function we(y, v, k, O) {
        k || ye(y, v), v.pendingcb--, O(), R(y, v);
    }

    function ye(y, v) {
        v.length === 0 && v.needDrain && (v.needDrain = !1, y.emit("drain"));
    }

    function ce(y, v) {
        v.bufferProcessing = !0;
        var k = v.bufferedRequest;
        if (y._writev && k && k.next) {
            var O = v.bufferedRequestCount,
                j = new Array(O),
                h = v.corkedRequestsFree;
            h.entry = k;
            for (var d = 0, C = !0; k;)
                j[d] = k, k.isBuf || (C = !1), k = k.next, d += 1;
            j.allBuffers = C, q(y, v, !0, v.length, j, "", h.finish), v.pendingcb++, v.lastBufferedRequest = null, h.next ? (v.corkedRequestsFree = h.next, h.next = null) : v.corkedRequestsFree = new t(v), v.bufferedRequestCount = 0;
        } else {
            for (; k;) {
                var D = k.chunk,
                    oe = k.encoding,
                    Z = k.callback,
                    se = v.objectMode ? 1 : D.length;
                if (q(y, v, !1, se, D, oe, Z), k = k.next, v.bufferedRequestCount--, v.writing)
                    break;
            }
            k === null && (v.lastBufferedRequest = null);
        }
        v.bufferedRequest = k, v.bufferProcessing = !1;
    }
    P.prototype._write = function(y, v, k) {
        k(new p("_write()"));
    }, P.prototype._writev = null, P.prototype.end = function(y, v, k) {
        var O = this._writableState;
        return typeof y == "function" ? (k = y, y = null, v = null) : typeof v == "function" && (k = v, v = null), y != null && this.write(y, v), O.corked && (O.corked = 1, this.uncork()), O.ending || x(this, O, k), this;
    }, Object.defineProperty(P.prototype, "writableLength", {
        // making it explicit this property is not enumerable
        // because otherwise some prototype manipulation in
        // userland will fail
        enumerable: !1,
        get: function() {
            return this._writableState.length;
        }
    });

    function Ce(y) {
        return y.ending && y.length === 0 && y.bufferedRequest === null && !y.finished && !y.writing;
    }

    function Ue(y, v) {
        y._final(function(k) {
            v.pendingcb--, k && A(y, k), v.prefinished = !0, y.emit("prefinish"), R(y, v);
        });
    }

    function E(y, v) {
        !v.prefinished && !v.finalCalled && (typeof y._final == "function" && !v.destroyed ? (v.pendingcb++, v.finalCalled = !0, process.nextTick(Ue, y, v)) : (v.prefinished = !0, y.emit("prefinish")));
    }

    function R(y, v) {
        var k = Ce(v);
        if (k && (E(y, v), v.pendingcb === 0 && (v.finished = !0, y.emit("finish"), v.autoDestroy))) {
            var O = y._readableState;
            (!O || O.autoDestroy && O.endEmitted) && y.destroy();
        }
        return k;
    }

    function x(y, v, k) {
        v.ending = !0, R(y, v), k && (v.finished ? process.nextTick(k) : y.once("finish", k)), v.ended = !0, y.writable = !1;
    }

    function W(y, v, k) {
        var O = y.entry;
        for (y.entry = null; O;) {
            var j = O.callback;
            v.pendingcb--, j(k), O = O.next;
        }
        v.corkedRequestsFree.next = y;
    }
    return Object.defineProperty(P.prototype, "destroyed", {
        // making it explicit this property is not enumerable
        // because otherwise some prototype manipulation in
        // userland will fail
        enumerable: !1,
        get: function() {
            return this._writableState === void 0 ? !1 : this._writableState.destroyed;
        },
        set: function(v) {
            this._writableState && (this._writableState.destroyed = v);
        }
    }), P.prototype.destroy = c.destroy, P.prototype._undestroy = c.undestroy, P.prototype._destroy = function(y, v) {
        v(y);
    }, Oo;
}
var No, vu;

function Mr() {
    if (vu)
        return No;
    vu = 1;
    var t = Object.keys || function(u) {
        var l = [];
        for (var b in u)
            l.push(b);
        return l;
    };
    No = o;
    var e = Qf(),
        r = Yf();
    Qe(o, e);
    for (var n = t(r.prototype), i = 0; i < n.length; i++) {
        var s = n[i];
        o.prototype[s] || (o.prototype[s] = r.prototype[s]);
    }

    function o(u) {
        if (!(this instanceof o))
            return new o(u);
        e.call(this, u), r.call(this, u), this.allowHalfOpen = !0, u && (u.readable === !1 && (this.readable = !1), u.writable === !1 && (this.writable = !1), u.allowHalfOpen === !1 && (this.allowHalfOpen = !1, this.once("end", a)));
    }
    Object.defineProperty(o.prototype, "writableHighWaterMark", {
        // making it explicit this property is not enumerable
        // because otherwise some prototype manipulation in
        // userland will fail
        enumerable: !1,
        get: function() {
            return this._writableState.highWaterMark;
        }
    }), Object.defineProperty(o.prototype, "writableBuffer", {
        // making it explicit this property is not enumerable
        // because otherwise some prototype manipulation in
        // userland will fail
        enumerable: !1,
        get: function() {
            return this._writableState && this._writableState.getBuffer();
        }
    }), Object.defineProperty(o.prototype, "writableLength", {
        // making it explicit this property is not enumerable
        // because otherwise some prototype manipulation in
        // userland will fail
        enumerable: !1,
        get: function() {
            return this._writableState.length;
        }
    });

    function a() {
        this._writableState.ended || process.nextTick(c, this);
    }

    function c(u) {
        u.end();
    }
    return Object.defineProperty(o.prototype, "destroyed", {
        // making it explicit this property is not enumerable
        // because otherwise some prototype manipulation in
        // userland will fail
        enumerable: !1,
        get: function() {
            return this._readableState === void 0 || this._writableState === void 0 ? !1 : this._readableState.destroyed && this._writableState.destroyed;
        },
        set: function(l) {
            this._readableState === void 0 || this._writableState === void 0 || (this._readableState.destroyed = l, this._writableState.destroyed = l);
        }
    }), No;
}
var Do = {},
    wu;

function Eu() {
    if (wu)
        return Do;
    wu = 1;
    var t = st.Buffer,
        e = t.isEncoding || function(_) {
            switch (_ = "" + _, _ && _.toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                case "raw":
                    return !0;
                default:
                    return !1;
            }
        };

    function r(_) {
        if (!_)
            return "utf8";
        for (var m;;)
            switch (_) {
                case "utf8":
                case "utf-8":
                    return "utf8";
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return "utf16le";
                case "latin1":
                case "binary":
                    return "latin1";
                case "base64":
                case "ascii":
                case "hex":
                    return _;
                default:
                    if (m)
                        return;
                    _ = ("" + _).toLowerCase(), m = !0;
            }
    }

    function n(_) {
        var m = r(_);
        if (typeof m != "string" && (t.isEncoding === e || !e(_)))
            throw new Error("Unknown encoding: " + _);
        return m || _;
    }
    Do.StringDecoder = i;

    function i(_) {
        this.encoding = n(_);
        var m;
        switch (this.encoding) {
            case "utf16le":
                this.text = b, this.end = f, m = 4;
                break;
            case "utf8":
                this.fillLast = c, m = 4;
                break;
            case "base64":
                this.text = p, this.end = g, m = 3;
                break;
            default:
                this.write = S, this.end = I;
                return;
        }
        this.lastNeed = 0, this.lastTotal = 0, this.lastChar = t.allocUnsafe(m);
    }
    i.prototype.write = function(_) {
        if (_.length === 0)
            return "";
        var m, w;
        if (this.lastNeed) {
            if (m = this.fillLast(_), m === void 0)
                return "";
            w = this.lastNeed, this.lastNeed = 0;
        } else
            w = 0;
        return w < _.length ? m ? m + this.text(_, w) : this.text(_, w) : m || "";
    }, i.prototype.end = l, i.prototype.text = u, i.prototype.fillLast = function(_) {
        if (this.lastNeed <= _.length)
            return _.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
        _.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, _.length), this.lastNeed -= _.length;
    };

    function s(_) {
        return _ <= 127 ? 0 : _ >> 5 === 6 ? 2 : _ >> 4 === 14 ? 3 : _ >> 3 === 30 ? 4 : _ >> 6 === 2 ? -1 : -2;
    }

    function o(_, m, w) {
        var A = m.length - 1;
        if (A < w)
            return 0;
        var N = s(m[A]);
        return N >= 0 ? (N > 0 && (_.lastNeed = N - 1), N) : --A < w || N === -2 ? 0 : (N = s(m[A]), N >= 0 ? (N > 0 && (_.lastNeed = N - 2), N) : --A < w || N === -2 ? 0 : (N = s(m[A]), N >= 0 ? (N > 0 && (N === 2 ? N = 0 : _.lastNeed = N - 3), N) : 0));
    }

    function a(_, m, w) {
        if ((m[0] & 192) !== 128)
            return _.lastNeed = 0, "�";
        if (_.lastNeed > 1 && m.length > 1) {
            if ((m[1] & 192) !== 128)
                return _.lastNeed = 1, "�";
            if (_.lastNeed > 2 && m.length > 2 && (m[2] & 192) !== 128)
                return _.lastNeed = 2, "�";
        }
    }

    function c(_) {
        var m = this.lastTotal - this.lastNeed,
            w = a(this, _);
        if (w !== void 0)
            return w;
        if (this.lastNeed <= _.length)
            return _.copy(this.lastChar, m, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
        _.copy(this.lastChar, m, 0, _.length), this.lastNeed -= _.length;
    }

    function u(_, m) {
        var w = o(this, _, m);
        if (!this.lastNeed)
            return _.toString("utf8", m);
        this.lastTotal = w;
        var A = _.length - (w - this.lastNeed);
        return _.copy(this.lastChar, 0, A), _.toString("utf8", m, A);
    }

    function l(_) {
        var m = _ && _.length ? this.write(_) : "";
        return this.lastNeed ? m + "�" : m;
    }

    function b(_, m) {
        if ((_.length - m) % 2 === 0) {
            var w = _.toString("utf16le", m);
            if (w) {
                var A = w.charCodeAt(w.length - 1);
                if (A >= 55296 && A <= 56319)
                    return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = _[_.length - 2], this.lastChar[1] = _[_.length - 1], w.slice(0, -1);
            }
            return w;
        }
        return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = _[_.length - 1], _.toString("utf16le", m, _.length - 1);
    }

    function f(_) {
        var m = _ && _.length ? this.write(_) : "";
        if (this.lastNeed) {
            var w = this.lastTotal - this.lastNeed;
            return m + this.lastChar.toString("utf16le", 0, w);
        }
        return m;
    }

    function p(_, m) {
        var w = (_.length - m) % 3;
        return w === 0 ? _.toString("base64", m) : (this.lastNeed = 3 - w, this.lastTotal = 3, w === 1 ? this.lastChar[0] = _[_.length - 1] : (this.lastChar[0] = _[_.length - 2], this.lastChar[1] = _[_.length - 1]), _.toString("base64", m, _.length - w));
    }

    function g(_) {
        var m = _ && _.length ? this.write(_) : "";
        return this.lastNeed ? m + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : m;
    }

    function S(_) {
        return _.toString(this.encoding);
    }

    function I(_) {
        return _ && _.length ? this.write(_) : "";
    }
    return Do;
}
var Su = ir.codes.ERR_STREAM_PREMATURE_CLOSE;

function Cv(t) {
    var e = !1;
    return function() {
        if (!e) {
            e = !0;
            for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++)
                n[i] = arguments[i];
            t.apply(this, n);
        }
    };
}

function Mv() {}

function xv(t) {
    return t.setHeader && typeof t.abort == "function";
}

function Jf(t, e, r) {
    if (typeof e == "function")
        return Jf(t, null, e);
    e || (e = {}), r = Cv(r || Mv);
    var n = e.readable || e.readable !== !1 && t.readable,
        i = e.writable || e.writable !== !1 && t.writable,
        s = function() {
            t.writable || a();
        },
        o = t._writableState && t._writableState.finished,
        a = function() {
            i = !1, o = !0, n || r.call(t);
        },
        c = t._readableState && t._readableState.endEmitted,
        u = function() {
            n = !1, c = !0, i || r.call(t);
        },
        l = function(g) {
            r.call(t, g);
        },
        b = function() {
            var g;
            if (n && !c)
                return (!t._readableState || !t._readableState.ended) && (g = new Su()), r.call(t, g);
            if (i && !o)
                return (!t._writableState || !t._writableState.ended) && (g = new Su()), r.call(t, g);
        },
        f = function() {
            t.req.on("finish", a);
        };
    return xv(t) ? (t.on("complete", a), t.on("abort", b), t.req ? f() : t.on("request", f)) : i && !t._writableState && (t.on("end", s), t.on("close", s)), t.on("end", u), t.on("finish", a), e.error !== !1 && t.on("error", l), t.on("close", b),
        function() {
            t.removeListener("complete", a), t.removeListener("abort", b), t.removeListener("request", f), t.req && t.req.removeListener("finish", a), t.removeListener("end", s), t.removeListener("close", s), t.removeListener("finish", a), t.removeListener("end", u), t.removeListener("error", l), t.removeListener("close", b);
        };
}
var sc = Jf,
    Lo, ku;

function Ov() {
    if (ku)
        return Lo;
    ku = 1;
    var t;

    function e(_, m, w) {
        return m in _ ? Object.defineProperty(_, m, {
            value: w,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : _[m] = w, _;
    }
    var r = sc,
        n = Symbol("lastResolve"),
        i = Symbol("lastReject"),
        s = Symbol("error"),
        o = Symbol("ended"),
        a = Symbol("lastPromise"),
        c = Symbol("handlePromise"),
        u = Symbol("stream");

    function l(_, m) {
        return {
            value: _,
            done: m
        };
    }

    function b(_) {
        var m = _[n];
        if (m !== null) {
            var w = _[u].read();
            w !== null && (_[a] = null, _[n] = null, _[i] = null, m(l(w, !1)));
        }
    }

    function f(_) {
        process.nextTick(b, _);
    }

    function p(_, m) {
        return function(w, A) {
            _.then(function() {
                if (m[o]) {
                    w(l(void 0, !0));
                    return;
                }
                m[c](w, A);
            }, A);
        };
    }
    var g = Object.getPrototypeOf(function() {}),
        S = Object.setPrototypeOf((t = {
            get stream() {
                return this[u];
            },
            next: function() {
                var m = this,
                    w = this[s];
                if (w !== null)
                    return Promise.reject(w);
                if (this[o])
                    return Promise.resolve(l(void 0, !0));
                if (this[u].destroyed)
                    return new Promise(function(F, P) {
                        process.nextTick(function() {
                            m[s] ? P(m[s]) : F(l(void 0, !0));
                        });
                    });
                var A = this[a],
                    N;
                if (A)
                    N = new Promise(p(A, this));
                else {
                    var U = this[u].read();
                    if (U !== null)
                        return Promise.resolve(l(U, !1));
                    N = new Promise(this[c]);
                }
                return this[a] = N, N;
            }
        }, e(t, Symbol.asyncIterator, function() {
            return this;
        }), e(t, "return", function() {
            var m = this;
            return new Promise(function(w, A) {
                m[u].destroy(null, function(N) {
                    if (N) {
                        A(N);
                        return;
                    }
                    w(l(void 0, !0));
                });
            });
        }), t), g),
        I = function(m) {
            var w, A = Object.create(S, (w = {}, e(w, u, {
                value: m,
                writable: !0
            }), e(w, n, {
                value: null,
                writable: !0
            }), e(w, i, {
                value: null,
                writable: !0
            }), e(w, s, {
                value: null,
                writable: !0
            }), e(w, o, {
                value: m._readableState.endEmitted,
                writable: !0
            }), e(w, c, {
                value: function(U, F) {
                    var P = A[u].read();
                    P ? (A[a] = null, A[n] = null, A[i] = null, U(l(P, !1))) : (A[n] = U, A[i] = F);
                },
                writable: !0
            }), w));
            return A[a] = null, r(m, function(N) {
                if (N && N.code !== "ERR_STREAM_PREMATURE_CLOSE") {
                    var U = A[i];
                    U !== null && (A[a] = null, A[n] = null, A[i] = null, U(N)), A[s] = N;
                    return;
                }
                var F = A[n];
                F !== null && (A[a] = null, A[n] = null, A[i] = null, F(l(void 0, !0))), A[o] = !0;
            }), m.on("readable", f.bind(null, A)), A;
        };
    return Lo = I, Lo;
}
var Po, Ru;

function Nv() {
    return Ru || (Ru = 1, Po = function() {
        throw new Error("Readable.from is not available in the browser");
    }), Po;
}
var jo, Iu;

function Qf() {
    if (Iu)
        return jo;
    Iu = 1, jo = L;
    var t;
    L.ReadableState = P, ki.EventEmitter;
    var e = function(d, C) {
            return d.listeners(C).length;
        },
        r = Vf,
        n = Ei.Buffer,
        i = globalThis.Uint8Array || function() {};

    function s(h) {
        return n.from(h);
    }

    function o(h) {
        return n.isBuffer(h) || h instanceof i;
    }
    var a = Pa,
        c;
    a && a.debuglog ? c = a.debuglog("stream") : c = function() {};
    var u = bv(),
        l = zf,
        b = qf,
        f = b.getHighWaterMark,
        p = ir.codes,
        g = p.ERR_INVALID_ARG_TYPE,
        S = p.ERR_STREAM_PUSH_AFTER_EOF,
        I = p.ERR_METHOD_NOT_IMPLEMENTED,
        _ = p.ERR_STREAM_UNSHIFT_AFTER_END_EVENT,
        m, w, A;
    Qe(L, r);
    var N = l.errorOrDestroy,
        U = ["error", "close", "destroy", "pause", "resume"];

    function F(h, d, C) {
        if (typeof h.prependListener == "function")
            return h.prependListener(d, C);
        !h._events || !h._events[d] ? h.on(d, C) : Array.isArray(h._events[d]) ? h._events[d].unshift(C) : h._events[d] = [C, h._events[d]];
    }

    function P(h, d, C) {
        t = t || Mr(), h = h || {}, typeof C != "boolean" && (C = d instanceof t), this.objectMode = !!h.objectMode, C && (this.objectMode = this.objectMode || !!h.readableObjectMode), this.highWaterMark = f(this, h, "readableHighWaterMark", C), this.buffer = new u(), this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.paused = !0, this.emitClose = h.emitClose !== !1, this.autoDestroy = !!h.autoDestroy, this.destroyed = !1, this.defaultEncoding = h.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, h.encoding && (m || (m = Eu().StringDecoder), this.decoder = new m(h.encoding), this.encoding = h.encoding);
    }

    function L(h) {
        if (t = t || Mr(), !(this instanceof L))
            return new L(h);
        var d = this instanceof t;
        this._readableState = new P(h, this, d), this.readable = !0, h && (typeof h.read == "function" && (this._read = h.read), typeof h.destroy == "function" && (this._destroy = h.destroy)), r.call(this);
    }
    Object.defineProperty(L.prototype, "destroyed", {
        // making it explicit this property is not enumerable
        // because otherwise some prototype manipulation in
        // userland will fail
        enumerable: !1,
        get: function() {
            return this._readableState === void 0 ? !1 : this._readableState.destroyed;
        },
        set: function(d) {
            this._readableState && (this._readableState.destroyed = d);
        }
    }), L.prototype.destroy = l.destroy, L.prototype._undestroy = l.undestroy, L.prototype._destroy = function(h, d) {
        d(h);
    }, L.prototype.push = function(h, d) {
        var C = this._readableState,
            D;
        return C.objectMode ? D = !0 : typeof h == "string" && (d = d || C.defaultEncoding, d !== C.encoding && (h = n.from(h, d), d = ""), D = !0), ie(this, h, d, !1, D);
    }, L.prototype.unshift = function(h) {
        return ie(this, h, null, !0, !1);
    };

    function ie(h, d, C, D, oe) {
        c("readableAddChunk", d);
        var Z = h._readableState;
        if (d === null)
            Z.reading = !1, he(h, Z);
        else {
            var se;
            if (oe || (se = z(Z, d)), se)
                N(h, se);
            else if (Z.objectMode || d && d.length > 0)
                if (typeof d != "string" && !Z.objectMode && Object.getPrototypeOf(d) !== n.prototype && (d = s(d)), D)
                    Z.endEmitted ? N(h, new _()) : ee(h, Z, d, !0);
                else if (Z.ended)
                N(h, new S());
            else {
                if (Z.destroyed)
                    return !1;
                Z.reading = !1, Z.decoder && !C ? (d = Z.decoder.write(d), Z.objectMode || d.length !== 0 ? ee(h, Z, d, !1) : ce(h, Z)) : ee(h, Z, d, !1);
            } else
                D || (Z.reading = !1, ce(h, Z));
        }
        return !Z.ended && (Z.length < Z.highWaterMark || Z.length === 0);
    }

    function ee(h, d, C, D) {
        d.flowing && d.length === 0 && !d.sync ? (d.awaitDrain = 0, h.emit("data", C)) : (d.length += d.objectMode ? 1 : C.length, D ? d.buffer.unshift(C) : d.buffer.push(C), d.needReadable && we(h)), ce(h, d);
    }

    function z(h, d) {
        var C;
        return !o(d) && typeof d != "string" && d !== void 0 && !h.objectMode && (C = new g("chunk", ["string", "Buffer", "Uint8Array"], d)), C;
    }
    L.prototype.isPaused = function() {
        return this._readableState.flowing === !1;
    }, L.prototype.setEncoding = function(h) {
        m || (m = Eu().StringDecoder);
        var d = new m(h);
        this._readableState.decoder = d, this._readableState.encoding = this._readableState.decoder.encoding;
        for (var C = this._readableState.buffer.head, D = ""; C !== null;)
            D += d.write(C.data), C = C.next;
        return this._readableState.buffer.clear(), D !== "" && this._readableState.buffer.push(D), this._readableState.length = D.length, this;
    };
    var q = 1073741824;

    function K(h) {
        return h >= q ? h = q : (h--, h |= h >>> 1, h |= h >>> 2, h |= h >>> 4, h |= h >>> 8, h |= h >>> 16, h++), h;
    }

    function ne(h, d) {
        return h <= 0 || d.length === 0 && d.ended ? 0 : d.objectMode ? 1 : h !== h ? d.flowing && d.length ? d.buffer.head.data.length : d.length : (h > d.highWaterMark && (d.highWaterMark = K(h)), h <= d.length ? h : d.ended ? d.length : (d.needReadable = !0, 0));
    }
    L.prototype.read = function(h) {
        c("read", h), h = parseInt(h, 10);
        var d = this._readableState,
            C = h;
        if (h !== 0 && (d.emittedReadable = !1), h === 0 && d.needReadable && ((d.highWaterMark !== 0 ? d.length >= d.highWaterMark : d.length > 0) || d.ended))
            return c("read: emitReadable", d.length, d.ended), d.length === 0 && d.ended ? k(this) : we(this), null;
        if (h = ne(h, d), h === 0 && d.ended)
            return d.length === 0 && k(this), null;
        var D = d.needReadable;
        c("need readable", D), (d.length === 0 || d.length - h < d.highWaterMark) && (D = !0, c("length less than watermark", D)), d.ended || d.reading ? (D = !1, c("reading or ended", D)) : D && (c("do read"), d.reading = !0, d.sync = !0, d.length === 0 && (d.needReadable = !0), this._read(d.highWaterMark), d.sync = !1, d.reading || (h = ne(C, d)));
        var oe;
        return h > 0 ? oe = v(h, d) : oe = null, oe === null ? (d.needReadable = d.length <= d.highWaterMark, h = 0) : (d.length -= h, d.awaitDrain = 0), d.length === 0 && (d.ended || (d.needReadable = !0), C !== h && d.ended && k(this)), oe !== null && this.emit("data", oe), oe;
    };

    function he(h, d) {
        if (c("onEofChunk"), !d.ended) {
            if (d.decoder) {
                var C = d.decoder.end();
                C && C.length && (d.buffer.push(C), d.length += d.objectMode ? 1 : C.length);
            }
            d.ended = !0, d.sync ? we(h) : (d.needReadable = !1, d.emittedReadable || (d.emittedReadable = !0, ye(h)));
        }
    }

    function we(h) {
        var d = h._readableState;
        c("emitReadable", d.needReadable, d.emittedReadable), d.needReadable = !1, d.emittedReadable || (c("emitReadable", d.flowing), d.emittedReadable = !0, process.nextTick(ye, h));
    }

    function ye(h) {
        var d = h._readableState;
        c("emitReadable_", d.destroyed, d.length, d.ended), !d.destroyed && (d.length || d.ended) && (h.emit("readable"), d.emittedReadable = !1), d.needReadable = !d.flowing && !d.ended && d.length <= d.highWaterMark, y(h);
    }

    function ce(h, d) {
        d.readingMore || (d.readingMore = !0, process.nextTick(Ce, h, d));
    }

    function Ce(h, d) {
        for (; !d.reading && !d.ended && (d.length < d.highWaterMark || d.flowing && d.length === 0);) {
            var C = d.length;
            if (c("maybeReadMore read 0"), h.read(0), C === d.length)
                break;
        }
        d.readingMore = !1;
    }
    L.prototype._read = function(h) {
        N(this, new I("_read()"));
    }, L.prototype.pipe = function(h, d) {
        var C = this,
            D = this._readableState;
        switch (D.pipesCount) {
            case 0:
                D.pipes = h;
                break;
            case 1:
                D.pipes = [D.pipes, h];
                break;
            default:
                D.pipes.push(h);
                break;
        }
        D.pipesCount += 1, c("pipe count=%d opts=%j", D.pipesCount, d);
        var oe = (!d || d.end !== !1) && h !== process.stdout && h !== process.stderr,
            Z = oe ? et : kt;
        D.endEmitted ? process.nextTick(Z) : C.once("end", Z), h.on("unpipe", se);

        function se(bt, ot) {
            c("onunpipe"), bt === C && ot && ot.hasUnpiped === !1 && (ot.hasUnpiped = !0, Zr());
        }

        function et() {
            c("onend"), h.end();
        }
        var T = Ue(C);
        h.on("drain", T);
        var Gt = !1;

        function Zr() {
            c("cleanup"), h.removeListener("close", ar), h.removeListener("finish", cr), h.removeListener("drain", T), h.removeListener("error", or), h.removeListener("unpipe", se), C.removeListener("end", et), C.removeListener("end", kt), C.removeListener("data", qr), Gt = !0, D.awaitDrain && (!h._writableState || h._writableState.needDrain) && T();
        }
        C.on("data", qr);

        function qr(bt) {
            c("ondata");
            var ot = h.write(bt);
            c("dest.write", ot), ot === !1 && ((D.pipesCount === 1 && D.pipes === h || D.pipesCount > 1 && j(D.pipes, h) !== -1) && !Gt && (c("false write response, pause", D.awaitDrain), D.awaitDrain++), C.pause());
        }

        function or(bt) {
            c("onerror", bt), kt(), h.removeListener("error", or), e(h, "error") === 0 && N(h, bt);
        }
        F(h, "error", or);

        function ar() {
            h.removeListener("finish", cr), kt();
        }
        h.once("close", ar);

        function cr() {
            c("onfinish"), h.removeListener("close", ar), kt();
        }
        h.once("finish", cr);

        function kt() {
            c("unpipe"), C.unpipe(h);
        }
        return h.emit("pipe", C), D.flowing || (c("pipe resume"), C.resume()), h;
    };

    function Ue(h) {
        return function() {
            var C = h._readableState;
            c("pipeOnDrain", C.awaitDrain), C.awaitDrain && C.awaitDrain--, C.awaitDrain === 0 && e(h, "data") && (C.flowing = !0, y(h));
        };
    }
    L.prototype.unpipe = function(h) {
        var d = this._readableState,
            C = {
                hasUnpiped: !1
            };
        if (d.pipesCount === 0)
            return this;
        if (d.pipesCount === 1)
            return h && h !== d.pipes ? this : (h || (h = d.pipes), d.pipes = null, d.pipesCount = 0, d.flowing = !1, h && h.emit("unpipe", this, C), this);
        if (!h) {
            var D = d.pipes,
                oe = d.pipesCount;
            d.pipes = null, d.pipesCount = 0, d.flowing = !1;
            for (var Z = 0; Z < oe; Z++)
                D[Z].emit("unpipe", this, {
                    hasUnpiped: !1
                });
            return this;
        }
        var se = j(d.pipes, h);
        return se === -1 ? this : (d.pipes.splice(se, 1), d.pipesCount -= 1, d.pipesCount === 1 && (d.pipes = d.pipes[0]), h.emit("unpipe", this, C), this);
    }, L.prototype.on = function(h, d) {
        var C = r.prototype.on.call(this, h, d),
            D = this._readableState;
        return h === "data" ? (D.readableListening = this.listenerCount("readable") > 0, D.flowing !== !1 && this.resume()) : h === "readable" && !D.endEmitted && !D.readableListening && (D.readableListening = D.needReadable = !0, D.flowing = !1, D.emittedReadable = !1, c("on readable", D.length, D.reading), D.length ? we(this) : D.reading || process.nextTick(R, this)), C;
    }, L.prototype.addListener = L.prototype.on, L.prototype.removeListener = function(h, d) {
        var C = r.prototype.removeListener.call(this, h, d);
        return h === "readable" && process.nextTick(E, this), C;
    }, L.prototype.removeAllListeners = function(h) {
        var d = r.prototype.removeAllListeners.apply(this, arguments);
        return (h === "readable" || h === void 0) && process.nextTick(E, this), d;
    };

    function E(h) {
        var d = h._readableState;
        d.readableListening = h.listenerCount("readable") > 0, d.resumeScheduled && !d.paused ? d.flowing = !0 : h.listenerCount("data") > 0 && h.resume();
    }

    function R(h) {
        c("readable nexttick read 0"), h.read(0);
    }
    L.prototype.resume = function() {
        var h = this._readableState;
        return h.flowing || (c("resume"), h.flowing = !h.readableListening, x(this, h)), h.paused = !1, this;
    };

    function x(h, d) {
        d.resumeScheduled || (d.resumeScheduled = !0, process.nextTick(W, h, d));
    }

    function W(h, d) {
        c("resume", d.reading), d.reading || h.read(0), d.resumeScheduled = !1, h.emit("resume"), y(h), d.flowing && !d.reading && h.read(0);
    }
    L.prototype.pause = function() {
        return c("call pause flowing=%j", this._readableState.flowing), this._readableState.flowing !== !1 && (c("pause"), this._readableState.flowing = !1, this.emit("pause")), this._readableState.paused = !0, this;
    };

    function y(h) {
        var d = h._readableState;
        for (c("flow", d.flowing); d.flowing && h.read() !== null;)
        ;
    }
    L.prototype.wrap = function(h) {
        var d = this,
            C = this._readableState,
            D = !1;
        h.on("end", function() {
            if (c("wrapped end"), C.decoder && !C.ended) {
                var se = C.decoder.end();
                se && se.length && d.push(se);
            }
            d.push(null);
        }), h.on("data", function(se) {
            if (c("wrapped data"), C.decoder && (se = C.decoder.write(se)), !(C.objectMode && se == null) && !(!C.objectMode && (!se || !se.length))) {
                var et = d.push(se);
                et || (D = !0, h.pause());
            }
        });
        for (var oe in h)
            this[oe] === void 0 && typeof h[oe] == "function" && (this[oe] = function(et) {
                return function() {
                    return h[et].apply(h, arguments);
                };
            }(oe));
        for (var Z = 0; Z < U.length; Z++)
            h.on(U[Z], this.emit.bind(this, U[Z]));
        return this._read = function(se) {
            c("wrapped _read", se), D && (D = !1, h.resume());
        }, this;
    }, typeof Symbol == "function" && (L.prototype[Symbol.asyncIterator] = function() {
        return w === void 0 && (w = Ov()), w(this);
    }), Object.defineProperty(L.prototype, "readableHighWaterMark", {
        // making it explicit this property is not enumerable
        // because otherwise some prototype manipulation in
        // userland will fail
        enumerable: !1,
        get: function() {
            return this._readableState.highWaterMark;
        }
    }), Object.defineProperty(L.prototype, "readableBuffer", {
        // making it explicit this property is not enumerable
        // because otherwise some prototype manipulation in
        // userland will fail
        enumerable: !1,
        get: function() {
            return this._readableState && this._readableState.buffer;
        }
    }), Object.defineProperty(L.prototype, "readableFlowing", {
        // making it explicit this property is not enumerable
        // because otherwise some prototype manipulation in
        // userland will fail
        enumerable: !1,
        get: function() {
            return this._readableState.flowing;
        },
        set: function(d) {
            this._readableState && (this._readableState.flowing = d);
        }
    }), L._fromList = v, Object.defineProperty(L.prototype, "readableLength", {
        // making it explicit this property is not enumerable
        // because otherwise some prototype manipulation in
        // userland will fail
        enumerable: !1,
        get: function() {
            return this._readableState.length;
        }
    });

    function v(h, d) {
        if (d.length === 0)
            return null;
        var C;
        return d.objectMode ? C = d.buffer.shift() : !h || h >= d.length ? (d.decoder ? C = d.buffer.join("") : d.buffer.length === 1 ? C = d.buffer.first() : C = d.buffer.concat(d.length), d.buffer.clear()) : C = d.buffer.consume(h, d.decoder), C;
    }

    function k(h) {
        var d = h._readableState;
        c("endReadable", d.endEmitted), d.endEmitted || (d.ended = !0, process.nextTick(O, d, h));
    }

    function O(h, d) {
        if (c("endReadableNT", h.endEmitted, h.length), !h.endEmitted && h.length === 0 && (h.endEmitted = !0, d.readable = !1, d.emit("end"), h.autoDestroy)) {
            var C = d._writableState;
            (!C || C.autoDestroy && C.finished) && d.destroy();
        }
    }
    typeof Symbol == "function" && (L.from = function(h, d) {
        return A === void 0 && (A = Nv()), A(L, h, d);
    });

    function j(h, d) {
        for (var C = 0, D = h.length; C < D; C++)
            if (h[C] === d)
                return C;
        return -1;
    }
    return jo;
}
var Kf = Et,
    Ui = ir.codes,
    Dv = Ui.ERR_METHOD_NOT_IMPLEMENTED,
    Lv = Ui.ERR_MULTIPLE_CALLBACK,
    Pv = Ui.ERR_TRANSFORM_ALREADY_TRANSFORMING,
    jv = Ui.ERR_TRANSFORM_WITH_LENGTH_0,
    Fi = Mr();
Qe(Et, Fi);

function Bv(t, e) {
    var r = this._transformState;
    r.transforming = !1;
    var n = r.writecb;
    if (n === null)
        return this.emit("error", new Lv());
    r.writechunk = null, r.writecb = null, e != null && this.push(e), n(t);
    var i = this._readableState;
    i.reading = !1, (i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark);
}

function Et(t) {
    if (!(this instanceof Et))
        return new Et(t);
    Fi.call(this, t), this._transformState = {
        afterTransform: Bv.bind(this),
        needTransform: !1,
        transforming: !1,
        writecb: null,
        writechunk: null,
        writeencoding: null
    }, this._readableState.needReadable = !0, this._readableState.sync = !1, t && (typeof t.transform == "function" && (this._transform = t.transform), typeof t.flush == "function" && (this._flush = t.flush)), this.on("prefinish", Uv);
}

function Uv() {
    var t = this;
    typeof this._flush == "function" && !this._readableState.destroyed ? this._flush(function(e, r) {
        Au(t, e, r);
    }) : Au(this, null, null);
}
Et.prototype.push = function(t, e) {
    return this._transformState.needTransform = !1, Fi.prototype.push.call(this, t, e);
};
Et.prototype._transform = function(t, e, r) {
    r(new Dv("_transform()"));
};
Et.prototype._write = function(t, e, r) {
    var n = this._transformState;
    if (n.writecb = r, n.writechunk = t, n.writeencoding = e, !n.transforming) {
        var i = this._readableState;
        (n.needTransform || i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark);
    }
};
Et.prototype._read = function(t) {
    var e = this._transformState;
    e.writechunk !== null && !e.transforming ? (e.transforming = !0, this._transform(e.writechunk, e.writeencoding, e.afterTransform)) : e.needTransform = !0;
};
Et.prototype._destroy = function(t, e) {
    Fi.prototype._destroy.call(this, t, function(r) {
        e(r);
    });
};

function Au(t, e, r) {
    if (e)
        return t.emit("error", e);
    if (r != null && t.push(r), t._writableState.length)
        throw new jv();
    if (t._transformState.transforming)
        throw new Pv();
    return t.push(null);
}
var Fv = gn,
    Xf = Kf;
Qe(gn, Xf);

function gn(t) {
    if (!(this instanceof gn))
        return new gn(t);
    Xf.call(this, t);
}
gn.prototype._transform = function(t, e, r) {
    r(null, t);
};
var Bo;

function Hv(t) {
    var e = !1;
    return function() {
        e || (e = !0, t.apply(void 0, arguments));
    };
}
var eh = ir.codes,
    Wv = eh.ERR_MISSING_ARGS,
    Gv = eh.ERR_STREAM_DESTROYED;

function Tu(t) {
    if (t)
        throw t;
}

function $v(t) {
    return t.setHeader && typeof t.abort == "function";
}

function Vv(t, e, r, n) {
    n = Hv(n);
    var i = !1;
    t.on("close", function() {
        i = !0;
    }), Bo === void 0 && (Bo = sc), Bo(t, {
        readable: e,
        writable: r
    }, function(o) {
        if (o)
            return n(o);
        i = !0, n();
    });
    var s = !1;
    return function(o) {
        if (!i && !s) {
            if (s = !0, $v(t))
                return t.abort();
            if (typeof t.destroy == "function")
                return t.destroy();
            n(o || new Gv("pipe"));
        }
    };
}

function Cu(t) {
    t();
}

function zv(t, e) {
    return t.pipe(e);
}

function Zv(t) {
    return !t.length || typeof t[t.length - 1] != "function" ? Tu : t.pop();
}

function qv() {
    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
        e[r] = arguments[r];
    var n = Zv(e);
    if (Array.isArray(e[0]) && (e = e[0]), e.length < 2)
        throw new Wv("streams");
    var i, s = e.map(function(o, a) {
        var c = a < e.length - 1,
            u = a > 0;
        return Vv(o, c, u, function(l) {
            i || (i = l), l && s.forEach(Cu), !c && (s.forEach(Cu), n(i));
        });
    });
    return e.reduce(zv);
}
var Yv = qv;
(function(t, e) {
    e = t.exports = Qf(), e.Stream = e, e.Readable = e, e.Writable = Yf(), e.Duplex = Mr(), e.Transform = Kf, e.PassThrough = Fv, e.finished = sc, e.pipeline = Yv;
})(_v, bn);
const {
    Transform: Jv
} = bn;
var Qv = (t) => class th extends Jv {
    constructor(r, n, i, s, o) {
        super(o), this._rate = r, this._capacity = n, this._delimitedSuffix = i, this._hashBitLength = s, this._options = o, this._state = new t(), this._state.initialize(r, n), this._finalized = !1;
    }
    _transform(r, n, i) {
        let s = null;
        try {
            this.update(r, n);
        } catch (o) {
            s = o;
        }
        i(s);
    }
    _flush(r) {
        let n = null;
        try {
            this.push(this.digest());
        } catch (i) {
            n = i;
        }
        r(n);
    }
    update(r, n) {
        if (!Buffer.isBuffer(r) && typeof r != "string")
            throw new TypeError("Data must be a string or a buffer");
        if (this._finalized)
            throw new Error("Digest already called");
        return Buffer.isBuffer(r) || (r = Buffer.from(r, n)), this._state.absorb(r), this;
    }
    digest(r) {
        if (this._finalized)
            throw new Error("Digest already called");
        this._finalized = !0, this._delimitedSuffix && this._state.absorbLastFewBits(this._delimitedSuffix);
        let n = this._state.squeeze(this._hashBitLength / 8);
        return r !== void 0 && (n = n.toString(r)), this._resetState(), n;
    }
    // remove result from memory
    _resetState() {
        return this._state.initialize(this._rate, this._capacity), this;
    }
    // because sometimes we need hash right now and little later
    _clone() {
        const r = new th(this._rate, this._capacity, this._delimitedSuffix, this._hashBitLength, this._options);
        return this._state.copy(r._state), r._finalized = this._finalized, r;
    }
};
const {
    Transform: Kv
} = bn;
var Xv = (t) => class rh extends Kv {
    constructor(r, n, i, s) {
        super(s), this._rate = r, this._capacity = n, this._delimitedSuffix = i, this._options = s, this._state = new t(), this._state.initialize(r, n), this._finalized = !1;
    }
    _transform(r, n, i) {
        let s = null;
        try {
            this.update(r, n);
        } catch (o) {
            s = o;
        }
        i(s);
    }
    _flush() {}
    _read(r) {
        this.push(this.squeeze(r));
    }
    update(r, n) {
        if (!Buffer.isBuffer(r) && typeof r != "string")
            throw new TypeError("Data must be a string or a buffer");
        if (this._finalized)
            throw new Error("Squeeze already called");
        return Buffer.isBuffer(r) || (r = Buffer.from(r, n)), this._state.absorb(r), this;
    }
    squeeze(r, n) {
        this._finalized || (this._finalized = !0, this._state.absorbLastFewBits(this._delimitedSuffix));
        let i = this._state.squeeze(r);
        return n !== void 0 && (i = i.toString(n)), i;
    }
    _resetState() {
        return this._state.initialize(this._rate, this._capacity), this;
    }
    _clone() {
        const r = new rh(this._rate, this._capacity, this._delimitedSuffix, this._options);
        return this._state.copy(r._state), r._finalized = this._finalized, r;
    }
};
const ew = Qv,
    tw = Xv;
var rw = function(t) {
        const e = ew(t),
            r = tw(t);
        return function(n, i) {
            switch (typeof n == "string" ? n.toLowerCase() : n) {
                case "keccak224":
                    return new e(1152, 448, null, 224, i);
                case "keccak256":
                    return new e(1088, 512, null, 256, i);
                case "keccak384":
                    return new e(832, 768, null, 384, i);
                case "keccak512":
                    return new e(576, 1024, null, 512, i);
                case "sha3-224":
                    return new e(1152, 448, 6, 224, i);
                case "sha3-256":
                    return new e(1088, 512, 6, 256, i);
                case "sha3-384":
                    return new e(832, 768, 6, 384, i);
                case "sha3-512":
                    return new e(576, 1024, 6, 512, i);
                case "shake128":
                    return new r(1344, 256, 31, i);
                case "shake256":
                    return new r(1088, 512, 31, i);
                default:
                    throw new Error("Invald algorithm: " + n);
            }
        };
    },
    nh = {};
const Mu = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648];
nh.p1600 = function(t) {
    for (let e = 0; e < 24; ++e) {
        const r = t[0] ^ t[10] ^ t[20] ^ t[30] ^ t[40],
            n = t[1] ^ t[11] ^ t[21] ^ t[31] ^ t[41],
            i = t[2] ^ t[12] ^ t[22] ^ t[32] ^ t[42],
            s = t[3] ^ t[13] ^ t[23] ^ t[33] ^ t[43],
            o = t[4] ^ t[14] ^ t[24] ^ t[34] ^ t[44],
            a = t[5] ^ t[15] ^ t[25] ^ t[35] ^ t[45],
            c = t[6] ^ t[16] ^ t[26] ^ t[36] ^ t[46],
            u = t[7] ^ t[17] ^ t[27] ^ t[37] ^ t[47],
            l = t[8] ^ t[18] ^ t[28] ^ t[38] ^ t[48],
            b = t[9] ^ t[19] ^ t[29] ^ t[39] ^ t[49];
        let f = l ^ (i << 1 | s >>> 31),
            p = b ^ (s << 1 | i >>> 31);
        const g = t[0] ^ f,
            S = t[1] ^ p,
            I = t[10] ^ f,
            _ = t[11] ^ p,
            m = t[20] ^ f,
            w = t[21] ^ p,
            A = t[30] ^ f,
            N = t[31] ^ p,
            U = t[40] ^ f,
            F = t[41] ^ p;
        f = r ^ (o << 1 | a >>> 31), p = n ^ (a << 1 | o >>> 31);
        const P = t[2] ^ f,
            L = t[3] ^ p,
            ie = t[12] ^ f,
            ee = t[13] ^ p,
            z = t[22] ^ f,
            q = t[23] ^ p,
            K = t[32] ^ f,
            ne = t[33] ^ p,
            he = t[42] ^ f,
            we = t[43] ^ p;
        f = i ^ (c << 1 | u >>> 31), p = s ^ (u << 1 | c >>> 31);
        const ye = t[4] ^ f,
            ce = t[5] ^ p,
            Ce = t[14] ^ f,
            Ue = t[15] ^ p,
            E = t[24] ^ f,
            R = t[25] ^ p,
            x = t[34] ^ f,
            W = t[35] ^ p,
            y = t[44] ^ f,
            v = t[45] ^ p;
        f = o ^ (l << 1 | b >>> 31), p = a ^ (b << 1 | l >>> 31);
        const k = t[6] ^ f,
            O = t[7] ^ p,
            j = t[16] ^ f,
            h = t[17] ^ p,
            d = t[26] ^ f,
            C = t[27] ^ p,
            D = t[36] ^ f,
            oe = t[37] ^ p,
            Z = t[46] ^ f,
            se = t[47] ^ p;
        f = c ^ (r << 1 | n >>> 31), p = u ^ (n << 1 | r >>> 31);
        const et = t[8] ^ f,
            T = t[9] ^ p,
            Gt = t[18] ^ f,
            Zr = t[19] ^ p,
            qr = t[28] ^ f,
            or = t[29] ^ p,
            ar = t[38] ^ f,
            cr = t[39] ^ p,
            kt = t[48] ^ f,
            bt = t[49] ^ p,
            ot = g,
            Ss = S,
            ks = _ << 4 | I >>> 28,
            Rs = I << 4 | _ >>> 28,
            Is = m << 3 | w >>> 29,
            As = w << 3 | m >>> 29,
            Ts = N << 9 | A >>> 23,
            Cs = A << 9 | N >>> 23,
            Ms = U << 18 | F >>> 14,
            xs = F << 18 | U >>> 14,
            Os = P << 1 | L >>> 31,
            Ns = L << 1 | P >>> 31,
            Ds = ee << 12 | ie >>> 20,
            Ls = ie << 12 | ee >>> 20,
            Ps = z << 10 | q >>> 22,
            js = q << 10 | z >>> 22,
            Bs = ne << 13 | K >>> 19,
            Us = K << 13 | ne >>> 19,
            Fs = he << 2 | we >>> 30,
            Hs = we << 2 | he >>> 30,
            Ws = ce << 30 | ye >>> 2,
            Gs = ye << 30 | ce >>> 2,
            $s = Ce << 6 | Ue >>> 26,
            Vs = Ue << 6 | Ce >>> 26,
            zs = R << 11 | E >>> 21,
            Zs = E << 11 | R >>> 21,
            qs = x << 15 | W >>> 17,
            Ys = W << 15 | x >>> 17,
            Js = v << 29 | y >>> 3,
            Qs = y << 29 | v >>> 3,
            Ks = k << 28 | O >>> 4,
            Xs = O << 28 | k >>> 4,
            eo = h << 23 | j >>> 9,
            to = j << 23 | h >>> 9,
            ro = d << 25 | C >>> 7,
            no = C << 25 | d >>> 7,
            io = D << 21 | oe >>> 11,
            so = oe << 21 | D >>> 11,
            oo = se << 24 | Z >>> 8,
            ao = Z << 24 | se >>> 8,
            co = et << 27 | T >>> 5,
            uo = T << 27 | et >>> 5,
            lo = Gt << 20 | Zr >>> 12,
            fo = Zr << 20 | Gt >>> 12,
            ho = or << 7 | qr >>> 25,
            po = qr << 7 | or >>> 25,
            _o = ar << 8 | cr >>> 24,
            bo = cr << 8 | ar >>> 24,
            go = kt << 14 | bt >>> 18,
            mo = bt << 14 | kt >>> 18;
        t[0] = ot ^ ~Ds & zs, t[1] = Ss ^ ~Ls & Zs, t[10] = Ks ^ ~lo & Is, t[11] = Xs ^ ~fo & As, t[20] = Os ^ ~$s & ro, t[21] = Ns ^ ~Vs & no, t[30] = co ^ ~ks & Ps, t[31] = uo ^ ~Rs & js, t[40] = Ws ^ ~eo & ho, t[41] = Gs ^ ~to & po, t[2] = Ds ^ ~zs & io, t[3] = Ls ^ ~Zs & so, t[12] = lo ^ ~Is & Bs, t[13] = fo ^ ~As & Us, t[22] = $s ^ ~ro & _o, t[23] = Vs ^ ~no & bo, t[32] = ks ^ ~Ps & qs, t[33] = Rs ^ ~js & Ys, t[42] = eo ^ ~ho & Ts, t[43] = to ^ ~po & Cs, t[4] = zs ^ ~io & go, t[5] = Zs ^ ~so & mo, t[14] = Is ^ ~Bs & Js, t[15] = As ^ ~Us & Qs, t[24] = ro ^ ~_o & Ms, t[25] = no ^ ~bo & xs, t[34] = Ps ^ ~qs & oo, t[35] = js ^ ~Ys & ao, t[44] = ho ^ ~Ts & Fs, t[45] = po ^ ~Cs & Hs, t[6] = io ^ ~go & ot, t[7] = so ^ ~mo & Ss, t[16] = Bs ^ ~Js & Ks, t[17] = Us ^ ~Qs & Xs, t[26] = _o ^ ~Ms & Os, t[27] = bo ^ ~xs & Ns, t[36] = qs ^ ~oo & co, t[37] = Ys ^ ~ao & uo, t[46] = Ts ^ ~Fs & Ws, t[47] = Cs ^ ~Hs & Gs, t[8] = go ^ ~ot & Ds, t[9] = mo ^ ~Ss & Ls, t[18] = Js ^ ~Ks & lo, t[19] = Qs ^ ~Xs & fo, t[28] = Ms ^ ~Os & $s, t[29] = xs ^ ~Ns & Vs, t[38] = oo ^ ~co & ks, t[39] = ao ^ ~uo & Rs, t[48] = Fs ^ ~Ws & eo, t[49] = Hs ^ ~Gs & to, t[0] ^= Mu[e * 2], t[1] ^= Mu[e * 2 + 1];
    }
};
const _i = nh;

function Vr() {
    this.state = [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ], this.blockSize = null, this.count = 0, this.squeezing = !1;
}
Vr.prototype.initialize = function(t, e) {
    for (let r = 0; r < 50; ++r)
        this.state[r] = 0;
    this.blockSize = t / 8, this.count = 0, this.squeezing = !1;
};
Vr.prototype.absorb = function(t) {
    for (let e = 0; e < t.length; ++e)
        this.state[~~(this.count / 4)] ^= t[e] << 8 * (this.count % 4), this.count += 1, this.count === this.blockSize && (_i.p1600(this.state), this.count = 0);
};
Vr.prototype.absorbLastFewBits = function(t) {
    this.state[~~(this.count / 4)] ^= t << 8 * (this.count % 4), t & 128 && this.count === this.blockSize - 1 && _i.p1600(this.state), this.state[~~((this.blockSize - 1) / 4)] ^= 128 << 8 * ((this.blockSize - 1) % 4), _i.p1600(this.state), this.count = 0, this.squeezing = !0;
};
Vr.prototype.squeeze = function(t) {
    this.squeezing || this.absorbLastFewBits(1);
    const e = Buffer.alloc(t);
    for (let r = 0; r < t; ++r)
        e[r] = this.state[~~(this.count / 4)] >>> 8 * (this.count % 4) & 255, this.count += 1, this.count === this.blockSize && (_i.p1600(this.state), this.count = 0);
    return e;
};
Vr.prototype.copy = function(t) {
    for (let e = 0; e < 50; ++e)
        t.state[e] = this.state[e];
    t.blockSize = this.blockSize, t.count = this.count, t.squeezing = this.squeezing;
};
var nw = Vr,
    iw = rw(nw);
const sw = iw,
    ow = Si;

function ih(t) {
    return Buffer.allocUnsafe(t).fill(0);
}

function sh(t, e, r) {
    const n = ih(e);
    return t = Hi(t), r ? t.length < e ? (t.copy(n), n) : t.slice(0, e) : t.length < e ? (t.copy(n, e - t.length), n) : t.slice(-e);
}

function aw(t, e) {
    return sh(t, e, !0);
}

function Hi(t) {
    if (!Buffer.isBuffer(t))
        if (Array.isArray(t))
            t = Buffer.from(t);
        else if (typeof t == "string")
        oh(t) ? t = Buffer.from(lw(ah(t)), "hex") : t = Buffer.from(t);
    else if (typeof t == "number")
        t = intToBuffer(t);
    else if (t == null)
        t = Buffer.allocUnsafe(0);
    else if (ow.isBN(t))
        t = t.toArrayLike(Buffer);
    else if (t.toArray)
        t = Buffer.from(t.toArray());
    else
        throw new Error("invalid type");
    return t;
}

function cw(t) {
    return t = Hi(t), "0x" + t.toString("hex");
}

function uw(t, e) {
    return t = Hi(t), e || (e = 256), sw("keccak" + e).update(t).digest();
}

function lw(t) {
    return t.length % 2 ? "0" + t : t;
}

function oh(t) {
    return typeof t == "string" && t.match(/^0x[0-9A-Fa-f]*$/);
}

function ah(t) {
    return typeof t == "string" && t.startsWith("0x") ? t.slice(2) : t;
}
var ch = {
    zeros: ih,
    setLength: sh,
    setLengthRight: aw,
    isHexString: oh,
    stripHexPrefix: ah,
    toBuffer: Hi,
    bufferToHex: cw,
    keccak: uw
};
const tr = ch,
    Jt = Si;

function uh(t) {
    return t.startsWith("int[") ? "int256" + t.slice(3) : t === "int" ? "int256" : t.startsWith("uint[") ? "uint256" + t.slice(4) : t === "uint" ? "uint256" : t.startsWith("fixed[") ? "fixed128x128" + t.slice(5) : t === "fixed" ? "fixed128x128" : t.startsWith("ufixed[") ? "ufixed128x128" + t.slice(6) : t === "ufixed" ? "ufixed128x128" : t;
}

function vr(t) {
    return parseInt(/^\D+(\d+)$/.exec(t)[1], 10);
}

function xu(t) {
    var e = /^\D+(\d+)x(\d+)$/.exec(t);
    return [parseInt(e[1], 10), parseInt(e[2], 10)];
}

function lh(t) {
    var e = t.match(/(.*)\[(.*?)\]$/);
    return e ? e[2] === "" ? "dynamic" : parseInt(e[2], 10) : null;
}

function Zt(t) {
    var e = typeof t;
    if (e === "string")
        return tr.isHexString(t) ? new Jt(tr.stripHexPrefix(t), 16) : new Jt(t, 10);
    if (e === "number")
        return new Jt(t);
    if (t.toArray)
        return t;
    throw new Error("Argument is not a number");
}

function lt(t, e) {
    var r, n, i, s;
    if (t === "address")
        return lt("uint160", Zt(e));
    if (t === "bool")
        return lt("uint8", e ? 1 : 0);
    if (t === "string")
        return lt("bytes", new Buffer(e, "utf8"));
    if (hw(t)) {
        if (typeof e.length > "u")
            throw new Error("Not an array?");
        if (r = lh(t), r !== "dynamic" && r !== 0 && e.length > r)
            throw new Error("Elements exceed array size: " + r);
        i = [], t = t.slice(0, t.lastIndexOf("[")), typeof e == "string" && (e = JSON.parse(e));
        for (s in e)
            i.push(lt(t, e[s]));
        if (r === "dynamic") {
            var o = lt("uint256", e.length);
            i.unshift(o);
        }
        return Buffer.concat(i);
    } else {
        if (t === "bytes")
            return e = new Buffer(e), i = Buffer.concat([lt("uint256", e.length), e]), e.length % 32 !== 0 && (i = Buffer.concat([i, tr.zeros(32 - e.length % 32)])), i;
        if (t.startsWith("bytes")) {
            if (r = vr(t), r < 1 || r > 32)
                throw new Error("Invalid bytes<N> width: " + r);
            return tr.setLengthRight(e, 32);
        } else if (t.startsWith("uint")) {
            if (r = vr(t), r % 8 || r < 8 || r > 256)
                throw new Error("Invalid uint<N> width: " + r);
            if (n = Zt(e), n.bitLength() > r)
                throw new Error("Supplied uint exceeds width: " + r + " vs " + n.bitLength());
            if (n < 0)
                throw new Error("Supplied uint is negative");
            return n.toArrayLike(Buffer, "be", 32);
        } else if (t.startsWith("int")) {
            if (r = vr(t), r % 8 || r < 8 || r > 256)
                throw new Error("Invalid int<N> width: " + r);
            if (n = Zt(e), n.bitLength() > r)
                throw new Error("Supplied int exceeds width: " + r + " vs " + n.bitLength());
            return n.toTwos(256).toArrayLike(Buffer, "be", 32);
        } else if (t.startsWith("ufixed")) {
            if (r = xu(t), n = Zt(e), n < 0)
                throw new Error("Supplied ufixed is negative");
            return lt("uint256", n.mul(new Jt(2).pow(new Jt(r[1]))));
        } else if (t.startsWith("fixed"))
            return r = xu(t), lt("int256", Zt(e).mul(new Jt(2).pow(new Jt(r[1]))));
    }
    throw new Error("Unsupported or invalid type: " + t);
}

function fw(t) {
    return t === "string" || t === "bytes" || lh(t) === "dynamic";
}

function hw(t) {
    return t.lastIndexOf("]") === t.length - 1;
}

function dw(t, e) {
    var r = [],
        n = [],
        i = 32 * t.length;
    for (var s in t) {
        var o = uh(t[s]),
            a = e[s],
            c = lt(o, a);
        fw(o) ? (r.push(lt("uint256", i)), n.push(c), i += c.length) : r.push(c);
    }
    return Buffer.concat(r.concat(n));
}

function fh(t, e) {
    if (t.length !== e.length)
        throw new Error("Number of types are not matching the values");
    for (var r, n, i = [], s = 0; s < t.length; s++) {
        var o = uh(t[s]),
            a = e[s];
        if (o === "bytes")
            i.push(a);
        else if (o === "string")
            i.push(new Buffer(a, "utf8"));
        else if (o === "bool")
            i.push(new Buffer(a ? "01" : "00", "hex"));
        else if (o === "address")
            i.push(tr.setLength(a, 20));
        else if (o.startsWith("bytes")) {
            if (r = vr(o), r < 1 || r > 32)
                throw new Error("Invalid bytes<N> width: " + r);
            i.push(tr.setLengthRight(a, r));
        } else if (o.startsWith("uint")) {
            if (r = vr(o), r % 8 || r < 8 || r > 256)
                throw new Error("Invalid uint<N> width: " + r);
            if (n = Zt(a), n.bitLength() > r)
                throw new Error("Supplied uint exceeds width: " + r + " vs " + n.bitLength());
            i.push(n.toArrayLike(Buffer, "be", r / 8));
        } else if (o.startsWith("int")) {
            if (r = vr(o), r % 8 || r < 8 || r > 256)
                throw new Error("Invalid int<N> width: " + r);
            if (n = Zt(a), n.bitLength() > r)
                throw new Error("Supplied int exceeds width: " + r + " vs " + n.bitLength());
            i.push(n.toTwos(r).toArrayLike(Buffer, "be", r / 8));
        } else
            throw new Error("Unsupported or invalid type: " + o);
    }
    return Buffer.concat(i);
}

function pw(t, e) {
    return tr.keccak(fh(t, e));
}
var _w = {
    rawEncode: dw,
    solidityPack: fh,
    soliditySHA3: pw
};
const rt = ch,
    an = _w,
    hh = {
        type: "object",
        properties: {
            types: {
                type: "object",
                additionalProperties: {
                    type: "array",
                    items: {
                        type: "object",
                        properties: {
                            name: {
                                type: "string"
                            },
                            type: {
                                type: "string"
                            }
                        },
                        required: ["name", "type"]
                    }
                }
            },
            primaryType: {
                type: "string"
            },
            domain: {
                type: "object"
            },
            message: {
                type: "object"
            }
        },
        required: ["types", "primaryType", "domain", "message"]
    },
    Uo = {
        /**
         * Encodes an object by encoding and concatenating each of its members
         *
         * @param {string} primaryType - Root type
         * @param {Object} data - Object to encode
         * @param {Object} types - Type definitions
         * @returns {string} - Encoded representation of an object
         */
        encodeData(t, e, r, n = !0) {
            const i = ["bytes32"],
                s = [this.hashType(t, r)];
            if (n) {
                const o = (a, c, u) => {
                    if (r[c] !== void 0)
                        return ["bytes32", u == null ? "0x0000000000000000000000000000000000000000000000000000000000000000" : rt.keccak(this.encodeData(c, u, r, n))];
                    if (u === void 0)
                        throw new Error(`missing value for field ${a} of type ${c}`);
                    if (c === "bytes")
                        return ["bytes32", rt.keccak(u)];
                    if (c === "string")
                        return typeof u == "string" && (u = Buffer.from(u, "utf8")), ["bytes32", rt.keccak(u)];
                    if (c.lastIndexOf("]") === c.length - 1) {
                        const l = c.slice(0, c.lastIndexOf("[")),
                            b = u.map((f) => o(a, l, f));
                        return ["bytes32", rt.keccak(an.rawEncode(
                            b.map(([f]) => f),
                            b.map(([, f]) => f)
                        ))];
                    }
                    return [c, u];
                };
                for (const a of r[t]) {
                    const [c, u] = o(a.name, a.type, e[a.name]);
                    i.push(c), s.push(u);
                }
            } else
                for (const o of r[t]) {
                    let a = e[o.name];
                    if (a !== void 0)
                        if (o.type === "bytes")
                            i.push("bytes32"), a = rt.keccak(a), s.push(a);
                        else if (o.type === "string")
                        i.push("bytes32"), typeof a == "string" && (a = Buffer.from(a, "utf8")), a = rt.keccak(a), s.push(a);
                    else if (r[o.type] !== void 0)
                        i.push("bytes32"), a = rt.keccak(this.encodeData(o.type, a, r, n)), s.push(a);
                    else {
                        if (o.type.lastIndexOf("]") === o.type.length - 1)
                            throw new Error("Arrays currently unimplemented in encodeData");
                        i.push(o.type), s.push(a);
                    }
                }
            return an.rawEncode(i, s);
        },
        /**
         * Encodes the type of an object by encoding a comma delimited list of its members
         *
         * @param {string} primaryType - Root type to encode
         * @param {Object} types - Type definitions
         * @returns {string} - Encoded representation of the type of an object
         */
        encodeType(t, e) {
            let r = "",
                n = this.findTypeDependencies(t, e).filter((i) => i !== t);
            n = [t].concat(n.sort());
            for (const i of n) {
                if (!e[i])
                    throw new Error("No type definition specified: " + i);
                r += i + "(" + e[i].map(({
                    name: o,
                    type: a
                }) => a + " " + o).join(",") + ")";
            }
            return r;
        },
        /**
         * Finds all types within a type defintion object
         *
         * @param {string} primaryType - Root type
         * @param {Object} types - Type definitions
         * @param {Array} results - current set of accumulated types
         * @returns {Array} - Set of all types found in the type definition
         */
        findTypeDependencies(t, e, r = []) {
            if (t = t.match(/^\w*/)[0], r.includes(t) || e[t] === void 0)
                return r;
            r.push(t);
            for (const n of e[t])
                for (const i of this.findTypeDependencies(n.type, e, r))
                    !r.includes(i) && r.push(i);
            return r;
        },
        /**
         * Hashes an object
         *
         * @param {string} primaryType - Root type
         * @param {Object} data - Object to hash
         * @param {Object} types - Type definitions
         * @returns {Buffer} - Hash of an object
         */
        hashStruct(t, e, r, n = !0) {
            return rt.keccak(this.encodeData(t, e, r, n));
        },
        /**
         * Hashes the type of an object
         *
         * @param {string} primaryType - Root type to hash
         * @param {Object} types - Type definitions
         * @returns {string} - Hash of an object
         */
        hashType(t, e) {
            return rt.keccak(this.encodeType(t, e));
        },
        /**
         * Removes properties from a message object that are not defined per EIP-712
         *
         * @param {Object} data - typed message object
         * @returns {Object} - typed message object with only allowed fields
         */
        sanitizeData(t) {
            const e = {};
            for (const r in hh.properties)
                t[r] && (e[r] = t[r]);
            return e.types && (e.types = Object.assign({
                EIP712Domain: []
            }, e.types)), e;
        },
        /**
         * Returns the hash of a typed message as per EIP-712 for signing
         *
         * @param {Object} typedData - Types message data to sign
         * @returns {string} - sha3 hash for signing
         */
        hash(t, e = !0) {
            const r = this.sanitizeData(t),
                n = [Buffer.from("1901", "hex")];
            return n.push(this.hashStruct("EIP712Domain", r.domain, r.types, e)), r.primaryType !== "EIP712Domain" && n.push(this.hashStruct(r.primaryType, r.message, r.types, e)), rt.keccak(Buffer.concat(n));
        }
    };
var bw = {
    TYPED_MESSAGE_SCHEMA: hh,
    TypedDataUtils: Uo,
    hashForSignTypedDataLegacy: function(t) {
        return gw(t.data);
    },
    hashForSignTypedData_v3: function(t) {
        return Uo.hash(t.data, !1);
    },
    hashForSignTypedData_v4: function(t) {
        return Uo.hash(t.data);
    }
};

function gw(t) {
    const e = new Error("Expect argument to be non-empty array");
    if (typeof t != "object" || !t.length)
        throw e;
    const r = t.map(function(s) {
            return s.type === "bytes" ? rt.toBuffer(s.value) : s.value;
        }),
        n = t.map(function(s) {
            return s.type;
        }),
        i = t.map(function(s) {
            if (!s.name)
                throw e;
            return s.type + " " + s.name;
        });
    return an.soliditySHA3(
        ["bytes32", "bytes32"], [
            an.soliditySHA3(new Array(t.length).fill("string"), i),
            an.soliditySHA3(n, r)
        ]
    );
}
var xr = {};
Object.defineProperty(xr, "__esModule", {
    value: !0
});
xr.filterFromParam = xr.FilterPolyfill = void 0;
const dr = Mn,
    Pe = B,
    mw = 5 * 60 * 1e3,
    qt = {
        jsonrpc: "2.0",
        id: 0
    };
class yw {
    constructor(e) {
        this.logFilters = /* @__PURE__ */ new Map(), this.blockFilters = /* @__PURE__ */ new Set(), this.pendingTransactionFilters = /* @__PURE__ */ new Set(), this.cursors = /* @__PURE__ */ new Map(), this.timeouts = /* @__PURE__ */ new Map(), this.nextFilterId = (0, dr.IntNumber)(1), this.provider = e;
    }
    async newFilter(e) {
        const r = dh(e),
            n = this.makeFilterId(),
            i = await this.setInitialCursorPosition(n, r.fromBlock);
        return console.log(`Installing new log filter(${n}):`, r, "initial cursor position:", i), this.logFilters.set(n, r), this.setFilterTimeout(n), (0, Pe.hexStringFromIntNumber)(n);
    }
    async newBlockFilter() {
        const e = this.makeFilterId(),
            r = await this.setInitialCursorPosition(e, "latest");
        return console.log(`Installing new block filter (${e}) with initial cursor position:`, r), this.blockFilters.add(e), this.setFilterTimeout(e), (0, Pe.hexStringFromIntNumber)(e);
    }
    async newPendingTransactionFilter() {
        const e = this.makeFilterId(),
            r = await this.setInitialCursorPosition(e, "latest");
        return console.log(`Installing new block filter (${e}) with initial cursor position:`, r), this.pendingTransactionFilters.add(e), this.setFilterTimeout(e), (0, Pe.hexStringFromIntNumber)(e);
    }
    uninstallFilter(e) {
        const r = (0, Pe.intNumberFromHexString)(e);
        return console.log(`Uninstalling filter (${r})`), this.deleteFilter(r), !0;
    }
    getFilterChanges(e) {
        const r = (0, Pe.intNumberFromHexString)(e);
        return this.timeouts.has(r) && this.setFilterTimeout(r), this.logFilters.has(r) ? this.getLogFilterChanges(r) : this.blockFilters.has(r) ? this.getBlockFilterChanges(r) : this.pendingTransactionFilters.has(r) ? this.getPendingTransactionFilterChanges(r) : Promise.resolve($n());
    }
    async getFilterLogs(e) {
        const r = (0, Pe.intNumberFromHexString)(e),
            n = this.logFilters.get(r);
        return n ? this.sendAsyncPromise(Object.assign(Object.assign({}, qt), {
            method: "eth_getLogs",
            params: [Ou(n)]
        })) : $n();
    }
    makeFilterId() {
        return (0, dr.IntNumber)(++this.nextFilterId);
    }
    sendAsyncPromise(e) {
        return new Promise((r, n) => {
            this.provider.sendAsync(e, (i, s) => {
                if (i)
                    return n(i);
                if (Array.isArray(s) || s == null)
                    return n(new Error(`unexpected response received: ${JSON.stringify(s)}`));
                r(s);
            });
        });
    }
    deleteFilter(e) {
        console.log(`Deleting filter (${e})`), this.logFilters.delete(e), this.blockFilters.delete(e), this.pendingTransactionFilters.delete(e), this.cursors.delete(e), this.timeouts.delete(e);
    }
    async getLogFilterChanges(e) {
        const r = this.logFilters.get(e),
            n = this.cursors.get(e);
        if (!n || !r)
            return $n();
        const i = await this.getCurrentBlockHeight(),
            s = r.toBlock === "latest" ? i : r.toBlock;
        if (n > i || n > r.toBlock)
            return Vn();
        console.log(`Fetching logs from ${n} to ${s} for filter ${e}`);
        const o = await this.sendAsyncPromise(Object.assign(Object.assign({}, qt), {
            method: "eth_getLogs",
            params: [
                Ou(Object.assign(Object.assign({}, r), {
                    fromBlock: n,
                    toBlock: s
                }))
            ]
        }));
        if (Array.isArray(o.result)) {
            const a = o.result.map((u) => (0, Pe.intNumberFromHexString)(u.blockNumber || "0x0")),
                c = Math.max(...a);
            if (c && c > n) {
                const u = (0, dr.IntNumber)(c + 1);
                console.log(`Moving cursor position for filter (${e}) from ${n} to ${u}`), this.cursors.set(e, u);
            }
        }
        return o;
    }
    async getBlockFilterChanges(e) {
        const r = this.cursors.get(e);
        if (!r)
            return $n();
        const n = await this.getCurrentBlockHeight();
        if (r > n)
            return Vn();
        console.log(`Fetching blocks from ${r} to ${n} for filter (${e})`);
        const i = (await Promise.all(
                // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
                (0, Pe.range)(r, n + 1).map((o) => this.getBlockHashByNumber((0, dr.IntNumber)(o)))
            )).filter((o) => !!o),
            s = (0, dr.IntNumber)(r + i.length);
        return console.log(`Moving cursor position for filter (${e}) from ${r} to ${s}`), this.cursors.set(e, s), Object.assign(Object.assign({}, qt), {
            result: i
        });
    }
    async getPendingTransactionFilterChanges(e) {
        return Promise.resolve(Vn());
    }
    async setInitialCursorPosition(e, r) {
        const n = await this.getCurrentBlockHeight(),
            i = typeof r == "number" && r > n ? r : n;
        return this.cursors.set(e, i), i;
    }
    setFilterTimeout(e) {
        const r = this.timeouts.get(e);
        r && window.clearTimeout(r);
        const n = window.setTimeout(() => {
            console.log(`Filter (${e}) timed out`), this.deleteFilter(e);
        }, mw);
        this.timeouts.set(e, n);
    }
    async getCurrentBlockHeight() {
        const {
            result: e
        } = await this.sendAsyncPromise(Object.assign(Object.assign({}, qt), {
            method: "eth_blockNumber",
            params: []
        }));
        return (0, Pe.intNumberFromHexString)((0, Pe.ensureHexString)(e));
    }
    async getBlockHashByNumber(e) {
        const r = await this.sendAsyncPromise(Object.assign(Object.assign({}, qt), {
            method: "eth_getBlockByNumber",
            params: [(0, Pe.hexStringFromIntNumber)(e), !1]
        }));
        return r.result && typeof r.result.hash == "string" ? (0, Pe.ensureHexString)(r.result.hash) : null;
    }
}
xr.FilterPolyfill = yw;

function dh(t) {
    return {
        fromBlock: Nu(t.fromBlock),
        toBlock: Nu(t.toBlock),
        addresses: t.address === void 0 ? null : Array.isArray(t.address) ? t.address : [t.address],
        topics: t.topics || []
    };
}
xr.filterFromParam = dh;

function Ou(t) {
    const e = {
        fromBlock: Du(t.fromBlock),
        toBlock: Du(t.toBlock),
        topics: t.topics
    };
    return t.addresses !== null && (e.address = t.addresses), e;
}

function Nu(t) {
    if (t === void 0 || t === "latest" || t === "pending")
        return "latest";
    if (t === "earliest")
        return (0, dr.IntNumber)(0);
    if ((0, Pe.isHexString)(t))
        return (0, Pe.intNumberFromHexString)(t);
    throw new Error(`Invalid block option: ${String(t)}`);
}

function Du(t) {
    return t === "latest" ? t : (0, Pe.hexStringFromIntNumber)(t);
}

function $n() {
    return Object.assign(Object.assign({}, qt), {
        error: {
            code: -32e3,
            message: "filter not found"
        }
    });
}

function Vn() {
    return Object.assign(Object.assign({}, qt), {
        result: []
    });
}
var ph = {};
(function(t) {
    Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.JSONRPCMethod = void 0,
        function(e) {
            e.eth_accounts = "eth_accounts", e.eth_coinbase = "eth_coinbase", e.net_version = "net_version", e.eth_chainId = "eth_chainId", e.eth_uninstallFilter = "eth_uninstallFilter", e.eth_requestAccounts = "eth_requestAccounts", e.eth_sign = "eth_sign", e.eth_ecRecover = "eth_ecRecover", e.personal_sign = "personal_sign", e.personal_ecRecover = "personal_ecRecover", e.eth_signTransaction = "eth_signTransaction", e.eth_sendRawTransaction = "eth_sendRawTransaction", e.eth_sendTransaction = "eth_sendTransaction", e.eth_signTypedData_v1 = "eth_signTypedData_v1", e.eth_signTypedData_v2 = "eth_signTypedData_v2", e.eth_signTypedData_v3 = "eth_signTypedData_v3", e.eth_signTypedData_v4 = "eth_signTypedData_v4", e.eth_signTypedData = "eth_signTypedData", e.cbWallet_arbitrary = "walletlink_arbitrary", e.wallet_addEthereumChain = "wallet_addEthereumChain", e.wallet_switchEthereumChain = "wallet_switchEthereumChain", e.wallet_watchAsset = "wallet_watchAsset", e.eth_subscribe = "eth_subscribe", e.eth_unsubscribe = "eth_unsubscribe", e.eth_newFilter = "eth_newFilter", e.eth_newBlockFilter = "eth_newBlockFilter", e.eth_newPendingTransactionFilter = "eth_newPendingTransactionFilter", e.eth_getFilterChanges = "eth_getFilterChanges", e.eth_getFilterLogs = "eth_getFilterLogs";
        }(t.JSONRPCMethod || (t.JSONRPCMethod = {}));
})(ph);
var Wi = {};
const Lu = (t, e) => function() {
    const r = e.promiseModule,
        n = new Array(arguments.length);
    for (let i = 0; i < arguments.length; i++)
        n[i] = arguments[i];
    return new r((i, s) => {
        e.errorFirst ? n.push(function(o, a) {
            if (e.multiArgs) {
                const c = new Array(arguments.length - 1);
                for (let u = 1; u < arguments.length; u++)
                    c[u - 1] = arguments[u];
                o ? (c.unshift(o), s(c)) : i(c);
            } else
                o ? s(o) : i(a);
        }) : n.push(function(o) {
            if (e.multiArgs) {
                const a = new Array(arguments.length - 1);
                for (let c = 0; c < arguments.length; c++)
                    a[c] = arguments[c];
                i(a);
            } else
                i(o);
        }), t.apply(this, n);
    });
};
var vw = (t, e) => {
        e = Object.assign({
            exclude: [/.+(Sync|Stream)$/],
            errorFirst: !0,
            promiseModule: Promise
        }, e);
        const r = (i) => {
            const s = (o) => typeof o == "string" ? i === o : o.test(i);
            return e.include ? e.include.some(s) : !e.exclude.some(s);
        };
        let n;
        typeof t == "function" ? n = function() {
            return e.excludeMain ? t.apply(this, arguments) : Lu(t, e).apply(this, arguments);
        } : n = Object.create(Object.getPrototypeOf(t));
        for (const i in t) {
            const s = t[i];
            n[i] = typeof s == "function" && r(i) ? Lu(s, e) : s;
        }
        return n;
    },
    ww = Sw,
    Ew = Object.prototype.hasOwnProperty;

function Sw() {
    for (var t = {}, e = 0; e < arguments.length; e++) {
        var r = arguments[e];
        for (var n in r)
            Ew.call(r, n) && (t[n] = r[n]);
    }
    return t;
}
var kw = Rw;

function Rw(t) {
    t = t || {};
    var e = t.max || Number.MAX_SAFE_INTEGER,
        r = typeof t.start < "u" ? t.start : Math.floor(Math.random() * e);
    return function() {
        return r = r % e, r++;
    };
}
const Iw = ww,
    Aw = kw();
var Tw = $;

function $(t) {
    const e = this;
    e.currentProvider = t;
}
$.prototype.getBalance = Nn(2, "eth_getBalance");
$.prototype.getCode = Nn(2, "eth_getCode");
$.prototype.getTransactionCount = Nn(2, "eth_getTransactionCount");
$.prototype.getStorageAt = Nn(3, "eth_getStorageAt");
$.prototype.call = Nn(2, "eth_call");
$.prototype.protocolVersion = Q("eth_protocolVersion");
$.prototype.syncing = Q("eth_syncing");
$.prototype.coinbase = Q("eth_coinbase");
$.prototype.mining = Q("eth_mining");
$.prototype.hashrate = Q("eth_hashrate");
$.prototype.gasPrice = Q("eth_gasPrice");
$.prototype.accounts = Q("eth_accounts");
$.prototype.blockNumber = Q("eth_blockNumber");
$.prototype.getBlockTransactionCountByHash = Q("eth_getBlockTransactionCountByHash");
$.prototype.getBlockTransactionCountByNumber = Q("eth_getBlockTransactionCountByNumber");
$.prototype.getUncleCountByBlockHash = Q("eth_getUncleCountByBlockHash");
$.prototype.getUncleCountByBlockNumber = Q("eth_getUncleCountByBlockNumber");
$.prototype.sign = Q("eth_sign");
$.prototype.sendTransaction = Q("eth_sendTransaction");
$.prototype.sendRawTransaction = Q("eth_sendRawTransaction");
$.prototype.estimateGas = Q("eth_estimateGas");
$.prototype.getBlockByHash = Q("eth_getBlockByHash");
$.prototype.getBlockByNumber = Q("eth_getBlockByNumber");
$.prototype.getTransactionByHash = Q("eth_getTransactionByHash");
$.prototype.getTransactionByBlockHashAndIndex = Q("eth_getTransactionByBlockHashAndIndex");
$.prototype.getTransactionByBlockNumberAndIndex = Q("eth_getTransactionByBlockNumberAndIndex");
$.prototype.getTransactionReceipt = Q("eth_getTransactionReceipt");
$.prototype.getUncleByBlockHashAndIndex = Q("eth_getUncleByBlockHashAndIndex");
$.prototype.getUncleByBlockNumberAndIndex = Q("eth_getUncleByBlockNumberAndIndex");
$.prototype.getCompilers = Q("eth_getCompilers");
$.prototype.compileLLL = Q("eth_compileLLL");
$.prototype.compileSolidity = Q("eth_compileSolidity");
$.prototype.compileSerpent = Q("eth_compileSerpent");
$.prototype.newFilter = Q("eth_newFilter");
$.prototype.newBlockFilter = Q("eth_newBlockFilter");
$.prototype.newPendingTransactionFilter = Q("eth_newPendingTransactionFilter");
$.prototype.uninstallFilter = Q("eth_uninstallFilter");
$.prototype.getFilterChanges = Q("eth_getFilterChanges");
$.prototype.getFilterLogs = Q("eth_getFilterLogs");
$.prototype.getLogs = Q("eth_getLogs");
$.prototype.getWork = Q("eth_getWork");
$.prototype.submitWork = Q("eth_submitWork");
$.prototype.submitHashrate = Q("eth_submitHashrate");
$.prototype.sendAsync = function(t, e) {
    this.currentProvider.sendAsync(Cw(t), function(n, i) {
        if (!n && i.error && (n = new Error("EthQuery - RPC Error - " + i.error.message)), n)
            return e(n);
        e(null, i.result);
    });
};

function Q(t) {
    return function() {
        const e = this;
        var r = [].slice.call(arguments),
            n = r.pop();
        e.sendAsync({
            method: t,
            params: r
        }, n);
    };
}

function Nn(t, e) {
    return function() {
        const r = this;
        var n = [].slice.call(arguments),
            i = n.pop();
        n.length < t && n.push("latest"), r.sendAsync({
            method: e,
            params: n
        }, i);
    };
}

function Cw(t) {
    return Iw({
        // defaults
        id: Aw(),
        jsonrpc: "2.0",
        params: []
        // user-specified
    }, t);
}
var _h = {},
    bh = {},
    Mw = Sf,
    Gi = function() {
        return Mw() && !!Symbol.toStringTag;
    },
    xw = Gi(),
    Ow = ji,
    Ta = Ow("Object.prototype.toString"),
    $i = function(e) {
        return xw && e && typeof e == "object" && Symbol.toStringTag in e ? !1 : Ta(e) === "[object Arguments]";
    },
    gh = function(e) {
        return $i(e) ? !0 : e !== null && typeof e == "object" && typeof e.length == "number" && e.length >= 0 && Ta(e) !== "[object Array]" && Ta(e.callee) === "[object Function]";
    },
    Nw = function() {
        return $i(arguments);
    }();
$i.isLegacyArguments = gh;
var Dw = Nw ? $i : gh,
    Lw = Object.prototype.toString,
    Pw = Function.prototype.toString,
    jw = /^\s*(?:function)?\*/,
    mh = Gi(),
    Fo = Object.getPrototypeOf,
    Bw = function() {
        if (!mh)
            return !1;
        try {
            return Function("return function*() {}")();
        } catch {}
    },
    Ho, Uw = function(e) {
        if (typeof e != "function")
            return !1;
        if (jw.test(Pw.call(e)))
            return !0;
        if (!mh) {
            var r = Lw.call(e);
            return r === "[object GeneratorFunction]";
        }
        if (!Fo)
            return !1;
        if (typeof Ho > "u") {
            var n = Bw();
            Ho = n ? Fo(n) : !1;
        }
        return Fo(e) === Ho;
    },
    yh = Function.prototype.toString,
    _r = typeof Reflect == "object" && Reflect !== null && Reflect.apply,
    Ca, Xn;
if (typeof _r == "function" && typeof Object.defineProperty == "function")
    try {
        Ca = Object.defineProperty({}, "length", {
            get: function() {
                throw Xn;
            }
        }), Xn = {}, _r(function() {
            throw 42;
        }, null, Ca);
    } catch (t) {
        t !== Xn && (_r = null);
    }
else
    _r = null;
var Fw = /^\s*class\b/,
    Ma = function(e) {
        try {
            var r = yh.call(e);
            return Fw.test(r);
        } catch {
            return !1;
        }
    },
    Wo = function(e) {
        try {
            return Ma(e) ? !1 : (yh.call(e), !0);
        } catch {
            return !1;
        }
    },
    ei = Object.prototype.toString,
    Hw = "[object Object]",
    Ww = "[object Function]",
    Gw = "[object GeneratorFunction]",
    $w = "[object HTMLAllCollection]",
    Vw = "[object HTML document.all class]",
    zw = "[object HTMLCollection]",
    Zw = typeof Symbol == "function" && !!Symbol.toStringTag,
    qw = !(0 in [, ]),
    xa = function() {
        return !1;
    };
if (typeof document == "object") {
    var Yw = document.all;
    ei.call(Yw) === ei.call(document.all) && (xa = function(e) {
        if ((qw || !e) && (typeof e > "u" || typeof e == "object"))
            try {
                var r = ei.call(e);
                return (r === $w || r === Vw || r === zw || r === Hw) && e("") == null;
            } catch {}
        return !1;
    });
}
var Jw = _r ? function(e) {
        if (xa(e))
            return !0;
        if (!e || typeof e != "function" && typeof e != "object")
            return !1;
        try {
            _r(e, null, Ca);
        } catch (r) {
            if (r !== Xn)
                return !1;
        }
        return !Ma(e) && Wo(e);
    } : function(e) {
        if (xa(e))
            return !0;
        if (!e || typeof e != "function" && typeof e != "object")
            return !1;
        if (Zw)
            return Wo(e);
        if (Ma(e))
            return !1;
        var r = ei.call(e);
        return r !== Ww && r !== Gw && !/^\[object HTML/.test(r) ? !1 : Wo(e);
    },
    Qw = Jw,
    Kw = Object.prototype.toString,
    vh = Object.prototype.hasOwnProperty,
    Xw = function(e, r, n) {
        for (var i = 0, s = e.length; i < s; i++)
            vh.call(e, i) && (n == null ? r(e[i], i, e) : r.call(n, e[i], i, e));
    },
    e2 = function(e, r, n) {
        for (var i = 0, s = e.length; i < s; i++)
            n == null ? r(e.charAt(i), i, e) : r.call(n, e.charAt(i), i, e);
    },
    t2 = function(e, r, n) {
        for (var i in e)
            vh.call(e, i) && (n == null ? r(e[i], i, e) : r.call(n, e[i], i, e));
    },
    r2 = function(e, r, n) {
        if (!Qw(r))
            throw new TypeError("iterator must be a function");
        var i;
        arguments.length >= 3 && (i = n), Kw.call(e) === "[object Array]" ? Xw(e, r, i) : typeof e == "string" ? e2(e, r, i) : t2(e, r, i);
    },
    wh = r2,
    Go = [
        "BigInt64Array",
        "BigUint64Array",
        "Float32Array",
        "Float64Array",
        "Int16Array",
        "Int32Array",
        "Int8Array",
        "Uint16Array",
        "Uint32Array",
        "Uint8Array",
        "Uint8ClampedArray"
    ],
    n2 = globalThis,
    Eh = function() {
        for (var e = [], r = 0; r < Go.length; r++)
            typeof n2[Go[r]] == "function" && (e[e.length] = Go[r]);
        return e;
    },
    i2 = Pi,
    ti = i2("%Object.getOwnPropertyDescriptor%", !0);
if (ti)
    try {
        ti([], "length");
    } catch {
        ti = null;
    }
var Sh = ti,
    kh = wh,
    s2 = Eh,
    oc = ji,
    o2 = oc("Object.prototype.toString"),
    Rh = Gi(),
    ri = Sh,
    a2 = globalThis,
    Ih = s2(),
    c2 = oc("Array.prototype.indexOf", !0) || function(e, r) {
        for (var n = 0; n < e.length; n += 1)
            if (e[n] === r)
                return n;
        return -1;
    },
    u2 = oc("String.prototype.slice"),
    Ah = {},
    $o = Object.getPrototypeOf;
Rh && ri && $o && kh(Ih, function(t) {
    var e = new a2[t]();
    if (Symbol.toStringTag in e) {
        var r = $o(e),
            n = ri(r, Symbol.toStringTag);
        if (!n) {
            var i = $o(r);
            n = ri(i, Symbol.toStringTag);
        }
        Ah[t] = n.get;
    }
});
var l2 = function(e) {
        var r = !1;
        return kh(Ah, function(n, i) {
            if (!r)
                try {
                    r = n.call(e) === i;
                } catch {}
        }), r;
    },
    Th = function(e) {
        if (!e || typeof e != "object")
            return !1;
        if (!Rh || !(Symbol.toStringTag in e)) {
            var r = u2(o2(e), 8, -1);
            return c2(Ih, r) > -1;
        }
        return ri ? l2(e) : !1;
    },
    Ch = wh,
    f2 = Eh,
    Mh = ji,
    Vo = Sh,
    h2 = Mh("Object.prototype.toString"),
    xh = Gi(),
    Pu = globalThis,
    d2 = f2(),
    p2 = Mh("String.prototype.slice"),
    Oh = {},
    zo = Object.getPrototypeOf;
xh && Vo && zo && Ch(d2, function(t) {
    if (typeof Pu[t] == "function") {
        var e = new Pu[t]();
        if (Symbol.toStringTag in e) {
            var r = zo(e),
                n = Vo(r, Symbol.toStringTag);
            if (!n) {
                var i = zo(r);
                n = Vo(i, Symbol.toStringTag);
            }
            Oh[t] = n.get;
        }
    }
});
var _2 = function(e) {
        var r = !1;
        return Ch(Oh, function(n, i) {
            if (!r)
                try {
                    var s = n.call(e);
                    s === i && (r = s);
                } catch {}
        }), r;
    },
    b2 = Th,
    g2 = function(e) {
        return b2(e) ? !xh || !(Symbol.toStringTag in e) ? p2(h2(e), 8, -1) : _2(e) : !1;
    };
(function(t) {
    var e = Dw,
        r = Uw,
        n = g2,
        i = Th;

    function s(T) {
        return T.call.bind(T);
    }
    var o = typeof BigInt < "u",
        a = typeof Symbol < "u",
        c = s(Object.prototype.toString),
        u = s(Number.prototype.valueOf),
        l = s(String.prototype.valueOf),
        b = s(Boolean.prototype.valueOf);
    if (o)
        var f = s(BigInt.prototype.valueOf);
    if (a)
        var p = s(Symbol.prototype.valueOf);

    function g(T, Gt) {
        if (typeof T != "object")
            return !1;
        try {
            return Gt(T), !0;
        } catch {
            return !1;
        }
    }
    t.isArgumentsObject = e, t.isGeneratorFunction = r, t.isTypedArray = i;

    function S(T) {
        return typeof Promise < "u" && T instanceof Promise || T !== null && typeof T == "object" && typeof T.then == "function" && typeof T.catch == "function";
    }
    t.isPromise = S;

    function I(T) {
        return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? ArrayBuffer.isView(T) : i(T) || R(T);
    }
    t.isArrayBufferView = I;

    function _(T) {
        return n(T) === "Uint8Array";
    }
    t.isUint8Array = _;

    function m(T) {
        return n(T) === "Uint8ClampedArray";
    }
    t.isUint8ClampedArray = m;

    function w(T) {
        return n(T) === "Uint16Array";
    }
    t.isUint16Array = w;

    function A(T) {
        return n(T) === "Uint32Array";
    }
    t.isUint32Array = A;

    function N(T) {
        return n(T) === "Int8Array";
    }
    t.isInt8Array = N;

    function U(T) {
        return n(T) === "Int16Array";
    }
    t.isInt16Array = U;

    function F(T) {
        return n(T) === "Int32Array";
    }
    t.isInt32Array = F;

    function P(T) {
        return n(T) === "Float32Array";
    }
    t.isFloat32Array = P;

    function L(T) {
        return n(T) === "Float64Array";
    }
    t.isFloat64Array = L;

    function ie(T) {
        return n(T) === "BigInt64Array";
    }
    t.isBigInt64Array = ie;

    function ee(T) {
        return n(T) === "BigUint64Array";
    }
    t.isBigUint64Array = ee;

    function z(T) {
        return c(T) === "[object Map]";
    }
    z.working = typeof Map < "u" && z( /* @__PURE__ */ new Map());

    function q(T) {
        return typeof Map > "u" ? !1 : z.working ? z(T) : T instanceof Map;
    }
    t.isMap = q;

    function K(T) {
        return c(T) === "[object Set]";
    }
    K.working = typeof Set < "u" && K( /* @__PURE__ */ new Set());

    function ne(T) {
        return typeof Set > "u" ? !1 : K.working ? K(T) : T instanceof Set;
    }
    t.isSet = ne;

    function he(T) {
        return c(T) === "[object WeakMap]";
    }
    he.working = typeof WeakMap < "u" && he( /* @__PURE__ */ new WeakMap());

    function we(T) {
        return typeof WeakMap > "u" ? !1 : he.working ? he(T) : T instanceof WeakMap;
    }
    t.isWeakMap = we;

    function ye(T) {
        return c(T) === "[object WeakSet]";
    }
    ye.working = typeof WeakSet < "u" && ye( /* @__PURE__ */ new WeakSet());

    function ce(T) {
        return ye(T);
    }
    t.isWeakSet = ce;

    function Ce(T) {
        return c(T) === "[object ArrayBuffer]";
    }
    Ce.working = typeof ArrayBuffer < "u" && Ce(new ArrayBuffer());

    function Ue(T) {
        return typeof ArrayBuffer > "u" ? !1 : Ce.working ? Ce(T) : T instanceof ArrayBuffer;
    }
    t.isArrayBuffer = Ue;

    function E(T) {
        return c(T) === "[object DataView]";
    }
    E.working = typeof ArrayBuffer < "u" && typeof DataView < "u" && E(new DataView(new ArrayBuffer(1), 0, 1));

    function R(T) {
        return typeof DataView > "u" ? !1 : E.working ? E(T) : T instanceof DataView;
    }
    t.isDataView = R;
    var x = typeof SharedArrayBuffer < "u" ? SharedArrayBuffer : void 0;

    function W(T) {
        return c(T) === "[object SharedArrayBuffer]";
    }

    function y(T) {
        return typeof x > "u" ? !1 : (typeof W.working > "u" && (W.working = W(new x())), W.working ? W(T) : T instanceof x);
    }
    t.isSharedArrayBuffer = y;

    function v(T) {
        return c(T) === "[object AsyncFunction]";
    }
    t.isAsyncFunction = v;

    function k(T) {
        return c(T) === "[object Map Iterator]";
    }
    t.isMapIterator = k;

    function O(T) {
        return c(T) === "[object Set Iterator]";
    }
    t.isSetIterator = O;

    function j(T) {
        return c(T) === "[object Generator]";
    }
    t.isGeneratorObject = j;

    function h(T) {
        return c(T) === "[object WebAssembly.Module]";
    }
    t.isWebAssemblyCompiledModule = h;

    function d(T) {
        return g(T, u);
    }
    t.isNumberObject = d;

    function C(T) {
        return g(T, l);
    }
    t.isStringObject = C;

    function D(T) {
        return g(T, b);
    }
    t.isBooleanObject = D;

    function oe(T) {
        return o && g(T, f);
    }
    t.isBigIntObject = oe;

    function Z(T) {
        return a && g(T, p);
    }
    t.isSymbolObject = Z;

    function se(T) {
        return d(T) || C(T) || D(T) || oe(T) || Z(T);
    }
    t.isBoxedPrimitive = se;

    function et(T) {
        return typeof Uint8Array < "u" && (Ue(T) || y(T));
    }
    t.isAnyArrayBuffer = et, ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function(T) {
        Object.defineProperty(t, T, {
            enumerable: !1,
            value: function() {
                throw new Error(T + " is not supported in userland");
            }
        });
    });
})(bh);
var m2 = function(e) {
    return e && typeof e == "object" && typeof e.copy == "function" && typeof e.fill == "function" && typeof e.readUInt8 == "function";
};
(function(t) {
    var e = Object.getOwnPropertyDescriptors || function(R) {
            for (var x = Object.keys(R), W = {}, y = 0; y < x.length; y++)
                W[x[y]] = Object.getOwnPropertyDescriptor(R, x[y]);
            return W;
        },
        r = /%[sdj%]/g;
    t.format = function(E) {
        if (!N(E)) {
            for (var R = [], x = 0; x < arguments.length; x++)
                R.push(o(arguments[x]));
            return R.join(" ");
        }
        for (var x = 1, W = arguments, y = W.length, v = String(E).replace(r, function(O) {
                if (O === "%%")
                    return "%";
                if (x >= y)
                    return O;
                switch (O) {
                    case "%s":
                        return String(W[x++]);
                    case "%d":
                        return Number(W[x++]);
                    case "%j":
                        try {
                            return JSON.stringify(W[x++]);
                        } catch {
                            return "[Circular]";
                        }
                    default:
                        return O;
                }
            }), k = W[x]; x < y; k = W[++x])
            m(k) || !L(k) ? v += " " + k : v += " " + o(k);
        return v;
    }, t.deprecate = function(E, R) {
        if (typeof process < "u" && process.noDeprecation === !0)
            return E;
        if (typeof process > "u")
            return function() {
                return t.deprecate(E, R).apply(this, arguments);
            };
        var x = !1;

        function W() {
            if (!x) {
                if (process.throwDeprecation)
                    throw new Error(R);
                process.traceDeprecation ? console.trace(R) : console.error(R), x = !0;
            }
            return E.apply(this, arguments);
        }
        return W;
    };
    var n = {},
        i = /^$/;
    if ({
            GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_fe7b8e4d-7ab2-4999-9daf-0e81836f4860",
            npm_package_dependencies_connectkit: "^1.1.3",
            DOTNET_NOLOGO: "1",
            STATS_TRP: "true",
            DEPLOYMENT_BASEPATH: "/opt/runner",
            ACTIONS_RUNTIME_TOKEN: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImVCWl9jbjNzWFlBZDBjaDRUSEJLSElnT3dPRSJ9.eyJuYW1laWQiOiJkZGRkZGRkZC1kZGRkLWRkZGQtZGRkZC1kZGRkZGRkZGRkZGQiLCJzY3AiOiJBY3Rpb25zLkdlbmVyaWNSZWFkOjAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCBBY3Rpb25zLlVwbG9hZEFydGlmYWN0czowMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDAvMTpCdWlsZC9CdWlsZC84MCBMb2NhdGlvblNlcnZpY2UuQ29ubmVjdCBSZWFkQW5kVXBkYXRlQnVpbGRCeVVyaTowMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDAvMTpCdWlsZC9CdWlsZC84MCIsIklkZW50aXR5VHlwZUNsYWltIjoiU3lzdGVtOlNlcnZpY2VJZGVudGl0eSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3NpZCI6IkRERERERERELUREREQtRERERC1ERERELURERERERERERERERCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcHJpbWFyeXNpZCI6ImRkZGRkZGRkLWRkZGQtZGRkZC1kZGRkLWRkZGRkZGRkZGRkZCIsImF1aSI6IjAzYjRjYzhkLWUyM2YtNDk4ZC1hZmNhLTRmM2JhN2Q3ZDRmYiIsInNpZCI6IjMxMzg5N2U2LTc0NDgtNGM0NS04NmRiLTU4YmUyZjE1YzhlMSIsImFjIjoiW3tcIlNjb3BlXCI6XCJyZWZzL2hlYWRzL21haW5cIixcIlBlcm1pc3Npb25cIjozfV0iLCJhY3NsIjoiMTAiLCJvcmNoaWQiOiI2NzllNzc3ZC0xN2I4LTQwMTctYWQzZi1jODBhZGZhYWZjODQuYnVpbGQuX19kZWZhdWx0IiwiaXNzIjoidnN0b2tlbi5hY3Rpb25zLmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImF1ZCI6InZzdG9rZW4uYWN0aW9ucy5naXRodWJ1c2VyY29udGVudC5jb218dnNvOmQ1MjEwMzViLTg5N2MtNDFhOC1iZDY1LTlmZmQ4MjU1MjA2NCIsIm5iZiI6MTY4MTU2MTU1MywiZXhwIjoxNjgxNTg0MzUzfQ.X2OnFU4nRcJelhK-iho7qKeS5jXly1UnDITUcnO1wIyII-M6TcEfWlv7Qvrm09H9XwXdohYe4MJuYr1egGIGjlwHr9zAwvTiO0A-iN5oJ9NvJpuECr6g7DAD7ou8t34b6jnJd8-GKHBYX4AoDv27on_OtcPANAqogimELiZV_RCrPuQQZDjRzXjoEvYD6TCqoakVAJHzkKKq7SL9Uz4dVIYnOp5U0wQMoUhMXW4lfoNFCPMFHoU2dDPKghg5AGJYtELsxe28q980eOBEEEq5qTludtzq21aIX6B2DQz2x8KX-GsqwsGy75dbN8DqtRWwUclLuso2q_yxrfTzMEL6vg",
            USER: "runner",
            ACTIONS_CACHE_URL: "https://artifactcache.actions.githubusercontent.com/rfPb8qMRoMJgKcbWj636CUjHyn9ARBsXcNMyUbs53lB3mcqrgu/",
            npm_config_version_commit_hooks: "true",
            npm_config_user_agent: "yarn/1.22.19 npm/? node/v18.15.0 linux x64",
            CI: "true",
            INPUT_CMD: "build --filter=embed",
            npm_package_devDependencies_turbo: "latest",
            npm_config_bin_links: "true",
            npm_config_wrap_output: "",
            PIPX_HOME: "/opt/pipx",
            GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_fe7b8e4d-7ab2-4999-9daf-0e81836f4860",
            npm_node_execpath: "/opt/hostedtoolcache/node/18.15.0/x64/bin/node",
            npm_config_init_version: "1.0.0",
            npm_package_devDependencies_vite: "^4.0.0",
            JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64",
            npm_package_packageManager: "yarn@1.22.17",
            npm_package_devDependencies__types_pubsub_js: "^1.8.3",
            npm_package_dependencies_wagmi: "^0.10.11",
            HOME: "/home/runner",
            GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json",
            RUNNER_TEMP: "/home/runner/work/_temp",
            PIPX_BIN_DIR: "/opt/pipx_bin",
            JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64",
            GITHUB_REPOSITORY_OWNER: "james-hunt",
            npm_package_engines_node: ">=14.0.0",
            npm_config_init_license: "MIT",
            npm_package_dependencies_framer_motion: "^8.5.2",
            ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653",
            STATS_RDCL: "true",
            GRADLE_HOME: "/usr/share/gradle-8.0.2",
            GITHUB_RETENTION_DAYS: "90",
            YARN_WRAP_OUTPUT: "false",
            npm_config_version_tag_prefix: "v",
            POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22",
            AZURE_EXTENSION_DIR: "/opt/az/azcliextensions",
            GITHUB_REPOSITORY_OWNER_ID: "7122572",
            GITHUB_HEAD_REF: "",
            SYSTEMD_EXEC_PID: "663",
            npm_package_dependencies__checkout_hooks: "*",
            GITHUB_GRAPHQL_URL: "https://api.github.com/graphql",
            npm_package_description: "This is an official Yarn v1 starter turborepo.",
            npm_package_devDependencies_typescript: "^4.9.3",
            npm_package_devDependencies_tailwindcss: "^3.2.4",
            NVM_DIR: "/home/runner/.nvm",
            GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.3/x64",
            npm_package_readmeFilename: "README.md",
            npm_package_devDependencies__types_react_dom: "^18.0.9",
            DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1",
            JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64",
            ImageVersion: "20230409.1",
            INPUT_DIR: "",
            npm_package_devDependencies_prettier: "latest",
            npm_package_scripts_dev: "vite",
            SWIFT_PATH: "/usr/share/swift/usr/bin",
            GITHUB_API_URL: "https://api.github.com",
            RUNNER_OS: "Linux",
            ACTIONS_RUNTIME_URL: "https://pipelines.actions.githubusercontent.com/rfPb8qMRoMJgKcbWj636CUjHyn9ARBsXcNMyUbs53lB3mcqrgu/",
            npm_package_devDependencies__vitejs_plugin_react: "^3.0.0",
            npm_package_dependencies_zustand: "^4.3.2",
            npm_package_dependencies__checkout_chains: "*",
            npm_package_type: "module",
            CHROMEWEBDRIVER: "/usr/local/share/chrome_driver",
            JOURNAL_STREAM: "8:17176",
            RUNNER_USER: "runner",
            GITHUB_WORKFLOW: "Node.js CI",
            npm_package_private: "true",
            npm_package_devDependencies_autoprefixer: "^10.4.13",
            npm_package_dependencies_pubsub_js: "^1.9.4",
            npm_package_scripts_lint: "turbo run lint",
            npm_config_registry: "https://registry.yarnpkg.com",
            GITHUB_RUN_ID: "4707812406",
            npm_package_workspaces_0: "apps/*",
            BOOTSTRAP_HASKELL_NONINTERACTIVE: "1",
            ImageOS: "ubuntu22",
            GITHUB_BASE_REF: "",
            GITHUB_REF_TYPE: "branch",
            GITHUB_WORKFLOW_SHA: "b771926efc07b2fd0e4eb6109657764fba90077d",
            npm_package_workspaces_1: "packages/*",
            npm_config_ignore_scripts: "",
            GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64",
            PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG",
            GITHUB_WORKFLOW_REF: "james-hunt/checkout/.github/workflows/workflow.yml@refs/heads/main",
            GITHUB_ACTION_REPOSITORY: "borales/actions-yarn",
            npm_package_devDependencies__types_mixpanel_browser: "^2.38.1",
            npm_package_dependencies_axios: "^1.2.3",
            PATH: "/tmp/yarn--1681562288453-0.8127317389101916:/home/runner/work/checkout/checkout/apps/checkout/node_modules/.bin:/home/runner/.config/yarn/link/node_modules/.bin:/home/runner/work/checkout/checkout/node_modules/.bin:/opt/hostedtoolcache/node/18.15.0/x64/libexec/lib/node_modules/npm/bin/node-gyp-bin:/opt/hostedtoolcache/node/18.15.0/x64/lib/node_modules/npm/bin/node-gyp-bin:/opt/hostedtoolcache/node/18.15.0/x64/bin/node_modules/npm/bin/node-gyp-bin:/tmp/yarn--1681562258651-0.5115078609879176:/home/runner/work/checkout/checkout/node_modules/.bin:/home/runner/.config/yarn/link/node_modules/.bin:/home/runner/work/checkout/checkout/node_modules/.bin:/opt/hostedtoolcache/node/18.15.0/x64/libexec/lib/node_modules/npm/bin/node-gyp-bin:/opt/hostedtoolcache/node/18.15.0/x64/lib/node_modules/npm/bin/node-gyp-bin:/opt/hostedtoolcache/node/18.15.0/x64/bin/node_modules/npm/bin/node-gyp-bin:/opt/hostedtoolcache/node/18.15.0/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin",
            NODE: "/opt/hostedtoolcache/node/18.15.0/x64/bin/node",
            RUNNER_TRACKING_ID: "github_efb7f5e0-3768-4a90-a411-3b62d29086e9",
            DOTNET_MULTILEVEL_LOOKUP: "0",
            INVOCATION_ID: "9beb838f1f5d4336a350ec5c91bc5537",
            GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.8/x64",
            ANT_HOME: "/usr/share/ant",
            RUNNER_TOOL_CACHE: "/opt/hostedtoolcache",
            npm_package_name: "@checkout/embed",
            TURBO_HASH: "4b6704bf32834fe0",
            AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache",
            XDG_RUNTIME_DIR: "/run/user/1001",
            GITHUB_RUN_NUMBER: "81",
            GITHUB_TRIGGERING_ACTOR: "james-hunt",
            GITHUB_ACTION: "__borales_actions-yarn_2",
            RUNNER_ARCH: "X64",
            npm_package_dependencies__mantine_hooks: "^5.10.1",
            VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg",
            LANG: "C.UTF-8",
            npm_package_dependencies_react_dom: "^18.2.0",
            npm_package_dependencies__checkout_utils: "*",
            XDG_CONFIG_HOME: "/home/runner/.config",
            CONDA: "/usr/share/miniconda",
            GITHUB_REPOSITORY: "james-hunt/checkout",
            GITHUB_REF_NAME: "main",
            RUNNER_NAME: "GitHub Actions 2",
            npm_lifecycle_script: "tsc && vite build",
            ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653",
            DEBIAN_FRONTEND: "noninteractive",
            GITHUB_ACTION_REF: "v4",
            npm_config_version_git_message: "v%s",
            GITHUB_ACTIONS: "true",
            STATS_NM: "true",
            GITHUB_REPOSITORY_ID: "602396324",
            npm_lifecycle_event: "build",
            npm_package_version: "0.0.0",
            npm_package_devDependencies__types_react: "^18.0.26",
            GITHUB_REF_PROTECTED: "false",
            npm_config_argv: '{"remain":[],"cooked":["run","build"],"original":["build","--filter=embed"]}',
            npm_package_scripts_build: "tsc && vite build",
            RUNNER_PERFLOG: "/home/runner/perflog",
            ACCEPT_EULA: "Y",
            GITHUB_JOB: "build",
            GITHUB_WORKSPACE: "/home/runner/work/checkout/checkout",
            npm_package_devDependencies_eslint_config_custom: "*",
            GITHUB_SHA: "b771926efc07b2fd0e4eb6109657764fba90077d",
            GITHUB_RUN_ATTEMPT: "1",
            npm_config_version_git_tag: "true",
            npm_config_version_git_sign: "",
            npm_package_dependencies__tanstack_react_query: "^4.14.5",
            npm_package_dependencies__checkout_wagmi_provider: "*",
            ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk",
            GITHUB_REF: "refs/heads/main",
            GITHUB_ACTOR: "james-hunt",
            npm_config_strict_ssl: "true",
            npm_package_dependencies_mixpanel_browser: "^2.46.0",
            LEIN_HOME: "/usr/local/lib/lein",
            npm_package_scripts_format: 'prettier --write "**/*.{ts,tsx,md}"',
            npm_package_dependencies__floating_ui_react: "^0.18.1",
            JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64",
            GITHUB_ACTOR_ID: "7122572",
            GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_fe7b8e4d-7ab2-4999-9daf-0e81836f4860",
            RUNNER_WORKSPACE: "/home/runner/work/checkout",
            npm_execpath: "/usr/local/lib/node_modules/yarn/bin/yarn.js",
            PWD: "/home/runner/work/checkout/checkout/apps/checkout",
            GECKOWEBDRIVER: "/usr/local/share/gecko_driver",
            HOMEBREW_NO_AUTO_UPDATE: "1",
            HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650",
            STATS_TIS: "mining",
            GHCUP_INSTALL_BASE_PREFIX: "/usr/local",
            ANDROID_HOME: "/usr/local/lib/android/sdk",
            LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar",
            GITHUB_EVENT_NAME: "push",
            GITHUB_SERVER_URL: "https://github.com",
            GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_fe7b8e4d-7ab2-4999-9daf-0e81836f4860",
            STATS_EXT: "true",
            EDGEWEBDRIVER: "/usr/local/share/edge_driver",
            npm_config_save_prefix: "^",
            npm_config_ignore_optional: "",
            npm_package_devDependencies_postcss: "^8.4.21",
            ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653",
            SGX_AESM_ADDR: "1",
            CHROME_BIN: "/usr/bin/google-chrome",
            npm_package_dependencies__checkout_ui: "*",
            npm_package_scripts_preview: "vite preview",
            SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar",
            STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.137+2/provjobd.data",
            INIT_CWD: "/home/runner/work/checkout/checkout",
            ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653",
            GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_fe7b8e4d-7ab2-4999-9daf-0e81836f4860",
            npm_package_dependencies_react: "^18.2.0",
            NODE_ENV: "production"
        }.NODE_DEBUG) {
        var s = {
            GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_fe7b8e4d-7ab2-4999-9daf-0e81836f4860",
            npm_package_dependencies_connectkit: "^1.1.3",
            DOTNET_NOLOGO: "1",
            STATS_TRP: "true",
            DEPLOYMENT_BASEPATH: "/opt/runner",
            ACTIONS_RUNTIME_TOKEN: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImVCWl9jbjNzWFlBZDBjaDRUSEJLSElnT3dPRSJ9.eyJuYW1laWQiOiJkZGRkZGRkZC1kZGRkLWRkZGQtZGRkZC1kZGRkZGRkZGRkZGQiLCJzY3AiOiJBY3Rpb25zLkdlbmVyaWNSZWFkOjAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCBBY3Rpb25zLlVwbG9hZEFydGlmYWN0czowMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDAvMTpCdWlsZC9CdWlsZC84MCBMb2NhdGlvblNlcnZpY2UuQ29ubmVjdCBSZWFkQW5kVXBkYXRlQnVpbGRCeVVyaTowMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDAvMTpCdWlsZC9CdWlsZC84MCIsIklkZW50aXR5VHlwZUNsYWltIjoiU3lzdGVtOlNlcnZpY2VJZGVudGl0eSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3NpZCI6IkRERERERERELUREREQtRERERC1ERERELURERERERERERERERCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcHJpbWFyeXNpZCI6ImRkZGRkZGRkLWRkZGQtZGRkZC1kZGRkLWRkZGRkZGRkZGRkZCIsImF1aSI6IjAzYjRjYzhkLWUyM2YtNDk4ZC1hZmNhLTRmM2JhN2Q3ZDRmYiIsInNpZCI6IjMxMzg5N2U2LTc0NDgtNGM0NS04NmRiLTU4YmUyZjE1YzhlMSIsImFjIjoiW3tcIlNjb3BlXCI6XCJyZWZzL2hlYWRzL21haW5cIixcIlBlcm1pc3Npb25cIjozfV0iLCJhY3NsIjoiMTAiLCJvcmNoaWQiOiI2NzllNzc3ZC0xN2I4LTQwMTctYWQzZi1jODBhZGZhYWZjODQuYnVpbGQuX19kZWZhdWx0IiwiaXNzIjoidnN0b2tlbi5hY3Rpb25zLmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImF1ZCI6InZzdG9rZW4uYWN0aW9ucy5naXRodWJ1c2VyY29udGVudC5jb218dnNvOmQ1MjEwMzViLTg5N2MtNDFhOC1iZDY1LTlmZmQ4MjU1MjA2NCIsIm5iZiI6MTY4MTU2MTU1MywiZXhwIjoxNjgxNTg0MzUzfQ.X2OnFU4nRcJelhK-iho7qKeS5jXly1UnDITUcnO1wIyII-M6TcEfWlv7Qvrm09H9XwXdohYe4MJuYr1egGIGjlwHr9zAwvTiO0A-iN5oJ9NvJpuECr6g7DAD7ou8t34b6jnJd8-GKHBYX4AoDv27on_OtcPANAqogimELiZV_RCrPuQQZDjRzXjoEvYD6TCqoakVAJHzkKKq7SL9Uz4dVIYnOp5U0wQMoUhMXW4lfoNFCPMFHoU2dDPKghg5AGJYtELsxe28q980eOBEEEq5qTludtzq21aIX6B2DQz2x8KX-GsqwsGy75dbN8DqtRWwUclLuso2q_yxrfTzMEL6vg",
            USER: "runner",
            ACTIONS_CACHE_URL: "https://artifactcache.actions.githubusercontent.com/rfPb8qMRoMJgKcbWj636CUjHyn9ARBsXcNMyUbs53lB3mcqrgu/",
            npm_config_version_commit_hooks: "true",
            npm_config_user_agent: "yarn/1.22.19 npm/? node/v18.15.0 linux x64",
            CI: "true",
            INPUT_CMD: "build --filter=embed",
            npm_package_devDependencies_turbo: "latest",
            npm_config_bin_links: "true",
            npm_config_wrap_output: "",
            PIPX_HOME: "/opt/pipx",
            GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_fe7b8e4d-7ab2-4999-9daf-0e81836f4860",
            npm_node_execpath: "/opt/hostedtoolcache/node/18.15.0/x64/bin/node",
            npm_config_init_version: "1.0.0",
            npm_package_devDependencies_vite: "^4.0.0",
            JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64",
            npm_package_packageManager: "yarn@1.22.17",
            npm_package_devDependencies__types_pubsub_js: "^1.8.3",
            npm_package_dependencies_wagmi: "^0.10.11",
            HOME: "/home/runner",
            GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json",
            RUNNER_TEMP: "/home/runner/work/_temp",
            PIPX_BIN_DIR: "/opt/pipx_bin",
            JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64",
            GITHUB_REPOSITORY_OWNER: "james-hunt",
            npm_package_engines_node: ">=14.0.0",
            npm_config_init_license: "MIT",
            npm_package_dependencies_framer_motion: "^8.5.2",
            ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653",
            STATS_RDCL: "true",
            GRADLE_HOME: "/usr/share/gradle-8.0.2",
            GITHUB_RETENTION_DAYS: "90",
            YARN_WRAP_OUTPUT: "false",
            npm_config_version_tag_prefix: "v",
            POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22",
            AZURE_EXTENSION_DIR: "/opt/az/azcliextensions",
            GITHUB_REPOSITORY_OWNER_ID: "7122572",
            GITHUB_HEAD_REF: "",
            SYSTEMD_EXEC_PID: "663",
            npm_package_dependencies__checkout_hooks: "*",
            GITHUB_GRAPHQL_URL: "https://api.github.com/graphql",
            npm_package_description: "This is an official Yarn v1 starter turborepo.",
            npm_package_devDependencies_typescript: "^4.9.3",
            npm_package_devDependencies_tailwindcss: "^3.2.4",
            NVM_DIR: "/home/runner/.nvm",
            GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.3/x64",
            npm_package_readmeFilename: "README.md",
            npm_package_devDependencies__types_react_dom: "^18.0.9",
            DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1",
            JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64",
            ImageVersion: "20230409.1",
            INPUT_DIR: "",
            npm_package_devDependencies_prettier: "latest",
            npm_package_scripts_dev: "vite",
            SWIFT_PATH: "/usr/share/swift/usr/bin",
            GITHUB_API_URL: "https://api.github.com",
            RUNNER_OS: "Linux",
            ACTIONS_RUNTIME_URL: "https://pipelines.actions.githubusercontent.com/rfPb8qMRoMJgKcbWj636CUjHyn9ARBsXcNMyUbs53lB3mcqrgu/",
            npm_package_devDependencies__vitejs_plugin_react: "^3.0.0",
            npm_package_dependencies_zustand: "^4.3.2",
            npm_package_dependencies__checkout_chains: "*",
            npm_package_type: "module",
            CHROMEWEBDRIVER: "/usr/local/share/chrome_driver",
            JOURNAL_STREAM: "8:17176",
            RUNNER_USER: "runner",
            GITHUB_WORKFLOW: "Node.js CI",
            npm_package_private: "true",
            npm_package_devDependencies_autoprefixer: "^10.4.13",
            npm_package_dependencies_pubsub_js: "^1.9.4",
            npm_package_scripts_lint: "turbo run lint",
            npm_config_registry: "https://registry.yarnpkg.com",
            GITHUB_RUN_ID: "4707812406",
            npm_package_workspaces_0: "apps/*",
            BOOTSTRAP_HASKELL_NONINTERACTIVE: "1",
            ImageOS: "ubuntu22",
            GITHUB_BASE_REF: "",
            GITHUB_REF_TYPE: "branch",
            GITHUB_WORKFLOW_SHA: "b771926efc07b2fd0e4eb6109657764fba90077d",
            npm_package_workspaces_1: "packages/*",
            npm_config_ignore_scripts: "",
            GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64",
            PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG",
            GITHUB_WORKFLOW_REF: "james-hunt/checkout/.github/workflows/workflow.yml@refs/heads/main",
            GITHUB_ACTION_REPOSITORY: "borales/actions-yarn",
            npm_package_devDependencies__types_mixpanel_browser: "^2.38.1",
            npm_package_dependencies_axios: "^1.2.3",
            PATH: "/tmp/yarn--1681562288453-0.8127317389101916:/home/runner/work/checkout/checkout/apps/checkout/node_modules/.bin:/home/runner/.config/yarn/link/node_modules/.bin:/home/runner/work/checkout/checkout/node_modules/.bin:/opt/hostedtoolcache/node/18.15.0/x64/libexec/lib/node_modules/npm/bin/node-gyp-bin:/opt/hostedtoolcache/node/18.15.0/x64/lib/node_modules/npm/bin/node-gyp-bin:/opt/hostedtoolcache/node/18.15.0/x64/bin/node_modules/npm/bin/node-gyp-bin:/tmp/yarn--1681562258651-0.5115078609879176:/home/runner/work/checkout/checkout/node_modules/.bin:/home/runner/.config/yarn/link/node_modules/.bin:/home/runner/work/checkout/checkout/node_modules/.bin:/opt/hostedtoolcache/node/18.15.0/x64/libexec/lib/node_modules/npm/bin/node-gyp-bin:/opt/hostedtoolcache/node/18.15.0/x64/lib/node_modules/npm/bin/node-gyp-bin:/opt/hostedtoolcache/node/18.15.0/x64/bin/node_modules/npm/bin/node-gyp-bin:/opt/hostedtoolcache/node/18.15.0/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin",
            NODE: "/opt/hostedtoolcache/node/18.15.0/x64/bin/node",
            RUNNER_TRACKING_ID: "github_efb7f5e0-3768-4a90-a411-3b62d29086e9",
            DOTNET_MULTILEVEL_LOOKUP: "0",
            INVOCATION_ID: "9beb838f1f5d4336a350ec5c91bc5537",
            GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.8/x64",
            ANT_HOME: "/usr/share/ant",
            RUNNER_TOOL_CACHE: "/opt/hostedtoolcache",
            npm_package_name: "@checkout/embed",
            TURBO_HASH: "4b6704bf32834fe0",
            AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache",
            XDG_RUNTIME_DIR: "/run/user/1001",
            GITHUB_RUN_NUMBER: "81",
            GITHUB_TRIGGERING_ACTOR: "james-hunt",
            GITHUB_ACTION: "__borales_actions-yarn_2",
            RUNNER_ARCH: "X64",
            npm_package_dependencies__mantine_hooks: "^5.10.1",
            VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg",
            LANG: "C.UTF-8",
            npm_package_dependencies_react_dom: "^18.2.0",
            npm_package_dependencies__checkout_utils: "*",
            XDG_CONFIG_HOME: "/home/runner/.config",
            CONDA: "/usr/share/miniconda",
            GITHUB_REPOSITORY: "james-hunt/checkout",
            GITHUB_REF_NAME: "main",
            RUNNER_NAME: "GitHub Actions 2",
            npm_lifecycle_script: "tsc && vite build",
            ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653",
            DEBIAN_FRONTEND: "noninteractive",
            GITHUB_ACTION_REF: "v4",
            npm_config_version_git_message: "v%s",
            GITHUB_ACTIONS: "true",
            STATS_NM: "true",
            GITHUB_REPOSITORY_ID: "602396324",
            npm_lifecycle_event: "build",
            npm_package_version: "0.0.0",
            npm_package_devDependencies__types_react: "^18.0.26",
            GITHUB_REF_PROTECTED: "false",
            npm_config_argv: '{"remain":[],"cooked":["run","build"],"original":["build","--filter=embed"]}',
            npm_package_scripts_build: "tsc && vite build",
            RUNNER_PERFLOG: "/home/runner/perflog",
            ACCEPT_EULA: "Y",
            GITHUB_JOB: "build",
            GITHUB_WORKSPACE: "/home/runner/work/checkout/checkout",
            npm_package_devDependencies_eslint_config_custom: "*",
            GITHUB_SHA: "b771926efc07b2fd0e4eb6109657764fba90077d",
            GITHUB_RUN_ATTEMPT: "1",
            npm_config_version_git_tag: "true",
            npm_config_version_git_sign: "",
            npm_package_dependencies__tanstack_react_query: "^4.14.5",
            npm_package_dependencies__checkout_wagmi_provider: "*",
            ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk",
            GITHUB_REF: "refs/heads/main",
            GITHUB_ACTOR: "james-hunt",
            npm_config_strict_ssl: "true",
            npm_package_dependencies_mixpanel_browser: "^2.46.0",
            LEIN_HOME: "/usr/local/lib/lein",
            npm_package_scripts_format: 'prettier --write "**/*.{ts,tsx,md}"',
            npm_package_dependencies__floating_ui_react: "^0.18.1",
            JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64",
            GITHUB_ACTOR_ID: "7122572",
            GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_fe7b8e4d-7ab2-4999-9daf-0e81836f4860",
            RUNNER_WORKSPACE: "/home/runner/work/checkout",
            npm_execpath: "/usr/local/lib/node_modules/yarn/bin/yarn.js",
            PWD: "/home/runner/work/checkout/checkout/apps/checkout",
            GECKOWEBDRIVER: "/usr/local/share/gecko_driver",
            HOMEBREW_NO_AUTO_UPDATE: "1",
            HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650",
            STATS_TIS: "mining",
            GHCUP_INSTALL_BASE_PREFIX: "/usr/local",
            ANDROID_HOME: "/usr/local/lib/android/sdk",
            LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar",
            GITHUB_EVENT_NAME: "push",
            GITHUB_SERVER_URL: "https://github.com",
            GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_fe7b8e4d-7ab2-4999-9daf-0e81836f4860",
            STATS_EXT: "true",
            EDGEWEBDRIVER: "/usr/local/share/edge_driver",
            npm_config_save_prefix: "^",
            npm_config_ignore_optional: "",
            npm_package_devDependencies_postcss: "^8.4.21",
            ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653",
            SGX_AESM_ADDR: "1",
            CHROME_BIN: "/usr/bin/google-chrome",
            npm_package_dependencies__checkout_ui: "*",
            npm_package_scripts_preview: "vite preview",
            SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar",
            STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.137+2/provjobd.data",
            INIT_CWD: "/home/runner/work/checkout/checkout",
            ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653",
            GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_fe7b8e4d-7ab2-4999-9daf-0e81836f4860",
            npm_package_dependencies_react: "^18.2.0",
            NODE_ENV: "production"
        }.NODE_DEBUG;
        s = s.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase(), i = new RegExp("^" + s + "$", "i");
    }
    t.debuglog = function(E) {
        if (E = E.toUpperCase(), !n[E])
            if (i.test(E)) {
                var R = process.pid;
                n[E] = function() {
                    var x = t.format.apply(t, arguments);
                    console.error("%s %d: %s", E, R, x);
                };
            } else
                n[E] = function() {};
        return n[E];
    };

    function o(E, R) {
        var x = {
            seen: [],
            stylize: c
        };
        return arguments.length >= 3 && (x.depth = arguments[2]), arguments.length >= 4 && (x.colors = arguments[3]), _(R) ? x.showHidden = R : R && t._extend(x, R), F(x.showHidden) && (x.showHidden = !1), F(x.depth) && (x.depth = 2), F(x.colors) && (x.colors = !1), F(x.customInspect) && (x.customInspect = !0), x.colors && (x.stylize = a), l(x, E, x.depth);
    }
    t.inspect = o, o.colors = {
        bold: [1, 22],
        italic: [3, 23],
        underline: [4, 24],
        inverse: [7, 27],
        white: [37, 39],
        grey: [90, 39],
        black: [30, 39],
        blue: [34, 39],
        cyan: [36, 39],
        green: [32, 39],
        magenta: [35, 39],
        red: [31, 39],
        yellow: [33, 39]
    }, o.styles = {
        special: "cyan",
        number: "yellow",
        boolean: "yellow",
        undefined: "grey",
        null: "bold",
        string: "green",
        date: "magenta",
        // "name": intentionally not styling
        regexp: "red"
    };

    function a(E, R) {
        var x = o.styles[R];
        return x ? "\x1B[" + o.colors[x][0] + "m" + E + "\x1B[" + o.colors[x][1] + "m" : E;
    }

    function c(E, R) {
        return E;
    }

    function u(E) {
        var R = {};
        return E.forEach(function(x, W) {
            R[x] = !0;
        }), R;
    }

    function l(E, R, x) {
        if (E.customInspect && R && z(R.inspect) && // Filter out the util module, it's inspect function is special
            R.inspect !== t.inspect && // Also filter out any prototype objects using the circular check.
            !(R.constructor && R.constructor.prototype === R)) {
            var W = R.inspect(x, E);
            return N(W) || (W = l(E, W, x)), W;
        }
        var y = b(E, R);
        if (y)
            return y;
        var v = Object.keys(R),
            k = u(v);
        if (E.showHidden && (v = Object.getOwnPropertyNames(R)), ee(R) && (v.indexOf("message") >= 0 || v.indexOf("description") >= 0))
            return f(R);
        if (v.length === 0) {
            if (z(R)) {
                var O = R.name ? ": " + R.name : "";
                return E.stylize("[Function" + O + "]", "special");
            }
            if (P(R))
                return E.stylize(RegExp.prototype.toString.call(R), "regexp");
            if (ie(R))
                return E.stylize(Date.prototype.toString.call(R), "date");
            if (ee(R))
                return f(R);
        }
        var j = "",
            h = !1,
            d = ["{", "}"];
        if (I(R) && (h = !0, d = ["[", "]"]), z(R)) {
            var C = R.name ? ": " + R.name : "";
            j = " [Function" + C + "]";
        }
        if (P(R) && (j = " " + RegExp.prototype.toString.call(R)), ie(R) && (j = " " + Date.prototype.toUTCString.call(R)), ee(R) && (j = " " + f(R)), v.length === 0 && (!h || R.length == 0))
            return d[0] + j + d[1];
        if (x < 0)
            return P(R) ? E.stylize(RegExp.prototype.toString.call(R), "regexp") : E.stylize("[Object]", "special");
        E.seen.push(R);
        var D;
        return h ? D = p(E, R, x, k, v) : D = v.map(function(oe) {
            return g(E, R, x, k, oe, h);
        }), E.seen.pop(), S(D, j, d);
    }

    function b(E, R) {
        if (F(R))
            return E.stylize("undefined", "undefined");
        if (N(R)) {
            var x = "'" + JSON.stringify(R).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
            return E.stylize(x, "string");
        }
        if (A(R))
            return E.stylize("" + R, "number");
        if (_(R))
            return E.stylize("" + R, "boolean");
        if (m(R))
            return E.stylize("null", "null");
    }

    function f(E) {
        return "[" + Error.prototype.toString.call(E) + "]";
    }

    function p(E, R, x, W, y) {
        for (var v = [], k = 0, O = R.length; k < O; ++k)
            ye(R, String(k)) ? v.push(g(
                E,
                R,
                x,
                W,
                String(k), !0
            )) : v.push("");
        return y.forEach(function(j) {
            j.match(/^\d+$/) || v.push(g(
                E,
                R,
                x,
                W,
                j, !0
            ));
        }), v;
    }

    function g(E, R, x, W, y, v) {
        var k, O, j;
        if (j = Object.getOwnPropertyDescriptor(R, y) || {
                value: R[y]
            }, j.get ? j.set ? O = E.stylize("[Getter/Setter]", "special") : O = E.stylize("[Getter]", "special") : j.set && (O = E.stylize("[Setter]", "special")), ye(W, y) || (k = "[" + y + "]"), O || (E.seen.indexOf(j.value) < 0 ? (m(x) ? O = l(E, j.value, null) : O = l(E, j.value, x - 1), O.indexOf(`
`) > -1 && (v ? O = O.split(`
`).map(function(h) {
                return "  " + h;
            }).join(`
`).slice(2) : O = `
` + O.split(`
`).map(function(h) {
                return "   " + h;
            }).join(`
`))) : O = E.stylize("[Circular]", "special")), F(k)) {
            if (v && y.match(/^\d+$/))
                return O;
            k = JSON.stringify("" + y), k.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (k = k.slice(1, -1), k = E.stylize(k, "name")) : (k = k.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), k = E.stylize(k, "string"));
        }
        return k + ": " + O;
    }

    function S(E, R, x) {
        var W = E.reduce(function(y, v) {
            return v.indexOf(`
`) >= 0, y + v.replace(/\u001b\[\d\d?m/g, "").length + 1;
        }, 0);
        return W > 60 ? x[0] + (R === "" ? "" : R + `
 `) + " " + E.join(`,
  `) + " " + x[1] : x[0] + R + " " + E.join(", ") + " " + x[1];
    }
    t.types = bh;

    function I(E) {
        return Array.isArray(E);
    }
    t.isArray = I;

    function _(E) {
        return typeof E == "boolean";
    }
    t.isBoolean = _;

    function m(E) {
        return E === null;
    }
    t.isNull = m;

    function w(E) {
        return E == null;
    }
    t.isNullOrUndefined = w;

    function A(E) {
        return typeof E == "number";
    }
    t.isNumber = A;

    function N(E) {
        return typeof E == "string";
    }
    t.isString = N;

    function U(E) {
        return typeof E == "symbol";
    }
    t.isSymbol = U;

    function F(E) {
        return E === void 0;
    }
    t.isUndefined = F;

    function P(E) {
        return L(E) && K(E) === "[object RegExp]";
    }
    t.isRegExp = P, t.types.isRegExp = P;

    function L(E) {
        return typeof E == "object" && E !== null;
    }
    t.isObject = L;

    function ie(E) {
        return L(E) && K(E) === "[object Date]";
    }
    t.isDate = ie, t.types.isDate = ie;

    function ee(E) {
        return L(E) && (K(E) === "[object Error]" || E instanceof Error);
    }
    t.isError = ee, t.types.isNativeError = ee;

    function z(E) {
        return typeof E == "function";
    }
    t.isFunction = z;

    function q(E) {
        return E === null || typeof E == "boolean" || typeof E == "number" || typeof E == "string" || typeof E == "symbol" || // ES6 symbol
            typeof E > "u";
    }
    t.isPrimitive = q, t.isBuffer = m2;

    function K(E) {
        return Object.prototype.toString.call(E);
    }

    function ne(E) {
        return E < 10 ? "0" + E.toString(10) : E.toString(10);
    }
    var he = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ];

    function we() {
        var E = new Date(),
            R = [
                ne(E.getHours()),
                ne(E.getMinutes()),
                ne(E.getSeconds())
            ].join(":");
        return [E.getDate(), he[E.getMonth()], R].join(" ");
    }
    t.log = function() {
        console.log("%s - %s", we(), t.format.apply(t, arguments));
    }, t.inherits = Qe, t._extend = function(E, R) {
        if (!R || !L(R))
            return E;
        for (var x = Object.keys(R), W = x.length; W--;)
            E[x[W]] = R[x[W]];
        return E;
    };

    function ye(E, R) {
        return Object.prototype.hasOwnProperty.call(E, R);
    }
    var ce = typeof Symbol < "u" ? Symbol("util.promisify.custom") : void 0;
    t.promisify = function(R) {
        if (typeof R != "function")
            throw new TypeError('The "original" argument must be of type Function');
        if (ce && R[ce]) {
            var x = R[ce];
            if (typeof x != "function")
                throw new TypeError('The "util.promisify.custom" argument must be of type Function');
            return Object.defineProperty(x, ce, {
                value: x,
                enumerable: !1,
                writable: !1,
                configurable: !0
            }), x;
        }

        function x() {
            for (var W, y, v = new Promise(function(j, h) {
                    W = j, y = h;
                }), k = [], O = 0; O < arguments.length; O++)
                k.push(arguments[O]);
            k.push(function(j, h) {
                j ? y(j) : W(h);
            });
            try {
                R.apply(this, k);
            } catch (j) {
                y(j);
            }
            return v;
        }
        return Object.setPrototypeOf(x, Object.getPrototypeOf(R)), ce && Object.defineProperty(x, ce, {
            value: x,
            enumerable: !1,
            writable: !1,
            configurable: !0
        }), Object.defineProperties(
            x,
            e(R)
        );
    }, t.promisify.custom = ce;

    function Ce(E, R) {
        if (!E) {
            var x = new Error("Promise was rejected with a falsy value");
            x.reason = E, E = x;
        }
        return R(E);
    }

    function Ue(E) {
        if (typeof E != "function")
            throw new TypeError('The "original" argument must be of type Function');

        function R() {
            for (var x = [], W = 0; W < arguments.length; W++)
                x.push(arguments[W]);
            var y = x.pop();
            if (typeof y != "function")
                throw new TypeError("The last argument must be of type Function");
            var v = this,
                k = function() {
                    return y.apply(v, arguments);
                };
            E.apply(this, x).then(
                function(O) {
                    process.nextTick(k.bind(null, null, O));
                },
                function(O) {
                    process.nextTick(Ce.bind(null, O, k));
                }
            );
        }
        return Object.setPrototypeOf(R, Object.getPrototypeOf(E)), Object.defineProperties(
            R,
            e(E)
        ), R;
    }
    t.callbackify = Ue;
})(_h);
const y2 = _h,
    Nh = ki;
var Zo = typeof Reflect == "object" ? Reflect : null,
    v2 = Zo && typeof Zo.apply == "function" ? Zo.apply : function(e, r, n) {
        return Function.prototype.apply.call(e, r, n);
    },
    w2 = ac;

function ac() {
    Nh.call(this);
}
y2.inherits(ac, Nh);
ac.prototype.emit = function(t) {
    for (var e = [], r = 1; r < arguments.length; r++)
        e.push(arguments[r]);
    var n = t === "error",
        i = this._events;
    if (i !== void 0)
        n = n && i.error === void 0;
    else if (!n)
        return !1;
    if (n) {
        var s;
        if (e.length > 0 && (s = e[0]), s instanceof Error)
            throw s;
        var o = new Error("Unhandled error." + (s ? " (" + s.message + ")" : ""));
        throw o.context = s, o;
    }
    var a = i[t];
    if (a === void 0)
        return !1;
    if (typeof a == "function")
        ju(a, this, e);
    else
        for (var c = a.length, u = E2(a, c), r = 0; r < c; ++r)
            ju(u[r], this, e);
    return !0;
};

function ju(t, e, r) {
    try {
        v2(t, e, r);
    } catch (n) {
        setTimeout(() => {
            throw n;
        });
    }
}

function E2(t, e) {
    for (var r = new Array(e), n = 0; n < e; ++n)
        r[n] = t[n];
    return r;
}
const S2 = w2,
    k2 = 1e3,
    R2 = (t, e) => t + e,
    Bu = ["sync", "latest"];
let I2 = class extends S2 {
    //
    // public
    //
    constructor(e = {}) {
        super(), this._blockResetDuration = e.blockResetDuration || 20 * k2, this._blockResetTimeout, this._currentBlock = null, this._isRunning = !1, this._onNewListener = this._onNewListener.bind(this), this._onRemoveListener = this._onRemoveListener.bind(this), this._resetCurrentBlock = this._resetCurrentBlock.bind(this), this._setupInternalEvents();
    }
    isRunning() {
        return this._isRunning;
    }
    getCurrentBlock() {
        return this._currentBlock;
    }
    async getLatestBlock() {
        return this._currentBlock ? this._currentBlock : await new Promise((r) => this.once("latest", r));
    }
    // dont allow module consumer to remove our internal event listeners
    removeAllListeners(e) {
        e ? super.removeAllListeners(e) : super.removeAllListeners(), this._setupInternalEvents(), this._onRemoveListener();
    }
    //
    // to be implemented in subclass
    //
    _start() {}
    _end() {}
    //
    // private
    //
    _setupInternalEvents() {
        this.removeListener("newListener", this._onNewListener), this.removeListener("removeListener", this._onRemoveListener), this.on("newListener", this._onNewListener), this.on("removeListener", this._onRemoveListener);
    }
    _onNewListener(e, r) {
        Bu.includes(e) && this._maybeStart();
    }
    _onRemoveListener(e, r) {
        this._getBlockTrackerEventCount() > 0 || this._maybeEnd();
    }
    _maybeStart() {
        this._isRunning || (this._isRunning = !0, this._cancelBlockResetTimeout(), this._start());
    }
    _maybeEnd() {
        this._isRunning && (this._isRunning = !1, this._setupBlockResetTimeout(), this._end());
    }
    _getBlockTrackerEventCount() {
        return Bu.map((e) => this.listenerCount(e)).reduce(R2);
    }
    _newPotentialLatest(e) {
        const r = this._currentBlock;
        r && Uu(e) <= Uu(r) || this._setCurrentBlock(e);
    }
    _setCurrentBlock(e) {
        const r = this._currentBlock;
        this._currentBlock = e, this.emit("latest", e), this.emit("sync", {
            oldBlock: r,
            newBlock: e
        });
    }
    _setupBlockResetTimeout() {
        this._cancelBlockResetTimeout(), this._blockResetTimeout = setTimeout(this._resetCurrentBlock, this._blockResetDuration), this._blockResetTimeout.unref && this._blockResetTimeout.unref();
    }
    _cancelBlockResetTimeout() {
        clearTimeout(this._blockResetTimeout);
    }
    _resetCurrentBlock() {
        this._currentBlock = null;
    }
};
var A2 = I2;

function Uu(t) {
    return Number.parseInt(t, 16);
}
const T2 = vw,
    C2 = A2,
    M2 = 1e3;
let x2 = class extends C2 {
    constructor(e = {}) {
        if (!e.provider)
            throw new Error("PollingBlockTracker - no provider specified.");
        const r = e.pollingInterval || 20 * M2,
            n = e.retryTimeout || r / 10,
            i = e.keepEventLoopActive !== void 0 ? e.keepEventLoopActive : !0,
            s = e.setSkipCacheFlag || !1;
        super(Object.assign({
            blockResetDuration: r
        }, e)), this._provider = e.provider, this._pollingInterval = r, this._retryTimeout = n, this._keepEventLoopActive = i, this._setSkipCacheFlag = s;
    }
    //
    // public
    //
    // trigger block polling
    async checkForLatestBlock() {
        return await this._updateLatestBlock(), await this.getLatestBlock();
    }
    //
    // private
    //
    _start() {
        this._performSync().catch((e) => this.emit("error", e));
    }
    async _performSync() {
        for (; this._isRunning;)
            try {
                await this._updateLatestBlock(), await Fu(this._pollingInterval, !this._keepEventLoopActive);
            } catch (e) {
                const r = new Error(`PollingBlockTracker - encountered an error while attempting to update latest block:
${e.stack}`);
                try {
                    this.emit("error", r);
                } catch {
                    console.error(r);
                }
                await Fu(this._retryTimeout, !this._keepEventLoopActive);
            }
    }
    async _updateLatestBlock() {
        const e = await this._fetchLatestBlock();
        this._newPotentialLatest(e);
    }
    async _fetchLatestBlock() {
        const e = {
            jsonrpc: "2.0",
            id: 1,
            method: "eth_blockNumber",
            params: []
        };
        this._setSkipCacheFlag && (e.skipCache = !0);
        const r = await T2((n) => this._provider.sendAsync(e, n))();
        if (r.error)
            throw new Error(`PollingBlockTracker - encountered error fetching block:
${r.error}`);
        return r.result;
    }
};
var O2 = x2;

function Fu(t, e) {
    return new Promise((r) => {
        const n = setTimeout(r, t);
        n.unref && e && n.unref();
    });
}
var bi = {},
    N2 = {
        get exports() {
            return bi;
        },
        set exports(t) {
            bi = t;
        }
    },
    D2 = function(e) {
        return (r, n, i, s) => {
            const o = e[r.method];
            return o === void 0 ? i() : typeof o == "function" ? o(r, n, i, s) : (n.result = o, s());
        };
    };
(function(t) {
    t.exports = D2;
})(N2);
var cc = {},
    Vi = {},
    Dn = {};
Object.defineProperty(Dn, "__esModule", {
    value: !0
});
Dn.getUniqueId = void 0;
const Dh = 4294967295;
let qo = Math.floor(Math.random() * Dh);

function L2() {
    return qo = (qo + 1) % Dh, qo;
}
Dn.getUniqueId = L2;
Object.defineProperty(Vi, "__esModule", {
    value: !0
});
Vi.createIdRemapMiddleware = void 0;
const P2 = Dn;

function j2() {
    return (t, e, r, n) => {
        const i = t.id,
            s = P2.getUniqueId();
        t.id = s, e.id = s, r((o) => {
            t.id = i, e.id = i, o();
        });
    };
}
Vi.createIdRemapMiddleware = j2;
var zi = {};
Object.defineProperty(zi, "__esModule", {
    value: !0
});
zi.createAsyncMiddleware = void 0;

function B2(t) {
    return async (e, r, n, i) => {
        let s;
        const o = new Promise((l) => {
            s = l;
        });
        let a = null,
            c = !1;
        const u = async () => {
            c = !0, n((l) => {
                a = l, s();
            }), await o;
        };
        try {
            await t(e, r, u), c ? (await o, a(null)) : i(null);
        } catch (l) {
            a ? a(l) : i(l);
        }
    };
}
zi.createAsyncMiddleware = B2;
var Zi = {};
Object.defineProperty(Zi, "__esModule", {
    value: !0
});
Zi.createScaffoldMiddleware = void 0;

function U2(t) {
    return (e, r, n, i) => {
        const s = t[e.method];
        return s === void 0 ? n() : typeof s == "function" ? s(e, r, n, i) : (r.result = s, i());
    };
}
Zi.createScaffoldMiddleware = U2;
var Ln = {},
    Lh = {},
    Ut = {};
Object.defineProperty(Ut, "__esModule", {
    value: !0
});
Ut.EthereumProviderError = Ut.EthereumRpcError = void 0;
const F2 = wl;
class Ph extends Error {
    constructor(e, r, n) {
        if (!Number.isInteger(e))
            throw new Error('"code" must be an integer.');
        if (!r || typeof r != "string")
            throw new Error('"message" must be a nonempty string.');
        super(r), this.code = e, n !== void 0 && (this.data = n);
    }
    /**
     * Returns a plain object with all public class properties.
     */
    serialize() {
        const e = {
            code: this.code,
            message: this.message
        };
        return this.data !== void 0 && (e.data = this.data), this.stack && (e.stack = this.stack), e;
    }
    /**
     * Return a string representation of the serialized error, omitting
     * any circular references.
     */
    toString() {
        return F2.default(this.serialize(), G2, 2);
    }
}
Ut.EthereumRpcError = Ph;
class H2 extends Ph {
    /**
     * Create an Ethereum Provider JSON-RPC error.
     * `code` must be an integer in the 1000 <= 4999 range.
     */
    constructor(e, r, n) {
        if (!W2(e))
            throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');
        super(e, r, n);
    }
}
Ut.EthereumProviderError = H2;

function W2(t) {
    return Number.isInteger(t) && t >= 1e3 && t <= 4999;
}

function G2(t, e) {
    if (e !== "[Circular]")
        return e;
}
var uc = {},
    Ft = {};
Object.defineProperty(Ft, "__esModule", {
    value: !0
});
Ft.errorValues = Ft.errorCodes = void 0;
Ft.errorCodes = {
    rpc: {
        invalidInput: -32e3,
        resourceNotFound: -32001,
        resourceUnavailable: -32002,
        transactionRejected: -32003,
        methodNotSupported: -32004,
        limitExceeded: -32005,
        parse: -32700,
        invalidRequest: -32600,
        methodNotFound: -32601,
        invalidParams: -32602,
        internal: -32603
    },
    provider: {
        userRejectedRequest: 4001,
        unauthorized: 4100,
        unsupportedMethod: 4200,
        disconnected: 4900,
        chainDisconnected: 4901
    }
};
Ft.errorValues = {
    "-32700": {
        standard: "JSON RPC 2.0",
        message: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
    },
    "-32600": {
        standard: "JSON RPC 2.0",
        message: "The JSON sent is not a valid Request object."
    },
    "-32601": {
        standard: "JSON RPC 2.0",
        message: "The method does not exist / is not available."
    },
    "-32602": {
        standard: "JSON RPC 2.0",
        message: "Invalid method parameter(s)."
    },
    "-32603": {
        standard: "JSON RPC 2.0",
        message: "Internal JSON-RPC error."
    },
    "-32000": {
        standard: "EIP-1474",
        message: "Invalid input."
    },
    "-32001": {
        standard: "EIP-1474",
        message: "Resource not found."
    },
    "-32002": {
        standard: "EIP-1474",
        message: "Resource unavailable."
    },
    "-32003": {
        standard: "EIP-1474",
        message: "Transaction rejected."
    },
    "-32004": {
        standard: "EIP-1474",
        message: "Method not supported."
    },
    "-32005": {
        standard: "EIP-1474",
        message: "Request limit exceeded."
    },
    4001: {
        standard: "EIP-1193",
        message: "User rejected the request."
    },
    4100: {
        standard: "EIP-1193",
        message: "The requested account and/or method has not been authorized by the user."
    },
    4200: {
        standard: "EIP-1193",
        message: "The requested method is not supported by this Ethereum provider."
    },
    4900: {
        standard: "EIP-1193",
        message: "The provider is disconnected from all chains."
    },
    4901: {
        standard: "EIP-1193",
        message: "The provider is disconnected from the specified chain."
    }
};
(function(t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.serializeError = t.isValidCode = t.getMessageFromCode = t.JSON_RPC_SERVER_ERROR_MESSAGE = void 0;
    const e = Ft,
        r = Ut,
        n = e.errorCodes.rpc.internal,
        i = "Unspecified error message. This is a bug, please report it.",
        s = {
            code: n,
            message: o(n)
        };
    t.JSON_RPC_SERVER_ERROR_MESSAGE = "Unspecified server error.";

    function o(f, p = i) {
        if (Number.isInteger(f)) {
            const g = f.toString();
            if (b(e.errorValues, g))
                return e.errorValues[g].message;
            if (u(f))
                return t.JSON_RPC_SERVER_ERROR_MESSAGE;
        }
        return p;
    }
    t.getMessageFromCode = o;

    function a(f) {
        if (!Number.isInteger(f))
            return !1;
        const p = f.toString();
        return !!(e.errorValues[p] || u(f));
    }
    t.isValidCode = a;

    function c(f, {
        fallbackError: p = s,
        shouldIncludeStack: g = !1
    } = {}) {
        var S, I;
        if (!p || !Number.isInteger(p.code) || typeof p.message != "string")
            throw new Error("Must provide fallback error with integer number code and string message.");
        if (f instanceof r.EthereumRpcError)
            return f.serialize();
        const _ = {};
        if (f && typeof f == "object" && !Array.isArray(f) && b(f, "code") && a(f.code)) {
            const w = f;
            _.code = w.code, w.message && typeof w.message == "string" ? (_.message = w.message, b(w, "data") && (_.data = w.data)) : (_.message = o(_.code), _.data = {
                originalError: l(f)
            });
        } else {
            _.code = p.code;
            const w = (S = f) === null || S === void 0 ? void 0 : S.message;
            _.message = w && typeof w == "string" ? w : p.message, _.data = {
                originalError: l(f)
            };
        }
        const m = (I = f) === null || I === void 0 ? void 0 : I.stack;
        return g && f && m && typeof m == "string" && (_.stack = m), _;
    }
    t.serializeError = c;

    function u(f) {
        return f >= -32099 && f <= -32e3;
    }

    function l(f) {
        return f && typeof f == "object" && !Array.isArray(f) ? Object.assign({}, f) : f;
    }

    function b(f, p) {
        return Object.prototype.hasOwnProperty.call(f, p);
    }
})(uc);
var qi = {};
Object.defineProperty(qi, "__esModule", {
    value: !0
});
qi.ethErrors = void 0;
const lc = Ut,
    jh = uc,
    xe = Ft;
qi.ethErrors = {
    rpc: {
        /**
         * Get a JSON RPC 2.0 Parse (-32700) error.
         */
        parse: (t) => Ve(xe.errorCodes.rpc.parse, t),
        /**
         * Get a JSON RPC 2.0 Invalid Request (-32600) error.
         */
        invalidRequest: (t) => Ve(xe.errorCodes.rpc.invalidRequest, t),
        /**
         * Get a JSON RPC 2.0 Invalid Params (-32602) error.
         */
        invalidParams: (t) => Ve(xe.errorCodes.rpc.invalidParams, t),
        /**
         * Get a JSON RPC 2.0 Method Not Found (-32601) error.
         */
        methodNotFound: (t) => Ve(xe.errorCodes.rpc.methodNotFound, t),
        /**
         * Get a JSON RPC 2.0 Internal (-32603) error.
         */
        internal: (t) => Ve(xe.errorCodes.rpc.internal, t),
        /**
         * Get a JSON RPC 2.0 Server error.
         * Permits integer error codes in the [ -32099 <= -32005 ] range.
         * Codes -32000 through -32004 are reserved by EIP-1474.
         */
        server: (t) => {
            if (!t || typeof t != "object" || Array.isArray(t))
                throw new Error("Ethereum RPC Server errors must provide single object argument.");
            const {
                code: e
            } = t;
            if (!Number.isInteger(e) || e > -32005 || e < -32099)
                throw new Error('"code" must be an integer such that: -32099 <= code <= -32005');
            return Ve(e, t);
        },
        /**
         * Get an Ethereum JSON RPC Invalid Input (-32000) error.
         */
        invalidInput: (t) => Ve(xe.errorCodes.rpc.invalidInput, t),
        /**
         * Get an Ethereum JSON RPC Resource Not Found (-32001) error.
         */
        resourceNotFound: (t) => Ve(xe.errorCodes.rpc.resourceNotFound, t),
        /**
         * Get an Ethereum JSON RPC Resource Unavailable (-32002) error.
         */
        resourceUnavailable: (t) => Ve(xe.errorCodes.rpc.resourceUnavailable, t),
        /**
         * Get an Ethereum JSON RPC Transaction Rejected (-32003) error.
         */
        transactionRejected: (t) => Ve(xe.errorCodes.rpc.transactionRejected, t),
        /**
         * Get an Ethereum JSON RPC Method Not Supported (-32004) error.
         */
        methodNotSupported: (t) => Ve(xe.errorCodes.rpc.methodNotSupported, t),
        /**
         * Get an Ethereum JSON RPC Limit Exceeded (-32005) error.
         */
        limitExceeded: (t) => Ve(xe.errorCodes.rpc.limitExceeded, t)
    },
    provider: {
        /**
         * Get an Ethereum Provider User Rejected Request (4001) error.
         */
        userRejectedRequest: (t) => Qr(xe.errorCodes.provider.userRejectedRequest, t),
        /**
         * Get an Ethereum Provider Unauthorized (4100) error.
         */
        unauthorized: (t) => Qr(xe.errorCodes.provider.unauthorized, t),
        /**
         * Get an Ethereum Provider Unsupported Method (4200) error.
         */
        unsupportedMethod: (t) => Qr(xe.errorCodes.provider.unsupportedMethod, t),
        /**
         * Get an Ethereum Provider Not Connected (4900) error.
         */
        disconnected: (t) => Qr(xe.errorCodes.provider.disconnected, t),
        /**
         * Get an Ethereum Provider Chain Not Connected (4901) error.
         */
        chainDisconnected: (t) => Qr(xe.errorCodes.provider.chainDisconnected, t),
        /**
         * Get a custom Ethereum Provider error.
         */
        custom: (t) => {
            if (!t || typeof t != "object" || Array.isArray(t))
                throw new Error("Ethereum Provider custom errors must provide single object argument.");
            const {
                code: e,
                message: r,
                data: n
            } = t;
            if (!r || typeof r != "string")
                throw new Error('"message" must be a nonempty string');
            return new lc.EthereumProviderError(e, r, n);
        }
    }
};

function Ve(t, e) {
    const [r, n] = Bh(e);
    return new lc.EthereumRpcError(t, r || jh.getMessageFromCode(t), n);
}

function Qr(t, e) {
    const [r, n] = Bh(e);
    return new lc.EthereumProviderError(t, r || jh.getMessageFromCode(t), n);
}

function Bh(t) {
    if (t) {
        if (typeof t == "string")
            return [t];
        if (typeof t == "object" && !Array.isArray(t)) {
            const {
                message: e,
                data: r
            } = t;
            if (e && typeof e != "string")
                throw new Error("Must specify string message.");
            return [e || void 0, r];
        }
    }
    return [];
}
(function(t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getMessageFromCode = t.serializeError = t.EthereumProviderError = t.EthereumRpcError = t.ethErrors = t.errorCodes = void 0;
    const e = Ut;
    Object.defineProperty(t, "EthereumRpcError", {
        enumerable: !0,
        get: function() {
            return e.EthereumRpcError;
        }
    }), Object.defineProperty(t, "EthereumProviderError", {
        enumerable: !0,
        get: function() {
            return e.EthereumProviderError;
        }
    });
    const r = uc;
    Object.defineProperty(t, "serializeError", {
        enumerable: !0,
        get: function() {
            return r.serializeError;
        }
    }), Object.defineProperty(t, "getMessageFromCode", {
        enumerable: !0,
        get: function() {
            return r.getMessageFromCode;
        }
    });
    const n = qi;
    Object.defineProperty(t, "ethErrors", {
        enumerable: !0,
        get: function() {
            return n.ethErrors;
        }
    });
    const i = Ft;
    Object.defineProperty(t, "errorCodes", {
        enumerable: !0,
        get: function() {
            return i.errorCodes;
        }
    });
})(Lh);
var $2 = re && re.__importDefault || function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
};
Object.defineProperty(Ln, "__esModule", {
    value: !0
});
Ln.JsonRpcEngine = void 0;
const V2 = $2(Pr),
    ze = Lh;
class gt extends V2.default {
    constructor() {
        super(), this._middleware = [];
    }
    /**
     * Add a middleware function to the engine's middleware stack.
     *
     * @param middleware - The middleware function to add.
     */
    push(e) {
        this._middleware.push(e);
    }
    handle(e, r) {
        if (r && typeof r != "function")
            throw new Error('"callback" must be a function if provided.');
        return Array.isArray(e) ? r ? this._handleBatch(e, r) : this._handleBatch(e) : r ? this._handle(e, r) : this._promiseHandle(e);
    }
    /**
     * Returns this engine as a middleware function that can be pushed to other
     * engines.
     *
     * @returns This engine as a middleware function.
     */
    asMiddleware() {
        return async (e, r, n, i) => {
            try {
                const [s, o, a] = await gt._runAllMiddleware(e, r, this._middleware);
                return o ? (await gt._runReturnHandlers(a), i(s)) : n(async (c) => {
                    try {
                        await gt._runReturnHandlers(a);
                    } catch (u) {
                        return c(u);
                    }
                    return c();
                });
            } catch (s) {
                return i(s);
            }
        };
    }
    async _handleBatch(e, r) {
        try {
            const n = await Promise.all(
                // 1. Begin executing each request in the order received
                e.map(this._promiseHandle.bind(this))
            );
            return r ? r(null, n) : n;
        } catch (n) {
            if (r)
                return r(n);
            throw n;
        }
    }
    /**
     * A promise-wrapped _handle.
     */
    _promiseHandle(e) {
        return new Promise((r) => {
            this._handle(e, (n, i) => {
                r(i);
            });
        });
    }
    /**
     * Ensures that the request object is valid, processes it, and passes any
     * error and the response object to the given callback.
     *
     * Does not reject.
     */
    async _handle(e, r) {
        if (!e || Array.isArray(e) || typeof e != "object") {
            const o = new ze.EthereumRpcError(ze.errorCodes.rpc.invalidRequest, `Requests must be plain objects. Received: ${typeof e}`, {
                request: e
            });
            return r(o, {
                id: void 0,
                jsonrpc: "2.0",
                error: o
            });
        }
        if (typeof e.method != "string") {
            const o = new ze.EthereumRpcError(ze.errorCodes.rpc.invalidRequest, `Must specify a string method. Received: ${typeof e.method}`, {
                request: e
            });
            return r(o, {
                id: e.id,
                jsonrpc: "2.0",
                error: o
            });
        }
        const n = Object.assign({}, e),
            i = {
                id: n.id,
                jsonrpc: n.jsonrpc
            };
        let s = null;
        try {
            await this._processRequest(n, i);
        } catch (o) {
            s = o;
        }
        return s && (delete i.result, i.error || (i.error = ze.serializeError(s))), r(s, i);
    }
    /**
     * For the given request and response, runs all middleware and their return
     * handlers, if any, and ensures that internal request processing semantics
     * are satisfied.
     */
    async _processRequest(e, r) {
        const [n, i, s] = await gt._runAllMiddleware(e, r, this._middleware);
        if (gt._checkForCompletion(e, r, i), await gt._runReturnHandlers(s), n)
            throw n;
    }
    /**
     * Serially executes the given stack of middleware.
     *
     * @returns An array of any error encountered during middleware execution,
     * a boolean indicating whether the request was completed, and an array of
     * middleware-defined return handlers.
     */
    static async _runAllMiddleware(e, r, n) {
        const i = [];
        let s = null,
            o = !1;
        for (const a of n)
            if ([s, o] = await gt._runMiddleware(e, r, a, i), o)
                break;
        return [s, o, i.reverse()];
    }
    /**
     * Runs an individual middleware.
     *
     * @returns An array of any error encountered during middleware exection,
     * and a boolean indicating whether the request should end.
     */
    static _runMiddleware(e, r, n, i) {
        return new Promise((s) => {
            const o = (c) => {
                    const u = c || r.error;
                    u && (r.error = ze.serializeError(u)), s([u, !0]);
                },
                a = (c) => {
                    r.error ? o(r.error) : (c && (typeof c != "function" && o(new ze.EthereumRpcError(ze.errorCodes.rpc.internal, `JsonRpcEngine: "next" return handlers must be functions. Received "${typeof c}" for request:
${Yo(e)}`, {
                        request: e
                    })), i.push(c)), s([null, !1]));
                };
            try {
                n(e, r, a, o);
            } catch (c) {
                o(c);
            }
        });
    }
    /**
     * Serially executes array of return handlers. The request and response are
     * assumed to be in their scope.
     */
    static async _runReturnHandlers(e) {
        for (const r of e)
            await new Promise((n, i) => {
                r((s) => s ? i(s) : n());
            });
    }
    /**
     * Throws an error if the response has neither a result nor an error, or if
     * the "isComplete" flag is falsy.
     */
    static _checkForCompletion(e, r, n) {
        if (!("result" in r) && !("error" in r))
            throw new ze.EthereumRpcError(ze.errorCodes.rpc.internal, `JsonRpcEngine: Response has no error or result for request:
${Yo(e)}`, {
                request: e
            });
        if (!n)
            throw new ze.EthereumRpcError(ze.errorCodes.rpc.internal, `JsonRpcEngine: Nothing ended request:
${Yo(e)}`, {
                request: e
            });
    }
}
Ln.JsonRpcEngine = gt;

function Yo(t) {
    return JSON.stringify(t, null, 2);
}
var Yi = {};
Object.defineProperty(Yi, "__esModule", {
    value: !0
});
Yi.mergeMiddleware = void 0;
const z2 = Ln;

function Z2(t) {
    const e = new z2.JsonRpcEngine();
    return t.forEach((r) => e.push(r)), e.asMiddleware();
}
Yi.mergeMiddleware = Z2;
(function(t) {
    var e = re && re.__createBinding || (Object.create ? function(n, i, s, o) {
            o === void 0 && (o = s), Object.defineProperty(n, o, {
                enumerable: !0,
                get: function() {
                    return i[s];
                }
            });
        } : function(n, i, s, o) {
            o === void 0 && (o = s), n[o] = i[s];
        }),
        r = re && re.__exportStar || function(n, i) {
            for (var s in n)
                s !== "default" && !Object.prototype.hasOwnProperty.call(i, s) && e(i, n, s);
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r(Vi, t), r(zi, t), r(Zi, t), r(Dn, t), r(Ln, t), r(Yi, t);
})(cc);
var Uh = {},
    fc = {};
const hc = /* @__PURE__ */ Lr(Rd);
var Ji = {};
Object.defineProperty(Ji, "__esModule", {
    value: !0
});
var Hu = hc,
    q2 = (
        /** @class */
        function() {
            function t(e) {
                if (this._maxConcurrency = e, this._queue = [], e <= 0)
                    throw new Error("semaphore must be initialized to a positive value");
                this._value = e;
            }
            return t.prototype.acquire = function() {
                var e = this,
                    r = this.isLocked(),
                    n = new Promise(function(i) {
                        return e._queue.push(i);
                    });
                return r || this._dispatch(), n;
            }, t.prototype.runExclusive = function(e) {
                return Hu.__awaiter(this, void 0, void 0, function() {
                    var r, n, i;
                    return Hu.__generator(this, function(s) {
                        switch (s.label) {
                            case 0:
                                return [4, this.acquire()];
                            case 1:
                                r = s.sent(), n = r[0], i = r[1], s.label = 2;
                            case 2:
                                return s.trys.push([2, , 4, 5]), [4, e(n)];
                            case 3:
                                return [2, s.sent()];
                            case 4:
                                return i(), [
                                    7
                                    /*endfinally*/
                                ];
                            case 5:
                                return [
                                    2
                                    /*return*/
                                ];
                        }
                    });
                });
            }, t.prototype.isLocked = function() {
                return this._value <= 0;
            }, t.prototype.release = function() {
                if (this._maxConcurrency > 1)
                    throw new Error("this method is unavailabel on semaphores with concurrency > 1; use the scoped release returned by acquire instead");
                if (this._currentReleaser) {
                    var e = this._currentReleaser;
                    this._currentReleaser = void 0, e();
                }
            }, t.prototype._dispatch = function() {
                var e = this,
                    r = this._queue.shift();
                if (r) {
                    var n = !1;
                    this._currentReleaser = function() {
                        n || (n = !0, e._value++, e._dispatch());
                    }, r([this._value--, this._currentReleaser]);
                }
            }, t;
        }()
    );
Ji.default = q2;
Object.defineProperty(fc, "__esModule", {
    value: !0
});
var Wu = hc,
    Y2 = Ji,
    J2 = (
        /** @class */
        function() {
            function t() {
                this._semaphore = new Y2.default(1);
            }
            return t.prototype.acquire = function() {
                return Wu.__awaiter(this, void 0, void 0, function() {
                    var e, r;
                    return Wu.__generator(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, this._semaphore.acquire()];
                            case 1:
                                return e = n.sent(), r = e[1], [2, r];
                        }
                    });
                });
            }, t.prototype.runExclusive = function(e) {
                return this._semaphore.runExclusive(function() {
                    return e();
                });
            }, t.prototype.isLocked = function() {
                return this._semaphore.isLocked();
            }, t.prototype.release = function() {
                this._semaphore.release();
            }, t;
        }()
    );
fc.default = J2;
var Qi = {};
Object.defineProperty(Qi, "__esModule", {
    value: !0
});
Qi.withTimeout = void 0;
var zn = hc;

function Q2(t, e, r) {
    var n = this;
    return r === void 0 && (r = new Error("timeout")), {
        acquire: function() {
            return new Promise(function(i, s) {
                return zn.__awaiter(n, void 0, void 0, function() {
                    var o, a, c;
                    return zn.__generator(this, function(u) {
                        switch (u.label) {
                            case 0:
                                return o = !1, setTimeout(function() {
                                    o = !0, s(r);
                                }, e), [4, t.acquire()];
                            case 1:
                                return a = u.sent(), o ? (c = Array.isArray(a) ? a[1] : a, c()) : i(a), [
                                    2
                                    /*return*/
                                ];
                        }
                    });
                });
            });
        },
        runExclusive: function(i) {
            return zn.__awaiter(this, void 0, void 0, function() {
                var s, o;
                return zn.__generator(this, function(a) {
                    switch (a.label) {
                        case 0:
                            s = function() {}, a.label = 1;
                        case 1:
                            return a.trys.push([1, , 7, 8]), [4, this.acquire()];
                        case 2:
                            return o = a.sent(), Array.isArray(o) ? (s = o[1], [4, i(o[0])]) : [3, 4];
                        case 3:
                            return [2, a.sent()];
                        case 4:
                            return s = o, [4, i()];
                        case 5:
                            return [2, a.sent()];
                        case 6:
                            return [3, 8];
                        case 7:
                            return s(), [
                                7
                                /*endfinally*/
                            ];
                        case 8:
                            return [
                                2
                                /*return*/
                            ];
                    }
                });
            });
        },
        release: function() {
            t.release();
        },
        isLocked: function() {
            return t.isLocked();
        }
    };
}
Qi.withTimeout = Q2;
(function(t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.withTimeout = t.Semaphore = t.Mutex = void 0;
    var e = fc;
    Object.defineProperty(t, "Mutex", {
        enumerable: !0,
        get: function() {
            return e.default;
        }
    });
    var r = Ji;
    Object.defineProperty(t, "Semaphore", {
        enumerable: !0,
        get: function() {
            return r.default;
        }
    });
    var n = Qi;
    Object.defineProperty(t, "withTimeout", {
        enumerable: !0,
        get: function() {
            return n.withTimeout;
        }
    });
})(Uh);
const Gu = (t, e, r, n) => function(...i) {
        const s = e.promiseModule;
        return new s((o, a) => {
            e.multiArgs ? i.push((...u) => {
                e.errorFirst ? u[0] ? a(u) : (u.shift(), o(u)) : o(u);
            }) : e.errorFirst ? i.push((u, l) => {
                u ? a(u) : o(l);
            }) : i.push(o), Reflect.apply(t, this === r ? n : this, i);
        });
    },
    $u = /* @__PURE__ */ new WeakMap();
var K2 = (t, e) => {
    e = {
        exclude: [/.+(?:Sync|Stream)$/],
        errorFirst: !0,
        promiseModule: Promise,
        ...e
    };
    const r = typeof t;
    if (!(t !== null && (r === "object" || r === "function")))
        throw new TypeError(`Expected \`input\` to be a \`Function\` or \`Object\`, got \`${t === null ? "null" : r}\``);
    const n = (o, a) => {
            let c = $u.get(o);
            if (c || (c = {}, $u.set(o, c)), a in c)
                return c[a];
            const u = (g) => typeof g == "string" || typeof a == "symbol" ? a === g : g.test(a),
                l = Reflect.getOwnPropertyDescriptor(o, a),
                b = l === void 0 || l.writable || l.configurable,
                p = (e.include ? e.include.some(u) : !e.exclude.some(u)) && b;
            return c[a] = p, p;
        },
        i = /* @__PURE__ */ new WeakMap(),
        s = new Proxy(t, {
            apply(o, a, c) {
                const u = i.get(o);
                if (u)
                    return Reflect.apply(u, a, c);
                const l = e.excludeMain ? o : Gu(o, e, s, o);
                return i.set(o, l), Reflect.apply(l, a, c);
            },
            get(o, a) {
                const c = o[a];
                if (!n(o, a) || c === Function.prototype[a])
                    return c;
                const u = i.get(c);
                if (u)
                    return u;
                if (typeof c == "function") {
                    const l = Gu(c, e, s, o);
                    return i.set(c, l), l;
                }
                return c;
            }
        });
    return s;
};
const X2 = Pr.default;
let eE = class extends X2 {
    constructor() {
        super(), this.updates = [];
    }
    async initialize() {}
    async update() {
        throw new Error("BaseFilter - no update method specified");
    }
    addResults(e) {
        this.updates = this.updates.concat(e), e.forEach((r) => this.emit("update", r));
    }
    addInitialResults(e) {}
    getChangesAndClear() {
        const e = this.updates;
        return this.updates = [], e;
    }
};
var dc = eE;
const tE = dc;
let rE = class extends tE {
    constructor() {
        super(), this.allResults = [];
    }
    async update() {
        throw new Error("BaseFilterWithHistory - no update method specified");
    }
    addResults(e) {
        this.allResults = this.allResults.concat(e), super.addResults(e);
    }
    addInitialResults(e) {
        this.allResults = this.allResults.concat(e), super.addInitialResults(e);
    }
    getAllResults() {
        return this.allResults;
    }
};
var nE = rE,
    Pn = {
        minBlockRef: iE,
        maxBlockRef: sE,
        sortBlockRefs: pc,
        bnToHex: oE,
        blockRefIsNumber: aE,
        hexToInt: gi,
        incrementHexInt: cE,
        intToHex: Fh,
        unsafeRandomBytes: uE
    };

function iE(...t) {
    return pc(t)[0];
}

function sE(...t) {
    const e = pc(t);
    return e[e.length - 1];
}

function pc(t) {
    return t.sort((e, r) => e === "latest" || r === "earliest" ? 1 : r === "latest" || e === "earliest" ? -1 : gi(e) - gi(r));
}

function oE(t) {
    return "0x" + t.toString(16);
}

function aE(t) {
    return t && !["earliest", "latest", "pending"].includes(t);
}

function gi(t) {
    return t == null ? t : Number.parseInt(t, 16);
}

function cE(t) {
    if (t == null)
        return t;
    const e = gi(t);
    return Fh(e + 1);
}

function Fh(t) {
    if (t == null)
        return t;
    let e = t.toString(16);
    return e.length % 2 && (e = "0" + e), "0x" + e;
}

function uE(t) {
    let e = "0x";
    for (let r = 0; r < t; r++)
        e += Vu(), e += Vu();
    return e;
}

function Vu() {
    return Math.floor(Math.random() * 16).toString(16);
}
const lE = Tw,
    fE = K2,
    hE = nE,
    {
        bnToHex: x3,
        hexToInt: Zn,
        incrementHexInt: dE,
        minBlockRef: pE,
        blockRefIsNumber: _E
    } = Pn;
let bE = class extends hE {
    constructor({
        provider: e,
        params: r
    }) {
        super(), this.type = "log", this.ethQuery = new lE(e), this.params = Object.assign({
            fromBlock: "latest",
            toBlock: "latest",
            address: void 0,
            topics: []
        }, r), this.params.address && (Array.isArray(this.params.address) || (this.params.address = [this.params.address]), this.params.address = this.params.address.map((n) => n.toLowerCase()));
    }
    async initialize({
        currentBlock: e
    }) {
        let r = this.params.fromBlock;
        ["latest", "pending"].includes(r) && (r = e), r === "earliest" && (r = "0x0"), this.params.fromBlock = r;
        const n = pE(this.params.toBlock, e),
            i = Object.assign({}, this.params, {
                toBlock: n
            }),
            s = await this._fetchLogs(i);
        this.addInitialResults(s);
    }
    async update({
        oldBlock: e,
        newBlock: r
    }) {
        const n = r;
        let i;
        e ? i = dE(e) : i = r;
        const s = Object.assign({}, this.params, {
                fromBlock: i,
                toBlock: n
            }),
            a = (await this._fetchLogs(s)).filter((c) => this.matchLog(c));
        this.addResults(a);
    }
    async _fetchLogs(e) {
        return await fE((n) => this.ethQuery.getLogs(e, n))();
    }
    matchLog(e) {
        if (Zn(this.params.fromBlock) >= Zn(e.blockNumber) || _E(this.params.toBlock) && Zn(this.params.toBlock) <= Zn(e.blockNumber))
            return !1;
        const r = e.address && e.address.toLowerCase();
        return this.params.address && r && !this.params.address.includes(r) ? !1 : this.params.topics.every((i, s) => {
            let o = e.topics[s];
            if (!o)
                return !1;
            o = o.toLowerCase();
            let a = Array.isArray(i) ? i : [i];
            return a.includes(null) ? !0 : (a = a.map((l) => l.toLowerCase()), a.includes(o));
        });
    }
};
var gE = bE,
    _c = mE;
async function mE({
    provider: t,
    fromBlock: e,
    toBlock: r
}) {
    e || (e = r);
    const n = zu(e),
        s = zu(r) - n + 1,
        o = Array(s).fill().map((c, u) => n + u).map(yE);
    return await Promise.all(
        o.map((c) => vE(t, "eth_getBlockByNumber", [c, !1]))
    );
}

function zu(t) {
    return t == null ? t : Number.parseInt(t, 16);
}

function yE(t) {
    return t == null ? t : "0x" + t.toString(16);
}

function vE(t, e, r) {
    return new Promise((n, i) => {
        t.sendAsync({
            id: 1,
            jsonrpc: "2.0",
            method: e,
            params: r
        }, (s, o) => {
            if (s)
                return i(s);
            n(o.result);
        });
    });
}
const wE = dc,
    EE = _c,
    {
        incrementHexInt: SE
    } = Pn;
let kE = class extends wE {
    constructor({
        provider: e,
        params: r
    }) {
        super(), this.type = "block", this.provider = e;
    }
    async update({
        oldBlock: e,
        newBlock: r
    }) {
        const n = r,
            i = SE(e),
            o = (await EE({
                provider: this.provider,
                fromBlock: i,
                toBlock: n
            })).map((a) => a.hash);
        this.addResults(o);
    }
};
var RE = kE;
const IE = dc,
    AE = _c,
    {
        incrementHexInt: TE
    } = Pn;
let CE = class extends IE {
    constructor({
        provider: e
    }) {
        super(), this.type = "tx", this.provider = e;
    }
    async update({
        oldBlock: e
    }) {
        const r = e,
            n = TE(e),
            i = await AE({
                provider: this.provider,
                fromBlock: n,
                toBlock: r
            }),
            s = [];
        for (const o of i)
            s.push(...o.transactions);
        this.addResults(s);
    }
};
var ME = CE;
const xE = Uh.Mutex,
    {
        createAsyncMiddleware: OE
    } = cc,
    NE = bi,
    DE = gE,
    LE = RE,
    PE = ME,
    {
        intToHex: Hh,
        hexToInt: Jo
    } = Pn;
var jE = BE;

function BE({
    blockTracker: t,
    provider: e
}) {
    let r = 0,
        n = {};
    const i = new xE(),
        s = UE({
            mutex: i
        }),
        o = NE({
            // install filters
            eth_newFilter: s(Qo(c)),
            eth_newBlockFilter: s(Qo(u)),
            eth_newPendingTransactionFilter: s(Qo(l)),
            // uninstall filters
            eth_uninstallFilter: s(ni(p)),
            // checking filter changes
            eth_getFilterChanges: s(ni(b)),
            eth_getFilterLogs: s(ni(f))
        }),
        a = async ({
            oldBlock: m,
            newBlock: w
        }) => {
            if (n.length === 0)
                return;
            const A = await i.acquire();
            try {
                await Promise.all(lr(n).map(async (N) => {
                    try {
                        await N.update({
                            oldBlock: m,
                            newBlock: w
                        });
                    } catch (U) {
                        console.error(U);
                    }
                }));
            } catch (N) {
                console.error(N);
            }
            A();
        };
    return o.newLogFilter = c, o.newBlockFilter = u, o.newPendingTransactionFilter = l, o.uninstallFilter = p, o.getFilterChanges = b, o.getFilterLogs = f, o.destroy = () => {
        I();
    }, o;
    async function c(m) {
        const w = new DE({
            provider: e,
            params: m
        });
        return await g(w), w;
    }
    async function u() {
        const m = new LE({
            provider: e
        });
        return await g(m), m;
    }
    async function l() {
        const m = new PE({
            provider: e
        });
        return await g(m), m;
    }
    async function b(m) {
        const w = Jo(m),
            A = n[w];
        if (!A)
            throw new Error(`No filter for index "${w}"`);
        return A.getChangesAndClear();
    }
    async function f(m) {
        const w = Jo(m),
            A = n[w];
        if (!A)
            throw new Error(`No filter for index "${w}"`);
        return A.type === "log" ? results = A.getAllResults() : results = [], results;
    }
    async function p(m) {
        const w = Jo(m),
            A = n[w],
            N = Boolean(A);
        return N && await S(w), N;
    }
    async function g(m) {
        const w = lr(n).length,
            A = await t.getLatestBlock();
        await m.initialize({
            currentBlock: A
        }), r++, n[r] = m, m.id = r, m.idHex = Hh(r);
        const N = lr(n).length;
        return _({
            prevFilterCount: w,
            newFilterCount: N
        }), r;
    }
    async function S(m) {
        const w = lr(n).length;
        delete n[m];
        const A = lr(n).length;
        _({
            prevFilterCount: w,
            newFilterCount: A
        });
    }
    async function I() {
        const m = lr(n).length;
        n = {}, _({
            prevFilterCount: m,
            newFilterCount: 0
        });
    }

    function _({
        prevFilterCount: m,
        newFilterCount: w
    }) {
        if (m === 0 && w > 0) {
            t.on("sync", a);
            return;
        }
        if (m > 0 && w === 0) {
            t.removeListener("sync", a);
            return;
        }
    }
}

function Qo(t) {
    return ni(async (...e) => {
        const r = await t(...e);
        return Hh(r.id);
    });
}

function ni(t) {
    return OE(async (e, r) => {
        const n = await t.apply(null, e.params);
        r.result = n;
    });
}

function UE({
    mutex: t
}) {
    return (e) => async (r, n, i, s) => {
        (await t.acquire())(), e(r, n, i, s);
    };
}

function lr(t, e) {
    const r = [];
    for (let n in t)
        r.push(t[n]);
    return r;
}
const FE = Pr.default,
    HE = bi,
    {
        createAsyncMiddleware: Zu
    } = cc,
    WE = jE,
    {
        unsafeRandomBytes: GE,
        incrementHexInt: $E
    } = Pn,
    VE = _c;
var zE = ZE;

function ZE({
    blockTracker: t,
    provider: e
}) {
    const r = {},
        n = WE({
            blockTracker: t,
            provider: e
        });
    let i = !1;
    const s = new FE(),
        o = HE({
            eth_subscribe: Zu(a),
            eth_unsubscribe: Zu(c)
        });
    return o.destroy = l, {
        events: s,
        middleware: o
    };
    async function a(b, f) {
        if (i)
            throw new Error(
                "SubscriptionManager - attempting to use after destroying"
            );
        const p = b.params[0],
            g = GE(16);
        let S;
        switch (p) {
            case "newHeads":
                S = I({
                    subId: g
                });
                break;
            case "logs":
                const m = b.params[1],
                    w = await n.newLogFilter(m);
                S = _({
                    subId: g,
                    filter: w
                });
                break;
            default:
                throw new Error(`SubscriptionManager - unsupported subscription type "${p}"`);
        }
        r[g] = S, f.result = g;
        return;

        function I({
            subId: m
        }) {
            const w = {
                type: p,
                destroy: async () => {
                    t.removeListener("sync", w.update);
                },
                update: async ({
                    oldBlock: A,
                    newBlock: N
                }) => {
                    const U = N,
                        F = $E(A);
                    (await VE({
                        provider: e,
                        fromBlock: F,
                        toBlock: U
                    })).map(qE).forEach((ie) => {
                        u(m, ie);
                    });
                }
            };
            return t.on("sync", w.update), w;
        }

        function _({
            subId: m,
            filter: w
        }) {
            return w.on("update", (N) => u(m, N)), {
                type: p,
                destroy: async () => await n.uninstallFilter(w.idHex)
            };
        }
    }
    async function c(b, f) {
        if (i)
            throw new Error(
                "SubscriptionManager - attempting to use after destroying"
            );
        const p = b.params[0],
            g = r[p];
        if (!g) {
            f.result = !1;
            return;
        }
        delete r[p], await g.destroy(), f.result = !0;
    }

    function u(b, f) {
        s.emit("notification", {
            jsonrpc: "2.0",
            method: "eth_subscription",
            params: {
                subscription: b,
                result: f
            }
        });
    }

    function l() {
        s.removeAllListeners();
        for (const b in r)
            r[b].destroy(), delete r[b];
        i = !0;
    }
}

function qE(t) {
    return {
        hash: t.hash,
        parentHash: t.parentHash,
        sha3Uncles: t.sha3Uncles,
        miner: t.miner,
        stateRoot: t.stateRoot,
        transactionsRoot: t.transactionsRoot,
        receiptsRoot: t.receiptsRoot,
        logsBloom: t.logsBloom,
        difficulty: t.difficulty,
        number: t.number,
        gasLimit: t.gasLimit,
        gasUsed: t.gasUsed,
        nonce: t.nonce,
        mixHash: t.mixHash,
        timestamp: t.timestamp,
        extraData: t.extraData
    };
}
Object.defineProperty(Wi, "__esModule", {
    value: !0
});
Wi.SubscriptionManager = void 0;
const YE = O2,
    JE = zE,
    qu = () => {};
class QE {
    constructor(e) {
        const r = new YE({
                provider: e,
                pollingInterval: 15e3,
                setSkipCacheFlag: !0
            }),
            {
                events: n,
                middleware: i
            } = JE({
                blockTracker: r,
                provider: e
            });
        this.events = n, this.subscriptionMiddleware = i;
    }
    async handleRequest(e) {
        const r = {};
        return await this.subscriptionMiddleware(e, r, qu, qu), r;
    }
    destroy() {
        this.subscriptionMiddleware.destroy();
    }
}
Wi.SubscriptionManager = QE;
var bc = re && re.__importDefault || function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
};
Object.defineProperty(Er, "__esModule", {
    value: !0
});
Er.CoinbaseWalletProvider = void 0;
const KE = bc(Pr),
    XE = bc(Si),
    Oe = Ai,
    Ko = jr,
    Yu = Br,
    Ju = it,
    Y = B,
    Xo = bc(bw),
    eS = xr,
    ae = ph,
    tS = Wi,
    Qu = "DefaultChainId",
    Ku = "DefaultJsonRpcUrl";
class rS extends KE.default {
    constructor(e) {
        var r, n;
        super(), this._filterPolyfill = new eS.FilterPolyfill(this), this._subscriptionManager = new tS.SubscriptionManager(this), this._relay = null, this._addresses = [], this.hasMadeFirstChainChangedEmission = !1, this._send = this.send.bind(this), this._sendAsync = this.sendAsync.bind(this), this.setProviderInfo = this.setProviderInfo.bind(this), this.updateProviderInfo = this.updateProviderInfo.bind(this), this.getChainId = this.getChainId.bind(this), this.setAppInfo = this.setAppInfo.bind(this), this.enable = this.enable.bind(this), this.close = this.close.bind(this), this.send = this.send.bind(this), this.sendAsync = this.sendAsync.bind(this), this.request = this.request.bind(this), this._setAddresses = this._setAddresses.bind(this), this.scanQRCode = this.scanQRCode.bind(this), this.genericRequest = this.genericRequest.bind(this), this._chainIdFromOpts = e.chainId, this._jsonRpcUrlFromOpts = e.jsonRpcUrl, this._overrideIsMetaMask = e.overrideIsMetaMask, this._relayProvider = e.relayProvider, this._storage = e.storage, this._relayEventManager = e.relayEventManager, this.diagnostic = e.diagnosticLogger, this.reloadOnDisconnect = !0, this.isCoinbaseWallet = (r = e.overrideIsCoinbaseWallet) !== null && r !== void 0 ? r : !0, this.isCoinbaseBrowser = (n = e.overrideIsCoinbaseBrowser) !== null && n !== void 0 ? n : !1, this.qrUrl = e.qrUrl, this.supportsAddressSwitching = e.supportsAddressSwitching, this.isLedger = e.isLedger;
        const i = this.getChainId(),
            s = (0, Y.prepend0x)(i.toString(16));
        this.emit("connect", {
            chainIdStr: s
        });
        const o = this._storage.getItem(Ju.LOCAL_STORAGE_ADDRESSES_KEY);
        if (o) {
            const a = o.split(" ");
            a[0] !== "" && (this._addresses = a.map((c) => (0, Y.ensureAddressString)(c)), this.emit("accountsChanged", a));
        }
        this._subscriptionManager.events.on("notification", (a) => {
            this.emit("message", {
                type: a.method,
                data: a.params
            });
        }), this._addresses.length > 0 && this.initializeRelay(), window.addEventListener("message", (a) => {
            var c;
            if (!(a.origin !== location.origin || a.source !== window) && a.data.type === "walletLinkMessage") {
                if (a.data.data.action === "defaultChainChanged" || a.data.data.action === "dappChainSwitched") {
                    const u = a.data.data.chainId,
                        l = (c = a.data.data.jsonRpcUrl) !== null && c !== void 0 ? c : this.jsonRpcUrl;
                    this.updateProviderInfo(l, Number(u));
                }
                a.data.data.action === "addressChanged" && this._setAddresses([a.data.data.address]);
            }
        });
    }
    get selectedAddress() {
        return this._addresses[0] || void 0;
    }
    get networkVersion() {
        return this.getChainId().toString(10);
    }
    get chainId() {
        return (0, Y.prepend0x)(this.getChainId().toString(16));
    }
    get isWalletLink() {
        return !0;
    }
    /**
     * Some DApps (i.e. Alpha Homora) seem to require the window.ethereum object return
     * true for this method.
     */
    get isMetaMask() {
        return this._overrideIsMetaMask;
    }
    get host() {
        return this.jsonRpcUrl;
    }
    get connected() {
        return !0;
    }
    isConnected() {
        return !0;
    }
    get jsonRpcUrl() {
        var e;
        return (e = this._storage.getItem(Ku)) !== null && e !== void 0 ? e : this._jsonRpcUrlFromOpts;
    }
    set jsonRpcUrl(e) {
        this._storage.setItem(Ku, e);
    }
    disableReloadOnDisconnect() {
        this.reloadOnDisconnect = !1;
    }
    /**
     * this function is called when coinbase provider is being injected to a dapp
     * standalone + walletlinked extension, ledger, in-app browser using cipher-web-view
     */
    setProviderInfo(e, r) {
        this.isLedger || this.isCoinbaseBrowser || (this._chainIdFromOpts = r, this._jsonRpcUrlFromOpts = e), this.updateProviderInfo(this.jsonRpcUrl, this.getChainId());
    }
    updateProviderInfo(e, r) {
        this.jsonRpcUrl = e;
        const n = this.getChainId();
        this._storage.setItem(Qu, r.toString(10)), ((0, Y.ensureIntNumber)(r) !== n || !this.hasMadeFirstChainChangedEmission) && (this.emit("chainChanged", this.getChainId()), this.hasMadeFirstChainChangedEmission = !0);
    }
    async watchAsset(e, r, n, i, s, o) {
        return !!(await (await this.initializeRelay()).watchAsset(e, r, n, i, s, o == null ? void 0 : o.toString()).promise).result;
    }
    async addEthereumChain(e, r, n, i, s, o) {
        var a, c;
        if ((0, Y.ensureIntNumber)(e) === this.getChainId())
            return !1;
        const u = await this.initializeRelay(),
            l = u.inlineAddEthereumChain(e.toString());
        !this._isAuthorized() && !l && await u.requestEthereumAccounts().promise;
        const b = await u.addEthereumChain(e.toString(), r, s, n, i, o).promise;
        return ((a = b.result) === null || a === void 0 ? void 0 : a.isApproved) === !0 && this.updateProviderInfo(r[0], e), ((c = b.result) === null || c === void 0 ? void 0 : c.isApproved) === !0;
    }
    async switchEthereumChain(e) {
        const n = await (await this.initializeRelay()).switchEthereumChain(e.toString(10), this.selectedAddress || void 0).promise;
        if (n.errorCode)
            throw Oe.ethErrors.provider.custom({
                code: n.errorCode
            });
        const i = n.result;
        i.isApproved && i.rpcUrl.length > 0 && this.updateProviderInfo(i.rpcUrl, e);
    }
    setAppInfo(e, r) {
        this.initializeRelay().then((n) => n.setAppInfo(e, r));
    }
    async enable() {
        var e;
        return (e = this.diagnostic) === null || e === void 0 || e.log(Ko.EVENTS.ETH_ACCOUNTS_STATE, {
            method: "provider::enable",
            addresses_length: this._addresses.length,
            sessionIdHash: this._relay ? Yu.Session.hash(this._relay.session.id) : void 0
        }), this._addresses.length > 0 ? [...this._addresses] : await this._send(ae.JSONRPCMethod.eth_requestAccounts);
    }
    async close() {
        (await this.initializeRelay()).resetAndReload();
    }
    send(e, r) {
        if (typeof e == "string") {
            const i = e,
                s = Array.isArray(r) ? r : r !== void 0 ? [r] : [],
                o = {
                    jsonrpc: "2.0",
                    id: 0,
                    method: i,
                    params: s
                };
            return this._sendRequestAsync(o).then((a) => a.result);
        }
        if (typeof r == "function") {
            const i = e,
                s = r;
            return this._sendAsync(i, s);
        }
        if (Array.isArray(e))
            return e.map((s) => this._sendRequest(s));
        const n = e;
        return this._sendRequest(n);
    }
    async sendAsync(e, r) {
        if (typeof r != "function")
            throw new Error("callback is required");
        if (Array.isArray(e)) {
            const i = r;
            this._sendMultipleRequestsAsync(e).then((s) => i(null, s)).catch((s) => i(s, null));
            return;
        }
        const n = r;
        return this._sendRequestAsync(e).then((i) => n(null, i)).catch((i) => n(i, null));
    }
    async request(e) {
        if (!e || typeof e != "object" || Array.isArray(e))
            throw Oe.ethErrors.rpc.invalidRequest({
                message: "Expected a single, non-array, object argument.",
                data: e
            });
        const {
            method: r,
            params: n
        } = e;
        if (typeof r != "string" || r.length === 0)
            throw Oe.ethErrors.rpc.invalidRequest({
                message: "'args.method' must be a non-empty string.",
                data: e
            });
        if (n !== void 0 && !Array.isArray(n) && (typeof n != "object" || n === null))
            throw Oe.ethErrors.rpc.invalidRequest({
                message: "'args.params' must be an object or array if provided.",
                data: e
            });
        const i = n === void 0 ? [] : n,
            s = this._relayEventManager.makeRequestId();
        return (await this._sendRequestAsync({
            method: r,
            params: i,
            jsonrpc: "2.0",
            id: s
        })).result;
    }
    async scanQRCode(e) {
        const n = await (await this.initializeRelay()).scanQRCode((0, Y.ensureRegExpString)(e)).promise;
        if (typeof n.result != "string")
            throw new Error("result was not a string");
        return n.result;
    }
    async genericRequest(e, r) {
        const i = await (await this.initializeRelay()).genericRequest(e, r).promise;
        if (typeof i.result != "string")
            throw new Error("result was not a string");
        return i.result;
    }
    async selectProvider(e) {
        const n = await (await this.initializeRelay()).selectProvider(e).promise;
        if (typeof n.result != "string")
            throw new Error("result was not a string");
        return n.result;
    }
    supportsSubscriptions() {
        return !1;
    }
    subscribe() {
        throw new Error("Subscriptions are not supported");
    }
    unsubscribe() {
        throw new Error("Subscriptions are not supported");
    }
    disconnect() {
        return !0;
    }
    _sendRequest(e) {
        const r = {
                jsonrpc: "2.0",
                id: e.id
            },
            {
                method: n
            } = e;
        if (r.result = this._handleSynchronousMethods(e), r.result === void 0)
            throw new Error(`Coinbase Wallet does not support calling ${n} synchronously without a callback. Please provide a callback parameter to call ${n} asynchronously.`);
        return r;
    }
    _setAddresses(e, r) {
        if (!Array.isArray(e))
            throw new Error("addresses is not an array");
        const n = e.map((i) => (0, Y.ensureAddressString)(i));
        JSON.stringify(n) !== JSON.stringify(this._addresses) && (this._addresses.length > 0 && this.supportsAddressSwitching === !1 && !r || (this._addresses = n, this.emit("accountsChanged", this._addresses), this._storage.setItem(Ju.LOCAL_STORAGE_ADDRESSES_KEY, n.join(" "))));
    }
    _sendRequestAsync(e) {
        return new Promise((r, n) => {
            try {
                const i = this._handleSynchronousMethods(e);
                if (i !== void 0)
                    return r({
                        jsonrpc: "2.0",
                        id: e.id,
                        result: i
                    });
                const s = this._handleAsynchronousFilterMethods(e);
                if (s !== void 0) {
                    s.then((a) => r(Object.assign(Object.assign({}, a), {
                        id: e.id
                    }))).catch((a) => n(a));
                    return;
                }
                const o = this._handleSubscriptionMethods(e);
                if (o !== void 0) {
                    o.then((a) => r({
                        jsonrpc: "2.0",
                        id: e.id,
                        result: a.result
                    })).catch((a) => n(a));
                    return;
                }
            } catch (i) {
                return n(i);
            }
            this._handleAsynchronousMethods(e).then((i) => i && r(Object.assign(Object.assign({}, i), {
                id: e.id
            }))).catch((i) => n(i));
        });
    }
    _sendMultipleRequestsAsync(e) {
        return Promise.all(e.map((r) => this._sendRequestAsync(r)));
    }
    _handleSynchronousMethods(e) {
        const {
            method: r
        } = e, n = e.params || [];
        switch (r) {
            case ae.JSONRPCMethod.eth_accounts:
                return this._eth_accounts();
            case ae.JSONRPCMethod.eth_coinbase:
                return this._eth_coinbase();
            case ae.JSONRPCMethod.eth_uninstallFilter:
                return this._eth_uninstallFilter(n);
            case ae.JSONRPCMethod.net_version:
                return this._net_version();
            case ae.JSONRPCMethod.eth_chainId:
                return this._eth_chainId();
            default:
                return;
        }
    }
    async _handleAsynchronousMethods(e) {
        const {
            method: r
        } = e, n = e.params || [];
        switch (r) {
            case ae.JSONRPCMethod.eth_requestAccounts:
                return this._eth_requestAccounts();
            case ae.JSONRPCMethod.eth_sign:
                return this._eth_sign(n);
            case ae.JSONRPCMethod.eth_ecRecover:
                return this._eth_ecRecover(n);
            case ae.JSONRPCMethod.personal_sign:
                return this._personal_sign(n);
            case ae.JSONRPCMethod.personal_ecRecover:
                return this._personal_ecRecover(n);
            case ae.JSONRPCMethod.eth_signTransaction:
                return this._eth_signTransaction(n);
            case ae.JSONRPCMethod.eth_sendRawTransaction:
                return this._eth_sendRawTransaction(n);
            case ae.JSONRPCMethod.eth_sendTransaction:
                return this._eth_sendTransaction(n);
            case ae.JSONRPCMethod.eth_signTypedData_v1:
                return this._eth_signTypedData_v1(n);
            case ae.JSONRPCMethod.eth_signTypedData_v2:
                return this._throwUnsupportedMethodError();
            case ae.JSONRPCMethod.eth_signTypedData_v3:
                return this._eth_signTypedData_v3(n);
            case ae.JSONRPCMethod.eth_signTypedData_v4:
            case ae.JSONRPCMethod.eth_signTypedData:
                return this._eth_signTypedData_v4(n);
            case ae.JSONRPCMethod.cbWallet_arbitrary:
                return this._cbwallet_arbitrary(n);
            case ae.JSONRPCMethod.wallet_addEthereumChain:
                return this._wallet_addEthereumChain(n);
            case ae.JSONRPCMethod.wallet_switchEthereumChain:
                return this._wallet_switchEthereumChain(n);
            case ae.JSONRPCMethod.wallet_watchAsset:
                return this._wallet_watchAsset(n);
        }
        return (await this.initializeRelay()).makeEthereumJSONRPCRequest(e, this.jsonRpcUrl);
    }
    _handleAsynchronousFilterMethods(e) {
        const {
            method: r
        } = e, n = e.params || [];
        switch (r) {
            case ae.JSONRPCMethod.eth_newFilter:
                return this._eth_newFilter(n);
            case ae.JSONRPCMethod.eth_newBlockFilter:
                return this._eth_newBlockFilter();
            case ae.JSONRPCMethod.eth_newPendingTransactionFilter:
                return this._eth_newPendingTransactionFilter();
            case ae.JSONRPCMethod.eth_getFilterChanges:
                return this._eth_getFilterChanges(n);
            case ae.JSONRPCMethod.eth_getFilterLogs:
                return this._eth_getFilterLogs(n);
        }
    }
    _handleSubscriptionMethods(e) {
        switch (e.method) {
            case ae.JSONRPCMethod.eth_subscribe:
            case ae.JSONRPCMethod.eth_unsubscribe:
                return this._subscriptionManager.handleRequest(e);
        }
    }
    _isKnownAddress(e) {
        try {
            const r = (0, Y.ensureAddressString)(e);
            return this._addresses.map((i) => (0, Y.ensureAddressString)(i)).includes(r);
        } catch {}
        return !1;
    }
    _ensureKnownAddress(e) {
        var r;
        if (!this._isKnownAddress(e))
            throw (r = this.diagnostic) === null || r === void 0 || r.log(Ko.EVENTS.UNKNOWN_ADDRESS_ENCOUNTERED), new Error("Unknown Ethereum address");
    }
    _prepareTransactionParams(e) {
        const r = e.from ? (0, Y.ensureAddressString)(e.from) : this.selectedAddress;
        if (!r)
            throw new Error("Ethereum address is unavailable");
        this._ensureKnownAddress(r);
        const n = e.to ? (0, Y.ensureAddressString)(e.to) : null,
            i = e.value != null ? (0, Y.ensureBN)(e.value) : new XE.default(0),
            s = e.data ? (0, Y.ensureBuffer)(e.data) : Buffer.alloc(0),
            o = e.nonce != null ? (0, Y.ensureIntNumber)(e.nonce) : null,
            a = e.gasPrice != null ? (0, Y.ensureBN)(e.gasPrice) : null,
            c = e.maxFeePerGas != null ? (0, Y.ensureBN)(e.maxFeePerGas) : null,
            u = e.maxPriorityFeePerGas != null ? (0, Y.ensureBN)(e.maxPriorityFeePerGas) : null,
            l = e.gas != null ? (0, Y.ensureBN)(e.gas) : null,
            b = this.getChainId();
        return {
            fromAddress: r,
            toAddress: n,
            weiValue: i,
            data: s,
            nonce: o,
            gasPriceInWei: a,
            maxFeePerGas: c,
            maxPriorityFeePerGas: u,
            gasLimit: l,
            chainId: b
        };
    }
    _isAuthorized() {
        return this._addresses.length > 0;
    }
    _requireAuthorization() {
        if (!this._isAuthorized())
            throw Oe.ethErrors.provider.unauthorized({});
    }
    _throwUnsupportedMethodError() {
        throw Oe.ethErrors.provider.unsupportedMethod({});
    }
    async _signEthereumMessage(e, r, n, i) {
        this._ensureKnownAddress(r);
        try {
            return {
                jsonrpc: "2.0",
                id: 0,
                result: (await (await this.initializeRelay()).signEthereumMessage(e, r, n, i).promise).result
            };
        } catch (s) {
            throw typeof s.message == "string" && s.message.match(/(denied|rejected)/i) ? Oe.ethErrors.provider.userRejectedRequest("User denied message signature") : s;
        }
    }
    async _ethereumAddressFromSignedMessage(e, r, n) {
        return {
            jsonrpc: "2.0",
            id: 0,
            result: (await (await this.initializeRelay()).ethereumAddressFromSignedMessage(e, r, n).promise).result
        };
    }
    _eth_accounts() {
        return [...this._addresses];
    }
    _eth_coinbase() {
        return this.selectedAddress || null;
    }
    _net_version() {
        return this.getChainId().toString(10);
    }
    _eth_chainId() {
        return (0, Y.hexStringFromIntNumber)(this.getChainId());
    }
    getChainId() {
        const e = this._storage.getItem(Qu);
        if (!e)
            return (0, Y.ensureIntNumber)(this._chainIdFromOpts);
        const r = parseInt(e, 10);
        return (0, Y.ensureIntNumber)(r);
    }
    async _eth_requestAccounts() {
        var e;
        if ((e = this.diagnostic) === null || e === void 0 || e.log(Ko.EVENTS.ETH_ACCOUNTS_STATE, {
                method: "provider::_eth_requestAccounts",
                addresses_length: this._addresses.length,
                sessionIdHash: this._relay ? Yu.Session.hash(this._relay.session.id) : void 0
            }), this._addresses.length > 0)
            return Promise.resolve({
                jsonrpc: "2.0",
                id: 0,
                result: this._addresses
            });
        let r;
        try {
            r = await (await this.initializeRelay()).requestEthereumAccounts().promise;
        } catch (n) {
            throw typeof n.message == "string" && n.message.match(/(denied|rejected)/i) ? Oe.ethErrors.provider.userRejectedRequest("User denied account authorization") : n;
        }
        if (!r.result)
            throw new Error("accounts received is empty");
        return this._setAddresses(r.result), this.isLedger || this.isCoinbaseBrowser || await this.switchEthereumChain(this.getChainId()), {
            jsonrpc: "2.0",
            id: 0,
            result: this._addresses
        };
    }
    _eth_sign(e) {
        this._requireAuthorization();
        const r = (0, Y.ensureAddressString)(e[0]),
            n = (0, Y.ensureBuffer)(e[1]);
        return this._signEthereumMessage(n, r, !1);
    }
    _eth_ecRecover(e) {
        const r = (0, Y.ensureBuffer)(e[0]),
            n = (0, Y.ensureBuffer)(e[1]);
        return this._ethereumAddressFromSignedMessage(r, n, !1);
    }
    _personal_sign(e) {
        this._requireAuthorization();
        const r = (0, Y.ensureBuffer)(e[0]),
            n = (0, Y.ensureAddressString)(e[1]);
        return this._signEthereumMessage(r, n, !0);
    }
    _personal_ecRecover(e) {
        const r = (0, Y.ensureBuffer)(e[0]),
            n = (0, Y.ensureBuffer)(e[1]);
        return this._ethereumAddressFromSignedMessage(r, n, !0);
    }
    async _eth_signTransaction(e) {
        this._requireAuthorization();
        const r = this._prepareTransactionParams(e[0] || {});
        try {
            return {
                jsonrpc: "2.0",
                id: 0,
                result: (await (await this.initializeRelay()).signEthereumTransaction(r).promise).result
            };
        } catch (n) {
            throw typeof n.message == "string" && n.message.match(/(denied|rejected)/i) ? Oe.ethErrors.provider.userRejectedRequest("User denied transaction signature") : n;
        }
    }
    async _eth_sendRawTransaction(e) {
        const r = (0, Y.ensureBuffer)(e[0]);
        return {
            jsonrpc: "2.0",
            id: 0,
            result: (await (await this.initializeRelay()).submitEthereumTransaction(r, this.getChainId()).promise).result
        };
    }
    async _eth_sendTransaction(e) {
        this._requireAuthorization();
        const r = this._prepareTransactionParams(e[0] || {});
        try {
            return {
                jsonrpc: "2.0",
                id: 0,
                result: (await (await this.initializeRelay()).signAndSubmitEthereumTransaction(r).promise).result
            };
        } catch (n) {
            throw typeof n.message == "string" && n.message.match(/(denied|rejected)/i) ? Oe.ethErrors.provider.userRejectedRequest("User denied transaction signature") : n;
        }
    }
    async _eth_signTypedData_v1(e) {
        this._requireAuthorization();
        const r = (0, Y.ensureParsedJSONObject)(e[0]),
            n = (0, Y.ensureAddressString)(e[1]);
        this._ensureKnownAddress(n);
        const i = Xo.default.hashForSignTypedDataLegacy({
                data: r
            }),
            s = JSON.stringify(r, null, 2);
        return this._signEthereumMessage(i, n, !1, s);
    }
    async _eth_signTypedData_v3(e) {
        this._requireAuthorization();
        const r = (0, Y.ensureAddressString)(e[0]),
            n = (0, Y.ensureParsedJSONObject)(e[1]);
        this._ensureKnownAddress(r);
        const i = Xo.default.hashForSignTypedData_v3({
                data: n
            }),
            s = JSON.stringify(n, null, 2);
        return this._signEthereumMessage(i, r, !1, s);
    }
    async _eth_signTypedData_v4(e) {
        this._requireAuthorization();
        const r = (0, Y.ensureAddressString)(e[0]),
            n = (0, Y.ensureParsedJSONObject)(e[1]);
        this._ensureKnownAddress(r);
        const i = Xo.default.hashForSignTypedData_v4({
                data: n
            }),
            s = JSON.stringify(n, null, 2);
        return this._signEthereumMessage(i, r, !1, s);
    }
    /** @deprecated */
    async _cbwallet_arbitrary(e) {
        const r = e[0],
            n = e[1];
        if (typeof n != "string")
            throw new Error("parameter must be a string");
        if (typeof r != "object" || r === null)
            throw new Error("parameter must be an object");
        return {
            jsonrpc: "2.0",
            id: 0,
            result: await this.genericRequest(r, n)
        };
    }
    async _wallet_addEthereumChain(e) {
        var r, n, i, s;
        const o = e[0];
        if (((r = o.rpcUrls) === null || r === void 0 ? void 0 : r.length) === 0)
            return {
                jsonrpc: "2.0",
                id: 0,
                error: {
                    code: 2,
                    message: "please pass in at least 1 rpcUrl"
                }
            };
        if (!o.chainName || o.chainName.trim() === "")
            throw Oe.ethErrors.provider.custom({
                code: 0,
                message: "chainName is a required field"
            });
        if (!o.nativeCurrency)
            throw Oe.ethErrors.provider.custom({
                code: 0,
                message: "nativeCurrency is a required field"
            });
        const a = parseInt(o.chainId, 16);
        return await this.addEthereumChain(a, (n = o.rpcUrls) !== null && n !== void 0 ? n : [], (i = o.blockExplorerUrls) !== null && i !== void 0 ? i : [], o.chainName, (s = o.iconUrls) !== null && s !== void 0 ? s : [], o.nativeCurrency) ? {
            jsonrpc: "2.0",
            id: 0,
            result: null
        } : {
            jsonrpc: "2.0",
            id: 0,
            error: {
                code: 2,
                message: "unable to add ethereum chain"
            }
        };
    }
    async _wallet_switchEthereumChain(e) {
        const r = e[0];
        return await this.switchEthereumChain(parseInt(r.chainId, 16)), {
            jsonrpc: "2.0",
            id: 0,
            result: null
        };
    }
    async _wallet_watchAsset(e) {
        const r = Array.isArray(e) ? e[0] : e;
        if (!r.type)
            throw Oe.ethErrors.rpc.invalidParams({
                message: "Type is required"
            });
        if ((r == null ? void 0 : r.type) !== "ERC20")
            throw Oe.ethErrors.rpc.invalidParams({
                message: `Asset of type '${r.type}' is not supported`
            });
        if (!(r != null && r.options))
            throw Oe.ethErrors.rpc.invalidParams({
                message: "Options are required"
            });
        if (!(r != null && r.options.address))
            throw Oe.ethErrors.rpc.invalidParams({
                message: "Address is required"
            });
        const n = this.getChainId(),
            {
                address: i,
                symbol: s,
                image: o,
                decimals: a
            } = r.options;
        return {
            jsonrpc: "2.0",
            id: 0,
            result: await this.watchAsset(r.type, i, s, a, o, n)
        };
    }
    _eth_uninstallFilter(e) {
        const r = (0, Y.ensureHexString)(e[0]);
        return this._filterPolyfill.uninstallFilter(r);
    }
    async _eth_newFilter(e) {
        const r = e[0];
        return {
            jsonrpc: "2.0",
            id: 0,
            result: await this._filterPolyfill.newFilter(r)
        };
    }
    async _eth_newBlockFilter() {
        return {
            jsonrpc: "2.0",
            id: 0,
            result: await this._filterPolyfill.newBlockFilter()
        };
    }
    async _eth_newPendingTransactionFilter() {
        return {
            jsonrpc: "2.0",
            id: 0,
            result: await this._filterPolyfill.newPendingTransactionFilter()
        };
    }
    _eth_getFilterChanges(e) {
        const r = (0, Y.ensureHexString)(e[0]);
        return this._filterPolyfill.getFilterChanges(r);
    }
    _eth_getFilterLogs(e) {
        const r = (0, Y.ensureHexString)(e[0]);
        return this._filterPolyfill.getFilterLogs(r);
    }
    initializeRelay() {
        return this._relay ? Promise.resolve(this._relay) : this._relayProvider().then((e) => (e.setAccountsCallback((r, n) => this._setAddresses(r, n)), e.setChainCallback((r, n) => {
            this.updateProviderInfo(n, parseInt(r, 10));
        }), e.setDappDefaultChainCallback(this._chainIdFromOpts), this._relay = e, e));
    }
}
Er.CoinbaseWalletProvider = rS;
var Ki = {},
    Xi = {},
    jn, V, Wh, Gh, cn, Xu, $h, mi = {},
    Vh = [],
    nS = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;

function yt(t, e) {
    for (var r in e)
        t[r] = e[r];
    return t;
}

function zh(t) {
    var e = t.parentNode;
    e && e.removeChild(t);
}

function Oa(t, e, r) {
    var n, i, s, o = {};
    for (s in e)
        s == "key" ? n = e[s] : s == "ref" ? i = e[s] : o[s] = e[s];
    if (arguments.length > 2 && (o.children = arguments.length > 3 ? jn.call(arguments, 2) : r), typeof t == "function" && t.defaultProps != null)
        for (s in t.defaultProps)
            o[s] === void 0 && (o[s] = t.defaultProps[s]);
    return un(t, o, n, i, null);
}

function un(t, e, r, n, i) {
    var s = {
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
        __h: null,
        constructor: void 0,
        __v: i ? ? ++Wh
    };
    return i == null && V.vnode != null && V.vnode(s), s;
}

function iS() {
    return {
        current: null
    };
}

function Bn(t) {
    return t.children;
}

function ln(t, e) {
    this.props = t, this.context = e;
}

function mn(t, e) {
    if (e == null)
        return t.__ ? mn(t.__, t.__.__k.indexOf(t) + 1) : null;
    for (var r; e < t.__k.length; e++)
        if ((r = t.__k[e]) != null && r.__e != null)
            return r.__e;
    return typeof t.type == "function" ? mn(t) : null;
}

function Zh(t) {
    var e, r;
    if ((t = t.__) != null && t.__c != null) {
        for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
            if ((r = t.__k[e]) != null && r.__e != null) {
                t.__e = t.__c.base = r.__e;
                break;
            }
        return Zh(t);
    }
}

function Na(t) {
    (!t.__d && (t.__d = !0) && cn.push(t) && !yi.__r++ || Xu !== V.debounceRendering) && ((Xu = V.debounceRendering) || setTimeout)(yi);
}

function yi() {
    for (var t; yi.__r = cn.length;)
        t = cn.sort(function(e, r) {
            return e.__v.__b - r.__v.__b;
        }), cn = [], t.some(function(e) {
            var r, n, i, s, o, a;
            e.__d && (o = (s = (r = e).__v).__e, (a = r.__P) && (n = [], (i = yt({}, s)).__v = s.__v + 1, gc(a, s, i, r.__n, a.ownerSVGElement !== void 0, s.__h != null ? [o] : null, n, o ? ? mn(s), s.__h), Kh(n, s), s.__e != o && Zh(s)));
        });
}

function qh(t, e, r, n, i, s, o, a, c, u) {
    var l, b, f, p, g, S, I, _ = n && n.__k || Vh,
        m = _.length;
    for (r.__k = [], l = 0; l < e.length; l++)
        if ((p = r.__k[l] = (p = e[l]) == null || typeof p == "boolean" ? null : typeof p == "string" || typeof p == "number" || typeof p == "bigint" ? un(null, p, null, null, p) : Array.isArray(p) ? un(Bn, {
                children: p
            }, null, null, null) : p.__b > 0 ? un(p.type, p.props, p.key, p.ref ? p.ref : null, p.__v) : p) != null) {
            if (p.__ = r, p.__b = r.__b + 1, (f = _[l]) === null || f && p.key == f.key && p.type === f.type)
                _[l] = void 0;
            else
                for (b = 0; b < m; b++) {
                    if ((f = _[b]) && p.key == f.key && p.type === f.type) {
                        _[b] = void 0;
                        break;
                    }
                    f = null;
                }
            gc(t, p, f = f || mi, i, s, o, a, c, u), g = p.__e, (b = p.ref) && f.ref != b && (I || (I = []), f.ref && I.push(f.ref, null, p), I.push(b, p.__c || g, p)), g != null ? (S == null && (S = g), typeof p.type == "function" && p.__k === f.__k ? p.__d = c = Yh(p, c, t) : c = Qh(t, p, f, _, g, c), typeof r.type == "function" && (r.__d = c)) : c && f.__e == c && c.parentNode != t && (c = mn(f));
        }
    for (r.__e = S, l = m; l--;)
        _[l] != null && ed(_[l], _[l]);
    if (I)
        for (l = 0; l < I.length; l++)
            Xh(I[l], I[++l], I[++l]);
}

function Yh(t, e, r) {
    for (var n, i = t.__k, s = 0; i && s < i.length; s++)
        (n = i[s]) && (n.__ = t, e = typeof n.type == "function" ? Yh(n, e, r) : Qh(r, n, n, i, n.__e, e));
    return e;
}

function Jh(t, e) {
    return e = e || [], t == null || typeof t == "boolean" || (Array.isArray(t) ? t.some(function(r) {
        Jh(r, e);
    }) : e.push(t)), e;
}

function Qh(t, e, r, n, i, s) {
    var o, a, c;
    if (e.__d !== void 0)
        o = e.__d, e.__d = void 0;
    else if (r == null || i != s || i.parentNode == null)
        e:
        if (s == null || s.parentNode !== t)
            t.appendChild(i), o = null;
        else {
            for (a = s, c = 0;
                (a = a.nextSibling) && c < n.length; c += 1)
                if (a == i)
                    break e;
            t.insertBefore(i, s), o = s;
        }
    return o !== void 0 ? o : i.nextSibling;
}

function sS(t, e, r, n, i) {
    var s;
    for (s in r)
        s === "children" || s === "key" || s in e || vi(t, s, null, r[s], n);
    for (s in e)
        i && typeof e[s] != "function" || s === "children" || s === "key" || s === "value" || s === "checked" || r[s] === e[s] || vi(t, s, e[s], r[s], n);
}

function el(t, e, r) {
    e[0] === "-" ? t.setProperty(e, r) : t[e] = r == null ? "" : typeof r != "number" || nS.test(e) ? r : r + "px";
}

function vi(t, e, r, n, i) {
    var s;
    e:
        if (e === "style")
            if (typeof r == "string")
                t.style.cssText = r;
            else {
                if (typeof n == "string" && (t.style.cssText = n = ""), n)
                    for (e in n)
                        r && e in r || el(t.style, e, "");
                if (r)
                    for (e in r)
                        n && r[e] === n[e] || el(t.style, e, r[e]);
            }
    else if (e[0] === "o" && e[1] === "n")
        s = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + s] = r, r ? n || t.addEventListener(e, s ? rl : tl, s) : t.removeEventListener(e, s ? rl : tl, s);
    else if (e !== "dangerouslySetInnerHTML") {
        if (i)
            e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
            try {
                t[e] = r ? ? "";
                break e;
            } catch {}
        typeof r == "function" || (r == null || r === !1 && e.indexOf("-") == -1 ? t.removeAttribute(e) : t.setAttribute(e, r));
    }
}

function tl(t) {
    this.l[t.type + !1](V.event ? V.event(t) : t);
}

function rl(t) {
    this.l[t.type + !0](V.event ? V.event(t) : t);
}

function gc(t, e, r, n, i, s, o, a, c) {
    var u, l, b, f, p, g, S, I, _, m, w, A, N, U, F, P = e.type;
    if (e.constructor !== void 0)
        return null;
    r.__h != null && (c = r.__h, a = e.__e = r.__e, e.__h = null, s = [a]), (u = V.__b) && u(e);
    try {
        e: if (typeof P == "function") {
            if (I = e.props, _ = (u = P.contextType) && n[u.__c], m = u ? _ ? _.props.value : u.__ : n, r.__c ? S = (l = e.__c = r.__c).__ = l.__E : ("prototype" in P && P.prototype.render ? e.__c = l = new P(I, m) : (e.__c = l = new ln(I, m), l.constructor = P, l.render = aS), _ && _.sub(l), l.props = I, l.state || (l.state = {}), l.context = m, l.__n = n, b = l.__d = !0, l.__h = [], l._sb = []), l.__s == null && (l.__s = l.state), P.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = yt({}, l.__s)), yt(l.__s, P.getDerivedStateFromProps(I, l.__s))), f = l.props, p = l.state, b)
                P.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), l.componentDidMount != null && l.__h.push(l.componentDidMount);
            else {
                if (P.getDerivedStateFromProps == null && I !== f && l.componentWillReceiveProps != null && l.componentWillReceiveProps(I, m), !l.__e && l.shouldComponentUpdate != null && l.shouldComponentUpdate(I, l.__s, m) === !1 || e.__v === r.__v) {
                    for (l.props = I, l.state = l.__s, e.__v !== r.__v && (l.__d = !1), l.__v = e, e.__e = r.__e, e.__k = r.__k, e.__k.forEach(function(L) {
                            L && (L.__ = e);
                        }), w = 0; w < l._sb.length; w++)
                        l.__h.push(l._sb[w]);
                    l._sb = [], l.__h.length && o.push(l);
                    break e;
                }
                l.componentWillUpdate != null && l.componentWillUpdate(I, l.__s, m), l.componentDidUpdate != null && l.__h.push(function() {
                    l.componentDidUpdate(f, p, g);
                });
            }
            if (l.context = m, l.props = I, l.__v = e, l.__P = t, A = V.__r, N = 0, "prototype" in P && P.prototype.render) {
                for (l.state = l.__s, l.__d = !1, A && A(e), u = l.render(l.props, l.state, l.context), U = 0; U < l._sb.length; U++)
                    l.__h.push(l._sb[U]);
                l._sb = [];
            } else
                do
                    l.__d = !1, A && A(e), u = l.render(l.props, l.state, l.context), l.state = l.__s;
                while (l.__d && ++N < 25);
            l.state = l.__s, l.getChildContext != null && (n = yt(yt({}, n), l.getChildContext())), b || l.getSnapshotBeforeUpdate == null || (g = l.getSnapshotBeforeUpdate(f, p)), F = u != null && u.type === Bn && u.key == null ? u.props.children : u, qh(t, Array.isArray(F) ? F : [F], e, r, n, i, s, o, a, c), l.base = e.__e, e.__h = null, l.__h.length && o.push(l), S && (l.__E = l.__ = null), l.__e = !1;
        } else
            s == null && e.__v === r.__v ? (e.__k = r.__k, e.__e = r.__e) : e.__e = oS(r.__e, e, r, n, i, s, o, c);
        (u = V.diffed) && u(e);
    }
    catch (L) {
        e.__v = null, (c || s != null) && (e.__e = a, e.__h = !!c, s[s.indexOf(a)] = null), V.__e(L, e, r);
    }
}

function Kh(t, e) {
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

function oS(t, e, r, n, i, s, o, a) {
    var c, u, l, b = r.props,
        f = e.props,
        p = e.type,
        g = 0;
    if (p === "svg" && (i = !0), s != null) {
        for (; g < s.length; g++)
            if ((c = s[g]) && "setAttribute" in c == !!p && (p ? c.localName === p : c.nodeType === 3)) {
                t = c, s[g] = null;
                break;
            }
    }
    if (t == null) {
        if (p === null)
            return document.createTextNode(f);
        t = i ? document.createElementNS("http://www.w3.org/2000/svg", p) : document.createElement(p, f.is && f), s = null, a = !1;
    }
    if (p === null)
        b === f || a && t.data === f || (t.data = f);
    else {
        if (s = s && jn.call(t.childNodes), u = (b = r.props || mi).dangerouslySetInnerHTML, l = f.dangerouslySetInnerHTML, !a) {
            if (s != null)
                for (b = {}, g = 0; g < t.attributes.length; g++)
                    b[t.attributes[g].name] = t.attributes[g].value;
            (l || u) && (l && (u && l.__html == u.__html || l.__html === t.innerHTML) || (t.innerHTML = l && l.__html || ""));
        }
        if (sS(t, f, b, i, a), l)
            e.__k = [];
        else if (g = e.props.children, qh(t, Array.isArray(g) ? g : [g], e, r, n, i && p !== "foreignObject", s, o, s ? s[0] : r.__k && mn(r, 0), a), s != null)
            for (g = s.length; g--;)
                s[g] != null && zh(s[g]);
        a || ("value" in f && (g = f.value) !== void 0 && (g !== t.value || p === "progress" && !g || p === "option" && g !== b.value) && vi(t, "value", g, b.value, !1), "checked" in f && (g = f.checked) !== void 0 && g !== t.checked && vi(t, "checked", g, b.checked, !1));
    }
    return t;
}

function Xh(t, e, r) {
    try {
        typeof t == "function" ? t(e) : t.current = e;
    } catch (n) {
        V.__e(n, r);
    }
}

function ed(t, e, r) {
    var n, i;
    if (V.unmount && V.unmount(t), (n = t.ref) && (n.current && n.current !== t.__e || Xh(n, null, e)), (n = t.__c) != null) {
        if (n.componentWillUnmount)
            try {
                n.componentWillUnmount();
            } catch (s) {
                V.__e(s, e);
            }
        n.base = n.__P = null, t.__c = void 0;
    }
    if (n = t.__k)
        for (i = 0; i < n.length; i++)
            n[i] && ed(n[i], e, r || typeof t.type != "function");
    r || t.__e == null || zh(t.__e), t.__ = t.__e = t.__d = void 0;
}

function aS(t, e, r) {
    return this.constructor(t, r);
}

function td(t, e, r) {
    var n, i, s;
    V.__ && V.__(t, e), i = (n = typeof r == "function") ? null : r && r.__k || e.__k, s = [], gc(e, t = (!n && r || e).__k = Oa(Bn, null, [t]), i || mi, mi, e.ownerSVGElement !== void 0, !n && r ? [r] : i ? null : e.firstChild ? jn.call(e.childNodes) : null, s, !n && r ? r : i ? i.__e : e.firstChild, n), Kh(s, t);
}

function rd(t, e) {
    td(t, e, rd);
}

function cS(t, e, r) {
    var n, i, s, o = yt({}, t.props);
    for (s in e)
        s == "key" ? n = e[s] : s == "ref" ? i = e[s] : o[s] = e[s];
    return arguments.length > 2 && (o.children = arguments.length > 3 ? jn.call(arguments, 2) : r), un(t.type, o, n || t.key, i || t.ref, null);
}

function uS(t, e) {
    var r = {
        __c: e = "__cC" + $h++,
        __: t,
        Consumer: function(n, i) {
            return n.children(i);
        },
        Provider: function(n) {
            var i, s;
            return this.getChildContext || (i = [], (s = {})[e] = this, this.getChildContext = function() {
                return s;
            }, this.shouldComponentUpdate = function(o) {
                this.props.value !== o.value && i.some(Na);
            }, this.sub = function(o) {
                i.push(o);
                var a = o.componentWillUnmount;
                o.componentWillUnmount = function() {
                    i.splice(i.indexOf(o), 1), a && a.call(o);
                };
            }), n.children;
        }
    };
    return r.Provider.__ = r.Consumer.contextType = r;
}
jn = Vh.slice, V = {
    __e: function(t, e, r, n) {
        for (var i, s, o; e = e.__;)
            if ((i = e.__c) && !i.__)
                try {
                    if ((s = i.constructor) && s.getDerivedStateFromError != null && (i.setState(s.getDerivedStateFromError(t)), o = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, n || {}), o = i.__d), o)
                        return i.__E = i;
                } catch (a) {
                    t = a;
                }
        throw t;
    }
}, Wh = 0, Gh = function(t) {
    return t != null && t.constructor === void 0;
}, ln.prototype.setState = function(t, e) {
    var r;
    r = this.__s != null && this.__s !== this.state ? this.__s : this.__s = yt({}, this.state), typeof t == "function" && (t = t(yt({}, r), this.props)), t && yt(r, t), t != null && this.__v && (e && this._sb.push(e), Na(this));
}, ln.prototype.forceUpdate = function(t) {
    this.__v && (this.__e = !0, t && this.__h.push(t), Na(this));
}, ln.prototype.render = Bn, cn = [], yi.__r = 0, $h = 0;
const lS = /* @__PURE__ */ Object.freeze( /* @__PURE__ */ Object.defineProperty({
        __proto__: null,
        Component: ln,
        Fragment: Bn,
        cloneElement: cS,
        createContext: uS,
        createElement: Oa,
        createRef: iS,
        h: Oa,
        hydrate: rd,
        get isValidElement() {
            return Gh;
        },
        get options() {
            return V;
        },
        render: td,
        toChildArray: Jh
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Ge = /* @__PURE__ */ Lr(lS);
var es = {};

function nd(t) {
    var e, r, n = "";
    if (typeof t == "string" || typeof t == "number")
        n += t;
    else if (typeof t == "object")
        if (Array.isArray(t))
            for (e = 0; e < t.length; e++)
                t[e] && (r = nd(t[e])) && (n && (n += " "), n += r);
        else
            for (e in t)
                t[e] && (n && (n += " "), n += e);
    return n;
}

function nl() {
    for (var t, e, r = 0, n = ""; r < arguments.length;)
        (t = arguments[r++]) && (e = nd(t)) && (n && (n += " "), n += e);
    return n;
}
const fS = /* @__PURE__ */ Object.freeze( /* @__PURE__ */ Object.defineProperty({
        __proto__: null,
        clsx: nl,
        default: nl
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    ts = /* @__PURE__ */ Lr(fS);
var Wt, ue, ea, il, Or = 0,
    id = [],
    ii = [],
    sl = V.__b,
    ol = V.__r,
    al = V.diffed,
    cl = V.__c,
    ul = V.unmount;

function sr(t, e) {
    V.__h && V.__h(ue, t, Or || e), Or = 0;
    var r = ue.__H || (ue.__H = {
        __: [],
        __h: []
    });
    return t >= r.__.length && r.__.push({
        __V: ii
    }), r.__[t];
}

function sd(t) {
    return Or = 1, od(cd, t);
}

function od(t, e, r) {
    var n = sr(Wt++, 2);
    if (n.t = t, !n.__c && (n.__ = [r ? r(e) : cd(void 0, e), function(s) {
            var o = n.__N ? n.__N[0] : n.__[0],
                a = n.t(o, s);
            o !== a && (n.__N = [a, n.__[1]], n.__c.setState({}));
        }], n.__c = ue, !ue.u)) {
        ue.u = !0;
        var i = ue.shouldComponentUpdate;
        ue.shouldComponentUpdate = function(s, o, a) {
            if (!n.__c.__H)
                return !0;
            var c = n.__c.__H.__.filter(function(l) {
                return l.__c;
            });
            if (c.every(function(l) {
                    return !l.__N;
                }))
                return !i || i.call(this, s, o, a);
            var u = !1;
            return c.forEach(function(l) {
                if (l.__N) {
                    var b = l.__[0];
                    l.__ = l.__N, l.__N = void 0, b !== l.__[0] && (u = !0);
                }
            }), !(!u && n.__c.props === s) && (!i || i.call(this, s, o, a));
        };
    }
    return n.__N || n.__;
}

function hS(t, e) {
    var r = sr(Wt++, 3);
    !V.__s && yc(r.__H, e) && (r.__ = t, r.i = e, ue.__H.__h.push(r));
}

function ad(t, e) {
    var r = sr(Wt++, 4);
    !V.__s && yc(r.__H, e) && (r.__ = t, r.i = e, ue.__h.push(r));
}

function dS(t) {
    return Or = 5, mc(function() {
        return {
            current: t
        };
    }, []);
}

function pS(t, e, r) {
    Or = 6, ad(function() {
        return typeof t == "function" ? (t(e()), function() {
            return t(null);
        }) : t ? (t.current = e(), function() {
            return t.current = null;
        }) : void 0;
    }, r == null ? r : r.concat(t));
}

function mc(t, e) {
    var r = sr(Wt++, 7);
    return yc(r.__H, e) ? (r.__V = t(), r.i = e, r.__h = t, r.__V) : r.__;
}

function _S(t, e) {
    return Or = 8, mc(function() {
        return t;
    }, e);
}

function bS(t) {
    var e = ue.context[t.__c],
        r = sr(Wt++, 9);
    return r.c = t, e ? (r.__ == null && (r.__ = !0, e.sub(ue)), e.props.value) : t.__;
}

function gS(t, e) {
    V.useDebugValue && V.useDebugValue(e ? e(t) : t);
}

function mS(t) {
    var e = sr(Wt++, 10),
        r = sd();
    return e.__ = t, ue.componentDidCatch || (ue.componentDidCatch = function(n, i) {
        e.__ && e.__(n, i), r[1](n);
    }), [r[0], function() {
        r[1](void 0);
    }];
}

function yS() {
    var t = sr(Wt++, 11);
    if (!t.__) {
        for (var e = ue.__v; e !== null && !e.__m && e.__ !== null;)
            e = e.__;
        var r = e.__m || (e.__m = [0, 0]);
        t.__ = "P" + r[0] + "-" + r[1]++;
    }
    return t.__;
}

function vS() {
    for (var t; t = id.shift();)
        if (t.__P && t.__H)
            try {
                t.__H.__h.forEach(si), t.__H.__h.forEach(Da), t.__H.__h = [];
            } catch (e) {
                t.__H.__h = [], V.__e(e, t.__v);
            }
}
V.__b = function(t) {
    ue = null, sl && sl(t);
}, V.__r = function(t) {
    ol && ol(t), Wt = 0;
    var e = (ue = t.__c).__H;
    e && (ea === ue ? (e.__h = [], ue.__h = [], e.__.forEach(function(r) {
        r.__N && (r.__ = r.__N), r.__V = ii, r.__N = r.i = void 0;
    })) : (e.__h.forEach(si), e.__h.forEach(Da), e.__h = [])), ea = ue;
}, V.diffed = function(t) {
    al && al(t);
    var e = t.__c;
    e && e.__H && (e.__H.__h.length && (id.push(e) !== 1 && il === V.requestAnimationFrame || ((il = V.requestAnimationFrame) || wS)(vS)), e.__H.__.forEach(function(r) {
        r.i && (r.__H = r.i), r.__V !== ii && (r.__ = r.__V), r.i = void 0, r.__V = ii;
    })), ea = ue = null;
}, V.__c = function(t, e) {
    e.some(function(r) {
        try {
            r.__h.forEach(si), r.__h = r.__h.filter(function(n) {
                return !n.__ || Da(n);
            });
        } catch (n) {
            e.some(function(i) {
                i.__h && (i.__h = []);
            }), e = [], V.__e(n, r.__v);
        }
    }), cl && cl(t, e);
}, V.unmount = function(t) {
    ul && ul(t);
    var e, r = t.__c;
    r && r.__H && (r.__H.__.forEach(function(n) {
        try {
            si(n);
        } catch (i) {
            e = i;
        }
    }), r.__H = void 0, e && V.__e(e, r.__v));
};
var ll = typeof requestAnimationFrame == "function";

function wS(t) {
    var e, r = function() {
            clearTimeout(n), ll && cancelAnimationFrame(e), setTimeout(t);
        },
        n = setTimeout(r, 100);
    ll && (e = requestAnimationFrame(r));
}

function si(t) {
    var e = ue,
        r = t.__c;
    typeof r == "function" && (t.__c = void 0, r()), ue = e;
}

function Da(t) {
    var e = ue;
    t.__c = t.__(), ue = e;
}

function yc(t, e) {
    return !t || t.length !== e.length || e.some(function(r, n) {
        return r !== t[n];
    });
}

function cd(t, e) {
    return typeof e == "function" ? e(t) : e;
}
const ES = /* @__PURE__ */ Object.freeze( /* @__PURE__ */ Object.defineProperty({
        __proto__: null,
        useCallback: _S,
        useContext: bS,
        useDebugValue: gS,
        useEffect: hS,
        useErrorBoundary: mS,
        useId: yS,
        useImperativeHandle: pS,
        useLayoutEffect: ad,
        useMemo: mc,
        useReducer: od,
        useRef: dS,
        useState: sd
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Un = /* @__PURE__ */ Lr(ES);
var dt = {},
    rs = {};
Object.defineProperty(rs, "__esModule", {
    value: !0
});
rs.LIB_VERSION = void 0;
rs.LIB_VERSION = "3.6.3";
var ns = {};
Object.defineProperty(ns, "__esModule", {
    value: !0
});
ns.CloseIcon = void 0;
const fl = Ge;

function SS(t) {
    return (0, fl.h)(
        "svg",
        Object.assign({
            width: "40",
            height: "40",
            viewBox: "0 0 40 40",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, t),
        (0, fl.h)("path", {
            d: "M13.7677 13L12.3535 14.4142L18.3535 20.4142L12.3535 26.4142L13.7677 27.8284L19.7677 21.8284L25.7677 27.8284L27.1819 26.4142L21.1819 20.4142L27.1819 14.4142L25.7677 13L19.7677 19L13.7677 13Z"
        })
    );
}
ns.CloseIcon = SS;
var vc = {};
Object.defineProperty(vc, "__esModule", {
    value: !0
});
vc.default = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTQiIGN5PSIxNCIgcj0iMTQiIGZpbGw9IiMwMDUyRkYiLz48cGF0aCBkPSJNMTQuMDM3IDE4LjkyNmMtMi43NSAwLTQuOTA3LTIuMjA1LTQuOTA3LTQuOTI2IDAtMi43MiAyLjIzLTQuOTI2IDQuOTA3LTQuOTI2YTQuODY2IDQuODY2IDAgMCAxIDQuODMzIDQuMTE4aDQuOTgyYy0uNDQ2LTUuMDczLTQuNjg0LTkuMDQ0LTkuODE1LTkuMDQ0QzguNjEgNC4xNDggNC4xNDkgOC41NiA0LjE0OSAxNHM0LjM4NyA5Ljg1MiA5Ljg5IDkuODUyYzUuMjA0IDAgOS4zNjgtMy45NyA5LjgxNC05LjA0M0gxOC44N2E0Ljg2NiA0Ljg2NiAwIDAgMS00LjgzMyA0LjExN1oiIGZpbGw9IiNmZmYiLz48L3N2Zz4=";
var wc = {};
Object.defineProperty(wc, "__esModule", {
    value: !0
});
wc.default = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTQiIGN5PSIxNCIgcj0iMTQiIGZpbGw9IiMwMDUyRkYiLz48cGF0aCBkPSJNMjMuODUyIDE0QTkuODM0IDkuODM0IDAgMCAxIDE0IDIzLjg1MiA5LjgzNCA5LjgzNCAwIDAgMSA0LjE0OCAxNCA5LjgzNCA5LjgzNCAwIDAgMSAxNCA0LjE0OCA5LjgzNCA5LjgzNCAwIDAgMSAyMy44NTIgMTRaIiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTExLjE4NSAxMi41MDRjMC0uNDU2IDAtLjcxLjA5OC0uODYyLjA5OC0uMTUyLjE5Ni0uMzA0LjM0My0uMzU1LjE5Ni0uMTAyLjM5Mi0uMTAyLjg4MS0uMTAyaDIuOTg2Yy40OSAwIC42ODYgMCAuODgyLjEwMi4xNDYuMTAxLjI5My4yMDMuMzQyLjM1NS4wOTguMjAzLjA5OC40MDYuMDk4Ljg2MnYyLjk5MmMwIC40NTcgMCAuNzEtLjA5OC44NjMtLjA5OC4xNTItLjE5NS4zMDQtLjM0Mi4zNTUtLjE5Ni4xMDEtLjM5Mi4xMDEtLjg4Mi4xMDFoLTIuOTg2Yy0uNDkgMC0uNjg1IDAtLjg4LS4xMDEtLjE0OC0uMTAyLS4yOTUtLjIwMy0uMzQ0LS4zNTUtLjA5OC0uMjAzLS4wOTgtLjQwNi0uMDk4LS44NjN2LTIuOTkyWiIgZmlsbD0iIzAwNTJGRiIvPjwvc3ZnPg==";
var is = {};
Object.defineProperty(is, "__esModule", {
    value: !0
});
is.QRCodeIcon = void 0;
const ct = Ge;

function kS(t) {
    return (0, ct.h)(
        "svg",
        Object.assign({
            width: "10",
            height: "10",
            viewBox: "0 0 10 10",
            xmlns: "http://www.w3.org/2000/svg"
        }, t),
        (0, ct.h)("path", {
            d: "M8.2271 1.77124L7.0271 1.77124V2.97124H8.2271V1.77124Z"
        }),
        (0, ct.h)("path", {
            d: "M5.44922 0.199219L5.44922 4.54922L9.79922 4.54922V0.199219L5.44922 0.199219ZM8.89922 3.64922L6.34922 3.64922L6.34922 1.09922L8.89922 1.09922V3.64922Z"
        }),
        (0, ct.h)("path", {
            d: "M2.97124 1.77124L1.77124 1.77124L1.77124 2.97124H2.97124V1.77124Z"
        }),
        (0, ct.h)("path", {
            d: "M0.199219 4.54922L4.54922 4.54922L4.54922 0.199219L0.199219 0.199219L0.199219 4.54922ZM1.09922 1.09922L3.64922 1.09922L3.64922 3.64922L1.09922 3.64922L1.09922 1.09922Z"
        }),
        (0, ct.h)("path", {
            d: "M2.97124 7.0271H1.77124L1.77124 8.2271H2.97124V7.0271Z"
        }),
        (0, ct.h)("path", {
            d: "M0.199219 9.79922H4.54922L4.54922 5.44922L0.199219 5.44922L0.199219 9.79922ZM1.09922 6.34922L3.64922 6.34922L3.64922 8.89922H1.09922L1.09922 6.34922Z"
        }),
        (0, ct.h)("path", {
            d: "M8.89922 7.39912H7.99922V5.40112H5.44922L5.44922 9.79912H6.34922L6.34922 6.30112H7.09922V8.29912H9.79922V5.40112H8.89922V7.39912Z"
        }),
        (0, ct.h)("path", {
            d: "M7.99912 8.89917H7.09912V9.79917H7.99912V8.89917Z"
        }),
        (0, ct.h)("path", {
            d: "M9.79917 8.89917H8.89917V9.79917H9.79917V8.89917Z"
        })
    );
}
is.QRCodeIcon = kS;
var Ec = {};
Object.defineProperty(Ec, "__esModule", {
    value: !0
});
const RS = `
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100Z" fill="white"/>
        <path d="M50.512 94C74.2907 94 93.5673 74.5244 93.5673 50.5C93.5673 26.4756 74.2907 7 50.512 7C26.7332 7 7.45667 26.4756 7.45667 50.5C7.45667 74.5244 26.7332 94 50.512 94Z" fill="#0052FF"/>
        <path d="M50.6248 65.4335C42.3697 65.4335 35.8996 58.7469 35.8996 50.5C35.8996 42.2531 42.5928 35.5664 50.6248 35.5664C57.9873 35.5664 64.0111 40.9157 65.1267 48.0481H80.0749C78.7363 32.6688 66.0191 20.6328 50.6248 20.6328C34.3379 20.6328 20.9514 34.0062 20.9514 50.5C20.9514 66.9936 34.1148 80.3671 50.6248 80.3671C66.2422 80.3671 78.7363 68.331 80.0749 52.9516H65.1267C64.0111 60.0841 57.9873 65.4335 50.6248 65.4335Z" fill="white"/>
    </svg>
`;
Ec.default = RS;
var Sc = {};
Object.defineProperty(Sc, "__esModule", {
    value: !0
});
Sc.default = `
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="50" fill="white"/>
        <circle cx="49.9996" cy="49.9996" r="43.6363" fill="#1B53E4"/>
        <circle cx="49.9996" cy="49.9996" r="43.6363" stroke="white"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.3379 49.9484C19.3379 66.8508 33.04 80.553 49.9425 80.553C66.8449 80.553 80.5471 66.8508 80.5471 49.9484C80.5471 33.0459 66.8449 19.3438 49.9425 19.3438C33.04 19.3438 19.3379 33.0459 19.3379 49.9484ZM44.0817 40.0799C41.8725 40.0799 40.0817 41.8708 40.0817 44.0799V55.8029C40.0817 58.012 41.8725 59.8029 44.0817 59.8029H55.8046C58.0138 59.8029 59.8046 58.012 59.8046 55.8029V44.0799C59.8046 41.8708 58.0138 40.0799 55.8046 40.0799H44.0817Z" fill="white"/>
    </svg>
`;
var ss = {};
Object.defineProperty(ss, "__esModule", {
    value: !0
});
ss.StatusDotIcon = void 0;
const hl = Ge;

function IS(t) {
    return (0, hl.h)(
        "svg",
        Object.assign({
            width: "10",
            height: "10",
            viewBox: "0 0 10 10",
            xmlns: "http://www.w3.org/2000/svg"
        }, t),
        (0, hl.h)("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M2.29995 4.99995C2.29995 5.57985 1.82985 6.04995 1.24995 6.04995C0.670052 6.04995 0.199951 5.57985 0.199951 4.99995C0.199951 4.42005 0.670052 3.94995 1.24995 3.94995C1.82985 3.94995 2.29995 4.42005 2.29995 4.99995ZM4.99995 6.04995C5.57985 6.04995 6.04995 5.57985 6.04995 4.99995C6.04995 4.42005 5.57985 3.94995 4.99995 3.94995C4.42005 3.94995 3.94995 4.42005 3.94995 4.99995C3.94995 5.57985 4.42005 6.04995 4.99995 6.04995ZM8.74995 6.04995C9.32985 6.04995 9.79995 5.57985 9.79995 4.99995C9.79995 4.42005 9.32985 3.94995 8.74995 3.94995C8.17005 3.94995 7.69995 4.42005 7.69995 4.99995C7.69995 5.57985 8.17005 6.04995 8.74995 6.04995Z"
        })
    );
}
ss.StatusDotIcon = IS;
var os = {};

function ud(t) {
    this.mode = He.MODE_8BIT_BYTE, this.data = t, this.parsedData = [];
    for (var e = 0, r = this.data.length; e < r; e++) {
        var n = [],
            i = this.data.charCodeAt(e);
        i > 65536 ? (n[0] = 240 | (i & 1835008) >>> 18, n[1] = 128 | (i & 258048) >>> 12, n[2] = 128 | (i & 4032) >>> 6, n[3] = 128 | i & 63) : i > 2048 ? (n[0] = 224 | (i & 61440) >>> 12, n[1] = 128 | (i & 4032) >>> 6, n[2] = 128 | i & 63) : i > 128 ? (n[0] = 192 | (i & 1984) >>> 6, n[1] = 128 | i & 63) : n[0] = i, this.parsedData.push(n);
    }
    this.parsedData = Array.prototype.concat.apply([], this.parsedData), this.parsedData.length != this.data.length && (this.parsedData.unshift(191), this.parsedData.unshift(187), this.parsedData.unshift(239));
}
ud.prototype = {
    getLength: function(t) {
        return this.parsedData.length;
    },
    write: function(t) {
        for (var e = 0, r = this.parsedData.length; e < r; e++)
            t.put(this.parsedData[e], 8);
    }
};

function pt(t, e) {
    this.typeNumber = t, this.errorCorrectLevel = e, this.modules = null, this.moduleCount = 0, this.dataCache = null, this.dataList = [];
}
pt.prototype = {
    addData: function(t) {
        var e = new ud(t);
        this.dataList.push(e), this.dataCache = null;
    },
    isDark: function(t, e) {
        if (t < 0 || this.moduleCount <= t || e < 0 || this.moduleCount <= e)
            throw new Error(t + "," + e);
        return this.modules[t][e];
    },
    getModuleCount: function() {
        return this.moduleCount;
    },
    make: function() {
        this.makeImpl(!1, this.getBestMaskPattern());
    },
    makeImpl: function(t, e) {
        this.moduleCount = this.typeNumber * 4 + 17, this.modules = new Array(this.moduleCount);
        for (var r = 0; r < this.moduleCount; r++) {
            this.modules[r] = new Array(this.moduleCount);
            for (var n = 0; n < this.moduleCount; n++)
                this.modules[r][n] = null;
        }
        this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(t, e), this.typeNumber >= 7 && this.setupTypeNumber(t), this.dataCache == null && (this.dataCache = pt.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), this.mapData(this.dataCache, e);
    },
    setupPositionProbePattern: function(t, e) {
        for (var r = -1; r <= 7; r++)
            if (!(t + r <= -1 || this.moduleCount <= t + r))
                for (var n = -1; n <= 7; n++)
                    e + n <= -1 || this.moduleCount <= e + n || (0 <= r && r <= 6 && (n == 0 || n == 6) || 0 <= n && n <= 6 && (r == 0 || r == 6) || 2 <= r && r <= 4 && 2 <= n && n <= 4 ? this.modules[t + r][e + n] = !0 : this.modules[t + r][e + n] = !1);
    },
    getBestMaskPattern: function() {
        for (var t = 0, e = 0, r = 0; r < 8; r++) {
            this.makeImpl(!0, r);
            var n = de.getLostPoint(this);
            (r == 0 || t > n) && (t = n, e = r);
        }
        return e;
    },
    createMovieClip: function(t, e, r) {
        var n = t.createEmptyMovieClip(e, r),
            i = 1;
        this.make();
        for (var s = 0; s < this.modules.length; s++)
            for (var o = s * i, a = 0; a < this.modules[s].length; a++) {
                var c = a * i,
                    u = this.modules[s][a];
                u && (n.beginFill(0, 100), n.moveTo(c, o), n.lineTo(c + i, o), n.lineTo(c + i, o + i), n.lineTo(c, o + i), n.endFill());
            }
        return n;
    },
    setupTimingPattern: function() {
        for (var t = 8; t < this.moduleCount - 8; t++)
            this.modules[t][6] == null && (this.modules[t][6] = t % 2 == 0);
        for (var e = 8; e < this.moduleCount - 8; e++)
            this.modules[6][e] == null && (this.modules[6][e] = e % 2 == 0);
    },
    setupPositionAdjustPattern: function() {
        for (var t = de.getPatternPosition(this.typeNumber), e = 0; e < t.length; e++)
            for (var r = 0; r < t.length; r++) {
                var n = t[e],
                    i = t[r];
                if (this.modules[n][i] == null)
                    for (var s = -2; s <= 2; s++)
                        for (var o = -2; o <= 2; o++)
                            s == -2 || s == 2 || o == -2 || o == 2 || s == 0 && o == 0 ? this.modules[n + s][i + o] = !0 : this.modules[n + s][i + o] = !1;
            }
    },
    setupTypeNumber: function(t) {
        for (var e = de.getBCHTypeNumber(this.typeNumber), r = 0; r < 18; r++) {
            var n = !t && (e >> r & 1) == 1;
            this.modules[Math.floor(r / 3)][r % 3 + this.moduleCount - 8 - 3] = n;
        }
        for (var r = 0; r < 18; r++) {
            var n = !t && (e >> r & 1) == 1;
            this.modules[r % 3 + this.moduleCount - 8 - 3][Math.floor(r / 3)] = n;
        }
    },
    setupTypeInfo: function(t, e) {
        for (var r = this.errorCorrectLevel << 3 | e, n = de.getBCHTypeInfo(r), i = 0; i < 15; i++) {
            var s = !t && (n >> i & 1) == 1;
            i < 6 ? this.modules[i][8] = s : i < 8 ? this.modules[i + 1][8] = s : this.modules[this.moduleCount - 15 + i][8] = s;
        }
        for (var i = 0; i < 15; i++) {
            var s = !t && (n >> i & 1) == 1;
            i < 8 ? this.modules[8][this.moduleCount - i - 1] = s : i < 9 ? this.modules[8][15 - i - 1 + 1] = s : this.modules[8][15 - i - 1] = s;
        }
        this.modules[this.moduleCount - 8][8] = !t;
    },
    mapData: function(t, e) {
        for (var r = -1, n = this.moduleCount - 1, i = 7, s = 0, o = this.moduleCount - 1; o > 0; o -= 2)
            for (o == 6 && o--;;) {
                for (var a = 0; a < 2; a++)
                    if (this.modules[n][o - a] == null) {
                        var c = !1;
                        s < t.length && (c = (t[s] >>> i & 1) == 1);
                        var u = de.getMask(e, n, o - a);
                        u && (c = !c), this.modules[n][o - a] = c, i--, i == -1 && (s++, i = 7);
                    }
                if (n += r, n < 0 || this.moduleCount <= n) {
                    n -= r, r = -r;
                    break;
                }
            }
    }
};
pt.PAD0 = 236;
pt.PAD1 = 17;
pt.createData = function(t, e, r) {
    for (var n = ht.getRSBlocks(t, e), i = new ld(), s = 0; s < r.length; s++) {
        var o = r[s];
        i.put(o.mode, 4), i.put(o.getLength(), de.getLengthInBits(o.mode, t)), o.write(i);
    }
    for (var a = 0, s = 0; s < n.length; s++)
        a += n[s].dataCount;
    if (i.getLengthInBits() > a * 8)
        throw new Error("code length overflow. (" + i.getLengthInBits() + ">" + a * 8 + ")");
    for (i.getLengthInBits() + 4 <= a * 8 && i.put(0, 4); i.getLengthInBits() % 8 != 0;)
        i.putBit(!1);
    for (; !(i.getLengthInBits() >= a * 8 || (i.put(pt.PAD0, 8), i.getLengthInBits() >= a * 8));)
        i.put(pt.PAD1, 8);
    return pt.createBytes(i, n);
};
pt.createBytes = function(t, e) {
    for (var r = 0, n = 0, i = 0, s = new Array(e.length), o = new Array(e.length), a = 0; a < e.length; a++) {
        var c = e[a].dataCount,
            u = e[a].totalCount - c;
        n = Math.max(n, c), i = Math.max(i, u), s[a] = new Array(c);
        for (var l = 0; l < s[a].length; l++)
            s[a][l] = 255 & t.buffer[l + r];
        r += c;
        var b = de.getErrorCorrectPolynomial(u),
            f = new wr(s[a], b.getLength() - 1),
            p = f.mod(b);
        o[a] = new Array(b.getLength() - 1);
        for (var l = 0; l < o[a].length; l++) {
            var g = l + p.getLength() - o[a].length;
            o[a][l] = g >= 0 ? p.get(g) : 0;
        }
    }
    for (var S = 0, l = 0; l < e.length; l++)
        S += e[l].totalCount;
    for (var I = new Array(S), _ = 0, l = 0; l < n; l++)
        for (var a = 0; a < e.length; a++)
            l < s[a].length && (I[_++] = s[a][l]);
    for (var l = 0; l < i; l++)
        for (var a = 0; a < e.length; a++)
            l < o[a].length && (I[_++] = o[a][l]);
    return I;
};
var He = {
        MODE_NUMBER: 1 << 0,
        MODE_ALPHA_NUM: 1 << 1,
        MODE_8BIT_BYTE: 1 << 2,
        MODE_KANJI: 1 << 3
    },
    Nt = {
        L: 1,
        M: 0,
        Q: 3,
        H: 2
    },
    Rt = {
        PATTERN000: 0,
        PATTERN001: 1,
        PATTERN010: 2,
        PATTERN011: 3,
        PATTERN100: 4,
        PATTERN101: 5,
        PATTERN110: 6,
        PATTERN111: 7
    },
    de = {
        PATTERN_POSITION_TABLE: [
            [],
            [6, 18],
            [6, 22],
            [6, 26],
            [6, 30],
            [6, 34],
            [6, 22, 38],
            [6, 24, 42],
            [6, 26, 46],
            [6, 28, 50],
            [6, 30, 54],
            [6, 32, 58],
            [6, 34, 62],
            [6, 26, 46, 66],
            [6, 26, 48, 70],
            [6, 26, 50, 74],
            [6, 30, 54, 78],
            [6, 30, 56, 82],
            [6, 30, 58, 86],
            [6, 34, 62, 90],
            [6, 28, 50, 72, 94],
            [6, 26, 50, 74, 98],
            [6, 30, 54, 78, 102],
            [6, 28, 54, 80, 106],
            [6, 32, 58, 84, 110],
            [6, 30, 58, 86, 114],
            [6, 34, 62, 90, 118],
            [6, 26, 50, 74, 98, 122],
            [6, 30, 54, 78, 102, 126],
            [6, 26, 52, 78, 104, 130],
            [6, 30, 56, 82, 108, 134],
            [6, 34, 60, 86, 112, 138],
            [6, 30, 58, 86, 114, 142],
            [6, 34, 62, 90, 118, 146],
            [6, 30, 54, 78, 102, 126, 150],
            [6, 24, 50, 76, 102, 128, 154],
            [6, 28, 54, 80, 106, 132, 158],
            [6, 32, 58, 84, 110, 136, 162],
            [6, 26, 54, 82, 110, 138, 166],
            [6, 30, 58, 86, 114, 142, 170]
        ],
        G15: 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0,
        G18: 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0,
        G15_MASK: 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1,
        getBCHTypeInfo: function(t) {
            for (var e = t << 10; de.getBCHDigit(e) - de.getBCHDigit(de.G15) >= 0;)
                e ^= de.G15 << de.getBCHDigit(e) - de.getBCHDigit(de.G15);
            return (t << 10 | e) ^ de.G15_MASK;
        },
        getBCHTypeNumber: function(t) {
            for (var e = t << 12; de.getBCHDigit(e) - de.getBCHDigit(de.G18) >= 0;)
                e ^= de.G18 << de.getBCHDigit(e) - de.getBCHDigit(de.G18);
            return t << 12 | e;
        },
        getBCHDigit: function(t) {
            for (var e = 0; t != 0;)
                e++, t >>>= 1;
            return e;
        },
        getPatternPosition: function(t) {
            return de.PATTERN_POSITION_TABLE[t - 1];
        },
        getMask: function(t, e, r) {
            switch (t) {
                case Rt.PATTERN000:
                    return (e + r) % 2 == 0;
                case Rt.PATTERN001:
                    return e % 2 == 0;
                case Rt.PATTERN010:
                    return r % 3 == 0;
                case Rt.PATTERN011:
                    return (e + r) % 3 == 0;
                case Rt.PATTERN100:
                    return (Math.floor(e / 2) + Math.floor(r / 3)) % 2 == 0;
                case Rt.PATTERN101:
                    return e * r % 2 + e * r % 3 == 0;
                case Rt.PATTERN110:
                    return (e * r % 2 + e * r % 3) % 2 == 0;
                case Rt.PATTERN111:
                    return (e * r % 3 + (e + r) % 2) % 2 == 0;
                default:
                    throw new Error("bad maskPattern:" + t);
            }
        },
        getErrorCorrectPolynomial: function(t) {
            for (var e = new wr([1], 0), r = 0; r < t; r++)
                e = e.multiply(new wr([1, Re.gexp(r)], 0));
            return e;
        },
        getLengthInBits: function(t, e) {
            if (1 <= e && e < 10)
                switch (t) {
                    case He.MODE_NUMBER:
                        return 10;
                    case He.MODE_ALPHA_NUM:
                        return 9;
                    case He.MODE_8BIT_BYTE:
                        return 8;
                    case He.MODE_KANJI:
                        return 8;
                    default:
                        throw new Error("mode:" + t);
                }
            else if (e < 27)
                switch (t) {
                    case He.MODE_NUMBER:
                        return 12;
                    case He.MODE_ALPHA_NUM:
                        return 11;
                    case He.MODE_8BIT_BYTE:
                        return 16;
                    case He.MODE_KANJI:
                        return 10;
                    default:
                        throw new Error("mode:" + t);
                }
            else if (e < 41)
                switch (t) {
                    case He.MODE_NUMBER:
                        return 14;
                    case He.MODE_ALPHA_NUM:
                        return 13;
                    case He.MODE_8BIT_BYTE:
                        return 16;
                    case He.MODE_KANJI:
                        return 12;
                    default:
                        throw new Error("mode:" + t);
                }
            else
                throw new Error("type:" + e);
        },
        getLostPoint: function(t) {
            for (var e = t.getModuleCount(), r = 0, n = 0; n < e; n++)
                for (var i = 0; i < e; i++) {
                    for (var s = 0, o = t.isDark(n, i), a = -1; a <= 1; a++)
                        if (!(n + a < 0 || e <= n + a))
                            for (var c = -1; c <= 1; c++)
                                i + c < 0 || e <= i + c || a == 0 && c == 0 || o == t.isDark(n + a, i + c) && s++;
                    s > 5 && (r += 3 + s - 5);
                }
            for (var n = 0; n < e - 1; n++)
                for (var i = 0; i < e - 1; i++) {
                    var u = 0;
                    t.isDark(n, i) && u++, t.isDark(n + 1, i) && u++, t.isDark(n, i + 1) && u++, t.isDark(n + 1, i + 1) && u++, (u == 0 || u == 4) && (r += 3);
                }
            for (var n = 0; n < e; n++)
                for (var i = 0; i < e - 6; i++)
                    t.isDark(n, i) && !t.isDark(n, i + 1) && t.isDark(n, i + 2) && t.isDark(n, i + 3) && t.isDark(n, i + 4) && !t.isDark(n, i + 5) && t.isDark(n, i + 6) && (r += 40);
            for (var i = 0; i < e; i++)
                for (var n = 0; n < e - 6; n++)
                    t.isDark(n, i) && !t.isDark(n + 1, i) && t.isDark(n + 2, i) && t.isDark(n + 3, i) && t.isDark(n + 4, i) && !t.isDark(n + 5, i) && t.isDark(n + 6, i) && (r += 40);
            for (var l = 0, i = 0; i < e; i++)
                for (var n = 0; n < e; n++)
                    t.isDark(n, i) && l++;
            var b = Math.abs(100 * l / e / e - 50) / 5;
            return r += b * 10, r;
        }
    },
    Re = {
        glog: function(t) {
            if (t < 1)
                throw new Error("glog(" + t + ")");
            return Re.LOG_TABLE[t];
        },
        gexp: function(t) {
            for (; t < 0;)
                t += 255;
            for (; t >= 256;)
                t -= 255;
            return Re.EXP_TABLE[t];
        },
        EXP_TABLE: new Array(256),
        LOG_TABLE: new Array(256)
    };
for (var Te = 0; Te < 8; Te++)
    Re.EXP_TABLE[Te] = 1 << Te;
for (var Te = 8; Te < 256; Te++)
    Re.EXP_TABLE[Te] = Re.EXP_TABLE[Te - 4] ^ Re.EXP_TABLE[Te - 5] ^ Re.EXP_TABLE[Te - 6] ^ Re.EXP_TABLE[Te - 8];
for (var Te = 0; Te < 255; Te++)
    Re.LOG_TABLE[Re.EXP_TABLE[Te]] = Te;

function wr(t, e) {
    if (t.length == null)
        throw new Error(t.length + "/" + e);
    for (var r = 0; r < t.length && t[r] == 0;)
        r++;
    this.num = new Array(t.length - r + e);
    for (var n = 0; n < t.length - r; n++)
        this.num[n] = t[n + r];
}
wr.prototype = {
    get: function(t) {
        return this.num[t];
    },
    getLength: function() {
        return this.num.length;
    },
    multiply: function(t) {
        for (var e = new Array(this.getLength() + t.getLength() - 1), r = 0; r < this.getLength(); r++)
            for (var n = 0; n < t.getLength(); n++)
                e[r + n] ^= Re.gexp(Re.glog(this.get(r)) + Re.glog(t.get(n)));
        return new wr(e, 0);
    },
    mod: function(t) {
        if (this.getLength() - t.getLength() < 0)
            return this;
        for (var e = Re.glog(this.get(0)) - Re.glog(t.get(0)), r = new Array(this.getLength()), n = 0; n < this.getLength(); n++)
            r[n] = this.get(n);
        for (var n = 0; n < t.getLength(); n++)
            r[n] ^= Re.gexp(Re.glog(t.get(n)) + e);
        return new wr(r, 0).mod(t);
    }
};

function ht(t, e) {
    this.totalCount = t, this.dataCount = e;
}
ht.RS_BLOCK_TABLE = [
    [1, 26, 19],
    [1, 26, 16],
    [1, 26, 13],
    [1, 26, 9],
    [1, 44, 34],
    [1, 44, 28],
    [1, 44, 22],
    [1, 44, 16],
    [1, 70, 55],
    [1, 70, 44],
    [2, 35, 17],
    [2, 35, 13],
    [1, 100, 80],
    [2, 50, 32],
    [2, 50, 24],
    [4, 25, 9],
    [1, 134, 108],
    [2, 67, 43],
    [2, 33, 15, 2, 34, 16],
    [2, 33, 11, 2, 34, 12],
    [2, 86, 68],
    [4, 43, 27],
    [4, 43, 19],
    [4, 43, 15],
    [2, 98, 78],
    [4, 49, 31],
    [2, 32, 14, 4, 33, 15],
    [4, 39, 13, 1, 40, 14],
    [2, 121, 97],
    [2, 60, 38, 2, 61, 39],
    [4, 40, 18, 2, 41, 19],
    [4, 40, 14, 2, 41, 15],
    [2, 146, 116],
    [3, 58, 36, 2, 59, 37],
    [4, 36, 16, 4, 37, 17],
    [4, 36, 12, 4, 37, 13],
    [2, 86, 68, 2, 87, 69],
    [4, 69, 43, 1, 70, 44],
    [6, 43, 19, 2, 44, 20],
    [6, 43, 15, 2, 44, 16],
    [4, 101, 81],
    [1, 80, 50, 4, 81, 51],
    [4, 50, 22, 4, 51, 23],
    [3, 36, 12, 8, 37, 13],
    [2, 116, 92, 2, 117, 93],
    [6, 58, 36, 2, 59, 37],
    [4, 46, 20, 6, 47, 21],
    [7, 42, 14, 4, 43, 15],
    [4, 133, 107],
    [8, 59, 37, 1, 60, 38],
    [8, 44, 20, 4, 45, 21],
    [12, 33, 11, 4, 34, 12],
    [3, 145, 115, 1, 146, 116],
    [4, 64, 40, 5, 65, 41],
    [11, 36, 16, 5, 37, 17],
    [11, 36, 12, 5, 37, 13],
    [5, 109, 87, 1, 110, 88],
    [5, 65, 41, 5, 66, 42],
    [5, 54, 24, 7, 55, 25],
    [11, 36, 12],
    [5, 122, 98, 1, 123, 99],
    [7, 73, 45, 3, 74, 46],
    [15, 43, 19, 2, 44, 20],
    [3, 45, 15, 13, 46, 16],
    [1, 135, 107, 5, 136, 108],
    [10, 74, 46, 1, 75, 47],
    [1, 50, 22, 15, 51, 23],
    [2, 42, 14, 17, 43, 15],
    [5, 150, 120, 1, 151, 121],
    [9, 69, 43, 4, 70, 44],
    [17, 50, 22, 1, 51, 23],
    [2, 42, 14, 19, 43, 15],
    [3, 141, 113, 4, 142, 114],
    [3, 70, 44, 11, 71, 45],
    [17, 47, 21, 4, 48, 22],
    [9, 39, 13, 16, 40, 14],
    [3, 135, 107, 5, 136, 108],
    [3, 67, 41, 13, 68, 42],
    [15, 54, 24, 5, 55, 25],
    [15, 43, 15, 10, 44, 16],
    [4, 144, 116, 4, 145, 117],
    [17, 68, 42],
    [17, 50, 22, 6, 51, 23],
    [19, 46, 16, 6, 47, 17],
    [2, 139, 111, 7, 140, 112],
    [17, 74, 46],
    [7, 54, 24, 16, 55, 25],
    [34, 37, 13],
    [4, 151, 121, 5, 152, 122],
    [4, 75, 47, 14, 76, 48],
    [11, 54, 24, 14, 55, 25],
    [16, 45, 15, 14, 46, 16],
    [6, 147, 117, 4, 148, 118],
    [6, 73, 45, 14, 74, 46],
    [11, 54, 24, 16, 55, 25],
    [30, 46, 16, 2, 47, 17],
    [8, 132, 106, 4, 133, 107],
    [8, 75, 47, 13, 76, 48],
    [7, 54, 24, 22, 55, 25],
    [22, 45, 15, 13, 46, 16],
    [10, 142, 114, 2, 143, 115],
    [19, 74, 46, 4, 75, 47],
    [28, 50, 22, 6, 51, 23],
    [33, 46, 16, 4, 47, 17],
    [8, 152, 122, 4, 153, 123],
    [22, 73, 45, 3, 74, 46],
    [8, 53, 23, 26, 54, 24],
    [12, 45, 15, 28, 46, 16],
    [3, 147, 117, 10, 148, 118],
    [3, 73, 45, 23, 74, 46],
    [4, 54, 24, 31, 55, 25],
    [11, 45, 15, 31, 46, 16],
    [7, 146, 116, 7, 147, 117],
    [21, 73, 45, 7, 74, 46],
    [1, 53, 23, 37, 54, 24],
    [19, 45, 15, 26, 46, 16],
    [5, 145, 115, 10, 146, 116],
    [19, 75, 47, 10, 76, 48],
    [15, 54, 24, 25, 55, 25],
    [23, 45, 15, 25, 46, 16],
    [13, 145, 115, 3, 146, 116],
    [2, 74, 46, 29, 75, 47],
    [42, 54, 24, 1, 55, 25],
    [23, 45, 15, 28, 46, 16],
    [17, 145, 115],
    [10, 74, 46, 23, 75, 47],
    [10, 54, 24, 35, 55, 25],
    [19, 45, 15, 35, 46, 16],
    [17, 145, 115, 1, 146, 116],
    [14, 74, 46, 21, 75, 47],
    [29, 54, 24, 19, 55, 25],
    [11, 45, 15, 46, 46, 16],
    [13, 145, 115, 6, 146, 116],
    [14, 74, 46, 23, 75, 47],
    [44, 54, 24, 7, 55, 25],
    [59, 46, 16, 1, 47, 17],
    [12, 151, 121, 7, 152, 122],
    [12, 75, 47, 26, 76, 48],
    [39, 54, 24, 14, 55, 25],
    [22, 45, 15, 41, 46, 16],
    [6, 151, 121, 14, 152, 122],
    [6, 75, 47, 34, 76, 48],
    [46, 54, 24, 10, 55, 25],
    [2, 45, 15, 64, 46, 16],
    [17, 152, 122, 4, 153, 123],
    [29, 74, 46, 14, 75, 47],
    [49, 54, 24, 10, 55, 25],
    [24, 45, 15, 46, 46, 16],
    [4, 152, 122, 18, 153, 123],
    [13, 74, 46, 32, 75, 47],
    [48, 54, 24, 14, 55, 25],
    [42, 45, 15, 32, 46, 16],
    [20, 147, 117, 4, 148, 118],
    [40, 75, 47, 7, 76, 48],
    [43, 54, 24, 22, 55, 25],
    [10, 45, 15, 67, 46, 16],
    [19, 148, 118, 6, 149, 119],
    [18, 75, 47, 31, 76, 48],
    [34, 54, 24, 34, 55, 25],
    [20, 45, 15, 61, 46, 16]
];
ht.getRSBlocks = function(t, e) {
    var r = ht.getRsBlockTable(t, e);
    if (r == null)
        throw new Error("bad rs block @ typeNumber:" + t + "/errorCorrectLevel:" + e);
    for (var n = r.length / 3, i = [], s = 0; s < n; s++)
        for (var o = r[s * 3 + 0], a = r[s * 3 + 1], c = r[s * 3 + 2], u = 0; u < o; u++)
            i.push(new ht(a, c));
    return i;
};
ht.getRsBlockTable = function(t, e) {
    switch (e) {
        case Nt.L:
            return ht.RS_BLOCK_TABLE[(t - 1) * 4 + 0];
        case Nt.M:
            return ht.RS_BLOCK_TABLE[(t - 1) * 4 + 1];
        case Nt.Q:
            return ht.RS_BLOCK_TABLE[(t - 1) * 4 + 2];
        case Nt.H:
            return ht.RS_BLOCK_TABLE[(t - 1) * 4 + 3];
        default:
            return;
    }
};

function ld() {
    this.buffer = [], this.length = 0;
}
ld.prototype = {
    get: function(t) {
        var e = Math.floor(t / 8);
        return (this.buffer[e] >>> 7 - t % 8 & 1) == 1;
    },
    put: function(t, e) {
        for (var r = 0; r < e; r++)
            this.putBit((t >>> e - r - 1 & 1) == 1);
    },
    getLengthInBits: function() {
        return this.length;
    },
    putBit: function(t) {
        var e = Math.floor(this.length / 8);
        this.buffer.length <= e && this.buffer.push(0), t && (this.buffer[e] |= 128 >>> this.length % 8), this.length++;
    }
};
var ta = [
    [17, 14, 11, 7],
    [32, 26, 20, 14],
    [53, 42, 32, 24],
    [78, 62, 46, 34],
    [106, 84, 60, 44],
    [134, 106, 74, 58],
    [154, 122, 86, 64],
    [192, 152, 108, 84],
    [230, 180, 130, 98],
    [271, 213, 151, 119],
    [321, 251, 177, 137],
    [367, 287, 203, 155],
    [425, 331, 241, 177],
    [458, 362, 258, 194],
    [520, 412, 292, 220],
    [586, 450, 322, 250],
    [644, 504, 364, 280],
    [718, 560, 394, 310],
    [792, 624, 442, 338],
    [858, 666, 482, 382],
    [929, 711, 509, 403],
    [1003, 779, 565, 439],
    [1091, 857, 611, 461],
    [1171, 911, 661, 511],
    [1273, 997, 715, 535],
    [1367, 1059, 751, 593],
    [1465, 1125, 805, 625],
    [1528, 1190, 868, 658],
    [1628, 1264, 908, 698],
    [1732, 1370, 982, 742],
    [1840, 1452, 1030, 790],
    [1952, 1538, 1112, 842],
    [2068, 1628, 1168, 898],
    [2188, 1722, 1228, 958],
    [2303, 1809, 1283, 983],
    [2431, 1911, 1351, 1051],
    [2563, 1989, 1423, 1093],
    [2699, 2099, 1499, 1139],
    [2809, 2213, 1579, 1219],
    [2953, 2331, 1663, 1273]
];

function fd(t) {
    if (this.options = {
            padding: 4,
            width: 256,
            height: 256,
            typeNumber: 4,
            color: "#000000",
            background: "#ffffff",
            ecl: "M",
            image: {
                svg: "",
                width: 0,
                height: 0
            }
        }, typeof t == "string" && (t = {
            content: t
        }), t)
        for (var e in t)
            this.options[e] = t[e];
    if (typeof this.options.content != "string")
        throw new Error("Expected 'content' as string!");
    if (this.options.content.length === 0)
        throw new Error("Expected 'content' to be non-empty!");
    if (!(this.options.padding >= 0))
        throw new Error("Expected 'padding' value to be non-negative!");
    if (!(this.options.width > 0) || !(this.options.height > 0))
        throw new Error("Expected 'width' or 'height' value to be higher than zero!");

    function r(c) {
        switch (c) {
            case "L":
                return Nt.L;
            case "M":
                return Nt.M;
            case "Q":
                return Nt.Q;
            case "H":
                return Nt.H;
            default:
                throw new Error("Unknwon error correction level: " + c);
        }
    }

    function n(c, u) {
        for (var l = i(c), b = 1, f = 0, p = 0, g = ta.length; p <= g; p++) {
            var S = ta[p];
            if (!S)
                throw new Error("Content too long: expected " + f + " but got " + l);
            switch (u) {
                case "L":
                    f = S[0];
                    break;
                case "M":
                    f = S[1];
                    break;
                case "Q":
                    f = S[2];
                    break;
                case "H":
                    f = S[3];
                    break;
                default:
                    throw new Error("Unknwon error correction level: " + u);
            }
            if (l <= f)
                break;
            b++;
        }
        if (b > ta.length)
            throw new Error("Content too long");
        return b;
    }

    function i(c) {
        var u = encodeURI(c).toString().replace(/\%[0-9a-fA-F]{2}/g, "a");
        return u.length + (u.length != c ? 3 : 0);
    }
    var s = this.options.content,
        o = n(s, this.options.ecl),
        a = r(this.options.ecl);
    this.qrcode = new pt(o, a), this.qrcode.addData(s), this.qrcode.make();
}
fd.prototype.svg = function(t) {
    var e = this.options || {},
        r = this.qrcode.modules;
    typeof t > "u" && (t = {
        container: e.container || "svg"
    });
    for (var n = typeof e.pretty < "u" ? !!e.pretty : !0, i = n ? "  " : "", s = n ? `\r
` : "", o = e.width, a = e.height, c = r.length, u = o / (c + 2 * e.padding), l = a / (c + 2 * e.padding), b = typeof e.join < "u" ? !!e.join : !1, f = typeof e.swap < "u" ? !!e.swap : !1, p = typeof e.xmlDeclaration < "u" ? !!e.xmlDeclaration : !0, g = typeof e.predefined < "u" ? !!e.predefined : !1, S = g ? i + '<defs><path id="qrmodule" d="M0 0 h' + l + " v" + u + ' H0 z" style="fill:' + e.color + ';shape-rendering:crispEdges;" /></defs>' + s : "", I = i + '<rect x="0" y="0" width="' + o + '" height="' + a + '" style="fill:' + e.background + ';shape-rendering:crispEdges;"/>' + s, _ = "", m = "", w = 0; w < c; w++)
        for (var A = 0; A < c; A++) {
            var N = r[A][w];
            if (N) {
                var U = A * u + e.padding * u,
                    F = w * l + e.padding * l;
                if (f) {
                    var P = U;
                    U = F, F = P;
                }
                if (b) {
                    var L = u + U,
                        ie = l + F;
                    U = Number.isInteger(U) ? Number(U) : U.toFixed(2), F = Number.isInteger(F) ? Number(F) : F.toFixed(2), L = Number.isInteger(L) ? Number(L) : L.toFixed(2), ie = Number.isInteger(ie) ? Number(ie) : ie.toFixed(2), m += "M" + U + "," + F + " V" + ie + " H" + L + " V" + F + " H" + U + " Z ";
                } else
                    g ? _ += i + '<use x="' + U.toString() + '" y="' + F.toString() + '" href="#qrmodule" />' + s : _ += i + '<rect x="' + U.toString() + '" y="' + F.toString() + '" width="' + u + '" height="' + l + '" style="fill:' + e.color + ';shape-rendering:crispEdges;"/>' + s;
            }
        }
    b && (_ = i + '<path x="0" y="0" style="fill:' + e.color + ';shape-rendering:crispEdges;" d="' + m + '" />');
    let ee = "";
    if (this.options.image !== void 0 && this.options.image.svg) {
        const q = o * this.options.image.width / 100,
            K = a * this.options.image.height / 100,
            ne = o / 2 - q / 2,
            he = a / 2 - K / 2;
        ee += `<svg x="${ne}" y="${he}" width="${q}" height="${K}" viewBox="0 0 100 100" preserveAspectRatio="xMinYMin meet">`, ee += this.options.image.svg + s, ee += "</svg>";
    }
    var z = "";
    switch (t.container) {
        case "svg":
            p && (z += '<?xml version="1.0" standalone="yes"?>' + s), z += '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="' + o + '" height="' + a + '">' + s, z += S + I + _, z += ee, z += "</svg>";
            break;
        case "svg-viewbox":
            p && (z += '<?xml version="1.0" standalone="yes"?>' + s), z += '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 ' + o + " " + a + '">' + s, z += S + I + _, z += ee, z += "</svg>";
            break;
        case "g":
            z += '<g width="' + o + '" height="' + a + '">' + s, z += S + I + _, z += ee, z += "</g>";
            break;
        default:
            z += (S + I + _ + ee).replace(/^\s+/, "");
            break;
    }
    return z;
};
var AS = fd,
    TS = re && re.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    };
Object.defineProperty(os, "__esModule", {
    value: !0
});
os.QRCode = void 0;
const CS = Ge,
    dl = Un,
    MS = TS(AS),
    xS = (t) => {
        const [e, r] = (0, dl.useState)("");
        return (0, dl.useEffect)(() => {
            var n, i;
            const s = new MS.default({
                    content: t.content,
                    background: t.bgColor || "#ffffff",
                    color: t.fgColor || "#000000",
                    container: "svg",
                    ecl: "M",
                    width: (n = t.width) !== null && n !== void 0 ? n : 256,
                    height: (i = t.height) !== null && i !== void 0 ? i : 256,
                    padding: 0,
                    image: t.image
                }),
                o = Buffer.from(s.svg(), "utf8").toString("base64");
            r(`data:image/svg+xml;base64,${o}`);
        }), e ? (0, CS.h)("img", {
            src: e,
            alt: "QR Code"
        }) : null;
    };
os.QRCode = xS;
var as = {},
    kc = {};
Object.defineProperty(kc, "__esModule", {
    value: !0
});
kc.default = ".-cbwsdk-css-reset .-cbwsdk-spinner{display:inline-block}.-cbwsdk-css-reset .-cbwsdk-spinner svg{display:inline-block;animation:2s linear infinite -cbwsdk-spinner-svg}.-cbwsdk-css-reset .-cbwsdk-spinner svg circle{animation:1.9s ease-in-out infinite both -cbwsdk-spinner-circle;display:block;fill:rgba(0,0,0,0);stroke-dasharray:283;stroke-dashoffset:280;stroke-linecap:round;stroke-width:10px;transform-origin:50% 50%}@keyframes -cbwsdk-spinner-svg{0%{transform:rotateZ(0deg)}100%{transform:rotateZ(360deg)}}@keyframes -cbwsdk-spinner-circle{0%,25%{stroke-dashoffset:280;transform:rotate(0)}50%,75%{stroke-dashoffset:75;transform:rotate(45deg)}100%{stroke-dashoffset:280;transform:rotate(360deg)}}";
var OS = re && re.__importDefault || function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
};
Object.defineProperty(as, "__esModule", {
    value: !0
});
as.Spinner = void 0;
const qn = Ge,
    NS = OS(kc),
    DS = (t) => {
        var e;
        const r = (e = t.size) !== null && e !== void 0 ? e : 64,
            n = t.color || "#000";
        return (0, qn.h)(
            "div", {
                class: "-cbwsdk-spinner"
            },
            (0, qn.h)("style", null, NS.default),
            (0, qn.h)(
                "svg", {
                    viewBox: "0 0 100 100",
                    xmlns: "http://www.w3.org/2000/svg",
                    style: {
                        width: r,
                        height: r
                    }
                },
                (0, qn.h)("circle", {
                    style: {
                        cx: 50,
                        cy: 50,
                        r: 45,
                        stroke: n
                    }
                })
            )
        );
    };
as.Spinner = DS;
var Rc = {};
Object.defineProperty(Rc, "__esModule", {
    value: !0
});
Rc.default = ".-cbwsdk-css-reset .-cbwsdk-connect-content{height:430px;width:700px;border-radius:12px;padding:30px}.-cbwsdk-css-reset .-cbwsdk-connect-content.light{background:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content.dark{background:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-content-header{display:flex;align-items:center;justify-content:space-between;margin:0 0 30px}.-cbwsdk-css-reset .-cbwsdk-connect-content-heading{font-style:normal;font-weight:500;font-size:28px;line-height:36px;margin:0}.-cbwsdk-css-reset .-cbwsdk-connect-content-heading.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-content-heading.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content-layout{display:flex;flex-direction:row}.-cbwsdk-css-reset .-cbwsdk-connect-content-column-left{margin-right:30px;display:flex;flex-direction:column;justify-content:space-between}.-cbwsdk-css-reset .-cbwsdk-connect-content-column-right{flex:25%;margin-right:34px}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-wrapper{width:220px;height:220px;border-radius:12px;display:flex;justify-content:center;align-items:center;background:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting{position:absolute;top:0;bottom:0;left:0;right:0;display:flex;flex-direction:column;align-items:center;justify-content:center}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.light{background-color:rgba(255,255,255,.95)}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.light>p{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.dark{background-color:rgba(10,11,13,.9)}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.dark>p{color:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting>p{font-size:12px;font-weight:bold;margin-top:16px}.-cbwsdk-css-reset .-cbwsdk-connect-content-update-app{border-radius:8px;font-size:14px;line-height:20px;padding:12px;width:339px}.-cbwsdk-css-reset .-cbwsdk-connect-content-update-app.light{background:#eef0f3;color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-connect-content-update-app.dark{background:#1e2025;color:#8a919e}.-cbwsdk-css-reset .-cbwsdk-cancel-button{-webkit-appearance:none;border:none;background:none;cursor:pointer;padding:0;margin:0}.-cbwsdk-css-reset .-cbwsdk-cancel-button-x{position:relative;display:block;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-wallet-steps{padding:0 0 0 16px;margin:0;width:100%;list-style:decimal}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item{list-style-type:decimal;display:list-item;font-style:normal;font-weight:400;font-size:16px;line-height:24px;margin-top:20px}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item-wrapper{display:flex;align-items:center}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-pad-left{margin-left:6px}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon{display:flex;border-radius:50%;height:24px;width:24px}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon svg{margin:auto;display:block}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon.light{background:#0052ff}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon.dark{background:#588af5}.-cbwsdk-css-reset .-cbwsdk-connect-item{align-items:center;display:flex;flex-direction:row;padding:16px 24px;gap:12px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-connect-item.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-item.light.selected{background:#f5f8ff;color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-connect-item.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-item.dark.selected{background:#001033;color:#588af5}.-cbwsdk-css-reset .-cbwsdk-connect-item.selected{border-radius:100px;font-weight:600}.-cbwsdk-css-reset .-cbwsdk-connect-item-copy-wrapper{margin:0 4px 0 8px}.-cbwsdk-css-reset .-cbwsdk-connect-item-title{margin:0 0 0;font-size:16px;line-height:24px;font-weight:500}.-cbwsdk-css-reset .-cbwsdk-connect-item-description{font-weight:400;font-size:14px;line-height:20px;margin:0}";
var zr = re && re.__importDefault || function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
};
Object.defineProperty(dt, "__esModule", {
    value: !0
});
dt.CoinbaseAppSteps = dt.CoinbaseWalletSteps = dt.ConnectItem = dt.ConnectContent = void 0;
const Ye = zr(ts),
    G = Ge,
    pl = Un,
    LS = B,
    PS = rs,
    jS = ns,
    BS = zr(vc),
    US = zr(wc),
    hd = is,
    FS = zr(Ec),
    HS = zr(Sc),
    WS = ss,
    GS = os,
    $S = as,
    VS = zr(Rc),
    _l = {
        "coinbase-wallet-app": {
            title: "Coinbase Wallet app",
            description: "Connect with your self-custody wallet",
            icon: US.default,
            steps: pd
        },
        "coinbase-app": {
            title: "Coinbase app",
            description: "Connect with your Coinbase account",
            icon: BS.default,
            steps: _d
        }
    },
    zS = (t) => {
        switch (t) {
            case "coinbase-app":
                return FS.default;
            case "coinbase-wallet-app":
            default:
                return HS.default;
        }
    },
    La = (t) => t === "light" ? "#FFFFFF" : "#0A0B0D";

function ZS(t) {
    const {
        theme: e
    } = t, [r, n] = (0, pl.useState)("coinbase-wallet-app"), i = (0, pl.useCallback)((u) => {
        n(u);
    }, []), s = (0, LS.createQrUrl)(t.sessionId, t.sessionSecret, t.linkAPIUrl, t.isParentConnection, t.version, t.chainId), o = _l[r];
    if (!r)
        return null;
    const a = o.steps,
        c = r === "coinbase-app";
    return (0, G.h)(
        "div", {
            "data-testid": "connect-content",
            class: (0, Ye.default)("-cbwsdk-connect-content", e)
        },
        (0, G.h)("style", null, VS.default),
        (0, G.h)(
            "div", {
                class: "-cbwsdk-connect-content-header"
            },
            (0, G.h)("h2", {
                class: (0, Ye.default)("-cbwsdk-connect-content-heading", e)
            }, "Scan to connect with one of our mobile apps"),
            t.onCancel && (0, G.h)(
                "button", {
                    type: "button",
                    class: "-cbwsdk-cancel-button",
                    onClick: t.onCancel
                },
                (0, G.h)(jS.CloseIcon, {
                    fill: e === "light" ? "#0A0B0D" : "#FFFFFF"
                })
            )
        ),
        (0, G.h)(
            "div", {
                class: "-cbwsdk-connect-content-layout"
            },
            (0, G.h)(
                "div", {
                    class: "-cbwsdk-connect-content-column-left"
                },
                (0, G.h)("div", null, Object.entries(_l).map(([u, l]) => (0, G.h)(dd, {
                    key: u,
                    title: l.title,
                    description: l.description,
                    icon: l.icon,
                    selected: r === u,
                    onClick: () => i(u),
                    theme: e
                }))),
                c && (0, G.h)(
                    "div", {
                        class: (0, Ye.default)("-cbwsdk-connect-content-update-app", e)
                    },
                    "Don’t see a ",
                    (0, G.h)("strong", null, "Scan"),
                    " option? Update your Coinbase app to the latest version and try again."
                )
            ),
            (0, G.h)(
                "div", {
                    class: "-cbwsdk-connect-content-column-right"
                },
                (0, G.h)(
                    "div", {
                        class: "-cbwsdk-connect-content-qr-wrapper"
                    },
                    (0, G.h)(GS.QRCode, {
                        content: s,
                        width: 200,
                        height: 200,
                        fgColor: "#000",
                        bgColor: "transparent",
                        image: {
                            svg: zS(r),
                            width: 25,
                            height: 25
                        }
                    }),
                    (0, G.h)("input", {
                        type: "hidden",
                        name: "cbw-cbwsdk-version",
                        value: PS.LIB_VERSION
                    }),
                    (0, G.h)("input", {
                        type: "hidden",
                        value: s
                    })
                ),
                (0, G.h)(a, {
                    theme: e
                }), !t.isConnected && (0, G.h)(
                    "div", {
                        "data-testid": "connecting-spinner",
                        class: (0, Ye.default)("-cbwsdk-connect-content-qr-connecting", e)
                    },
                    (0, G.h)($S.Spinner, {
                        size: 36,
                        color: e === "dark" ? "#FFF" : "#000"
                    }),
                    (0, G.h)("p", null, "Connecting...")
                )
            )
        )
    );
}
dt.ConnectContent = ZS;

function dd({
    title: t,
    description: e,
    icon: r,
    selected: n,
    theme: i,
    onClick: s
}) {
    return (0, G.h)(
        "div", {
            onClick: s,
            class: (0, Ye.default)("-cbwsdk-connect-item", i, {
                selected: n
            })
        },
        (0, G.h)(
            "div",
            null,
            (0, G.h)("img", {
                src: r,
                alt: t
            })
        ),
        (0, G.h)(
            "div", {
                class: "-cbwsdk-connect-item-copy-wrapper"
            },
            (0, G.h)("h3", {
                class: "-cbwsdk-connect-item-title"
            }, t),
            (0, G.h)("p", {
                class: "-cbwsdk-connect-item-description"
            }, e)
        )
    );
}
dt.ConnectItem = dd;

function pd({
    theme: t
}) {
    return (0, G.h)(
        "ol", {
            class: "-cbwsdk-wallet-steps"
        },
        (0, G.h)(
            "li", {
                class: (0, Ye.default)("-cbwsdk-wallet-steps-item", t)
            },
            (0, G.h)("div", {
                class: "-cbwsdk-wallet-steps-item-wrapper"
            }, "Open Coinbase Wallet app")
        ),
        (0, G.h)(
            "li", {
                class: (0, Ye.default)("-cbwsdk-wallet-steps-item", t)
            },
            (0, G.h)(
                "div", {
                    class: "-cbwsdk-wallet-steps-item-wrapper"
                },
                (0, G.h)(
                    "span",
                    null,
                    "Tap ",
                    (0, G.h)("strong", null, "Scan"),
                    " "
                ),
                (0, G.h)(
                    "span", {
                        class: (0, Ye.default)("-cbwsdk-wallet-steps-pad-left", "-cbwsdk-wallet-steps-icon", t)
                    },
                    (0, G.h)(hd.QRCodeIcon, {
                        fill: La(t)
                    })
                )
            )
        )
    );
}
dt.CoinbaseWalletSteps = pd;

function _d({
    theme: t
}) {
    return (0, G.h)(
        "ol", {
            class: "-cbwsdk-wallet-steps"
        },
        (0, G.h)(
            "li", {
                class: (0, Ye.default)("-cbwsdk-wallet-steps-item", t)
            },
            (0, G.h)("div", {
                class: "-cbwsdk-wallet-steps-item-wrapper"
            }, "Open Coinbase app")
        ),
        (0, G.h)(
            "li", {
                class: (0, Ye.default)("-cbwsdk-wallet-steps-item", t)
            },
            (0, G.h)(
                "div", {
                    class: "-cbwsdk-wallet-steps-item-wrapper"
                },
                (0, G.h)(
                    "span",
                    null,
                    "Tap ",
                    (0, G.h)("strong", null, "More")
                ),
                (0, G.h)(
                    "span", {
                        class: (0, Ye.default)("-cbwsdk-wallet-steps-pad-left", "-cbwsdk-wallet-steps-icon", t)
                    },
                    (0, G.h)(WS.StatusDotIcon, {
                        fill: La(t)
                    })
                ),
                (0, G.h)(
                    "span", {
                        class: "-cbwsdk-wallet-steps-pad-left"
                    },
                    "then ",
                    (0, G.h)("strong", null, "Scan")
                ),
                (0, G.h)(
                    "span", {
                        class: (0, Ye.default)("-cbwsdk-wallet-steps-pad-left", "-cbwsdk-wallet-steps-icon", t)
                    },
                    (0, G.h)(hd.QRCodeIcon, {
                        fill: La(t)
                    })
                )
            )
        )
    );
}
dt.CoinbaseAppSteps = _d;
var cs = {},
    us = {};
Object.defineProperty(us, "__esModule", {
    value: !0
});
us.ArrowLeftIcon = void 0;
const bl = Ge;

function qS(t) {
    return (0, bl.h)(
        "svg",
        Object.assign({
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            xmlns: "http://www.w3.org/2000/svg"
        }, t),
        (0, bl.h)("path", {
            d: "M8.60675 0.155884L7.37816 1.28209L12.7723 7.16662H0V8.83328H12.6548L6.82149 14.6666L8 15.8451L15.8201 8.02501L8.60675 0.155884Z"
        })
    );
}
us.ArrowLeftIcon = qS;
var ls = {};
Object.defineProperty(ls, "__esModule", {
    value: !0
});
ls.LaptopIcon = void 0;
const ra = Ge;

function YS(t) {
    return (0, ra.h)(
        "svg",
        Object.assign({
            width: "14",
            height: "14",
            viewBox: "0 0 14 14",
            xmlns: "http://www.w3.org/2000/svg"
        }, t),
        (0, ra.h)("path", {
            d: "M1.8001 2.2002H12.2001V9.40019H1.8001V2.2002ZM3.4001 3.8002V7.80019H10.6001V3.8002H3.4001Z"
        }),
        (0, ra.h)("path", {
            d: "M13.4001 10.2002H0.600098C0.600098 11.0838 1.31644 11.8002 2.2001 11.8002H11.8001C12.6838 11.8002 13.4001 11.0838 13.4001 10.2002Z"
        })
    );
}
ls.LaptopIcon = YS;
var fs = {};
Object.defineProperty(fs, "__esModule", {
    value: !0
});
fs.SafeIcon = void 0;
const gl = Ge;

function JS(t) {
    return (0, gl.h)(
        "svg",
        Object.assign({
            width: "14",
            height: "14",
            viewBox: "0 0 14 14",
            xmlns: "http://www.w3.org/2000/svg"
        }, t),
        (0, gl.h)("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M0.600098 0.600098V11.8001H13.4001V0.600098H0.600098ZM7.0001 9.2001C5.3441 9.2001 4.0001 7.8561 4.0001 6.2001C4.0001 4.5441 5.3441 3.2001 7.0001 3.2001C8.6561 3.2001 10.0001 4.5441 10.0001 6.2001C10.0001 7.8561 8.6561 9.2001 7.0001 9.2001ZM0.600098 12.6001H3.8001V13.4001H0.600098V12.6001ZM10.2001 12.6001H13.4001V13.4001H10.2001V12.6001ZM8.8001 6.2001C8.8001 7.19421 7.99421 8.0001 7.0001 8.0001C6.00598 8.0001 5.2001 7.19421 5.2001 6.2001C5.2001 5.20598 6.00598 4.4001 7.0001 4.4001C7.99421 4.4001 8.8001 5.20598 8.8001 6.2001Z"
        })
    );
}
fs.SafeIcon = JS;
var Ic = {};
Object.defineProperty(Ic, "__esModule", {
    value: !0
});
Ic.default = ".-cbwsdk-css-reset .-cbwsdk-try-extension{display:flex;margin-top:12px;height:202px;width:700px;border-radius:12px;padding:30px}.-cbwsdk-css-reset .-cbwsdk-try-extension.light{background:#fff}.-cbwsdk-css-reset .-cbwsdk-try-extension.dark{background:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-try-extension-column-half{flex:50%}.-cbwsdk-css-reset .-cbwsdk-try-extension-heading{font-style:normal;font-weight:500;font-size:25px;line-height:32px;margin:0;max-width:204px}.-cbwsdk-css-reset .-cbwsdk-try-extension-heading.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-try-extension-heading.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta{appearance:none;border:none;background:none;color:#0052ff;cursor:pointer;padding:0;text-decoration:none;display:block;font-weight:600;font-size:16px;line-height:24px}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta.light{color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta.dark{color:#588af5}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta-wrapper{display:flex;align-items:center;margin-top:12px}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta-icon{display:block;margin-left:4px;height:14px}.-cbwsdk-css-reset .-cbwsdk-try-extension-list{display:flex;flex-direction:column;justify-content:center;align-items:center;margin:0;padding:0;list-style:none;height:100%}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item{display:flex;align-items:center;flex-flow:nowrap;margin-top:24px}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item:first-of-type{margin-top:0}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon-wrapper{display:block}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon{display:flex;height:32px;width:32px;border-radius:50%}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon svg{margin:auto;display:block}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon.light{background:#eef0f3}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon.dark{background:#1e2025}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-copy{display:block;font-weight:400;font-size:14px;line-height:20px;padding-left:12px}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-copy.light{color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-copy.dark{color:#8a919e}";
var bd = re && re.__importDefault || function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
};
Object.defineProperty(cs, "__esModule", {
    value: !0
});
cs.TryExtensionContent = void 0;
const $t = bd(ts),
    me = Ge,
    na = Un,
    QS = us,
    KS = ls,
    XS = fs,
    e4 = bd(Ic);

function t4({
    theme: t
}) {
    const [e, r] = (0, na.useState)(!1), n = (0, na.useCallback)(() => {
        window.open("https://api.wallet.coinbase.com/rpc/v2/desktop/chrome", "_blank");
    }, []), i = (0, na.useCallback)(() => {
        e ? window.location.reload() : (n(), r(!0));
    }, [n, e]);
    return (0, me.h)(
        "div", {
            class: (0, $t.default)("-cbwsdk-try-extension", t)
        },
        (0, me.h)("style", null, e4.default),
        (0, me.h)(
            "div", {
                class: "-cbwsdk-try-extension-column-half"
            },
            (0, me.h)("h3", {
                class: (0, $t.default)("-cbwsdk-try-extension-heading", t)
            }, "Or try the Coinbase Wallet browser extension"),
            (0, me.h)(
                "div", {
                    class: "-cbwsdk-try-extension-cta-wrapper"
                },
                (0, me.h)("button", {
                    class: (0, $t.default)("-cbwsdk-try-extension-cta", t),
                    onClick: i
                }, e ? "Refresh" : "Install"),
                (0, me.h)("div", null, !e && (0, me.h)(QS.ArrowLeftIcon, {
                    class: "-cbwsdk-try-extension-cta-icon",
                    fill: t === "light" ? "#0052FF" : "#588AF5"
                }))
            )
        ),
        (0, me.h)(
            "div", {
                class: "-cbwsdk-try-extension-column-half"
            },
            (0, me.h)(
                "ul", {
                    class: "-cbwsdk-try-extension-list"
                },
                (0, me.h)(
                    "li", {
                        class: "-cbwsdk-try-extension-list-item"
                    },
                    (0, me.h)(
                        "div", {
                            class: "-cbwsdk-try-extension-list-item-icon-wrapper"
                        },
                        (0, me.h)(
                            "span", {
                                class: (0, $t.default)("-cbwsdk-try-extension-list-item-icon", t)
                            },
                            (0, me.h)(KS.LaptopIcon, {
                                fill: t === "light" ? "#0A0B0D" : "#FFFFFF"
                            })
                        )
                    ),
                    (0, me.h)("div", {
                        class: (0, $t.default)("-cbwsdk-try-extension-list-item-copy", t)
                    }, "Connect with dapps with just one click on your desktop browser")
                ),
                (0, me.h)(
                    "li", {
                        class: "-cbwsdk-try-extension-list-item"
                    },
                    (0, me.h)(
                        "div", {
                            class: "-cbwsdk-try-extension-list-item-icon-wrapper"
                        },
                        (0, me.h)(
                            "span", {
                                class: (0, $t.default)("-cbwsdk-try-extension-list-item-icon", t)
                            },
                            (0, me.h)(XS.SafeIcon, {
                                fill: t === "light" ? "#0A0B0D" : "#FFFFFF"
                            })
                        )
                    ),
                    (0, me.h)("div", {
                        class: (0, $t.default)("-cbwsdk-try-extension-list-item-copy", t)
                    }, "Add an additional layer of security by using a supported Ledger hardware wallet")
                )
            )
        )
    );
}
cs.TryExtensionContent = t4;
var Ac = {};
Object.defineProperty(Ac, "__esModule", {
    value: !0
});
Ac.default = ".-cbwsdk-css-reset .-cbwsdk-connect-dialog{z-index:2147483647;position:fixed;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop{z-index:2147483647;position:fixed;top:0;left:0;right:0;bottom:0;transition:opacity .25s}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop.light{background-color:rgba(0,0,0,.5)}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop.dark{background-color:rgba(50,53,61,.4)}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop-hidden{opacity:0}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-box{display:flex;position:relative;flex-direction:column;transform:scale(1);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-box-hidden{opacity:0;transform:scale(0.85)}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-container{display:block}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-container-hidden{display:none}";
var gd = re && re.__importDefault || function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
};
Object.defineProperty(es, "__esModule", {
    value: !0
});
es.ConnectDialog = void 0;
const ia = gd(ts),
    Vt = Ge,
    sa = Un,
    r4 = dt,
    n4 = cs,
    i4 = gd(Ac),
    s4 = (t) => {
        const {
            isOpen: e,
            darkMode: r
        } = t, [n, i] = (0, sa.useState)(!e), [s, o] = (0, sa.useState)(!e);
        (0, sa.useEffect)(() => {
            const c = [
                window.setTimeout(() => {
                    o(!e);
                }, 10)
            ];
            return e ? i(!1) : c.push(window.setTimeout(() => {
                i(!0);
            }, 360)), () => {
                c.forEach(window.clearTimeout);
            };
        }, [t.isOpen]);
        const a = r ? "dark" : "light";
        return (0, Vt.h)(
            "div", {
                class: (0, ia.default)("-cbwsdk-connect-dialog-container", n && "-cbwsdk-connect-dialog-container-hidden")
            },
            (0, Vt.h)("style", null, i4.default),
            (0, Vt.h)("div", {
                class: (0, ia.default)("-cbwsdk-connect-dialog-backdrop", a, s && "-cbwsdk-connect-dialog-backdrop-hidden")
            }),
            (0, Vt.h)(
                "div", {
                    class: "-cbwsdk-connect-dialog"
                },
                (0, Vt.h)(
                    "div", {
                        class: (0, ia.default)("-cbwsdk-connect-dialog-box", s && "-cbwsdk-connect-dialog-box-hidden")
                    },
                    t.connectDisabled ? null : (0, Vt.h)(r4.ConnectContent, {
                        theme: a,
                        version: t.version,
                        sessionId: t.sessionId,
                        sessionSecret: t.sessionSecret,
                        linkAPIUrl: t.linkAPIUrl,
                        isConnected: t.isConnected,
                        isParentConnection: t.isParentConnection,
                        chainId: t.chainId,
                        onCancel: t.onCancel
                    }),
                    (0, Vt.h)(n4.TryExtensionContent, {
                        theme: a
                    })
                )
            )
        );
    };
es.ConnectDialog = s4;
Object.defineProperty(Xi, "__esModule", {
    value: !0
});
Xi.LinkFlow = void 0;
const oa = Ge,
    ml = Wr,
    o4 = es;
class a4 {
    constructor(e) {
        this.extensionUI$ = new ml.BehaviorSubject({}), this.subscriptions = new ml.Subscription(), this.isConnected = !1, this.chainId = 1, this.isOpen = !1, this.onCancel = null, this.root = null, this.connectDisabled = !1, this.darkMode = e.darkMode, this.version = e.version, this.sessionId = e.sessionId, this.sessionSecret = e.sessionSecret, this.linkAPIUrl = e.linkAPIUrl, this.isParentConnection = e.isParentConnection, this.connected$ = e.connected$, this.chainId$ = e.chainId$;
    }
    attach(e) {
        this.root = document.createElement("div"), this.root.className = "-cbwsdk-link-flow-root", e.appendChild(this.root), this.render(), this.subscriptions.add(this.connected$.subscribe((r) => {
            this.isConnected !== r && (this.isConnected = r, this.render());
        })), this.subscriptions.add(this.chainId$.subscribe((r) => {
            this.chainId !== r && (this.chainId = r, this.render());
        }));
    }
    detach() {
        var e;
        this.root && (this.subscriptions.unsubscribe(), (0, oa.render)(null, this.root), (e = this.root.parentElement) === null || e === void 0 || e.removeChild(this.root));
    }
    setConnectDisabled(e) {
        this.connectDisabled = e;
    }
    open(e) {
        this.isOpen = !0, this.onCancel = e.onCancel, this.render();
    }
    close() {
        this.isOpen = !1, this.onCancel = null, this.render();
    }
    render() {
        if (!this.root)
            return;
        const e = this.extensionUI$.subscribe(() => {
            this.root && (0, oa.render)((0, oa.h)(o4.ConnectDialog, {
                darkMode: this.darkMode,
                version: this.version,
                sessionId: this.sessionId,
                sessionSecret: this.sessionSecret,
                linkAPIUrl: this.linkAPIUrl,
                isOpen: this.isOpen,
                isConnected: this.isConnected,
                isParentConnection: this.isParentConnection,
                chainId: this.chainId,
                onCancel: this.onCancel,
                connectDisabled: this.connectDisabled
            }), this.root);
        });
        this.subscriptions.add(e);
    }
}
Xi.LinkFlow = a4;
var md = {},
    Tc = {};
Object.defineProperty(Tc, "__esModule", {
    value: !0
});
Tc.default = ".-cbwsdk-css-reset .-gear-container{margin-left:16px !important;margin-right:9px !important;display:flex;align-items:center;justify-content:center;width:24px;height:24px;transition:opacity .25s}.-cbwsdk-css-reset .-gear-container *{user-select:none}.-cbwsdk-css-reset .-gear-container svg{opacity:0;position:absolute}.-cbwsdk-css-reset .-gear-icon{height:12px;width:12px;z-index:10000}.-cbwsdk-css-reset .-cbwsdk-snackbar{align-items:flex-end;display:flex;flex-direction:column;position:fixed;right:0;top:0;z-index:2147483647}.-cbwsdk-css-reset .-cbwsdk-snackbar *{user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance{display:flex;flex-direction:column;margin:8px 16px 0 16px;overflow:visible;text-align:left;transform:translateX(0);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header:hover .-gear-container svg{opacity:1}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header{display:flex;align-items:center;background:#fff;overflow:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-cblogo{margin:8px 8px 8px 8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-message{color:#000;font-size:13px;line-height:1.5;user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu{background:#fff;transition:opacity .25s ease-in-out,transform .25s linear,visibility 0s;visibility:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;opacity:0;flex-direction:column;padding-left:8px;padding-right:8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:last-child{margin-bottom:8px !important}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover{background:#f5f7f8;border-radius:6px;transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover span{color:#050f19;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover svg path{fill:#000;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item{visibility:inherit;height:35px;margin-top:8px;margin-bottom:0;display:flex;flex-direction:row;align-items:center;padding:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item *{visibility:inherit;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover{background:rgba(223,95,103,.2);transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover svg path{fill:#df5f67;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover span{color:#df5f67;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-info{color:#aaa;font-size:13px;margin:0 8px 0 32px;position:absolute}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-hidden{opacity:0;text-align:left;transform:translateX(25%);transition:opacity .5s linear}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-expanded .-cbwsdk-snackbar-instance-menu{opacity:1;display:flex;transform:translateY(8px);visibility:visible}";
(function(t) {
    var e = re && re.__importDefault || function(b) {
        return b && b.__esModule ? b : {
            default: b
        };
    };
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.SnackbarInstance = t.SnackbarContainer = t.Snackbar = void 0;
    const r = e(ts),
        n = Ge,
        i = Un,
        s = e(Tc),
        o = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDYuNzV2LTEuNWwtMS43Mi0uNTdjLS4wOC0uMjctLjE5LS41Mi0uMzItLjc3bC44MS0xLjYyLTEuMDYtMS4wNi0xLjYyLjgxYy0uMjQtLjEzLS41LS4yNC0uNzctLjMyTDYuNzUgMGgtMS41bC0uNTcgMS43MmMtLjI3LjA4LS41My4xOS0uNzcuMzJsLTEuNjItLjgxLTEuMDYgMS4wNi44MSAxLjYyYy0uMTMuMjQtLjI0LjUtLjMyLjc3TDAgNS4yNXYxLjVsMS43Mi41N2MuMDguMjcuMTkuNTMuMzIuNzdsLS44MSAxLjYyIDEuMDYgMS4wNiAxLjYyLS44MWMuMjQuMTMuNS4yMy43Ny4zMkw1LjI1IDEyaDEuNWwuNTctMS43MmMuMjctLjA4LjUyLS4xOS43Ny0uMzJsMS42Mi44MSAxLjA2LTEuMDYtLjgxLTEuNjJjLjEzLS4yNC4yMy0uNS4zMi0uNzdMMTIgNi43NXpNNiA4LjVhMi41IDIuNSAwIDAxMC01IDIuNSAyLjUgMCAwMTAgNXoiIGZpbGw9IiMwNTBGMTkiLz48L3N2Zz4=";

    function a(b) {
        switch (b) {
            case "coinbase-app":
                return "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE0LjY3NCAxOC44NThjLTIuMDQ1IDAtMy42NDgtMS43MjItMy42NDgtMy44NDVzMS42NTktMy44NDUgMy42NDgtMy44NDVjMS44MjQgMCAzLjMxNyAxLjM3NyAzLjU5MyAzLjIxNGgzLjcwM2MtLjMzMS0zLjk2LTMuNDgyLTcuMDU5LTcuMjk2LTcuMDU5LTQuMDM0IDAtNy4zNSAzLjQ0My03LjM1IDcuNjkgMCA0LjI0NiAzLjI2IDcuNjkgNy4zNSA3LjY5IDMuODcgMCA2Ljk2NS0zLjEgNy4yOTYtNy4wNTloLTMuNzAzYy0uMjc2IDEuODM2LTEuNzY5IDMuMjE0LTMuNTkzIDMuMjE0WiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0wIDEwLjY3OGMwLTMuNzExIDAtNS41OTYuNzQyLTcuMDIzQTYuNTMyIDYuNTMyIDAgMCAxIDMuNjU1Ljc0MkM1LjA4MiAwIDYuOTY3IDAgMTAuNjc4IDBoNy45MzhjMy43MTEgMCA1LjU5NiAwIDcuMDIzLjc0MmE2LjUzMSA2LjUzMSAwIDAgMSAyLjkxMyAyLjkxM2MuNzQyIDEuNDI3Ljc0MiAzLjMxMi43NDIgNy4wMjN2Ny45MzhjMCAzLjcxMSAwIDUuNTk2LS43NDIgNy4wMjNhNi41MzEgNi41MzEgMCAwIDEtMi45MTMgMi45MTNjLTEuNDI3Ljc0Mi0zLjMxMi43NDItNy4wMjMuNzQyaC03LjkzOGMtMy43MTEgMC01LjU5NiAwLTcuMDIzLS43NDJhNi41MzEgNi41MzEgMCAwIDEtMi45MTMtMi45MTNDMCAyNC4yMTIgMCAyMi4zODQgMCAxOC42MTZ2LTcuOTM4WiIgZmlsbD0iIzAwNTJGRiIvPjxwYXRoIGQ9Ik0xNC42ODQgMTkuNzczYy0yLjcyNyAwLTQuODY0LTIuMjk1LTQuODY0LTUuMTI2IDAtMi44MzEgMi4yMS01LjEyNyA0Ljg2NC01LjEyNyAyLjQzMiAwIDQuNDIyIDEuODM3IDQuNzkgNC4yODVoNC45MzhjLS40NDItNS4yOC00LjY0My05LjQxMS05LjcyOC05LjQxMS01LjM4IDAtOS44MDIgNC41OS05LjgwMiAxMC4yNTMgMCA1LjY2MiA0LjM0OCAxMC4yNTMgOS44MDIgMTAuMjUzIDUuMTU5IDAgOS4yODYtNC4xMzIgOS43MjgtOS40MTFoLTQuOTM4Yy0uMzY4IDIuNDQ4LTIuMzU4IDQuMjg0LTQuNzkgNC4yODRaIiBmaWxsPSIjZmZmIi8+PC9zdmc+";
            case "coinbase-wallet-app":
            default:
                return "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEuNDkyIDEwLjQxOWE4LjkzIDguOTMgMCAwMTguOTMtOC45M2gxMS4xNjNhOC45MyA4LjkzIDAgMDE4LjkzIDguOTN2MTEuMTYzYTguOTMgOC45MyAwIDAxLTguOTMgOC45M0gxMC40MjJhOC45MyA4LjkzIDAgMDEtOC45My04LjkzVjEwLjQxOXoiIGZpbGw9IiMxNjUyRjAiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjQxOSAwSDIxLjU4QzI3LjMzNSAwIDMyIDQuNjY1IDMyIDEwLjQxOVYyMS41OEMzMiAyNy4zMzUgMjcuMzM1IDMyIDIxLjU4MSAzMkgxMC40MkM0LjY2NSAzMiAwIDI3LjMzNSAwIDIxLjU4MVYxMC40MkMwIDQuNjY1IDQuNjY1IDAgMTAuNDE5IDB6bTAgMS40ODhhOC45MyA4LjkzIDAgMDAtOC45MyA4LjkzdjExLjE2M2E4LjkzIDguOTMgMCAwMDguOTMgOC45M0gyMS41OGE4LjkzIDguOTMgMCAwMDguOTMtOC45M1YxMC40MmE4LjkzIDguOTMgMCAwMC04LjkzLTguOTNIMTAuNDJ6IiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS45OTggMjYuMDQ5Yy01LjU0OSAwLTEwLjA0Ny00LjQ5OC0xMC4wNDctMTAuMDQ3IDAtNS41NDggNC40OTgtMTAuMDQ2IDEwLjA0Ny0xMC4wNDYgNS41NDggMCAxMC4wNDYgNC40OTggMTAuMDQ2IDEwLjA0NiAwIDUuNTQ5LTQuNDk4IDEwLjA0Ny0xMC4wNDYgMTAuMDQ3eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMi43NjIgMTQuMjU0YzAtLjgyMi42NjctMS40ODkgMS40ODktMS40ODloMy40OTdjLjgyMiAwIDEuNDg4LjY2NiAxLjQ4OCAxLjQ4OXYzLjQ5N2MwIC44MjItLjY2NiAxLjQ4OC0xLjQ4OCAxLjQ4OGgtMy40OTdhMS40ODggMS40ODggMCAwMS0xLjQ4OS0xLjQ4OHYtMy40OTh6IiBmaWxsPSIjMTY1MkYwIi8+PC9zdmc+";
        }
    }
    class c {
        constructor(f) {
            this.items = /* @__PURE__ */ new Map(), this.nextItemKey = 0, this.root = null, this.darkMode = f.darkMode;
        }
        attach(f) {
            this.root = document.createElement("div"), this.root.className = "-cbwsdk-snackbar-root", f.appendChild(this.root), this.render();
        }
        presentItem(f) {
            const p = this.nextItemKey++;
            return this.items.set(p, f), this.render(), () => {
                this.items.delete(p), this.render();
            };
        }
        clear() {
            this.items.clear(), this.render();
        }
        render() {
            this.root && (0, n.render)((0, n.h)(
                "div",
                null,
                (0, n.h)(t.SnackbarContainer, {
                    darkMode: this.darkMode
                }, Array.from(this.items.entries()).map(([f, p]) => (0, n.h)(t.SnackbarInstance, Object.assign({}, p, {
                    key: f
                }))))
            ), this.root);
        }
    }
    t.Snackbar = c;
    const u = (b) => (0, n.h)(
        "div", {
            class: (0, r.default)("-cbwsdk-snackbar-container")
        },
        (0, n.h)("style", null, s.default),
        (0, n.h)("div", {
            class: "-cbwsdk-snackbar"
        }, b.children)
    );
    t.SnackbarContainer = u;
    const l = ({
        autoExpand: b,
        message: f,
        menuItems: p,
        appSrc: g
    }) => {
        const [S, I] = (0, i.useState)(!0), [_, m] = (0, i.useState)(b ? ? !1);
        (0, i.useEffect)(() => {
            const A = [
                window.setTimeout(() => {
                    I(!1);
                }, 1),
                window.setTimeout(() => {
                    m(!0);
                }, 1e4)
            ];
            return () => {
                A.forEach(window.clearTimeout);
            };
        });
        const w = () => {
            m(!_);
        };
        return (0, n.h)(
            "div", {
                class: (0, r.default)("-cbwsdk-snackbar-instance", S && "-cbwsdk-snackbar-instance-hidden", _ && "-cbwsdk-snackbar-instance-expanded")
            },
            (0, n.h)(
                "div", {
                    class: "-cbwsdk-snackbar-instance-header",
                    onClick: w
                },
                (0, n.h)("img", {
                    src: a(g),
                    class: "-cbwsdk-snackbar-instance-header-cblogo"
                }),
                (0, n.h)("div", {
                    class: "-cbwsdk-snackbar-instance-header-message"
                }, f),
                (0, n.h)(
                    "div", {
                        class: "-gear-container"
                    }, !_ && (0, n.h)(
                        "svg", {
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        },
                        (0, n.h)("circle", {
                            cx: "12",
                            cy: "12",
                            r: "12",
                            fill: "#F5F7F8"
                        })
                    ),
                    (0, n.h)("img", {
                        src: o,
                        class: "-gear-icon",
                        title: "Expand"
                    })
                )
            ),
            p && p.length > 0 && (0, n.h)("div", {
                class: "-cbwsdk-snackbar-instance-menu"
            }, p.map((A, N) => (0, n.h)(
                "div", {
                    class: (0, r.default)("-cbwsdk-snackbar-instance-menu-item", A.isRed && "-cbwsdk-snackbar-instance-menu-item-is-red"),
                    onClick: A.onClick,
                    key: N
                },
                (0, n.h)(
                    "svg", {
                        width: A.svgWidth,
                        height: A.svgHeight,
                        viewBox: "0 0 10 11",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    },
                    (0, n.h)("path", {
                        "fill-rule": A.defaultFillRule,
                        "clip-rule": A.defaultClipRule,
                        d: A.path,
                        fill: "#AAAAAA"
                    })
                ),
                (0, n.h)("span", {
                    class: (0, r.default)("-cbwsdk-snackbar-instance-menu-item-info", A.isRed && "-cbwsdk-snackbar-instance-menu-item-info-is-red")
                }, A.info)
            )))
        );
    };
    t.SnackbarInstance = l;
})(md);
var hs = {},
    Cc = {};
Object.defineProperty(Cc, "__esModule", {
    value: !0
});
Cc.default = '@namespace svg "http://www.w3.org/2000/svg";.-cbwsdk-css-reset,.-cbwsdk-css-reset *{animation:none;animation-delay:0;animation-direction:normal;animation-duration:0;animation-fill-mode:none;animation-iteration-count:1;animation-name:none;animation-play-state:running;animation-timing-function:ease;backface-visibility:visible;background:0;background-attachment:scroll;background-clip:border-box;background-color:rgba(0,0,0,0);background-image:none;background-origin:padding-box;background-position:0 0;background-position-x:0;background-position-y:0;background-repeat:repeat;background-size:auto auto;border:0;border-style:none;border-width:medium;border-color:inherit;border-bottom:0;border-bottom-color:inherit;border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-style:none;border-bottom-width:medium;border-collapse:separate;border-image:none;border-left:0;border-left-color:inherit;border-left-style:none;border-left-width:medium;border-radius:0;border-right:0;border-right-color:inherit;border-right-style:none;border-right-width:medium;border-spacing:0;border-top:0;border-top-color:inherit;border-top-left-radius:0;border-top-right-radius:0;border-top-style:none;border-top-width:medium;box-shadow:none;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:inherit;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-rule-color:currentColor;column-rule-style:none;column-rule-width:none;column-span:1;column-width:auto;counter-increment:none;counter-reset:none;direction:ltr;empty-cells:show;float:none;font:normal;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;height:auto;hyphens:none;letter-spacing:normal;line-height:normal;list-style:none;list-style-image:none;list-style-position:outside;list-style-type:disc;margin:0;margin-bottom:0;margin-left:0;margin-right:0;margin-top:0;opacity:1;orphans:0;outline:0;outline-color:invert;outline-style:none;outline-width:medium;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;pointer-events:auto;position:static;quotes:"\\201C" "\\201D" "\\2018" "\\2019";tab-size:8;table-layout:auto;text-align:inherit;text-align-last:auto;text-decoration:none;text-decoration-color:inherit;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-shadow:none;text-transform:none;transform:none;transform-style:flat;transition:none;transition-delay:0s;transition-duration:0s;transition-property:none;transition-timing-function:ease;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:0;word-spacing:normal;z-index:auto}.-cbwsdk-css-reset strong{font-weight:bold}.-cbwsdk-css-reset *{box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;line-height:1}.-cbwsdk-css-reset [class*=container]{margin:0;padding:0}.-cbwsdk-css-reset style{display:none}';
var c4 = re && re.__importDefault || function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
};
Object.defineProperty(hs, "__esModule", {
    value: !0
});
hs.injectCssReset = void 0;
const u4 = c4(Cc);

function l4() {
    const t = document.createElement("style");
    t.type = "text/css", t.appendChild(document.createTextNode(u4.default)), document.documentElement.appendChild(t);
}
hs.injectCssReset = l4;
Object.defineProperty(Ki, "__esModule", {
    value: !0
});
Ki.WalletSDKUI = void 0;
const f4 = Xi,
    h4 = md,
    d4 = hs;
class p4 {
    constructor(e) {
        this.standalone = null, this.attached = !1, this.appSrc = null, this.snackbar = new h4.Snackbar({
            darkMode: e.darkMode
        }), this.linkFlow = new f4.LinkFlow({
            darkMode: e.darkMode,
            version: e.version,
            sessionId: e.session.id,
            sessionSecret: e.session.secret,
            linkAPIUrl: e.linkAPIUrl,
            connected$: e.connected$,
            chainId$: e.chainId$,
            isParentConnection: !1
        });
    }
    attach() {
        if (this.attached)
            throw new Error("Coinbase Wallet SDK UI is already attached");
        const e = document.documentElement,
            r = document.createElement("div");
        r.className = "-cbwsdk-css-reset", e.appendChild(r), this.linkFlow.attach(r), this.snackbar.attach(r), this.attached = !0, (0, d4.injectCssReset)();
    }
    setConnectDisabled(e) {
        this.linkFlow.setConnectDisabled(e);
    }
    /* istanbul ignore next */
    addEthereumChain(e) {}
    /* istanbul ignore next */
    watchAsset(e) {}
    /* istanbul ignore next */
    switchEthereumChain(e) {}
    requestEthereumAccounts(e) {
        this.linkFlow.open({
            onCancel: e.onCancel
        });
    }
    hideRequestEthereumAccounts() {
        this.linkFlow.close();
    }
    /* istanbul ignore next */
    signEthereumMessage(e) {}
    /* istanbul ignore next */
    signEthereumTransaction(e) {}
    /* istanbul ignore next */
    submitEthereumTransaction(e) {}
    /* istanbul ignore next */
    ethereumAddressFromSignedMessage(e) {}
    showConnecting(e) {
        let r;
        return e.isUnlinkedErrorState ? r = {
            autoExpand: !0,
            message: "Connection lost",
            appSrc: this.appSrc,
            menuItems: [{
                isRed: !1,
                info: "Reset connection",
                svgWidth: "10",
                svgHeight: "11",
                path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
                defaultFillRule: "evenodd",
                defaultClipRule: "evenodd",
                onClick: e.onResetConnection
            }]
        } : r = {
            message: "Confirm on phone",
            appSrc: this.appSrc,
            menuItems: [{
                    isRed: !0,
                    info: "Cancel transaction",
                    svgWidth: "11",
                    svgHeight: "11",
                    path: "M10.3711 1.52346L9.21775 0.370117L5.37109 4.21022L1.52444 0.370117L0.371094 1.52346L4.2112 5.37012L0.371094 9.21677L1.52444 10.3701L5.37109 6.53001L9.21775 10.3701L10.3711 9.21677L6.53099 5.37012L10.3711 1.52346Z",
                    defaultFillRule: "inherit",
                    defaultClipRule: "inherit",
                    onClick: e.onCancel
                },
                {
                    isRed: !1,
                    info: "Reset connection",
                    svgWidth: "10",
                    svgHeight: "11",
                    path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
                    defaultFillRule: "evenodd",
                    defaultClipRule: "evenodd",
                    onClick: e.onResetConnection
                }
            ]
        }, this.snackbar.presentItem(r);
    }
    /* istanbul ignore next */
    setAppSrc(e) {
        this.appSrc = e;
    }
    /* istanbul ignore next */
    reloadUI() {
        document.location.reload();
    }
    /* istanbul ignore next */
    inlineAccountsResponse() {
        return !1;
    }
    /* istanbul ignore next */
    inlineAddEthereumChain(e) {
        return !1;
    }
    /* istanbul ignore next */
    inlineWatchAsset() {
        return !1;
    }
    /* istanbul ignore next */
    inlineSwitchEthereumChain() {
        return !1;
    }
    /* istanbul ignore next */
    setStandalone(e) {
        this.standalone = e;
    }
    /* istanbul ignore next */
    isStandalone() {
        var e;
        return (e = this.standalone) !== null && e !== void 0 ? e : !1;
    }
}
Ki.WalletSDKUI = p4;
var ds = {},
    ps = {};
Object.defineProperty(ps, "__esModule", {
    value: !0
});
var br;
(function(t) {
    t.typeOfFunction = "function", t.boolTrue = !0;
})(br || (br = {}));

function yd(t, e, r) {
    if (!r || typeof r.value !== br.typeOfFunction)
        throw new TypeError("Only methods can be decorated with @bind. <" + e + "> is not a method!");
    return {
        configurable: br.boolTrue,
        get: function() {
            var n = r.value.bind(this);
            return Object.defineProperty(this, e, {
                value: n,
                configurable: br.boolTrue,
                writable: br.boolTrue
            }), n;
        }
    };
}
ps.bind = yd;
ps.default = yd;
var _s = {},
    qe = {};
Object.defineProperty(qe, "__esModule", {
    value: !0
});
qe.ClientMessagePublishEvent = qe.ClientMessageSetSessionConfig = qe.ClientMessageGetSessionConfig = qe.ClientMessageIsLinked = qe.ClientMessageHostSession = void 0;

function _4(t) {
    return Object.assign({
        type: "HostSession"
    }, t);
}
qe.ClientMessageHostSession = _4;

function b4(t) {
    return Object.assign({
        type: "IsLinked"
    }, t);
}
qe.ClientMessageIsLinked = b4;

function g4(t) {
    return Object.assign({
        type: "GetSessionConfig"
    }, t);
}
qe.ClientMessageGetSessionConfig = g4;

function m4(t) {
    return Object.assign({
        type: "SetSessionConfig"
    }, t);
}
qe.ClientMessageSetSessionConfig = m4;

function y4(t) {
    return Object.assign({
        type: "PublishEvent"
    }, t);
}
qe.ClientMessagePublishEvent = y4;
var vd = {};
(function(t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.RxWebSocket = t.ConnectionState = void 0;
    const e = Wr,
        r = Oi;
    var n;
    (function(s) {
        s[s.DISCONNECTED = 0] = "DISCONNECTED", s[s.CONNECTING = 1] = "CONNECTING", s[s.CONNECTED = 2] = "CONNECTED";
    })(n = t.ConnectionState || (t.ConnectionState = {}));
    class i {
        /**
         * Constructor
         * @param url WebSocket server URL
         * @param [WebSocketClass] Custom WebSocket implementation
         */
        constructor(o, a = WebSocket) {
            this.WebSocketClass = a, this.webSocket = null, this.connectionStateSubject = new e.BehaviorSubject(n.DISCONNECTED), this.incomingDataSubject = new e.Subject(), this.url = o.replace(/^http/, "ws");
        }
        /**
         * Make a websocket connection
         * @returns an Observable that completes when connected
         */
        connect() {
            return this.webSocket ? (0, e.throwError)(new Error("webSocket object is not null")) : new e.Observable((o) => {
                let a;
                try {
                    this.webSocket = a = new this.WebSocketClass(this.url);
                } catch (c) {
                    o.error(c);
                    return;
                }
                this.connectionStateSubject.next(n.CONNECTING), a.onclose = (c) => {
                    this.clearWebSocket(), o.error(new Error(`websocket error ${c.code}: ${c.reason}`)), this.connectionStateSubject.next(n.DISCONNECTED);
                }, a.onopen = (c) => {
                    o.next(), o.complete(), this.connectionStateSubject.next(n.CONNECTED);
                }, a.onmessage = (c) => {
                    this.incomingDataSubject.next(c.data);
                };
            }).pipe((0, r.take)(1));
        }
        /**
         * Disconnect from server
         */
        disconnect() {
            const {
                webSocket: o
            } = this;
            if (o) {
                this.clearWebSocket(), this.connectionStateSubject.next(n.DISCONNECTED);
                try {
                    o.close();
                } catch {}
            }
        }
        /**
         * Emit current connection state and subsequent changes
         * @returns an Observable for the connection state
         */
        get connectionState$() {
            return this.connectionStateSubject.asObservable();
        }
        /**
         * Emit incoming data from server
         * @returns an Observable for the data received
         */
        get incomingData$() {
            return this.incomingDataSubject.asObservable();
        }
        /**
         * Emit incoming JSON data from server. non-JSON data are ignored
         * @returns an Observable for parsed JSON data
         */
        get incomingJSONData$() {
            return this.incomingData$.pipe((0, r.flatMap)((o) => {
                let a;
                try {
                    a = JSON.parse(o);
                } catch {
                    return (0, e.empty)();
                }
                return (0, e.of)(a);
            }));
        }
        /**
         * Send data to server
         * @param data text to send
         */
        sendData(o) {
            const {
                webSocket: a
            } = this;
            if (!a)
                throw new Error("websocket is not connected");
            a.send(o);
        }
        clearWebSocket() {
            const {
                webSocket: o
            } = this;
            o && (this.webSocket = null, o.onclose = null, o.onerror = null, o.onmessage = null, o.onopen = null);
        }
    }
    t.RxWebSocket = i;
})(vd);
var bs = {};
Object.defineProperty(bs, "__esModule", {
    value: !0
});
bs.isServerMessageFail = void 0;

function v4(t) {
    return t && t.type === "Fail" && typeof t.id == "number" && typeof t.sessionId == "string" && typeof t.error == "string";
}
bs.isServerMessageFail = v4;
Object.defineProperty(_s, "__esModule", {
    value: !0
});
_s.WalletSDKConnection = void 0;
const tt = Wr,
    X = Oi,
    Kr = Br,
    fr = Mn,
    Xr = qe,
    en = jr,
    Yn = vd,
    aa = bs,
    yl = 1e4,
    w4 = 6e4;
class E4 {
    /**
     * Constructor
     * @param sessionId Session ID
     * @param sessionKey Session Key
     * @param linkAPIUrl Coinbase Wallet link server URL
     * @param [WebSocketClass] Custom WebSocket implementation
     */
    constructor(e, r, n, i, s = WebSocket) {
        this.sessionId = e, this.sessionKey = r, this.diagnostic = i, this.subscriptions = new tt.Subscription(), this.destroyed = !1, this.lastHeartbeatResponse = 0, this.nextReqId = (0, fr.IntNumber)(1), this.connectedSubject = new tt.BehaviorSubject(!1), this.linkedSubject = new tt.BehaviorSubject(!1), this.sessionConfigSubject = new tt.ReplaySubject(1);
        const o = new Yn.RxWebSocket(n + "/rpc", s);
        this.ws = o, this.subscriptions.add(o.connectionState$.pipe(
            (0, X.tap)((a) => {
                var c;
                return (c = this.diagnostic) === null || c === void 0 ? void 0 : c.log(en.EVENTS.CONNECTED_STATE_CHANGE, {
                    state: a,
                    sessionIdHash: Kr.Session.hash(e)
                });
            }),
            // ignore initial DISCONNECTED state
            (0, X.skip)(1),
            // if DISCONNECTED and not destroyed
            (0, X.filter)((a) => a === Yn.ConnectionState.DISCONNECTED && !this.destroyed),
            // wait 5 seconds
            (0, X.delay)(5e3),
            // check whether it's destroyed again
            (0, X.filter)((a) => !this.destroyed),
            // reconnect
            (0, X.flatMap)((a) => o.connect()),
            (0, X.retry)()
        ).subscribe()), this.subscriptions.add(o.connectionState$.pipe(
            // ignore initial DISCONNECTED and CONNECTING states
            (0, X.skip)(2),
            (0, X.switchMap)((a) => (0, tt.iif)(
                () => a === Yn.ConnectionState.CONNECTED,
                // if CONNECTED, authenticate, and then check link status
                this.authenticate().pipe((0, X.tap)((c) => this.sendIsLinked()), (0, X.tap)((c) => this.sendGetSessionConfig()), (0, X.map)((c) => !0)),
                // if not CONNECTED, emit false immediately
                (0, tt.of)(!1)
            )),
            (0, X.distinctUntilChanged)(),
            (0, X.catchError)((a) => (0, tt.of)(!1))
        ).subscribe((a) => this.connectedSubject.next(a))), this.subscriptions.add(o.connectionState$.pipe(
            // ignore initial DISCONNECTED state
            (0, X.skip)(1),
            (0, X.switchMap)((a) => (0, tt.iif)(
                () => a === Yn.ConnectionState.CONNECTED,
                // if CONNECTED, start the heartbeat timer
                (0, tt.timer)(0, yl)
            ))
        ).subscribe((a) => (
            // first timer event updates lastHeartbeat timestamp
            // subsequent calls send heartbeat message
            a === 0 ? this.updateLastHeartbeat() : this.heartbeat()
        ))), this.subscriptions.add(o.incomingData$.pipe((0, X.filter)((a) => a === "h")).subscribe((a) => this.updateLastHeartbeat())), this.subscriptions.add(o.incomingJSONData$.pipe((0, X.filter)((a) => ["IsLinkedOK", "Linked"].includes(a.type))).subscribe((a) => {
            var c;
            const u = a;
            (c = this.diagnostic) === null || c === void 0 || c.log(en.EVENTS.LINKED, {
                sessionIdHash: Kr.Session.hash(e),
                linked: u.linked,
                type: a.type,
                onlineGuests: u.onlineGuests
            }), this.linkedSubject.next(u.linked || u.onlineGuests > 0);
        })), this.subscriptions.add(o.incomingJSONData$.pipe((0, X.filter)((a) => ["GetSessionConfigOK", "SessionConfigUpdated"].includes(a.type))).subscribe((a) => {
            var c;
            const u = a;
            (c = this.diagnostic) === null || c === void 0 || c.log(en.EVENTS.SESSION_CONFIG_RECEIVED, {
                sessionIdHash: Kr.Session.hash(e),
                metadata_keys: u && u.metadata ? Object.keys(u.metadata) : void 0
            }), this.sessionConfigSubject.next({
                webhookId: u.webhookId,
                webhookUrl: u.webhookUrl,
                metadata: u.metadata
            });
        }));
    }
    /**
     * Make a connection to the server
     */
    connect() {
        var e;
        if (this.destroyed)
            throw new Error("instance is destroyed");
        (e = this.diagnostic) === null || e === void 0 || e.log(en.EVENTS.STARTED_CONNECTING, {
            sessionIdHash: Kr.Session.hash(this.sessionId)
        }), this.ws.connect().subscribe();
    }
    /**
     * Terminate connection, and mark as destroyed. To reconnect, create a new
     * instance of WalletSDKConnection
     */
    destroy() {
        var e;
        this.subscriptions.unsubscribe(), this.ws.disconnect(), (e = this.diagnostic) === null || e === void 0 || e.log(en.EVENTS.DISCONNECTED, {
            sessionIdHash: Kr.Session.hash(this.sessionId)
        }), this.destroyed = !0;
    }
    get isDestroyed() {
        return this.destroyed;
    }
    /**
     * Emit true if connected and authenticated, else false
     * @returns an Observable
     */
    get connected$() {
        return this.connectedSubject.asObservable();
    }
    /**
     * Emit once connected
     * @returns an Observable
     */
    get onceConnected$() {
        return this.connected$.pipe((0, X.filter)((e) => e), (0, X.take)(1), (0, X.map)(() => {}));
    }
    /**
     * Emit true if linked (a guest has joined before)
     * @returns an Observable
     */
    get linked$() {
        return this.linkedSubject.asObservable();
    }
    /**
     * Emit once when linked
     * @returns an Observable
     */
    get onceLinked$() {
        return this.linked$.pipe((0, X.filter)((e) => e), (0, X.take)(1), (0, X.map)(() => {}));
    }
    /**
     * Emit current session config if available, and subsequent updates
     * @returns an Observable for the session config
     */
    get sessionConfig$() {
        return this.sessionConfigSubject.asObservable();
    }
    /**
     * Emit incoming Event messages
     * @returns an Observable for the messages
     */
    get incomingEvent$() {
        return this.ws.incomingJSONData$.pipe((0, X.filter)((e) => {
            if (e.type !== "Event")
                return !1;
            const r = e;
            return typeof r.sessionId == "string" && typeof r.eventId == "string" && typeof r.event == "string" && typeof r.data == "string";
        }), (0, X.map)((e) => e));
    }
    /**
     * Set session metadata in SessionConfig object
     * @param key
     * @param value
     * @returns an Observable that completes when successful
     */
    setSessionMetadata(e, r) {
        const n = (0, Xr.ClientMessageSetSessionConfig)({
            id: (0, fr.IntNumber)(this.nextReqId++),
            sessionId: this.sessionId,
            metadata: {
                [e]: r
            }
        });
        return this.onceConnected$.pipe((0, X.flatMap)((i) => this.makeRequest(n)), (0, X.map)((i) => {
            if ((0, aa.isServerMessageFail)(i))
                throw new Error(i.error || "failed to set session metadata");
        }));
    }
    /**
     * Publish an event and emit event ID when successful
     * @param event event name
     * @param data event data
     * @param callWebhook whether the webhook should be invoked
     * @returns an Observable that emits event ID when successful
     */
    publishEvent(e, r, n = !1) {
        const i = (0, Xr.ClientMessagePublishEvent)({
            id: (0, fr.IntNumber)(this.nextReqId++),
            sessionId: this.sessionId,
            event: e,
            data: r,
            callWebhook: n
        });
        return this.onceLinked$.pipe((0, X.flatMap)((s) => this.makeRequest(i)), (0, X.map)((s) => {
            if ((0, aa.isServerMessageFail)(s))
                throw new Error(s.error || "failed to publish event");
            return s.eventId;
        }));
    }
    sendData(e) {
        this.ws.sendData(JSON.stringify(e));
    }
    updateLastHeartbeat() {
        this.lastHeartbeatResponse = Date.now();
    }
    heartbeat() {
        if (Date.now() - this.lastHeartbeatResponse > yl * 2) {
            this.ws.disconnect();
            return;
        }
        try {
            this.ws.sendData("h");
        } catch {}
    }
    makeRequest(e, r = w4) {
        const n = e.id;
        try {
            this.sendData(e);
        } catch (i) {
            return (0, tt.throwError)(i);
        }
        return this.ws.incomingJSONData$.pipe((0, X.timeoutWith)(r, (0, tt.throwError)(new Error(`request ${n} timed out`))), (0, X.filter)((i) => i.id === n), (0, X.take)(1));
    }
    authenticate() {
        const e = (0, Xr.ClientMessageHostSession)({
            id: (0, fr.IntNumber)(this.nextReqId++),
            sessionId: this.sessionId,
            sessionKey: this.sessionKey
        });
        return this.makeRequest(e).pipe((0, X.map)((r) => {
            if ((0, aa.isServerMessageFail)(r))
                throw new Error(r.error || "failed to authentcate");
        }));
    }
    sendIsLinked() {
        const e = (0, Xr.ClientMessageIsLinked)({
            id: (0, fr.IntNumber)(this.nextReqId++),
            sessionId: this.sessionId
        });
        this.sendData(e);
    }
    sendGetSessionConfig() {
        const e = (0, Xr.ClientMessageGetSessionConfig)({
            id: (0, fr.IntNumber)(this.nextReqId++),
            sessionId: this.sessionId
        });
        this.sendData(e);
    }
}
_s.WalletSDKConnection = E4;
var gs = {};
Object.defineProperty(gs, "__esModule", {
    value: !0
});
gs.WalletUIError = void 0;
class yn extends Error {
    constructor(e, r) {
        super(e), this.message = e, this.errorCode = r;
    }
}
gs.WalletUIError = yn;
yn.UserRejectedRequest = new yn("User rejected request");
yn.SwitchEthereumChainUnsupportedChainId = new yn("Unsupported chainId", 4902);
var Nr = {};
Object.defineProperty(Nr, "__esModule", {
    value: !0
});
Nr.decrypt = Nr.encrypt = void 0;
const S4 = Wr,
    wi = B;
async function k4(t, e) {
    if (e.length !== 64)
        throw Error("secret must be 256 bits");
    const r = crypto.getRandomValues(new Uint8Array(12)),
        n = await crypto.subtle.importKey("raw", (0, wi.hexStringToUint8Array)(e), {
            name: "aes-gcm"
        }, !1, ["encrypt", "decrypt"]),
        i = new TextEncoder(),
        s = await window.crypto.subtle.encrypt({
            name: "AES-GCM",
            iv: r
        }, n, i.encode(t)),
        o = 16,
        a = s.slice(s.byteLength - o),
        c = s.slice(0, s.byteLength - o),
        u = new Uint8Array(a),
        l = new Uint8Array(c),
        b = new Uint8Array([
            ...r,
            ...u,
            ...l
        ]);
    return (0, wi.uint8ArrayToHex)(b);
}
Nr.encrypt = k4;

function R4(t, e) {
    if (e.length !== 64)
        throw Error("secret must be 256 bits");
    return new S4.Observable((r) => {
        (async function() {
            const n = await crypto.subtle.importKey("raw", (0, wi.hexStringToUint8Array)(e), {
                    name: "aes-gcm"
                }, !1, ["encrypt", "decrypt"]),
                i = (0, wi.hexStringToUint8Array)(t),
                s = i.slice(0, 12),
                o = i.slice(12, 28),
                a = i.slice(28),
                c = new Uint8Array([
                    ...a,
                    ...o
                ]),
                u = {
                    name: "AES-GCM",
                    iv: new Uint8Array(s)
                };
            try {
                const l = await window.crypto.subtle.decrypt(u, n, c),
                    b = new TextDecoder();
                r.next(b.decode(l)), r.complete();
            } catch (l) {
                r.error(l);
            }
        })();
    });
}
Nr.decrypt = R4;
var Mc = {};
(function(t) {
    Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Web3Method = void 0,
        function(e) {
            e.requestEthereumAccounts = "requestEthereumAccounts", e.signEthereumMessage = "signEthereumMessage", e.signEthereumTransaction = "signEthereumTransaction", e.submitEthereumTransaction = "submitEthereumTransaction", e.ethereumAddressFromSignedMessage = "ethereumAddressFromSignedMessage", e.scanQRCode = "scanQRCode", e.generic = "generic", e.childRequestEthereumAccounts = "childRequestEthereumAccounts", e.addEthereumChain = "addEthereumChain", e.switchEthereumChain = "switchEthereumChain", e.makeEthereumJSONRPCRequest = "makeEthereumJSONRPCRequest", e.watchAsset = "watchAsset", e.selectProvider = "selectProvider";
        }(t.Web3Method || (t.Web3Method = {}));
})(Mc);
var ms = {},
    ys = {};
(function(t) {
    Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.RelayMessageType = void 0,
        function(e) {
            e.SESSION_ID_REQUEST = "SESSION_ID_REQUEST", e.SESSION_ID_RESPONSE = "SESSION_ID_RESPONSE", e.LINKED = "LINKED", e.UNLINKED = "UNLINKED", e.WEB3_REQUEST = "WEB3_REQUEST", e.WEB3_REQUEST_CANCELED = "WEB3_REQUEST_CANCELED", e.WEB3_RESPONSE = "WEB3_RESPONSE";
        }(t.RelayMessageType || (t.RelayMessageType = {}));
})(ys);
Object.defineProperty(ms, "__esModule", {
    value: !0
});
ms.Web3RequestCanceledMessage = void 0;
const I4 = ys;

function A4(t) {
    return {
        type: I4.RelayMessageType.WEB3_REQUEST_CANCELED,
        id: t
    };
}
ms.Web3RequestCanceledMessage = A4;
var vs = {};
Object.defineProperty(vs, "__esModule", {
    value: !0
});
vs.Web3RequestMessage = void 0;
const T4 = ys;

function C4(t) {
    return Object.assign({
        type: T4.RelayMessageType.WEB3_REQUEST
    }, t);
}
vs.Web3RequestMessage = C4;
var fe = {};
Object.defineProperty(fe, "__esModule", {
    value: !0
});
fe.EthereumAddressFromSignedMessageResponse = fe.SubmitEthereumTransactionResponse = fe.SignEthereumTransactionResponse = fe.SignEthereumMessageResponse = fe.isRequestEthereumAccountsResponse = fe.SelectProviderResponse = fe.WatchAssetReponse = fe.RequestEthereumAccountsResponse = fe.SwitchEthereumChainResponse = fe.AddEthereumChainResponse = fe.ErrorResponse = void 0;
const _t = Mc;

function M4(t, e, r) {
    return {
        method: t,
        errorMessage: e,
        errorCode: r
    };
}
fe.ErrorResponse = M4;

function x4(t) {
    return {
        method: _t.Web3Method.addEthereumChain,
        result: t
    };
}
fe.AddEthereumChainResponse = x4;

function O4(t) {
    return {
        method: _t.Web3Method.switchEthereumChain,
        result: t
    };
}
fe.SwitchEthereumChainResponse = O4;

function N4(t) {
    return {
        method: _t.Web3Method.requestEthereumAccounts,
        result: t
    };
}
fe.RequestEthereumAccountsResponse = N4;

function D4(t) {
    return {
        method: _t.Web3Method.watchAsset,
        result: t
    };
}
fe.WatchAssetReponse = D4;

function L4(t) {
    return {
        method: _t.Web3Method.selectProvider,
        result: t
    };
}
fe.SelectProviderResponse = L4;

function P4(t) {
    return t && t.method === _t.Web3Method.requestEthereumAccounts;
}
fe.isRequestEthereumAccountsResponse = P4;

function j4(t) {
    return {
        method: _t.Web3Method.signEthereumMessage,
        result: t
    };
}
fe.SignEthereumMessageResponse = j4;

function B4(t) {
    return {
        method: _t.Web3Method.signEthereumTransaction,
        result: t
    };
}
fe.SignEthereumTransactionResponse = B4;

function U4(t) {
    return {
        method: _t.Web3Method.submitEthereumTransaction,
        result: t
    };
}
fe.SubmitEthereumTransactionResponse = U4;

function F4(t) {
    return {
        method: _t.Web3Method.ethereumAddressFromSignedMessage,
        result: t
    };
}
fe.EthereumAddressFromSignedMessageResponse = F4;
var Dr = {};
Object.defineProperty(Dr, "__esModule", {
    value: !0
});
Dr.isWeb3ResponseMessage = Dr.Web3ResponseMessage = void 0;
const wd = ys;

function H4(t) {
    return Object.assign({
        type: wd.RelayMessageType.WEB3_RESPONSE
    }, t);
}
Dr.Web3ResponseMessage = H4;

function W4(t) {
    return t && t.type === wd.RelayMessageType.WEB3_RESPONSE;
}
Dr.isWeb3ResponseMessage = W4;
var G4 = re && re.__createBinding || (Object.create ? function(t, e, r, n) {
        n === void 0 && (n = r), Object.defineProperty(t, n, {
            enumerable: !0,
            get: function() {
                return e[r];
            }
        });
    } : function(t, e, r, n) {
        n === void 0 && (n = r), t[n] = e[r];
    }),
    $4 = re && re.__setModuleDefault || (Object.create ? function(t, e) {
        Object.defineProperty(t, "default", {
            enumerable: !0,
            value: e
        });
    } : function(t, e) {
        t.default = e;
    }),
    Ed = re && re.__decorate || function(t, e, r, n) {
        var i = arguments.length,
            s = i < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n,
            o;
        if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
            s = Reflect.decorate(t, e, r, n);
        else
            for (var a = t.length - 1; a >= 0; a--)
                (o = t[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(e, r, s) : o(e, r)) || s);
        return i > 3 && s && Object.defineProperty(e, r, s), s;
    },
    V4 = re && re.__importStar || function(t) {
        if (t && t.__esModule)
            return t;
        var e = {};
        if (t != null)
            for (var r in t)
                r !== "default" && Object.prototype.hasOwnProperty.call(t, r) && G4(e, t, r);
        return $4(e, t), e;
    },
    z4 = re && re.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    };
Object.defineProperty(ds, "__esModule", {
    value: !0
});
ds.WalletSDKRelay = void 0;
const Sd = z4(ps),
    vl = Ai,
    tn = Wr,
    ve = Oi,
    Ne = jr,
    Z4 = _s,
    ca = gs,
    q4 = Mn,
    le = B,
    It = V4(Nr),
    At = Br,
    Jn = it,
    Se = Mc,
    Y4 = ms,
    J4 = vs,
    Fe = fe,
    Le = Dr;
class nt extends Jn.WalletSDKRelayAbstract {
    constructor(e) {
        var r;
        super(), this.accountsCallback = null, this.chainCallback = null, this.dappDefaultChainSubject = new tn.BehaviorSubject(1), this.dappDefaultChain = 1, this.appName = "", this.appLogoUrl = null, this.subscriptions = new tn.Subscription(), this.linkAPIUrl = e.linkAPIUrl, this.storage = e.storage, this.options = e;
        const {
            session: n,
            ui: i,
            connection: s
        } = this.subscribe();
        if (this._session = n, this.connection = s, this.relayEventManager = e.relayEventManager, e.diagnosticLogger && e.eventListener)
            throw new Error("Can't have both eventListener and diagnosticLogger options, use only diagnosticLogger");
        e.eventListener ? this.diagnostic = {
            // eslint-disable-next-line @typescript-eslint/unbound-method
            log: e.eventListener.onEvent
        } : this.diagnostic = e.diagnosticLogger, this._reloadOnDisconnect = (r = e.reloadOnDisconnect) !== null && r !== void 0 ? r : !0, this.ui = i;
    }
    subscribe() {
        this.subscriptions.add(this.dappDefaultChainSubject.subscribe((i) => {
            this.dappDefaultChain !== i && (this.dappDefaultChain = i);
        }));
        const e = At.Session.load(this.storage) || new At.Session(this.storage).save(),
            r = new Z4.WalletSDKConnection(e.id, e.key, this.linkAPIUrl, this.diagnostic);
        this.subscriptions.add(r.sessionConfig$.subscribe({
            next: (i) => {
                this.onSessionConfigChanged(i);
            },
            error: () => {
                var i;
                (i = this.diagnostic) === null || i === void 0 || i.log(Ne.EVENTS.GENERAL_ERROR, {
                    message: "error while invoking session config callback"
                });
            }
        })), this.subscriptions.add(r.incomingEvent$.pipe((0, ve.filter)((i) => i.event === "Web3Response")).subscribe({
            next: this.handleIncomingEvent
        })), this.subscriptions.add(r.linked$.pipe((0, ve.skip)(1), (0, ve.tap)((i) => {
            var s;
            this.isLinked = i;
            const o = this.storage.getItem(Jn.LOCAL_STORAGE_ADDRESSES_KEY);
            if (i && (this.session.linked = i), this.isUnlinkedErrorState = !1, o) {
                const a = o.split(" "),
                    c = this.storage.getItem("IsStandaloneSigning") === "true";
                if (a[0] !== "" && !i && this.session.linked && !c) {
                    this.isUnlinkedErrorState = !0;
                    const u = this.getSessionIdHash();
                    (s = this.diagnostic) === null || s === void 0 || s.log(Ne.EVENTS.UNLINKED_ERROR_STATE, {
                        sessionIdHash: u
                    });
                }
            }
        })).subscribe()), this.subscriptions.add(r.sessionConfig$.pipe((0, ve.filter)((i) => !!i.metadata && i.metadata.__destroyed === "1")).subscribe(() => {
            var i;
            const s = r.isDestroyed;
            return (i = this.diagnostic) === null || i === void 0 || i.log(Ne.EVENTS.METADATA_DESTROYED, {
                alreadyDestroyed: s,
                sessionIdHash: this.getSessionIdHash()
            }), this.resetAndReload();
        })), this.subscriptions.add(r.sessionConfig$.pipe((0, ve.filter)((i) => i.metadata && i.metadata.WalletUsername !== void 0)).pipe((0, ve.mergeMap)((i) => It.decrypt(i.metadata.WalletUsername, e.secret))).subscribe({
            next: (i) => {
                this.storage.setItem(Jn.WALLET_USER_NAME_KEY, i);
            },
            error: () => {
                var i;
                (i = this.diagnostic) === null || i === void 0 || i.log(Ne.EVENTS.GENERAL_ERROR, {
                    message: "Had error decrypting",
                    value: "username"
                });
            }
        })), this.subscriptions.add(r.sessionConfig$.pipe((0, ve.filter)((i) => i.metadata && i.metadata.AppVersion !== void 0)).pipe((0, ve.mergeMap)((i) => It.decrypt(i.metadata.AppVersion, e.secret))).subscribe({
            next: (i) => {
                this.storage.setItem(Jn.APP_VERSION_KEY, i);
            },
            error: () => {
                var i;
                (i = this.diagnostic) === null || i === void 0 || i.log(Ne.EVENTS.GENERAL_ERROR, {
                    message: "Had error decrypting",
                    value: "appversion"
                });
            }
        })), this.subscriptions.add(r.sessionConfig$.pipe((0, ve.filter)((i) => i.metadata && i.metadata.ChainId !== void 0 && i.metadata.JsonRpcUrl !== void 0)).pipe((0, ve.mergeMap)((i) => (0, tn.zip)(It.decrypt(i.metadata.ChainId, e.secret), It.decrypt(i.metadata.JsonRpcUrl, e.secret)))).pipe((0, ve.distinctUntilChanged)()).subscribe({
            next: ([i, s]) => {
                this.chainCallback && this.chainCallback(i, s);
            },
            error: () => {
                var i;
                (i = this.diagnostic) === null || i === void 0 || i.log(Ne.EVENTS.GENERAL_ERROR, {
                    message: "Had error decrypting",
                    value: "chainId|jsonRpcUrl"
                });
            }
        })), this.subscriptions.add(r.sessionConfig$.pipe((0, ve.filter)((i) => i.metadata && i.metadata.EthereumAddress !== void 0)).pipe((0, ve.mergeMap)((i) => It.decrypt(i.metadata.EthereumAddress, e.secret))).subscribe({
            next: (i) => {
                this.accountsCallback && this.accountsCallback([i]), nt.accountRequestCallbackIds.size > 0 && (Array.from(nt.accountRequestCallbackIds.values()).forEach((s) => {
                    const o = (0, Le.Web3ResponseMessage)({
                        id: s,
                        response: (0, Fe.RequestEthereumAccountsResponse)([
                            i
                        ])
                    });
                    this.invokeCallback(Object.assign(Object.assign({}, o), {
                        id: s
                    }));
                }), nt.accountRequestCallbackIds.clear());
            },
            error: () => {
                var i;
                (i = this.diagnostic) === null || i === void 0 || i.log(Ne.EVENTS.GENERAL_ERROR, {
                    message: "Had error decrypting",
                    value: "selectedAddress"
                });
            }
        })), this.subscriptions.add(r.sessionConfig$.pipe((0, ve.filter)((i) => i.metadata && i.metadata.AppSrc !== void 0)).pipe((0, ve.mergeMap)((i) => It.decrypt(i.metadata.AppSrc, e.secret))).subscribe({
            next: (i) => {
                this.ui.setAppSrc(i);
            },
            error: () => {
                var i;
                (i = this.diagnostic) === null || i === void 0 || i.log(Ne.EVENTS.GENERAL_ERROR, {
                    message: "Had error decrypting",
                    value: "appSrc"
                });
            }
        }));
        const n = this.options.uiConstructor({
            linkAPIUrl: this.options.linkAPIUrl,
            version: this.options.version,
            darkMode: this.options.darkMode,
            session: e,
            connected$: r.connected$,
            chainId$: this.dappDefaultChainSubject
        });
        return r.connect(), {
            session: e,
            ui: n,
            connection: r
        };
    }
    attachUI() {
        this.ui.attach();
    }
    resetAndReload() {
        this.connection.setSessionMetadata("__destroyed", "1").pipe((0, ve.timeout)(1e3), (0, ve.catchError)((e) => (0, tn.of)(null))).subscribe((e) => {
            var r, n, i;
            const s = this.ui.isStandalone();
            try {
                this.subscriptions.unsubscribe();
            } catch {
                (r = this.diagnostic) === null || r === void 0 || r.log(Ne.EVENTS.GENERAL_ERROR, {
                    message: "Had error unsubscribing"
                });
            }
            (n = this.diagnostic) === null || n === void 0 || n.log(Ne.EVENTS.SESSION_STATE_CHANGE, {
                method: "relay::resetAndReload",
                sessionMetadataChange: "__destroyed, 1",
                sessionIdHash: this.getSessionIdHash()
            }), this.connection.destroy();
            const o = At.Session.load(this.storage);
            if ((o == null ? void 0 : o.id) === this._session.id ? this.storage.clear() : o && ((i = this.diagnostic) === null || i === void 0 || i.log(Ne.EVENTS.SKIPPED_CLEARING_SESSION, {
                    sessionIdHash: this.getSessionIdHash(),
                    storedSessionIdHash: At.Session.hash(o.id)
                })), this._reloadOnDisconnect) {
                this.ui.reloadUI();
                return;
            }
            this.accountsCallback && this.accountsCallback([], !0);
            const {
                session: a,
                ui: c,
                connection: u
            } = this.subscribe();
            this._session = a, this.connection = u, this.ui = c, s && this.ui.setStandalone && this.ui.setStandalone(!0), this.attachUI();
        }, (e) => {
            var r;
            (r = this.diagnostic) === null || r === void 0 || r.log(Ne.EVENTS.FAILURE, {
                method: "relay::resetAndReload",
                message: `failed to reset and reload with ${e}`,
                sessionIdHash: this.getSessionIdHash()
            });
        });
    }
    setAppInfo(e, r) {
        this.appName = e, this.appLogoUrl = r;
    }
    getStorageItem(e) {
        return this.storage.getItem(e);
    }
    get session() {
        return this._session;
    }
    setStorageItem(e, r) {
        this.storage.setItem(e, r);
    }
    signEthereumMessage(e, r, n, i) {
        return this.sendRequest({
            method: Se.Web3Method.signEthereumMessage,
            params: {
                message: (0, le.hexStringFromBuffer)(e, !0),
                address: r,
                addPrefix: n,
                typedDataJson: i || null
            }
        });
    }
    ethereumAddressFromSignedMessage(e, r, n) {
        return this.sendRequest({
            method: Se.Web3Method.ethereumAddressFromSignedMessage,
            params: {
                message: (0, le.hexStringFromBuffer)(e, !0),
                signature: (0, le.hexStringFromBuffer)(r, !0),
                addPrefix: n
            }
        });
    }
    signEthereumTransaction(e) {
        return this.sendRequest({
            method: Se.Web3Method.signEthereumTransaction,
            params: {
                fromAddress: e.fromAddress,
                toAddress: e.toAddress,
                weiValue: (0, le.bigIntStringFromBN)(e.weiValue),
                data: (0, le.hexStringFromBuffer)(e.data, !0),
                nonce: e.nonce,
                gasPriceInWei: e.gasPriceInWei ? (0, le.bigIntStringFromBN)(e.gasPriceInWei) : null,
                maxFeePerGas: e.gasPriceInWei ? (0, le.bigIntStringFromBN)(e.gasPriceInWei) : null,
                maxPriorityFeePerGas: e.gasPriceInWei ? (0, le.bigIntStringFromBN)(e.gasPriceInWei) : null,
                gasLimit: e.gasLimit ? (0, le.bigIntStringFromBN)(e.gasLimit) : null,
                chainId: e.chainId,
                shouldSubmit: !1
            }
        });
    }
    signAndSubmitEthereumTransaction(e) {
        return this.sendRequest({
            method: Se.Web3Method.signEthereumTransaction,
            params: {
                fromAddress: e.fromAddress,
                toAddress: e.toAddress,
                weiValue: (0, le.bigIntStringFromBN)(e.weiValue),
                data: (0, le.hexStringFromBuffer)(e.data, !0),
                nonce: e.nonce,
                gasPriceInWei: e.gasPriceInWei ? (0, le.bigIntStringFromBN)(e.gasPriceInWei) : null,
                maxFeePerGas: e.maxFeePerGas ? (0, le.bigIntStringFromBN)(e.maxFeePerGas) : null,
                maxPriorityFeePerGas: e.maxPriorityFeePerGas ? (0, le.bigIntStringFromBN)(e.maxPriorityFeePerGas) : null,
                gasLimit: e.gasLimit ? (0, le.bigIntStringFromBN)(e.gasLimit) : null,
                chainId: e.chainId,
                shouldSubmit: !0
            }
        });
    }
    submitEthereumTransaction(e, r) {
        return this.sendRequest({
            method: Se.Web3Method.submitEthereumTransaction,
            params: {
                signedTransaction: (0, le.hexStringFromBuffer)(e, !0),
                chainId: r
            }
        });
    }
    scanQRCode(e) {
        return this.sendRequest({
            method: Se.Web3Method.scanQRCode,
            params: {
                regExp: e
            }
        });
    }
    getQRCodeUrl() {
        return (0, le.createQrUrl)(this._session.id, this._session.secret, this.linkAPIUrl, !1, this.options.version, this.dappDefaultChain);
    }
    genericRequest(e, r) {
        return this.sendRequest({
            method: Se.Web3Method.generic,
            params: {
                action: r,
                data: e
            }
        });
    }
    sendGenericMessage(e) {
        return this.sendRequest(e);
    }
    sendRequest(e) {
        let r = null;
        const n = (0, le.randomBytesHex)(8),
            i = (o) => {
                this.publishWeb3RequestCanceledEvent(n), this.handleErrorResponse(n, e.method, o), r == null || r();
            };
        return {
            promise: new Promise((o, a) => {
                this.ui.isStandalone() || (r = this.ui.showConnecting({
                    isUnlinkedErrorState: this.isUnlinkedErrorState,
                    onCancel: i,
                    onResetConnection: this.resetAndReload
                    // eslint-disable-line @typescript-eslint/unbound-method
                })), this.relayEventManager.callbacks.set(n, (c) => {
                    if (r == null || r(), c.errorMessage)
                        return a(new Error(c.errorMessage));
                    o(c);
                }), this.ui.isStandalone() ? this.sendRequestStandalone(n, e) : this.publishWeb3RequestEvent(n, e);
            }),
            cancel: i
        };
    }
    setConnectDisabled(e) {
        this.ui.setConnectDisabled(e);
    }
    setAccountsCallback(e) {
        this.accountsCallback = e;
    }
    setChainCallback(e) {
        this.chainCallback = e;
    }
    setDappDefaultChainCallback(e) {
        this.dappDefaultChainSubject.next(e);
    }
    publishWeb3RequestEvent(e, r) {
        var n;
        const i = (0, J4.Web3RequestMessage)({
                id: e,
                request: r
            }),
            s = At.Session.load(this.storage);
        (n = this.diagnostic) === null || n === void 0 || n.log(Ne.EVENTS.WEB3_REQUEST, {
            eventId: i.id,
            method: `relay::${i.request.method}`,
            sessionIdHash: this.getSessionIdHash(),
            storedSessionIdHash: s ? At.Session.hash(s.id) : "",
            isSessionMismatched: ((s == null ? void 0 : s.id) !== this._session.id).toString()
        }), this.subscriptions.add(this.publishEvent("Web3Request", i, !0).subscribe({
            next: (o) => {
                var a;
                (a = this.diagnostic) === null || a === void 0 || a.log(Ne.EVENTS.WEB3_REQUEST_PUBLISHED, {
                    eventId: i.id,
                    method: `relay::${i.request.method}`,
                    sessionIdHash: this.getSessionIdHash(),
                    storedSessionIdHash: s ? At.Session.hash(s.id) : "",
                    isSessionMismatched: ((s == null ? void 0 : s.id) !== this._session.id).toString()
                });
            },
            error: (o) => {
                this.handleWeb3ResponseMessage((0, Le.Web3ResponseMessage)({
                    id: i.id,
                    response: {
                        method: i.request.method,
                        errorMessage: o.message
                    }
                }));
            }
        }));
    }
    publishWeb3RequestCanceledEvent(e) {
        const r = (0, Y4.Web3RequestCanceledMessage)(e);
        this.subscriptions.add(this.publishEvent("Web3RequestCanceled", r, !1).subscribe());
    }
    publishEvent(e, r, n) {
        const i = this.session.secret;
        return new tn.Observable((s) => {
            It.encrypt(JSON.stringify(Object.assign(Object.assign({}, r), {
                origin: location.origin
            })), i).then((o) => {
                s.next(o), s.complete();
            });
        }).pipe((0, ve.mergeMap)((s) => this.connection.publishEvent(e, s, n)));
    }
    handleIncomingEvent(e) {
        try {
            this.subscriptions.add(It.decrypt(e.data, this.session.secret).pipe((0, ve.map)((r) => JSON.parse(r))).subscribe({
                next: (r) => {
                    const n = (0, Le.isWeb3ResponseMessage)(r) ? r : null;
                    n && this.handleWeb3ResponseMessage(n);
                },
                error: () => {
                    var r;
                    (r = this.diagnostic) === null || r === void 0 || r.log(Ne.EVENTS.GENERAL_ERROR, {
                        message: "Had error decrypting",
                        value: "incomingEvent"
                    });
                }
            }));
        } catch {
            return;
        }
    }
    handleWeb3ResponseMessage(e) {
        var r;
        const {
            response: n
        } = e;
        if ((r = this.diagnostic) === null || r === void 0 || r.log(Ne.EVENTS.WEB3_RESPONSE, {
                eventId: e.id,
                method: `relay::${n.method}`,
                sessionIdHash: this.getSessionIdHash()
            }), (0, Fe.isRequestEthereumAccountsResponse)(n)) {
            nt.accountRequestCallbackIds.forEach((i) => this.invokeCallback(Object.assign(Object.assign({}, e), {
                id: i
            }))), nt.accountRequestCallbackIds.clear();
            return;
        }
        this.invokeCallback(e);
    }
    handleErrorResponse(e, r, n, i) {
        this.handleWeb3ResponseMessage((0, Le.Web3ResponseMessage)({
            id: e,
            response: (0, Fe.ErrorResponse)(r, (n ? ? ca.WalletUIError.UserRejectedRequest).message, i)
        }));
    }
    invokeCallback(e) {
        const r = this.relayEventManager.callbacks.get(e.id);
        r && (r(e.response), this.relayEventManager.callbacks.delete(e.id));
    }
    requestEthereumAccounts() {
        const e = {
                method: Se.Web3Method.requestEthereumAccounts,
                params: {
                    appName: this.appName,
                    appLogoUrl: this.appLogoUrl || null
                }
            },
            r = (0, le.randomBytesHex)(8),
            n = (s) => {
                this.publishWeb3RequestCanceledEvent(r), this.handleErrorResponse(r, e.method, s);
            };
        return {
            promise: new Promise((s, o) => {
                var a;
                this.relayEventManager.callbacks.set(r, (u) => {
                    if (this.ui.hideRequestEthereumAccounts(), u.errorMessage)
                        return o(new Error(u.errorMessage));
                    s(u);
                });
                const c = ((a = window == null ? void 0 : window.navigator) === null || a === void 0 ? void 0 : a.userAgent) || null;
                if (c && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(c)) {
                    let u;
                    try {
                        (0, le.isInIFrame)() && window.top ? u = window.top.location : u = window.location;
                    } catch {
                        u = window.location;
                    }
                    u.href = `https://www.coinbase.com/connect-dapp?uri=${encodeURIComponent(u.href)}`;
                    return;
                }
                if (this.ui.inlineAccountsResponse()) {
                    const u = (l) => {
                        this.handleWeb3ResponseMessage((0, Le.Web3ResponseMessage)({
                            id: r,
                            response: (0, Fe.RequestEthereumAccountsResponse)(l)
                        }));
                    };
                    this.ui.requestEthereumAccounts({
                        onCancel: n,
                        onAccounts: u
                    });
                } else {
                    const u = vl.ethErrors.provider.userRejectedRequest("User denied account authorization");
                    this.ui.requestEthereumAccounts({
                        onCancel: () => n(u)
                    });
                }
                nt.accountRequestCallbackIds.add(r), !this.ui.inlineAccountsResponse() && !this.ui.isStandalone() && this.publishWeb3RequestEvent(r, e);
            }),
            cancel: n
        };
    }
    selectProvider(e) {
        const r = {
                method: Se.Web3Method.selectProvider,
                params: {
                    providerOptions: e
                }
            },
            n = (0, le.randomBytesHex)(8),
            i = (o) => {
                this.publishWeb3RequestCanceledEvent(n), this.handleErrorResponse(n, r.method, o);
            },
            s = new Promise((o, a) => {
                this.relayEventManager.callbacks.set(n, (l) => {
                    if (l.errorMessage)
                        return a(new Error(l.errorMessage));
                    o(l);
                });
                const c = (l) => {
                        this.handleWeb3ResponseMessage((0, Le.Web3ResponseMessage)({
                            id: n,
                            response: (0, Fe.SelectProviderResponse)(q4.ProviderType.Unselected)
                        }));
                    },
                    u = (l) => {
                        this.handleWeb3ResponseMessage((0, Le.Web3ResponseMessage)({
                            id: n,
                            response: (0, Fe.SelectProviderResponse)(l)
                        }));
                    };
                this.ui.selectProvider && this.ui.selectProvider({
                    onApprove: u,
                    onCancel: c,
                    providerOptions: e
                });
            });
        return {
            cancel: i,
            promise: s
        };
    }
    watchAsset(e, r, n, i, s, o) {
        const a = {
            method: Se.Web3Method.watchAsset,
            params: {
                type: e,
                options: {
                    address: r,
                    symbol: n,
                    decimals: i,
                    image: s
                },
                chainId: o
            }
        };
        let c = null;
        const u = (0, le.randomBytesHex)(8),
            l = (f) => {
                this.publishWeb3RequestCanceledEvent(u), this.handleErrorResponse(u, a.method, f), c == null || c();
            };
        this.ui.inlineWatchAsset() || (c = this.ui.showConnecting({
            isUnlinkedErrorState: this.isUnlinkedErrorState,
            onCancel: l,
            onResetConnection: this.resetAndReload
            // eslint-disable-line @typescript-eslint/unbound-method
        }));
        const b = new Promise((f, p) => {
            this.relayEventManager.callbacks.set(u, (I) => {
                if (c == null || c(), I.errorMessage)
                    return p(new Error(I.errorMessage));
                f(I);
            });
            const g = (I) => {
                    this.handleWeb3ResponseMessage((0, Le.Web3ResponseMessage)({
                        id: u,
                        response: (0, Fe.WatchAssetReponse)(!1)
                    }));
                },
                S = () => {
                    this.handleWeb3ResponseMessage((0, Le.Web3ResponseMessage)({
                        id: u,
                        response: (0, Fe.WatchAssetReponse)(!0)
                    }));
                };
            this.ui.inlineWatchAsset() && this.ui.watchAsset({
                onApprove: S,
                onCancel: g,
                type: e,
                address: r,
                symbol: n,
                decimals: i,
                image: s,
                chainId: o
            }), !this.ui.inlineWatchAsset() && !this.ui.isStandalone() && this.publishWeb3RequestEvent(u, a);
        });
        return {
            cancel: l,
            promise: b
        };
    }
    addEthereumChain(e, r, n, i, s, o) {
        const a = {
            method: Se.Web3Method.addEthereumChain,
            params: {
                chainId: e,
                rpcUrls: r,
                blockExplorerUrls: i,
                chainName: s,
                iconUrls: n,
                nativeCurrency: o
            }
        };
        let c = null;
        const u = (0, le.randomBytesHex)(8),
            l = (f) => {
                this.publishWeb3RequestCanceledEvent(u), this.handleErrorResponse(u, a.method, f), c == null || c();
            };
        return this.ui.inlineAddEthereumChain(e) || (c = this.ui.showConnecting({
            isUnlinkedErrorState: this.isUnlinkedErrorState,
            onCancel: l,
            onResetConnection: this.resetAndReload
            // eslint-disable-line @typescript-eslint/unbound-method
        })), {
            promise: new Promise((f, p) => {
                this.relayEventManager.callbacks.set(u, (I) => {
                    if (c == null || c(), I.errorMessage)
                        return p(new Error(I.errorMessage));
                    f(I);
                });
                const g = (I) => {
                        this.handleWeb3ResponseMessage((0, Le.Web3ResponseMessage)({
                            id: u,
                            response: (0, Fe.AddEthereumChainResponse)({
                                isApproved: !1,
                                rpcUrl: ""
                            })
                        }));
                    },
                    S = (I) => {
                        this.handleWeb3ResponseMessage((0, Le.Web3ResponseMessage)({
                            id: u,
                            response: (0, Fe.AddEthereumChainResponse)({
                                isApproved: !0,
                                rpcUrl: I
                            })
                        }));
                    };
                this.ui.inlineAddEthereumChain(e) && this.ui.addEthereumChain({
                    onCancel: g,
                    onApprove: S,
                    chainId: a.params.chainId,
                    rpcUrls: a.params.rpcUrls,
                    blockExplorerUrls: a.params.blockExplorerUrls,
                    chainName: a.params.chainName,
                    iconUrls: a.params.iconUrls,
                    nativeCurrency: a.params.nativeCurrency
                }), !this.ui.inlineAddEthereumChain(e) && !this.ui.isStandalone() && this.publishWeb3RequestEvent(u, a);
            }),
            cancel: l
        };
    }
    switchEthereumChain(e, r) {
        const n = {
                method: Se.Web3Method.switchEthereumChain,
                params: Object.assign({
                    chainId: e
                }, {
                    address: r
                })
            },
            i = (0, le.randomBytesHex)(8),
            s = (a) => {
                this.publishWeb3RequestCanceledEvent(i), this.handleErrorResponse(i, n.method, a);
            };
        return {
            promise: new Promise((a, c) => {
                this.relayEventManager.callbacks.set(i, (b) => {
                    if (b.errorMessage && b.errorCode)
                        return c(vl.ethErrors.provider.custom({
                            code: b.errorCode,
                            message: "Unrecognized chain ID. Try adding the chain using addEthereumChain first."
                        }));
                    if (b.errorMessage)
                        return c(new Error(b.errorMessage));
                    a(b);
                });
                const u = (b) => {
                        if (typeof b == "number") {
                            const f = b;
                            this.handleWeb3ResponseMessage((0, Le.Web3ResponseMessage)({
                                id: i,
                                response: (0, Fe.ErrorResponse)(Se.Web3Method.switchEthereumChain, ca.WalletUIError.SwitchEthereumChainUnsupportedChainId.message, f)
                            }));
                        } else
                            b instanceof ca.WalletUIError ? this.handleErrorResponse(i, Se.Web3Method.switchEthereumChain, b, b.errorCode) : this.handleWeb3ResponseMessage((0, Le.Web3ResponseMessage)({
                                id: i,
                                response: (0, Fe.SwitchEthereumChainResponse)({
                                    isApproved: !1,
                                    rpcUrl: ""
                                })
                            }));
                    },
                    l = (b) => {
                        this.handleWeb3ResponseMessage((0, Le.Web3ResponseMessage)({
                            id: i,
                            response: (0, Fe.SwitchEthereumChainResponse)({
                                isApproved: !0,
                                rpcUrl: b
                            })
                        }));
                    };
                this.ui.switchEthereumChain({
                    onCancel: u,
                    onApprove: l,
                    chainId: n.params.chainId,
                    address: n.params.address
                }), !this.ui.inlineSwitchEthereumChain() && !this.ui.isStandalone() && this.publishWeb3RequestEvent(i, n);
            }),
            cancel: s
        };
    }
    inlineAddEthereumChain(e) {
        return this.ui.inlineAddEthereumChain(e);
    }
    getSessionIdHash() {
        return At.Session.hash(this._session.id);
    }
    sendRequestStandalone(e, r) {
        const n = (s) => {
                this.handleErrorResponse(e, r.method, s);
            },
            i = (s) => {
                this.handleWeb3ResponseMessage((0, Le.Web3ResponseMessage)({
                    id: e,
                    response: s
                }));
            };
        switch (r.method) {
            case Se.Web3Method.signEthereumMessage:
                this.ui.signEthereumMessage({
                    request: r,
                    onSuccess: i,
                    onCancel: n
                });
                break;
            case Se.Web3Method.signEthereumTransaction:
                this.ui.signEthereumTransaction({
                    request: r,
                    onSuccess: i,
                    onCancel: n
                });
                break;
            case Se.Web3Method.submitEthereumTransaction:
                this.ui.submitEthereumTransaction({
                    request: r,
                    onSuccess: i,
                    onCancel: n
                });
                break;
            case Se.Web3Method.ethereumAddressFromSignedMessage:
                this.ui.ethereumAddressFromSignedMessage({
                    request: r,
                    onSuccess: i
                });
                break;
            default:
                n();
                break;
        }
    }
    onSessionConfigChanged(e) {}
}
nt.accountRequestCallbackIds = /* @__PURE__ */ new Set();
Ed([
    Sd.default
], nt.prototype, "resetAndReload", null);
Ed([
    Sd.default
], nt.prototype, "handleIncomingEvent", null);
ds.WalletSDKRelay = nt;
var ws = {};
Object.defineProperty(ws, "__esModule", {
    value: !0
});
ws.WalletSDKRelayEventManager = void 0;
const Q4 = B;
class K4 {
    constructor() {
        this._nextRequestId = 0, this.callbacks = /* @__PURE__ */ new Map();
    }
    makeRequestId() {
        this._nextRequestId = (this._nextRequestId + 1) % 2147483647;
        const e = this._nextRequestId,
            r = (0, Q4.prepend0x)(e.toString(16));
        return this.callbacks.get(r) && this.callbacks.delete(r), e;
    }
}
ws.WalletSDKRelayEventManager = K4;
const X4 = "@coinbase/wallet-sdk",
    e3 = "3.6.3",
    t3 = "Coinbase Wallet JavaScript SDK",
    r3 = [
        "cipher",
        "cipherbrowser",
        "coinbase",
        "coinbasewallet",
        "eth",
        "ether",
        "ethereum",
        "etherium",
        "injection",
        "toshi",
        "wallet",
        "walletlink",
        "web3"
    ],
    n3 = "dist/index.js",
    i3 = "dist/index.d.ts",
    s3 = "https://github.com/coinbase/coinbase-wallet-sdk.git",
    o3 = "Coinbase, Inc.",
    a3 = "Apache-2.0",
    c3 = {
        "pretest:unit": "node compile-assets.js",
        "test:unit": "jest",
        "test:unit:coverage": "yarn test:unit && open coverage/lcov-report/index.html",
        "test:karma": "yarn build-npm && karma start",
        prebuild: `rm -rf ./build && node -p "'export const LIB_VERSION = ' + JSON.stringify(require('./package.json').version) + ';'" > src/version.ts`,
        build: "node compile-assets.js && webpack --config webpack.config.js",
        "build-npm": "tsc -p ./tsconfig.build.json",
        "build:dev": "export LINK_API_URL='http://localhost:3000'; yarn build",
        "build:dev:watch": "nodemon -e 'ts,tsx,js,json,css,scss,svg' --ignore 'src/**/*-css.ts' --ignore 'src/**/*-svg.ts' --watch src/ --exec 'yarn build:dev'",
        "build:prod": `yarn prebuild && yarn build && yarn build-npm && cp ./package.json ../../README.md ./LICENSE build/npm && cp -a src/vendor-js build/npm/dist && sed -i.bak 's|  "private": true,||g' build/npm/package.json && rm -f build/npm/package.json.bak`,
        "lint:types": "tsc --noEmit",
        "lint:prettier": 'prettier --check "{src,__tests__}/**/*.(js|ts|tsx)"',
        "lint:eslint": "eslint ./src --ext .ts,.tsx",
        lint: "yarn lint:eslint && yarn lint:types && yarn lint:prettier",
        "fix:eslint": "yarn lint:eslint --fix",
        "fix:prettier": "prettier . --write",
        release: "./scripts/release.sh"
    },
    u3 = {
        "@metamask/safe-event-emitter": "2.0.0",
        "@solana/web3.js": "^1.70.1",
        "bind-decorator": "^1.0.11",
        "bn.js": "^5.1.1",
        buffer: "^6.0.3",
        clsx: "^1.1.0",
        "eth-block-tracker": "4.4.3",
        "eth-json-rpc-filters": "4.2.2",
        "eth-rpc-errors": "4.0.2",
        "json-rpc-engine": "6.1.0",
        keccak: "^3.0.1",
        preact: "^10.5.9",
        qs: "^6.10.3",
        rxjs: "^6.6.3",
        "sha.js": "^2.4.11",
        "stream-browserify": "^3.0.0",
        util: "^0.12.4"
    },
    l3 = {
        "@babel/core": "^7.17.9",
        "@babel/plugin-proposal-decorators": "^7.17.9",
        "@babel/plugin-transform-react-jsx": "^7.17.3",
        "@babel/preset-env": "^7.16.11",
        "@babel/preset-typescript": "^7.16.7",
        "@peculiar/webcrypto": "^1.3.3",
        "@testing-library/jest-dom": "^5.16.4",
        "@testing-library/preact": "^2.0.1",
        "@types/bn.js": "^4.11.6",
        "@types/jest": "^27.4.1",
        "@types/node": "^14.14.20",
        "@types/qs": "^6.9.7",
        "@types/sha.js": "^2.4.0",
        "@typescript-eslint/eslint-plugin": "^5.7.0",
        "@typescript-eslint/eslint-plugin-tslint": "^5.7.0",
        "@typescript-eslint/parser": "^5.7.0",
        "babel-jest": "^27.5.1",
        browserify: "17.0.0",
        "copy-webpack-plugin": "^6.4.1",
        "core-js": "^3.8.2",
        eslint: "^8.4.1",
        "eslint-config-prettier": "^8.3.0",
        "eslint-plugin-import": "^2.25.3",
        "eslint-plugin-preact": "^0.1.0",
        "eslint-plugin-prettier": "^4.0.0",
        "eslint-plugin-simple-import-sort": "^7.0.0",
        jasmine: "3.8.0",
        jest: "^27.5.1",
        "jest-chrome": "^0.7.2",
        "jest-websocket-mock": "^2.3.0",
        karma: "^6.3.15",
        "karma-browserify": "8.1.0",
        "karma-chrome-launcher": "^3.1.0",
        "karma-jasmine": "^4.0.1",
        nodemon: "^2.0.6",
        prettier: "^2.5.1",
        "raw-loader": "^4.0.2",
        "regenerator-runtime": "^0.13.7",
        sass: "^1.50.0",
        svgo: "^2.8.0",
        "ts-jest": "^27.1.4",
        "ts-loader": "^8.0.13",
        "ts-node": "^10.7.0",
        tslib: "^2.0.3",
        typescript: "^4.1.3",
        watchify: "4.0.0",
        webpack: "^5.72.0",
        "webpack-cli": "^4.9.2",
        "whatwg-fetch": "^3.5.0"
    },
    f3 = {
        node: ">= 10.0.0"
    },
    h3 = {
        name: X4,
        version: e3,
        description: t3,
        keywords: r3,
        main: n3,
        types: i3,
        repository: s3,
        author: o3,
        license: a3,
        scripts: c3,
        dependencies: u3,
        devDependencies: l3,
        engines: f3
    };
Object.defineProperty(fn, "__esModule", {
    value: !0
});
fn.CoinbaseWalletSDK = void 0;
const d3 = Ri,
    p3 = Ii,
    _3 = Er,
    b3 = Ki,
    g3 = ds,
    m3 = ws,
    y3 = B,
    v3 = {
        GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_fe7b8e4d-7ab2-4999-9daf-0e81836f4860",
        npm_package_dependencies_connectkit: "^1.1.3",
        DOTNET_NOLOGO: "1",
        STATS_TRP: "true",
        DEPLOYMENT_BASEPATH: "/opt/runner",
        ACTIONS_RUNTIME_TOKEN: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImVCWl9jbjNzWFlBZDBjaDRUSEJLSElnT3dPRSJ9.eyJuYW1laWQiOiJkZGRkZGRkZC1kZGRkLWRkZGQtZGRkZC1kZGRkZGRkZGRkZGQiLCJzY3AiOiJBY3Rpb25zLkdlbmVyaWNSZWFkOjAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCBBY3Rpb25zLlVwbG9hZEFydGlmYWN0czowMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDAvMTpCdWlsZC9CdWlsZC84MCBMb2NhdGlvblNlcnZpY2UuQ29ubmVjdCBSZWFkQW5kVXBkYXRlQnVpbGRCeVVyaTowMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDAvMTpCdWlsZC9CdWlsZC84MCIsIklkZW50aXR5VHlwZUNsYWltIjoiU3lzdGVtOlNlcnZpY2VJZGVudGl0eSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3NpZCI6IkRERERERERELUREREQtRERERC1ERERELURERERERERERERERCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcHJpbWFyeXNpZCI6ImRkZGRkZGRkLWRkZGQtZGRkZC1kZGRkLWRkZGRkZGRkZGRkZCIsImF1aSI6IjAzYjRjYzhkLWUyM2YtNDk4ZC1hZmNhLTRmM2JhN2Q3ZDRmYiIsInNpZCI6IjMxMzg5N2U2LTc0NDgtNGM0NS04NmRiLTU4YmUyZjE1YzhlMSIsImFjIjoiW3tcIlNjb3BlXCI6XCJyZWZzL2hlYWRzL21haW5cIixcIlBlcm1pc3Npb25cIjozfV0iLCJhY3NsIjoiMTAiLCJvcmNoaWQiOiI2NzllNzc3ZC0xN2I4LTQwMTctYWQzZi1jODBhZGZhYWZjODQuYnVpbGQuX19kZWZhdWx0IiwiaXNzIjoidnN0b2tlbi5hY3Rpb25zLmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImF1ZCI6InZzdG9rZW4uYWN0aW9ucy5naXRodWJ1c2VyY29udGVudC5jb218dnNvOmQ1MjEwMzViLTg5N2MtNDFhOC1iZDY1LTlmZmQ4MjU1MjA2NCIsIm5iZiI6MTY4MTU2MTU1MywiZXhwIjoxNjgxNTg0MzUzfQ.X2OnFU4nRcJelhK-iho7qKeS5jXly1UnDITUcnO1wIyII-M6TcEfWlv7Qvrm09H9XwXdohYe4MJuYr1egGIGjlwHr9zAwvTiO0A-iN5oJ9NvJpuECr6g7DAD7ou8t34b6jnJd8-GKHBYX4AoDv27on_OtcPANAqogimELiZV_RCrPuQQZDjRzXjoEvYD6TCqoakVAJHzkKKq7SL9Uz4dVIYnOp5U0wQMoUhMXW4lfoNFCPMFHoU2dDPKghg5AGJYtELsxe28q980eOBEEEq5qTludtzq21aIX6B2DQz2x8KX-GsqwsGy75dbN8DqtRWwUclLuso2q_yxrfTzMEL6vg",
        USER: "runner",
        ACTIONS_CACHE_URL: "https://artifactcache.actions.githubusercontent.com/rfPb8qMRoMJgKcbWj636CUjHyn9ARBsXcNMyUbs53lB3mcqrgu/",
        npm_config_version_commit_hooks: "true",
        npm_config_user_agent: "yarn/1.22.19 npm/? node/v18.15.0 linux x64",
        CI: "true",
        INPUT_CMD: "build --filter=embed",
        npm_package_devDependencies_turbo: "latest",
        npm_config_bin_links: "true",
        npm_config_wrap_output: "",
        PIPX_HOME: "/opt/pipx",
        GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_fe7b8e4d-7ab2-4999-9daf-0e81836f4860",
        npm_node_execpath: "/opt/hostedtoolcache/node/18.15.0/x64/bin/node",
        npm_config_init_version: "1.0.0",
        npm_package_devDependencies_vite: "^4.0.0",
        JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64",
        npm_package_packageManager: "yarn@1.22.17",
        npm_package_devDependencies__types_pubsub_js: "^1.8.3",
        npm_package_dependencies_wagmi: "^0.10.11",
        HOME: "/home/runner",
        GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json",
        RUNNER_TEMP: "/home/runner/work/_temp",
        PIPX_BIN_DIR: "/opt/pipx_bin",
        JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64",
        GITHUB_REPOSITORY_OWNER: "james-hunt",
        npm_package_engines_node: ">=14.0.0",
        npm_config_init_license: "MIT",
        npm_package_dependencies_framer_motion: "^8.5.2",
        ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653",
        STATS_RDCL: "true",
        GRADLE_HOME: "/usr/share/gradle-8.0.2",
        GITHUB_RETENTION_DAYS: "90",
        YARN_WRAP_OUTPUT: "false",
        npm_config_version_tag_prefix: "v",
        POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22",
        AZURE_EXTENSION_DIR: "/opt/az/azcliextensions",
        GITHUB_REPOSITORY_OWNER_ID: "7122572",
        GITHUB_HEAD_REF: "",
        SYSTEMD_EXEC_PID: "663",
        npm_package_dependencies__checkout_hooks: "*",
        GITHUB_GRAPHQL_URL: "https://api.github.com/graphql",
        npm_package_description: "This is an official Yarn v1 starter turborepo.",
        npm_package_devDependencies_typescript: "^4.9.3",
        npm_package_devDependencies_tailwindcss: "^3.2.4",
        NVM_DIR: "/home/runner/.nvm",
        GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.3/x64",
        npm_package_readmeFilename: "README.md",
        npm_package_devDependencies__types_react_dom: "^18.0.9",
        DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1",
        JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64",
        ImageVersion: "20230409.1",
        INPUT_DIR: "",
        npm_package_devDependencies_prettier: "latest",
        npm_package_scripts_dev: "vite",
        SWIFT_PATH: "/usr/share/swift/usr/bin",
        GITHUB_API_URL: "https://api.github.com",
        RUNNER_OS: "Linux",
        ACTIONS_RUNTIME_URL: "https://pipelines.actions.githubusercontent.com/rfPb8qMRoMJgKcbWj636CUjHyn9ARBsXcNMyUbs53lB3mcqrgu/",
        npm_package_devDependencies__vitejs_plugin_react: "^3.0.0",
        npm_package_dependencies_zustand: "^4.3.2",
        npm_package_dependencies__checkout_chains: "*",
        npm_package_type: "module",
        CHROMEWEBDRIVER: "/usr/local/share/chrome_driver",
        JOURNAL_STREAM: "8:17176",
        RUNNER_USER: "runner",
        GITHUB_WORKFLOW: "Node.js CI",
        npm_package_private: "true",
        npm_package_devDependencies_autoprefixer: "^10.4.13",
        npm_package_dependencies_pubsub_js: "^1.9.4",
        npm_package_scripts_lint: "turbo run lint",
        npm_config_registry: "https://registry.yarnpkg.com",
        GITHUB_RUN_ID: "4707812406",
        npm_package_workspaces_0: "apps/*",
        BOOTSTRAP_HASKELL_NONINTERACTIVE: "1",
        ImageOS: "ubuntu22",
        GITHUB_BASE_REF: "",
        GITHUB_REF_TYPE: "branch",
        GITHUB_WORKFLOW_SHA: "b771926efc07b2fd0e4eb6109657764fba90077d",
        npm_package_workspaces_1: "packages/*",
        npm_config_ignore_scripts: "",
        GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64",
        PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG",
        GITHUB_WORKFLOW_REF: "james-hunt/checkout/.github/workflows/workflow.yml@refs/heads/main",
        GITHUB_ACTION_REPOSITORY: "borales/actions-yarn",
        npm_package_devDependencies__types_mixpanel_browser: "^2.38.1",
        npm_package_dependencies_axios: "^1.2.3",
        PATH: "/tmp/yarn--1681562288453-0.8127317389101916:/home/runner/work/checkout/checkout/apps/checkout/node_modules/.bin:/home/runner/.config/yarn/link/node_modules/.bin:/home/runner/work/checkout/checkout/node_modules/.bin:/opt/hostedtoolcache/node/18.15.0/x64/libexec/lib/node_modules/npm/bin/node-gyp-bin:/opt/hostedtoolcache/node/18.15.0/x64/lib/node_modules/npm/bin/node-gyp-bin:/opt/hostedtoolcache/node/18.15.0/x64/bin/node_modules/npm/bin/node-gyp-bin:/tmp/yarn--1681562258651-0.5115078609879176:/home/runner/work/checkout/checkout/node_modules/.bin:/home/runner/.config/yarn/link/node_modules/.bin:/home/runner/work/checkout/checkout/node_modules/.bin:/opt/hostedtoolcache/node/18.15.0/x64/libexec/lib/node_modules/npm/bin/node-gyp-bin:/opt/hostedtoolcache/node/18.15.0/x64/lib/node_modules/npm/bin/node-gyp-bin:/opt/hostedtoolcache/node/18.15.0/x64/bin/node_modules/npm/bin/node-gyp-bin:/opt/hostedtoolcache/node/18.15.0/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin",
        NODE: "/opt/hostedtoolcache/node/18.15.0/x64/bin/node",
        RUNNER_TRACKING_ID: "github_efb7f5e0-3768-4a90-a411-3b62d29086e9",
        DOTNET_MULTILEVEL_LOOKUP: "0",
        INVOCATION_ID: "9beb838f1f5d4336a350ec5c91bc5537",
        GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.8/x64",
        ANT_HOME: "/usr/share/ant",
        RUNNER_TOOL_CACHE: "/opt/hostedtoolcache",
        npm_package_name: "@checkout/embed",
        TURBO_HASH: "4b6704bf32834fe0",
        AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache",
        XDG_RUNTIME_DIR: "/run/user/1001",
        GITHUB_RUN_NUMBER: "81",
        GITHUB_TRIGGERING_ACTOR: "james-hunt",
        GITHUB_ACTION: "__borales_actions-yarn_2",
        RUNNER_ARCH: "X64",
        npm_package_dependencies__mantine_hooks: "^5.10.1",
        VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg",
        LANG: "C.UTF-8",
        npm_package_dependencies_react_dom: "^18.2.0",
        npm_package_dependencies__checkout_utils: "*",
        XDG_CONFIG_HOME: "/home/runner/.config",
        CONDA: "/usr/share/miniconda",
        GITHUB_REPOSITORY: "james-hunt/checkout",
        GITHUB_REF_NAME: "main",
        RUNNER_NAME: "GitHub Actions 2",
        npm_lifecycle_script: "tsc && vite build",
        ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653",
        DEBIAN_FRONTEND: "noninteractive",
        GITHUB_ACTION_REF: "v4",
        npm_config_version_git_message: "v%s",
        GITHUB_ACTIONS: "true",
        STATS_NM: "true",
        GITHUB_REPOSITORY_ID: "602396324",
        npm_lifecycle_event: "build",
        npm_package_version: "0.0.0",
        npm_package_devDependencies__types_react: "^18.0.26",
        GITHUB_REF_PROTECTED: "false",
        npm_config_argv: '{"remain":[],"cooked":["run","build"],"original":["build","--filter=embed"]}',
        npm_package_scripts_build: "tsc && vite build",
        RUNNER_PERFLOG: "/home/runner/perflog",
        ACCEPT_EULA: "Y",
        GITHUB_JOB: "build",
        GITHUB_WORKSPACE: "/home/runner/work/checkout/checkout",
        npm_package_devDependencies_eslint_config_custom: "*",
        GITHUB_SHA: "b771926efc07b2fd0e4eb6109657764fba90077d",
        GITHUB_RUN_ATTEMPT: "1",
        npm_config_version_git_tag: "true",
        npm_config_version_git_sign: "",
        npm_package_dependencies__tanstack_react_query: "^4.14.5",
        npm_package_dependencies__checkout_wagmi_provider: "*",
        ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk",
        GITHUB_REF: "refs/heads/main",
        GITHUB_ACTOR: "james-hunt",
        npm_config_strict_ssl: "true",
        npm_package_dependencies_mixpanel_browser: "^2.46.0",
        LEIN_HOME: "/usr/local/lib/lein",
        npm_package_scripts_format: 'prettier --write "**/*.{ts,tsx,md}"',
        npm_package_dependencies__floating_ui_react: "^0.18.1",
        JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64",
        GITHUB_ACTOR_ID: "7122572",
        GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_fe7b8e4d-7ab2-4999-9daf-0e81836f4860",
        RUNNER_WORKSPACE: "/home/runner/work/checkout",
        npm_execpath: "/usr/local/lib/node_modules/yarn/bin/yarn.js",
        PWD: "/home/runner/work/checkout/checkout/apps/checkout",
        GECKOWEBDRIVER: "/usr/local/share/gecko_driver",
        HOMEBREW_NO_AUTO_UPDATE: "1",
        HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650",
        STATS_TIS: "mining",
        GHCUP_INSTALL_BASE_PREFIX: "/usr/local",
        ANDROID_HOME: "/usr/local/lib/android/sdk",
        LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar",
        GITHUB_EVENT_NAME: "push",
        GITHUB_SERVER_URL: "https://github.com",
        GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_fe7b8e4d-7ab2-4999-9daf-0e81836f4860",
        STATS_EXT: "true",
        EDGEWEBDRIVER: "/usr/local/share/edge_driver",
        npm_config_save_prefix: "^",
        npm_config_ignore_optional: "",
        npm_package_devDependencies_postcss: "^8.4.21",
        ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653",
        SGX_AESM_ADDR: "1",
        CHROME_BIN: "/usr/bin/google-chrome",
        npm_package_dependencies__checkout_ui: "*",
        npm_package_scripts_preview: "vite preview",
        SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar",
        STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.137+2/provjobd.data",
        INIT_CWD: "/home/runner/work/checkout/checkout",
        ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653",
        GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_fe7b8e4d-7ab2-4999-9daf-0e81836f4860",
        npm_package_dependencies_react: "^18.2.0",
        NODE_ENV: "production"
    }.LINK_API_URL || "https://www.walletlink.org",
    kd = {
        GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_fe7b8e4d-7ab2-4999-9daf-0e81836f4860",
        npm_package_dependencies_connectkit: "^1.1.3",
        DOTNET_NOLOGO: "1",
        STATS_TRP: "true",
        DEPLOYMENT_BASEPATH: "/opt/runner",
        ACTIONS_RUNTIME_TOKEN: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImVCWl9jbjNzWFlBZDBjaDRUSEJLSElnT3dPRSJ9.eyJuYW1laWQiOiJkZGRkZGRkZC1kZGRkLWRkZGQtZGRkZC1kZGRkZGRkZGRkZGQiLCJzY3AiOiJBY3Rpb25zLkdlbmVyaWNSZWFkOjAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCBBY3Rpb25zLlVwbG9hZEFydGlmYWN0czowMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDAvMTpCdWlsZC9CdWlsZC84MCBMb2NhdGlvblNlcnZpY2UuQ29ubmVjdCBSZWFkQW5kVXBkYXRlQnVpbGRCeVVyaTowMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDAvMTpCdWlsZC9CdWlsZC84MCIsIklkZW50aXR5VHlwZUNsYWltIjoiU3lzdGVtOlNlcnZpY2VJZGVudGl0eSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3NpZCI6IkRERERERERELUREREQtRERERC1ERERELURERERERERERERERCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcHJpbWFyeXNpZCI6ImRkZGRkZGRkLWRkZGQtZGRkZC1kZGRkLWRkZGRkZGRkZGRkZCIsImF1aSI6IjAzYjRjYzhkLWUyM2YtNDk4ZC1hZmNhLTRmM2JhN2Q3ZDRmYiIsInNpZCI6IjMxMzg5N2U2LTc0NDgtNGM0NS04NmRiLTU4YmUyZjE1YzhlMSIsImFjIjoiW3tcIlNjb3BlXCI6XCJyZWZzL2hlYWRzL21haW5cIixcIlBlcm1pc3Npb25cIjozfV0iLCJhY3NsIjoiMTAiLCJvcmNoaWQiOiI2NzllNzc3ZC0xN2I4LTQwMTctYWQzZi1jODBhZGZhYWZjODQuYnVpbGQuX19kZWZhdWx0IiwiaXNzIjoidnN0b2tlbi5hY3Rpb25zLmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImF1ZCI6InZzdG9rZW4uYWN0aW9ucy5naXRodWJ1c2VyY29udGVudC5jb218dnNvOmQ1MjEwMzViLTg5N2MtNDFhOC1iZDY1LTlmZmQ4MjU1MjA2NCIsIm5iZiI6MTY4MTU2MTU1MywiZXhwIjoxNjgxNTg0MzUzfQ.X2OnFU4nRcJelhK-iho7qKeS5jXly1UnDITUcnO1wIyII-M6TcEfWlv7Qvrm09H9XwXdohYe4MJuYr1egGIGjlwHr9zAwvTiO0A-iN5oJ9NvJpuECr6g7DAD7ou8t34b6jnJd8-GKHBYX4AoDv27on_OtcPANAqogimELiZV_RCrPuQQZDjRzXjoEvYD6TCqoakVAJHzkKKq7SL9Uz4dVIYnOp5U0wQMoUhMXW4lfoNFCPMFHoU2dDPKghg5AGJYtELsxe28q980eOBEEEq5qTludtzq21aIX6B2DQz2x8KX-GsqwsGy75dbN8DqtRWwUclLuso2q_yxrfTzMEL6vg",
        USER: "runner",
        ACTIONS_CACHE_URL: "https://artifactcache.actions.githubusercontent.com/rfPb8qMRoMJgKcbWj636CUjHyn9ARBsXcNMyUbs53lB3mcqrgu/",
        npm_config_version_commit_hooks: "true",
        npm_config_user_agent: "yarn/1.22.19 npm/? node/v18.15.0 linux x64",
        CI: "true",
        INPUT_CMD: "build --filter=embed",
        npm_package_devDependencies_turbo: "latest",
        npm_config_bin_links: "true",
        npm_config_wrap_output: "",
        PIPX_HOME: "/opt/pipx",
        GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_fe7b8e4d-7ab2-4999-9daf-0e81836f4860",
        npm_node_execpath: "/opt/hostedtoolcache/node/18.15.0/x64/bin/node",
        npm_config_init_version: "1.0.0",
        npm_package_devDependencies_vite: "^4.0.0",
        JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64",
        npm_package_packageManager: "yarn@1.22.17",
        npm_package_devDependencies__types_pubsub_js: "^1.8.3",
        npm_package_dependencies_wagmi: "^0.10.11",
        HOME: "/home/runner",
        GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json",
        RUNNER_TEMP: "/home/runner/work/_temp",
        PIPX_BIN_DIR: "/opt/pipx_bin",
        JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64",
        GITHUB_REPOSITORY_OWNER: "james-hunt",
        npm_package_engines_node: ">=14.0.0",
        npm_config_init_license: "MIT",
        npm_package_dependencies_framer_motion: "^8.5.2",
        ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653",
        STATS_RDCL: "true",
        GRADLE_HOME: "/usr/share/gradle-8.0.2",
        GITHUB_RETENTION_DAYS: "90",
        YARN_WRAP_OUTPUT: "false",
        npm_config_version_tag_prefix: "v",
        POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22",
        AZURE_EXTENSION_DIR: "/opt/az/azcliextensions",
        GITHUB_REPOSITORY_OWNER_ID: "7122572",
        GITHUB_HEAD_REF: "",
        SYSTEMD_EXEC_PID: "663",
        npm_package_dependencies__checkout_hooks: "*",
        GITHUB_GRAPHQL_URL: "https://api.github.com/graphql",
        npm_package_description: "This is an official Yarn v1 starter turborepo.",
        npm_package_devDependencies_typescript: "^4.9.3",
        npm_package_devDependencies_tailwindcss: "^3.2.4",
        NVM_DIR: "/home/runner/.nvm",
        GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.3/x64",
        npm_package_readmeFilename: "README.md",
        npm_package_devDependencies__types_react_dom: "^18.0.9",
        DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1",
        JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64",
        ImageVersion: "20230409.1",
        INPUT_DIR: "",
        npm_package_devDependencies_prettier: "latest",
        npm_package_scripts_dev: "vite",
        SWIFT_PATH: "/usr/share/swift/usr/bin",
        GITHUB_API_URL: "https://api.github.com",
        RUNNER_OS: "Linux",
        ACTIONS_RUNTIME_URL: "https://pipelines.actions.githubusercontent.com/rfPb8qMRoMJgKcbWj636CUjHyn9ARBsXcNMyUbs53lB3mcqrgu/",
        npm_package_devDependencies__vitejs_plugin_react: "^3.0.0",
        npm_package_dependencies_zustand: "^4.3.2",
        npm_package_dependencies__checkout_chains: "*",
        npm_package_type: "module",
        CHROMEWEBDRIVER: "/usr/local/share/chrome_driver",
        JOURNAL_STREAM: "8:17176",
        RUNNER_USER: "runner",
        GITHUB_WORKFLOW: "Node.js CI",
        npm_package_private: "true",
        npm_package_devDependencies_autoprefixer: "^10.4.13",
        npm_package_dependencies_pubsub_js: "^1.9.4",
        npm_package_scripts_lint: "turbo run lint",
        npm_config_registry: "https://registry.yarnpkg.com",
        GITHUB_RUN_ID: "4707812406",
        npm_package_workspaces_0: "apps/*",
        BOOTSTRAP_HASKELL_NONINTERACTIVE: "1",
        ImageOS: "ubuntu22",
        GITHUB_BASE_REF: "",
        GITHUB_REF_TYPE: "branch",
        GITHUB_WORKFLOW_SHA: "b771926efc07b2fd0e4eb6109657764fba90077d",
        npm_package_workspaces_1: "packages/*",
        npm_config_ignore_scripts: "",
        GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64",
        PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG",
        GITHUB_WORKFLOW_REF: "james-hunt/checkout/.github/workflows/workflow.yml@refs/heads/main",
        GITHUB_ACTION_REPOSITORY: "borales/actions-yarn",
        npm_package_devDependencies__types_mixpanel_browser: "^2.38.1",
        npm_package_dependencies_axios: "^1.2.3",
        PATH: "/tmp/yarn--1681562288453-0.8127317389101916:/home/runner/work/checkout/checkout/apps/checkout/node_modules/.bin:/home/runner/.config/yarn/link/node_modules/.bin:/home/runner/work/checkout/checkout/node_modules/.bin:/opt/hostedtoolcache/node/18.15.0/x64/libexec/lib/node_modules/npm/bin/node-gyp-bin:/opt/hostedtoolcache/node/18.15.0/x64/lib/node_modules/npm/bin/node-gyp-bin:/opt/hostedtoolcache/node/18.15.0/x64/bin/node_modules/npm/bin/node-gyp-bin:/tmp/yarn--1681562258651-0.5115078609879176:/home/runner/work/checkout/checkout/node_modules/.bin:/home/runner/.config/yarn/link/node_modules/.bin:/home/runner/work/checkout/checkout/node_modules/.bin:/opt/hostedtoolcache/node/18.15.0/x64/libexec/lib/node_modules/npm/bin/node-gyp-bin:/opt/hostedtoolcache/node/18.15.0/x64/lib/node_modules/npm/bin/node-gyp-bin:/opt/hostedtoolcache/node/18.15.0/x64/bin/node_modules/npm/bin/node-gyp-bin:/opt/hostedtoolcache/node/18.15.0/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin",
        NODE: "/opt/hostedtoolcache/node/18.15.0/x64/bin/node",
        RUNNER_TRACKING_ID: "github_efb7f5e0-3768-4a90-a411-3b62d29086e9",
        DOTNET_MULTILEVEL_LOOKUP: "0",
        INVOCATION_ID: "9beb838f1f5d4336a350ec5c91bc5537",
        GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.8/x64",
        ANT_HOME: "/usr/share/ant",
        RUNNER_TOOL_CACHE: "/opt/hostedtoolcache",
        npm_package_name: "@checkout/embed",
        TURBO_HASH: "4b6704bf32834fe0",
        AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache",
        XDG_RUNTIME_DIR: "/run/user/1001",
        GITHUB_RUN_NUMBER: "81",
        GITHUB_TRIGGERING_ACTOR: "james-hunt",
        GITHUB_ACTION: "__borales_actions-yarn_2",
        RUNNER_ARCH: "X64",
        npm_package_dependencies__mantine_hooks: "^5.10.1",
        VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg",
        LANG: "C.UTF-8",
        npm_package_dependencies_react_dom: "^18.2.0",
        npm_package_dependencies__checkout_utils: "*",
        XDG_CONFIG_HOME: "/home/runner/.config",
        CONDA: "/usr/share/miniconda",
        GITHUB_REPOSITORY: "james-hunt/checkout",
        GITHUB_REF_NAME: "main",
        RUNNER_NAME: "GitHub Actions 2",
        npm_lifecycle_script: "tsc && vite build",
        ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653",
        DEBIAN_FRONTEND: "noninteractive",
        GITHUB_ACTION_REF: "v4",
        npm_config_version_git_message: "v%s",
        GITHUB_ACTIONS: "true",
        STATS_NM: "true",
        GITHUB_REPOSITORY_ID: "602396324",
        npm_lifecycle_event: "build",
        npm_package_version: "0.0.0",
        npm_package_devDependencies__types_react: "^18.0.26",
        GITHUB_REF_PROTECTED: "false",
        npm_config_argv: '{"remain":[],"cooked":["run","build"],"original":["build","--filter=embed"]}',
        npm_package_scripts_build: "tsc && vite build",
        RUNNER_PERFLOG: "/home/runner/perflog",
        ACCEPT_EULA: "Y",
        GITHUB_JOB: "build",
        GITHUB_WORKSPACE: "/home/runner/work/checkout/checkout",
        npm_package_devDependencies_eslint_config_custom: "*",
        GITHUB_SHA: "b771926efc07b2fd0e4eb6109657764fba90077d",
        GITHUB_RUN_ATTEMPT: "1",
        npm_config_version_git_tag: "true",
        npm_config_version_git_sign: "",
        npm_package_dependencies__tanstack_react_query: "^4.14.5",
        npm_package_dependencies__checkout_wagmi_provider: "*",
        ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk",
        GITHUB_REF: "refs/heads/main",
        GITHUB_ACTOR: "james-hunt",
        npm_config_strict_ssl: "true",
        npm_package_dependencies_mixpanel_browser: "^2.46.0",
        LEIN_HOME: "/usr/local/lib/lein",
        npm_package_scripts_format: 'prettier --write "**/*.{ts,tsx,md}"',
        npm_package_dependencies__floating_ui_react: "^0.18.1",
        JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64",
        GITHUB_ACTOR_ID: "7122572",
        GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_fe7b8e4d-7ab2-4999-9daf-0e81836f4860",
        RUNNER_WORKSPACE: "/home/runner/work/checkout",
        npm_execpath: "/usr/local/lib/node_modules/yarn/bin/yarn.js",
        PWD: "/home/runner/work/checkout/checkout/apps/checkout",
        GECKOWEBDRIVER: "/usr/local/share/gecko_driver",
        HOMEBREW_NO_AUTO_UPDATE: "1",
        HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650",
        STATS_TIS: "mining",
        GHCUP_INSTALL_BASE_PREFIX: "/usr/local",
        ANDROID_HOME: "/usr/local/lib/android/sdk",
        LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar",
        GITHUB_EVENT_NAME: "push",
        GITHUB_SERVER_URL: "https://github.com",
        GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_fe7b8e4d-7ab2-4999-9daf-0e81836f4860",
        STATS_EXT: "true",
        EDGEWEBDRIVER: "/usr/local/share/edge_driver",
        npm_config_save_prefix: "^",
        npm_config_ignore_optional: "",
        npm_package_devDependencies_postcss: "^8.4.21",
        ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653",
        SGX_AESM_ADDR: "1",
        CHROME_BIN: "/usr/bin/google-chrome",
        npm_package_dependencies__checkout_ui: "*",
        npm_package_scripts_preview: "vite preview",
        SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar",
        STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.137+2/provjobd.data",
        INIT_CWD: "/home/runner/work/checkout/checkout",
        ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653",
        GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_fe7b8e4d-7ab2-4999-9daf-0e81836f4860",
        npm_package_dependencies_react: "^18.2.0",
        NODE_ENV: "production"
    }.SDK_VERSION || h3.version || "unknown";
class Es {
    /**
     * Constructor
     * @param options Coinbase Wallet SDK constructor options
     */
    constructor(e) {
        var r, n, i;
        this._appName = "", this._appLogoUrl = null, this._relay = null, this._relayEventManager = null;
        const s = e.linkAPIUrl || v3;
        let o;
        if (e.uiConstructor ? o = e.uiConstructor : o = (u) => new b3.WalletSDKUI(u), typeof e.overrideIsMetaMask > "u" ? this._overrideIsMetaMask = !1 : this._overrideIsMetaMask = e.overrideIsMetaMask, this._overrideIsCoinbaseWallet = (r = e.overrideIsCoinbaseWallet) !== null && r !== void 0 ? r : !0, this._overrideIsCoinbaseBrowser = (n = e.overrideIsCoinbaseBrowser) !== null && n !== void 0 ? n : !1, e.diagnosticLogger && e.eventListener)
            throw new Error("Can't have both eventListener and diagnosticLogger options, use only diagnosticLogger");
        e.eventListener ? this._diagnosticLogger = {
            // eslint-disable-next-line @typescript-eslint/unbound-method
            log: e.eventListener.onEvent
        } : this._diagnosticLogger = e.diagnosticLogger, this._reloadOnDisconnect = (i = e.reloadOnDisconnect) !== null && i !== void 0 ? i : !0;
        const a = new URL(s),
            c = `${a.protocol}//${a.host}`;
        this._storage = new p3.ScopedLocalStorage(`-walletlink:${c}`), this._storage.setItem("version", Es.VERSION), !(this.walletExtension || this.coinbaseBrowser) && (this._relayEventManager = new m3.WalletSDKRelayEventManager(), this._relay = new g3.WalletSDKRelay({
            linkAPIUrl: s,
            version: kd,
            darkMode: !!e.darkMode,
            uiConstructor: o,
            storage: this._storage,
            relayEventManager: this._relayEventManager,
            diagnosticLogger: this._diagnosticLogger
        }), this.setAppInfo(e.appName, e.appLogoUrl), !e.headlessMode && this._relay.attachUI());
    }
    /**
     * Create a Web3 Provider object
     * @param jsonRpcUrl Ethereum JSON RPC URL (Default: "")
     * @param chainId Ethereum Chain ID (Default: 1)
     * @returns A Web3 Provider
     */
    makeWeb3Provider(e = "", r = 1) {
        const n = this.walletExtension;
        if (n)
            return this.isCipherProvider(n) || n.setProviderInfo(e, r), this._reloadOnDisconnect === !1 && typeof n.disableReloadOnDisconnect == "function" && n.disableReloadOnDisconnect(), n;
        const i = this.coinbaseBrowser;
        if (i)
            return i;
        const s = this._relay;
        if (!s || !this._relayEventManager || !this._storage)
            throw new Error("Relay not initialized, should never happen");
        return e || s.setConnectDisabled(!0), new _3.CoinbaseWalletProvider({
            relayProvider: () => Promise.resolve(s),
            relayEventManager: this._relayEventManager,
            storage: this._storage,
            jsonRpcUrl: e,
            chainId: r,
            qrUrl: this.getQrUrl(),
            diagnosticLogger: this._diagnosticLogger,
            overrideIsMetaMask: this._overrideIsMetaMask,
            overrideIsCoinbaseWallet: this._overrideIsCoinbaseWallet,
            overrideIsCoinbaseBrowser: this._overrideIsCoinbaseBrowser
        });
    }
    /**
     * Set application information
     * @param appName Application name
     * @param appLogoUrl Application logo image URL
     */
    setAppInfo(e, r) {
        var n;
        this._appName = e || "DApp", this._appLogoUrl = r || (0, y3.getFavicon)();
        const i = this.walletExtension;
        i ? this.isCipherProvider(i) || i.setAppInfo(this._appName, this._appLogoUrl) : (n = this._relay) === null || n === void 0 || n.setAppInfo(this._appName, this._appLogoUrl);
    }
    /**
     * Disconnect. After disconnecting, this will reload the web page to ensure
     * all potential stale state is cleared.
     */
    disconnect() {
        var e;
        const r = this.walletExtension;
        r ? r.close() : (e = this._relay) === null || e === void 0 || e.resetAndReload();
    }
    /**
     * Return QR URL for mobile wallet connection, will return null if extension is installed
     */
    getQrUrl() {
        var e, r;
        return (r = (e = this._relay) === null || e === void 0 ? void 0 : e.getQRCodeUrl()) !== null && r !== void 0 ? r : null;
    }
    /**
     * Official Coinbase Wallet logo for developers to use on their frontend
     * @param type Type of wallet logo: "standard" | "circle" | "text" | "textWithLogo" | "textLight" | "textWithLogoLight"
     * @param width Width of the logo (Optional)
     * @returns SVG Data URI
     */
    getCoinbaseWalletLogo(e, r = 240) {
        return (0, d3.walletLogo)(e, r);
    }
    get walletExtension() {
        var e;
        return (e = window.coinbaseWalletExtension) !== null && e !== void 0 ? e : window.walletLinkExtension;
    }
    get coinbaseBrowser() {
        var e, r;
        try {
            const n = (e = window.ethereum) !== null && e !== void 0 ? e : (r = window.top) === null || r === void 0 ? void 0 : r.ethereum;
            return n && "isCoinbaseBrowser" in n && n.isCoinbaseBrowser ? n : void 0;
        } catch {
            return;
        }
    }
    isCipherProvider(e) {
        return typeof e.isCipher == "boolean" && e.isCipher;
    }
}
fn.CoinbaseWalletSDK = Es;
Es.VERSION = kd;
(function(t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.CoinbaseWalletProvider = t.CoinbaseWalletSDK = void 0;
    const e = fn,
        r = Er;
    var n = fn;
    Object.defineProperty(t, "CoinbaseWalletSDK", {
        enumerable: !0,
        get: function() {
            return n.CoinbaseWalletSDK;
        }
    });
    var i = Er;
    Object.defineProperty(t, "CoinbaseWalletProvider", {
        enumerable: !0,
        get: function() {
            return i.CoinbaseWalletProvider;
        }
    }), t.default = e.CoinbaseWalletSDK, typeof window < "u" && (window.CoinbaseWalletSDK = e.CoinbaseWalletSDK, window.CoinbaseWalletProvider = r.CoinbaseWalletProvider, window.WalletLink = e.CoinbaseWalletSDK, window.WalletLinkProvider = r.CoinbaseWalletProvider);
})(ja);
const w3 = /* @__PURE__ */ Id(ja),
    L3 = /* @__PURE__ */ Ad({
        __proto__: null,
        default: w3
    }, [ja]);
export {
    L3 as i
};