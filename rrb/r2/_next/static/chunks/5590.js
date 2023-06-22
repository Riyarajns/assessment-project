(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5590], {
        82182: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(85893),
                a = n(92809),
                o = n(67294),
                i = n(14494),
                s = n(39803),
                l = n(998),
                c = n(22573),
                u = n(37667),
                p = n.n(u),
                d = n(74661);

            function f(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function v(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? f(Object(n), !0).forEach((function(t) {
                        (0, a.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function m(e) {
                var t = e.allowedMediaType,
                    n = e.fieldName,
                    u = e.label,
                    f = e.maxSize,
                    m = e.required,
                    _ = e.showErrorMsg,
                    b = e.indexNumber,
                    x = e.defaultAnimate,
                    h = e.customizeProps,
                    g = e.minInputRequired,
                    z = (0, o.useState)(""),
                    O = z[0],
                    N = z[1],
                    P = (0, o.useState)(!1),
                    j = P[0],
                    S = P[1],
                    w = (0, o.useState)(f),
                    y = w[0],
                    C = w[1],
                    k = (0, o.useContext)(c.NP),
                    E = k.handleTextPersonalization,
                    I = k.personalizedInputRef,
                    T = k.errors,
                    M = k.setErrors,
                    D = k.isShippingTimeSlotSelected,
                    W = k.isPincodeEntered,
                    F = k.extractPersonalization,
                    R = k.userPersonalization,
                    Z = k.isFirstValidationDone,
                    B = (0, o.useState)(x),
                    X = B[0],
                    q = B[1],
                    A = (0, i.v9)((function(e) {
                        return e.appConfigs
                    })).isMobile;
                (0, o.useEffect)((function() {
                    var e, t = F(n);
                    if (t.havePersonalizations) {
                        if ("TEXT" === (null === (e = t.personalization) || void 0 === e ? void 0 : e.contentType)) {
                            var r, a = null === (r = t.personalization) || void 0 === r ? void 0 : r.value[b];
                            a && N(a)
                        }
                    } else N("")
                }), []), (0, o.useEffect)((function() {
                    F(n).havePersonalizations || R.length === b && N("")
                }), [R]), (0, o.useEffect)((function() {
                    var e = O.length;
                    C(f - e)
                }), [f, O]);
                var J = {},
                    Y = {},
                    G = "";
                Number(f) > 25 && (J = {
                    multiline: !0,
                    rows: 4,
                    className: "multiline-textfield"
                }, G = "long-text");
                var V = W() ? "" : "disableSelectInput",
                    H = D() ? "" : "disableSelectInput",
                    K = O ? "valid-input" : "",
                    L = A ? "" : p().desktopMsgOnCake;
                return A || (Y = {
                    multiline: !0,
                    rowsMax: 2
                }), (0, o.useEffect)((function() {
                    D() || q(!0)
                }), [X, D]), (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)("div", {
                        className: "".concat(p().msgOnCakeWrapper, " ").concat(D() && X ? p().animate : "", " ").concat(L, " ").concat(K, " ").concat(A ? V : H, " ").concat(T[n] && b <= Number(g) - 1 && !j && !O ? "".concat(p().invalidInputNoShadow, " invalid-input") : ""),
                        ref: I,
                        children: [(0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)("span", {
                                className: "".concat(p().characterCount, " ").concat(G, " text-count"),
                                children: y
                            }), (0, r.jsx)(s.Z, v(v(v({
                                error: !0,
                                value: O,
                                name: n,
                                id: n,
                                label: "".concat(b <= Number(g) - 1 && "Y" === m ? "*" : "", " ").concat(u),
                                inputProps: {
                                    "data-multiupload-id": b <= Number(g) - 1 && "Y" === m ? "".concat(n, "-").concat(b) : ""
                                },
                                variant: "outlined",
                                accept: t,
                                onChange: function(t) {
                                    var r = t.target.value;
                                    if (l.Z.alphaNumericWithSpecialChar.test(r)) {
                                        var o;
                                        !r && Z && M(v(v({}, T), {}, (0, a.Z)({}, n, !0)));
                                        var i = (null === (o = F(n).personalization) || void 0 === o ? void 0 : o.value) || [];
                                        if (r.length > f) return N(r.substr(0, f)), C(0), i[b] = r.substr(0, f), E(i, e), "";
                                        var s = r.length,
                                            c = f - s;
                                        return N(r), C(c), i[b] = r, E(i, e), ""
                                    }
                                    return ""
                                },
                                onFocus: function() {
                                    S(!0)
                                },
                                onBlur: function() {
                                    S(!1), q(!1)
                                },
                                disabled: A ? !W() : !D()
                            }, Y), J), h))]
                        }), T.personalisedTooltip && !j && !A && !O && (0, r.jsx)(d.default, {
                            color: "black",
                            value: "Enter personalized text to continue"
                        })]
                    }), T[n] && !j && T.message && (A || _) && b <= Number(g) - 1 && !O && (0, r.jsx)("div", {
                        className: "".concat(p().errorText, " error-text"),
                        children: T.message
                    })]
                })
            }
            m.defaultProps = {
                showErrorMsg: !1,
                indexNumber: 0,
                customizeProps: {},
                defaultAnimate: !0
            }, t.default = m
        },
        37667: function(e) {
            e.exports = {
                msgOnCakeWrapper: "personalized-text_msgOnCakeWrapper__1Xwjy",
                characterCount: "personalized-text_characterCount__2XJR_",
                "long-text": "personalized-text_long-text__3pN6R",
                invalidInputNoShadow: "personalized-text_invalidInputNoShadow__14uzb",
                errorText: "personalized-text_errorText__glhv5",
                desktopMsgOnCake: "personalized-text_desktopMsgOnCake__3g3J6",
                validInput: "personalized-text_validInput__2c_Wu",
                animate: "personalized-text_animate__4yCdy",
                focuses: "personalized-text_focuses__33BBt",
                disableSelectInput: "personalized-text_disableSelectInput__3Gy3P"
            }
        }
    }
]);
//# sourceMappingURL=5590.js.map