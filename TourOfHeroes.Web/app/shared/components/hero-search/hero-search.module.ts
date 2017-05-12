import { NgModule } from '@angular/core';
import { HeroSearchComponent } from './hero-search.component';
import { CommonModule } from "@angular/common";
@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [HeroSearchComponent
    ],
    exports: [HeroSearchComponent],
    providers: []
})
export class HeroSearchModule { }
