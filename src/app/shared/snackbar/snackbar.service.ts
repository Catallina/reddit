import { Injectable } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from './snackbar.component';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(
    private snackBar: MatSnackBar
  ) { }

  public openSnackBar(message: string, action: string) {
    this.snackBar.openFromComponent(SnackbarComponent, {
      duration: 3000,
      data: {
        message,
        action,
      }
    })
  }
}
