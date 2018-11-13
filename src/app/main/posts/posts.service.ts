import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  backendUrl = 'https://ricebook-yh.herokuapp.com/';
  constructor(private http: HttpClient) {}

  getPosts(): Observable<any> {
    return this.http.get<any>(this.backendUrl + 'articles', {withCredentials: true});
  }

  postPost(text: String): Observable<any> {
    return this.http.post<any>(this.backendUrl + 'article', {text: text}, {withCredentials: true});
  }

  comment(text: String, id: String): Observable<any> {
    return this.http.put<any>(this.backendUrl + 'articles/' + id, {text: text, commentId: '-1'}, {withCredentials: true});
  }
}
