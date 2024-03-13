import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment.development";
import {Employee} from "./employee";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
private apiServiceUrl=environment.apiUrl;
  constructor(private http:HttpClient) {}
  public addEmployee(employee: Employee):Observable<Employee>{
    return this.http.put<Employee>(`${this.apiServiceUrl}/employee/add`, employee);
  }
}
