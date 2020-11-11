import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AutheticationService } from '../authetication.service';
import { User } from '../user';

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
  user:User
  constructor(public authenticateService:AutheticationService) { }

  ngOnInit(): void {
  }

  signUp(){
    this.user = new User(this.name,this.age, this.email, this.password);
    this.authenticateService.signUpUser(this.user)
  }


}
