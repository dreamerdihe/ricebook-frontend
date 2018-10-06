import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Follower } from '../follower';

@Injectable({
  providedIn: 'root'
})
export class FollowingService {
  configUrl = '../../../assets/followers.json';
  constructor(private http: HttpClient) { }
  getFollower(): Observable<Follower[]> {
    return this.http.get<Follower[]>(this.configUrl);
  }
}
