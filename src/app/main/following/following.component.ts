import { Component, OnInit } from '@angular/core';
import { Follower } from '../follower';
import { FollowingService } from './following.service';
// import { Location } from '@angular/common';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.css']
})
export class FollowingComponent implements OnInit {
  newfriendName: string;
  followers: Follower[] = [];
  constructor(private followerService: FollowingService) { }

  ngOnInit() {
    this.getFollwer();
  }

  getFollwer() {
    this.followerService.getFollower()
        .subscribe((followers: Follower[]) => {
          for (const fol of followers) {
            this.followers.push(new Follower(fol['portrait'], fol['accountName'],
              fol['headline'], fol['displayName']));
          }
        });
  }

  addfriend(valid) {
    if (valid && this.newfriendName.length > 0) {
      this.followers.push(new Follower('https://ricetennisclub.tennisbookings.com/Static/I/Logos/rice-264.png',
                          this.newfriendName, 'adds name to list with arbitrary headline and avatar'));
    }
  }

  removeFriend(follower: Follower) {
    const index = this.followers.indexOf(follower);
    this.followers.splice(index, 1);
  }
}
