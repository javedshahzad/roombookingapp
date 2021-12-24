import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddbuildingPage } from './addbuilding.page';

const routes: Routes = [
  {
    path: '',
    component: AddbuildingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddbuildingPageRoutingModule {}
