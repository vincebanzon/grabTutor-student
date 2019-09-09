import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorListPage } from './tutor-list.page';

describe('TutorListPage', () => {
  let component: TutorListPage;
  let fixture: ComponentFixture<TutorListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
