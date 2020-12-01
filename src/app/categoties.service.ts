import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class CategotiesService {

  constructor(private db: AngularFirestore) {
  }

  saveCategory(category) {
    console.log(category);

    this.db.collection("categories").add(
      {
        categoryName: category.categoryName
      }
    ).then(results => {
      console.log("Saved");
    }
    ).catch(error => {
      console.log(error);
    })
  }

  getCategories() {
    let categories = []

    this.db.collection("categories").snapshotChanges().subscribe(result => {
      console.log(result);
      result.forEach((doc) => {
        categories.push(doc.payload.doc.data())
        categories.map(cat => {
          cat['id'] = doc.payload.doc.id;
        })
        console.log(categories);
      });

    })
    return categories
  }

  getCat(){
    this.db.collection('categories', ref => ref.where('categoryName' , '==' , 'Ladies')).valueChanges().subscribe( val =>
      {
        console.log(val);
        
      })
  }

}
