import { TestBed } from '@angular/core/testing';

import { PostsService } from './posts.service';
import { Article } from './article';
import { Follower } from '../follower';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PostsService', () => {
  let fols;
  const followings: Follower[] = [];
  let service: PostsService;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ],
    providers: [ PostsService ]
  }));

  beforeEach(() => {
    service = TestBed.get(PostsService);
    fols =  [
      {
        'accountName': 'mack',
        'headline': 'Here is COMP531',
        'displayName': 'mack',
        // tslint:disable-next-line:max-line-length
        'portrait': 'http://www.fullcolortransfer.com/images/2014/07/02/2010-Pres%20Rice%20Owls%20Misc%20Logo%20Iron%20On%20Sticker%20(Heat%20Transfer).png'
      },
      {
        'accountName': 'yuan',
        'headline': 'Here is YuanHE',
        'displayName': 'dreamer_he',
        'portrait': 'https://riceowls.com/images/2017/5/1/rice-full-owl.jpg'
      }
    ];
    for (const fol of fols) {
      followings.push(new Follower(fol['portrait'], fol['accountName'], fol['headline'], fol['displayName']));
    }
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('Test Article: should fetch articles for current logged in user', () => {
  //   service.getArticles(followings).subscribe((articles: Article[]) => {
  //     expect(articles.length).toBe(2);
  //   });
  // });

  it('Test Article: should fetch articles for current logged in user', () => {
    service.getArticles(followings).subscribe((articles: Article[]) => {
      expect(articles.length).toBe(2);
    });
  });

  it('should add articles when adding a follower', () => {
    followings.push(new Follower('', 'sysu', 'Here is sysu', 'sysu'));
    service.getArticles(followings).subscribe((articles: Article[]) => {
      expect(articles.length).toBe(5);
    });
  });

  it('should remove articles when removing a follower', () => {
    followings.pop();
    service.getArticles(followings).subscribe((articles: Article[]) => {
    expect(articles.length).toBe(2);
    });
  });
});
