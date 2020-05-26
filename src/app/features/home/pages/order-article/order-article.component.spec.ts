import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderArticleComponent } from './order-article.component';

describe('OrderArticleComponent', () => {
  let component: OrderArticleComponent;
  let fixture: ComponentFixture<OrderArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
