import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllreservationPage } from './allreservation.page';

const routes: Routes = [
  {
    path: '',
    component: AllreservationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllreservationPageRoutingModule {}
