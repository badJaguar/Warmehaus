import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cab11WThinComponent } from './cab11-w-thin.component';

describe('Cab11WThinComponent', () => {
  let component: Cab11WThinComponent;
  let fixture: ComponentFixture<Cab11WThinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cab11WThinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cab11WThinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
