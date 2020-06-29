import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../auth/auth.guard';
import { AdminPage } from './admin/admin.page';
import { ClothesPage } from './clothes/clothes.page';
import { OrdersPage } from './orders/orders.page';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          {
            path: 'clothes',
            loadChildren: () => import('./clothes/clothes.module').then( m => m.ClothesPageModule)
          },
          {
            path: 'orders',
            loadChildren: () => import('./orders/orders.module').then( m => m.OrdersPageModule)
          },
          { path: '', component: AdminPage, pathMatch: 'full' }
        ]
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
