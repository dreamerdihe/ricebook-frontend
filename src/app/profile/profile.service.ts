import { Injectable } from '@angular/core';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  configUrl = '../../../assets/profile.json';
  constructor(private http: HttpClient) { }
  getProfile(): Observable<User> {
    return this.http.get<User>(this.configUrl);
  }
}
