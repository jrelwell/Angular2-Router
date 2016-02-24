System.register(['./app.components', 'angular2/platform/browser', 'angular2/router'], function(exports_1) {
    "use strict";
    var app_components_1, browser_1, router_1;
    return {
        setters:[
            function (app_components_1_1) {
                app_components_1 = app_components_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_components_1.MainWindow, [
                router_1.ROUTER_PROVIDERS
            ]);
        }
    }
});
//# sourceMappingURL=boot.js.map