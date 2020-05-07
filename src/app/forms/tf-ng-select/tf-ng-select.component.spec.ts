import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TfNgSelectComponent } from './tf-ng-select.component';

describe('TfNgSelectComponent', () => {
  let component: TfNgSelectComponent;
  let fixture: ComponentFixture<TfNgSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TfNgSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TfNgSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
