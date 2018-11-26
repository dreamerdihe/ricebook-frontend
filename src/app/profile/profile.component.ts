import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import { NavService } from '../nav/nav.service';

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
  thirdParty = false;
  github = false;
  githubAccount = String;

  displayNameText: string;
  emailText: string;
  phoneNumberText: string;
  zipcodeText: string;
  password1Text: string;
  password2Text: string;
  birthRestrict: Date;
  avatarNew;

  canLink: boolean;
  username: String;
  password: String;
  isLogin: boolean;
  isSubmit = false;

  constructor(private router: Router, private profileService: ProfileService, private navService: NavService) {
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

    this.profileService.getThirdParty().subscribe((res: any) => {
      const thirdParty = res.thirdParty;
      this.canLink = res.canLink;
      console.log(this.canLink);
      if (thirdParty === null || thirdParty.length === 0) {
        return;
      } else {
        this.thirdParty = true;
        for (const link of thirdParty) {
          if (link.party === 'github') {
            this.github = true;
            this.githubAccount = link.username;
          }
        }
        return;
      }
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

  handleImageChange($event: any) {
    if (!$event.target.files) {
      return;
    }

    if ($event.target.files.length > 0) {
      const img = $event.target.files[0];
      this.avatarNew = img;
      const name = $event.target.files[0].name;
      document.getElementById('fileName').textContent = name;
      return;
    }
  }

  updateImage() {
    const avatar = new FormData();
    avatar.append('image', this.avatarNew);
    this.profileService.updateAvatar(avatar).subscribe((res) => {
      this.userAvatar = res.avatar;
    });
  }

  linkSubmit(valid) {
    console.log('here');
    if (valid) {
      this.link(this.username, this.password);
    }
    this.isSubmit = true;
  }

  link(username: String, password: String) {
    return this.profileService.link(username, password).subscribe((res) => {
      this.isLogin = res;
      setTimeout(() => {
        document.getElementById('close').click();
        this.router.navigate(['/landing']);
        }, 500);

    },
    err => {
      if (err.status === 403 || 404) {
        this.isLogin = false;
      }
    });
  }
}
