import { Component } from 'angular2/core';

interface Items{
    title: string,
    icon: string,
    desc: string
}

@Component({
   template:    `
                <div class="fluid-container">
                    <div class="row">
                        <div class="col-lg-4 col-md-4 col-sm-12" *ngFor="#item of itemList; #num = index">
                            <img src="{{ item.icon }}" />
                            <h3>{{ item.title }}</h3>
                            <p>{{ item.desc }}</p>
                        </div>
                    </div>
                </div>
                `  
})

export class NextPage  {
    public itemList = items;
}

var items: Items[] = [
    {title: 'Armchair', icon: '/PNG/armchair_128px.png', desc: 'An Armchair.  Its pretty comfy, I fall asleep in it sometimes.'},
    {title: 'Binoculars', icon: '/PNG/binoculars_128px.png', desc: 'Some Binoculars I found at a ball game.  They were in the upper deck of the stadium, and I figured, eh why not?'},
    {title: 'Sign', icon: '/PNG/direction_sign_128px.png', desc: 'A sign pointing left.  Or west.  East?  Direction is irrelevant in space travel.'},
    {title: 'Gas Station', icon: '/PNG/gas-station_128px.png', desc: 'A Gas Station..... that I probably should have stopped at.  Im about to run out of gas.  And its pretty cold out.'},
    {title: 'Gift Box', icon: '/PNG/giftbox_128px.png', desc: 'A gift box that is way too big for the gift.  Because I really got you a gift card. Suprise!'},
    {title: 'Lamp 2', icon: '/PNG/lamp-2_128px.png', desc: 'Another lamp to go with the first lamp.  Cause you cant have enough lamps.  Lamps.'},
    {title: 'Lamp', icon: '/PNG/lamp_128px.png', desc: 'A lamp, to light the dark basement youre coding in.  Its normal.'},
    {title: 'Mirror', icon: '/PNG/mirror_128px.png', desc: 'A mirror to place on the wall.  It may tell you who the fairest is of them all. Or not.'},
    {title: 'Plane', icon: '/PNG/paper-plane_128px.png', desc: 'A paper air plane I made in third grade.  I found it while cleaning out my closet and thought it was cool.'},
    {title: 'Bear', icon: '/PNG/tedy_bear_128px.png', desc: 'A teddy bear that smells funny.  My mom should have washed this more.'},
    {title: 'Torch', icon: '/PNG/torch_128px.png', desc: 'A torch, because no adventure is complete without one.  Just dont die.'}
];