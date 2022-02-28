import { CartItem } from '../models/cart-item.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartItemService {
  private cartItemUrl: string;

  constructor(private http: HttpClient) {
    this.cartItemUrl = 'http://localhost:9092/api/cart-item/';
  }

  public findAll(): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(this.cartItemUrl);
  }

  public create(data: any): Observable<any> {
    return this.http.post(this.cartItemUrl, data);
  }
}
