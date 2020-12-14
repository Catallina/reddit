import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IDetailsReddit } from '@red/reddit/interfaces/reddit.interface';
import { RedditDetailsModel } from '@red/reddit/models/redditDetails.model';
import { RedditItemsModel } from '@red/reddit/models/reddit.model';
import { RedditStore } from '@red/reddit/store/reddit.store';
import { SnackbarService } from '@red/shared/snackbar/snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class RedditService {

  constructor(
    private http: HttpClient,
    private redditStore: RedditStore,
    private snackBarService: SnackbarService,
  ) {}

  public mapToRedditItems(data: any, id: number): RedditItemsModel {
    return {
      id: id,
      title: data.title,
      upVote: data.ups,
      downVote: data.downs,
      selfText: data.selftext,
    }
  }

  public mapToRedditDetails(data: any): RedditDetailsModel[] {
    const redditList: RedditDetailsModel[] = [];

    if (data && data.length > 0) {
      data.forEach((detailsReddit: any, index) => {
        redditList.push(
          new RedditDetailsModel({
            data: this.mapToRedditItems(detailsReddit.data, index)
          })
        );
      });
    }

    return redditList;
  }

  public mapToDetailsReddit(detailsReddit: any): IDetailsReddit {
    return {
      data: {
        children: this.mapToRedditDetails(detailsReddit.data.children)
      }
    }
  }

  public getRedditData$(data: string): Observable<IDetailsReddit> {
    return this.http.get<IDetailsReddit>(`https://www.reddit.com/r/${data}.json`)
      .pipe(
        map(resp => this.mapToDetailsReddit(resp))
      );
  }

  public displayRedditData(subReddit: string): void {
    this.getRedditData$(subReddit).subscribe((details: any) => {
      if (details?.data?.children?.length > 0) {
        this.redditStore.redditData = details.data.children.slice(0, 10);;
      } else {
        this.redditStore.redditData = [];
      }
    }, catchError => {
      this.redditStore.redditData = [];
      this.snackBarService.openSnackBar('Nothing found', 'Close')
    })
  }
}
