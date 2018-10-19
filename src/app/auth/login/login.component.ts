import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../../profile/profile.service';

import { User } from '../../user';
import { async } from 'q';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  isLogin: boolean;
  isSubmit = false;
  regisertedUsers = {};
  user: User;

  constructor(private router: Router, private profileService: ProfileService) {}

  ngOnInit() {}

  onSubmit(valid) {
    if (valid) {
      this.login(this.username, this.password);
    }
    this.isSubmit = true;
  }

  login(username: string, password: string): Promise<boolean> {
    return this.profileService.login(username, password)
    .then((isLogin) => {
      if (isLogin) {
        this.isLogin = true;
        setTimeout(() => {
          this.router.navigate(['/main']);
          }, 500);
      } else  {
        this.isLogin = false;
      }
      return this.isLogin;
    });
  }
}
