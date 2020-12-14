import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { LoggerModule } from 'ngx-logger';
import { NgModule } from '@angular/core';
import { environment } from '@env/environment';

import { AppRoutingModule } from '@red/app-routing.module';

import { SharedModule } from '@red/shared/shared.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppComponent } from '@red/app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    MatSnackBarModule,

    SharedModule,

    LoggerModule.forRoot({
      level: environment.logLevel
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
