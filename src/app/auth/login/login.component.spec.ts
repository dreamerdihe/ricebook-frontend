import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { LoginComponent } from './login.component';
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ RouterTestingModule, FormsModule, HttpClientTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
      fixture = TestBed.createComponent(LoginComponent);
      component = fixture.componentInstance;
    });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update success message (for displaying login success message to user)', () => {
    component.isSubmit = true;
    component.isLogin = true;
    fixture.detectChanges();
    const complied = fixture.debugElement.nativeElement;
    expect(complied.querySelector('#login-success').textContent).toContain('welcome');
  });

  it('should update error message (for displaying login error mesage to user)', () => {
    component.isSubmit = true;
    component.isLogin = false;
    fixture.detectChanges();
    const complied = fixture.debugElement.nativeElement;
    expect(complied.querySelector('#login-error').textContent).toContain('incorrect');
    expect(complied.querySelector('#login-success')).toBeNull();

  });
});
