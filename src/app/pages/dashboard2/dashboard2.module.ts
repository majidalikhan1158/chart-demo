import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Dashboard2RoutingModule } from './dashboard2-routing.module';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { WidgetsModule } from 'src/app/_metronic/partials/content/widgets/widgets.module';
import { RadialbarchartComponent } from './radialbarchart/radialbarchart.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ColorragnechartComponent } from './colorragnechart/colorragnechart.component';



@NgModule({
  declarations: [Dashboard2Component, RadialbarchartComponent, ColorragnechartComponent],
  imports: [
    CommonModule,
    NgbModule,
    Dashboard2RoutingModule,
    NgApexchartsModule,
    WidgetsModule
  ],
})
export class Dashboard2Module { }
