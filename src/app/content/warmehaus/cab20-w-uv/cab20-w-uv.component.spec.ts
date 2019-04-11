import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cab20WUvComponent } from './cab20-w-uv.component';

describe('Cab20WUvComponent', () => {
  let component: Cab20WUvComponent;
  let fixture: ComponentFixture<Cab20WUvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cab20WUvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cab20WUvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
