import { Component, OnInit } from '@angular/core';
import { User } from '../../user';

@Component({
  selector: 'app-self',
  templateUrl: './self.component.html',
  styleUrls: ['./self.component.css']
})
export class SelfComponent implements OnInit {
  headline: string;
  currentUser: User;
  constructor() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    this.currentUser = new User(user['accountName'], user['email'], user['phoneNumber'],
    user['dateOfBirth'], user['zipcode'], user['password'], user['displayName'], user['headline'], user['portrait']);
  }

  ngOnInit() {
  }

  addHeadline(valid) {
    if (valid) {
      this.currentUser.headline = this.headline;
      localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
    }
  }

  logout() {
    localStorage.clear();
  }
}
