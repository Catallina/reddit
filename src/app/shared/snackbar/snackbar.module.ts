import { SnackbarService } from './snackbar.service';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SnackbarComponent } from './snackbar.component';

@NgModule({
  imports: [
    CommonModule,

    MatButtonModule,
    MatIconModule,
  ],
  declarations: [
    SnackbarComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: [
    SnackbarComponent,
  ],
  providers: [
    SnackbarService,
  ],
  entryComponents: [
    SnackbarComponent,
  ]
})
export class SnackbarModule { }
