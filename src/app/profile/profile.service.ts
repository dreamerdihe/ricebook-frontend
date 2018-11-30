import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ObserveOnSubscriber } from 'rxjs/internal/operators/observeOn';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  backendUrl = ' https://ricebook-yh.herokuapp.com/';
  constructor(private http: HttpClient) {}

  link(username: String, password: String) {
    return this.http.post<any>(this.backendUrl + 'merge', {username: username, password: password}, {withCredentials: true})
    .pipe(map(res => {
      if (res) {
        return true;
      } else {
        return false;
      }
    })
    );
  }

  unlinkGithub(): Observable<any> {
    return this.http.put<any>(this.backendUrl + 'unlink/gitub', {}, {withCredentials: true});
  }

  getAvatar(): Observable<any> {
    return this.http.get<any>(this.backendUrl + 'avatars', {withCredentials: true});
  }

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

  updateAvatar(avatar: FormData) {
    return this.http.put<any>(this.backendUrl + 'avatar', avatar, {withCredentials: true});
  }

  getThirdParty(): Observable<any> {
    return this.http.get<any>(this.backendUrl + 'thirdParty', {withCredentials: true});
  }
}
