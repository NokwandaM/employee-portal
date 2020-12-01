import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AutheticationService } from './authetication.service';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'employees';
  employees: any
  newEmo = [{id:3,name:"Nokwanda",department:"Hr"}]
  loggedUser 
  constructor(public employeeService:EmployeeService, public authService:AutheticationService){
  }

  ngOnInit(){
    this.getEmployees()
    this.authService.getCurrentUser()
    this.loggedUser = this.authService.userInfo
    console.log(this.loggedUser );
    
      
    
  }
  addEmployee(){
    console.log("dd");
    // let employee :[]
    this.employeeService.addEmployee(this.newEmo[0]);
    // this.getEmployees()
  }
  getEmployees(){
     this.employeeService.getAllEmployees().subscribe(data =>{
      this.employees = data
    })
  }
    
  removeEmployee(employee){
    console.log(employee.id);
    this.employeeService.removeEmployee(employee.id).then(results =>{
      console.log("deleted");
      this.getEmployees()
    })
  }
    
}


