"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6428], {
        16428: function(t, o, n) {
            n.r(o);
            var e = n(85893),
                s = n(67294),
                l = n(35025);
            o.default = function() {
                function t() {
                    var t, o;
                    window.scrollY > 50 ? null === (t = document.getElementById("top-button")) || void 0 === t || t.classList.add("show") : null === (o = document.getElementById("top-button")) || void 0 === o || o.classList.remove("show")
                }
                return (0, s.useEffect)((function() {
                    return window.addEventListener("scroll", t),
                        function() {
                            return window.removeEventListener("scroll", t)
                        }
                })), (0, e.jsxs)("span", {
                    id: "top-button",
                    className: "top-button",
                    "data-testid": "goToScrollTopButton",
                    role: "presentation",
                    onClick: function() {
                        window.scrollTo({
                            behavior: "smooth",
                            top: 0
                        })
                    },
                    children: [(0, e.jsx)("button", {
                        className: "scroll-top",
                        type: "button",
                        name: "scroll-btn",
                        children: (0, e.jsx)(l.Z, {})
                    }), (0, e.jsx)("span", {
                        children: "Go to top"
                    })]
                })
            }
        }
    }
]);
//# sourceMappingURL=6428.js.map