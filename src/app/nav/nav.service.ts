import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  backendUrl = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }

  logout() {
    return this.http.put<any>(this.backendUrl + 'logout/', {}, { withCredentials: true });
  }
}
