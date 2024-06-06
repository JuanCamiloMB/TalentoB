import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import UserService from '../../services/user/user.service';
import { jwtDecode } from 'jwt-decode';

interface JwtPayload {
  iat: number;
  id_user: number;
  username: string;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  errorMsg: any = '';

  constructor(private router: Router, public user: UserService) {}

  onSubmit() {
    const { username, password } = this.loginForm.value;

    if (!username || !password) {
      this.errorMsg = 'Ingresa un correo y contraseña';
      return;
    }
    this.user.logIn(username, password).subscribe(
      (response: any) => {
        const user = jwtDecode(response.userToken) as JwtPayload;
        document.cookie = `token=${user.username}`;
        document.cookie = `userId=${user.id_user}`;
        document.cookie = `jwt=${response.userToken}`;
        this.user.setIsAuth = true;
        this.router.navigate(['/']);
      },
      (err) => {
        console.error(err);
        this.errorMsg = 'Usuario o contraseña incorrectos';
      }
    );
  }
}
