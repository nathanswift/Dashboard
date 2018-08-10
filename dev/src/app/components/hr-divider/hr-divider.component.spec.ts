import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrDividerComponent } from './hr-divider.component';

describe('HrDividerComponent', () => {
  let component: HrDividerComponent;
  let fixture: ComponentFixture<HrDividerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrDividerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
