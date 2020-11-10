import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  product: any = []
  constructor(private db: AngularFirestore) { }


  saveProduct(product) {

    this.db.collection("products").add(
      {
        productName: product.productName,
        productDescription: product.productDescription,
        productPrice: product.productPrice,
        productImage: product.productImage,
      }).then(results =>
      console.log("Successful")

    ).catch(error => {
      console.log(error);
    })
  }

  getProducts() {
    this.db.collection("products").snapshotChanges().subscribe(results => {
      results.forEach((doc) => {
        this.product.push(doc.payload.doc.data())
        this.product.map(prod => {
          prod['id'] = doc.payload.doc.id;
        })
        console.log(this.product);
      });
    });
    return this.product
  }
}
