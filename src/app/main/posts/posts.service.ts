import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  backendUrl = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}

  getPosts(offset: Number): Observable<any> {
    return this.http.get<any>(this.backendUrl + 'articles/' + offset, {withCredentials: true});
  }

  postPost(post: FormData): Observable<any> {
    return this.http.post<any>(this.backendUrl + 'articles', post, {withCredentials: true});
  }

  comment(text: String, id: String): Observable<any> {
    return this.http.put<any>(this.backendUrl + 'articles/' + id, {text: text, commentId: '-1'}, {withCredentials: true});
  }

  editComment(text: String, postId: String, commentId: String): Observable<any> {
    return this.http.put<any>(this.backendUrl + 'articles/' + postId, {text: text, commentId: commentId}, {withCredentials: true});
  }

  editPost(text: String, postId: String): Observable<any> {
    return this.http.put<any>(this.backendUrl + 'articles/' + postId, {text: text}, {withCredentials: true});
  }
}
