import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipRestoranaDialogComponent } from './tip-restorana-dialog.component';

describe('TipRestoranaDialogComponent', () => {
  let component: TipRestoranaDialogComponent;
  let fixture: ComponentFixture<TipRestoranaDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipRestoranaDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipRestoranaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
