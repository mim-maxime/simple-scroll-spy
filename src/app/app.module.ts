import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SimpleScrollSpyModule} from "../../projects/simple-scroll-spy/src/lib/simple-scroll-spy.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SimpleScrollSpyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
