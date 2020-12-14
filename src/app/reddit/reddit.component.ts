import { Component, OnInit } from '@angular/core';
import { takeWhile } from 'rxjs/operators';

import { RedditService } from '@red/reddit/service/reddit.service';
import { RedditStore } from '@red/reddit/store/reddit.store';

const POPULAR = 'Popular';

@Component({
  selector: 'red-reddit',
  templateUrl: './reddit.component.html',
  styleUrls: ['./reddit.component.scss']
})
export class RedditComponent implements OnInit {
  private isAlive = false;

  public subReddit: string;
  public defaultQuery = 'Popular';

  constructor(
    private redditService: RedditService,
    private redditStore: RedditStore,
  ) {
    this.isAlive = true;
  }

  ngOnInit(): void {
    this.redditStore.searchQuery$.pipe(takeWhile(() => this.isAlive))
      .subscribe((subReddit: string) => {
        this.subReddit = subReddit;

        this.redditService.displayRedditData(subReddit);
      })
  }
}
