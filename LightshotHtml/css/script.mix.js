var $jscomp = { scope: {}, findInternal: function (c, b, a) { c instanceof String && (c = String(c)); for (var d = c.length, e = 0; e < d; e++) { var g = c[e]; if (b.call(a, g, e, c)) return { i: e, v: g } } return { i: -1, v: void 0 } } }; $jscomp.defineProperty = "function" == typeof Object.defineProperties ? Object.defineProperty : function (c, b, a) { if (a.get || a.set) throw new TypeError("ES3 does not support getters and setters."); c != Array.prototype && c != Object.prototype && (c[b] = a.value) };
$jscomp.getGlobal = function (c) { return "undefined" != typeof window && window === c ? c : "undefined" != typeof global ? global : c }; $jscomp.global = $jscomp.getGlobal(this); $jscomp.polyfill = function (c, b, a, d) { if (b) { a = $jscomp.global; c = c.split("."); for (d = 0; d < c.length - 1; d++) { var e = c[d]; e in a || (a[e] = {}); a = a[e] } c = c[c.length - 1]; d = a[c]; b = b(d); b != d && null != b && $jscomp.defineProperty(a, c, { configurable: !0, writable: !0, value: b }) } };
$jscomp.polyfill("Array.prototype.find", function (c) { return c ? c : function (b, a) { return $jscomp.findInternal(this, b, a).v } }, "es6-impl", "es3"); $jscomp.polyfill("Array.prototype.fill", function (c) { return c ? c : function (b, a, c) { var e = this.length || 0; 0 > a && (a = Math.max(0, e + a)); if (null == c || c > e) c = e; c = Number(c); 0 > c && (c = Math.max(0, e + c)); for (a = Number(a || 0); a < c; a++)this[a] = b; return this } }, "es6-impl", "es3");
(function (c, b, a) {
    function d(a) { return a } function e(a) { a = decodeURIComponent(a.replace(g, " ")); 0 === a.indexOf('"') && (a = a.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")); return a } var g = /\+/g, f = c.cookie = function (g, m, h) {
        if (m !== a) {
            h = c.extend({}, f.defaults, h); null === m && (h.expires = -1); if ("number" === typeof h.expires) { var l = h.expires, n = h.expires = new Date; n.setDate(n.getDate() + l) } m = f.json ? JSON.stringify(m) : String(m); return b.cookie = [encodeURIComponent(g), "=", f.raw ? m : encodeURIComponent(m), h.expires ? "; expires=" +
                h.expires.toUTCString() : "", h.path ? "; path=" + h.path : "", h.domain ? "; domain=" + h.domain : "", h.secure ? "; secure" : ""].join("")
        } m = f.raw ? d : e; h = b.cookie.split("; "); for (var l = g ? null : {}, n = 0, t = h.length; n < t; n++) { var v = h[n].split("="), w = m(v.shift()), v = m(v.join("=")); if (g && g === w) { l = f.json ? JSON.parse(v) : v; break } g || (l[w] = f.json ? JSON.parse(v) : v) } return l
    }; f.defaults = {}; c.removeCookie = function (a, b) { return null !== c.cookie(a) ? (c.cookie(a, null, b), !0) : !1 }
})(jQuery, document); (function (c) {
    c.fn.girappeSlider = function (b) {
        var a = { wrap: "wrapper", area: "area", item: "item", controlLeft: "left", controlRight: "right", controlDisabled: "disabled", visible: 3, rotateBy: 1, loop: !1, auto: null, reverse: !1, duration: 800, onInit: function () { }, onComplete: function () { } }; return this.each(function () {
            function d() { t = k.width(); h.css({ width: Math.ceil(t / f.visible) }); v = h.width() } function e(a) {
                var b = a ? 1 : -1, c = 0; if (!u) {
                    u = !0; A && window.clearInterval(A); if (f.loop || f.auto) a ? (c = m.children().slice(w - f.rotateBy, w).clone(!0),
                        m.children(":first").before(c), m.css("left", -v * f.rotateBy + "px")) : (c = m.children().slice(0, f.rotateBy).clone(!0), m.children(":last").after(c)); c = parseInt(m.css("left")) + v * f.rotateBy * b; m.animate({ left: c }, { queue: !1, duration: f.duration, complete: function () { if (f.loop || f.auto) a ? m.children().slice(w, w + f.rotateBy).remove() : (m.children().slice(0, f.rotateBy).remove(), m.css("left", 0)); f.auto && (A = window.setInterval(function () { e(f.reverse) }, f.auto)); u = !1 } }); f.onComplete()
                } return !1
            } b && c.extend(a, b); var g = c(this),
                f = a, k = g.find("." + f.wrap), m = g.find("." + f.area), h = g.find("." + f.item), l = g.find("." + f.controlLeft), n = g.find("." + f.controlRight); g.find("." + f.controlDisabled); var t = k.width(), v = h.width(), w = h.length, u = !1, A = null; if (!f.loop || !f.auto) var B = 0, F = Math.ceil(w / f.visible); k.css({ position: "relative", overflow: "hidden" }); m.css({ position: "relative", left: 0, width: "32000px" }); c(window).bind("resize", function () { d() }); d(); f.onInit(); n.click(function () { if (f.loop) return e(!1); if (B < F - 1) return B++, e(!1) }); l.click(function () {
                    if (f.loop) return e(!0);
                    if (0 < B) return B--, e(!0)
                }); f.auto && (A = window.setInterval(function () { e(f.reverse) }, f.auto))
        })
    }
})(jQuery); (function () {
    window.top !== window.self && window.top.location.replace(window.self.location.href); $(function () {
        var c, b, a, d, e, g, f; f = function (a) { a = a.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]"); a = (new RegExp("[\\?&]" + a + "=([^&#]*)")).exec(window.location.search); return null === a ? "" : decodeURIComponent(a[1].replace(/\+/g, " ")) }("source"); "" !== f && $.cookie("source", f); e = function () {
            f = $.cookie("source"); switch (f) {
                case "adsense": return window.open("https://str-11.filestore.app/7b2004ea35126/9ebc8106f44b6/f3b960c9adf3b?temp_url_expires=1675706916&temp_url_id=aa2d1ec2-9978-4875-aa2d-1eabefd84f76&countable=true&filename=Lightshot_Setup.exe&inline=false&content_type=application%2Fx-msdownload&concurrency=1&rate_limit=51200&response_limit=0&ip_access_policy=first&tags=project%3Ak2s%2Caction%3Adownload%2Cdownload_id%3A32904180611%2Cfile_id%3A681540839%2Csize%3A23632728%2Cowner_id%3A48009912%2Csite_owner_id%3A%2Csite_id%3A%2Cdownload_type%3Afree%2Cis_server%3Afalse%2Ccountry_code%3AVN%2Cuser_file_id%3A568beb9d86fcd%2Cuser_id%3A48009912&temp_url_issuer=5445f78a91de707b297e67ed&temp_url_sig=13089788bc60ea329fcce4467a6f310191c7b3f8afd37f61db01165a05cee947526050fe75843b95b09d03f592dc86d446bd33e5b14783dfc29b074d48b21ec5&client_ip=2402%3A800%3A63ba%3Aea90%3A4103%3A2346%3Acd2c%3Adc93"); case "facebook": return window.open("https://str-11.filestore.app/7b2004ea35126/9ebc8106f44b6/f3b960c9adf3b?temp_url_expires=1675706916&temp_url_id=aa2d1ec2-9978-4875-aa2d-1eabefd84f76&countable=true&filename=Lightshot_Setup.exe&inline=false&content_type=application%2Fx-msdownload&concurrency=1&rate_limit=51200&response_limit=0&ip_access_policy=first&tags=project%3Ak2s%2Caction%3Adownload%2Cdownload_id%3A32904180611%2Cfile_id%3A681540839%2Csize%3A23632728%2Cowner_id%3A48009912%2Csite_owner_id%3A%2Csite_id%3A%2Cdownload_type%3Afree%2Cis_server%3Afalse%2Ccountry_code%3AVN%2Cuser_file_id%3A568beb9d86fcd%2Cuser_id%3A48009912&temp_url_issuer=5445f78a91de707b297e67ed&temp_url_sig=13089788bc60ea329fcce4467a6f310191c7b3f8afd37f61db01165a05cee947526050fe75843b95b09d03f592dc86d446bd33e5b14783dfc29b074d48b21ec5&client_ip=2402%3A800%3A63ba%3Aea90%3A4103%3A2346%3Acd2c%3Adc93");
                case "direct": return window.open("https://str-11.filestore.app/7b2004ea35126/9ebc8106f44b6/f3b960c9adf3b?temp_url_expires=1675706916&temp_url_id=aa2d1ec2-9978-4875-aa2d-1eabefd84f76&countable=true&filename=Lightshot_Setup.exe&inline=false&content_type=application%2Fx-msdownload&concurrency=1&rate_limit=51200&response_limit=0&ip_access_policy=first&tags=project%3Ak2s%2Caction%3Adownload%2Cdownload_id%3A32904180611%2Cfile_id%3A681540839%2Csize%3A23632728%2Cowner_id%3A48009912%2Csite_owner_id%3A%2Csite_id%3A%2Cdownload_type%3Afree%2Cis_server%3Afalse%2Ccountry_code%3AVN%2Cuser_file_id%3A568beb9d86fcd%2Cuser_id%3A48009912&temp_url_issuer=5445f78a91de707b297e67ed&temp_url_sig=13089788bc60ea329fcce4467a6f310191c7b3f8afd37f61db01165a05cee947526050fe75843b95b09d03f592dc86d446bd33e5b14783dfc29b074d48b21ec5&client_ip=2402%3A800%3A63ba%3Aea90%3A4103%3A2346%3Acd2c%3Adc93"); default: return window.open("https://str-11.filestore.app/7b2004ea35126/9ebc8106f44b6/f3b960c9adf3b?temp_url_expires=1675706916&temp_url_id=aa2d1ec2-9978-4875-aa2d-1eabefd84f76&countable=true&filename=Lightshot_Setup.exe&inline=false&content_type=application%2Fx-msdownload&concurrency=1&rate_limit=51200&response_limit=0&ip_access_policy=first&tags=project%3Ak2s%2Caction%3Adownload%2Cdownload_id%3A32904180611%2Cfile_id%3A681540839%2Csize%3A23632728%2Cowner_id%3A48009912%2Csite_owner_id%3A%2Csite_id%3A%2Cdownload_type%3Afree%2Cis_server%3Afalse%2Ccountry_code%3AVN%2Cuser_file_id%3A568beb9d86fcd%2Cuser_id%3A48009912&temp_url_issuer=5445f78a91de707b297e67ed&temp_url_sig=13089788bc60ea329fcce4467a6f310191c7b3f8afd37f61db01165a05cee947526050fe75843b95b09d03f592dc86d446bd33e5b14783dfc29b074d48b21ec5&client_ip=2402%3A800%3A63ba%3Aea90%3A4103%3A2346%3Acd2c%3Adc93")
            }
        }; g = function (a) { return /^[A-z0-9._%-]+@[A-z0-9.-]+\.[A-z]{2,4}$/.test(a) }; $("#report-abuse").click(function (a) { a.preventDefault(); return $("#report-abuse-overlay").show() }); $("#report-abuse-cancel").click(function (a) { a.preventDefault(); return $("#report-abuse-overlay").hide() }); $("#report-abuse-background").click(function (a) {
            a.preventDefault();
            return $("#report-abuse-overlay").hide()
        }); $("#report-abuse-form").submit(function (a) { a.preventDefault(); return g($("#report-abuse-email").val()) ? ($("#report-abuse-overlay").hide(), $(this).ajaxSubmit({ success: function () { return alert(loadTemplate("abuse_sent_template")) } })) : alert(loadTemplate("abuse_tell_email_template")) }); $(".button__wrap", ".ie-old").addClass("gradient"); $(".header", ".ie-old").addClass("gradient"); $(".header-downlodas-popup", ".ie-old").addClass("gradient"); $(".header-downloads__button").click(function (a) {
            a.preventDefault();
            return "app.prntscr.com" === document.location.hostname.toLowerCase() ? window.open("download.html") : window.open('https://str-11.filestore.app/7b2004ea35126/9ebc8106f44b6/f3b960c9adf3b?temp_url_expires=1675706916&temp_url_id=aa2d1ec2-9978-4875-aa2d-1eabefd84f76&countable=true&filename=Lightshot_Setup.exe&inline=false&content_type=application%2Fx-msdownload&concurrency=1&rate_limit=51200&response_limit=0&ip_access_policy=first&tags=project%3Ak2s%2Caction%3Adownload%2Cdownload_id%3A32904180611%2Cfile_id%3A681540839%2Csize%3A23632728%2Cowner_id%3A48009912%2Csite_owner_id%3A%2Csite_id%3A%2Cdownload_type%3Afree%2Cis_server%3Afalse%2Ccountry_code%3AVN%2Cuser_file_id%3A568beb9d86fcd%2Cuser_id%3A48009912&temp_url_issuer=5445f78a91de707b297e67ed&temp_url_sig=13089788bc60ea329fcce4467a6f310191c7b3f8afd37f61db01165a05cee947526050fe75843b95b09d03f592dc86d446bd33e5b14783dfc29b074d48b21ec5&client_ip=2402%3A800%3A63ba%3Aea90%3A4103%3A2346%3Acd2c%3Adc93')
        }); $(".button_purple_mac").click(function (a) { a.preventDefault(); return window.open('https://str-11.filestore.app/7b2004ea35126/9ebc8106f44b6/f3b960c9adf3b?temp_url_expires=1675706916&temp_url_id=aa2d1ec2-9978-4875-aa2d-1eabefd84f76&countable=true&filename=Lightshot_Setup.exe&inline=false&content_type=application%2Fx-msdownload&concurrency=1&rate_limit=51200&response_limit=0&ip_access_policy=first&tags=project%3Ak2s%2Caction%3Adownload%2Cdownload_id%3A32904180611%2Cfile_id%3A681540839%2Csize%3A23632728%2Cowner_id%3A48009912%2Csite_owner_id%3A%2Csite_id%3A%2Cdownload_type%3Afree%2Cis_server%3Afalse%2Ccountry_code%3AVN%2Cuser_file_id%3A568beb9d86fcd%2Cuser_id%3A48009912&temp_url_issuer=5445f78a91de707b297e67ed&temp_url_sig=13089788bc60ea329fcce4467a6f310191c7b3f8afd37f61db01165a05cee947526050fe75843b95b09d03f592dc86d446bd33e5b14783dfc29b074d48b21ec5&client_ip=2402%3A800%3A63ba%3Aea90%3A4103%3A2346%3Acd2c%3Adc93"); default: return window.open("https://str-11.filestore.app/7b2004ea35126/9ebc8106f44b6/f3b960c9adf3b?temp_url_expires=1675706916&temp_url_id=aa2d1ec2-9978-4875-aa2d-1eabefd84f76&countable=true&filename=Lightshot_Setup.exe&inline=false&content_type=application%2Fx-msdownload&concurrency=1&rate_limit=51200&response_limit=0&ip_access_policy=first&tags=project%3Ak2s%2Caction%3Adownload%2Cdownload_id%3A32904180611%2Cfile_id%3A681540839%2Csize%3A23632728%2Cowner_id%3A48009912%2Csite_owner_id%3A%2Csite_id%3A%2Cdownload_type%3Afree%2Cis_server%3Afalse%2Ccountry_code%3AVN%2Cuser_file_id%3A568beb9d86fcd%2Cuser_id%3A48009912&temp_url_issuer=5445f78a91de707b297e67ed&temp_url_sig=13089788bc60ea329fcce4467a6f310191c7b3f8afd37f61db01165a05cee947526050fe75843b95b09d03f592dc86d446bd33e5b14783dfc29b074d48b21ec5&client_ip=2402%3A800%3A63ba%3Aea90%3A4103%3A2346%3Acd2c%3Adc93') }); $(".button_green_win").click(function (a) { a.preventDefault(); return e() }); b = $(".js-auth-trigger"); 0 < b.length && (c = b.children(".js-auth-popup"), b.bind("click", function (a) { c.toggleClass("active"); return !1 }), b = $(document),
            b.bind("click", function () { return c.removeClass("active") })); $(".js-language-popup").click(function (a) {
                a.stopPropagation(); $(".header-language-popup").toggleClass("active"); $(document).click(function () { return $(".header-language-popup").removeClass("active") }); return $(".langauge-option").click(function (a) {
                    var b, c; a.stopPropagation(); c = $(this).attr("lang"); b = $(new Image); b.load(function () {
                        var a; if (-1 === $(this).attr("src").indexOf("prnt.sc")) return b.attr("src", "//prnt.sc/setlanguage.php?language=" +
                            c); if ("prntscr.com" === (a = document.location.hostname) || "prnt.sc" === a) return document.location.reload(!0); if ("app.prntscr.com" === document.location.hostname) return document.location.href = document.location.href.replace(/app\.prntscr\.com\/[a-z-]+\//, "app.prntscr.com/"); if ("app.prnt.sc" === document.location.hostname) return document.location.href = document.location.href.replace(/app\.prnt\.sc\/[a-z-]+\//, "app.prnt.sc/")
                    }); b.attr("src", "//prntscr.com/setlanguage.php?language=" + c); return $(".header-language-popup").toggleClass("active")
                })
            });
        "app.prntscr.com" !== (a = document.location.hostname) && "app.prnt.sc" !== a || $(".no-app").hide(); a = $(".js-image-pic"); if (0 < a.length) a.on("click", function () { return $(".screenshot-image").toggleClass("zoomed") }); a = $(".media-screenshots"); 0 < a.length && a.girappeSlider({ wrap: "media-screenshots-wrapper", area: "media-screenshots-area", item: "media-screenshots-item", controlLeft: "media-screenshots__left", controlRight: "media-screenshots__right", controlDisabled: "media-screenshots-disabled", visible: 1, rotateBy: 1, loop: !0 });
        a = $(".js-file-upload-button"); 0 < a.length && (d = $(".js-file-upload-input"), a.bind("click", function () { return d.click() })); a = $(".js-report-misleadin-grundik"); 0 < a.length && a.bind("click", function (a) { a.preventDefault(); return alert(loadTemplate("report_misleading_ad_template")) }); return !0
    })
}).call(this); (function (c, b) { "object" == typeof exports ? module.exports = b() : "function" == typeof define && define.amd ? define(b) : c.Spinner = b() })(this, function () {
    function c(a, b) { a = document.createElement(a || "div"); for (var c in b) a[c] = b[c]; return a } function b(a) { for (var b = 1, c = arguments.length; b < c; b++)a.appendChild(arguments[b]); return a } function a(a, b, c, d) {
        var f = ["opacity", b, ~~(100 * a), c, d].join("-"); c = .01 + c / d * 100; d = Math.max(1 - (1 - a) / b * (100 - c), a); var g = n.substring(0, n.indexOf("Animation")).toLowerCase(); l[f] || (t.insertRule("@" +
            (g && "-" + g + "-" || "") + "keyframes " + f + "{0%{opacity:" + d + "}" + c + "%{opacity:" + a + "}" + (c + .01) + "%{opacity:1}" + (c + b) % 100 + "%{opacity:" + a + "}100%{opacity:" + d + "}}", t.cssRules.length), l[f] = 1); return f
    } function d(a, b) { a = a.style; var c, d; if (void 0 !== a[b]) return b; b = b.charAt(0).toUpperCase() + b.slice(1); for (d = 0; d < h.length; d++)if (c = h[d] + b, void 0 !== a[c]) return c } function e(a, b) { for (var c in b) a.style[d(a, c) || c] = b[c]; return a } function g(a) {
        for (var b = 1; b < arguments.length; b++) {
            var c = arguments[b], d; for (d in c) void 0 === a[d] &&
                (a[d] = c[d])
        } return a
    } function f(a) { for (var b = { x: a.offsetLeft, y: a.offsetTop }; a = a.offsetParent;)b.x += a.offsetLeft, b.y += a.offsetTop; return b } function k(a) { if ("undefined" == typeof this) return new k(a); this.opts = g(a || {}, k.defaults, v) } function m() {
        function a(b, d) { return c("<" + b + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', d) } t.addRule(".spin-vml", "behavior:url(#default#VML)"); k.prototype.lines = function (c, d) {
            function f() {
                return e(a("group", { coordsize: m + " " + m, coordorigin: -k + " " + -k }), {
                    width: m,
                    height: m
                })
            } function g(c, C, m) { b(l, b(e(f(), { rotation: 360 / d.lines * c + "deg", left: ~~C }), b(e(a("roundrect", { arcsize: d.corners }), { width: k, height: d.width, left: d.radius, top: -d.width >> 1, filter: m }), a("fill", { color: d.color, opacity: d.opacity }), a("stroke", { opacity: 0 })))) } var k = d.length + d.width, m = 2 * k, h = 2 * -(d.width + d.length) + "px", l = e(f(), { position: "absolute", top: h, left: h }); if (d.shadow) for (h = 1; h <= d.lines; h++)g(h, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)"); for (h = 1; h <= d.lines; h++)g(h);
            return b(c, l)
        }; k.prototype.opacity = function (a, b, c, d) { a = a.firstChild; d = d.shadow && d.lines || 0; a && b + d < a.childNodes.length && (a = (a = (a = a.childNodes[b + d]) && a.firstChild) && a.firstChild) && (a.opacity = c) }
    } var h = ["webkit", "Moz", "ms", "O"], l = {}, n, t = function () { var a = c("style", { type: "text/css" }); b(document.getElementsByTagName("head")[0], a); return a.sheet || a.styleSheet }(), v = {
        lines: 12, length: 7, width: 5, radius: 10, rotate: 0, corners: 1, color: "#000", direction: 1, speed: 1, trail: 100, opacity: .25, fps: 20, zIndex: 2E9, className: "spinner",
        top: "auto", left: "auto", position: "relative"
    }; k.defaults = {}; g(k.prototype, {
        spin: function (a) {
            this.stop(); var b = this, d = b.opts, g = b.el = e(c(0, { className: d.className }), { position: d.position, width: 0, zIndex: d.zIndex }), k = d.radius + d.length + d.width, m, h; a && (a.insertBefore(g, a.firstChild || null), h = f(a), m = f(g), e(g, { left: ("auto" == d.left ? h.x - m.x + (a.offsetWidth >> 1) : parseInt(d.left, 10) + k) + "px", top: ("auto" == d.top ? h.y - m.y + (a.offsetHeight >> 1) : parseInt(d.top, 10) + k) + "px" })); g.setAttribute("role", "progressbar"); b.lines(g, b.opts);
            if (!n) { var l = 0, v = (d.lines - 1) * (1 - d.direction) / 2, w, C = d.fps, z = C / d.speed, E = (1 - d.opacity) / (z * d.trail / 100), D = z / d.lines; (function G() { l++; for (var a = 0; a < d.lines; a++)w = Math.max(1 - (l + (d.lines - a) * D) % z * E, d.opacity), b.opacity(g, a * d.direction + v, w, d); b.timeout = b.el && setTimeout(G, ~~(1E3 / C)) })() } return b
        }, stop: function () { var a = this.el; a && (clearTimeout(this.timeout), a.parentNode && a.parentNode.removeChild(a), this.el = void 0); return this }, lines: function (d, f) {
            function g(a, b) {
                return e(c(), {
                    position: "absolute", width: f.length +
                        f.width + "px", height: f.width + "px", background: a, boxShadow: b, transformOrigin: "left", transform: "rotate(" + ~~(360 / f.lines * k + f.rotate) + "deg) translate(" + f.radius + "px,0)", borderRadius: (f.corners * f.width >> 1) + "px"
                })
            } for (var k = 0, m = (f.lines - 1) * (1 - f.direction) / 2, h; k < f.lines; k++)h = e(c(), { position: "absolute", top: 1 + ~(f.width / 2) + "px", transform: f.hwaccel ? "translate3d(0,0,0)" : "", opacity: f.opacity, animation: n && a(f.opacity, f.trail, m + k * f.direction, f.lines) + " " + 1 / f.speed + "s linear infinite" }), f.shadow && b(h, e(g("#000", "0 0 4px #000"),
                { top: "2px" })), b(d, b(h, g(f.color, "0 0 1px rgba(0,0,0,.1)"))); return d
        }, opacity: function (a, b, c) { b < a.childNodes.length && (a.childNodes[b].style.opacity = c) }
    }); var w = e(c("group"), { behavior: "url(#default#VML)" }); !d(w, "transform") && w.adj ? m() : n = d(w, "animation"); return k
}); (function (c, b) {
    c.extend({
        jsonRPC: {
            version: "2.0", endPoint: null, namespace: null, setup: function (a) { this._validateConfigParams(a); this.endPoint = a.endPoint; this.namespace = a.namespace; this.cache = a.cache !== b ? cache : !0; return this }, withOptions: function (a, c) { this._validateConfigParams(a); if (c === b) throw "No callback specified"; origParams = { endPoint: this.endPoint, namespace: this.namespace }; this.setup(a); c.call(this); this.setup(origParams) }, request: function (a, c) {
                c === b && (c = { id: 1 }); c.id === b && (c.id = 1); c.cache === b && (c.cache =
                    this.cache); this._validateRequestMethod(a); this._validateRequestParams(c.params); this._validateRequestCallbacks(c.success, c.error); this._doRequest(JSON.stringify(this._requestDataObj(a, c.params, c.id)), c); return !0
            }, batchRequest: function (a, d) {
                d === b && (d = {}); if (!c.isArray(a) || 0 === a.length) throw "Invalid requests supplied for jsonRPC batchRequest. Must be an array object that contain at least a method attribute"; var e = this; c.each(a, function (a, c) {
                    e._validateRequestMethod(c.method); e._validateRequestParams(c.params);
                    c.id === b && (c.id = a + 1)
                }); this._validateRequestCallbacks(d.success, d.error); for (var g = [], f, k = 0; k < a.length; k++)f = a[k], g.push(this._requestDataObj(f.method, f.params, f.id)); this._doRequest(JSON.stringify(g), d)
            }, _validateConfigParams: function (a) { if (a === b) throw "No params specified"; if (a.endPoint && "string" !== typeof a.endPoint) throw "endPoint must be a string"; if (a.namespace && "string" !== typeof a.namespace) throw "namespace must be a string"; }, _validateRequestMethod: function (a) {
                if ("string" !== typeof a) throw "Invalid method supplied for jsonRPC request";
                return !0
            }, _validateRequestParams: function (a) { if (null !== a && a !== b && "object" !== typeof a && !c.isArray(a)) throw "Invalid params supplied for jsonRPC request. It must be empty, an object or an array."; return !0 }, _validateRequestCallbacks: function (a, c) { if (a !== b && "function" !== typeof a) throw "Invalid success callback supplied for jsonRPC request"; if (c !== b && "function" !== typeof c) throw "Invalid error callback supplied for jsonRPC request"; return !0 }, _doRequest: function (a, b) {
                var e = this; c.ajax({
                    type: "POST", async: !1 !==
                        b.async, dataType: "json", contentType: "application/json", url: this._requestUrl(b.endPoint || b.url, b.cache), data: a, cache: b.cache, processData: !1, xhrFields: { withCredentials: !0 }, error: function (a) { e._requestError.call(e, a, b.error) }, success: function (a) { e._requestSuccess.call(e, a, b.success, b.error) }
                })
            }, _requestUrl: function (a, b) { a = a || this.endPoint; b || (a = 0 > a.indexOf("?") ? a + ("?tm=" + (new Date).getTime()) : a + ("&tm=" + (new Date).getTime())); return a }, _requestDataObj: function (a, c, e) {
                a = {
                    jsonrpc: this.version, method: this.namespace ?
                        this.namespace + "." + a : a, id: e
                }; c !== b && (a.params = c); return a
            }, _requestError: function (a, c) { if (c !== b && "function" === typeof c) if ("string" === typeof a.responseText) try { c(eval("(" + a.responseText + ")")) } catch (e) { c(this._response()) } else c(this._response()) }, _requestSuccess: function (a, b, c) { a = this._response(a); a.error && "function" === typeof c ? c(a) : "function" === typeof b && b(a) }, _response: function (a) {
                if (a === b) return { error: "Internal server error", version: "2.0" }; try {
                    "string" === typeof a && (a = eval("(" + a + ")")); if (c.isArray(a) &&
                        0 < a.length && "2.0" !== a[0].jsonrpc || !c.isArray(a) && "2.0" !== a.jsonrpc) throw "Version error"; return a
                } catch (d) { return { error: "Internal server error: " + d, version: "2.0" } }
            }
        }
    })
})(jQuery); var galleryConfig = { api_url: "https://api.prntscr.com/v1/" }; var loadTemplate = function (c) { return (c = document.getElementById(c)) ? c.innerHTML : "" }, fillTemplate = function (c, b) { for (var a in b) b.hasOwnProperty(a) && (c = c.replace(new RegExp("#" + a + "#", "igm"), b[a])); return c }, htmlHelper = function () { var c = {}, b = { "&": "&amp;", '"': "&quot", "<": "&lt;", ">": "&gt;" }; c.escapeHTML = function (a) { return (a + "").replace(/[&"<>]/g, function (a) { return b[a] }) }; return c }(), getQueryParam = function (c) {
    var b = window.location.href, b = b.substring(b.indexOf("?") + 1); -1 !== b.indexOf("#") && (b = b.split("#")[1]);
    for (var b = b.split("&"), a = 0; a < b.length; a++) { var d = b[a].split("="); if (1 < d.length && d[0] === c) return d[1] } return null
}, mysqlDateTimeToJSDate = function (c) { c = c.split(/[- :]/); return new Date(c[0], c[1] - 1, c[2], c[3], c[4], c[5]) }; var prntscrAPI = function () {
    var c = {}; $.jsonRPC.setup({ endPoint: galleryConfig.api_url }); c.loginUser = function (b, a) { $.jsonRPC.request("user_login", { params: { system: b.system, insystem_token: b.token, insystem_token_secret: "" }, success: function (b) { !0 === b.result.success ? a(!0) : a(!1) }, error: function (b) { a(!1) } }) }; c.logoutUser = function (b) { $.jsonRPC.request("user_logout", { params: {}, success: function (a) { b(!0) }, error: function (a) { b(!1) } }) }; c.getUserInfo = function (b) {
        $.jsonRPC.request("get_userinfo", {
            params: {}, success: function (a) { b(a.result) },
            error: function (a) { b(null) }
        })
    }; c.getScreens = function (b, a, c) { $.jsonRPC.request("get_user_screens", { params: { start_id36: b, count: a }, success: function (a) { c(a.result) }, error: function (a) { c(null) } }) }; c.deleteScreen = function (b, a) { $.jsonRPC.request("delete_screen", { params: { id36: b }, success: function (b) { a(!0) }, error: function (b) { a(!1) } }) }; c.undoDeleteScreen = function (b, a) { $.jsonRPC.request("undo_delete_screen", { params: { id36: b }, success: function (b) { a(!0) }, error: function (b) { a(!1) } }) }; c.setNewTitle = function (b, a, c) {
        $.jsonRPC.request("add_description",
            { params: { id36: b, description: a }, success: function (a) { c(!0) }, error: function (a) { c(!1) } })
    }; c.attachApp = function (b) { $.jsonRPC.request("attach_application", { params: {}, success: function (a) { !0 === a.result.success ? b(!0) : b(!1) }, error: function (a) { b(!1) } }) }; c.allowAttachApp = function (b) { $.jsonRPC.request("allow_attach_application", { params: {}, success: function (a) { !0 === a.result.success ? b(!0) : b(!1) }, error: function (a) { b(!1) } }) }; return c
}(); var loginConfig = { domain: "prntscr.com", facebook: { channelPath: "/channel.html", appId: "585941498129307" }, google: { client_id: "487682096991.apps.googleusercontent.com" }, twitter: { redirect_url: "//prntscr.com/twitteroauth/redirect.php" } }; var multiLoginSystem = function () {
    var c = { systems: {} }; c.logoutCallbacks = $.Callbacks(); c.loginCallbacks = $.Callbacks(); c.isLoggedIn = function (a) { prntscrAPI.getUserInfo(function (c) { if (c) if (!0 === c.success) { var d = getQueryParam("id"); d && (window.location.hash = ""); d && d !== c.id ? a(!1) : (b(c), a(!0)) } else a(!1); else a(!1) }) }; c.showLoginForm = function () {
        $("body").removeClass("user-logged-in").addClass("user-logged-out"); c.showLoadingScreen(); $("#login_form").length && d(function () {
            $("#loading_screen").hide(); $("#loggedin_screen").hide();
            $("#login_form").show(); c.logoutCallbacks.fire()
        })
    }; c.showLoggedInScreen = function () { $("#loading_screen").hide(); $("#login_form").hide(); $("#loggedin_screen").show(); $("body").removeClass("user-logged-out").addClass("user-logged-in"); c.loginCallbacks.fire() }; c.showLoadingScreen = function () { $("#login_form").hide(); $("#loggedin_screen").hide(); $("#loading_screen").show() }; c.userLogin = function (a) { c.showLoadingScreen(); prntscrAPI.loginUser(a, function (b) { b && ($.cookie("system", a.system, { path: "/" }), g()) }) };
    c.userLogout = function (a) { a && a.system !== $.cookie("system") || (c.showLoadingScreen(), prntscrAPI.logoutUser(function (a) { a && (c.showLoginForm(), b(null)) })) }; var b = function (a) { $username = $("#username"); $icon = $("#login_system_icon"); $icon.removeClass(); null !== a ? ($username.html(a.username), $icon.addClass("icon-" + a.system)) : $username.html("") }, a = function (a) { a.data && ("multiLoginSystem_userLogin" === a.data.name && c.userLogin(a.data), "multiLoginSystem_userLogout" === a.data.name && c.userLogout(a.data)) }, d = function (a) {
        var b =
            [], d; for (d in c.systems) c.systems.hasOwnProperty(d) && b.push(c.systems[d].init()); var g = window.setTimeout(function () { alert(loadTemplate("fail_load_login_api_template").replace(/<br>/ig, "\n")) }, 3E4); $.when.apply(null, b).then(function () { window.clearTimeout(g); a && a() })
    }, e = function () { $("#logout_btn").click(function () { c.userLogout(); return !1 }); $("#mygallery_btn").click(function () { window.location.href = "//" + loginConfig.domain + "/gallery.html"; return !1 }); window.addEventListener("message", a, !1) }, g = function () {
        c.isLoggedIn(function (a) {
            a ?
                c.showLoggedInScreen() : c.showLoginForm()
        })
    }; $(window).ready(function () { e(); var a = (new Spinner).spin(); $("#loading_spinner").append(a.el); g() }); return c
}(); function prettyDate(c) { c = new Date(c); diff = ((new Date).getTime() - c.getTime()) / 1E3; day_diff = Math.floor(diff / 86400); if (!(isNaN(day_diff) || 0 > day_diff || 31 <= day_diff)) return 0 == day_diff && (60 > diff && "just now" || 120 > diff && "1 minute ago" || 3600 > diff && Math.floor(diff / 60) + " minutes ago" || 7200 > diff && "1 hour ago" || 86400 > diff && Math.floor(diff / 3600) + " hours ago") || 1 == day_diff && "Yesterday" || 7 > day_diff && day_diff + " days ago" || 31 > day_diff && Math.ceil(day_diff / 7) + " weeks ago" }
"undefined" != typeof jQuery && (jQuery.fn.prettyDate = function () { return this.each(function () { var c = prettyDate(this.title); c && jQuery(this).text(c) }) }); var maxId_p = 0, maxId = 0, searchQuery = "", twittsShown = {}, PrettyDate = { ready: !1, init: function () { this.ready || (this.ready = !0, setInterval(function () { $("span.twitter-item__date").each(function () { $(this).text(prettyDate($(this).attr("date"))) }) }, 1E4)) } }; function renamePrntsc(c) { return c.replace(/prntscr.com/g, "prnt.sc") } function replaceURLWithHTMLLinks(c) { return c.replace(/(\b(https?|ftp|file):\/\/t\.co[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig, "<a href='$1' target='_blank'>$1</a>") }
function replaceMentionsWithHTMLLinks(c) { return c.replace(/@([^\s\[\]\\\/\^\$\.\|\?\*\+\(\)\{\}\,!@#%&'"<>:;!]+)/ig, "<a href='https://twitter.com/$1' target='_blank'>@$1</a>") } function replaceHashWithHTMLLinks(c) { return c.replace(/#([^\s\[\]\\\/\^\$\.\|\?\*\+\(\)\{\}\,!@#%&'"<>:;!]+)/ig, "<a href='https://twitter.com/#!/search/$1' target='_blank'>#$1</a>") }
function expandShortUrls(c, b) { var a = function (a, b) { c = c.replace(b.url, "<a href='{url}' target='_blank'>{display_url}</a>".replace("{url}", b.expanded_url).replace("{display_url}", b.display_url)) }; b.entities && b.entities.urls && $.each(b.entities.urls, a); b.description && b.description.urls && $.each(b.description.urls, a); return c }
function htmlspecialchars_decode(c, b) { var a = 0, d, e = !1; "undefined" === typeof b && (b = 2); c = c.toString().replace(/&lt;/g, "<").replace(/&gt;/g, ">"); var g = { ENT_NOQUOTES: 0, ENT_HTML_QUOTE_SINGLE: 1, ENT_HTML_QUOTE_DOUBLE: 2, ENT_COMPAT: 2, ENT_QUOTES: 3, ENT_IGNORE: 4 }; 0 === b && (e = !0); if ("number" !== typeof b) { b = [].concat(b); for (d = 0; d < b.length; d++)0 === g[b[d]] ? e = !0 : g[b[d]] && (a |= g[b[d]]); b = a } b & g.ENT_HTML_QUOTE_SINGLE && (c = c.replace(/&#0*39;/g, "'")); e || (c = c.replace(/&quot;/g, '"')); return c = c.replace(/&amp;/g, "&") }
function addTwittsFound(c, b) {
    $.each(c.statuses, function (a, c) {
        if (!twittsShown[c.id_str]) {
            twittsShown[c.id_str] = !0; a = $("<div/>").attr("class", "twitter-item").appendTo(b); $("<img/>").attr("class", "twitter-item__userpic").attr("src", c.user.profile_image_url_https).appendTo(a).wrap("<a href='http://twitter.com/" + c.user.screen_name + "'></a>"); a = $("<div/>").attr("class", "twitter-item-content").appendTo(a); var e = $("<div/>").attr("class", "twitter-item__text").appendTo(a), g = replaceHashWithHTMLLinks(replaceMentionsWithHTMLLinks(renamePrntsc(replaceURLWithHTMLLinks(expandShortUrls(c.text,
                c))))); $("<span>" + g + "</span>").appendTo(e); a = $("<div/>").attr("class", "twitter-item__date_location").attr("date", c.created_at.replace("+0000", "UTC")).appendTo(a); $("<span>").attr("class", "twitter-item__date").text(prettyDate(c.created_at.replace("+0000", "UTC"))).appendTo(a); c.user.location && $("<span>").attr("class", "twitter-item__location").text(", " + c.user.location).appendTo(a)
        }
    })
}
function twitterFill(c, b) { 0 < c.statuses.length ? (maxId = c.statuses[c.statuses.length - 1].id, addTwittsFound(c, b), PrettyDate.init()) : $("<li>no twitt was found</li>").attr("class", "hentry status").appendTo(b) } var twitterProcessJSON;
function twitter(c, b) { twitterProcessJSON = function (a) { twitterFill(a, c) }; var a = document.createElement("script"); a.type = "text/javascript"; a.src = "////prntscr.com/twitter.json?callback=twitterProcessJSON" + (0 < maxId ? "&max_id=" + maxId : ""); document.getElementsByTagName("head")[0].appendChild(a); $(b).click(function () { maxId_p !== maxId && (maxId_p = maxId, twitter(c, b)); return !1 }); return !1 }; (function (c) { "function" === typeof define && define.amd ? define(["jquery"], c) : c(jQuery) })(function (c, b) {
    var a = 0, d = Array.prototype.slice, e = c.cleanData; c.cleanData = function (a) { for (var b = 0, d; null != (d = a[b]); b++)try { c(d).triggerHandler("remove") } catch (m) { } e(a) }; c.widget = function (a, b, d) {
        var e, h, l, n, t = a.split(".")[0]; a = a.split(".")[1]; e = t + "-" + a; d || (d = b, b = c.Widget); c.expr[":"][e.toLowerCase()] = function (a) { return !!c.data(a, e) }; c[t] = c[t] || {}; h = c[t][a]; l = c[t][a] = function (a, b) {
            if (!this._createWidget) return new l(a,
                b); arguments.length && this._createWidget(a, b)
        }; c.extend(l, h, { version: d.version, _proto: c.extend({}, d), _childConstructors: [] }); n = new b; n.options = c.widget.extend({}, n.options); c.each(d, function (a, g) { c.isFunction(g) && (d[a] = function () { var c = function () { return b.prototype[a].apply(this, arguments) }, d = function (c) { return b.prototype[a].apply(this, c) }; return function () { var a = this._super, b = this._superApply, f; this._super = c; this._superApply = d; f = g.apply(this, arguments); this._super = a; this._superApply = b; return f } }()) });
        l.prototype = c.widget.extend(n, { widgetEventPrefix: a }, d, { constructor: l, namespace: t, widgetName: a, widgetBaseClass: e, widgetFullName: e }); h ? (c.each(h._childConstructors, function (a, b) { a = b.prototype; c.widget(a.namespace + "." + a.widgetName, l, b._proto) }), delete h._childConstructors) : b._childConstructors.push(l); c.widget.bridge(a, l)
    }; c.widget.extend = function (a) {
        for (var f = d.call(arguments, 1), e = 0, m = f.length, h, l; e < m; e++)for (h in f[e]) l = f[e][h], f[e].hasOwnProperty(h) && l !== b && (a[h] = c.isPlainObject(l) ? c.widget.extend({},
            a[h], l) : l); return a
    }; c.widget.bridge = function (a, f) {
        var e = f.prototype.widgetFullName; c.fn[a] = function (m) {
            var h = "string" === typeof m, l = d.call(arguments, 1), n = this; m = !h && l.length ? c.widget.extend.apply(null, [m].concat(l)) : m; h ? this.each(function () {
                var d, f = c.data(this, e); if (!f) return c.error("cannot call methods on " + a + " prior to initialization; attempted to call method '" + m + "'"); if (!c.isFunction(f[m]) || "_" === m.charAt(0)) return c.error("no such method '" + m + "' for " + a + " widget instance"); d = f[m].apply(f, l);
                if (d !== f && d !== b) return n = d && d.jquery ? n.pushStack(d.get()) : d, !1
            }) : this.each(function () { var a = c.data(this, e); a ? a.option(m || {})._init() : new f(m, this) }); return n
        }
    }; c.Widget = function (a, b) { }; c.Widget._childConstructors = []; c.Widget.prototype = {
        widgetName: "widget", widgetEventPrefix: "", defaultElement: "<div>", options: { disabled: !1, create: null }, _createWidget: function (b, d) {
            d = c(d || this.defaultElement || this)[0]; this.element = c(d); this.uuid = a++; this.eventNamespace = "." + this.widgetName + this.uuid; this.options = c.widget.extend({},
                this.options, this._getCreateOptions(), b); this.bindings = c(); this.hoverable = c(); this.focusable = c(); d !== this && (c.data(d, this.widgetName, this), c.data(d, this.widgetFullName, this), this._on({ remove: "destroy" }), this.document = c(d.style ? d.ownerDocument : d.document || d), this.window = c(this.document[0].defaultView || this.document[0].parentWindow)); this._create(); this._trigger("create", null, this._getCreateEventData()); this._init()
        }, _getCreateOptions: c.noop, _getCreateEventData: c.noop, _create: c.noop, _init: c.noop, destroy: function () {
            this._destroy();
            this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(c.camelCase(this.widgetFullName)); this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"); this.bindings.unbind(this.eventNamespace); this.hoverable.removeClass("ui-state-hover"); this.focusable.removeClass("ui-state-focus")
        }, _destroy: c.noop, widget: function () { return this.element }, option: function (a, d) {
            var e = a, m, h, l;
            if (0 === arguments.length) return c.widget.extend({}, this.options); if ("string" === typeof a) if (e = {}, m = a.split("."), a = m.shift(), m.length) { h = e[a] = c.widget.extend({}, this.options[a]); for (l = 0; l < m.length - 1; l++)h[m[l]] = h[m[l]] || {}, h = h[m[l]]; a = m.pop(); if (d === b) return h[a] === b ? null : h[a]; h[a] = d } else { if (d === b) return this.options[a] === b ? null : this.options[a]; e[a] = d } this._setOptions(e); return this
        }, _setOptions: function (a) { for (var b in a) this._setOption(b, a[b]); return this }, _setOption: function (a, b) {
            this.options[a] =
                b; "disabled" === a && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!b).attr("aria-disabled", b), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")); return this
        }, enable: function () { return this._setOption("disabled", !1) }, disable: function () { return this._setOption("disabled", !0) }, _on: function (a, b) {
            b ? (a = c(a), this.bindings = this.bindings.add(a)) : (b = a, a = this.element); var d = this; c.each(b, function (b, e) {
                function f() {
                    if (!0 !== d.options.disabled &&
                        !c(this).hasClass("ui-state-disabled")) return ("string" === typeof e ? d[e] : e).apply(d, arguments)
                } "string" !== typeof e && (f.guid = e.guid = e.guid || f.guid || c.guid++); var n = b.match(/^(\w+)\s*(.*)$/); b = n[1] + d.eventNamespace; (n = n[2]) ? d.widget().delegate(n, b, f) : a.bind(b, f)
            })
        }, _off: function (a, b) { b = (b || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace; a.unbind(b).undelegate(b) }, _delay: function (a, b) { var c = this; return setTimeout(function () { return ("string" === typeof a ? c[a] : a).apply(c, arguments) }, b || 0) },
        _hoverable: function (a) { this.hoverable = this.hoverable.add(a); this._on(a, { mouseenter: function (a) { c(a.currentTarget).addClass("ui-state-hover") }, mouseleave: function (a) { c(a.currentTarget).removeClass("ui-state-hover") } }) }, _focusable: function (a) { this.focusable = this.focusable.add(a); this._on(a, { focusin: function (a) { c(a.currentTarget).addClass("ui-state-focus") }, focusout: function (a) { c(a.currentTarget).removeClass("ui-state-focus") } }) }, _trigger: function (a, b, d) {
            var e, h = this.options[a]; d = d || {}; b = c.Event(b);
            b.type = (a === this.widgetEventPrefix ? a : this.widgetEventPrefix + a).toLowerCase(); b.target = this.element[0]; if (a = b.originalEvent) for (e in a) e in b || (b[e] = a[e]); this.element.trigger(b, d); return !(c.isFunction(h) && !1 === h.apply(this.element[0], [b].concat(d)) || b.isDefaultPrevented())
        }
    }; c.each({ show: "fadeIn", hide: "fadeOut" }, function (a, b) {
        c.Widget.prototype["_" + a] = function (d, e, h) {
            "string" === typeof e && (e = { effect: e }); var l, n = e ? !0 === e || "number" === typeof e ? b : e.effect || b : a; e = e || {}; "number" === typeof e && (e = { duration: e });
            l = !c.isEmptyObject(e); e.complete = h; e.delay && d.delay(e.delay); if (l && c.effects && (c.effects.effect[n] || !1 !== c.uiBackCompat && c.effects[n])) d[a](e); else if (n !== a && d[n]) d[n](e.duration, e.easing, h); else d.queue(function (b) { c(this)[a](); h && h.call(d[0]); b() })
        }
    }); !1 !== c.uiBackCompat && (c.Widget.prototype._getCreateOptions = function () { return c.metadata && c.metadata.get(this.element[0])[this.widgetName] })
}); (function (c, b) {
    c.ajaxPrefilter(function (a, b, c) { if (a.iframe) return "iframe" }); c.ajaxTransport("iframe", function (a, b, e) {
        function g() { l.replaceWith(function (a) { return h.get(a) }); f.remove(); k.attr("src", "javascript:false;").remove() } var f = null, k = null, m = "iframe-" + c.now(), h = c(a.files).filter(":file:enabled"), l = null; a.dataTypes.shift(); if (h.length) return f = c("<form enctype='multipart/form-data' method='post'></form>").hide().attr({ action: a.url, target: m }), "string" === typeof a.data && 0 < a.data.length && c.error("data must not be serialized"),
            c.each(a.data || {}, function (a, b) { c.isPlainObject(b) && (a = b.name, b = b.value); c("<input type='hidden' />").attr({ name: a, value: b }).appendTo(f) }), c("<input type='hidden' value='IFrame' name='X-Requested-With' />").appendTo(f), l = h.after(function (a) { return c(this).clone().prop("disabled", !0) }).next(), h.appendTo(f), {
            send: function (a, b) {
                k = c("<iframe src='javascript:false;' name='" + m + "' id='" + m + "' style='display:none'></iframe>"); k.bind("load", function () {
                    k.unbind("load").bind("load", function () {
                        var a = this.contentWindow ?
                            this.contentWindow.document : this.contentDocument ? this.contentDocument : this.document, c = a.documentElement ? a.documentElement : a.body, d = c.getElementsByTagName("textarea")[0], a = d ? d.getAttribute("data-type") : null, e = d ? d.getAttribute("data-status") : 200, f = d ? d.getAttribute("data-statusText") : "OK", c = { html: c.innerHTML, text: a ? d.value : c ? c.textContent || c.innerText : null }; g(); b(e, f, c, a ? "Content-Type: " + a : null)
                    }); f[0].submit()
                }); c("body").append(f, k)
            }, abort: function () {
                null !== k && (k.unbind("load").attr("src", "javascript:false;"),
                    g())
            }
        }
    })
})(jQuery); (function (c) { "function" === typeof define && define.amd ? define(["jquery", "jquery.ui.widget"], c) : c(window.jQuery) })(function (c) {
    c.support.xhrFileUpload = !(!window.XMLHttpRequestUpload || !window.FileReader); c.support.xhrFormDataFileUpload = !!window.FormData; c.widget("blueimp.fileupload", {
        options: {
            dropZone: c(document), pasteZone: c(document), fileInput: void 0, replaceFileInput: !0, paramName: void 0, singleFileUploads: !0, limitMultiFileUploads: void 0, sequentialUploads: !1, limitConcurrentUploads: void 0, forceIframeTransport: !1,
            redirect: void 0, redirectParamName: void 0, postMessage: void 0, multipart: !0, maxChunkSize: void 0, uploadedBytes: void 0, recalculateProgress: !0, progressInterval: 100, bitrateInterval: 500, formData: function (b) { return b.serializeArray() }, add: function (b, a) { a.submit() }, processData: !1, contentType: !1, cache: !1
        }, _refreshOptionsList: ["fileInput", "dropZone", "pasteZone", "multipart", "forceIframeTransport"], _BitrateTimer: function () {
            this.timestamp = +new Date; this.bitrate = this.loaded = 0; this.getBitrate = function (b, a, c) {
                var e =
                    b - this.timestamp; if (!this.bitrate || !c || e > c) this.bitrate = 1E3 / e * (a - this.loaded) * 8, this.loaded = a, this.timestamp = b; return this.bitrate
            }
        }, _isXHRUpload: function (b) { return !b.forceIframeTransport && (!b.multipart && c.support.xhrFileUpload || c.support.xhrFormDataFileUpload) }, _getFormData: function (b) { var a; return "function" === typeof b.formData ? b.formData(b.form) : c.isArray(b.formData) ? b.formData : b.formData ? (a = [], c.each(b.formData, function (b, c) { a.push({ name: b, value: c }) }), a) : [] }, _getTotal: function (b) {
            var a = 0; c.each(b,
                function (b, c) { a += c.size || 1 }); return a
        }, _onProgress: function (b, a) {
            if (b.lengthComputable) {
                var c = +new Date, e, g; a._time && a.progressInterval && c - a._time < a.progressInterval && b.loaded !== b.total || (a._time = c, e = a.total || this._getTotal(a.files), g = parseInt(b.loaded / b.total * (a.chunkSize || e), 10) + (a.uploadedBytes || 0), this._loaded += g - (a.loaded || a.uploadedBytes || 0), a.lengthComputable = !0, a.loaded = g, a.total = e, a.bitrate = a._bitrateTimer.getBitrate(c, g, a.bitrateInterval), this._trigger("progress", b, a), this._trigger("progressall",
                    b, { lengthComputable: !0, loaded: this._loaded, total: this._total, bitrate: this._bitrateTimer.getBitrate(c, this._loaded, a.bitrateInterval) }))
            }
        }, _initProgressListener: function (b) { var a = this, d = b.xhr ? b.xhr() : c.ajaxSettings.xhr(); d.upload && (c(d.upload).bind("progress", function (c) { var d = c.originalEvent; c.lengthComputable = d.lengthComputable; c.loaded = d.loaded; c.total = d.total; a._onProgress(c, b) }), b.xhr = function () { return d }) }, _initXHRData: function (b) {
            var a, d = b.files[0], e = b.multipart || !c.support.xhrFileUpload, g =
                b.paramName[0]; b.headers = b.headers || {}; b.contentRange && (b.headers["Content-Range"] = b.contentRange); e ? c.support.xhrFormDataFileUpload && (b.postMessage ? (a = this._getFormData(b), b.blob ? a.push({ name: g, value: b.blob }) : c.each(b.files, function (c, d) { a.push({ name: b.paramName[c] || g, value: d }) })) : (b.formData instanceof FormData ? a = b.formData : (a = new FormData, c.each(this._getFormData(b), function (b, c) { a.append(c.name, c.value) })), b.blob ? (b.headers["Content-Disposition"] = 'attachment; filename="' + encodeURI(d.name) + '"',
                    b.headers["Content-Description"] = encodeURI(d.type), a.append(g, b.blob, d.name)) : c.each(b.files, function (c, d) { d instanceof Blob && a.append(b.paramName[c] || g, d, d.name) })), b.data = a) : (b.headers["Content-Disposition"] = 'attachment; filename="' + encodeURI(d.name) + '"', b.contentType = d.type, b.data = b.blob || d); b.blob = null
        }, _initIframeSettings: function (b) {
            b.dataType = "iframe " + (b.dataType || ""); b.formData = this._getFormData(b); b.redirect && c("<a></a>").prop("href", b.url).prop("host") !== location.host && b.formData.push({
                name: b.redirectParamName ||
                    "redirect", value: b.redirect
            })
        }, _initDataSettings: function (b) { this._isXHRUpload(b) ? (this._chunkedUpload(b, !0) || (b.data || this._initXHRData(b), this._initProgressListener(b)), b.postMessage && (b.dataType = "postmessage " + (b.dataType || ""))) : this._initIframeSettings(b, "iframe") }, _getParamName: function (b) {
            var a = c(b.fileInput), d = b.paramName; d ? c.isArray(d) || (d = [d]) : (d = [], a.each(function () { for (var a = c(this), b = a.prop("name") || "files[]", a = (a.prop("files") || [1]).length; a;)d.push(b), --a }), d.length || (d = [a.prop("name") ||
                "files[]"])); return d
        }, _initFormSettings: function (b) { b.form && b.form.length || (b.form = c(b.fileInput.prop("form")), b.form.length || (b.form = c(this.options.fileInput.prop("form")))); b.paramName = this._getParamName(b); b.url || (b.url = b.form.prop("action") || location.href); b.type = (b.type || b.form.prop("method") || "").toUpperCase(); "POST" !== b.type && "PUT" !== b.type && (b.type = "POST"); b.formAcceptCharset || (b.formAcceptCharset = b.form.attr("accept-charset")) }, _getAJAXSettings: function (b) {
            b = c.extend({}, this.options, b);
            this._initFormSettings(b); this._initDataSettings(b); return b
        }, _enhancePromise: function (b) { b.success = b.done; b.error = b.fail; b.complete = b.always; return b }, _getXHRPromise: function (b, a, d) { var e = c.Deferred(), g = e.promise(); a = a || this.options.context || g; !0 === b ? e.resolveWith(a, d) : !1 === b && e.rejectWith(a, d); g.abort = e.promise; return this._enhancePromise(g) }, _getUploadedBytes: function (b) { return (b = (b = (b = b.getResponseHeader("Range")) && b.split("-")) && 1 < b.length && parseInt(b[1], 10)) && b + 1 }, _chunkedUpload: function (b,
            a) {
            var d = this, e = b.files[0], g = e.size, f = b.uploadedBytes = b.uploadedBytes || 0, k = b.maxChunkSize || g, m = e.slice || e.webkitSlice || e.mozSlice, h = c.Deferred(), l = h.promise(), n, t; if (!(this._isXHRUpload(b) && m && (f || k < g)) || b.data) return !1; if (a) return !0; if (f >= g) return e.error = "Uploaded bytes exceed file size", this._getXHRPromise(!1, b.context, [null, "error", e.error]); t = function (a) {
                var l = c.extend({}, b); l.blob = m.call(e, f, f + k); l.chunkSize = l.blob.size; l.contentRange = "bytes " + f + "-" + (f + l.chunkSize - 1) + "/" + g; d._initXHRData(l);
                d._initProgressListener(l); n = (c.ajax(l) || d._getXHRPromise(!1, l.context)).done(function (a, e, m) { f = d._getUploadedBytes(m) || f + l.chunkSize; l.loaded || d._onProgress(c.Event("progress", { lengthComputable: !0, loaded: f - l.uploadedBytes, total: f - l.uploadedBytes }), l); b.uploadedBytes = l.uploadedBytes = f; f < g ? t() : h.resolveWith(l.context, [a, e, m]) }).fail(function (a, b, c) { h.rejectWith(l.context, [a, b, c]) })
            }; this._enhancePromise(l); l.abort = function () { return n.abort() }; t(); return l
        }, _beforeSend: function (b, a) {
            0 === this._active &&
                (this._trigger("start"), this._bitrateTimer = new this._BitrateTimer); this._active += 1; this._loaded += a.uploadedBytes || 0; this._total += this._getTotal(a.files)
        }, _onDone: function (b, a, d, e) { this._isXHRUpload(e) || this._onProgress(c.Event("progress", { lengthComputable: !0, loaded: 1, total: 1 }), e); e.result = b; e.textStatus = a; e.jqXHR = d; this._trigger("done", null, e) }, _onFail: function (b, a, c, e) {
            e.jqXHR = b; e.textStatus = a; e.errorThrown = c; this._trigger("fail", null, e); e.recalculateProgress && (this._loaded -= e.loaded || e.uploadedBytes ||
                0, this._total -= e.total || this._getTotal(e.files))
        }, _onAlways: function (b, a, c, e) { --this._active; e.textStatus = a; c && c.always ? (e.jqXHR = c, e.result = b) : (e.jqXHR = b, e.errorThrown = c); this._trigger("always", null, e); 0 === this._active && (this._trigger("stop"), this._loaded = this._total = 0, this._bitrateTimer = null) }, _onSend: function (b, a) {
            var d = this, e, g, f, k = d._getAJAXSettings(a), m = function (a, f) {
                d._sending += 1; k._bitrateTimer = new d._BitrateTimer; return e = e || (!1 !== a && !1 !== d._trigger("send", b, k) && (d._chunkedUpload(k) || c.ajax(k)) ||
                    d._getXHRPromise(!1, k.context, f)).done(function (a, b, c) { d._onDone(a, b, c, k) }).fail(function (a, b, c) { d._onFail(a, b, c, k) }).always(function (a, b, c) { --d._sending; d._onAlways(a, b, c, k); if (k.limitConcurrentUploads && k.limitConcurrentUploads > d._sending) for (a = d._slots.shift(); a;) { if (b = a.state ? "pending" === a.state() : !a.isRejected()) { a.resolve(); break } a = d._slots.shift() } })
            }; this._beforeSend(b, k); return this.options.sequentialUploads || this.options.limitConcurrentUploads && this.options.limitConcurrentUploads <= this._sending ?
                (1 < this.options.limitConcurrentUploads ? (g = c.Deferred(), this._slots.push(g), f = g.pipe(m)) : f = this._sequence = this._sequence.pipe(m, m), f.abort = function () { var a = [void 0, "abort", "abort"]; return e ? e.abort() : (g && g.rejectWith(f, a), m(!1, a)) }, this._enhancePromise(f)) : m()
        }, _onAdd: function (b, a) {
            var d = this, e = !0, g = c.extend({}, this.options, a), f = g.limitMultiFileUploads, k = this._getParamName(g), m, h, l; if ((g.singleFileUploads || f) && this._isXHRUpload(g)) if (!g.singleFileUploads && f) for (h = [], m = [], l = 0; l < a.files.length; l += f)h.push(a.files.slice(l,
                l + f)), g = k.slice(l, l + f), g.length || (g = k), m.push(g); else m = k; else h = [a.files], m = [k]; a.originalFiles = a.files; c.each(h || a.files, function (f, g) { var k = c.extend({}, a); k.files = h ? g : [g]; k.paramName = m[f]; k.submit = function () { return k.jqXHR = this.jqXHR = !1 !== d._trigger("submit", b, this) && d._onSend(b, this) }; return e = d._trigger("add", b, k) }); return e
        }, _replaceFileInput: function (b) {
            var a = b.clone(!0); c("<form></form>").append(a)[0].reset(); b.after(a).detach(); c.cleanData(b.unbind("remove")); this.options.fileInput = this.options.fileInput.map(function (c,
                e) { return e === b[0] ? a[0] : e }); b[0] === this.element[0] && (this.element = a)
        }, _handleFileTreeEntry: function (b, a) { var d = this, e = c.Deferred(), g = function (a) { a && !a.entry && (a.entry = b); e.resolve([a]) }, f; a = a || ""; b.isFile ? b._file ? (b._file.relativePath = a, e.resolve(b._file)) : b.file(function (b) { b.relativePath = a; e.resolve(b) }, g) : b.isDirectory ? (f = b.createReader(), f.readEntries(function (c) { d._handleFileTreeEntries(c, a + b.name + "/").done(function (a) { e.resolve(a) }).fail(g) }, g)) : e.resolve([]); return e.promise() }, _handleFileTreeEntries: function (b,
            a) { var d = this; return c.when.apply(c, c.map(b, function (b) { return d._handleFileTreeEntry(b, a) })).pipe(function () { return Array.prototype.concat.apply([], arguments) }) }, _getDroppedFiles: function (b) { b = b || {}; var a = b.items; return a && a.length && (a[0].webkitGetAsEntry || a[0].getAsEntry) ? this._handleFileTreeEntries(c.map(a, function (a) { var b; if (a.webkitGetAsEntry) { if (b = a.webkitGetAsEntry()) b._file = a.getAsFile(); return b } return a.getAsEntry() })) : c.Deferred().resolve(c.makeArray(b.files)).promise() }, _getSingleFileInputFiles: function (b) {
                b =
                    c(b); var a = b.prop("webkitEntries") || b.prop("entries"); if (a && a.length) return this._handleFileTreeEntries(a); a = c.makeArray(b.prop("files")); if (a.length) void 0 === a[0].name && a[0].fileName && c.each(a, function (a, b) { b.name = b.fileName; b.size = b.fileSize }); else { b = b.prop("value"); if (!b) return c.Deferred().resolve([]).promise(); a = [{ name: b.replace(/^.*\\/, "") }] } return c.Deferred().resolve(a).promise()
            }, _getFileInputFiles: function (b) {
                return b instanceof c && 1 !== b.length ? c.when.apply(c, c.map(b, this._getSingleFileInputFiles)).pipe(function () {
                    return Array.prototype.concat.apply([],
                        arguments)
                }) : this._getSingleFileInputFiles(b)
            }, _onChange: function (b) { var a = this, d = { fileInput: c(b.target), form: c(b.target.form) }; this._getFileInputFiles(d.fileInput).always(function (c) { d.files = c; a.options.replaceFileInput && a._replaceFileInput(d.fileInput); !1 !== a._trigger("change", b, d) && a._onAdd(b, d) }) }, _onPaste: function (b) {
                var a = b.originalEvent.clipboardData, d = { files: [] }; c.each(a && a.items || [], function (a, b) { (a = b.getAsFile && b.getAsFile()) && d.files.push(a) }); if (!1 === this._trigger("paste", b, d) || !1 === this._onAdd(b,
                    d)) return !1
            }, _onDrop: function (b) { b.preventDefault(); var a = this, c = b.dataTransfer = b.originalEvent.dataTransfer, e = {}; this._getDroppedFiles(c).always(function (c) { e.files = c; !1 !== a._trigger("drop", b, e) && a._onAdd(b, e) }) }, _onDragOver: function (b) { var a = b.dataTransfer = b.originalEvent.dataTransfer; if (!1 === this._trigger("dragover", b)) return !1; a && (a.dropEffect = "copy"); b.preventDefault() }, _initEventHandlers: function () {
                this._isXHRUpload(this.options) && (this._on(this.options.dropZone, { dragover: this._onDragOver, drop: this._onDrop }),
                    this._on(this.options.pasteZone, { paste: this._onPaste })); this._on(this.options.fileInput, { change: this._onChange })
            }, _destroyEventHandlers: function () { this._off(this.options.dropZone, "dragover drop"); this._off(this.options.pasteZone, "paste"); this._off(this.options.fileInput, "change") }, _setOption: function (b, a) { var d = -1 !== c.inArray(b, this._refreshOptionsList); d && this._destroyEventHandlers(); this._super(b, a); d && (this._initSpecialOptions(), this._initEventHandlers()) }, _initSpecialOptions: function () {
                var b =
                    this.options; void 0 === b.fileInput ? b.fileInput = this.element.is('input[type="file"]') ? this.element : this.element.find('input[type="file"]') : b.fileInput instanceof c || (b.fileInput = c(b.fileInput)); b.dropZone instanceof c || (b.dropZone = c(b.dropZone)); b.pasteZone instanceof c || (b.pasteZone = c(b.pasteZone))
            }, _create: function () {
                c.extend(this.options, c(this.element[0].cloneNode(!1)).data()); this._initSpecialOptions(); this._slots = []; this._sequence = this._getXHRPromise(!0); this._sending = this._active = this._loaded =
                    this._total = 0; this._initEventHandlers()
            }, _destroy: function () { this._destroyEventHandlers() }, add: function (b) { var a = this; b && !this.options.disabled && (b.fileInput && !b.files ? this._getFileInputFiles(b.fileInput).always(function (c) { b.files = c; a._onAdd(null, b) }) : (b.files = c.makeArray(b.files), this._onAdd(null, b))) }, send: function (b) {
                if (b && !this.options.disabled) {
                    if (b.fileInput && !b.files) {
                        var a = this, d = c.Deferred(), e = d.promise(), g, f; e.abort = function () { f = !0; if (g) return g.abort(); d.reject(null, "abort", "abort"); return e };
                        this._getFileInputFiles(b.fileInput).always(function (c) { f || (b.files = c, g = a._onSend(null, b).then(function (a, b, c) { d.resolve(a, b, c) }, function (a, b, c) { d.reject(a, b, c) })) }); return this._enhancePromise(e)
                    } b.files = c.makeArray(b.files); if (b.files.length) return this._onSend(null, b)
                } return this._getXHRPromise(!1, b && b.context)
            }
    })
}); (function () {
    function c(a) { $("#error-textbox").text(a); $(".uploader").hide(); $(".uploader-error").show() } function b(a) { 1 > a ? ($(".uploader__progressbar_title").hide(), $("#uploader-progress").show()) : 95 < a && ($(".uploader__progressbar_title").hide(), $("#uploader-processing").show()); $(".uploader__progressbar_progress").css("height", a + "%") } $(function () {
        window.FileReader ? ($(loadTemplate("upload_overlay_template")).hide().appendTo(document.body), $(".uploader").hide(), $(".uploader-selector").show(), $("#fileupload").fileupload({
            dataType: "json",
            xhrFields: { withCredentials: !0 }, dropZone: $(document), done: function (a, b) {
                "success" == b.result.status ? -1 != $(document.body).attr("class").indexOf("m-pagetype_gallery") ? location.reload(!1) : (a = b.result.data.replace("prntscr.com", "prnt.sc"), $("#link-textbox").text(a), $("#link-textbox").attr("href", a), $(".uploader").hide(), $(".uploader__social_links").empty(), $(".uploader__social_links").append("<div class='social'><div class='social__tw'><a href='https://twitter.com/share' class='twitter-share-button' data-url='" +
                    a + "' data-via='light_shot'></a></div><div class='social__fb'><div class='fb-like' data-width='100' data-layout='button_count' data-action='like' data-size='small' data-show-faces='false' data-href='" + a + "' data-share='false'></div></div>"), FB.XFBML.parse(), twttr.widgets.load(), $(".uploader-result").show()) : c(b.result.data)
            }, fail: function (a, b) { 413 == b.jqXHR.status ? c(loadTemplate("upload_large_file_template")) : c(loadTemplate("upload_error_template") + b.jqXHR.statusText) }, add: function (a, c) {
                b(0); $(".uploader").hide();
                $(".uploader-progress").show(); c.submit()
            }, progressall: function (a, c) { a = parseInt(c.loaded / c.total * 100, 10); b(a) }
        }), $(document).bind("drop dragover", function (a) { a.preventDefault() }), $(document).bind("dragover", function (a) { 0 == a.dataTransfer.types.indexOf("Files") && ($(document), (a = window.dropZoneTimeout) ? clearTimeout(a) : $("#dd_overlay").show(), window.dropZoneTimeout = setTimeout(function () { window.dropZoneTimeout = null; $("#dd_overlay").hide() }, 100)) })) : $("div.uploader-envelope").hide()
    })
})(); (function (c) {
    function b() { var a = "[jquery.form] " + Array.prototype.join.call(arguments, ""); window.console && window.console.log ? window.console.log(a) : window.opera && window.opera.postError && window.opera.postError(a) } c.fn.ajaxSubmit = function (a) {
        function d(d) {
            function g() {
                function a() {
                    try { var c = (r.contentWindow ? r.contentWindow.document : r.contentDocument ? r.contentDocument : r.document).readyState; b("state = " + c); "uninitialized" == c.toLowerCase() && setTimeout(a, 50) } catch (d) {
                        b("Server abort: ", d, " (", d.name, ")"),
                            m(2), z && clearTimeout(z), z = void 0
                    }
                } var d = f.attr("target"), h = f.attr("action"); k.setAttribute("target", t); e || k.setAttribute("method", "POST"); h != p.url && k.setAttribute("action", p.url); p.skipEncodingOverride || e && !/post/i.test(e) || f.attr({ encoding: "multipart/form-data", enctype: "multipart/form-data" }); p.timeout && (z = setTimeout(function () { C = !0; m(1) }, p.timeout)); var l = []; try {
                    if (p.extraData) for (var D in p.extraData) l.push(c('<input type="hidden" name="' + D + '" />').attr("value", p.extraData[D]).appendTo(k)[0]);
                    p.iframeTarget || (y.appendTo("body"), r.attachEvent ? r.attachEvent("onload", m) : r.addEventListener("load", m, !1)); setTimeout(a, 15); k.submit()
                } finally { k.setAttribute("action", h), d ? k.setAttribute("target", d) : f.removeAttr("target"), c(l).remove() }
            } function m(a) {
                if (!q.aborted && !J) {
                    try { x = r.contentWindow ? r.contentWindow.document : r.contentDocument ? r.contentDocument : r.document } catch (d) { b("cannot access response document: ", d), a = 2 } if (1 === a && q) q.abort("timeout"); else if (2 == a && q) q.abort("server abort"); else if (x &&
                        x.location.href != p.iframeSrc || C) {
                        r.detachEvent ? r.detachEvent("onload", m) : r.removeEventListener("load", m, !1); a = "success"; var e; try {
                            if (C) throw "timeout"; var f = "xml" == p.dataType || x.XMLDocument || c.isXMLDoc(x); b("isXml=" + f); if (!f && window.opera && (null == x.body || "" == x.body.innerHTML) && --G) { b("requeing onLoad callback, DOM not available"); setTimeout(m, 250); return } var g = x.body ? x.body : x.documentElement; q.responseText = g ? g.innerHTML : null; q.responseXML = x.XMLDocument ? x.XMLDocument : x; f && (p.dataType = "xml"); q.getResponseHeader =
                                function (a) { return { "content-type": p.dataType }[a] }; g && (q.status = Number(g.getAttribute("status")) || q.status, q.statusText = g.getAttribute("statusText") || q.statusText); var k = /(json|script|text)/.test((p.dataType || "").toLowerCase()); if (k || p.textarea) {
                                    var h = x.getElementsByTagName("textarea")[0]; if (h) q.responseText = h.value, q.status = Number(h.getAttribute("status")) || q.status, q.statusText = h.getAttribute("statusText") || q.statusText; else if (k) {
                                        var l = x.getElementsByTagName("pre")[0], E = x.getElementsByTagName("body")[0];
                                        l ? q.responseText = l.textContent ? l.textContent : l.innerHTML : E && (q.responseText = E.innerHTML)
                                    }
                                } else "xml" != p.dataType || q.responseXML || null == q.responseText || (q.responseXML = K(q.responseText)); try { D = L(q, p.dataType, p) } catch (d) { a = "parsererror", q.error = e = d || a }
                        } catch (d) { b("error caught: ", d), a = "error", q.error = e = d || a } q.aborted && (b("upload aborted"), a = null); q.status && (a = 200 <= q.status && 300 > q.status || 304 === q.status ? "success" : "error"); "success" === a ? (p.success && p.success.call(p.context, D, "success", q), n && c.event.trigger("ajaxSuccess",
                            [q, p])) : a && (void 0 == e && (e = q.statusText), p.error && p.error.call(p.context, q, a, e), n && c.event.trigger("ajaxError", [q, p, e])); n && c.event.trigger("ajaxComplete", [q, p]); n && !--c.active && c.event.trigger("ajaxStop"); p.complete && p.complete.call(p.context, q, a); J = !0; p.timeout && clearTimeout(z); setTimeout(function () { p.iframeTarget || y.remove(); q.responseXML = null }, 100)
                    }
                }
            } var k = f[0], h, l, p, n, t, y, r, q, C, z, E = !!c.fn.prop; if (d) for (l = 0; l < d.length; l++)h = c(k[d[l].name]), h[E ? "prop" : "attr"]("disabled", !1); if (c(":input[name=submit],:input[id=submit]",
                k).length) alert('Error: Form elements must not have name or id of "submit".'); else if (p = c.extend(!0, {}, c.ajaxSettings, a), p.context = p.context || p, t = "jqFormIO" + (new Date).getTime(), p.iframeTarget ? (y = c(p.iframeTarget), h = y.attr("name"), null == h ? y.attr("name", t) : t = h) : (y = c('<iframe name="' + t + '" src="' + p.iframeSrc + '" />'), y.css({ position: "absolute", top: "-1000px", left: "-1000px" })), r = y[0], q = {
                    aborted: 0, responseText: null, responseXML: null, status: 0, statusText: "n/a", getAllResponseHeaders: function () { }, getResponseHeader: function () { },
                    setRequestHeader: function () { }, abort: function (a) { var d = "timeout" === a ? "timeout" : "aborted"; b("aborting upload... " + d); this.aborted = 1; y.attr("src", p.iframeSrc); q.error = d; p.error && p.error.call(p.context, q, d, a); n && c.event.trigger("ajaxError", [q, p, d]); p.complete && p.complete.call(p.context, q, d) }
                }, (n = p.global) && !c.active++ && c.event.trigger("ajaxStart"), n && c.event.trigger("ajaxSend", [q, p]), p.beforeSend && !1 === p.beforeSend.call(p.context, q, p)) p.global && c.active--; else if (!q.aborted) {
                    (d = k.clk) && (h = d.name) && !d.disabled &&
                        (p.extraData = p.extraData || {}, p.extraData[h] = d.value, "image" == d.type && (p.extraData[h + ".x"] = k.clk_x, p.extraData[h + ".y"] = k.clk_y)); p.forceSync ? g() : setTimeout(g, 10); var D, x, G = 50, J, K = c.parseXML || function (a, b) { window.ActiveXObject ? (b = new ActiveXObject("Microsoft.XMLDOM"), b.async = "false", b.loadXML(a)) : b = (new DOMParser).parseFromString(a, "text/xml"); return b && b.documentElement && "parsererror" != b.documentElement.nodeName ? b : null }, M = c.parseJSON || function (a) { return window.eval("(" + a + ")") }, L = function (a, b, d) {
                            var e =
                                a.getResponseHeader("content-type") || "", f = "xml" === b || !b && 0 <= e.indexOf("xml"); a = f ? a.responseXML : a.responseText; f && "parsererror" === a.documentElement.nodeName && c.error && c.error("parsererror"); d && d.dataFilter && (a = d.dataFilter(a, b)); "string" === typeof a && ("json" === b || !b && 0 <= e.indexOf("json") ? a = M(a) : ("script" === b || !b && 0 <= e.indexOf("javascript")) && c.globalEval(a)); return a
                        }
                }
        } if (!this.length) return b("ajaxSubmit: skipping submit process - no element selected"), this; var e, g, f = this; "function" == typeof a && (a =
            { success: a }); e = this.attr("method"); g = this.attr("action"); (g = (g = "string" === typeof g ? c.trim(g) : "") || window.location.href || "") && (g = (g.match(/^([^#]+)/) || [])[1]); a = c.extend(!0, { url: g, success: c.ajaxSettings.success, type: e || "GET", iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank" }, a); g = {}; this.trigger("form-pre-serialize", [this, a, g]); if (g.veto) return b("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this; if (a.beforeSerialize && !1 === a.beforeSerialize(this, a)) return b("ajaxSubmit: submit aborted via beforeSerialize callback"),
                this; var k, m, h = this.formToArray(a.semantic); if (a.data) for (k in a.extraData = a.data, a.data) if (a.data[k] instanceof Array) for (var l in a.data[k]) h.push({ name: k, value: a.data[k][l] }); else m = a.data[k], m = c.isFunction(m) ? m() : m, h.push({ name: k, value: m }); if (a.beforeSubmit && !1 === a.beforeSubmit(h, this, a)) return b("ajaxSubmit: submit aborted via beforeSubmit callback"), this; this.trigger("form-submit-validate", [h, this, a, g]); if (g.veto) return b("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this; k = c.param(h);
        "GET" == a.type.toUpperCase() ? (a.url += (0 <= a.url.indexOf("?") ? "&" : "?") + k, a.data = null) : a.data = k; var n = []; a.resetForm && n.push(function () { f.resetForm() }); a.clearForm && n.push(function () { f.clearForm() }); if (!a.dataType && a.target) { var t = a.success || function () { }; n.push(function (b) { var d = a.replaceTarget ? "replaceWith" : "html"; c(a.target)[d](b).each(t, arguments) }) } else a.success && n.push(a.success); a.success = function (b, c, d) { for (var e = a.context || a, g = 0, k = n.length; g < k; g++)n[g].apply(e, [b, c, d || f, f]) }; k = 0 < c("input:file",
            this).length; l = "multipart/form-data" == f.attr("enctype") || "multipart/form-data" == f.attr("encoding"); !1 !== a.iframe && (k || a.iframe || l) ? a.closeKeepAlive ? c.get(a.closeKeepAlive, function () { d(h) }) : d(h) : (c.browser.msie && "get" == e && (k = f[0].getAttribute("method"), "string" === typeof k && (a.type = k)), c.ajax(a)); this.trigger("form-submit-notify", [this, a]); return this
    }; c.fn.ajaxForm = function (a) {
        if (0 === this.length) {
            var d = this.selector, e = this.context; if (!c.isReady && d) return b("DOM not ready, queuing ajaxForm"), c(function () {
                c(d,
                    e).ajaxForm(a)
            }), this; b("terminating; zero elements found by selector" + (c.isReady ? "" : " (DOM not ready)")); return this
        } return this.ajaxFormUnbind().bind("submit.form-plugin", function (b) { b.isDefaultPrevented() || (b.preventDefault(), c(this).ajaxSubmit(a)) }).bind("click.form-plugin", function (a) {
            var b = a.target, d = c(b); if (!d.is(":submit,input:image")) { b = d.closest(":submit"); if (0 == b.length) return; b = b[0] } var e = this; e.clk = b; "image" == b.type && (void 0 != a.offsetX ? (e.clk_x = a.offsetX, e.clk_y = a.offsetY) : "function" ==
                typeof c.fn.offset ? (d = d.offset(), e.clk_x = a.pageX - d.left, e.clk_y = a.pageY - d.top) : (e.clk_x = a.pageX - b.offsetLeft, e.clk_y = a.pageY - b.offsetTop)); setTimeout(function () { e.clk = e.clk_x = e.clk_y = null }, 100)
        })
    }; c.fn.ajaxFormUnbind = function () { return this.unbind("submit.form-plugin click.form-plugin") }; c.fn.formToArray = function (a) {
        var b = []; if (0 === this.length) return b; var e = this[0], g = a ? e.getElementsByTagName("*") : e.elements; if (!g) return b; var f, k, m, h, l, n; f = 0; for (l = g.length; f < l; f++)if (k = g[f], m = k.name) if (a && e.clk &&
            "image" == k.type) k.disabled || e.clk != k || (b.push({ name: m, value: c(k).val() }), b.push({ name: m + ".x", value: e.clk_x }, { name: m + ".y", value: e.clk_y })); else if ((h = c.fieldValue(k, !0)) && h.constructor == Array) for (k = 0, n = h.length; k < n; k++)b.push({ name: m, value: h[k] }); else null !== h && "undefined" != typeof h && b.push({ name: m, value: h }); !a && e.clk && (a = c(e.clk), g = a[0], (m = g.name) && !g.disabled && "image" == g.type && (b.push({ name: m, value: a.val() }), b.push({ name: m + ".x", value: e.clk_x }, { name: m + ".y", value: e.clk_y }))); return b
    }; c.fn.formSerialize =
        function (a) { return c.param(this.formToArray(a)) }; c.fn.fieldSerialize = function (a) { var b = []; this.each(function () { var e = this.name; if (e) { var g = c.fieldValue(this, a); if (g && g.constructor == Array) for (var f = 0, k = g.length; f < k; f++)b.push({ name: e, value: g[f] }); else null !== g && "undefined" != typeof g && b.push({ name: this.name, value: g }) } }); return c.param(b) }; c.fn.fieldValue = function (a) {
            for (var b = [], e = 0, g = this.length; e < g; e++) {
                var f = c.fieldValue(this[e], a); null === f || "undefined" == typeof f || f.constructor == Array && !f.length ||
                    (f.constructor == Array ? c.merge(b, f) : b.push(f))
            } return b
        }; c.fieldValue = function (a, b) {
            var e = a.name, g = a.type, f = a.tagName.toLowerCase(); void 0 === b && (b = !0); if (b && (!e || a.disabled || "reset" == g || "button" == g || ("checkbox" == g || "radio" == g) && !a.checked || ("submit" == g || "image" == g) && a.form && a.form.clk != a || "select" == f && -1 == a.selectedIndex)) return null; if ("select" == f) {
                f = a.selectedIndex; if (0 > f) return null; b = []; a = a.options; e = (g = "select-one" == g) ? f + 1 : a.length; for (f = g ? f : 0; f < e; f++) {
                    var k = a[f]; if (k.selected) {
                        var m = k.value;
                        m || (m = k.attributes && k.attributes.value && !k.attributes.value.specified ? k.text : k.value); if (g) return m; b.push(m)
                    }
                } return b
            } return c(a).val()
        }; c.fn.clearForm = function () { return this.each(function () { c("input,select,textarea", this).clearFields() }) }; c.fn.clearFields = c.fn.clearInputs = function () {
            var a = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i; return this.each(function () {
                var b = this.type, c = this.tagName.toLowerCase(); a.test(b) || "textarea" == c ? this.value = "" : "checkbox" ==
                    b || "radio" == b ? this.checked = !1 : "select" == c && (this.selectedIndex = -1)
            })
        }; c.fn.resetForm = function () { return this.each(function () { ("function" == typeof this.reset || "object" == typeof this.reset && !this.reset.nodeType) && this.reset() }) }; c.fn.enable = function (a) { void 0 === a && (a = !0); return this.each(function () { this.disabled = !a }) }; c.fn.selected = function (a) {
            void 0 === a && (a = !0); return this.each(function () {
                var b = this.type; "checkbox" == b || "radio" == b ? this.checked = a : "option" == this.tagName.toLowerCase() && (b = c(this).parent("select"),
                    a && b[0] && "select-one" == b[0].type && b.find("option").selected(!1), this.selected = a)
            })
        }
})(jQuery); document.createElement("canvas").getContext || function () {
    function c() { return this.context_ || (this.context_ = new h(this)) } function b(a, b, c) { var d = H.call(arguments, 2); return function () { return a.apply(b, d.concat(H.call(arguments))) } } function a(a) { var b = a.srcElement; switch (a.propertyName) { case "width": b.style.width = b.attributes.width.nodeValue + "px"; b.getContext().clearRect(); break; case "height": b.style.height = b.attributes.height.nodeValue + "px", b.getContext().clearRect() } } function d(a) {
        a = a.srcElement; a.firstChild &&
            (a.firstChild.style.width = a.clientWidth + "px", a.firstChild.style.height = a.clientHeight + "px")
    } function e() { return [[1, 0, 0], [0, 1, 0], [0, 0, 1]] } function g(a, b) { for (var c = e(), d = 0; 3 > d; d++)for (var f = 0; 3 > f; f++) { for (var g = 0, k = 0; 3 > k; k++)g += a[d][k] * b[k][f]; c[d][f] = g } return c } function f(a, b) {
        b.fillStyle = a.fillStyle; b.lineCap = a.lineCap; b.lineJoin = a.lineJoin; b.lineWidth = a.lineWidth; b.miterLimit = a.miterLimit; b.shadowBlur = a.shadowBlur; b.shadowColor = a.shadowColor; b.shadowOffsetX = a.shadowOffsetX; b.shadowOffsetY = a.shadowOffsetY;
        b.strokeStyle = a.strokeStyle; b.globalAlpha = a.globalAlpha; b.arcScaleX_ = a.arcScaleX_; b.arcScaleY_ = a.arcScaleY_; b.lineScale_ = a.lineScale_
    } function k(a) { var b, c = 1; a = String(a); if ("rgb" == a.substring(0, 3)) { b = a.indexOf("(", 3); var d = a.indexOf(")", b + 1), d = a.substring(b + 1, d).split(","); b = "#"; for (var e = 0; 3 > e; e++)b += y[Number(d[e])]; 4 == d.length && "a" == a.substr(3, 1) && (c = d[3]) } else b = a; return { color: b, alpha: c } } function m(a) { switch (a) { case "butt": return "flat"; case "round": return "round"; default: return "square" } } function h(a) {
        this.m_ =
            e(); this.mStack_ = []; this.aStack_ = []; this.currentPath_ = []; this.fillStyle = this.strokeStyle = "#000"; this.lineWidth = 1; this.lineJoin = "miter"; this.lineCap = "butt"; this.miterLimit = 10; this.globalAlpha = 1; this.canvas = a; var b = a.ownerDocument.createElement("div"); b.style.width = a.clientWidth + "px"; b.style.height = a.clientHeight + "px"; b.style.overflow = "hidden"; b.style.position = "absolute"; a.appendChild(b); this.element_ = b; this.lineScale_ = this.arcScaleY_ = this.arcScaleX_ = 1
    } function l(a, b, c, d) {
        a.currentPath_.push({
            type: "bezierCurveTo",
            cp1x: b.x, cp1y: b.y, cp2x: c.x, cp2y: c.y, x: d.x, y: d.y
        }); a.currentX_ = d.x; a.currentY_ = d.y
    } function n(a, b, c) { var d; a: { for (d = 0; 3 > d; d++)for (var e = 0; 2 > e; e++)if (!isFinite(b[d][e]) || isNaN(b[d][e])) { d = !1; break a } d = !0 } d && (a.m_ = b, c && (a.lineScale_ = p(F(b[0][0] * b[1][1] - b[0][1] * b[1][0])))) } function t(a) { this.type_ = a; this.r1_ = this.y1_ = this.x1_ = this.r0_ = this.y0_ = this.x0_ = 0; this.colors_ = [] } function v() { } var w = Math, u = w.round, A = w.sin, B = w.cos, F = w.abs, p = w.sqrt, H = Array.prototype.slice, I = {
        init: function (a) {
            /MSIE/.test(navigator.userAgent) &&
                !window.opera && (a = a || document, a.createElement("canvas"), a.attachEvent("onreadystatechange", b(this.init_, this, a)))
        }, init_: function (a) {
            a.namespaces.g_vml_ || a.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml", "#default#VML"); a.namespaces.g_o_ || a.namespaces.add("g_o_", "urn:schemas-microsoft-com:office:office", "#default#VML"); if (!a.styleSheets.ex_canvas_) { var b = a.createStyleSheet(); b.owningElement.id = "ex_canvas_"; b.cssText = "canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}g_vml_\\:*{behavior:url(#default#VML)}g_o_\\:*{behavior:url(#default#VML)}" } a =
                a.getElementsByTagName("canvas"); for (b = 0; b < a.length; b++)this.initElement(a[b])
        }, initElement: function (b) { if (!b.getContext) { b.getContext = c; b.innerHTML = ""; b.attachEvent("onpropertychange", a); b.attachEvent("onresize", d); var e = b.attributes; e.width && e.width.specified ? b.style.width = e.width.nodeValue + "px" : b.width = b.clientWidth; e.height && e.height.specified ? b.style.height = e.height.nodeValue + "px" : b.height = b.clientHeight } return b }
    }; I.init(); for (var y = [], r = 0; 16 > r; r++)for (var q = 0; 16 > q; q++)y[16 * r + q] = r.toString(16) +
        q.toString(16); r = h.prototype; r.clearRect = function () { this.element_.innerHTML = "" }; r.beginPath = function () { this.currentPath_ = [] }; r.moveTo = function (a, b) { a = this.getCoords_(a, b); this.currentPath_.push({ type: "moveTo", x: a.x, y: a.y }); this.currentX_ = a.x; this.currentY_ = a.y }; r.lineTo = function (a, b) { a = this.getCoords_(a, b); this.currentPath_.push({ type: "lineTo", x: a.x, y: a.y }); this.currentX_ = a.x; this.currentY_ = a.y }; r.bezierCurveTo = function (a, b, c, d, e, f) {
            e = this.getCoords_(e, f); a = this.getCoords_(a, b); c = this.getCoords_(c,
                d); l(this, a, c, e)
        }; r.quadraticCurveTo = function (a, b, c, d) { a = this.getCoords_(a, b); c = this.getCoords_(c, d); d = { x: this.currentX_ + 2 / 3 * (a.x - this.currentX_), y: this.currentY_ + 2 / 3 * (a.y - this.currentY_) }; l(this, d, { x: d.x + (c.x - this.currentX_) / 3, y: d.y + (c.y - this.currentY_) / 3 }, c) }; r.arc = function (a, b, c, d, e, f) {
            c *= 10; var g = f ? "at" : "wa", k = a + B(d) * c - 5, h = b + A(d) * c - 5; d = a + B(e) * c - 5; e = b + A(e) * c - 5; k != d || f || (k += .125); a = this.getCoords_(a, b); k = this.getCoords_(k, h); d = this.getCoords_(d, e); this.currentPath_.push({
                type: g, x: a.x, y: a.y, radius: c,
                xStart: k.x, yStart: k.y, xEnd: d.x, yEnd: d.y
            })
        }; r.rect = function (a, b, c, d) { this.moveTo(a, b); this.lineTo(a + c, b); this.lineTo(a + c, b + d); this.lineTo(a, b + d); this.closePath() }; r.strokeRect = function (a, b, c, d) { var e = this.currentPath_; this.beginPath(); this.moveTo(a, b); this.lineTo(a + c, b); this.lineTo(a + c, b + d); this.lineTo(a, b + d); this.closePath(); this.stroke(); this.currentPath_ = e }; r.fillRect = function (a, b, c, d) {
            var e = this.currentPath_; this.beginPath(); this.moveTo(a, b); this.lineTo(a + c, b); this.lineTo(a + c, b + d); this.lineTo(a,
                b + d); this.closePath(); this.fill(); this.currentPath_ = e
        }; r.createLinearGradient = function (a, b, c, d) { var e = new t("gradient"); e.x0_ = a; e.y0_ = b; e.x1_ = c; e.y1_ = d; return e }; r.createRadialGradient = function (a, b, c, d, e, f) { var g = new t("gradientradial"); g.x0_ = a; g.y0_ = b; g.r0_ = c; g.x1_ = d; g.y1_ = e; g.r1_ = f; return g }; r.drawImage = function (a, b) {
            var c, d, e, f, g, k, h, m; e = a.runtimeStyle.width; f = a.runtimeStyle.height; a.runtimeStyle.width = "auto"; a.runtimeStyle.height = "auto"; var l = a.width, p = a.height; a.runtimeStyle.width = e; a.runtimeStyle.height =
                f; if (3 == arguments.length) c = arguments[1], d = arguments[2], g = k = 0, h = e = l, m = f = p; else if (5 == arguments.length) c = arguments[1], d = arguments[2], e = arguments[3], f = arguments[4], g = k = 0, h = l, m = p; else if (9 == arguments.length) g = arguments[1], k = arguments[2], h = arguments[3], m = arguments[4], c = arguments[5], d = arguments[6], e = arguments[7], f = arguments[8]; else throw Error("Invalid number of arguments"); var n = this.getCoords_(c, d), q = []; q.push(" <g_vml_:group", ' coordsize="', 100, ",", 100, '"', ' coordorigin="0,0"', ' style="width:', 10, "px;height:",
                    10, "px;position:absolute;"); if (1 != this.m_[0][0] || this.m_[0][1]) { var r = []; r.push("M11=", this.m_[0][0], ",", "M12=", this.m_[1][0], ",", "M21=", this.m_[0][1], ",", "M22=", this.m_[1][1], ",", "Dx=", u(n.x / 10), ",", "Dy=", u(n.y / 10), ""); var t = this.getCoords_(c + e, d), v = this.getCoords_(c, d + f); c = this.getCoords_(c + e, d + f); n.x = w.max(n.x, t.x, v.x, c.x); n.y = w.max(n.y, t.y, v.y, c.y); q.push("padding:0 ", u(n.x / 10), "px ", u(n.y / 10), "px 0;filter:progid:DXImageTransform.Microsoft.Matrix(", r.join(""), ", sizingmethod='clip');") } else q.push("top:",
                        u(n.y / 10), "px;left:", u(n.x / 10), "px;"); q.push(' ">', '<g_vml_:image src="', a.src, '"', ' style="width:', 10 * e, "px;", " height:", 10 * f, 'px;"', ' cropleft="', g / l, '"', ' croptop="', k / p, '"', ' cropright="', (l - g - h) / l, '"', ' cropbottom="', (p - k - m) / p, '"', " />", "</g_vml_:group>"); this.element_.insertAdjacentHTML("BeforeEnd", q.join(""))
        }; r.stroke = function (a) {
            var b = [], c = k(a ? this.fillStyle : this.strokeStyle), d = c.color, c = c.alpha * this.globalAlpha; b.push("<g_vml_:shape", ' filled="', !!a, '"', ' style="position:absolute;width:',
                10, "px;height:", 10, 'px;"', ' coordorigin="0 0" coordsize="', 100, " ", 100, '"', ' stroked="', !a, '"', ' path="'); for (var e = null, f = null, g = null, h = null, l = 0; l < this.currentPath_.length; l++) {
                    var n = this.currentPath_[l]; switch (n.type) {
                        case "moveTo": b.push(" m ", u(n.x), ",", u(n.y)); break; case "lineTo": b.push(" l ", u(n.x), ",", u(n.y)); break; case "close": b.push(" x "); n = null; break; case "bezierCurveTo": b.push(" c ", u(n.cp1x), ",", u(n.cp1y), ",", u(n.cp2x), ",", u(n.cp2y), ",", u(n.x), ",", u(n.y)); break; case "at": case "wa": b.push(" ",
                            n.type, " ", u(n.x - this.arcScaleX_ * n.radius), ",", u(n.y - this.arcScaleY_ * n.radius), " ", u(n.x + this.arcScaleX_ * n.radius), ",", u(n.y + this.arcScaleY_ * n.radius), " ", u(n.xStart), ",", u(n.yStart), " ", u(n.xEnd), ",", u(n.yEnd))
                    }if (n) { if (null == e || n.x < e) e = n.x; if (null == g || n.x > g) g = n.x; if (null == f || n.y < f) f = n.y; if (null == h || n.y > h) h = n.y }
                } b.push(' ">'); if (a) if ("object" == typeof this.fillStyle) {
                    var d = this.fillStyle, p = 0, n = c = a = 0, q = 1; "gradient" == d.type_ ? (p = d.x1_ / this.arcScaleX_, e = d.y1_ / this.arcScaleY_, l = this.getCoords_(d.x0_ / this.arcScaleX_,
                        d.y0_ / this.arcScaleY_), p = this.getCoords_(p, e), p = 180 * Math.atan2(p.x - l.x, p.y - l.y) / Math.PI, 0 > p && (p += 360), 1E-6 > p && (p = 0)) : (l = this.getCoords_(d.x0_, d.y0_), n = g - e, q = h - f, a = (l.x - e) / n, c = (l.y - f) / q, n /= 10 * this.arcScaleX_, q /= 10 * this.arcScaleY_, l = w.max(n, q), n = 2 * d.r0_ / l, q = 2 * d.r1_ / l - n); e = d.colors_; e.sort(function (a, b) { return a.offset - b.offset }); for (var f = e.length, h = e[0].color, g = e[f - 1].color, r = e[0].alpha * this.globalAlpha, t = e[f - 1].alpha * this.globalAlpha, v = [], l = 0; l < f; l++) { var y = e[l]; v.push(y.offset * q + n + " " + y.color) } b.push('<g_vml_:fill type="',
                            d.type_, '"', ' method="none" focus="100%"', ' color="', h, '"', ' color2="', g, '"', ' colors="', v.join(","), '"', ' opacity="', t, '"', ' g_o_:opacity2="', r, '"', ' angle="', p, '"', ' focusposition="', a, ",", c, '" />')
                } else b.push('<g_vml_:fill color="', d, '" opacity="', c, '" />'); else a = this.lineScale_ * this.lineWidth, 1 > a && (c *= a), b.push("<g_vml_:stroke", ' opacity="', c, '"', ' joinstyle="', this.lineJoin, '"', ' miterlimit="', this.miterLimit, '"', ' endcap="', m(this.lineCap), '"', ' weight="', a, 'px"', ' color="', d, '" />'); b.push("</g_vml_:shape>");
            this.element_.insertAdjacentHTML("beforeEnd", b.join(""))
        }; r.fill = function () { this.stroke(!0) }; r.closePath = function () { this.currentPath_.push({ type: "close" }) }; r.getCoords_ = function (a, b) { var c = this.m_; return { x: 10 * (a * c[0][0] + b * c[1][0] + c[2][0]) - 5, y: 10 * (a * c[0][1] + b * c[1][1] + c[2][1]) - 5 } }; r.save = function () { var a = {}; f(this, a); this.aStack_.push(a); this.mStack_.push(this.m_); this.m_ = g(e(), this.m_) }; r.restore = function () { f(this.aStack_.pop(), this); this.m_ = this.mStack_.pop() }; r.translate = function (a, b) {
            n(this, g([[1,
                0, 0], [0, 1, 0], [a, b, 1]], this.m_), !1)
        }; r.rotate = function (a) { var b = B(a); a = A(a); n(this, g([[b, a, 0], [-a, b, 0], [0, 0, 1]], this.m_), !1) }; r.scale = function (a, b) { this.arcScaleX_ *= a; this.arcScaleY_ *= b; n(this, g([[a, 0, 0], [0, b, 0], [0, 0, 1]], this.m_), !0) }; r.transform = function (a, b, c, d, e, f) { n(this, g([[a, b, 0], [c, d, 0], [e, f, 1]], this.m_), !0) }; r.setTransform = function (a, b, c, d, e, f) { n(this, [[a, b, 0], [c, d, 0], [e, f, 1]], !0) }; r.clip = function () { }; r.arcTo = function () { }; r.createPattern = function () { return new v }; t.prototype.addColorStop = function (a,
            b) { b = k(b); this.colors_.push({ offset: a, color: b.color, alpha: b.alpha }) }; G_vmlCanvasManager = I; CanvasRenderingContext2D = h; CanvasGradient = t; CanvasPattern = v
}(); $(document).ready(function () {
    var c = function () {
        var b = null, a = null, c = null; loadImageById = function (e) { e = document.getElementById(e); b.width = Math.min(300, e.width); b.height = Math.min(300, e.height); c = null; a.drawImage(e, 0, 0, b.width, b.height) }; loadImageByElement = function (e) { b.width = Math.min(300, e.width); b.height = Math.min(300, e.height); c = null; a.drawImage(e, 0, 0, b.width, b.height) }; scanImage = function () {
            var c = a.getImageData(0, 0, b.width, b.height).data; (function (a, b) {
                var c = new XMLHttpRequest; c.onreadystatechange = function () {
                    if (4 ==
                        c.readyState && 200 == c.status) { var a = new Blob([c.responseText], { type: "text/javascript" }); b(window.URL.createObjectURL(a)) }
                }; c.open("GET", a, !0); c.send()
            })("//st.prntscr.com/2022/09/11/1722/js/worker.nude.js", function (a) { a = new Worker(a); a.postMessage([c, b.width, b.height]); a.onmessage = function (a) { resultHandler(a.data) } })
        }; resultHandler = function (a) { c ? c(a) : a && console.log("the picture contains nudity") }; return {
            init: function () {
                b = document.createElement("canvas"); b.style.display = "none"; document.getElementsByTagName("body")[0].appendChild(b);
                a = b.getContext("2d"); window.Worker || document.write(unescape("%3Cscript src='//st.prntscr.com/2022/09/11/1722/js/noworker.nude.js' type='text/javascript'%3E%3C/script%3E"))
            }, load: function (a) { "string" == typeof a ? loadImageById(a) : loadImageByElement(a) }, scan: function (a) { 0 < arguments.length && "function" == typeof arguments[0] && (c = a); scanImage() }
        }
    }(); window.nude || (window.nude = c); c.init()
});
