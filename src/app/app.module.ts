import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { MovieService } from './services/movie.service';
import { HttpClientModule } from '@angular/common/http';
import { ListMovieComponent } from './list-movie/list-movie.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    ListMovieComponent,
    MovieDetailComponent,
    LoginComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [MovieService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
