// vendors
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

// router
import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './app.component';
import { MovieCardComponent } from '@components/movie-card/movie-card.component';
import { ButtonComponent } from '@components/button/button.component';
import { MovieCardFooterComponent } from '@components/movie-card-footer/movie-card-footer.component';
import { MoviesListComponent } from '@components/movies-list/movies-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieCardComponent,
    ButtonComponent,
    MovieCardFooterComponent,
    MoviesListComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
     FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
