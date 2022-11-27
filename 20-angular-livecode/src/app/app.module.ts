import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MahasiswaModule } from './mahasiswa/mahasiswa.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MahasiswaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
