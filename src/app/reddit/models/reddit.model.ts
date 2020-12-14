export class RedditItemsModel {
  id: number;
  title: string;
  upVote: number;
  downVote: number;
  selfText: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
