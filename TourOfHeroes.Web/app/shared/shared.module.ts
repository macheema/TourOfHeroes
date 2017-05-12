import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//services

import { InMemoryDataService } from "./services/index";
import { HeroService } from "./services/index";
import { HeroSearchService } from "./services/index";
//components
import { HeroSearchModule } from "./components/index";
import { HeroDetailModule } from "./components/index";


@NgModule({
    imports: [
        HeroSearchModule, HeroDetailModule, HttpModule, BrowserModule, RouterModule, FormsModule, BrowserModule
    ],
    declarations: [
    ],
    exports: [HeroSearchModule, HeroDetailModule, HttpModule, BrowserModule, RouterModule, FormsModule, BrowserModule],
    providers: [HeroService, HeroSearchService]
})
export class SharedModule { }
