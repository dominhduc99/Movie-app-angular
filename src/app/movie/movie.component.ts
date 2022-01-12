import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMovie } from '../models/movie.interface';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.sass']
})
export class MovieComponent implements OnInit {
  @Input() movie!: IMovie;
  constructor(private router: Router) {}

  ngOnInit(): void {
    // console.log(this.movie);
  }

  handleClickDetail(): void {
    localStorage.setItem('movie-detail', JSON.stringify(this.movie));
    this.router.navigate(['/movie', this.movie.id]);
  }
}
