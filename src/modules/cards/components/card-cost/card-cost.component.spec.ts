import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCostComponent } from './card-cost.component';

describe('CardCostComponent', () => {
  let component: CardCostComponent;
  let fixture: ComponentFixture<CardCostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardCostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
