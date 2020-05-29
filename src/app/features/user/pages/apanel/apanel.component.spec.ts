import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApanelComponent } from './apanel.component';

describe('ApanelComponent', () => {
  let component: ApanelComponent;
  let fixture: ComponentFixture<ApanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
