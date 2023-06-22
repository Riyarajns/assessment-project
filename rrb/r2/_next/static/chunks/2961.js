(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2961], {
        44152: function(e, t, n) {
            "use strict";
            var s = n(64836);
            t.Z = void 0;
            var c = s(n(67294)),
                i = (0, s(n(2108)).default)(c.default.createElement("path", {
                    d: "M22 5.7l-4.6-3.9-1.3 1.5 4.6 3.9L22 5.7zM7.9 3.4L6.6 1.9 2 5.7l1.3 1.5 4.6-3.8zM12.5 8H11v6l4.7 2.9.8-1.2-4-2.4V8zM12 4c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7z"
                }), "AccessAlarms");
            t.Z = i
        },
        52961: function(e, t, n) {
            "use strict";
            n.r(t);
            var s = n(85893),
                c = n(67294),
                i = n(14494),
                r = n(44152),
                a = n(81993),
                o = n(22573),
                u = n(79834),
                m = n.n(u);
            t.default = function(e) {
                var t = e.deliveryTimeLeft,
                    n = (0, c.useState)(null),
                    u = n[0],
                    l = n[1],
                    f = (0, c.useState)(""),
                    d = f[0],
                    _ = f[1],
                    p = (0, c.useContext)(o.NP),
                    h = p.isCourierDelivery,
                    C = p.checkIsInternationalProduct,
                    v = t.currentTimestamp,
                    T = t.cutoffTimestamp,
                    k = t.deliveryDate,
                    w = (0, c.useCallback)((function(e) {
                        e > 0 && (l((0, a.mC)(e)), setTimeout((function() {
                            w(e - 1e3)
                        }), 1e3))
                    }), []);
                (0, c.useEffect)((function() {
                    var e = (0, a.$O)(v),
                        t = (0, a.$O)(k),
                        n = e.getTime(),
                        s = (0, a.$O)(T).getTime();
                    w(s - n);
                    var c = (0, a.zi)(e, t);
                    _(c)
                }), [v, T, k, w]);
                var x = (0, i.v9)((function(e) {
                    return e.appConfigs
                })).isMobile;
                return (0, s.jsx)(s.Fragment, {
                    children: !h() && !C() && u && (0, s.jsx)(s.Fragment, {
                        children: x ? (0, s.jsxs)("div", {
                            className: m().cutOffTimer,
                            children: [(0, s.jsx)("span", {
                                className: m().dayClass,
                                children: "Get ".concat(d, "! Order within")
                            }), (0, s.jsx)("span", {
                                className: m().timerClass,
                                children: "".concat(u, "  Hrs")
                            })]
                        }) : (0, s.jsxs)("div", {
                            className: m().cutOffTimerDesktop,
                            children: [(0, s.jsx)("span", {
                                className: m().clockIcon,
                                children: (0, s.jsx)(r.Z, {})
                            }), (0, s.jsx)("span", {
                                className: m().dayClass,
                                children: "Get ".concat(d, "! Order within ").concat(u, " Hrs.")
                            })]
                        })
                    })
                })
            }
        },
        79834: function(e) {
            e.exports = {
                "m-cutoff-timer": "countdown-timer_m-cutoff-timer__1QoC9",
                cutOffTimer: "countdown-timer_cutOffTimer__1IQyr",
                "buttons-fixed-position": "countdown-timer_buttons-fixed-position__1nWU6",
                cutOfTimer: "countdown-timer_cutOfTimer__1TCAE",
                timerClass: "countdown-timer_timerClass__2J2K8",
                dayClass: "countdown-timer_dayClass__3Puz5",
                "material-icons": "countdown-timer_material-icons__DU1FQ",
                cutOffTimerDesktop: "countdown-timer_cutOffTimerDesktop__2CtW2",
                clockIcon: "countdown-timer_clockIcon__21khh"
            }
        }
    }
]);
//# sourceMappingURL=2961.js.map