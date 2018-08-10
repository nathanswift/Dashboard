import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DasheadComponent } from './dashead.component';

describe('DasheadComponent', () => {
  let component: DasheadComponent;
  let fixture: ComponentFixture<DasheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DasheadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DasheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
