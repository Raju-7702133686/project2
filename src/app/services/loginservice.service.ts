import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor( private httpClient: HttpClient) { }

  dologin(payload:any[]): Observable<any[]>{
    return this.httpClient.post<any[]>("https://reqres.in/api/login",payload)
  }
}
