import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GKComponent } from './gk.component';

describe('GKComponent', () => {
  let component: GKComponent;
  let fixture: ComponentFixture<GKComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GKComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
