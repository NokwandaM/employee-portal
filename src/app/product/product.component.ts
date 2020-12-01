import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { SalesService } from '../sales.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: any
  cart: any
  constructor(public productService: ProductService, private sales: SalesService) { }

  ngOnInit(): void {
    this.getProductsList()
    this.sales.getCart()

  }

  getProductsList() {
    this.products = this.productService.getProducts()
  }

  addToCart(product) {
    // console.log(product);
    let id = product.id
    let userId = localStorage.getItem('userID')
    this.cart = {
      userID: userId,
      quantity: 1,
      product
    }
    console.log(this.cart);

    this.sales.addCart(this.cart)

  }

}
