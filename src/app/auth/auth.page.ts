import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component( {
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
} )
export class AuthPage implements OnInit {
  login: boolean = false
  isLoggedIn: boolean
  constructor ( private authService: AuthService ) { }

  ngOnInit() {
    this.isLoggedIn = this.authService.userId ? true : false
  }
  ionViewWillEnter() {
    this.isLoggedIn = this.authService.userId ? true : false

  }
  logout() {
    this.authService.userId = null
    this.isLoggedIn = false
    localStorage.removeItem('userId');
  }
  toggle() {
    this.login = !this.login
  }

}
