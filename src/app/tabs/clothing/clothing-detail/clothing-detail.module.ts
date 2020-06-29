import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClothingDetailPageRoutingModule } from './clothing-detail-routing.module';

import { ClothingDetailPage } from './clothing-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClothingDetailPageRoutingModule
  ],
  declarations: [ClothingDetailPage]
})
export class ClothingDetailPageModule {}
