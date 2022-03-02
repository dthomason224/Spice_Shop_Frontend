import { CartItem } from './../models/cart-item.model';
import { CartItemService } from './../services/cart-item.service';
import { Component, OnInit } from '@angular/core';
import { faMinusCircle, faPlusCircle, faTrash } from "@fortawesome/free-solid-svg-icons";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  faPlusCircle = faPlusCircle;
  faMinusCircle = faMinusCircle;
  faTrash = faTrash

  cartItems: CartItem[] = [];
  total: number = 0;

  constructor(private cartItemService: CartItemService, private router: Router) {
    // this.total = this.getTotal();
  }

  ngOnInit(): void {
    this.getCartItems();
  }

  deleteCartItem(id: number) {
    this.cartItemService.delete(id).subscribe(data => {
      console.log(data);
      this.total = 0;
      this.getCartItems();

    })
  }

  getCartItems() {
    this.cartItemService.findAll().subscribe(data => {
      this.cartItems = data;

      this.getTotal(this.cartItems);
    })
  }

  goToShoppingCartList(): void {
    this.router.navigate(['/shopping-cart']);
  }

  getTotal(cartItems: CartItem[]): void {
    cartItems.forEach(element => {
      if (element.quantity === undefined || element.product?.price === undefined) {
        this.total += 0;
      } else {
        this.total += (element.quantity * element.product?.price);
      }
    });

    // return this.total;
  }

}
