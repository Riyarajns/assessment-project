(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9673], {
        29673: function(e, s, a) {
            "use strict";
            a.r(s);
            var l = a(85893),
                n = (a(67294), a(14494)),
                o = a(13377),
                r = a.n(o);

            function t(e) {
                var s = e.zoomLensActive,
                    a = (0, n.v9)((function(e) {
                        return e.appConfigs
                    })).assetsUrl,
                    o = (0, n.v9)((function(e) {
                        return e.productDetail
                    })).product.skuCode;
                return (0, l.jsx)(l.Fragment, {
                    children: (0, l.jsxs)("div", {
                        className: r().galleryInfo,
                        children: [(0, l.jsxs)("div", {
                            className: r().subGallery,
                            children: [(0, l.jsx)("span", {
                                className: r().productSkuCode,
                                id: "product-sku-code",
                                children: o
                            }), (0, l.jsx)("span", {
                                className: r().zoomMessage,
                                children: s ? "Click to open expanded view" : "Roll over image to zoom in"
                            })]
                        }), (0, l.jsxs)("div", {
                            className: r().guarantee,
                            children: [(0, l.jsx)("div", {
                                className: r().seal
                            }), (0, l.jsx)("div", {
                                className: r().paymentTrust,
                                children: (0, l.jsxs)("ul", {
                                    children: [(0, l.jsxs)("li", {
                                        children: [(0, l.jsx)("img", {
                                            id: "icon-safe",
                                            src: "".concat(a, "/assets/images/custom/homepage_target/icons/safe.png"),
                                            alt: "100% Safe and Secure Payments"
                                        }), "100% Safe and Secure Payments."]
                                    }), (0, l.jsxs)("li", {
                                        children: [(0, l.jsx)("img", {
                                            id: "icon-trust",
                                            src: "".concat(a, "assets/images/custom/homepage_target/icons/trust.png"),
                                            alt: "6 Million People Trust Us"
                                        }), "6 Million People Trust Us."]
                                    })]
                                })
                            })]
                        })]
                    })
                })
            }
            t.defaultProps = {
                zoomLensActive: !1
            }, s.default = t
        },
        13377: function(e) {
            e.exports = {
                galleryInfo: "gallery-info_galleryInfo__2stsl",
                subGallery: "gallery-info_subGallery__busOa",
                productSkuCode: "gallery-info_productSkuCode__nXY09",
                zoomMessage: "gallery-info_zoomMessage__poJfr",
                guarantee: "gallery-info_guarantee__3TF6B",
                seal: "gallery-info_seal__ZZbCA",
                paymentTrust: "gallery-info_paymentTrust__2e_iV"
            }
        }
    }
]);
//# sourceMappingURL=9673.js.map