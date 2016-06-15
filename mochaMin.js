! function e(t, n, r) {
    function i(s, a) {
        if (!n[s]) {
            if (!t[s]) {
                var u = "function" == typeof require && require;
                if (!a && u) return u(s, !0);
                if (o) return o(s, !0);
                var f = new Error("Cannot find module '" + s + "'");
                throw f.code = "MODULE_NOT_FOUND", f
            }
            var l = n[s] = {
                exports: {}
            };
            t[s][0].call(l.exports, function(e) {
                var n = t[s][1][e];
                return i(n ? n : e)
            }, l, l.exports, e, t, n, r)
        }
        return n[s].exports
    }
    for (var o = "function" == typeof require && require, s = 0; s < r.length; s++) i(r[s]);
    return i
}({
    1: [function(e, t, n) {
        (function(n, r) {
            function i() {
                for (var e = (new a).getTime(); h.length && (new a).getTime() - e < 100;) h.shift()();
                c = h.length ? u(i, 0) : null
            }
            n.stdout = e("browser-stdout")();
            var o = e("./lib/mocha"),
                s = new o({
                    reporter: "html"
                }),
                a = r.Date,
                u = r.setTimeout,
                f = (r.setInterval, r.clearTimeout, r.clearInterval, []),
                l = r.onerror;
            n.removeListener = function(e, t) {
                if ("uncaughtException" == e) {
                    l ? r.onerror = l : r.onerror = function() {};
                    var n = o.utils.indexOf(f, t); - 1 != n && f.splice(n, 1)
                }
            }, n.on = function(e, t) {
                "uncaughtException" == e && (r.onerror = function(e, n, r) {
                    return t(new Error(e + " (" + n + ":" + r + ")")), !s.allowUncaught
                }, f.push(t))
            }, s.suite.removeAllListeners("pre-require");
            var c, h = [];
            o.Runner.immediately = function(e) {
                h.push(e), c || (c = u(i, 0))
            }, s.throwError = function(e) {
                throw o.utils.forEach(f, function(t) {
                    t(e)
                }), e
            }, s.ui = function(e) {
                return o.prototype.ui.call(this, e), this.suite.emit("pre-require", r, null, this), this
            }, s.setup = function(e) {
                "string" == typeof e && (e = {
                    ui: e
                });
                for (var t in e) this[t](e[t]);
                return this
            }, s.run = function(e) {
                var t = s.options;
                s.globals("location");
                var n = o.utils.parseQuery(r.location.search || "");
                return n.grep && s.grep(new RegExp(n.grep)), n.fgrep && s.grep(n.fgrep), n.invert && s.invert(), o.prototype.run.call(s, function(n) {
                    var i = r.document;
                    i && i.getElementById("mocha") && t.noHighlighting !== !0 && o.utils.highlightTags("code"), e && e(n)
                })
            }, o.process = n, r.Mocha = o, r.mocha = s, t.exports = r
        }).call(this, e("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "./lib/mocha": 14,
        _process: 58,
        "browser-stdout": 42
    }],
    2: [function(e, t, n) {
        t.exports = function(e) {
            return function() {}
        }
    }, {}],
    3: [function(e, t, n) {
        function r(e) {
            return "[object Array]" === o.call(e)
        }

        function i() {}
        n.EventEmitter = i;
        var o = Object.prototype.toString;
        i.prototype.on = function(e, t) {
            return this.$events || (this.$events = {}), this.$events[e] ? r(this.$events[e]) ? this.$events[e].push(t) : this.$events[e] = [this.$events[e], t] : this.$events[e] = t, this
        }, i.prototype.addListener = i.prototype.on, i.prototype.once = function(e, t) {
            function n() {
                r.removeListener(e, n), t.apply(this, arguments)
            }
            var r = this;
            return n.listener = t, this.on(e, n), this
        }, i.prototype.removeListener = function(e, t) {
            if (this.$events && this.$events[e]) {
                var n = this.$events[e];
                if (r(n)) {
                    for (var i = -1, o = 0, s = n.length; s > o; o++)
                        if (n[o] === t || n[o].listener && n[o].listener === t) {
                            i = o;
                            break
                        }
                    if (0 > i) return this;
                    n.splice(i, 1), n.length || delete this.$events[e]
                } else(n === t || n.listener && n.listener === t) && delete this.$events[e]
            }
            return this
        }, i.prototype.removeAllListeners = function(e) {
            return void 0 === e ? (this.$events = {}, this) : (this.$events && this.$events[e] && (this.$events[e] = null), this)
        }, i.prototype.listeners = function(e) {
            return this.$events || (this.$events = {}), this.$events[e] || (this.$events[e] = []), r(this.$events[e]) || (this.$events[e] = [this.$events[e]]), this.$events[e]
        }, i.prototype.emit = function(e) {
            if (!this.$events) return !1;
            var t = this.$events[e];
            if (!t) return !1;
            var n = Array.prototype.slice.call(arguments, 1);
            if ("function" == typeof t) t.apply(this, n);
            else {
                if (!r(t)) return !1;
                for (var i = t.slice(), o = 0, s = i.length; s > o; o++) i[o].apply(this, n)
            }
            return !0
        }
    }, {}],
    4: [function(e, t, n) {
        function r() {
            this.percent = 0, this.size(0), this.fontSize(11), this.font("helvetica, arial, sans-serif")
        }
        t.exports = r, r.prototype.size = function(e) {
            return this._size = e, this
        }, r.prototype.text = function(e) {
            return this._text = e, this
        }, r.prototype.fontSize = function(e) {
            return this._fontSize = e, this
        }, r.prototype.font = function(e) {
            return this._font = e, this
        }, r.prototype.update = function(e) {
            return this.percent = e, this
        }, r.prototype.draw = function(e) {
            try {
                var t = Math.min(this.percent, 100),
                    n = this._size,
                    r = n / 2,
                    i = r,
                    o = r,
                    s = r - 1,
                    a = this._fontSize;
                e.font = a + "px " + this._font;
                var u = 2 * Math.PI * (t / 100);
                e.clearRect(0, 0, n, n), e.strokeStyle = "#9f9f9f", e.beginPath(), e.arc(i, o, s, 0, u, !1), e.stroke(), e.strokeStyle = "#eee", e.beginPath(), e.arc(i, o, s - 1, 0, u, !0), e.stroke();
                var f = this._text || (0 | t) + "%",
                    l = e.measureText(f).width;
                e.fillText(f, i - l / 2 + 1, o + a / 2 - 1)
            } catch (c) {}
            return this
        }
    }, {}],
    5: [function(e, t, n) {
        (function(e) {
            n.isatty = function() {
                return !0
            }, n.getWindowSize = function() {
                return "innerHeight" in e ? [e.innerHeight, e.innerWidth] : [640, 480]
            }
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    6: [function(e, t, n) {
        function r() {}
        t.exports = r, r.prototype.runnable = function(e) {
            return arguments.length ? (this.test = this._runnable = e, this) : this._runnable
        }, r.prototype.timeout = function(e) {
            return arguments.length ? (this.runnable().timeout(e), this) : this.runnable().timeout()
        }, r.prototype.enableTimeouts = function(e) {
            return this.runnable().enableTimeouts(e), this
        }, r.prototype.slow = function(e) {
            return this.runnable().slow(e), this
        }, r.prototype.skip = function() {
            return this.runnable().skip(), this
        }, r.prototype.retries = function(e) {
            return arguments.length ? (this.runnable().retries(e), this) : this.runnable().retries()
        }, r.prototype.inspect = function() {
            return JSON.stringify(this, function(e, t) {
                return "runnable" === e || "test" === e ? void 0 : t
            }, 2)
        }
    }, {}],
    7: [function(e, t, n) {
        function r(e, t) {
            i.call(this, e, t), this.type = "hook"
        }
        var i = e("./runnable"),
            o = e("./utils").inherits;
        t.exports = r, o(r, i), r.prototype.error = function(e) {
            return arguments.length ? void(this._error = e) : (e = this._error, this._error = null, e)
        }
    }, {
        "./runnable": 35,
        "./utils": 39
    }],
    8: [function(e, t, n) {
        var r = e("../suite"),
            i = e("../test"),
            o = e("escape-string-regexp");
        t.exports = function(t) {
            var n = [t];
            t.on("pre-require", function(s, a, u) {
                var f = e("./common")(n, s);
                s.before = f.before, s.after = f.after, s.beforeEach = f.beforeEach, s.afterEach = f.afterEach, s.run = u.options.delay && f.runWithSuite(t), s.describe = s.context = function(e, t) {
                    var i = r.create(n[0], e);
                    return i.file = a, n.unshift(i), t.call(i), n.shift(), i
                }, s.xdescribe = s.xcontext = s.describe.skip = function(e, t) {
                    var i = r.create(n[0], e);
                    i.pending = !0, n.unshift(i), t.call(i), n.shift()
                }, s.describe.only = function(e, t) {
                    var n = s.describe(e, t);
                    return u.grep(n.fullTitle()), n
                };
                var l = s.it = s.specify = function(e, t) {
                    var r = n[0];
                    r.isPending() && (t = null);
                    var o = new i(e, t);
                    return o.file = a, r.addTest(o), o
                };
                s.it.only = function(e, t) {
                    var n = l(e, t),
                        r = "^" + o(n.fullTitle()) + "$";
                    return u.grep(new RegExp(r)), n
                }, s.xit = s.xspecify = s.it.skip = function(e) {
                    s.it(e)
                }, s.it.retries = function(e) {
                    s.retries(e)
                }
            })
        }
    }, {
        "../suite": 37,
        "../test": 38,
        "./common": 9,
        "escape-string-regexp": 49
    }],
    9: [function(e, t, n) {
        "use strict";
        t.exports = function(e, t) {
            return {
                runWithSuite: function(e) {
                    return function() {
                        e.run()
                    }
                },
                before: function(t, n) {
                    e[0].beforeAll(t, n)
                },
                after: function(t, n) {
                    e[0].afterAll(t, n)
                },
                beforeEach: function(t, n) {
                    e[0].beforeEach(t, n)
                },
                afterEach: function(t, n) {
                    e[0].afterEach(t, n)
                },
                test: {
                    skip: function(e) {
                        t.test(e)
                    },
                    retries: function(e) {
                        t.retries(e)
                    }
                }
            }
        }
    }, {}],
    10: [function(e, t, n) {
        var r = e("../suite"),
            i = e("../test");
        t.exports = function(e) {
            function t(e, o) {
                var s;
                for (var a in e)
                    if ("function" == typeof e[a]) {
                        var u = e[a];
                        switch (a) {
                            case "before":
                                n[0].beforeAll(u);
                                break;
                            case "after":
                                n[0].afterAll(u);
                                break;
                            case "beforeEach":
                                n[0].beforeEach(u);
                                break;
                            case "afterEach":
                                n[0].afterEach(u);
                                break;
                            default:
                                var f = new i(a, u);
                                f.file = o, n[0].addTest(f)
                        }
                    } else s = r.create(n[0], a), n.unshift(s), t(e[a], o), n.shift()
            }
            var n = [e];
            e.on("require", t)
        }
    }, {
        "../suite": 37,
        "../test": 38
    }],
    11: [function(e, t, n) {
        n.bdd = e("./bdd"), n.tdd = e("./tdd"), n.qunit = e("./qunit"), n.exports = e("./exports")
    }, {
        "./bdd": 8,
        "./exports": 10,
        "./qunit": 12,
        "./tdd": 13
    }],
    12: [function(e, t, n) {
        var r = e("../suite"),
            i = e("../test"),
            o = e("escape-string-regexp");
        t.exports = function(t) {
            var n = [t];
            t.on("pre-require", function(s, a, u) {
                var f = e("./common")(n, s);
                s.before = f.before, s.after = f.after, s.beforeEach = f.beforeEach, s.afterEach = f.afterEach, s.run = u.options.delay && f.runWithSuite(t), s.suite = function(e) {
                    n.length > 1 && n.shift();
                    var t = r.create(n[0], e);
                    return t.file = a, n.unshift(t), t
                }, s.suite.only = function(e, t) {
                    var n = s.suite(e, t);
                    u.grep(n.fullTitle())
                }, s.test = function(e, t) {
                    var r = new i(e, t);
                    return r.file = a, n[0].addTest(r), r
                }, s.test.only = function(e, t) {
                    var n = s.test(e, t),
                        r = "^" + o(n.fullTitle()) + "$";
                    u.grep(new RegExp(r))
                }, s.test.skip = f.test.skip, s.test.retries = f.test.retries
            })
        }
    }, {
        "../suite": 37,
        "../test": 38,
        "./common": 9,
        "escape-string-regexp": 49
    }],
    13: [function(e, t, n) {
        var r = e("../suite"),
            i = e("../test"),
            o = e("escape-string-regexp");
        t.exports = function(t) {
            var n = [t];
            t.on("pre-require", function(s, a, u) {
                var f = e("./common")(n, s);
                s.setup = f.beforeEach, s.teardown = f.afterEach, s.suiteSetup = f.before, s.suiteTeardown = f.after, s.run = u.options.delay && f.runWithSuite(t), s.suite = function(e, t) {
                    var i = r.create(n[0], e);
                    return i.file = a, n.unshift(i), t.call(i), n.shift(), i
                }, s.suite.skip = function(e, t) {
                    var i = r.create(n[0], e);
                    i.pending = !0, n.unshift(i), t.call(i), n.shift()
                }, s.suite.only = function(e, t) {
                    var n = s.suite(e, t);
                    u.grep(n.fullTitle())
                }, s.test = function(e, t) {
                    var r = n[0];
                    r.isPending() && (t = null);
                    var o = new i(e, t);
                    return o.file = a, r.addTest(o), o
                }, s.test.only = function(e, t) {
                    var n = s.test(e, t),
                        r = "^" + o(n.fullTitle()) + "$";
                    u.grep(new RegExp(r))
                }, s.test.skip = f.test.skip, s.test.retries = f.test.retries
            })
        }
    }, {
        "../suite": 37,
        "../test": 38,
        "./common": 9,
        "escape-string-regexp": 49
    }],
    14: [function(e, t, n) {
        (function(r, i, o) {
            function s(e) {
                return f.join(o, "../images", e + ".png")
            }

            function a(e) {
                e = e || {}, this.files = [], this.options = e, e.grep && this.grep(new RegExp(e.grep)), e.fgrep && this.grep(e.fgrep), this.suite = new n.Suite("", new n.Context), this.ui(e.ui), this.bail(e.bail), this.reporter(e.reporter, e.reporterOptions), "undefined" != typeof e.timeout && null !== e.timeout && this.timeout(e.timeout), "undefined" != typeof e.retries && null !== e.retries && this.retries(e.retries), this.useColors(e.useColors), null !== e.enableTimeouts && this.enableTimeouts(e.enableTimeouts), e.slow && this.slow(e.slow)
            }
            var u = e("escape-string-regexp"),
                f = e("path"),
                l = e("./reporters"),
                c = e("./utils");
            if (n = t.exports = a, !r.browser) {
                var h = r.cwd();
                t.paths.push(h, f.join(h, "node_modules"))
            }
            n.utils = c, n.interfaces = e("./interfaces"), n.reporters = l, n.Runnable = e("./runnable"), n.Context = e("./context"), n.Runner = e("./runner"), n.Suite = e("./suite"), n.Hook = e("./hook"), n.Test = e("./test"), a.prototype.bail = function(e) {
                return arguments.length || (e = !0), this.suite.bail(e), this
            }, a.prototype.addFile = function(e) {
                return this.files.push(e), this
            }, a.prototype.reporter = function(t, n) {
                if ("function" == typeof t) this._reporter = t;
                else {
                    t = t || "spec";
                    var r;
                    if (l[t] && (r = l[t]), !r) try {
                        r = e(t)
                    } catch (i) {
                        -1 !== i.message.indexOf("Cannot find module") ? console.warn('"' + t + '" reporter not found') : console.warn('"' + t + '" reporter blew up with error:\n' + i.stack)
                    }
                    if (r || "teamcity" !== t || console.warn("The Teamcity reporter was moved to a package named mocha-teamcity-reporter (https://npmjs.org/package/mocha-teamcity-reporter)."), !r) throw new Error('invalid reporter "' + t + '"');
                    this._reporter = r
                }
                return this.options.reporterOptions = n, this
            }, a.prototype.ui = function(t) {
                if (t = t || "bdd", this._ui = n.interfaces[t], !this._ui) try {
                    this._ui = e(t)
                } catch (r) {
                    throw new Error('invalid interface "' + t + '"')
                }
                return this._ui = this._ui(this.suite), this.suite.on("pre-require", function(e) {
                    n.afterEach = e.afterEach || e.teardown, n.after = e.after || e.suiteTeardown, n.beforeEach = e.beforeEach || e.setup, n.before = e.before || e.suiteSetup, n.describe = e.describe || e.suite, n.it = e.it || e.test, n.setup = e.setup || e.beforeEach, n.suiteSetup = e.suiteSetup || e.before, n.suiteTeardown = e.suiteTeardown || e.after, n.suite = e.suite || e.describe, n.teardown = e.teardown || e.afterEach, n.test = e.test || e.it, n.run = e.run
                }), this
            }, a.prototype.loadFiles = function(t) {
                var n = this,
                    r = this.suite;
                this.files.forEach(function(t) {
                    t = f.resolve(t), r.emit("pre-require", i, t, n), r.emit("require", e(t), t, n), r.emit("post-require", i, t, n)
                }), t && t()
            }, a.prototype._growl = function(t, n) {
                var r = e("growl");
                t.on("end", function() {
                    var e = n.stats;
                    if (e.failures) {
                        var i = e.failures + " of " + t.total + " tests failed";
                        r(i, {
                            name: "mocha",
                            title: "Failed",
                            image: s("error")
                        })
                    } else r(e.passes + " tests passed in " + e.duration + "ms", {
                        name: "mocha",
                        title: "Passed",
                        image: s("ok")
                    })
                })
            }, a.prototype.grep = function(e) {
                return this.options.grep = "string" == typeof e ? new RegExp(u(e)) : e, this
            }, a.prototype.invert = function() {
                return this.options.invert = !0, this
            }, a.prototype.ignoreLeaks = function(e) {
                return this.options.ignoreLeaks = Boolean(e), this
            }, a.prototype.checkLeaks = function() {
                return this.options.ignoreLeaks = !1, this
            }, a.prototype.fullTrace = function() {
                return this.options.fullStackTrace = !0, this
            }, a.prototype.growl = function() {
                return this.options.growl = !0, this
            }, a.prototype.globals = function(e) {
                return this.options.globals = (this.options.globals || []).concat(e), this
            }, a.prototype.useColors = function(e) {
                return void 0 !== e && (this.options.useColors = e), this
            }, a.prototype.useInlineDiffs = function(e) {
                return this.options.useInlineDiffs = void 0 !== e && e, this
            }, a.prototype.timeout = function(e) {
                return this.suite.timeout(e), this
            }, a.prototype.retries = function(e) {
                return this.suite.retries(e), this
            }, a.prototype.slow = function(e) {
                return this.suite.slow(e), this
            }, a.prototype.enableTimeouts = function(e) {
                return this.suite.enableTimeouts(arguments.length && void 0 !== e ? e : !0), this
            }, a.prototype.asyncOnly = function() {
                return this.options.asyncOnly = !0, this
            }, a.prototype.noHighlighting = function() {
                return this.options.noHighlighting = !0, this
            }, a.prototype.allowUncaught = function() {
                return this.options.allowUncaught = !0, this
            }, a.prototype.delay = function() {
                return this.options.delay = !0, this
            }, a.prototype.run = function(e) {
                function t(t) {
                    s.done ? s.done(t, e) : e && e(t)
                }
                this.files.length && this.loadFiles();
                var r = this.suite,
                    i = this.options;
                i.files = this.files;
                var o = new n.Runner(r, i.delay),
                    s = new this._reporter(o, i);
                return o.ignoreLeaks = i.ignoreLeaks !== !1, o.fullStackTrace = i.fullStackTrace, o.asyncOnly = i.asyncOnly, o.allowUncaught = i.allowUncaught, i.grep && o.grep(i.grep, i.invert), i.globals && o.globals(i.globals), i.growl && this._growl(o, s), void 0 !== i.useColors && (n.reporters.Base.useColors = i.useColors), n.reporters.Base.inlineDiffs = i.useInlineDiffs, o.run(t)
            }
        }).call(this, e("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, "/lib")
    }, {
        "./context": 6,
        "./hook": 7,
        "./interfaces": 11,
        "./reporters": 22,
        "./runnable": 35,
        "./runner": 36,
        "./suite": 37,
        "./test": 38,
        "./utils": 39,
        _process: 58,
        "escape-string-regexp": 49,
        growl: 51,
        path: 43
    }],
    15: [function(e, t, n) {
        function r(e) {
            var t = /^((?:\d+)?\.?\d+) *(ms|seconds?|s|minutes?|m|hours?|h|days?|d|years?|y)?$/i.exec(e);
            if (t) {
                var n = parseFloat(t[1]),
                    r = (t[2] || "ms").toLowerCase();
                switch (r) {
                    case "years":
                    case "year":
                    case "y":
                        return n * c;
                    case "days":
                    case "day":
                    case "d":
                        return n * l;
                    case "hours":
                    case "hour":
                    case "h":
                        return n * f;
                    case "minutes":
                    case "minute":
                    case "m":
                        return n * u;
                    case "seconds":
                    case "second":
                    case "s":
                        return n * a;
                    case "ms":
                        return n
                }
            }
        }

        function i(e) {
            return e >= l ? Math.round(e / l) + "d" : e >= f ? Math.round(e / f) + "h" : e >= u ? Math.round(e / u) + "m" : e >= a ? Math.round(e / a) + "s" : e + "ms"
        }

        function o(e) {
            return s(e, l, "day") || s(e, f, "hour") || s(e, u, "minute") || s(e, a, "second") || e + " ms"
        }

        function s(e, t, n) {
            return t > e ? void 0 : 1.5 * t > e ? Math.floor(e / t) + " " + n : Math.ceil(e / t) + " " + n + "s"
        }
        var a = 1e3,
            u = 60 * a,
            f = 60 * u,
            l = 24 * f,
            c = 365.25 * l;
        t.exports = function(e, t) {
            return t = t || {}, "string" == typeof e ? r(e) : t["long"] ? o(e) : i(e)
        }
    }, {}],
    16: [function(e, t, n) {
        function r(e) {
            this.message = e
        }
        t.exports = r
    }, {}],
    17: [function(e, t, n) {
        (function(r, i) {
            function o(e) {
                var t = this.stats = {
                        suites: 0,
                        tests: 0,
                        passes: 0,
                        pending: 0,
                        failures: 0
                    },
                    n = this.failures = [];
                e && (this.runner = e, e.stats = t, e.on("start", function() {
                    t.start = new v
                }), e.on("suite", function(e) {
                    t.suites = t.suites || 0, e.root || t.suites++
                }), e.on("test end", function() {
                    t.tests = t.tests || 0, t.tests++
                }), e.on("pass", function(e) {
                    t.passes = t.passes || 0, e.duration > e.slow() ? e.speed = "slow" : e.duration > e.slow() / 2 ? e.speed = "medium" : e.speed = "fast", t.passes++
                }), e.on("fail", function(e, r) {
                    t.failures = t.failures || 0, t.failures++, e.err = r, n.push(e)
                }), e.on("end", function() {
                    t.end = new v, t.duration = new v - t.start
                }), e.on("pending", function() {
                    t.pending++
                }))
            }

            function s(e, t) {
                return e = String(e), Array(t - e.length + 1).join(" ") + e
            }

            function a(e, t) {
                var n = f(e, "WordsWithSpace", t),
                    r = n.split("\n");
                if (r.length > 4) {
                    var i = String(r.length).length;
                    n = r.map(function(e, t) {
                        return s(++t, i) + " | " + e
                    }).join("\n")
                }
                return n = "\n" + w("diff removed", "actual") + " " + w("diff added", "expected") + "\n\n" + n + "\n", n = n.replace(/^/gm, "      ")
            }

            function u(e, t) {
                function n(e) {
                    return t && (e = l(e)), "+" === e[0] ? i + c("diff added", e) : "-" === e[0] ? i + c("diff removed", e) : e.match(/\@\@/) ? null : e.match(/\\ No newline/) ? null : i + e
                }

                function r(e) {
                    return "undefined" != typeof e && null !== e
                }
                var i = "      ",
                    o = d.createPatch("string", e.actual, e.expected),
                    s = o.split("\n").splice(4);
                return "\n      " + c("diff added", "+ expected") + " " + c("diff removed", "- actual") + "\n\n" + s.map(n).filter(r).join("\n")
            }

            function f(e, t, n) {
                var r = n ? l(e.actual) : e.actual,
                    i = n ? l(e.expected) : e.expected;
                return d["diff" + t](r, i).map(function(e) {
                    return e.added ? c("diff added", e.value) : e.removed ? c("diff removed", e.value) : e.value
                }).join("")
            }

            function l(e) {
                return e.replace(/\t/g, "<tab>").replace(/\r/g, "<CR>").replace(/\n/g, "<LF>\n")
            }

            function c(e, t) {
                return t.split("\n").map(function(t) {
                    return w(e, t)
                }).join("\n")
            }

            function h(e, t) {
                return _.call(e) === _.call(t)
            }
            var p = e("tty"),
                d = e("diff"),
                g = e("../ms"),
                y = e("../utils"),
                m = r.browser ? null : e("supports-color");
            n = t.exports = o;
            var v = i.Date,
                b = (i.setTimeout, i.setInterval, i.clearTimeout, i.clearInterval, p.isatty(1) && p.isatty(2));
            n.useColors = !r.browser && (m || void 0 !== r.env.MOCHA_COLORS), n.inlineDiffs = !1, n.colors = {
                pass: 90,
                fail: 31,
                "bright pass": 92,
                "bright fail": 91,
                "bright yellow": 93,
                pending: 36,
                suite: 0,
                "error title": 0,
                "error message": 31,
                "error stack": 90,
                checkmark: 32,
                fast: 90,
                medium: 33,
                slow: 31,
                green: 32,
                light: 90,
                "diff gutter": 90,
                "diff added": 32,
                "diff removed": 31
            }, n.symbols = {
                ok: "✓",
                err: "✖",
                dot: "․"
            }, "win32" === r.platform && (n.symbols.ok = "√", n.symbols.err = "×", n.symbols.dot = ".");
            var w = n.color = function(e, t) {
                return n.useColors ? "[" + n.colors[e] + "m" + t + "[0m" : String(t)
            };
            n.window = {
                width: 75
            }, b && (n.window.width = r.stdout.getWindowSize ? r.stdout.getWindowSize(1)[0] : p.getWindowSize()[1]), n.cursor = {
                hide: function() {
                    b && r.stdout.write("[?25l")
                },
                show: function() {
                    b && r.stdout.write("[?25h")
                },
                deleteLine: function() {
                    b && r.stdout.write("[2K")
                },
                beginningOfLine: function() {
                    b && r.stdout.write("[0G")
                },
                CR: function() {
                    b ? (n.cursor.deleteLine(), n.cursor.beginningOfLine()) : r.stdout.write("\r")
                }
            }, n.list = function(e) {
                console.log(), e.forEach(function(e, t) {
                    var r, i, o = w("error title", "  %s) %s:\n") + w("error message", "     %s") + w("error stack", "\n%s\n"),
                        s = e.err;
                    i = s.message && "function" == typeof s.message.toString ? s.message + "" : "function" == typeof s.inspect ? s.inspect() + "" : "";
                    var f = s.stack || i,
                        l = f.indexOf(i),
                        c = s.actual,
                        p = s.expected,
                        d = !0;
                    if (-1 === l ? r = i : (l += i.length, r = f.slice(0, l), f = f.slice(l + 1)), s.uncaught && (r = "Uncaught " + r), s.showDiff !== !1 && h(c, p) && void 0 !== p) {
                        d = !1, y.isString(c) && y.isString(p) || (s.actual = c = y.stringify(c), s.expected = p = y.stringify(p)), o = w("error title", "  %s) %s:\n%s") + w("error stack", "\n%s\n");
                        var g = i.match(/^([^:]+): expected/);
                        r = "\n      " + w("error message", g ? g[1] : r), r += n.inlineDiffs ? a(s, d) : u(s, d)
                    }
                    f = f.replace(/^/gm, "  "), console.log(o, t + 1, e.fullTitle(), r, f)
                })
            }, o.prototype.epilogue = function() {
                var e, t = this.stats;
                console.log(), e = w("bright pass", " ") + w("green", " %d passing") + w("light", " (%s)"), console.log(e, t.passes || 0, g(t.duration)), t.pending && (e = w("pending", " ") + w("pending", " %d pending"), console.log(e, t.pending)), t.failures && (e = w("fail", "  %d failing"), console.log(e, t.failures), o.list(this.failures), console.log()), console.log()
            };
            var _ = Object.prototype.toString
        }).call(this, e("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "../ms": 15,
        "../utils": 39,
        _process: 58,
        diff: 48,
        "supports-color": 43,
        tty: 5
    }],
    18: [function(e, t, n) {
        function r(e) {
            function t() {
                return Array(n).join("  ")
            }
            i.call(this, e);
            var n = 2;
            e.on("suite", function(e) {
                e.root || (++n, console.log('%s<section class="suite">', t()), ++n, console.log("%s<h1>%s</h1>", t(), o.escape(e.title)), console.log("%s<dl>", t()))
            }), e.on("suite end", function(e) {
                e.root || (console.log("%s</dl>", t()), --n, console.log("%s</section>", t()), --n)
            }), e.on("pass", function(e) {
                console.log("%s  <dt>%s</dt>", t(), o.escape(e.title));
                var n = o.escape(o.clean(e.body));
                console.log("%s  <dd><pre><code>%s</code></pre></dd>", t(), n)
            }), e.on("fail", function(e, n) {
                console.log('%s  <dt class="error">%s</dt>', t(), o.escape(e.title));
                var r = o.escape(o.clean(e.fn.body));
                console.log('%s  <dd class="error"><pre><code>%s</code></pre></dd>', t(), r), console.log('%s  <dd class="error">%s</dd>', t(), o.escape(n))
            })
        }
        var i = e("./base"),
            o = e("../utils");
        n = t.exports = r
    }, {
        "../utils": 39,
        "./base": 17
    }],
    19: [function(e, t, n) {
        (function(r) {
            function i(e) {
                o.call(this, e);
                var t = this,
                    n = .75 * o.window.width | 0,
                    i = -1;
                e.on("start", function() {
                    r.stdout.write("\n")
                }), e.on("pending", function() {
                    ++i % n === 0 && r.stdout.write("\n  "), r.stdout.write(a("pending", o.symbols.dot))
                }), e.on("pass", function(e) {
                    ++i % n === 0 && r.stdout.write("\n  "), "slow" === e.speed ? r.stdout.write(a("bright yellow", o.symbols.dot)) : r.stdout.write(a(e.speed, o.symbols.dot))
                }), e.on("fail", function() {
                    ++i % n === 0 && r.stdout.write("\n  "), r.stdout.write(a("fail", o.symbols.dot))
                }), e.on("end", function() {
                    console.log(), t.epilogue()
                })
            }
            var o = e("./base"),
                s = e("../utils").inherits,
                a = o.color;
            n = t.exports = i, s(i, o)
        }).call(this, e("_process"))
    }, {
        "../utils": 39,
        "./base": 17,
        _process: 58
    }],
    20: [function(e, t, n) {
        (function(r, i) {
            function o(t) {
                var n = e("jade"),
                    o = f(i, "/templates/coverage.jade"),
                    l = u(o, "utf8"),
                    c = n.compile(l, {
                        filename: o
                    }),
                    h = this;
                a.call(this, t, !1), t.on("end", function() {
                    r.stdout.write(c({
                        cov: h.cov,
                        coverageClass: s
                    }))
                })
            }

            function s(e) {
                return e >= 75 ? "high" : e >= 50 ? "medium" : e >= 25 ? "low" : "terrible"
            }
            var a = e("./json-cov"),
                u = e("fs").readFileSync,
                f = e("path").join;
            n = t.exports = o
        }).call(this, e("_process"), "/lib/reporters")
    }, {
        "./json-cov": 23,
        _process: 58,
        fs: 43,
        jade: 43,
        path: 43
    }],
    21: [function(e, t, n) {
        (function(r) {
            function i(e) {
                function t(e) {
                    R[0] && R[0].appendChild(e)
                }

                function n() {
                    var e = p.tests / this.total * 100 | 0;
                    r && r.update(e).draw(i);
                    var t = new m - p.start;
                    l(w, p.passes), l(E, p.failures), l(k, (t / 1e3).toFixed(2))
                }
                h.call(this, e);
                var r, i, o = this,
                    p = this.stats,
                    g = a(v),
                    b = g.getElementsByTagName("li"),
                    w = b[1].getElementsByTagName("em")[0],
                    _ = b[1].getElementsByTagName("a")[0],
                    E = b[2].getElementsByTagName("em")[0],
                    x = b[2].getElementsByTagName("a")[0],
                    k = b[3].getElementsByTagName("em")[0],
                    T = g.getElementsByTagName("canvas")[0],
                    S = a('<ul id="mocha-report"></ul>'),
                    R = [S],
                    j = document.getElementById("mocha");
                if (T.getContext) {
                    var A = window.devicePixelRatio || 1;
                    T.style.width = T.width, T.style.height = T.height, T.width *= A, T.height *= A, i = T.getContext("2d"), i.scale(A, A), r = new d
                }
                return j ? (c(_, "click", function(e) {
                    e.preventDefault(), f();
                    var t = /pass/.test(S.className) ? "" : " pass";
                    S.className = S.className.replace(/fail|pass/g, "") + t, S.className.trim() && u("test pass")
                }), c(x, "click", function(e) {
                    e.preventDefault(), f();
                    var t = /fail/.test(S.className) ? "" : " fail";
                    S.className = S.className.replace(/fail|pass/g, "") + t, S.className.trim() && u("test fail")
                }), j.appendChild(g), j.appendChild(S), r && r.size(40), e.on("suite", function(e) {
                    if (!e.root) {
                        var t = o.suiteURL(e),
                            n = a('<li class="suite"><h1><a href="%s">%s</a></h1></li>', t, y(e.title));
                        R[0].appendChild(n), R.unshift(document.createElement("ul")), n.appendChild(R[0])
                    }
                }), e.on("suite end", function(e) {
                    e.root || R.shift()
                }), e.on("pass", function(e) {
                    var r = o.testURL(e),
                        i = '<li class="test pass %e"><h2>%e<span class="duration">%ems</span> <a href="%s" class="replay">‣</a></h2></li>',
                        s = a(i, e.speed, e.title, e.duration, r);
                    o.addCodeToggle(s, e.body), t(s), n()
                }), e.on("fail", function(e) {
                    var r, i = a('<li class="test fail"><h2>%e <a href="%e" class="replay">‣</a></h2></li>', e.title, o.testURL(e)),
                        s = e.err.toString();
                    if ("[object Error]" === s && (s = e.err.message), e.err.stack) {
                        var u = e.err.stack.indexOf(e.err.message);
                        r = -1 === u ? e.err.stack : e.err.stack.substr(e.err.message.length + u)
                    } else e.err.sourceURL && void 0 !== e.err.line && (r = "\n(" + e.err.sourceURL + ":" + e.err.line + ")");
                    r = r || "", e.err.htmlMessage && r ? i.appendChild(a('<div class="html-error">%s\n<pre class="error">%e</pre></div>', e.err.htmlMessage, r)) : e.err.htmlMessage ? i.appendChild(a('<div class="html-error">%s</div>', e.err.htmlMessage)) : i.appendChild(a('<pre class="error">%e%e</pre>', s, r)), o.addCodeToggle(i, e.body), t(i), n()
                }), void e.on("pending", function(e) {
                    var r = a('<li class="test pass pending"><h2>%e</h2></li>', e.title);
                    t(r), n()
                })) : s("#mocha div missing, add it to your document")
            }

            function o(e) {
                var t = window.location.search;
                return t && (t = t.replace(/[?&]grep=[^&\s]*/g, "").replace(/^&/, "?")), window.location.pathname + (t ? t + "&" : "?") + "grep=" + encodeURIComponent(g(e))
            }

            function s(e) {
                document.body.appendChild(a('<div id="mocha-error">%s</div>', e))
            }

            function a(e) {
                var t = arguments,
                    n = document.createElement("div"),
                    r = 1;
                return n.innerHTML = e.replace(/%([se])/g, function(e, n) {
                    switch (n) {
                        case "s":
                            return String(t[r++]);
                        case "e":
                            return y(t[r++])
                    }
                }), n.firstChild
            }

            function u(e) {
                for (var t = document.getElementsByClassName("suite"), n = 0; n < t.length; n++) {
                    var r = t[n].getElementsByClassName(e);
                    r.length || (t[n].className += " hidden")
                }
            }

            function f() {
                for (var e = document.getElementsByClassName("suite hidden"), t = 0; t < e.length; ++t) e[t].className = e[t].className.replace("suite hidden", "suite")
            }

            function l(e, t) {
                e.textContent ? e.textContent = t : e.innerText = t
            }

            function c(e, t, n) {
                e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent("on" + t, n)
            }
            var h = e("./base"),
                p = e("../utils"),
                d = e("../browser/progress"),
                g = e("escape-string-regexp"),
                y = p.escape,
                m = r.Date;
            r.setTimeout, r.setInterval, r.clearTimeout, r.clearInterval;
            n = t.exports = i;
            var v = '<ul id="mocha-stats"><li class="progress"><canvas width="40" height="40"></canvas></li><li class="passes"><a href="javascript:void(0);">passes:</a> <em>0</em></li><li class="failures"><a href="javascript:void(0);">failures:</a> <em>0</em></li><li class="duration">duration: <em>0</em>s</li></ul>';
            i.prototype.suiteURL = function(e) {
                return o(e.fullTitle())
            }, i.prototype.testURL = function(e) {
                return o(e.fullTitle())
            }, i.prototype.addCodeToggle = function(e, t) {
                var n = e.getElementsByTagName("h2")[0];
                c(n, "click", function() {
                    r.style.display = "none" === r.style.display ? "block" : "none"
                });
                var r = a("<pre><code>%e</code></pre>", p.clean(t));
                e.appendChild(r), r.style.display = "none"
            }
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "../browser/progress": 4,
        "../utils": 39,
        "./base": 17,
        "escape-string-regexp": 49
    }],
    22: [function(e, t, n) {
        n.Base = n.base = e("./base"), n.Dot = n.dot = e("./dot"), n.Doc = n.doc = e("./doc"), n.TAP = n.tap = e("./tap"), n.JSON = n.json = e("./json"), n.HTML = n.html = e("./html"), n.List = n.list = e("./list"), n.Min = n.min = e("./min"), n.Spec = n.spec = e("./spec"), n.Nyan = n.nyan = e("./nyan"), n.XUnit = n.xunit = e("./xunit"), n.Markdown = n.markdown = e("./markdown"), n.Progress = n.progress = e("./progress"), n.Landing = n.landing = e("./landing"), n.JSONCov = n["json-cov"] = e("./json-cov"), n.HTMLCov = n["html-cov"] = e("./html-cov"), n.JSONStream = n["json-stream"] = e("./json-stream")
    }, {
        "./base": 17,
        "./doc": 18,
        "./dot": 19,
        "./html": 21,
        "./html-cov": 20,
        "./json": 25,
        "./json-cov": 23,
        "./json-stream": 24,
        "./landing": 26,
        "./list": 27,
        "./markdown": 28,
        "./min": 29,
        "./nyan": 30,
        "./progress": 31,
        "./spec": 32,
        "./tap": 33,
        "./xunit": 34
    }],
    23: [function(e, t, n) {
        (function(r, i) {
            function o(e, t) {
                f.call(this, e), t = 1 === arguments.length || t;
                var n = this,
                    o = [],
                    a = [],
                    l = [];
                e.on("test end", function(e) {
                    o.push(e)
                }), e.on("pass", function(e) {
                    l.push(e)
                }), e.on("fail", function(e) {
                    a.push(e)
                }), e.on("end", function() {
                    var e = i._$jscoverage || {},
                        f = n.cov = s(e);
                    f.stats = n.stats, f.tests = o.map(u), f.failures = a.map(u), f.passes = l.map(u), t && r.stdout.write(JSON.stringify(f, null, 2))
                })
            }

            function s(e) {
                var t = {
                    instrumentation: "node-jscoverage",
                    sloc: 0,
                    hits: 0,
                    misses: 0,
                    coverage: 0,
                    files: []
                };
                for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                        var r = a(n, e[n]);
                        t.files.push(r), t.hits += r.hits, t.misses += r.misses, t.sloc += r.sloc
                    }
                return t.files.sort(function(e, t) {
                    return e.filename.localeCompare(t.filename)
                }), t.sloc > 0 && (t.coverage = t.hits / t.sloc * 100), t
            }

            function a(e, t) {
                var n = {
                    filename: e,
                    coverage: 0,
                    hits: 0,
                    misses: 0,
                    sloc: 0,
                    source: {}
                };
                return t.source.forEach(function(e, r) {
                    r++, 0 === t[r] ? (n.misses++, n.sloc++) : void 0 !== t[r] && (n.hits++, n.sloc++), n.source[r] = {
                        source: e,
                        coverage: void 0 === t[r] ? "" : t[r]
                    }
                }), n.coverage = n.hits / n.sloc * 100, n
            }

            function u(e) {
                return {
                    duration: e.duration,
                    currentRetry: e.currentRetry(),
                    fullTitle: e.fullTitle(),
                    title: e.title
                }
            }
            var f = e("./base");
            n = t.exports = o
        }).call(this, e("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "./base": 17,
        _process: 58
    }],
    24: [function(e, t, n) {
        (function(r) {
            function i(e) {
                s.call(this, e);
                var t = this,
                    n = e.total;
                e.on("start", function() {
                    console.log(JSON.stringify(["start", {
                        total: n
                    }]))
                }), e.on("pass", function(e) {
                    console.log(JSON.stringify(["pass", o(e)]))
                }), e.on("fail", function(e, t) {
                    e = o(e), e.err = t.message, e.stack = t.stack || null, console.log(JSON.stringify(["fail", e]))
                }), e.on("end", function() {
                    r.stdout.write(JSON.stringify(["end", t.stats]))
                })
            }

            function o(e) {
                return {
                    title: e.title,
                    fullTitle: e.fullTitle(),
                    duration: e.duration,
                    currentRetry: e.currentRetry()
                }
            }
            var s = e("./base");
            n = t.exports = i
        }).call(this, e("_process"))
    }, {
        "./base": 17,
        _process: 58
    }],
    25: [function(e, t, n) {
        (function(r) {
            function i(e) {
                a.call(this, e);
                var t = this,
                    n = [],
                    i = [],
                    s = [],
                    u = [];
                e.on("test end", function(e) {
                    n.push(e)
                }), e.on("pass", function(e) {
                    u.push(e)
                }), e.on("fail", function(e) {
                    s.push(e)
                }), e.on("pending", function(e) {
                    i.push(e)
                }), e.on("end", function() {
                    var a = {
                        stats: t.stats,
                        tests: n.map(o),
                        pending: i.map(o),
                        failures: s.map(o),
                        passes: u.map(o)
                    };
                    e.testResults = a, r.stdout.write(JSON.stringify(a, null, 2))
                })
            }

            function o(e) {
                return {
                    title: e.title,
                    fullTitle: e.fullTitle(),
                    duration: e.duration,
                    currentRetry: e.currentRetry(),
                    err: s(e.err || {})
                }
            }

            function s(e) {
                var t = {};
                return Object.getOwnPropertyNames(e).forEach(function(n) {
                    t[n] = e[n]
                }, e), t
            }
            var a = e("./base");
            n = t.exports = i
        }).call(this, e("_process"))
    }, {
        "./base": 17,
        _process: 58
    }],
    26: [function(e, t, n) {
        (function(r) {
            function i(e) {
                function t() {
                    var e = Array(i).join("-");
                    return "  " + u("runway", e)
                }
                o.call(this, e);
                var n = this,
                    i = .75 * o.window.width | 0,
                    s = e.total,
                    f = r.stdout,
                    l = u("plane", "✈"),
                    c = -1,
                    h = 0;
                e.on("start", function() {
                    f.write("\n\n\n  "), a.hide()
                }), e.on("test end", function(e) {
                    var n = -1 === c ? i * ++h / s | 0 : c;
                    "failed" === e.state && (l = u("plane crash", "✈"), c = n), f.write("[" + (i + 1) + "D[2A"), f.write(t()), f.write("\n  "), f.write(u("runway", Array(n).join("⋅"))), f.write(l), f.write(u("runway", Array(i - n).join("⋅") + "\n")), f.write(t()), f.write("[0m")
                }), e.on("end", function() {
                    a.show(), console.log(), n.epilogue()
                })
            }
            var o = e("./base"),
                s = e("../utils").inherits,
                a = o.cursor,
                u = o.color;
            n = t.exports = i, o.colors.plane = 0, o.colors["plane crash"] = 31, o.colors.runway = 90, s(i, o)
        }).call(this, e("_process"))
    }, {
        "../utils": 39,
        "./base": 17,
        _process: 58
    }],
    27: [function(e, t, n) {
        (function(r) {
            function i(e) {
                o.call(this, e);
                var t = this,
                    n = 0;
                e.on("start", function() {
                    console.log()
                }), e.on("test", function(e) {
                    r.stdout.write(a("pass", "    " + e.fullTitle() + ": "))
                }), e.on("pending", function(e) {
                    var t = a("checkmark", "  -") + a("pending", " %s");
                    console.log(t, e.fullTitle())
                }), e.on("pass", function(e) {
                    var t = a("checkmark", "  " + o.symbols.dot) + a("pass", " %s: ") + a(e.speed, "%dms");
                    u.CR(), console.log(t, e.fullTitle(), e.duration)
                }), e.on("fail", function(e) {
                    u.CR(), console.log(a("fail", "  %d) %s"), ++n, e.fullTitle())
                }), e.on("end", t.epilogue.bind(t))
            }
            var o = e("./base"),
                s = e("../utils").inherits,
                a = o.color,
                u = o.cursor;
            n = t.exports = i, s(i, o)
        }).call(this, e("_process"))
    }, {
        "../utils": 39,
        "./base": 17,
        _process: 58
    }],
    28: [function(e, t, n) {
        (function(r) {
            function i(e) {
                function t(e) {
                    return Array(f).join("#") + " " + e
                }

                function n(e, t) {
                    var r = t,
                        i = a + e.title;
                    return t = t[i] = t[i] || {
                        suite: e
                    }, e.suites.forEach(function(e) {
                        n(e, t)
                    }), r
                }

                function i(e, t) {
                    ++t;
                    var n, r = "";
                    for (var o in e) "suite" !== o && (o !== a && (n = " - [" + o.substring(1) + "]", n += "(#" + s.slug(e[o].suite.fullTitle()) + ")\n", r += Array(t).join("  ") + n), r += i(e[o], t));
                    return r
                }

                function u(e) {
                    var t = n(e, {});
                    return i(t, 0)
                }
                o.call(this, e);
                var f = 0,
                    l = "";
                u(e.suite), e.on("suite", function(e) {
                    ++f;
                    var n = s.slug(e.fullTitle());
                    l += '<a name="' + n + '"></a>\n', l += t(e.title) + "\n"
                }), e.on("suite end", function() {
                    --f
                }), e.on("pass", function(e) {
                    var t = s.clean(e.body);
                    l += e.title + ".\n", l += "\n```js\n", l += t + "\n", l += "```\n\n"
                }), e.on("end", function() {
                    r.stdout.write("# TOC\n"), r.stdout.write(u(e.suite)), r.stdout.write(l)
                })
            }
            var o = e("./base"),
                s = e("../utils"),
                a = "$";
            n = t.exports = i
        }).call(this, e("_process"))
    }, {
        "../utils": 39,
        "./base": 17,
        _process: 58
    }],
    29: [function(e, t, n) {
        (function(r) {
            function i(e) {
                o.call(this, e), e.on("start", function() {
                    r.stdout.write("[2J"), r.stdout.write("[1;3H")
                }), e.on("end", this.epilogue.bind(this))
            }
            var o = e("./base"),
                s = e("../utils").inherits;
            n = t.exports = i, s(i, o)
        }).call(this, e("_process"))
    }, {
        "../utils": 39,
        "./base": 17,
        _process: 58
    }],
    30: [function(e, t, n) {
        (function(r) {
            function i(e) {
                s.call(this, e);
                var t = this,
                    n = .75 * s.window.width | 0,
                    r = this.nyanCatWidth = 11;
                this.colorIndex = 0, this.numberOfLines = 4, this.rainbowColors = t.generateColors(), this.scoreboardWidth = 5, this.tick = 0, this.trajectories = [
                    [],
                    [],
                    [],
                    []
                ], this.trajectoryWidthMax = n - r, e.on("start", function() {
                    s.cursor.hide(), t.draw()
                }), e.on("pending", function() {
                    t.draw()
                }), e.on("pass", function() {
                    t.draw()
                }), e.on("fail", function() {
                    t.draw()
                }), e.on("end", function() {
                    s.cursor.show();
                    for (var e = 0; e < t.numberOfLines; e++) o("\n");
                    t.epilogue()
                })
            }

            function o(e) {
                r.stdout.write(e)
            }
            var s = e("./base"),
                a = e("../utils").inherits;
            n = t.exports = i, a(i, s), i.prototype.draw = function() {
                this.appendRainbow(), this.drawScoreboard(), this.drawRainbow(), this.drawNyanCat(), this.tick = !this.tick
            }, i.prototype.drawScoreboard = function() {
                function e(e, t) {
                    o(" "), o(s.color(e, t)), o("\n")
                }
                var t = this.stats;
                e("green", t.passes), e("fail", t.failures), e("pending", t.pending), o("\n"), this.cursorUp(this.numberOfLines)
            }, i.prototype.appendRainbow = function() {
                for (var e = this.tick ? "_" : "-", t = this.rainbowify(e), n = 0; n < this.numberOfLines; n++) {
                    var r = this.trajectories[n];
                    r.length >= this.trajectoryWidthMax && r.shift(), r.push(t)
                }
            }, i.prototype.drawRainbow = function() {
                var e = this;
                this.trajectories.forEach(function(t) {
                    o("[" + e.scoreboardWidth + "C"), o(t.join("")), o("\n")
                }), this.cursorUp(this.numberOfLines)
            }, i.prototype.drawNyanCat = function() {
                var e = this,
                    t = this.scoreboardWidth + this.trajectories[0].length,
                    n = "[" + t + "C",
                    r = "";
                o(n), o("_,------,"), o("\n"), o(n), r = e.tick ? "  " : "   ", o("_|" + r + "/\\_/\\ "), o("\n"), o(n), r = e.tick ? "_" : "__";
                var i = e.tick ? "~" : "^";
                o(i + "|" + r + this.face() + " "), o("\n"), o(n), r = e.tick ? " " : "  ", o(r + '""  "" '), o("\n"), this.cursorUp(this.numberOfLines)
            }, i.prototype.face = function() {
                var e = this.stats;
                return e.failures ? "( x .x)" : e.pending ? "( o .o)" : e.passes ? "( ^ .^)" : "( - .-)"
            }, i.prototype.cursorUp = function(e) {
                o("[" + e + "A")
            }, i.prototype.cursorDown = function(e) {
                o("[" + e + "B")
            }, i.prototype.generateColors = function() {
                for (var e = [], t = 0; 42 > t; t++) {
                    var n = Math.floor(Math.PI / 3),
                        r = t * (1 / 6),
                        i = Math.floor(3 * Math.sin(r) + 3),
                        o = Math.floor(3 * Math.sin(r + 2 * n) + 3),
                        s = Math.floor(3 * Math.sin(r + 4 * n) + 3);
                    e.push(36 * i + 6 * o + s + 16)
                }
                return e
            }, i.prototype.rainbowify = function(e) {
                if (!s.useColors) return e;
                var t = this.rainbowColors[this.colorIndex % this.rainbowColors.length];
                return this.colorIndex += 1, "[38;5;" + t + "m" + e + "[0m"
            }
        }).call(this, e("_process"))
    }, {
        "../utils": 39,
        "./base": 17,
        _process: 58
    }],
    31: [function(e, t, n) {
        (function(r) {
            function i(e, t) {
                o.call(this, e);
                var n = this,
                    i = .5 * o.window.width | 0,
                    s = e.total,
                    f = 0,
                    l = -1;
                t = t || {}, t.open = t.open || "[", t.complete = t.complete || "▬", t.incomplete = t.incomplete || o.symbols.dot, t.close = t.close || "]", t.verbose = !1, e.on("start", function() {
                    console.log(), u.hide()
                }), e.on("test end", function() {
                    f++;
                    var e = f / s,
                        n = i * e | 0,
                        o = i - n;
                    (n !== l || t.verbose) && (l = n, u.CR(), r.stdout.write("[J"), r.stdout.write(a("progress", "  " + t.open)), r.stdout.write(Array(n).join(t.complete)), r.stdout.write(Array(o).join(t.incomplete)), r.stdout.write(a("progress", t.close)), t.verbose && r.stdout.write(a("progress", " " + f + " of " + s)))
                }), e.on("end", function() {
                    u.show(), console.log(), n.epilogue()
                })
            }
            var o = e("./base"),
                s = e("../utils").inherits,
                a = o.color,
                u = o.cursor;
            n = t.exports = i, o.colors.progress = 90, s(i, o)
        }).call(this, e("_process"))
    }, {
        "../utils": 39,
        "./base": 17,
        _process: 58
    }],
    32: [function(e, t, n) {
        function r(e) {
            function t() {
                return Array(r).join("  ")
            }
            i.call(this, e);
            var n = this,
                r = 0,
                o = 0;
            e.on("start", function() {
                console.log()
            }), e.on("suite", function(e) {
                ++r, console.log(s("suite", "%s%s"), t(), e.title)
            }), e.on("suite end", function() {
                --r, 1 === r && console.log()
            }), e.on("pending", function(e) {
                var n = t() + s("pending", "  - %s");
                console.log(n, e.title)
            }), e.on("pass", function(e) {
                var n;
                "fast" === e.speed ? (n = t() + s("checkmark", "  " + i.symbols.ok) + s("pass", " %s"), a.CR(), console.log(n, e.title)) : (n = t() + s("checkmark", "  " + i.symbols.ok) + s("pass", " %s") + s(e.speed, " (%dms)"), a.CR(), console.log(n, e.title, e.duration))
            }), e.on("fail", function(e) {
                a.CR(), console.log(t() + s("fail", "  %d) %s"), ++o, e.title)
            }), e.on("end", n.epilogue.bind(n))
        }
        var i = e("./base"),
            o = e("../utils").inherits,
            s = i.color,
            a = i.cursor;
        n = t.exports = r, o(r, i)
    }, {
        "../utils": 39,
        "./base": 17
    }],
    33: [function(e, t, n) {
        function r(e) {
            o.call(this, e);
            var t = 1,
                n = 0,
                r = 0;
            e.on("start", function() {
                var t = e.grepTotal(e.suite);
                console.log("%d..%d", 1, t)
            }), e.on("test end", function() {
                ++t
            }), e.on("pending", function(e) {
                console.log("ok %d %s # SKIP -", t, i(e))
            }), e.on("pass", function(e) {
                n++, console.log("ok %d %s", t, i(e))
            }), e.on("fail", function(e, n) {
                r++, console.log("not ok %d %s", t, i(e)), n.stack && console.log(n.stack.replace(/^/gm, "  "))
            }), e.on("end", function() {
                console.log("# tests " + (n + r)), console.log("# pass " + n), console.log("# fail " + r)
            })
        }

        function i(e) {
            return e.fullTitle().replace(/#/g, "")
        }
        var o = e("./base");
        n = t.exports = r
    }, {
        "./base": 17
    }],
    34: [function(e, t, n) {
        (function(r, i) {
            function o(e, t) {
                a.call(this, e);
                var n = this.stats,
                    r = [],
                    i = this;
                if (t.reporterOptions && t.reporterOptions.output) {
                    if (!l.createWriteStream) throw new Error("file output not supported in browser");
                    h.sync(p.dirname(t.reporterOptions.output)), i.fileStream = l.createWriteStream(t.reporterOptions.output)
                }
                e.on("pending", function(e) {
                    r.push(e)
                }), e.on("pass", function(e) {
                    r.push(e)
                }), e.on("fail", function(e) {
                    r.push(e)
                }), e.on("end", function() {
                    i.write(s("testsuite", {
                        name: "Mocha Tests",
                        tests: n.tests,
                        failures: n.failures,
                        errors: n.failures,
                        skipped: n.tests - n.failures - n.passes,
                        timestamp: (new d).toUTCString(),
                        time: n.duration / 1e3 || 0
                    }, !1)), r.forEach(function(e) {
                        i.test(e)
                    }), i.write("</testsuite>")
                })
            }

            function s(e, t, n, r) {
                var i, o = n ? "/>" : ">",
                    s = [];
                for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && s.push(a + '="' + c(t[a]) + '"');
                return i = "<" + e + (s.length ? " " + s.join(" ") : "") + o, r && (i += r + "</" + e + o), i
            }
            var a = e("./base"),
                u = e("../utils"),
                f = u.inherits,
                l = e("fs"),
                c = u.escape,
                h = e("mkdirp"),
                p = e("path"),
                d = i.Date;
            i.setTimeout, i.setInterval, i.clearTimeout, i.clearInterval;
            n = t.exports = o, f(o, a), o.prototype.done = function(e, t) {
                this.fileStream ? this.fileStream.end(function() {
                    t(e)
                }) : t(e)
            }, o.prototype.write = function(e) {
                this.fileStream ? this.fileStream.write(e + "\n") : "object" == typeof r && r.stdout ? r.stdout.write(e + "\n") : console.log(e)
            }, o.prototype.test = function(e) {
                var t = {
                    classname: e.parent.fullTitle(),
                    name: e.title,
                    time: e.duration / 1e3 || 0
                };
                if ("failed" === e.state) {
                    var n = e.err;
                    this.write(s("testcase", t, !1, s("failure", {}, !1, c(n.message) + "\n" + c(n.stack))))
                } else e.isPending() ? this.write(s("testcase", t, !1, s("skipped", {}, !0))) : this.write(s("testcase", t, !0))
            }
        }).call(this, e("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "../utils": 39,
        "./base": 17,
        _process: 58,
        fs: 43,
        mkdirp: 55,
        path: 43
    }],
    35: [function(e, t, n) {
        (function(n) {
            function r(e, t) {
                this.title = e, this.fn = t, this.body = (t || "").toString(), this.async = t && t.length, this.sync = !this.async, this._timeout = 2e3, this._slow = 75, this._enableTimeouts = !0, this.timedOut = !1, this._trace = new Error("done() called multiple times"), this._retries = -1, this._currentRetry = 0, this.pending = !1
            }
            var i = e("events").EventEmitter,
                o = e("./pending"),
                s = e("debug")("mocha:runnable"),
                a = e("./ms"),
                u = e("./utils"),
                f = u.inherits,
                l = n.Date,
                c = n.setTimeout,
                h = (n.setInterval, n.clearTimeout),
                p = (n.clearInterval, Object.prototype.toString);
            t.exports = r, f(r, i), r.prototype.timeout = function(e) {
                return arguments.length ? (0 === e && (this._enableTimeouts = !1), "string" == typeof e && (e = a(e)), s("timeout %d", e), this._timeout = e, this.timer && this.resetTimeout(), this) : this._timeout
            }, r.prototype.slow = function(e) {
                return arguments.length ? ("string" == typeof e && (e = a(e)), s("timeout %d", e), this._slow = e, this) : this._slow
            }, r.prototype.enableTimeouts = function(e) {
                return arguments.length ? (s("enableTimeouts %s", e), this._enableTimeouts = e, this) : this._enableTimeouts
            }, r.prototype.skip = function() {
                throw new o
            }, r.prototype.isPending = function() {
                return this.pending || this.parent && this.parent.isPending()
            }, r.prototype.retries = function(e) {
                return arguments.length ? void(this._retries = e) : this._retries
            }, r.prototype.currentRetry = function(e) {
                return arguments.length ? void(this._currentRetry = e) : this._currentRetry
            }, r.prototype.fullTitle = function() {
                return this.parent.fullTitle() + " " + this.title
            }, r.prototype.clearTimeout = function() {
                h(this.timer)
            }, r.prototype.inspect = function() {
                return JSON.stringify(this, function(e, t) {
                    return "_" !== e[0] ? "parent" === e ? "#<Suite>" : "ctx" === e ? "#<Context>" : t : void 0
                }, 2)
            }, r.prototype.resetTimeout = function() {
                var e = this,
                    t = this.timeout() || 1e9;
                this._enableTimeouts && (this.clearTimeout(), this.timer = c(function() {
                    e._enableTimeouts && (e.callback(new Error("timeout of " + t + "ms exceeded. Ensure the done() callback is being called in this test.")), e.timedOut = !0)
                }, t))
            }, r.prototype.globals = function(e) {
                return arguments.length ? void(this._allowedGlobals = e) : this._allowedGlobals
            }, r.prototype.run = function(e) {
                function t(e) {
                    s || (s = !0, a.emit("error", e || new Error("done() called multiple times; stacktrace may be inaccurate")))
                }

                function n(n) {
                    var r = a.timeout();
                    if (!a.timedOut) {
                        if (o) return t(n || a._trace);
                        a.clearTimeout(), a.duration = new l - f, o = !0, !n && a.duration > r && a._enableTimeouts && (n = new Error("timeout of " + r + "ms exceeded. Ensure the done() callback is being called in this test.")), e(n)
                    }
                }

                function r(e) {
                    var t = e.call(c);
                    if (t && "function" == typeof t.then) a.resetTimeout(), t.then(function() {
                        return n(), null
                    }, function(e) {
                        n(e || new Error("Promise rejected with no or falsy reason"))
                    });
                    else {
                        if (a.asyncOnly) return n(new Error("--async-only option in use without declaring `done()` or returning a promise"));
                        n()
                    }
                }

                function i(e) {
                    e.call(c, function(e) {
                        return e instanceof Error || "[object Error]" === p.call(e) ? n(e) : e ? n("[object Object]" === Object.prototype.toString.call(e) ? new Error("done() invoked with non-Error: " + JSON.stringify(e)) : new Error("done() invoked with non-Error: " + e)) : void n()
                    })
                }
                var o, s, a = this,
                    f = new l,
                    c = this.ctx;
                if (c && c.runnable && c.runnable(this), this.callback = n, this.async) {
                    if (this.resetTimeout(), this.allowUncaught) return i(this.fn);
                    try {
                        i(this.fn)
                    } catch (h) {
                        n(u.getError(h))
                    }
                } else {
                    if (this.allowUncaught) return r(this.fn), void n();
                    try {
                        this.isPending() ? n() : r(this.fn)
                    } catch (h) {
                        n(u.getError(h))
                    }
                }
            }
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "./ms": 15,
        "./pending": 16,
        "./utils": 39,
        debug: 2,
        events: 3
    }],
    36: [function(e, t, n) {
        (function(n, r) {
            function i(e, t) {
                var n = this;
                this._globals = [], this._abort = !1, this._delay = t, this.suite = e, this.started = !1, this.total = e.total(), this.failures = 0, this.on("test end", function(e) {
                    n.checkGlobals(e)
                }), this.on("hook end", function(e) {
                    n.checkGlobals(e)
                }), this._defaultGrep = /.*/, this.grep(this._defaultGrep), this.globals(this.globalProps().concat(a()))
            }

            function o(e) {
                function t(e) {
                    for (var t = 0; t < e.length; t++) delete e[t].fn
                }
                _(e._beforeAll) && t(e._beforeAll), _(e._beforeEach) && t(e._beforeEach), _(e._afterAll) && t(e._afterAll), _(e._afterEach) && t(e._afterEach);
                for (var n = 0; n < e.tests.length; n++) delete e.tests[n].fn
            }

            function s(e, t) {
                return d(t, function(t) {
                    if (/^d+/.test(t)) return !1;
                    if (r.navigator && /^getInterface/.test(t)) return !1;
                    if (r.navigator && /^\d+/.test(t)) return !1;
                    if (/^mocha-/.test(t)) return !1;
                    var n = d(e, function(e) {
                        return ~e.indexOf("*") ? 0 === t.indexOf(e.split("*")[0]) : t === e
                    });
                    return !(n.length || r.navigator && "onerror" === t)
                })
            }

            function a() {
                if ("object" == typeof n && "string" == typeof n.version) {
                    var e = n.version.split("."),
                        t = l.reduce(e, function(e, t) {
                            return e << 8 | t
                        });
                    if (2315 > t) return ["errno"]
                }
                return []
            }
            var u = e("events").EventEmitter,
                f = e("./pending"),
                l = e("./utils"),
                c = l.inherits,
                h = e("debug")("mocha:runner"),
                p = e("./runnable"),
                d = l.filter,
                g = l.indexOf,
                y = l.keys,
                m = l.stackTraceFilter(),
                v = l.stringify,
                b = l.type,
                w = l.undefinedError,
                _ = l.isArray,
                E = ["setTimeout", "clearTimeout", "setInterval", "clearInterval", "XMLHttpRequest", "Date", "setImmediate", "clearImmediate"];
            t.exports = i, i.immediately = r.setImmediate || n.nextTick, c(i, u), i.prototype.grep = function(e, t) {
                return h("grep %s", e), this._grep = e, this._invert = t, this.total = this.grepTotal(this.suite), this
            }, i.prototype.grepTotal = function(e) {
                var t = this,
                    n = 0;
                return e.eachTest(function(e) {
                    var r = t._grep.test(e.fullTitle());
                    t._invert && (r = !r), r && n++
                }), n
            }, i.prototype.globalProps = function() {
                for (var e = y(r), t = 0; t < E.length; ++t) ~g(e, E[t]) || e.push(E[t]);
                return e
            }, i.prototype.globals = function(e) {
                return arguments.length ? (h("globals %j", e), this._globals = this._globals.concat(e), this) : this._globals
            }, i.prototype.checkGlobals = function(e) {
                if (!this.ignoreLeaks) {
                    var t, n = this._globals,
                        r = this.globalProps();
                    e && (n = n.concat(e._allowedGlobals || [])), this.prevGlobalsLength !== r.length && (this.prevGlobalsLength = r.length, t = s(n, r), this._globals = this._globals.concat(t), t.length > 1 ? this.fail(e, new Error("global leaks detected: " + t.join(", "))) : t.length && this.fail(e, new Error("global leak detected: " + t[0])))
                }
            }, i.prototype.fail = function(e, t) {
                ++this.failures, e.state = "failed", t instanceof Error || t && "string" == typeof t.message || (t = new Error("the " + b(t) + " " + v(t) + " was thrown, throw an Error :)")), t.stack = this.fullStackTrace || !t.stack ? t.stack : m(t.stack), this.emit("fail", e, t)
            }, i.prototype.failHook = function(e, t) {
                e.ctx && e.ctx.currentTest && (e.originalTitle = e.originalTitle || e.title, e.title = e.originalTitle + ' for "' + e.ctx.currentTest.title + '"'), this.fail(e, t), this.suite.bail() && this.emit("end")
            }, i.prototype.hook = function(e, t) {
                function n(e) {
                    var i = o[e];
                    return i ? (s.currentRunnable = i, i.ctx.currentTest = s.test, s.emit("hook", i), i.listeners("error").length || i.on("error", function(e) {
                        s.failHook(i, e)
                    }), void i.run(function(o) {
                        var a = i.error();
                        if (a && s.fail(s.test, a), o) {
                            if (!(o instanceof f)) return s.failHook(i, o), t(o);
                            r.pending = !0
                        }
                        s.emit("hook end", i), delete i.ctx.currentTest, n(++e)
                    })) : t()
                }
                var r = this.suite,
                    o = r["_" + e],
                    s = this;
                i.immediately(function() {
                    n(0)
                })
            }, i.prototype.hooks = function(e, t, n) {
                function r(s) {
                    return i.suite = s, s ? void i.hook(e, function(e) {
                        if (e) {
                            var s = i.suite;
                            return i.suite = o, n(e, s)
                        }
                        r(t.pop())
                    }) : (i.suite = o, n())
                }
                var i = this,
                    o = this.suite;
                r(t.pop())
            }, i.prototype.hookUp = function(e, t) {
                var n = [this.suite].concat(this.parents()).reverse();
                this.hooks(e, n, t)
            }, i.prototype.hookDown = function(e, t) {
                var n = [this.suite].concat(this.parents());
                this.hooks(e, n, t)
            }, i.prototype.parents = function() {
                for (var e = this.suite, t = []; e.parent;) e = e.parent, t.push(e);
                return t
            }, i.prototype.runTest = function(e) {
                var t = this,
                    n = this.test;
                if (this.asyncOnly && (n.asyncOnly = !0), this.allowUncaught) return n.allowUncaught = !0, n.run(e);
                try {
                    n.on("error", function(e) {
                        t.fail(n, e)
                    }), n.run(e)
                } catch (r) {
                    e(r)
                }
            }, i.prototype.runTests = function(e, t) {
                function n(e, r, i) {
                    var o = s.suite;
                    s.suite = i ? r.parent : r, s.suite ? s.hookUp("afterEach", function(e, i) {
                        return s.suite = o, e ? n(e, i, !0) : void t(r)
                    }) : (s.suite = o, t(r))
                }

                function r(u, l) {
                    if (s.failures && e._bail) return t();
                    if (s._abort) return t();
                    if (u) return n(u, l, !0);
                    if (o = a.shift(), !o) return t();
                    var c = s._grep.test(o.fullTitle());
                    return s._invert && (c = !c), c ? o.isPending() ? (s.emit("pending", o), s.emit("test end", o), r()) : (s.emit("test", s.test = o), void s.hookDown("beforeEach", function(t, i) {
                        return e.isPending() ? (s.emit("pending", o), s.emit("test end", o), r()) : t ? n(t, i, !1) : (s.currentRunnable = s.test, void s.runTest(function(e) {
                            if (o = s.test, e) {
                                var t = o.currentRetry();
                                if (e instanceof f) o.pending = !0, s.emit("pending", o);
                                else {
                                    if (t < o.retries()) {
                                        var n = o.clone();
                                        return n.currentRetry(t + 1), a.unshift(n), s.hookUp("afterEach", r)
                                    }
                                    s.fail(o, e)
                                }
                                return s.emit("test end", o), e instanceof f ? r() : s.hookUp("afterEach", r)
                            }
                            o.state = "passed", s.emit("pass", o), s.emit("test end", o), s.hookUp("afterEach", r)
                        }))
                    })) : void(s._grep !== s._defaultGrep ? i.immediately(r) : r())
                }
                var o, s = this,
                    a = e.tests.slice();
                this.next = r, this.hookErr = n, r()
            }, i.prototype.runSuite = function(e, t) {
                function n(t) {
                    if (t) return t === e ? r() : r(t);
                    if (s._abort) return r();
                    var a = e.suites[o++];
                    return a ? void(s._grep !== s._defaultGrep ? i.immediately(function() {
                        s.runSuite(a, n)
                    }) : s.runSuite(a, n)) : r()
                }

                function r(r) {
                    s.suite = e, s.nextSuite = n, u ? t(r) : (u = !0, delete s.test, s.hook("afterAll", function() {
                        s.emit("suite end", e), t(r)
                    }))
                }
                var o = 0,
                    s = this,
                    a = this.grepTotal(e),
                    u = !1;
                return h("run suite %s", e.fullTitle()), !a || s.failures && e._bail ? t() : (this.emit("suite", this.suite = e), this.nextSuite = n, void this.hook("beforeAll", function(t) {
                    return t ? r() : void s.runTests(e, n)
                }))
            }, i.prototype.uncaught = function(e) {
                e ? h("uncaught exception %s", e !== function() {
                    return this
                }.call(e) ? e : e.message || e) : (h("uncaught undefined exception"), e = w()), e.uncaught = !0;
                var t = this.currentRunnable;
                if (!t) return t = new p("Uncaught error outside test suite"), t.parent = this.suite, void(this.started ? this.fail(t, e) : (this.emit("start"), this.fail(t, e), this.emit("end")));
                if (t.clearTimeout(), !t.state) {
                    if (this.fail(t, e), "test" === t.type) return this.emit("test end", t), void this.hookUp("afterEach", this.next);
                    if ("hook" === t.type) {
                        var n = this.suite;
                        return t.fullTitle().indexOf("after each") > -1 ? this.hookErr(e, n, !0) : t.fullTitle().indexOf("before each") > -1 ? this.hookErr(e, n, !1) : this.nextSuite(n)
                    }
                    this.emit("end")
                }
            }, i.prototype.run = function(e) {
                function t(e) {
                    i.uncaught(e)
                }

                function r() {
                    i.started = !0, i.emit("start"), i.runSuite(s, function() {
                        h("finished running"), i.emit("end")
                    })
                }
                var i = this,
                    s = this.suite;
                return e = e || function() {}, h("start"), this.on("suite end", o), this.on("end", function() {
                    h("end"), n.removeListener("uncaughtException", t), e(i.failures)
                }), n.on("uncaughtException", t), this._delay ? (this.emit("waiting", s), s.once("run", r)) : r(), this
            }, i.prototype.abort = function() {
                return h("aborting"), this._abort = !0, this
            }
        }).call(this, e("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "./pending": 16,
        "./runnable": 35,
        "./utils": 39,
        _process: 58,
        debug: 2,
        events: 3
    }],
    37: [function(e, t, n) {
        function r(e, t) {
            function n() {}
            this.title = e, n.prototype = t, this.ctx = new n, this.suites = [], this.tests = [], this.pending = !1, this._beforeEach = [], this._beforeAll = [], this._afterEach = [], this._afterAll = [], this.root = !e, this._timeout = 2e3, this._enableTimeouts = !0, this._slow = 75, this._bail = !1, this._retries = -1, this.delayed = !1
        }
        var i = e("events").EventEmitter,
            o = e("./hook"),
            s = e("./utils"),
            a = s.inherits,
            u = e("debug")("mocha:suite"),
            f = e("./ms");
        n = t.exports = r, n.create = function(e, t) {
            var n = new r(t, e.ctx);
            return n.parent = e, t = n.fullTitle(), e.addSuite(n), n
        }, a(r, i), r.prototype.clone = function() {
            var e = new r(this.title);
            return u("clone"), e.ctx = this.ctx, e.timeout(this.timeout()), e.retries(this.retries()), e.enableTimeouts(this.enableTimeouts()), e.slow(this.slow()), e.bail(this.bail()), e
        }, r.prototype.timeout = function(e) {
            return arguments.length ? ("0" === e.toString() && (this._enableTimeouts = !1), "string" == typeof e && (e = f(e)), u("timeout %d", e), this._timeout = parseInt(e, 10), this) : this._timeout
        }, r.prototype.retries = function(e) {
            return arguments.length ? (u("retries %d", e), this._retries = parseInt(e, 10) || 0, this) : this._retries
        }, r.prototype.enableTimeouts = function(e) {
            return arguments.length ? (u("enableTimeouts %s", e), this._enableTimeouts = e, this) : this._enableTimeouts
        }, r.prototype.slow = function(e) {
            return arguments.length ? ("string" == typeof e && (e = f(e)), u("slow %d", e), this._slow = e, this) : this._slow
        }, r.prototype.bail = function(e) {
            return arguments.length ? (u("bail %s", e), this._bail = e, this) : this._bail
        }, r.prototype.isPending = function() {
            return this.pending || this.parent && this.parent.isPending()
        }, r.prototype.beforeAll = function(e, t) {
            if (this.isPending()) return this;
            "function" == typeof e && (t = e, e = t.name), e = '"before all" hook' + (e ? ": " + e : "");
            var n = new o(e, t);
            return n.parent = this, n.timeout(this.timeout()), n.retries(this.retries()), n.enableTimeouts(this.enableTimeouts()), n.slow(this.slow()), n.ctx = this.ctx, this._beforeAll.push(n), this.emit("beforeAll", n), this
        }, r.prototype.afterAll = function(e, t) {
            if (this.isPending()) return this;
            "function" == typeof e && (t = e, e = t.name), e = '"after all" hook' + (e ? ": " + e : "");
            var n = new o(e, t);
            return n.parent = this, n.timeout(this.timeout()), n.retries(this.retries()), n.enableTimeouts(this.enableTimeouts()), n.slow(this.slow()), n.ctx = this.ctx, this._afterAll.push(n), this.emit("afterAll", n), this
        }, r.prototype.beforeEach = function(e, t) {
            if (this.isPending()) return this;
            "function" == typeof e && (t = e, e = t.name), e = '"before each" hook' + (e ? ": " + e : "");
            var n = new o(e, t);
            return n.parent = this, n.timeout(this.timeout()), n.retries(this.retries()), n.enableTimeouts(this.enableTimeouts()), n.slow(this.slow()), n.ctx = this.ctx, this._beforeEach.push(n), this.emit("beforeEach", n), this
        }, r.prototype.afterEach = function(e, t) {
            if (this.isPending()) return this;
            "function" == typeof e && (t = e, e = t.name), e = '"after each" hook' + (e ? ": " + e : "");
            var n = new o(e, t);
            return n.parent = this, n.timeout(this.timeout()), n.retries(this.retries()), n.enableTimeouts(this.enableTimeouts()), n.slow(this.slow()), n.ctx = this.ctx, this._afterEach.push(n), this.emit("afterEach", n), this
        }, r.prototype.addSuite = function(e) {
            return e.parent = this, e.timeout(this.timeout()), e.retries(this.retries()), e.enableTimeouts(this.enableTimeouts()), e.slow(this.slow()), e.bail(this.bail()), this.suites.push(e), this.emit("suite", e), this
        }, r.prototype.addTest = function(e) {
            return e.parent = this, e.timeout(this.timeout()), e.retries(this.retries()), e.enableTimeouts(this.enableTimeouts()), e.slow(this.slow()), e.ctx = this.ctx, this.tests.push(e), this.emit("test", e), this
        }, r.prototype.fullTitle = function() {
            if (this.parent) {
                var e = this.parent.fullTitle();
                if (e) return e + " " + this.title
            }
            return this.title
        }, r.prototype.total = function() {
            return s.reduce(this.suites, function(e, t) {
                return e + t.total()
            }, 0) + this.tests.length
        }, r.prototype.eachTest = function(e) {
            return s.forEach(this.tests, e), s.forEach(this.suites, function(t) {
                t.eachTest(e)
            }), this
        }, r.prototype.run = function() {
            this.root && this.emit("run")
        }
    }, {
        "./hook": 7,
        "./ms": 15,
        "./utils": 39,
        debug: 2,
        events: 3
    }],
    38: [function(e, t, n) {
        function r(e, t) {
            i.call(this, e, t), this.pending = !t, this.type = "test"
        }
        var i = e("./runnable"),
            o = e("./utils").inherits;
        t.exports = r, o(r, i), r.prototype.clone = function() {
            var e = new r(this.title, this.fn);
            return e.timeout(this.timeout()), e.slow(this.slow()), e.enableTimeouts(this.enableTimeouts()), e.retries(this.retries()), e.currentRetry(this.currentRetry()), e.globals(this.globals()), e.parent = this.parent, e.file = this.file, e.ctx = this.ctx, e
        }
    }, {
        "./runnable": 35,
        "./utils": 39
    }],
    39: [function(e, t, n) {
        (function(t, r) {
            function i(e) {
                return !~m.indexOf(e)
            }

            function o(e) {
                return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\/\/(.*)/gm, '<span class="comment">//$1</span>').replace(/('.*?')/gm, '<span class="string">$1</span>').replace(/(\d+\.\d+)/gm, '<span class="number">$1</span>').replace(/(\d+)/gm, '<span class="number">$1</span>').replace(/\bnew[ \t]+(\w+)/gm, '<span class="keyword">new</span> <span class="init">$1</span>').replace(/\b(function|new|throw|return|var|if|else)\b/gm, '<span class="keyword">$1</span>')
            }

            function s(e, t) {
                switch (t = t || n.type(e)) {
                    case "function":
                        return "[Function]";
                    case "object":
                        return "{}";
                    case "array":
                        return "[]";
                    default:
                        return e.toString()
                }
            }

            function a(e, t, r) {
                function i(e, t) {
                    return new Array(t).join(e)
                }

                function o(e) {
                    switch (n.type(e)) {
                        case "null":
                        case "undefined":
                            e = "[" + e + "]";
                            break;
                        case "array":
                        case "object":
                            e = a(e, t, r + 1);
                            break;
                        case "boolean":
                        case "regexp":
                        case "symbol":
                        case "number":
                            e = 0 === e && 1 / e === -(1 / 0) ? "-0" : e.toString();
                            break;
                        case "date":
                            var i;
                            i = isNaN(e.getTime()) ? e.toString() : e.toISOString ? e.toISOString() : y(e), e = "[Date: " + i + "]";
                            break;
                        case "buffer":
                            var o = e.toJSON();
                            o = o.data && o.type ? o.data : o, e = "[Buffer: " + a(o, 2, r + 1) + "]";
                            break;
                        default:
                            e = "[Function]" === e || "[Circular]" === e ? e : JSON.stringify(e)
                    }
                    return e
                }
                if ("undefined" == typeof t) return o(e);
                r = r || 1;
                var s = t * r,
                    u = v(e) ? "[" : "{",
                    f = v(e) ? "]" : "}",
                    l = "number" == typeof e.length ? e.length : n.keys(e).length;
                for (var c in e) Object.prototype.hasOwnProperty.call(e, c) && (--l, u += "\n " + i(" ", s) + (v(e) ? "" : '"' + c + '": ') + o(e[c]) + (l ? "," : ""));
                return u + (1 !== u.length ? "\n" + i(" ", --s) + f : f)
            }
            var u = e("path").basename,
                f = e("debug")("mocha:watch"),
                l = e("fs").existsSync || e("path").existsSync,
                c = e("glob"),
                h = e("path").join,
                p = e("fs").readdirSync,
                d = e("fs").statSync,
                g = e("fs").watchFile,
                y = e("to-iso-string"),
                m = ["node_modules", ".git"];
            n.inherits = e("util").inherits, n.escape = function(e) {
                return String(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }, n.forEach = function(e, t, n) {
                for (var r = 0, i = e.length; i > r; r++) t.call(n, e[r], r)
            }, n.isString = function(e) {
                return "string" == typeof e
            }, n.map = function(e, t, n) {
                for (var r = [], i = 0, o = e.length; o > i; i++) r.push(t.call(n, e[i], i, e));
                return r
            }, n.indexOf = function(e, t, n) {
                for (var r = n || 0, i = e.length; i > r; r++)
                    if (e[r] === t) return r;
                return -1
            }, n.reduce = function(e, t, n) {
                for (var r = n, i = 0, o = e.length; o > i; i++) r = t(r, e[i], i, e);
                return r
            }, n.filter = function(e, t) {
                for (var n = [], r = 0, i = e.length; i > r; r++) {
                    var o = e[r];
                    t(o, r, e) && n.push(o)
                }
                return n
            }, n.keys = "function" == typeof Object.keys ? Object.keys : function(e) {
                var t = [],
                    n = Object.prototype.hasOwnProperty;
                for (var r in e) n.call(e, r) && t.push(r);
                return t
            }, n.watch = function(e, t) {
                var n = {
                    interval: 100
                };
                e.forEach(function(e) {
                    f("file %s", e), g(e, n, function(n, r) {
                        r.mtime < n.mtime && t(e)
                    })
                })
            };
            var v = "function" == typeof Array.isArray ? Array.isArray : function(e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            };
            n.isArray = v, "undefined" != typeof r && r.prototype && (r.prototype.toJSON = r.prototype.toJSON || function() {
                return Array.prototype.slice.call(this, 0)
            }), n.files = function(e, t, r) {
                r = r || [], t = t || ["js"];
                var o = new RegExp("\\.(" + t.join("|") + ")$");
                return p(e).filter(i).forEach(function(i) {
                    i = h(e, i), d(i).isDirectory() ? n.files(i, t, r) : i.match(o) && r.push(i)
                }), r
            }, n.slug = function(e) {
                return e.toLowerCase().replace(/ +/g, "-").replace(/[^-\w]/g, "")
            }, n.clean = function(e) {
                e = e.replace(/\r\n?|[\n\u2028\u2029]/g, "\n").replace(/^\uFEFF/, "").replace(/^function *\(.*\)\s*\{|\(.*\) *=> *\{?/, "").replace(/\s+\}$/, "");
                var t = e.match(/^\n?( *)/)[1].length,
                    r = e.match(/^\n?(\t*)/)[1].length,
                    i = new RegExp("^\n?" + (r ? "	" : " ") + "{" + (r ? r : t) + "}", "gm");
                return e = e.replace(i, ""), n.trim(e)
            }, n.trim = function(e) {
                return e.replace(/^\s+|\s+$/g, "")
            }, n.parseQuery = function(e) {
                return n.reduce(e.replace("?", "").split("&"), function(e, t) {
                    var n = t.indexOf("="),
                        r = t.slice(0, n),
                        i = t.slice(++n);
                    return e[r] = decodeURIComponent(i), e
                }, {})
            }, n.highlightTags = function(e) {
                for (var t = document.getElementById("mocha").getElementsByTagName(e), n = 0, r = t.length; r > n; ++n) t[n].innerHTML = o(t[n].innerHTML)
            }, n.type = function(e) {
                return void 0 === e ? "undefined" : null === e ? "null" : "undefined" != typeof r && r.isBuffer(e) ? "buffer" : Object.prototype.toString.call(e).replace(/^\[.+\s(.+?)\]$/, "$1").toLowerCase()
            }, n.stringify = function(e) {
                var t = n.type(e);
                if (!~n.indexOf(["object", "array", "function"], t)) {
                    if ("buffer" !== t) return a(e);
                    var r = e.toJSON();
                    return a(r.data && r.type ? r.data : r, 2).replace(/,(\n|$)/g, "$1")
                }
                for (var i in e)
                    if (Object.prototype.hasOwnProperty.call(e, i)) return a(n.canonicalize(e), 2).replace(/,(\n|$)/g, "$1");
                return s(e, t)
            }, n.isBuffer = function(e) {
                return "undefined" != typeof r && r.isBuffer(e)
            }, n.canonicalize = function(e, t) {
                function r(e, n) {
                    t.push(e), n(), t.pop()
                }
                var i, o, a = n.type(e);
                if (t = t || [], -1 !== n.indexOf(t, e)) return "[Circular]";
                switch (a) {
                    case "undefined":
                    case "buffer":
                    case "null":
                        i = e;
                        break;
                    case "array":
                        r(e, function() {
                            i = n.map(e, function(e) {
                                return n.canonicalize(e, t)
                            })
                        });
                        break;
                    case "function":
                        for (o in e) {
                            i = {};
                            break
                        }
                        if (!i) {
                            i = s(e, a);
                            break
                        }
                    case "object":
                        i = i || {}, r(e, function() {
                            n.forEach(n.keys(e).sort(), function(r) {
                                i[r] = n.canonicalize(e[r], t)
                            })
                        });
                        break;
                    case "date":
                    case "number":
                    case "regexp":
                    case "boolean":
                    case "symbol":
                        i = e;
                        break;
                    default:
                        i = e + ""
                }
                return i
            }, n.lookupFiles = function b(e, t, n) {
                var r = [],
                    i = new RegExp("\\.(" + t.join("|") + ")$");
                if (!l(e)) {
                    if (!l(e + ".js")) {
                        if (r = c.sync(e), !r.length) throw new Error("cannot resolve path (or pattern) '" + e + "'");
                        return r
                    }
                    e += ".js"
                }
                try {
                    var o = d(e);
                    if (o.isFile()) return e
                } catch (s) {
                    return
                }
                return p(e).forEach(function(o) {
                    o = h(e, o);
                    try {
                        var s = d(o);
                        if (s.isDirectory()) return void(n && (r = r.concat(b(o, t, n))))
                    } catch (a) {
                        return
                    }
                    s.isFile() && i.test(o) && "." !== u(o)[0] && r.push(o)
                }), r
            }, n.undefinedError = function() {
                return new Error("Caught undefined error, did you throw without specifying what?")
            }, n.getError = function(e) {
                return e || n.undefinedError()
            }, n.stackTraceFilter = function() {
                function e(e) {
                    return ~e.indexOf("node_modules" + i + "mocha" + i) || ~e.indexOf("components" + i + "mochajs" + i) || ~e.indexOf("components" + i + "mocha" + i) || ~e.indexOf(i + "mocha.js")
                }

                function r(e) {
                    return ~e.indexOf("(timers.js:") || ~e.indexOf("(events.js:") || ~e.indexOf("(node.js:") || ~e.indexOf("(module.js:") || ~e.indexOf("GeneratorFunctionPrototype.next (native)") || !1
                }
                var i = "/",
                    o = "undefined" == typeof document ? {
                        node: !0
                    } : {
                        browser: !0
                    },
                    s = o.node ? t.cwd() + i : ("undefined" == typeof location ? window.location : location).href.replace(/\/[^\/]*$/, "/");
                return function(t) {
                    return t = t.split("\n"), t = n.reduce(t, function(t, n) {
                        return e(n) ? t : o.node && r(n) ? t : (/\(?.+:\d+:\d+\)?$/.test(n) && (n = n.replace(s, "")), t.push(n), t)
                    }, []), t.join("\n")
                }
            }
        }).call(this, e("_process"), e("buffer").Buffer)
    }, {
        _process: 58,
        buffer: 45,
        debug: 2,
        fs: 43,
        glob: 43,
        path: 43,
        "to-iso-string": 72,
        util: 75
    }],
    40: [function(e, t, n) {
        "use strict";

        function r() {
            for (var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", t = 0, n = e.length; n > t; ++t) u[t] = e[t], f[e.charCodeAt(t)] = t;
            f["-".charCodeAt(0)] = 62, f["_".charCodeAt(0)] = 63
        }

        function i(e) {
            var t, n, r, i, o, s, a = e.length;
            if (a % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
            o = "=" === e[a - 2] ? 2 : "=" === e[a - 1] ? 1 : 0, s = new l(3 * a / 4 - o), r = o > 0 ? a - 4 : a;
            var u = 0;
            for (t = 0, n = 0; r > t; t += 4, n += 3) i = f[e.charCodeAt(t)] << 18 | f[e.charCodeAt(t + 1)] << 12 | f[e.charCodeAt(t + 2)] << 6 | f[e.charCodeAt(t + 3)], s[u++] = i >> 16 & 255, s[u++] = i >> 8 & 255, s[u++] = 255 & i;
            return 2 === o ? (i = f[e.charCodeAt(t)] << 2 | f[e.charCodeAt(t + 1)] >> 4, s[u++] = 255 & i) : 1 === o && (i = f[e.charCodeAt(t)] << 10 | f[e.charCodeAt(t + 1)] << 4 | f[e.charCodeAt(t + 2)] >> 2, s[u++] = i >> 8 & 255, s[u++] = 255 & i), s
        }

        function o(e) {
            return u[e >> 18 & 63] + u[e >> 12 & 63] + u[e >> 6 & 63] + u[63 & e]
        }

        function s(e, t, n) {
            for (var r, i = [], s = t; n > s; s += 3) r = (e[s] << 16) + (e[s + 1] << 8) + e[s + 2], i.push(o(r));
            return i.join("")
        }

        function a(e) {
            for (var t, n = e.length, r = n % 3, i = "", o = [], a = 16383, f = 0, l = n - r; l > f; f += a) o.push(s(e, f, f + a > l ? l : f + a));
            return 1 === r ? (t = e[n - 1], i += u[t >> 2], i += u[t << 4 & 63], i += "==") : 2 === r && (t = (e[n - 2] << 8) + e[n - 1], i += u[t >> 10], i += u[t >> 4 & 63], i += u[t << 2 & 63], i += "="), o.push(i), o.join("")
        }
        n.toByteArray = i, n.fromByteArray = a;
        var u = [],
            f = [],
            l = "undefined" != typeof Uint8Array ? Uint8Array : Array;
        r()
    }, {}],
    41: [function(e, t, n) {}, {}],
    42: [function(e, t, n) {
        (function(n) {
            function r(e) {
                return this instanceof r ? (e = e || {}, i.call(this, e), void(this.label = void 0 !== e.label ? e.label : "stdout")) : new r(e)
            }
            var i = e("stream").Writable,
                o = e("util").inherits;
            t.exports = r, o(r, i), r.prototype._write = function(e, t, r) {
                var i = e.toString ? e.toString() : e;
                this.label === !1 ? console.log(i) : console.log(this.label + ":", i), n.nextTick(r)
            }
        }).call(this, e("_process"))
    }, {
        _process: 58,
        stream: 59,
        util: 75
    }],
    43: [function(e, t, n) {
        arguments[4][41][0].apply(n, arguments)
    }, {
        dup: 41
    }],
    44: [function(e, t, n) {
        (function(t) {
            "use strict";
            var r = e("buffer"),
                i = r.Buffer,
                o = r.SlowBuffer,
                s = r.kMaxLength || 2147483647;
            n.alloc = function(e, t, n) {
                if ("function" == typeof i.alloc) return i.alloc(e, t, n);
                if ("number" == typeof n) throw new TypeError("encoding must not be number");
                if ("number" != typeof e) throw new TypeError("size must be a number");
                if (e > s) throw new RangeError("size is too large");
                var r = n,
                    o = t;
                void 0 === o && (r = void 0, o = 0);
                var a = new i(e);
                if ("string" == typeof o)
                    for (var u = new i(o, r), f = u.length, l = -1; ++l < e;) a[l] = u[l % f];
                else a.fill(o);
                return a
            }, n.allocUnsafe = function(e) {
                if ("function" == typeof i.allocUnsafe) return i.allocUnsafe(e);
                if ("number" != typeof e) throw new TypeError("size must be a number");
                if (e > s) throw new RangeError("size is too large");
                return new i(e)
            }, n.from = function(e, n, r) {
                if ("function" == typeof i.from && (!t.Uint8Array || Uint8Array.from !== i.from)) return i.from(e, n, r);
                if ("number" == typeof e) throw new TypeError('"value" argument must not be a number');
                if ("string" == typeof e) return new i(e, n);
                if ("undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer) {
                    var o = n;
                    if (1 === arguments.length) return new i(e);
                    "undefined" == typeof o && (o = 0);
                    var s = r;
                    if ("undefined" == typeof s && (s = e.byteLength - o), o >= e.byteLength) throw new RangeError("'offset' is out of bounds");
                    if (s > e.byteLength - o) throw new RangeError("'length' is out of bounds");
                    return new i(e.slice(o, o + s))
                }
                if (i.isBuffer(e)) {
                    var a = new i(e.length);
                    return e.copy(a, 0, 0, e.length), a
                }
                if (e) {
                    if (Array.isArray(e) || "undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length" in e) return new i(e);
                    if ("Buffer" === e.type && Array.isArray(e.data)) return new i(e.data)
                }
                throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
            }, n.allocUnsafeSlow = function(e) {
                if ("function" == typeof i.allocUnsafeSlow) return i.allocUnsafeSlow(e);
                if ("number" != typeof e) throw new TypeError("size must be a number");
                if (e >= s) throw new RangeError("size is too large");
                return new o(e)
            }
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        buffer: 45
    }],
    45: [function(e, t, n) {
        (function(t) {
            "use strict";

            function r() {
                try {
                    var e = new Uint8Array(1);
                    return e.foo = function() {
                        return 42
                    }, 42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength
                } catch (t) {
                    return !1
                }
            }

            function i() {
                return s.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
            }

            function o(e, t) {
                if (i() < t) throw new RangeError("Invalid typed array length");
                return s.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t), e.__proto__ = s.prototype) : (null === e && (e = new s(t)), e.length = t), e
            }

            function s(e, t, n) {
                if (!(s.TYPED_ARRAY_SUPPORT || this instanceof s)) return new s(e, t, n);
                if ("number" == typeof e) {
                    if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
                    return l(this, e)
                }
                return a(this, e, t, n)
            }

            function a(e, t, n, r) {
                if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
                return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? p(e, t, n, r) : "string" == typeof t ? c(e, t, n) : d(e, t)
            }

            function u(e) {
                if ("number" != typeof e) throw new TypeError('"size" argument must be a number')
            }

            function f(e, t, n, r) {
                return u(t), 0 >= t ? o(e, t) : void 0 !== n ? "string" == typeof r ? o(e, t).fill(n, r) : o(e, t).fill(n) : o(e, t)
            }

            function l(e, t) {
                if (u(t), e = o(e, 0 > t ? 0 : 0 | g(t)), !s.TYPED_ARRAY_SUPPORT)
                    for (var n = 0; t > n; n++) e[n] = 0;
                return e
            }

            function c(e, t, n) {
                if ("string" == typeof n && "" !== n || (n = "utf8"), !s.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
                var r = 0 | m(t, n);
                return e = o(e, r), e.write(t, n), e
            }

            function h(e, t) {
                var n = 0 | g(t.length);
                e = o(e, n);
                for (var r = 0; n > r; r += 1) e[r] = 255 & t[r];
                return e
            }

            function p(e, t, n, r) {
                if (t.byteLength, 0 > n || t.byteLength < n) throw new RangeError("'offset' is out of bounds");
                if (t.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");
                return t = void 0 === r ? new Uint8Array(t, n) : new Uint8Array(t, n, r), s.TYPED_ARRAY_SUPPORT ? (e = t, e.__proto__ = s.prototype) : e = h(e, t), e
            }

            function d(e, t) {
                if (s.isBuffer(t)) {
                    var n = 0 | g(t.length);
                    return e = o(e, n), 0 === e.length ? e : (t.copy(e, 0, 0, n), e)
                }
                if (t) {
                    if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || X(t.length) ? o(e, 0) : h(e, t);
                    if ("Buffer" === t.type && K(t.data)) return h(e, t.data)
                }
                throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
            }

            function g(e) {
                if (e >= i()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i().toString(16) + " bytes");
                return 0 | e
            }

            function y(e) {
                return +e != e && (e = 0), s.alloc(+e)
            }

            function m(e, t) {
                if (s.isBuffer(e)) return e.length;
                if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
                "string" != typeof e && (e = "" + e);
                var n = e.length;
                if (0 === n) return 0;
                for (var r = !1;;) switch (t) {
                    case "ascii":
                    case "binary":
                    case "raw":
                    case "raws":
                        return n;
                    case "utf8":
                    case "utf-8":
                    case void 0:
                        return Y(e).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return 2 * n;
                    case "hex":
                        return n >>> 1;
                    case "base64":
                        return H(e).length;
                    default:
                        if (r) return Y(e).length;
                        t = ("" + t).toLowerCase(), r = !0
                }
            }

            function v(e, t, n) {
                var r = !1;
                if ((void 0 === t || 0 > t) && (t = 0), t > this.length) return "";
                if ((void 0 === n || n > this.length) && (n = this.length), 0 >= n) return "";
                if (n >>>= 0, t >>>= 0, t >= n) return "";
                for (e || (e = "utf8");;) switch (e) {
                    case "hex":
                        return C(this, t, n);
                    case "utf8":
                    case "utf-8":
                        return j(this, t, n);
                    case "ascii":
                        return L(this, t, n);
                    case "binary":
                        return O(this, t, n);
                    case "base64":
                        return R(this, t, n);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return M(this, t, n);
                    default:
                        if (r) throw new TypeError("Unknown encoding: " + e);
                        e = (e + "").toLowerCase(), r = !0
                }
            }

            function b(e, t, n) {
                var r = e[t];
                e[t] = e[n], e[n] = r
            }

            function w(e, t, n, r) {
                function i(e, t) {
                    return 1 === o ? e[t] : e.readUInt16BE(t * o)
                }
                var o = 1,
                    s = e.length,
                    a = t.length;
                if (void 0 !== r && (r = String(r).toLowerCase(), "ucs2" === r || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
                    if (e.length < 2 || t.length < 2) return -1;
                    o = 2, s /= 2, a /= 2, n /= 2
                }
                for (var u = -1, f = 0; s > n + f; f++)
                    if (i(e, n + f) === i(t, -1 === u ? 0 : f - u)) {
                        if (-1 === u && (u = f), f - u + 1 === a) return (n + u) * o
                    } else -1 !== u && (f -= f - u), u = -1;
                return -1
            }

            function _(e, t, n, r) {
                n = Number(n) || 0;
                var i = e.length - n;
                r ? (r = Number(r), r > i && (r = i)) : r = i;
                var o = t.length;
                if (o % 2 !== 0) throw new Error("Invalid hex string");
                r > o / 2 && (r = o / 2);
                for (var s = 0; r > s; s++) {
                    var a = parseInt(t.substr(2 * s, 2), 16);
                    if (isNaN(a)) return s;
                    e[n + s] = a
                }
                return s
            }

            function E(e, t, n, r) {
                return G(Y(t, e.length - n), e, n, r)
            }

            function x(e, t, n, r) {
                return G(F(t), e, n, r)
            }

            function k(e, t, n, r) {
                return x(e, t, n, r)
            }

            function T(e, t, n, r) {
                return G(H(t), e, n, r)
            }

            function S(e, t, n, r) {
                return G(J(t, e.length - n), e, n, r)
            }

            function R(e, t, n) {
                return 0 === t && n === e.length ? V.fromByteArray(e) : V.fromByteArray(e.slice(t, n))
            }

            function j(e, t, n) {
                n = Math.min(e.length, n);
                for (var r = [], i = t; n > i;) {
                    var o = e[i],
                        s = null,
                        a = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;
                    if (n >= i + a) {
                        var u, f, l, c;
                        switch (a) {
                            case 1:
                                128 > o && (s = o);
                                break;
                            case 2:
                                u = e[i + 1], 128 === (192 & u) && (c = (31 & o) << 6 | 63 & u, c > 127 && (s = c));
                                break;
                            case 3:
                                u = e[i + 1], f = e[i + 2], 128 === (192 & u) && 128 === (192 & f) && (c = (15 & o) << 12 | (63 & u) << 6 | 63 & f, c > 2047 && (55296 > c || c > 57343) && (s = c));
                                break;
                            case 4:
                                u = e[i + 1], f = e[i + 2], l = e[i + 3], 128 === (192 & u) && 128 === (192 & f) && 128 === (192 & l) && (c = (15 & o) << 18 | (63 & u) << 12 | (63 & f) << 6 | 63 & l, c > 65535 && 1114112 > c && (s = c))
                        }
                    }
                    null === s ? (s = 65533, a = 1) : s > 65535 && (s -= 65536, r.push(s >>> 10 & 1023 | 55296), s = 56320 | 1023 & s), r.push(s), i += a
                }
                return A(r)
            }

            function A(e) {
                var t = e.length;
                if (Q >= t) return String.fromCharCode.apply(String, e);
                for (var n = "", r = 0; t > r;) n += String.fromCharCode.apply(String, e.slice(r, r += Q));
                return n
            }

            function L(e, t, n) {
                var r = "";
                n = Math.min(e.length, n);
                for (var i = t; n > i; i++) r += String.fromCharCode(127 & e[i]);
                return r
            }

            function O(e, t, n) {
                var r = "";
                n = Math.min(e.length, n);
                for (var i = t; n > i; i++) r += String.fromCharCode(e[i]);
                return r
            }

            function C(e, t, n) {
                var r = e.length;
                (!t || 0 > t) && (t = 0), (!n || 0 > n || n > r) && (n = r);
                for (var i = "", o = t; n > o; o++) i += q(e[o]);
                return i
            }

            function M(e, t, n) {
                for (var r = e.slice(t, n), i = "", o = 0; o < r.length; o += 2) i += String.fromCharCode(r[o] + 256 * r[o + 1]);
                return i
            }

            function B(e, t, n) {
                if (e % 1 !== 0 || 0 > e) throw new RangeError("offset is not uint");
                if (e + t > n) throw new RangeError("Trying to access beyond buffer length")
            }

            function P(e, t, n, r, i, o) {
                if (!s.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (t > i || o > t) throw new RangeError('"value" argument is out of bounds');
                if (n + r > e.length) throw new RangeError("Index out of range")
            }

            function U(e, t, n, r) {
                0 > t && (t = 65535 + t + 1);
                for (var i = 0, o = Math.min(e.length - n, 2); o > i; i++) e[n + i] = (t & 255 << 8 * (r ? i : 1 - i)) >>> 8 * (r ? i : 1 - i)
            }

            function D(e, t, n, r) {
                0 > t && (t = 4294967295 + t + 1);
                for (var i = 0, o = Math.min(e.length - n, 4); o > i; i++) e[n + i] = t >>> 8 * (r ? i : 3 - i) & 255
            }

            function N(e, t, n, r, i, o) {
                if (n + r > e.length) throw new RangeError("Index out of range");
                if (0 > n) throw new RangeError("Index out of range")
            }

            function I(e, t, n, r, i) {
                return i || N(e, t, n, 4, 3.4028234663852886e38, -3.4028234663852886e38), Z.write(e, t, n, r, 23, 4), n + 4
            }

            function z(e, t, n, r, i) {
                return i || N(e, t, n, 8, 1.7976931348623157e308, -1.7976931348623157e308), Z.write(e, t, n, r, 52, 8), n + 8
            }

            function $(e) {
                if (e = W(e).replace(ee, ""), e.length < 2) return "";
                for (; e.length % 4 !== 0;) e += "=";
                return e
            }

            function W(e) {
                return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
            }

            function q(e) {
                return 16 > e ? "0" + e.toString(16) : e.toString(16)
            }

            function Y(e, t) {
                t = t || 1 / 0;
                for (var n, r = e.length, i = null, o = [], s = 0; r > s; s++) {
                    if (n = e.charCodeAt(s), n > 55295 && 57344 > n) {
                        if (!i) {
                            if (n > 56319) {
                                (t -= 3) > -1 && o.push(239, 191, 189);
                                continue
                            }
                            if (s + 1 === r) {
                                (t -= 3) > -1 && o.push(239, 191, 189);
                                continue
                            }
                            i = n;
                            continue
                        }
                        if (56320 > n) {
                            (t -= 3) > -1 && o.push(239, 191, 189), i = n;
                            continue
                        }
                        n = (i - 55296 << 10 | n - 56320) + 65536
                    } else i && (t -= 3) > -1 && o.push(239, 191, 189);
                    if (i = null, 128 > n) {
                        if ((t -= 1) < 0) break;
                        o.push(n)
                    } else if (2048 > n) {
                        if ((t -= 2) < 0) break;
                        o.push(n >> 6 | 192, 63 & n | 128)
                    } else if (65536 > n) {
                        if ((t -= 3) < 0) break;
                        o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                    } else {
                        if (!(1114112 > n)) throw new Error("Invalid code point");
                        if ((t -= 4) < 0) break;
                        o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                    }
                }
                return o
            }

            function F(e) {
                for (var t = [], n = 0; n < e.length; n++) t.push(255 & e.charCodeAt(n));
                return t
            }

            function J(e, t) {
                for (var n, r, i, o = [], s = 0; s < e.length && !((t -= 2) < 0); s++) n = e.charCodeAt(s), r = n >> 8, i = n % 256, o.push(i), o.push(r);
                return o
            }

            function H(e) {
                return V.toByteArray($(e))
            }

            function G(e, t, n, r) {
                for (var i = 0; r > i && !(i + n >= t.length || i >= e.length); i++) t[i + n] = e[i];
                return i
            }

            function X(e) {
                return e !== e
            }
            var V = e("base64-js"),
                Z = e("ieee754"),
                K = e("isarray");
            n.Buffer = s, n.SlowBuffer = y, n.INSPECT_MAX_BYTES = 50, s.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : r(), n.kMaxLength = i(), s.poolSize = 8192, s._augment = function(e) {
                return e.__proto__ = s.prototype, e
            }, s.from = function(e, t, n) {
                return a(null, e, t, n)
            }, s.TYPED_ARRAY_SUPPORT && (s.prototype.__proto__ = Uint8Array.prototype, s.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && s[Symbol.species] === s && Object.defineProperty(s, Symbol.species, {
                value: null,
                configurable: !0
            })), s.alloc = function(e, t, n) {
                return f(null, e, t, n)
            }, s.allocUnsafe = function(e) {
                return l(null, e)
            }, s.allocUnsafeSlow = function(e) {
                return l(null, e)
            }, s.isBuffer = function(e) {
                return !(null == e || !e._isBuffer)
            }, s.compare = function(e, t) {
                if (!s.isBuffer(e) || !s.isBuffer(t)) throw new TypeError("Arguments must be Buffers");
                if (e === t) return 0;
                for (var n = e.length, r = t.length, i = 0, o = Math.min(n, r); o > i; ++i)
                    if (e[i] !== t[i]) {
                        n = e[i], r = t[i];
                        break
                    }
                return r > n ? -1 : n > r ? 1 : 0
            }, s.isEncoding = function(e) {
                switch (String(e).toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "binary":
                    case "base64":
                    case "raw":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return !0;
                    default:
                        return !1
                }
            }, s.concat = function(e, t) {
                if (!K(e)) throw new TypeError('"list" argument must be an Array of Buffers');
                if (0 === e.length) return s.alloc(0);
                var n;
                if (void 0 === t)
                    for (t = 0, n = 0; n < e.length; n++) t += e[n].length;
                var r = s.allocUnsafe(t),
                    i = 0;
                for (n = 0; n < e.length; n++) {
                    var o = e[n];
                    if (!s.isBuffer(o)) throw new TypeError('"list" argument must be an Array of Buffers');
                    o.copy(r, i), i += o.length
                }
                return r
            }, s.byteLength = m, s.prototype._isBuffer = !0, s.prototype.swap16 = function() {
                var e = this.length;
                if (e % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                for (var t = 0; e > t; t += 2) b(this, t, t + 1);
                return this
            }, s.prototype.swap32 = function() {
                var e = this.length;
                if (e % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                for (var t = 0; e > t; t += 4) b(this, t, t + 3), b(this, t + 1, t + 2);
                return this
            }, s.prototype.toString = function() {
                var e = 0 | this.length;
                return 0 === e ? "" : 0 === arguments.length ? j(this, 0, e) : v.apply(this, arguments)
            }, s.prototype.equals = function(e) {
                if (!s.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                return this === e ? !0 : 0 === s.compare(this, e)
            }, s.prototype.inspect = function() {
                var e = "",
                    t = n.INSPECT_MAX_BYTES;
                return this.length > 0 && (e = this.toString("hex", 0, t).match(/.{2}/g).join(" "), this.length > t && (e += " ... ")), "<Buffer " + e + ">"
            }, s.prototype.compare = function(e, t, n, r, i) {
                if (!s.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                if (void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0), void 0 === r && (r = 0), void 0 === i && (i = this.length), 0 > t || n > e.length || 0 > r || i > this.length) throw new RangeError("out of range index");
                if (r >= i && t >= n) return 0;
                if (r >= i) return -1;
                if (t >= n) return 1;
                if (t >>>= 0, n >>>= 0, r >>>= 0, i >>>= 0, this === e) return 0;
                for (var o = i - r, a = n - t, u = Math.min(o, a), f = this.slice(r, i), l = e.slice(t, n), c = 0; u > c; ++c)
                    if (f[c] !== l[c]) {
                        o = f[c], a = l[c];
                        break
                    }
                return a > o ? -1 : o > a ? 1 : 0
            }, s.prototype.indexOf = function(e, t, n) {
                if ("string" == typeof t ? (n = t, t = 0) : t > 2147483647 ? t = 2147483647 : -2147483648 > t && (t = -2147483648), t >>= 0, 0 === this.length) return -1;
                if (t >= this.length) return -1;
                if (0 > t && (t = Math.max(this.length + t, 0)), "string" == typeof e && (e = s.from(e, n)), s.isBuffer(e)) return 0 === e.length ? -1 : w(this, e, t, n);
                if ("number" == typeof e) return s.TYPED_ARRAY_SUPPORT && "function" === Uint8Array.prototype.indexOf ? Uint8Array.prototype.indexOf.call(this, e, t) : w(this, [e], t, n);
                throw new TypeError("val must be string, number or Buffer")
            }, s.prototype.includes = function(e, t, n) {
                return -1 !== this.indexOf(e, t, n)
            }, s.prototype.write = function(e, t, n, r) {
                if (void 0 === t) r = "utf8", n = this.length, t = 0;
                else if (void 0 === n && "string" == typeof t) r = t, n = this.length, t = 0;
                else {
                    if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    t = 0 | t, isFinite(n) ? (n = 0 | n, void 0 === r && (r = "utf8")) : (r = n, n = void 0)
                }
                var i = this.length - t;
                if ((void 0 === n || n > i) && (n = i), e.length > 0 && (0 > n || 0 > t) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                r || (r = "utf8");
                for (var o = !1;;) switch (r) {
                    case "hex":
                        return _(this, e, t, n);
                    case "utf8":
                    case "utf-8":
                        return E(this, e, t, n);
                    case "ascii":
                        return x(this, e, t, n);
                    case "binary":
                        return k(this, e, t, n);
                    case "base64":
                        return T(this, e, t, n);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return S(this, e, t, n);
                    default:
                        if (o) throw new TypeError("Unknown encoding: " + r);
                        r = ("" + r).toLowerCase(), o = !0
                }
            }, s.prototype.toJSON = function() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                }
            };
            var Q = 4096;
            s.prototype.slice = function(e, t) {
                var n = this.length;
                e = ~~e, t = void 0 === t ? n : ~~t, 0 > e ? (e += n, 0 > e && (e = 0)) : e > n && (e = n), 0 > t ? (t += n, 0 > t && (t = 0)) : t > n && (t = n), e > t && (t = e);
                var r;
                if (s.TYPED_ARRAY_SUPPORT) r = this.subarray(e, t), r.__proto__ = s.prototype;
                else {
                    var i = t - e;
                    r = new s(i, void 0);
                    for (var o = 0; i > o; o++) r[o] = this[o + e]
                }
                return r
            }, s.prototype.readUIntLE = function(e, t, n) {
                e = 0 | e, t = 0 | t, n || B(e, t, this.length);
                for (var r = this[e], i = 1, o = 0; ++o < t && (i *= 256);) r += this[e + o] * i;
                return r
            }, s.prototype.readUIntBE = function(e, t, n) {
                e = 0 | e, t = 0 | t, n || B(e, t, this.length);
                for (var r = this[e + --t], i = 1; t > 0 && (i *= 256);) r += this[e + --t] * i;
                return r
            }, s.prototype.readUInt8 = function(e, t) {
                return t || B(e, 1, this.length), this[e]
            }, s.prototype.readUInt16LE = function(e, t) {
                return t || B(e, 2, this.length), this[e] | this[e + 1] << 8
            }, s.prototype.readUInt16BE = function(e, t) {
                return t || B(e, 2, this.length), this[e] << 8 | this[e + 1]
            }, s.prototype.readUInt32LE = function(e, t) {
                return t || B(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
            }, s.prototype.readUInt32BE = function(e, t) {
                return t || B(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
            }, s.prototype.readIntLE = function(e, t, n) {
                e = 0 | e, t = 0 | t, n || B(e, t, this.length);
                for (var r = this[e], i = 1, o = 0; ++o < t && (i *= 256);) r += this[e + o] * i;
                return i *= 128, r >= i && (r -= Math.pow(2, 8 * t)), r
            }, s.prototype.readIntBE = function(e, t, n) {
                e = 0 | e, t = 0 | t, n || B(e, t, this.length);
                for (var r = t, i = 1, o = this[e + --r]; r > 0 && (i *= 256);) o += this[e + --r] * i;
                return i *= 128, o >= i && (o -= Math.pow(2, 8 * t)), o
            }, s.prototype.readInt8 = function(e, t) {
                return t || B(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
            }, s.prototype.readInt16LE = function(e, t) {
                t || B(e, 2, this.length);
                var n = this[e] | this[e + 1] << 8;
                return 32768 & n ? 4294901760 | n : n
            }, s.prototype.readInt16BE = function(e, t) {
                t || B(e, 2, this.length);
                var n = this[e + 1] | this[e] << 8;
                return 32768 & n ? 4294901760 | n : n
            }, s.prototype.readInt32LE = function(e, t) {
                return t || B(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
            }, s.prototype.readInt32BE = function(e, t) {
                return t || B(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
            }, s.prototype.readFloatLE = function(e, t) {
                return t || B(e, 4, this.length), Z.read(this, e, !0, 23, 4)
            }, s.prototype.readFloatBE = function(e, t) {
                return t || B(e, 4, this.length), Z.read(this, e, !1, 23, 4)
            }, s.prototype.readDoubleLE = function(e, t) {
                return t || B(e, 8, this.length), Z.read(this, e, !0, 52, 8)
            }, s.prototype.readDoubleBE = function(e, t) {
                return t || B(e, 8, this.length), Z.read(this, e, !1, 52, 8)
            }, s.prototype.writeUIntLE = function(e, t, n, r) {
                if (e = +e, t = 0 | t, n = 0 | n, !r) {
                    var i = Math.pow(2, 8 * n) - 1;
                    P(this, e, t, n, i, 0)
                }
                var o = 1,
                    s = 0;
                for (this[t] = 255 & e; ++s < n && (o *= 256);) this[t + s] = e / o & 255;
                return t + n
            }, s.prototype.writeUIntBE = function(e, t, n, r) {
                if (e = +e, t = 0 | t, n = 0 | n, !r) {
                    var i = Math.pow(2, 8 * n) - 1;
                    P(this, e, t, n, i, 0)
                }
                var o = n - 1,
                    s = 1;
                for (this[t + o] = 255 & e; --o >= 0 && (s *= 256);) this[t + o] = e / s & 255;
                return t + n
            }, s.prototype.writeUInt8 = function(e, t, n) {
                return e = +e, t = 0 | t, n || P(this, e, t, 1, 255, 0), s.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1
            }, s.prototype.writeUInt16LE = function(e, t, n) {
                return e = +e, t = 0 | t, n || P(this, e, t, 2, 65535, 0), s.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : U(this, e, t, !0), t + 2
            }, s.prototype.writeUInt16BE = function(e, t, n) {
                return e = +e, t = 0 | t, n || P(this, e, t, 2, 65535, 0), s.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : U(this, e, t, !1), t + 2
            }, s.prototype.writeUInt32LE = function(e, t, n) {
                return e = +e, t = 0 | t, n || P(this, e, t, 4, 4294967295, 0), s.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : D(this, e, t, !0), t + 4
            }, s.prototype.writeUInt32BE = function(e, t, n) {
                return e = +e, t = 0 | t, n || P(this, e, t, 4, 4294967295, 0), s.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : D(this, e, t, !1), t + 4
            }, s.prototype.writeIntLE = function(e, t, n, r) {
                if (e = +e, t = 0 | t, !r) {
                    var i = Math.pow(2, 8 * n - 1);
                    P(this, e, t, n, i - 1, -i)
                }
                var o = 0,
                    s = 1,
                    a = 0;
                for (this[t] = 255 & e; ++o < n && (s *= 256);) 0 > e && 0 === a && 0 !== this[t + o - 1] && (a = 1), this[t + o] = (e / s >> 0) - a & 255;
                return t + n
            }, s.prototype.writeIntBE = function(e, t, n, r) {
                if (e = +e, t = 0 | t, !r) {
                    var i = Math.pow(2, 8 * n - 1);
                    P(this, e, t, n, i - 1, -i)
                }
                var o = n - 1,
                    s = 1,
                    a = 0;
                for (this[t + o] = 255 & e; --o >= 0 && (s *= 256);) 0 > e && 0 === a && 0 !== this[t + o + 1] && (a = 1), this[t + o] = (e / s >> 0) - a & 255;
                return t + n
            }, s.prototype.writeInt8 = function(e, t, n) {
                return e = +e, t = 0 | t, n || P(this, e, t, 1, 127, -128), s.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), 0 > e && (e = 255 + e + 1), this[t] = 255 & e, t + 1
            }, s.prototype.writeInt16LE = function(e, t, n) {
                return e = +e, t = 0 | t, n || P(this, e, t, 2, 32767, -32768), s.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : U(this, e, t, !0), t + 2
            }, s.prototype.writeInt16BE = function(e, t, n) {
                return e = +e, t = 0 | t, n || P(this, e, t, 2, 32767, -32768), s.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : U(this, e, t, !1), t + 2
            }, s.prototype.writeInt32LE = function(e, t, n) {
                return e = +e, t = 0 | t, n || P(this, e, t, 4, 2147483647, -2147483648), s.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : D(this, e, t, !0), t + 4
            }, s.prototype.writeInt32BE = function(e, t, n) {
                return e = +e, t = 0 | t, n || P(this, e, t, 4, 2147483647, -2147483648), 0 > e && (e = 4294967295 + e + 1), s.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : D(this, e, t, !1), t + 4
            }, s.prototype.writeFloatLE = function(e, t, n) {
                return I(this, e, t, !0, n)
            }, s.prototype.writeFloatBE = function(e, t, n) {
                return I(this, e, t, !1, n)
            }, s.prototype.writeDoubleLE = function(e, t, n) {
                return z(this, e, t, !0, n)
            }, s.prototype.writeDoubleBE = function(e, t, n) {
                return z(this, e, t, !1, n)
            }, s.prototype.copy = function(e, t, n, r) {
                if (n || (n = 0), r || 0 === r || (r = this.length), t >= e.length && (t = e.length), t || (t = 0), r > 0 && n > r && (r = n), r === n) return 0;
                if (0 === e.length || 0 === this.length) return 0;
                if (0 > t) throw new RangeError("targetStart out of bounds");
                if (0 > n || n >= this.length) throw new RangeError("sourceStart out of bounds");
                if (0 > r) throw new RangeError("sourceEnd out of bounds");
                r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);
                var i, o = r - n;
                if (this === e && t > n && r > t)
                    for (i = o - 1; i >= 0; i--) e[i + t] = this[i + n];
                else if (1e3 > o || !s.TYPED_ARRAY_SUPPORT)
                    for (i = 0; o > i; i++) e[i + t] = this[i + n];
                else Uint8Array.prototype.set.call(e, this.subarray(n, n + o), t);
                return o
            }, s.prototype.fill = function(e, t, n, r) {
                if ("string" == typeof e) {
                    if ("string" == typeof t ? (r = t, t = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), 1 === e.length) {
                        var i = e.charCodeAt(0);
                        256 > i && (e = i)
                    }
                    if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
                    if ("string" == typeof r && !s.isEncoding(r)) throw new TypeError("Unknown encoding: " + r)
                } else "number" == typeof e && (e = 255 & e);
                if (0 > t || this.length < t || this.length < n) throw new RangeError("Out of range index");
                if (t >= n) return this;
                t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0);
                var o;
                if ("number" == typeof e)
                    for (o = t; n > o; o++) this[o] = e;
                else {
                    var a = s.isBuffer(e) ? e : Y(new s(e, r).toString()),
                        u = a.length;
                    for (o = 0; n - t > o; o++) this[o + t] = a[o % u]
                }
                return this
            };
            var ee = /[^+\/0-9A-Za-z-_]/g
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "base64-js": 40,
        ieee754: 52,
        isarray: 46
    }],
    46: [function(e, t, n) {
        var r = {}.toString;
        t.exports = Array.isArray || function(e) {
            return "[object Array]" == r.call(e)
        }
    }, {}],
    47: [function(e, t, n) {
        (function(e) {
            function t(e) {
                return Array.isArray ? Array.isArray(e) : "[object Array]" === y(e)
            }

            function r(e) {
                return "boolean" == typeof e
            }

            function i(e) {
                return null === e
            }

            function o(e) {
                return null == e
            }

            function s(e) {
                return "number" == typeof e
            }

            function a(e) {
                return "string" == typeof e
            }

            function u(e) {
                return "symbol" == typeof e
            }

            function f(e) {
                return void 0 === e
            }

            function l(e) {
                return "[object RegExp]" === y(e)
            }

            function c(e) {
                return "object" == typeof e && null !== e
            }

            function h(e) {
                return "[object Date]" === y(e)
            }

            function p(e) {
                return "[object Error]" === y(e) || e instanceof Error
            }

            function d(e) {
                return "function" == typeof e
            }

            function g(e) {
                return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || "undefined" == typeof e
            }

            function y(e) {
                return Object.prototype.toString.call(e)
            }
            n.isArray = t, n.isBoolean = r, n.isNull = i, n.isNullOrUndefined = o, n.isNumber = s, n.isString = a, n.isSymbol = u, n.isUndefined = f, n.isRegExp = l, n.isObject = c, n.isDate = h, n.isError = p, n.isFunction = d, n.isPrimitive = g, n.isBuffer = e.isBuffer
        }).call(this, {
            isBuffer: e("../../is-buffer/index.js")
        })
    }, {
        "../../is-buffer/index.js": 54
    }],
    48: [function(e, t, n) {
        ! function(e, n) {
            function r(e, t, n) {
                if (Array.prototype.map) return Array.prototype.map.call(e, t, n);
                for (var r = new Array(e.length), i = 0, o = e.length; o > i; i++) r[i] = t.call(n, e[i], i, e);
                return r
            }

            function i(e) {
                return {
                    newPos: e.newPos,
                    components: e.components.slice(0)
                }
            }

            function o(e) {
                for (var t = [], n = 0; n < e.length; n++) e[n] && t.push(e[n]);
                return t
            }

            function s(e) {
                var t = e;
                return t = t.replace(/&/g, "&amp;"), t = t.replace(/</g, "&lt;"), t = t.replace(/>/g, "&gt;"), t = t.replace(/"/g, "&quot;")
            }

            function a(e, t, n) {
                t = t || [], n = n || [];
                var r;
                for (r = 0; r < t.length; r += 1)
                    if (t[r] === e) return n[r];
                var i;
                if ("[object Array]" === l.call(e)) {
                    for (t.push(e), i = new Array(e.length), n.push(i), r = 0; r < e.length; r += 1) i[r] = a(e[r], t, n);
                    t.pop(), n.pop()
                } else if ("object" == typeof e && null !== e) {
                    t.push(e), i = {}, n.push(i);
                    var o, s = [];
                    for (o in e) s.push(o);
                    for (s.sort(), r = 0; r < s.length; r += 1) o = s[r], i[o] = a(e[o], t, n);
                    t.pop(), n.pop()
                } else i = e;
                return i
            }

            function u(e, t, n, i) {
                for (var o = 0, s = e.length, a = 0, u = 0; s > o; o++) {
                    var f = e[o];
                    if (f.removed) {
                        if (f.value = n.slice(u, u + f.count).join(""), u += f.count, o && e[o - 1].added) {
                            var l = e[o - 1];
                            e[o - 1] = e[o], e[o] = l
                        }
                    } else {
                        if (!f.added && i) {
                            var c = t.slice(a, a + f.count);
                            c = r(c, function(e, t) {
                                var r = n[u + t];
                                return r.length > e.length ? r : e
                            }), f.value = c.join("")
                        } else f.value = t.slice(a, a + f.count).join("");
                        a += f.count, f.added || (u += f.count)
                    }
                }
                return e
            }

            function f(e) {
                this.ignoreWhitespace = e
            }
            var l = Object.prototype.toString;
            f.prototype = {
                diff: function(e, t, r) {
                    function o(e) {
                        return r ? (setTimeout(function() {
                            r(n, e)
                        }, 0), !0) : e
                    }

                    function s() {
                        for (var r = -1 * c; c >= r; r += 2) {
                            var s, h = p[r - 1],
                                d = p[r + 1],
                                g = (d ? d.newPos : 0) - r;
                            h && (p[r - 1] = n);
                            var y = h && h.newPos + 1 < f,
                                m = d && g >= 0 && l > g;
                            if (y || m) {
                                if (!y || m && h.newPos < d.newPos ? (s = i(d), a.pushComponent(s.components, n, !0)) : (s = h, s.newPos++, a.pushComponent(s.components, !0, n)), g = a.extractCommon(s, t, e, r), s.newPos + 1 >= f && g + 1 >= l) return o(u(s.components, t, e, a.useLongestToken));
                                p[r] = s
                            } else p[r] = n
                        }
                        c++
                    }
                    var a = this;
                    if (t === e) return o([{
                        value: t
                    }]);
                    if (!t) return o([{
                        value: e,
                        removed: !0
                    }]);
                    if (!e) return o([{
                        value: t,
                        added: !0
                    }]);
                    t = this.tokenize(t), e = this.tokenize(e);
                    var f = t.length,
                        l = e.length,
                        c = 1,
                        h = f + l,
                        p = [{
                            newPos: -1,
                            components: []
                        }],
                        d = this.extractCommon(p[0], t, e, 0);
                    if (p[0].newPos + 1 >= f && d + 1 >= l) return o([{
                        value: t.join("")
                    }]);
                    if (r) ! function y() {
                        setTimeout(function() {
                            return c > h ? r() : void(s() || y())
                        }, 0)
                    }();
                    else
                        for (; h >= c;) {
                            var g = s();
                            if (g) return g
                        }
                },
                pushComponent: function(e, t, n) {
                    var r = e[e.length - 1];
                    r && r.added === t && r.removed === n ? e[e.length - 1] = {
                        count: r.count + 1,
                        added: t,
                        removed: n
                    } : e.push({
                        count: 1,
                        added: t,
                        removed: n
                    })
                },
                extractCommon: function(e, t, n, r) {
                    for (var i = t.length, o = n.length, s = e.newPos, a = s - r, u = 0; i > s + 1 && o > a + 1 && this.equals(t[s + 1], n[a + 1]);) s++, a++, u++;
                    return u && e.components.push({
                        count: u
                    }), e.newPos = s, a
                },
                equals: function(e, t) {
                    var n = /\S/;
                    return e === t || this.ignoreWhitespace && !n.test(e) && !n.test(t)
                },
                tokenize: function(e) {
                    return e.split("")
                }
            };
            var c = new f,
                h = new f(!0),
                p = new f;
            h.tokenize = p.tokenize = function(e) {
                return o(e.split(/(\s+|\b)/))
            };
            var d = new f(!0);
            d.tokenize = function(e) {
                return o(e.split(/([{}:;,]|\s+)/))
            };
            var g = new f,
                y = new f;
            y.ignoreTrim = !0, g.tokenize = y.tokenize = function(e) {
                for (var t = [], n = e.split(/^/m), r = 0; r < n.length; r++) {
                    var i = n[r],
                        o = n[r - 1],
                        s = o && o[o.length - 1];
                    "\n" === i && "\r" === s ? t[t.length - 1] = t[t.length - 1].slice(0, -1) + "\r\n" : (this.ignoreTrim && (i = i.trim(), r < n.length - 1 && (i += "\n")), t.push(i))
                }
                return t
            };
            var m = new f;
            m.tokenize = function(e) {
                var t = [],
                    n = e.split(/(\n|\r\n)/);
                n[n.length - 1] || n.pop();
                for (var r = 0; r < n.length; r++) {
                    var i = n[r];
                    r % 2 ? t[t.length - 1] += i : t.push(i)
                }
                return t
            };
            var v = new f;
            v.tokenize = function(e) {
                return o(e.split(/(\S.+?[.!?])(?=\s+|$)/))
            };
            var b = new f;
            b.useLongestToken = !0, b.tokenize = g.tokenize, b.equals = function(e, t) {
                return g.equals(e.replace(/,([\r\n])/g, "$1"), t.replace(/,([\r\n])/g, "$1"))
            };
            var w = {
                Diff: f,
                diffChars: function(e, t, n) {
                    return c.diff(e, t, n)
                },
                diffWords: function(e, t, n) {
                    return h.diff(e, t, n)
                },
                diffWordsWithSpace: function(e, t, n) {
                    return p.diff(e, t, n)
                },
                diffLines: function(e, t, n) {
                    return g.diff(e, t, n)
                },
                diffTrimmedLines: function(e, t, n) {
                    return y.diff(e, t, n)
                },
                diffSentences: function(e, t, n) {
                    return v.diff(e, t, n)
                },
                diffCss: function(e, t, n) {
                    return d.diff(e, t, n)
                },
                diffJson: function(e, t, r) {
                    return b.diff("string" == typeof e ? e : JSON.stringify(a(e), n, "  "), "string" == typeof t ? t : JSON.stringify(a(t), n, "  "), r)
                },
                createTwoFilesPatch: function(e, t, n, i, o, s) {
                    function a(e) {
                        return r(e, function(e) {
                            return " " + e
                        })
                    }

                    function u(e, t, n) {
                        var r = l[l.length - 2],
                            i = t === l.length - 2,
                            o = t === l.length - 3 && n.added !== r.added;
                        /\n$/.test(n.value) || !i && !o || e.push("\\ No newline at end of file")
                    }
                    var f = [];
                    e == t && f.push("Index: " + e), f.push("==================================================================="), f.push("--- " + e + ("undefined" == typeof o ? "" : "	" + o)), f.push("+++ " + t + ("undefined" == typeof s ? "" : "	" + s));
                    var l = m.diff(n, i);
                    l.push({
                        value: "",
                        lines: []
                    });
                    for (var c = 0, h = 0, p = [], d = 1, g = 1, y = 0; y < l.length; y++) {
                        var v = l[y],
                            b = v.lines || v.value.replace(/\n$/, "").split("\n");
                        if (v.lines = b, v.added || v.removed) {
                            if (!c) {
                                var w = l[y - 1];
                                c = d, h = g, w && (p = a(w.lines.slice(-4)), c -= p.length, h -= p.length)
                            }
                            p.push.apply(p, r(b, function(e) {
                                return (v.added ? "+" : "-") + e
                            })), u(p, y, v), v.added ? g += b.length : d += b.length
                        } else {
                            if (c)
                                if (b.length <= 8 && y < l.length - 2) p.push.apply(p, a(b));
                                else {
                                    var _ = Math.min(b.length, 4);
                                    f.push("@@ -" + c + "," + (d - c + _) + " +" + h + "," + (g - h + _) + " @@"), f.push.apply(f, p), f.push.apply(f, a(b.slice(0, _))), b.length <= 4 && u(f, y, v), c = 0, h = 0, p = []
                                }
                            d += b.length, g += b.length
                        }
                    }
                    return f.join("\n") + "\n"
                },
                createPatch: function(e, t, n, r, i) {
                    return w.createTwoFilesPatch(e, e, t, n, r, i)
                },
                applyPatch: function(e, t) {
                    for (var n = t.split("\n"), r = [], i = 0, o = !1, s = !1; i < n.length && !/^@@/.test(n[i]);) i++;
                    for (; i < n.length; i++)
                        if ("@" === n[i][0]) {
                            var a = n[i].split(/@@ -(\d+),(\d+) \+(\d+),(\d+) @@/);
                            r.unshift({
                                start: a[3],
                                oldlength: +a[2],
                                removed: [],
                                newlength: a[4],
                                added: []
                            })
                        } else "+" === n[i][0] ? r[0].added.push(n[i].substr(1)) : "-" === n[i][0] ? r[0].removed.push(n[i].substr(1)) : " " === n[i][0] ? (r[0].added.push(n[i].substr(1)), r[0].removed.push(n[i].substr(1))) : "\\" === n[i][0] && ("+" === n[i - 1][0] ? o = !0 : "-" === n[i - 1][0] && (s = !0));
                    var u = e.split("\n");
                    for (i = r.length - 1; i >= 0; i--) {
                        for (var f = r[i], l = 0; l < f.oldlength; l++)
                            if (u[f.start - 1 + l] !== f.removed[l]) return !1;
                        Array.prototype.splice.apply(u, [f.start - 1, f.oldlength].concat(f.added))
                    }
                    if (o)
                        for (; !u[u.length - 1];) u.pop();
                    else s && u.push("");
                    return u.join("\n")
                },
                convertChangesToXML: function(e) {
                    for (var t = [], n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.added ? t.push("<ins>") : r.removed && t.push("<del>"), t.push(s(r.value)), r.added ? t.push("</ins>") : r.removed && t.push("</del>")
                    }
                    return t.join("")
                },
                convertChangesToDMP: function(e) {
                    for (var t, n, r = [], i = 0; i < e.length; i++) t = e[i], n = t.added ? 1 : t.removed ? -1 : 0, r.push([n, t.value]);
                    return r
                },
                canonicalize: a
            };
            "undefined" != typeof t && t.exports ? t.exports = w : "function" == typeof define && define.amd ? define([], function() {
                return w
            }) : "undefined" == typeof e.JsDiff && (e.JsDiff = w)
        }(this)
    }, {}],
    49: [function(e, t, n) {
        "use strict";
        var r = /[|\\{}()[\]^$+*?.]/g;
        t.exports = function(e) {
            if ("string" != typeof e) throw new TypeError("Expected a string");
            return e.replace(r, "\\$&")
        }
    }, {}],
    50: [function(e, t, n) {
        function r() {
            this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
        }

        function i(e) {
            return "function" == typeof e
        }

        function o(e) {
            return "number" == typeof e
        }

        function s(e) {
            return "object" == typeof e && null !== e
        }

        function a(e) {
            return void 0 === e
        }
        t.exports = r, r.EventEmitter = r, r.prototype._events = void 0, r.prototype._maxListeners = void 0, r.defaultMaxListeners = 10, r.prototype.setMaxListeners = function(e) {
            if (!o(e) || 0 > e || isNaN(e)) throw TypeError("n must be a positive number");
            return this._maxListeners = e, this
        }, r.prototype.emit = function(e) {
            var t, n, r, o, u, f;
            if (this._events || (this._events = {}), "error" === e && (!this._events.error || s(this._events.error) && !this._events.error.length)) {
                if (t = arguments[1], t instanceof Error) throw t;
                throw TypeError('Uncaught, unspecified "error" event.')
            }
            if (n = this._events[e], a(n)) return !1;
            if (i(n)) switch (arguments.length) {
                case 1:
                    n.call(this);
                    break;
                case 2:
                    n.call(this, arguments[1]);
                    break;
                case 3:
                    n.call(this, arguments[1], arguments[2]);
                    break;
                default:
                    o = Array.prototype.slice.call(arguments, 1), n.apply(this, o)
            } else if (s(n))
                for (o = Array.prototype.slice.call(arguments, 1), f = n.slice(), r = f.length, u = 0; r > u; u++) f[u].apply(this, o);
            return !0
        }, r.prototype.addListener = function(e, t) {
            var n;
            if (!i(t)) throw TypeError("listener must be a function");
            return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", e, i(t.listener) ? t.listener : t), this._events[e] ? s(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[e], t] : this._events[e] = t, s(this._events[e]) && !this._events[e].warned && (n = a(this._maxListeners) ? r.defaultMaxListeners : this._maxListeners, n && n > 0 && this._events[e].length > n && (this._events[e].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e].length), "function" == typeof console.trace && console.trace())), this
        }, r.prototype.on = r.prototype.addListener, r.prototype.once = function(e, t) {
            function n() {
                this.removeListener(e, n), r || (r = !0, t.apply(this, arguments))
            }
            if (!i(t)) throw TypeError("listener must be a function");
            var r = !1;
            return n.listener = t, this.on(e, n), this
        }, r.prototype.removeListener = function(e, t) {
            var n, r, o, a;
            if (!i(t)) throw TypeError("listener must be a function");
            if (!this._events || !this._events[e]) return this;
            if (n = this._events[e], o = n.length, r = -1, n === t || i(n.listener) && n.listener === t) delete this._events[e], this._events.removeListener && this.emit("removeListener", e, t);
            else if (s(n)) {
                for (a = o; a-- > 0;)
                    if (n[a] === t || n[a].listener && n[a].listener === t) {
                        r = a;
                        break
                    }
                if (0 > r) return this;
                1 === n.length ? (n.length = 0, delete this._events[e]) : n.splice(r, 1), this._events.removeListener && this.emit("removeListener", e, t)
            }
            return this
        }, r.prototype.removeAllListeners = function(e) {
            var t, n;
            if (!this._events) return this;
            if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[e] && delete this._events[e], this;
            if (0 === arguments.length) {
                for (t in this._events) "removeListener" !== t && this.removeAllListeners(t);
                return this.removeAllListeners("removeListener"), this._events = {}, this
            }
            if (n = this._events[e], i(n)) this.removeListener(e, n);
            else if (n)
                for (; n.length;) this.removeListener(e, n[n.length - 1]);
            return delete this._events[e], this
        }, r.prototype.listeners = function(e) {
            var t;
            return t = this._events && this._events[e] ? i(this._events[e]) ? [this._events[e]] : this._events[e].slice() : []
        }, r.prototype.listenerCount = function(e) {
            if (this._events) {
                var t = this._events[e];
                if (i(t)) return 1;
                if (t) return t.length
            }
            return 0
        }, r.listenerCount = function(e, t) {
            return e.listenerCount(t)
        }
    }, {}],
    51: [function(e, t, n) {
        (function(r) {
            function i(e) {
                for (var t, n = r.env.PATH.split(":"), i = 0, o = n.length; o > i; ++i)
                    if (t = f.join(n[i], e), l(t)) return t
            }

            function o(e, t, n) {
                var r, i, t = t || {},
                    n = n || function() {};
                if (t.exec && (s = {
                        type: "Custom",
                        pkg: t.exec,
                        range: []
                    }), !s) return n(new Error("growl not supported on this platform"));
                if (i = [s.pkg], r = t.image) switch (s.type) {
                    case "Darwin-Growl":
                        var o, u = f.extname(r).substr(1);
                        o = o || "icns" == u && "iconpath", o = o || /^[A-Z]/.test(r) && "appIcon", o = o || /^png|gif|jpe?g$/.test(u) && "image", o = o || u && (r = u) && "icon", o = o || "icon", i.push("--" + o, h(r));
                        break;
                    case "Darwin-NotificationCenter":
                        i.push(s.icon, h(r));
                        break;
                    case "Linux":
                        i.push(s.icon, h(r)), t.sticky || i.push("--hint=int:transient:1");
                        break;
                    case "Windows":
                        i.push(s.icon + h(r))
                }
                if (t.sticky && i.push(s.sticky), t.priority) {
                    var l = t.priority + "";
                    s.priority.range.indexOf(l);
                    ~s.priority.range.indexOf(l) && i.push(s.priority, t.priority)
                }
                switch (t.sound && "Darwin-NotificationCenter" === s.type && i.push(s.sound, t.sound), t.name && "Darwin-Growl" === s.type && i.push("--name", t.name), s.type) {
                    case "Darwin-Growl":
                        i.push(s.msg), i.push(h(e).replace(/\\n/g, "\n")), t.title && i.push(h(t.title));
                        break;
                    case "Darwin-NotificationCenter":
                        i.push(s.msg);
                        var c = h(e),
                            p = c.replace(/\\n/g, "\n");
                        i.push(p), t.title && (i.push(s.title), i.push(h(t.title))), t.subtitle && (i.push(s.subtitle), i.push(h(t.subtitle))), t.url && (i.push(s.url), i.push(h(t.url)));
                        break;
                    case "Linux-Growl":
                        i.push(s.msg), i.push(h(e).replace(/\\n/g, "\n")), t.title && i.push(h(t.title)), s.host && i.push(s.host.cmd, s.host.hostname);
                        break;
                    case "Linux":
                        t.title ? (i.push(h(t.title)), i.push(s.msg), i.push(h(e).replace(/\\n/g, "\n"))) : i.push(h(e).replace(/\\n/g, "\n"));
                        break;
                    case "Windows":
                        i.push(h(e).replace(/\\n/g, "\n")), t.title && i.push(s.title + h(t.title)), t.url && i.push(s.url + h(t.url));
                        break;
                    case "Custom":
                        i[0] = function(n) {
                            var r = t.title ? t.title + ": " + e : e,
                                o = n.replace(/(^|[^%])%s/g, "$1" + h(r));
                            return o === n && i.push(h(r)), o
                        }(i[0])
                }
                a(i.join(" "), n)
            }
            var s, a = e("child_process").exec,
                u = e("fs"),
                f = e("path"),
                l = u.existsSync || f.existsSync,
                c = e("os"),
                h = JSON.stringify;
            switch (c.type()) {
                case "Darwin":
                    s = i("terminal-notifier") ? {
                        type: "Darwin-NotificationCenter",
                        pkg: "terminal-notifier",
                        msg: "-message",
                        title: "-title",
                        subtitle: "-subtitle",
                        icon: "-appIcon",
                        sound: "-sound",
                        url: "-open",
                        priority: {
                            cmd: "-execute",
                            range: []
                        }
                    } : {
                        type: "Darwin-Growl",
                        pkg: "growlnotify",
                        msg: "-m",
                        sticky: "--sticky",
                        priority: {
                            cmd: "--priority",
                            range: [-2, -1, 0, 1, 2, "Very Low", "Moderate", "Normal", "High", "Emergency"]
                        }
                    };
                    break;
                case "Linux":
                    s = i("growl") ? {
                        type: "Linux-Growl",
                        pkg: "growl",
                        msg: "-m",
                        title: "-title",
                        subtitle: "-subtitle",
                        host: {
                            cmd: "-H",
                            hostname: "192.168.33.1"
                        }
                    } : {
                        type: "Linux",
                        pkg: "notify-send",
                        msg: "",
                        sticky: "-t 0",
                        icon: "-i",
                        priority: {
                            cmd: "-u",
                            range: ["low", "normal", "critical"]
                        }
                    };
                    break;
                case "Windows_NT":
                    s = {
                        type: "Windows",
                        pkg: "growlnotify",
                        msg: "",
                        sticky: "/s:true",
                        title: "/t:",
                        icon: "/i:",
                        url: "/cu:",
                        priority: {
                            cmd: "/p:",
                            range: [-2, -1, 0, 1, 2]
                        }
                    }
            }
            n = t.exports = o, n.version = "1.4.1"
        }).call(this, e("_process"))
    }, {
        _process: 58,
        child_process: 43,
        fs: 43,
        os: 56,
        path: 43
    }],
    52: [function(e, t, n) {
        n.read = function(e, t, n, r, i) {
            var o, s, a = 8 * i - r - 1,
                u = (1 << a) - 1,
                f = u >> 1,
                l = -7,
                c = n ? i - 1 : 0,
                h = n ? -1 : 1,
                p = e[t + c];
            for (c += h, o = p & (1 << -l) - 1, p >>= -l, l += a; l > 0; o = 256 * o + e[t + c], c += h, l -= 8);
            for (s = o & (1 << -l) - 1, o >>= -l, l += r; l > 0; s = 256 * s + e[t + c], c += h, l -= 8);
            if (0 === o) o = 1 - f;
            else {
                if (o === u) return s ? NaN : (p ? -1 : 1) * (1 / 0);
                s += Math.pow(2, r), o -= f
            }
            return (p ? -1 : 1) * s * Math.pow(2, o - r)
        }, n.write = function(e, t, n, r, i, o) {
            var s, a, u, f = 8 * o - i - 1,
                l = (1 << f) - 1,
                c = l >> 1,
                h = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                p = r ? 0 : o - 1,
                d = r ? 1 : -1,
                g = 0 > t || 0 === t && 0 > 1 / t ? 1 : 0;
            for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, s = l) : (s = Math.floor(Math.log(t) / Math.LN2), t * (u = Math.pow(2, -s)) < 1 && (s--, u *= 2), t += s + c >= 1 ? h / u : h * Math.pow(2, 1 - c), t * u >= 2 && (s++, u /= 2), s + c >= l ? (a = 0, s = l) : s + c >= 1 ? (a = (t * u - 1) * Math.pow(2, i), s += c) : (a = t * Math.pow(2, c - 1) * Math.pow(2, i), s = 0)); i >= 8; e[n + p] = 255 & a, p += d, a /= 256, i -= 8);
            for (s = s << i | a, f += i; f > 0; e[n + p] = 255 & s, p += d, s /= 256, f -= 8);
            e[n + p - d] |= 128 * g
        }
    }, {}],
    53: [function(e, t, n) {
        "function" == typeof Object.create ? t.exports = function(e, t) {
            e.super_ = t, e.prototype = Object.create(t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            })
        } : t.exports = function(e, t) {
            e.super_ = t;
            var n = function() {};
            n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e
        }
    }, {}],
    54: [function(e, t, n) {
        t.exports = function(e) {
            return !(null == e || !(e._isBuffer || e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)))
        }
    }, {}],
    55: [function(e, t, n) {
        (function(n) {
            function r(e, t, a, u) {
                "function" == typeof t ? (a = t, t = {}) : t && "object" == typeof t || (t = {
                    mode: t
                });
                var f = t.mode,
                    l = t.fs || o;
                void 0 === f && (f = s & ~n.umask()), u || (u = null);
                var c = a || function() {};
                e = i.resolve(e), l.mkdir(e, f, function(n) {
                    if (!n) return u = u || e, c(null, u);
                    switch (n.code) {
                        case "ENOENT":
                            r(i.dirname(e), t, function(n, i) {
                                n ? c(n, i) : r(e, t, c, i)
                            });
                            break;
                        default:
                            l.stat(e, function(e, t) {
                                e || !t.isDirectory() ? c(n, u) : c(null, u)
                            })
                    }
                })
            }
            var i = e("path"),
                o = e("fs"),
                s = parseInt("0777", 8);
            t.exports = r.mkdirp = r.mkdirP = r, r.sync = function a(e, t, r) {
                t && "object" == typeof t || (t = {
                    mode: t
                });
                var u = t.mode,
                    f = t.fs || o;
                void 0 === u && (u = s & ~n.umask()), r || (r = null), e = i.resolve(e);
                try {
                    f.mkdirSync(e, u), r = r || e
                } catch (l) {
                    switch (l.code) {
                        case "ENOENT":
                            r = a(i.dirname(e), t, r), a(e, t, r);
                            break;
                        default:
                            var c;
                            try {
                                c = f.statSync(e)
                            } catch (h) {
                                throw l
                            }
                            if (!c.isDirectory()) throw l
                    }
                }
                return r
            }
        }).call(this, e("_process"))
    }, {
        _process: 58,
        fs: 43,
        path: 43
    }],
    56: [function(e, t, n) {
        n.endianness = function() {
            return "LE"
        }, n.hostname = function() {
            return "undefined" != typeof location ? location.hostname : ""
        }, n.loadavg = function() {
            return []
        }, n.uptime = function() {
            return 0
        }, n.freemem = function() {
            return Number.MAX_VALUE
        }, n.totalmem = function() {
            return Number.MAX_VALUE
        }, n.cpus = function() {
            return []
        }, n.type = function() {
            return "Browser"
        }, n.release = function() {
            return "undefined" != typeof navigator ? navigator.appVersion : ""
        }, n.networkInterfaces = n.getNetworkInterfaces = function() {
            return {}
        }, n.arch = function() {
            return "javascript"
        }, n.platform = function() {
            return "browser"
        }, n.tmpdir = n.tmpDir = function() {
            return "/tmp"
        }, n.EOL = "\n"
    }, {}],
    57: [function(e, t, n) {
        (function(e) {
            "use strict";

            function n(t, n, r, i) {
                if ("function" != typeof t) throw new TypeError('"callback" argument must be a function');
                var o, s, a = arguments.length;
                switch (a) {
                    case 0:
                    case 1:
                        return e.nextTick(t);
                    case 2:
                        return e.nextTick(function() {
                            t.call(null, n)
                        });
                    case 3:
                        return e.nextTick(function() {
                            t.call(null, n, r)
                        });
                    case 4:
                        return e.nextTick(function() {
                            t.call(null, n, r, i)
                        });
                    default:
                        for (o = new Array(a - 1), s = 0; s < o.length;) o[s++] = arguments[s];
                        return e.nextTick(function() {
                            t.apply(null, o)
                        })
                }
            }!e.version || 0 === e.version.indexOf("v0.") || 0 === e.version.indexOf("v1.") && 0 !== e.version.indexOf("v1.8.") ? t.exports = n : t.exports = e.nextTick
        }).call(this, e("_process"))
    }, {
        _process: 58
    }],
    58: [function(e, t, n) {
        function r() {
            l && a && (l = !1, a.length ? f = a.concat(f) : c = -1, f.length && i())
        }

        function i() {
            if (!l) {
                var e = setTimeout(r);
                l = !0;
                for (var t = f.length; t;) {
                    for (a = f, f = []; ++c < t;) a && a[c].run();
                    c = -1, t = f.length
                }
                a = null, l = !1, clearTimeout(e)
            }
        }

        function o(e, t) {
            this.fun = e, this.array = t
        }

        function s() {}
        var a, u = t.exports = {},
            f = [],
            l = !1,
            c = -1;
        u.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            f.push(new o(e, t)), 1 !== f.length || l || setTimeout(i, 0)
        }, o.prototype.run = function() {
            this.fun.apply(null, this.array)
        }, u.title = "browser", u.browser = !0, u.env = {}, u.argv = [], u.version = "", u.versions = {}, u.on = s, u.addListener = s, u.once = s, u.off = s, u.removeListener = s, u.removeAllListeners = s, u.emit = s, u.binding = function(e) {
            throw new Error("process.binding is not supported")
        }, u.cwd = function() {
            return "/"
        }, u.chdir = function(e) {
            throw new Error("process.chdir is not supported")
        }, u.umask = function() {
            return 0
        }
    }, {}],
    59: [function(e, t, n) {
        function r() {
            i.call(this)
        }
        t.exports = r;
        var i = e("events").EventEmitter,
            o = e("inherits");
        o(r, i), r.Readable = e("readable-stream/readable.js"), r.Writable = e("readable-stream/writable.js"), r.Duplex = e("readable-stream/duplex.js"), r.Transform = e("readable-stream/transform.js"), r.PassThrough = e("readable-stream/passthrough.js"), r.Stream = r, r.prototype.pipe = function(e, t) {
            function n(t) {
                e.writable && !1 === e.write(t) && f.pause && f.pause()
            }

            function r() {
                f.readable && f.resume && f.resume()
            }

            function o() {
                l || (l = !0, e.end())
            }

            function s() {
                l || (l = !0, "function" == typeof e.destroy && e.destroy())
            }

            function a(e) {
                if (u(), 0 === i.listenerCount(this, "error")) throw e
            }

            function u() {
                f.removeListener("data", n), e.removeListener("drain", r), f.removeListener("end", o), f.removeListener("close", s), f.removeListener("error", a), e.removeListener("error", a), f.removeListener("end", u), f.removeListener("close", u), e.removeListener("close", u)
            }
            var f = this;
            f.on("data", n), e.on("drain", r), e._isStdio || t && t.end === !1 || (f.on("end", o), f.on("close", s));
            var l = !1;
            return f.on("error", a), e.on("error", a), f.on("end", u), f.on("close", u), e.on("close", u), e.emit("pipe", f), e
        }
    }, {
        events: 50,
        inherits: 53,
        "readable-stream/duplex.js": 61,
        "readable-stream/passthrough.js": 67,
        "readable-stream/readable.js": 68,
        "readable-stream/transform.js": 69,
        "readable-stream/writable.js": 70
    }],
    60: [function(e, t, n) {
        arguments[4][46][0].apply(n, arguments)
    }, {
        dup: 46
    }],
    61: [function(e, t, n) {
        t.exports = e("./lib/_stream_duplex.js")
    }, {
        "./lib/_stream_duplex.js": 62
    }],
    62: [function(e, t, n) {
        "use strict";

        function r(e) {
            return this instanceof r ? (f.call(this, e), l.call(this, e), e && e.readable === !1 && (this.readable = !1), e && e.writable === !1 && (this.writable = !1), this.allowHalfOpen = !0, e && e.allowHalfOpen === !1 && (this.allowHalfOpen = !1), void this.once("end", i)) : new r(e)
        }

        function i() {
            this.allowHalfOpen || this._writableState.ended || a(o, this)
        }

        function o(e) {
            e.end()
        }
        var s = Object.keys || function(e) {
            var t = [];
            for (var n in e) t.push(n);
            return t
        };
        t.exports = r;
        var a = e("process-nextick-args"),
            u = e("core-util-is");
        u.inherits = e("inherits");
        var f = e("./_stream_readable"),
            l = e("./_stream_writable");
        u.inherits(r, f);
        for (var c = s(l.prototype), h = 0; h < c.length; h++) {
            var p = c[h];
            r.prototype[p] || (r.prototype[p] = l.prototype[p])
        }
    }, {
        "./_stream_readable": 64,
        "./_stream_writable": 66,
        "core-util-is": 47,
        inherits: 53,
        "process-nextick-args": 57
    }],
    63: [function(e, t, n) {
        "use strict";

        function r(e) {
            return this instanceof r ? void i.call(this, e) : new r(e)
        }
        t.exports = r;
        var i = e("./_stream_transform"),
            o = e("core-util-is");
        o.inherits = e("inherits"), o.inherits(r, i), r.prototype._transform = function(e, t, n) {
            n(null, e)
        }
    }, {
        "./_stream_transform": 65,
        "core-util-is": 47,
        inherits: 53
    }],
    64: [function(e, t, n) {
        (function(n) {
            "use strict";

            function r(e, t, n) {
                return N ? e.prependListener(t, n) : void(e._events && e._events[t] ? R(e._events[t]) ? e._events[t].unshift(n) : e._events[t] = [n, e._events[t]] : e.on(t, n))
            }

            function i(t, n) {
                D = D || e("./_stream_duplex"), t = t || {}, this.objectMode = !!t.objectMode, n instanceof D && (this.objectMode = this.objectMode || !!t.readableObjectMode);
                var r = t.highWaterMark,
                    i = this.objectMode ? 16 : 16384;
                this.highWaterMark = r || 0 === r ? r : i, this.highWaterMark = ~~this.highWaterMark, this.buffer = [], this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.defaultEncoding = t.defaultEncoding || "utf8", this.ranOut = !1, this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, t.encoding && (U || (U = e("string_decoder/").StringDecoder), this.decoder = new U(t.encoding), this.encoding = t.encoding)
            }

            function o(t) {
                return D = D || e("./_stream_duplex"), this instanceof o ? (this._readableState = new i(t, this), this.readable = !0, t && "function" == typeof t.read && (this._read = t.read), void j.call(this)) : new o(t)
            }

            function s(e, t, n, r, i) {
                var o = l(t, n);
                if (o) e.emit("error", o);
                else if (null === n) t.reading = !1, c(e, t);
                else if (t.objectMode || n && n.length > 0)
                    if (t.ended && !i) {
                        var s = new Error("stream.push() after EOF");
                        e.emit("error", s)
                    } else if (t.endEmitted && i) {
                    var u = new Error("stream.unshift() after end event");
                    e.emit("error", u)
                } else {
                    var f;
                    !t.decoder || i || r || (n = t.decoder.write(n), f = !t.objectMode && 0 === n.length), i || (t.reading = !1), f || (t.flowing && 0 === t.length && !t.sync ? (e.emit("data", n), e.read(0)) : (t.length += t.objectMode ? 1 : n.length, i ? t.buffer.unshift(n) : t.buffer.push(n), t.needReadable && h(e))), d(e, t)
                } else i || (t.reading = !1);
                return a(t)
            }

            function a(e) {
                return !e.ended && (e.needReadable || e.length < e.highWaterMark || 0 === e.length)
            }

            function u(e) {
                return e >= I ? e = I : (e--, e |= e >>> 1, e |= e >>> 2, e |= e >>> 4, e |= e >>> 8, e |= e >>> 16, e++), e
            }

            function f(e, t) {
                return 0 === t.length && t.ended ? 0 : t.objectMode ? 0 === e ? 0 : 1 : null === e || isNaN(e) ? t.flowing && t.buffer.length ? t.buffer[0].length : t.length : 0 >= e ? 0 : (e > t.highWaterMark && (t.highWaterMark = u(e)), e > t.length ? t.ended ? t.length : (t.needReadable = !0, 0) : e)
            }

            function l(e, t) {
                var n = null;
                return O.isBuffer(t) || "string" == typeof t || null === t || void 0 === t || e.objectMode || (n = new TypeError("Invalid non-string/buffer chunk")), n
            }

            function c(e, t) {
                if (!t.ended) {
                    if (t.decoder) {
                        var n = t.decoder.end();
                        n && n.length && (t.buffer.push(n), t.length += t.objectMode ? 1 : n.length)
                    }
                    t.ended = !0, h(e)
                }
            }

            function h(e) {
                var t = e._readableState;
                t.needReadable = !1, t.emittedReadable || (P("emitReadable", t.flowing), t.emittedReadable = !0, t.sync ? S(p, e) : p(e))
            }

            function p(e) {
                P("emit readable"), e.emit("readable"), w(e)
            }

            function d(e, t) {
                t.readingMore || (t.readingMore = !0, S(g, e, t))
            }

            function g(e, t) {
                for (var n = t.length; !t.reading && !t.flowing && !t.ended && t.length < t.highWaterMark && (P("maybeReadMore read 0"), e.read(0), n !== t.length);) n = t.length;
                t.readingMore = !1
            }

            function y(e) {
                return function() {
                    var t = e._readableState;
                    P("pipeOnDrain", t.awaitDrain), t.awaitDrain && t.awaitDrain--, 0 === t.awaitDrain && L(e, "data") && (t.flowing = !0, w(e))
                }
            }

            function m(e) {
                P("readable nexttick read 0"), e.read(0)
            }

            function v(e, t) {
                t.resumeScheduled || (t.resumeScheduled = !0, S(b, e, t))
            }

            function b(e, t) {
                t.reading || (P("resume read 0"), e.read(0)), t.resumeScheduled = !1, e.emit("resume"), w(e), t.flowing && !t.reading && e.read(0)
            }

            function w(e) {
                var t = e._readableState;
                if (P("flow", t.flowing), t.flowing)
                    do var n = e.read(); while (null !== n && t.flowing)
            }

            function _(e, t) {
                var n, r = t.buffer,
                    i = t.length,
                    o = !!t.decoder,
                    s = !!t.objectMode;
                if (0 === r.length) return null;
                if (0 === i) n = null;
                else if (s) n = r.shift();
                else if (!e || e >= i) n = o ? r.join("") : 1 === r.length ? r[0] : O.concat(r, i), r.length = 0;
                else if (e < r[0].length) {
                    var a = r[0];
                    n = a.slice(0, e), r[0] = a.slice(e)
                } else if (e === r[0].length) n = r.shift();
                else {
                    n = o ? "" : C.allocUnsafe(e);
                    for (var u = 0, f = 0, l = r.length; l > f && e > u; f++) {
                        var c = r[0],
                            h = Math.min(e - u, c.length);
                        o ? n += c.slice(0, h) : c.copy(n, u, 0, h), h < c.length ? r[0] = c.slice(h) : r.shift(), u += h
                    }
                }
                return n
            }

            function E(e) {
                var t = e._readableState;
                if (t.length > 0) throw new Error('"endReadable()" called on non-empty stream');
                t.endEmitted || (t.ended = !0, S(x, t, e))
            }

            function x(e, t) {
                e.endEmitted || 0 !== e.length || (e.endEmitted = !0, t.readable = !1, t.emit("end"))
            }

            function k(e, t) {
                for (var n = 0, r = e.length; r > n; n++) t(e[n], n)
            }

            function T(e, t) {
                for (var n = 0, r = e.length; r > n; n++)
                    if (e[n] === t) return n;
                return -1
            }
            t.exports = o;
            var S = e("process-nextick-args"),
                R = e("isarray");
            o.ReadableState = i;
            var j, A = e("events").EventEmitter,
                L = function(e, t) {
                    return e.listeners(t).length
                };
            ! function() {
                try {
                    j = e("stream")
                } catch (t) {} finally {
                    j || (j = e("events").EventEmitter)
                }
            }();
            var O = e("buffer").Buffer,
                C = e("buffer-shims"),
                M = e("core-util-is");
            M.inherits = e("inherits");
            var B = e("util"),
                P = void 0;
            P = B && B.debuglog ? B.debuglog("stream") : function() {};
            var U;
            M.inherits(o, j);
            var D, D, N = "function" == typeof A.prototype.prependListener;
            o.prototype.push = function(e, t) {
                var n = this._readableState;
                return n.objectMode || "string" != typeof e || (t = t || n.defaultEncoding, t !== n.encoding && (e = C.from(e, t), t = "")), s(this, n, e, t, !1)
            }, o.prototype.unshift = function(e) {
                var t = this._readableState;
                return s(this, t, e, "", !0)
            }, o.prototype.isPaused = function() {
                return this._readableState.flowing === !1
            }, o.prototype.setEncoding = function(t) {
                return U || (U = e("string_decoder/").StringDecoder), this._readableState.decoder = new U(t), this._readableState.encoding = t, this
            };
            var I = 8388608;
            o.prototype.read = function(e) {
                P("read", e);
                var t = this._readableState,
                    n = e;
                if (("number" != typeof e || e > 0) && (t.emittedReadable = !1), 0 === e && t.needReadable && (t.length >= t.highWaterMark || t.ended)) return P("read: emitReadable", t.length, t.ended), 0 === t.length && t.ended ? E(this) : h(this), null;
                if (e = f(e, t), 0 === e && t.ended) return 0 === t.length && E(this), null;
                var r = t.needReadable;
                P("need readable", r), (0 === t.length || t.length - e < t.highWaterMark) && (r = !0, P("length less than watermark", r)), (t.ended || t.reading) && (r = !1, P("reading or ended", r)), r && (P("do read"), t.reading = !0, t.sync = !0, 0 === t.length && (t.needReadable = !0), this._read(t.highWaterMark), t.sync = !1), r && !t.reading && (e = f(n, t));
                var i;
                return i = e > 0 ? _(e, t) : null, null === i && (t.needReadable = !0, e = 0), t.length -= e, 0 !== t.length || t.ended || (t.needReadable = !0), n !== e && t.ended && 0 === t.length && E(this), null !== i && this.emit("data", i), i
            }, o.prototype._read = function(e) {
                this.emit("error", new Error("not implemented"))
            }, o.prototype.pipe = function(e, t) {
                function i(e) {
                    P("onunpipe"), e === h && s()
                }

                function o() {
                    P("onend"), e.end()
                }

                function s() {
                    P("cleanup"), e.removeListener("close", f), e.removeListener("finish", l), e.removeListener("drain", m), e.removeListener("error", u), e.removeListener("unpipe", i), h.removeListener("end", o), h.removeListener("end", s), h.removeListener("data", a), v = !0, !p.awaitDrain || e._writableState && !e._writableState.needDrain || m()
                }

                function a(t) {
                    P("ondata");
                    var n = e.write(t);
                    !1 === n && ((1 === p.pipesCount && p.pipes === e || p.pipesCount > 1 && -1 !== T(p.pipes, e)) && !v && (P("false write response, pause", h._readableState.awaitDrain), h._readableState.awaitDrain++), h.pause())
                }

                function u(t) {
                    P("onerror", t), c(), e.removeListener("error", u), 0 === L(e, "error") && e.emit("error", t)
                }

                function f() {
                    e.removeListener("finish", l), c()
                }

                function l() {
                    P("onfinish"), e.removeListener("close", f), c()
                }

                function c() {
                    P("unpipe"), h.unpipe(e)
                }
                var h = this,
                    p = this._readableState;
                switch (p.pipesCount) {
                    case 0:
                        p.pipes = e;
                        break;
                    case 1:
                        p.pipes = [p.pipes, e];
                        break;
                    default:
                        p.pipes.push(e)
                }
                p.pipesCount += 1, P("pipe count=%d opts=%j", p.pipesCount, t);
                var d = (!t || t.end !== !1) && e !== n.stdout && e !== n.stderr,
                    g = d ? o : s;
                p.endEmitted ? S(g) : h.once("end", g), e.on("unpipe", i);
                var m = y(h);
                e.on("drain", m);
                var v = !1;
                return h.on("data", a), r(e, "error", u), e.once("close", f), e.once("finish", l), e.emit("pipe", h), p.flowing || (P("pipe resume"), h.resume()), e
            }, o.prototype.unpipe = function(e) {
                var t = this._readableState;
                if (0 === t.pipesCount) return this;
                if (1 === t.pipesCount) return e && e !== t.pipes ? this : (e || (e = t.pipes), t.pipes = null, t.pipesCount = 0, t.flowing = !1, e && e.emit("unpipe", this), this);
                if (!e) {
                    var n = t.pipes,
                        r = t.pipesCount;
                    t.pipes = null, t.pipesCount = 0, t.flowing = !1;
                    for (var i = 0; r > i; i++) n[i].emit("unpipe", this);
                    return this
                }
                var o = T(t.pipes, e);
                return -1 === o ? this : (t.pipes.splice(o, 1), t.pipesCount -= 1, 1 === t.pipesCount && (t.pipes = t.pipes[0]), e.emit("unpipe", this), this)
            }, o.prototype.on = function(e, t) {
                var n = j.prototype.on.call(this, e, t);
                if ("data" === e && !1 !== this._readableState.flowing && this.resume(), "readable" === e && !this._readableState.endEmitted) {
                    var r = this._readableState;
                    r.readableListening || (r.readableListening = !0, r.emittedReadable = !1, r.needReadable = !0, r.reading ? r.length && h(this, r) : S(m, this))
                }
                return n
            }, o.prototype.addListener = o.prototype.on, o.prototype.resume = function() {
                var e = this._readableState;
                return e.flowing || (P("resume"), e.flowing = !0, v(this, e)), this
            }, o.prototype.pause = function() {
                return P("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing && (P("pause"), this._readableState.flowing = !1, this.emit("pause")), this
            }, o.prototype.wrap = function(e) {
                var t = this._readableState,
                    n = !1,
                    r = this;
                e.on("end", function() {
                    if (P("wrapped end"), t.decoder && !t.ended) {
                        var e = t.decoder.end();
                        e && e.length && r.push(e)
                    }
                    r.push(null)
                }), e.on("data", function(i) {
                    if (P("wrapped data"), t.decoder && (i = t.decoder.write(i)), (!t.objectMode || null !== i && void 0 !== i) && (t.objectMode || i && i.length)) {
                        var o = r.push(i);
                        o || (n = !0, e.pause())
                    }
                });
                for (var i in e) void 0 === this[i] && "function" == typeof e[i] && (this[i] = function(t) {
                    return function() {
                        return e[t].apply(e, arguments)
                    }
                }(i));
                var o = ["error", "close", "destroy", "pause", "resume"];
                return k(o, function(t) {
                    e.on(t, r.emit.bind(r, t))
                }), r._read = function(t) {
                    P("wrapped _read", t), n && (n = !1, e.resume())
                }, r
            }, o._fromList = _
        }).call(this, e("_process"))
    }, {
        "./_stream_duplex": 62,
        _process: 58,
        buffer: 45,
        "buffer-shims": 44,
        "core-util-is": 47,
        events: 50,
        inherits: 53,
        isarray: 60,
        "process-nextick-args": 57,
        "string_decoder/": 71,
        util: 41
    }],
    65: [function(e, t, n) {
        "use strict";

        function r(e) {
            this.afterTransform = function(t, n) {
                return i(e, t, n)
            }, this.needTransform = !1, this.transforming = !1, this.writecb = null, this.writechunk = null, this.writeencoding = null
        }

        function i(e, t, n) {
            var r = e._transformState;
            r.transforming = !1;
            var i = r.writecb;
            if (!i) return e.emit("error", new Error("no writecb in Transform class"));
            r.writechunk = null, r.writecb = null, null !== n && void 0 !== n && e.push(n), i(t);
            var o = e._readableState;
            o.reading = !1, (o.needReadable || o.length < o.highWaterMark) && e._read(o.highWaterMark)
        }

        function o(e) {
            if (!(this instanceof o)) return new o(e);
            a.call(this, e), this._transformState = new r(this);
            var t = this;
            this._readableState.needReadable = !0, this._readableState.sync = !1, e && ("function" == typeof e.transform && (this._transform = e.transform), "function" == typeof e.flush && (this._flush = e.flush)), this.once("prefinish", function() {
                "function" == typeof this._flush ? this._flush(function(e) {
                    s(t, e)
                }) : s(t)
            })
        }

        function s(e, t) {
            if (t) return e.emit("error", t);
            var n = e._writableState,
                r = e._transformState;
            if (n.length) throw new Error("Calling transform done when ws.length != 0");
            if (r.transforming) throw new Error("Calling transform done when still transforming");
            return e.push(null)
        }
        t.exports = o;
        var a = e("./_stream_duplex"),
            u = e("core-util-is");
        u.inherits = e("inherits"), u.inherits(o, a), o.prototype.push = function(e, t) {
            return this._transformState.needTransform = !1, a.prototype.push.call(this, e, t)
        }, o.prototype._transform = function(e, t, n) {
            throw new Error("Not implemented")
        }, o.prototype._write = function(e, t, n) {
            var r = this._transformState;
            if (r.writecb = n, r.writechunk = e, r.writeencoding = t, !r.transforming) {
                var i = this._readableState;
                (r.needTransform || i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark)
            }
        }, o.prototype._read = function(e) {
            var t = this._transformState;
            null !== t.writechunk && t.writecb && !t.transforming ? (t.transforming = !0, this._transform(t.writechunk, t.writeencoding, t.afterTransform)) : t.needTransform = !0
        }
    }, {
        "./_stream_duplex": 62,
        "core-util-is": 47,
        inherits: 53
    }],
    66: [function(e, t, n) {
        (function(n) {
            "use strict";

            function r() {}

            function i(e, t, n) {
                this.chunk = e, this.encoding = t, this.callback = n, this.next = null
            }

            function o(t, n) {
                L = L || e("./_stream_duplex"), t = t || {}, this.objectMode = !!t.objectMode, n instanceof L && (this.objectMode = this.objectMode || !!t.writableObjectMode);
                var r = t.highWaterMark,
                    i = this.objectMode ? 16 : 16384;
                this.highWaterMark = r || 0 === r ? r : i, this.highWaterMark = ~~this.highWaterMark, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1;
                var o = t.decodeStrings === !1;
                this.decodeStrings = !o, this.defaultEncoding = t.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function(e) {
                    d(n, e)
                }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.bufferedRequestCount = 0, this.corkedRequestsFree = new E(this)
            }

            function s(t) {
                return L = L || e("./_stream_duplex"), this instanceof s || this instanceof L ? (this._writableState = new o(t, this), this.writable = !0, t && ("function" == typeof t.write && (this._write = t.write), "function" == typeof t.writev && (this._writev = t.writev)), void S.call(this)) : new s(t)
            }

            function a(e, t) {
                var n = new Error("write after end");
                e.emit("error", n), x(t, n)
            }

            function u(e, t, n, r) {
                var i = !0,
                    o = !1;
                return null === n ? o = new TypeError("May not write null values to stream") : j.isBuffer(n) || "string" == typeof n || void 0 === n || t.objectMode || (o = new TypeError("Invalid non-string/buffer chunk")), o && (e.emit("error", o), x(r, o), i = !1), i
            }

            function f(e, t, n) {
                return e.objectMode || e.decodeStrings === !1 || "string" != typeof t || (t = A.from(t, n)), t
            }

            function l(e, t, n, r, o) {
                n = f(t, n, r), j.isBuffer(n) && (r = "buffer");
                var s = t.objectMode ? 1 : n.length;
                t.length += s;
                var a = t.length < t.highWaterMark;
                if (a || (t.needDrain = !0), t.writing || t.corked) {
                    var u = t.lastBufferedRequest;
                    t.lastBufferedRequest = new i(n, r, o), u ? u.next = t.lastBufferedRequest : t.bufferedRequest = t.lastBufferedRequest, t.bufferedRequestCount += 1
                } else c(e, t, !1, s, n, r, o);
                return a
            }

            function c(e, t, n, r, i, o, s) {
                t.writelen = r, t.writecb = s, t.writing = !0, t.sync = !0, n ? e._writev(i, t.onwrite) : e._write(i, o, t.onwrite), t.sync = !1
            }

            function h(e, t, n, r, i) {
                --t.pendingcb, n ? x(i, r) : i(r), e._writableState.errorEmitted = !0, e.emit("error", r)
            }

            function p(e) {
                e.writing = !1, e.writecb = null, e.length -= e.writelen, e.writelen = 0
            }

            function d(e, t) {
                var n = e._writableState,
                    r = n.sync,
                    i = n.writecb;
                if (p(n), t) h(e, n, r, t, i);
                else {
                    var o = v(n);
                    o || n.corked || n.bufferProcessing || !n.bufferedRequest || m(e, n), r ? k(g, e, n, o, i) : g(e, n, o, i)
                }
            }

            function g(e, t, n, r) {
                n || y(e, t), t.pendingcb--, r(), w(e, t)
            }

            function y(e, t) {
                0 === t.length && t.needDrain && (t.needDrain = !1, e.emit("drain"))
            }

            function m(e, t) {
                t.bufferProcessing = !0;
                var n = t.bufferedRequest;
                if (e._writev && n && n.next) {
                    var r = t.bufferedRequestCount,
                        i = new Array(r),
                        o = t.corkedRequestsFree;
                    o.entry = n;
                    for (var s = 0; n;) i[s] = n, n = n.next, s += 1;
                    c(e, t, !0, t.length, i, "", o.finish), t.pendingcb++, t.lastBufferedRequest = null, o.next ? (t.corkedRequestsFree = o.next, o.next = null) : t.corkedRequestsFree = new E(t)
                } else {
                    for (; n;) {
                        var a = n.chunk,
                            u = n.encoding,
                            f = n.callback,
                            l = t.objectMode ? 1 : a.length;
                        if (c(e, t, !1, l, a, u, f), n = n.next, t.writing) break
                    }
                    null === n && (t.lastBufferedRequest = null)
                }
                t.bufferedRequestCount = 0, t.bufferedRequest = n, t.bufferProcessing = !1
            }

            function v(e) {
                return e.ending && 0 === e.length && null === e.bufferedRequest && !e.finished && !e.writing
            }

            function b(e, t) {
                t.prefinished || (t.prefinished = !0, e.emit("prefinish"))
            }

            function w(e, t) {
                var n = v(t);
                return n && (0 === t.pendingcb ? (b(e, t), t.finished = !0, e.emit("finish")) : b(e, t)), n
            }

            function _(e, t, n) {
                t.ending = !0, w(e, t), n && (t.finished ? x(n) : e.once("finish", n)), t.ended = !0, e.writable = !1
            }

            function E(e) {
                var t = this;
                this.next = null, this.entry = null, this.finish = function(n) {
                    var r = t.entry;
                    for (t.entry = null; r;) {
                        var i = r.callback;
                        e.pendingcb--, i(n), r = r.next
                    }
                    e.corkedRequestsFree ? e.corkedRequestsFree.next = t : e.corkedRequestsFree = t
                }
            }
            t.exports = s;
            var x = e("process-nextick-args"),
                k = !n.browser && ["v0.10", "v0.9."].indexOf(n.version.slice(0, 5)) > -1 ? setImmediate : x;
            s.WritableState = o;
            var T = e("core-util-is");
            T.inherits = e("inherits");
            var S, R = {
                deprecate: e("util-deprecate")
            };
            ! function() {
                try {
                    S = e("stream")
                } catch (t) {} finally {
                    S || (S = e("events").EventEmitter)
                }
            }();
            var j = e("buffer").Buffer,
                A = e("buffer-shims");
            T.inherits(s, S);
            var L;
            o.prototype.getBuffer = function() {
                    for (var e = this.bufferedRequest, t = []; e;) t.push(e), e = e.next;
                    return t
                },
                function() {
                    try {
                        Object.defineProperty(o.prototype, "buffer", {
                            get: R.deprecate(function() {
                                return this.getBuffer()
                            }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.")
                        })
                    } catch (e) {}
                }();
            var L;
            s.prototype.pipe = function() {
                this.emit("error", new Error("Cannot pipe, not readable"))
            }, s.prototype.write = function(e, t, n) {
                var i = this._writableState,
                    o = !1;
                return "function" == typeof t && (n = t, t = null), j.isBuffer(e) ? t = "buffer" : t || (t = i.defaultEncoding), "function" != typeof n && (n = r), i.ended ? a(this, n) : u(this, i, e, n) && (i.pendingcb++, o = l(this, i, e, t, n)), o
            }, s.prototype.cork = function() {
                var e = this._writableState;
                e.corked++
            }, s.prototype.uncork = function() {
                var e = this._writableState;
                e.corked && (e.corked--, e.writing || e.corked || e.finished || e.bufferProcessing || !e.bufferedRequest || m(this, e))
            }, s.prototype.setDefaultEncoding = function(e) {
                if ("string" == typeof e && (e = e.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e + "").toLowerCase()) > -1)) throw new TypeError("Unknown encoding: " + e);
                return this._writableState.defaultEncoding = e, this
            }, s.prototype._write = function(e, t, n) {
                n(new Error("not implemented"))
            }, s.prototype._writev = null, s.prototype.end = function(e, t, n) {
                var r = this._writableState;
                "function" == typeof e ? (n = e, e = null, t = null) : "function" == typeof t && (n = t, t = null), null !== e && void 0 !== e && this.write(e, t), r.corked && (r.corked = 1, this.uncork()), r.ending || r.finished || _(this, r, n)
            }
        }).call(this, e("_process"))
    }, {
        "./_stream_duplex": 62,
        _process: 58,
        buffer: 45,
        "buffer-shims": 44,
        "core-util-is": 47,
        events: 50,
        inherits: 53,
        "process-nextick-args": 57,
        "util-deprecate": 73
    }],
    67: [function(e, t, n) {
        t.exports = e("./lib/_stream_passthrough.js")
    }, {
        "./lib/_stream_passthrough.js": 63
    }],
    68: [function(e, t, n) {
        (function(r) {
            var i = function() {
                try {
                    return e("stream")
                } catch (t) {}
            }();
            n = t.exports = e("./lib/_stream_readable.js"), n.Stream = i || n, n.Readable = n, n.Writable = e("./lib/_stream_writable.js"), n.Duplex = e("./lib/_stream_duplex.js"), n.Transform = e("./lib/_stream_transform.js"), n.PassThrough = e("./lib/_stream_passthrough.js"), !r.browser && "disable" === r.env.READABLE_STREAM && i && (t.exports = i)
        }).call(this, e("_process"))
    }, {
        "./lib/_stream_duplex.js": 62,
        "./lib/_stream_passthrough.js": 63,
        "./lib/_stream_readable.js": 64,
        "./lib/_stream_transform.js": 65,
        "./lib/_stream_writable.js": 66,
        _process: 58
    }],
    69: [function(e, t, n) {
        t.exports = e("./lib/_stream_transform.js")
    }, {
        "./lib/_stream_transform.js": 65
    }],
    70: [function(e, t, n) {
        t.exports = e("./lib/_stream_writable.js")
    }, {
        "./lib/_stream_writable.js": 66
    }],
    71: [function(e, t, n) {
        function r(e) {
            if (e && !u(e)) throw new Error("Unknown encoding: " + e)
        }

        function i(e) {
            return e.toString(this.encoding)
        }

        function o(e) {
            this.charReceived = e.length % 2, this.charLength = this.charReceived ? 2 : 0
        }

        function s(e) {
            this.charReceived = e.length % 3, this.charLength = this.charReceived ? 3 : 0
        }
        var a = e("buffer").Buffer,
            u = a.isEncoding || function(e) {
                switch (e && e.toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                    case "raw":
                        return !0;
                    default:
                        return !1
                }
            },
            f = n.StringDecoder = function(e) {
                switch (this.encoding = (e || "utf8").toLowerCase().replace(/[-_]/, ""), r(e), this.encoding) {
                    case "utf8":
                        this.surrogateSize = 3;
                        break;
                    case "ucs2":
                    case "utf16le":
                        this.surrogateSize = 2, this.detectIncompleteChar = o;
                        break;
                    case "base64":
                        this.surrogateSize = 3, this.detectIncompleteChar = s;
                        break;
                    default:
                        return void(this.write = i)
                }
                this.charBuffer = new a(6), this.charReceived = 0, this.charLength = 0
            };
        f.prototype.write = function(e) {
            for (var t = ""; this.charLength;) {
                var n = e.length >= this.charLength - this.charReceived ? this.charLength - this.charReceived : e.length;
                if (e.copy(this.charBuffer, this.charReceived, 0, n), this.charReceived += n, this.charReceived < this.charLength) return "";
                e = e.slice(n, e.length), t = this.charBuffer.slice(0, this.charLength).toString(this.encoding);
                var r = t.charCodeAt(t.length - 1);
                if (!(r >= 55296 && 56319 >= r)) {
                    if (this.charReceived = this.charLength = 0, 0 === e.length) return t;
                    break
                }
                this.charLength += this.surrogateSize, t = ""
            }
            this.detectIncompleteChar(e);
            var i = e.length;
            this.charLength && (e.copy(this.charBuffer, 0, e.length - this.charReceived, i), i -= this.charReceived), t += e.toString(this.encoding, 0, i);
            var i = t.length - 1,
                r = t.charCodeAt(i);
            if (r >= 55296 && 56319 >= r) {
                var o = this.surrogateSize;
                return this.charLength += o, this.charReceived += o, this.charBuffer.copy(this.charBuffer, o, 0, o), e.copy(this.charBuffer, 0, 0, o), t.substring(0, i)
            }
            return t
        }, f.prototype.detectIncompleteChar = function(e) {
            for (var t = e.length >= 3 ? 3 : e.length; t > 0; t--) {
                var n = e[e.length - t];
                if (1 == t && n >> 5 == 6) {
                    this.charLength = 2;
                    break
                }
                if (2 >= t && n >> 4 == 14) {
                    this.charLength = 3;
                    break
                }
                if (3 >= t && n >> 3 == 30) {
                    this.charLength = 4;
                    break
                }
            }
            this.charReceived = t
        }, f.prototype.end = function(e) {
            var t = "";
            if (e && e.length && (t = this.write(e)), this.charReceived) {
                var n = this.charReceived,
                    r = this.charBuffer,
                    i = this.encoding;
                t += r.slice(0, n).toString(i)
            }
            return t
        }
    }, {
        buffer: 45
    }],
    72: [function(e, t, n) {
        function r(e) {
            return e.getUTCFullYear() + "-" + i(e.getUTCMonth() + 1) + "-" + i(e.getUTCDate()) + "T" + i(e.getUTCHours()) + ":" + i(e.getUTCMinutes()) + ":" + i(e.getUTCSeconds()) + "." + String((e.getUTCMilliseconds() / 1e3).toFixed(3)).slice(2, 5) + "Z"
        }

        function i(e) {
            var t = e.toString();
            return 1 === t.length ? "0" + t : t
        }
        t.exports = r
    }, {}],
    73: [function(e, t, n) {
        (function(e) {
            function n(e, t) {
                function n() {
                    if (!i) {
                        if (r("throwDeprecation")) throw new Error(t);
                        r("traceDeprecation") ? console.trace(t) : console.warn(t), i = !0
                    }
                    return e.apply(this, arguments)
                }
                if (r("noDeprecation")) return e;
                var i = !1;
                return n
            }

            function r(t) {
                try {
                    if (!e.localStorage) return !1
                } catch (n) {
                    return !1
                }
                var r = e.localStorage[t];
                return null == r ? !1 : "true" === String(r).toLowerCase()
            }
            t.exports = n
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    74: [function(e, t, n) {
        t.exports = function(e) {
            return e && "object" == typeof e && "function" == typeof e.copy && "function" == typeof e.fill && "function" == typeof e.readUInt8
        }
    }, {}],
    75: [function(e, t, n) {
        (function(t, r) {
            function i(e, t) {
                var r = {
                    seen: [],
                    stylize: s
                };
                return arguments.length >= 3 && (r.depth = arguments[2]), arguments.length >= 4 && (r.colors = arguments[3]), g(t) ? r.showHidden = t : t && n._extend(r, t), _(r.showHidden) && (r.showHidden = !1), _(r.depth) && (r.depth = 2), _(r.colors) && (r.colors = !1), _(r.customInspect) && (r.customInspect = !0), r.colors && (r.stylize = o), u(r, e, r.depth)
            }

            function o(e, t) {
                var n = i.styles[t];
                return n ? "[" + i.colors[n][0] + "m" + e + "[" + i.colors[n][1] + "m" : e
            }

            function s(e, t) {
                return e
            }

            function a(e) {
                var t = {};
                return e.forEach(function(e, n) {
                    t[e] = !0
                }), t
            }

            function u(e, t, r) {
                if (e.customInspect && t && S(t.inspect) && t.inspect !== n.inspect && (!t.constructor || t.constructor.prototype !== t)) {
                    var i = t.inspect(r, e);
                    return b(i) || (i = u(e, i, r)), i
                }
                var o = f(e, t);
                if (o) return o;
                var s = Object.keys(t),
                    g = a(s);
                if (e.showHidden && (s = Object.getOwnPropertyNames(t)), T(t) && (s.indexOf("message") >= 0 || s.indexOf("description") >= 0)) return l(t);
                if (0 === s.length) {
                    if (S(t)) {
                        var y = t.name ? ": " + t.name : "";
                        return e.stylize("[Function" + y + "]", "special")
                    }
                    if (E(t)) return e.stylize(RegExp.prototype.toString.call(t), "regexp");
                    if (k(t)) return e.stylize(Date.prototype.toString.call(t), "date");
                    if (T(t)) return l(t)
                }
                var m = "",
                    v = !1,
                    w = ["{", "}"];
                if (d(t) && (v = !0, w = ["[", "]"]), S(t)) {
                    var _ = t.name ? ": " + t.name : "";
                    m = " [Function" + _ + "]"
                }
                if (E(t) && (m = " " + RegExp.prototype.toString.call(t)), k(t) && (m = " " + Date.prototype.toUTCString.call(t)), T(t) && (m = " " + l(t)), 0 === s.length && (!v || 0 == t.length)) return w[0] + m + w[1];
                if (0 > r) return E(t) ? e.stylize(RegExp.prototype.toString.call(t), "regexp") : e.stylize("[Object]", "special");
                e.seen.push(t);
                var x;
                return x = v ? c(e, t, r, g, s) : s.map(function(n) {
                    return h(e, t, r, g, n, v)
                }), e.seen.pop(), p(x, m, w)
            }

            function f(e, t) {
                if (_(t)) return e.stylize("undefined", "undefined");
                if (b(t)) {
                    var n = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                    return e.stylize(n, "string")
                }
                return v(t) ? e.stylize("" + t, "number") : g(t) ? e.stylize("" + t, "boolean") : y(t) ? e.stylize("null", "null") : void 0
            }

            function l(e) {
                return "[" + Error.prototype.toString.call(e) + "]"
            }

            function c(e, t, n, r, i) {
                for (var o = [], s = 0, a = t.length; a > s; ++s) O(t, String(s)) ? o.push(h(e, t, n, r, String(s), !0)) : o.push("");
                return i.forEach(function(i) {
                    i.match(/^\d+$/) || o.push(h(e, t, n, r, i, !0))
                }), o
            }

            function h(e, t, n, r, i, o) {
                var s, a, f;
                if (f = Object.getOwnPropertyDescriptor(t, i) || {
                        value: t[i]
                    }, f.get ? a = f.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special") : f.set && (a = e.stylize("[Setter]", "special")), O(r, i) || (s = "[" + i + "]"), a || (e.seen.indexOf(f.value) < 0 ? (a = y(n) ? u(e, f.value, null) : u(e, f.value, n - 1), a.indexOf("\n") > -1 && (a = o ? a.split("\n").map(function(e) {
                        return "  " + e
                    }).join("\n").substr(2) : "\n" + a.split("\n").map(function(e) {
                        return "   " + e
                    }).join("\n"))) : a = e.stylize("[Circular]", "special")), _(s)) {
                    if (o && i.match(/^\d+$/)) return a;
                    s = JSON.stringify("" + i), s.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (s = s.substr(1, s.length - 2), s = e.stylize(s, "name")) : (s = s.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), s = e.stylize(s, "string"))
                }
                return s + ": " + a
            }

            function p(e, t, n) {
                var r = 0,
                    i = e.reduce(function(e, t) {
                        return r++, t.indexOf("\n") >= 0 && r++, e + t.replace(/\u001b\[\d\d?m/g, "").length + 1
                    }, 0);
                return i > 60 ? n[0] + ("" === t ? "" : t + "\n ") + " " + e.join(",\n  ") + " " + n[1] : n[0] + t + " " + e.join(", ") + " " + n[1]
            }

            function d(e) {
                return Array.isArray(e)
            }

            function g(e) {
                return "boolean" == typeof e
            }

            function y(e) {
                return null === e
            }

            function m(e) {
                return null == e
            }

            function v(e) {
                return "number" == typeof e
            }

            function b(e) {
                return "string" == typeof e
            }

            function w(e) {
                return "symbol" == typeof e
            }

            function _(e) {
                return void 0 === e
            }

            function E(e) {
                return x(e) && "[object RegExp]" === j(e)
            }

            function x(e) {
                return "object" == typeof e && null !== e
            }

            function k(e) {
                return x(e) && "[object Date]" === j(e)
            }

            function T(e) {
                return x(e) && ("[object Error]" === j(e) || e instanceof Error)
            }

            function S(e) {
                return "function" == typeof e
            }

            function R(e) {
                return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || "undefined" == typeof e
            }

            function j(e) {
                return Object.prototype.toString.call(e)
            }

            function A(e) {
                return 10 > e ? "0" + e.toString(10) : e.toString(10)
            }

            function L() {
                var e = new Date,
                    t = [A(e.getHours()), A(e.getMinutes()), A(e.getSeconds())].join(":");
                return [e.getDate(), P[e.getMonth()], t].join(" ")
            }

            function O(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
            var C = /%[sdj%]/g;
            n.format = function(e) {
                if (!b(e)) {
                    for (var t = [], n = 0; n < arguments.length; n++) t.push(i(arguments[n]));
                    return t.join(" ")
                }
                for (var n = 1, r = arguments, o = r.length, s = String(e).replace(C, function(e) {
                        if ("%%" === e) return "%";
                        if (n >= o) return e;
                        switch (e) {
                            case "%s":
                                return String(r[n++]);
                            case "%d":
                                return Number(r[n++]);
                            case "%j":
                                try {
                                    return JSON.stringify(r[n++])
                                } catch (t) {
                                    return "[Circular]"
                                }
                            default:
                                return e
                        }
                    }), a = r[n]; o > n; a = r[++n]) s += y(a) || !x(a) ? " " + a : " " + i(a);
                return s
            }, n.deprecate = function(e, i) {
                function o() {
                    if (!s) {
                        if (t.throwDeprecation) throw new Error(i);
                        t.traceDeprecation ? console.trace(i) : console.error(i), s = !0
                    }
                    return e.apply(this, arguments)
                }
                if (_(r.process)) return function() {
                    return n.deprecate(e, i).apply(this, arguments)
                };
                if (t.noDeprecation === !0) return e;
                var s = !1;
                return o
            };
            var M, B = {};
            n.debuglog = function(e) {
                if (_(M) && (M = t.env.NODE_DEBUG || ""), e = e.toUpperCase(), !B[e])
                    if (new RegExp("\\b" + e + "\\b", "i").test(M)) {
                        var r = t.pid;
                        B[e] = function() {
                            var t = n.format.apply(n, arguments);
                            console.error("%s %d: %s", e, r, t)
                        }
                    } else B[e] = function() {};
                return B[e]
            }, n.inspect = i, i.colors = {
                bold: [1, 22],
                italic: [3, 23],
                underline: [4, 24],
                inverse: [7, 27],
                white: [37, 39],
                grey: [90, 39],
                black: [30, 39],
                blue: [34, 39],
                cyan: [36, 39],
                green: [32, 39],
                magenta: [35, 39],
                red: [31, 39],
                yellow: [33, 39]
            }, i.styles = {
                special: "cyan",
                number: "yellow",
                "boolean": "yellow",
                undefined: "grey",
                "null": "bold",
                string: "green",
                date: "magenta",
                regexp: "red"
            }, n.isArray = d, n.isBoolean = g, n.isNull = y, n.isNullOrUndefined = m, n.isNumber = v, n.isString = b, n.isSymbol = w, n.isUndefined = _, n.isRegExp = E, n.isObject = x, n.isDate = k, n.isError = T, n.isFunction = S, n.isPrimitive = R, n.isBuffer = e("./support/isBuffer");
            var P = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            n.log = function() {
                console.log("%s - %s", L(), n.format.apply(n, arguments))
            }, n.inherits = e("inherits"), n._extend = function(e, t) {
                if (!t || !x(t)) return e;
                for (var n = Object.keys(t), r = n.length; r--;) e[n[r]] = t[n[r]];
                return e
            }
        }).call(this, e("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "./support/isBuffer": 74,
        _process: 58,
        inherits: 53
    }]
}, {}, [1]);
//# sourceMappingURL=mocha.min.js.map