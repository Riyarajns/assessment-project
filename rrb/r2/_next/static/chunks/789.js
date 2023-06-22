"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [789], {
        66083: function(e, a, n) {
            var s = n(87462),
                i = n(45987),
                t = n(67294),
                l = (n(45697), n(86010)),
                o = n(52543),
                r = n(22318),
                c = t.forwardRef((function(e, a) {
                    var n = e.children,
                        o = e.classes,
                        c = e.className,
                        p = e.disableTypography,
                        m = void 0 !== p && p,
                        d = (0, i.Z)(e, ["children", "classes", "className", "disableTypography"]);
                    return t.createElement("div", (0, s.Z)({
                        className: (0, l.Z)(o.root, c),
                        ref: a
                    }, d), m ? n : t.createElement(r.Z, {
                        component: "h2",
                        variant: "h6"
                    }, n))
                }));
            a.Z = (0, o.Z)({
                root: {
                    margin: 0,
                    padding: "16px 24px",
                    flex: "0 0 auto"
                }
            }, {
                name: "MuiDialogTitle"
            })(c)
        },
        30789: function(e, a, n) {
            n.r(a);
            var s = n(85893),
                i = (n(67294), n(80366)),
                t = n(41120),
                l = n(52663),
                o = n(66083),
                r = n(17812),
                c = n(29525),
                p = (0, t.Z)((function(e) {
                    return {
                        closeButton: {
                            position: "absolute",
                            right: e.spacing(1),
                            top: e.spacing(1),
                            color: e.palette.grey[500]
                        },
                        title: {
                            textAlign: "center",
                            fontWeight: 500,
                            fontSize: "24px",
                            marginBottom: "12px"
                        },
                        message: {
                            textAlign: "center",
                            fontSize: "18px",
                            marginBottom: "22px"
                        },
                        email: {
                            color: "#2179D0"
                        }
                    }
                }));
            a.default = function(e) {
                var a = e.open,
                    n = e.handleCloseIconClick,
                    t = p();
                return (0, s.jsxs)(l.Z, {
                    open: a,
                    className: t.popup,
                    children: [(0, s.jsx)(o.Z, {
                        children: (0, s.jsx)(r.Z, {
                            "aria-label": "close",
                            onClick: function() {
                                return n("Media")
                            },
                            className: t.closeButton,
                            children: (0, s.jsx)(i.Z, {})
                        })
                    }), (0, s.jsxs)(c.Z, {
                        children: [(0, s.jsx)("div", {
                            className: t.title,
                            children: "Media Enquires"
                        }), (0, s.jsxs)("div", {
                            className: t.message,
                            children: ["Please mail to\xa0", (0, s.jsx)("a", {
                                href: "mailto:pr@fnp.com",
                                className: t.email,
                                children: "pr@fnp.com"
                            }), "\xa0for media queries"]
                        })]
                    })]
                })
            }
        }
    }
]);
//# sourceMappingURL=789.js.map