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
    var NextPage, items;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            NextPage = (function () {
                function NextPage() {
                    this.itemList = items;
                }
                NextPage = __decorate([
                    core_1.Component({
                        template: "\n                <div class=\"fluid-container\">\n                    <div class=\"row\">\n                        <div class=\"col-lg-4 col-md-4 col-sm-12\" *ngFor=\"#item of itemList; #num = index\">\n                            <img src=\"{{ item.icon }}\" />\n                            <h3>{{ item.title }}</h3>\n                            <p>{{ item.desc }}</p>\n                        </div>\n                    </div>\n                </div>\n                "
                    }), 
                    __metadata('design:paramtypes', [])
                ], NextPage);
                return NextPage;
            }());
            exports_1("NextPage", NextPage);
            items = [
                { title: 'Armchair', icon: '/PNG/armchair_128px.png', desc: 'An Armchair.  Its pretty comfy, I fall asleep in it sometimes.' },
                { title: 'Binoculars', icon: '/PNG/binoculars_128px.png', desc: 'Some Binoculars I found at a ball game.  They were in the upper deck of the stadium, and I figured, eh why not?' },
                { title: 'Sign', icon: '/PNG/direction_sign_128px.png', desc: 'A sign pointing left.  Or west.  East?  Direction is irrelevant in space travel.' },
                { title: 'Gas Station', icon: '/PNG/gas-station_128px.png', desc: 'A Gas Station..... that I probably should have stopped at.  Im about to run out of gas.  And its pretty cold out.' },
                { title: 'Gift Box', icon: '/PNG/giftbox_128px.png', desc: 'A gift box that is way too big for the gift.  Because I really got you a gift card. Suprise!' },
                { title: 'Lamp 2', icon: '/PNG/lamp-2_128px.png', desc: 'Another lamp to go with the first lamp.  Cause you cant have enough lamps.  Lamps.' },
                { title: 'Lamp', icon: '/PNG/lamp_128px.png', desc: 'A lamp, to light the dark basement youre coding in.  Its normal.' },
                { title: 'Mirror', icon: '/PNG/mirror_128px.png', desc: 'A mirror to place on the wall.  It may tell you who the fairest is of them all. Or not.' },
                { title: 'Plane', icon: '/PNG/paper-plane_128px.png', desc: 'A paper air plane I made in third grade.  I found it while cleaning out my closet and thought it was cool.' },
                { title: 'Bear', icon: '/PNG/tedy_bear_128px.png', desc: 'A teddy bear that smells funny.  My mom should have washed this more.' },
                { title: 'Torch', icon: '/PNG/torch_128px.png', desc: 'A torch, because no adventure is complete without one.  Just dont die.' }
            ];
        }
    }
});
//# sourceMappingURL=next.component.js.map