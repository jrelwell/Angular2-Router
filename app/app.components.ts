import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { HomePage } from './home.component';
import { NextPage } from './next.component';
import { AnotherPage } from './another.component';

@Component({
    selector: 'main-window',
    template:   `
                    <nav class="navbar navbar-default">
                        <div class="container-fluid">
                            <!-- Brand and toggle get grouped for better mobile display -->
                            <div class="navbar-header">
                                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                    <span class="sr-only">Toggle navigation</span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                </button>
                                <a class="navbar-brand" href="#">{{ brand }}</a>
                            </div>
                               
                            <!-- Collect the nav links, forms, and other content for toggling -->
                            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                <ul class="nav navbar-nav">
                                    <li><a [routerLink]="['HomePage']">Home</a></li>
                                    <li><a [routerLink]="['NextPage']">Next Page</a></li>
                                    <li><a [routerLink]="['AnotherPage']">Another Page</a></li>
                                </ul>
                            </div><!-- /.navbar-collapse -->
                        </div>
                    </nav>
                    <router-outlet></router-outlet> 
                `,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/home', name: 'HomePage', component: HomePage, useAsDefault: true },
    { path:'/next', name: 'NextPage', component: NextPage },
    { path:'/another', name: 'AnotherPage', component: AnotherPage }
])
export class MainWindow { 
    public brand = "My Site";
}