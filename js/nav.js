(function (d, c, a, e) {
    var b = function (g, f) {
        this.elem = g;
        this.$elem = d(g);
        this.options = f;
        this.metadata = this.$elem.data("plugin-options");
        this.$win = d(c);
        this.sections = {};
        this.didScroll = false;
        this.$doc = d(a);
        this.docHeight = this.$doc.height()
    };
    b.prototype = {
        defaults: {
            navItems: "a",
            currentClass: "current",
            changeHash: false,
            easing: "swing",
            filter: "",
            scrollSpeed: 750,
            scrollThreshold: 0.5,
            begin: false,
            end: false,
            scrollChange: false
        }, init: function () {
            this.config = d.extend({}, this.defaults, this.options, this.metadata);
            this.$nav = this.$elem.find(this.config.navItems);
            if (this.config.filter !== "") {
                this.$nav = this.$nav.filter(this.config.filter)
            }
            this.$nav.on("click.onePageNav", d.proxy(this.handleClick, this));
            this.getPositions();
            this.bindInterval();
            this.$win.on("resize.onePageNav", d.proxy(this.getPositions, this));
            return this
        }, adjustNav: function (f, g) {
            f.$elem.find("." + f.config.currentClass).removeClass(f.config.currentClass);
            g.addClass(f.config.currentClass)
        }, bindInterval: function () {
            var g = this;
            var f;
            g.$win.on("scroll.onePageNav", function () {
                g.didScroll = true
            });
            g.t = setInterval(function () {
                f = g.$doc.height();
                if (g.didScroll) {
                    g.didScroll = false;
                    g.scrollChange()
                }
                if (f !== g.docHeight) {
                    g.docHeight = f;
                    g.getPositions()
                }
            }, 250)
        }, getHash: function (f) {
            return f.attr("href").split("#")[1]
        }, getPositions: function () {
            var h = this;
            var i;
            var g;
            var f;
            h.$nav.each(function () {
                i = h.getHash(d(this));
                f = d("#" + i);
                if (f.length) {
                    g = f.offset().top;
                    h.sections[i] = Math.round(g)
                }
            })
        }, getSection: function (i) {
            var f = null;
            var h = Math.round(this.$win.height() * this.config.scrollThreshold);
            for (var g in this.sections) {
                if ((this.sections[g] - h) < i) {
                    f = g
                }
            }
            return f
        }, handleClick: function (j) {
            var g = this;
            var f = d(j.currentTarget);
            var i = f.parent();
            var h = "#" + g.getHash(f);
            if (!i.hasClass(g.config.currentClass)) {
                if (g.config.begin) {
                    g.config.begin()
                }
                g.adjustNav(g, i);
                g.unbindInterval();
                g.scrollTo(h, function () {
                    if (g.config.changeHash) {
                        c.location.hash = h
                    }
                    g.bindInterval();
                    if (g.config.end) {
                        g.config.end()
                    }
                })
            }
            j.preventDefault()
        }, scrollChange: function () {
            var h = this.$win.scrollTop();
            var f = this.getSection(h);
            var g;
            if (f !== null) {
                g = this.$elem.find('a[href$="#' + f + '"]').parent();
                if (!g.hasClass(this.config.currentClass)) {
                    this.adjustNav(this, g);
                    if (this.config.scrollChange) {
                        this.config.scrollChange(g)
                    }
                }
            }
        }, scrollTo: function (f, h) {
            var g = d(f).offset().top;
            d("html, body").animate({scrollTop: g+2}, this.config.scrollSpeed, this.config.easing, h)
        }, unbindInterval: function () {
            clearInterval(this.t);
            this.$win.unbind("scroll.onePageNav")
        }
    };
    b.defaults = b.prototype.defaults;
    d.fn.onePageNav = function (f) {
        return this.each(function () {
            new b(this, f).init()
        })
    }
})(jQuery, window, document);