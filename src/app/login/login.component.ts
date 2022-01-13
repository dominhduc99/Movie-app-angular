import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  message: string;
  constructor(public authService: AuthService, private router: Router) {
    this.message = '';
  }

  ngOnInit(): void {}

  login(username: string, password: string): boolean {
    this.message = '';
    if (!this.authService.login(username, password)) {
      this.message = 'Incorrect credentials.';
    } else {
      this.router.navigate(['/home']);
    }
    return false;
  }
}
