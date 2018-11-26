import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  backendUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(this.backendUrl + 'login', {username: username, password: password}, { withCredentials: true })
    .pipe(map(res => {
      if (res) {
        return true;
      } else {
        return false;
      }
    })
    );
  }

  github(): Observable<any> {
    return this.http.get<any>(this.backendUrl + 'login/github', {withCredentials: true});
  }
}
