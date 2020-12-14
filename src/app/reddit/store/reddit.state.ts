import { RedditDetailsModel } from '@red/reddit/models/redditDetails.model';

export interface RedditDetailsState {
  redditData: RedditDetailsModel[];
  searchQuery: string;
}

export const initialRedditDetailsState: RedditDetailsState = {
  redditData: [],
  searchQuery: 'Popular',
}
