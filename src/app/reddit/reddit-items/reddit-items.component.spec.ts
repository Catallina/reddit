import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedditItemsComponent } from '@red/reddit/reddit-items/reddit-items.component';

describe('RedditItemsComponent', () => {
  let component: RedditItemsComponent;
  let fixture: ComponentFixture<RedditItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedditItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedditItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
