import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllocationsPageRoutingModule } from './allocations-routing.module';

import { AllocationsPage } from './allocations.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllocationsPageRoutingModule
  ],
  declarations: [AllocationsPage]
})
export class AllocationsPageModule {}
