import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClothingPage } from './clothing.page';

const routes: Routes = [
  {
    path: '',
    component: ClothingPage,
    pathMatch: 'full'
  },
  {
    path: 'detail/:clothingName',
    loadChildren: () => import('./clothing-detail/clothing-detail.module').then( m => m.ClothingDetailPageModule)
  },
  {
    path: ':category',
    component: ClothingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClothingPageRoutingModule {}
