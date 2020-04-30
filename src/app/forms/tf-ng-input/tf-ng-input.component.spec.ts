import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TfNgInputComponent } from './tf-ng-input.component';

describe('TfNgInputComponent', () => {
  let component: TfNgInputComponent;
  let fixture: ComponentFixture<TfNgInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TfNgInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TfNgInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
