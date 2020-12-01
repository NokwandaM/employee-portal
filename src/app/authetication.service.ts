import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class AutheticationService {
  userInfo:User 

  constructor( private db: AngularFirestore) { }

  signUpUser(user){
    var database = firebase.database();
      console.log(user);
      
      let message = ""
    
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password).catch((error) =>{
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      message = errorMessage
      console.log(errorMessage);

    }).then( results =>{
      console.log(results);
      if(results){
        message = "successfully registered"
        firebase.database().ref('users/' + results.user.uid).set({
          name: user.name,
          email: user.email,
          age : user.age,
          phonenumber: user.phonenumber
        });
        console.log(message);
      
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
        localStorage.setItem('userID', user.user.uid);
        console.log(localStorage.getItem('userID'));
        console.log(message);
      }else{
        console.log(message);
      }
      
      return user.user.email
    });
   
  }

  removingUser(){}

  forgotPassword(){

  }

  logout(){
    firebase.auth().signOut().then(()  =>{
      // Sign-out successful.
      console.log("Sign-out successful.");
      
    }).catch(function(error) {
      console.log(error);
      
    });
  }

  getCurrentUser(){
   
    firebase.auth().onAuthStateChanged((user) =>{
      if (user) {
        var userId = user.uid;
       firebase.database().ref('/users/' + userId).once('value').then( userProfile =>{
          this.userInfo = new User(userProfile.val().name, userProfile.val().age, userProfile.val().phonenumber,userProfile.val().email,"" , userId )
          console.log(this.userInfo);
          // return userInfo
        })
      } else {
        console.log("user not logged in");
        
      }
    });

    
    
  }



}
