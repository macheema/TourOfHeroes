import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { DashboardRoutes } from './dashboard/index';
import { HeroDetailRoutes } from './shared/index';
import { HeroesRoutes } from './heroes/index';


export const routes: Routes = [
    ...DashboardRoutes,
    ...HeroDetailRoutes,
    ...HeroesRoutes,
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

