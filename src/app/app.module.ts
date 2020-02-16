// vendors
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

// router
import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './app.component';
import { MovieCardComponent } from '@components/movie-card/movie-card.component';
import { ButtonComponent } from '@components/button/button.component';
import { MovieCardFooterComponent } from '@components/movie-card-footer/movie-card-footer.component';
import { MoviesListComponent } from '@components/movies-list/movies-list.component';

// views
import { TrendingViewComponent } from '@views/trending-view/trending-view.component';
import { LoaderComponent } from '@components/loader/loader.component';
import { EmptyStateComponent } from './components/empty-state/empty-state.component';
import { PaginationFooterComponent } from './components/pagination-footer/pagination-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieCardComponent,
    ButtonComponent,
    MovieCardFooterComponent,
    MoviesListComponent,
    TrendingViewComponent,
    LoaderComponent,
    EmptyStateComponent,
    PaginationFooterComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
