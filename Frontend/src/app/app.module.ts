import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {EmployeeserviceService} from './employeeservice.service';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { NewemployeeComponent } from './newemployee/newemployee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    NewemployeeComponent,
    UpdateEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],

  
  providers: [EmployeeserviceService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
