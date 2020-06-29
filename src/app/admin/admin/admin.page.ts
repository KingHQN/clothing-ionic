import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  openMenu() {
    this.menuController.enable(true, 'first');
    this.menuController.open('first');
  }

}
