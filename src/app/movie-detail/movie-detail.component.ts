import { Component, OnInit, Pipe } from '@angular/core';
import { IMovie } from '../models/movie.interface';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.sass']
})
export class MovieDetailComponent implements OnInit {
  movie!: IMovie;
  originalUrl: any = '';
  constructor(private dom: DomSanitizer) {}

  ngOnInit(): void {
    let movieStorage: any = localStorage.getItem('movie-detail');
    this.movie = JSON.parse(movieStorage);
    console.log(this.movie);
    this.videoURL();
  }

  videoURL(): void {
    if (this.movie.trailer) {
      if (!this.movie.trailer.split('v=')[1]) this.originalUrl = '';
      else
        this.originalUrl = this.dom.bypassSecurityTrustResourceUrl(
          'http://www.youtube.com/embed/' + this.movie.trailer.split('v=')[1]
        );
    }
  }
}
