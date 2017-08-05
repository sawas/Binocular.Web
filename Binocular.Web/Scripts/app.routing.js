"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_component_1 = require("./components/home/home.component");
var login_component_1 = require("./components/login/login.component");
var pagenotfound_component_1 = require("./components/error/pagenotfound.component");
var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: '**', component: pagenotfound_component_1.PageNotFoundComponent }
];
exports.AppRouting = router_1.RouterModule.forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
);
