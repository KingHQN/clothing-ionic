import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  openMenu() {
    this.menuController.enable(true, 'first');
    this.menuController.open('first');
  }

}
