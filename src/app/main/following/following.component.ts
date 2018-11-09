import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Follower } from '../follower';
import { MainService } from '../main.service';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.css']
})
export class FollowingComponent implements OnInit {
  newfriendName: string;
  @Input() currentUser: String;
  @Input() followers: Follower[] = [];
  @Output() add = new EventEmitter<Follower>();
  @Output() delete = new EventEmitter<Follower>();
  addStatus = 0;
  changeLog: string[] = [];

  constructor(private mainService: MainService) {}

  ngOnInit() {}

  addfriend(valid) {
    if (valid && this.newfriendName.length > 0) {
      this.mainService.search(this.newfriendName)
      .subscribe((res) => {
        if (res.result === 'success') {
          const user = res.user;
          if (this.currentUser === user.username) {
            return this.addStatus = -3;
          }
          for (const follower of this.followers) {
            if (follower.accountName === user.username) {
              return this.addStatus = -2;
            }
          }
          const newFollowing = new Follower(user.avatar, user.username, user.status, user._id);
          this.add.emit(newFollowing);
          return this.addStatus = 1;
        } else {
          return this.addStatus = -1;
        }
      });
    }
  }

  removeFriend(follower: Follower) {
    this.delete.emit(follower);
  }
}
