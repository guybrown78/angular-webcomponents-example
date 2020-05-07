import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TfNgCheckboxComponent } from './tf-ng-checkbox.component';

describe('TfNgCheckboxComponent', () => {
  let component: TfNgCheckboxComponent;
  let fixture: ComponentFixture<TfNgCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TfNgCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TfNgCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
