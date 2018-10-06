import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Article } from './article';
@Injectable({
  providedIn: 'root'
})
export class PostsService {
  configUrl = '../../../assets/articles.json';
  constructor(private http: HttpClient) { }
  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.configUrl);
  }
}
