import { CartItemService } from './../services/cart-item.service';
import { CartItem } from './../models/cart-item.model';
import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-product-by-category',
  templateUrl: './product-by-category.component.html',
  styleUrls: ['./product-by-category.component.css']
})
export class ProductByCategoryComponent implements OnInit {

  products: Product[] = [];
  cartItem: CartItem;

  constructor(private productService: ProductService, private cartItemService: CartItemService) {
    this.cartItem = new CartItem ();
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

}
