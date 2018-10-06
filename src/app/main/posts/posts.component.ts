import { Component, OnInit } from '@angular/core';
import { Article } from './article';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  articles: Article[] = [];
  newText: string;
  isSearch = true;
  searchFor: string;
  searchResults: Article[] = [];
  constructor(private postService: PostsService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.postService.getArticles()
        .subscribe((articles: Article[]) => {
          for (const art of articles) {
            const day = new Date(art['time']);
            const time = day.toUTCString();
            this.articles.push(new Article(art['author'], art['text'], art['img'], time));
          }
        });
  }

  newPost(dirty) {
    if (dirty) {
      const now = Date.now();
      const nowDate = new Date(now);
      const time = nowDate.toUTCString();
      this.articles.unshift(new Article('yuan', this.newText, '', time));
    }
  }

  search() {
    if (this.isSearch) {
      for (const article of this.articles) {
        if (article.author.indexOf(this.searchFor) !== -1 || article.text.indexOf(this.searchFor) !== -1) {
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
