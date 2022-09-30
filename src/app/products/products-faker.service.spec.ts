import { TestBed } from '@angular/core/testing';

import { ProductsFakerService } from './products-faker.service';

describe('ProductsFakerService', () => {
  let service: ProductsFakerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsFakerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
