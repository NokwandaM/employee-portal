import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private db: AngularFirestore) { }

  addEmployee(employee) {
    let id = employee.id + 1 
    this.db.collection("employees").doc(id.toString()).set({
      id:id,
      name:employee.name,
      department:employee.department
    })
      .then(function () {
        console.log("Document successfully written!");
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });
  }

  getAllEmployees() {
    return this.db.collection("employees").valueChanges();
  }

  removeEmployee(id){
    let empId = id
   return this.db.collection("employees").doc(id.toString()).delete();
  }

  update(){
    
  }

   
    

}
