import { Component, OnInit, Pipe } from '@angular/core';
import { IMovie } from '../models/movie.interface';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.sass']
})
export class MovieDetailComponent implements OnInit {
  movie!: IMovie;
  constructor() {}

  ngOnInit(): void {
    let movieStorage: any = localStorage.getItem('movie-detail');
    this.movie = JSON.parse(movieStorage);
    // this.movie.trailer =
    //   'http://www.youtube.com/embed/' + this.movie.trailer.split('v=')[1];
    console.log(this.movie);
  }

  photoURL(): string {
    return 'http://www.youtube.com/embed/' + this.movie.trailer.split('v=')[1];
  }
}
