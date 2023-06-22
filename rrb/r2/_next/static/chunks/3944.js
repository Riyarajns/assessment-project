(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3944], {
        33901: function(e, r, i) {
            "use strict";
            i.d(r, {
                Z: function() {
                    return _
                }
            });
            var t = i(87462),
                c = i(45987),
                a = i(67294),
                s = (i(45697), i(86010)),
                o = i(52543),
                n = (0, i(63786).Z)(a.createElement("path", {
                    d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                }), "Person");
            var d = a.forwardRef((function(e, r) {
                    var i = e.alt,
                        o = e.children,
                        d = e.classes,
                        _ = e.className,
                        l = e.component,
                        v = void 0 === l ? "div" : l,
                        w = e.imgProps,
                        f = e.sizes,
                        p = e.src,
                        u = e.srcSet,
                        m = e.variant,
                        k = void 0 === m ? "circle" : m,
                        b = (0, c.Z)(e, ["alt", "children", "classes", "className", "component", "imgProps", "sizes", "src", "srcSet", "variant"]),
                        g = null,
                        h = function(e) {
                            var r = e.src,
                                i = e.srcSet,
                                t = a.useState(!1),
                                c = t[0],
                                s = t[1];
                            return a.useEffect((function() {
                                if (r || i) {
                                    s(!1);
                                    var e = !0,
                                        t = new Image;
                                    return t.src = r, t.srcSet = i, t.onload = function() {
                                            e && s("loaded")
                                        }, t.onerror = function() {
                                            e && s("error")
                                        },
                                        function() {
                                            e = !1
                                        }
                                }
                            }), [r, i]), c
                        }({
                            src: p,
                            srcSet: u
                        }),
                        x = p || u,
                        j = x && "error" !== h;
                    return g = j ? a.createElement("img", (0, t.Z)({
                        alt: i,
                        src: p,
                        srcSet: u,
                        sizes: f,
                        className: d.img
                    }, w)) : null != o ? o : x && i ? i[0] : a.createElement(n, {
                        className: d.fallback
                    }), a.createElement(v, (0, t.Z)({
                        className: (0, s.Z)(d.root, d.system, d[k], _, !j && d.colorDefault),
                        ref: r
                    }, b), g)
                })),
                _ = (0, o.Z)((function(e) {
                    return {
                        root: {
                            position: "relative",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            width: 40,
                            height: 40,
                            fontFamily: e.typography.fontFamily,
                            fontSize: e.typography.pxToRem(20),
                            lineHeight: 1,
                            borderRadius: "50%",
                            overflow: "hidden",
                            userSelect: "none"
                        },
                        colorDefault: {
                            color: e.palette.background.default,
                            backgroundColor: "light" === e.palette.type ? e.palette.grey[400] : e.palette.grey[600]
                        },
                        circle: {},
                        rounded: {
                            borderRadius: e.shape.borderRadius
                        },
                        square: {
                            borderRadius: 0
                        },
                        img: {
                            width: "100%",
                            height: "100%",
                            textAlign: "center",
                            objectFit: "cover",
                            color: "transparent",
                            textIndent: 1e4
                        },
                        fallback: {
                            width: "75%",
                            height: "75%"
                        }
                    }
                }), {
                    name: "MuiAvatar"
                })(d)
        },
        79912: function(e, r, i) {
            "use strict";
            var t = i(87462),
                c = i(45987),
                a = i(67294),
                s = (i(45697), i(86010)),
                o = i(52543),
                n = a.forwardRef((function(e, r) {
                    var i = e.classes,
                        o = e.className,
                        n = e.component,
                        d = void 0 === n ? "div" : n,
                        _ = (0, c.Z)(e, ["classes", "className", "component"]);
                    return a.createElement(d, (0, t.Z)({
                        className: (0, s.Z)(i.root, o),
                        ref: r
                    }, _))
                }));
            r.Z = (0, o.Z)({
                root: {
                    padding: 16,
                    "&:last-child": {
                        paddingBottom: 24
                    }
                }
            }, {
                name: "MuiCardContent"
            })(n)
        },
        2753: function(e, r, i) {
            "use strict";
            var t = i(64836);
            r.Z = void 0;
            var c = t(i(67294)),
                a = (0, t(i(2108)).default)(c.default.createElement("path", {
                    d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"
                }), "ChevronRightOutlined");
            r.Z = a
        },
        63803: function(e, r, i) {
            "use strict";
            var t = i(85893),
                c = (i(67294), i(14494)),
                a = i(41749),
                s = i(33901),
                o = i(22318),
                n = i(79912),
                d = i(9174),
                _ = i(45721),
                l = i.n(_),
                v = i(81993),
                w = function(e) {
                    var r = (0, c.v9)((function(e) {
                            return e.appConfigs
                        })).isMobile,
                        i = e.review,
                        _ = e.reviewBoxId,
                        w = e.index,
                        f = i.reviewerName,
                        p = i.overallRating,
                        u = i.reviewText,
                        m = i.deliveryCity,
                        k = i.deliveryOccasion,
                        b = i.createdDateMillis,
                        g = i.productImageLink,
                        h = i.productAlternateText,
                        x = Math.ceil(p / 2),
                        j = (0, v.Sj)(),
                        y = function() {
                            return (0, t.jsxs)(a.Z, {
                                className: l().reviewsLeft,
                                item: !0,
                                sm: 3,
                                md: 3,
                                xs: 3,
                                children: [g ? (0, t.jsx)(s.Z, {
                                    variant: "square",
                                    src: "/assets/images/image_placeholder-bb.png",
                                    alt: h,
                                    imgProps: {
                                        "data-src": g,
                                        className: "lzy_img MuiAvatar-img"
                                    }
                                }) : (0, t.jsx)(s.Z, {
                                    alt: h,
                                    className: "".concat(l()["customer-first-letter"], " ").concat(l()[null === f || void 0 === f ? void 0 : f.slice(0, 1)]),
                                    children: null === f || void 0 === f ? void 0 : f.slice(0, 1)
                                }), !g && (0, t.jsxs)(t.Fragment, {
                                    children: [(0, t.jsx)("div", {
                                        itemScope: !0,
                                        itemProp: "author",
                                        itemType: "http://schema.org/Person",
                                        children: (0, t.jsx)("meta", {
                                            itemProp: "name",
                                            content: f
                                        })
                                    }), (0, t.jsx)(o.Z, {
                                        className: l().customerNameReview,
                                        children: f
                                    })]
                                })]
                            })
                        };
                    return (0, t.jsxs)(t.Fragment, {
                        children: ["product" === j && y(), (0, t.jsx)("div", {
                            className: "".concat(l().reviewBlock, " ").concat(r ? l().mobileReview : l().desktopReview),
                            "data-test": "reviewFeedbackComponent",
                            id: _,
                            index: w,
                            children: (0, t.jsx)("div", {
                                className: l().reviewSection,
                                itemProp: "review",
                                itemScope: !0,
                                itemType: "//schema.org/Review",
                                children: (0, t.jsxs)(a.Z, {
                                    container: !0,
                                    children: ["product" !== j && y(), (0, t.jsxs)(a.Z, {
                                        className: g ? l().reviewsRight : l().reviewsRightPadding,
                                        item: !0,
                                        sm: "product" === j ? 12 : 9,
                                        md: "product" === j ? 12 : 9,
                                        xs: "product" === j ? 12 : 9,
                                        children: [(0, t.jsx)(d.Z, {
                                            ratingValue: x
                                        }), (0, t.jsxs)(n.Z, {
                                            className: l().review,
                                            children: [(0, t.jsxs)(o.Z, {
                                                className: g ? l().message : l().reviewMessage,
                                                itemProp: "description",
                                                children: ['"', u, "\u201c"]
                                            }), g && (0, t.jsxs)(t.Fragment, {
                                                children: [(0, t.jsx)("div", {
                                                    itemScope: !0,
                                                    itemProp: "author",
                                                    itemType: "http://schema.org/Person",
                                                    children: (0, t.jsx)("meta", {
                                                        itemProp: "name",
                                                        content: f
                                                    })
                                                }), (0, t.jsx)(o.Z, {
                                                    className: l().customerName,
                                                    children: "- ".concat(null !== f && void 0 !== f ? f : "")
                                                })]
                                            }), (0, t.jsx)(o.Z, {
                                                className: g ? l().deliveryDate : l().reviewDeliveryDate,
                                                itemProp: "datePublished",
                                                children: function(e) {
                                                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "/",
                                                        i = "";
                                                    if (e) {
                                                        var t = new Date(e),
                                                            c = t.getFullYear(),
                                                            a = t.getMonth() + 1,
                                                            s = a < 9 ? "0".concat(a) : a,
                                                            o = t.getDate(),
                                                            n = t.toLocaleString("en-US", {
                                                                hour: "numeric",
                                                                minute: "numeric",
                                                                hour12: !0
                                                            }),
                                                            d = "".concat(o).concat(r).concat(s).concat(r).concat(c);
                                                        i = "".concat(d, ", ").concat(n, " ")
                                                    }
                                                    return i
                                                }(b)
                                            }), (0, t.jsx)(o.Z, {
                                                className: "".concat(l()["delivery-area"], " ").concat(l()["other-info"]),
                                                children: "Delivered At: ".concat(null !== m && void 0 !== m ? m : "")
                                            }), (0, t.jsx)(o.Z, {
                                                className: "".concat(l().occasion, " ").concat(l()["other-info"]),
                                                children: "Occasion: ".concat(null !== k && void 0 !== k ? k : "")
                                            })]
                                        })]
                                    })]
                                })
                            })
                        })]
                    })
                };
            w.defaultProps = {
                review: {},
                reviewBoxId: "",
                index: 0
            }, r.Z = w
        },
        93944: function(e, r, i) {
            "use strict";
            i.r(r);
            var t = i(92809),
                c = i(85893),
                a = (i(67294), i(46066)),
                s = i(2753),
                o = i(63803),
                n = i(12326),
                d = i.n(n),
                _ = i(74785),
                l = i.n(_);

            function v(e, r) {
                var i = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(e);
                    r && (t = t.filter((function(r) {
                        return Object.getOwnPropertyDescriptor(e, r).enumerable
                    }))), i.push.apply(i, t)
                }
                return i
            }

            function w(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var i = null != arguments[r] ? arguments[r] : {};
                    r % 2 ? v(Object(i), !0).forEach((function(r) {
                        (0, t.Z)(e, r, i[r])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : v(Object(i)).forEach((function(r) {
                        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(i, r))
                    }))
                }
                return e
            }

            function f(e) {
                var r = e.className,
                    i = e.onClick;
                return (0, c.jsx)("div", {
                    role: "presentation",
                    className: r,
                    onClick: i
                })
            }

            function p(e) {
                var r = e.className,
                    i = e.onClick;
                return (0, c.jsx)("div", {
                    role: "presentation",
                    className: r,
                    onClick: i
                })
            }
            var u = {
                    dots: !1,
                    infinite: !1,
                    speed: 500,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    nextArrow: (0, c.jsx)(f, {}),
                    prevArrow: (0, c.jsx)(p, {})
                },
                m = function(e) {
                    var r = e.reviews,
                        i = e.reviewsModuleRef,
                        t = r.length;
                    return (0, c.jsx)("div", {
                        className: d().productListingWrapper,
                        ref: i,
                        children: (0, c.jsxs)("div", {
                            className: "".concat(d().productListing, " ").concat(d().reviewWrapper),
                            children: [(0, c.jsx)("h3", {
                                className: "".concat(d().suggestions, " ").concat(d().reviewHeading),
                                children: "What customers are saying"
                            }), (0, c.jsx)("div", {
                                className: "".concat(d().reviewSection, " ").concat(d().productSection),
                                children: (0, c.jsx)("div", {
                                    className: "".concat(d().listing, " ").concat(l()["slick-wrapper"]),
                                    children: (0, c.jsx)(a.Z, w(w({}, u), {}, {
                                        children: r.map((function(e, r) {
                                            var i = {
                                                reviewerName: e.reviewerName || "",
                                                overallRating: e.overallRating || null,
                                                reviewText: e.reviewText || "",
                                                deliveryCity: e.deliveryCity || "",
                                                deliveryOccasion: e.deliveryOccasion || "",
                                                createdDateMillis: e.createdDateMillis || "",
                                                productImageLink: e.productImageLink || "",
                                                productAlternateText: e.productAlternateText || "",
                                                redirectionUrl: e.redirectionUrl || ""
                                            };
                                            return r === t - 1 && t > 11 ? (0, c.jsx)("div", {
                                                className: "desktop-reviewBlock",
                                                "data-test": "reviewFeedbackComponent",
                                                children: (0, c.jsx)("a", {
                                                    href: i.redirectionUrl,
                                                    children: (0, c.jsx)("div", {
                                                        className: d()["all-review"],
                                                        children: (0, c.jsxs)("div", {
                                                            className: "".concat(d()["customer-review"], " ").concat(d()["see-more"]),
                                                            children: [(0, c.jsx)("span", {
                                                                className: d()["view-all"],
                                                                children: "VIEW ALL REVIEWS"
                                                            }), (0, c.jsx)(s.Z, {
                                                                className: d()["arrow-right"]
                                                            })]
                                                        })
                                                    })
                                                })
                                            }, "view-all-review") : (0, c.jsx)("div", {
                                                className: "review",
                                                children: (0, c.jsx)(o.Z, {
                                                    review: i
                                                })
                                            }, e.identifier)
                                        }))
                                    }))
                                })
                            })]
                        })
                    })
                };
            f.defaultProps = {
                className: "",
                onClick: function() {}
            }, p.defaultProps = {
                className: "",
                onClick: function() {}
            }, m.defaultProps = {
                reviews: []
            }, r.default = m
        },
        45721: function(e) {
            e.exports = {
                "reviews-section": "review-feedback_reviews-section__XrH9r",
                reviewSection: "review-feedback_reviewSection__9VlBr",
                customerName: "review-feedback_customerName__ozNXJ",
                "MuiCard-root": "review-feedback_MuiCard-root__3Pj2J",
                "reviews-block": "review-feedback_reviews-block__Tgj_F",
                reviewsLeft: "review-feedback_reviewsLeft__1amC-",
                customerNameReview: "review-feedback_customerNameReview__DBX_f",
                "customer-first-letter": "review-feedback_customer-first-letter__3kFbz",
                reviewsRight: "review-feedback_reviewsRight__3IttV",
                reviewsRightPadding: "review-feedback_reviewsRightPadding__1gQqP",
                reviewBlock: "review-feedback_reviewBlock__3nf5e",
                "product-rating-plp": "review-feedback_product-rating-plp__3UHq0",
                "product-rating-pdp": "review-feedback_product-rating-pdp__LDtuS",
                review: "review-feedback_review__1rxG5",
                "MuiCardContent-root": "review-feedback_MuiCardContent-root__3_qlF",
                message: "review-feedback_message__2WL6w",
                reviewMessage: "review-feedback_reviewMessage__130dx",
                "MuiTypography-body1": "review-feedback_MuiTypography-body1__2ucdz",
                deliveryDate: "review-feedback_deliveryDate__kzUKg",
                reviewDeliveryDate: "review-feedback_reviewDeliveryDate__3nxk3",
                "other-info": "review-feedback_other-info__3mGIb",
                "stars-plp": "review-feedback_stars-plp__3SI4Y",
                "stars-pdp": "review-feedback_stars-pdp__39PEq",
                "all-review": "review-feedback_all-review__zW3IG",
                "see-more": "review-feedback_see-more__2W3mB",
                reviewHeading: "review-feedback_reviewHeading__2sKFI",
                desktopReview: "review-feedback_desktopReview__2ZMEH",
                mobileReview: "review-feedback_mobileReview__3PEA3",
                "delivery-area": "review-feedback_delivery-area__3hFlG",
                occassion: "review-feedback_occassion__3BXYw",
                "delivery-date": "review-feedback_delivery-date__fUvZm",
                occasion: "review-feedback_occasion__2d_Ci",
                A: "review-feedback_A__2I_bk",
                a: "review-feedback_a__34a_0",
                B: "review-feedback_B__3up7i",
                b: "review-feedback_b__3U2Lj",
                C: "review-feedback_C__JkBpD",
                c: "review-feedback_c__2N1x4",
                D: "review-feedback_D__2sd_1",
                d: "review-feedback_d__1SS9_",
                E: "review-feedback_E__3FyXY",
                e: "review-feedback_e__1oZ5l",
                F: "review-feedback_F__3gsHy",
                f: "review-feedback_f__2c94q",
                G: "review-feedback_G__1PfVb",
                g: "review-feedback_g__2Kq4c",
                H: "review-feedback_H__1AjaZ",
                h: "review-feedback_h__1M-au",
                I: "review-feedback_I__1zFqn",
                i: "review-feedback_i__yU9Mx",
                J: "review-feedback_J__3IXPv",
                j: "review-feedback_j__2pFxV",
                K: "review-feedback_K__qEfWJ",
                k: "review-feedback_k__11xz0",
                L: "review-feedback_L__1MSO8",
                l: "review-feedback_l__2mHDs",
                M: "review-feedback_M__23RdZ",
                m: "review-feedback_m__2thKS",
                N: "review-feedback_N__35vem",
                n: "review-feedback_n__321bI",
                O: "review-feedback_O__Ctk5s",
                o: "review-feedback_o__3SAfW",
                P: "review-feedback_P__1Bb-v",
                p: "review-feedback_p__3LKJj",
                Q: "review-feedback_Q__3suQ5",
                q: "review-feedback_q__TEkEn",
                R: "review-feedback_R__1Z0Vk",
                r: "review-feedback_r__2K0gl",
                S: "review-feedback_S__2H4wg",
                s: "review-feedback_s__2xU9T",
                T: "review-feedback_T__2qB_h",
                t: "review-feedback_t__3O2Z-",
                U: "review-feedback_U___b8lz",
                u: "review-feedback_u__SExcW",
                V: "review-feedback_V__3UJiy",
                v: "review-feedback_v__21rHQ",
                W: "review-feedback_W__behL5",
                w: "review-feedback_w__1CQf6",
                X: "review-feedback_X__1r_AC",
                x: "review-feedback_x__1b0Ld",
                Y: "review-feedback_Y__35PbI",
                y: "review-feedback_y__3z3Iv",
                Z: "review-feedback_Z__2W_Wg",
                z: "review-feedback_z__rRFvP"
            }
        },
        12326: function(e) {
            e.exports = {
                productListingWrapper: "desktop-product-listing_productListingWrapper__CLUiH",
                productListing: "desktop-product-listing_productListing__RnB3k",
                suggestions: "desktop-product-listing_suggestions__10Ppk",
                reviewHeading: "desktop-product-listing_reviewHeading__17Hhq",
                reviewSection: "desktop-product-listing_reviewSection__1LqH9",
                productSection: "desktop-product-listing_productSection__3NxRd",
                listing: "desktop-product-listing_listing__3OOFA",
                recentListing: "desktop-product-listing_recentListing__YAj-E",
                recentList: "desktop-product-listing_recentList__Z1_z9",
                productItem: "desktop-product-listing_productItem__1pLSP",
                reviewWrapper: "desktop-product-listing_reviewWrapper__3ZoUH",
                "see-more": "desktop-product-listing_see-more__2HIwI",
                "arrow-right": "desktop-product-listing_arrow-right__Dko4V",
                "view-all": "desktop-product-listing_view-all__15Oz8",
                "all-review": "desktop-product-listing_all-review__UDxEX"
            }
        }
    }
]);
//# sourceMappingURL=3944.js.map