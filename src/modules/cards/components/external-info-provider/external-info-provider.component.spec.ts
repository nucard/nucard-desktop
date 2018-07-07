import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalInfoProviderComponent } from './external-info-provider.component';

describe('ExternalInfoProviderComponent', () => {
  let component: ExternalInfoProviderComponent;
  let fixture: ComponentFixture<ExternalInfoProviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternalInfoProviderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalInfoProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
