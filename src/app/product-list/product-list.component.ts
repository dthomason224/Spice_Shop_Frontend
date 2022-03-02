import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from '../models/cart-item.model';
import { Product } from '../models/product';
import { CartItemService } from '../services/cart-item.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input('number') quantity: number;
  @Input() products: Product[] = [];
  cartItem: CartItem;

  constructor(private productService: ProductService, private cartItemService: CartItemService) {
    this.cartItem = new CartItem ();
    this.quantity = 1;
  }

  ngOnInit(): void {
    this.productService.findAll().subscribe(data => {
      this.products = data;
    })
  }

  addToCart(id: number | undefined) {
    this.cartItem = {
      "quantity": 1,
      "product": {
        "id": id
      }
    }

    this.cartItemService.create(this.cartItem).subscribe(data => {
      console.log(data);

    });
  }

  quantityChangeHandler(quantity: number) {
    this.quantity = quantity;
  }
}
