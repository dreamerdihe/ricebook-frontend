import { Component, OnInit, Input, OnChanges, SimpleChange, Output, EventEmitter } from '@angular/core';
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
  myArticles = 0;
  articles: Article[] = [];
  newText: string;
  isSearch = true;
  searchFor: string;
  searchResults: Article[] = [];
  constructor(private postService: PostsService) {
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    this.getPosts();
  }

  getPosts() {
    this.postService.getArticles(this.followers)
        .subscribe((articles: Article[]) => {
          this.articles = [];
          let myArticlesJS = localStorage.getItem('myArticles');

          if (myArticlesJS) {
            myArticlesJS = JSON.parse(myArticlesJS);
            for (const article of myArticlesJS) {
              this.articles.push(new Article(article['author'], article['text'], article['img'], article['time'], article['comment']));
            }
          }
          for (const art of articles) {
            const day = new Date(art['time']);
            const time = day.toUTCString();
            this.articles.push(new Article(art['author'], art['text'], art['img'], time, art['comment']));
          }
        });
  }

  Post(dirty) {
    if (dirty) {
      const now = Date.now();
      const nowDate = new Date(now);
      const time = nowDate.toUTCString();
      const newArticle = new Article(this.accountName, this.newText, '', time);
      this.articles.unshift(newArticle);
      this.myArticles += 1;
      console.log(this.articles.slice(0, this.myArticles));
      localStorage.removeItem('myArticles');
      localStorage.setItem('myArticles', JSON.stringify(this.articles.slice(0, this.myArticles)));
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
