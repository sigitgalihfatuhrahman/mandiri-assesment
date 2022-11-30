import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseApiUrl } from '../config/BaseUrl'
import { WebApiService } from './web-api.service';

  var apiUrl = baseApiUrl.urlEnv;
  

  var httpLink = {
    getAllEmployee: apiUrl + "/api/users/view/user-list",
    deleteEmployeeById: apiUrl + "/api/user/deleteEmployeeById",
    getEmployeeDetailById: apiUrl + "/api/user/getEmployeeDetailById",
    saveEmployee: apiUrl + "/api/users/create"
  }

@Injectable({
    providedIn: 'root'
})
export class HttpProviderService {

  constructor(private webApiService: HttpClient) { }


  public getAllEmployee(): Observable<any> {
    return this.webApiService.get(httpLink.getAllEmployee);
  }
  public deleteEmployeeById(model: any): Observable<any> {
    return this.webApiService.post(httpLink.deleteEmployeeById + '?employeeId=' + model, "");
  }
  public getEmployeeDetailById(model: any): Observable<any> {
    return this.webApiService.get(httpLink.getEmployeeDetailById + '?employeeId=' + model);
  }
  public saveEmployee(model: any): Observable<any> {
    return this.webApiService.post(httpLink.saveEmployee, model);
  }  
}
