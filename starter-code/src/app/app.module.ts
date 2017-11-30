import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MyMovieComponentComponent } from './my-movie-component/my-movie-component.component';
import { MyHomeComponentComponent } from './my-home-component/my-home-component.component';
import { CinemaService } from './cinema.service'

@NgModule({
  declarations: [
    AppComponent,
    MyMovieComponentComponent,
    MyHomeComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
