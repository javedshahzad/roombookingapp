import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddbuildingPageRoutingModule } from './addbuilding-routing.module';

import { AddbuildingPage } from './addbuilding.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AddbuildingPageRoutingModule
  ],
  declarations: [AddbuildingPage]
})
export class AddbuildingPageModule {}
