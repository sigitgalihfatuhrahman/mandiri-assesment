import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee} from '../../model/Employee';
import { HttpProviderService } from '../../Service/http-provider.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.scss']
})
export class ViewEmployeeComponent implements OnInit {
   
  employees: any
  constructor(
    private employeeService: HttpProviderService,
    private router: Router,
  ) { }
 
  ngOnInit() {
    this.reloadData();
  }
 
  addEmployee() {
    this.router.navigate(['AddEmployee']);
  }

  reloadData(): void {
    this.employeeService.getAllEmployee()
      .subscribe((response) => {
        this.employees = response.data;
        console.log(response)
      });
  }
 
  employeeDetails(id: number) {
    this.router.navigate(['details', id]);
  }
 
  deleteEmployee(id: number) {
    this.employeeService.deleteEmployeeById(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
 
  updateEmployee(id: number) {
    this.router.navigate(['update', id]);
  }
}
