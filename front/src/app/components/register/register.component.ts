import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import UserService from '../../services/user/user.service';
import { jwtDecode } from 'jwt-decode';

interface JwtPayload{
  iat: number,
  id_user: number,
  username: string
}

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registerForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    password2: new FormControl(''),
    username: new FormControl(''),
  });

  constructor(public user: UserService, private router: Router) {}

  async onSubmit(e: Event) {
    e.preventDefault();

    const { name, email, password, password2, username } =
      this.registerForm.value;

    if (!name || !email || !password || !password2 || !username) return;

    if (password !== password2) {
      alert('Passwords do not match');
      return;
    }

    return this.user
      .register(name, username, email, password)
      .subscribe((respuesta: any) => {
        const userData = jwtDecode(respuesta.userToken) as JwtPayload;
        document.cookie = `username=${userData.username}`;
        document.cookie = `userId=${userData.id_user}`;
        document.cookie = `jwt=${respuesta.userToken}`
        this.user.setIsAuth = true;
        this.user.setUsername = email;
        this.router.navigate(['/']);
      });
  }
}
