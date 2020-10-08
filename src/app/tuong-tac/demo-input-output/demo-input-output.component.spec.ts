import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoInputOutputComponent } from './demo-input-output.component';

describe('DemoInputOutputComponent', () => {
  let component: DemoInputOutputComponent;
  let fixture: ComponentFixture<DemoInputOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoInputOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoInputOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
