import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelfService {
  backendUrl = ' https://ricebook-yh.herokuapp.com/';
  constructor(private http: HttpClient) { }

  getHeadline(): Observable<any> {
    return this.http.get(this.backendUrl + 'headline', {withCredentials: true});
  }

  updateHeadline(headline: String): Observable<any> {
    return this.http.put(this.backendUrl + 'headline', {headline: headline}, {withCredentials: true});
  }

  getAvatar(): Observable<any> {
    return this.http.get(this.backendUrl + 'avatars', {withCredentials: true});
  }

}
