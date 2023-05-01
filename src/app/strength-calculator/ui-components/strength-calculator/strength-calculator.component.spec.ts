import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrengthCalculatorComponent } from './strength-calculator.component';

describe('StrengthCalculatorComponent', () => {
  let component: StrengthCalculatorComponent;
  let fixture: ComponentFixture<StrengthCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrengthCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StrengthCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
