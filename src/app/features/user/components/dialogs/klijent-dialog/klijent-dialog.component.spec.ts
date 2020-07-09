import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KlijentDialogComponent } from './klijent-dialog.component';

describe('KlijentDialogComponent', () => {
  let component: KlijentDialogComponent;
  let fixture: ComponentFixture<KlijentDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KlijentDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KlijentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
