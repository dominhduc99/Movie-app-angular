import { Injectable } from '@angular/core';
import { IMovie } from '../models/movie.interface';
import {
  // The NgModule for using @angular/common/http
  HttpClientModule,
  // the class constants
  HttpClient
} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class MovieService {
  movie: IMovie | undefined;
  moviesComingSoon!: [];
  moviesShowing!: [];
  constructor(private http: HttpClient) {}

  setMovie(newMovie: any) {
    this.movie = newMovie;
  }

  getMovie(): Observable<IMovie[]> {
    return this.http.get<IMovie[]>(
      'https://www.galaxycine.vn/api/movie/showAndComming?'
    );
  }
}
