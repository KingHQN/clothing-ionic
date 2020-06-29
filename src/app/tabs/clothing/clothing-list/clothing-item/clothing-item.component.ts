import { Component, OnInit, Input } from '@angular/core';
import { Clothes, Category } from 'src/app/models/clothing.model';
import { ClothingService } from 'src/app/services/clothing.service';
import { CartService } from 'src/app/services/cart.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-clothing-item',
  templateUrl: './clothing-item.component.html',
  styleUrls: ['./clothing-item.component.scss'],
})
export class ClothingItemComponent implements OnInit {

  @Input() clothe: Clothes;

  data: Clothes;
  size;
  color;
  categoryName = '';
  colorIsSelect = false;

  constructor(private clothingService: ClothingService, private cartService: CartService, private toastController: ToastController) { }

  ngOnInit() {
    this.clothingService.getCategories().subscribe(data => this.categoryName = data.find(i => i._id === this.clothe.categoryId).name);
    this.data = { ...this.clothe };
  }

  addToCart() {
    if (!this.size || !this.colorIsSelect) {
      return;
    }
    this.data = { ...this.data, size: this.size, color: this.color };
    this.cartService.addCart(this.data);
    this.presentToast();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Added success!',
      duration: 2000
    });
    toast.present();
  }

  checkColor(value) {
    this.colorIsSelect = true;
    this.color = value;
    this.data = { ...this.data, color: this.color };
  }

  nonAccentVietnamese(str: string) {
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
    str = str.replace(/đ/g, 'd');
    str = str.replace(' ', '-');
    // Some system encode vietnamese combining accent as individual utf-8 characters
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ''); // Huyền sắc hỏi ngã nặng
    str = str.replace(/\u02C6|\u0306|\u031B/g, ''); // Â, Ê, Ă, Ơ, Ư
    return str;
  }

}
