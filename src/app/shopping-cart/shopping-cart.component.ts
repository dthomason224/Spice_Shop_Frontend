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

  constructor(private cartItemService: CartItemService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCartItems();
  }

  deleteCartItem(id: number) {
    this.cartItemService.delete(id).subscribe(data => {
      console.log(data);
      this.getCartItems();

    })
  }

  getCartItems() {
    this.cartItemService.findAll().subscribe(data => {
      this.cartItems = data;
    })
  }

  goToShoppingCartList(): void {
    this.router.navigate(['/shopping-cart']);
  }

}
