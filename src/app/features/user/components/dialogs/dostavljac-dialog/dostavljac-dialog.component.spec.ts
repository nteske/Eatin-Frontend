import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DostavljacDialogComponent } from './dostavljac-dialog.component';

describe('DostavljacDialogComponent', () => {
  let component: DostavljacDialogComponent;
  let fixture: ComponentFixture<DostavljacDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DostavljacDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DostavljacDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
