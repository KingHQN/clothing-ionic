import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  openMenu() {
    this.menuController.enable(true, 'first');
    this.menuController.open('first');
  }

}
