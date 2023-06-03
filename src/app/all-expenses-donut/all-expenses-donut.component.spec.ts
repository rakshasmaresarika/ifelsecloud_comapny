import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllExpensesDonutComponent } from './all-expenses-donut.component';

describe('AllExpensesDonutComponent', () => {
  let component: AllExpensesDonutComponent;
  let fixture: ComponentFixture<AllExpensesDonutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllExpensesDonutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllExpensesDonutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
