import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriloziIMereComponent } from './prilozi-i-mere.component';

describe('PriloziIMereComponent', () => {
  let component: PriloziIMereComponent;
  let fixture: ComponentFixture<PriloziIMereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriloziIMereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriloziIMereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
