import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarmehausComponent } from './warmehaus.component';

describe('WarmehausComponent', () => {
  let component: WarmehausComponent;
  let fixture: ComponentFixture<WarmehausComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarmehausComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarmehausComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
