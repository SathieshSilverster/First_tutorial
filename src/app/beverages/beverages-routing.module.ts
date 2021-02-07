import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeveragesPage } from './beverages.page';

const routes: Routes = [
  {
    path: '',
    component: BeveragesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BeveragesPageRoutingModule {}
