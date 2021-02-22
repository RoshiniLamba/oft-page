import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickCashComponent } from './quick-cash.component';

describe('QuickCashComponent', () => {
  let component: QuickCashComponent;
  let fixture: ComponentFixture<QuickCashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickCashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickCashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
