import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminPageModule } from './admin/admin.module';
import { ClothesPageModule } from './clothes/clothes.module';
import { OrdersPageModule } from './orders/orders.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AdminPageModule,
    ClothesPageModule,
    OrdersPageModule
  ]
})
export class AdminModule { }
