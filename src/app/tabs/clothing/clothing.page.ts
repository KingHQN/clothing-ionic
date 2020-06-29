import { Component, OnInit } from '@angular/core';
import { ClothingService } from 'src/app/services/clothing.service';
import { MenuController, LoadingController } from '@ionic/angular';
import { Category, Clothes } from 'src/app/models/clothing.model';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-clothing',
  templateUrl: './clothing.page.html',
  styleUrls: ['./clothing.page.scss'],
})
export class ClothingPage implements OnInit {

  public categories: Category[] = [];
  public clothes: Clothes[] = [];
  clothes$: Observable<Clothes[]>;
  public paramsUrl = '';

  // tslint:disable-next-line: max-line-length
  constructor(private clothingService: ClothingService, private menuController: MenuController, private loadingController: LoadingController, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.presentLoading();
    this.clothingService.getCategories().subscribe(data => this.categories = data);
    this.clothingService.getClothes().subscribe(data => {
      this.clothes = data;
      this.activatedRoute.params.forEach(params => {
        this.paramsUrl = params.category;
        if (this.paramsUrl) {
          this.clothingService.filterClothes(this.paramsUrl);
        } else {
          this.clothingService.setData(this.clothes);
        }
      });
      this.loadingController.dismiss();
    });
    this.clothes$ = this.clothingService.clothes$;
  }

  openMenu() {
    this.menuController.enable(true, 'first');
    this.menuController.open('first');
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Loading...',
      translucent: true,
    });
    return await loading.present();
  }

}
