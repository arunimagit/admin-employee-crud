import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeserviceService } from '../employeeservice.service';
@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  employeeItem= {
    name:'',
    email :'',
    qualification:'',
  }
 
  
constructor(private router:Router,private employeeService:EmployeeserviceService) { }

  ngOnInit(): void {
    let employeeId = localStorage.getItem("editEmployeeId");
    this.employeeService.getEmployee(employeeId).subscribe((data:any)=>{
      this.employeeItem=JSON.parse(JSON.stringify(data));
  })
  }
  editEmployee()
  {    
    this.employeeService.editEmployee(this.employeeItem);   
    alert("Success");
    this.router.navigate(['employees']);
  }

}