import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeserviceService } from '../employeeservice.service';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  pageTitle: string = 'Employee List';
  

  employees=[{
  
    name:'',
    email:'',
    qualification:''
    }]
  
  
  constructor(private router:Router,private employeeService: EmployeeserviceService){   
    
  }
  ngOnInit(): void{
    this.employeeService.getEmployees().subscribe((data:any)=>{
      this.employees=JSON.parse(JSON.stringify(data));
  })
  }
 newEmployee(employee:any)
 {
  localStorage.setItem("AddEmployeeId", employee._id.toString());
  this.router.navigate(['add']);
 }
  editEmployee(employee:any)
  {
    localStorage.setItem("editEmployeeId", employee._id.toString());
    this.router.navigate(['update']);

  }
  deleteEmployee(employee:any)
  {
    this.employeeService.deleteEmployee(employee._id)
      .subscribe((data:any) => {
        this.employees = this.employees.filter(e => e !== employee);
      })
  

  }
}
