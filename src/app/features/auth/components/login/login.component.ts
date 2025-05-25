// src/app/auth/login/login.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  errorMsg: string = '';

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService.login(email, password).subscribe({
        next: (response) => {
          this.authService.saveToken(response.token);
          this.errorMsg = '';
          this.router.navigate(['/dashboard']);
        },
        error: (error: HttpErrorResponse) => {
          console.error('Error de login:', error);
          this.errorMsg = 'Credenciales inválidas o error en el servidor.';
        }
      });
    } else {
      this.errorMsg = 'Por favor complete el formulario correctamente.';
      this.loginForm.markAllAsTouched();
    }
  }
}
