import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandyStoreComponent } from './candy-store/candy-store.component';
import { PillowCaseComponent } from './pillow-case/pillow-case.component';

@NgModule({
  declarations: [
    AppComponent,
    PillowCaseComponent,
    CandyStoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
