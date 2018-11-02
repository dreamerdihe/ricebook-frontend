import { Component, OnInit, Output } from '@angular/core';
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
      alert('registration success');
    }
  }

}
