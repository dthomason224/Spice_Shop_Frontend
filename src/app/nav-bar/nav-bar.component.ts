import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  faShoppingCart = faShoppingCart;

  // @ViewChild('nav') navRef: ElementRef;
  // @ViewChild('navToggle') navToggle: ElementRef;

  constructor() { }

  ngOnInit(): void {
    // const nav = this.navRef.nativeElement;

  }

  open() {
    // na
  }

}
