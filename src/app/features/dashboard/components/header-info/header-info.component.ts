import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header-info',
  templateUrl: './header-info.component.html',
  styleUrls: ['./header-info.component.css']
})
export class HeaderInfoComponent {
  
  @Input() pageName: string = 'Página';
  @Input() username: string = 'Usuario';
  

  @Output() logout = new EventEmitter<void>();

  onLogout() {
    this.logout.emit();
  }
}