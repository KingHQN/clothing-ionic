import { Component, OnInit, Input } from '@angular/core';
import { Cart } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {

  @Input() cart: Cart;

  constructor(private cartService: CartService, private toastController: ToastController) { }

  ngOnInit() {
  }

  delItemCart(item) {
    this.cartService.delItemCart(item);
    this.presentToast();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: `Removed ${this.cart.quantity} ${this.cart.quantity > 1 ? 'items' : 'item'} from cart!`,
      duration: 2000
    });
    toast.present();
  }

}
