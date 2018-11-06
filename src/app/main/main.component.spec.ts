import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { User } from '../user';

import { MainComponent } from './main.component';
import { FollowingComponent } from '../main/following/following.component';
import { HeadlineComponent } from '../main/headline/headline.component';
import { PostsComponent } from '../main/posts/posts.component';
import { SelfComponent } from '../main/self/self.component';


describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainComponent, FollowingComponent, HeadlineComponent, PostsComponent, SelfComponent ],
      imports: [ FormsModule, HttpClientModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    const currentUser = new User('rice', 'loverice@rice.edu', '123-456-7890', '1995-10-15',
                                 '77005', '1', 'test', 'Here is ricebook', '');
    const fols = [
      {
        'accountName': 'mack',
        'headline': 'Here is COMP531',
        'displayName': 'mack',
        'portrait': ''
      },
      {
        'accountName': 'yuan',
        'headline': 'Here is YuanHE',
        'displayName': 'dreamer_he',
        'portrait': ''
      }
    ];
    localStorage.setItem('currentFollowers', JSON.stringify(fols));
    localStorage.setItem('currentUser', JSON.stringify(currentUser));

    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
