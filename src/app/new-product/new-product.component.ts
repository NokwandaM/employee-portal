import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CategotiesService } from '../categoties.service';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  productName: any
  productDescription: any
  productImage: any
  productPrice: any
  product: Product

  categoryControl
  categories = []
  category
  productForm: FormGroup

  constructor(public productService: ProductService, public categoryService: CategotiesService, private fb: FormBuilder) { 
   
   
    this.productForm = this.fb.group({
      categoryControl: [this.categories[1]],
      productName: new FormControl(''),
      productDescription: new FormControl(''),
      productImage: new FormControl(''),
      productPrice: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.categories = this.categoryService.getCategories()
  }

  save() {
    this.product = new Product(this.productName, this.productPrice, this.productDescription, this.productImage)
    console.log(this.product);
    // this.productService.saveProduct(this.product)
    console.warn(this.productForm.get("productImage").value);
  }

}
