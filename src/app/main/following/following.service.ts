import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { Follower } from '../follower';
import { User } from '../../user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FollowingService {
  configUrl = '../../../assets/followers.json';
  currentUser: User;
  private followingSource = new Subject<Follower>();
  followings = this.followingSource.asObservable();

  constructor(private http: HttpClient) {}

  getFollower(accountName: string): Observable<Follower[]> {
    return this.http.get<any>(this.configUrl, { withCredentials: true })
    .pipe(map(followingsArray => {
        for (const followings of followingsArray) {
          if (followings['accountName'] === accountName) {
            return followings['followings'];
          }
        }
      }));
  }
}
