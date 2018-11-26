import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterationService {
  backendUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  register(username: String, email: String, phone: String,
          dob: String, zipcode: String, password: String): Observable<any> {
    return this.http.post<any>(this.backendUrl + 'register',
    {
      username: username,
      password: password,
      email: email,
      phone: phone,
      dob: dob,
      zipcode: zipcode
    });
  }
}
