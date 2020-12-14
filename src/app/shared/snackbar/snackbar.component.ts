import { Component, HostBinding, Inject, OnInit } from '@angular/core';

import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'red-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
})
export class SnackbarComponent implements OnInit {

  @HostBinding('class') get severity(): string {
    return this.data.snackType;
  }

  @HostBinding('class') get dismissible(): string {
    return this.data.dismissible;
  }

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: any,
    private snackbarRef: MatSnackBarRef<SnackbarComponent>,
  ) { }

  ngOnInit(): void {
  }

  public dismiss() {
    this.snackbarRef.dismissWithAction();
  }
}
