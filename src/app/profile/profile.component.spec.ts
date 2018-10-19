import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ProfileService } from './profile.service';
import { ProfileComponent } from './profile.component';
import { LoginComponent } from '../auth/login/login.component';
import { Server } from 'selenium-webdriver/safari';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  let service: ProfileService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileComponent, LoginComponent],
      imports: [ RouterTestingModule, HttpClientModule, FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    localStorage.clear();
    service = TestBed.get(ProfileService);
  });

  it('should create', () => {
    service.login('rice', '1')
    .then(() => {
      fixture = TestBed.createComponent(ProfileComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    }).then(() => {
      expect(component).toBeTruthy();
    });
  });

  it('should fetch the user\'s profile information', () => {
    service.login('rice', '1')
    .then(() => {
      fixture = TestBed.createComponent(ProfileComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      expect(component.user.accountName).toBe('rice');
      expect(component.user.displayName).toBe('rice');
      expect(component.user.email).toBe('loverice@rice.edu');
      expect(component.user.phoneNumber).toBe('123-456-7890');
      expect(component.user.dateOfBirth).toBe('1995-10-15');
      expect(component.user.zipcode).toBe('77005');
      expect(component.user.password).toBe('1');
    });
  });
});
