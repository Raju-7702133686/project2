import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { student } from '../models/student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient: HttpClient) { }
  createStudent(data: student):Observable<any>{
    return this.httpClient.post("https://62b9299dff109cd1dc8ca34f.mockapi.io/students",data);
  }
  getStudents():Observable<any>{
    return this.httpClient.get("https://62b9299dff109cd1dc8ca34f.mockapi.io/students");

  }
  getPaginatedStudents(limit: any, page: any){
    return this.httpClient.get("https://62b9299dff109cd1dc8ca34f.mockapi.io/students?limit"+limit+"&page"+page);
  }
  getSortedStudents(column: any, order:any):Observable<any>{
    return this.httpClient.get("https://62b9299dff109cd1dc8ca34f.mockapi.io/students?sortBy="+column+"&order="+order);
  }
  getFilterdStudents(term:any):Observable<any>{
    return this.httpClient.get("https://62b9299dff109cd1dc8ca34f.mockapi.io/students?filter="+term);
  }
  getStudent(id:any):Observable<any>{
    return this.httpClient.get("https://62b9299dff109cd1dc8ca34f.mockapi.io/students/"+id);
  }
  updateStudent(id:any, data:any):Observable<any>{
    return this.httpClient.put("https://62b9299dff109cd1dc8ca34f.mockapi.io/students/"+id,data);
  }
  deleteStudent(id:any):Observable<any>{
    return this.httpClient.delete("https://62b9299dff109cd1dc8ca34f.mockapi.io/students/"+id);
  }
}
