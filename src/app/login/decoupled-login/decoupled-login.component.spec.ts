import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoupledLoginComponent } from './decoupled-login.component';

describe('DecoupledLoginComponent', () => {
  let component: DecoupledLoginComponent;
  let fixture: ComponentFixture<DecoupledLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecoupledLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecoupledLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
