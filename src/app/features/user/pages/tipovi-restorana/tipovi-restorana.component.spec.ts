import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoviRestoranaComponent } from './tipovi-restorana.component';

describe('TipoviRestoranaComponent', () => {
  let component: TipoviRestoranaComponent;
  let fixture: ComponentFixture<TipoviRestoranaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoviRestoranaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoviRestoranaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
