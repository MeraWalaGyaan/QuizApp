import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SMComponent } from './sm.component';

describe('SMComponent', () => {
  let component: SMComponent;
  let fixture: ComponentFixture<SMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
