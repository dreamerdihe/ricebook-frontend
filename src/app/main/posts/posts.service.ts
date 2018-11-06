import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  backendUrl = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}

  getPosts(): Observable<any> {
    return this.http.get<any>(this.backendUrl + 'articles', {withCredentials: true});
  }

  postPost(text: String): Observable<any> {
    return this.http.post<any>(this.backendUrl + 'article', {text: text}, {withCredentials: true});
  }
}
