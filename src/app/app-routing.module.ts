import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { environment } from '@env/environment';

const routes: Routes = [
  {
    path: '',
    redirectTo: environment.defaultUrl,
    pathMatch: 'full',
  },
  {
    path: 'reddit',
    loadChildren: () => import('@red/reddit/reddit.module').then(m => m.RedditModule),
  },
  {
    path: '**',
    loadChildren: () => import('@red/not-found/not-found.module.ts').then(m => m.NotFoundModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
