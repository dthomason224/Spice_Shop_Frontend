import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
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
