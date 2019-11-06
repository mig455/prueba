import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { appservice } from "./app.service";
import { AppComponent } from './app.component';
import { map } from 'rxjs/operators';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    appservice
  ]
  ,
  bootstrap: [AppComponent]
})
export class AppModule { }
