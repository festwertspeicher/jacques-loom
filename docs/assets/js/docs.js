/*
document.addEventListener(
    "click",
    function (e) {
        e.target.closest("[data-menu-toggle]") &&
            ((document.documentElement.dataset.menuState = "on" === document.documentElement.dataset.menuState ? "off" : "on"),
            "on" === document.documentElement.dataset.menuState
                ? (sessionStorage.setItem("scroll-position", document.documentElement.scrollTop),
                  (document.documentElement.dataset.scrollDisabled = "on"),
                  s("[data-menu]", !0),
                  (a = document
                      .querySelector("[data-menu-container]")
                      .querySelectorAll(
                          'a[href]:not([tabindex="-1"]), area[href]:not([tabindex="-1"]), input:not([disabled]):not([tabindex="-1"]), select:not([disabled]):not([tabindex="-1"]), textarea:not([disabled]):not([tabindex="-1"]), button:not([disabled]):not([tabindex="-1"]), iframe:not([tabindex="-1"]), [tabindex]:not([tabindex="-1"]), [contentEditable=true]:not([tabindex="-1"])'
                      )),
                  (c = a[0]),
                  (u = a[a.length - 1]))
                : ((document.documentElement.dataset.scrollDisabled = "off"), (document.documentElement.scrollTop = sessionStorage.getItem("scroll-position")), s("[data-menu]", !1)));
    },
    !1
),
document.addEventListener(
    "keydown",
    function (e) {
        if (((e = e || window.event), "on" !== document.documentElement.dataset.menuState)) return !1;
        switch (e.keyCode) {
            case 9:
                if (1 === a.length) {
                    e.preventDefault();
                    break;
                }
                e.shiftKey ? document.activeElement === c && (e.preventDefault(), u.focus()) : document.activeElement === u && (e.preventDefault(), c.focus());
                break;
            case 27:
                s("[data-menu]", !(document.documentElement.dataset.menuState = "off"));
        }
    },
    !1
),
document.addEventListener(
    "DOMContentLoaded",
    function () {
        var e = document.createElement("style");
        (e.innerHTML =
            '\n      [data-scroll-disabled="on"], \n      [data-scroll-disabled="on"] body {\n        touch-action: none;\n        overscroll-behavior: none;\n        -webkit-overflow-scrolling: auto;\n        overflow: hidden;\n      }\n    '),
            document.head.appendChild(e);
    },
    !1
);

const el = document.getElementById("TOC");
el.addEventListener("click", function() {
    ((document.documentElement.dataset.menuState = "on" === document.documentElement.dataset.menuState ? "off" : "on"),
    "on" === document.documentElement.dataset.menuState
        ? (sessionStorage.setItem("scroll-position", document.documentElement.scrollTop),
            (document.documentElement.dataset.scrollDisabled = "on"),
            s("[data-menu]", !0),
            (a = document
                .querySelector("[data-menu-container]")
                .querySelectorAll(
                    'a[href]:not([tabindex="-1"]), area[href]:not([tabindex="-1"]), input:not([disabled]):not([tabindex="-1"]), select:not([disabled]):not([tabindex="-1"]), textarea:not([disabled]):not([tabindex="-1"]), button:not([disabled]):not([tabindex="-1"]), iframe:not([tabindex="-1"]), [tabindex]:not([tabindex="-1"]), [contentEditable=true]:not([tabindex="-1"])'
                )),
            (c = a[0]),
            (u = a[a.length - 1]))
        : ((document.documentElement.dataset.scrollDisabled = "off"), (document.documentElement.scrollTop = sessionStorage.getItem("scroll-position")), s("[data-menu]", !1)));
}, false);

function s(e, t) {
    var n = document.querySelector(e);
    n.querySelectorAll("button, [href], input, select, textarea").forEach(function (e) {
        return e.setAttribute("tabindex", t ? "" : "-1");
    }),
        n.classList.toggle("hidden");
}

function f(e) {
    var t = void 0,
        o = void 0;
    if ("DOMContentLoaded" == e.type || "popstate" == e.type) {
        if (!(t = document.querySelectorAll("input[type=range]"))) return !1;
        o = !0;
    } else {
        if ("range" !== e.target.type) return !1;
        (t = [e.target]), (o = !1);
    }
    t.forEach(function (e) {
        o && (e.value = sessionStorage.getItem(e.id) || null);
        var t = e.min || 1,
            n = ((Number(e.max) || 100) !== 1 / 0 && Number(e.max)) || 100,
            r = ((e.value - t) / (n - t)) * 100;
        (e.style.background = "linear-gradient(to right, #DFB2FC 0%, #7E5DE9 " + r + "%, #F1F2F9 " + r + "%, #F1F2F9 100%)"), sessionStorage.setItem(e.id, e.value);
    });
}

document.addEventListener("DOMContentLoaded", function () {
    ({
        container: document.querySelector(".outline-list"),
        links: null,
        headings: null,
        intersectionOptions: { rootMargin: "0px", threshold: 1 },
        previousSection: null,
        observer: null,
        init: function () {
            if (!this.container) return !1;
            (this.handleObserver = this.handleObserver.bind(this)), this.setUpObserver(), this.findLinksAndHeadings(), this.observeSections();
        },
        handleObserver: function (e, t) {
            var r = this;
            e.forEach(function (e) {
                var t = "#" + e.target.getAttribute("id"),
                    n = r.links.find(function (e) {
                        return e.getAttribute("href") === t;
                    });
                e.isIntersecting && 1 <= e.intersectionRatio ? (n.classList.add("visible"), (r.previousSection = e.target.getAttribute("id"))) : n.classList.remove("visible"), r.highlightFirstActive();
            });
        },
        highlightFirstActive: function () {
            var e = this.container.querySelector(".visible");
            this.links.forEach(function (e) {
                e.classList.remove("active");
            }),
                e && e.classList.add("active"),
                !e && this.previousSection && this.container.querySelector('a[href="#' + this.previousSection + '"]').classList.add("active");
        },
        observeSections: function () {
            var t = this;
            this.headings.forEach(function (e) {
                t.observer.observe(e);
            });
        },
        setUpObserver: function () {
            this.observer = new IntersectionObserver(this.handleObserver, this.intersectionOptions);
        },
        findLinksAndHeadings: function () {
            (this.links = [].concat(
                (function (e) {
                    if (Array.isArray(e)) {
                        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                        return n;
                    }
                    return Array.from(e);
                })(this.container.querySelectorAll("a"))
            )),
                (this.headings = this.links.map(function (e) {
                    var t = e.getAttribute("href");
                    return document.querySelector(t);
                }));
        },
    }.init());
}),
document.addEventListener("input", f);
*/