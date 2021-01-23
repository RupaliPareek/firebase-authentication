import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { from } from 'rxjs';
@Component({
  selector: 'app-register-container',
  templateUrl: './register-container.component.html',
  styleUrls: ['./register-container.component.scss']
})
export class RegisterContainerComponent implements OnInit {
  registerForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
  });
  error: any;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    console.warn(this.registerForm.value);
    this.authService.registerWithEmailId(this.registerForm.value).then(() => {
      this.registerForm.reset();
    }).catch(_error => {
      this.error = _error;
    })
  }

}
