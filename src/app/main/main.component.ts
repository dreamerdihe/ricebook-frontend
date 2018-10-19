import { Component, OnInit } from '@angular/core';
import { Follower } from './follower';
import { User } from '../user';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  followings: Follower[] = [];
  currentUser: User;
  constructor() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    this.currentUser = new User(user['accountName'], user['email'], user['phoneNumber'],
    user['dateOfBirth'], user['zipcode'], user['password'], user['displayName'], user['headline'], user['portrait']);
  }

  ngOnInit() {
    const fols = JSON.parse(localStorage.getItem('currentFollowers'));
    for (const fol of fols) {
      this.followings.push(new Follower(fol['portrait'], fol['accountName'],
      fol['headline'], fol['displayName']));
    }
  }

  addFriend(newFriend: Follower) {
    this.followings.push(newFriend);
    localStorage.removeItem('currentFollowers');
    localStorage.setItem('currentFollowers', JSON.stringify(this.followings));
  }

  removeFriend(deletFriend: Follower) {
    const index = this.followings.indexOf(deletFriend);
    this.followings.splice(index, 1);
    localStorage.removeItem('currentFollowers');
    localStorage.setItem('currentFollowers', JSON.stringify(this.followings));
  }
}
