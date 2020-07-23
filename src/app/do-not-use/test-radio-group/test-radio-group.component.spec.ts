import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRadioGroupComponent } from './test-radio-group.component';

describe('TestRadioGroupComponent', () => {
  let component: TestRadioGroupComponent;
  let fixture: ComponentFixture<TestRadioGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestRadioGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestRadioGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
