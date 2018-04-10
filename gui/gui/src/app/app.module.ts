import { UserServiceService } from './user-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Desktop1Component } from './desktop1/desktop1.component';
import { Desktop2Component } from './desktop2/desktop2.component';
import { Desktop3Component } from './desktop3/desktop3.component';


@NgModule({
  declarations: [
    AppComponent,
    Desktop1Component,
    Desktop2Component,
    Desktop3Component
  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})

export class AppModule { }
