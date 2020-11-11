import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class AutheticationService {


  constructor( private db: AngularFirestore) { }

  signUpUser(user){
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password).catch((error) =>{
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    }).then( results =>{
      console.log("successfull");
      
    });
  }

  signInUser(email,password){
    firebase.auth().signInWithEmailAndPassword(email, password).catch((error) =>{
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    }).then(result =>{
      console.log("success");
      
    });
  }

  removingUser(){}

  forgotPassword(){}

}
