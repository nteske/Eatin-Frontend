import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipArtiklaDialogComponent } from './tip-artikla-dialog.component';

describe('TipArtiklaDialogComponent', () => {
  let component: TipArtiklaDialogComponent;
  let fixture: ComponentFixture<TipArtiklaDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipArtiklaDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipArtiklaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
