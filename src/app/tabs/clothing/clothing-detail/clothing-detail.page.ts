import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClothingService } from 'src/app/services/clothing.service';
import { Clothes, Category } from 'src/app/models/clothing.model';
import { CartService } from 'src/app/services/cart.service';
import { ToastController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-clothing-detail',
  templateUrl: './clothing-detail.page.html',
  styleUrls: ['./clothing-detail.page.scss'],
})
export class ClothingDetailPage implements OnInit {

  clothingName: string;
  categoryName: string;
  size;
  color;
  clothes: Clothes;

  // tslint:disable-next-line: max-line-length
  constructor(private route: ActivatedRoute, private clothingService: ClothingService, private cartService: CartService, private toastController: ToastController, private loadingController: LoadingController) { }

  ngOnInit() {
    this.presentLoading();
    this.clothingName = this.route.snapshot.params.clothingName.replace('-', ' ');
    this.clothingService.getClothes().subscribe(data => {
      this.clothes = data.find(i => i.name.toLowerCase() === this.clothingName);
      this.clothingService.getCategories().subscribe(d1 => this.categoryName = d1.find(i1 => i1._id === this.clothes.categoryId).name);
      this.loadingController.dismiss();
    });
  }

  addToCart() {
    if (!this.size || !this.color) {
      return;
    }
    this.cartService.addCart({ ...this.clothes, size: this.size, color: this.color });
    this.presentToast();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Loading...',
      translucent: true,
    });
    return await loading.present();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Added success!',
      duration: 1500
    });
    toast.present();
  }

}
