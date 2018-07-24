import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DonorDashboardComponent } from '../donor-dashboard.component';

const routes: Routes = [
  { path: 'donordashboard', component: DonorDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DonorDashboardRoutingModule { }
