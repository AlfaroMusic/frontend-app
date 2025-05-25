import { Component, EventEmitter, Output } from '@angular/core';

interface MenuItem {
  label: string;
  route: string;
  icon?: string; // opcional, para iconos
}

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.css']
})
export class SidebarMenuComponent {
  // Lista de menús
  menuItems: MenuItem[] = [
    { label: 'Home', route: '/dashboard/home', icon: 'home' },
    { label: 'Perfil', route: '/dashboard/profile', icon: 'person' },
    // puedes agregar más items aquí
  ];

  @Output() menuItemClicked = new EventEmitter<string>();

  onMenuClick(route: string) {
    this.menuItemClicked.emit(route);
    
  }
}
