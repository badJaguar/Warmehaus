import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermostatComponent } from './termostat.component';

describe('TermostatComponent', () => {
  let component: TermostatComponent;
  let fixture: ComponentFixture<TermostatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermostatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermostatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
