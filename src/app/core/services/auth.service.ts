import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

interface LoginResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string | null = localStorage.getItem('token');

  private baseUrl = 'https://api-app.alnu.pe/api/auth';

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) { }

  // Obtener el nombre de usuario desde el token JWT
  get currentUserName(): string {
    console.log('Token actual:', this.token);  // Log para ver el token

    if (this.token) {
      try {
        const decodedToken = this.jwtHelper.decodeToken(this.token);
        console.log('Token decodificado:', decodedToken);  // Log para ver el token decodificado

        // Verifica si 'sub' contiene el nombre de usuario, o ajusta esto según tu token
        return decodedToken?.sub || 'Usuario desconocido';  // Si 'sub' no es el campo correcto, ajusta esto
      } catch (error) {
        console.error('Error al decodificar el token:', error);  // Log si hay un error al decodificar el token
        return 'Usuario desconocido';
      }
    }

    console.log('No se encontró token, retornando usuario desconocido');
    return 'Usuario desconocido';  // Si no hay token, retornar un nombre por defecto
  }

  // Método para verificar si el usuario está autenticado
  isAuthenticated(): boolean {
    return this.token != null && !this.jwtHelper.isTokenExpired(this.token);
  }

  login(email: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.baseUrl}/login`, { email, password })
      .pipe(
        tap(res => {
          localStorage.setItem('token', res.token);
        })
      );
  }

  logout() {
    localStorage.removeItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }
}
