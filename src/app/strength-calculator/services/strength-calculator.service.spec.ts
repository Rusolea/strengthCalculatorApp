import { TestBed } from '@angular/core/testing';

import { StrengthCalculatorService } from './strength-calculator.service';

describe('StrengthCalculatorService', () => {
  let service: StrengthCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StrengthCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
