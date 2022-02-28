import { CartItem } from './../models/cart-item.model';
import { CartItemService } from './../services/cart-item.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cartItems: CartItem[] = [];

  constructor(private cartItemService: CartItemService) { }

  ngOnInit(): void {
    this.cartItemService.findAll().subscribe(data => {
      this.cartItems = data;
    })
  }

}
