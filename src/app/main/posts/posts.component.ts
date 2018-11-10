import { Component, Input, OnChanges, SimpleChange } from '@angular/core';
import { Router } from '@angular/router';

import { Article } from './article';
import { PostsService } from './posts.service';
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
  searchResults: Article[] = [];
  constructor(private postService: PostsService, private router: Router) {
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    this.getPosts_();
    console.log(this.articles.length);
  }

  getPosts_() {
    this.postService.getPosts().subscribe((res) => {
      this.articles = res.articles;
    },
    err => {
      if (err.status === 401) {
        alert('your sesscion is timeout');
        this.router.navigate(['/landing']);
      }
    });
  }

  Post(dirty) {
    console.log('add', this.newText);
    if (dirty) {
      this.postService.postPost(this.newText).subscribe((res) => {
        this.articles = res.articles;
      });
    }
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
