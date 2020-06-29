import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CartService } from './services/cart.service';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  pages = [
    {
      title: 'Clothing',
      icon: 'shirt',
      children: [
        {
          title: 'T-shirt',
          url: 't-shirt'
        },
        {
          title: 'Shorts',
          url: 'shorts'
        },
        {
          title: 'Hats',
          url: 'hats'
        },
        {
          title: 'Shoes',
          url: 'shoes'
        },
        {
          title: 'All',
          url: ''
        },
      ],
      open: false
    },
    {
      title: 'Cart',
      url: '/tabs/cart',
      icon: 'cart-outline'
    }
  ];

  dropdown = {
    login: false,
    account: false
  };

  loggedIn$: Observable<boolean>;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private cartService: CartService,
    private authService: AuthService,
    private router: Router
  ) {
    this.initializeApp();
    this.authService.getAuthUser();
    this.loggedIn$ = this.authService.loggedIn$;
  }

  ngOnInit() {
    this.cartService.fetchFromLocalStorage();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  nonAccentVietnamese(str) {
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
    str = str.replace(/đ/g, 'd');
    // Some system encode vietnamese combining accent as individual utf-8 characters
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ''); // Huyền sắc hỏi ngã nặng
    str = str.replace(/\u02C6|\u0306|\u031B/g, ''); // Â, Ê, Ă, Ơ, Ư
    return str;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
