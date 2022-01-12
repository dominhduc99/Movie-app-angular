import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.sass']
})
export class ListMovieComponent implements OnInit {
  movieShowing!: [];
  movieCommingSoon!: [];
  isShowing: boolean = true;
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.getMovie();
  }

  getMovie(): void {
    this.movieService.getMovie().subscribe((data: any) => {
      this.movieShowing = data.movieShowing.map((m: any) => {
        return {
          id: m.id,
          name: m.name,
          subName: m.subName,
          age: m.age,
          createdAt: m.createdAt,
          imageLandscape: 'https://www.galaxycine.vn' + m.imageLandscape,
          imagePortrait: 'https://www.galaxycine.vn' + m.imagePortrait,
          point: m.point,
          trailer: m.trailer,
          views: m.views
        };
      });
      this.movieCommingSoon = data.movieCommingSoon.map((m: any) => {
        return {
          id: m.id,
          name: m.name,
          subName: m.subName,
          age: m.age,
          createdAt: m.createdAt,
          imageLandscape: 'https://www.galaxycine.vn' + m.imageLandscape,
          imagePortrait: 'https://www.galaxycine.vn' + m.imagePortrait,
          point: m.point,
          trailer: m.trailer,
          views: m.views
        };
      });
    });
  }

  handleChangeShow(isShowing: boolean): void {
    this.isShowing = isShowing;
  }
}
