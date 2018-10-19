import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ProfileService } from './profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;
  displayNameText: string;
  emailText: string;
  phoneNumberText: string;
  zipcodeText: string;
  password1Text: string;
  password2Text: string;
  birthRestrict: Date;

  constructor(private profileService: ProfileService, private router: Router) {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    this.user = new User(user['accountName'], user['email'], user['phoneNumber'],
    user['dateOfBirth'], user['zipcode'], user['password'], user['displayName'], user['headline'], user['portrait']);
   }

  ngOnInit() { }

  onSubmit(valid) {
    if (valid) {
      if (this.displayNameText && this.displayNameText.length > 0) {
        this.user.displayName = this.displayNameText;
      }
      if (this.emailText && this.emailText.length > 0) {
        this.user.email = this.emailText;
      }
      if (this.phoneNumberText && this.phoneNumberText.length > 0) {
        this.user.phoneNumber = this.phoneNumberText;
      }
      if (this.zipcodeText && this.zipcodeText.length > 0) {
        this.user.zipcode = this.zipcodeText;
      }
      if (this.password2Text && this.password2Text.length > 0) {
        this.user.password = this.password2Text;
      }
      localStorage.setItem('currentUser', JSON.stringify(this.user));
    }

  }
}
