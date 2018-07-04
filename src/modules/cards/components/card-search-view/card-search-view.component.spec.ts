import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSearchViewComponent } from './card-search-view.component';

describe('CardSearchViewComponent', () => {
  let component: CardSearchViewComponent;
  let fixture: ComponentFixture<CardSearchViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardSearchViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSearchViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
