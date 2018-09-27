import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OnInitDestroyModule } from './on-init-destroy/on-init-destroy.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    OnInitDestroyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
