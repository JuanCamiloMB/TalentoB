import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import UserService from '../../services/user/user.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-editprofile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './editprofile.component.html',
  styleUrl: './editprofile.component.css',
})
export class EditprofileComponent {
  updateForm = new FormGroup({
    username: new FormControl(''),
    name: new FormControl(''),
    email: new FormControl(''),
  });
  user: any = null;
  constructor(private _userService: UserService, private router: Router) {}

  ngOnInit() {
    this._userService.fetchUser().subscribe((user: any) => {
      this.updateForm.setValue({
        username: user.username,
        name: user.name,
        email: user.email,
      });
      this.user = user;
    });
  }

  onSubmit(e: Event) {
    e.preventDefault();
    const { username, name, email } = this.updateForm.value;
    this._userService.updateUser({
      id_user: this.user.id_user,
      name: name,
      username: username,
      email: email,
    }).subscribe((response)=>{
      console.log(response)
      this.router.navigate(['/profile'])
    })
  }
}
