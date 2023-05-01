import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrengthTableComponent } from './strength-table.component';

describe('StrengthTableComponent', () => {
  let component: StrengthTableComponent;
  let fixture: ComponentFixture<StrengthTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrengthTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StrengthTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
