import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllreservationPageRoutingModule } from './allreservation-routing.module';

import { AllreservationPage } from './allreservation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllreservationPageRoutingModule
  ],
  declarations: [AllreservationPage]
})
export class AllreservationPageModule {}
