import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { NGXLogger } from 'ngx-logger';

import { initialRedditDetailsState, RedditDetailsState } from '@red/reddit/store/reddit.state';
import { RedditDetailsModel } from '@red/reddit/models/redditDetails.model';

@Injectable({
  providedIn: 'root',
})
export class RedditStore {
  private redditStore: RedditDetailsState = Object.assign({}, initialRedditDetailsState);

  private redditDataSubject = new BehaviorSubject<RedditDetailsModel[]>(initialRedditDetailsState.redditData);
  private searchQuerySubject = new BehaviorSubject<string>(initialRedditDetailsState.searchQuery);

  constructor(
      private logger: NGXLogger,
    ) {}

  public set redditData(list: RedditDetailsModel[]) {
    this.redditStore.redditData = list;
    this.logger.debug('Reddit - Set reddit list', { value: list, store: this.redditStore });

    this.redditDataSubject.next(Object.assign({}, this.redditStore).redditData);
  }

  public set searchQuery(query: string) {
    this.redditStore.searchQuery = query;
    this.logger.debug('Reddit - Set search query', { value: query, store: this.redditStore });

    this.searchQuerySubject.next(Object.assign({}, this.redditStore).searchQuery);
  }

  public get redditData$(): Observable<RedditDetailsModel[]> {
    return this.redditDataSubject.asObservable();
  }

  public get searchQuery$(): Observable<string> {
    return this.searchQuerySubject.asObservable();
  }

  public reset(): void {
    this.redditStore = Object.assign({}, initialRedditDetailsState);

    this.logger.debug('Reddit -  Reset store', { store: this.redditStore });

    this.redditDataSubject.next(Object.assign({}, initialRedditDetailsState).redditData);
    this.searchQuerySubject.next(Object.assign({}, initialRedditDetailsState).searchQuery);
  }
}
