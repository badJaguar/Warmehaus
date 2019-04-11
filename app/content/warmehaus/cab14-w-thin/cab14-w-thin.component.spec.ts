import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cab14WThinComponent } from './cab14-w-thin.component';

describe('Cab14WThinComponent', () => {
  let component: Cab14WThinComponent;
  let fixture: ComponentFixture<Cab14WThinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cab14WThinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cab14WThinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
