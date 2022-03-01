import { CategoryService } from './../services/category.service';
import { ActivatedRoute } from '@angular/router';
import { CartItemService } from './../services/cart-item.service';
import { CartItem } from './../models/cart-item.model';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  selector: 'app-product-by-category',
  templateUrl: './product-by-category.component.html',
  styleUrls: ['./product-by-category.component.css']
})
export class ProductByCategoryComponent implements OnInit {
  categoryName: string = "";
  products: Product[] = [];
  cartItem: CartItem;

  constructor(private categoryService: CategoryService, private cartItemService: CartItemService, private route: ActivatedRoute) {
    this.cartItem = new CartItem ();
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params);
      this.categoryName = params['name'];
      console.log(this.categoryName);

      this.categoryService.findProductsByCategory(this.categoryName).subscribe(data => {
      this.products = data;
    })

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
