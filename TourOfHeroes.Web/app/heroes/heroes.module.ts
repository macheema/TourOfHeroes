import { NgModule } from '@angular/core';
import { HeroesComponent } from './heroes.component';
import { SharedModule } from './../shared/index';
@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [HeroesComponent
    ],
    exports: [HeroesComponent],
    providers: []
})
export class HeroesModule { }
