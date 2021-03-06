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
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var index_1 = require("./services/index");
var index_2 = require("./services/index");
//components
var index_3 = require("./components/index");
var index_4 = require("./components/index");
var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [
                index_3.HeroSearchModule, index_4.HeroDetailModule, http_1.HttpModule, platform_browser_1.BrowserModule, router_1.RouterModule, forms_1.FormsModule, platform_browser_1.BrowserModule
            ],
            declarations: [],
            exports: [index_3.HeroSearchModule, index_4.HeroDetailModule, http_1.HttpModule, platform_browser_1.BrowserModule, router_1.RouterModule, forms_1.FormsModule, platform_browser_1.BrowserModule],
            providers: [index_1.HeroService, index_2.HeroSearchService]
        }), 
        __metadata('design:paramtypes', [])
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map