import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Follower } from '../follower';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.css']
})
export class FollowingComponent implements OnInit {
  newfriendName: string;
  @Input() followers: Follower[] = [];
  @Output() add = new EventEmitter<Follower>();
  @Output() delete = new EventEmitter<Follower>();
  addStatus = 0;
  changeLog: string[] = [];

  constructor() {}

  ngOnInit() {}

  addfriend(valid) {
    // if (valid && this.newfriendName.length > 0) {
    //   this.profileService.search(this.newfriendName)
    //   .then((res) => {
    //     if (res) {
    //       if (this.currentUser.accountName === res.accountName || this.currentUser.displayName === res.displayName) {
    //         return this.addStatus = -3;
    //       }
    //       for (const follower of this.followers) {
    //         if (follower.accountName === res.accountName) {
    //           return this.addStatus = -2;
    //         }
    //       }
    //       const newFollowing = new Follower(res.portrait, res.accountName, res.headline, res.displayName);
    //       this.add.emit(newFollowing);
    //       return this.addStatus = 1;
    //     } else {
    //       return this.addStatus = -1;
    //     }
    //   });
    // }
  }

  removeFriend(follower: Follower) {
    this.delete.emit(follower);
  }
}
