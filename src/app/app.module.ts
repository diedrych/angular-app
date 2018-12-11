import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MaterialModule} from "./material/material.module";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './shared/table/table.component';
import { EmployeesComponent } from './shared/employees/employees.component';
import { EmployeeComponent } from './shared/employees/employee/employee.component';
import {EmployeeService} from './shared/employee.service';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    EmployeesComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
