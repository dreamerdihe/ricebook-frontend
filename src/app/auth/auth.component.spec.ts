import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { ProfileService } from '../profile/profile.service';
describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthComponent, RegisterationComponent, LoginComponent ],
      imports: [ RouterTestingModule, FormsModule, HttpClientTestingModule ],
      providers: [ProfileService]
    })
    .compileComponents().then();
  });

  beforeEach(() => {

    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('auth should create', () => {
    expect(component).toBeTruthy();
  });
});
