import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TfNgRadioGroupComponent } from './tf-ng-radio-group.component';

describe('TfNgRadioGroupComponent', () => {
  let component: TfNgRadioGroupComponent;
  let fixture: ComponentFixture<TfNgRadioGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TfNgRadioGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TfNgRadioGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
