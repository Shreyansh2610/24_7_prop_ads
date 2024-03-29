function hexToRGB(t, e) {
    var a = parseInt(t.slice(1, 3), 16),
        r = parseInt(t.slice(3, 5), 16),
        t = parseInt(t.slice(5, 7), 16);
    return e
        ? "rgba(" + a + ", " + r + ", " + t + ", " + e + ")"
        : "rgb(" + a + ", " + r + ", " + t + ")";
}
!(function (a) {
    "use strict";
    function t() {
        (this.$body = a("body")),
            (this.charts = []),
            (this.defaultColors = ["#3bc0c3", "#4489e4", "#d03f3f", "#716cb0"]);
    }
    (t.prototype.borderRadiusExample = function () {
        var t = document.getElementById("border-radius-example"),
            e = t.getAttribute("data-colors"),
            e = e ? e.split(",") : this.defaultColors,
            t = t.getContext("2d"),
            t = new Chart(t, {
                type: "bar",
                data: {
                    labels: ["Jan", "Feb", "March", "April", "May", "June"],
                    datasets: [
                        {
                            label: "Fully Rounded",
                            data: [12, -19, 14, -15, 12, -14],
                            borderColor: e[0],
                            backgroundColor: hexToRGB(e[0], 0.3),
                            borderWidth: 2,
                            borderRadius: Number.MAX_VALUE,
                            borderSkipped: !1,
                        },
                        {
                            label: "Small Radius",
                            data: [-10, 19, -15, -8, 12, -7],
                            backgroundColor: hexToRGB(e[1], 0.3),
                            borderColor: e[1],
                            borderWidth: 2,
                            borderRadius: Number.MAX_VALUE,
                            borderSkipped: !1,
                        },
                    ],
                },
                options: {
                    responsive: !0,
                    maintainAspectRatio: !1,
                    plugins: { legend: { display: !1, position: "top" } },
                    scales: {
                        x: { grid: { display: !1 } },
                        y: { grid: { display: !1 } },
                    },
                },
            });
        this.charts.push(t);
    }),
        (t.prototype.floatingBarExample = function () {
            var t = document.getElementById("floating-example"),
                e = t.getAttribute("data-colors"),
                e = e ? e.split(",") : this.defaultColors,
                t = t.getContext("2d"),
                t = new Chart(t, {
                    type: "bar",
                    data: {
                        labels: ["Jan", "Feb", "March", "April", "May", "June"],
                        datasets: [
                            {
                                label: "Fully Rounded",
                                data: [12, -19, 14, -15, 12, -14],
                                backgroundColor: e[0],
                            },
                            {
                                label: "Small Radius",
                                data: [-10, 19, -15, -8, 12, -7],
                                backgroundColor: e[1],
                            },
                        ],
                    },
                    options: {
                        responsive: !0,
                        maintainAspectRatio: !1,
                        plugins: { legend: { display: !1, position: "top" } },
                        scales: {
                            x: { grid: { display: !1 } },
                            y: { grid: { display: !1 } },
                        },
                    },
                });
            this.charts.push(t);
        }),
        (t.prototype.init = function () {
            var e = this;
            (Chart.defaults.font.family =
                '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif'),
                (Chart.defaults.color = "#8391a2"),
                (Chart.defaults.scale.grid.color = "#8391a2"),
                this.borderRadiusExample(),
                this.floatingBarExample(),
                a(window).on("resizeEnd", function (t) {
                    a.each(e.charts, function (t, e) {
                        try {
                            e.destroy();
                        } catch (t) {}
                    }),
                        e.borderRadiusExample(),
                        e.floatingBarExample();
                }),
                a(window).resize(function () {
                    this.resizeTO && clearTimeout(this.resizeTO),
                        (this.resizeTO = setTimeout(function () {
                            a(this).trigger("resizeEnd");
                        }, 500));
                });
        }),
        (a.ChartJs = new t()),
        (a.ChartJs.Constructor = t);
})(window.jQuery),
    (function () {
        "use strict";
        window.jQuery.ChartJs.init();
    })();
