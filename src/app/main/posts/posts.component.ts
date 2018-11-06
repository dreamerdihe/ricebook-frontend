import { Component, Input, OnChanges, SimpleChange } from '@angular/core';
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
  constructor(private postService: PostsService) {
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    this.getPosts_();
  }

  getPosts_() {
    this.postService.getPosts().subscribe((res) => {
      this.articles = res.articles;
    });
  }

  Post(dirty) {
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
