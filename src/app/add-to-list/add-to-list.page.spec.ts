import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToListPage } from './add-to-list.page';

describe('AddToListPage', () => {
  let component: AddToListPage;
  let fixture: ComponentFixture<AddToListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddToListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
