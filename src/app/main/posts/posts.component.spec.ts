import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { PostsComponent } from './posts.component';
import { PostsService } from './posts.service';
import { Article } from './article';

describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsComponent],
      imports: [ HttpClientModule, FormsModule, RouterTestingModule ],
      providers: [ PostsService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update the search keyword', () => {
    component.searchFor = 'rice';
    component.isSearch = true;
    component.search();
    const complied = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    expect(complied.querySelector('#keyword').textContent).toEqual('searching for rice');

  });

  it('should filter displayed articles by the search keyword', () => {
    const articles = [
      {
        'img': '',
        'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la bore et dolore magna aliqua.',
        'time': '2018-10-1 17:24:00',
        'author': 'yuan'
      },
      {
        'img': '',
        'text': 'Vivamus interdum rutrum elit, sed aliquet tellus tristique eu. Morbi libero ipsum, mattis a luctus vitae, tincidunt quis dolor.',
        'time': '2018-9-2 03:36:00',
        'author': 'mengxiao'
      },
      {
        'img': '',
        'text': 'Nam tincidunt lacus sit amet leo vehicula, ac commodo elit molestie. Vivamus placerat felis eget diam vestibulum, at interdum enim pulvinar. ',
        'time': '2018-10-3 23:44:00',
        'author': 'rice'
      },
      {
        'img': '',
        'text': 'Praesent hendrerit nec lectus eu ullamcorper. Nam at nulla at felis tincidunt semper nec eget odio. Fusce viverra lorem iaculis, congue tortor sit amet, eleifend ante',
        'time': '2018-9-29 13:10:00',
        'author': 'sysu'
      },
      {
        'img': '',
        'text': 'Nulla laoreet diam nec tempus bibendum. Quisque pulvinar luctus imperdiet. Morbi eu aliquet massa.',
        'time': '2018-9-29 13:24:00',
        'author': 'hahah'
      },
      {
        'img': '',
        'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la bore et dolore magna aliqua.',
        'time': '2018-10-3 17:34:50',
        'author': 'yuan'
      }
    ];
for (const article of articles) {
  component.articles.push(new Article(article['author'], article['text'], article['img'], article['time']));
}
component.searchFor = 'yuan';
component.isSearch = true;
fixture.detectChanges();
component.search();
expect(component.searchResults.length).toEqual(2);
  });
});
