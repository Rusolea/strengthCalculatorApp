import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculationResultModalComponent } from './calculation-result-modal.component';

describe('CalculationResultModalComponent', () => {
  let component: CalculationResultModalComponent;
  let fixture: ComponentFixture<CalculationResultModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculationResultModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculationResultModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
