import { Component, OnInit } from '@angular/core';

import { RedditStore } from '@red/reddit/store/reddit.store';

@Component({
  selector: 'red-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public subRedditQuery = null;
  public defaultQuery = 'Popular';

  constructor(
    private redditStore: RedditStore,
  ) { }

  ngOnInit(): void {
  }

  public onBlurField(event: Event): void {
    event && (event.target as HTMLInputElement).blur();

    this.searchByQuery();
  }

  public onSelectField(event: Event): void {
    event && (event.target as HTMLInputElement).select();
  }

  public onResetInput(value) {
    if (!this.subRedditQuery && value === '') {
      this.redditStore.searchQuery = this.defaultQuery;
    }
  }

  public onClearContentInput() {
    if (this.subRedditQuery) {
      this.subRedditQuery = null;
      this.redditStore.searchQuery = this.defaultQuery;
    }
  }

  public searchByQuery() {
    this.redditStore.searchQuery = this.subRedditQuery;
  }
}
