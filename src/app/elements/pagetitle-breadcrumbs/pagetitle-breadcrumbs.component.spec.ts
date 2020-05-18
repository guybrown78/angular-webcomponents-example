import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagetitleBreadcrumbsComponent } from './pagetitle-breadcrumbs.component';

describe('PagetitleBreadcrumbsComponent', () => {
  let component: PagetitleBreadcrumbsComponent;
  let fixture: ComponentFixture<PagetitleBreadcrumbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagetitleBreadcrumbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagetitleBreadcrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
