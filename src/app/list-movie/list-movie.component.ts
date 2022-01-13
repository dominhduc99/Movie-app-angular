import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMovie } from '../models/movie.interface';
import { AuthService } from '../services/auth.service';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.sass']
})
export class ListMovieComponent implements OnInit {
  movieShowing!: [];
  movieShowingOrg!: [];
  movieCommingSoon!: [];
  movieCommingSoonOrg!: [];
  isShowing: boolean = true;
  keyword: string = '';
  constructor(
    private movieService: MovieService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (localStorage.getItem('username') !== 'admin') {
      this.router.navigate(['']);
    } else {
      this.getMovie();
    }
  }

  getMovie(): void {
    this.movieService.getMovie().subscribe((data: any) => {
      this.movieShowing = this.movieShowingOrg = data.movieShowing.map(
        (m: any) => {
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
            views: m.views,
            description: m.description,
            duration: m.duration
          };
        }
      );
      this.movieCommingSoon = this.movieCommingSoonOrg = data.movieCommingSoon.map(
        (m: any) => {
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
            views: m.views,
            description: m.description,
            duration: m.duration
          };
        }
      );
    });
  }

  handleChangeShow(isShowing: boolean): void {
    this.isShowing = isShowing;
  }

  filterFilmShowing() {
    if (this.keyword) {
      const arrFilter: any = this.movieShowing.filter((movie: IMovie) => {
        return movie.name.toLowerCase().includes(this.keyword.toLowerCase());
      });
      this.movieShowing = arrFilter;
    } else {
      this.movieShowing = this.movieShowingOrg;
    }
  }
  filterFilmCommingSoon() {
    if (this.keyword) {
      const arrFilter: any = this.movieCommingSoon.filter((movie: IMovie) => {
        return movie.name.toLowerCase().includes(this.keyword.toLowerCase());
      });
      this.movieCommingSoon = arrFilter;
    } else {
      this.movieCommingSoon = this.movieCommingSoonOrg;
    }
  }
  logout(): boolean {
    this.authService.logout();
    this.router.navigate(['']);
    return false;
  }
}
