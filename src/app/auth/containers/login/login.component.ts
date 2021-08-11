import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      username: [''],
      password: ['']
    });

    this.loginForm = new FormGroup({
      'user': new FormControl(),
      'password': new FormControl()
  });
  }

  get f() { return this.loginForm.controls; }

  login() {
      if (this.authService.login(
        {
          username: this.loginForm.controls.user.value,
          password: this.loginForm.controls.password.value
        }
      )) {
        this.router.navigate(['/home']);
      }else{
        this.loginForm.setErrors({error: 'invalid login'})
      }
    };
  }

