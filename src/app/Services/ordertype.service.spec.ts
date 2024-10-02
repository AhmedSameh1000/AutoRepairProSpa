import { TestBed } from '@angular/core/testing';

import { OrdertypeService } from './ordertype.service';

describe('OrdertypeService', () => {
  let service: OrdertypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdertypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
