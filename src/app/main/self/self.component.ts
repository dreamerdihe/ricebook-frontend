import { Component, OnInit } from '@angular/core';
import { SelfService } from './self.service';

@Component({
  selector: 'app-self',
  templateUrl: './self.component.html',
  styleUrls: ['./self.component.css']
})
export class SelfComponent implements OnInit {
  headline: string;
  headlineText: String;
  username: String;
  avatar = '';
  constructor(private selfService: SelfService) { }

  ngOnInit() {
    this.selfService.getHeadline().subscribe((res) => {
      this.username = res.username;
      this.headline = res.headline;
    });
    this.selfService.getAvatar().subscribe((res) => {
      if (res.avatar === '') {
        this.avatar = 'https://www.kodefork.com/static/users/images/user.png';
      } else {
        this.avatar = res.avatar;
      }
    });
  }

  updateHeadline(valid) {
    if (valid) {
      this.selfService.updateHeadline(this.headlineText).subscribe((res) => {
        this.headline = res.headline;
      });
      this.headlineText = undefined;
    }
  }

}
