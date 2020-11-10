import { Component } from '@angular/core';
import { Observable } from 'rxjs';
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
  constructor(public employeeService:EmployeeService){
  }

  ngOnInit(){
    this.getEmployees()

      
    
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


