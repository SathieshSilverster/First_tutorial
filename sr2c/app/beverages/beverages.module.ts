import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BeveragesPageRoutingModule } from './beverages-routing.module';

import { BeveragesPage } from './beverages.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BeveragesPageRoutingModule
  ],
  declarations: [BeveragesPage]
})
export class BeveragesPageModule {}
