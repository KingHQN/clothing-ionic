import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClothingDetailPage } from './clothing-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ClothingDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClothingDetailPageRoutingModule {}
