import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketButtonComponent } from './basket-button.component';

describe('BasketButtonComponent', () => {
  let component: BasketButtonComponent;
  let fixture: ComponentFixture<BasketButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasketButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
