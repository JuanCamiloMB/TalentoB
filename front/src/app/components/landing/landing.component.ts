import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import UserService from '../../services/user/user.service';
import { RouterLink } from '@angular/router';
import { API } from '../../config';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
})
export class LandingComponent {

  constructor(
    private _cookieService: CookieService,
    private _userService: UserService,
  ) {}

  signOut(){
    this._userService.signOut()
  }
}
