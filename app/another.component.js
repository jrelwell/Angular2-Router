System.register(['angular2/core'], function(exports_1) {
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
    var core_1;
    var AnotherPage;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AnotherPage = (function () {
                function AnotherPage() {
                }
                AnotherPage = __decorate([
                    core_1.Component({
                        template: "\n                <div class=\"fluid-container\">\n                    <div class=\"row\">\n                        <div class=\"col-md-6\">\n                        another 1\n                        </div>\n                        <div class=\"col-md-6\">\n                        another 2\n                        </div>\n                    </div>\n                </div>\n                "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AnotherPage);
                return AnotherPage;
            }());
            exports_1("AnotherPage", AnotherPage);
        }
    }
});
//# sourceMappingURL=another.component.js.map