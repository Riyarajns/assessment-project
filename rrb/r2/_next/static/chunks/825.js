(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [825], {
        50825: function(e, t, o) {
            "use strict";
            o.r(t);
            var n = o(85893),
                r = o(92809),
                i = o(41120),
                a = o(67294),
                l = o(32699),
                m = o.n(l),
                c = o(94862);

            function s(e, t) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), o.push.apply(o, n)
                }
                return o
            }

            function d(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? s(Object(o), !0).forEach((function(t) {
                        (0, r.Z)(e, t, o[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : s(Object(o)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                    }))
                }
                return e
            }
            var u = (0, i.Z)({
                    containerImg: {
                        width: "428px",
                        height: "428px",
                        backgroundSize: "cover",
                        backgroundImage: 'url("'.concat(c.Z.placeholderImgUrl, '")')
                    }
                }),
                g = function(e) {
                    var t = e.originalImage,
                        o = e.zoomedImage,
                        r = e.productName || "",
                        i = (0, a.useRef)(null),
                        l = u(),
                        s = c.Z.placeholderImgUrl,
                        g = (0, a.useState)({
                            width: 428,
                            height: 428,
                            zoomWidth: 617,
                            zoomHeight: 600,
                            lazyLoad: !0,
                            offset: {
                                vertical: 0,
                                horizontal: 10
                            },
                            scale: 1.5,
                            zoomLensStyle: "cursor:pointer;overflow: hidden; transform: translateZ(0px); opacity: 0.4; zoom: 1; width: 199.733px; height: 171.2px; background-color: white; border: 1px solid #888; background-repeat: no-repeat;box-shadow: 0 0px 10px 0 rgba(0, 0, 0, 0.4);",
                            zoomStyle: "overflow: hidden; text-align: center; width: 617px; height: 600px; float: left; border: 1px solid rgb(204, 204, 204); background-repeat: no-repeat; right:0;"
                        }),
                        h = g[0],
                        p = g[1];
                    return (0, a.useMemo)((function() {
                        return p((function(e) {
                            return d(d({}, e), {}, {
                                img: o,
                                placeHolderImage: s
                            })
                        }))
                    }), [o, s]), (0, a.useEffect)((function() {
                        var e;
                        return i.current && (e = new(m())(i.current, JSON.parse(JSON.stringify(h)))).setup(),
                            function() {
                                e.kill(), e = void 0
                            }
                    }), [h]), (0, n.jsx)(n.Fragment, {
                        children: (0, n.jsx)("div", {
                            id: "original-image-wrapper",
                            className: l.containerImg,
                            ref: i,
                            children: (0, n.jsx)("img", {
                                id: "original-image",
                                loading: "eager",
                                src: t,
                                alt: r,
                                width: 428,
                                height: 428
                            })
                        })
                    })
                };
            t.default = g, g.defaultProps = {
                originalImage: "",
                zoomedImage: "",
                productName: ""
            }
        },
        32699: function(e, t, o) {
            var n, r, i = o(61682),
                a = o(53848),
                l = o(83115);

            function m(e, t) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), o.push.apply(o, n)
                }
                return o
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? m(Object(o), !0).forEach((function(t) {
                        i(e, t, o[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : m(Object(o)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                    }))
                }
                return e
            }
            n = this, r = function() {
                return function(e, t) {
                    var o = t;
                    if (o.lazyLoad = !0, e) {
                        var n = {
                                sourceImg: {
                                    element: null,
                                    width: 0,
                                    height: 0,
                                    naturalWidth: 0,
                                    naturalHeight: 0
                                },
                                zoomedImgOffset: {
                                    vertical: 0,
                                    horizontal: 0
                                },
                                zoomedImg: {
                                    element: null,
                                    width: 0,
                                    height: 0
                                },
                                zoomLens: {
                                    element: null,
                                    width: 0,
                                    height: 0
                                }
                            },
                            r = function(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                    o = null === e || void 0 === e ? void 0 : e.style,
                                    n = o.cssText,
                                    r = void 0 === n ? "" : n,
                                    i = e,
                                    a = [];
                                Object.keys(t).forEach((function(e) {
                                    a.push("".concat(e, " : ").concat(t[e], " ;"))
                                })), a = [r].concat(l(a)).join(" "), i.style.cssText = a
                            },
                            i = document.createElement("div");
                        i.id = "zoomed-image";
                        var m, s, d, u = document.createElement("div");
                        u.id = "zoomed-image-lens", n.zoomedImgOffset = {
                            vertical: o.offset && o.offset.vertical ? o.offset.vertical : 0,
                            horizontal: o.offset && o.offset.horizontal ? o.offset.horizontal : 0
                        }, n.zoomPosition = o.zoomPosition || "right", n.zoomContainer = o.zoomContainer ? o.zoomContainer : e;
                        var g = {
                            handleEvent: function(e) {
                                switch (e.type) {
                                    case "mousemove":
                                        return g.handleMouseMove(e);
                                    case "mouseenter":
                                        return g.handleMouseEnter(e);
                                    case "mouseleave":
                                        return g.handleMouseLeave(e);
                                    case "scroll":
                                        return g.handleScroll(e);
                                    default:
                                        return null
                                }
                            },
                            handleMouseMove: function(e) {
                                var t, o, r, i;
                                d && (t = f(e.clientX - d.left), r = (o = z(e.clientY - d.top)) * s, i = "-".concat(t * m, "px -").concat(r, "px"), n.zoomedImg.element.style.backgroundPosition = i, n.zoomLens.element.style.cssText += "transform: translate(".concat(t, "px,").concat(o, "px);display: block;left:0px;top:0px;"))
                            },
                            handleMouseEnter: function() {
                                var e = {
                                    position: "absolute",
                                    top: 0,
                                    transform: "translateX(100%)",
                                    "background-size": "cover",
                                    overflow: "hidden",
                                    width: "".concat(o.zoomWidth, "px"),
                                    height: "".concat(o.zoomHeight, "px"),
                                    border: "1px solid rgb(204, 204, 204)",
                                    "background-repeat": "no-repeat",
                                    right: 0,
                                    "background-position": "center"
                                };
                                o.lazyLoad && !n.sourceImg.element.src ? (n.sourceImg.element.src = o.img, e["background-image"] = "url(".concat(o.placeHolderImage, ")")) : (e["background-image"] = "url(".concat(o.img, ")"), e["background-size"] = "".concat(1500, "px ", 1500, "px")), e.display = "block", r(n.zoomedImg.element, e), n.zoomLens.element.style.display = "block"
                            },
                            handleMouseLeave: function() {
                                n.zoomedImg.element.style.display = "none", n.zoomLens.element.style.display = "none"
                            },
                            handleScroll: function() {
                                d = h(n.smallImage), g.handleMouseLeave()
                            }
                        };
                        return I(), n.sourceImg.element.complete && n.sourceImg.element.naturalWidth > 0 ? v() : n.sourceImg.element.onload = v, {
                            setup: function() {
                                I()
                            },
                            kill: function() {
                                b()
                            },
                            _getInstanceInfo: function() {
                                return {
                                    setup: I,
                                    kill: b,
                                    onSourceImgLoad: v,
                                    data: n,
                                    options: o
                                }
                            }
                        }
                    }

                    function h(e) {
                        if (e) {
                            var t = e.getBoundingClientRect();
                            return {
                                left: t.left,
                                top: t.top
                            }
                        }
                        return {
                            left: 0,
                            top: 0
                        }
                    }

                    function p(e, t, o) {
                        return function(e, t, o) {
                            return e < t ? t : e > o ? o : e
                        }(e, t, o) - t
                    }

                    function f(e) {
                        var t, r = n.zoomLens.width / 2;
                        return p(e, r, (t = r, o.width - t))
                    }

                    function z(e) {
                        var t, r = n.zoomLens.height / 2;
                        return p(e, r, (t = r, o.height - t))
                    }

                    function v() {
                        o.height = o.height || n.sourceImg.element.height;
                        var e = o.fillContainer ? "100%" : "".concat(o.height, "px");
                        o.width = o.width || n.sourceImg.element.width;
                        var t = o.fillContainer ? "100%" : "".concat(o.width, "px");
                        r(n.sourceImg.element, {
                                height: e,
                                width: t
                            }),
                            function(e, t) {
                                var o = t,
                                    n = {
                                        width: e.scale && "".concat(e.width * e.scale, "px") || e.zoomWidth && "".concat(e.zoomWidth, "px") || "100%",
                                        height: e.scale && "".concat(e.height * e.scale, "px") || e.zoomWidth && o.sourceImg.element.style.height || "100%"
                                    };
                                r(o.zoomedImg.element, n)
                            }(o, n), n.sourceImg.naturalWidth = 1500, n.sourceImg.naturalHeight = 1500, n.zoomedImg.element.style.backgroundSize = "".concat(n.sourceImg.naturalWidth, "px ").concat(n.sourceImg.naturalHeight, "px"), o.zoomStyle && (n.zoomedImg.element.style.cssText += o.zoomStyle), o.zoomLensStyle ? n.zoomLens.element.style.cssText += o.zoomLensStyle : r(n.zoomLens.element, {
                                opacity: "0.4",
                                background: "white"
                            }), m = n.sourceImg.naturalWidth / o.width, s = n.sourceImg.naturalHeight / o.height, d = h(n.smallImage), o.scale ? (n.zoomLens.width = o.width / (n.sourceImg.naturalWidth / (o.width * o.scale)), n.zoomLens.height = o.height / (n.sourceImg.naturalHeight / (o.height * o.scale))) : o.zoomWidth ? (n.zoomLens.width = o.zoomWidth / m, n.zoomLens.height = o.height / s) : (n.zoomLens.width = n.zoomedImg.element.clientWidth / m, n.zoomLens.height = n.zoomedImg.element.clientHeight / s, n.zoomedImg.element.style.display = "none");
                        var i = {
                            position: "absolute",
                            width: "".concat(n.zoomLens.width, "px"),
                            height: "".concat(n.zoomLens.height, "px")
                        };
                        r(n.zoomLens.element, i), n.zoomLens.element.pointerEvents = "none"
                    }

                    function I() {
                        if (e.children[0] && "IMG" === e.children[0].nodeName) {
                            var t = a(e.children, 1)[0];
                            n.smallImage = t
                        }
                        if (o.img) {
                            var l = document.createElement("img");
                            l.id = "main-source-img", o.lazyLoad || (l.src = o.img), n.sourceImg.element || (n.sourceImg.element = e.appendChild(l))
                        } else {
                            var m = a(e.children, 1)[0];
                            n.sourceImg.element = m, "IMG" !== n.sourceImg.element.nodeName && (n.sourceImg.element = n.sourceImg.element.querySelector("img"))
                        }
                        o = o || {}, e.style.position = "relative";
                        var s = o.width ? "".concat(o.width, "px") : "auto",
                            d = o.height ? "".concat(o.height, "px") : "auto";
                        r(n.sourceImg.element, {
                            width: o.fillContainer ? "100%" : s,
                            height: o.fillContainer ? "100%" : d
                        }), n.zoomLens.element = e.appendChild(u), n.zoomLens.element.style.display = "none", n.zoomLens.element.classList.add("js-image-zoom__zoomed-area"), n.zoomedImg.element = n.zoomContainer.appendChild(i), n.zoomedImg.element.classList.add("js-image-zoom__zoomed-image");
                        var h = {
                            "background-color": "white",
                            "background-repeat": "no-repeat",
                            display: "none",
                            position: "absolute"
                        };
                        switch (n.zoomPosition) {
                            case "left":
                                h = c(c({}, h), {}, {
                                    top: "".concat(n.zoomedImgOffset.vertical, "px"),
                                    left: "".concat(n.zoomedImgOffset.horizontal - 2 * n.zoomedImgOffset.horizontal, "px"),
                                    transform: "translateX(-100%)"
                                });
                                break;
                            case "top":
                                h = c(c({}, h), {}, {
                                    top: "".concat(n.zoomedImgOffset.vertical - 2 * n.zoomedImgOffset.vertical, "px"),
                                    left: "calc(50% + ".concat(n.zoomedImgOffset.horizontal, "px)"),
                                    transform: "translate3d(-50%, -100%, 0)"
                                });
                                break;
                            case "bottom":
                                h = c(c({}, h), {}, {
                                    bottom: "".concat(n.zoomedImgOffset.vertical - 2 * n.zoomedImgOffset.vertical, "px"),
                                    left: "calc(50% + ".concat(n.zoomedImgOffset.horizontal, "px)"),
                                    transform: "translate3d(-50%, 100%, 0)"
                                });
                                break;
                            case "original":
                                h = c(c({}, h), {}, {
                                    top: "0px",
                                    left: "0px"
                                });
                                break;
                            default:
                                h = c(c({}, h), {}, {
                                    top: "".concat(n.zoomedImgOffset.vertical, "px"),
                                    right: "0px",
                                    transform: "translateX(100%)"
                                })
                        }
                        return r(n.zoomedImg.element, h), e.addEventListener("mousemove", g, !1), e.addEventListener("mouseenter", g, !1), e.addEventListener("mouseleave", g, !1), n.zoomLens.element.addEventListener("mouseenter", g, !1), n.zoomLens.element.addEventListener("mouseleave", g, !1), window.addEventListener("scroll", g, !1), n.smallImage && (n.sourceImg.element.style.display = "none"), n
                    }

                    function b() {
                        return e.removeEventListener("mousemove", g, !1), e.removeEventListener("mouseenter", g, !1), e.removeEventListener("mouseleave", g, !1), n.zoomLens.element.removeEventListener("mouseenter", g, !1), n.zoomLens.element.removeEventListener("mouseleave", g, !1), window.removeEventListener("scroll", g, !1), n.zoomLens && n.zoomedImg && (e.removeChild(n.zoomLens.element), n.zoomContainer.removeChild(n.zoomedImg.element)), o.img ? e.removeChild(n.sourceImg.element) : r(n.sourceImg.element, {
                            width: "",
                            height: ""
                        }), n
                    }
                }
            }, e.exports ? e.exports = r() : n.ImageZoom = r()
        }
    }
]);
//# sourceMappingURL=825.js.map