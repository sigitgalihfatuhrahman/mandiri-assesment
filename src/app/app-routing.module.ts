import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './view/add-employee/add-employee.component';
import { EditEmployeeComponent } from './view/edit-employee/edit-employee.component';
import { HomeComponent } from './view/home/home.component';
import { ViewEmployeeComponent } from './view/view-employee/view-employee.component';

const routes: Routes = [
  { path: '', redirectTo: 'employees', pathMatch: 'full'},
  { path: 'employees', component: ViewEmployeeComponent },
  { path: 'AddEmployee', component: AddEmployeeComponent },
  { path: 'EditEmployee/:employeeId', component: EditEmployeeComponent } 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
