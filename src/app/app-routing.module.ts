import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { ListMovieComponent } from './list-movie/list-movie.component';
import { LoginComponent } from './login/login.component';
import { MovieManagerComponent } from './movie-manager/movie-manager.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: ListMovieComponent },
  { path: 'movie/:id', component: MovieDetailComponent },
  { path: 'movie-manager', component: MovieManagerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
