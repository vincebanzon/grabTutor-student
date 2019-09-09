import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorDetailPage } from './tutor-detail.page';

describe('TutorDetailPage', () => {
  let component: TutorDetailPage;
  let fixture: ComponentFixture<TutorDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
