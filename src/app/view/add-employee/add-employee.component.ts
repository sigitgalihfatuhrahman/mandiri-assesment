import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/Employee';
import { GroupValueUtils } from '../../utils/GroupValueEnums';
import { HttpProviderService } from '../../Service/http-provider.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  employee: Employee = new Employee();
  submitted: boolean = false;
 
  groups : Groups[] = [
    { 
        id:"1",
        name:"IT HELPDESK",
        value:"it_hd"
    },
    { 
        id:"2",
        name:"IT INFRA",
        value:"it_infrastructur"
    },
    { 
        id:"3",
        name:"IT DEVOPS",
        value:"it_devpos"
    },
    { 
        id:"4",
        name:"IT DIGITAL",
        value:"it_digital"
    },
    { 
        id:"5",
        name:"IT DEVELOPER",
        value:"it_developer"
    },
    { 
        id:"6",
        name:"IT QA",
        value:"it_quality_control"
    },
    { 
        id:"7",
        name:"IT LANDING APPLICATION",
        value:"it_landing_apps"
    },
    { 
        id:"8",
        name:"IT L1",
        value:"it_l1"
    },
    { 
        id:"9",
        name:"IT NETWORK SECURITY",
        value:"it_net_sec"
    },
    { 
        id:"10",
        name:"IT PRODUCT DESIGN",
        value:"it_prod_desg"
    }
]
  constructor(
    private employeeService: HttpProviderService,
    private router: Router,
    // private groups: GroupValueUtils,
  ) { }
 
  ngOnInit() {
    console.log(JSON.stringify(this.groups));
    // this.group
  }


 
  save() {
    this.employeeService.saveEmployee(this.employee)
      .subscribe(data => console.log(data), error => console.log(error));
    this.employee = new Employee();
    this.gotoList();
  }
 
  gotoList() {
    this.router.navigate(['/employees']);
  }


  addEmployeeForm: employeeForm = new employeeForm();
  
  onOptionsSelected(param:any){
    console.log(param)
  }

  AddEmployee(isValid: any) {
    this.submitted = true;
    if (isValid) {
      this.employeeService.saveEmployee(this.addEmployeeForm).subscribe(async data => {
        if (data != null && data.data != null) {
          if (data != null && data.data != null) {
            var resultData = data.data;
            if (resultData != null) {
              this.router.navigate(['/employees']);
              setTimeout(() => {
                this.router.navigate(['/employees']);
              }, 500);
            }
          }
        }
      },
        async error => {
          alert(error.message);
          setTimeout(() => {
            this.router.navigate(['/employees']);
          }, 500);
        });
    }
  }
}

export class employeeForm {
    userName: string = "";
    firstName: string = "";
    lastName: string = "";
    email: string = "";
    birthDay: string = "";
    status: string = "";
    groupName: string = "";
    description: string = "";
    basicSalary: string = "";
    password: string = "";
}

interface Groups {
  id: string;
  name: string;
  value: string;
}



// export class employeeForm {
//   UserName: string = "";
//   LastName: string = "";
//   Email: string = "";
//   Address: string = "";
//   Phone: string = "";
// }