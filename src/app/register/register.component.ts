import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AutheticationService } from '../authetication.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  age
  name
  password
  email
  phonenumber
  user:User
  currentUser

  constructor(public authenticateService:AutheticationService, public router :Router) { }

  ngOnInit(): void {
  }

  signUp(){
    this.user = new User(this.name,this.age, this.phonenumber,this.email, this.password);
    this.authenticateService.signUpUser(this.user)
    this.authenticateService.getCurrentUser()
   
  }


}
