import { TestBed } from '@angular/core/testing';

import { StarshipsServiceMockService } from './starships-service-mock.service';

describe('StarshipsServiceMockService', () => {
  let service: StarshipsServiceMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StarshipsServiceMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
