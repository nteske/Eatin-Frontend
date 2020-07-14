import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoviArtiklaComponent } from './tipovi-artikla.component';

describe('TipoviArtiklaComponent', () => {
  let component: TipoviArtiklaComponent;
  let fixture: ComponentFixture<TipoviArtiklaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoviArtiklaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoviArtiklaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
