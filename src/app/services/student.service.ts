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
}
