import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatcardsComponent } from './statcards.component';

describe('StatcardsComponent', () => {
  let component: StatcardsComponent;
  let fixture: ComponentFixture<StatcardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatcardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
