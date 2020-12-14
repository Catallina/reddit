import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RedditComponent } from '@red/reddit/reddit.component';
import { RedditDetailsComponent } from '@red/reddit/reddit-details/reddit-details.component';

const routes: Routes = [
  {
    path: '',
    component: RedditComponent,
  },
  {
    path: ':id',
    component: RedditDetailsComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class RedditRoutingModule {}
