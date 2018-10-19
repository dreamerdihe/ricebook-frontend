import { Component, OnInit, Output } from '@angular/core';
import { User } from '../../user';
import { Router } from '@angular/router';
import { ProfileService } from '../../profile/profile.service';
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
  password1Text: string;
  password2Text: string;
  birthRestrict: Date;

  constructor(private router: Router, private profileService: ProfileService) {}

  ngOnInit() {
  }

  onSubmit(valid) {
    if (valid) {
      // this.register(this.accountNameText, this.emailText, this.phoneNumberText,
      //               this.dateOfBirthText, this.zipcodeText, this.password2Text, this.displayNameText);
      alert('registration success');
        // this.router.navigate(['/main']);
    }
  }

  // register(accountName, email, phoneNumber, dateOfBirth,
  //          zipcode, password, displayName) {
  //           this.profileService.register(new User(accountName, email, phoneNumber, dateOfBirth,
  //           zipcode, password, displayName));
  // }
}
