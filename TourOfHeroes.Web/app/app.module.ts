import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './shared/index';

import { AppComponent } from './app.component';
import { routes } from "./app.routes";
import { DashboardModule } from "./dashboard/index";
//import { HeroDetailModule } from "./hero-detail/index";
import { HeroesModule } from "./heroes/index";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        //InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 600 }),
        RouterModule.forRoot(routes),
        DashboardModule,
        //HeroDetailModule,
        HeroesModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
