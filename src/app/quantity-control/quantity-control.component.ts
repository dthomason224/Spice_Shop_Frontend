import { Component, OnInit, ViewChild, ElementRef, Output } from '@angular/core';
import { faMinusCircle, faPlusCircle} from "@fortawesome/free-solid-svg-icons";
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quantity-control',
  templateUrl: './quantity-control.component.html',
  styleUrls: ['./quantity-control.component.css']
})
export class QuantityControlComponent implements OnInit {
  faPlusCircle = faPlusCircle;
  faMinusCircle = faMinusCircle;

  initialNum: number;
  @Output() numChanged: EventEmitter<number> = new EventEmitter();

  constructor() {
    this.initialNum = 1;
  }

  ngOnInit(): void {}

  increment() {
    this.initialNum += 1;
    this.numChanged.emit(this.initialNum);
  }

  decrement() {
    this.initialNum -= 1;
    this.numChanged.emit(this.initialNum);
  }

}
