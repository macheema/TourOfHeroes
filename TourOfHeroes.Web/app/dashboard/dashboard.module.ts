import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from './../shared/index';

@NgModule({
    imports: [SharedModule
    ],
    declarations: [DashboardComponent
    ],
    exports: [DashboardComponent],
    providers: []
})
export class DashboardModule { }
