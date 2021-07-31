import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees/employees.component'
import { NewemployeeComponent } from './newemployee/newemployee.component';

import { UpdateEmployeeComponent } from './update-employee/update-employee.component';


const routes: Routes = [{
  path: '',
  redirectTo: '/employees',
  pathMatch: 'full'
},
{
  path: 'employees',
  component: EmployeesComponent
},


{path:'add', 

component: NewemployeeComponent,
},
{
path:'update',
component:UpdateEmployeeComponent
}
];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations:[]
})
export class AppRoutingModule { }
