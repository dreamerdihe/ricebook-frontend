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
  accountName: string;
  offset = 0;
  isScroll = false;
  keyword: string;
  myArticles = 0;
  articles: any[] = [];
  newText: string;
  newImg;
  post: FormData;
  isSearch = true;
  searchFor: string;
  searchResults: any[] = [];
  constructor(private postService: PostsService, private mainService: MainService, private router: Router) {
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    this.offset = 0;
    this.getPosts_();
  }

  getPosts_() {
    let offset = this.offset;
    if (!this.isScroll) {
      offset = 0;
    }
    this.postService.getPosts(offset).subscribe((res) => {
      this.accountName = res.username;
      if (this.isScroll) {
        this.articles = this.articles.concat(res.articles);
        this.isScroll = false;
      } else {
        this.articles = res.articles;
      }
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

  onScroll() {
    this.offset ++;
    this.isScroll = true;
    this.getPosts_();
  }

  handleImageChange($event: any) {
    if (!$event.target.files) {
      return;
    }

    if ($event.target.files.length > 0) {
      const img = $event.target.files[0];
      this.newImg = img;
      const name = $event.target.files[0].name;
      document.getElementById('postFileName').textContent = name;
      return;
    }
  }

  Post(dirty) {
    this.offset = 0;
    if (dirty) {
      const post = new FormData();
      post.append('text', this.newText);
      post.append('image', this.newImg);
      this.postService.postPost(post).subscribe((res) => {
        this.articles = res.articles;
      });
      this.newText = undefined;
    }
  }

  comment(text: String, id: String) {
    if (text === undefined || text.length < 1) {
      return;
    }
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

  editPost(text: String, postId: String) {
    this.postService.editPost(text, postId).subscribe((res) => {
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
