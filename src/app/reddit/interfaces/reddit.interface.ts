import { RedditDetailsModel } from "../models/redditDetails.model";


export interface IDetailsReddit {
  data: IRedditData;
}

export interface IRedditData {
  children: RedditDetailsModel[];
}
