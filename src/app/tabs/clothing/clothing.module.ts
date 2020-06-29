import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClothingPageRoutingModule } from './clothing-routing.module';

import { ClothingPage } from './clothing.page';
import { ClothingListComponent } from './clothing-list/clothing-list.component';
import { ClothingItemComponent } from './clothing-list/clothing-item/clothing-item.component';
import { ClothingDetailPage } from './clothing-detail/clothing-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClothingPageRoutingModule
  ],
  declarations: [ClothingPage, ClothingListComponent, ClothingItemComponent, ClothingDetailPage]
})
export class ClothingPageModule {}
