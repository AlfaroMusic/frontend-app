import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthModule } from './features/auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './features/auth/token.interceptor';
import { RouterModule } from '@angular/router';
import { SharedModule } from "./shared/shared.module";
import { DashboardModule } from './features/dashboard/dashboard.module';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';  // Importar JwtHelperService

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AuthModule,
    AppRoutingModule,
    RouterModule,
    DashboardModule,
    SharedModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    JwtHelperService,  // Agregar JwtHelperService al proveedor
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS }  // Opcionalmente configura JWT_OPTIONS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
