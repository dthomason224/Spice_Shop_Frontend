import { CategoryService } from './../services/category.service';
import { Category } from './../models/category.model';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  faShoppingCart = faShoppingCart;
  faSearch = faSearch;

  categories: Category[] = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.findAll().subscribe(data => {
      this.categories = data;
    })
  }

  navigateToProductByCategory(name: string | undefined) {
    return this.categoryService.findProductsByCategory(name).subscribe(data => {
      console.log(data);

    });
  }

}
