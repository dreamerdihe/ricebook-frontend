import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { User } from '../../user';
import { SelfComponent } from './self.component';

describe('SelfComponent', () => {
  let component: SelfComponent;
  let fixture: ComponentFixture<SelfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfComponent],
      imports: [ FormsModule, RouterTestingModule, HttpClientTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    const currentUser = new User('test', 'test@gmail.com', '123-456-7890', '2000-1-1',
                                 '77005', 'test', 'test', 'this is a test', '');
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    fixture = TestBed.createComponent(SelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should log out a user (login state should be cleared)', () => {
    component.logout();
    expect(localStorage.getItem('currentUser')).toBeNull();
});

});
