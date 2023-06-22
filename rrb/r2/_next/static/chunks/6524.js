(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6524], {
        36524: function(e, a, r) {
            "use strict";
            r.r(a);
            var s = r(85893),
                l = (r(67294), r(54768)),
                n = r(81993),
                i = r(45119),
                t = r.n(i);

            function d(e) {
                var a = e.showLoading,
                    r = e.altText,
                    i = (0, n.s2)();
                return (0, s.jsx)("div", {
                    children: a ? (0, s.jsx)(l.Z, {
                        open: !0,
                        children: (0, s.jsx)("div", {
                            className: t().loaderWrapper,
                            children: (0, s.jsx)("img", {
                                src: i ? "/assets/images/full_page_loader-bb.gif" : "/assets/images/full_page_loader.gif",
                                alt: r
                            })
                        })
                    }) : null
                })
            }
            d.defaultProps = {
                altText: "Loading..."
            }, a.default = d
        },
        45119: function(e) {
            e.exports = {
                loaderWrapper: "loader_loaderWrapper__3pzgu"
            }
        }
    }
]);
//# sourceMappingURL=6524.js.map