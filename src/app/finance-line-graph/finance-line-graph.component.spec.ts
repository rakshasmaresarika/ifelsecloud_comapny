import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceLineGraphComponent } from './finance-line-graph.component';

describe('FinanceLineGraphComponent', () => {
  let component: FinanceLineGraphComponent;
  let fixture: ComponentFixture<FinanceLineGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanceLineGraphComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinanceLineGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
