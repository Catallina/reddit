import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedditDetailsComponent } from '@red/reddit/reddit-details/reddit-details.component';

describe('RedditDetailsComponent', () => {
  let component: RedditDetailsComponent;
  let fixture: ComponentFixture<RedditDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedditDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedditDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
