import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { RadialbarchartComponent } from './radialbarchart/radialbarchart.component';

const routes: Routes = [
  {path: '', component: Dashboard2Component},
  {path: 'radial-chart', component: RadialbarchartComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Dashboard2RoutingModule { }
