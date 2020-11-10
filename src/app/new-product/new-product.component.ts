import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  productName:any
  productDescription:any
  productImage:any
  productPrice:any
  product:Product

  constructor(public productService:ProductService) { }

  ngOnInit(): void {
  }

  save(){
    this.product = new Product(this.productName,this.productPrice,this.productDescription,this.productImage)
    console.log(this.product);
    this.productService.saveProduct(this.product)
  }

}
