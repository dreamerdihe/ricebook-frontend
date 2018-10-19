import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from './article';
import { Follower } from '../follower';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PostsService {
  configUrl = '../../../assets/articles.json';
  constructor(private http: HttpClient) {}

  getArticles(followings: Follower[]): Observable<Article[]> {
    return this.http.get<Article[]>(this.configUrl)
    .pipe(map(articles => {
      const res = [];
      for (const article of articles) {
        for (const following of followings) {
          if (article.author === following.accountName || article.author === following.displayName) {
            res.push(article);
          }
        }
      }
      return res;
    })
    );
  }
}
