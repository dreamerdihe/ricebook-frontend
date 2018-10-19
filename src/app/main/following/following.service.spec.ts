import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { FollowingService } from './following.service';

describe('FollowingService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ],
    providers: [ FollowingService ]
  }));

  it('should be created', () => {
    const service: FollowingService = TestBed.get(FollowingService);
    expect(service).toBeTruthy();
  });
});
