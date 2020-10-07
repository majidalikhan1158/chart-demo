import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Dashboard2RoutingModule } from './dashboard2-routing.module';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { WidgetsModule } from 'src/app/_metronic/partials/content/widgets/widgets.module';

@NgModule({
  declarations: [Dashboard2Component],
  imports: [
    CommonModule,
    Dashboard2RoutingModule,
    NgApexchartsModule,
    WidgetsModule
  ]
})
export class Dashboard2Module { }
