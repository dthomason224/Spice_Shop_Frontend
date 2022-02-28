import { CartItem } from '../models/cart-item.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartItemService {
  header = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private cartItemUrl: string;

  constructor(private http: HttpClient) {
    this.cartItemUrl = 'http://localhost:9092/api/cart-item/';
  }

  public findAll(): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(this.cartItemUrl);
  }

  public create(cartItem: CartItem): Observable<Object> {
    return this.http.post<CartItem>(this.cartItemUrl, cartItem, this.header);
  }

  public delete(id: number): Observable<{}> {
    return this.http.delete(`${this.cartItemUrl + id}`)
  }
}
