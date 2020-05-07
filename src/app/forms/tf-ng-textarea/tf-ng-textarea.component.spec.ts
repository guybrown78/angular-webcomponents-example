import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TfNgTextareaComponent } from './tf-ng-textarea.component';

describe('TfNgTextareaComponent', () => {
  let component: TfNgTextareaComponent;
  let fixture: ComponentFixture<TfNgTextareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TfNgTextareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TfNgTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
