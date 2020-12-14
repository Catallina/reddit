import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

import { SharedModule } from '@red/shared/shared.module';

import { RedditComponent } from '@red/reddit/reddit.component';
import { RedditRoutingModule } from '@red/reddit/reddit.routing';
import { RedditItemsComponent } from '@red/reddit/reddit-items/reddit-items.component';
import { RedditDetailsComponent } from '@red/reddit/reddit-details/reddit-details.component';

@NgModule({
  declarations: [
    RedditComponent,
    RedditItemsComponent,
    RedditDetailsComponent,
  ],
  imports: [
    CommonModule,

    MatListModule,
    MatCardModule,

    RedditRoutingModule,
    SharedModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ]
})
export class RedditModule { }
