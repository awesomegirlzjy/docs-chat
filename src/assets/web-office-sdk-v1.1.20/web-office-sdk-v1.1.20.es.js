var e = function () {
  return (e =
    Object.assign ||
    function (e) {
      for (var n, t = 1, r = arguments.length; t < r; t++)
        for (var i in (n = arguments[t]))
          Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
      return e;
    }).apply(this, arguments);
};
function n(e, n, t, r) {
  return new (t || (t = Promise))(function (i, a) {
    function o(e) {
      try {
        c(r.next(e));
      } catch (e) {
        a(e);
      }
    }
    function s(e) {
      try {
        c(r.throw(e));
      } catch (e) {
        a(e);
      }
    }
    function c(e) {
      var n;
      e.done
        ? i(e.value)
        : ((n = e.value),
          n instanceof t
            ? n
            : new t(function (e) {
                e(n);
              })).then(o, s);
    }
    c((r = r.apply(e, n || [])).next());
  });
}
function t(e, n) {
  var t,
    r,
    i,
    a,
    o = {
      label: 0,
      sent: function () {
        if (1 & i[0]) throw i[1];
        return i[1];
      },
      trys: [],
      ops: [],
    };
  return (
    (a = { next: s(0), throw: s(1), return: s(2) }),
    'function' == typeof Symbol &&
      (a[Symbol.iterator] = function () {
        return this;
      }),
    a
  );
  function s(a) {
    return function (s) {
      return (function (a) {
        if (t) throw new TypeError('Generator is already executing.');
        for (; o; )
          try {
            if (
              ((t = 1),
              r &&
                (i =
                  2 & a[0]
                    ? r.return
                    : a[0]
                      ? r.throw || ((i = r.return) && i.call(r), 0)
                      : r.next) &&
                !(i = i.call(r, a[1])).done)
            )
              return i;
            switch (((r = 0), i && (a = [2 & a[0], i.value]), a[0])) {
              case 0:
              case 1:
                i = a;
                break;
              case 4:
                return (o.label++, { value: a[1], done: !1 });
              case 5:
                (o.label++, (r = a[1]), (a = [0]));
                continue;
              case 7:
                ((a = o.ops.pop()), o.trys.pop());
                continue;
              default:
                if (
                  !(i = (i = o.trys).length > 0 && i[i.length - 1]) &&
                  (6 === a[0] || 2 === a[0])
                ) {
                  o = 0;
                  continue;
                }
                if (3 === a[0] && (!i || (a[1] > i[0] && a[1] < i[3]))) {
                  o.label = a[1];
                  break;
                }
                if (6 === a[0] && o.label < i[1]) {
                  ((o.label = i[1]), (i = a));
                  break;
                }
                if (i && o.label < i[2]) {
                  ((o.label = i[2]), o.ops.push(a));
                  break;
                }
                (i[2] && o.ops.pop(), o.trys.pop());
                continue;
            }
            a = n.call(e, o);
          } catch (e) {
            ((a = [6, e]), (r = 0));
          } finally {
            t = i = 0;
          }
        if (5 & a[0]) throw a[1];
        return { value: a[0] ? a[1] : void 0, done: !0 };
      })([a, s]);
    };
  }
}
var r = (function () {
  function e() {}
  return (
    (e.add = function (n) {
      (e.HANDLE_LIST.push(n), window.addEventListener('message', n, !1));
    }),
    (e.remove = function (n) {
      var t = e.HANDLE_LIST.indexOf(n);
      (t >= 0 && e.HANDLE_LIST.splice(t, 1),
        window.removeEventListener('message', n, !1));
    }),
    (e.empty = function () {
      for (; e.HANDLE_LIST.length; )
        window.removeEventListener('message', e.HANDLE_LIST.shift(), !1);
    }),
    (e.parse = function (e) {
      try {
        if (e && 'string' == typeof e) {
          var n = e.indexOf('"__objName":') >= 0,
            t = JSON.parse(e);
          return (n && (t.hasInnerObj = !0), t);
        }
        return e;
      } catch (e) {
        console.log('Message.parse Error:', e);
      }
    }),
    (e.HANDLE_LIST = []),
    e
  );
})();
function i(e) {
  if (!e) return !1;
  for (var n = e; null !== Object.getPrototypeOf(n); )
    n = Object.getPrototypeOf(n);
  return Object.getPrototypeOf(e) === n;
}
function a(e) {
  return '[object Function]' === {}.toString.call(e);
}
var o,
  s,
  c,
  u,
  l = { origin: '' };
function d(e, n) {
  l[e] = n;
}
function f(e) {
  return l[e];
}
function p(e) {
  var n = f('whiteList') || [],
    t = f('origin');
  return (
    !!(function (e, n, t) {
      return (
        !t.includes(n) &&
        e !== n &&
        (e.replace(/www\./i, '').toLowerCase() !==
          n.replace(/www\./i, '').toLowerCase() ||
          (e.match('www.') ? void 0 : (d('origin', n), !1)))
      );
    })(t, e.origin, n) &&
    (console.warn('postMessage 域名检查不通过', {
      safeOrigin: t,
      eventOrigin: e.origin,
    }),
    !0)
  );
}
(!(function (e) {
  ((e.unknown = 'unknown'),
    (e.spreadsheet = 's'),
    (e.writer = 'w'),
    (e.presentation = 'p'),
    (e.pdf = 'f'));
})(o || (o = {})),
  (function (e) {
    ((e.wps = 'w'), (e.et = 's'), (e.presentation = 'p'), (e.pdf = 'f'));
  })(s || (s = {})),
  (function (e) {
    ((e.nomal = 'nomal'), (e.simple = 'simple'));
  })(c || (c = {})),
  (function (e) {
    ((e[(e.requestFullscreen = 1)] = 'requestFullscreen'),
      (e[(e.exitFullscreen = 0)] = 'exitFullscreen'));
  })(u || (u = {})));
var v,
  h,
  b,
  m =
    ((v = 0),
    function () {
      return (v += 1);
    }),
  w = function (e, n, t) {
    void 0 === t && (t = !0);
    var r = n;
    if (!h) {
      var i = function e(n) {
        var t = n.clientHeight;
        var r = n.clientWidth;
        0 !== t || 0 !== r || b
          ? (0 === t && 0 === r) || !b || (b.disconnect(), (b = null))
          : window.ResizeObserver &&
            (b = new ResizeObserver(function (t) {
              e(n);
            })).observe(n);
        h.style.cssText += 'height: ' + t + 'px; width: ' + r + 'px';
      }.bind(null, r);
      (h = document.createElement('iframe')).classList.add('web-office-iframe');
      var a = {
        id: 'office-iframe',
        src: e,
        scrolling: 'no',
        frameborder: '0',
        allowfullscreen: 'allowfullscreen',
        webkitallowfullscreen: 'true',
        mozallowfullscreen: 'true',
        allow: 'clipboard-read; clipboard-write',
      };
      for (var o in (r
        ? ((a.style =
            'width: ' +
            r.clientWidth +
            'px; height: ' +
            r.clientHeight +
            'px;'),
          t && window.addEventListener('resize', i))
        : ((r = document.createElement('div')).classList.add(
            'web-office-default-container'
          ),
          (function (e) {
            var n = document.createElement('style');
            document.head.appendChild(n);
            var t = n.sheet;
            t.insertRule(e, t.cssRules.length);
          })(
            '.web-office-default-container {position: absolute; padding: 0;  margin: 0; width: 100%; height: 100%; left: 0; top: 0;}'
          ),
          document.body.appendChild(r),
          (a.style =
            'position: fixed; top: 0; right: 0; bottom: 0; left: 0; width: 100%; height: 100%;')),
      R &&
        window.visualViewport &&
        window.visualViewport.addEventListener('resize', g),
      a))
        h.setAttribute(o, a[o]);
      (r.appendChild(h),
        (h.destroy = function () {
          (h.parentNode.removeChild(h),
            (h = null),
            window.removeEventListener('resize', i),
            b && (b.disconnect(), (b = null)));
        }));
    }
    return h;
  };
function g() {
  var e = window.visualViewport,
    n = e.width,
    t = e.height,
    r = document.body.clientHeight - h.clientHeight;
  y({ eventName: 'visualViewportResize', data: { width: n, height: t - r } });
}
var y = function (e) {
  w().contentWindow &&
    w().contentWindow.postMessage(JSON.stringify(e), f('realOrigin'));
};
function k(e, n, t) {
  return new Promise(function (i) {
    var a = m(),
      o = function (e) {
        if (!p(e)) {
          var n = r.parse(e.data);
          n.eventName === t && n.msgId === a && (i(n.data), r.remove(o));
        }
      };
    (r.add(o), y({ data: e, msgId: a, eventName: n }));
  });
}
var O = function (e) {
    return k(e, 'wps.jssdk.api', 'wps.api.reply');
  },
  j = function (e) {
    return k(e, 'api.basic', 'api.basic.reply');
  },
  I = { idMap: {} },
  E = {};
function x(e, r) {
  return n(this, void 0, void 0, function () {
    var n, i, a, o;
    return t(this, function (t) {
      switch (t.label) {
        case 0:
          return 'api.callback' === e.eventName &&
            e.callbackId &&
            E[e.callbackId]
            ? ((n = e.data.args), e.hasInnerObj ? [4, _(n, r)] : [3, 2])
            : [3, 5];
        case 1:
          return ((a = t.sent()), [3, 3]);
        case 2:
          ((a = n), (t.label = 3));
        case 3:
          return ((i = a), [4, E[e.callbackId].apply(E, i)]);
        case 4:
          ((o = t.sent()),
            y({
              result: o,
              eventName: 'api.callback.reply',
              callbackId: e.callbackId,
            }),
            (t.label = 5));
        case 5:
          return [2];
      }
    });
  });
}
function _(e, r) {
  return n(this, void 0, void 0, function () {
    var n, a, o, s, c, u, l, d, f, p;
    return t(this, function (t) {
      switch (t.label) {
        case 0:
          if (!Array.isArray(e)) return [3, 5];
          ((s = []), (n = 0), (t.label = 1));
        case 1:
          return n < e.length ? ((o = (a = s).push), [4, _(e[n], r)]) : [3, 4];
        case 2:
          (o.apply(a, [t.sent()]), (t.label = 3));
        case 3:
          return ((n += 1), [3, 1]);
        case 4:
          return [2, s];
        case 5:
          if (
            (function (e) {
              return 'object' == typeof e && e.__objId && e.__objName;
            })(e)
          )
            return [2, r(e.__objId, e.__objName) || e];
          if (!i(e)) return [3, 10];
          for (u in ((s = {}), (c = []), e)) c.push(u);
          ((l = 0), (t.label = 6));
        case 6:
          return l < c.length
            ? ((d = c[l]),
              e.hasOwnProperty(d)
                ? ((f = s), (p = d), [4, _(e[d], r)])
                : [3, 8])
            : [3, 9];
        case 7:
          ((f[p] = t.sent()), (t.label = 8));
        case 8:
          return (l++, [3, 6]);
        case 9:
          return [2, s];
        case 10:
          return [2, e];
      }
    });
  });
}
function S(e) {
  return n(this, void 0, void 0, function () {
    var n, i, a, o, s, c, u, l, d, f;
    return t(this, function (t) {
      switch (t.label) {
        case 0:
          return p(e)
            ? [2]
            : ((n = r.parse(e.data)),
              (i = n.eventName),
              (a = n.callbackId),
              (o = n.data),
              a && (s = I.idMap[a])
                ? ((c = s.split(':')),
                  (u = c[0]),
                  (l = c[1]),
                  'api.callback' === i && I[u] && I[u][l]
                    ? [4, (f = I[u][l]).callback.apply(f, o.args)]
                    : [3, 2])
                : [3, 2]);
        case 1:
          ((d = t.sent()),
            y({ result: d, callbackId: a, eventName: 'api.callback.reply' }),
            (t.label = 2));
        case 2:
          return [2];
      }
    });
  });
}
var N = function (e) {
    return n(void 0, void 0, void 0, function () {
      function n() {
        return Object.keys(I.idMap).find(function (e) {
          return I.idMap[e] === a + ':' + i;
        });
      }
      var i, a, o, s, c, u, l, d, f;
      return t(this, function (t) {
        switch (t.label) {
          case 0:
            return ((i = e.prop), (a = e.parentObjId), [4, A([(o = e.value)])]);
          case 1:
            return (
              (s = t.sent()),
              (c = s[0]),
              (u = s[1]),
              (e.value = c[0]),
              (l = Object.keys(u)[0]),
              (d = I[a]),
              null === o &&
                d &&
                d[i] &&
                ((f = n()) && delete I.idMap[f],
                delete d[i],
                Object.keys(d).length || delete I[a],
                Object.keys(I.idMap).length || r.remove(S)),
              l &&
                (Object.keys(I.idMap).length || r.add(S),
                I[a] || (I[a] = {}),
                (I[a][i] = { callbackId: l, callback: u[l] }),
                (f = n()) && delete I.idMap[f],
                (I.idMap[l] = a + ':' + i)),
              [2]
            );
        }
      });
    });
  },
  L = function (i, a, o, s) {
    return n(void 0, void 0, void 0, function () {
      var c, u, l, d, f, v, h, b;
      return t(this, function (w) {
        switch (w.label) {
          case 0:
            return (
              (c = m()),
              (d = new Promise(function (e, n) {
                ((u = e), (l = n));
              })),
              (f = {}),
              a.args ? [4, A(a.args)] : [3, 2]
            );
          case 1:
            ((v = w.sent()),
              (h = v[0]),
              (b = v[1]),
              (a.args = h),
              (f = b),
              (w.label = 2));
          case 2:
            return 'api.setter' !== i ? [3, 4] : [4, N(a)];
          case 3:
            (w.sent(), (w.label = 4));
          case 4:
            return (
              'api.caller' === i && Object.assign(E, f),
              (function (n) {
                var t = n[0],
                  r = n[1];
                'function' == typeof (t = e({}, t)).data && (t.data = t.data());
                (r(), y(t));
              })([
                { eventName: i, data: a, msgId: c },
                function () {
                  var e = this,
                    a = function (d) {
                      return n(e, void 0, void 0, function () {
                        var e, n, v;
                        return t(this, function (t) {
                          switch (t.label) {
                            case 0:
                              return p(d)
                                ? [2]
                                : 'api.callback' ===
                                      (e = r.parse(d.data)).eventName &&
                                    e.callbackId &&
                                    f[e.callbackId]
                                  ? [4, f[e.callbackId].apply(f, e.data.args)]
                                  : [3, 2];
                            case 1:
                              ((n = t.sent()),
                                y({
                                  result: n,
                                  eventName: 'api.callback.reply',
                                  callbackId: e.callbackId,
                                }),
                                (t.label = 2));
                            case 2:
                              return (
                                e.eventName === i + '.reply' &&
                                  e.msgId === c &&
                                  (e.error
                                    ? (((v = new Error('')).stack =
                                        e.error + '\n' + o),
                                      s && s(),
                                      l(v))
                                    : u(e),
                                  r.remove(a)),
                                [2]
                              );
                          }
                        });
                      });
                    };
                  return (r.add(a), d);
                },
              ]),
              [2, d]
            );
        }
      });
    });
  };
function A(e) {
  return n(this, void 0, void 0, function () {
    var n, r, a, o, s, c, u, l, d, f, p;
    return t(this, function (t) {
      switch (t.label) {
        case 0:
          ((n = {}), (r = []), (a = e.slice(0)), (t.label = 1));
        case 1:
          return a.length ? ((o = void 0), [4, a.shift()]) : [3, 13];
        case 2:
          return (s = t.sent()) && s.done ? [4, s.done()] : [3, 4];
        case 3:
          (t.sent(), (t.label = 4));
        case 4:
          if (!i(o)) return [3, 11];
          for (u in ((o = {}), (c = []), s)) c.push(u);
          ((l = 0), (t.label = 5));
        case 5:
          return l < c.length
            ? ((d = c[l]),
              (f = s[d]),
              /^[A-Z]/.test(d)
                ? f && f.done
                  ? [4, f.done()]
                  : [3, 7]
                : [3, 8])
            : [3, 10];
        case 6:
          (t.sent(), (t.label = 7));
        case 7:
          (f && f.objId
            ? (f = { objId: f.objId })
            : 'function' == typeof f &&
              ((p = m()), (n[p] = f), (f = { callbackId: p })),
            (t.label = 8));
        case 8:
          ((o[d] = f), (t.label = 9));
        case 9:
          return (l++, [3, 5]);
        case 10:
          return [3, 12];
        case 11:
          (s && s.objId
            ? (o = { objId: s.objId })
            : 'function' == typeof s && void 0 === s.objId
              ? ((p = m()), (n[p] = s), (o = { callbackId: p }))
              : (o = s),
            (t.label = 12));
        case 12:
          return (r.push(o), [3, 1]);
        case 13:
          return [2, [r, n]];
      }
    });
  });
}
var C = function (n, t) {
    void 0 === t && (t = !0);
    var r = e({}, n),
      i = r.headers,
      a = void 0 === i ? {} : i,
      o = r.subscriptions,
      s = void 0 === o ? {} : o,
      u = r.mode,
      l = void 0 === u ? c.nomal : u,
      d = r.commonOptions,
      f = a.backBtn,
      p = void 0 === f ? {} : f,
      v = a.shareBtn,
      h = void 0 === v ? {} : v,
      b = a.otherMenuBtn,
      m = void 0 === b ? {} : b,
      w = function (e, n) {
        e.subscribe &&
          'function' == typeof e.subscribe &&
          ((e.callback = n), (s[n] = e.subscribe), t && delete e.subscribe);
      };
    if (
      (w(p, 'wpsconfig_back_btn'),
      w(h, 'wpsconfig_share_btn'),
      w(m, 'wpsconfig_other_menu_btn'),
      m.items && Array.isArray(m.items))
    ) {
      var g = [];
      (m.items.forEach(function (e, n) {
        switch ((void 0 === e && (e = {}), e.type)) {
          case 'export_img':
            ((e.type = 1), (e.callback = 'export_img'));
            break;
          case 'export_pdf':
            ((e.type = 1), (e.callback = 'export_pdf'));
            break;
          case 'save_version':
            ((e.type = 1), (e.callback = 'save_version'));
            break;
          case 'about_wps':
            ((e.type = 1), (e.callback = 'about_wps'));
            break;
          case 'split_line':
            e.type = 2;
            break;
          case 'custom':
            ((e.type = 3), w(e, 'wpsconfig_other_menu_btn_' + n), g.push(e));
        }
      }),
        g.length && (D || B) && (m.items = g));
    }
    r.url = r.url || r.wpsUrl;
    var y = [];
    if (
      ((l === c.simple || (d && !1 === d.isShowTopArea)) &&
        y.push('simple', 'hidecmb'),
      r.debug && y.push('debugger'),
      r.url &&
        y.length &&
        (r.url = r.url + (r.url.indexOf('?') >= 0 ? '&' : '?') + y.join('&')),
      d &&
        (d.isParentFullscreen || d.isBrowserViewFullscreen) &&
        (document.addEventListener('fullscreenchange', H),
        document.addEventListener('webkitfullscreenchange', H),
        document.addEventListener('mozfullscreenchange', H)),
      r.wordOptions && (r.wpsOptions = r.wordOptions),
      r.excelOptions && (r.etOptions = r.excelOptions),
      r.pptOptions && (r.wppOptions = r.pptOptions),
      'object' == typeof s.print)
    ) {
      var k = 'wpsconfig_print';
      ('function' == typeof s.print.subscribe &&
        ((s[k] = s.print.subscribe),
        (r.print = { callback: k }),
        void 0 !== s.print.custom && (r.print.custom = s.print.custom)),
        delete s.print);
    }
    'function' == typeof s.exportPdf &&
      ((s[(k = 'wpsconfig_export_pdf')] = s.exportPdf),
      (r.exportPdf = { callback: k }),
      delete s.exportPdf);
    return (
      r.commandBars && P(r.commandBars, !1),
      e(e({}, r), { subscriptions: s })
    );
  },
  T = function (e) {
    void 0 === e && (e = '');
    var n = '';
    if (!n && e) {
      var t = e.toLowerCase();
      (-1 !== t.indexOf('/office/s/') && (n = o.spreadsheet),
        -1 !== t.indexOf('/office/w/') && (n = o.writer),
        -1 !== t.indexOf('/office/p/') && (n = o.presentation),
        -1 !== t.indexOf('/office/f/') && (n = o.pdf));
    }
    if (!n) {
      var r = e.match(/[\?&]type=([a-z]+)/) || [];
      n = s[r[1]] || '';
    }
    return n;
  };
function P(e, n) {
  void 0 === n && (n = !0);
  var t = e.map(function (e) {
    var n = e.attributes;
    if (!Array.isArray(n)) {
      var t = [];
      for (var r in n)
        if (n.hasOwnProperty(r)) {
          var i = { name: r, value: n[r] };
          t.push(i);
        }
      e.attributes = t;
    }
    return e;
  });
  return (n && y({ data: t, eventName: 'setCommandBars' }), t);
}
var F = window.navigator.userAgent.toLowerCase(),
  D = /Android|webOS|iPhone|iPod|BlackBerry|iPad/i.test(F),
  R = /iPhone|iPod|iPad/i.test(F),
  B = (function () {
    try {
      return (
        -1 !== window._parent.location.search.indexOf('from=wxminiprogram')
      );
    } catch (e) {
      return !1;
    }
  })();
function H() {
  var e = { status: u.requestFullscreen },
    n = document,
    t =
      n.fullscreenElement ||
      n.webkitFullscreenElement ||
      n.mozFullScreenElement;
  ((e.status = t ? u.requestFullscreen : u.exitFullscreen),
    y({ data: e, eventName: 'fullscreenchange' }));
}
var V = function () {
  I.idMap = {};
};
function z() {
  (console.group('JSSDK 事件机制调整说明'),
    console.warn(
      'jssdk.on、jssdk.off 和 jssdk.Application.Sub 将在后续版本中被弃用，建议使用改进后的 ApiEvent'
    ),
    console.warn(
      '具体请参考：https://wwo.wps.cn/docs/front-end/basic-usage/events/intro/'
    ),
    console.groupEnd());
}
var M = 0,
  W = new Set();
function q(e) {
  return (
    (M += 1),
    !e &&
      (function (e) {
        W.forEach(function (n) {
          return n(e);
        });
      })(M),
    M
  );
}
function K() {
  var e = new Error('');
  return (e.stack || e.message || '').split('\n').slice(2).join('\n');
}
var G = {};
function J(e, n) {
  for (
    var t = G.otherProps, r = G.names, i = Object.keys(r), a = -1, o = 0;
    o < i.length;
    o += 1
  ) {
    var s = i[o];
    if (r[s].name === n) {
      a = parseInt(s, 10);
      break;
    }
  }
  if (a >= 0) {
    var c = { objId: e },
      u = t[a];
    return (u && X(c, u, t), c);
  }
}
function U(e, i) {
  var a = this,
    s = i.Events,
    c = i.Enum,
    u = i.Props,
    l = u[0],
    d = u[1],
    f = u[2];
  Object.assign(G, { appProps: l, otherProps: d, names: f });
  var v,
    h = { objId: M };
  switch (
    (X(h, l, d),
    (h.Events = s),
    (h.Enum = c),
    (e.Enum = h.Enum),
    (e.Events = h.Events),
    (e.Props = u),
    T(e.url))
  ) {
    case o.writer:
      e.WordApplication = e.WpsApplication = function () {
        return h;
      };
      break;
    case o.spreadsheet:
      e.ExcelApplication = e.EtApplication = function () {
        return h;
      };
      break;
    case o.presentation:
      e.PPTApplication = e.WppApplication = function () {
        return h;
      };
      break;
    case o.pdf:
      e.PDFApplication = function () {
        return h;
      };
  }
  ((e.Application = h),
    (e.Free = function (e) {
      return L('api.free', { objId: e }, '');
    }),
    (e.Stack = h.Stack =
      ((v = function (n) {
        e && e.Free(n);
      }),
      function () {
        var e = [],
          n = function (n) {
            e.push(n);
          };
        return (
          W.add(n),
          {
            End: function () {
              (v(e), W.delete(n));
            },
          }
        );
      })));
  var b = {};
  (r.add(function (e) {
    return n(a, void 0, void 0, function () {
      var n, i, a, o, s;
      return t(this, function (t) {
        switch (t.label) {
          case 0:
            return p(e)
              ? [2]
              : 'api.event' === (n = r.parse(e.data)).eventName && n.data
                ? ((i = n.data),
                  (a = i.eventName),
                  (o = i.data),
                  (s = b[a]) ? [4, s(o)] : [3, 2])
                : [3, 2];
          case 1:
            (t.sent(), (t.label = 2));
          case 2:
            return [
              4,
              x(n, function (e, n) {
                return J(e, n);
              }),
            ];
          case 3:
            return (t.sent(), [2]);
        }
      });
    });
  }),
    (h.Sub = {}));
  var m = function (e) {
    var n = s[e];
    Object.defineProperty(h.Sub, n, {
      set: function (e) {
        (z(),
          (b[n] = e),
          y({
            eventName: 'api.event.register',
            data: { eventName: n, register: !!e, objId: (M += 1) },
          }));
      },
    });
  };
  for (var w in s) m(w);
}
var Z =
    window.FinalizationRegistry &&
    new FinalizationRegistry(function (e) {
      L('api.free', { objId: e }, '');
    }),
  Q = [
    'ExportAsFixedFormat',
    'GetOperatorsInfo',
    'ImportDataIntoFields',
    'ReplaceText',
    'ReplaceBookmark',
    'GetBookmarkText',
    'GetComments',
  ];
function X(n, t, r) {
  var i = t.slice(0),
    a = n.objId;
  (i.includes('Destroy') ||
    (n.Destroy = function () {
      return L('api.free', { objId: a }, '');
    }),
    Z && Z.register(n, a));
  for (
    var o = function () {
      var t = i.shift();
      !t.alias &&
        ~Q.indexOf(t.prop) &&
        i.push(e(e({}, t), { alias: t.prop + 'Async' }));
      var a = t.alias || t.prop;
      Object.defineProperty(n, a, {
        get: function () {
          var e = this,
            i = 1 === t.cache,
            a = i && this['__' + t.prop + 'CacheValue'];
          if (!a) {
            var o = K(),
              s = q(i),
              c = function () {
                for (var e, i = [], a = 0; a < arguments.length; a++)
                  i[a] = arguments[a];
                return (
                  void 0 !== t.caller
                    ? X((e = { objId: q() }), r[t.caller], r)
                    : (e = {}),
                  Y(
                    c,
                    e,
                    'api.caller',
                    {
                      obj: c,
                      args: i,
                      parentObjId: n.objId,
                      objId: e.objId,
                      prop: t.prop,
                    },
                    o
                  ),
                  e
                );
              };
            return (
              (c.objId = -1),
              void 0 !== t.getter &&
                r[t.getter].length &&
                ((c.objId = s), X(c, r[t.getter], r)),
              Y(
                n,
                c,
                'api.getter',
                { parentObjId: n.objId, objId: c.objId, prop: t.prop },
                o,
                function () {
                  delete e['__' + t.prop + 'CacheValue'];
                }
              ),
              i && (this['__' + t.prop + 'CacheValue'] = c),
              c
            );
          }
          return a;
        },
        set: function (e) {
          var r = K();
          return Y(
            n,
            {},
            'api.setter',
            { value: e, parentObjId: n.objId, objId: -1, prop: t.prop },
            r
          );
        },
      });
    };
    i.length;
  )
    o();
}
function Y(e, r, i, a, o, s) {
  var c,
    u = (e.done ? e.done() : Promise.resolve()).then(function () {
      return (c || (c = L(i, a, o, s)), c);
    });
  ((r.done = function () {
    return u;
  }),
    (r.then = function (e, i) {
      return n(this, void 0, void 0, function () {
        var n, o, s;
        return t(this, function (t) {
          switch (t.label) {
            case 0:
              return (t.trys.push([0, 5, , 6]), [4, u]);
            case 1:
              return (n = t.sent()).hasInnerObj
                ? ((o = e), [4, _(n.result, J)])
                : [3, 3];
            case 2:
              return (o.apply(void 0, [t.sent()]), [3, 4]);
            case 3:
              (a.objId >= 0
                ? ((r.done = null), (r.then = null), e(r))
                : e(n.result),
                (t.label = 4));
            case 4:
              return [3, 6];
            case 5:
              return ((s = t.sent()), i(s), [3, 6]);
            case 6:
              return [2];
          }
        });
      });
    }),
    (r.catch = function (e) {
      return u.catch(e);
    }));
}
var $ = {};
var ee = null,
  ne = {
    fileOpen: 'fileOpen',
    tabSwitch: 'tabSwitch',
    fileSaved: 'fileSaved',
    fileStatus: 'fileStatus',
    fullscreenChange: 'fullscreenChange',
    error: 'error',
    stage: 'stage',
  },
  te = {
    getToken: 'api.getToken',
    onToast: 'event.toast',
    onHyperLinkOpen: 'event.hyperLinkOpen',
    getClipboardData: 'api.getClipboardData',
  };
function re(i, a, o, s, c, u, l) {
  var d = this;
  void 0 === o && (o = {});
  r.add(function (f) {
    return n(d, void 0, void 0, function () {
      var n, d, v, h, b, m, w, g, k, O, j, I, E, x, _, S, N, L, A;
      return t(this, function (t) {
        switch (t.label) {
          case 0:
            return p(f)
              ? [2]
              : ((n = r.parse(f.data)),
                (d = n.eventName),
                (v = void 0 === d ? '' : d),
                (h = n.data),
                (b = void 0 === h ? null : h),
                (m = n.url),
                (w = void 0 === m ? null : m),
                -1 !== ['wps.jssdk.api'].indexOf(v)
                  ? [2]
                  : 'ready' !== v
                    ? [3, 1]
                    : (c.apiReadySended &&
                        (function (e) {
                          var n = [];
                          (Object.keys($).forEach(function (t) {
                            ($[t].forEach(function (r) {
                              var i = t;
                              (e.off(i, r),
                                n.push({ handle: r, eventName: i }));
                            }),
                              delete $[t]);
                          }),
                            n.forEach(function (e) {
                              var n = e.eventName,
                                t = e.handle;
                              null == ee ||
                                ee.ApiEvent.AddApiEventListener(n, t);
                            }));
                        })(a),
                      y({
                        eventName: 'setConfig',
                        data: e(e({}, o), { version: i.version }),
                      }),
                      i.tokenData &&
                        i.setToken(
                          e(e({}, i.tokenData), {
                            hasRefreshTokenConfig: !!o.refreshToken,
                          })
                        ),
                      (i.iframeReady = !0),
                      [3, 15]));
          case 1:
            return 'error' !== v ? [3, 2] : (a.emit(ne.error, b), [3, 15]);
          case 2:
            return 'open.result' !== v
              ? [3, 3]
              : (void 0 !==
                  (null === (N = null == b ? void 0 : b.fileInfo) ||
                  void 0 === N
                    ? void 0
                    : N.officeVersion) &&
                  ((i.mainVersion = b.fileInfo.officeVersion),
                  console.log('WebOfficeSDK Main Version: V' + i.mainVersion)),
                a.emit(ne.fileOpen, b),
                [3, 15]);
          case 3:
            return 'api.scroll' !== v
              ? [3, 4]
              : (window.scrollTo(b.x, b.y), [3, 15]);
          case 4:
            if (v !== te.getToken) return [3, 9];
            ((g = { token: !1 }), (t.label = 5));
          case 5:
            return (t.trys.push([5, 7, , 8]), [4, c.refreshToken()]);
          case 6:
            return ((g = t.sent()), [3, 8]);
          case 7:
            return (
              (k = t.sent()),
              console.error('refreshToken: ' + (k || 'fail to get')),
              [3, 8]
            );
          case 8:
            return (y({ eventName: te.getToken + '.reply', data: g }), [3, 15]);
          case 9:
            if (v !== te.getClipboardData) return [3, 14];
            ((O = { text: '', html: '' }), (t.label = 10));
          case 10:
            return (t.trys.push([10, 12, , 13]), [4, c.getClipboardData()]);
          case 11:
            return ((O = t.sent()), [3, 13]);
          case 12:
            return (
              (j = t.sent()),
              console.error('getClipboardData: ' + (j || 'fail to get')),
              [3, 13]
            );
          case 13:
            return (
              y({ eventName: te.getClipboardData + '.reply', data: O }),
              [3, 15]
            );
          case 14:
            (v === te.onToast
              ? c.onToast(b)
              : v === te.onHyperLinkOpen
                ? c.onHyperLinkOpen(b)
                : 'stage' === v
                  ? a.emit(ne.stage, b)
                  : 'event.callback' === v
                    ? ((I = b.eventName),
                      (E = b.data),
                      (x = I),
                      I === ne.fullscreenChange && (x = 'fullscreenchange'),
                      'file.saved' === I && (x = ne.fileStatus),
                      ((null === (L = o.commonOptions) || void 0 === L
                        ? void 0
                        : L.isBrowserViewFullscreen) ||
                        (null === (A = o.commonOptions) || void 0 === A
                          ? void 0
                          : A.isParentFullscreen)) &&
                        'fullscreenchange' === x &&
                        ((_ = E.status),
                        (S = E.isDispatchEvent),
                        o.commonOptions.isBrowserViewFullscreen
                          ? (function (e, n, t, r) {
                              (0 === e
                                ? (n.style =
                                    'position: static; width: ' +
                                    t.width +
                                    '; height: ' +
                                    t.height)
                                : 1 === e &&
                                  (n.style =
                                    'position: absolute; width: 100%; height: 100%'),
                                r &&
                                  (function (e) {
                                    ['fullscreen', 'fullscreenElement'].forEach(
                                      function (n) {
                                        Object.defineProperty(document, n, {
                                          get: function () {
                                            return !!e.status;
                                          },
                                          configurable: !0,
                                        });
                                      }
                                    );
                                    var n = new CustomEvent('fullscreenchange');
                                    document.dispatchEvent(n);
                                  })({ status: e }));
                            })(_, u, l, S)
                          : o.commonOptions.isParentFullscreen &&
                            (function (e, n, t) {
                              var r = document.querySelector(t),
                                i = r && 1 === r.nodeType ? r : n;
                              if (0 === e) {
                                var a = document,
                                  o =
                                    a.exitFullscreen ||
                                    a.mozCancelFullScreen ||
                                    a.msExitFullscreen ||
                                    a.webkitCancelFullScreen ||
                                    a.webkitExitFullscreen;
                                o.call(document);
                              } else if (1 === e) {
                                var s =
                                  i.requestFullscreen ||
                                  i.mozRequestFullScreen ||
                                  i.msRequestFullscreen ||
                                  i.webkitRequestFullscreen;
                                s.call(i);
                              }
                            })(_, u, o.commonOptions.isParentFullscreen)),
                      a.emit(x, E))
                    : 'api.ready' === v && U(i, b),
              (t.label = 15));
          case 15:
            return ('function' == typeof s[v] && s[v](i, w || b), [2]);
        }
      });
    });
  });
}
function ie(e) {
  return new Promise(function (n) {
    var t = function (i) {
      (d('realOrigin', i.origin), p(i)) ||
        (r.parse(i.data).eventName === e && (n(null), r.remove(t)));
    };
    r.add(t);
  });
}
function ae(e) {
  var i,
    o = this;
  (void 0 === e && (e = {}), ee && ee.destroy());
  try {
    var s = C(e),
      c = s.subscriptions,
      u = void 0 === c ? {} : c,
      l = s.mount,
      f = void 0 === l ? null : l,
      p = s.url,
      v = s.refreshToken,
      h = s.onToast,
      b = s.onHyperLinkOpen,
      m = s.getClipboardData;
    (d('whiteList', s.originWhiteList),
      d('origin', (p.match(/https*:\/\/[^\/]+/g) || [])[0]));
    var g = w(p, f),
      k = ie('open.result'),
      I = ie('api.ready'),
      E = f
        ? { width: f.clientWidth + 'px', height: f.clientHeight + 'px' }
        : { width: '100vw', height: '100vh' };
    (delete s.mount, p && delete s.url, delete s.subscriptions);
    var x =
        ((i = i || Object.create(null)),
        {
          on: function (e, n) {
            (i[e] || (i[e] = [])).push(n);
          },
          off: function (e, n) {
            i[e] && i[e].splice(i[e].indexOf(n) >>> 0, 1);
          },
          emit: function (e, n) {
            ((i[e] || []).slice().map(function (e) {
              e(n);
            }),
              (i['*'] || []).slice().map(function (t) {
                t(e, n);
              }));
          },
        }),
      _ = { apiReadySended: !1, apiReadySendedOnce: !1 },
      S = function (e, r, i) {
        return n(o, void 0, void 0, function () {
          return t(this, function (n) {
            switch (n.label) {
              case 0:
                return (function (e, n, t) {
                  if ($[e]) {
                    var r = !!$[e].find(function (e) {
                      return e === n;
                    });
                    return r && 'off' === t
                      ? (x.off(e, n),
                        ($[e] = $[e].filter(function (e) {
                          return e !== n;
                        })),
                        !!$[e].length || (($[e] = void 0), !1))
                      : (r || 'on' !== t || ($[e].push(n), x.on(e, n)), !0);
                  }
                  return 'on' === t
                    ? (($[e] = []), $[e].push(n), !1)
                    : 'off' === t || void 0;
                })(e, r, i)
                  ? [3, 2]
                  : [4, N];
              case 1:
                (n.sent(),
                  (function (e, n) {
                    var t = e.eventName,
                      r = e.type,
                      i = e.handle;
                    ('on' === n ? x.on(t, i) : x.off(t, i),
                      'base.event' === r &&
                        y({
                          eventName: 'basic.event',
                          data: { eventName: t, action: n },
                        }),
                      z());
                  })(
                    (function (e, n) {
                      var t = e,
                        r = 'base.event';
                      switch (t) {
                        case ne.fileSaved:
                          (console.warn(
                            'fileSaved事件监听即将弃用， 推荐使用fileStatus进行文件状态的监听'
                          ),
                            (t = 'fileStatus'));
                          break;
                        case ne.fullscreenChange:
                          t = 'fullscreenchange';
                          break;
                        case 'error':
                        case 'fileOpen':
                          r = 'callback.event';
                      }
                      return { eventName: t, type: r, handle: n };
                    })(e, r),
                    i
                  ),
                  (n.label = 2));
              case 2:
                return [2];
            }
          });
        });
      };
    ((ee = {
      url: p,
      iframe: g,
      version: '1.1.20',
      iframeReady: !1,
      tokenData: null,
      commandBars: null,
      tabs: {
        getTabs: function () {
          return n(this, void 0, void 0, function () {
            return t(this, function (e) {
              switch (e.label) {
                case 0:
                  return [4, N];
                case 1:
                  return (e.sent(), [2, j({ api: 'tab.getTabs' })]);
              }
            });
          });
        },
        switchTab: function (e) {
          return n(this, void 0, void 0, function () {
            return t(this, function (n) {
              switch (n.label) {
                case 0:
                  return [4, N];
                case 1:
                  return (
                    n.sent(),
                    [2, j({ api: 'tab.switchTab', args: { tabKey: e } })]
                  );
              }
            });
          });
        },
      },
      setCooperUserColor: function (e) {
        return n(this, void 0, void 0, function () {
          return t(this, function (n) {
            switch (n.label) {
              case 0:
                return [4, N];
              case 1:
                return (
                  n.sent(),
                  [2, j({ api: 'setCooperUserColor', args: e })]
                );
            }
          });
        });
      },
      setToken: function (e) {
        return n(this, void 0, void 0, function () {
          return t(this, function (n) {
            switch (n.label) {
              case 0:
                return [4, N];
              case 1:
                return (
                  n.sent(),
                  (ee.tokenData = e),
                  y({ eventName: 'setToken', data: e }),
                  [2]
                );
            }
          });
        });
      },
      ready: function () {
        return n(this, void 0, void 0, function () {
          return t(this, function (e) {
            switch (e.label) {
              case 0:
                return _.apiReadySendedOnce
                  ? [3, 2]
                  : ((_.apiReadySendedOnce = !0), [4, k]);
              case 1:
                (e.sent(),
                  (_.apiReadySended = !0),
                  y({ eventName: 'api.ready' }),
                  (e.label = 2));
              case 2:
                return [4, I];
              case 3:
                return (
                  e.sent(),
                  [
                    2,
                    new Promise(function (e) {
                      return setTimeout(function () {
                        return e(null == ee ? void 0 : ee.Application);
                      }, 0);
                    }),
                  ]
                );
            }
          });
        });
      },
      destroy: function () {
        (($ = {}),
          g.destroy(),
          r.empty(),
          (ee = null),
          (W = new Set()),
          (M = 0),
          document.removeEventListener('fullscreenchange', H),
          V());
      },
      save: function () {
        return n(this, void 0, void 0, function () {
          return t(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, N];
              case 1:
                return (e.sent(), [2, O({ api: 'save' })]);
            }
          });
        });
      },
      setCommandBars: function (e) {
        return n(this, void 0, void 0, function () {
          return t(this, function (n) {
            switch (n.label) {
              case 0:
                return [4, N];
              case 1:
                return (n.sent(), P(e), [2]);
            }
          });
        });
      },
      updateConfig: function (e) {
        return (
          void 0 === e && (e = {}),
          n(this, void 0, void 0, function () {
            return t(this, function (n) {
              switch (n.label) {
                case 0:
                  return [4, N];
                case 1:
                  return (
                    n.sent(),
                    e.commandBars
                      ? (console.warn(
                          'Deprecated: `updateConfig()` 方法即将废弃，请使用`setCommandBars()`代替`updateConfig()`更新`commandBars`配置。'
                        ),
                        [4, P(e.commandBars)])
                      : [3, 3]
                  );
                case 2:
                  (n.sent(), (n.label = 3));
                case 3:
                  return [2];
              }
            });
          })
        );
      },
      executeCommandBar: function (e) {
        return n(this, void 0, void 0, function () {
          return t(this, function (n) {
            switch (n.label) {
              case 0:
                return [4, N];
              case 1:
                return (
                  n.sent(),
                  P([{ cmbId: e, attributes: [{ name: 'click', value: !0 }] }]),
                  [2]
                );
            }
          });
        });
      },
      on: function (e, r) {
        return n(this, void 0, void 0, function () {
          return t(this, function (n) {
            return [2, this.ApiEvent.AddApiEventListener(e, r)];
          });
        });
      },
      off: function (e, r) {
        return n(this, void 0, void 0, function () {
          return t(this, function (n) {
            return [2, this.ApiEvent.RemoveApiEventListener(e, r)];
          });
        });
      },
      ApiEvent: {
        AddApiEventListener: function (e, r) {
          return n(this, void 0, void 0, function () {
            return t(this, function (n) {
              switch (n.label) {
                case 0:
                  return [4, S(e, r, 'on')];
                case 1:
                  return [2, n.sent()];
              }
            });
          });
        },
        RemoveApiEventListener: function (e, r) {
          return n(this, void 0, void 0, function () {
            return t(this, function (n) {
              switch (n.label) {
                case 0:
                  return [4, S(e, r, 'off')];
                case 1:
                  return [2, n.sent()];
              }
            });
          });
        },
      },
    }),
      (function (e, n, t, r, i, o) {
        n &&
          a(n) &&
          ((i.refreshToken = n), (e.refreshToken = { eventName: te.getToken }));
        o &&
          a(o) &&
          ((i.getClipboardData = o),
          (e.getClipboardData = { eventName: te.getClipboardData }));
        t && a(t) && ((i.onToast = t), (e.onToast = { eventName: te.onToast }));
        r &&
          a(r) &&
          ((i.onHyperLinkOpen = r),
          (e.onHyperLinkOpen = { eventName: te.onHyperLinkOpen }));
      })(s, v, h, b, _, m),
      re(ee, x, s, u, _, g, E));
    var N = ie('ready');
    return ee;
  } catch (e) {
    console.error(e);
  }
}
console.log('WebOfficeSDK JS-SDK V1.1.20');
var oe = Object.freeze({ __proto__: null, listener: re, config: ae });
window.WPS = oe;
var se = ae;
export default { config: ae };
export { se as config };
