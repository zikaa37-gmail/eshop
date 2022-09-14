import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  error = '';
  isAuthenticated = this.authService.isAuthenticated();

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if (this.isAuthenticated) {
      this.navigate('/products');
    }
    this.buildForm();
  }

  login() {

    this.isAuthenticated = this.authService.login(this.form.value.username, this.form.value.password);
    if (this.isAuthenticated) {
      this.navigate('/products');
      this.error = '';
    } else {
      this.error = 'LOGIN_ERROR';
    }
  }

  navigate(link: string) {
    this.router.navigate([link]);
  }

  buildForm() {
    this.form = this.fb.group({
      username: ['test@test.com'],
      password: ['test'],
    });
  }
}
