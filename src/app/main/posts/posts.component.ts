import { Component, Input, OnChanges, SimpleChange } from '@angular/core';
import { Router } from '@angular/router';

import { PostsService } from './posts.service';
import { MainService } from '../main.service';
import { Follower } from '../follower';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnChanges {
  @Input() followers: Follower[];
  @Input() length: number;
  @Input() accountName: string;
  keyword: string;
  myArticles = 0;
  articles: any[] = [];
  newText: string;
  isSearch = true;
  searchFor: string;
  searchResults: any[] = [];
  constructor(private postService: PostsService, private mainService: MainService, private router: Router) {
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    this.getPosts_();
  }

  getPosts_() {
    this.postService.getPosts().subscribe((res) => {
      this.articles = res.articles;
      for (const article of this.articles) {
        this.mainService.getAvatar([article.author.id]).subscribe((result) => {
          article.author.avatar = result.avatar[0].avatar;
        });
      }
    },
    err => {
      if (err.status === 401) {
        alert('your sesscion is timeout');
        this.router.navigate(['/landing']);
      }
    });
  }

  Post(dirty) {
    if (dirty) {
      this.postService.postPost(this.newText).subscribe((res) => {
        this.articles = res.articles;
      });
    }
  }

  comment(text: String, id: String) {
      this.postService.comment(text, id).subscribe((res) => {
      this.articles = res.articles;
      for (const article of this.articles) {
        this.mainService.getAvatar([article.author.id]).subscribe((result) => {
          article.author.avatar = result.avatar[0].avatar;
        });
      }
    });
  }

  editComment(text: String, postId: String, commentId: String) {
    this.postService.editComment(text, postId, commentId).subscribe((res) => {
      this.articles = res.articles;
      for (const article of this.articles) {
        this.mainService.getAvatar([article.author.id]).subscribe((result) => {
          article.author.avatar = result.avatar[0].avatar;
        });
      }
    });
  }

  search() {
    this.searchResults = [];
    if (this.isSearch) {
      this.keyword = this.searchFor;
      for (const article of this.articles) {
        if (article.author.username.indexOf(this.searchFor) !== -1 || article.body.indexOf(this.searchFor) !== -1) {
          this.searchResults.push(article);
        }
      }
      this.isSearch = false;
    } else {
      this.isSearch = true;
      this.searchFor = null;
    }
  }
}
