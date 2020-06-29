import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.page.html',
  styleUrls: ['./clothes.page.scss'],
})
export class ClothesPage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  openMenu() {
    this.menuController.enable(true, 'first');
    this.menuController.open('first');
  }

}
