import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFileSelectComponent } from './test-file-select.component';

describe('TestFileSelectComponent', () => {
  let component: TestFileSelectComponent;
  let fixture: ComponentFixture<TestFileSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestFileSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestFileSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
