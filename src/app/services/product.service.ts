import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productUrl: string;

  constructor(private http: HttpClient) {
    this.productUrl = 'http://localhost:9092/api/products/'
  }

  public findAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productUrl);
  }
}
