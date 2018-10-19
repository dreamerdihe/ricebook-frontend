import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { FollowingComponent } from './following.component';
import { HeadlineComponent } from '../headline/headline.component';
import { LoginComponent } from '../../auth/login/login.component';
describe('FollowingComponent', () => {
  let followingComponent: FollowingComponent;
  let followingFixture: ComponentFixture<FollowingComponent>;
  let loginComponent: LoginComponent;
  let loginFixture: ComponentFixture<LoginComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowingComponent, HeadlineComponent, LoginComponent],
      imports: [ RouterTestingModule, FormsModule, HttpClientTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    followingFixture = TestBed.createComponent(FollowingComponent);
    followingComponent = followingFixture.componentInstance;
    followingFixture.detectChanges();

    loginFixture = TestBed.createComponent(LoginComponent);
    loginComponent = loginFixture.componentInstance;
    loginFixture.detectChanges();
  });

  it('should create', () => {
    expect(followingComponent).toBeTruthy();
  });
});
