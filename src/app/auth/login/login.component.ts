import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';


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

  constructor(private router: Router, private loginService: LoginService) {}

  ngOnInit() {}

  onSubmit(valid) {
    if (valid) {
      this.login(this.username, this.password);
    }
    this.isSubmit = true;
  }

  login(username: string, password: string) {
    return this.loginService.login(username, password)
    .subscribe((isLogin: boolean) => {
      if (isLogin) {
        this.isLogin = true;
        setTimeout(() => {
          this.router.navigate(['/main']);
          }, 500);
      }
    },
    err => {
      if (err.status === 403 || 404) {
        this.isLogin = false;
      }
    });
  }
}
