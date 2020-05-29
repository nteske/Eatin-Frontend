import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleOrdersComponent } from './article-orders.component';

describe('ArticleOrdersComponent', () => {
  let component: ArticleOrdersComponent;
  let fixture: ComponentFixture<ArticleOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
