import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeOrdersComponent } from './employe-orders.component';

describe('EmployeOrdersComponent', () => {
  let component: EmployeOrdersComponent;
  let fixture: ComponentFixture<EmployeOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
