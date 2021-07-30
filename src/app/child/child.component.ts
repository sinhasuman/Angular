import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../model/product';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() parentData = {} as IProduct;
  constructor() { }

  ngOnInit(): void {
  }

}
