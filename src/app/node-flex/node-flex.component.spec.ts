import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeFlexComponent } from './node-flex.component';

describe('NodeFlexComponent', () => {
  let component: NodeFlexComponent;
  let fixture: ComponentFixture<NodeFlexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodeFlexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeFlexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
