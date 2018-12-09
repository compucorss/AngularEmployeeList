import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeListWithpicsComponent } from './employee-list-withpics.component';

describe('EmployeeListWithpicsComponent', () => {
  let component: EmployeeListWithpicsComponent;
  let fixture: ComponentFixture<EmployeeListWithpicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeListWithpicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeListWithpicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
