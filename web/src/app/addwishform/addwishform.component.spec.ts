import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddwishformComponent } from './addwishform.component';

describe('AddwishformComponent', () => {
  let component: AddwishformComponent;
  let fixture: ComponentFixture<AddwishformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddwishformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddwishformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
