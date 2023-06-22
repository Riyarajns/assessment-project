"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [682], {
        97254: function(e, n, t) {
            var r = t(809),
                a = t.n(r),
                s = t(30266),
                c = t(78249),
                u = t.n(c),
                i = t(40452),
                o = t.n(i),
                p = t(45957),
                d = t.n(p),
                f = t(18387),
                l = function() {
                    var e = (0, s.Z)(a().mark((function e(n) {
                        var t, r, s;
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, f.Z)();
                                case 2:
                                    if (!window.encryptionKey || !window.encryptionIv) {
                                        e.next = 7;
                                        break
                                    }
                                    return t = u().enc.Base64.parse(window.encryptionKey), r = u().enc.Base64.parse(window.encryptionIv), s = u().enc.Utf8.parse(n), e.abrupt("return", o().encrypt(s.toString(), t, {
                                        mode: u().mode.CBC,
                                        padding: d(),
                                        iv: r
                                    }).ciphertext.toString(u().enc.Base64));
                                case 7:
                                    return e.abrupt("return", null);
                                case 8:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(n) {
                        return e.apply(this, arguments)
                    }
                }();
            n.Z = l
        },
        18387: function(e, n, t) {
            var r = t(809),
                a = t.n(r),
                s = t(30266),
                c = t(78249),
                u = t.n(c),
                i = t(40452),
                o = t.n(i),
                p = t(45957),
                d = t.n(p),
                f = t(11752),
                l = t(84059),
                w = t(91486),
                k = (0, f.default)().publicRuntimeConfig,
                v = u().enc.Base64.parse(k.DECRYPTION_KEY),
                b = u().enc.Base64.parse(k.DECRYPTION_IV),
                x = function(e) {
                    return o().decrypt(e, v, {
                        mode: u().mode.CBC,
                        padding: d(),
                        iv: b
                    }).toString(u().enc.Utf8)
                },
                h = function() {
                    var e = (0, s.Z)(a().mark((function e() {
                        var n;
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (e.prev = 0, window.encryptionKey && window.encryptionIv) {
                                        e.next = 6;
                                        break
                                    }
                                    return e.next = 4, l.Z.get("/productapi/api/rest/v1.3/ghp", {
                                        baseURL: k.PRODUCT_API_URL
                                    });
                                case 4:
                                    "success" === (n = e.sent).data.responseStatus && 200 === n.data.status && (window.encryptionKey = x(n.data.data.sk), window.encryptionIv = x(n.data.data.ik));
                                case 6:
                                    e.next = 11;
                                    break;
                                case 8:
                                    e.prev = 8, e.t0 = e.catch(0), (0, w.default)(e.t0);
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 8]
                        ])
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }();
            n.Z = h
        },
        682: function(e, n, t) {
            t.r(n), t.d(n, {
                default: function() {
                    return k
                }
            });
            var r = t(85893),
                a = t(809),
                s = t.n(a),
                c = t(30266),
                u = t(67294),
                i = t(17563),
                o = t(14494),
                p = t(84059),
                d = t(97254),
                f = t(90817),
                l = t(81993),
                w = t(18387);

            function k() {
                var e = "login",
                    n = "check_loggedin",
                    t = (0, o.v9)((function(e) {
                        return e.userDetails.showSmartLock
                    })),
                    a = function() {
                        var t = (0, c.Z)(s().mark((function t(r, a) {
                            var c, u, i;
                            return s().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        c = "", t.t0 = r, t.next = t.t0 === n ? 4 : "password" === t.t0 ? 6 : t.t0 === e ? 8 : 10;
                                        break;
                                    case 4:
                                        return c = "/control/fnpCheckLogin", t.abrupt("break", 11);
                                    case 6:
                                        return c = "/control/qcl-rj", t.abrupt("break", 11);
                                    case 8:
                                        return c = "/control/lu-rj", t.abrupt("break", 11);
                                    case 10:
                                        return t.abrupt("break", 11);
                                    case 11:
                                        if (t.prev = 11, !a) {
                                            t.next = 19;
                                            break
                                        }
                                        return i = {
                                            "Content-Type": "application/x-www-form-urlencoded"
                                        }, t.next = 16, p.Z.post(c, a, {
                                            headers: i,
                                            withCredentials: !0
                                        });
                                    case 16:
                                        u = t.sent, t.next = 22;
                                        break;
                                    case 19:
                                        return t.next = 21, p.Z.get(c, {
                                            withCredentials: !0
                                        });
                                    case 21:
                                        u = t.sent;
                                    case 22:
                                        if (200 !== u.status) {
                                            t.next = 24;
                                            break
                                        }
                                        return t.abrupt("return", u.data);
                                    case 24:
                                        t.next = 29;
                                        break;
                                    case 26:
                                        throw t.prev = 26, t.t1 = t.catch(11), new Error(t.t1);
                                    case 29:
                                        return t.abrupt("return", "");
                                    case 30:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [11, 26]
                            ])
                        })));
                        return function(e, n) {
                            return t.apply(this, arguments)
                        }
                    }();
                return (0, u.useEffect)((function() {
                    (0, l.RV)() || (0, w.Z)()
                }), []), (0, u.useEffect)((function() {
                    var r = function() {
                        var t = (0, c.Z)(s().mark((function t() {
                            var r, c, u, o, p, w, k, v = arguments;
                            return s().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (r = v.length > 0 && void 0 !== v[0] && v[0], (0, l.ej)("uscnlg") || (0, l.ej)("lgpopsh")) {
                                            t.next = 42;
                                            break
                                        }
                                        return t.next = 4, navigator.credentials.get({
                                            password: !0,
                                            mediation: r ? "silent" : "required"
                                        });
                                    case 4:
                                        if (!(c = t.sent)) {
                                            t.next = 41;
                                            break
                                        }
                                        o = {}, t.t0 = c.type, t.next = "password" === t.t0 ? 10 : 25;
                                        break;
                                    case 10:
                                        if (void 0 !== c.password) {
                                            t.next = 14;
                                            break
                                        }
                                        c.idName = "email", t.next = 24;
                                        break;
                                    case 14:
                                        return t.next = 16, (0, d.Z)(c.id);
                                    case 16:
                                        return o.un = t.sent, t.next = 19, (0, d.Z)(c.password);
                                    case 19:
                                        if (o.pw = t.sent, !o.un || !o.pw) {
                                            t.next = 24;
                                            break
                                        }
                                        return t.next = 23, a(c.type, i.stringify(o));
                                    case 23:
                                        u = t.sent;
                                    case 24:
                                    case 25:
                                        return t.abrupt("break", 26);
                                    case 26:
                                        if (!u) {
                                            t.next = 41;
                                            break
                                        }
                                        if ("undefined" === typeof u.valid || !u.valid) {
                                            t.next = 40;
                                            break
                                        }
                                        return t.next = 30, a(e, i.stringify(o));
                                    case 30:
                                        if (p = t.sent, document.cookie = "lgpopsh=true; path=/", !p.isSuccess || "logged in" !== p.result) {
                                            t.next = 37;
                                            break
                                        }
                                        return t.next = 35, a(n);
                                    case 35:
                                        (w = t.sent).checklogin && (0, f.lu)(w.checklogin.fullname);
                                    case 37:
                                        document.getElementsByName("DONE_PAGE") && document.getElementsByName("DONE_PAGE")[0] ? (k = document.getElementsByName("DONE_PAGE")[0].value, window.location.href = k) : window.location.reload(), t.next = 41;
                                        break;
                                    case 40:
                                        alert("Your saved password is invalid!");
                                    case 41:
                                        document.cookie = "uscnlg=true; path=/";
                                    case 42:
                                        return t.abrupt("return", "");
                                    case 43:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function() {
                            return t.apply(this, arguments)
                        }
                    }();
                    (function() {
                        var e = (0, c.Z)(s().mark((function e() {
                            return s().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        (window.PasswordCredential || window.FederatedCredential) && ((0, l.ej)("uscnlg") || (0, l.ej)("lgpopsh") || (0, l.RV)() && !t || r());
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    })()()
                }), [t]), (0, r.jsx)(r.Fragment, {})
            }
        }
    }
]);
//# sourceMappingURL=682.js.map