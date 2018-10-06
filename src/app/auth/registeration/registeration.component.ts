import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {
  accountNameText: string;
  displayNameText: string;
  emailText: string;
  phoneNumberText: string;
  dateOfBirthText: string;
  zipcodeText: string;
  user: User;
  password1Text: string;
  password2Text: string;
  birthRestrict: Date;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit(valid) {
    if (valid) {
      this.user = new User(this.accountNameText, this.emailText, this.phoneNumberText,
        this.dateOfBirthText, this.zipcodeText, this.displayNameText);
        this.router.navigate(['/main']);
    }
  }
}
