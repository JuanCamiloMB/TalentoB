import { Component } from '@angular/core';
import UserService from '../../services/user/user.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
})
export class LandingComponent {

  constructor(
    private _userService: UserService,
  ) {}

  signOut(){
    this._userService.signOut()
  }
}
