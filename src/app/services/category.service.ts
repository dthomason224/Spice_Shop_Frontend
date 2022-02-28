import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categoryUrl: string;

  constructor(private http: HttpClient) {
    this.categoryUrl = 'http://localhost:9092/api/categories/';
  }

  public findAll(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoryUrl);
  }
}
