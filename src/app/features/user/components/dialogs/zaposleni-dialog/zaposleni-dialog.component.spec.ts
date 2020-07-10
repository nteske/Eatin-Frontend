import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZaposleniDialogComponent } from './zaposleni-dialog.component';

describe('ZaposleniDialogComponent', () => {
  let component: ZaposleniDialogComponent;
  let fixture: ComponentFixture<ZaposleniDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZaposleniDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZaposleniDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
