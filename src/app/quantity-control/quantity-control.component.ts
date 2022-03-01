import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { faMinusCircle, faPlusCircle} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-quantity-control',
  templateUrl: './quantity-control.component.html',
  styleUrls: ['./quantity-control.component.css']
})
export class QuantityControlComponent implements OnInit {
  faPlusCircle = faPlusCircle;
  faMinusCircle = faMinusCircle;

  initialNum: number;

  constructor() {
    this.initialNum = 1;
  }

  ngOnInit(): void {}

  increment() {
    this.initialNum += 1;
  }

  decrement() {
    this.initialNum -= 1;
  }

}
