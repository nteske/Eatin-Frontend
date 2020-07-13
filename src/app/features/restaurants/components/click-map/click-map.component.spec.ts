import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickMapComponent } from './click-map.component';

describe('ClickMapComponent', () => {
  let component: ClickMapComponent;
  let fixture: ComponentFixture<ClickMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
