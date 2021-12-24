import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuildingsPageRoutingModule } from './buildings-routing.module';

import { BuildingsPage } from './buildings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    BuildingsPageRoutingModule
  ],
  declarations: [BuildingsPage]
})
export class BuildingsPageModule {}
