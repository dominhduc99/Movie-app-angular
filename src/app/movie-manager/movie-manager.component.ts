import { Component, OnInit } from '@angular/core';
import { FormArrayName, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IMovie } from '../models/movie.interface';
import { AuthService } from '../services/auth.service';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-manager',
  templateUrl: './movie-manager.component.html',
  styleUrls: ['./movie-manager.component.sass']
})
export class MovieManagerComponent implements OnInit {
  movieShowing!: IMovie[];
  movieCommingSoon!: IMovie[];
  isShowing: boolean = true;
  idDelete!: string;
  idEdit!: string;
  myForm: any = {
    name: '',
    subname: '',
    duration: '',
    age: ''
  };
  constructor(
    private movieService: MovieService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (localStorage.getItem('username') !== 'admin') {
      this.router.navigate(['/home']);
    } else {
      this.getMovie();
    }
  }

  logout(): boolean {
    this.authService.logout();
    this.router.navigate(['']);
    return false;
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
          views: m.views,
          description: m.description,
          duration: m.duration
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
          views: m.views,
          description: m.description,
          duration: m.duration
        };
      });
      console.log(this.movieShowing);
    });
  }

  confirmDelete(): void {
    if (this.isShowing) {
      this.movieShowing = this.movieShowing.filter(
        (movie: IMovie) => movie.id !== this.idDelete
      );
    } else {
      this.movieCommingSoon = this.movieCommingSoon.filter(
        (movie: IMovie) => movie.id !== this.idDelete
      );
    }
  }

  setDataForm(id: string): void {
    this.idEdit = id;
    let movieEdit: any;
    if (this.isShowing) {
      movieEdit = this.movieShowing.find(
        (movie: IMovie) => movie.id === this.idEdit
      );
    } else {
      movieEdit = this.movieCommingSoon.find(
        (movie: IMovie) => movie.id === this.idEdit
      );
    }
    this.myForm.name = movieEdit.name;
    this.myForm.age = movieEdit.age;
    this.myForm.subname = movieEdit.subName;
    this.myForm.duration = movieEdit.duration;
  }

  onSubmitEdit(): void {
    let movieEdit: any;
    if (this.isShowing) {
      movieEdit = this.movieShowing.find(
        (movie: IMovie) => movie.id === this.idEdit
      );
    } else {
      movieEdit = this.movieCommingSoon.find(
        (movie: IMovie) => movie.id === this.idEdit
      );
    }
    movieEdit.name = this.myForm.name;
    movieEdit.age = this.myForm.age;
    movieEdit.subName = this.myForm.subname;
    movieEdit.duration = this.myForm.duration;
  }
}
