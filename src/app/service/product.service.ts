import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IProductList } from "../model/product";

const URL = 'assets/product.json';

@Injectable()

export class ProductService {

 constructor(private http: HttpClient){}

 public getProducts(): Observable<IProductList>{
     return this.http.get<IProductList>(URL);
 } 
}