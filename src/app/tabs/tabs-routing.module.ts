import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'clothing',
        loadChildren: () => import('./clothing/clothing.module').then( m => m.ClothingPageModule)
      },
      {
        path: 'cart',
        loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
      },
      // {
      //   path: 'clothing/detail/:clothingName',
      //   loadChildren: () => import('./clothing/clothing-detail/clothing-detail.module').then( m => m.ClothingDetailPageModule)
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
