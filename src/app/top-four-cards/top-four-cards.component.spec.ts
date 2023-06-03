import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopFourCardsComponent } from './top-four-cards.component';

describe('TopFourCardsComponent', () => {
  let component: TopFourCardsComponent;
  let fixture: ComponentFixture<TopFourCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopFourCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopFourCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
