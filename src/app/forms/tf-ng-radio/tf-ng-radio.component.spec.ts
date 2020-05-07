import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TfNgRadioComponent } from './tf-ng-radio.component';

describe('TfNgRadioComponent', () => {
  let component: TfNgRadioComponent;
  let fixture: ComponentFixture<TfNgRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TfNgRadioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TfNgRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
