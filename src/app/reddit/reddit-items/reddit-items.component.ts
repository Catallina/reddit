import { Component, OnDestroy, OnInit } from '@angular/core';
import { takeWhile } from 'rxjs/operators';

import { RedditDetailsModel } from '@red/reddit/models/redditDetails.model';
import { RedditStore } from '@red/reddit/store/reddit.store';

@Component({
  selector: 'red-reddit-items',
  templateUrl: './reddit-items.component.html',
  styleUrls: ['./reddit-items.component.scss']
})
export class RedditItemsComponent implements OnInit, OnDestroy {
  private isAlive = false;

  public detailsRedditList: RedditDetailsModel[]

  constructor(
    private redditStore: RedditStore,
  ) {
    this.isAlive = true;
  }

  ngOnInit(): void {
    this.redditStore.redditData$.pipe(takeWhile(() => this.isAlive))
      .subscribe((details: RedditDetailsModel[]) => {
        this.detailsRedditList = details.sort((a, b) => b.data.upVote - a.data.upVote);
      });
  }

  ngOnDestroy(): void {
    this.isAlive = false;
  }
}
