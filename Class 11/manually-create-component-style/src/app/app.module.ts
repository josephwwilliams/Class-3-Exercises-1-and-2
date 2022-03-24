import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { paragraphComponent } from './paragraph-list/paragraph-list.component';

@NgModule({
  declarations: [
    AppComponent,
    paragraphComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
