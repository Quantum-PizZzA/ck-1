(function () {
  try {
    (function () {
      function ih(a, c, b) {
        function d(m) {
          return function () {
            var q = b.o("scip", "") + m;
            b.C("scip", q);
          };
        }
        var e = Od(a, "ci");
        e = Mb(a, e);
        var f = gf(a),
          g = da(a)(qb),
          h = ["sync.cook.int"],
          k = Tl(f.o("sci"));
        if (!k || 1440 < g - k) {
          b.C("scip", "0");
          var l = d("a");
          return e(
            { va: h, G: { xm: Pd(a, c), Em: "" + mc(a) } },
            ["https://an.yandex.ru/sync_cookie"],
            { Vb: 1500, md: !0 }
          )
            .then(function (m) {
              m = n(m.Pb, "CookieMatchUrls");
              ca(m) || (m = []);
              xa(m) ? d("1")() : l();
              var q = Od(a, "c"),
                p = Mb(a, q);
              return J(
                function (r, t, x) {
                  return r.then(function () {
                    return p({ va: h }, ["https://" + t], { Vb: 1500 }).then(
                      A,
                      u(d("b"), d("" + x))
                    );
                  });
                },
                K.resolve(),
                V(Fa, m)
              );
            }, l)
            .then(function () {
              var m = b.o("scip");
              m &&
                -1 === m.indexOf("a") &&
                -1 === m.indexOf("b") &&
                (f.C("sci", g), d("2")());
            }, A);
        }
        return K.resolve();
      }
      function Ul(a, c, b) {
        var d,
          e,
          f = ya(a, c);
        f &&
          (rb(b)
            ? xa(aa(b))
              ? (a = jh(b)) &&
                xa(a) &&
                f.params(((d = {}), (d.__ym = ((e = {}), (e.fpmh = a), e)), d))
              : Eb(a, c, "First party params error. Empty object.")()
            : Eb(a, c, "First party params error. Not an object.")());
      }
      function jh(a) {
        a = za(a);
        return J(
          function (c, b) {
            var d = b[0],
              e = b[1],
              f = rb(e);
            if (!Fa(e) && !f) return c;
            e = f ? jh(e) : e;
            xa(e) && c.push([d, e]);
            return c;
          },
          [],
          a
        );
      }
      function kh(a, c, b) {
        void 0 === b && (b = 0);
        c = za(c);
        c = J(
          function (d, e) {
            var f = e[0],
              g = e[1],
              h = rb(g);
            if (!Fa(g) && !h) return d;
            h
              ? (g = kh(a, g, b + 1))
              : b || "yandex_cid" !== f
              ? ("phone_number" === f
                  ? (g = Vl(g))
                  : "email" === f && (g = Wl(g)),
                (g = lh(a, g)))
              : (g = K.resolve(g));
            d.push(
              g.then(function (k) {
                return [f, k];
              })
            );
            return d;
          },
          [],
          c
        );
        return K.all(c);
      }
      function Wl(a) {
        var c = sb(a).toLowerCase().split("@"),
          b = c[0];
        c = c[1];
        if (!c) return a;
        c = c.replace("googlemail.com", "gmail.com");
        mh(c) && (c = "yandex.ru");
        "yandex.ru" === c
          ? (b = b.replace(hf, "-"))
          : "gmail.com" === c && (b = b.replace(hf, ""));
        a = jf(b, "+");
        -1 !== a && (b = b.slice(0, a));
        return b + "@" + c;
      }
      function Vl(a) {
        a = Nb(a);
        return "8" === a[0] ? "7" + a.slice(1) : a;
      }
      function lh(a, c) {
        return new K(function (b, d) {
          var e = new a.TextEncoder().encode(c);
          a.crypto.subtle.digest("SHA-256", e).then(function (f) {
            f = new a.Blob([f], { type: "application/octet-binary" });
            var g = new a.FileReader();
            g.onload = function (h) {
              h = n(h, "target.result");
              var k = (h || "").indexOf(",");
              -1 !== k ? b(h.substring(k + 1)) : d(Gc("fpm.i"));
            };
            g.readAsDataURL(f);
          }, d);
        });
      }
      function Xl(a, c, b) {
        a = Aa(b);
        b = a[1];
        "track" === a[0] && c({ version: "0", sc: b });
      }
      function Yl(a, c, b) {
        if (b) {
          var d = b.version;
          (b = n(Zl, d + "." + b.sc)) &&
            ((c && G(b, $l)) || a("ym-" + b + "-" + d));
        }
      }
      function am(a, c) {
        function b() {
          k.hidden
            ? z(g.style, kf(["top", "right", "left", "background"], "initial"))
            : z(g.style, kf(["top", "right", "left"], "0"), {
                background: "rgba(0, 0, 0, .3)"
              });
          k.hidden = !k.hidden;
          l.hidden = !l.hidden;
          m.hidden = !m.hidden;
        }
        function d(t) {
          var x = f("div");
          z(x.style, Hc("2px", "18px"), ad, {
            left: "15px",
            top: "7px",
            background: "#2f3747",
            borderRadius: "2px"
          });
          x.style.transform = "rotate(" + t + "deg)";
          return x;
        }
        function e(t, x, L, R, Y) {
          var ta = f("div");
          z(ta.style, Hc(x + "px", L + "px"), ad, {
            left: t + "px",
            bottom: 0,
            background: R,
            borderTopLeftRadius: Y && Y + "px"
          });
          return ta;
        }
        var f = Va(a);
        if (!f) return A;
        var g = f("div");
        g.classList.add("__ym_wv_ign");
        z(g.style, nh, { bottom: "0", width: "100%", zIndex: "9999" });
        var h = f("div");
        z(h.style, Hc("24px"), ad, {
          top: "12px",
          right: "10px",
          background: "#3367dc",
          borderRadius: "50%",
          overflow: "hidden"
        });
        var k = f("div");
        k.id = "__ym_wv_ign__opener";
        z(k.style, Hc("46px", "48px"), nh, {
          right: "0",
          bottom: "60px",
          cursor: "pointer",
          background: "#fff",
          borderRadius: "16px 0 0 16px",
          boxShadow:
            "0px 0px 1px rgba(67, 68, 69, 0.3), 0px 1px 2px rgba(67, 68, 69, 0.3)"
        });
        var l = f("div");
        z(l.style, ad, kf(["top", "right", "bottom"], "0"), {
          width: "600px",
          background: "#fff"
        });
        var m = f("div");
        m.id = "__ym_wv_ign__closer";
        z(m.style, Hc("32px"), ad, {
          top: "12px",
          right: "612px",
          cursor: "pointer",
          background: "#fff",
          borderRadius: "50%"
        });
        var q = f("iframe");
        z(q.style, Hc("100%"), { border: "none" });
        q.src = "https://metrika.yandex.ru/widget/dashboard?id=" + c;
        l.hidden = !0;
        m.hidden = !0;
        m.appendChild(d(45));
        m.appendChild(d(-45));
        l.appendChild(q);
        h.appendChild(
          e(
            0,
            8,
            9,
            "linear-gradient(0deg, #ff324f, #ff324f), linear-gradient(158.67deg, #ff455c 12.6%, #ff1139 96.76%)"
          )
        );
        h.appendChild(e(8, 9, 16, "#04acff", 3));
        h.appendChild(e(17, 7, 24, "#ffdd13"));
        k.appendChild(h);
        g.appendChild(l);
        g.appendChild(m);
        var p = ["click", "touchstart"];
        h = ha(a);
        q = [
          h.D(k, p, b),
          h.D(m, p, b),
          h.D(q, ["load"], v(k, F(g.appendChild, g))),
          v(g, F(a.document.body.removeChild, a.document.body))
        ];
        var r = C([Oa, q], B);
        q.push(
          h.D(a, ["securitypolicyviolation"], function (t) {
            (t = n(t, "blockedURI")) &&
              0 <= t.indexOf("https://metrika.yandex.ru") &&
              r();
          })
        );
        a.document.body.appendChild(g);
        return r;
      }
      function kf(a, c) {
        return J(
          function (b, d) {
            b[d] = c;
            return b;
          },
          {},
          a
        );
      }
      function Hc(a, c) {
        var b;
        return (b = {}), (b.width = a), (b.height = c || a), b;
      }
      function Qd(a, c) {
        if (!c) return !1;
        var b = S(a);
        return new RegExp(c).test("" + b.pathname + b.hash + b.search);
      }
      function bm(a, c) {
        return ra(a, c, function (b) {
          var d = n(b, "settings.dr");
          return { zh: cm(a, d), isEnabled: n(b, "settings.auto_goals") };
        });
      }
      function dm(a, c, b, d, e) {
        b = lf(a.document.body, b);
        d = lf(a.document.body, d);
        G(e.target, [b, d]) && mf(a, c);
      }
      function oh(a, c, b, d, e, f, g) {
        b = em(a, d, b);
        g = y(function (h) {
          return h.slice(0, 200);
        }, g);
        f = [e, f, g];
        f = (e = Rd(fm, f)) ? "" : gm(a, f);
        (!b && e) || mf(a, c, b, f);
      }
      function nf(a, c, b) {
        return c !== a[b];
      }
      function ph(a, c) {
        var b = qh(a, c);
        return rh(a, b);
      }
      function sh(a, c) {
        var b = Sd(a, c);
        return y(v(a, rh), b);
      }
      function Sd(a, c) {
        try {
          var b = c ? jb(c, a.document.body) : [];
        } catch (d) {
          b = [];
        }
        return 0 < b.length ? y(v(a, th), b) : [];
      }
      function qh(a, c) {
        var b = lf(a.document.body, c);
        return b ? th(a, b) : "";
      }
      function mf(a, c, b, d) {
        if ((c = ya(a, c)))
          (b = nc(["dr", b || "" + Pa(a, 10, 99)])),
            (b = z(b, nc(["dre", d || "" + Pa(a, 10, 99)]))),
            c.params(nc(["__ym", b]));
      }
      function lf(a, c) {
        var b = null;
        try {
          b = c ? Ic(c, a) : b;
        } catch (d) {}
        return b;
      }
      function uh(a, c, b, d) {
        if (0 >= b) return [];
        a = a.Math.ceil(c.length / b);
        for (var e = Array(a), f = 0; f < a; f += 1)
          e[f] = c.slice(f * b, (f + 1) * b);
        d && e[a - 1].length < b && (e[a - 1] = hm(d, b, e[a - 1]));
        return e;
      }
      function vh(a) {
        a = sa(wh(a) || "");
        return y(function (c) {
          c = c.charCodeAt(0).toString(2);
          return Td("0", 8, c);
        }, a);
      }
      function th(a, c) {
        if (!c) return "";
        var b = [],
          d = n(a, "document");
        of(a, c, function (e) {
          if (e.nodeType === d.TEXT_NODE) var f = e.textContent;
          else
            e instanceof a.HTMLImageElement
              ? (f = e.alt)
              : e instanceof a.HTMLInputElement && (f = e.value);
          (f = f && f.trim()) && b.push(f);
        });
        return 0 === b.length ? "" : b.join(" ");
      }
      function im(a, c, b) {
        var d,
          e = xh(a, c),
          f = S(a);
        f = Ud(f.protocol + "//" + f.hostname + f.pathname);
        c = Vd(a, c);
        var g = "";
        do g += Pa(a);
        while (g.length < c.length);
        g = g.slice(0, c.length);
        a = "";
        for (var h = 0; h < c.length; h += 1)
          a += (c.charCodeAt(h) + g.charCodeAt(h) - 96) % 10;
        c = [g, a];
        a = c[0];
        c = c[1];
        return ((d = {}),
        (d.mf =
          "https://adstat.yandex.ru/track?service=metrika&id=" +
          c +
          "&mask=" +
          a +
          "&ref=" +
          f),
        (d.rt = "https://" + e + ".mc.yandex.ru/watch/3/1?browser-info=rt:1"),
        d)[b];
      }
      function jm(a, c, b, d) {
        a = n(d, "data");
        if (Fa(a)) {
          var e = a.split("*");
          a = e[0];
          var f = e[1];
          e = e[2];
          "sc.frame" === a
            ? d.source.postMessage("sc.images*" + c, "*")
            : "sc.image" === a && f === c && b(e);
        }
      }
      function km(a, c, b, d) {
        d = n(d, "target");
        (d = Xb("button,input", a, d)) &&
          "submit" === d.type &&
          (d = yh(a, d)) &&
          (b.push(d), W(a, C([!1, a, c, b, d], zh), 300));
      }
      function zh(a, c, b, d, e) {
        var f = Ob(c)(e, d),
          g = -1 !== f;
        if (a || g)
          g && d.splice(f, 1),
            (a = Ah(c, e)),
            (a = "?" + bd(a)),
            (d = C(
              [c, b, "Form goal. Counter " + b.id + ". Form: " + a + "."],
              Bh
            )),
            Wd(c, b, "form", d)(a);
      }
      function Bh(a, c, b) {
        return lm(a, c).then(function (d) {
          d && Eb(a, c, b)();
        });
      }
      function mm(a) {
        a = Ch(a);
        return ca(a) ? H("x", a) : a;
      }
      function nm(a) {
        return H("x", om(a) || []);
      }
      function om(a) {
        var c = n(a, "speechSynthesis.getVoices");
        if (!c) return "";
        a = F(c, a.speechSynthesis);
        return oc(function (b) {
          return y(v(b, n), pm);
        }, a());
      }
      function qm(a) {
        if ((a = Dh(a)))
          try {
            for (var c = [], b = 0; b < pf.length; b += 1) {
              var d = a(pf[b]);
              c.push(d);
            }
            var e = c;
          } catch (f) {
            e = [];
          }
        else e = [];
        return e ? H("x", e) : "";
      }
      function rm(a) {
        var c = Eh(a);
        return c
          ? H(
              "x",
              y(function (b) {
                b = c[b];
                return H(
                  "x",
                  y(u(M, ia("concat", ""), v(b, n)), ["matches", "media"])
                );
              }, aa(c))
            )
          : "";
      }
      function sm(a, c) {
        var b = c.bc;
        if (!Fh(a, b)) return "";
        var d = [];
        a: {
          var e = Gh(a, b);
          try {
            var f = C(e, u)()();
            break a;
          } catch (L) {
            if ("ccf" === L.message) {
              f = null;
              break a;
            }
            kb(L);
          }
          f = void 0;
        }
        (f = Qa(f) ? "" : Hh(f)) && d.push(f);
        var g = b.getContextAttributes();
        try {
          var h = Ja(b.getSupportedExtensions, "getSupportedExtensions")
            ? b.getSupportedExtensions() || []
            : [];
        } catch (L) {
          h = [];
        }
        h = H(";", h);
        f = qf(b.getParameter(b.ALIASED_LINE_WIDTH_RANGE), b);
        e = qf(b.getParameter(b.ALIASED_POINT_SIZE_RANGE), b);
        var k = b.getParameter(b.ALPHA_BITS);
        g = g && g.antialias ? "yes" : "no";
        var l = b.getParameter(b.BLUE_BITS),
          m = b.getParameter(b.DEPTH_BITS),
          q = b.getParameter(b.GREEN_BITS),
          p =
            b.getExtension("EXT_texture_filter_anisotropic") ||
            b.getExtension("WEBKIT_EXT_texture_filter_anisotropic") ||
            b.getExtension("MOZ_EXT_texture_filter_anisotropic");
        if (p) {
          var r = b.getParameter(p.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
          0 === r && (r = 2);
        }
        r = {
          ym: h,
          "webgl aliased line width range": f,
          "webgl aliased point size range": e,
          "webgl alpha bits": k,
          "webgl antialiasing": g,
          "webgl blue bits": l,
          "webgl depth bits": m,
          "webgl green bits": q,
          "webgl max anisotropy": p ? r : null,
          "webgl max combined texture image units": b.getParameter(
            b.MAX_COMBINED_TEXTURE_IMAGE_UNITS
          ),
          "webgl max cube map texture size": b.getParameter(
            b.MAX_CUBE_MAP_TEXTURE_SIZE
          ),
          "webgl max fragment uniform vectors": b.getParameter(
            b.MAX_FRAGMENT_UNIFORM_VECTORS
          ),
          "webgl max render buffer size": b.getParameter(
            b.MAX_RENDERBUFFER_SIZE
          ),
          "webgl max texture image units": b.getParameter(
            b.MAX_TEXTURE_IMAGE_UNITS
          ),
          "webgl max texture size": b.getParameter(b.MAX_TEXTURE_SIZE),
          "webgl max varying vectors": b.getParameter(b.MAX_VARYING_VECTORS),
          "webgl max vertex attribs": b.getParameter(b.MAX_VERTEX_ATTRIBS),
          "webgl max vertex texture image units": b.getParameter(
            b.MAX_VERTEX_TEXTURE_IMAGE_UNITS
          ),
          "webgl max vertex uniform vectors": b.getParameter(
            b.MAX_VERTEX_UNIFORM_VECTORS
          ),
          "webgl max viewport dims": qf(b.getParameter(b.MAX_VIEWPORT_DIMS), b),
          "webgl red bits": b.getParameter(b.RED_BITS),
          "webgl renderer": b.getParameter(b.RENDERER),
          "webgl shading language version": b.getParameter(
            b.SHADING_LANGUAGE_VERSION
          ),
          "webgl stencil bits": b.getParameter(b.STENCIL_BITS),
          "webgl vendor": b.getParameter(b.VENDOR),
          "webgl version": b.getParameter(b.VERSION)
        };
        rf(d, r, ": ");
        a: {
          try {
            var t = b.getExtension("WEBGL_debug_renderer_info");
            if (t) {
              var x = {
                "webgl unmasked vendor": b.getParameter(
                  t.UNMASKED_VENDOR_WEBGL
                ),
                "webgl unmasked renderer": b.getParameter(
                  t.UNMASKED_RENDERER_WEBGL
                )
              };
              break a;
            }
          } catch (L) {}
          x = {};
        }
        rf(d, x);
        if (!b.getShaderPrecisionFormat) return H("~", d);
        rf(d, tm(b));
        return H("~", d);
      }
      function rf(a, c, b) {
        void 0 === b && (b = ":");
        B(function (d) {
          return a.push("" + d[0] + b + d[1]);
        }, za(c));
      }
      function um(a) {
        var c = vm(a);
        return c
          ? J(
              function (b, d, e) {
                d = "" + (e + 1);
                var f = c.supportsVersion;
                return T(f) ? (f.call(c, e + 1) ? b + d : b + "0") : b;
              },
              "",
              wm(19)
            ) + c.canMakePayments()
          : "";
      }
      function vm(a) {
        var c = n(a, "ApplePaySession"),
          b = S(a).protocol;
        return !c || "https:" !== b || Pb(a) ? "" : c;
      }
      function xm(a, c) {
        var b = Ka(a),
          d = "wv2rf:" + N(c),
          e = c.yb,
          f = Xd(a),
          g = b.o(d),
          h = c.Oj;
        return X(f) || Qa(g)
          ? la(function (k, l) {
              ra(a, c, function (m) {
                var q = n(m, "settings.webvisor.forms");
                q = !n(m, "settings.x3") && q;
                f = Xd(a) || n(m, "settings.eu");
                b.C(d, Qb(q));
                l({ yb: e, Lf: !!f, ag: q, Fg: h });
              });
            })
          : Jc({ yb: e, Lf: f, ag: !!Ba(g), Fg: h });
      }
      function zm() {
        var a = J(
          function (c, b) {
            c[b[0]] = { sd: 0, jh: 1 / b[1] };
            return c;
          },
          {},
          [
            ["blur", 0.0034],
            ["change", 0.0155],
            ["click", 0.01095],
            ["deviceRotation", 2e-4],
            ["focus", 0.0061],
            ["mousemove", 0.5132],
            ["scroll", 0.4795],
            ["selection", 0.0109],
            ["touchcancel", 2e-4],
            ["touchend", 0.0265],
            ["touchforcechange", 0.0233],
            ["touchmove", 0.1442],
            ["touchstart", 0.027],
            ["zoom", 0.0014]
          ]
        );
        return {
          bh: function (c) {
            if (c.length)
              return {
                type: "activity",
                data: J(
                  function (b, d) {
                    var e = a[d];
                    return Math.round(b + e.sd * e.jh);
                  },
                  0,
                  aa(a)
                )
              };
          },
          Yi: function (c) {
            c && (c = a[c.data.type]) && (c.sd += 1);
          }
        };
      }
      function Am(a) {
        if (a.type && a.event)
          switch (a.type) {
            case "page":
              var c = a.data,
                b = c.za,
                d = c.fd,
                e = c.content;
              delete c.za;
              delete c.fd;
              delete c.content;
              c = {
                type: "page",
                data: { M: a.M || 0, content: e, za: b, fd: d, Z: c }
              };
              a.L && (c.L = a.L);
              return c;
            case "event":
              a: {
                c = {
                  type: "event",
                  L: a.L,
                  data: { M: a.M, type: a.event, Z: {} }
                };
                b = z({}, a.data);
                switch (a.event) {
                  case "zoom":
                    c.data.Z = {
                      Mg: { x: 0, y: 0, level: 0 },
                      Og: b,
                      duration: 1
                    };
                    break;
                  case "keystroke":
                    c.data.Z = b.Lc;
                    break;
                  case "deviceRotation":
                  case "resize":
                    c.data.Z = b;
                    break;
                  case "windowfocus":
                  case "windowblur":
                  case "focus":
                    c.data.target = b.target;
                    c.data.Z = null;
                    break;
                  case "touchmove":
                  case "touchstart":
                  case "touchend":
                  case "touchcancel":
                  case "touchforcechange":
                  case "scroll":
                  case "change":
                  case "click":
                  case "mousemove":
                  case "mousedown":
                  case "mouseup":
                  case "selection":
                  case "stylechange":
                    c.data.target = b.target;
                    delete b.target;
                    c.data.Z = b;
                    break;
                  case "srcset":
                    a = {
                      type: "mutation",
                      L: a.L,
                      data: {
                        M: a.M,
                        Z: {
                          Da: [
                            {
                              rd: [
                                {
                                  id: b.target,
                                  xb: { src: { Pc: "", n: b.value, r: !1 } },
                                  xa: 0
                                }
                              ]
                            }
                          ],
                          index: 0
                        }
                      }
                    };
                    break a;
                }
                a = c;
              }
              break;
            case "mutation":
              return Bm(a);
          }
        return a;
      }
      function Bm(a) {
        var c = z({}, a.data),
          b = [];
        switch (a.event) {
          case "tc":
            b = [
              { d: [{ id: c.target, lc: { Pc: "", n: c.value }, xa: c.index }] }
            ];
            break;
          case "ac":
            b = [
              {
                rd: [
                  {
                    id: c.target,
                    xb: J(
                      function (d, e) {
                        var f = e[1];
                        d[e[0]] = { Pc: "", n: f, r: ma(f) };
                        return d;
                      },
                      {},
                      za(c.attributes)
                    ),
                    xa: c.index
                  }
                ]
              }
            ];
            break;
          case "re":
            b = [
              {
                Xe: y(function (d) {
                  return { id: d, xa: c.index };
                }, c.ha)
              }
            ];
            break;
          case "ad":
            b = [
              {
                $e: y(function (d) {
                  return {
                    id: d.id,
                    Tf: d.name,
                    Uf: d.Sf,
                    ne: d.parent,
                    qe: d.te,
                    fe: d.next,
                    xb: d.attributes,
                    xa: c.index,
                    lc: d.content,
                    Oa: d.hidden
                  };
                }, c.ha)
              }
            ];
        }
        return {
          type: "mutation",
          L: a.L,
          data: { M: a.M, Z: { Da: b, index: c.index } }
        };
      }
      function Cm(a) {
        return {
          Uh: function () {
            var c = a.document.querySelector("base[href]");
            return c ? c.getAttribute("href") : null;
          },
          Wh: function () {
            if (a.document.doctype) {
              var c = z(
                  { name: "html", publicId: "", systemId: "" },
                  a.document.doctype
                ),
                b = c.publicId,
                d = c.systemId;
              return (
                "<!DOCTYPE " +
                H("", [
                  c.name,
                  b ? ' PUBLIC "' + b + '"' : "",
                  !b && d ? " SYSTEM" : "",
                  d ? ' "' + d + '"' : ""
                ]) +
                ">"
              );
            }
            return null;
          },
          ii: function () {
            try {
              if (!a.sessionStorage) return null;
              var c = a.sessionStorage.getItem("__vw_tab_guid"),
                b = !1;
              try {
                var d = a.opener ? a.opener.sessionStorage : null;
                b = !!d && c === d.getItem("__vw_tab_guid");
              } catch (e) {
                b = !0;
              }
              if (!c || b)
                (c = Ih()), a.sessionStorage.setItem("__vw_tab_guid", c);
              return c;
            } catch (e) {
              return null;
            }
          }
        };
      }
      function Dm(a, c, b) {
        var d = cd(a),
          e = ha(a),
          f = Pb(a),
          g = c.Ld(),
          h = !n(a, "postMessage") || (f && !n(a, "parent.postMessage")),
          k = v(d, M);
        if (h) {
          if (!g)
            return (
              W(a, F(d.V, d, "i", { oa: !1 }), 10), { Kd: k, mg: A, stop: A }
            );
          kb(ab());
        }
        d.D(["sr"], function (r) {
          var t,
            x = Jh(a, r.source);
          x &&
            sf(
              a,
              r.source,
              ((t = {}), (t.type = "\u043d"), (t.frameId = c.na().Y(x)), t)
            );
        });
        d.D(["sd"], function (r) {
          var t = r.data;
          r = r.source;
          (a === r || Jh(a, r)) && d.V("sdr", { data: t.data, M: t.frameId });
        });
        if (f && !g) {
          var l = !1,
            m = 0,
            q = function () {
              var r;
              sf(a, a.parent, ((r = {}), (r.type = "sr"), r));
              m = W(a, q, 100, "if.i");
            };
          q();
          var p = function (r) {
            d.ea(["\u043d"], p);
            ja(a, m);
            var t = Kc(a, r.origin).host;
            l ||
              r.source !== a.parent ||
              !r.data.frameId ||
              ("about:blank" !== S(a).host && !G(t, b)) ||
              ((l = !0), d.V("i", { M: r.data.frameId, oa: !0 }));
          };
          d.D(["\u043d"], p);
          W(
            a,
            function () {
              d.ea(["\u043d"], p);
              ja(a, m);
              l || ((l = !0), d.V("i", { oa: !1 }));
            },
            2e3,
            "if.r"
          );
        }
        e = e.D(a, ["message"], function (r) {
          var t = Fb(a, r.data);
          t &&
            t.type &&
            G(t.type, Em) &&
            d.V(t.type, { data: t, source: r.source, origin: r.origin });
        });
        return {
          Kd: k,
          mg: function (r) {
            var t;
            return sf(
              a,
              a.parent,
              ((t = {}), (t.frameId = c.Ld()), (t.data = r), (t.type = "sd"), t)
            );
          },
          stop: e
        };
      }
      function Jh(a, c) {
        try {
          return bb(
            u(U("contentWindow"), ka(c)),
            sa(a.document.querySelectorAll("iframe"))
          );
        } catch (b) {
          return null;
        }
      }
      function sf(a, c, b) {
        a = fb(a, b);
        c.postMessage(a, "*");
      }
      function Ih() {
        return (
          Yb() +
          Yb() +
          "-" +
          Yb() +
          "-" +
          Yb() +
          "-" +
          Yb() +
          "-" +
          Yb() +
          Yb() +
          Yb()
        );
      }
      function Yb() {
        return Math.floor(65536 * (1 + Math.random()))
          .toString(16)
          .substring(1);
      }
      function Fm(a, c) {
        if (Fa(c)) return c;
        var b = a.textContent;
        if (Fa(b)) return b;
        b = a.data;
        if (Fa(b)) return b;
        b = a.nodeValue;
        return Fa(b) ? b : "";
      }
      function Gm(a, c, b, d, e) {
        void 0 === d && (d = {});
        void 0 === e && (e = Ga(c));
        var f = z(
          J(
            function (h, k) {
              h[k.name] = k.value;
              return h;
            },
            {},
            sa(c.attributes)
          ),
          d
        );
        z(f, Hm(c, e, f));
        var g =
          (d = J(
            function (h, k) {
              var l = k[0],
                m = Yd(a, c, l, k[1], b, e),
                q = m.value;
              ma(q) ? delete f[l] : (f[l] = q);
              return h || m.ib;
            },
            !1,
            za(f)
          )) && dd(c);
        g && ((f.width = g.width), (f.height = g.height));
        return { ib: d, fh: f };
      }
      function Hm(a, c, b) {
        var d = {};
        tf(a)
          ? (d.value = a.value || b.value)
          : "IMG" !== c || b.src || (d.src = "");
        return d;
      }
      function Yd(a, c, b, d, e, f) {
        void 0 === f && (f = Ga(c));
        var g = { ib: !1, value: d };
        if (tf(c))
          "value" === b
            ? !ma(d) &&
              "" !== d &&
              ((b = e.Lf),
              (f = e.ag),
              (e = ed(a, c)),
              f
                ? ((b = fd(a, c, b)),
                  (a = b.Vd),
                  (c = b.Gd),
                  (b = b.lb),
                  (g.ib = !c && (e || a)))
                : ((g.ib = e), (b = !Zd(c))),
              b || e) &&
              (g.value = H("", y(v("\u2022", M), ("" + d).split(""))))
            : "checked" === b &&
              G((c.getAttribute("type") || "").toLowerCase(), Im)
            ? (g.value = c.checked ? "checked" : null)
            : Jm.test(b) && uf(a, c) && (g.value = null);
        else if ("IMG" === f && "src" === b)
          (e = ed(a, c))
            ? ((g.ib = e),
              (g.value =
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="))
            : (g.value =
                (c.getAttribute("srcset") ? c.currentSrc : "") || c.src);
        else if ("A" === f && "href" === b) g.value = d ? "#" : "";
        else if (
          G(b, ["srcset", "integrity", "crossorigin", "password"]) ||
          (2 < b.length && 0 === jf(b, "on")) ||
          ("IFRAME" === f && "src" === b) ||
          ("SCRIPT" === f && G(b, ["src", "type"]))
        )
          g.value = null;
        return g;
      }
      function vf(a, c, b, d) {
        void 0 === d && (d = "wv2");
        return {
          H: function (e, f) {
            return E(a, d + "." + b + "." + f, e, void 0, c);
          }
        };
      }
      function Km(a, c) {
        var b = a.document;
        if (G(b.readyState, ["interactive", "complete"])) Gb(a, c);
        else {
          var d = ha(a),
            e = d.D,
            f = d.Wb,
            g = function () {
              f(b, ["DOMContentLoaded"], g);
              f(a, ["load"], g);
              c();
            };
          e(b, ["DOMContentLoaded"], g);
          e(a, ["load"], g);
        }
      }
      function Lm(a, c) {
        var b = Mm(a),
          d = ua(a, "r", c),
          e = E(a, "rts.p");
        return ra(
          a,
          c,
          F(
            J,
            null,
            function (f, g) {
              var h = { id: g.th, $: g.$ };
              h = d({ ba: g.jj, J: Ca(g.ih), G: g.T, Qb: g.Qb }, h, g.pj)[
                "catch"
              ](e);
              return f.then(v(h, M));
            },
            K.resolve(""),
            b
          )
        )["catch"](e);
      }
      function Kh(a, c, b) {
        c = Lc(a, void 0, c);
        c = Lh(a, c.o("phc_settings") || "");
        var d = n(c, "clientId"),
          e = n(c, "orderId"),
          f = n(c, "service_id"),
          g = n(c, "phones") || [];
        return d && e && g
          ? Nm(a, b.ic, { Dg: Om })
              .cg(g)
              .then(function (h) {
                return Pm(b, { Ab: d, Kb: e, sg: f }, h.ia, g, h.sa);
              })
              ["catch"](function () {})
          : K.resolve();
      }
      function Om(a, c, b) {
        a = Qm(b.Zc);
        if ("href" === b.Be) {
          var d = b.qb;
          c = d.href;
          b = c.replace(a, b.Ua);
          if (c !== b) return (d.href = b), !0;
        } else if (
          (a =
            null === (d = b.qb.textContent) || void 0 === d
              ? void 0
              : d.replace(a, b.Ua)) &&
          a !== b.qb.textContent
        )
          return (b.qb.textContent = a), !0;
        return !1;
      }
      function Pm(a, c, b, d, e) {
        var f;
        c.Ab &&
          c.Kb &&
          ((c.Ab === a.Ab && c.Kb === a.Kb) || z(a, c, { ia: {}, bb: !0 }),
          0 < e && Ra(a.sa, [e]),
          B(function (g) {
            var h,
              k,
              l = g[0];
            g = g[1];
            var m = +(a.ia[l] && a.ia[l][g] ? a.ia[l][g] : 0);
            z(a.ia, ((h = {}), (h[l] = ((k = {}), (k[g] = m), k)), h));
          }, d),
          B(function (g) {
            var h,
              k,
              l = g[0];
            g = g[1];
            var m = 1 + (a.ia[l] ? a.ia[l][g] : 0);
            z(a.ia, ((h = {}), (h[l] = ((k = {}), (k[g] = m), k)), h));
          }, b),
          a.Nf &&
            (a.bb || b.length) &&
            ((c = ya(a.l, a.ic)) &&
              c.params(
                "__ym",
                "phc",
                ((f = {}),
                (f.clientId = a.Ab),
                (f.orderId = a.Kb),
                (f.service_id = a.sg),
                (f.phones = a.ia),
                (f.performance = a.sa),
                f)
              ),
            (a.bb = !1)));
      }
      function Rm(a, c) {
        try {
          var b = c.origin;
        } catch (e) {}
        if (b) {
          var d = Ha(u(Sa, la(b)), [
            /^http:\/\/([\w\-.]+\.)?webvisor\.com\/?$/,
            /^https:\/\/([\w\-.]+\.)?metri[kc]a\.yandex\.(ru|ua|by|kz|com|com\.tr)\/?$/
          ]);
          b = G(b.replace(/\/?$/, "/"), Sm);
          if (d || b)
            (d = Fb(a, c.data)),
              "appendremote" === n(d, "action") && Tm(a, c, d);
        }
      }
      function Mh(a, c) {
        var b,
          d,
          e,
          f,
          g = c.data;
        g = void 0 === g ? "" : g;
        var h = c.id;
        h = void 0 === h ? "" : h;
        var k = O(a),
          l = {};
        l.getCachedTags = Nh;
        l.form =
          ((b = {}),
          (b.closest = v(a, yh)),
          (b.select = Um),
          (b.getData = v(a, Ah)),
          b);
        l.button =
          ((d = {}),
          (d.closest = v(a, Oh)),
          (d.select = Ph),
          (d.getData = v(a, Qh)),
          d);
        l.phone = ((e = {}), (e.hidePhones = C([a, null, [g]], Rh)), e);
        l.status = ((f = {}), (f.checkStatus = C([a, Ba(h)], Vm)), f);
        k.C("_u", l);
        b = c.lang;
        b = void 0 === b ? "" : b;
        d = c.appVersion;
        d = void 0 === d ? "" : d;
        e = c.fileId;
        e = void 0 === e ? "" : e;
        f = c.beta;
        f = void 0 === f ? !1 : f;
        d = H(".", u(cb(u(M, Ba)), Mc(Boolean))(d.split(".")));
        G(e, Wm) && G(b, ["ru", "en", "tr"])
          ? ((b =
              (f
                ? "https://s3.mds.yandex.net/internal-metrika-betas"
                : "https://yastatic.net/s3/metrika") +
              (d ? "/" + d : "") +
              "/form-selector/" +
              (e + "_" + b + ".js")),
            (b = Sh(b) ? b : ""))
          : (b = "");
        b && Nc(a, { src: b });
      }
      function Xm(a, c) {
        var b = Va(a);
        if (b) {
          b = b("div");
          var d = Zb(a);
          if (d) {
            b.innerHTML =
              '<iframe name="RemoteIframe" allowtransparency="true" style="position: absolute; left: -999px; top: -999px; width: 1px; height: 1px;"></iframe>';
            var e = b.firstChild;
            e.onload = function () {
              Nc(e.contentWindow, { src: c });
            };
            a._ym__remoteIframeEl = e;
            d.appendChild(b);
            b.removeChild(e);
            var f = null;
            b.attachShadow
              ? (f = b.attachShadow({ mode: "open" }))
              : b.createShadowRoot
              ? (f = b.createShadowRoot())
              : b.webkitCreateShadowRoot && (f = b.webkitCreateShadowRoot());
            f
              ? f.appendChild(e)
              : (d.appendChild(e), (a._ym__remoteIframeContainer = e));
          }
        }
      }
      function Vm(a) {
        var c,
          b = Th(a);
        a = O(a).o("getCounters", $d)();
        a = y(U("id"), a);
        return (c = { id: b }), (c.counterFound = !!b && G(b, a)), c;
      }
      function Rh(a, c, b) {
        var d;
        c = Uh(a, c, { Dg: Ym, Ri: ((d = {}), (d.href = !0), d) });
        b = V(
          Boolean,
          y(function (f) {
            return "*" === f ? f : Nb(f);
          }, b)
        );
        var e = y(u(M, ia("concat", [""]), Zm("reverse"), Oa), b);
        b = gd(a);
        d = Vh(a, b, 1e3);
        c = F(c.cg, c, e, !1);
        d.D(c);
        $m(a, b);
        Wh(a, b);
        c();
      }
      function Ym(a, c, b) {
        var d = Va(a),
          e = b.qb,
          f = b.Zc,
          g = e.parentNode,
          h = e.textContent;
        if ("text" === b.Be && h && d && g) {
          b = d("small");
          Xh(b);
          var k = h.split(""),
            l = Yh(h).length;
          B(
            ia("appendChild", b),
            J(
              function (m, q) {
                var p = m.ha,
                  r = m.Kg,
                  t = d("small");
                t.innerHTML = q;
                var x = an.test(q);
                Xh(t);
                x && (t.style.opacity = "" + (l - r - 1) / l);
                p.push(t);
                return { ha: p, Kg: r + (x ? 1 : 0) };
              },
              { ha: [], Kg: 0 },
              k
            ).ha
          );
          bn(a, c, b, f);
          g.insertBefore(b, e);
          e.textContent = "";
          return !0;
        }
        return !1;
      }
      function bn(a, c, b, d) {
        function e() {
          B(v(["style", "opacity", ""], nc), sa(b.childNodes));
          if (c) {
            var k = ya(a, c);
            k && k.extLink("tel:" + d, {});
          }
          g();
          h();
        }
        var f = ha(a),
          g = A,
          h = A;
        g = f.D(b, ["mouseenter"], function (k) {
          if (k.target === b) {
            var l = W(a, e, 200, "ph.h.e");
            (h || A)();
            h = f.D(b, ["mouseleave"], function (m) {
              m.target === b && ja(a, l);
            });
          }
        });
      }
      function Wh(a, c) {
        pc(a)(
          Ta(A, function () {
            var b,
              d = a.document.body,
              e =
                ((b = {}),
                (b.attributes = !0),
                (b.childList = !0),
                (b.subtree = !0),
                b);
            Da("MutationObserver", a.MutationObserver) &&
              new MutationObserver(c.V).observe(d, e);
          })
        );
      }
      function $m(a, c) {
        return ha(a).D(a, ["load"], c.V);
      }
      function Uh(a, c, b) {
        function d(k) {
          var l;
          return f(a, c, k)
            ? null === (l = h[k.Zc]) || void 0 === l
              ? void 0
              : l.jd
            : null;
        }
        var e,
          f = b.Dg;
        b = b.Ri;
        var g = void 0 === b ? ((e = {}), (e.href = !0), (e.text = !0), e) : b,
          h;
        return {
          cg: function (k) {
            return new K(function (l, m) {
              (k && k.length) || m();
              h = Zh()(k);
              pc(a)(
                Ta(v({ ia: [], sa: 0 }, l), function () {
                  var q = da(a),
                    p = q(Z),
                    r = g.href ? cn(a, h) : [],
                    t = g.text ? $h(a, h) : [];
                  l({ ia: V(ca, V(Boolean, y(d, r.concat(t)))), sa: q(Z) - p });
                })
              );
            });
          }
        };
      }
      function cn(a, c) {
        var b = a.document.body;
        if (!b) return [];
        var d = ai(c);
        return J(
          function (e, f) {
            var g = n(f, "href");
            try {
              var h = decodeURI(g || "");
            } catch (q) {
              h = "";
            }
            if ("tel:" === h.slice(0, 4)) {
              var k = (d.exec(h) || [])[0],
                l = k ? Nb(k) : "",
                m = c[l];
              X(m) ||
                (!l && "*" !== m.jd[0]) ||
                (e.push({
                  Be: "href",
                  qb: f,
                  Zc: l,
                  Ua: bi(k, c[l].Ua),
                  Dj: g
                }),
                (g = Nb(h.slice(4))),
                (l = Zh()([l ? m.jd : [g, ""]])),
                e.push.apply(e, $h(a, l, f)));
            }
            return e;
          },
          [],
          sa(b.querySelectorAll("a"))
        );
      }
      function $h(a, c, b) {
        void 0 === b && (b = a.document.body);
        if (!b) return [];
        var d = [],
          e = ai(c);
        of(
          a,
          b,
          function (f) {
            if (
              f !== b &&
              "script" !== (n(f, "parentNode.nodeName") || "").toLowerCase()
            ) {
              var g = V(Boolean, e.exec(f.textContent || "") || []);
              B(function (h) {
                var k = Nb(h);
                X(c[k]) ||
                  d.push({
                    Be: "text",
                    qb: f,
                    Zc: k,
                    Ua: bi(h, c[k].Ua),
                    Dj: f.textContent || ""
                  });
              }, g);
            }
          },
          function (f) {
            return e.test(f.textContent || "") ? 1 : 0;
          },
          a.NodeFilter.SHOW_TEXT
        );
        return d;
      }
      function Zh() {
        return Oc(function (a, c) {
          var b = y(Nb, c),
            d = b[0];
          b = b[1];
          a[d] = { Ua: b, jd: c };
          var e = ci(d);
          e !== d && (a[e] = { Ua: ci(b), jd: c });
          return a;
        }, {});
      }
      function bi(a, c) {
        for (
          var b = [], d = a.split(""), e = c.split(""), f = 0, g = 0;
          g < a.length && !(f >= e.length);
          g += 1
        ) {
          var h = d[g];
          "0" <= h && "9" >= h ? (b.push(e[f]), (f += 1)) : b.push(d[g]);
        }
        return H("", b) + c.slice(f + 1);
      }
      function ci(a) {
        var c = { 7: "8", 8: "7" };
        return 11 === a.length && c[a[0]] ? "" + c[a[0]] + a.slice(1) : a;
      }
      function ai(a) {
        return new RegExp("(?:" + H("|", y(di, aa(a))) + ")");
      }
      function ei(a, c, b, d) {
        if (c) {
          var e = [];
          c &&
            (a.document.documentElement.contains(c)
              ? of(a, c, ia("push", e), d)
              : Ra(e, fi(a, c, d)));
          B(b, e);
        }
      }
      function of(a, c, b, d, e) {
        function f(g) {
          return T(d)
            ? d(g)
              ? a.NodeFilter.FILTER_ACCEPT
              : a.NodeFilter.FILTER_REJECT
            : a.NodeFilter.FILTER_ACCEPT;
        }
        void 0 === e && (e = -1);
        if (T(b) && f(c) === a.NodeFilter.FILTER_ACCEPT && (b(c), !wf(c)))
          for (
            c = a.document.createTreeWalker(
              c,
              e,
              d ? { acceptNode: f } : null,
              !1
            );
            c.nextNode() && !1 !== b(c.currentNode);

          );
      }
      function fi(a, c, b) {
        var d = [],
          e = u(M, ia("push", d));
        T(b)
          ? ((b = b(c)), (ma(b) || b === a.NodeFilter.FILTER_ACCEPT) && e(c))
          : e(c);
        if (c.childNodes && 0 < c.childNodes.length) {
          c = c.childNodes;
          b = 0;
          for (var f = c.length; b < f; b += 1) {
            var g = fi(a, c[b]);
            B(e, g);
          }
        }
        return d;
      }
      function pc(a, c) {
        function b(e) {
          n(c, d) ? e() : W(a, v(e, b), 100);
        }
        void 0 === c && (c = a);
        var d = (c.nodeType ? "contentWindow." : "") + "document.body";
        return la(function (e, f) {
          b(f);
        });
      }
      function Ah(a, c, b) {
        return gi(a, c, ["i", "n", "p"], void 0, b);
      }
      function ae(a, c, b) {
        return function (d) {
          var e,
            f,
            g = ya(c, b);
          g &&
            dn(a, d, c) &&
            ((g = F(g.params, g)),
            (d = xf(a, d, "goods")) &&
              g &&
              g(((e = {}), (e.__ym = ((f = {}), (f.ecommerce = [d]), f)), e)));
        };
      }
      function en(a, c, b, d) {
        var e, f;
        c = n(d, "ecommerce") || {};
        var g = n(d, "event") || "";
        c = (g = hi[g]) ? xf(g, c, "items") : void 0;
        if (!c)
          a: {
            c = d;
            !ca(d) && be(a, xa(d)) && (c = Aa(c));
            if (ca(c) && ((a = hi[c[1]]), "event" === c[0] && a)) {
              c = xf(a, c[2], "items");
              break a;
            }
            c = void 0;
          }
        (d = c || fn(d)) &&
          b &&
          b(((e = {}), (e.__ym = ((f = {}), (f.ecommerce = [d]), f)), e));
      }
      function fn(a) {
        var c = n(a, "ecommerce") || {};
        a = V($b(gn), aa(c));
        a = J(
          function (b, d) {
            b[d] = c[d];
            return b;
          },
          {},
          a
        );
        return aa(a).length ? a : void 0;
      }
      function dn(a, c, b) {
        var d = !1,
          e = "";
        if (!rb(c)) return tb(b, "", "Ecommerce data should be an object"), d;
        var f = c.goods;
        switch (a) {
          case "detail":
          case "add":
          case "remove":
            ca(f) && f.length
              ? (d = Rd(function (g) {
                  return rb(g) && (Fa(g.id) || be(b, g.id) || Fa(g.name));
                }, f)) ||
                (e =
                  "All items in 'goods' should be objects and contain 'id' or 'name' field")
              : (e = "Ecommerce data should contain 'goods' non-empty array");
            break;
          case "purchase":
            be(b, c.id) || Fa(c.id)
              ? (d = !0)
              : (e =
                  "Purchase object should contain string or number 'id' field");
        }
        tb(b, "", e);
        return d;
      }
      function xf(a, c, b) {
        var d, e;
        if (c) {
          var f = c.purchase || c;
          c = aa(f);
          var g = f[b];
          if (g) {
            var h =
              ((d = {}), (d[a] = ((e = {}), (e.products = y(hn, g)), e)), d);
            1 < c.length &&
              (h[a].actionField = J(
                function (k, l) {
                  if (l === b) return k;
                  if ("currency" === l) return (h.currencyCode = f.currency), k;
                  k[yf[l] || l] = f[l];
                  return k;
                },
                {},
                c
              ));
            return h;
          }
        }
      }
      function hn(a) {
        var c = {};
        B(function (b) {
          var d = yf[b] || b;
          -1 !== b.indexOf("item_category")
            ? ((d = yf.item_category),
              (c[d] = c[d] ? c[d] + ("/" + a[b]) : a[b]))
            : (c[d] = a[b]);
        }, aa(a));
        return c;
      }
      function jn(a, c) {
        var b = ii(a),
          d = N(c),
          e = b[d];
        e || ((e = {}), (b[d] = e));
        e.zi = !0;
        if ((b = e.ug)) (d = ji(a)), B(d, b);
      }
      function kn(a, c, b, d) {
        var e;
        if ((a = ya(a, b))) {
          var f = d.data;
          b = "" + b.id;
          var g = d.sended || [];
          d.sended || (d.sended = g);
          G(b, g) ||
            !a.params ||
            (d.counter && "" + d.counter !== b) ||
            (a.params(f),
            g.push(b),
            d.parent && c.pg(((e = {}), (e.type = "params"), (e.data = f), e)));
        }
      }
      function ln(a) {
        var c = A,
          b = null,
          d = a.length;
        if (0 !== a.length && a[0]) {
          var e = a.slice(-1)[0];
          T(e) && ((c = e), (d = a.length + -1));
          var f = a.slice(-2)[0];
          T(f) && ((c = f), (b = e), (d = a.length + -2));
          d = a.slice(0, d);
          return { vh: b, Wa: c, T: 1 === d.length ? a[0] : nc(d) };
        }
      }
      function ki(a) {
        return !!bb(function (c) {
          return G(c.type, ["articleInfo", "publishersHeader"]);
        }, a);
      }
      function li(a) {
        var c = zf(a).isEnabled,
          b = !1;
        try {
          b =
            (b = 2 === new a.Blob(["\u00e4"]).size) &&
            2 === new a.Blob([new a.Uint8Array([1, 2])]).size;
        } catch (d) {}
        return Rd(Boolean, [
          !c,
          b,
          a.Uint8Array,
          n(a, "Uint8Array.prototype.slice")
        ]);
      }
      function Af(a, c) {
        var b = c[1][3],
          d = 0,
          e = new a.Uint8Array(c[0]);
        return ub([b], function (f, g) {
          if (!f) return e;
          f[0](a, f[2], e, d);
          d += f[1];
          g.push(f[3]);
          return e;
        });
      }
      function ce(a, c, b) {
        a = c(b);
        c = [A, 0, 0];
        var d = [0, c, c, void 0];
        return ub(a, function (e, f) {
          var g = e[0],
            h = e[1],
            k = e[2];
          if (0 === g) return k(d, h), d;
          if (void 0 === h || null === h) return d;
          var l = g >> 3;
          if (g & 1)
            qc(d, lb(l)), (h = k(h)), l & 2 && qc(d, lb(h[1])), qc(d, h);
          else if (g & 4)
            for (g = h.length - 1; 0 <= g; ) {
              var m = k(h[g]);
              m.push([0, 0, Bf]);
              m.push([0, lb(l), qc]);
              m.unshift([0, 0, Cf]);
              f.push.apply(f, m);
              --g;
            }
          else if (g & 2) {
            k = e[2];
            var q = e[3],
              p = e[4],
              r = e[5],
              t = aa(h);
            for (g = t.length - 1; 0 <= g; )
              (m = t[g]),
                (m = [
                  [0, 0, Cf],
                  [p, h[m], r],
                  [k, m, q],
                  [0, 0, Bf],
                  [0, lb(l), qc]
                ]),
                f.push.apply(f, m),
                --g;
          } else
            (m = k(h)),
              m.push([0, 0, Bf]),
              m.push([0, lb(l), qc]),
              m.unshift([0, 0, Cf]),
              f.push.apply(f, m);
          return d;
        });
      }
      function Cf(a) {
        var c = a[1],
          b = a[0],
          d = a[2];
        a[3]
          ? ((a[0] = a[3][0]),
            (a[1] = a[3][1]),
            (a[2] = a[3][2]),
            (a[3] = a[3][3]))
          : ((a[0] = 0), (a[1] = [A, 0, 0]), (a[2] = a[1]));
        qc(a, lb(b));
        b && ((a[2][3] = c[3]), (a[2] = d), (a[0] += b));
      }
      function Bf(a) {
        a[3] = [a[0], a[1], a[2], a[3]];
        a[1] = [A, 0, 0];
        a[2] = a[1];
        a[0] = 0;
      }
      function qc(a, c) {
        a[0] += c[1];
        a[2][3] = c;
        a[2] = c;
      }
      function Df(a) {
        return [
          [385, a.$g, lb],
          [336, a.mj, mn],
          [272, a.dh, nn],
          [208, a.event, on],
          [144, a.Pi, pn],
          [80, a.page, qn]
        ];
      }
      function rn(a) {
        return [
          [321, a.end, Rb],
          [273, a.qh, sn],
          [193, a.page, I],
          [144, a.data, Df],
          [65, a.L, I]
        ];
      }
      function mi(a) {
        return [[84, a.buffer, rn]];
      }
      function tn(a) {
        return [
          [129, a.position, I],
          [81, a.name, P]
        ];
      }
      function un(a) {
        return [[81, a.name, P]];
      }
      function vn(a) {
        return [[81, a.name, P]];
      }
      function nn(a) {
        return [
          [593, a.Sj, P],
          [532, a.sj, tn],
          [449, a.cf, I],
          [401, a.lj, P],
          [340, a.Gj, un],
          [276, a.gh, vn],
          [209, a.hj, P],
          [145, a.ij, P],
          [65, a.id, lb]
        ];
      }
      function wn(a) {
        return [
          [513, a.cf, I],
          [489, a.Mi, hd],
          [385, a.hb, I],
          [321, a.height, I],
          [257, a.width, I],
          [193, a.y, I],
          [129, a.x, I],
          [65, a.id, lb]
        ];
      }
      function mn(a) {
        return [
          [129, a.hb, I],
          [84, a.eh, wn]
        ];
      }
      function xn(a) {
        return [[81, a.hash, P]];
      }
      function yn(a) {
        return [
          [209, a.stack, P],
          [145, a.Eh, P],
          [81, a.code, P]
        ];
      }
      function zn(a) {
        return [
          [193, a.orientation, I],
          [129, a.height, I],
          [65, a.width, I]
        ];
      }
      function An(a) {
        return [[84, a.Lc, Bn]];
      }
      function Bn(a) {
        return [
          [273, a.Mc, P],
          [193, a.Mf, Rb],
          [145, a.key, P],
          [65, a.id, I]
        ];
      }
      function Cn(a) {
        return [
          [145, a.value, P],
          [81, a.Mm, P]
        ];
      }
      function Dn(a) {
        return [
          [149, a.$b, P],
          [81, a.method, P]
        ];
      }
      function En(a) {
        return [
          [257, a.ob, I],
          [193, a.pb, I],
          [129, a.height, I],
          [65, a.width, I]
        ];
      }
      function Fn(a) {
        return [
          [144, a.Og, ni],
          [80, a.Mg, ni]
        ];
      }
      function ni(a) {
        return [
          [193, a.y, I],
          [129, a.x, I],
          [105, a.level, hd]
        ];
      }
      function Gn(a) {
        return [[84, a.touches, Hn]];
      }
      function Hn(a) {
        return [
          [297, a.force, hd],
          [233, a.y, hd],
          [169, a.x, hd],
          [81, a.id, P]
        ];
      }
      function In(a) {
        return [
          [193, a.hidden, Rb],
          [129, a.checked, Rb],
          [81, a.value, P]
        ];
      }
      function Jn(a) {
        return [
          [257, a.kf, I],
          [193, a.vg, I],
          [129, a.end, I],
          [65, a.start, I]
        ];
      }
      function Kn() {
        return [];
      }
      function Ln(a) {
        return [
          [193, a.page, Rb],
          [129, a.y, I],
          [65, a.x, I]
        ];
      }
      function Mn(a) {
        return [
          [129, a.y, I],
          [65, a.x, I]
        ];
      }
      function Nn(a) {
        return [[84, a.Da, On]];
      }
      function On(a) {
        return [
          [257, a.index, I],
          [209, a.me, P],
          [145, a.style, P],
          [65, a.target, I]
        ];
      }
      function on(a) {
        return [
          [1168, a.Aj, Nn],
          [1104, a.wi, xn],
          [1040, a.Ih, yn],
          [976, a.yh, zn],
          [912, a.Ji, An],
          [848, a.oj, En],
          [784, a.bk, Fn],
          [720, a.Nm, Cn],
          [656, a.Jm, Dn],
          [592, a.Hj, Gn],
          [528, a.mh, In],
          [464, a.vj, Jn],
          [400, a.Zj, Kn],
          [336, a.tj, Ln],
          [272, a.Ni, Mn],
          [193, a.M, de],
          [129, a.target, de],
          [65, a.type, lb]
        ];
      }
      function pn(a) {
        return [
          [257, a.M, de],
          [208, a.Z, Pn],
          [129, a.L, I],
          [65, a.target, I]
        ];
      }
      function Pn(a) {
        return [
          [148, a.Da, Qn],
          [65, a.index, I]
        ];
      }
      function Qn(a) {
        return [
          [276, a.d, Rn],
          [212, a.rd, Sn],
          [148, a.$e, Tn],
          [84, a.Xe, Un]
        ];
      }
      function Rn(a) {
        return [
          [193, a.xa, I],
          [144, a.lc, oi],
          [65, a.id, I]
        ];
      }
      function Sn(a) {
        return [
          [193, a.xa, I],
          [146, a.xb, 81, P, 144, oi],
          [65, a.id, I]
        ];
      }
      function oi(a) {
        return [
          [193, a.r, Rb],
          [145, a.n, P],
          [81, a.Pc, P]
        ];
      }
      function Tn(a) {
        return [
          [641, a.Oa, Rb],
          [577, a.xa, I],
          [513, a.fe, I],
          [465, a.lc, P],
          [402, a.xb, 81, P, 145, P],
          [321, a.qe, I],
          [273, a.Uf, P],
          [193, a.ne, I],
          [145, a.Tf, P],
          [65, a.id, I]
        ];
      }
      function Un(a) {
        return [
          [321, a.xa, I],
          [257, a.ne, I],
          [193, a.fe, I],
          [129, a.qe, I],
          [65, a.id, I]
        ];
      }
      function qn(a) {
        return [
          [321, a.za, Vn],
          [273, a.fd, P],
          [193, a.M, de],
          [148, a.content, Wn],
          [80, a.Z, Xn]
        ];
      }
      function Wn(a) {
        return [
          [513, a.hidden, Rb],
          [449, a.te, I],
          [385, a.next, I],
          [337, a.content, P],
          [257, a.parent, I],
          [210, a.attributes, 81, P, 145, P],
          [145, a.name, P],
          [65, a.id, I]
        ];
      }
      function Xn(a) {
        return [
          [724, a.Fm, Yn],
          [656, a.location, Zn],
          [592, a.viewport, pi],
          [528, a.screen, pi],
          [449, a.Ef, Rb],
          [401, a.af, P],
          [337, a.referrer, P],
          [273, a.Gg, P],
          [209, a.Ye, P],
          [145, a.title, P],
          [81, a.doctype, P]
        ];
      }
      function Yn(a) {
        return [
          [133, a.scroll, I],
          [65, a.target, I]
        ];
      }
      function Zn(a) {
        return [
          [209, a.path, P],
          [145, a.protocol, P],
          [81, a.host, P]
        ];
      }
      function pi(a) {
        return [
          [129, a.height, I],
          [65, a.width, I]
        ];
      }
      function P(a) {
        var c = $n({}, a, [], 0);
        return c ? [ao, c, a] : [qi, 0, 0];
      }
      function sn(a) {
        return [bo, a.length, a];
      }
      function Rb(a) {
        return [qi, 1, a ? 1 : 0];
      }
      function Vn(a) {
        a = ri(a);
        var c = a[0],
          b = a[1],
          d = ((b >>> 28) | (c << 4)) >>> 0;
        c >>>= 24;
        return [
          si,
          0 === c
            ? 0 === d
              ? 16384 > b
                ? 128 > b
                  ? 1
                  : 2
                : 2097152 > b
                ? 3
                : 4
              : 16384 > d
              ? 128 > d
                ? 5
                : 6
              : 2097152 > d
              ? 7
              : 8
            : 128 > c
            ? 9
            : 10,
          a
        ];
      }
      function hd(a) {
        return [co, 4, a];
      }
      function de(a) {
        return lb(((a << 1) ^ (a >> 31)) >>> 0);
      }
      function I(a) {
        return 0 > a ? [si, 10, ri(a)] : lb(a);
      }
      function lb(a) {
        return [
          eo,
          128 > a ? 1 : 16384 > a ? 2 : 2097152 > a ? 3 : 268435456 > a ? 4 : 5,
          a
        ];
      }
      function eo(a, c, b, d) {
        for (a = c; 127 < a; ) (b[d++] = (a & 127) | 128), (a >>>= 7);
        b[d] = a;
      }
      function qi(a, c, b, d) {
        b[d] = c;
      }
      function bo(a, c, b, d) {
        for (a = 0; a < c.length; ++a) b[d + a] = c[a];
      }
      function ti(a) {
        return function (c, b, d, e) {
          for (var f, g = 0, h = 0; h < b.length; ++h)
            if (((c = b.charCodeAt(h)), 128 > c)) a ? (g += 1) : (d[e++] = c);
            else {
              if (2048 > c) {
                if (a) {
                  g += 2;
                  continue;
                }
                d[e++] = (c >> 6) | 192;
              } else {
                if (
                  55296 === (c & 64512) &&
                  56320 === ((f = b.charCodeAt(h + 1)) & 64512)
                ) {
                  if (a) {
                    g += 4;
                    continue;
                  }
                  c = 65536 + ((c & 1023) << 10) + (f & 1023);
                  ++h;
                  d[e++] = (c >> 18) | 240;
                  d[e++] = ((c >> 12) & 63) | 128;
                } else {
                  if (a) {
                    g += 3;
                    continue;
                  }
                  d[e++] = (c >> 12) | 224;
                }
                d[e++] = ((c >> 6) & 63) | 128;
              }
              d[e++] = (c & 63) | 128;
            }
          return a ? g : e;
        };
      }
      function co(a, c, b, d) {
        return fo(a)(a, c, b, d);
      }
      function go(a, c, b, d) {
        var e = 0 > c ? 1 : 0;
        e && (c = -c);
        if (0 === c) id(0 < 1 / c ? 0 : 2147483648, b, d);
        else if (a.isNaN(c)) id(2143289344, b, d);
        else if (3.4028234663852886e38 < c)
          id(((e << 31) | 2139095040) >>> 0, b, d);
        else if (1.1754943508222875e-38 > c)
          id(((e << 31) | a.Math.round(c / 1.401298464324817e-45)) >>> 0, b, d);
        else {
          var f = a.Math.floor(a.Math.log(c) / Math.LN2);
          id(
            ((e << 31) |
              ((f + 127) << 23) |
              (Math.round(c * a.Math.pow(2, -f) * 8388608) & 8388607)) >>>
              0,
            b,
            d
          );
        }
      }
      function id(a, c, b) {
        c[b] = a & 255;
        c[b + 1] = (a >>> 8) & 255;
        c[b + 2] = (a >>> 16) & 255;
        c[b + 3] = a >>> 24;
      }
      function si(a, c, b, d) {
        a = c[0];
        for (c = c[1]; a; )
          (b[d++] = (c & 127) | 128),
            (c = ((c >>> 7) | (a << 25)) >>> 0),
            (a >>>= 7);
        for (; 127 < c; ) (b[d++] = (c & 127) | 128), (c >>>= 7);
        b[d++] = c;
      }
      function ri(a) {
        if (!a) return [0, 0];
        var c = 0 > a;
        c && (a = -a);
        var b = a >>> 0;
        a = ((a - b) / 4294967296) >>> 0;
        c &&
          ((a = ~a >>> 0),
          (b = ~b >>> 0),
          4294967295 < ++b && ((b = 0), 4294967295 < ++a && (a = 0)));
        return [a, b];
      }
      function ee(a) {
        return ca(a)
          ? y(ee, a)
          : ma(a) || "object" !== typeof a
          ? a
          : J(
              function (c, b) {
                var d = b[0],
                  e = b[1],
                  f = ho[d];
                X(f) && (f = d);
                e = G(f, io) ? e : ee(e);
                f ? (c[f] = e) : (c[d] = e);
                return c;
              },
              {},
              za(a)
            );
      }
      function jo(a, c) {
        return ra(a, c, function (b) {
          var d = O(a);
          N(c);
          if (!d.o("dSync", !1))
            return (
              d.C("dSync", !0),
              ui(a, b, {
                Za: c,
                Wc: "s",
                $d: "ds",
                Cj: function (e, f, g) {
                  var h = e.Pb;
                  e = e.host;
                  if (n(h, "settings")) return kb(ab("ds.e"));
                  f = f(Z) - g;
                  g = e[1];
                  var k, l;
                  h = Ca(((k = {}), (k.di = h), (k.dit = f), (k.dip = g), k));
                  k = ((l = {}), (l["page-url"] = S(a).href), l);
                  return ua(
                    a,
                    "S",
                    vi
                  )({ J: h, G: k }, vi)["catch"](E(a, "ds.rs"));
                }
              })
            );
        });
      }
      function ui(a, c, b) {
        var d = b.Za,
          e = da(a),
          f = ko(a, c.userData, d),
          g = lo(a);
        return g.length
          ? mo(a, e, f, c, b).then(function () {
              return no(a, g, f, e, b);
            }, A)
          : K.resolve();
      }
      function lo(a) {
        var c = jd(a);
        a = u(Ef, $b(["iPhone", "iPad"]))(a);
        return c ? oo : a ? po : [];
      }
      function no(a, c, b, d, e) {
        var f = e.Cj,
          g = void 0 === f ? A : f,
          h = e.$d,
          k = d(Z);
        return qo(
          a,
          c,
          e
        )(
          Ta(
            function (l) {
              B(function (m) {
                m && fe(a, h + ".s", m);
              }, l);
              l = d(qb);
              b.C(h, l);
            },
            function (l) {
              b.C(h, d(qb));
              g(l, d, k);
            }
          )
        );
      }
      function mo(a, c, b, d, e) {
        var f = e.$d,
          g = e.Za;
        return new K(function (h, k) {
          var l = b.o(f, 0);
          l = parseInt("" + l, 10);
          return 60 >= c(qb) - l
            ? k()
            : ro(a)
            ? h(void 0)
            : wi(d)
            ? k()
            : h(so(a, g));
        });
      }
      function qo(a, c, b) {
        var d = b.Wc,
          e = b.data,
          f = ua(a, d, b.Za);
        a = z({}, xi);
        e && z(a.G, e);
        return to(
          y(function (g) {
            return uo(
              f(
                xi,
                y(function (h) {
                  var k = h[1],
                    l = h[2];
                  h = H(
                    "",
                    y(function (m) {
                      return String.fromCharCode(m.charCodeAt(0) + 10);
                    }, h[0].split(""))
                  );
                  return (
                    "http" + (l ? "s" : "") + "://" + h + ":" + k + "/" + vo[d]
                  );
                }, g),
                { Lg: !1, rj: !0 }
              ).then(function (h) {
                return z({}, h, { host: g[h.Uj] });
              })
            );
          }, c)
        );
      }
      function ko(a, c, b) {
        var d = c || {},
          e = ua(a, "u", b),
          f = Ka(a);
        return {
          o: function (g, h) {
            return X(d[g]) ? f.o(g, h) : d[g];
          },
          C: function (g, h) {
            var k,
              l = "" + h;
            d[g] = l;
            f.C(g, l);
            return e(
              { G: ((k = {}), (k.key = g), (k.value = l), k) },
              [na.Ca + "//mc.yandex.ru/user_storage_set"],
              {}
            )["catch"](E(a, "u.d.s.s"));
          }
        };
      }
      function yi(a, c, b) {
        var d = n(a, "AppMetricaInitializer"),
          e = n(d, "init");
        if (e)
          try {
            F(e, d)(fb(a, c));
          } catch (f) {}
        else zi = W(a, C([a, c, 2 * b], yi), b, "ai.d");
        return function () {
          return ja(a, zi);
        };
      }
      function wo(a, c, b) {
        if (b && ((b = Oh(a, b)), (b = Qh(a, b)))) {
          b = "?" + bd(b);
          var d = Eb(
            a,
            c,
            "Button goal. Counter " + c.id + ". Button: " + b + "."
          );
          Wd(a, c, "btn", d)(b);
        }
      }
      function xo(a, c) {
        var b = Ka(a);
        if ("" !== b.o("cc")) return 0;
        var d = v("cc", b.C);
        d(0);
        var e = da(a),
          f = O(a);
        f = u(
          U(Wa({ Pb: 1 }) + ".c"),
          kd(function (g) {
            d(g + "&" + e(qb));
          }),
          v("cc", f.C)
        );
        ua(
          a,
          "6",
          c
        )({})
          .then(f)
          ["catch"](
            u(
              kd(function () {
                var g = e(qb);
                b.C("cc", "&" + g);
              }),
              E(a, "cc")
            )
          );
      }
      function yo(a, c) {
        var b;
        a(((b = {}), (b.clickmap = X(c) ? !0 : c), b));
      }
      function zo(a, c, b, d, e) {
        function f() {
          k && k.stop();
        }
        if (!c.Va) return K.resolve(A);
        var g = ua(a, "4", c),
          h = { G: { "wv-type": "0" }, J: Ca() };
        b = new Ao(a, b, function (l, m, q) {
          if (!g) return K.resolve();
          m = "wv-data=" + Ff(l, !0);
          for (var p = l.length, r = 0, t = 255, x = 255, L, R, Y; p; ) {
            L = 21 < p ? 21 : p;
            p -= L;
            do
              (R = "string" === typeof l ? l.charCodeAt(r) : l[r]),
                (r += 1),
                255 < R && ((Y = R >> 8), (R &= 255), (R ^= Y)),
                (t += R),
                (x += t);
            while (--L);
            t = (t & 255) + (t >> 8);
            x = (x & 255) + (x >> 8);
          }
          l = (((t & 255) + (t >> 8)) << 8) | ((x & 255) + (x >> 8));
          return g(
            z({}, h, {
              ba: m,
              G: { "wv-check": 65535 === l ? 0 : l, "wv-type": "0" }
            }),
            c,
            q
          )["catch"](E(a, "m.n.m.s"));
        });
        var k = Bo(a, b, d, e);
        return ra(a, c, function (l) {
          l && O(a).C("isEU", n(l, "settings.eu"));
          !Gf(a) && k && Ai(a, l) && k.start();
          return f;
        });
      }
      function Ai(a, c) {
        var b = ac(a),
          d = b.o("visorc");
        G(d, ["w", "b"]) || (d = "");
        (Bi(a) && Ci(a, ge, "visorc") && !Co.test(vb(a) || "")) || (d = "b");
        var e = n(c, "settings.webvisor.recp");
        if (!a.isFinite(e) || 0 > e || 1 < e) d = "w";
        d || (d = (O(a).o("hitId") % 1e4) / 1e4 < e ? "w" : "b");
        b.C("visorc", d, 30);
        return "w" === d;
      }
      function Bo(a, c, b, d) {
        var e = a.document,
          f = [],
          g = ha(a),
          h = ":submit" + Math.random(),
          k = [],
          l = F(c.flush, c),
          m = fa(function (r, t) {
            E(a, "hfv." + r, function () {
              try {
                var x = t.type;
              } catch (L) {
                return;
              }
              x = G(x, d);
              c.push(t, { type: r });
              x && l();
            })();
          }),
          q = E(a, "sfv", function () {
            if (!Hf(a)) {
              var r = b(a),
                t = Do(a);
              B(function (x) {
                f.push(g.D(x.target, [x.event], m(x.type)));
              }, r);
              B(function (x) {
                f.push(
                  g.D(
                    x.target,
                    [x.event],
                    E(a, "hff." + x.type + "." + x.event, function (L) {
                      B(la({ l: a, ja: L, flush: l }), x.N);
                    })
                  )
                );
              }, t);
              k = Di(a, "form", e);
              e.attachEvent &&
                ((r = Di(a, "form *", e)),
                B(function (x) {
                  f.push(g.D(x, ["submit"], m("form")));
                }, k),
                B(function (x) {
                  If(x) && f.push(g.D(x, ["change"], m("formInput")));
                }, r));
              B(function (x) {
                var L = x.submit;
                if (T(L) || ("object" === typeof L && Eo.test("" + L)))
                  (x[h] = L),
                    (x.submit = E(a, "fv", function () {
                      var R = { target: x, type: "submit" };
                      m("document")(R);
                      return x[h]();
                    }));
              }, k);
            }
          }),
          p = E(a, "ufv", function () {
            B(Oa, f);
            B(function (r) {
              r && (r.submit = r[h]);
            }, k);
            c.flush();
          });
        return { start: q, stop: p };
      }
      function Fo(a, c) {
        var b = V(function (e) {
            return 0 < e.N.length;
          }, c),
          d = Ei({ target: a.document, type: "document" });
        return y(u(M, d, Go(a)), b);
      }
      function Fi(a, c) {
        var b = a.l,
          d = [],
          e = c.form;
        if (!c[Ua] && e) {
          var f = e.elements;
          e = e.length;
          for (var g = 0; g < e; g += 1) {
            var h = f[g];
            he(h) && !h[Ua] && Ra(d, rc(b, h));
          }
        } else Ra(d, rc(b, c));
        return d;
      }
      function Jf(a) {
        if (ld) {
          ld = !1;
          var c = wb(a.l),
            b = [];
          gb(a.l, b, 15) ? (a = []) : (Q(b, c), (a = b));
          return a;
        }
      }
      function Gi(a) {
        if (!ld) {
          ld = !0;
          a = wb(a.l);
          var c = [];
          Sb(c, 14);
          Q(c, a);
          return c;
        }
      }
      function Ho(a, c, b) {
        var d = c[Ua];
        if (d) {
          a: {
            var e = wb(a),
              f = c[Ua];
            if (0 < f) {
              var g = [];
              c = Kf(a, c);
              var h = sc[f],
                k = c[0] + "x" + c[1],
                l = c[2] + "x" + c[3];
              if (k !== h.Yf) {
                h.Yf = k;
                if (gb(a, g, 9)) {
                  a = [];
                  break a;
                }
                Q(g, e);
                Q(g, f);
                Q(g, c[0]);
                Q(g, c[1]);
              }
              if (l !== h.size) {
                h.size = l;
                if (gb(a, g, 10)) {
                  a = [];
                  break a;
                }
                Q(g, e);
                Q(g, f);
                Q(g, c[2]);
                Q(g, c[3]);
              }
              if (g.length) {
                a = g;
                break a;
              }
            }
            a = [];
          }
          Ra(b, a);
        }
        return d;
      }
      function fd(a, c, b) {
        void 0 === b && (b = !1);
        if ("button" === c.getAttribute("type"))
          return { lb: !1, Gd: !1, Vd: !1 };
        var d = Zd(c),
          e = Lf(c);
        a = Mf(a, c) || (b && e);
        return { lb: !(d || !a), Gd: d, Vd: e };
      }
      function Mf(a, c) {
        return uf(a, c) || md(a, c) ? !0 : ed(a, c);
      }
      function Lf(a) {
        if (!a) return !1;
        var c = a.placeholder,
          b = a.type;
        a = V(Hi, [a.className, a.id, a.name]);
        return (b && G(b, Io)) || Ha(Sa(Jo), a) || (Hi(c) && Ko.test(c));
      }
      function Hi(a) {
        return !!(a && 2 < a.length);
      }
      function tf(a) {
        try {
          var c = Ga(a);
          if (G(c, Nf)) {
            if ("INPUT" === c) {
              var b = a.type;
              return !b || G(b.toLocaleLowerCase(), Lo);
            }
            return !0;
          }
        } catch (d) {}
        return !1;
      }
      function Ii(a, c) {
        return c && tc("(ym-disable-submit|-metrika-noform)", c);
      }
      function Zd(a) {
        return a && tc("ym-record-keys", a);
      }
      function Mo(a, c) {
        return H(
          "",
          y(function (b) {
            return a.isNaN(b)
              ? No.test(b)
                ? ((b = b.toUpperCase() === b ? Oo : Po),
                  String.fromCharCode(Pa(a, b[0], b[1])))
                : b
              : "" + Pa(a, 0, 9);
          }, c.split(""))
        );
      }
      function ed(a, c) {
        if (ma(c)) return !1;
        if (wf(c)) {
          var b = c.parentNode;
          return (ma(b) ? 0 : 11 === b.nodeType) ? !1 : ed(a, c.parentNode);
        }
        if (Qo.test(c.className)) return !0;
        b = Ji(a);
        if (!b) return !1;
        var d = b.call(c, ".ym-hide-content *");
        return d &&
          (Ro.test(c.className) ||
            b.call(c, ".ym-hide-content .ym-show-content *"))
          ? !1
          : d;
      }
      function So(a, c, b, d, e) {
        var f;
        c = {
          J: Ca(),
          G: ((f = {}), (f["page-url"] = c), (f["pointer-click"] = b), f)
        };
        d(c, e)["catch"](E(a, "c.s.c"));
      }
      function To(a, c, b, d, e) {
        if (nd(a, "ymDisabledClickmap") || Hf(a) || !c || !c.element) return !1;
        a = Ga(c.element);
        if (
          (e && !e(c.element, a)) ||
          (G(c.button, [2, 3]) && "A" !== a) ||
          Ha(ka(a), d)
        )
          return !1;
        d = c.element;
        if (c && b) {
          if (50 > c.time - b.time) return !1;
          e = Math.abs(b.position.x - c.position.x);
          a = Math.abs(b.position.y - c.position.y);
          c = c.time - b.time;
          if (b.element === d && 2 > e && 2 > a && 1e3 > c) return !1;
        }
        for (; d; ) {
          if (Uo(d)) return !1;
          d = d.parentElement;
        }
        return !0;
      }
      function Vo(a, c) {
        var b = null;
        try {
          if ((b = c.target || c.srcElement))
            !b.ownerDocument && b.documentElement
              ? (b = b.documentElement)
              : b.ownerDocument !== a.document && (b = null);
        } catch (d) {}
        return b;
      }
      function Wo(a) {
        var c = a.which;
        a = a.button;
        return c || void 0 === a
          ? c
          : 1 === a || 3 === a
          ? 1
          : 2 === a
          ? 3
          : 4 === a
          ? 2
          : 0;
      }
      function Ki(a, c) {
        var b = Zb(a),
          d = Of(a);
        return {
          x: c.pageX || c.clientX + d.x - (b.clientLeft || 0) || 0,
          y: c.pageY || c.clientY + d.y - (b.clientTop || 0) || 0
        };
      }
      function Xo(a) {
        var c = E(a, "i.clch", Yo);
        ha(a).D(a.document, ["click"], F(c, null, a), { passive: !1 });
        return function (b) {
          var d = na.Ca,
            e = a.Ya[na.ec],
            f = !!e._informer;
          e._informer = z({ domain: "informer.yandex.ru" }, b);
          f || Nc(a, { src: d + "//informer.yandex.ru/metrika/informer.js" });
        };
      }
      function Li(a) {
        var c = void 0;
        void 0 === c && (c = Zo);
        var b = n(a, "navigator") || {};
        c = y(v(b, n), c);
        c = H("x", c);
        try {
          var d = n(a, "navigator.getGamepads");
          var e = (Ja(d, "getGamepads") && a.navigator.getGamepads()) || [];
        } catch (f) {
          e = [];
        }
        return c + "x" + xa(e);
      }
      function Mi(a) {
        a = n(a, "navigator.plugins") || [];
        return xa(a)
          ? u(
              sa,
              Mc(Boolean),
              $o(function (c, b) {
                return c.name > b.name ? 1 : 2;
              }),
              cb(ap)
            )(a)
          : "";
      }
      function ap(a) {
        try {
          var c = xa(a) ? a : [];
          return H(",", [
            a.name,
            a.description,
            u(sa, Mc(Boolean), cb(bp), od(","))(c)
          ]);
        } catch (b) {
          return "";
        }
      }
      function bp(a) {
        return H(",", [a.description, a.suffixes, a.type]);
      }
      function cp(a) {
        var c = dp(a, ep);
        if (!c || !Fh(a, c.bc)) return Jc("");
        c = fp(a, c.bc);
        return xb(
          a,
          c,
          1
        )(
          bc(function (b) {
            return b ? ((b = b.pop()), Hh(b)) : "";
          })
        );
      }
      function tm(a) {
        return J(
          function (c, b) {
            var d = b[0],
              e = b[1];
            c[d + " precision"] = n(e, "precision") || "n";
            c[d + " precision rangeMin"] = n(e, "rangeMin") || "n";
            c[d + " precision rangeMax"] = n(e, "rangeMax") || "n";
            return c;
          },
          {},
          [
            [
              "webgl vertex shader high float",
              a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_FLOAT)
            ],
            [
              "webgl vertex shader medium",
              a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_FLOAT)
            ],
            [
              "webgl vertex shader low float",
              a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_FLOAT)
            ],
            [
              "webgl fragment shader high float",
              a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_FLOAT)
            ],
            [
              "webgl fragment shader medium float",
              a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_FLOAT)
            ],
            [
              "webgl fragment shader low float",
              a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_FLOAT)
            ],
            [
              "webgl vertex shader high int",
              a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_INT)
            ],
            [
              "webgl vertex shader medium int",
              a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_INT)
            ],
            [
              "webgl vertex shader low int",
              a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_INT)
            ],
            [
              "webgl fragment shader high int",
              a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_INT)
            ],
            [
              "webgl fragment shader medium int",
              a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_INT)
            ],
            [
              "webgl fragment shader low int precision",
              a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_INT)
            ]
          ]
        );
      }
      function fp(a, c) {
        var b = null,
          d = Gh(a, c);
        return ub(d, function (e) {
          return (b = e(b));
        });
      }
      function Gh(a, c) {
        return [
          function () {
            var b = c.createBuffer();
            (b && c.getParameter && Da("getParameter", c.getParameter)) || Pf();
            c.bindBuffer(c.ARRAY_BUFFER, b);
            var d = new a.Float32Array(gp);
            c.bufferData(c.ARRAY_BUFFER, d, c.STATIC_DRAW);
            b.Hi = 3;
            b.Vi = 3;
            d = c.createProgram();
            var e = c.createShader(c.VERTEX_SHADER);
            (d && e) || Pf();
            return { ze: d, Yj: e, Xj: b };
          },
          function (b) {
            var d = b.ze,
              e = b.Yj;
            c.shaderSource(
              e,
              "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}"
            );
            c.compileShader(e);
            c.attachShader(d, e);
            (d = c.createShader(c.FRAGMENT_SHADER)) || Pf();
            return z(b, { Sh: d });
          },
          function (b) {
            var d = b.ze,
              e = b.Sh;
            c.shaderSource(
              e,
              "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}"
            );
            c.compileShader(e);
            c.attachShader(d, e);
            c.linkProgram(d);
            c.useProgram(d);
            return b;
          },
          function (b) {
            var d = b.ze;
            b = b.Xj;
            d.Wj = c.getAttribLocation(d, "attrVertex");
            d.Xi = c.getUniformLocation(d, "uniformOffset");
            c.enableVertexAttribArray(d.Tm);
            c.vertexAttribPointer(d.Wj, b.Hi, c.FLOAT, !1, 0, 0);
            c.uniform2f(d.Xi, 1, 1);
            c.drawArrays(c.TRIANGLE_STRIP, 0, b.Vi);
            return c.canvas;
          }
        ];
      }
      function Fh(a, c) {
        if (!T(a.Float32Array)) return !1;
        var b = n(c, "canvas");
        if (!b || !Da("toDataUrl", b.toDataURL)) return !1;
        try {
          c.createBuffer();
        } catch (d) {
          return !1;
        }
        return !0;
      }
      function qf(a, c) {
        c.clearColor(0, 0, 0, 1);
        c.enable(c.DEPTH_TEST);
        c.depthFunc(c.LEQUAL);
        c.clear(c.COLOR_BUFFER_BIT | c.DEPTH_BUFFER_BIT);
        return "[" + n(a, "0") + ", " + n(a, "1") + "]";
      }
      function dp(a, c) {
        var b = Va(a);
        if (!b) return null;
        b = b("canvas");
        var d = [];
        try {
          var e = ia("getContext", b);
          d = y(u(M, e), c);
        } catch (f) {
          return null;
        }
        return (e = bb(M, d)) ? { canvas: b, bc: e } : null;
      }
      function Ni(a) {
        a = n(a, "screen") || {};
        return H("x", y(v(a, n), hp));
      }
      function ip(a) {
        var c = Eh(a);
        return c
          ? H(
              "",
              y(function (b) {
                b = c[b];
                var d = b.matches;
                return "not all" === b.media ? 2 : Qb(d);
              }, aa(c))
            )
          : "";
      }
      function Eh(a) {
        var c = n(a, "matchMedia");
        if (!c || !Da("matchMedia", c)) return "";
        var b = ia("matchMedia", a);
        return J(
          function (d, e) {
            d[e] = b("(" + e + ")");
            return d;
          },
          {},
          jp
        );
      }
      function kp(a) {
        a = Ch(a);
        return ca(a)
          ? J(
              function (c, b) {
                return "" + c + (lp[b] || 0);
              },
              "",
              a
            )
          : a;
      }
      function Ch(a) {
        a = Va(a);
        if (!a) return "";
        a = a("video");
        try {
          var c = ia("canPlayType", a),
            b = oc(function (d) {
              return y(u(M, ia("concat", d + "; codecs=")), mp);
            }, Oi);
          return y(c, [].concat(Oi, b));
        } catch (d) {
          return "canPlayType";
        }
      }
      function np(a) {
        return Pi(a)(
          bc(function (c) {
            return c.length ? H("", y(Qb, c)) : "";
          })
        );
      }
      function Qi(a) {
        a = n(a, "navigator") || {};
        return a.doNotTrack || a.msDoNotTrack || "unknown";
      }
      function op(a, c) {
        if (a.Mj()) {
          var b = null;
          try {
            b = c.target || c.srcElement;
          } catch (t) {}
          if (b) {
            3 === b.nodeType && (b = b.parentNode);
            for (
              var d = b && b.nodeName && ("" + b.nodeName).toLowerCase();
              n(b, "parentNode.nodeName") &&
              (("a" !== d && "area" !== d) ||
                (!b.href && !b.getAttribute("xlink:href")));

            )
              d =
                (b = b.parentNode) &&
                b.nodeName &&
                ("" + b.nodeName).toLowerCase();
            var e = b.href ? b : null;
          } else e = null;
          if (e && !tc("ym-disable-tracklink", e)) {
            var f = a.l,
              g = a.globalStorage;
            b = a.uh;
            var h = a.Za,
              k = a.xi,
              l = a.sender,
              m = a.Jh,
              q = h.wc,
              p = e.href;
            d = sb(e && e.innerHTML && e.innerHTML.replace(/<\/?[^>]+>/gi, ""));
            d = p === d ? "" : d;
            if (tc("ym-external-link", e))
              ie(f, h, { url: p, Gb: !0, title: d, sender: l });
            else {
              q = q ? Kc(f, q).hostname : S(f).hostname;
              m = RegExp("\\.(" + H("|", y(pp, m)) + ")$", "i");
              var r = e.protocol + "//" + e.hostname + e.pathname;
              m = Ri.test(r) || Ri.test(p) || m.test(p) || m.test(r);
              e = e.hostname;
              Si(q) === Si(e)
                ? m
                  ? ie(f, h, { url: p, Ic: !0, title: d, sender: l })
                  : ((k = (f = g.o("pai", A)()) && f + "-" + k) &&
                      b.C("pai", k),
                    d && b.C("il", sb(d).slice(0, 100)))
                : (p && qp.test(p)) ||
                  ie(f, h, {
                    url: p,
                    Nc: !0,
                    Gb: !0,
                    Ic: m,
                    title: d,
                    sender: l
                  });
            }
          }
        }
      }
      function ie(a, c, b, d) {
        var e,
          f = Ca();
        b.Ic && f.C("dl", "1");
        b.Gb && f.C("ln", "1");
        f = {
          J: f,
          title: b.title,
          Nc: !!b.Nc,
          T: b.T,
          G:
            ((e = {}),
            (e["page-url"] = b.url),
            (e["page-ref"] = c.wc || S(a).href),
            e)
        };
        e = "Link";
        b.Ic
          ? (e = b.Gb ? "Ext link - File" : "File")
          : b.Gb && (e = "Ext link");
        c = b
          .sender(f, c)
          .then(d || A)
          .then(Eb(a, c, e + ". Counter " + c.id + ". Url: " + b.url, b));
        return Pc(a, "cl.p.s", c, b.Wa || A, b.l);
      }
      function rp(a, c) {
        var b,
          d,
          e =
            ((b = {}), (b.string = !0), (b.object = !0), (b["boolean"] = c), b)[
              typeof c
            ] || !1;
        a(((d = {}), (d.trackLinks = e), d));
      }
      function sp(a, c, b, d) {
        var e = S(a),
          f = e.hostname;
        e = e.href;
        if ((c = pd(c).url)) (a = Kc(a, c)), (f = a.hostname), (e = a.href);
        return [d + "://" + f + "/" + b, e || ""];
      }
      function je(a, c) {
        return function (b) {
          Ti(a, c, b);
        };
      }
      function tp(a, c) {
        Qf(a)(function (b) {
          delete b[c];
        });
      }
      function Ti(a, c, b) {
        Qf(a)(function (d) {
          d[c] = z(d[c] || {}, b);
        });
      }
      function up(a, c) {
        var b = {};
        Qf(a)(function (d) {
          b = d[c] || {};
        });
        return b;
      }
      function Qf(a) {
        a = O(a);
        var c = a.o("dsjf") || la({});
        a.Ha("dsjf", c);
        return c;
      }
      function Pc(a, c, b, d, e) {
        var f = F(Rf, null, a, d, e);
        return b.then(f, function (g) {
          f();
          fe(a, c, g);
        });
      }
      function Eb(a, c, b, d) {
        return Sf(c)
          ? A
          : v(C(va([a, N(c)], d ? [b + ". Params:", d] : [b]), tb), Oa);
      }
      function tb() {
        var a = Aa(arguments),
          c = a.slice(2);
        ke(a[0], a[1]).log.apply(tb, c);
      }
      function zf(a) {
        var c = "1" === ac(a).o("debug"),
          b = -1 < S(a).href.indexOf("_ym_debug=1");
        a = a._ym_debug;
        return { ti: c, Di: a || b, isEnabled: Ha(Boolean, [c, a, b]) };
      }
      function vp(a, c, b) {
        var d;
        (d = wa[c]) || (d = La);
        d = d.slice();
        d.unshift(wp);
        d.unshift(xp);
        return y(u(yp([a, c, b]), Oa), d);
      }
      function zp(a, c, b, d, e, f, g) {
        void 0 === f && (f = A);
        var h = n(g, "data");
        if (Fa(h)) {
          var k = h.split("*");
          h = k[0];
          var l = k[1];
          k = k[2];
          if ("sc.image" === h && l) {
            G(l, cc) &&
              (f("a"),
              e.C("startSync", !1),
              B(Oa, Ui(a)),
              (cc = V(u(ka(l), yb), cc)));
            if ("1" !== k) {
              f("b" + k);
              Tf(a, c, b, d, !1);
              return;
            }
            f("d");
          }
          if ("sc.image" === h || "sc.frame" === h)
            cc.length
              ? (f("c"), g.source.postMessage("sc.images*" + cc[0], "*"))
              : Tf(a, c, b, d, !0);
        } else f("7");
      }
      function Tf(a, c, b, d, e, f) {
        void 0 === f && (f = A);
        ja(a, Vi);
        var g = Ka(a),
          h = (a = da(a)(qb));
        e ? f("9") : (f("8"), (h = a - 1435));
        var k = g.o("synced") || {};
        B(function (l) {
          k[l.Li] = h;
        }, d);
        g.C("synced", k);
        Wi();
        Xi(c, "sc");
        cc = [];
        b();
      }
      function Yi(a, c) {
        var b = S(a),
          d = b.href,
          e = b.host,
          f = -1;
        if (!Fa(c) || X(c)) return d;
        b = c.replace(Zi, "");
        if (-1 !== b.search(Ap)) return b;
        var g = b.charAt(0);
        if (
          ("?" === g && ((f = d.search(/\?/)), -1 === f)) ||
          ("#" === g && ((f = d.search(/#/)), -1 === f))
        )
          return d + b;
        if (-1 !== f) return d.substr(0, f) + b;
        if ("/" === g) {
          if (((f = d.indexOf(e)), -1 !== f))
            return d.substr(0, f + e.length) + b;
        } else return (d = d.split("/")), (d[d.length - 1] = b), H("/", d);
        return "";
      }
      function $i(a) {
        return {
          ca: function (c, b) {
            if (!c.J) return b();
            var d = O(a).o("fid");
            !Uf && d && (uc(c, "fid", d), (Uf = !0));
            var e = ma(d);
            e = e | ((0 === d) << 1) | (Uf << 2);
            e |= !T(a.PerformanceObserver) << 3;
            uc(c, "efid", e);
            return b();
          }
        };
      }
      function aj(a) {
        return {
          ca: function (c, b) {
            var d = c.J;
            if (d) {
              var e = O(a).o("adBlockEnabled");
              e && d.C("adb", e);
            }
            b();
          }
        };
      }
      function xp(a) {
        return {
          ca: function (c, b) {
            Gf(a) || b();
          }
        };
      }
      function Bp(a) {
        a = Cp(a);
        return Dp[a] || a;
      }
      function Ep(a) {
        a = bj(a);
        return Fp[a] || "ru";
      }
      function Gp(a, c, b) {
        a = cj(a)[c];
        b && a && b.C("cs", H("", a));
      }
      function Hp(a, c, b) {
        a = cj(a);
        var d = a[c];
        d || ((d = []), (a[c] = d));
        10 > d.length && d.push(b);
      }
      function wp(a, c, b) {
        return {
          ca: function (d, e) {
            Ip(a, d, b, e);
          }
        };
      }
      function Ip(a, c, b, d) {
        var e = c.J;
        if (b.$j || !e) d();
        else {
          var f = le(a),
            g = Lc(a, "");
          d = u(function () {
            var r = dj(f);
            r = "" + r + Jp(r, g);
            e.C("gdpr", r);
            uc(c, "gdpr", r);
          }, d);
          if (3 === b.id) d();
          else {
            var h = O(a),
              k = h.o("f1");
            if (k) k(d);
            else if (
              ((k = (k = dj(f)) ? y(v(me, n), k.split(",")) : []), ej(k))
            )
              d();
            else {
              var l = ne(a),
                m = S(a),
                q =
                  l &&
                  (-1 !== m.href.indexOf("yagdprcheck=1") ||
                    g.o("yaGdprCheck"));
              m = g.o("gdpr");
              g.o("yandex_login")
                ? (k.push("13"), g.C("gdpr", Qc, 525600))
                : l
                ? G(m, dc)
                  ? m === Vf
                    ? k.push("12")
                    : k.push("3")
                  : Wf(a) || qd(a)
                  ? k.push("17")
                  : Kp(a) && k.push("28")
                : k.push("14");
              var p = v(f, Lp);
              ej(k)
                ? (B(p, k), d())
                : (oe.push(d),
                  h.C("f1", function (r, t) {
                    var x = 0;
                    if (t) {
                      var L = fb(a, t) || "";
                      x += L.length;
                    }
                    oe.push(r);
                    1e6 >= x && oe.push(r);
                  }),
                  (0, Xf[0])(a)
                    .then(U("params.eu"))
                    .then(function (r) {
                      if (r || q) {
                        g.C("gdpr_popup", Vf);
                        Mp(a, b);
                        if (Pb(a)) return Np(a, p, b);
                        var t = fj(a, f);
                        if (t)
                          return (r = Op(a, p, t, b)), r.then(C([a, b], Pp)), r;
                      }
                      r || p("8");
                      return K.resolve({ value: Qc, Wd: !0 });
                    })
                    .then(function (r) {
                      g.pc("gdpr_popup");
                      if (r) {
                        var t = r.value;
                        r = r.Wd;
                        G(t, dc) && g.C("gdpr", t, r ? void 0 : 525600);
                      }
                      t = ub(oe, Oa);
                      xb(a, t, 20)(Ta(E(a, "gdr"), A));
                      h.C("f1", Oa);
                    })
                    ["catch"](E(a, "gdp.a")));
            }
          }
        }
      }
      function Pp(a, c) {
        if (ne(a)) {
          var b = le(a),
            d = ya(a, c);
          d = d && d.params;
          b = y(v(Qp, n), Yf(b));
          d && b.length && d("gdpr", V(Boolean, b));
        }
      }
      function ya(a, c) {
        var b = O(a).o("counters", {}),
          d = N(c);
        return b[d];
      }
      function Np(a, c, b) {
        var d = pe(a, b);
        return new K(function (e) {
          var f;
          if (d) {
            var g = d.aa,
              h = u(v("4", c), v(null, e)),
              k = W(a, h, 2e3, "gdp.f.t");
            d.pg(((f = {}), (f.type = "isYandex"), f))
              .then(function (l) {
                l.isYandex
                  ? (c("5"),
                    g.D(
                      va(["GDPR-ok-view-default", "GDPR-ok-view-detailed"], Zf),
                      function (m) {
                        e({ value: gj(m[1].type) });
                      }
                    ))
                  : (c("6"), e(null));
              })
              ["catch"](h)
              .then(C([a, k], ja));
          } else e({ value: Vf, Wd: !0 });
        });
      }
      function Mp(a, c) {
        var b = pe(a, c);
        b &&
          b.aa.D(["isYandex"], function () {
            var d;
            return (d = { type: "isYandex" }), (d.isYandex = ne(a)), d;
          });
        return b;
      }
      function Op(a, c, b, d) {
        var e = Rp(a, d.ak),
          f = pe(a, d);
        if (!f) return K.resolve({ value: Qc, Wd: !0 });
        var g = Nc(a, {
          src:
            "https://yastatic.net/s3/gdpr/popup/v2/" +
            e +
            "_inversed_buttons.js"
        });
        return new K(function (h, k) {
          g
            ? (c("7"),
              (g.onerror = function () {
                var l;
                c("9");
                f.og(((l = {}), (l.type = "GDPR-ok-view-default"), l));
                h(null);
              }),
              (g.onload = function () {
                c("10");
                b.D(
                  va(["GDPR-ok-view-default", "GDPR-ok-view-detailed"], Zf),
                  function (l) {
                    var m;
                    l = l.type;
                    f.og(((m = {}), (m.type = l), m));
                    h({ value: gj(l) });
                  }
                );
              }))
            : (c("9"), k(ab("gdp.e")));
        });
      }
      function Rp(a, c) {
        var b = c || bj(a);
        return G(b, Sp) ? b : "en";
      }
      function qe() {
        return function (a, c, b) {
          return {
            ca: function (d, e) {
              var f,
                g = d.J,
                h = d.Ia,
                k = d.G;
              if (g && k) {
                var l = G(k["wv-type"], Tp);
                if (!k["wv-type"] || l) {
                  var m = da(a);
                  g.Sb("rqnl", 1);
                  for (var q = rd(a), p = 1; q[p]; ) p += 1;
                  d.Qb = p;
                  q[p] =
                    ((f = {}),
                    (f.protocol = na.Ca),
                    (f.host = "mc.yandex.ru"),
                    (f.resource = l ? "webvisor" : "watch"),
                    (f.postParams = d.ba),
                    (f.time = m(Z)),
                    (f.counterType = b.$),
                    (f.params = k),
                    (f.browserInfo = g.l()),
                    (f.counterId = b.id),
                    (f.ghid = mc(a)),
                    f);
                  h && (h.Sb("rqnl", 1), (q[p].telemetry = h.l()));
                  $f(a);
                }
              }
              e();
            },
            La: function (d, e) {
              hj(a, d);
              e();
            }
          };
        };
      }
      function hj(a, c) {
        var b = rd(a);
        c.J && !Qa(b) && (delete b[c.Qb], $f(a));
      }
      function $f(a) {
        var c = rd(a);
        Ka(a).C("retryReqs", c);
      }
      function re(a, c, b) {
        var d = se(a, c, b);
        return function (e, f, g) {
          var h;
          e = z({ J: Ca() }, e);
          e.G || (e.G = {});
          var k = e.G;
          k.wmode = "0";
          k["wv-part"] = "" + g;
          k["wv-hit"] = k["wv-hit"] || "" + mc(a);
          k["page-url"] = k["page-url"] || a.location.href;
          k.rn = k.rn || "" + Pa(a);
          if (!k["wv-type"]) {
            g = e.df;
            var l = "4",
              m = "2";
            e.Kf && ((l = "5"), (m = "3"));
            k["wv-type"] = g ? l : m;
          }
          f = "webvisor/" + f.id;
          return d(z(e, { G: k }), f, {
            Nb: ((h = {}), (h["Content-Type"] = "text/plain"), h),
            Jg: "POST"
          });
        };
      }
      function Up(a, c, b, d) {
        c = d.o("cc");
        d = C(["cc", ""], d.C);
        if (c) {
          var e = c.split("&");
          c = e[0];
          if ((e = (e = e[1]) && Ba(e)) && 1440 < da(a)(qb) - e) return d();
          b.C("cc", c);
        } else ka(0)(c) || d();
      }
      function Vp(a, c, b, d) {
        return ra(a, c, function (e) {
          if ("0" === n(e, "settings.pcs") && !sd(a))
            if (((e = d.o("zzlc")), X(e) || Qa(e) || "na" === e)) {
              e = "ru";
              var f = ij(a, 68),
                g = jj(a, 79);
              if (f || g) e = "md";
              if ((f = Va(a))) {
                var h = f("iframe");
                z(h.style, {
                  display: "none",
                  width: "1px",
                  height: "1px",
                  visibility: "hidden"
                });
                h.src =
                  "https://mc.yandex." + e + wh("L21ldHJpa2EvenpsYy5odG1s");
                if ((e = Zb(a))) {
                  e.appendChild(h);
                  var k = 0,
                    l = ha(a).D(
                      a,
                      ["message"],
                      E(a, "zz.m", function (m) {
                        (m = n(m, "data")) &&
                          m.substr &&
                          "__ym__zz" === m.substr(0, 8) &&
                          (vc(h),
                          (m = m.substr(8)),
                          d.C("zzlc", m),
                          b.C("zzlc", m),
                          l(),
                          ja(a, k));
                      })
                    );
                  k = W(a, u(l, v(h, vc)), 3e3);
                }
              }
            } else b.C("zzlc", e);
        });
      }
      function ra(a, c, b) {
        a = N(c);
        return kj()(Wp(a)).then(b);
      }
      function Xp(a, c, b) {
        c = N(c);
        a = ag(a);
        b = z({ Lh: a(Z) }, b);
        return kj()(Yp(c, b));
      }
      function Yp(a, c) {
        return function (b) {
          var d = b[a];
          d
            ? ((d.nj = c), (d.fg = !0), d.eg ? d.eg(c) : (d.Sa = K.resolve(c)))
            : (b[a] = { Sa: K.resolve(c), nj: c, fg: !0 });
        };
      }
      function Zp(a, c, b) {
        var d, e;
        c = bb(v(a, n), $p);
        c = X(c) ? null : n(a, c);
        if (
          n(a, "navigator.onLine") &&
          c &&
          c &&
          n(c, "prototype.constructor.name")
        ) {
          var f = new c(((d = {}), (d.iceServers = []), d));
          a = n(f, "createDataChannel");
          T(a) &&
            (F(a, f, "y.metrika")(),
            (a = n(f, "createOffer")),
            T(a) &&
              !a.length &&
              ((a = F(a, f)()),
              (d = n(a, "then")),
              T(d) &&
                F(d, a, function (g) {
                  var h = n(f, "setLocalDescription");
                  T(h) && F(h, f, g, A, A)();
                })(),
              z(
                f,
                ((e = {}),
                (e.onicecandidate = function () {
                  var g,
                    h = n(f, "close");
                  if (T(h)) {
                    h = F(h, f);
                    try {
                      var k =
                        (g = n(f, "localDescription.sdp")) &&
                        g.match(/c=IN\s[\w\d]+\s([\w\d:.]+)/);
                    } catch (l) {
                      f.onicecandidate = A;
                      "closed" !== f.iceConnectionState && h();
                      return;
                    }
                    k && 0 < k.length && ((g = wc(k[1])), b.C("pp", g));
                    f.onicecandidate = A;
                    h();
                  }
                }),
                e)
              )));
        }
      }
      function aq(a, c, b) {
        var d,
          e = lj(a, c);
        if (e) {
          e.aa.D(["gpu-get"], function () {
            var h;
            return (h = {}), (h.type = "gpu-get"), (h.pu = b.o("pu")), h;
          });
          var f = n(a, "opener");
          if (f) {
            var g = W(a, C([a, c, b], mj), 200, "pu.m");
            e.Ee(f, ((d = {}), (d.type = "gpu-get"), d), function (h, k) {
              var l = n(k, "pu");
              l && (ja(a, g), b.C("pu", l));
            });
          } else mj(a, c, b);
        }
      }
      function mj(a, c, b) {
        var d = n(a, "location.host");
        a = Vd(a, c);
        b.C("pu", "" + wc(d) + a);
      }
      function bg(a, c, b) {
        return {
          ca: function (d, e) {
            var f = d.J;
            if (f && (!b || b.ng)) {
              var g = a.document.title;
              d.title && (g = d.title);
              var h = ec("getElementsByTagName", a.document);
              "string" !== typeof g &&
                h &&
                ((g = h("title")), (g = (g = n(g, "0.innerHtml")) ? g : ""));
              g = g.slice(0, na.Tg);
              f.C("t", g);
            }
            e();
          }
        };
      }
      function xc(a) {
        void 0 === a && (a = bq);
        return function (c, b, d) {
          return {
            ca: function (e, f) {
              var g = e.J,
                h = e.G;
              g &&
                h &&
                B(function (k) {
                  var l = zb[k],
                    m = "bi",
                    q = g;
                  l || ((l = Xa[k]), (m = "tel"), (q = uc(e)));
                  l && ((l = D(m + ":" + k, l, null)(c, d, e)), q.Sb(k, l));
                }, a);
              f();
            }
          };
        };
      }
      function cq(a, c, b) {
        b &&
          b.length &&
          ((b = H("", y(Qb, b))),
          (b = cg(32, 2, "_", b)),
          a.C("aip", b),
          c.push(b));
      }
      function cg(a, c, b, d) {
        for (var e = [], f = 0; f < d.length; f += a) {
          var g = d.slice(f, f + a);
          g = g.length < a ? nj("0", a - g.length) + "1" + g : "1" + g;
          e.push(parseInt(g, c).toString(a));
        }
        return e.join(b);
      }
      function oj(a) {
        return (
          ("00000000" + (a.O[0] >>> 0).toString(16)).slice(-8) +
          ("00000000" + (a.O[1] >>> 0).toString(16)).slice(-8) +
          ("00000000" + (a.R[0] >>> 0).toString(16)).slice(-8) +
          ("00000000" + (a.R[1] >>> 0).toString(16)).slice(-8)
        );
      }
      function pj(a, c) {
        var b = a.length % 16,
          d = a.length - b,
          e = [0, 0],
          f = [0, 0];
        switch (b) {
          case 15:
            f = oa(f, hb([0, a.charCodeAt(d + 14)], 48));
          case 14:
            f = oa(f, hb([0, a.charCodeAt(d + 13)], 40));
          case 13:
            f = oa(f, hb([0, a.charCodeAt(d + 12)], 32));
          case 12:
            f = oa(f, hb([0, a.charCodeAt(d + 11)], 24));
          case 11:
            f = oa(f, hb([0, a.charCodeAt(d + 10)], 16));
          case 10:
            f = oa(f, hb([0, a.charCodeAt(d + 9)], 8));
          case 9:
            (f = oa(f, [0, a.charCodeAt(d + 8)])),
              (f = mb(f, te)),
              (f = Rc(f, 33)),
              (f = mb(f, ue)),
              (c.R = oa(c.R, f));
          case 8:
            e = oa(e, hb([0, a.charCodeAt(d + 7)], 56));
          case 7:
            e = oa(e, hb([0, a.charCodeAt(d + 6)], 48));
          case 6:
            e = oa(e, hb([0, a.charCodeAt(d + 5)], 40));
          case 5:
            e = oa(e, hb([0, a.charCodeAt(d + 4)], 32));
          case 4:
            e = oa(e, hb([0, a.charCodeAt(d + 3)], 24));
          case 3:
            e = oa(e, hb([0, a.charCodeAt(d + 2)], 16));
          case 2:
            e = oa(e, hb([0, a.charCodeAt(d + 1)], 8));
          case 1:
            (e = oa(e, [0, a.charCodeAt(d)])),
              (e = mb(e, ue)),
              (e = Rc(e, 31)),
              (e = mb(e, te)),
              (c.O = oa(c.O, e));
        }
        c.O = oa(c.O, [0, a.length]);
        c.R = oa(c.R, [0, a.length]);
        c.O = fc(c.O, c.R);
        c.R = fc(c.R, c.O);
        c.O = qj(c.O);
        c.R = qj(c.R);
        c.O = fc(c.O, c.R);
        c.R = fc(c.R, c.O);
      }
      function rj(a, c, b) {
        var d = [
          (a.charCodeAt(b + 4) & 255) |
            ((a.charCodeAt(b + 5) & 255) << 8) |
            ((a.charCodeAt(b + 6) & 255) << 16) |
            ((a.charCodeAt(b + 7) & 255) << 24),
          (a.charCodeAt(b) & 255) |
            ((a.charCodeAt(b + 1) & 255) << 8) |
            ((a.charCodeAt(b + 2) & 255) << 16) |
            ((a.charCodeAt(b + 3) & 255) << 24)
        ];
        a = [
          (a.charCodeAt(b + 12) & 255) |
            ((a.charCodeAt(b + 13) & 255) << 8) |
            ((a.charCodeAt(b + 14) & 255) << 16) |
            ((a.charCodeAt(b + 15) & 255) << 24),
          (a.charCodeAt(b + 8) & 255) |
            ((a.charCodeAt(b + 9) & 255) << 8) |
            ((a.charCodeAt(b + 10) & 255) << 16) |
            ((a.charCodeAt(b + 11) & 255) << 24)
        ];
        d = mb(d, ue);
        d = Rc(d, 31);
        d = mb(d, te);
        c.O = oa(c.O, d);
        c.O = Rc(c.O, 27);
        c.O = fc(c.O, c.R);
        c.O = fc(mb(c.O, [0, 5]), [0, 1390208809]);
        a = mb(a, te);
        a = Rc(a, 33);
        a = mb(a, ue);
        c.R = oa(c.R, a);
        c.R = Rc(c.R, 31);
        c.R = fc(c.R, c.O);
        c.R = fc(mb(c.R, [0, 5]), [0, 944331445]);
      }
      function sj(a, c, b, d) {
        b = c.length && (b - d.length) / c.length;
        if (0 >= b) return d;
        c = nj(c, b);
        return a ? c + d : d + c;
      }
      function Pi(a, c) {
        var b = c || pf,
          d = Dh(a);
        if (!d) return Jc([]);
        try {
          var e = ub(b, d);
          return xb(a, e, 20);
        } catch (f) {
          return Jc([]);
        }
      }
      function dq(a, c, b, d, e, f, g, h) {
        var k = b.o(f);
        ma(k) && (b.C(f, g), e(a, c, b, d), (k = b.o(f, g)));
        X(h) || h.Sb(f, "" + k);
        return k;
      }
      function eq(a, c) {
        if (td(a)) {
          var b = vb(a).match(fq);
          if (b && b.length) return b[1] === c;
        }
        return !1;
      }
      function ij(a, c) {
        if (Sc(a) && c) {
          var b = vb(a).match(gq);
          if (b && b.length) return +b[1] >= c;
        }
        return !1;
      }
      function jj(a, c) {
        var b = vb(a);
        return b && (b = b.match(hq)) && 1 < b.length ? Ba(b[1]) >= c : !1;
      }
      function tj(a) {
        for (var c = [], b = 0; b < a.length; b++) {
          var d = a.charCodeAt(b);
          128 > d
            ? c.push(d)
            : (127 < d && 2048 > d
                ? c.push((d >> 6) | 192)
                : (c.push((d >> 12) | 224), c.push(((d >> 6) & 63) | 128)),
              c.push((d & 63) | 128));
        }
        return c;
      }
      function Ff(a, c) {
        void 0 === c && (c = !1);
        for (var b = a.length, d = b - (b % 3), e = [], f = 0; f < d; f += 3) {
          var g = (a[f] << 16) + (a[f + 1] << 8) + a[f + 2];
          e.push(
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[
              (g >> 18) & 63
            ],
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[
              (g >> 12) & 63
            ],
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[
              (g >> 6) & 63
            ],
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[
              g & 63
            ]
          );
        }
        switch (b - d) {
          case 1:
            b = a[d] << 4;
            e.push(
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[
                (b >> 6) & 63
              ],
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[
                b & 63
              ],
              "=",
              "="
            );
            break;
          case 2:
            (b = (a[d] << 10) + (a[d + 1] << 2)),
              e.push(
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[
                  (b >> 12) & 63
                ],
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[
                  (b >> 6) & 63
                ],
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[
                  b & 63
                ],
                "="
              );
        }
        e = e.join("");
        return c ? uj(e, !0) : e;
      }
      function wh(a, c) {
        void 0 === c && (c = !1);
        var b = a,
          d = "",
          e = 0;
        if (!b) return "";
        for (c && (b = uj(b)); b.length % 4; ) b += "=";
        do {
          var f =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(
                b.charAt(e++)
              ),
            g =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(
                b.charAt(e++)
              ),
            h =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(
                b.charAt(e++)
              ),
            k =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(
                b.charAt(e++)
              );
          if (0 > f || 0 > g || 0 > h || 0 > k) return null;
          var l = (f << 18) | (g << 12) | (h << 6) | k;
          f = (l >> 16) & 255;
          g = (l >> 8) & 255;
          l &= 255;
          d =
            64 === h
              ? d + String.fromCharCode(f)
              : 64 === k
              ? d + String.fromCharCode(f, g)
              : d + String.fromCharCode(f, g, l);
        } while (e < b.length);
        return d;
      }
      function uj(a, c) {
        void 0 === c && (c = !1);
        return a
          ? a.replace(c ? /[+/=]/g : /[-*_]/g, function (b) {
              return iq[b] || b;
            })
          : "";
      }
      function jq(a, c) {
        var b = a.length
          ? y(function (d, e) {
              var f = c[e];
              return f === d ? null : f;
            }, a)
          : c;
        a.length = 0;
        B(u(M, ia("push", a)), c);
        return V(ka(null), b).length === a.length ? null : b;
      }
      function kq(a, c, b) {
        return y(function (d) {
          var e = d[0],
            f = d[1];
          if (T(e)) return e(a, c) || null;
          if (T(f)) return null;
          var g = !(!c[e] || !c[f]);
          !g &&
            2 === d.length &&
            (g = 0 === c[e] && 0 === c[f]) &&
            ((g = d[1]), (g = !(vj[d[0]] || vj[g])));
          return g
            ? ((d = Math.round(c[e]) - Math.round(c[f])),
              0 > d || 36e5 < d ? null : d)
            : 1 === d.length && c[e]
            ? Math.round(c[e])
            : null;
        }, b);
      }
      function ud(a, c, b) {
        return {
          ca: function (d, e) {
            var f = wj(b),
              g = d.J;
            g
              ? g.o("pv") && !g.o("ar")
                ? ((f.rf = g), e())
                : f.Fc
                ? f.Fc.push(e)
                : e()
              : e();
          },
          La: function (d, e) {
            var f = d.J,
              g = d.qj,
              h = wj(b);
            if (f) {
              var k = h.Fc;
              h.rf === f &&
                k &&
                (g && O(a).C("isEU", n(g, "settings.eu")),
                B(Oa, k),
                (h.Fc = null));
            }
            e();
          }
        };
      }
      function xj(a, c) {
        var b = lj(a, c),
          d = [],
          e = [];
        if (!b) return null;
        var f = C([a, b.Ee], lq),
          g = v(f, mq);
        b.aa
          .D(["initToParent"], function (h) {
            g(d, b.zb[h[1].counterId]);
          })
          .D(["parentConnect"], function (h) {
            g(e, b.Mb[h[1].counterId]);
          });
        return {
          aa: b.aa,
          Qm: function (h, k) {
            return new K(function (l, m) {
              b.Ee(h, k, function (q, p) {
                l([q, p]);
              });
              W(a, v(ab(), m), 5100, "is.o");
            });
          },
          og: function (h) {
            var k = { rg: [], Pe: [], data: h };
            d.push(k);
            return f(b.zb, k, h);
          },
          pg: function (h) {
            var k = { rg: [], Pe: [], data: h };
            e.push(k);
            return f(b.Mb, k, h);
          }
        };
      }
      function mq(a, c, b) {
        c = V(function (d) {
          return !G(b.info.counterId, d.Pe);
        }, c);
        B(function (d) {
          var e;
          b.info.counterId &&
            a(((e = {}), (e[b.info.counterId] = b), e), d, d.data);
        }, c);
      }
      function lq(a, c, b, d, e) {
        return new K(function (f, g) {
          var h = aa(b),
            k = u(d.resolve ? d.resolve : M, kd(f)),
            l = u(d.reject ? d.reject : M, kd(g));
          d.resolve = k;
          d.reject = l;
          B(function (m) {
            var q;
            d.Pe.push(m);
            var p = b[m],
              r = W(a, v(ab(), l), 5100, "is.m");
            c(
              p.window,
              z(e, ((q = {}), (q.toCounter = Ba(m)), q)),
              function (t, x) {
                ja(a, r);
                d.rg.push(m);
                d.resolve && d.resolve(x);
              }
            );
          }, h);
        })["catch"](E(a, "if.b"));
      }
      function nq(a, c) {
        var b = ve(a);
        c.D(["initToParent"], function (d) {
          var e = d[1];
          b.zb[e.counterId] = { info: e, window: d[0].source };
        })
          .D(["initToChild"], function (d) {
            var e = d[0];
            d = d[1];
            e.source === a.parent && c.V("parentConnect", [e, d]);
          })
          .D(["parentConnect"], function (d) {
            var e = d[1];
            e.counterId &&
              (b.Mb[e.counterId] = { info: e, window: d[0].source });
          });
      }
      function oq(a, c) {
        return function (b, d) {
          var e,
            f = { oc: da(a)(Z), key: a.Math.random(), dir: 0 };
          b.length &&
            ((f.oc = Ba(b[0])), (f.key = parseFloat(b[1])), (f.dir = Ba(b[2])));
          z(d, c);
          var g =
            ((e = { data: d }),
            (e.__yminfo = H(":", ["__yminfo", f.oc, f.key, f.dir])),
            e);
          return { Z: f, xg: fb(a, g) || "" };
        };
      }
      function mc(a) {
        var c = O(a),
          b = c.o("hitId");
        b || ((b = Pa(a)), c.C("hitId", b));
        return b;
      }
      function Gf(a) {
        var c;
        return (c = (c = !!O(a).o("oo")) || Hf(a));
      }
      function uc(a, c, b) {
        void 0 === b && (b = null);
        a.Ia || (a.Ia = yj());
        c && a.Ia.Sb(c, b);
        return a.Ia;
      }
      function dg(a) {
        return {
          ca: function (c, b) {
            var d = a.document,
              e = c.J;
            if (e && eg(a)) {
              var f = ha(a),
                g = function (h) {
                  eg(a) || (f.Wb(d, zj, g), b());
                  return h;
                };
              f.D(d, zj, g);
              e.C("pr", "1");
            } else b();
          }
        };
      }
      function Ya(a, c, b) {
        var d = se(a, c, b);
        return function (e, f) {
          var g,
            h = z({ J: Ca() }, e),
            k = h.G,
            l = h.J;
          k =
            ((g = {}),
            (g["page-url"] = (k && k["page-url"]) || ""),
            (g.charset = "utf-8"),
            g);
          "0" !== f.$ && (k["cnt-class"] = f.$);
          g = z(h, { G: z(h.G || {}, k) });
          h = "";
          if (g.J) {
            k = N(f);
            k = Aj(f)[k] || {};
            var m = k.status;
            "rt" === k.Wc && m
              ? (1 === m && (h = xh(a, f) + "."), g.J.C("rt", m))
              : (h = "");
          }
          z(g, { Ff: h });
          return d(g, "watch/" + f.id, {
            md: !(!l.o("pv") || l.o("ar") || l.o("wh"))
          });
        };
      }
      function se(a, c, b) {
        var d = Mb(a, c);
        return function (e, f, g) {
          void 0 === g && (g = {});
          var h = pq(a);
          e.Ff && (h = "" + e.Ff + h);
          f = [na.Ca + "//" + (h || "mc.yandex.ru") + "/" + f];
          return fg(a, b, e, !0)
            .then(C([e, f, g], d))
            .then(function (k) {
              e.qj = k.Pb;
              return fg(a, b, e).then(v(k.Pb, M));
            });
        };
      }
      function pq(a) {
        var c = "mc.yandex.ru",
          b = n(a, "document.referrer");
        if (!b) return c;
        a = Kc(a, b).host;
        return (c = "mc.yandex." + (mh(a) || "ru"));
      }
      function qq(a, c) {
        return a && c ? Bj(a) === Bj(c) : a || c ? !1 : !0;
      }
      function Bj(a) {
        return (a.split(":")[1] || "")
          .replace(/^\/*/, "")
          .replace(/^www\./, "")
          .split("/")[0];
      }
      function fg(a, c, b, d) {
        void 0 === d && (d = !1);
        return new K(function (e, f) {
          function g(l, m) {
            m();
            e();
          }
          var h = c.slice();
          h.push({ ca: g, La: g });
          var k = ub(h, function (l, m) {
            var q = d ? l.ca : l.La;
            if (q)
              try {
                q(b, m);
              } catch (p) {
                k(rq), f(p);
              }
            else m();
          });
          k(Cj);
        });
      }
      function Gb(a, c, b) {
        var d = b || "as";
        if (a.postMessage && !a.attachEvent) {
          b = ha(a);
          var e = "__ym__promise_" + Pa(a) + "_" + Pa(a),
            f = A;
          d = E(a, d, function (g) {
            try {
              var h = g.data;
            } catch (k) {
              return;
            }
            h === e && (f(), g.stopPropagation && g.stopPropagation(), c());
          });
          f = b.D(a, ["message"], d);
          a.postMessage(e, "*");
        } else W(a, c, 0, d);
      }
      function Dj(a, c, b, d, e) {
        void 0 === d && (d = 1);
        void 0 === e && (e = "itc");
        c = ub(c, b);
        xb(a, c, d)(Ta(E(a, e), A));
      }
      function xb(a, c, b, d) {
        void 0 === b && (b = 1);
        void 0 === d && (d = Ej);
        gg = Infinity === b;
        return la(function (e, f) {
          function g() {
            try {
              var k = c(d(a, b));
              h = h.concat(k);
            } catch (l) {
              return e(l);
            }
            c(sq);
            if (c(vd)) return f(h), Fj(a);
            gg ? (c(d(a, 1e4)), f(h), Fj(a)) : W(a, g, 100);
          }
          var h = [];
          tq(g);
        });
      }
      function Fj(a) {
        if (hg.length) {
          var c = hg.shift();
          gg ? c() : W(a, c, 100);
        } else ig = !1;
      }
      function tq(a) {
        ig ? hg.push(a) : ((ig = !0), a());
      }
      function Jc(a) {
        return la(function (c, b) {
          b(a);
        });
      }
      function uo(a) {
        return la(function (c, b) {
          a.then(b, c);
        });
      }
      function uq(a) {
        var c = [],
          b = 0;
        return la(function (d, e) {
          B(function (f, g) {
            f(
              Ta(d, function (h) {
                try {
                  (c[g] = h), (b += 1), b === a.length && e(c);
                } catch (k) {
                  d(k);
                }
              })
            );
          }, a);
        });
      }
      function to(a) {
        var c = [],
          b = !1;
        return la(function (d, e) {
          function f(g) {
            c.push(g) === a.length && d(c);
          }
          B(function (g) {
            g(
              Ta(f, function (h) {
                if (!b)
                  try {
                    e(h), (b = !0);
                  } catch (k) {
                    f(k);
                  }
              })
            );
          }, a);
        });
      }
      function Ta(a, c) {
        return function (b) {
          return b(a, c);
        };
      }
      function ub(a, c) {
        void 0 === c && (c = M);
        return la({ Pa: a, Xd: c, Je: !1, qa: 0 });
      }
      function Cj(a) {
        function c() {
          function d() {
            b = !0;
            a.qa += 1;
          }
          b = !1;
          a.Xd(a.Pa[a.qa], function () {
            d();
          });
          b || ((a.qa += 1), (d = F(Cj, null, a)));
        }
        for (var b = !0; !vd(a) && b; ) c();
      }
      function Ej(a, c) {
        return function (b) {
          var d = da(a),
            e = d(Z);
          return Gj(function (f, g) {
            d(Z) - e >= c && g(Hj);
          })(b);
        };
      }
      function we(a, c) {
        return function (b) {
          var d = da(a),
            e = d(Z);
          return xe(function (f) {
            d(Z) - e >= c && Hj(f);
          })(b);
        };
      }
      function xe(a) {
        return function (c) {
          for (var b; c.Pa.length && !vd(c); )
            (b = c.Pa.pop()), (b = c.Xd(b, c.Pa)), a(c);
          return b;
        };
      }
      function vq(a) {
        vd(a) && kb(Gc("i"));
        var c = a.Xd(a.Pa[a.qa]);
        a.qa += 1;
        return c;
      }
      function sq(a) {
        a.Je = !1;
      }
      function Hj(a) {
        a.Je = !0;
      }
      function rq(a) {
        a.qa = a.Pa.length;
      }
      function vd(a) {
        return a.Je || a.Pa.length <= a.qa;
      }
      function Mb(a, c) {
        return function (b, d, e) {
          void 0 === e && (e = {});
          return Ij(a, c, d, b, z(e, { va: b.va || [], ba: e.ba || b.ba }));
        };
      }
      function Ij(a, c, b, d, e, f, g) {
        var h;
        void 0 === f && (f = 0);
        void 0 === g && (g = 0);
        var k = z({}, e),
          l = c[g],
          m = l[0];
        l = l[1];
        var q = z({}, d.G),
          p = da(a);
        d.J && (q["browser-info"] = Ca(d.J.l()).C("st", p(ye)).Aa());
        !q.t && (p = d.Ia) && (p.C("ti", m), (q.t = p.Aa()));
        p = b[f];
        (k.Nb && k.Nb["Content-Type"]) ||
          !k.ba ||
          ((k.Nb = z(
            {},
            k.Nb,
            ((h = {}),
            (h["Content-Type"] = "application/x-www-form-urlencoded"),
            h)
          )),
          (k.ba = "site-info=" + Ud(k.ba)));
        k.Jg = k.ba ? "POST" : "GET";
        k.Ob = q;
        k.va.push(m);
        return l("" + p + (d.Si ? "/1" : ""), k)
          .then(function (r) {
            return { Pb: r, Uj: f };
          })
          ["catch"](function (r) {
            var t = g + 1 >= c.length,
              x = f + 1 >= b.length;
            t && x && kb(r);
            return Ij(a, c, b, d, e, !x && t ? f + 1 : f, t ? 0 : g + 1);
          });
      }
      function Pd(a, c) {
        var b = c.ae,
          d = b || "uid";
        b = b ? a.location.hostname : void 0;
        var e = ac(a),
          f = Ka(a),
          g = da(a),
          h = g(ye),
          k = Jj(a, c),
          l = k[0];
        k = k[1];
        var m = e.o("d");
        Kj(a, c);
        var q = !1;
        !k && l && ((k = l), (q = !0));
        if (!k) (k = H("", [g(ye), Pa(a)])), (q = !0);
        else if (!m || 15768e3 < h - Ba(m)) q = !0;
        q && !c.jb && (e.C(d, k, 525600, b), e.C("d", "" + h, 525600, b));
        f.C(d, k);
        return k;
      }
      function Jj(a, c) {
        var b = Ka(a),
          d = ac(a),
          e = c.ae || "uid";
        return [b.o(e), d.o(e)];
      }
      function wb(a) {
        a = da(a);
        return Math.round(a(jg) / 50);
      }
      function jg(a) {
        var c = a.sa,
          b = c[1];
        a = c[0] && b ? b() : Z(a) - a.yi;
        return Math.round(a);
      }
      function ye(a) {
        return Math.round(Z(a) / 1e3);
      }
      function qb(a) {
        return Math.floor(Z(a) / 1e3 / 60);
      }
      function Z(a) {
        var c = a.Re;
        return 0 !== c ? c : kg(a.l, a.sa);
      }
      function ag(a) {
        var c = ha(a),
          b = Lj(a),
          d = { l: a, Re: 0, sa: b, yi: kg(a, b) },
          e = b[1];
        (b[0] && e) ||
          c.D(a, ["beforeunload", "unload"], function () {
            0 === d.Re && (d.Re = kg(a, d.sa));
          });
        return la(d);
      }
      function wq(a) {
        return (10 > a ? "0" : "") + a;
      }
      function gf(a, c, b) {
        void 0 === c && (c = "");
        void 0 === b && (b = "_ym");
        var d = "" + b + c + "_";
        return {
          Ud: xq(a),
          o: function (e, f) {
            var g = Mj(a, "" + d + e);
            return Qa(g) && !X(f) ? f : g;
          },
          C: function (e, f) {
            Nj(a, "" + d + e, f);
            return this;
          },
          pc: function (e) {
            Oj(a, "" + d + e);
            return this;
          }
        };
      }
      function Nj(a, c, b) {
        var d = lg(a);
        a = fb(a, b);
        if (!Qa(a))
          try {
            d.setItem(c, a);
          } catch (e) {}
      }
      function Mj(a, c) {
        var b = lg(a);
        try {
          return Fb(a, b.getItem(c));
        } catch (d) {}
        return null;
      }
      function Oj(a, c) {
        var b = lg(a);
        try {
          b.removeItem(c);
        } catch (d) {}
      }
      function lg(a) {
        try {
          return a.localStorage;
        } catch (c) {}
        return null;
      }
      function Bi(a, c, b) {
        mg(a, "metrika_enabled", "1", 0, c, b, !0);
        var d = Pj(a);
        (d = d && d.metrika_enabled) && Qj(a, "metrika_enabled", c, b, !0);
        return !!d;
      }
      function mg(a, c, b, d, e, f, g) {
        void 0 === g && (g = !1);
        if (Ci(a, ge, c)) {
          var h = c + "=" + encodeURIComponent(b) + ";";
          h += "" + yq(a);
          if (d) {
            var k = new Date();
            k.setTime(k.getTime() + 6e4 * d);
            h += "expires=" + k.toUTCString() + ";";
          }
          e && ((d = e.replace(zq, "")), (h += "domain=" + d + ";"));
          try {
            (a.document.cookie = h + ("path=" + (f || "/"))),
              g || (Rj(a)[c] = b);
          } catch (l) {}
        }
      }
      function ge(a, c) {
        var b = Rj(a);
        return b ? b[c] || null : null;
      }
      function Pj(a) {
        try {
          var c = a.document.cookie;
          if (!ma(c)) {
            var b = {};
            B(function (d) {
              d = d.split("=");
              var e = d[1];
              b[sb(d[0])] = sb(Sj(e));
            }, (c || "").split(";"));
            return b;
          }
        } catch (d) {}
        return null;
      }
      function Ci(a, c, b) {
        G(b, ["gdpr", "gdpr_popup", "metrika_enabled", "_ym_debug_build"])
          ? (a = !0)
          : ((b = le(a)),
            (b = Yf(b)),
            (a = c(a, "gdpr")),
            (a = V($b(Aq), b).length ? !0 : G(a, [Qc, Bq])));
        return a;
      }
      function gj(a) {
        if (G(a, ["GDPR-ok-view-default", "GDPR-ok-view-detailed"])) return Qc;
        a = a.replace("GDPR-ok-view-detailed-", "");
        return G(a, dc) ? a : Qc;
      }
      function fj(a, c, b) {
        void 0 === b && (b = M);
        var d = cd(a);
        b(d);
        var e = v(d, Cq);
        ze(a, c, function (f) {
          f.ra.D(e);
        });
        return d;
      }
      function Cq(a, c) {
        var b = n(c, "ymetrikaEvent");
        b && a.V(n(b, "type"), b);
      }
      function ze(a, c, b, d) {
        void 0 === b && (b = A);
        void 0 === d && (d = !1);
        var e = gd(a);
        if (c && T(c.push)) {
          var f = c.push;
          c.push = function () {
            var g = Aa(arguments),
              h = g[0];
            d && e.V(h);
            g = f.apply(c, g);
            d || e.V(h);
            return g;
          };
          a = {
            ra: e,
            unsubscribe: function () {
              c.push = f;
            }
          };
          b(a);
          B(e.V, c);
          return a;
        }
      }
      function le(a) {
        a = O(a);
        var c = a.o("dataLayer", []);
        a.C("dataLayer", c);
        return c;
      }
      function Lp(a, c) {
        var b, d;
        a.push(((b = {}), (b.ymetrikaEvent = ((d = {}), (d.type = c), d)), b));
      }
      function Vh(a, c, b) {
        function d() {
          f = 0;
          g && ((g = !1), (f = W(a, d, b)), e.V(h));
        }
        var e = gd(a),
          f,
          g = !1,
          h;
        c.D(function (k) {
          g = !0;
          h = k;
          f || d();
          return A;
        });
        return e;
      }
      function Dq(a, c) {
        return a.clearInterval(c);
      }
      function Eq(a, c, b, d) {
        return a.setInterval(E(a, "i.err." + (d || "def"), c), b);
      }
      function W(a, c, b, d) {
        return Ae(a, E(a, "d.err." + (d || "def"), c), b);
      }
      function cd(a) {
        var c = {};
        return {
          D: function (b, d) {
            B(function (e) {
              n(c, e) || (c[e] = gd(a));
              c[e].D(d);
            }, b);
            return this;
          },
          ea: function (b, d) {
            B(function (e) {
              n(c, e) && c[e].ea(d);
            }, b);
            return this;
          },
          V: function (b, d) {
            return n(c, b) ? E(a, "e." + d, c[b].V)(d) : [];
          }
        };
      }
      function gd(a) {
        var c = [],
          b = {};
        b.Im = c;
        b.D = u(ia("push", c), v(b, M));
        b.ea = u(gc(Ob(a))(c), gc(ia("splice", c))(1), v(b, M));
        b.V = u(M, gc(Oa), Fq(c));
        return b;
      }
      function D(a, c, b) {
        return function () {
          return E(arguments[0], a, c, b).apply(this, arguments);
        };
      }
      function E(a, c, b, d, e) {
        var f = kb,
          g = b || f;
        g = b ? Gq(g, c, a, e) : g;
        return function () {
          var h = d;
          try {
            h = g.apply(e || null, arguments);
          } catch (k) {
            fe(a, c, k);
          }
          return h;
        };
      }
      function Gq(a, c, b, d) {
        return function () {
          var e, f, g, h;
          yc += 1;
          var k = null,
            l = null,
            m = ng(b),
            q = m ? Da("now", m.now) : !1;
          try {
            var p = q ? m.now() : 0;
            l = a.apply(d || null, arguments);
            var r = q ? m.now() : 0;
            m = r - p;
            p = yc > Be;
            300 <= m &&
              p &&
              ((Be = yc),
              !q ||
                r % 1e3 ||
                Tj(
                  b,
                  ((e = {}),
                  (e.perf =
                    ((f = {}),
                    (f[na.Ma] =
                      ((g = {}),
                      (g["t.l.300"] = ((h = {}), (h[c] = b.location.href), h)),
                      g)),
                    f)),
                  e),
                  "er"
                ));
            1 === yc && 50 <= m && (Uj += m);
          } catch (t) {
            k = t;
          }
          --yc;
          yc < Be && (Be = yc);
          k && kb(k);
          return l;
        };
      }
      function kg(a, c) {
        var b = c || Lj(a),
          d = b[0];
        b = b[1];
        return !isNaN(d) && T(b)
          ? Math.round(b() + d)
          : a.Date.now
          ? a.Date.now()
          : new a.Date().getTime();
      }
      function Lj(a) {
        a = ng(a);
        var c = n(a, "timing.navigationStart"),
          b = n(a, "now");
        b && (b = F(b, a));
        return [c, b];
      }
      function ng(a) {
        return n(a, "performance") || n(a, "webkitPerformance");
      }
      function fe(a, c, b) {
        var d, e, f, g, h;
        if (!(0.01 >= a.Math.random())) {
          var k = "u.a.e",
            l = "";
          b &&
            ("object" === typeof b
              ? ((k = b.message),
                (l =
                  ("string" === typeof b.stack &&
                    b.stack.replace(/\n/g, "\\n")) ||
                  "n.s.e.s"))
              : (k = "" + b));
          Hq(k) ||
            Ha(u(ia("indexOf", k), ka(-1), yb), Iq) ||
            (Jq(k) && 0.1 <= a.Math.random()) ||
            ((c =
              ((d = {}),
              (d.jserrs =
                ((e = {}),
                (e[na.Ma] =
                  ((f = {}),
                  (f[k] =
                    ((g = {}),
                    (g[c] = ((h = {}), (h[a.location.href] = l), h)),
                    g)),
                  f)),
                e)),
              d)),
            Tj(a, c, "er"));
        }
      }
      function Tj(a, c, b, d) {
        var e;
        d = na.Ca + "//mc.yandex.ru/watch/" + (d || na.Pg);
        try {
          var f = Od(a, b)[0];
          var g = void 0 === f ? [] : f;
          var h = g[1];
          var k = void 0 === h ? null : h;
        } catch (l) {
          return;
        }
        b =
          ((e = {}),
          (e["browser-info"] = "ar:1:pv:1:v:" + na.Ma + ":vf:" + wd.version),
          (e["page-url"] = a.location && "" + a.location.href),
          e);
        a = fb(a, c);
        if (k && a)
          k(d, { Ob: b, va: [], ba: "site-info=" + Ud(a) })["catch"](A);
      }
      function Hb(a) {
        return y(function (c) {
          return !c || G(c, a) ? c : 0;
        }, zc);
      }
      function Vj(a) {
        return !qd(a) && Wj(a);
      }
      function og(a) {
        return Va(a) ? v(a, Kq) : !1;
      }
      function Wj(a) {
        var c = n(a, "navigator.sendBeacon");
        return c && Da("sendBeacon", c)
          ? C([a, F(c, n(a, "navigator"))], Lq)
          : !1;
      }
      function Lq(a, c, b, d) {
        return new K(function (e, f) {
          if (!n(a, "navigator.onLine")) return f();
          var g = z(d.Ob, { "force-urlencoded": 1 });
          g = b + "?" + bd(g) + (d.ba ? "&" + d.ba : "");
          return 2e3 < g.length ? f(ab("sb.tlq")) : c(g) ? e("") : f();
        });
      }
      function Kq(a, c, b) {
        return new K(function (d, e) {
          var f,
            g,
            h = "_ymjsp" + Pa(a),
            k = z(((f = {}), (f.callback = h), f), b.Ob),
            l = C([a, h], Mq);
          a[h] = function (q) {
            try {
              l(), vc(m), d(q);
            } catch (p) {
              e(p);
            }
          };
          k.wmode = "5";
          var m = Nc(a, ((g = {}), (g.src = Xj(c, b, k)), g));
          if (!m) return l(), e(Gc("jp.s"));
          f = v(m, vc);
          f = u(f, v(ab(b.va), e));
          g = Ae(a, f, b.Vb || 1e4);
          g = C([a, g], ja);
          m.onload = g;
          m.onerror = u(l, g, f);
        });
      }
      function Mq(a, c) {
        try {
          delete a[c];
        } catch (b) {
          a[c] = void 0;
        }
      }
      function xd(a) {
        var c = Va(a);
        return c ? C([a, c], Nq) : !1;
      }
      function Nq(a, c, b, d) {
        return new K(function (e, f) {
          var g = Zb(a),
            h = c("img"),
            k = u(v(h, vc), v(ab(d.va), f)),
            l = Ae(a, k, d.Vb || 3e3);
          h.onerror = k;
          h.onload = u(v(h, vc), v(null, e), C([a, l], ja));
          k = z({}, d.Ob);
          delete k.wmode;
          h.src = Xj(b, d, k);
          td(a) &&
            (z(h.style, {
              position: "absolute",
              visibility: "hidden",
              width: "0px",
              height: "0px"
            }),
            g.appendChild(h));
        });
      }
      function Qh(a, c, b) {
        var d = Ga(c);
        return d && gi(a, c, V(Boolean, ["p", Oq[d], "c"]), Ph, b);
      }
      function Oh(a, c) {
        var b = Xb(pg, a, c);
        if (!b) {
          var d = Xb("div", a, c);
          d && (jb(pg + ",div", d).length || (b = d));
        }
        return b;
      }
      function gi(a, c, b, d, e) {
        return J(
          function (f, g) {
            var h = null;
            g in Yj
              ? (h = c.getAttribute && c.getAttribute(Yj[g]))
              : g in Tc &&
                (h =
                  "p" === g
                    ? Tc[g](a, c, e)
                    : "c" === g
                    ? Tc[g](a, c, d)
                    : Tc[g](a, c));
            h &&
              ((h = h.slice(0, Zj[g] || 100)), (f[g] = qg[g] ? "" + wc(h) : h));
            return f;
          },
          {},
          b
        );
      }
      function Di(a, c, b) {
        if (Uc(a)) return sa(b.querySelectorAll(c));
        var d = ak(c.split(" "), b);
        return V(function (e, f) {
          return Ob(a)(e, d) === f;
        }, d);
      }
      function ak(a, c) {
        var b = va(a),
          d = b.shift();
        if (!d) return [];
        d = c.getElementsByTagName(d);
        return b.length ? oc(v(b, ak), sa(d)) : sa(d);
      }
      function Ic(a, c) {
        if (c.querySelector) return c.querySelector(a);
        var b = jb(a, c);
        return b && b.length ? b[0] : null;
      }
      function jb(a, c) {
        if (!c) return [];
        var b = c.querySelectorAll(a);
        return b ? sa(b) : [];
      }
      function Nc(a, c) {
        var b = a.document,
          d = z({ type: "text/javascript", charset: "utf-8", async: !0 }, c),
          e = Va(a);
        if (e) {
          var f = e("script");
          bk(
            za,
            cb(function (l) {
              var m = l[0];
              l = l[1];
              "async" === m && l ? (f.async = !0) : (f[m] = l);
            })
          )(d);
          try {
            var g = ec("getElementsByTagName", b),
              h = g("head")[0];
            if (!h) {
              var k = g("html")[0];
              h = e("head");
              k && k.appendChild(h);
            }
            h.insertBefore(f, h.firstChild);
            return f;
          } catch (l) {}
        }
      }
      function Xi(a, c) {
        var b = ck(a);
        G(c, b.mb) &&
          ((b.mb = V(u(ka(c), yb), b.mb)),
          b.mb.length || (vc(b.cb), (b.cb = null)));
      }
      function dk(a, c, b) {
        var d = ck(c);
        G(b, d.mb) || d.mb.push(b);
        if (Qa(d.cb)) {
          b = Va(a);
          if (!b) return null;
          b = b("iframe");
          z(b.style, {
            display: "none",
            width: "1px",
            height: "1px",
            visibility: "hidden"
          });
          b.src = c;
          a = Zb(a);
          if (!a) return null;
          a.appendChild(b);
          d.cb = b;
        } else
          (a = n(d.cb, "contentWindow")) && a.postMessage("frameReinit", "*");
        return d.cb;
      }
      function Pq(a, c) {
        var b = ca(a) ? a : [a];
        c = c || document;
        if (c.querySelectorAll) {
          var d = H(
            ", ",
            y(function (e) {
              return "." + e;
            }, b)
          );
          return sa(c.querySelectorAll(d));
        }
        if (c.getElementsByClassName)
          return oc(u(ia("getElementsByClassName", c), sa), b);
        d = c.getElementsByTagName("*");
        b = "(" + H("|", b) + ")";
        return V(v(b, tc), sa(d));
      }
      function rg(a, c, b) {
        for (
          var d = "", e = Nh(), f = Ga(c) || "*";
          c && c.parentNode && !G(f, ["BODY", "HTML"]);

        )
          (d += e[f] || "*"),
            (d += ek(a, c, b) || ""),
            (c = c.parentElement),
            (f = Ga(c) || "*");
        return sb(d, 128);
      }
      function ek(a, c, b) {
        if ((a = Ce(a, c))) {
          a = a.childNodes;
          for (var d = c && c.nodeName, e = 0, f = 0; f < a.length; f += 1)
            if (d === (a[f] && a[f].nodeName)) {
              if (c === a[f]) return e;
              (b && a[f] === b) || (e += 1);
            }
        }
        return 0;
      }
      function Ce(a, c) {
        var b = n(a, "document");
        if (!c || c === b.documentElement) return null;
        if (c === Ac(a)) return b.documentElement;
        b = null;
        try {
          b = c.parentNode;
        } catch (d) {}
        return b;
      }
      function Kf(a, c) {
        var b = sg(a, c),
          d = b.left;
        b = b.top;
        var e = De(a, c);
        return [d, b, e[0], e[1]];
      }
      function De(a, c) {
        var b = n(a, "document");
        if (c === Ac(a) || c === b.documentElement) {
          b = Zb(a);
          var d = yd(a);
          return [
            Math.max(b.scrollWidth, d[0]),
            Math.max(b.scrollHeight, d[1])
          ];
        }
        return (b = dd(c))
          ? [b.width, b.height]
          : [c.offsetWidth, c.offsetHeight];
      }
      function sg(a, c) {
        var b = c,
          d = n(a, "document"),
          e = Ga(b);
        if (
          !b ||
          !b.ownerDocument ||
          "PARAM" === e ||
          b === Ac(a) ||
          b === d.documentElement
        )
          return { left: 0, top: 0 };
        if ((d = b.getBoundingClientRect && dd(b)))
          return (
            (b = Of(a)),
            { left: Math.round(d.left + b.x), top: Math.round(d.top + b.y) }
          );
        for (e = d = 0; b; )
          (d += b.offsetLeft), (e += b.offsetTop), (b = b.offsetParent);
        return { left: d, top: e };
      }
      function Xb(a, c, b) {
        if (!(c && c.Element && c.Element.prototype && c.document && b))
          return null;
        if (
          c.Element.prototype.closest &&
          Da("closest", c.Element.prototype.closest) &&
          b.closest
        )
          return b.closest(a);
        var d = Ji(c);
        if (d) {
          for (; b && 1 === b.nodeType && !d.call(b, a); )
            b = b.parentElement || b.parentNode;
          return b && 1 === b.nodeType ? b : null;
        }
        if (Uc(c)) {
          for (
            a = sa((c.document || c.ownerDocument).querySelectorAll(a));
            b && 1 === b.nodeType && -1 === Ob(c)(b, a);

          )
            b = b.parentElement || b.parentNode;
          return b && 1 === b.nodeType ? b : null;
        }
        return null;
      }
      function Uc(a) {
        return !(
          !Da("querySelectorAll", n(a, "Element.prototype.querySelectorAll")) ||
          !a.document.querySelectorAll
        );
      }
      function fk(a) {
        return Ee(a) && !Ha(ka(a.type), Qq)
          ? Fe(a)
            ? !a.checked
            : !a.value
          : Rq(a)
          ? !a.value
          : Sq(a)
          ? 0 > a.selectedIndex
          : !0;
      }
      function Ga(a) {
        if (a)
          try {
            var c = a.nodeName;
            if (Fa(c)) return c;
            c = a.tagName;
            if (Fa(c)) return c;
          } catch (b) {}
      }
      function gk(a, c) {
        var b = a.document.getElementsByTagName("form");
        return Ob(a)(c, sa(b));
      }
      function Tq(a, c, b) {
        b = ec("dispatchEvent", b || a.document);
        var d = null,
          e = n(a, "Event.prototype.constructor");
        if (
          e &&
          (Da("(Event|Object|constructor)", e) ||
            (Ge(a) && "[object Event]" === "" + e))
        )
          try {
            d = new a.Event(c);
          } catch (f) {
            if ((a = ec("createEvent", n(a, "document"))) && T(a)) {
              try {
                d = a(c);
              } catch (g) {}
              d && d.initEvent && d.initEvent(c, !1, !1);
            }
          }
        d && b(d);
      }
      function dd(a) {
        try {
          return a.getBoundingClientRect && a.getBoundingClientRect();
        } catch (c) {
          return "object" === typeof c &&
            null !== c &&
            16389 === (c.Vf && c.Vf & 65535)
            ? { top: 0, bottom: 0, left: 0, width: 0, height: 0, right: 0 }
            : null;
        }
      }
      function Of(a) {
        var c = Ac(a),
          b = n(a, "document");
        return {
          x:
            a.pageXOffset ||
            (b.documentElement && b.documentElement.scrollLeft) ||
            (c && c.scrollLeft) ||
            0,
          y:
            a.pageYOffset ||
            (b.documentElement && b.documentElement.scrollTop) ||
            (c && c.scrollTop) ||
            0
        };
      }
      function yd(a) {
        var c = tg(a);
        if (c) {
          var b = c[2];
          return [a.Math.round(c[0] * b), a.Math.round(c[1] * b)];
        }
        c = Zb(a);
        return [
          n(c, "clientWidth") || a.innerWidth,
          n(c, "clientHeight") || a.innerHeight
        ];
      }
      function tg(a) {
        var c = n(a, "visualViewport.width"),
          b = n(a, "visualViewport.height");
        a = n(a, "visualViewport.scale");
        return ma(c) || ma(b) ? null : [Math.floor(c), Math.floor(b), a];
      }
      function Zb(a) {
        var c = n(a, "document") || {},
          b = c.documentElement;
        return "CSS1Compat" === c.compatMode ? b : Ac(a) || b;
      }
      function Ac(a) {
        a = n(a, "document");
        try {
          return a.getElementsByTagName("body")[0];
        } catch (c) {
          return null;
        }
      }
      function tc(a, c) {
        try {
          return new RegExp("(?:^|\\s)" + a + "(?:\\s|$)").test(c.className);
        } catch (b) {
          return !1;
        }
      }
      function Bc(a) {
        var c;
        try {
          if ((c = a.target || a.srcElement))
            !c.ownerDocument && c.documentElement
              ? (c = c.documentElement)
              : c.ownerDocument !== document && (c = null);
        } catch (b) {}
        return c;
      }
      function vc(a) {
        var c = a && a.parentNode;
        c && c.removeChild(a);
      }
      function Tb(a) {
        return a ? a.innerText || "" : "";
      }
      function wf(a) {
        if (ma(a)) return !1;
        a = a.nodeType;
        return 3 === a || 8 === a;
      }
      function sb(a, c) {
        if (a) {
          var b = hk ? hk.call(a) : ("" + a).replace(Zi, "");
          return c && b.length > c ? b.substring(0, c) : b;
        }
        return "";
      }
      function Ub(a) {
        var c;
        if ((c = n(a, "XMLHttpRequest")))
          if ((c = "withCredentials" in new a.XMLHttpRequest())) {
            a: {
              if (
                Uq.test(a.location.host) &&
                a.opera &&
                T(a.opera.version) &&
                ((c = a.opera.version()),
                "string" === typeof c && "12" === c.split(".")[0])
              ) {
                c = !0;
                break a;
              }
              c = !1;
            }
            c = !c;
          }
        return c ? v(a, Vq) : !1;
      }
      function Vq(a, c, b) {
        var d,
          e = new a.XMLHttpRequest(),
          f = b.ba,
          g = z(b.md ? ((d = {}), (d.wmode = "7"), d) : {}, b.Ob);
        return new K(function (h, k) {
          e.open(b.Jg || "GET", c + "?" + bd(g), !0);
          e.withCredentials = !1 !== b.Lg;
          b.Vb && (e.timeout = b.Vb);
          bk(
            za,
            cb(function (m) {
              e.setRequestHeader(m[0], m[1]);
            })
          )(b.Nb);
          var l = C([a, e, ab(b.va), b.md, b.rj, h, k], Wq);
          e.onreadystatechange = l;
          try {
            e.send(f);
          } catch (m) {}
        });
      }
      function Wq(a, c, b, d, e, f, g, h) {
        if (4 === c.readyState)
          if ((200 === c.status || e || g(b), e))
            200 === c.status
              ? f(c.responseText)
              : g(
                  Gc(
                    "http." +
                      c.status +
                      ".st." +
                      c.statusText +
                      ".rt." +
                      ("" + c.responseText).substring(0, 50)
                  )
                );
          else {
            e = null;
            if (d)
              try {
                (e = Fb(a, c.responseText)) || g(b);
              } catch (k) {
                g(b);
              }
            f(e);
          }
        return h;
      }
      function Xj(a, c, b) {
        (b = bd(b)) && (a += "?" + b);
        c.ba && (a += (b ? "&" : "?") + c.ba);
        return a;
      }
      function fb(a, c, b) {
        try {
          return a.JSON.stringify(c, null, b);
        } catch (d) {
          return null;
        }
      }
      function bd(a) {
        return a
          ? u(
              za,
              Oc(function (c, b) {
                var d = b[0],
                  e = b[1];
                X(e) || ma(e) || c.push(d + "=" + Ud(e));
                return c;
              }, []),
              od("&")
            )(a)
          : "";
      }
      function Xq(a) {
        return a
          ? u(
              cb(function (c) {
                c = c.split("=");
                var b = c[1];
                return [c[0], ma(b) ? void 0 : Sj(b)];
              }),
              Oc(function (c, b) {
                c[b[0]] = b[1];
                return c;
              }, {})
            )(a.split("&"))
          : {};
      }
      function Sj(a) {
        var c = "";
        try {
          c = decodeURIComponent(a);
        } catch (b) {}
        return c;
      }
      function Ud(a) {
        try {
          return encodeURIComponent(a);
        } catch (c) {}
        a = H(
          "",
          V(function (c) {
            return 55296 >= c.charCodeAt(0);
          }, a.split(""))
        );
        return encodeURIComponent(a);
      }
      function ug() {
        var a = Aa(arguments);
        return kb(ab(a));
      }
      function ab(a) {
        var c = "";
        ca(a) ? (c = H(".", a)) : Fa(a) && (c = a);
        return Gc("err.kn(" + na.Ma + ")" + c);
      }
      function Yq(a) {
        this.message = a;
      }
      function ik(a, c, b, d, e) {
        var f = a.addEventListener && a.removeEventListener,
          g = !f && a.attachEvent && a.detachEvent;
        if (f || g)
          if (
            ((e = e
              ? f
                ? "removeEventListener"
                : "detachEvent"
              : f
              ? "addEventListener"
              : "attachEvent"),
            f)
          )
            a[e](c, b, d);
          else a[e]("on" + c, b);
      }
      function S(a) {
        return J(
          function (c, b) {
            var d = n(a, "location." + b);
            c[b] = d ? "" + d : "";
            return c;
          },
          {},
          Zq
        );
      }
      function mh(a) {
        var c = a.match(jk);
        if (c) {
          a = c[1];
          if ((c = c[2])) return G(c, vg) ? c : !1;
          if (a) return vg[0];
        }
        return !1;
      }
      function $q(a, c, b, d, e) {
        var f = "object" === typeof a ? a : { id: a, $: d, hc: e, T: b };
        a = J(
          function (g, h) {
            var k = h[1],
              l = k.Ti;
            k = f[k.Xf];
            g[h[0]] = l ? l(k) : k;
            return g;
          },
          {},
          za(c)
        );
        kk(a, a.T || {});
        return a;
      }
      function ar(a, c) {
        return J(
          function (b, d) {
            b[c[d[0]].Xf] = d[1];
            return b;
          },
          {},
          za(a)
        );
      }
      function lk(a) {
        a = N(a);
        return hc[a] && hc[a].Jj;
      }
      function kk(a, c) {
        var b = N(a),
          d = n(c, "__ym.turbo_page"),
          e = n(c, "__ym.turbo_page_id");
        hc[b] || (hc[b] = {});
        if (d || e) (hc[b].Jj = d), (hc[b].Kj = e);
      }
      function br(a) {
        return (
          He(a) || jd(a) || /mobile/i.test(vb(a)) || !X(n(a, "orientation"))
        );
      }
      function eg(a) {
        return G(
          "prerender",
          y(v(n(a, "document"), n), [
            "webkitVisibilityState",
            "visibilityState"
          ])
        );
      }
      function Pa(a, c, b) {
        var d = X(b);
        X(c) && d
          ? ((d = 1), (c = 1073741824))
          : d
          ? (d = 1)
          : ((d = c), (c = b));
        return a.Math.floor(a.Math.random() * (c - d)) + d;
      }
      function Tl(a) {
        try {
          return parseInt(a, 10);
        } catch (c) {
          return null;
        }
      }
      function be(a, c) {
        return a.isFinite(c) && !a.isNaN(c) && "[object Number]" === wg(c);
      }
      function cr(a) {
        for (var c = [], b = a.length - 1; 0 <= b; --b)
          c[a.length - 1 - b] = a[b];
        return c;
      }
      function Ra(a, c) {
        B(u(M, ia("push", a)), c);
        return a;
      }
      function xg(a, c) {
        return Array.prototype.sort.call(c, a);
      }
      function fm(a) {
        return 0 === a.length;
      }
      function sa(a) {
        return a
          ? ca(a)
            ? a
            : zd
            ? zd(a)
            : "number" === typeof a.length && 0 <= a.length
            ? mk(a)
            : []
          : [];
      }
      function wm(a) {
        if (0 > a) return [];
        for (var c = [], b = 0; b <= a; b += 1) c.push(b);
        return c;
      }
      function dr(a, c) {
        if (!Sc(a)) return !0;
        try {
          c.call({ 0: !0, length: -Math.pow(2, 32) + 1 }, function () {
            throw 1;
          });
        } catch (b) {
          return !1;
        }
        return !0;
      }
      function Ie(a, c, b) {
        return b ? a : c;
      }
      function Rf(a, c, b) {
        try {
          if (T(c)) {
            var d = Aa(arguments).slice(3);
            ma(b) ? c.apply(void 0, d) : F.apply(void 0, va([c, b], d))();
          }
        } catch (e) {
          Ae(a, v(e, kb), 0);
        }
      }
      function kb(a) {
        throw a;
      }
      function Ae(a, c, b) {
        return ec("setTimeout", a)(c, b);
      }
      function ja(a, c) {
        return ec("clearTimeout", a)(c);
      }
      function $d() {
        return [];
      }
      function Cc() {
        return {};
      }
      function ec(a, c) {
        var b = n(c, a),
          d = n(c, "constructor.prototype." + a) || b;
        try {
          if (d && d.apply)
            return function () {
              return d.apply(c, arguments);
            };
        } catch (e) {
          return b;
        }
        return d;
      }
      function ib(a, c) {
        return function () {
          var b = Aa(arguments),
            d = b[0];
          b = b.slice(1);
          var e = O(d),
            f = e.o("m832", {}),
            g = n(f, a);
          g || ((g = w(c)), (f[a] = g), e.C("m832", f));
          return g.apply(void 0, va([d], b));
        };
      }
      function ic(a) {
        a = a.Ya = a.Ya || {};
        var c = (a._metrika = a._metrika || {});
        return {
          Ha: function (b, d) {
            yg.call(c, b) || (c[b] = d);
            return this;
          },
          C: function (b, d) {
            c[b] = d;
            return this;
          },
          o: function (b, d) {
            var e = c[b];
            return yg.call(c, b) || X(d) ? e : d;
          }
        };
      }
      function er(a, c) {
        for (var b = "", d = 0; d < c; d += 1) b += a;
        return b;
      }
      function fr(a) {
        return X(a)
          ? []
          : Ad(
              function (c, b) {
                c.push([b, a[b]]);
                return c;
              },
              [],
              nk(a)
            );
      }
      function gr(a, c) {
        return Ad(
          function (b, d, e) {
            d = a(d, e);
            return b.concat(ca(d) ? d : [d]);
          },
          [],
          c
        );
      }
      function hr(a, c) {
        return Ad(
          function (b, d, e) {
            b.push(a(d, e));
            return b;
          },
          [],
          c
        );
      }
      function ir() {
        var a = Aa(arguments),
          c = a[0];
        for (a = a.slice(1); a.length; ) {
          var b = a.shift(),
            d;
          for (d in b) nd(b, d) && (c[d] = b[d]);
          nd(b, "toString") && (c.toString = b.toString);
        }
        return c;
      }
      function nk(a) {
        var c = [],
          b;
        for (b in a) nd(a, b) && c.push(b);
        return c;
      }
      function jr(a, c) {
        return 1 <= ok(ka(a), c).length;
      }
      function ok(a, c) {
        return Ad(
          function (b, d, e) {
            a(d, e) && b.push(d);
            return b;
          },
          [],
          c
        );
      }
      function nd(a, c) {
        return ma(a) ? !1 : yg.call(a, c);
      }
      function ca(a) {
        if (Bd) return Bd(a);
        (Bd = Ja(Array.isArray, "isArray")) || (Bd = kr);
        return Bd(a);
      }
      function u() {
        var a = Aa(arguments),
          c = a.shift();
        return function () {
          var b = c.apply(void 0, arguments);
          return J(pk, b, a);
        };
      }
      function nc(a, c) {
        void 0 === c && (c = {});
        if (!a || 1 > a.length) return c;
        J(
          function (b, d, e) {
            if (e === a.length - 1) return b;
            e === a.length - 2 ? (b[d] = a[e + 1]) : b[d] || (b[d] = {});
            return b[d];
          },
          c,
          a
        );
        return c;
      }
      function n(a, c) {
        return a
          ? J(
              function (b, d) {
                if (ma(b)) return b;
                try {
                  return b[d];
                } catch (e) {}
                return null;
              },
              a,
              c.split(".")
            )
          : null;
      }
      function Oc(a, c) {
        return C([a, c], J);
      }
      function Sa(a) {
        return ia("test", a);
      }
      function ia(a, c) {
        return F(c[a], c);
      }
      function v(a, c) {
        return C([a], c);
      }
      function C(a, c) {
        return F.apply(void 0, va([c, null], a));
      }
      function lr() {
        var a = Aa(arguments),
          c = a[0],
          b = a[1],
          d = a.slice(2);
        return function () {
          var e = va(d, Aa(arguments));
          if (Function.prototype.call)
            return Function.prototype.call.apply(c, va([b], e));
          if (b) {
            for (var f = "_b"; b[f]; ) f += "_" + f.length;
            b[f] = c;
            e = b[f] && qk(f, e, b);
            delete b[f];
            return e;
          }
          return qk(c, e);
        };
      }
      function qk(a, c, b) {
        void 0 === c && (c = []);
        b = b || {};
        var d = c.length,
          e = a;
        T(e) && ((e = "d"), (b[e] = a));
        var f;
        d
          ? 1 === d
            ? (f = b[e](c[0]))
            : 2 === d
            ? (f = b[e](c[0], c[1]))
            : 3 === d
            ? (f = b[e](c[0], c[1], c[2]))
            : 4 === d && (f = b[e](c[0], c[1], c[2], c[3]))
          : (f = b[e]());
        return f;
      }
      function Ad(a, c, b) {
        for (var d = 0, e = b.length; d < e; ) (c = a(c, b[d], d)), (d += 1);
        return c;
      }
      function rb(a) {
        return !Qa(a) && !X(a) && "[object Object]" === wg(a);
      }
      function ma(a) {
        return X(a) || Qa(a);
      }
      function T(a) {
        return "function" === typeof a;
      }
      function pp(a) {
        return a
          .replace(/\^/g, "\\^")
          .replace(/\$/g, "\\$")
          .replace(hf, "\\.")
          .replace(/\[/g, "\\[")
          .replace(/\]/g, "\\]")
          .replace(/\|/g, "\\|")
          .replace(/\(/g, "\\(")
          .replace(/\)/g, "\\)")
          .replace(/\?/g, "\\?")
          .replace(/\*/g, "\\*")
          .replace(/\+/g, "\\+")
          .replace(/\{/g, "\\{")
          .replace(/\}/g, "\\}");
      }
      function Cd(a, c) {
        return !(!a || -1 === jf(a, c));
      }
      function jf(a, c) {
        if (rk) var b = rk.call(a, c);
        else
          a: {
            b = 0;
            for (var d = a.length - c.length, e = 0; e < a.length; e += 1) {
              b = a[e] === c[b] ? b + 1 : 0;
              if (b === c.length) {
                b = e - c.length + 1;
                break a;
              }
              if (!b && e > d) break;
            }
            b = -1;
          }
        return b;
      }
      function Fa(a) {
        return "string" === typeof a;
      }
      function wg(a) {
        return Object.prototype.toString.call(a);
      }
      function zg(a, c) {
        zg =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (b, d) {
              b.__proto__ = d;
            }) ||
          function (b, d) {
            for (var e in d) d.hasOwnProperty(e) && (b[e] = d[e]);
          };
        return zg(a, c);
      }
      function w(a, c) {
        var b = [],
          d = [];
        var e = c ? c : M;
        return function () {
          var f = Aa(arguments),
            g = e.apply(void 0, f),
            h = sk(g, d);
          if (-1 !== h) return b[h];
          f = a.apply(void 0, f);
          b.push(f);
          d.push(g);
          return f;
        };
      }
      function Aa(a) {
        if (zd)
          try {
            return zd(a);
          } catch (c) {}
        return mk(a);
      }
      function mk(a) {
        for (var c = a.length, b = [], d = 0; d < c; d += 1) b.push(a[d]);
        return b;
      }
      function Ob(a) {
        if (Ag) return Ag;
        var c = !1;
        try {
          c = [].indexOf && 0 === [void 0].indexOf(void 0);
        } catch (d) {}
        var b =
          a.Array &&
          a.Array.prototype &&
          Ja(a.Array.prototype.indexOf, "indexOf");
        return (Ag = a =
          c && b
            ? function (d, e) {
                return b.call(e, d);
              }
            : mr);
      }
      function mr(a, c) {
        for (var b = 0; b < c.length; b += 1) if (c[b] === a) return b;
        return -1;
      }
      function yb(a) {
        return !a;
      }
      function Ab(a, c) {
        return c;
      }
      function M(a) {
        return a;
      }
      function gc(a) {
        return function (c) {
          return function (b) {
            return a(b, c);
          };
        };
      }
      function fa(a) {
        return function (c) {
          return function (b) {
            return a(c, b);
          };
        };
      }
      function nr(a, c) {
        for (var b = "", d = 0; d < c.length; d += 1)
          b += "" + (d ? a : "") + c[d];
        return b;
      }
      function Ja(a, c) {
        return Da(c, a) && a;
      }
      function Da(a, c) {
        var b = Je(a, c);
        c && !b && Bg.push([a, c]);
        return b;
      }
      function Je(a, c) {
        if (!c || "function" !== typeof c) return !1;
        try {
          var b = "" + c;
        } catch (h) {
          return !1;
        }
        var d = b.length;
        if (d > 35 + a.length) return !1;
        for (var e = d - 13, f = 0, g = 8; g < d; g += 1) {
          f =
            "[native code]"[f] === b[g] || (7 === f && "-" === b[g])
              ? f + 1
              : 0;
          if (12 === f) return !0;
          if (!f && g > e) break;
        }
        return !1;
      }
      function A() {}
      function pk(a, c) {
        return c(a);
      }
      function Oa(a, c) {
        return c ? a(c) : a();
      }
      function Ia(a, c) {
        function b() {
          this.constructor = a;
        }
        zg(a, c);
        a.prototype =
          null === c
            ? Object.create(c)
            : ((b.prototype = c.prototype), new b());
      }
      function va() {
        for (var a = 0, c = 0, b = arguments.length; c < b; c++)
          a += arguments[c].length;
        a = Array(a);
        var d = 0;
        for (c = 0; c < b; c++)
          for (var e = arguments[c], f = 0, g = e.length; f < g; f++, d++)
            a[d] = e[f];
        return a;
      }
      function wc(a) {
        a = "" + a;
        for (var c = 2166136261, b = a.length, d = 0; d < b; d += 1)
          (c ^= a.charCodeAt(d)),
            (c += (c << 1) + (c << 4) + (c << 7) + (c << 8) + (c << 24));
        return c >>> 0;
      }
      function or() {}
      function pr(a, c) {
        return function () {
          a.apply(c, arguments);
        };
      }
      function Ea(a) {
        if (!(this instanceof Ea))
          throw new TypeError("Promises must be constructed via new");
        if ("function" !== typeof a) throw new TypeError("not a function");
        this.Ba = 0;
        this.Ve = !1;
        this.Ka = void 0;
        this.vb = [];
        tk(a, this);
      }
      function uk(a, c) {
        for (; 3 === a.Ba; ) a = a.Ka;
        0 === a.Ba
          ? a.vb.push(c)
          : ((a.Ve = !0),
            Ea.We(function () {
              var b = 1 === a.Ba ? c.Zi : c.cj;
              if (null === b) (1 === a.Ba ? Cg : Dd)(c.Sa, a.Ka);
              else {
                try {
                  var d = b(a.Ka);
                } catch (e) {
                  Dd(c.Sa, e);
                  return;
                }
                Cg(c.Sa, d);
              }
            }));
      }
      function Cg(a, c) {
        try {
          if (c === a)
            throw new TypeError("A promise cannot be resolved with itself.");
          if (c && ("object" === typeof c || "function" === typeof c)) {
            var b = c.then;
            if (c instanceof Ea) {
              a.Ba = 3;
              a.Ka = c;
              Dg(a);
              return;
            }
            if ("function" === typeof b) {
              tk(pr(b, c), a);
              return;
            }
          }
          a.Ba = 1;
          a.Ka = c;
          Dg(a);
        } catch (d) {
          Dd(a, d);
        }
      }
      function Dd(a, c) {
        a.Ba = 2;
        a.Ka = c;
        Dg(a);
      }
      function Dg(a) {
        2 === a.Ba &&
          0 === a.vb.length &&
          Ea.We(function () {
            a.Ve || Ea.Zg(a.Ka);
          });
        for (var c = 0, b = a.vb.length; c < b; c++) uk(a, a.vb[c]);
        a.vb = null;
      }
      function qr(a, c, b) {
        this.Zi = "function" === typeof a ? a : null;
        this.cj = "function" === typeof c ? c : null;
        this.Sa = b;
      }
      function tk(a, c) {
        var b = !1;
        try {
          a(
            function (d) {
              b || ((b = !0), Cg(c, d));
            },
            function (d) {
              b || ((b = !0), Dd(c, d));
            }
          );
        } catch (d) {
          b || ((b = !0), Dd(c, d));
        }
      }
      function Fb(a, c) {
        if (!c) return null;
        try {
          return a.JSON.parse(c);
        } catch (b) {
          return null;
        }
      }
      function Qj(a, c, b, d, e) {
        void 0 === e && (e = !1);
        return mg(a, c, "", -100, b, d, e);
      }
      function Lc(a, c, b) {
        void 0 === c && (c = "_ym_");
        void 0 === b && (b = "");
        var d = rr(a),
          e = 1 === (d || "").split(".").length ? d : "." + d,
          f = b ? "_" + b : "";
        return {
          pc: function (g, h, k) {
            Qj(a, "" + c + g + f, h || e, k);
            return this;
          },
          o: function (g) {
            return ge(a, "" + c + g + f);
          },
          C: function (g, h, k, l, m) {
            mg(a, "" + c + g + f, h, k, l || e, m);
            return this;
          }
        };
      }
      function Kc(a, c) {
        var b = sr(a);
        return b
          ? ((b.href = c),
            {
              protocol: b.protocol,
              host: b.host,
              port: b.port,
              hostname: b.hostname,
              hash: b.hash,
              search: b.search,
              query: b.search.replace(/^\?/, ""),
              pathname: b.pathname || "/",
              path: (b.pathname || "/") + b.search,
              href: b.href
            })
          : {};
      }
      function mb(a, c) {
        a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535];
        c = [c[0] >>> 16, c[0] & 65535, c[1] >>> 16, c[1] & 65535];
        var b = [0, 0, 0, 0];
        b[3] += a[3] * c[3];
        b[2] += b[3] >>> 16;
        b[3] &= 65535;
        b[2] += a[2] * c[3];
        b[1] += b[2] >>> 16;
        b[2] &= 65535;
        b[2] += a[3] * c[2];
        b[1] += b[2] >>> 16;
        b[2] &= 65535;
        b[1] += a[1] * c[3];
        b[0] += b[1] >>> 16;
        b[1] &= 65535;
        b[1] += a[2] * c[2];
        b[0] += b[1] >>> 16;
        b[1] &= 65535;
        b[1] += a[3] * c[1];
        b[0] += b[1] >>> 16;
        b[1] &= 65535;
        b[0] += a[0] * c[3] + a[1] * c[2] + a[2] * c[1] + a[3] * c[0];
        b[0] &= 65535;
        return [(b[0] << 16) | b[1], (b[2] << 16) | b[3]];
      }
      function fc(a, c) {
        a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535];
        c = [c[0] >>> 16, c[0] & 65535, c[1] >>> 16, c[1] & 65535];
        var b = [0, 0, 0, 0];
        b[3] += a[3] + c[3];
        b[2] += b[3] >>> 16;
        b[3] &= 65535;
        b[2] += a[2] + c[2];
        b[1] += b[2] >>> 16;
        b[2] &= 65535;
        b[1] += a[1] + c[1];
        b[0] += b[1] >>> 16;
        b[1] &= 65535;
        b[0] += a[0] + c[0];
        b[0] &= 65535;
        return [(b[0] << 16) | b[1], (b[2] << 16) | b[3]];
      }
      function Rc(a, c) {
        c %= 64;
        if (32 === c) return [a[1], a[0]];
        if (32 > c)
          return [
            (a[0] << c) | (a[1] >>> (32 - c)),
            (a[1] << c) | (a[0] >>> (32 - c))
          ];
        c -= 32;
        return [
          (a[1] << c) | (a[0] >>> (32 - c)),
          (a[0] << c) | (a[1] >>> (32 - c))
        ];
      }
      function hb(a, c) {
        c %= 64;
        return 0 === c
          ? a
          : 32 > c
          ? [(a[0] << c) | (a[1] >>> (32 - c)), a[1] << c]
          : [a[1] << (c - 32), 0];
      }
      function oa(a, c) {
        return [a[0] ^ c[0], a[1] ^ c[1]];
      }
      function qj(a) {
        a = oa(a, [0, a[0] >>> 1]);
        a = mb(a, [4283543511, 3981806797]);
        a = oa(a, [0, a[0] >>> 1]);
        a = mb(a, [3301882366, 444984403]);
        return (a = oa(a, [0, a[0] >>> 1]));
      }
      function vk(a, c, b) {
        void 0 === b && (b = 210);
        var d = c || "";
        b = b || 0;
        c = d.length - (d.length % 16);
        var e = { O: [0, b], R: [0, b] };
        b = [];
        for (var f = 0; f < c; f += 16) b.push(f);
        c = ub(b, C([d, e], rj));
        return xb(
          a,
          c,
          20
        )(
          bc(function () {
            pj(d, e);
            return oj(e);
          })
        );
      }
      function tr(a, c) {
        void 0 === c && (c = 210);
        var b = a || "",
          d = c || 0,
          e = b.length - (b.length % 16);
        d = { O: [0, d], R: [0, d] };
        for (var f = 0; f < e; f += 16) rj(a, d, f);
        pj(b, d);
        return oj(d);
      }
      function wk(a) {
        return (a = S(a).hash.split("#")[1]) ? a.split("?")[0] : "";
      }
      function ur(a, c) {
        var b = wk(a);
        xk = Eq(
          a,
          function () {
            var d = wk(a);
            d !== b && (c(), (b = d));
          },
          200,
          "t.h"
        );
        return F(Dq, null, a, xk);
      }
      function vr(a, c, b) {
        var d,
          e,
          f = c.$,
          g = c.Se,
          h = c.wc,
          k = O(a),
          l = Ca(((d = {}), (d.wh = "1"), (d.pv = "1"), d));
        Eg(f) && a.Yg && a.Yg.Ik && l.C("ad", "1");
        g && l.C("ut", "1");
        f = k.o("lastReferrer");
        d = S(a).href;
        h = {
          G: ((e = {}), (e["page-url"] = h || d), (e["page-ref"] = f), e),
          J: l
        };
        b(h, c)["catch"](E(a, "g.s"));
        k.C("lastReferrer", d);
      }
      function wr(a, c) {
        if (Ge(a)) return ja(a, c);
        Fg[c] = !0;
        return ja(a, Ke[c] || 0);
      }
      function xr(a, c, b) {
        function d() {
          Fg[t] = !0;
          f(!1);
          c();
        }
        function e() {
          ja(a, Ke[t]);
          if (Fg[t]) f(!1);
          else {
            var L = Math.max(0, b - (m ? q : q + h(Z) - p));
            L ? (Ke[t] = W(a, d, L, "u.t.d.c")) : d();
          }
        }
        function f(L) {
          B(function (R) {
            var Y = R[0],
              ta = R[1];
            R = R[2];
            L ? r.D(Y, ta, R) : r.Wb(Y, ta, R);
          }, x);
        }
        var g = v(!1, f);
        if (Ge(a)) return { id: W(a, c, b, "u.t.d"), hf: g };
        var h = da(a),
          k = !1,
          l = !1,
          m = !0,
          q = 0,
          p = h(Z),
          r = ha(a),
          t = yk;
        yk += 1;
        Ke[t] = 0;
        var x = [
          [
            a,
            ["blur"],
            function () {
              m = k = l = !0;
              q += h(Z) - p;
              p = h(Z);
              e();
            }
          ],
          [
            a,
            ["focus"],
            function () {
              k || l || (q = 0);
              p = h(Z);
              k = l = !0;
              m = !1;
              e();
            }
          ],
          [
            a.document,
            ["click", "mousemove", "keydown", "scroll"],
            function () {
              l || ((k = !0), (m = !1), (l = !0), e());
            }
          ]
        ];
        f(!0);
        e();
        return { id: t, hf: g };
      }
      function Hh(a) {
        try {
          return a.toDataURL();
        } catch (c) {
          return "";
        }
      }
      function Yo(a, c) {
        var b,
          d = Bc(c),
          e = na.ec,
          f = ic(a);
        if (d && tc("ym-advanced-informer", d)) {
          var g = f.o("ifc", 0) + 1;
          f.C("ifc", g);
          g = d.getAttribute("data-lang");
          var h = Ba(d.getAttribute("data-cid") || "");
          if (h || 0 === h)
            (e = n(a, "Ya." + e + ".informer"))
              ? e(((b = {}), (b.i = d), (b.id = h), (b.lang = g), b))
              : f.C("ib", !0),
              (b = c || window.event),
              b.preventDefault ? b.preventDefault() : (b.returnValue = !1);
        }
      }
      function md(a, c, b) {
        a =
          c &&
          (Cd(c.className, "ym-disable-keys") ||
            Cd(c.className, "-metrika-nokeys"));
        return b && c
          ? a || !!Pq(["ym-disable-keys", "-metrika-nokeys"], c).length
          : a;
      }
      function uf(a, c) {
        return Ee(c)
          ? "password" === c.type ||
              (c.name && G(c.name.toLowerCase(), zk)) ||
              (c.id && G(c.id.toLowerCase(), zk))
          : !1;
      }
      function Ak(a, c) {
        var b = Math.max(0, Math.min(c, 65535));
        Ra(a, [b >> 8, b & 255]);
      }
      function Sb(a, c) {
        Ra(a, [c & 255]);
      }
      function gb(a, c, b) {
        return -1 !== Ob(a)(b, yr) ? (Sb(c, b), !1) : !0;
      }
      function Q(a, c) {
        for (var b = Math.max(0, c | 0); 127 < b; )
          Ra(a, [(b & 127) | 128]), (b >>= 7);
        Ra(a, [b]);
      }
      function Gg(a, c) {
        Q(a, c.length);
        for (var b = 0; b < c.length; b += 1) Q(a, c.charCodeAt(b));
      }
      function Hg(a, c) {
        var b = c;
        255 < b.length && (b = b.substr(0, 255));
        a.push(b.length);
        for (var d = 0; d < b.length; d += 1) Ak(a, b.charCodeAt(d));
      }
      function zr(a, c) {
        var b = [];
        if (gb(a, b, 27)) return [];
        Q(b, c);
        return b;
      }
      function Ar(a, c) {
        var b = Ga(c);
        if (!b) return (c[Ua] = -1), null;
        var d = +c[Ua];
        if (!isFinite(d) || 0 >= d) return null;
        if (c.attributes)
          for (var e = c; e; ) {
            if (e.attributes.qm) return null;
            e = e.parentElement;
          }
        e = 64;
        var f = Ce(a, c),
          g = f && f[Ua] ? f[Ua] : 0;
        0 > g && (g = 0);
        b = (b || "").toUpperCase();
        var h = Br()[b];
        h || (e |= 2);
        var k = ek(a, c);
        k || (e |= 4);
        var l = Kf(a, c);
        (f = f ? Kf(a, f) : null) &&
          l[0] === f[0] &&
          l[1] === f[1] &&
          l[2] === f[2] &&
          l[3] === f[3] &&
          (e |= 8);
        sc[d].Yf = l[0] + "x" + l[1];
        sc[d].size = l[2] + "x" + l[3];
        c.id && "string" === typeof c.id && (e |= 32);
        f = [];
        if (gb(a, f, 1)) return null;
        Q(f, d);
        Sb(f, e);
        Q(f, g);
        h ? Sb(f, h) : Hg(f, b);
        k && Q(f, k);
        e & 8 || (Q(f, l[0]), Q(f, l[1]), Q(f, l[2]), Q(f, l[3]));
        e & 32 && Hg(f, c.id);
        Sb(f, 0);
        return f;
      }
      function Cr(a, c) {
        var b = c[Ua];
        if (!b || 0 > b || !If(c) || !c.form || Ii(a, c.form)) return [];
        var d = gk(a, c.form);
        if (0 > d) return [];
        if (Ee(c)) {
          var e = {
            text: 0,
            color: 0,
            oc: 0,
            wm: 0,
            "datetime-local": 0,
            email: 0,
            Vf: 0,
            Pm: 0,
            search: 0,
            Sm: 0,
            time: 0,
            url: 0,
            month: 0,
            Um: 0,
            password: 2,
            Om: 3,
            tm: 4,
            file: 6,
            image: 7
          };
          e = e[c.type];
        } else {
          e = { Ol: 1, Xl: 5 };
          var f = Ga(c);
          e = X(f) ? "" : e[f];
        }
        if ("number" !== typeof e) return [];
        f = -1;
        for (var g = c.form.elements, h = g.length, k = 0, l = 0; k < h; k += 1)
          if (g[k].name === c.name) {
            if (g[k] === c) {
              f = l;
              break;
            }
            l += 1;
          }
        if (0 > f) return [];
        g = [];
        if (gb(a, g, 7)) return [];
        Q(g, b);
        Q(g, d);
        Q(g, e);
        Gg(g, c.name || "");
        Q(g, f);
        return g;
      }
      function Dr(a, c, b) {
        var d = gk(a, b);
        if (0 > d) return [];
        var e = b.elements,
          f = e.length;
        b = [];
        for (var g = 0; g < f; g += 1)
          if (!fk(e[g])) {
            var h = e[g][Ua];
            h && 0 < h && b.push(h);
          }
        e = [];
        if (gb(a, e, 11)) return [];
        Q(e, c);
        Q(e, d);
        Q(e, b.length);
        for (a = 0; a < b.length; a += 1) Q(e, b[a]);
        return e;
      }
      function rc(a, c, b) {
        void 0 === b && (b = []);
        for (var d = []; c && !Ho(a, c, b); c = Ce(a, c)) d.push(c);
        B(function (e) {
          sc.xd += 1;
          var f = sc.xd;
          e[Ua] = f;
          sc[f] = {};
          f = Ar(a, e);
          e = Cr(a, e);
          f && e && (Ra(b, f), Ra(b, e));
        }, Er(d));
        return b;
      }
      function Fr(a) {
        var c = a.ja;
        if (!ld || (c && !c.fromElement)) return Gi(a);
      }
      function Gr(a) {
        var c = a.ja;
        if (c && !c.toElement) return Jf(a);
      }
      function Bk(a) {
        var c = Bc(a.ja);
        if (c && he(c)) {
          var b = Fi(a, c);
          var d = wb(a.l),
            e = [];
          gb(a.l, e, 17) ? (a = []) : (Q(e, d), Q(e, c[Ua]), (a = e));
          return va(b, a);
        }
      }
      function Ck(a) {
        var c = a.l,
          b = a.ja.target;
        if (b && he(b)) {
          c = rc(c, b);
          var d = wb(a.l),
            e = [];
          gb(a.l, e, 18) ? (a = []) : (Q(e, d), Q(e, b[Ua]), (a = e));
          return va(c, a);
        }
      }
      function Dk(a) {
        var c = a.l,
          b = Bc(a.ja);
        if (!b || uf(c, b) || md(c, b)) return [];
        if (If(b)) {
          var d = O(c).o("isEU"),
            e = fd(c, b, d),
            f = e.lb;
          d = e.Vd;
          e = e.Gd;
          if (Fe(b)) var g = b.checked;
          else (g = b.value), (g = f ? H("", Ek(g.split(""))) : g);
          c = rc(c, b);
          f = wb(a.l);
          d = d && !e;
          e = [];
          gb(a.l, e, 39)
            ? (a = [])
            : (Q(e, f),
              Q(e, b[Ua]),
              Hg(e, String(g)),
              Sb(e, d ? 1 : 0),
              (a = e));
          return va(c, a);
        }
      }
      function Le(a) {
        var c = a.l,
          b = a.ja,
          d = Bc(b);
        if (!d || "SCROLLBAR" === d.nodeName) return [];
        var e = [],
          f = v(e, Ra);
        d && he(d) ? f(Fi(a, d)) : f(rc(c, d));
        var g = Ki(c, b);
        a = wb(a.l);
        f = b.type;
        var h = [g.x, g.y];
        g = b.which;
        b = b.button;
        var k;
        var l = De(c, d);
        var m = l[0];
        for (l = l[1]; d && (!m || !l); )
          if ((d = Ce(c, d))) (l = De(c, d)), (m = l[0]), (l = l[1]);
        d
          ? ((m = d[Ua]),
            !m || 0 > m
              ? (c = [])
              : (l = ((k = {}),
                (k.mousemove = 2),
                (k.click = 32),
                (k.dblclick = 33),
                (k.mousedown = 4),
                (k.mouseup = 30),
                (k.touch = 12),
                k)[f])
              ? ((k = []),
                (d = sg(c, d)),
                gb(c, k, l)
                  ? (c = [])
                  : (Q(k, a),
                    Q(k, m),
                    Q(k, Math.max(0, h[0] - d.left)),
                    Q(k, Math.max(0, h[1] - d.top)),
                    /^mouse(up|down)|click$/.test(f) &&
                      ((c = g || b),
                      Sb(k, 2 > c ? 1 : c === (g ? 2 : 4) ? 4 : 2)),
                    (c = k)))
              : (c = []))
          : (c = []);
        return va(e, c);
      }
      function Hr(a) {
        var c = null,
          b = a.l,
          d = b.document;
        if (b.getSelection) {
          d = void 0;
          try {
            d = b.getSelection();
          } catch (g) {
            return [];
          }
          if (Qa(d)) return [];
          var e = "" + d;
          c = d.anchorNode;
        } else
          d.selection &&
            d.selection.createRange &&
            ((d = d.selection.createRange()),
            (e = d.text),
            (c = d.parentElement()));
        if ("string" !== typeof e) return [];
        try {
          for (; c && 1 !== c.nodeType; ) c = c.parentNode;
        } catch (g) {
          return [];
        }
        if (!c) return [];
        d = fd(b, c).lb || md(b, c, !0);
        c = c.getElementsByTagName("*");
        for (var f = 0; f < c.length && !d; )
          (d = c[f]), (d = fd(b, d).lb || md(b, d, !0)), (f += 1);
        if (e !== Ig)
          return (
            (Ig = e),
            (d = d ? H("", Ek(e.split(""))) : e),
            (e = wb(a.l)),
            0 === d.length
              ? (d = b = "")
              : 100 >= d.length
              ? ((b = d), (d = ""))
              : 200 >= d.length
              ? ((b = d.substr(0, 100)), (d = d.substr(100)))
              : ((b = d.substr(0, 97)), (d = d.substr(d.length - 97))),
            (c = []),
            gb(a.l, c, 29) ? (a = []) : (Q(c, e), Gg(c, b), Gg(c, d), (a = c)),
            a
          );
      }
      function Ir(a) {
        return va(Le(a), Hr(a) || []);
      }
      function Fk(a) {
        return (
          (a.shiftKey ? 2 : 0) |
          (a.ctrlKey ? 4 : 0) |
          (a.altKey ? 1 : 0) |
          (a.metaKey ? 8 : 0) |
          (a.ctrlKey || a.altKey ? 16 : 0)
        );
      }
      function Gk(a) {
        var c = [];
        Jg ||
          ((Jg = !0),
          Ig && c.push.apply(c, zr(a.l, wb(a.l))),
          Gb(
            a.l,
            function () {
              Jg = !1;
            },
            "fv.c"
          ));
        return c;
      }
      function Hk(a, c, b, d) {
        var e = Bc(c);
        if (!e || Mf(a, e)) return [];
        var f = Zd(e),
          g = Lf(e);
        c = fd(a, e).lb;
        var h = O(a);
        if (!f && ((g && h.o("isEU")) || md(a, e))) a = [];
        else {
          f = rc(a, e);
          h = wb(a);
          g = [];
          if (gb(a, g, 38)) a = [];
          else {
            Q(g, h);
            Ak(g, b);
            Sb(g, d);
            a = e[Ua];
            if (!a || 0 > a) a = 0;
            Q(g, a);
            Sb(g, c ? 1 : 0);
            a = g;
          }
          a = va(f, a);
        }
        return a;
      }
      function Jr(a) {
        var c = a.l,
          b = a.ja,
          d = b.keyCode,
          e = Fk(b),
          f = [],
          g = v(f, Ra);
        if (
          {
            3: 1,
            8: 1,
            9: 1,
            13: 1,
            16: 1,
            17: 1,
            18: 1,
            19: 1,
            20: 1,
            27: 1,
            33: 1,
            34: 1,
            35: 1,
            36: 1,
            37: 1,
            38: 1,
            39: 1,
            40: 1,
            45: 1,
            46: 1,
            91: 1,
            92: 1,
            93: 1,
            106: 1,
            110: 1,
            111: 1,
            144: 1,
            145: 1
          }[d] ||
          (112 <= d && 123 >= d) ||
          (96 <= d && 105 >= d) ||
          e & 16
        )
          19 === d && 4 === (e & -17) && (d = 144),
            g(Hk(c, b, d, e | 16)),
            (Kg = !1),
            Gb(
              c,
              function () {
                Kg = !0;
              },
              "fv.kd"
            ),
            !(67 === d && e & 4) || e & 1 || e & 2 || g(Gk(a));
        return f;
      }
      function Kr(a) {
        var c = a.l;
        a = a.ja;
        var b = [];
        Kg &&
          !Lg &&
          0 !== a.which &&
          (b.push.apply(b, Hk(c, a, a.charCode || a.keyCode, Fk(a))),
          (Lg = !0),
          Gb(
            c,
            function () {
              Lg = !1;
            },
            "fv.kp"
          ));
        return b;
      }
      function Ik(a) {
        var c = a.l,
          b = Bc(a.ja);
        if (!b || Ii(c, b)) return [];
        var d = [];
        if ("FORM" === b.nodeName) {
          for (var e = b.elements, f = 0; f < e.length; f += 1)
            fk(e[f]) || d.push.apply(d, rc(c, e[f]));
          d.push.apply(d, Dr(c, wb(a.l), b));
        }
        return d;
      }
      function Lr(a) {
        var c = a.flush;
        a = Bc(a.ja);
        "BODY" === Ga(a) && c();
      }
      function Me(a, c, b, d) {
        return function () {
          var e = ya(a, c),
            f = Aa(arguments);
          if (e) return d.apply(void 0, f);
        };
      }
      function Mr(a, c, b, d) {
        var e = Nr[b];
        return e
          ? function () {
              var f = Aa(arguments);
              try {
                var g = d.apply(void 0, f);
                var h = O(a);
                h.Ha("mt", {});
                var k = h.o("mt"),
                  l = k[e];
                k[e] = l ? l + 1 : 1;
              } catch (m) {
                kb(m);
              }
              return g;
            }
          : d;
      }
      function Ed(a, c, b) {
        var d = c.getAttribute("itemtype");
        b = jb('[itemprop~="' + b + '"]', c);
        return d
          ? V(function (e) {
              return e.parentNode && Xb("[itemtype]", a, e.parentNode) === c;
            }, b)
          : b;
      }
      function db(a, c, b) {
        return (a = Ed(a, c, b)) && a.length ? a[0] : null;
      }
      function Za(a) {
        if (!a) return "";
        a = ca(a) ? a : [a];
        return a.length ? a[0].getAttribute("content") || Tb(a[0]) : "";
      }
      function Jk(a) {
        return a
          ? a.attributes && a.getAttribute("datetime")
            ? a.getAttribute("datetime")
            : Za(a)
          : "";
      }
      function Kk(a, c, b, d) {
        return function () {
          var e = ya(a, c),
            f = Aa(arguments);
          d.apply(void 0, f);
          return e;
        };
      }
      function Lk(a, c, b, d) {
        return E(a, "cm." + b, d);
      }
      function Or(a, c, b, d, e) {
        return b.length && e
          ? C(
              J(
                function (f, g, h) {
                  return b[h] ? f.concat(C([a, c, d], g)) : f;
                },
                [],
                b
              ),
              u
            )()(e)
          : e;
      }
      var Pr = {
          ql: !1,
          Fk: !1,
          Uk: !1,
          Kk: !0,
          nm: !0,
          Bk: !0,
          al: !0,
          Rl: !0,
          Sk: !0,
          Kl: !0,
          fl: !0,
          Qk: !0,
          xl: !0,
          vl: !0,
          gk: !0,
          Bl: !0,
          Al: !0,
          Ek: !0,
          Il: !0,
          lm: !1,
          Yk: !0,
          xk: !0,
          Tl: !1,
          em: !0,
          Zl: !0,
          Gk: !0,
          Jl: !0,
          zl: !0,
          hl: !0,
          Zk: !1,
          Ql: !0,
          bl: !0,
          dk: !0,
          wl: !0,
          Pl: !0,
          Yl: !0,
          Cl: !0,
          Rk: !0,
          yl: !0,
          ol: !0,
          Dk: !0,
          tl: !0,
          gm: !0,
          jm: !0,
          pk: !1,
          hm: !0,
          dm: !0,
          Ml: !0,
          Nl: !0,
          bm: !0,
          Pk: !1,
          $l: !1,
          km: !0,
          hk: !1,
          Vk: !0,
          dl: !0,
          Ok: !0,
          cm: !1,
          Nk: !0,
          yk: !0,
          ck: !0,
          pl: !0,
          Ck: !0,
          qk: !0,
          Ll: !0,
          Sl: !0,
          fm: !1,
          nk: !1,
          lk: !0,
          rk: !0,
          kl: !0,
          vk: !0,
          zk: !0,
          Lk: !0,
          $k: !1,
          gl: !0,
          im: !1,
          Wk: !0,
          ek: !0,
          Tk: !0,
          mk: !1,
          Ak: !0,
          mm: !1,
          ik: !0,
          om: !1,
          nl: !0,
          rl: !0,
          wk: !0,
          fk: !0,
          Vl: !0,
          Jk: !0,
          Xk: !0,
          Ul: !0,
          ml: !1,
          ll: !0,
          Wl: !0,
          jl: !0,
          Mk: !1,
          Hk: !0,
          jk: !0,
          El: !0,
          Fl: !0,
          Hl: !0,
          Gl: !0,
          Dl: !0
        },
        wd = {
          construct: "Metrika2",
          callbackPostfix: "2",
          version: "30shymy8l86zz21i1shdk"
        },
        Bg = [],
        Mk = Ja(Array.prototype.join, "join"),
        H = Mk
          ? function (a, c) {
              return Mk.call(c, a);
            }
          : nr,
        ka = fa(function (a, c) {
          return a === c;
        }),
        kd = fa(function (a, c) {
          a(c);
          return c;
        }),
        od = fa(H),
        la = fa(pk),
        Ag,
        sk = Ob(window),
        Qr = gc(sk),
        zd = Ja(Array.from, "from"),
        hf = /\./g,
        rk = Ja(String.prototype.indexOf, "indexOf"),
        Qa = ka(null),
        X = ka(void 0),
        Nk = Ja(Function.prototype.bind, "bind"),
        F = Nk
          ? function () {
              var a = Aa(arguments);
              return Nk.apply(a[0], va([a[1]], a.slice(2)));
            }
          : lr,
        yp = fa(C),
        Zm = fa(ia),
        Ok = Ja(Array.prototype.reduce, "reduce"),
        J = Ok
          ? function (a, c, b) {
              return Ok.call(b, a, c);
            }
          : Ad,
        U = gc(n),
        xa = U("length"),
        bk = u,
        Bd,
        kr = u(wg, ka("[object Array]")),
        yg = Object.prototype.hasOwnProperty,
        za = Object.entries
          ? function (a) {
              return a ? Object.entries(a) : [];
            }
          : fr,
        aa = Object.keys ? Object.keys : nk,
        z = Object.assign || ir,
        Ei = fa(function (a, c) {
          return z({}, a, c);
        }),
        O = w(ic),
        Rd = Array.prototype.every
          ? function (a, c) {
              return Array.prototype.every.call(c, a);
            }
          : function (a, c) {
              return J(
                function (b, d) {
                  return b ? a(d) : !1;
                },
                !0,
                c
              );
            },
        Pk = Ja(Array.prototype.filter, "filter"),
        V = Pk
          ? function (a, c) {
              return Pk.call(c, a);
            }
          : ok,
        Mc = fa(V),
        bb = Ie(
          function (a, c) {
            return Array.prototype.find.call(c, a);
          },
          function (a, c) {
            for (var b = 0; b < c.length; b += 1)
              if (a.call(c, c[b], b)) return c[b];
          },
          Da("find", Array.prototype.find)
        ),
        G = Array.prototype.includes
          ? function (a, c) {
              return Array.prototype.includes.call(c, a);
            }
          : jr,
        $b = gc(G),
        Qk = w(function (a) {
          a = n(a, "navigator") || {};
          var c = n(a, "userAgent") || "";
          return { Jf: -1 < (n(a, "vendor") || "").indexOf("Apple"), Ig: c };
        }),
        Sc = w(function (a) {
          var c = n(a, "document.documentElement.style");
          a = n(a, "InstallTrigger");
          return !(!(c && "MozAppearance" in c) || ma(a));
        }),
        Rk = Ja(Array.prototype.map, "map"),
        y =
          Rk && dr(window, Array.prototype.map)
            ? function (a, c) {
                return c && 0 < c.length ? Rk.call(c, a) : [];
              }
            : hr,
        B = y,
        oc = Array.prototype.flatMap
          ? function (a, c) {
              return Array.prototype.flatMap.call(c, a);
            }
          : gr,
        cb = fa(y),
        Fq = gc(y),
        Ha = Ie(
          function (a, c) {
            return Array.prototype.some.call(c, a);
          },
          function (a, c) {
            for (var b = 0; b < c.length; b += 1)
              if (b in c && a.call(c, c[b], b)) return !0;
            return !1;
          },
          Da("some", Array.prototype.some)
        ),
        Ne = w(Ob),
        $o = fa(xg),
        Sk = Ja(Array.prototype.reverse, "reverse"),
        Er = Sk
          ? function (a) {
              return Sk.call(a);
            }
          : cr,
        Tk = gc(parseInt),
        Ba = Tk(10),
        Oe = Tk(2),
        sd = w(u(U("String.fromCharCode"), v("fromCharCode", Da), yb)),
        vb = w(U("navigator.userAgent")),
        He = w(u(vb, Sa(/ipad|iphone|ipod/i))),
        Ef = w(function (a) {
          return n(a, "navigator.platform") || "";
        }),
        Rr =
          "FB_IAB FBAV OKApp GSA/ yandex yango uber EatsKit YKeyboard iOSAppUslugi".split(
            " "
          ),
        Wf = w(function (a) {
          var c = Qk(a);
          a = c.Jf;
          c = c.Ig;
          var b = ia("indexOf", c);
          b = Ha(u(b, ka(-1), yb), Rr);
          var d =
            /YaBrowser\/[\d.]+\sSA\/3|CFNetwork\/[0-9][0-9.]*.*Darwin\/[0-9][0-9.]*/;
          return (
            a && ((!/Safari/.test(c) && /Mobile/.test(c)) || d.test(c) || b)
          );
        }),
        td = w(function (a) {
          a = Qk(a);
          var c = a.Ig;
          return a.Jf && !c.match("CriOS");
        }),
        Sr = Sa(
          /Android.*Version\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]|Android.*Version\/[0-9][0-9.]*\s(?:Mobile\s)?Safari\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]*|; wv\).*Chrome\/[0-9][0-9.]*\sMobile/
        ),
        Tr = Sa(/; wv\)/),
        qd = w(function (a) {
          a = vb(a);
          return Tr(a) || Sr(a);
        }),
        Ur = /Chrome\/(\d+)\./,
        Vr = w(function (a) {
          return (a = (n(a, "navigator.userAgent") || "").match(Ur)) && a.length
            ? 76 <= Ba(a[1])
            : !1;
        }),
        jd = w(function (a) {
          var c = (vb(a) || "").toLowerCase();
          a = Ef(a);
          return !(
            -1 === c.indexOf("android") ||
            -1 === c.indexOf(c, "mobile") ||
            !/^android|linux armv/i.test(a)
          );
        }),
        Wr =
          "other none unknown wifi ethernet bluetooth cellular wimax mixed".split(
            " "
          ),
        Xr = w(function (a) {
          var c = n(a, "navigator.connection.type");
          if (X(c)) return null;
          a = Ne(a)(c, Wr);
          return -1 === a ? c : "" + a;
        }),
        Ge = w(u(U("document.addEventListener"), yb)),
        Uk = w(function (a) {
          var c = n(a, "navigator") || {};
          return J(
            function (b, d) {
              return b || n(c, d);
            },
            "",
            ["language", "userLanguage", "browserLanguage", "systemLanguage"]
          );
        }),
        bj = w(function (a) {
          var c = n(a, "navigator") || {};
          a = Uk(a);
          Fa(a) || ((a = ""), (c = n(c, "languages.0")), Fa(c) && (a = c));
          return a.toLowerCase().split("-")[0];
        }),
        Pb = w(function (a) {
          var c = !1;
          try {
            c = a.top !== a;
          } catch (b) {}
          return c;
        }),
        Yr = w(function (a) {
          var c = !1;
          try {
            c = a.top.contentWindow;
          } catch (b) {}
          return c;
        }),
        Zr = w(function (a) {
          var c = !1;
          try {
            c = a.navigator.javaEnabled();
          } catch (b) {}
          return c;
        }),
        $r = w(function (a) {
          var c =
              "__webdriver_evaluate __selenium_evaluate __webdriver_script_function __webdriver_script_func __webdriver_script_fn __fxdriver_evaluate __driver_unwrapped __webdriver_unwrapped __driver_evaluate __selenium_unwrapped __fxdriver_unwrapped".split(
                " "
              ),
            b = n(a, "external");
          b =
            -1 !==
            (n(b, "toString") ? "" + b.toString() : "").indexOf("Sequentum");
          var d = n(a, "document.documentElement"),
            e = ["selenium", "webdriver", "driver"];
          return !!(
            Ha(v(a, n), [
              "_selenium",
              "callSelenium",
              "_Selenium_IDE_Recorder"
            ]) ||
            Ha(v(n(a, "document"), n), c) ||
            b ||
            (d && Ha(F(d.getAttribute, d), e))
          );
        }),
        as = w(function (a) {
          return !!(
            Ha(v(a, n), ["_phantom", "__nightmare", "callPhantom"]) ||
            /(PhantomJS)|(HeadlessChrome)/.test(vb(a)) ||
            n(a, "navigator.webdriver") ||
            (n(a, "isChrome") && !n(a, "chrome"))
          );
        }),
        bs = w(function (a) {
          return Rd(v(a, n), ["ia_document.shareURL", "ia_document.referrer"]);
        }),
        cs = w(function (a) {
          a = n(a, "navigator.plugins");
          return !!(a && xa(a) && Ha(u(U("name"), Sa(/Chrome PDF Viewer/)), a));
        }),
        ds = new RegExp(
          H(
            "|",
            "yandex.com/bots;Googlebot;APIs-Google;Mediapartners-Google;AdsBot-Google;FeedFetcher-Google;Google-Read-Aloud;DuplexWeb-Google;Google Favicon;googleweblight;Mail.RU_Bot;StackRambler;Slurp;msnbot;bingbot;www.baidu.com/search/spi_?der.htm".split(
              ";"
            )
          ).replace(/[./]/g, "\\$&")
        ),
        Kp = w(u(U("navigator.userAgent"), Sa(ds))),
        Pe = w(function (a) {
          var c = vb(a) || "",
            b = c.match(/Mac OS X ([0-9]+)_([0-9]+)/);
          b = b ? [+b[1], +b[2]] : [0, 0];
          c = c.match(/iPhone OS ([1-9]+)_([0-9]+)/);
          return 14 <= (c ? +c[1] : 0)
            ? !0
            : (He(a) || 10 < b[0] || (10 === b[0] && 13 <= b[1])) && td(a);
        }),
        es = wd.construct,
        Mg = Ge(window),
        na = {
          Vg: 24226447,
          Pg: 26302566,
          Xg: 51533966,
          el: 65446441,
          Ca: "https:",
          Ma: "832",
          ec: es,
          Ug: Mg ? 512 : 2048,
          Sg: Mg ? 512 : 2048,
          Tg: Mg ? 100 : 400,
          sl: 100,
          ul: "noindex"
        },
        Ma = {
          id: "id",
          Se: "ut",
          $: "type",
          ae: "ldc",
          jb: "nck",
          wc: "url",
          Rh: "referrer"
        },
        fs = /^\d+$/,
        Ib = {
          id: function (a) {
            a = "" + (a || "0");
            fs.test(a) || (a = "0");
            try {
              var c = Ba(a);
            } catch (b) {
              c = 0;
            }
            return c;
          },
          $: function (a) {
            return "" + (a || 0 === a ? a : "0");
          },
          jb: Boolean,
          Se: Boolean
        };
      Ma.hc = "defer";
      Ib.hc = Boolean;
      Ma.$j = "yaDisableGDPR";
      Ma.ak = "yaGDPRLang";
      Ma.exp = "experiments";
      Ma.qc = "ecommerce";
      Ib.qc = function (a) {
        if (a) return !0 === a ? "dataLayer" : "" + a;
      };
      Ma.T = "params";
      Ib.T = function (a) {
        return rb(a) || ca(a) ? a : null;
      };
      Ma.ld = "userParams";
      Ma.Zb = "accurateTrackBounce";
      Ma.Eg = "triggerEvent";
      Ib.Eg = Boolean;
      Ma.ng = "sendTitle";
      Ib.ng = function (a) {
        return !!a || X(a);
      };
      Ma.Oe = "trackHash";
      Ib.Oe = Boolean;
      Ma.rh = "clickmap";
      Ma.Va = "webvisor";
      Ib.Va = Boolean;
      Ma.Oj = "trustedDomains";
      Ma.yb = "childIframe";
      Ib.yb = Boolean;
      Ma.hd = "trackLinks";
      Ma.Ah = "enableAll";
      Ma.jf = "disableFomAnalytics";
      Ib.jf = Boolean;
      var Vk = J(
          function (a, c) {
            var b = c[0];
            a[b] = { Xf: c[1], Ti: Ib[b] };
            return a;
          },
          {},
          za(Ma)
        ),
        hc = {},
        N = w(function (a) {
          return a.id + ":" + a.$;
        }),
        Eg = ka("1"),
        Wk = fa(function (a, c) {
          var b = c || {};
          return {
            l: v(b, M),
            o: function (d, e) {
              var f = b[d];
              return X(f) && !X(e) ? e : f;
            },
            C: function (d, e) {
              b[d] = e;
              return this;
            },
            Sb: function (d, e) {
              return "" === e || ma(e) ? this : this.C(d, e);
            },
            Aa: v(b, a)
          };
        }),
        Ca = Wk(function (a) {
          var c = "";
          a = J(
            function (b, d) {
              var e = d[0],
                f = "" + e + ":" + d[1];
              "t" === e ? (c = f) : b.push(f);
              return b;
            },
            [],
            za(a)
          );
          c && a.push(c);
          return H(":", a);
        }),
        Xk = na.Ca + "//mc.yandex.ru/metrika/metrika_match.html",
        Zq = "hash host hostname href pathname port protocol search".split(" "),
        vg =
          "ru ua by kz az kg lv md tj tm uz ee fr lt com co.il com.ge com.am com.tr com.ua com.ru".split(
            " "
          ),
        jk = /(?:^|\.)(?:(ya\.ru)|(?:yandex)\.(\w+|com?\.\w+))$/,
        Cp = w(function (a) {
          a = S(a).hostname.split(".");
          return a[a.length - 1];
        }),
        Yk = w(function (a) {
          return (
            -1 !==
            S(a).hostname.search(
              /(?:^|\.)(?:ya|yandex|beru|kinopoisk|edadeal)\.(?:\w+|com?\.\w+)$/
            )
          );
        }),
        Si = w(function (a) {
          return (a ? a.replace(/^www\./, "") : "").toLowerCase();
        }),
        gs =
          /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|(^|\w+\.)yango\.com|yastatic\.net|meteum\.ai|.*\.yandex|turbopages\.org|turbo\.site)$/,
        ne = w(function (a) {
          a = S(a).hostname;
          var c = !1;
          a && (c = -1 !== a.search(gs));
          return c;
        }),
        hs =
          /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|.*\.yandex|turbopages\.org|turbo\.site)$/,
        ro = w(function (a) {
          a = S(a).hostname;
          var c = !1;
          a && (c = -1 !== a.search(hs));
          return c;
        }),
        is = w(function (a) {
          a = S(a).hostname;
          var c = !1;
          a && (c = -1 !== a.search(jk));
          return c;
        }),
        Zk = u(S, U("protocol"), ka("https:")),
        yq = w(function (a) {
          return Vr(a) && Zk(a) ? "SameSite=None;Secure;" : "";
        }),
        js = w(function (a) {
          var c = !1;
          if (!a.addEventListener) return c;
          try {
            var b = Object.defineProperty({}, "passive", {
              get: function () {
                c = !0;
                return 1;
              }
            });
            a.addEventListener("test", A, b);
          } catch (d) {}
          return c;
        }),
        ks = fa(function (a, c) {
          return a ? z({ capture: !0, passive: !0 }, c || {}) : !!c;
        }),
        ha = w(function (a) {
          a = js(a);
          var c = ks(a),
            b = {};
          return z(b, {
            D: function (d, e, f, g) {
              B(function (h) {
                var k = c(g);
                ik(d, h, f, k, !1);
              }, e);
              return F(b.Wb, b, d, e, f, g);
            },
            Wb: function (d, e, f, g) {
              B(function (h) {
                var k = c(g);
                ik(d, h, f, k, !0);
              }, e);
            }
          });
        }),
        ls = setTimeout;
      Ea.prototype["catch"] = function (a) {
        return this.then(null, a);
      };
      Ea.prototype.then = function (a, c) {
        var b = new this.constructor(or);
        uk(this, new qr(a, c, b));
        return b;
      };
      Ea.prototype["finally"] = function (a) {
        var c = this.constructor;
        return this.then(
          function (b) {
            return c.resolve(a()).then(function () {
              return b;
            });
          },
          function (b) {
            return c.resolve(a()).then(function () {
              return c.reject(b);
            });
          }
        );
      };
      Ea.all = function (a) {
        return new Ea(function (c, b) {
          function d(h, k) {
            try {
              if (k && ("object" === typeof k || "function" === typeof k)) {
                var l = k.then;
                if ("function" === typeof l) {
                  l.call(
                    k,
                    function (m) {
                      d(h, m);
                    },
                    b
                  );
                  return;
                }
              }
              e[h] = k;
              0 === --f && c(e);
            } catch (m) {
              b(m);
            }
          }
          if (!a || "undefined" === typeof a.length)
            return b(new TypeError("Promise.all accepts an array"));
          var e = Array.prototype.slice.call(a);
          if (0 === e.length) return c([]);
          for (var f = e.length, g = 0; g < e.length; g++) d(g, e[g]);
        });
      };
      Ea.resolve = function (a) {
        return a && "object" === typeof a && a.constructor === Ea
          ? a
          : new Ea(function (c) {
              c(a);
            });
      };
      Ea.reject = function (a) {
        return new Ea(function (c, b) {
          b(a);
        });
      };
      Ea.race = function (a) {
        return new Ea(function (c, b) {
          if (!a || "undefined" === typeof a.length)
            return b(new TypeError("Promise.race accepts an array"));
          for (var d = 0, e = a.length; d < e; d++) Ea.resolve(a[d]).then(c, b);
        });
      };
      Ea.We =
        ("function" === typeof setImmediate &&
          function (a) {
            setImmediate(a);
          }) ||
        function (a) {
          ls(a, 0);
        };
      Ea.Zg = function (a) {
        "undefined" !== typeof console &&
          console &&
          console.warn("Possible Unhandled Promise Rejection:", a);
      };
      var K = window.Promise,
        ms = Ja(K, "Promise"),
        $k = Ja(n(K, "resolve"), "resolve"),
        al = Ja(n(K, "reject"), "reject"),
        bl = Ja(n(K, "all"), "all");
      if (G(!1, [ms, $k, al, bl])) K = Ea;
      else {
        var Qe = function (a) {
          return new Promise(a);
        };
        Qe.resolve = F($k, K);
        Qe.reject = F(al, K);
        Qe.all = F(bl, K);
        K = Qe;
      }
      var Iq = [
          "http.0.st..rt.",
          "network error occurred",
          "send beacon",
          "Content Security Policy",
          "DOM Exception 18"
        ],
        Fd,
        Gc = (function (a) {
          return function (c) {
            if (Fd) return new Fd(c);
            if (Da("Error", a.Error)) return (Fd = a.Error), new a.Error(c);
            Fd = Yq;
            return new Fd(c);
          };
        })(window),
        Jq = Sa(/^http./),
        Hq = Sa(/^err.kn/),
        Uq = /[^a-z0-9.:-]/,
        Zi = /^\s+|\s+$/g,
        hk = Ja(String.prototype.trim, "trim"),
        cl = fa(function (a, c) {
          return c.replace(a, "");
        }),
        Yh = cl(/\s/g),
        Nb = cl(/\D/g),
        ns = w(function (a) {
          a = n(a, "document") || {};
          return ("" + (a.characterSet || a.charset || "")).toLowerCase();
        }),
        Va = w(u(U("document"), v("createElement", ec))),
        Ji = w(function (a) {
          var c = n(a, "Element.prototype");
          return c
            ? (a = bb(
                function (b) {
                  return Da(b, c[b]);
                },
                [
                  "matches",
                  "webkitMatchesSelector",
                  "mozMatchesSelector",
                  "msMatchesSelector",
                  "oMatchesSelector"
                ]
              ))
              ? c[a]
              : null
            : null;
        }),
        os = ka("INPUT"),
        Ee = u(Ga, os),
        ps = ka("TEXTAREA"),
        Rq = u(Ga, ps),
        qs = ka("SELECT"),
        Sq = u(Ga, qs),
        Fe = u(U("type"), Sa(/^(checkbox|radio)$/)),
        If = u(Ga, Sa(/^INPUT|SELECT|TEXTAREA$/)),
        he = u(Ga, Sa(/^INPUT|SELECT|TEXTAREA|BUTTON$/)),
        Nf = "INPUT CHECKBOX RADIO TEXTAREA SELECT PROGRESS".split(" "),
        Qq = ["submit", "image", "hidden"],
        dl =
          "A B BIG BODY BUTTON DD DIV DL DT EM FIELDSET FORM H1 H2 H3 H4 H5 H6 HR I IMG INPUT LI OL P PRE SELECT SMALL SPAN STRONG SUB SUP TABLE TBODY TD TEXTAREA TFOOT TH THEAD TR U UL ABBR AREA BLOCKQUOTE CAPTION CENTER CITE CODE CANVAS DFN EMBED FONT INS KBD LEGEND LABEL MAP OBJECT Q S SAMP STRIKE TT ARTICLE AUDIO ASIDE FOOTER HEADER MENU METER NAV PROGRESS SECTION TIME VIDEO NOINDEX NOBR MAIN svg circle clippath ellipse defs foreignobject g glyph glyphref image line lineargradient marker mask path pattern polygon polyline radialgradient rect set text textpath title".split(
            " "
          ),
        Nh = w(function () {
          for (var a = 59, c = {}, b = 0; b < dl.length; b += 1)
            (c[dl[b]] = String.fromCharCode(a)), (a += 1);
          return c;
        }),
        ck = w(function (a) {
          return { Am: a, cb: null, mb: [] };
        }),
        Zj = {},
        qg = {};
      Zj.p = 500;
      var Yj = { i: "id", n: "name", h: "href", ty: "type" };
      qg.h = !0;
      qg.c = !0;
      var Tc = {};
      Tc.p = rg;
      Tc.c = function (a, c, b) {
        (a = sb(n(c, "textContent"))) &&
          b &&
          ((b = b(c)),
          b.length && Ha(u(U("textContent"), sb, ka(a)), b) && (a = ""));
        Ee(c) && (a = sb((c.getAttribute && c.getAttribute("value")) || a));
        return a;
      };
      var Vc,
        pg =
          "button," +
          y(
            function (a) {
              return 'input[type="' + a + '"]';
            },
            ["button", "submit", "reset", "file"]
          ).join(",") +
          ",a",
        Ph = v(pg, jb),
        Oq =
          ((Vc = {}),
          (Vc.A = "h"),
          (Vc.BUTTON = "i"),
          (Vc.DIV = "i"),
          (Vc.INPUT = "ty"),
          Vc),
        Gd;
      var zc = [Vj, 0, Ub, og, xd];
      var el = [Ub];
      el.push(og);
      var fl = Hb(el),
        Dc = Hb([xd]),
        rs = Hb([Vj, xd]),
        Re = Hb([0, Ub, og, xd]),
        pa = {};
      z(pa, ((Gd = {}), (Gd.h = fl), (Gd.f = fl), (Gd.er = Dc), Gd));
      pa["7"] = Dc;
      pa.d = Dc;
      pa.pi = Dc;
      pa.m = rs;
      pa["2"] = zc;
      pa["6"] = Hb([0, Ub]);
      pa.t = zc;
      pa.a = Re;
      pa.n = zc;
      pa["4"] = Hb([0, Ub, xd]);
      pa.r = Re;
      pa["1"] = Re;
      pa.g = Re;
      pa.c = Dc;
      pa.ci = Hb([Ub]);
      pa.e = zc;
      pa.adb = Dc;
      pa.W = Hb([0, Ub]);
      pa["5"] = zc;
      var Od = w(function (a, c) {
          var b;
          (b = c ? pa[c] : zc) || (b = []);
          b = J(
            function (d, e, f) {
              (e = e && e(a)) && d.push([f, e]);
              return d;
            },
            [],
            b
          );
          b.length || ug();
          return b;
        }, Ab),
        ss = $b([26812653]),
        Sf = w(u(U("id"), ss), N),
        yc = 0,
        Be = 0,
        Uj = 0,
        dc = ["0", "1", "2", "3"],
        Qc = dc[0],
        Vf = dc[1],
        Bq = dc[2],
        Zf = y(u(M, ia("concat", "GDPR-ok-view-detailed-")), dc),
        me = va(
          "GDPR-ok GDPR-cross GDPR-cancel 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 GDPR-settings GDPR-ok-view-default GDPR-ok-view-detailed 21 22 23".split(
            " "
          ),
          Zf,
          ["28", "29", "30"]
        ),
        Aq = "3 13 14 15 16 17 28".split(" "),
        Yf = u(cb(U("ymetrikaEvent.type")), Mc($b(me))),
        Rj = ib("gsc", Pj),
        zq = /:\d+$/,
        rr = w(function (a) {
          var c = (S(a).host || "").split(".");
          return 1 === c.length
            ? c[0]
            : J(
                function (b, d, e) {
                  e += 1;
                  2 <= e &&
                    !b &&
                    ((e = H(".", c.slice(-e))), Bi(a, e) && (b = e));
                  return b;
                },
                "",
                c
              );
        }),
        ac = w(Lc),
        xq = w(function (a) {
          Nj(a, "_ymBRC", "1");
          var c = "1" !== Mj(a, "_ymBRC");
          c || Oj(a, "_ymBRC");
          return c;
        }),
        Ka = w(gf),
        Hd = w(gf, function (a, c, b) {
          return "" + c + b;
        }),
        da = w(ag),
        Kj = ib("r", function (a, c) {
          var b = Jj(a, c),
            d = b[0];
          return !b[1] && d;
        }),
        Vd = w(Pd, function (a, c) {
          return "{" + c.ae + c.jb;
        }),
        Aj = w(Cc, N),
        xh = u(Vd, wc),
        Gj = fa(function (a, c) {
          for (var b = []; !vd(c); ) {
            var d = vq(c);
            a(d, function (e) {
              return e(c);
            });
            b.push(d);
          }
          return b;
        }),
        bc = fa(function (a, c) {
          return la(function (b, d) {
            return c(b, function (e) {
              try {
                d(a(e));
              } catch (f) {
                b(f);
              }
            });
          });
        }),
        Wc = fa(function (a, c) {
          return la(function (b, d) {
            return c(b, function (e) {
              try {
                a(e)(Ta(b, d));
              } catch (f) {
                b(f);
              }
            });
          });
        }),
        hg = [],
        ig = !1,
        gg = !1,
        sr = w(function (a) {
          if ((a = Va(a))) return a("a");
        }),
        zj = ["webkitvisibilitychange", "visibilitychange"],
        yj = Wk(function (a) {
          a = za(a);
          return H(
            "",
            y(function (c) {
              var b = c[0];
              c = c[1];
              return Qa(c) ? "" : b + "(" + c + ")";
            }, a)
          );
        }),
        Jb = C([1, null], Ie),
        Qb = C([1, 0], Ie),
        qp = /^ *(data|javascript):/i,
        Ri = new RegExp(
          H("", [
            "\\.(" +
              H(
                "|",
                "3gp 7z aac ac3 acs ai avi ape apk asf bmp bz2 cab cdr crc32 css csv cue divx dmg djvu? doc(x|m|b)? emf eps exe flac? flv iso swf gif t?gz jpe?g? js m3u8? m4a mp(3|4|e?g?) m4v md5 mkv mov msi ods og(g|m|v) psd rar rss rtf sea sfv sit sha1 svg tar tif?f torrent ts txt vob wave? wma wmv wmf webm ppt(x|m|b)? xls(x|m|b)? pdf phps png xpi g?zip".split(
                  " "
                )
              ) +
              ")$"
          ]),
          "i"
        ),
        Na,
        Nr =
          ((Na = {}),
          (Na.hit = "h"),
          (Na.experiments = "ex"),
          (Na.params = "p"),
          (Na.reachGoal = "g"),
          (Na.userParams = "up"),
          (Na.trackHash = "th"),
          (Na.accurateTrackBounce = "atb"),
          (Na.notBounce = "nb"),
          (Na.addFileExtension = "fe"),
          (Na.extLink = "el"),
          (Na.file = "fc"),
          (Na.trackLinks = "tl"),
          (Na.destruct = "d"),
          (Na.setUserID = "ui"),
          (Na.getClientID = "ci"),
          (Na.clickmap = "cm"),
          (Na.enableAll = "ea"),
          Na),
        ts = Sa(/^.+\.mtproxy\.yandex\.net$/),
        Hf = w(function (a) {
          if ("MetrikaPlayer" === a.name) return !0;
          a = S(a).hostname;
          return ts(a);
        }),
        ve = w(function () {
          return { Mb: {}, pending: {}, zb: {} };
        }),
        Ng = U("postMessage"),
        us = D("s.f", function (a, c, b, d, e) {
          c = c(d);
          var f = ve(a),
            g = H(":", [c.Z.oc, c.Z.key]);
          if (Ng(b)) {
            f.pending[g] = e;
            try {
              b.postMessage(c.xg, "*");
            } catch (h) {
              delete f.pending[g];
              return;
            }
            W(
              a,
              function () {
                delete f.pending[g];
              },
              5e3,
              "if.s"
            );
          }
        }),
        vs = D("s.fh", function (a, c, b, d, e, f) {
          var g = null,
            h = null,
            k = ve(a),
            l = null;
          try {
            (g = Fb(a, f.data)), (h = g.__yminfo), (l = g.data);
          } catch (m) {
            return;
          }
          if (
            !ma(h) &&
            h.substring &&
            "__yminfo" === h.substring(0, 8) &&
            !ma(l) &&
            ((g = h.split(":")), 4 === g.length)
          )
            if (
              ((h = c.id),
              (c = g[1]),
              (a = g[2]),
              (g = g[3]),
              !ca(l) && l.type && "0" === g && l.counterId)
            ) {
              if (!l.toCounter || l.toCounter == h) {
                k = null;
                try {
                  k = f.source;
                } catch (m) {}
                !Qa(k) &&
                  Ng(k) &&
                  ((f = d.V(l.type, [f, l])),
                  (e = y(u(M, Ei(e)), f.concat([{}]))),
                  (l = b([c, a, l.counterId], e)),
                  k.postMessage(l.xg, "*"));
              }
            } else
              g === "" + h &&
                ca(l) &&
                V(function (m) {
                  return !(!m.hid || !m.counterId);
                }, l).length === l.length &&
                (b = k.pending[H(":", [c, a])]) &&
                b.apply(null, [f].concat(l));
        }),
        lj = w(function (a, c) {
          var b,
            d = ec("getElementsByTagName", n(a, "document")),
            e = ve(a),
            f = Ng(a),
            g = cd(a),
            h = ha(a);
          if (!d || !f) return null;
          d = d.call(a.document, "iframe");
          f = ((b = {}), (b.counterId = c.id), (b.hid = "" + mc(a)), b);
          nq(a, g);
          b = oq(a, f);
          var k = C([a, v([], b)], us);
          B(function (l) {
            var m = null;
            try {
              m = l.contentWindow;
            } catch (q) {}
            m &&
              k(m, { type: "initToChild" }, function (q, p) {
                g.V("initToParent", [q, p]);
              });
          }, d);
          Pb(a) &&
            k(a.parent, { type: "initToParent" }, function (l, m) {
              g.V("parentConnect", [l, m]);
            });
          h.D(a, ["message"], C([a, c, b, g, f], vs));
          return { aa: g, Mb: e.Mb, zb: e.zb, Ee: k };
        }, u(Ab, N)),
        pe = w(xj, u(Ab, N)),
        ws = D("pa.plgn", function (a, c) {
          var b = pe(a, c);
          b &&
            b.aa.D(
              ["pluginInfo"],
              E(a, "c.plgn", function () {
                var d = O(a);
                d.C("cmc", d.o("cmc", 0) + 1);
                return ar(c, Vk);
              })
            );
        }),
        Bb,
        Ec,
        yf =
          ((Bb = {}),
          (Bb.transaction_id = "id"),
          (Bb.item_id = "id"),
          (Bb.item_name = "name"),
          (Bb.item_brand = "brand"),
          (Bb.promotion_name = "coupon"),
          (Bb.index = "position"),
          (Bb.item_variant = "variant"),
          (Bb.value = "revenue"),
          (Bb.item_category = "category"),
          Bb),
        hi =
          ((Ec = {}),
          (Ec.view_item = "detail"),
          (Ec.add_to_cart = "add"),
          (Ec.remove_from_cart = "remove"),
          (Ec.begin_checkout = "checkout"),
          (Ec.purchase = "purchase"),
          Ec),
        gn = "currencyCode add delete remove purchase checkout detail".split(
          " "
        ),
        Se = fa(function (a, c) {
          return O(c).o(a, null);
        }),
        xs = w(function () {
          var a = 0;
          return function () {
            return (a += 1);
          };
        }),
        ys = u(N, xs, Oa),
        Xa = {
          mc: function (a) {
            a = ic(a).o("mt", {});
            a = za(a);
            return a.length
              ? J(
                  function (c, b, d) {
                    return "" + c + (d ? "-" : "") + b[0] + "-" + b[1];
                  },
                  "",
                  a
                )
              : null;
          }
        };
      Xa.oo = Se("oo");
      Xa.pmc = Se("cmc");
      Xa.clc = function (a) {
        var c = O(a).o("cls", { dc: 0, x: 0, y: 0 }),
          b = c.dc,
          d = c.x;
        c = c.y;
        return b
          ? b + "-" + a.Math.floor(d / b) + "-" + a.Math.floor(c / b)
          : b + "-" + d + "-" + c;
      };
      Xa.lt = function (a) {
        var c = ic(a).o("lt", null);
        return c ? a.Math.round(100 * c) : c;
      };
      Xa.mtb = function () {
        return Math.min(Uj, 1e5);
      };
      Xa.yu = function (a) {
        var c = S(a);
        return G(c.hostname, ["dzen.ru", "ya.ru"])
          ? (Lc(a, "").o("yandexuid") || "").substring(0, 25)
          : null;
      };
      Xa.re = u(function (a, c) {
        return !c.jb && Kj(a, c);
      }, Jb);
      Xa.aw = function (a) {
        a = bb(u(ma, yb), [
          a.document.hidden,
          a.document.msHidden,
          a.document.webkitHidden
        ]);
        return ma(a) ? null : Qb(!a);
      };
      Xa.ifc = function (a) {
        return ic(a).o("ifc");
      };
      Xa.ifb = function (a) {
        return ic(a).o("ifb");
      };
      Xa.rqnt = function (a, c, b) {
        a = b.G;
        return !a || a.nohit ? null : ys(c);
      };
      Xa.ecs = function (a) {
        return ic(a).o("ecs");
      };
      Xa.csi = Se("scip");
      var zs = aa(Xa),
        wj = w(function () {
          return { rf: null, Fc: [] };
        }, N),
        As = [
          ["domainLookupEnd", "domainLookupStart"],
          ["connectEnd", "connectStart"],
          ["responseStart", "requestStart"],
          ["responseEnd", "responseStart"],
          ["fetchStart", "navigationStart"],
          ["redirectEnd", "redirectStart"],
          [
            function (a, c) {
              return n(c, "redirectCount") || n(a, "navigation.redirectCount");
            }
          ],
          ["domInteractive", "domLoading"],
          ["domContentLoadedEventEnd", "domContentLoadedEventStart"],
          ["domComplete", "navigationStart"],
          ["loadEventStart", "navigationStart"],
          ["loadEventEnd", "loadEventStart"],
          ["domContentLoadedEventStart", "navigationStart"]
        ],
        nb,
        Bs = [
          ["domainLookupEnd", "domainLookupStart"],
          ["connectEnd", "connectStart"],
          ["responseStart", "requestStart"],
          ["responseEnd", "responseStart"],
          ["fetchStart"],
          ["redirectEnd", "redirectStart"],
          ["redirectCount"],
          ["domInteractive", "responseEnd"],
          ["domContentLoadedEventEnd", "domContentLoadedEventStart"],
          ["domComplete"],
          ["loadEventStart"],
          ["loadEventEnd", "loadEventStart"],
          ["domContentLoadedEventStart"]
        ],
        vj =
          ((nb = {}),
          (nb.responseEnd = 1),
          (nb.domInteractive = 1),
          (nb.domContentLoadedEventStart = 1),
          (nb.domContentLoadedEventEnd = 1),
          (nb.domComplete = 1),
          (nb.loadEventStart = 1),
          (nb.loadEventEnd = 1),
          (nb.unloadEventStart = 1),
          (nb.unloadEventEnd = 1),
          (nb.secureConnectionStart = 1),
          nb),
        Cs = w($d),
        iq = { "*": "+", "-": "/", pm: "=", "+": "*", "/": "-", "=": "_" },
        Id = w(function (a) {
          a = n(a, "console");
          var c = n(a, "log");
          c = Je("log", c) ? F(c, a) : A;
          var b = n(a, "warn");
          b = Je("warn", b) ? F(b, a) : c;
          var d = n(a, "error");
          a = Je("error", d) ? F(d, a) : c;
          return { log: c, error: a, warn: b };
        }),
        Ds = D("p.cd", function (a, c) {
          if (jd(a) || He(a)) {
            var b = Ka(a);
            if (ma(b.o("jn"))) {
              b.C("jn", !1);
              var d = a.um || td(a) ? function () {} : /./,
                e = Id(a, N(c));
              d.toString = function () {
                b.C("jn", !0);
                return "Yandex.Metrika counter is initialized";
              };
              e.log("%c%s", "color: inherit", d);
            }
          }
        }),
        gq = /Firefox\/([0-9]+)/,
        fq = /([0-9\\.]+) Safari/,
        Es = /\sYptp\/\d\.(\d+)\s/,
        hq = /Edg\/(\d+)\./,
        Og = w(function (a) {
          var c;
          a: {
            if ((c = vb(a)) && (c = Es.exec(c)) && 1 < c.length) {
              c = Ba(c[1]);
              break a;
            }
            c = 0;
          }
          return (50 <= c && 99 >= c) || jj(a, 79) ? !1 : !Pe(a) || Wf(a);
        }),
        pf =
          "monospace;sans-serif;serif;Andale Mono;Arial;Arial Black;Arial Hebrew;Arial MT;Arial Narrow;Arial Rounded MT Bold;Arial Unicode MS;Bitstream Vera Sans Mono;Book Antiqua;Bookman Old Style;Calibri;Cambria;Cambria Math;Century;Century Gothic;Century Schoolbook;Comic Sans;Comic Sans MS;Consolas;Courier;Courier New;Garamond;Geneva;Georgia;Helvetica;Helvetica Neue;Impact;Lucida Bright;Lucida Calligraphy;Lucida Console;Lucida Fax;LUCIDA GRANDE;Lucida Handwriting;Lucida Sans;Lucida Sans Typewriter;Lucida Sans Unicode;Microsoft Sans Serif;Monaco;Monotype Corsiva;MS Gothic;MS Outlook;MS PGothic;MS Reference Sans Serif;MS Sans Serif;MS Serif;MYRIAD;MYRIAD PRO;Palatino;Palatino Linotype;Segoe Print;Segoe Script;Segoe UI;Segoe UI Light;Segoe UI Semibold;Segoe UI Symbol;Tahoma;Times;Times New Roman;Times New Roman PS;Trebuchet MS;Verdana;Wingdings;Wingdings 2;Wingdings 3".split(
            ";"
          ),
        Fs =
          "Abadi MT Condensed Light;Academy Engraved LET;ADOBE CASLON PRO;Adobe Garamond;ADOBE GARAMOND PRO;Agency FB;Aharoni;Albertus Extra Bold;Albertus Medium;Algerian;Amazone BT;American Typewriter;American Typewriter Condensed;AmerType Md BT;Andalus;Angsana New;AngsanaUPC;Antique Olive;Aparajita;Apple Chancery;Apple Color Emoji;Apple SD Gothic Neo;Arabic Typesetting;ARCHER;ARNO PRO;Arrus BT;Aurora Cn BT;AvantGarde Bk BT;AvantGarde Md BT;AVENIR;Ayuthaya;Bandy;Bangla Sangam MN;Bank Gothic;BankGothic Md BT;Baskerville;Baskerville Old Face;Batang;BatangChe;Bauer Bodoni;Bauhaus 93;Bazooka;Bell MT;Bembo;Benguiat Bk BT;Berlin Sans FB;Berlin Sans FB Demi;Bernard MT Condensed;BernhardFashion BT;BernhardMod BT;Big Caslon;BinnerD;Blackadder ITC;BlairMdITC TT;Bodoni 72;Bodoni 72 Oldstyle;Bodoni 72 Smallcaps;Bodoni MT;Bodoni MT Black;Bodoni MT Condensed;Bodoni MT Poster Compressed;Bookshelf Symbol 7;Boulder;Bradley Hand;Bradley Hand ITC;Bremen Bd BT;Britannic Bold;Broadway;Browallia New;BrowalliaUPC;Brush Script MT;Californian FB;Calisto MT;Calligrapher;Candara;CaslonOpnface BT;Castellar;Centaur;Cezanne;CG Omega;CG Times;Chalkboard;Chalkboard SE;Chalkduster;Charlesworth;Charter Bd BT;Charter BT;Chaucer;ChelthmITC Bk BT;Chiller;Clarendon;Clarendon Condensed;CloisterBlack BT;Cochin;Colonna MT;Constantia;Cooper Black;Copperplate;Copperplate Gothic;Copperplate Gothic Bold".split(
            ";"
          ),
        Dh = w(function (a) {
          a = Va(a)("canvas");
          var c = n(a, "getContext");
          if (!c) return null;
          try {
            var b = F(c, a)("2d");
            b.font = "72px mmmmmmmmmmlli";
            var d = b.measureText("mmmmmmmmmmlli").width;
            return function (e) {
              b.font = "72px " + e;
              return b.measureText("mmmmmmmmmmlli").width === d;
            };
          } catch (e) {
            return null;
          }
        }),
        gl = Ja(String.prototype.repeat, "repeat"),
        nj = gl
          ? function (a, c) {
              return gl.call(a, c);
            }
          : er,
        Td = v(!0, sj),
        hm = v(!1, sj),
        ue = [2277735313, 289559509],
        te = [1291169091, 658871167],
        Gs = u(
          ib("aip", function (a) {
            var c = [];
            if (Og(a) && !Sc(a)) return c;
            var b = Ka(a),
              d = b.o("aip");
            if (d) return [d];
            W(a, u(C([a, Fs], Pi), la(Ta(E(a, "aip.f"), C([b, c], cq)))), 1e3);
            return c;
          }),
          U("0")
        ),
        hl = /\/$/,
        Hs = w(
          u(
            da,
            la(function (a) {
              return -new a.l.Date().getTimezoneOffset();
            })
          )
        ),
        Is = u(
          da,
          la(function (a) {
            a = new a.l.Date();
            return H(
              "",
              y(wq, [
                a.getFullYear(),
                a.getMonth() + 1,
                a.getDate(),
                a.getHours(),
                a.getMinutes(),
                a.getSeconds()
              ])
            );
          })
        ),
        Js = u(da, la(ye)),
        il = w(
          u(
            da,
            la(function (a) {
              return a.sa[0];
            })
          )
        ),
        Ks = w(Cc),
        Ls = w(Cc),
        Ms = w(function (a) {
          var c = n(a, "webkitRequestFileSystem");
          if (T(c) && !jd(a))
            return new K(F(c, a, 0, 0))
              .then(function () {
                var d = n(a, "navigator.storage") || {};
                return d.estimate ? d.estimate() : {};
              })
              .then(function (d) {
                return (d = d.quota) && 12e7 > d ? !0 : !1;
              })
              ["catch"](v(!0, M));
          if (Sc(a))
            return (c = n(a, "navigator.serviceWorker")), K.resolve(X(c));
          c = n(a, "openDatabase");
          if (td(a) && T(c)) {
            var b = !1;
            try {
              c(null, null, null, null);
            } catch (d) {
              b = !0;
            }
            return K.resolve(b);
          }
          return K.resolve(
            !n(a, "indexedDB") &&
              (n(a, "PointerEvent") || n(a, "MSPointerEvent"))
          );
        }),
        Ns = /(\?|&)turbo_uid=([\w\d]+)($|&)/,
        Os = w(function (a, c) {
          var b = ac(a),
            d = S(a).search.match(Ns);
          return d && 2 <= d.length
            ? ((d = d[2]), c.jb || b.C("turbo_uid", d), d)
            : (b = b.o("turbo_uid"))
            ? b
            : "";
        }),
        Ps = w(function (a) {
          return T(n(a, "yandex.getSiteUid")) ? a.yandex.getSiteUid() : null;
        }),
        ea,
        Kb,
        Qs = w(function (a) {
          a = O(a);
          var c = a.o("counterNum", 0) + 1;
          a.C("counterNum", c);
          return c;
        }, u(Ab, N)),
        zb =
          ((ea = {}),
          (ea.vf = v(wd.version, M)),
          (ea.nt = Xr),
          (ea.fp = function (a, c, b) {
            if (b.G && b.G.nohit) return null;
            c = N(c);
            b = Ks(a);
            if (b[c]) return null;
            a: {
              var d = il(a),
                e = n(a, "performance.getEntriesByType");
              if (T(e)) {
                if (
                  ((a = V(
                    u(M, U("name"), ka("first-contentful-paint")),
                    e.call(a.performance, "paint")
                  )),
                  a.length)
                ) {
                  a = a[0].startTime;
                  break a;
                }
              } else {
                e = n(a, "chrome.loadTimes");
                if (
                  T(e) &&
                  ((e = e.call(a.chrome)), (e = n(e, "firstPaintTime")), d && e)
                ) {
                  a = 1e3 * e - d;
                  break a;
                }
                if ((a = n(a, "performance.timing.msFirstPaint"))) {
                  a -= d;
                  break a;
                }
              }
              a = void 0;
            }
            return a ? ((b[c] = a), Math.round(a)) : null;
          }),
          (ea.fu = function (a, c, b) {
            var d = b.G;
            if (!d) return null;
            c = (n(a, "document.referrer") || "").replace(hl, "");
            b = (d["page-ref"] || "").replace(hl, "");
            d = d["page-url"];
            a = S(a).href !== d;
            c = c !== b;
            b = 0;
            a && c ? (b = 3) : c ? (b = 1) : a && (b = 2);
            return b;
          }),
          (ea.en = ns),
          (ea.la = Uk),
          (ea.ut = function (a, c, b) {
            var d = b.Nc;
            (b = b.G) && (is(a) || c.Se || d) && (b.ut = "noindex");
            return null;
          }),
          (ea.v = v(na.Ma, M)),
          (ea.cn = Qs),
          (ea.dp = function (a) {
            var c = O(a),
              b = c.o("bt", {});
            if (X(c.o("bt"))) {
              var d = n(a, "navigator.getBattery");
              try {
                b.p = d && d.call(a.navigator);
              } catch (e) {}
              c.C("bt", b);
              b.p &&
                b.p.then &&
                b.p.then(
                  E(a, "bi:dp.p", function (e) {
                    b.Vj = n(e, "charging") && 0 === n(e, "chargingTime");
                  })
                );
            }
            return Qb(b.Vj);
          }),
          (ea.ls = w(function (a, c) {
            var b = Hd(a, c.id),
              d = da(a),
              e = b.o("lsid");
            return +e ? e : ((d = Pa(a, 0, d(Z))), b.C("lsid", d), d);
          }, Ab)),
          (ea.hid = mc),
          (ea.z = Hs),
          (ea.i = Is),
          (ea.et = Js),
          (ea.c = u(U("navigator.cookieEnabled"), Jb)),
          (ea.rn = u(M, Pa)),
          (ea.rqn = function (a, c, b) {
            b = b.G;
            if (!b || b.nohit) return null;
            c = N(c);
            a = Hd(a, c);
            c = (a.o("reqNum", 0) || 0) + 1;
            a.C("reqNum", c);
            if (a.o("reqNum") === c) return c;
            a.pc("reqNum");
            return null;
          }),
          (ea.u = Vd),
          (ea.tp = u(Ab, lk, Jb)),
          (ea.tpid = u(Ab, function (a) {
            a = N(a);
            return (hc[a] && hc[a].Kj) || null;
          })),
          (ea.w = function (a) {
            a = yd(a);
            return a[0] + "x" + a[1];
          }),
          (ea.s = function (a) {
            var c = n(a, "screen");
            if (c) {
              a = n(c, "width");
              var b = n(c, "height");
              c = n(c, "colorDepth") || n(c, "pixelDepth");
              return H("x", [a, b, c]);
            }
            return null;
          }),
          (ea.sk = U("devicePixelRatio")),
          (ea.ifr = u(Pb, Jb)),
          (ea.j = u(Zr, Jb)),
          (ea.sti = function (a) {
            return Pb(a) ? (Yr(a) ? "1" : null) : null;
          }),
          ea);
      zb.pri = function (a) {
        if (qd(a)) return null;
        var c = Ls(a),
          b = c.$f;
        X(b) &&
          ((c.$f = null),
          Ms(a).then(function (d) {
            c.$f = d;
          }));
        return b ? 1 : null;
      };
      z(
        zb,
        ((Kb = {}),
        (Kb.iss = u($r, Jb)),
        (Kb.hdl = u(as, Jb)),
        (Kb.iia = u(bs, Jb)),
        (Kb.cpf = u(cs, Jb)),
        (Kb.ntf = w(function (a) {
          a: switch (n(a, "Notification.permission")) {
            case "denied":
              a = !1;
              break a;
            case "granted":
              a = !0;
              break a;
            default:
              a = null;
          }
          return Qa(a) ? null : a ? 2 : 1;
        })),
        (Kb.eu = Se("isEU")),
        (Kb.ns = il),
        (Kb.np = function (a) {
          return Pa(a, 0, 100) ? null : Ff(tj(sb(Ef(a), 100)));
        }),
        Kb)
      );
      zb.ds = function (a, c, b) {
        c = N(c);
        a = ng(a);
        b = b.G;
        if ((void 0 === b ? {} : b).nohit) return null;
        var d = (b = null);
        n(a, "getEntriesByType") &&
          (d = n(a.getEntriesByType("navigation"), "0")) &&
          (b = Bs);
        if (!b) {
          var e = n(a, "timing");
          e && ((b = As), (d = e));
        }
        if (!b) return null;
        a = kq(a, d, b);
        c = Cs(c);
        return (c = jq(c, a)) && H(",", c);
      };
      zb.bu = Ps;
      zb.td = Os;
      zb.j0 = Gs;
      zb.wv = v(2, M);
      zb.co = function (a) {
        return Qb(O(a).o("jn"));
      };
      var Rs = aa(zb);
      zb.we = function (a, c) {
        return Jb(c.Va);
      };
      var bq = Rs.concat(zs),
        $p = [
          "RTCPeerConnection",
          "mozRTCPeerConnection",
          "webkitRTCPeerConnection"
        ],
        Wp = fa(function (a, c) {
          if (!c[a]) {
            var b,
              d = new K(function (e) {
                b = e;
              });
            c[a] = { eg: b, Sa: d, fg: !1 };
          }
          return c[a].Sa;
        }),
        kj = w(u(Cc, la)),
        wi = u(U("settings.pcs"), ka("1")),
        Pg = w(
          function (a, c, b) {
            var d = O(a);
            c = Ka(a);
            var e = [];
            b = C([a, b, d, c], dq);
            qd(a) || eq(a, "14.1") || e.push(C([Zp, "pp", ""], b));
            var f = Og(a) && !ij(a, 68);
            f || e.push(C([aq, "pu", ""], b));
            f ||
              c.Ud ||
              Pe(a) ||
              (e.push(C([Vp, "zzlc", "na"], b)), e.push(C([Up, "cc", ""], b)));
            return e.length
              ? {
                  La: function (g, h) {
                    if (0 === d.o("isEU"))
                      try {
                        B(u(M, Oa), e);
                      } catch (k) {}
                    h();
                  },
                  ca: function (g, h) {
                    var k = g.J;
                    if (k && 0 === d.o("isEU"))
                      try {
                        B(la(k), e);
                      } catch (l) {}
                    h();
                  }
                }
              : {};
          },
          function (a, c, b) {
            return N(b);
          }
        ),
        rd = ib("retryReqs", function (a) {
          return Ka(a).o("retryReqs", {});
        }),
        Tp = ["0"],
        Mm = D("g.r", function (a) {
          var c = da(a),
            b = rd(a),
            d = c(Z),
            e = mc(a);
          return J(
            function (f, g) {
              var h = g[0],
                k = g[1];
              k &&
                !k.d &&
                k.ghid &&
                k.ghid !== e &&
                k.time &&
                500 < d - k.time &&
                k.time + 864e5 > d &&
                2 >= k.browserInfo.rqnl &&
                ((k.d = 1),
                f.push({
                  protocol: k.protocol,
                  host: k.host,
                  pj: k.resource,
                  jj: k.postParams,
                  T: k.params,
                  ih: k.browserInfo,
                  Ia: k.telemetry,
                  Cm: k.ghid,
                  time: k.time,
                  Qb: Ba(h),
                  th: k.counterId,
                  $: k.counterType
                }));
              return f;
            },
            [],
            za(b)
          );
        }),
        Xf = [],
        Sp = "ru en et fi lt lv pl fr no sr".split(" "),
        Vb,
        Qp =
          ((Vb = {}),
          (Vb["GDPR-ok"] = "ok"),
          (Vb["GDPR-ok-view-default"] = "ok-default"),
          (Vb["GDPR-ok-view-detailed"] = "ok-detailed"),
          (Vb["GDPR-ok-view-detailed-0"] = "ok-detailed-all"),
          (Vb["GDPR-ok-view-detailed-1"] = "ok-detailed-tech"),
          (Vb["GDPR-ok-view-detailed-2"] = "ok-detailed-tech-analytics"),
          (Vb["GDPR-ok-view-detailed-3"] = "ok-detailed-tech-other"),
          Vb),
        oe = [],
        dj = u(Yf, cb(Qr(me)), od(",")),
        ej = u(Mc($b(me)), xa, Boolean),
        Jp = w(function (a, c) {
          var b = c.o("gdpr");
          return G(b, dc) ? "-" + b : "";
        }),
        jl = w($d),
        ob,
        Fc,
        eb,
        Dp =
          ((ob = {}),
          (ob.am = "com.am"),
          (ob.tr = "com.tr"),
          (ob.ge = "com.ge"),
          (ob.il = "co.il"),
          (ob["\u0440\u0444"] = "ru"),
          (ob["xn--p1ai"] = "ru"),
          (ob["\u0443\u043a\u0440"] = "ua"),
          (ob["xn--j1amh"] = "ua"),
          (ob["\u0431\u0435\u043b"] = "by"),
          (ob["xn--90ais"] = "by"),
          ob),
        kl = [],
        ll = { ef: kl },
        ml =
          ((Fc = {}),
          (Fc["an.yandex.ru/mapuid/betweenx/"] = ll),
          (Fc["an.yandex.ru/mapuid/google/?partner-tag=yandex_ag"] = ll),
          (Fc["mc.edadeal.ru"] = { Xc: /^([^/]+\.)?edadeal\.ru$/, Cg: "ru" }),
          (Fc["mc.yandexsport.ru"] = {
            Xc: /^([^/]+\.)?yandexsport\.ru$/,
            Cg: "ru"
          }),
          (Fc["mc.kinopoisk.ru"] = {
            Xc: /^([^/]+\.)?kinopoisk\.ru$/,
            Cg: "ru"
          }),
          Fc),
        Fp =
          ((eb = {}),
          (eb.ka = "ge"),
          (eb.ro = "md"),
          (eb.tg = "tj"),
          (eb.tk = "tm"),
          (eb.et = "ee"),
          (eb.hy = "com.am"),
          (eb.he = "co.li"),
          (eb.ky = "kg"),
          (eb.uk = "ua"),
          (eb.be = "by"),
          (eb.tr = "com.tr"),
          (eb.kk = "kz"),
          eb),
        cj = ib("csy", Cc),
        Ui = w($d),
        Ss = w(function (a) {
          var c = u(
            Mc(u(M, ka("ru"), yb)),
            Oc(function (b, d) {
              b[d] = ["mc.yandex." + d];
              return b;
            }, {})
          )(vg);
          B(function (b) {
            var d = b[0];
            b = b[1];
            if (!b.ef || G(a, b.ef)) c[d] = [d];
          }, za(ml));
          return c;
        }),
        Ts = w(function (a) {
          var c = S(a).hostname;
          return J(
            function (b, d) {
              var e = d[0],
                f = d[1];
              (f.Xc && !f.Xc.test(c)) || b.push(e);
              return b;
            },
            [],
            za(ml)
          );
        }),
        Us = fa(function (a, c) {
          var b = Yk(c),
            d = Ep(c),
            e = Ts(c) || [Bp(c)],
            f = da(c),
            g = Ka(c),
            h = g.o("synced", {});
          b = b ? e.concat(d) : e;
          h &&
            (b = V(function (k) {
              var l = (h[k] || 1) + 1440 < f(qb);
              l && delete h[k];
              return l;
            }, b));
          g.C("synced", h);
          return J(
            function (k, l) {
              B(function (m) {
                var q = { domain: m, Li: l };
                Cd(m, "/") && (q.ui = 1);
                k.push(q);
              }, a[l] || []);
              return k;
            },
            [],
            b
          );
        }),
        Uf = !1,
        Ap = /^[a-z][\w.+-]+:/i,
        nl = {},
        Vi = 0,
        cc = [],
        Wi = A,
        Vs = (function (a, c) {
          return function (b, d, e) {
            var f = N(e);
            d = Ss(f);
            var g = Us(d),
              h = G(f, kl),
              k = C([b, f], Hp);
            return Pe(b) || Sc(b)
              ? {}
              : {
                  ca: function (l, m) {
                    var q = l.J,
                      p = u(C([b, f, l.Ia], Gp), m),
                      r = O(b),
                      t = Yk(b) || h;
                    t || k("0");
                    var x = Pb(b);
                    x && k("1");
                    (q = !(q && q.o("pv"))) && k("2");
                    if (!t || x || q) return p();
                    t = g(b);
                    if (!t.length) return k("3"), p();
                    if (r.o("startSync")) (r = Ui(b)), k("4"), r.push(p);
                    else {
                      r.C("startSync", !0);
                      r = C([b, t, k], a);
                      if (h) return k("i"), r().then(p, p);
                      t = Xf[0];
                      if (!t) return k("h"), p();
                      k("j");
                      t(b)
                        .then(r)
                        .then(p, u(kd(p), E(b, c)))
                        ["catch"](A);
                    }
                  }
                };
          };
        })(function (a, c, b) {
          void 0 === b && (b = A);
          return new K(function (d, e) {
            cc = y(function (k) {
              return (
                na.Ca +
                "//" +
                k.domain +
                "/" +
                (k.ui ? "" : "sync_cookie_image_check")
              );
            }, c);
            if (cc.length) {
              var f = na.Ca + "//mc.yandex.ru/metrika/metrika_match.html";
              if (dk(a, f, "sc")) {
                var g = ha(a),
                  h = O(a);
                Wi = g.D(a, ["message"], C([a, f, C([null], d), c, h, b], zp));
                Vi = W(a, C([a, f, C([null], d), c, !1, b], Tf), 1500);
              } else b("6"), e();
            } else b("3"), d(null);
          });
        }, "sy.c.f"),
        Te,
        La = [dg, ud, xc(), bg],
        ol = "et w v z i u vf".split(" ");
      ol.push("we");
      var Qg = xc(ol);
      La.push(Vs);
      La.unshift(function (a, c, b) {
        return {
          La: function (d, e) {
            var f = ya(a, b);
            (f = f && f.userParams) && d.ld && f(d.ld);
            e();
          }
        };
      });
      La.unshift(function (a, c, b) {
        return {
          ca: function (d, e) {
            if (d.T && (kk(b, d.T), !d.ba && d.J && d.G)) {
              var f = fb(a, d.T),
                g = jl(a),
                h = d.J.o("pv");
              f &&
                !d.G.nohit &&
                (h
                  ? encodeURIComponent(f).length > na.Sg
                    ? g.push([d.J, d.T])
                    : (d.G["site-info"] = f)
                  : ((d.ba = f), (d.Si = !0)));
            }
            e();
          },
          La: function (d, e) {
            var f = jl(a),
              g = ya(a, b),
              h = g && g.params;
            h &&
              ((g = V(u(U("0"), ka(d.J)), f)),
              B(function (k) {
                h(k[1]);
                k = Ne(a)(k, f);
                f.splice(k, 1);
              }, g));
            e();
          }
        };
      });
      La.push(aj);
      La.push($i);
      La.push(Pg);
      La.push(function (a) {
        return {
          ca: function (c, b) {
            var d = c.J,
              e = Ka(a).o("fip");
            e && d && (d.C("fip", e), uc(c, "fip", Qb(e)));
            b();
          }
        };
      });
      La.push(qe());
      var wa = ((Te = {}), (Te.h = La), (Te.er = []), Te);
      wa["7"] = [];
      wa.adb = [];
      var pl = [xc(), bg];
      pl.push(Pg);
      wa.f = pl;
      wa["2"] = La;
      wa["1"] = (function (a, c) {
        return V(u($b(c), yb), a);
      })(La, [bg]);
      wa.a = La;
      wa.g = La;
      wa.e = La;
      var ql = [ud];
      ql.push(
        (function () {
          return function (a) {
            return {
              ca: function (c, b) {
                var d = c.J,
                  e = void 0 === d ? Ca() : d,
                  f = c.Qb,
                  g = c.Ia,
                  h = rd(a);
                d = e.o("rqnl", 0) + 1;
                e.C("rqnl", d);
                var k = (e = n(h, H(".", [f, "browserInfo"])));
                e && (e.rqnl = d);
                g &&
                  (g.C("rqnl", d), (f = n(h, H(".", [f, "telemetry"])))) &&
                  ((f.rqnl = d), (k = k || e));
                k && $f(a);
                b();
              },
              La: function (c, b) {
                hj(a, c);
                b();
              }
            };
          };
        })()
      );
      wa.r = ql;
      wa["6"] = [ud];
      wa.t = La;
      wa["4"] = [Qg];
      wa.W = [Qg];
      var Jd = [dg, ud, xc()];
      Jd.push(aj);
      Jd.push(Pg);
      Jd.push($i);
      Jd.push(qe());
      wa.n = Jd;
      wa.d = [xc(["hid", "u", "v", "vf"])];
      wa.m = [xc(["u", "v", "vf"]), qe()];
      wa.pi = [];
      La.unshift(function (a, c, b) {
        return {
          ca: function (d, e) {
            var f = d.J,
              g = d.G;
            if (!f || !g) return e();
            !nl[b.id] &&
              f.o("pv") &&
              b.exp &&
              !g.nohit &&
              ((g.exp = b.exp), (nl[b.id] = !0));
            f = g["page-ref"];
            var h = g["page-url"];
            f && h !== f ? (g["page-ref"] = Yi(a, f)) : delete g["page-ref"];
            g["page-url"] = Yi(a, h).slice(0, na.Ug);
            return e();
          }
        };
      });
      wa["5"] = V(u($b([dg, ud]), yb), La);
      wa.h = La.concat(function (a) {
        return {
          ca: function (c, b) {
            var d = c.J,
              e = Ka(a).o("afr");
            e && d && (d.C("afr", e), uc(c, "afr", Qb(e)));
            b();
          }
        };
      });
      var Ue,
        Rg = F(K.reject, K, ab()),
        qa = ((Ue = {}), (Ue.h = Ya), (Ue.er = v(Rg, M)), Ue);
      qa["7"] = v(Rg, M);
      qa.a = Ya;
      qa["4"] = re;
      qa.f = Ya;
      qa.n = Ya;
      qa["6"] = function (a, c, b) {
        var d = Mb(a, c);
        return function (e) {
          return fg(a, b, e, !0).then(
            C([e, ["https://mc.yandex.md/cc"], { md: !0, Lg: !1 }], d)
          );
        };
      };
      qa["1"] = Ya;
      qa.n = Ya;
      qa.c = Mb;
      qa.g = Ya;
      qa.e = Ya;
      qa["2"] = Ya;
      qa.r = function (a, c, b) {
        var d = re(a, c, b),
          e = Ya(a, c, b);
        return function (f, g, h) {
          return "webvisor" === h ? d(f, g, f.G["wv-part"]) : e(f, g);
        };
      };
      qa.adb = se;
      qa.pi = Mb;
      qa.m = function (a, c, b) {
        return function (d, e) {
          var f,
            g = d.G;
          g = ((f = {}), (f["page-url"] = (g && g["page-url"]) || ""), f);
          f = z(d, { G: z(d.G || {}, g) });
          return se(a, c, b)(f, "clmap/" + e.id)["catch"](E(a, "c.m"));
        };
      };
      qa.d = Ya;
      qa.t = Ya;
      qa.W = re;
      qa["5"] = Ya;
      var ua = D(
          "g.sen",
          function (a, c, b) {
            var d = Od(a, c);
            b = vp(a, c, b);
            var e = qa[c],
              f = e ? e(a, d, b) : Ya(a, d, b);
            return function () {
              var g = Aa(arguments),
                h = g.slice(1);
              g = z(g[0], { va: [c] });
              return f.apply(void 0, va([g], h));
            };
          },
          Rg
        ),
        Ws = D("dc.init", function (a, c) {
          var b = S(a),
            d = Id(a, c),
            e = ac(a),
            f = zf(a),
            g = f.Di;
          f = f.ti;
          g && !f && e.C("debug", "1", void 0, b.host);
          return Gf(a) || (!g && !f) ? { log: A, warn: A, error: A } : d;
        }),
        ke = w(Ws, Ab),
        Xs = E(window, "h.p", function (a, c) {
          var b,
            d,
            e = ua(a, "h", c),
            f = c.wc || "" + S(a).href,
            g = c.Rh || a.document.referrer,
            h = {
              J: Ca(((b = {}), (b.pv = 1), b)),
              G: ((d = {}), (d["page-url"] = f), (d["page-ref"] = g), d)
            };
          h.T = c.T;
          h.ld = c.ld;
          c.hc && h.G && (h.G.nohit = "1");
          return e(h, c)
            .then(function (k) {
              k &&
                (c.hc ||
                  Eb(
                    a,
                    c,
                    "PageView. Counter " +
                      c.id +
                      ". URL: " +
                      f +
                      ". Referrer: " +
                      g,
                    c.T
                  )(),
                Gb(a, C([a, c, k], Xp)));
            })
            ["catch"](E(a, "h.g.s"));
        }),
        pd = w(Cc, N),
        Ys = D("p.ar", function (a, c) {
          var b = ua(a, "a", c);
          return function (d, e, f, g, h, k) {
            var l,
              m,
              q = { G: {}, J: Ca(((l = {}), (l.pv = 1), (l.ar = 1), l)) };
            if (d)
              return (
                (e = rb(e)
                  ? {
                      title: e.title,
                      bg: e.referer,
                      T: e.params,
                      Wa: e.callback,
                      l: e.ctx
                    }
                  : { title: e, bg: f, T: g, Wa: h, l: k }),
                (f = pd(c)),
                f.url !== d && ((f.ref = f.url), (f.url = d)),
                (d = d || S(a).href),
                (f = e.bg || f.ref || a.document.referrer),
                (g = Eb(
                  a,
                  c,
                  "PageView. Counter " +
                    c.id +
                    ". URL: " +
                    d +
                    ". Referrer: " +
                    f,
                  e.T
                )),
                (q = b(
                  z(q, {
                    T: e.T,
                    title: e.title,
                    G: z(
                      q.G,
                      ((m = {}), (m["page-url"] = d), (m["page-ref"] = f), m)
                    )
                  }),
                  c
                ).then(g)),
                Pc(a, "p.ar.s", q, e.Wa || A, e.l)
              );
          };
        }),
        Ve = fa(function (a, c) {
          return up(a, c);
        }),
        Zs = D("c.c.cc", function (a) {
          var c = O(a),
            b = u(Ve(a), function (d) {
              var e;
              return z(
                {},
                d,
                ((e = {}),
                (e.oldCode = !!a.ya_cid),
                (e.clickmap = !!d.clickmap),
                e)
              );
            });
          return E(a, "g.c.cc", u(F(c.o, c, "counters", {}), aa, cb(b)));
        }),
        $s = D("gt.c.rs", function (a, c) {
          var b,
            d = N(c),
            e = c.id,
            f = c.$,
            g = c.rh,
            h = c.Va,
            k = c.Oe,
            l = C([a, d], tp);
          Ti(
            a,
            d,
            ((b = {}),
            (b.id = e),
            (b.type = +f),
            (b.clickmap = g),
            (b.webvisor = !!h),
            (b.trackHash = !!k),
            b)
          );
          return l;
        }),
        xk,
        at = D("th.e", function (a, c) {
          function b() {
            f ||
              (h = nd(a, "onhashchange")
                ? ha(a).D(a, ["hashchange"], g)
                : ur(a, g));
          }
          var d = ua(a, "t", c),
            e = je(a, N(c)),
            f = !1,
            g = E(a, "h.h.ch", F(vr, null, a, c, d)),
            h = A;
          c.Oe && (b(), (f = !0));
          return {
            Lj: E(a, "tr.hs.h", function (k) {
              var l;
              k ? b() : h();
              f = !!k;
              e(((l = {}), (l.trackHash = f), l));
            }),
            unsubscribe: h
          };
        }),
        rl = {
          1882689622: 1,
          2318205080: 1,
          3115871109: 1,
          3604875100: 1,
          339366994: 1,
          2890452365: 1,
          849340123: 1,
          173872646: 1,
          2343947156: 1,
          655012937: 1,
          3724710748: 1,
          3364370932: 1,
          1996539654: 1,
          2065498185: 1,
          823651274: 1,
          12282461: 1,
          1555719328: 1,
          1417229093: 1,
          138396985: 1
        },
        bt = w(function () {
          return J(
            function (a, c) {
              var b = wc(c + "/tag.js");
              rl[b] || (a[b] = 1);
              return a;
            },
            {},
            [
              "mc.yandex.ru",
              "mc.yandex.com",
              "cdn.jsdelivr.net/npm/yandex-metrica-watch"
            ]
          );
        }),
        yk = 1,
        Fg = {},
        Ke = {},
        dt = D("nb.p", function (a, c) {
          function b(Y) {
            m() ||
              ((Y = "number" === typeof Y ? Y : g),
              (Y = xr(a, d(!1), Y)),
              (x = Y.id),
              (R = Y.hf),
              q());
          }
          function d(Y) {
            return function (ta) {
              var Lb, pb, Wb;
              void 0 === ta &&
                (ta = ((Lb = {}), (Lb.ctx = {}), (Lb.callback = A), Lb));
              if (Y || (!t && !l.Ud)) {
                t = !0;
                q();
                x && wr(a, x);
                var Xc = p(Z);
                Lb = (Ba(l.o("lastHit")) || 0) < Xc - 18e5;
                var Sg = 0.1 > Math.random();
                l.C("lastHit", Xc);
                Xc = Ca(
                  ((pb = {}), (pb.nb = "1"), (pb.cl = L), (pb.ar = "1"), pb)
                );
                pb = pd(c);
                pb = {
                  G: ((Wb = {}), (Wb["page-url"] = pb.url || S(a).href), Wb),
                  J: Xc
                };
                uc(pb, "nbe", f ? 1 : 0);
                Wb = Id(a, N(c)).warn;
                !ta.callback && ta.ctx && Wb('"callback" argument missing');
                if (Y || Lb || Sg || !qq(a.location.href, a.document.referrer))
                  return (
                    (Wb = k(pb, c).then(function () {
                      if (!Y) {
                        var jc = 0.002,
                          kc = c.id === na.Vg ? 1 : 0.002,
                          Yc,
                          We,
                          Tg,
                          Xe,
                          Ug;
                        void 0 === jc && (jc = 1);
                        void 0 === kc && (kc = 1);
                        var Kd = a.performance;
                        if (
                          Kd &&
                          T(Kd.getEntriesByType) &&
                          ((jc = Math.random() > jc),
                          (kc = Math.random() > kc),
                          !jc || !kc)
                        ) {
                          Kd = a.performance.getEntriesByType("resource");
                          for (
                            var Ye = {}, Vg = {}, Ze = {}, ct = bt(a), Wg = 0;
                            Wg < Kd.length;
                            Wg += 1
                          ) {
                            var Cb = Kd[Wg],
                              $e = Cb.name
                                .replace(/^https?:\/\//, "")
                                .split("?")[0],
                              sl = wc($e),
                              tl =
                                ((Yc = {}),
                                (Yc.dns = Math.round(
                                  Cb.domainLookupEnd - Cb.domainLookupStart
                                )),
                                (Yc.tcp = Math.round(
                                  Cb.connectEnd - Cb.connectStart
                                )),
                                (Yc.duration = Math.round(Cb.duration)),
                                (Yc.response = Math.round(
                                  Cb.responseEnd - Cb.requestStart
                                )),
                                Yc);
                            "script" !== Cb.initiatorType ||
                              jc ||
                              (Vg[$e] = z(
                                tl,
                                ((We = {}),
                                (We.name = Cb.name),
                                (We.decodedBodySize = Cb.decodedBodySize),
                                We)
                              ));
                            (!rl[sl] && !ct[sl]) ||
                              Ye[$e] ||
                              kc ||
                              (Ye[$e] = z(
                                tl,
                                ((Tg = {}), (Tg.pages = a.location.href), Tg)
                              ));
                          }
                          aa(Ye).length && (Ze.timings8 = Ye);
                          aa(Vg).length && (Ze.scripts = Vg);
                          if (aa(Ze).length)
                            ua(
                              a,
                              "d",
                              c
                            )(
                              {
                                J: Ca(
                                  ((Xe = {}), (Xe.ar = "1"), (Xe.pv = "1"), Xe)
                                ),
                                ba: fb(a, Ze) || void 0,
                                G:
                                  ((Ug = {}),
                                  (Ug["page-url"] =
                                    a.location && "" + a.location.href),
                                  Ug)
                              },
                              { id: na.Xg, $: "0" }
                            )["catch"](E(a, "r.tim.ng2"));
                        }
                      }
                    })),
                    Pc(a, "l.o.l", Wb, ta.callback, ta.ctx)
                  );
              }
              return null;
            };
          }
          var e,
            f = !1,
            g = 15e3,
            h = Pd(a, c);
          (f = 5 > Ba(h.substr(h.length - 1) || "0")) && (g = 1e4);
          var k = ua(a, "n", c);
          h = N(c);
          var l = Hd(a, c.id),
            m = v(v(h, Ve(a)), u(Oa, U("accurateTrackBounce"))),
            q = v(((e = {}), (e.accurateTrackBounce = !0), e), je(a, h)),
            p = da(a),
            r = p(Z),
            t = !1,
            x = 0,
            L = 0,
            R;
          ra(a, c, function (Y) {
            L = Y.Lh - r;
          });
          c.Zb && b(c.Zb);
          return { Ui: d(!0), Zb: b, Cd: R };
        }),
        Xg = [
          "yandex_metrika_callback" + wd.callbackPostfix,
          "yandex_metrika_callbacks" + wd.callbackPostfix
        ],
        et = D("cb.i", function (a) {
          var c = Xg[0],
            b = Xg[1];
          if (T(a[c])) a[c]();
          "object" === typeof a[b] &&
            B(function (d, e) {
              a[b][e] = null;
              Rf(a, d);
            }, a[b]);
          B(function (d) {
            try {
              delete a[d];
            } catch (e) {
              a[d] = void 0;
            }
          }, Xg);
        }),
        ul = { Dm: Sa(/[/&=?#]/) },
        Wd = D("go.in", function (a, c, b, d) {
          void 0 === b && (b = "goal");
          return function (e, f, g, h) {
            var k, l;
            if (!e || (ul[b] && ul[b](e))) return null;
            var m = f,
              q = g || A;
            T(f) && ((q = f), (m = void 0), (h = g));
            var p = Eb(
                a,
                c,
                "Reach goal. Counter: " + c.id + ". Goal id: " + e,
                m
              ),
              r = "goal" === b;
            f = ua(a, "g", c);
            g = sp(a, c, e, b);
            e = g[0];
            g = g[1];
            m = f(
              {
                T: m,
                J: Ca(((k = {}), (k.ar = 1), k)),
                G: ((l = {}), (l["page-url"] = e), (l["page-ref"] = g), l)
              },
              c
            ).then(function () {
              r && p();
              d && d();
            });
            return Pc(a, "g.s", m, q, h);
          };
        }),
        ft = fa(function (a, c) {
          Fa(c) ? a.push(c) : B(u(M, ia("push", a)), c);
        }),
        gt = D("cl.p", function (a, c) {
          function b(m, q, p, r) {
            void 0 === r && (r = {});
            p
              ? ie(a, c, {
                  url: p,
                  Gb: !0,
                  Ic: m,
                  Nc: q,
                  sender: d,
                  l: r.ctx,
                  Wa: r.callback,
                  title: r.title,
                  T: r.params
                })
              : f.warn("Empty link");
          }
          var d = ua(a, "2", c),
            e = [],
            f = Id(a, N(c)),
            g = N(c),
            h = E(a, "s.s.tr", v(je(a, g), rp));
          g = {
            l: a,
            Za: c,
            Jh: e,
            sender: d,
            globalStorage: O(a),
            uh: Hd(a, c.id),
            xi: mc(a),
            Mj: v(v(g, Ve(a)), u(Oa, U("trackLinks")))
          };
          g = E(a, "cl.p.c", v(g, op));
          g = ha(a).D(a, ["click"], g);
          c.hd && h(c.hd);
          var k = E(a, "file.clc", C([!0, !1], b)),
            l = E(a, "e.l.l.clc", C([!1, !0], b));
          e = E(a, "add.f.e.clc", ft(e));
          return { file: k, Fh: l, ah: e, hd: h, Cd: g };
        }),
        vl = w(u(U("performance.memory.jsHeapSizeLimit"), ia("concat", ""))),
        Oi =
          "video/ogg video/mp4 video/webm audio/x-aiff audio/x-m4a audio/mpeg audio/aac audio/wav audio/ogg audio/mp4".split(
            " "
          ),
        mp = "theora vorbis 1 avc1.4D401E mp4a.40.2 vp8.0 mp4a.40.5".split(" "),
        af,
        lp = ((af = {}), (af.maybe = 2), (af.probably = 1), af),
        jp =
          "prefers-reduced-motion;prefers-reduced-transparency;prefers-color-scheme: dark;prefers-color-scheme: light;pointer: none;pointer: coarse;pointer: fine;any-pointer: none;any-pointer: coarse;any-pointer: fine;scan: interlace;scan: progressive;color-gamut: srgb;color-gamut: p3;color-gamut: rec2020;update: fast;update: slow;update: none;grid: 0;grid: 2;hover: hover;inverted-colors: inverted;inverted-colors: none".split(
            ";"
          ),
        hp = ["availWidth", "availHeight", "availTop"],
        ht = ["webgl", "experimental-webgl"],
        gp = [-0.2, -0.9, 0, 0.4, -0.26, 0, 0, 0.732134444, 0],
        Pf = v(ab("ccf"), kb),
        ep = ["webgl", "experimental-webgl"],
        it = u(Mi, xa),
        Zo =
          "appName vendor deviceMemory hardwareConcurrency maxTouchPoints appVersion productSub appCodeName vendorSub".split(
            " "
          ),
        jt = D(
          "afr",
          ib("afr", function (a, c) {
            if (ya(a, c)) {
              var b = Ka(a),
                d = b.o("afr:i", "-1"),
                e = b.o("afr:v");
              d = parseInt(d, 10) + 1;
              if ("2" !== e || 4 > d) {
                e = C([34, 2, "_"], cg);
                var f = C([20, 3, "_"], cg);
                f = y(
                  function (k) {
                    return D("afr." + k[0], k[1]);
                  },
                  [
                    ["m", u(ip, f)],
                    ["j", vl],
                    ["v", u(kp, f)],
                    ["s", Ni],
                    ["t", Qi],
                    ["p", it]
                  ]
                );
                f = ub(f, la(a));
                var g = [
                    xb(
                      a,
                      f,
                      20
                    )(
                      bc(function (k) {
                        return k.join("-");
                      })
                    ),
                    la(function (k, l) {
                      return l(Li(a));
                    })(Wc(v(a, vk))),
                    cp(a)(Wc(v(a, vk))),
                    np(a)(bc(e))
                  ],
                  h = function (k) {
                    var l = g[k];
                    Gb(a, function () {
                      l(
                        Ta(E(a, "afr.i." + k), function (m) {
                          var q = b.o("afr", "");
                          b.C("afr:v", "2")
                            .C("afr", q ? m + "-" + q : m)
                            .C("afr:i", k);
                          4 > k + 1 && W(a, v(k + 1, h), 1e4);
                        })
                      );
                    });
                  };
                h(d);
              }
            }
          })
        ),
        Uo = fa(tc)("(ym-disable-clickmap|ym-clickmap-ignore)"),
        kt = D("clm.p", function (a, c) {
          if (sd(a)) return A;
          var b = ua(a, "m", c),
            d = N(c),
            e = da(a),
            f = e(Z),
            g = v(v(d, Ve(a)), u(Oa, U("clickmap"))),
            h,
            k = null;
          d = E(a, "clm.p.c", function (l) {
            var m = g();
            if (m) {
              var q = O(a),
                p = q.o("cls", { dc: 0, x: 0, y: 0 });
              q.C("cls", {
                dc: p.dc + 1,
                x: p.x + l.clientX,
                y: p.y + l.clientY
              });
              q = "object" === typeof m ? m : {};
              p = q.filter;
              m = q.isTrackHash || !1;
              var r = y(function (x) {
                return ("" + x).toUpperCase();
              }, q.ignoreTags || []);
              X(h) && (h = q.quota || null);
              var t = !!q.quota;
              l = {
                element: Vo(a, l),
                position: Ki(a, l),
                button: Wo(l),
                time: e(Z)
              };
              q = S(a).href;
              if (To(a, l, k, r, p)) {
                if (t) {
                  if (!h) return;
                  --h;
                }
                r = De(a, l.element);
                p = r[0];
                r = r[1];
                t = sg(a, l.element);
                p = [
                  "rn",
                  Pa(a),
                  "x",
                  Math.floor((65535 * (l.position.x - t.left)) / (p || 1)),
                  "y",
                  Math.floor((65535 * (l.position.y - t.top)) / (r || 1)),
                  "t",
                  Math.floor((l.time - f) / 100),
                  "p",
                  rg(a, l.element),
                  "X",
                  l.position.x,
                  "Y",
                  l.position.y
                ];
                p = H(":", p);
                m && (p += ":wh:1");
                So(a, q, p, b, c);
                k = l;
              }
            }
          });
          return ha(a).D(n(a, "document"), ["click"], d);
        }),
        lt = w(
          function (a) {
            var c = O(a),
              b = c.o("isEU");
            if (X(b)) {
              var d = Ba(ge(a, "is_gdpr") || "");
              if (G(d, [0, 1])) c.C("isEU", d), (b = !!d);
              else if (((a = Ka(a).o("wasSynced")), (a = n(a, "params.eu"))))
                c.C("isEU", a), (b = !!a);
            }
            return b;
          },
          function (a) {
            return O(a).o("isEU");
          }
        ),
        Xd = D("i.e", lt),
        mt = (function () {
          function a(c, b) {
            this.l = c;
            this.Vh = b;
          }
          a.prototype.Aa = function (c) {
            return Jc(oc(F(this.Ga, this), c));
          };
          a.prototype.Ga = function (c, b) {
            var d = this,
              e = [],
              f = this.Vh(this.l, b && b.type, c.type);
            f &&
              (e = oc(function (g) {
                return g({ l: d.l, ja: c }) || [];
              }, f));
            return e;
          };
          a.prototype.Na = function (c) {
            return c.length;
          };
          a.prototype.ed = function (c) {
            return [c];
          };
          a.prototype.isEnabled = function () {
            return !0;
          };
          return a;
        })(),
        wl = (function () {
          function a(c, b, d) {
            this.gf = 0;
            this.pe = 1;
            this.nd = 5e3;
            this.l = c;
            this.ta = b;
            this.Fe = d;
          }
          a.prototype.dd = function () {
            this.gf = W(
              this.l,
              u(F(this.flush, this), F(this.dd, this)),
              this.nd,
              "b.f"
            );
          };
          a.prototype.send = function (c, b) {
            var d = this.Fe(c, b || [], this.pe);
            this.pe += 1;
            return d;
          };
          a.prototype.push = function () {};
          a.prototype.flush = function () {};
          return a;
        })(),
        Ao = (function (a) {
          function c(b, d, e) {
            b = a.call(this, b, d, e) || this;
            b.buffer = [];
            b.Rg = 7500;
            b.nd = 3e4;
            b.dd();
            return b;
          }
          Ia(c, a);
          c.prototype.push = function (b, d) {
            var e = this.ta.Ga(b, d);
            Ra(this.buffer, e);
            this.ta.Na(this.buffer) > this.Rg && this.flush();
          };
          c.prototype.flush = function () {
            var b = this.buffer;
            b.length && (this.send(b), (this.buffer = []));
          };
          return c;
        })(wl),
        Ua = "metrikaId_" + Math.random(),
        sc = { xd: 0 },
        xl =
          "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal phone address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password email birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state contact.*".split(
            " "
          ),
        Io = ["email", "tel"],
        Qo = /ym-hide-content/,
        Ro = /ym-show-content/,
        No = /^[\w\u0410-\u042f\u0430-\u044f]$/,
        Oo = [65, 90],
        Po = [97, 122],
        Lo =
          "color radio checkbox date datetime-local email month number password range search tel text time url week".split(
            " "
          ),
        Jo = new RegExp("(" + H("|", xl) + ")", "i"),
        zk = ["password", "passwd", "pswd"],
        Ko = new RegExp(
          "(" +
            H(
              "|",
              xl.concat(
                "\u0438\u043c\u044f \u0444\u0430\u043c\u0438\u043b\u0438\u044f \u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e \u0438\u043d\u0434\u0435\u043a\u0441 \u0442\u0435\u043b\u0435\u0444\u043e\u043d \u0430\u0434\u0440\u0435\u0441 \u043f\u0430\u0441\u043f\u043e\u0440\u0442 \u043d\u043e\u043c\u0435\u0440(-|\\.|_|\\s){0,2}\u043a\u0430\u0440\u0442\u044b \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f(-|\\.|_|\\s){0,2}\u043f\u043e\u0447\u0442\u0430 \u0434\u0430\u0442\u0430(-|\\.|_|\\s){0,2}\u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f \u0434\u043e\u043c \u0443\u043b\u0438\u0446\u0430 \u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430 \u0433\u043e\u0440\u043e\u0434 \u043e\u0431\u043b\u0430\u0441\u0442\u044c".split(
                  " "
                )
              )
            ) +
            ")",
          "i"
        ),
        Br = w(function () {
          var a;
          return (
            (a = {}),
            (a.A = 1),
            (a.ABBR = 2),
            (a.ACRONYM = 3),
            (a.ADDRESS = 4),
            (a.APPLET = 5),
            (a.AREA = 6),
            (a.B = 7),
            (a.BASE = 8),
            (a.BASEFONT = 9),
            (a.BDO = 10),
            (a.BIG = 11),
            (a.BLOCKQUOTE = 12),
            (a.BODY = 13),
            (a.BR = 14),
            (a.BUTTON = 15),
            (a.CAPTION = 16),
            (a.CENTER = 17),
            (a.CITE = 18),
            (a.CODE = 19),
            (a.COL = 20),
            (a.COLGROUP = 21),
            (a.DD = 22),
            (a.DEL = 23),
            (a.DFN = 24),
            (a.DIR = 25),
            (a.DIV = 26),
            (a.DL = 27),
            (a.DT = 28),
            (a.EM = 29),
            (a.FIELDSET = 30),
            (a.FONT = 31),
            (a.FORM = 32),
            (a.FRAME = 33),
            (a.FRAMESET = 34),
            (a.H1 = 35),
            (a.H2 = 36),
            (a.H3 = 37),
            (a.H4 = 38),
            (a.H5 = 39),
            (a.H6 = 40),
            (a.HEAD = 41),
            (a.HR = 42),
            (a.HTML = 43),
            (a.I = 44),
            (a.IFRAME = 45),
            (a.IMG = 46),
            (a.INPUT = 47),
            (a.INS = 48),
            (a.ISINDEX = 49),
            (a.KBD = 50),
            (a.LABEL = 51),
            (a.LEGEND = 52),
            (a.LI = 53),
            (a.LINK = 54),
            (a.MAP = 55),
            (a.MENU = 56),
            (a.META = 57),
            (a.NOFRAMES = 58),
            (a.NOSCRIPT = 59),
            (a.OBJECT = 60),
            (a.OL = 61),
            (a.OPTGROUP = 62),
            (a.OPTION = 63),
            (a.P = 64),
            (a.PARAM = 65),
            (a.PRE = 66),
            (a.Q = 67),
            (a.S = 68),
            (a.SAMP = 69),
            (a.SCRIPT = 70),
            (a.SELECT = 71),
            (a.SMALL = 72),
            (a.SPAN = 73),
            (a.STRIKE = 74),
            (a.STRONG = 75),
            (a.STYLE = 76),
            (a.SUB = 77),
            (a.SUP = 78),
            (a.TABLE = 79),
            (a.TBODY = 80),
            (a.TD = 81),
            (a.TEXTAREA = 82),
            (a.TFOOT = 83),
            (a.TH = 84),
            (a.THEAD = 85),
            (a.TITLE = 86),
            (a.TR = 87),
            (a.TT = 88),
            (a.U = 89),
            (a.UL = 90),
            (a.VAR = 91),
            (a.NOINDEX = 100),
            a
          );
        }),
        yr = [17, 18, 38, 32, 39, 15, 11, 7, 1],
        nt = (function () {
          var a =
            "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal phone address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password email birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state".split(
              " "
            );
          return {
            Bm: new RegExp("(" + H("|", a) + ")", "i"),
            Lm: new RegExp(
              "(" +
                H(
                  "|",
                  a.concat(
                    "\u0438\u043c\u044f;\u0444\u0430\u043c\u0438\u043b\u0438\u044f;\u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e;\u0438\u043d\u0434\u0435\u043a\u0441;\u0442\u0435\u043b\u0435\u0444\u043e\u043d;\u0430\u0434\u0440\u0435\u0441;\u043f\u0430\u0441\u043f\u043e\u0440\u0442;\u041d\u043e\u043c\u0435\u0440(-|\\.|_|\\s){0,2}\u043a\u0430\u0440\u0442\u044b;\u0434\u0430\u0442\u0430(-|\\.|_|\\s){0,2} \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f;\u0434\u043e\u043c;\u0443\u043b\u0438\u0446\u0430;\u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430;\u0433\u043e\u0440\u043e\u0434;\u043e\u0431\u043b\u0430\u0441\u0442\u044c".split(
                      ";"
                    )
                  )
                ) +
                ")",
              "i"
            ),
            zm: /ym-record-keys/i,
            Wi: "\u2022",
            Km: 88
          };
        })(),
        Ek = cb(v(nt.Wi, M)),
        ld = !0,
        Ig = "",
        Jg = !1,
        Kg = !0,
        Lg = !1,
        Go = fa(function (a, c) {
          var b = C([a, "efv." + c.event], E);
          c.N = y(u(M, b), c.N);
          return c;
        }),
        yl = w(function (a) {
          var c = [],
            b = [],
            d = [];
          a.document.attachEvent &&
            !a.opera &&
            (c.push(Jf), b.push(Fr), b.push(Gr));
          a.document.addEventListener ? c.push(Ck) : (b.push(Bk), d.push(Ck));
          c = va(
            [
              { target: a, type: "window", event: "beforeunload", N: [A] },
              { target: a, type: "window", event: "unload", N: [A] },
              { event: "click", N: [Le] },
              { event: "dblclick", N: [Le] },
              { event: "mousedown", N: [Le] },
              { event: "mouseup", N: [Ir] },
              { event: "keydown", N: [Jr] },
              { event: "keypress", N: [Kr] },
              { event: "copy", N: [Gk] },
              { event: "blur", N: c },
              { event: "focusin", N: b },
              { event: "focusout", N: d }
            ],
            !a.document.attachEvent || a.opera
              ? [
                  { target: a, type: "window", event: "focus", N: [Gi] },
                  { target: a, type: "window", event: "blur", N: [Jf] }
                ]
              : [],
            a.document.addEventListener
              ? [
                  { event: "focus", N: [Bk] },
                  { event: "change", N: [Dk] },
                  { event: "submit", N: [Ik] }
                ]
              : [
                  { type: "formInput", event: "change", N: [Dk] },
                  { type: "form", event: "submit", N: [Ik] }
                ]
          );
          return Fo(a, c);
        }),
        Do = w(function (a) {
          return va(
            Ac(a)
              ? [{ target: a, type: "document", event: "mouseleave", N: [Lr] }]
              : []
          );
        }),
        ot = ["submit", "beforeunload", "unload"],
        pt = w(function (a, c) {
          var b = c(a);
          return J(
            function (d, e) {
              d[e.type + ":" + e.event] = e.N;
              return d;
            },
            {},
            b
          );
        }),
        qt = v(yl, function (a, c, b, d) {
          return pt(c, a)[b + ":" + d] || [];
        }),
        Eo = /^\s*function submit\(\)/,
        Co = /opera mini/i,
        rt = D("fw.p", function (a, c) {
          if (c.jf || !c.Va) return K.resolve(A);
          var b = new mt(a, qt);
          return zo(a, c, b, yl, ot);
        }),
        st = D("pr.p", function (a, c) {
          var b, d;
          if (eg(a)) {
            var e = ua(a, "5", c),
              f = Ca(((b = {}), (b.pq = 1), (b.ar = 1), b));
            e(
              {
                J: f,
                G:
                  ((d = {}),
                  (d["page-url"] = S(a).href),
                  (d["page-ref"] = n(a, "document.referrer") || ""),
                  d)
              },
              c
            )["catch"](E(a, "pr.p.s"));
          }
        }),
        Wa = u(aa, U("0")),
        tt = D("c.m.p", function (a, c) {
          var b = N(c);
          return v(je(a, b), yo);
        }),
        ut = D("e.a.p", function (a, c) {
          var b = ya(a, c);
          b = C(
            [
              u(M, la(!0)),
              V(
                Boolean,
                y(v(b, n), ["clickmap", "trackLinks", "accurateTrackBounce"])
              )
            ],
            y
          );
          c.Ah && b();
          return b;
        }),
        vt = D("cc.i", function (a, c) {
          var b = C([a, c], xo);
          b = C([a, b, 300], W);
          ra(a, c, b);
        }),
        wt = D("s.f.i", function (a, c) {
          return ra(a, c, function (b) {
            if (
              n(b, "settings.button_goals") ||
              -1 !== S(a).href.indexOf("yagoalsbuttons=1")
            )
              ha(a).D(
                a,
                ["click"],
                E(a, "c.t.c", u(U("target"), C([a, c], Me(a, c, "", wo))))
              ),
                Eb(a, c, "Button goal. Counter " + c.id + ". Init.")();
          });
        }),
        zi,
        xt = D("p.ai", function (a, c) {
          return new K(function (b) {
            (qd(a) || Wf(a)) &&
              b(
                ra(a, c, function (d) {
                  var e;
                  return (d = n(d, "settings.sbp"))
                    ? yi(a, z({}, d, ((e = {}), (e.c = c.id), e)), 10)
                    : A;
                })
              );
            b(A);
          });
        }),
        zl = [],
        Yg = [],
        oo = [
          [
            ["'(-$&$&$'", 30102, 0],
            ["'(-$&$&$'", 29009, 0]
          ],
          [
            ["oWdZ[nc[jh_YW$Yec", 30103, 1],
            ["oWdZ[nc[jh_YW$Yec", 29010, 1]
          ]
        ],
        po = [
          [["oWdZ[nc[jh_YW$Yec", 30103, 1]],
          [["oWdZ[nc[jh_YW$Yec", 29010, 1]]
        ],
        xi = { G: { t: 'UV|L7,!"T[rwe&D_>ZIb\\aW#98Y.PC6k' } },
        vi = { id: 42822899, $: "0" },
        bf,
        vo = ((bf = {}), (bf.s = "p"), (bf["8"] = "i"), bf),
        so = ib("csp", function (a, c) {
          return ua(a, "s", c)({}, ["https://ymetrica1.com/watch/3/1"]);
        }),
        ho = {
          L: "stamp",
          M: "frameId",
          Z: "meta",
          af: "base",
          Ef: "hasBase",
          Ye: "address",
          Gg: "ua",
          te: "prev",
          Sf: "namespace",
          Lc: "keystrokes",
          Mf: "isMeta",
          Mc: "modifier",
          pb: "pageWidth",
          ob: "pageHeight",
          vg: "startNode",
          kf: "endNode",
          Mg: "zoomFrom",
          Og: "zoomTo",
          level: "level",
          duration: "duration",
          xa: "i",
          Pc: "o",
          n: "n",
          r: "r",
          lc: "ct",
          xb: "at",
          Tf: "nm",
          Uf: "ns",
          ne: "pa",
          qe: "pr",
          fe: "nx",
          Oa: "h",
          Da: "changes",
          Xe: "a",
          $e: "b",
          rd: "c",
          me: "op"
        },
        io = ["attributes", "attrs"],
        cf = (function () {
          function a(c) {
            this.l = c;
          }
          a.prototype.Aa = function (c) {
            var b = ee(c);
            c = y(F(this.Ga, this), b);
            return Jc(
              fb(
                this.l,
                y(function (d, e) {
                  var f;
                  return z({}, b[e], ((f = {}), (f.data = d), f));
                }, c)
              )
            );
          };
          a.prototype.Ga = function (c) {
            var b = c.data;
            "string" !== typeof b && (b = fb(this.l, ee(c.data)));
            return b;
          };
          a.prototype.Na = function (c) {
            return encodeURIComponent(c).length;
          };
          a.prototype.ed = function (c, b) {
            for (var d = Math.ceil(c.length / b), e = [], f = 0; f < b; f += 1)
              e.push(c.slice(f * d, d * (f + 1)));
            return e;
          };
          a.prototype.isEnabled = function () {
            return !!this.l.JSON;
          };
          return a;
        })(),
        fo = w(function (a) {
          function c(f, g, h, k) {
            d[0] = g;
            h[k] = e[3];
            h[k + 1] = e[2];
            h[k + 2] = e[1];
            h[k + 3] = e[0];
          }
          function b(f, g, h, k) {
            d[0] = g;
            h[k] = e[0];
            h[k + 1] = e[1];
            h[k + 2] = e[2];
            h[k + 3] = e[3];
          }
          if (
            "undefined" === typeof a.Float32Array ||
            "undefined" === typeof a.Uint8Array
          )
            return go;
          var d = new Float32Array([-0]),
            e = new Uint8Array(d.buffer);
          return 128 === e[3] ? b : c;
        }),
        ao = ti(!1),
        $n = ti(!0),
        yt = {
          Gj: "topics",
          lj: "publicationDate",
          ij: "pageUrlCanonical",
          Sj: "updateDate",
          gh: "authors",
          dh: "articleInfo",
          sj: "rubric",
          mj: "publishersHeader",
          hb: "involvedTime",
          hj: "pageTitle",
          Mi: "maxScrolled",
          cf: "chars",
          eh: "articleMeta"
        },
        zt = (function () {
          function a(c) {
            this.l = c;
            this.Hb = u(
              za,
              Oc(function (b, d) {
                b[d[1]] = d[0];
                return b;
              }, {})
            )(yt);
          }
          a.prototype.zg = function (c) {
            var b,
              d = this.se(c.data);
            return {
              L: da(this.l)(jg),
              data: ((b = {}), (b[this.Hb[c.type]] = d), b)
            };
          };
          a.prototype.se = function (c) {
            var b = this;
            return ca(c)
              ? y(F(this.se, this), c)
              : rb(c)
              ? u(
                  za,
                  Oc(function (d, e) {
                    var f = e[0];
                    d[b.Hb[f] || f] = b.se(e[1]);
                    return d;
                  }, {})
                )(c)
              : c;
          };
          a.prototype.Ga = function (c) {
            return ce(this.l, Df, this.zg(c))(xe(A));
          };
          a.prototype.Na = function (c) {
            return c[0];
          };
          a.prototype.ed = function (c) {
            return [c];
          };
          a.prototype.Aa = function (c) {
            var b = this;
            c = ce(this.l, mi, { buffer: y(F(this.zg, this), c) });
            return xb(
              this.l,
              c,
              20,
              we
            )(
              Wc(function (d) {
                d = Af(b.l, d.slice(-4));
                return xb(b.l, d, 20, we);
              })
            )(
              bc(function (d) {
                return d[d.length - 1];
              })
            );
          };
          a.prototype.isEnabled = function () {
            return li(this.l);
          };
          return a;
        })(),
        Zg,
        $g =
          ((Zg = (function (a) {
            function c(b, d, e, f) {
              void 0 === f && (f = 0);
              d = a.call(this, b, d, e) || this;
              d.Ne = 0;
              d.wb = 0;
              d.Me = 0;
              d.buffer = [];
              d.nd = 2e3;
              d.aa = cd(b);
              d.dd();
              d.Me = f;
              return d;
            }
            Ia(c, a);
            c.prototype.wf = function (b) {
              return V(Boolean, this.aa.V("ag", b));
            };
            c.prototype.uf = function (b, d) {
              var e = this;
              b(
                Ta(E(this.l, "wv2.b.st"), function (f) {
                  e.send(f, d);
                })
              );
            };
            c.prototype.zj = function (b, d) {
              var e = this;
              ja(this.l, this.gf);
              var f = Math.ceil(this.ta.Na(d) / 63e4),
                g = this.ta.ed(d, f);
              B(function (h, k) {
                var l,
                  m = z(
                    {},
                    b,
                    ((l = {}),
                    (l.data = h),
                    (l.partNum = k + 1),
                    (l.end = k + 1 === f),
                    l)
                  );
                l = e.ta.Aa([m], !1);
                e.uf(l, [m]);
              }, g);
              this.dd();
            };
            c.prototype.send = function (b, d) {
              var e = this;
              this.aa.V("se", d);
              return a.prototype.send.call(this, b, d).then(M, function () {
                e.aa.V("see", d);
              });
            };
            c.Jd = function (b, d, e, f, g) {
              c.pd["" + b + d] ||
                (this.pd[d] = new c(g, f, e, "m" === d ? 31457280 : 0));
              return this.pd[d];
            };
            c.prototype.Gi = function () {
              return this.Me && this.Ne >= this.Me;
            };
            c.prototype.push = function (b) {
              var d = this;
              if (!this.Gi()) {
                this.aa.V("p", b);
                var e = this.ta.Ga(b),
                  f = this.ta.Na(e);
                7e5 < f
                  ? this.zj(b, e)
                  : ((e = this.wf(this.buffer.concat([b]))),
                    (e = J(
                      function (g, h) {
                        return g + d.ta.Na(d.ta.Ga(h));
                      },
                      0,
                      e
                    )),
                    this.wb + e + f >= 7e5 * 0.7 && this.flush(),
                    this.buffer.push(b),
                    (this.wb += f));
              }
            };
            c.prototype.D = function (b, d) {
              this.aa.D([b], d);
            };
            c.prototype.ea = function (b, d) {
              this.aa.ea([b], d);
            };
            c.prototype.flush = function () {
              var b = this.buffer.concat(this.wf(this.buffer));
              if (b.length) {
                this.buffer = [];
                this.Ne += this.wb;
                this.wb = 0;
                var d = this.ta.Aa(b);
                this.uf(d, b);
              }
            };
            return c;
          })(wl)),
          (Zg.pd = {}),
          Zg),
        Ld,
        ah = ((Ld = {}), (Ld[1] = 500), (Ld[2] = 500), (Ld[3] = 0), Ld),
        bh = (function () {
          function a(c, b) {
            var d,
              e = this;
            this.id = "a";
            this.Td = !1;
            this.Cb = {};
            this.rb = {
              "schema.org":
                "Article NewsArticle Movie BlogPosting Review Recipe Answer".split(
                  " "
                ),
              Wf: ["article"]
            };
            this.Qe = ((d = {}), (d.Answer = 3), (d.Review = 2), d);
            this.sh = w(function (f, g) {
              tb(
                e.l,
                e.Xa,
                "Warning: content has only " +
                  g.chars +
                  " chars. Required " +
                  ah[g.type],
                g
              );
            });
            this.l = c;
            this.root = Zb(c);
            this.Xa = b;
          }
          a.prototype.Ea = function (c) {
            return c.element;
          };
          a.prototype.xf = function (c, b) {
            var d = this,
              e;
            E(this.l, "P.s." + b, function () {
              e = d.Cb[b].call(d, c);
            })();
            return e;
          };
          a.prototype.kj = function (c) {
            var b = z({}, c);
            this.Td &&
              !b.id &&
              G(c.type, [3, 2]) &&
              ((c = H(", ", y(U("name"), b.authors || []))),
              (b.pageTitle = c + ": " + b.pageTitle));
            b.pageTitle || (b.pageTitle = this.ji(b.fc));
            b.pageUrlCanonical ||
              ((c = b.id),
              (b.pageUrlCanonical = (
                "string" !== typeof c ? 0 : /^(https?:)\/\//.test(c)
              )
                ? b.id
                : this.gi()));
            b.id || (b.id = b.pageTitle || b.pageUrlCanonical);
            return b;
          };
          a.prototype.wa = function (c) {
            var b = this,
              d = {},
              e = this.Ea(c);
            if (!e) return null;
            d.type = c.type;
            B(function (g) {
              d[g] = b.xf(c, g);
            }, aa(this.Cb));
            var f = da(this.l);
            d.stamp = f(jg);
            d.element = c.element;
            d.fc = e;
            d = this.kj(d);
            d.id = d.id ? wc(d.id) : 1;
            d.update = function (g) {
              return b.Ea(c) ? b.xf(c, g) : void 0;
            };
            return d;
          };
          a.prototype.ji = function (c) {
            for (var b = 1; 5 >= b; b += 1) {
              var d = Za(Ic("h" + b, c));
              if (d) return d;
            }
          };
          a.prototype.gi = function () {
            var c = Ic('[rel="canonical"]', this.root);
            if (c) return c.href;
          };
          a.prototype.Cf = function () {
            return 1;
          };
          a.prototype.vc = function () {
            return [];
          };
          a.prototype.Kh = function () {
            var c = this,
              b = this.vc(),
              d = 1;
            return J(
              function (e, f) {
                var g = c.wa({ element: f, type: c.Cf(f) }) || [];
                ca(g) || (g = [g]);
                g = J(
                  function (h, k) {
                    var l = h.values,
                      m = h.Gf;
                    k && k.chars > ah[k.type] && !G(k.id, m)
                      ? (l.push(k), m.push(k.id))
                      : k && k.chars <= ah[k.type] && c.sh(k.id, k);
                    return { values: l, Gf: m };
                  },
                  { values: [], Gf: y(U("id"), e) },
                  g
                ).values;
                return e.concat(
                  y(function (h) {
                    var k;
                    h = z(
                      ((k = { index: d, qg: !1 }), (k.involvedTime = 0), k),
                      h
                    );
                    d += 1;
                    return h;
                  }, g)
                );
              },
              [],
              b
            );
          };
          return a;
        })(),
        Al = (function (a) {
          function c() {
            var b,
              d = (null !== a && a.apply(this, arguments)) || this;
            d.id = "j";
            d.Td = !0;
            d.ff = H(",", [
              'script[type="application/ld+json"]',
              'script[type="application/json+ld"]',
              'script[type="ld+json"]',
              'script[type="json+ld"]'
            ]);
            d.Cb =
              ((b = {}),
              (b.id = function (e) {
                var f = e.data["@id"];
                e = e.data.mainEntity || e.data.mainEntityOfPage;
                !f && e && (f = e["@id"]);
                return f;
              }),
              (b.chars = function (e) {
                return "string" === typeof e.data.text
                  ? e.data.text.length
                  : Tb(this.Ea(e)).length;
              }),
              (b.authors = function (e) {
                var f = [];
                f = f.concat(this.uc(e.data, "author"));
                f = f.concat(this.uc(e.data.mainEntity, "author"));
                return f.concat(this.uc(e.data.mainEntityOfPage, "author"));
              }),
              (b.pageTitle = function (e) {
                var f = e.data.headline || "";
                e.data.rm && (f += " " + e.data.alternativeHeadline);
                "" === f &&
                  (e.data.name
                    ? (f = e.data.name)
                    : e.data.itemReviewed && (f = e.data.itemReviewed));
                3 === e.type &&
                  e.data.parentItem &&
                  (f = e.data.parentItem.text);
                return f;
              }),
              (b.updateDate = function (e) {
                return e.data.dateModified || "";
              }),
              (b.publicationDate = function (e) {
                return e.data.datePublished || "";
              }),
              (b.pageUrlCanonical = function (e) {
                return e.data.url;
              }),
              (b.topics = function (e) {
                return this.uc(e.data, "about", ["name", "alternateName"]);
              }),
              (b.rubric = function (e) {
                var f = this,
                  g = this.Ea(e);
                e = V(
                  Boolean,
                  y(function (h) {
                    if ((h = Fb(f.l, Tb(h)))) {
                      var k = f.yf(h);
                      if (k)
                        return J(
                          function (l, m) {
                            return l
                              ? l
                              : "BreadcrumbList" === m["@type"]
                              ? m
                              : l;
                          },
                          null,
                          k
                        );
                      if ("BreadcrumbList" === h["@type"]) return h;
                    }
                    return null;
                  }, [e.element].concat(
                    jb(
                      this.ff,
                      document.body === g ? document.documentElement : g
                    )
                  ))
                );
                return e.length && ((e = e[0].itemListElement), ca(e))
                  ? V(
                      Boolean,
                      y(function (h) {
                        return h.item && !f.l.isNaN(h.position)
                          ? {
                              name: h.item.name || h.name,
                              position: h.position
                            }
                          : null;
                      }, e)
                    )
                  : [];
              }),
              b);
            return d;
          }
          Ia(c, a);
          c.prototype.uc = function (b, d, e) {
            void 0 === e && (e = ["name"]);
            if (!b || !b[d]) return [];
            b = ca(b[d]) ? b[d] : [b[d]];
            b = V(
              Boolean,
              y(function (f) {
                return f
                  ? "string" === typeof f
                    ? f
                    : J(
                        function (g, h) {
                          return g || f[h];
                        },
                        "",
                        e
                      )
                  : null;
              }, b)
            );
            return y(function (f) {
              var g;
              return (g = {}), (g.name = f), g;
            }, b);
          };
          c.prototype.Ea = function (b) {
            var d = b.element,
              e = b.data["@id"],
              f = b.data.url;
            b = null;
            f && "string" === typeof f && (b = this.qf(f));
            !b && e && "string" === typeof e && (b = this.qf(e));
            b ||
              ((b = e = d.parentNode),
              !Xb("head", this.l, d) && e && 0 !== Tb(e).length) ||
              (b = this.l.document.body);
            return b;
          };
          c.prototype.qf = function (b) {
            try {
              var d = Kc(this.l, b).hash;
              if (d) {
                var e = Ic(d, this.l.document.body);
                if (e) return e;
              }
            } catch (f) {}
            return null;
          };
          c.prototype.oe = function (b) {
            return this.Qe[b["@type"]] || 1;
          };
          c.prototype.wa = function (b) {
            var d = this,
              e = b.element;
            if (
              !b.data &&
              ((b.data = Fb(this.l, Tb(e))),
              !b.data ||
                (!/schema\.org/.test(b.data["@context"]) && !ca(b.data)))
            )
              return null;
            var f = this.yf(b.data);
            if (f)
              return y(function (h) {
                if (!G(h["@type"], d.rb["schema.org"])) return null;
                h = { element: e, data: h, type: d.oe(h) };
                return a.prototype.wa.call(d, h);
              }, f);
            if ("QAPage" === b.data["@type"]) {
              var g = b.data.mainEntity || b.data.mainEntityOfPage;
              if (!g) return null;
            }
            "Question" === b.data["@type"] && (g = b.data);
            return g
              ? ((b = oc(v(g, n), ["acceptedAnswer", "suggestedAnswer"])),
                y(function (h) {
                  var k;
                  if (!h || !G(h["@type"], d.rb["schema.org"])) return null;
                  h = {
                    element: e,
                    type: d.oe(h),
                    data: z(((k = {}), (k.parentItem = g), k), h)
                  };
                  return a.prototype.wa.call(d, h);
                }, b))
              : G(b.data["@type"], this.rb["schema.org"])
              ? a.prototype.wa.call(this, z(b, { type: this.oe(b.data) }))
              : null;
          };
          c.prototype.vc = function () {
            return jb(this.ff, this.root);
          };
          c.prototype.yf = function (b) {
            return (ca(b) && b) || (b && ca(b["@graph"]) && b["@graph"]);
          };
          return c;
        })(bh),
        ch = (function (a) {
          function c() {
            var b,
              d = (null !== a && a.apply(this, arguments)) || this;
            d.id = "s";
            d.Td = !0;
            d.Pj = ia(
              "exec",
              new RegExp("schema.org\\/(" + H("|", aa(d.Qe)) + ")$")
            );
            d.Cb =
              ((b = {}),
              (b.id = function (e) {
                e = e.element;
                var f = db(this.l, e, "identifier");
                return f
                  ? Za(f)
                  : (f = db(this.l, e, "mainEntityOfPage")) &&
                    f.getAttribute("itemid")
                  ? f.getAttribute("itemid")
                  : null;
              }),
              (b.chars = function (e) {
                var f = 0;
                e = e.element;
                for (
                  var g = [
                      "articleBody",
                      "reviewBody",
                      "recipeInstructions",
                      "description",
                      "text"
                    ],
                    h = 0;
                  h < g.length;
                  h += 1
                ) {
                  var k = db(this.l, e, g[h]);
                  if (k) {
                    f = Za(k).length;
                    break;
                  }
                }
                e = Tb(e);
                0 === f && e && (f += e.length);
                return f;
              }),
              (b.topics = function (e) {
                var f = this,
                  g = Ed(this.l, e.element, "about");
                return y(function (h) {
                  var k = { name: Za(h) };
                  if ((g = db(f.l, h, "name"))) k.name = Za(g);
                  return k;
                }, g);
              }),
              (b.rubric = function (e) {
                var f = this;
                (e = Ic(
                  '[itemtype$="schema.org/BreadcrumbList"]',
                  e.element
                )) ||
                  (e = Ic(
                    '[itemtype$="schema.org/BreadcrumbList"]',
                    this.root
                  ));
                return e
                  ? y(function (g) {
                      return {
                        name: Za(db(f.l, g, "name")),
                        position: Za(db(f.l, g, "position"))
                      };
                    }, Ed(this.l, e, "itemListElement"))
                  : [];
              }),
              (b.updateDate = function (e) {
                return (e = db(this.l, e.element, "dateModified")) ? Jk(e) : "";
              }),
              (b.publicationDate = function (e) {
                return (e = db(this.l, e.element, "datePublished"))
                  ? Jk(e)
                  : "";
              }),
              (b.pageUrlCanonical = function (e) {
                e = Ed(this.l, e.element, "url");
                if (e.length) {
                  var f = e[0];
                  return f.href ? f.href : Za(e);
                }
                return null;
              }),
              (b.pageTitle = function (e) {
                var f = "",
                  g = e.element,
                  h = db(this.l, g, "headline");
                h && (f += Za(h));
                (h = db(this.l, g, "alternativeHeadline")) &&
                  (f += " " + Za(h));
                "" === f &&
                  ((h = db(this.l, g, "name")) ||
                    (h = db(this.l, g, "itemReviewed")),
                  h && (f += Za(h)));
                3 === e.type &&
                  (e = Xb('[itemtype$="schema.org/Question"]', this.l, g)) &&
                  (e = db(this.l, e, "text")) &&
                  (f += Za(e));
                return f;
              }),
              (b.authors = function (e) {
                var f = this;
                e = Ed(this.l, e.element, "author");
                return y(function (g) {
                  var h,
                    k = ((h = {}), (h.name = ""), h);
                  /.+schema.org\/(Person|Organization)/.test(
                    g.getAttribute("itemtype") || ""
                  ) &&
                    (h = db(f.l, g, "name")) &&
                    (k.name = Za(h));
                  k.name ||
                    (k.name =
                      g.getAttribute("content") ||
                      Tb(g) ||
                      g.getAttribute("href"));
                  return k;
                }, e);
              }),
              b);
            return d;
          }
          Ia(c, a);
          c.prototype.Cf = function (b) {
            b = b.getAttribute("itemtype") || "";
            return (b = this.Pj(b)) ? this.Qe[b[1]] : 1;
          };
          c.prototype.wa = function (b) {
            return b.element && Tb(b.element).length
              ? a.prototype.wa.call(this, b)
              : null;
          };
          c.prototype.vc = function () {
            var b = H(
              ",",
              y(function (d) {
                return '[itemtype$="schema.org/' + d + '"]';
              }, this.rb["schema.org"])
            );
            return jb(b, this.root);
          };
          return c;
        })(bh),
        Bl = (function (a) {
          function c(b, d) {
            var e,
              f = a.call(this, b, d) || this;
            f.id = "o";
            f.Cb =
              ((e = {}),
              (e.chars = function (g) {
                g = this.Ea(g);
                return Tb(g).length;
              }),
              (e.authors = function (g) {
                return this.Id(g.data.author);
              }),
              (e.pageTitle = function (g) {
                return this.Bc(g.data.title) || "";
              }),
              (e.updateDate = function (g) {
                return this.Bc(g.data.modified_time);
              }),
              (e.publicationDate = function (g) {
                return this.Bc(g.data.published_time);
              }),
              (e.pageUrlCanonical = function (g) {
                return this.Bc(g.data.url);
              }),
              (e.rubric = function (g) {
                return this.Id(g.data.section);
              }),
              (e.topics = function (g) {
                return this.Id(g.data.tag);
              }),
              e);
            f.Bh = new RegExp("^(og:)?((" + H("|", f.rb.Wf) + "):)?");
            return f;
          }
          Ia(c, a);
          c.prototype.Id = function (b) {
            var d;
            return b
              ? ca(b)
                ? y(function (e) {
                    var f;
                    return (f = {}), (f.name = e), f;
                  }, b)
                : [((d = {}), (d.name = b), d)]
              : [];
          };
          c.prototype.Bc = function (b) {
            return ca(b) ? (b.length ? b[0] : null) : b;
          };
          c.prototype.vc = function () {
            var b = jb('meta[property="og:type"]', this.l.document.body);
            return [this.l.document.head].concat(b);
          };
          c.prototype.Xh = function (b) {
            var d = this,
              e = b.element,
              f = {},
              g = this.Ea(b);
            e = jb("meta[property]", e === this.l.document.head ? e : g);
            if (e.length)
              B(function (h) {
                try {
                  if (
                    h.parentNode === g ||
                    h.parentNode === d.l.document.head
                  ) {
                    var k = h.getAttribute("property").replace(d.Bh, ""),
                      l = Za(h);
                    f[k]
                      ? ca(f[k])
                        ? f[k].push(l)
                        : (f[k] = [f[k], l])
                      : (f[k] = l);
                  }
                } catch (m) {
                  fe(d.l, "og.ed", m);
                }
              }, e);
            else return null;
            return G(f.type, this.rb.Wf) ? z(b, { data: f }) : null;
          };
          c.prototype.Ea = function (b) {
            b = b.element;
            var d = this.l.document;
            return b === d.head ? d.body : b.parentNode;
          };
          c.prototype.wa = function (b) {
            return (b = this.Xh(b)) ? a.prototype.wa.call(this, b) : null;
          };
          return c;
        })(bh),
        Cl =
          "resize scroll mousemove mousedown click windowfocus keydown orientationchange change focus touchmove touchstart".split(
            " "
          ),
        At =
          "id pageTitle stamp chars authors updateDate publicationDate pageUrlCanonical topics rubric".split(
            " "
          ),
        Bt = (function () {
          function a(c, b, d, e) {
            this.Jc = !1;
            this.Z = {};
            this.scroll = { x: 0, y: 0 };
            this.hb = this.Qf = 0;
            this.de = this.Zf = "";
            this.fa = [];
            this.Ja = 0;
            this.ub = { Oa: 0, Te: 0 };
            this.Qg = At;
            this.buffer = d;
            this.Yb = F(this.Yb, this);
            this.xc = F(this.xc, this);
            this.Qc = F(this.Qc, this);
            this.l = c;
            this.Xa = e;
            this.ad = b;
            this.Yd = "pai" + b.id;
            this.Db();
            this.nf = ha(this.l);
            this.time = da(this.l);
            this.Hg();
            this.Cc = O(this.l);
          }
          a.prototype.start = function () {
            var c = this;
            if (!this.Jc) {
              this.buffer.D("ag", this.xc);
              this.buffer.D("se", this.Qc);
              this.Bj();
              var b = this.Cc.o(this.Yd, []),
                d = !b.length;
              b.push(F(this.Ii, this));
              this.Cc.Ha(this.Yd, b);
              d && this.hg();
              this.Cc.Ha("pai", function () {
                return c.fa.length
                  ? J(
                      function (e, f) {
                        return (e.Ce || 0) <= (f.Ce || 0) ? f : e;
                      },
                      c.fa[0],
                      c.fa.slice(1)
                    ).id
                  : 0;
              });
              this.Yb({ type: "page", target: this.l });
            }
          };
          a.prototype.stop = function () {
            this.buffer.ea("se", this.Qc);
            this.buffer.ea("ag", this.xc);
            this.Qj();
            this.Jc = !0;
          };
          a.prototype.Of = function (c) {
            return Xb("html", this.l, c) !== this.l.document.documentElement;
          };
          a.prototype.hg = function () {
            var c = this;
            E(this.l, "p.ic" + this.ad.id, function () {
              if (!c.Jc) {
                var b = c.Cc.o(c.Yd),
                  d = c.ad.Kh();
                B(function (e) {
                  var f = y(function (g) {
                    return z({}, g);
                  }, d);
                  T(e) && e(f);
                }, b);
                c.Ja = W(c.l, F(c.hg, c), 1e3, "p");
              }
            })();
          };
          a.prototype.Ii = function (c) {
            this.Jc || (this.Rj(c), this.Tj(), this.wj());
          };
          a.prototype.Yb = function (c) {
            var b = this;
            E(this.l, "p.ec." + this.ad.id, function () {
              try {
                var d = c.type;
                var e = c.target;
              } catch (l) {
                return;
              }
              var f = "page" === d;
              if ("scroll" === d || f) {
                var g = [
                  b.l,
                  b.l.document,
                  b.l.document.documentElement,
                  Ac(b.l)
                ];
                G(e, g) && b.Db();
              }
              ("resize" === d || f) && b.Hg();
              d = b.time(Z);
              var h = Math.min(d - b.Qf, 5e3);
              b.hb += Math.round(h);
              b.Qf = d;
              if (b.Z && b.scroll && b.ub) {
                var k = b.ub.Oa * b.ub.Te;
                b.fa = y(function (l) {
                  var m = z({}, l),
                    q = b.Z[m.id],
                    p = dd(l.fc);
                  if (!q || b.Of(m.element) || !p) return m;
                  l = b.l.Math;
                  q = l.max((b.scroll.y + b.ub.Oa - q.y) / q.height, 0);
                  var r = p.height * p.width;
                  p = b.kh(p);
                  m.Ce = p / k;
                  m.visibility = p / r;
                  if (0.9 <= m.visibility || 0.1 <= m.Ce) m.involvedTime += h;
                  m.maxScrolled = l.round(1e4 * q) / 1e4;
                  return m;
                }, b.fa);
              }
            })();
          };
          a.prototype.kh = function (c) {
            var b = c.top,
              d = c.bottom,
              e = c.left,
              f = this.ub,
              g = f.Te;
            f = f.Oa;
            var h = this.l.Math;
            c = h.min(h.max(c.right, 0), g) - h.min(h.max(e, 0), g);
            return (h.min(h.max(d, 0), f) - h.min(h.max(b, 0), f)) * c;
          };
          a.prototype.Rj = function (c) {
            var b = y(function (d) {
              return d.id;
            }, this.fa);
            this.fa = this.fa.concat(
              V(function (d) {
                return !G(d.id, b);
              }, c)
            );
          };
          a.prototype.Hg = function () {
            var c = tg(this.l) || yd(this.l);
            this.ub = { Te: c[0], Oa: c[1] };
          };
          a.prototype.Tj = function () {
            var c = this;
            E(this.l, "p.um." + this.ad.id, function () {
              var b = [];
              c.Db();
              c.Z = J(
                function (d, e) {
                  var f;
                  if (c.Of(e.element)) b.push(e), delete d[e.id];
                  else {
                    var g =
                      ((f = {}),
                      (f.id = e.id),
                      (f.involvedTime = Math.max(e.involvedTime, 0)),
                      (f.maxScrolled = e.maxScrolled || 0),
                      (f.chars = e.update ? e.update("chars") || 0 : 0),
                      f);
                    e.fc &&
                      (f = dd(e.fc)) &&
                      ((g.x = Math.max(Math.round(f.left) + c.scroll.x, 0)),
                      (g.y = Math.max(Math.round(f.top) + c.scroll.y, 0)),
                      (g.width = Math.round(f.width)),
                      (g.height = Math.round(f.height)));
                    d[e.id] = g;
                  }
                  return d;
                },
                {},
                c.fa
              );
              B(function (d) {
                d = Ne(c.l)(d, c.fa);
                c.fa.splice(d, 1);
              }, b);
            })();
          };
          a.prototype.Qc = function () {
            this.Zf = this.de;
          };
          a.prototype.xc = function () {
            var c,
              b,
              d = y(v(this.Z, n), aa(this.Z));
            return d.length && ((this.de = fb(this.l, d)), this.Zf !== this.de)
              ? ((c = {}),
                (c.type = "publishersHeader"),
                (c.data =
                  ((b = {}),
                  (b.articleMeta = d || []),
                  (b.involvedTime = this.hb),
                  b)),
                c)
              : null;
          };
          a.prototype.wj = function () {
            var c = this;
            if (this.fa.length) {
              var b = V(function (d) {
                return !d.qg;
              }, this.fa);
              B(function (d) {
                var e,
                  f = J(
                    function (g, h) {
                      d[h] && (g[h] = d[h]);
                      return g;
                    },
                    {},
                    c.Qg
                  );
                c.buffer.push(
                  ((e = {}),
                  (e.type = "articleInfo"),
                  (e.stamp = f.stamp),
                  (e.data = f),
                  e)
                );
                d.qg = !0;
              }, b);
              b.length &&
                tb(this.l, this.Xa, "Publisher content info found: ", b);
            }
          };
          a.prototype.Bj = function () {
            this.nf.D(this.l, Cl, this.Yb);
          };
          a.prototype.Qj = function () {
            this.nf.Wb(this.l, Cl, this.Yb);
          };
          a.prototype.Db = function () {
            this.scroll = {
              x:
                this.l.pageXOffset ||
                n(this.l, "document.documentElement.scrollLeft") ||
                0,
              y:
                this.l.pageYOffset ||
                n(this.l, "document.documentElement.scrollLeft") ||
                0
            };
          };
          return a;
        })(),
        Md = {};
      Al && (Md.json_ld = Al);
      ch && ((Md.schema = ch), (Md.microdata = ch));
      Bl && (Md.opengraph = Bl);
      var Ct = D("p.p", function (a, c) {
          function b(l, m, q) {
            return e(z({}, k, { ba: l, df: ki(m) }), c, q)["catch"](
              E(a, "s.ww.p")
            );
          }
          if (!Da("querySelectorAll", a.document.querySelectorAll))
            return K.resolve();
          var d = [new cf(a)];
          d.unshift(new zt(a));
          var e = ua(a, "p", c),
            f = bb(function (l) {
              return l.isEnabled();
            }, d);
          d = Ca();
          var g = Hd(a, c.id),
            h = g.o("pai");
          h && (g.pc("pai"), d.C("pai", h));
          var k = { G: {}, J: d, Kf: !(f instanceof cf) };
          return ra(
            a,
            c,
            E(a, "ps.s", function (l) {
              if ((l = n(l, "settings.publisher.schema"))) {
                l = lk(c) ? "microdata" : l;
                var m = Md[l];
                if (m && f) {
                  var q = N(c),
                    p = $g.Jd(q, "e", b, f, a);
                  m = new m(a, q);
                  new Bt(a, m, p, q).start();
                  tb(a, q, 'Publishers analytics schema "' + l + '"');
                }
              }
            })
          );
        }),
        Dt = D("p.fh", function (a, c) {
          var b, d;
          void 0 === c && (c = !0);
          var e = Ka(a),
            f = da(a),
            g = e.o("wasSynced"),
            h = { id: 3, $: "0" };
          return c && g && g.time + 864e5 > f(Z)
            ? K.resolve(g)
            : ua(
                a,
                "f",
                h
              )(
                {
                  J: Ca(((b = {}), (b.pv = 1), b)),
                  G:
                    ((d = {}),
                    (d["page-url"] = S(a).href),
                    (d["page-ref"] = a.document.referrer),
                    d)
                },
                h
              )
                .then(function (k) {
                  var l;
                  k =
                    ((l = {}),
                    (l.time = f(Z)),
                    (l.params = n(k, "settings")),
                    (l.bkParams = n(k, "userData")),
                    l);
                  e.C("wasSynced", k);
                  return k;
                })
                ["catch"](E(a, "f.h"));
        }),
        Et = ["ecommerce", "user_id", "fpp"],
        Ft = D("pa.int", function (a, c) {
          return function () {
            var b,
              d,
              e = Aa(arguments),
              f = ln(e);
            if (!f) return null;
            e = f.vh;
            var g = f.T;
            f = f.Wa;
            if (!rb(g) && !ca(g)) return null;
            var h = ua(a, "1", c),
              k = pd(c).url,
              l = n(g, "__ym.user_id"),
              m = aa(g),
              q = G("__ymu", m),
              p = G("__ym", m) && l;
            m = !Sf(c);
            var r = g;
            r.__ym &&
              ((r = z({}, g)),
              (r.__ym = J(
                function (t, x) {
                  var L = n(g, "__ym." + x);
                  L && (t[x] = L);
                  return t;
                },
                {},
                Et
              )),
              aa(r.__ym).length || delete r.__ym,
              (m = !!aa(r).length));
            l = Eb(
              a,
              c,
              p
                ? "Set user id " + l
                : (q ? "User p" : "P") + "arams. Counter " + c.id,
              p ? void 0 : JSON.stringify(r)
            );
            h = h(
              {
                T: g,
                J: Ca(((b = {}), (b.pa = 1), (b.ar = 1), b)),
                G: ((d = {}), (d["page-url"] = k || S(a).href), d)
              },
              c
            ).then(m ? l : A);
            return Pc(a, "p.s", h, f, e);
          };
        }),
        Gt = D("exps.int", function (a, c) {
          return function (b, d, e) {
            var f, g;
            void 0 === d && (d = A);
            if (b && 0 < b.length) {
              var h = ua(a, "e", c),
                k = pd(c).url;
              b = h(
                {
                  J: Ca(((f = {}), (f.ex = 1), (f.ar = 1), f)),
                  G:
                    ((g = {}), (g["page-url"] = k || S(a).href), (g.exp = b), g)
                },
                c
              );
              return Pc(a, "exps.s", b, d, e);
            }
          };
        }),
        Ht = D("y.p", function (a, c) {
          var b = xj(a, c);
          if (b) {
            var d = le(a),
              e = C([a, b, c], kn);
            fj(a, d, function (f) {
              f.D(["params"], e);
            });
            b.aa.D(["params"], u(U("1"), e));
          }
        }),
        It = ib("is", function (a) {
          var c = -1 < S(a).href.indexOf("_ym_debug=200500"),
            b = ac(a),
            d = b.o("debug_build") === na.Ma;
          if (c || d)
            return (
              b.C("debug_build", na.Ma),
              Nc(a, { src: "https://mc.yandex.ru/metrika/tag_debug.js" })
            );
        }),
        ii = w(Cc),
        Jt = u(ia("exec", /counterID=(\d+)/), U("1")),
        ji = fa(function (a, c) {
          var b = ii(a),
            d = sa(c),
            e = d[0],
            f = d[1];
          d = d.slice(2);
          if (f) {
            var g = "" + e;
            var h = { id: 1, $: "0" };
            var k = Jt(g);
            k
              ? (h.id = k)
              : -1 === g.indexOf(":")
              ? ((g = Ba(g)), (h.id = g))
              : ((g = g.split(":")),
                (k = g[1]),
                (h.id = Ba(g[0])),
                (h.$ = Eg(k) ? "1" : "0"));
            h = [ya(a, h), h];
            g = h[0];
            h = h[1];
            k = N(h);
            b[k] || (b[k] = {});
            b = b[k];
            if ("init" === f)
              if (g)
                tb(a, "" + e, "Duplicate counter " + e + " initialization");
              else {
                if (((e = "1" === h.$), (f = Sf(h)), e || f || !It(a)))
                  a["yaCounter" + h.id] = new a.Ya[na.ec](z({}, d[0], h));
              }
            else
              g && g[f] && b.zi
                ? g[f].apply(g, d)
                : ((h = b.ug),
                  h || ((h = []), (b.ug = h)),
                  h.push(va([e, f], d)));
          }
        }),
        df = D("dl.w", function (a, c, b) {
          var d = 0;
          ze(a, a[c], b) ||
            (d = W(
              a,
              function () {
                df(a, c, b);
              },
              1e3,
              "ec.dl"
            ));
          return function () {
            return ja(a, d);
          };
        }),
        Kt = D("p.e", function (a, c) {
          var b = ya(a, c);
          if (b) {
            var d = O(a);
            b = F(b.params, b);
            var e = E(a, "h.ee", C([a, N(c), b], en)),
              f,
              g = function (k) {
                f = k;
                k.ra.D(e);
              };
            if (c.qc) return d.C("ecs", 0), df(a, c.qc, g);
            var h = ra(a, c, function (k) {
              k = n(k, "settings.ecommerce");
              d.C("ecs", 1);
              return k ? df(a, k, g) : A;
            });
            return function () {
              h.then(function (k) {
                k();
                f && f.unsubscribe();
              });
            };
          }
        }),
        Lt = D("fid", function (a) {
          var c,
            b = A;
          if (!T(a.PerformanceObserver)) return b;
          var d = O(a);
          if (d.o("fido")) return b;
          d.C("fido", !0);
          var e = new a.PerformanceObserver(
            E(a, "fid", function (f) {
              f = f.getEntries()[0];
              d.C("fid", a.Math.round(100 * (f.processingStart - f.startTime)));
              b();
            })
          );
          b = function () {
            return e.disconnect();
          };
          try {
            e.observe(
              ((c = {}), (c.type = "first-input"), (c.buffered = !0), c)
            );
          } catch (f) {}
          return b;
        }),
        Mt = D("ecm.a", v("add", ae)),
        Nt = D("ecm.r", v("remove", ae)),
        Ot = D("ecm.d", v("detail", ae)),
        Pt = D("ecm.p", v("purchase", ae)),
        yh = v("form", Xb),
        Um = v("form", jb),
        di = w(function (a) {
          return H("[^\\d<>]*", a.split(""));
        }),
        Qm = w(function (a) {
          return new RegExp(di(a), "g");
        }),
        an = /\S/,
        Xh = v(
          [
            "style",
            "display:inline;margin:0;padding:0;font-size:inherit;color:inherit;line-height:inherit"
          ],
          nc
        ),
        Dl = w(function (a) {
          a = S(a);
          a = Xq(a.search.substring(1));
          a["_ym_status-check"] = a["_ym_status-check"] || "";
          a._ym_lang = a._ym_lang || "ru";
          return a;
        }),
        Th = u(Dl, U("_ym_status-check"), Ba),
        Qt = u(Dl, U("_ym_lang")),
        Sm = ["https://iframe-toloka.com/"],
        Sh = Sa(
          /^https:\/\/(yastatic\.net\/s3\/metrika|s3\.mds\.yandex\.net\/internal-metrika-betas|[\w-]+\.dev\.webvisor\.com|[\w-]+\.dev\.metrika\.yandex\.ru)\/(\w|-|\/|(\.)(?!\.))+\.js$/
        ),
        Wm = ["form", "button", "phone", "status"],
        Tm = w(
          function (a, c, b) {
            b.inline
              ? Mh(a, b)
              : b.resource &&
                Sh(b.resource) &&
                ((a._ym__postMessageEvent = c),
                (a._ym__inpageMode = b.inpageMode),
                (a._ym__initMessage = b.initMessage),
                Xm(a, b.resource));
          },
          function (a, c, b) {
            return b.id;
          }
        ),
        Rt = D("cs.init", function (a, c) {
          var b,
            d = Th(a);
          d &&
            c.id === d &&
            "0" === c.$ &&
            ((d =
              ((b = {}),
              (b.lang = Qt(a)),
              (b.fileId = "status"),
              (b.id = "" + c.id),
              b)),
            W(a, C([a, d], Mh), 0, "cs"));
        }),
        El = w(function (a) {
          return sd(a) || !Uc(a);
        }),
        Nm = w(Uh),
        Lh = w(Fb, Ab),
        St = D("phc.p", function (a, c) {
          return El(a)
            ? A
            : ra(a, c, function (b) {
                var d = c.id,
                  e = Lc(a, void 0, d),
                  f = e.o("phc_settings") || "";
                if ((b = n(b, "settings.phchange"))) {
                  var g = fb(a, b) || "";
                  g !== f && e.C("phc_settings", g);
                } else f && (b = Lh(a, f));
                e = n(b, "clientId");
                f = n(b, "orderId");
                b = n(b, "phones") || [];
                e &&
                  f &&
                  b.length &&
                  ((f = {
                    Ab: "",
                    Kb: "",
                    sg: 0,
                    ia: {},
                    sa: [],
                    Nf: !1,
                    bb: !0,
                    l: a,
                    ic: c
                  }),
                  z(f, { Nf: !0 }),
                  Kh(a, d, f),
                  (b = gd(a)),
                  (e = Vh(a, b, 1e3)),
                  (d = F(Kh, null, a, d, f)),
                  e.D(d),
                  Wh(a, b));
              });
        }),
        Tt = D("phc.h", function (a, c) {
          return br(a) || El(a)
            ? null
            : ra(a, c, function (b) {
                if (!n(b, "settings.phchange")) {
                  var d = Lc(a, "").o("yaHidePhones");
                  d = d ? Fb(a, d) : "";
                  (b = n(b, "settings.phhide") || d) && Rh(a, c, b);
                }
              });
        }),
        Ut = D("up.int", function (a, c) {
          return E(a, "up.c", function (b, d, e) {
            var f,
              g = ya(a, c),
              h = ke(a, N(c)).warn;
            g
              ? rb(b)
                ? ((b = ((f = {}), (f.__ymu = b), f)),
                  (f = g.params) && f(b, d || A, e))
                : h("Wrong user params")
              : h("No counter instance found");
          });
        }),
        Vt = D("trigger.in", function (a, c) {
          c.Eg && Gb(a, C([a, "yacounter" + c.id + "inited"], Tq), "t.i");
        }),
        Wt = D("destruct.e", function (a, c, b) {
          return function () {
            var d = O(a),
              e = c.id;
            B(function (f, g) {
              return T(f) && E(a, "dest.fr." + g, f)();
            }, b);
            delete d.o("counters")[N(c)];
            delete a["yaCounter" + e];
          };
        }),
        Xt = D("fip", function (a, c) {
          if (!Og(a) || Sc(a)) {
            var b = Ka(a);
            if (!b.o("fip")) {
              var d = u(
                cb(
                  u(function (e, f) {
                    return D("fip." + f, e)(a);
                  }, F(tr, null))
                ),
                od("-")
              )(c);
              b.C("fip", d);
            }
          }
        }),
        Yt = v("9-d5ve+.r%7", M),
        Zt = D("ad", function (a, c) {
          if (!c.jb) {
            var b = O(a);
            if (!b.o("adBlockEnabled")) {
              var d = function (m) {
                  G(m, ["2", "1"]) && b.C("adBlockEnabled", m);
                },
                e = ac(a),
                f = e.o("isad");
              if (f) d(f);
              else {
                var g = v("adStatus", b.C),
                  h = function (m) {
                    m = m ? "1" : "2";
                    d(m);
                    g("complete");
                    e.C("isad", m, 1200);
                    return m;
                  },
                  k = ua(a, "adb", c);
                if (!b.o("adStatus")) {
                  g("process");
                  var l = "metrika/a" + Yt().replace(/[^a-v]+/g, "") + "t.gif";
                  Km(a, function () {
                    return k({}, l).then(v(!1, h))["catch"](v(!0, h));
                  });
                }
              }
            }
          }
        }),
        $t = D("suid.int", function (a, c) {
          return function (b, d, e) {
            var f = ya(a, c),
              g = Id(a, N(c));
            Fa(b) || be(a, b)
              ? ((b = nc(["__ym", "user_id", b])), f.params(b, d || A, e))
              : g.error("Incorrect user ID");
          };
        }),
        au = D("guid.int", function (a, c) {
          return function (b) {
            var d = Pd(a, c);
            b && Rf(a, b, null, d);
            return d;
          };
        }),
        $a = (function () {
          function a(c, b, d) {
            this.Ki = "wv2.c";
            this.Jb = [];
            this.ga = [];
            this.l = c;
            this.K = vf(c, this, d, this.Ki);
            this.F = b;
            this.$a = this.F.Zh();
            this.start = this.K.H(this.start, "st");
            this.stop = this.K.H(this.stop, "sp");
          }
          a.prototype.start = function () {
            var c = this;
            this.Jb = y(function (b) {
              var d = b[0],
                e = b[2];
              b = F(c.K.H(b[1], d[0]), c);
              return c.$a.D(e || c.l, d, b);
            }, this.ga);
          };
          a.prototype.stop = function () {
            B(Oa, this.Jb);
          };
          a.prototype.Y = function (c) {
            return this.F.na().Y(c);
          };
          return a;
        })(),
        Im = ["checkbox", "radio"],
        Jm = /pwd|value|password/i,
        dh = U("location.href"),
        bu = (function (a) {
          function c(b, d, e) {
            d = a.call(this, b, d, e) || this;
            d.ma = { elements: [], attributes: [] };
            d.index = 0;
            d.ie = d.K.H(d.ie, "o");
            d.zd = d.K.H(d.zd, "io");
            d.od = d.K.H(d.od, "ao");
            d.xe = d.K.H(d.xe, "a");
            d.ue = d.K.H(d.ue, "at");
            d.ye = d.K.H(d.ye, "r");
            d.ve = d.K.H(d.ve, "c");
            d.ra = new b.MutationObserver(d.ie);
            return d;
          }
          Ia(c, a);
          c.prototype.start = function () {
            this.ra.observe(this.l.document.documentElement, {
              attributes: !0,
              characterData: !0,
              childList: !0,
              subtree: !0,
              attributeOldValue: !0,
              characterDataOldValue: !0
            });
          };
          c.prototype.stop = function () {
            this.ra.disconnect();
          };
          c.prototype.od = function (b) {
            var d = b.target;
            b = b.attributeName;
            var e = this.ma.elements.indexOf(d);
            -1 === e &&
              ((e = this.ma.elements.push(d) - 1),
              (this.ma.attributes[e] = {}));
            this.ma.attributes[e] || (this.ma.attributes[e] = {});
            e = this.ma.attributes[e];
            var f = d.getAttribute(b);
            e[b] = Yd(this.l, d, b, f, this.F.zc()).value;
          };
          c.prototype.zd = function (b) {
            function d(k) {
              var l = Ob(e.l)(k, f);
              return -1 === l
                ? (f.push(k), (k = { Fd: {} }), g.push(k), k)
                : g[l];
            }
            var e = this,
              f = [],
              g = [];
            B(function (k) {
              var l = k.attributeName,
                m = k.removedNodes,
                q = k.oldValue,
                p = k.target,
                r = k.nextSibling,
                t = k.previousSibling;
              switch (k.type) {
                case "attributes":
                  e.od(k);
                  var x = d(p);
                  x.Fd[l] || (x.Fd[l] = Yd(e.l, p, l, q, e.F.zc()).value);
                  break;
                case "childList":
                  m &&
                    B(function (L) {
                      x = d(L);
                      x.sf ||
                        z(x, { sf: p, Ph: r ? r : void 0, Qh: t ? t : void 0 });
                    }, sa(m));
                  break;
                case "characterData":
                  (x = d(p)), x.tf || (x.tf = q);
              }
            }, b);
            var h = this.F.na();
            B(function (k, l) {
              h.Ge(k, g[l]);
            }, f);
          };
          c.prototype.ie = function (b) {
            var d = this;
            if (dh(this.l)) {
              var e = this.F.L();
              this.zd(b);
              B(function (f) {
                var g = f.addedNodes,
                  h = f.removedNodes,
                  k = f.target;
                switch (f.type) {
                  case "childList":
                    h && h.length && d.ye(sa(h), e);
                    g && g.length && d.xe(sa(g), e);
                    break;
                  case "characterData":
                    d.ve(k, e);
                }
              }, b);
              this.ue(e);
            } else this.stop();
          };
          c.prototype.ue = function (b) {
            var d = this;
            B(function (e, f) {
              var g = d.yc();
              d.F.X(
                "mutation",
                { index: g, attributes: d.ma.attributes[f], target: d.Y(e) },
                "ac",
                b
              );
            }, this.ma.elements);
            this.ma.elements = [];
            this.ma.attributes = [];
          };
          c.prototype.xe = function (b, d) {
            var e = this,
              f = this.yc();
            this.F.na().Ec({
              ha: b,
              cd: function (g) {
                g = y(function (h) {
                  h = z({}, h);
                  delete h.node;
                  return h;
                }, g);
                e.F.X("mutation", { index: f, ha: g }, "ad", d);
              }
            });
          };
          c.prototype.ye = function (b, d) {
            var e = this,
              f = this.yc(),
              g = this.F.na(),
              h = y(function (k) {
                var l = g.removeNode(k);
                ei(e.l, k, function (m) {
                  g.removeNode(m);
                });
                return l;
              }, b);
            this.F.X("mutation", { index: f, ha: h }, "re", d);
          };
          c.prototype.ve = function (b, d) {
            var e = this.yc();
            this.F.X(
              "mutation",
              { value: b.textContent, target: this.Y(b), index: e },
              "tc",
              d
            );
          };
          c.prototype.yc = function () {
            var b = this.index;
            this.index += 1;
            return b;
          };
          return c;
        })($a),
        cu = (function () {
          function a(c, b) {
            var d = this;
            this.tc = [];
            this.ab = [];
            this.ee = 1;
            this.Ja = 0;
            this.kb = {};
            this.Hc = {};
            this.Qd = function (f) {
              return d.ab.length ? G(f, d.ab) : !1;
            };
            this.removeNode = function (f) {
              var g = d.Y(f),
                h = Ga(f);
              if (h)
                return (
                  (h = "NR:" + h.toLowerCase()),
                  d.Qd(h) && d.aa.V(h, { data: { node: f, id: g } }),
                  g
                );
            };
            this.fb = function (f) {
              var g = Ga(f);
              if (g) {
                var h = f.__ym_indexer;
                h ||
                  ((h = d.ee),
                  (f.__ym_indexer = h),
                  (d.ee += 1),
                  (g = "NA:" + g.toLowerCase()),
                  d.Qd(g) && d.aa.V(g, { data: { node: f, id: h } }));
                return h;
              }
              return null;
            };
            this.l = c;
            var e = vf(c, this, "i");
            this.aa = cd(c);
            this.options = b;
            this.start = e.H(this.start, "st");
            this.stop = e.H(this.stop, "sp");
            this.Y = e.H(this.Y, "i");
            this.Ge = e.H(this.Ge, "o");
            this.Ec = e.H(this.Ec, "a");
            this.removeNode = e.H(this.removeNode, "r");
            this.da = e.H(this.da, "s");
          }
          a.prototype.Ge = function (c, b) {
            var d = this.fb(c);
            Qa(d) || (this.Hc[d] && this.Y(c), (this.Hc[d] = b));
          };
          a.prototype.D = function (c, b, d) {
            c = "" + b + c;
            this.ab.push(c);
            this.Qd(c) || this.ab.push(c);
            this.aa.D([c], d);
          };
          a.prototype.ea = function (c, b, d) {
            var e = "" + b + c;
            this.ab = V(function (f) {
              return f !== e;
            }, this.ab);
            this.aa.ea([e], d);
          };
          a.prototype.start = function () {
            this.Ja = W(this.l, u(F(this.da, this, !1), this.start), 50, "i.s");
          };
          a.prototype.stop = function () {
            this.flush();
            ja(this.l, this.Ja);
            this.tc = [];
          };
          a.prototype.Ec = function (c) {
            var b = this,
              d = [],
              e = 0,
              f = { cd: c.cd, result: [], Gc: 0, ha: d };
            this.tc.push(f);
            B(function (g) {
              ei(b.l, g, function (h) {
                var k = b.fb(h);
                Qa(k) ||
                  (d.push(h),
                  b.kb[k] && b.Y(h),
                  (b.kb[k] = { node: h, event: f, Nj: e }),
                  (e += 1));
              });
            }, c.ha);
          };
          a.prototype.Y = function (c) {
            if (c === this.l) return 0;
            var b = this.fb(c),
              d = this.kb[b],
              e = this.Th(b),
              f = e.sf,
              g = e.Fd,
              h = e.tf,
              k = e.Ph,
              l = e.Qh;
            if (d) {
              e = d.event;
              d = d.Nj;
              var m = this.l.document.documentElement === c;
              k = k || c.nextSibling;
              var q = l || c.previousSibling;
              l = !m && k ? this.fb(k) : null;
              q = !m && q ? this.fb(q) : null;
              m = this.l;
              k = this.options;
              f = this.fb(f || c.parentNode || c.parentElement) || 0;
              var p = g,
                r = void 0;
              void 0 === q && (q = null);
              void 0 === l && (l = null);
              void 0 === p && (p = {});
              void 0 === r && (r = Ga(c));
              if (X(r)) c = void 0;
              else {
                g = {
                  id: b,
                  te: q !== f ? q : null,
                  next: l !== f ? l : null,
                  parent: f,
                  name: r.toLowerCase(),
                  node: c
                };
                if (wf(c)) {
                  if (((h = Fm(c, h)), (g.attributes = {}), (g.content = h)))
                    if ((c = ed(m, c)))
                      (g.content = "" !== h.trim() ? Mo(m, h) : h),
                        (g.hidden = c);
                } else
                  (h = Gm(m, c, k, p, r)),
                    (m = h.ib),
                    (g.attributes = h.fh),
                    m && (g.hidden = m),
                    c.namespaceURI &&
                      Cd(c.namespaceURI, "svg") &&
                      (g.Sf = c.namespaceURI);
                c = g;
              }
              if (X(c)) return;
              delete this.kb[b];
              e.result[d] = c;
              e.Gc += 1;
              e.ha.length === e.Gc && e.cd(e.result);
            }
            return b;
          };
          a.prototype.flush = function () {
            this.da(!0);
          };
          a.prototype.da = function (c) {
            var b = this;
            if (dh(this.l)) {
              var d = aa(this.kb);
              d = y(function (e) {
                return b.kb[e].node;
              }, d);
              d = ub(d, this.Y);
              c = c ? Gj(A) : Ej(this.l, 20);
              d(c);
              this.tc = V(function (e) {
                return e.Gc !== e.result.length;
              }, this.tc);
            }
          };
          a.prototype.Th = function (c) {
            if (Qa(c)) return {};
            var b = this.Hc[c];
            return b ? (delete this.Hc[c], b) : {};
          };
          return a;
        })(),
        du = ["input", "change", "keyup", "paste", "cut"],
        eu = (function (a) {
          function c(b, d, e) {
            b = a.call(this, b, d, e) || this;
            b.inputs = {};
            b.Bd = !1;
            b.Rc = b.K.H(b.Rc, "ii");
            b.Sc = b.K.H(b.Sc, "ir");
            b.Yc = b.K.H(b.Yc, "ri");
            b.kd = b.K.H(b.kd, "ur");
            b.Pd = b.K.H(b.Pd, "ce");
            b.Dc = b.K.H(b.Dc, "vc");
            return b;
          }
          Ia(c, a);
          c.prototype.start = function () {
            var b = this,
              d = this.F.na();
            this.Bd = this.nh();
            B(function (e) {
              e = e.toLowerCase();
              d.D(e, "NA:", F(b.Rc, b));
              d.D(e, "NR:", F(b.Sc, b));
            }, Nf);
            this.Jb = [
              this.$a.D(this.l.document, du, F(this.Pd, this)),
              function () {
                B(function (e) {
                  e = e.toLowerCase();
                  d.ea(e, "NA:", b.Rc);
                  d.ea(e, "NR:", b.Sc);
                }, Nf);
                B(b.kd, aa(b.inputs));
              }
            ];
          };
          c.prototype.kd = function (b) {
            if (this.Bd) {
              var d = this.inputs[b];
              d &&
                ((b = d.fj),
                (d = d.element),
                b && this.l.Object.defineProperty(d, this.Ac(d), b));
            }
          };
          c.prototype.Sc = function (b) {
            b && this.kd(b.data.id);
          };
          c.prototype.Rc = function (b) {
            b && ((b = b.data), this.Yc(b.node, b.id));
          };
          c.prototype.Ac = function (b) {
            return Fe(b) ? "checked" : "value";
          };
          c.prototype.Pd = function (b) {
            if ((b = b.target)) {
              var d = this.Ac(b);
              this.Dc(b[d], b);
            }
          };
          c.prototype.Dc = function (b, d) {
            var e = this.Y(d),
              f = this.inputs[e];
            if (!f && ((f = this.Yc(f, e)), !f)) return;
            e = f.ph;
            var g = f.value,
              h = this.Ac(d);
            (b && !G(typeof b, ["string", "boolean", "number"])) ||
              b === g ||
              ((g = Yd(this.l, d, h, b, this.F.zc()).value),
              e
                ? this.F.X(
                    "event",
                    { target: this.Y(d), checked: !!b },
                    "change"
                  )
                : ((e = Zd(d)),
                  (h = Lf(d)),
                  this.F.X(
                    "event",
                    { value: g, hidden: h && !e, target: this.Y(d) },
                    "change"
                  )),
              (f.value = b));
          };
          c.prototype.Yc = function (b, d) {
            var e = this;
            if (
              !tf(b) ||
              "__ym_input_override_test" === b.getAttribute("class") ||
              this.inputs[d]
            )
              return null;
            var f = Fe(b),
              g = this.Ac(b),
              h = { element: b, ph: f, value: b[g] };
            this.inputs[d] = h;
            this.Bd &&
              Gb(this.l, function () {
                var k =
                    e.l.Object.getOwnPropertyDescriptor(
                      Object.getPrototypeOf(b),
                      g
                    ) || {},
                  l = e.l.Object.getOwnPropertyDescriptor(b, g) || {},
                  m = z({}, k, l);
                if (Da("((set)?(\\s?" + g + ")?)?", m.set)) {
                  try {
                    e.l.Object.defineProperty(
                      b,
                      g,
                      z({}, m, {
                        configurable: !0,
                        set: function (q) {
                          e.Dc(q, this);
                          return m.set.call(this, q);
                        }
                      })
                    );
                  } catch (q) {}
                  h.fj = m;
                }
              });
            return h;
          };
          c.prototype.nh = function () {
            var b = !0,
              d = Va(this.l)("input");
            try {
              d = Va(this.l)("input");
              d.value = "INPUT_VALUE";
              d.style.setProperty("display", "none", "important");
              d.setAttribute("type", "text");
              d.setAttribute("class", "__ym_input_override_test");
              var e =
                  this.l.Object.getOwnPropertyDescriptor(
                    Object.getPrototypeOf(d),
                    "value"
                  ) || {},
                f = this.l.Object.getOwnPropertyDescriptor(d, "value") || {},
                g = z({}, e, f);
              this.l.Object.defineProperty(
                d,
                "value",
                z({}, g, {
                  configurable: !0,
                  set: function (h) {
                    return g.set.call(d, h);
                  }
                })
              );
              "INPUT_VALUE" !== d.value && (b = !1);
              d.value = "INPUT_TEST";
              "INPUT_TEST" !== d.value && (b = !1);
            } catch (h) {
              b = !1;
            }
            return b;
          };
          return c;
        })($a),
        fu = (function (a) {
          function c(b, d, e) {
            b = a.call(this, b, d, e) || this;
            b.Ra = { width: 0, height: 0, ob: 0, pb: 0, orientation: 0 };
            b.ga.push([["resize"], b.dj]);
            b.ga.push([["orientationchange"], b.bj]);
            return b;
          }
          Ia(c, a);
          c.prototype.start = function () {
            a.prototype.start.call(this);
            this.kg();
          };
          c.prototype.dj = function () {
            var b = this.Od();
            this.vi(b) && ((this.Ra = b), this.lg(b));
          };
          c.prototype.bj = function () {
            var b = this.Od();
            this.Ra.orientation !== b.orientation &&
              ((this.Ra = b), this.xj(b));
          };
          c.prototype.Pf = function (b) {
            return !b.height || !b.width || !b.pb || !b.ob;
          };
          c.prototype.vi = function (b) {
            return b.height !== this.Ra.height || b.width !== this.Ra.width;
          };
          c.prototype.Od = function () {
            var b = this.F.eb(),
              d = yd(this.l),
              e = d[0];
            d = d[1];
            b = b.Nd();
            return {
              width: e,
              height: d,
              pb: b ? b.scrollWidth : 0,
              ob: b ? b.scrollHeight : 0,
              orientation: this.F.eb().ai()
            };
          };
          c.prototype.xj = function (b) {
            var d;
            void 0 === d && (d = this.F.L());
            this.F.X(
              "event",
              { width: b.width, height: b.height, orientation: b.orientation },
              "deviceRotation",
              d
            );
          };
          c.prototype.lg = function (b, d) {
            void 0 === d && (d = this.F.L());
            this.F.X(
              "event",
              { width: b.width, height: b.height, pb: b.pb, ob: b.ob },
              "resize",
              d
            );
          };
          c.prototype.kg = function () {
            var b = this.Od();
            this.Pf(b)
              ? W(this.l, F(this.kg, this), 300)
              : (this.Pf(this.Ra) && (this.Ra = b), this.lg(b, 0));
          };
          return c;
        })($a),
        ef = (function () {
          function a(c) {
            this.index = 0;
            this.tb = {};
            this.l = c;
          }
          a.prototype.kc = function (c, b, d) {
            void 0 === d && (d = {});
            var e = da(this.l),
              f = this.index;
            this.index += 1;
            this.tb[f] = { Ja: 0, Rb: !1, Nh: c, $b: [], Zd: e(Z) };
            var g = this;
            return function () {
              var h = Aa(arguments),
                k = d.bb && !g.tb[f].Rb,
                l = g.tb[f];
              ja(g.l, l.Ja);
              l.$b = h;
              l.Rb = !0;
              var m = e(Z);
              if (k || m - l.Zd >= b) c.apply(void 0, h), (l.Zd = m);
              l.Ja = W(
                g.l,
                function () {
                  k || (c.apply(void 0, h), (l.Zd = e(Z)));
                  l.Rb = !1;
                  l.$b = [];
                },
                b,
                "th"
              );
            };
          };
          a.prototype.flush = function () {
            var c = this;
            B(function (b) {
              var d = c.tb[b],
                e = d.Ja,
                f = d.Nh,
                g = d.$b;
              d.Rb && ((c.tb[b].Rb = !1), f.apply(void 0, g), ja(c.l, e));
            }, aa(this.tb));
          };
          return a;
        })(),
        gu = (function (a) {
          function c(b, d, e) {
            d = a.call(this, b, d, e) || this;
            d.Ag = [];
            d.Ue = { x: 0, y: 0 };
            d.ua = new ef(b);
            d.Vc = d.K.H(d.Vc, "o");
            d.ga.push([["scroll"], d.ej]);
            return d;
          }
          Ia(c, a);
          c.prototype.start = function () {
            a.prototype.start.call(this);
            this.F.X(
              "event",
              {
                x: Math.max(this.l.scrollX, 0),
                y: Math.max(this.l.scrollY, 0),
                page: !0,
                target: -1
              },
              "scroll",
              0
            );
          };
          c.prototype.stop = function () {
            a.prototype.stop.call(this);
            this.ua.flush();
          };
          c.prototype.ej = function (b) {
            if (this.F.eb().If()) this.Vc(b);
            else {
              var d = b.target,
                e = V(function (f) {
                  return f[0] === d;
                }, this.Ag).pop();
              e
                ? (e = e[1])
                : ((e = this.ua.kc(F(this.Vc, this), 100, { bb: !0 })),
                  this.Ag.push([d, e]));
              e(b);
            }
          };
          c.prototype.Vc = function (b) {
            var d = this.F.eb().Nd();
            b = b.target;
            var e = this.Db(b);
            d = Ha(ka(b), [d, this.l, this.l.document]);
            var f = Math.max(e.left, 0);
            e = Math.max(e.top, 0);
            if (d) {
              if (this.Ue.x === f && this.Ue.y === e) return;
              this.Ue = { x: f, y: e };
            }
            this.F.X(
              "event",
              { x: f, y: e, page: d, target: d ? -1 : this.Y(b) },
              "scroll"
            );
          };
          c.prototype.Db = function (b) {
            var d = { left: 0, top: 0 };
            if (!b) return d;
            if (b.window === b)
              return { top: b.scrollY || 0, left: b.scrollX || 0 };
            var e = b.ownerDocument || b,
              f = b.documentElement,
              g = e.defaultView || e.parentWindow,
              h = e.body;
            return b !== e || ((b = this.F.eb().Nd()), b)
              ? G(b, [f, h])
                ? {
                    top: b.scrollTop || g.scrollY,
                    left: b.scrollLeft || g.scrollX
                  }
                : { top: b.scrollTop || 0, left: b.scrollLeft || 0 }
              : d;
          };
          return c;
        })($a),
        hu = ["mousemove", "mousedown", "mouseup", "click"],
        iu = (function (a) {
          function c(b, d, e) {
            d = a.call(this, b, d, e) || this;
            d.ga.push([hu, d.aj]);
            d.ua = new ef(b);
            d.Oc = d.K.H(d.Oc, "n");
            d.Ej = d.K.H(d.ua.kc(F(d.Oc, d), 100), "t");
            return d;
          }
          Ia(c, a);
          c.prototype.stop = function () {
            a.prototype.stop.call(this);
            this.ua.flush();
          };
          c.prototype.aj = function (b) {
            var d = null;
            try {
              d = b.type;
            } catch (e) {
              return;
            }
            "mousemove" === d ? this.Ej(b) : this.Oc(b);
          };
          c.prototype.Oc = function (b) {
            var d = b.type,
              e = b.clientX;
            e = void 0 === e ? null : e;
            var f = b.clientY;
            f = void 0 === f ? null : f;
            b = b.target || this.l.document.elementFromPoint(e, f);
            this.F.X("event", { x: e || 0, y: f || 0, target: this.Y(b) }, d);
          };
          return c;
        })($a),
        ju = ["focus", "blur"],
        ku = (function (a) {
          function c(b, d, e) {
            b = a.call(this, b, d, e) || this;
            b.ga.push([ju, b.Oh]);
            return b;
          }
          Ia(c, a);
          c.prototype.Oh = function (b) {
            var d = b.target;
            b = b.type;
            this.F.X(
              "event",
              {
                target: this.Y(
                  d === this.l ? this.l.document.documentElement : d
                )
              },
              b
            );
          };
          return c;
        })($a),
        lu = w(function (a) {
          var c = Ja(a.getSelection, "getSelection");
          return c ? F(c, a) : A;
        }),
        mu = u(lu, Oa),
        nu = ["mousemove", "touchmove", "mousedown", "touchdown", "select"],
        ou = /text|search|password|tel|url/,
        pu = (function (a) {
          function c(b, d, e) {
            b = a.call(this, b, d, e) || this;
            b.Rd = !1;
            b.ga.push([nu, b.ri]);
            return b;
          }
          Ia(c, a);
          c.prototype.ri = function (b) {
            var d = this.F,
              e = b.type,
              f = b.which;
            b = b.target;
            if ("mousemove" !== e || 1 === f)
              (e = "select" === e ? this.hi(b) : this.ei()) && e.start !== e.end
                ? ((this.Rd = !0), d.X("event", e, "selection"))
                : this.Rd &&
                  ((this.Rd = !1),
                  d.X("event", { start: 0, end: 0 }, "selection"));
          };
          c.prototype.ei = function () {
            var b = mu(this.l);
            if (b && 0 < b.rangeCount) {
              b = b.getRangeAt(0) || this.l.document.createRange();
              var d = this.Y(b.startContainer),
                e = this.Y(b.endContainer);
              if (!X(d) && !X(e))
                return { start: b.startOffset, end: b.endOffset, vg: d, kf: e };
            }
          };
          c.prototype.hi = function (b) {
            if (ou.test(b.type || "")) {
              var d = this.Y(b);
              if (!X(d))
                return {
                  start: b.selectionStart,
                  end: b.selectionEnd,
                  target: d
                };
            }
          };
          return c;
        })($a),
        qu = { focus: "windowfocus", blur: "windowblur" },
        ru = (function (a) {
          function c(b, d, e) {
            b = a.call(this, b, d, e) || this;
            b.visibility = null;
            X(b.l.document.hidden)
              ? X(b.l.document.msHidden)
                ? X(b.l.document.webkitHidden) ||
                  (b.visibility = {
                    hidden: "webkitHidden",
                    event: "webkitvisibilitychange"
                  })
                : (b.visibility = {
                    hidden: "msHidden",
                    event: "msvisibilitychange"
                  })
              : (b.visibility = {
                  hidden: "hidden",
                  event: "visibilitychange"
                });
            b.handleEvent = b.K.H(b.handleEvent, "e");
            return b;
          }
          Ia(c, a);
          c.prototype.start = function () {
            this.Jb = [
              this.$a.D(
                this.l,
                this.visibility ? [this.visibility.event] : ["focus", "blur"],
                F(this.handleEvent, this)
              )
            ];
          };
          c.prototype.handleEvent = function (b) {
            this.F.X(
              "event",
              {},
              qu[
                this.visibility
                  ? this.l.document[this.visibility.hidden]
                    ? "blur"
                    : "focus"
                  : b.type
              ]
            );
          };
          return c;
        })($a),
        su = [
          "touchmove",
          "touchstart",
          "touchend",
          "touchcancel",
          "touchforcechange"
        ],
        tu = (function (a) {
          function c(b, d, e) {
            d = a.call(this, b, d, e) || this;
            d.gd = {};
            d.scrolling = !1;
            d.ig = 0;
            d.ga.push([["scroll"], d.uj, d.l.document]);
            d.ga.push([su, d.Ij, d.l.document]);
            d.ua = new ef(b);
            d.Ib = d.K.H(d.Ib, "nh");
            d.Fj = d.K.H(
              d.ua.kc(d.Ib, d.F.eb().If() ? 0 : 50, { bb: !0 }),
              "th"
            );
            return d;
          }
          Ia(c, a);
          c.prototype.uj = function () {
            var b = this;
            this.scrolling = !0;
            ja(this.l, this.ig);
            this.ig = W(
              this.l,
              function () {
                b.scrolling = !1;
              },
              150
            );
          };
          c.prototype.Ij = function (b) {
            var d = this,
              e = "touchcancel" === b.type || "touchend" === b.type;
            b.changedTouches &&
              0 < b.changedTouches.length &&
              B(function (f) {
                var g = d.ki(f);
                f.__ym_touch_id = g;
                e && delete d.gd[f.identifier];
              }, sa(b.changedTouches));
            "touchmove" === b.type
              ? this.scrolling
                ? this.Ib(b)
                : this.Fj(b, this.F.L())
              : this.Ib(b);
          };
          c.prototype.ki = function (b) {
            this.gd[b.identifier] || (this.gd[b.identifier] = Ih());
            return this.gd[b.identifier];
          };
          c.prototype.Ib = function (b, d) {
            void 0 === d && (d = this.F.L());
            var e = b.type,
              f = y(function (g) {
                return {
                  id: g.__ym_touch_id,
                  x: Math.round(g.clientX),
                  y: Math.round(g.clientY),
                  force: g.force
                };
              }, sa(b.changedTouches));
            0 < f.length &&
              this.F.X("event", { touches: f, target: this.Y(b.target) }, e, d);
          };
          return c;
        })($a),
        uu = (function (a) {
          function c(b, d, e) {
            b = a.call(this, b, d, e) || this;
            b.ga.push([["load"], b.$i, b.l.document]);
            return b;
          }
          Ia(c, a);
          c.prototype.$i = function (b) {
            b = b.target;
            "IMG" === Ga(b) &&
              b.getAttribute("srcset") &&
              this.F.X(
                "event",
                { target: this.Y(b), value: b.currentSrc },
                "srcset"
              );
          };
          return c;
        })($a),
        vu = (function (a) {
          function c(b, d, e) {
            d = a.call(this, b, d, e) || this;
            d.Ng = 1;
            d.ua = new ef(b);
            d.cc = d.K.H(d.cc, "z");
            return d;
          }
          Ia(c, a);
          c.prototype.start = function () {
            if (this.Df()) {
              a.prototype.start.call(this);
              this.cc();
              var b = this.$a.D(
                n(this.l, "visualViewport"),
                ["resize"],
                this.ua.kc(this.cc, 10)
              );
              this.Jb.push(b);
            }
          };
          c.prototype.stop = function () {
            a.prototype.stop.call(this);
            this.ua.flush();
          };
          c.prototype.cc = function () {
            var b = this.Df();
            b && b !== this.Ng && ((this.Ng = b), this.yj(b));
          };
          c.prototype.Df = function () {
            var b = tg(this.l);
            return b ? b[2] : null;
          };
          c.prototype.yj = function (b) {
            var d = Of(this.l);
            this.F.X("event", { x: d.x, y: d.y, level: b }, "zoom");
          };
          return c;
        })($a),
        Nd,
        ff = {
          91: "super",
          93: "super",
          224: "super",
          18: "alt",
          17: "ctrl",
          16: "shift",
          9: "tab",
          8: "backspace",
          46: "delete"
        },
        Fl = { super: 1, vm: 2, alt: 3, shift: 4, Rm: 5, delete: 6, sm: 6 },
        wu = [4, 9, 8, 32, 37, 38, 39, 40, 46],
        Gl =
          ((Nd = {}),
          (Nd["1"] = {
            91: "&#8984;",
            93: "&#8984;",
            224: "&#8984;",
            18: "&#8997;",
            17: "&#8963;",
            16: "&#8679;",
            9: "&#8677;",
            8: "&#9003;",
            46: "&#9003;"
          }),
          (Nd["2"] = {
            91: "&#xff;",
            93: "&#xff;",
            224: "&#xff;",
            18: "Alt",
            17: "Ctrl",
            16: "Shift",
            9: "Tab",
            8: "Backspace",
            46: "Delete"
          }),
          (Nd.Oi = {
            32: "SPACEBAR",
            37: "&larr;",
            38: "&uarr;",
            39: "&rarr;",
            40: "&darr;",
            13: "Enter"
          }),
          Nd),
        xu = /flash/,
        yu = /ym-disable-keys/,
        zu = /^&#/,
        Au = (function (a) {
          function c(b, d, e) {
            d = a.call(this, b, d, e) || this;
            d.gb = {};
            d.Fa = 0;
            d.ya = [];
            d.yg = [];
            d.rc = 0;
            d.dg = 0;
            d.ga.push([["keydown"], d.mi]);
            d.ga.push([["keyup"], d.ni]);
            d.Wg =
              -1 !== (n(b, "navigator.appVersion") || "").indexOf("Mac")
                ? "1"
                : "2";
            d.Kc = d.K.H(d.Kc, "v");
            d.Dd = d.K.H(d.Dd, "ec");
            d.bd = d.K.H(d.bd, "sk");
            d.Md = d.K.H(d.Md, "gk");
            d.He = d.K.H(d.He, "sc");
            d.ac = d.K.H(d.ac, "cc");
            d.reset = d.K.H(d.reset, "r");
            d.$c = d.K.H(d.$c, "rs");
            return d;
          }
          Ia(c, a);
          c.prototype.mi = function (b) {
            if (this.Kc(b) && !this.Fi(b)) {
              var d = b.keyCode;
              b.repeat ||
                this.gb[d] ||
                ((this.gb[b.keyCode] = !0),
                ff[b.keyCode] && !this.Fa
                  ? ((this.Fa += 1), this.He(b), this.reset(300))
                  : this.Fa
                  ? (this.lh(), this.Ae(b), this.Dd())
                  : (this.reset(), this.Ae(b)));
            }
          };
          c.prototype.ni = function (b) {
            if (this.Kc(b)) {
              var d = b.keyCode,
                e = ff[b.keyCode];
              this.gb[b.keyCode] && (this.gb[d] = !1);
              e && this.Fa && ((this.Fa = 0), (this.gb = {}));
              1 === this.ya.length &&
                ((b = this.ya[0]),
                G(b.keyCode, wu) && (this.bd([b], !0), this.reset()));
              this.ya = V(u(ka(d), yb), this.ya);
              ja(this.l, this.rc);
            }
          };
          c.prototype.Kc = function (b) {
            var d = this.l.document.activeElement;
            b = b.target;
            return !Ha(Boolean, [
              d &&
                "OBJECT" === d.nodeName &&
                xu.test(d.getAttribute("type") || ""),
              "INPUT" === b.nodeName &&
                "password" === b.getAttribute("type") &&
                yu.test(b.className)
            ]);
          };
          c.prototype.Dd = function () {
            this.yg = this.ya.slice(0);
            ja(this.l, this.rc);
            this.rc = W(this.l, v(this.yg, F(this.bd, this)), 0, "e.c");
          };
          c.prototype.bd = function (b, d) {
            void 0 === d && (d = !1);
            if (1 < b.length || d) {
              var e = this.Md(b);
              this.F.X("event", { Lc: e }, "keystroke");
            }
          };
          c.prototype.Md = function (b) {
            var d = this;
            b = y(function (e) {
              e = e.keyCode;
              var f = ff[e],
                g = d.$h(e);
              return { id: e, key: g, Mf: !!f && zu.test(g), Mc: f };
            }, b);
            return xg(function (e, f) {
              return (Fl[e.Mc] || 100) - (Fl[f.Mc] || 100);
            }, b);
          };
          c.prototype.$h = function (b) {
            return Gl[this.Wg][b] || Gl.Oi[b] || String.fromCharCode(b);
          };
          c.prototype.Ae = function (b) {
            G(b, this.ya) || this.ya.push(b);
          };
          c.prototype.He = function (b) {
            this.Ae(b);
            this.ac();
          };
          c.prototype.ac = function () {
            this.Fa ? W(this.l, this.ac, 100) : (this.ya = []);
          };
          c.prototype.lh = function () {
            ja(this.l, this.dg);
          };
          c.prototype.reset = function (b) {
            b ? (this.dg = W(this.l, F(this.$c, this), b)) : this.$c();
          };
          c.prototype.$c = function () {
            this.Fa = 0;
            this.ya = [];
            this.gb = {};
            ja(this.l, this.rc);
          };
          c.prototype.Fi = function (b) {
            return b.target && "INPUT" === b.target.nodeName
              ? b.shiftKey || 32 === b.keyCode || "shift" === ff[b.keyCode]
              : !1;
          };
          return c;
        })($a),
        Em = ["sr", "sd", "\u043d"],
        Bu = /allow-same-origin/,
        Cu = (function (a) {
          function c(b, d, e) {
            d = a.call(this, b, d, e) || this;
            d.Tb = [];
            d.Hd = {};
            d.je = d.K.H(d.je, "fi");
            d.ke = d.K.H(d.ke, "sd");
            d.le = d.K.H(d.le, "src");
            d.ra = new b.MutationObserver(d.le);
            return d;
          }
          Ia(c, a);
          c.prototype.start = function () {
            a.prototype.start.call(this);
            this.F.zc().yb && this.F.na().D("iframe", "NA:", F(this.je, this));
            this.F.zf().Kd().D(["sdr"], F(this.ke, this));
          };
          c.prototype.stop = function () {
            a.prototype.stop.call(this);
            B(function (b) {
              b.F.stop();
            }, this.Tb);
          };
          c.prototype.le = function (b) {
            var d = b.pop().target;
            if (
              (b = bb(function (f) {
                return f.Hf === d;
              }, this.Tb))
            ) {
              this.Tb = V(function (f) {
                return f.Hf !== d;
              }, this.Tb);
              var e = b.F.Ld();
              try {
                b.F.stop();
              } catch (f) {}
              this.jc(d, e);
            }
          };
          c.prototype.je = function (b) {
            if (b) {
              var d = b.data.node;
              this.ra.observe(d, { attributes: !0, attributeFilter: ["src"] });
              this.jc(d, b.data.id);
            }
          };
          c.prototype.jc = function (b, d) {
            var e = this;
            this.Ci(b) &&
              pc(
                this.l,
                b
              )(
                Ta(A, function () {
                  var f = e.F.jc(b.contentWindow, d);
                  e.Tb.push({ F: f, Hf: b });
                })
              );
          };
          c.prototype.ke = function (b) {
            var d = this,
              e = b.M;
            b = b.data;
            this.Hd[e] || (this.Hd[e] = { data: [] });
            var f = this.Hd[e];
            f.data = f.data.concat(b);
            this.l.isNaN(f.Ad) &&
              B(function (g) {
                "page" === g.type && (f.Ad = g.data.za - d.F.Af());
              }, f.data);
            this.l.isNaN(f.Ad) ||
              (this.F.da(
                y(function (g) {
                  g.L += f.Ad;
                  g.L = d.l.Math.max(0, g.L);
                  return g;
                }, f.data)
              ),
              (f.data = []));
          };
          c.prototype.Ci = function (b) {
            var d = b.getAttribute("src"),
              e = b.getAttribute("sandbox");
            return b.getAttribute("_ym_ignore") ||
              (e && !e.match(Bu)) ||
              (d &&
                "about:blank" !== d &&
                (d = Kc(this.l, d).host) &&
                S(this.l).host !== d)
              ? !1
              : n(b, "contentWindow.location.href");
          };
          return c;
        })($a),
        Du = (function (a) {
          function c(b, d, e) {
            b = a.call(this, b, d, e) || this;
            b.De = b.K.H(b.De, "ps");
            return b;
          }
          Ia(c, a);
          c.prototype.start = function () {
            this.F.na().Ec({
              ha: [this.l.document.documentElement],
              cd: this.De
            });
          };
          c.prototype.De = function (b) {
            var d = this.F.bi(),
              e = d.Uh(),
              f = S(this.l),
              g = f.host,
              h = f.protocol;
            f = f.pathname;
            var k = yd(this.l),
              l = k[0];
            k = k[1];
            this.F.X(
              "page",
              {
                content: y(function (m) {
                  m = z({}, m);
                  delete m.node;
                  return m;
                }, b),
                af: e || "",
                Ef: !!e,
                viewport: { width: l, height: k },
                title: this.l.document.title,
                doctype: d.Wh() || "",
                Ye: this.l.location.href,
                Gg: this.l.navigator.userAgent,
                referrer: this.l.document.referrer,
                screen: {
                  width: this.l.screen.width,
                  height: this.l.screen.height
                },
                location: { host: g, protocol: h, path: f },
                za: this.F.Af(),
                fd: d.ii()
              },
              "page",
              0
            );
          };
          return c;
        })($a),
        Eu = ["addRule", "removeRule", "insertRule", "deleteRule"],
        eh = [
          [
            (function (a) {
              function c(b, d, e) {
                b = a.call(this, b, d, e) || this;
                b.Ta = {};
                b.Ub = {};
                b.Ze = 0;
                b.Tc = b.K.H(b.Tc, "a");
                b.sb = b.K.H(b.sb, "sr");
                b.Uc = b.K.H(b.Uc, "r");
                b.da = b.K.H(b.da, "d");
                return b;
              }
              Ia(c, a);
              c.prototype.start = function () {
                var b = this.F.na();
                b.D("style", "NA:", this.Tc);
                b.D("style", "NR:", this.Uc);
                this.da();
              };
              c.prototype.stop = function () {
                var b = this;
                a.prototype.stop.call(this);
                var d = this.F.na();
                d.ea("style", "NA:", this.Tc);
                d.ea("style", "NR:", this.Uc);
                this.da();
                ja(this.l, this.Ze);
                B(function (e) {
                  b.Ta[e].sheet && b.gg(b.Ta[e].sheet);
                }, aa(this.Ta));
                this.Ta = {};
              };
              c.prototype.da = function () {
                var b = this;
                B(function (d) {
                  var e = d[0];
                  d = d[1];
                  if (d.length) {
                    for (
                      var f = [], g = d[0].L, h = [], k = 0;
                      k < d.length;
                      k += 1
                    ) {
                      var l = d[k],
                        m = l.L;
                      delete l.L;
                      m <= g + 50 ? f.push(l) : (h.push(f), (g = m), (f = [l]));
                    }
                    f.length && h.push(f);
                    h.length &&
                      B(function (q) {
                        b.F.X(
                          "event",
                          { target: Ba(e), Da: q },
                          "stylechange",
                          g
                        );
                      }, h);
                    delete b.Ub[e];
                  }
                }, za(this.Ub));
                this.Ze = W(this.l, this.da, 100);
              };
              c.prototype.sb = function (b, d, e, f, g) {
                void 0 === f && (f = "");
                void 0 === g && (g = -1);
                this.Ub[b] || (this.Ub[b] = []);
                this.Ub[b].push({ me: d, style: f, index: g, L: e });
              };
              c.prototype.gj = function (b, d) {
                var e = this,
                  f = b.addRule,
                  g = b.removeRule,
                  h = b.insertRule,
                  k = b.deleteRule;
                T(f) &&
                  (b.addRule = function (l, m, q) {
                    e.sb(d, "a", e.F.L(), l + "{" + m + "}", q);
                    return f.call(b, l, m, q);
                  });
                T(g) &&
                  (b.removeRule = function (l) {
                    e.sb(d, "r", e.F.L(), "", l);
                    return g.call(b, l);
                  });
                T(h) &&
                  (b.insertRule = function (l, m) {
                    e.sb(d, "a", e.F.L(), l, m);
                    return h.call(b, l, m);
                  });
                T(k) &&
                  (b.deleteRule = function (l) {
                    e.sb(d, "r", e.F.L(), "", l);
                    return k.call(b, l);
                  });
              };
              c.prototype.gg = function (b) {
                var d = this;
                B(function (e) {
                  var f = d.l.CSSStyleSheet.prototype[e];
                  T(f) && (b[e] = F(f, b));
                }, Eu);
              };
              c.prototype.Gh = function (b) {
                try {
                  return b.cssRules || b.rules;
                } catch (d) {
                  return null;
                }
              };
              c.prototype.Tc = function (b) {
                var d = b.data;
                b = d.id;
                d = d.node;
                if (d.sheet && !d.getAttribute("src") && !d.innerText) {
                  var e = d.sheet,
                    f = this.Gh(e);
                  if (f && f.length) {
                    for (var g = [], h = 0; h < f.length; h += 1)
                      g.push({ style: f[h].cssText, index: h, me: "a" });
                    this.F.X("event", { Da: g, target: b }, "stylechange");
                  }
                  this.gj(e, b);
                  this.Ta[b] = d;
                }
              };
              c.prototype.Uc = function (b) {
                b = b.data.id;
                var d = this.Ta[b];
                d && (delete this.Ta[b], d.sheet && this.gg(d.sheet));
              };
              return c;
            })($a),
            "ss"
          ],
          [eu, "in"],
          [bu, "mu"],
          [fu, "r"],
          [gu, "sc"],
          [iu, "mo"],
          [ku, "f"],
          [pu, "se"],
          [ru, "wf"],
          [tu, "t"],
          [uu, "src"],
          [vu, "z"],
          [Au, "ks"]
        ];
      eh.push([Cu, "if"]);
      eh.push([Du, "pa"]);
      var Fu = w(function (a) {
          var c = a.document;
          return {
            Nd: function () {
              if (c.scrollingElement) return c.scrollingElement;
              var b =
                0 === c.compatMode.indexOf("CSS1") ? c.documentElement : c.body;
              return n(c, "documentElement.scrollHeight") >=
                n(c, "body.scrollHeight")
                ? b
                : null;
            },
            ai: function () {
              var b = a.screen;
              if (!b) return 0;
              var d = bb(v(b, n), [
                "orientation",
                "mozOrientation",
                "msOrientation"
              ]);
              return n(b, d + ".angle") || 0;
            },
            Hm: v(a, Pb),
            If: v(a, jd),
            Gm: v(a, He)
          };
        }),
        Gu = (function () {
          function a(c, b) {
            var d = this;
            this.Fb = 0;
            this.nc = [];
            this.Eb = null;
            this.oa = this.Xb = this.wg = !1;
            this.za = 0;
            this.bi = function () {
              return d.page;
            };
            this.Ld = function () {
              return d.Fb;
            };
            this.Af = function () {
              return d.za;
            };
            this.Zh = function () {
              return d.$a;
            };
            this.zf = function () {
              return d.Eb;
            };
            this.na = function () {
              return d.Sd;
            };
            this.L = function () {
              return d.Le ? d.l.Math.max(d.Le(Z) - d.za, 0) : 0;
            };
            this.zc = function () {
              return d.options;
            };
            this.eb = function () {
              return d.hh;
            };
            this.X = function (f, g, h, k) {
              void 0 === k && (k = d.L());
              f = d.Yh(f, g, h, k);
              d.da(f);
            };
            this.Yh = function (f, g, h, k) {
              void 0 === k && (k = d.L());
              return { type: f, data: g, L: k, M: d.Fb, event: h };
            };
            this.da = function (f) {
              f = ca(f) ? f : [f];
              d.wg && !d.Xb
                ? d.oa
                  ? ((f = y(function (g) {
                      return g.M ? g : z(g, { M: d.Fb });
                    }, f)),
                    d.zf().mg(f))
                  : ((f = y(Am, f)), d.Fe(f))
                : (d.nc = d.nc.concat(f));
            };
            this.l = c;
            var e = vf(c, this, "R");
            this.Ie = e.H(this.Ie, "s");
            this.da = e.H(this.da, "sd");
            e = O(c);
            e.o("wv2e") && ug();
            e.C("wv2e", !0);
            this.options = b;
            this.$a = ha(c);
            this.Sd = new cu(this.l, b);
            this.hh = Fu(c);
            this.bf = y(function (f) {
              return new f[0](c, d, f[1]);
            }, eh);
            this.Ai();
            this.page = Cm(this.l);
            this.Ie();
          }
          a.prototype.start = function (c) {
            this.wg = !0;
            this.Fe = c;
            this.jg();
          };
          a.prototype.stop = function () {
            dh(this.l) &&
              (B(function (c) {
                return c.stop();
              }, this.bf),
              this.Sd.stop(),
              this.Eb && this.Eb.stop(),
              this.oa || this.X("event", {}, "eof"));
          };
          a.prototype.jc = function (c, b) {
            var d = new a(c, z({}, this.options, { M: b }));
            d.start(A);
            return d;
          };
          a.prototype.Ai = function () {
            var c = this;
            this.oa = !!this.options.M;
            this.Fb = this.options.M || 0;
            this.Xb = !this.oa;
            var b = this.options.Fg || [];
            b.push(S(this.l).host);
            this.Eb = Dm(this.l, this, b);
            b = this.Eb.Kd();
            Pb(this.l)
              ? this.Xb &&
                b.D(["i"], function (d) {
                  c.oa = d.oa;
                  c.Xb = !1;
                  d.M && (c.Fb = d.M);
                  c.jg();
                })
              : (this.Xb = this.oa = !1);
          };
          a.prototype.jg = function () {
            var c = this.nc.splice(0, this.nc.length);
            this.da(c);
          };
          a.prototype.Ie = function () {
            this.Le = ag(this.l);
            this.za = this.Le(Z);
            B(function (c) {
              c.start();
            }, this.bf);
            this.Sd.start();
          };
          return a;
        })(),
        ba,
        Hu =
          ((ba = {}),
          (ba.mousemove = 0),
          (ba.mouseup = 1),
          (ba.mousedown = 2),
          (ba.click = 3),
          (ba.scroll = 4),
          (ba.windowblur = 5),
          (ba.windowfocus = 6),
          (ba.focus = 7),
          (ba.blur = 8),
          (ba.eof = 9),
          (ba.selection = 10),
          (ba.change = 11),
          (ba.input = 12),
          (ba.touchmove = 13),
          (ba.touchstart = 14),
          (ba.touchend = 15),
          (ba.touchcancel = 16),
          (ba.touchforcechange = 17),
          (ba.canvasMethod = 18),
          (ba.canvasProperty = 19),
          (ba.zoom = 20),
          (ba.resize = 21),
          (ba.mediaMethod = 22),
          (ba.mediaProperty = 23),
          (ba.keystroke = 24),
          (ba.deviceRotation = 25),
          (ba.fatalError = 26),
          (ba.hashchange = 27),
          (ba.stylechange = 28),
          ba),
        fh = fa(function (a, c) {
          var b;
          return (b = {}), (b[Wa(a)] = c), b;
        }),
        Iu = (function () {
          function a(c) {
            var b;
            this.isSync = !1;
            this.Bb = [];
            this.pf = [];
            this.l = c;
            this.Hb =
              ((b = {}),
              (b.event = F(this.Ch, this)),
              (b.page = fh({ page: 1 })),
              (b.mutation = fh({ Pi: 1 })),
              (b.activity = fh({ $g: 1 })),
              b);
            this.pf = [
              [["scroll"], { tj: 1 }],
              [["selection"], { vj: 1 }],
              [["change", "input"], { mh: 1 }],
              [["keystroke"], { Ji: 1 }, { Lc: 1 }],
              [["zoom"], { bk: 1 }],
              [["resize"], { oj: 1 }],
              [
                ["windowfocus", "windowblur", "focus", "blur", "eof"],
                { Zj: 1 }
              ],
              [["mousemove", "mouseup", "mousedown", "click"], { Ni: 1 }],
              [["deviceRotation"], { yh: 1 }],
              [["fatalError"], { Ih: 1 }],
              [
                [
                  "touchmove",
                  "touchstart",
                  "touchend",
                  "touchcancel",
                  "touchforcechange"
                ],
                { Hj: 1 },
                { touches: 1 },
                { touches: 1 }
              ],
              [["hashchange"], { wi: 1 }],
              [["stylechange"], { Aj: 1 }, { Da: 1 }, { Da: 1 }]
            ];
          }
          a.prototype.Ch = function (c) {
            var b,
              d,
              e = c.type,
              f = bb(u(U("0"), v(e, G)), this.pf);
            f || kb(Gc("vem." + e));
            "eof" === e && (this.isSync = !0);
            var g = f[1],
              h = f[2];
            f = f[3];
            var k = c.Z;
            return {
              event:
                ((b = { type: Hu[e], target: c.target, M: c.M }),
                (b[Wa(g)] = h
                  ? ((d = {}), (d[Wa(h)] = f ? k[Wa(f)] : k), d)
                  : k),
                b)
            };
          };
          a.prototype.Aa = function (c, b) {
            var d = this;
            void 0 === b && (b = !1);
            var e = ub(c, function (h) {
                var k = !X(h.partNum);
                return {
                  data: k ? void 0 : d.Hb[h.type](h.data),
                  qh: k ? h.data : void 0,
                  page: h.partNum,
                  end: h.end,
                  L: h.L
                };
              }),
              f = this.isSync || b ? Infinity : 10;
            e = xb(this.l, e, f);
            var g = [e];
            this.Bb.push(e);
            return e(
              Wc(function (h) {
                h = ce(d.l, mi, { buffer: h });
                h = xb(d.l, h, f, we);
                g.push(h);
                d.Bb.push(h);
                return h;
              })
            )(
              Wc(function (h) {
                h = Af(d.l, h.slice(-4));
                h = xb(d.l, h, f, we);
                g.push(h);
                d.Bb.push(h);
                return h;
              })
            )(
              bc(function (h) {
                h = h[h.length - 1];
                B(function (k) {
                  k = Ne(d.l)(k, d.Bb);
                  d.Bb.splice(k, 1);
                }, g);
                return h;
              })
            );
          };
          a.prototype.Ga = function (c) {
            return ce(this.l, Df, this.Hb[c.type](c.data))(xe(A));
          };
          a.prototype.Na = function (c) {
            return c[0];
          };
          a.prototype.ed = function (c, b) {
            for (
              var d = Af(this.l, c)(xe(A)),
                e = Math.ceil(d.length / b),
                f = [],
                g = 0;
              g < b;
              g += 1
            )
              f.push(d.slice(g * e, e * (g + 1)));
            return f;
          };
          a.prototype.isEnabled = function () {
            return li(this.l);
          };
          return a;
        })(),
        Ju = (function () {
          return function (a, c, b, d) {
            var e = this;
            this.qd = this.Lb = !1;
            this.Qa = [];
            this.Rf = [];
            this.lf = [];
            this.send = function (f, g, h, k) {
              f = e.sender(f, e.ic, g);
              h && k && f.then(h, k);
              return f;
            };
            this.Ke = function (f, g, h, k) {
              return new K(function (l, m) {
                f.push([g, h, l, m, k]);
              });
            };
            this.si = function () {
              e.Qa = xg(function (h, k) {
                return h[4].partNum - k[4].partNum;
              }, e.Qa);
              var f = J(
                  function (h, k, l) {
                    k = k[4];
                    return h && l + 1 === k.partNum;
                  },
                  !0,
                  e.Qa
                ),
                g = !!e.Qa[e.Qa.length - 1][4].end;
              return f && g;
            };
            this.Ed = function (f) {
              Dj(
                e.l,
                f.slice(),
                function (g) {
                  e.send(g[0], g[1], g[2], g[3]);
                },
                20,
                "s.w2.sf.fes"
              );
              f.splice(0, f.length);
            };
            this.Mh = function () {
              e.qd || ((e.qd = !0), e.Ed(e.Rf), e.Ed(e.lf));
            };
            this.oh = function (f) {
              return J(
                function (g, h) {
                  var k = "page" === h.type && !h.M,
                    l = "eof" === h.data.type,
                    m = k && !!h.partNum;
                  return { wd: g.wd || m, vd: g.vd || k, ud: g.ud || l };
                },
                { vd: !1, ud: !1, wd: !1 },
                f
              );
            };
            this.oi = function (f, g, h, k) {
              k
                ? ((f = e.Ke(e.Qa, f, g, h[0])),
                  e.si() && (e.Ed(e.Qa), (e.Lb = !0)))
                : ((e.Lb = !0), (f = e.send(f, g)));
              return f;
            };
            this.li = function (f) {
              var g;
              return e.Ei
                ? ((g = {}),
                  (g["wv-type"] = Ha(function (h) {
                    return "eof" === n(h, "data.type");
                  }, f)
                    ? "2"
                    : "8"),
                  g)
                : {};
            };
            this.Bf = function (f, g, h) {
              g = { G: e.li(h), J: Ca(), ba: g, df: !f && ki(h), Kf: e.Bi };
              f && g.J.C("bt", 1);
              return g;
            };
            this.Dh = function (f, g, h) {
              f = e.Bf(!1, f, g);
              return e.Lb ? e.send(f, h) : e.Ke(e.lf, f, h, g);
            };
            this.Qi = function (f, g, h) {
              f = e.Bf(!0, f, g);
              if (e.Lb) return e.send(f, h);
              var k = e.oh(g),
                l = k.vd,
                m = k.ud;
              k = k.wd;
              var q;
              l && (q = e.oi(f, h, g, k));
              e.qd
                ? l || (q = e.send(f, h))
                : (l || (q = e.Ke(e.Rf, f, h, g)), (e.Lb || m) && e.Mh());
              return q;
            };
            this.Ei = d;
            this.l = a;
            this.Bi = b;
            this.sender = ua(a, "W", c);
            this.ic = c;
          };
        })(),
        Ku = D("w2", function (a, c) {
          function b() {
            h = !0;
          }
          var d = O(a),
            e = N(c);
          if (
            !c.Va ||
            sd(a) ||
            !a.MutationObserver ||
            !Da("Element", a.Element) ||
            !Uc(a)
          )
            return A;
          Da("MutationObserver", a.MutationObserver) ||
            ke(a, e).warn(
              "MutationObserver is overriden, webvisor is not guaranteed to work in this environment"
            );
          var f = la(function (k, l) {
              ra(a, c, l)["catch"](k);
            }),
            g = pc(a)(Wc(C([a, c], xm)))(
              bc(function (k) {
                return new Gu(a, k);
              })
            ),
            h = !1;
          uq([g, f])(
            Ta(E(a, "wv2.R.c"), function (k) {
              var l = k[0];
              k = k[1];
              if (!h) {
                b = function () {
                  h || ((h = !0), l && l.stop());
                };
                var m = d.o("wv2Counter");
                if (!Ai(a, k) || m) b();
                else if (
                  (ha(a).D(a, ["beforeunload", "unload"], b),
                  d.C("wv2Counter", e),
                  d.C("stopRecorder", b),
                  (k = [new cf(a)]),
                  k.unshift(new Iu(a)),
                  (k = bb(function (t) {
                    return t.isEnabled();
                  }, k)))
                ) {
                  m = new Ju(
                    a,
                    c,
                    !(k instanceof cf),
                    Pr.WEBVISOR2_JSONGZIP_SERIALISER_FEATURE
                  );
                  var q = $g.Jd(e, "m", F(m.Qi, m), k, a),
                    p = $g.Jd(e, "e", F(m.Dh, m), k, a);
                  k = zm();
                  m = k.Yi;
                  p.D("ag", k.bh);
                  p.D("p", m);
                  q.D("see", function (t) {
                    var x = !1;
                    B(function (L) {
                      "page" === L.type && (x = !0);
                    }, t);
                    x &&
                      (h ||
                        p.push({
                          type: "event",
                          data: {
                            type: "fatalError",
                            Z: {
                              code: "invalid-snapshot",
                              Eh: "p.s.f",
                              stack: ""
                            }
                          }
                        }),
                      b());
                  });
                  var r = cb(function (t) {
                    "eof" === n(t, "data.type")
                      ? (p.push(t), q.push(t), p.flush(), q.flush())
                      : ("event" === t.type ? p : q).push(t);
                  });
                  W(a, b, 864e5);
                  Gb(a, function () {
                    l.start(r);
                  });
                }
              }
            })
          );
          return function () {
            return b();
          };
        }),
        Lu = fa(function (a, c) {
          0 === parseFloat(n(c, "settings.c_recp")) &&
            (a.ce.C("ymoo" + a.Xa, a.Bg(qb)),
            a.yd && a.yd.destruct && a.yd.destruct());
        }),
        Mu = D("wsa", function (a, c) {
          var b = { Xa: N(c), yd: ya(a, c), Bg: da(a), ce: Ka(a) },
            d = b.Bg(qb);
          if (b.ce.Ud) return !1;
          var e = b.ce.o("ymoo" + b.Xa);
          if (e && 30 > d - e) return !0;
          ra(a, c, Lu(b))["catch"](E(a, "d.f"));
          return !1;
        }),
        Nu = u(Mi, od(",")),
        Ou = (function (a) {
          return function (c) {
            var b = Va(c);
            if (!b) return "";
            b = b("canvas");
            var d = [],
              e = a(),
              f = e.Hh;
            e = e.xh;
            try {
              var g = ia("getContext", b);
              d = y(u(M, g), e);
            } catch (h) {
              return "";
            }
            return (g = bb(M, d)) ? f(c, { canvas: b, bc: g }) : "";
          };
        })(function () {
          return { xh: ht, Hh: sm };
        }),
        pm = ["name", "lang", "localService", "voiceURI", "default"],
        lm = w(function (a, c) {
          return ra(a, c, U("settings.form_goals"));
        }, Ab),
        Pu = v(!0, zh),
        Qu = D("s.f.i", function (a, c) {
          var b = [];
          ha(a).D(a, ["click"], E(a, "s.f.c", C([a, c, b], km)));
          ha(a).D(
            a,
            ["submit"],
            E(a, "s.f.e", u(U("target"), C([a, c, b], Pu)))
          );
          Bh(a, c, "Form goal. Counter " + c.id + ". Init.");
        }),
        Hl = A,
        Ru = ib("isp.stat", function (a, c) {
          return new K(function (b, d) {
            if (dk(a, Xk, "isp")) {
              var e = function (f) {
                ("1" === f ? b : d)();
                Hl();
                Xi(Xk, "isp");
              };
              Hl = ha(a).D(a, ["message"], C([a, c, e], jm));
              W(a, e, 1500);
            } else d();
          });
        }),
        Su = ib("isp", function (a, c) {
          ra(a, c, function (b) {
            var d = bb(
              function (h) {
                return n(b, "settings." + h);
              },
              ["rt", "mf"]
            );
            if (d && Pe(a)) {
              var e = wi(b) && !ne(a),
                f = N(c),
                g = Aj(c);
              g[f] = { Wc: d, status: e ? 3 : 4 };
              if (!e)
                return (
                  (d = im(a, c, d)),
                  Ru(a, d)
                    .then(function () {
                      g[f].status = 1;
                    })
                    ["catch"](function () {
                      g[f].status = 2;
                    })
                );
            }
          })["catch"](E(a, "l.isp"));
        }),
        Tu = /,/g,
        Il = /[^\d.,]/g,
        Uu = /[.,]$/,
        rh = D("ep.pp", function (a, c) {
          if (!c) return 0;
          a: {
            var b = c.replace(Il, "").replace(Uu, "");
            var d = "0" === b[b.length - 1];
            for (var e = b.length; 0 < e && !(3 < b.length - e + 1 && d); --e) {
              var f = b[e - 1];
              if (G(f, [",", "."])) {
                d = f;
                break a;
              }
            }
            d = "";
          }
          b = d ? c.split(d) : [c];
          d = d ? b[1] : "00";
          b = parseFloat(Nb(b[0]) + "." + Nb(d));
          d = Math.pow(10, 8) - 0.01;
          a.isNaN(b)
            ? (b = 0)
            : ((b = a.Math.min(b, d)), (b = a.Math.max(b, 0)));
          return b;
        }),
        Vu = [
          [["EUR", "\u20ac"], "978"],
          [["USD", "\u0423\\.\u0415\\.", "\\$"], "840"],
          [["UAH", "\u0413\u0420\u041d", "\u20b4"], "980"],
          [
            "\u0422\u0413 KZT \u20b8 \u0422\u04a2\u0413 TENGE \u0422\u0415\u041d\u0413\u0415".split(
              " "
            ),
            "398"
          ],
          [["GBP", "\u00a3", "UKL"], "826"],
          [
            "RUR RUB \u0420 \u0420\u0423\u0411 \u20bd P \u0420UB P\u0423\u0411 P\u0423B PY\u0411 \u0420Y\u0411 \u0420\u0423B P\u0423\u0411".split(
              " "
            ),
            "643"
          ]
        ],
        Wu = w(function (a) {
          return new RegExp(a.join("|"), "i");
        }),
        Xu = D("ep.cp", function (a) {
          if (!a) return "643";
          var c = Yh(a);
          return (a = bb(function (b) {
            return Wu(b[0]).test(c);
          }, Vu))
            ? a[1]
            : "643";
        }),
        Jl = w(function () {
          function a() {
            var k = h + "0",
              l = h + "1";
            f[k]
              ? f[l]
                ? ((h = h.slice(0, -1)), --g)
                : ((e[l] = b(8)), (f[l] = 1))
              : ((e[k] = b(8)), (f[k] = 1));
          }
          function c() {
            var k = h + "1";
            f[h + "0"]
              ? f[k]
                ? ((h = h.slice(0, -1)), --g)
                : ((h += "1"), (f[h] = 1))
              : ((h += "0"), (f[h] = 1));
          }
          function b(k) {
            void 0 === k && (k = 1);
            var l = d.slice(g, g + k);
            g += k;
            return l;
          }
          for (
            var d = vh(
                "Cy2FcreLJLpYXW3BXFJqldVsGMwDcBw2BGnHL5uj1TKstzse3piMo3Osz+EqDotgqs1TIoZvKtMKDaSRFztgUS8qkqZcaETgKWM54tCpTXjV5vW5OrjBpC0jF4mspUBQGd95fNSfv+vz+g+Hze33Hg8by+Yen1PP6zsdl7PQCwX9mf+f7FMb9x/Pw+v2Pp8Xy74eTwuBwTt913u4On1XW6hxOO5nIzFam00tC218S0kaeugpqST+XliLOlMoTpRQkuewUxoy4CT3efWtdFjSAAm+1BkjIhyeU4vGOf13a6U8wzNY4bGo6DIUemE7N3SBojDr7ezXahpWF022y8mma1NuTnZbq8XZZlPStejfG/CsbPhV6/bSnA=="
              ).join(""),
              e = {},
              f = {},
              g = 1,
              h = "";
            g < d.length - 1;

          )
            ("0" === b() ? c : a)();
          return e;
        }),
        Yu = w(function () {
          var a = Jl(),
            c = aa(a);
          return J(
            function (b, d) {
              b[a[d]] = d;
              return b;
            },
            {},
            c
          );
        }),
        cm = D("ep.dec", function (a, c) {
          if (!c || sd(a)) return [];
          var b = vh(c),
            d = b[1],
            e = b[2],
            f = b.slice(3);
          if (2 !== Oe(b[0])) return [];
          b = Jl();
          f = f.join("");
          e = Oe(d + e);
          var g = "";
          d = "";
          for (var h = 0; d.length < e && f[h]; )
            (g += f[h]),
              b[g] && ((d += String.fromCharCode(Oe(b[g]))), (g = "")),
              (h += 1);
          b = "";
          for (f = 0; f < d.length; )
            (e = d.charCodeAt(f)),
              128 > e
                ? ((b += String.fromCharCode(e)), f++)
                : 191 < e && 224 > e
                ? ((g = d.charCodeAt(f + 1)),
                  (b += String.fromCharCode(((e & 31) << 6) | (g & 63))),
                  (f += 2))
                : ((g = d.charCodeAt(f + 1)),
                  (b += String.fromCharCode(
                    ((e & 15) << 12) |
                      ((g & 63) << 6) |
                      (d.charCodeAt(f + 2) & 63)
                  )),
                  (f += 3));
          d = Fb(a, b);
          return ca(d) ? d : [];
        }),
        Kl = cb(Oe),
        em = D("ep.ent", function (a, c, b) {
          a = "" + Pa(a, 10, 99);
          b = "" + 100 * c + b + a;
          if (16 < xa(b)) return "";
          b = Td("0", 16, b);
          c = b.slice(0, 8);
          b = b.slice(-8);
          c = (+c ^ 92844).toString(35);
          b = (+b ^ 92844).toString(35);
          return "" + c + "z" + b;
        }),
        gm = D("ep.enn", function (a, c) {
          var b = Yu(),
            d = "",
            e = fb(a, c);
          if (!e || 2e4 < xa(e)) return d;
          e = tj(e);
          d = Td("0", 24, xa(e).toString(2));
          d = Kl(uh(a, d, 8));
          e = J(
            function (f, g) {
              var h = Td("0", 8, g.toString(2));
              return (h = b[h]) ? f + h : f;
            },
            "",
            e
          );
          e = uh(a, e, 8, "1");
          e = Kl(e);
          d = Ra(Ra([2], d), e);
          return (d = Ff(d));
        }),
        Zu = D("ep.qp", function (a) {
          a = a.replace(Il, "").replace(Tu, ".");
          return parseFloat(a) || 0;
        }),
        Ll = u(qh, Xu),
        Ml = u(Sd, cb(Zu)),
        Nl = D("ep.ctp", function (a, c, b, d, e, f, g) {
          var h = Ll(a, b),
            k = ph(a, d),
            l = sh(a, e),
            m = Ml(a, f),
            q = Sd(a, g);
          oh(a, c, h, k, l, m, q);
          if (Da("MutationObserver", a.MutationObserver)) {
            var p = l,
              r = m,
              t = q,
              x = !1;
            new a.MutationObserver(function () {
              var L = Ll(a, b),
                R = ph(a, d);
              p = sh(a, e);
              r = Ml(a, f);
              t = Sd(a, g);
              x = Ha(v(l, nf), p) || Ha(v(m, nf), r) || Ha(v(q, nf), t);
              if (h !== L || k !== R || x)
                (h = L),
                  (k = R),
                  (l = p),
                  (m = r),
                  (q = t),
                  oh(a, c, h, k, l, m, q);
            }).observe(a.document.body, {
              attributes: !0,
              childList: !0,
              subtree: !0,
              characterData: !0
            });
          }
        }),
        $u = D("ep.chp", function (a, c, b, d, e) {
          b && mf(a, c);
          return d || e
            ? ha(a).D(
                a.document,
                ["click"],
                E(a, "ep.chp.cl", C([a, c, d, e], dm))
              )
            : A;
        }),
        av = D("ep.i", function (a, c) {
          return Uc(a)
            ? bm(a, c).then(function (b) {
                var d = b.zh,
                  e = d[0],
                  f = d[1],
                  g = d[2],
                  h = d[3],
                  k = d[4],
                  l = d[5],
                  m = d[6],
                  q = d[7],
                  p = d[8],
                  r = d[9],
                  t = d[10],
                  x = d[11],
                  L = d[12],
                  R = d[13],
                  Y = d[14],
                  ta = d[15];
                if (!b.isEnabled) return K.resolve(A);
                var Lb = Qd(a, e),
                  pb = Qd(a, h),
                  Wb = Qd(a, m),
                  Xc = Qd(a, p),
                  Sg = "" + e + f + g === "" + h + k + l;
                return new K(function (jc, kc) {
                  pc(a)(
                    Ta(kc, function () {
                      Lb && Nl(a, c, f, g, t, x, L);
                      pb && !Sg && Nl(a, c, k, l, R, Y, ta);
                      jc($u(a, c, Wb || Xc, q, r));
                    })
                  );
                });
              })
            : K.resolve(A);
        }),
        bv = /[\*\.\?\(\)]/g,
        cv = w(function (a, c, b) {
          try {
            var d = b.replace("\\s", " ").replace(bv, "");
            ke(a, "").warn(
              'Function "' +
                d +
                '" has been overriden, this may cause issues with Metrika counter'
            );
          } catch (e) {}
        }, Ab),
        dv = D("r.nn", function (a) {
          zf(a).isEnabled &&
            ze(a, Bg, function (c) {
              c.ra.D(function (b) {
                cv(a, b[1], b[0]);
                Bg.splice(100);
              });
            });
        }),
        ev = D(
          "lt.p",
          ib("lt.p", function (a) {
            var c;
            if (Da("PerformanceObserver", a.PerformanceObserver)) {
              var b = 0,
                d = new a.PerformanceObserver(
                  E(a, "lt.o", function (e) {
                    e &&
                      e.getEntries &&
                      ((e = e.getEntries()),
                      (b = J(
                        function (f, g) {
                          return f + g.duration;
                        },
                        b,
                        e
                      )),
                      ic(a).C("lt", b));
                  })
                );
              try {
                d.observe(
                  ((c = {}), (c.type = "longtask"), (c.buffered = !0), c)
                );
              } catch (e) {
                return A;
              }
              return function () {
                return d.disconnect();
              };
            }
            return A;
          })
        );
      "function" == typeof Promise && Promise.resolve();
      var ad = { position: "absolute" },
        nh = { position: "fixed" },
        fv = u(U("settings.sm"), ka(1)),
        gv = ib("siteStatistics", function (a, c) {
          return pc(a)(
            Ta(
              A,
              C(
                [
                  a,
                  c,
                  function (b) {
                    return fv(b) ? am(a, c.id) : A;
                  }
                ],
                ra
              )
            )
          );
        }),
        Ol = D("fbq.o", function (a, c, b) {
          var d = n(a, "fbq");
          if (d && d.callMethod) {
            var e = function () {
              var g = Aa(arguments),
                h = d.apply(void 0, g);
              c(g);
              return h;
            };
            z(e, d);
            b && B(c, b);
            a.fbq = e;
          } else var f = W(a, C([a, c, va(sa(d && d.queue))], Ol), 1e3, "fbq.d");
          return F(ja, null, a, f);
        }),
        Zc,
        Db,
        $c,
        gh =
          ((Zc = {}),
          (Zc.add_to_wishlist = "add-to-wishlist"),
          (Zc.begin_checkout = "begin-checkout"),
          (Zc.generate_lead = "submit-lead"),
          (Zc.add_payment_info = "add-payment-info"),
          Zc),
        hh =
          ((Db = {}),
          (Db.AddToCart = "add-to-cart"),
          (Db.Lead = "submit-lead"),
          (Db.InitiateCheckout = "begin-checkout"),
          (Db.Purchase = "purchase"),
          (Db.CompleteRegistration = "register"),
          (Db.Contact = "submit-contact"),
          (Db.AddPaymentInfo = "add-payment-info"),
          (Db.AddToWishlist = "add-to-wishlist"),
          (Db.Subscribe = "subscribe"),
          Db),
        Zl =
          (($c = {}),
          ($c["1"] = gh),
          ($c["2"] = gh),
          ($c["3"] = gh),
          ($c["0"] = hh),
          $c),
        $l = [hh.AddToCart, hh.Purchase],
        hv = fa(function (a, c) {
          var b = n(c, "ecommerce"),
            d = n(c, "event") || "";
          if (!(b = b && d && { version: "3", sc: d }))
            a: {
              if (ca(c) || xa(c))
                if (((b = Aa(c)), (d = b[1]), "event" === b[0] && d)) {
                  b = { version: "2", sc: d };
                  break a;
                }
              b = void 0;
            }
          b ||
            (b = (b = n(c, "ecommerce")) && {
              version: "1",
              sc: H(",", aa(b))
            });
          b && a(b);
        }),
        iv = D("ag.e", function (a, c) {
          var b = [],
            d = E(a, "ag.s", C([Oa, b], B));
          "0" === c.$ &&
            ra(a, c, function (e) {
              if (
                n(e, "settings.auto_goals") &&
                ya(a, c) &&
                (e = Wd(a, c, "autogoal"))
              ) {
                e = C([e, c.qc], Yl);
                var f = hv(e);
                e = C([a, e], Xl);
                b.push(Ol(a, e));
                b.push(
                  df(a, "dataLayer", function (g) {
                    g.ra.D(f);
                  })
                );
              }
            });
          return d;
        }),
        Pl = w(function (a) {
          return (
            n(a, "crypto.subtle.digest") &&
            n(a, "TextEncoder") &&
            n(a, "FileReader") &&
            n(a, "Blob")
          );
        }),
        jv = D("fpm", function (a, c) {
          if (!Zk(a)) return A;
          var b = N(c);
          if (!Pl(a)) return tb(a, b, "Not supported"), A;
          var d = ya(a, c);
          return d
            ? function (e) {
                return new K(function (f, g) {
                  return rb(e)
                    ? aa(e).length
                      ? f(
                          kh(a, e).then(function (h) {
                            var k, l;
                            h &&
                              h.length &&
                              d.params(
                                ((k = {}),
                                (k.__ym = ((l = {}), (l.fpp = h), l)),
                                k)
                              );
                          }, A)
                        )
                      : g(ab("fpm.l"))
                    : g(ab("fpm.o"));
                })["catch"](E(a, "fpm.en"));
              }
            : A;
        }),
        kv = D("p.sci", function (a, c) {
          var b = O(a);
          return b.o("scip")
            ? K.resolve()
            : ra(a, c, M).then(function (d) {
                d = n(d, "settings.ins");
                return !b.o("scip") && d ? ih(a, c, b) : null;
              }, E(a, "ins.cs"));
        }),
        lv = Sa(/[a-z\u0430-\u044f,.]/gi),
        mv = D("ice", function (a, c, b) {
          var d = ya(a, c);
          if (d) {
            var e = n(b, "target");
            if (e && ((c = n(e, "value")), (c = sb(c)) && !(100 <= xa(c)))) {
              b = Nb(c);
              var f = 0 < c.indexOf("@"),
                g = "tel" === n(e, "type") || (!f && xa(b));
              if (f || g) {
                if (g) {
                  if (lv(c)) return;
                  g = c[0];
                  var h = b[0];
                  if (g !== h && "+" !== g) return;
                  var k = c[1];
                  if ("+" === g && k !== h) return;
                  c = c[xa(c) - 1];
                  g = b[xa(b) - 1];
                  if (c !== g) return;
                  c = b;
                }
                b = f ? 5 : 11;
                g = f ? 100 : 16;
                xa(c) < b ||
                  xa(c) > g ||
                  lh(a, c).then(function (l) {
                    var m,
                      q,
                      p,
                      r = rg(a, e);
                    d.params(
                      ((m = {}),
                      (m.__ym =
                        ((q = {}),
                        (q.fi = yj(
                          ((p = {}), (p.a = f ? 1 : 0), (p.b = r), (p.c = l), p)
                        ).Aa()),
                        q)),
                      m)
                    );
                  }, E(a, "ice.s"));
              }
            }
          }
        }),
        nv = ["text", "email", "tel"],
        ov = ["cc-", "name", "shipping"],
        pv = D("icei", function (a, c) {
          return (
            Uc(a) &&
            Pl(a) &&
            pc(a)(
              Ta(
                A,
                C(
                  [
                    a,
                    c,
                    function (b) {
                      var d = n(b, "settings.cf");
                      b = Xd(a) || n(b, "settings.eu");
                      if (d && !b) {
                        var e = ha(a);
                        d = jb("input", a.document.body);
                        B(function (f) {
                          Mf(a, f) ||
                            !G(f.type, nv) ||
                            Ha(M, y(v(f.autocomplete, Cd), ov)) ||
                            e.D(f, ["blur"], C([a, c], mv));
                        }, zd(d));
                      }
                    }
                  ],
                  ra
                )
              )
            )
          );
        }),
        qv = ib("gic", pv),
        lc = O(window);
      lc.Ha("hitParam", {});
      lc.Ha("lastReferrer", window.location.href);
      lc.Ha("getCounters", Zs(window));
      Xf.push(Dt);
      (function () {
        var a,
          c,
          b,
          d = Hb([Ub]);
        z(pa, ((a = {}), (a.s = d), (a.S = d), (a.u = Dc), a));
        z(qa, ((c = {}), (c.s = Mb), (c.S = Ya), (c.u = Mb), c));
        z(
          wa,
          ((b = {}),
          (b.s = []),
          (b.u = []),
          (b.S = [xc(["v", "hid", "u", "vf", "rn"])]),
          b)
        );
        Yg.push(D("s", jo));
      })();
      qa["8"] = Mb;
      pa["8"] = [Wj];
      Yg.push(function (a, c) {
        return ra(a, c, function (b) {
          var d,
            e = n(b, "settings.sbp");
          return (
            e &&
            ui(a, b, {
              Za: c,
              Wc: "8",
              data: z({}, e, ((d = {}), (d.c = c.id), d)),
              $d: "cs"
            })
          );
        });
      });
      (function () {
        var a = [];
        a.push(Qg);
        a.push(qe());
        wa.p = a;
        qa.p = re;
        pa.p = Hb([0, Ub]);
        zl.push(Ct);
      })();
      var Ql = (function () {
        return function (a, c, b, d) {
          var e = this;
          return E(window, "c.i", function () {
            (!window || (isNaN(a) && !a)) && ug();
            var f = window,
              g = $q(a, Vk, c, b, d);
            if (!window["disableYaCounter" + g.id]) {
              var h = N(g);
              g.id || tb(f, h, "Invalid Metrika id: " + g.id);
              var k = lc.o("counters", {}),
                l = [],
                m = [Lk, Me, Kk];
              m.unshift(Mr);
              var q = function (R, Y) {
                  R && (T(R) ? l.push(R) : Y && l.push(R[Y]));
                },
                p = function (R, Y) {
                  var ta = Me(f, g, "", R)(f, g);
                  ta &&
                    (T(ta.then)
                      ? ta.then(function (Lb) {
                          return q(Lb, Y);
                        })
                      : q(ta, Y));
                  return ta;
                },
                r = y(function (R) {
                  return v(R, p);
                }, zl),
                t = function (R, Y, ta) {
                  e[Y] = Or(f, g, ta || m, Y, R);
                };
              if (k[h])
                return (
                  tb(f, h, "Duplicate counter " + h + " initialization"), k[h]
                );
              var x = !1,
                L = lc.o("hitParam", {});
              L[h] && (x = !(!Eg(g.$) || k[h]));
              L[h] = 1;
              e._webvisor = g.Va || !1;
              k[h] = e;
              lc.C("counters", k);
              lc.Ha("counter", e);
              p(gv);
              L = $s(window, g);
              l.push(L);
              Xd(window);
              Mu(window, g) && delete k[h];
              p(Zt);
              Xt(f, [Ou, Nu, um, Qi, qm, Li, vl, Ni, nm, mm, rm]);
              r.push(v(Ds, p));
              r.push(v(kv, p));
              p(Xs);
              r.push(v(Lm, p));
              r.push(v(qv, p));
              p(St);
              p(Tt);
              t(Ys(f, g), "hit");
              t(Ft(f, g), "params");
              h = p(at, Wa({ unsubscribe: 1 }));
              e.trackHash = Me(f, g, "", n(h, Wa({ Lj: 1 })));
              t(Wd(f, g), "reachGoal");
              t(Gt(f, g), "experiments");
              p(Vt);
              x || r.push(v(rt, p));
              l.push(iv(f, g));
              x = p(dt, Wa({ Cd: 1 }));
              t(n(x, Wa({ Ui: 1 })), "notBounce");
              h = p(jv);
              t(h, "firstPartyParams");
              t(C([f, g], Ul), "firstPartyParamsHashed");
              t(n(x, Wa({ Zb: 1 })), "accurateTrackBounce");
              p(Ht);
              x = p(gt, Wa({ Cd: 1 }));
              t(n(x, Wa({ Fh: 1 })), "extLink");
              t(n(x, Wa({ ah: 1 })), "addFileExtension");
              t(n(x, Wa({ file: 1 })), "file");
              t(n(x, Wa({ hd: 1 })), "trackLinks");
              l.push(Kt(f, g));
              l.push(Lt(f));
              t(Mt(f, g), "ecommerceAdd");
              t(Nt(f, g), "ecommerceRemove");
              t(Ot(f, g), "ecommerceDetail");
              t(Pt(f, g), "ecommercePurchase");
              x = p(Ut);
              t(x || A, "userParams");
              t(Wt(f, g, l), "destruct", [Lk, Kk]);
              p(ws);
              x = p($t);
              t(x || A, "setUserID");
              e.getClientID = p(au) || A;
              p(kt);
              t(tt(f, g), "clickmap");
              (x = p(av)) && x.then(ia("push", l));
              p(st);
              t(ut(f, g), "enableAll");
              p(Qu);
              p(Su);
              p(vt);
              p(wt);
              p(jt);
              p(ev);
              r.push(v(Rt, p));
              (t = p(xt)) && t.then(ia("push", l));
              Gb(
                f,
                C(
                  [
                    f,
                    r,
                    function (R) {
                      p(R);
                    },
                    1,
                    "a.i"
                  ],
                  Dj
                )
              );
              p(jn);
              p(Ku);
              dv(f);
              B(function (R) {
                return p(R);
              }, Yg);
            }
          })();
        };
      })();
      (function (a) {
        var c = O(a);
        c.o("i") || (c.C("i", !0), ha(a).D(a, ["message"], v(a, Rm)));
      })(window);
      if (window.Ya && Ql) {
        var Rl = na.ec;
        window.Ya[Rl] = Ql;
        et(window);
        var Sl = window.Ya[Rl];
        Sl.informer = Xo(window);
        Sl.counters = lc.o("getCounters");
      }
      (function (a) {
        var c = n(a, "ym");
        if (c) {
          var b = n(c, "a");
          b || ((c.a = []), (b = c.a));
          var d = ji(a);
          ze(
            a,
            b,
            function (e) {
              e.ra.D(d);
            },
            !0
          );
        }
      })(window);
    })();
  } catch (ih) {}
}.call(this));
