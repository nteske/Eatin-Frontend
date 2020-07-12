import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantAdminComponent } from './restaurant-admin.component';

describe('RestaurantAdminComponent', () => {
  let component: RestaurantAdminComponent;
  let fixture: ComponentFixture<RestaurantAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
