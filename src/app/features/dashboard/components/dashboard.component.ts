import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importa Router
import { AuthService } from '../../../core/services/auth.service'

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
    currentPage: string = '';
    currentUserName: string = '';

    // Inyecta Router en el constructor
    constructor(private router: Router, private authService: AuthService) {
      this.currentPage = this.router.url;
      this.currentUserName = this.authService.currentUserName;
    }

    handleLogoClick() {
        console.log('Logo clicked!');
    }

    // Navegar a la ruta seleccionada
    handleMenuItemClick(route: string) {
        console.log('Menu item clicked:', route);
        this.currentPage = route;

        // Usar el Router para navegar a la ruta
        this.router.navigate([route]);
    }

    handleLogout() {
        this.authService.logout();
        this.router.navigate(['/login']);
        console.log('Logout clicked!');
    }
}
