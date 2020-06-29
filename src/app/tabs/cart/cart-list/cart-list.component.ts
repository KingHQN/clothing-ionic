import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Observable } from 'rxjs';
import { Cart } from 'src/app/models/cart.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent implements OnInit {

  cart$: Observable<Cart[]>;
  length = 0;
  total = 0;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cart$ = this.cartService.cart$;
    this.cartService.length$.subscribe(length => this.length = length);
    this.cartService.total$.subscribe(total => this.total = total);
  }

}
