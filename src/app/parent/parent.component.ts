import { Component, OnInit } from '@angular/core';
import { IProduct } from '../model/product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  productsList: IProduct[] = [];
  constructor(private productService: ProductService) { }
  parentProductData = {} as IProduct;
  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.productsList = data.items;
    });
  }

  showDetails(product: IProduct) {
   this.parentProductData = product;
  }

}
