import { Injectable } from '@angular/core';
import { Follower } from '../main/follower';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  backendUrl = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}

  getEmail(): Observable<any> {
    return this.http.get<any>(this.backendUrl + 'email', {withCredentials: true});
  }

  getPhoneNumber(): Observable<any> {
    return this.http.get<any>(this.backendUrl + 'phone', {withCredentials: true});
  }

  getDob(): Observable<any> {
    return this.http.get<any>(this.backendUrl + 'dob', {withCredentials: true});
  }

  getZipcode(): Observable<any> {
    return this.http.get<any>(this.backendUrl + 'zipcode', {withCredentials: true});
  }

  updateEmail(email: String): Observable<any> {
    return this.http.put<any>(this.backendUrl + 'email', {email: email}, {withCredentials: true});
  }

  updatePhone(phone: String): Observable<any> {
    return this.http.put<any>(this.backendUrl + 'phone', {phone: phone}, {withCredentials: true});
  }

  updateZipcode(zipcode: String): Observable<any> {
    return this.http.put<any>(this.backendUrl + 'zipcode', {zipcode: zipcode}, {withCredentials: true});
  }

  updatePassword(password: String): Observable<any> {
    return this.http.put<any>(this.backendUrl + 'password', {password: password}, {withCredentials: true});
  }

}
