import { Component, OnInit } from '@angular/core';
import { Follower } from './follower';
import { MainService } from './main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  followings: Follower[] = [];
  username: String;
  constructor(private mainService: MainService) {
  }

  ngOnInit() {
    this.mainService.getFollowing().subscribe((res) => {
      this.username = res.username;
      const ids = res.following;
      this.getFollowing(ids);
    });
  }

  addFriend(newFriend: Follower) {
    this.mainService.addFollowing(newFriend.id).subscribe((res) => {
      const ids = res.following;
      this.getFollowing(ids);
    });
  }

  removeFriend(deletFriend: Follower) {
    this.mainService.deleteFollowing(deletFriend.id).subscribe((res) => {
      const ids = res.following;
      this.getFollowing(ids);
    });
  }

  getFollowing(ids: String[]) {
    this.followings = [];
    if (ids.length > 0) {
      this.mainService.getHeadlines(ids).subscribe((resHealines) => {
        this.mainService.getAvatar(ids).subscribe((resAvatars) => {
          console.log(resHealines);
          console.log(resAvatars);
          console.log(ids);
          const headlines = resHealines.headlines;
          const avatars = resAvatars.avatar;
          for (let i = 0; i < headlines.length; i++) {
            this.followings.push(new Follower(avatars[i].avatar, avatars[i].username, headlines[i]. headline, ids[i]));
          }
        });
      });
    }
  }
}
