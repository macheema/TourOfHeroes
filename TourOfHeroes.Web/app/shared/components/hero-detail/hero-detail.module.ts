import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './../../services/index';
@NgModule({
    imports: [
        CommonModule, FormsModule
    ],
    declarations: [
        HeroDetailComponent
    ],
    exports: [HeroDetailComponent],
    providers: [HeroService]
})
export class HeroDetailModule { }
