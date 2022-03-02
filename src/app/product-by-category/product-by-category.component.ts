import { QuantityControlComponent } from './../quantity-control/quantity-control.component';
import { CategoryService } from './../services/category.service';
import { ActivatedRoute } from '@angular/router';
import { CartItemService } from './../services/cart-item.service';
import { CartItem } from './../models/cart-item.model';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-by-category',
  templateUrl: './product-by-category.component.html',
  styleUrls: ['./product-by-category.component.css']
})
export class ProductByCategoryComponent implements OnInit {
  @Input('number') quantity: number;
  categoryName: string = "";
  products: Product[] = [];
  cartItem: CartItem;

  constructor(private categoryService: CategoryService, private cartItemService: CartItemService, private route: ActivatedRoute) {
    this.cartItem = new CartItem ();
    this.quantity = 1;
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
      "quantity": this.quantity,
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
