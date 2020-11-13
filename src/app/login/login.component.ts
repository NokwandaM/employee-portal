import { Component, OnInit } from '@angular/core';
import { AutheticationService } from '../authetication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email
  password
  loggonInUser
  constructor(public authenticateService:AutheticationService) { }

  ngOnInit(): void {
  }

  login(){
   this.authenticateService.signInUser(this.email, this.password);
  
  }
}
