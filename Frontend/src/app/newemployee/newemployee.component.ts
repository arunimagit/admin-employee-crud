import { Component, OnInit } from '@angular/core';
import {IEmployee} from '../employeemodel';
import { EmployeeserviceService } from '../employeeservice.service';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-newemployee',
  templateUrl: './newemployee.component.html',
  styleUrls: ['./newemployee.component.css']
})
export class NewemployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeserviceService,private router: Router) { }
  employeeItem= {
    name:'',
    email:'',
    qualification:'',
    }
  // productItem: IProduct;
  ngOnInit() {
  }
  AddEmployee()
  {    
    this.employeeService.newEmployee(this.employeeItem);
    console.log("Called");    
    alert("Success");
    this.router.navigate(['employees']);
  }
}
