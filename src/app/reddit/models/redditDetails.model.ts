import { RedditItemsModel } from "@red/reddit/models/reddit.model";

export class RedditDetailsModel {
  data: RedditItemsModel;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
