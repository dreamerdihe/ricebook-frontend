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
  userAvatar: String;
  userEmail: String;
  userAccountName: String;
  userPhoneNumber: String;
  userDob: String;
  userZipcode: String;

  displayNameText: string;
  emailText: string;
  phoneNumberText: string;
  zipcodeText: string;
  password1Text: string;
  password2Text: string;
  birthRestrict: Date;

  constructor(private profileService: ProfileService) {
   }

  ngOnInit() {
    this.profileService.getEmail().subscribe((res: any) => {
      this.userAccountName = res.username;
      this.userEmail = res.email;
    });

    this.profileService.getAvatar().subscribe((res: any) => {
      if (res.avatar === '') {
        this.userAvatar = 'https://www.kodefork.com/static/users/images/user.png';
      } else {
        this.userAvatar = res.avatar;
      }
    });

    this.profileService.getPhoneNumber().subscribe((res: any) => {
      this.userPhoneNumber = res.phone;
    });

    this.profileService.getDob().subscribe((res: any) => {
      this.userDob = new Date(res.dob).toLocaleDateString();
    });

    this.profileService.getZipcode().subscribe((res: any) => {
      this.userZipcode = res.zipcode;
    });
  }

  onSubmit(valid) {
    if (valid) {
      // if (this.displayNameText && this.displayNameText.length > 0) {
      //   this.user.displayName = this.displayNameText;
      // }
      if (this.emailText && this.emailText.length > 0) {
        this.profileService.updateEmail(this.emailText).subscribe((res: any) => {
          this.userEmail = res.email;
        });
      }
      if (this.phoneNumberText && this.phoneNumberText.length > 0) {
        this.profileService.updatePhone(this.phoneNumberText).subscribe((res: any) => {
          this.userPhoneNumber = res.phone;
        });
      }
      if (this.zipcodeText && this.zipcodeText.length > 0) {
        this.profileService.updateZipcode(this.zipcodeText).subscribe((res: any) => {
          this.userZipcode = res.zipcode;
        });
      }
      if (this.password2Text && this.password2Text.length > 0) {
        this.profileService.updatePassword(this.password2Text).subscribe((res) => {
        });
      }
    }
  }
}
