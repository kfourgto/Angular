import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Buoi1Component } from './buoi1.component';

describe('Buoi1Component', () => {
  let component: Buoi1Component;
  let fixture: ComponentFixture<Buoi1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Buoi1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Buoi1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
