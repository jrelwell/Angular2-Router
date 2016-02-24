System.register(['angular2/core', 'angular2/router', './home.component', './next.component', './another.component'], function(exports_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, home_component_1, next_component_1, another_component_1;
    var MainWindow;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (next_component_1_1) {
                next_component_1 = next_component_1_1;
            },
            function (another_component_1_1) {
                another_component_1 = another_component_1_1;
            }],
        execute: function() {
            MainWindow = (function () {
                function MainWindow() {
                    this.brand = "My Site";
                }
                MainWindow = __decorate([
                    core_1.Component({
                        selector: 'main-window',
                        template: "\n                    <nav class=\"navbar navbar-default\">\n                        <div class=\"container-fluid\">\n                            <!-- Brand and toggle get grouped for better mobile display -->\n                            <div class=\"navbar-header\">\n                                <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n                                    <span class=\"sr-only\">Toggle navigation</span>\n                                    <span class=\"icon-bar\"></span>\n                                    <span class=\"icon-bar\"></span>\n                                    <span class=\"icon-bar\"></span>\n                                </button>\n                                <a class=\"navbar-brand\" href=\"#\">{{ brand }}</a>\n                            </div>\n                               \n                            <!-- Collect the nav links, forms, and other content for toggling -->\n                            <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n                                <ul class=\"nav navbar-nav\">\n                                    <li><a [routerLink]=\"['HomePage']\">Home</a></li>\n                                    <li><a [routerLink]=\"['NextPage']\">Next Page</a></li>\n                                    <li><a [routerLink]=\"['AnotherPage']\">Another Page</a></li>\n                                </ul>\n                            </div><!-- /.navbar-collapse -->\n                        </div>\n                    </nav>\n                    <router-outlet></router-outlet> \n                ",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/home', name: 'HomePage', component: home_component_1.HomePage, useAsDefault: true },
                        { path: '/next', name: 'NextPage', component: next_component_1.NextPage },
                        { path: '/another', name: 'AnotherPage', component: another_component_1.AnotherPage }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], MainWindow);
                return MainWindow;
            }());
            exports_1("MainWindow", MainWindow);
        }
    }
});
//# sourceMappingURL=app.components.js.map