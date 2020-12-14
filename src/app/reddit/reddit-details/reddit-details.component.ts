import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { takeWhile } from 'rxjs/operators';

import { RedditDetailsModel } from '@red/reddit/models/redditDetails.model';
import { RedditStore } from '@red/reddit/store/reddit.store';

@Component({
  selector: 'red-reddit-details',
  templateUrl: './reddit-details.component.html',
  styleUrls: ['./reddit-details.component.scss']
})
export class RedditDetailsComponent implements OnInit, OnDestroy {
  private isAlive = false;

  public id: string;
  public scopeRedditItem: RedditDetailsModel;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private redditStore: RedditStore,
  ) {
    this.isAlive = true;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      this.id = param.get('id');
    });

    this.redditStore.redditData$.pipe(takeWhile(() => this.isAlive))
      .subscribe((redditDetails: RedditDetailsModel[]) => {
        this.scopeRedditItem = this.findRedditItemById(redditDetails);
    })
  }

  ngOnDestroy() {
    this.isAlive = false;
  }

  public onCloseDetails() {
    this.router.navigate(['/reddit']);
  }

  public findRedditItemById(redditDetails: RedditDetailsModel[]): RedditDetailsModel {
    return redditDetails.find((itemId: RedditDetailsModel) => parseInt(this.id) === itemId.data.id)
  }
}
