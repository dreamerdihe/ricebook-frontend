import { Injectable, OnInit } from '@angular/core';
import { User } from '../user';
import { Follower } from '../main/follower';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FollowingService } from '../main/following/following.service';
import { PostsService } from '../main/posts/posts.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  configUrl = '../../../assets/profile.json';
  loginUrl = 'http://localhost:3000/login';
  isLogin = false;
  constructor(private http: HttpClient, private followingService: FollowingService, private postsService: PostsService) {}

  getProfile(): Observable<User> {
    return this.http.get<User>(this.configUrl);
  }

  getFollower(accountName: string) {
    this.followingService.getFollower(accountName).subscribe((followings) => {
      const fols = [];
      for (const following of followings) {
        fols.push(new Follower(following['portrait'], following['accountName'],
                                          following['headline'], following['displayName']));
      }
      localStorage.setItem('currentFollowers', JSON.stringify(fols));
    });
  }

  login(username: string, password: string): Observable<boolean> {
    return this.http.post<boolean>(this.loginUrl, {username: username, password: password})
            .pipe(map(res => {
              if (res) {
                localStorage.setItem('currentUser', JSON.stringify(res['user']));
                this.getFollower(username);
                return true;
              } else {
                return false;
              }
            }));
  }

  search(username: string): Promise<Follower> {
    return fetch(this.configUrl)
    .then((res) => res.json())
    .then(data => {
      for (let i = 0; i < data.length; i ++) {
        if (username === data[i]['accountName']) {
          return new Follower(data[i]['portrait'], data[i]['accountName'], data[i]['headline'], data[i]['displayName']);
        }
      }
      return undefined;
    });
  }
}
