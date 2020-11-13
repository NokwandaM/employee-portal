import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class AutheticationService {


  constructor( private db: AngularFirestore) { }

  signUpUser(user){
      let message = ""
    
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password).catch((error) =>{
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      message = errorMessage
      console.log(errorMessage);
    }).then( user =>{
      console.log(user);
      if(user){
        message = "successfully registered"
      }else{
        
      }
      
    });
  }

  signInUser(email,password){
    let user :any
    let message = ""

    firebase.auth().signInWithEmailAndPassword(email, password).catch((error) =>{
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
      message = errorMessage
      
      // ...
    }).then(result =>{
      user = result
      console.log(result);

      if(user){
        message = user.user.email + " has successfully logged in"
        console.log(message);
      }else{
        
        console.log(message);
      }
      
      return user.user.email
    });
   
  }

  removingUser(){}

  forgotPassword(){}

  logout(){
    firebase.auth().signOut().then(()  =>{
      // Sign-out successful.
      console.log("Sign-out successful.");
      
    }).catch(function(error) {
      console.log(error);
      
    });
  }
}
