import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  backendUrl = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }

  getFollowing(): Observable<any> {
    return this.http.get<any>(this.backendUrl + 'following', {withCredentials: true});
  }

  getHeadlines(ids: String[]): Observable<any> {
    const idString = ids.join(',');
    return this.http.get<any>(this.backendUrl + 'headline/' + idString, {withCredentials: true});
  }

  getAvatar(ids: String[]): Observable<any> {
    const idString = ids.join(',');
    return this.http.get<any>(this.backendUrl + 'avatars/' + idString, {withCredentials: true});
  }

  deleteFollowing(id: String): Observable<any> {
    return this.http.delete(this.backendUrl + 'following/' + id, {withCredentials: true});
  }

  addFollowing(id: String): Observable<any> {
    return this.http.put(this.backendUrl + 'following/' + id, {withCredentials: true});
  }
}
