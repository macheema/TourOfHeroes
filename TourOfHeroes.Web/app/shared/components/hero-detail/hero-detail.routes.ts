import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { HeroDetailComponent } from './hero-detail.component';

export const HeroDetailRoutes: Routes = [
    { path: 'detail/:id', component: HeroDetailComponent }
];
