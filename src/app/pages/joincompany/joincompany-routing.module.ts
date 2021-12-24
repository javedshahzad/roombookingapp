import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JoincompanyPage } from './joincompany.page';

const routes: Routes = [
  {
    path: '',
    component: JoincompanyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JoincompanyPageRoutingModule {}
