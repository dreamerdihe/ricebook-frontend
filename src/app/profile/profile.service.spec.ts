import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ProfileService } from './profile.service';

describe('ProfileService', () => {
  let service: ProfileService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ],
    providers: [ ProfileService ]
  }));

  beforeEach(() => {
    service = TestBed.get(ProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should log in a user', () => {
    service.login('rice', '1').then((islogin) => {
      expect(islogin).toBeTruthy();
      localStorage.clear();
    });
  });

  it('should not log in an invalid user', () => {
    service.login('invalid', 'invaliDpassword').then((islogin) => {
      expect(islogin).toBeFalsy();
      localStorage.clear();
    });
  });
});
