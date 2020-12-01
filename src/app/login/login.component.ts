import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(public authenticateService:AutheticationService, public router:Router) { }

  ngOnInit(): void {
    this.authenticateService.getCurrentUser()
  }

  login(){
   this.authenticateService.signInUser(this.email, this.password);
   this.authenticateService.getCurrentUser()
   this.loggonInUser = this.authenticateService.userInfo
   this.router.navigateByUrl("/profile")
    
  }
}
