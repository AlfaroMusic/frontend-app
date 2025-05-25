import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() disabled: boolean = false;
  @Input() text: string = 'Botón';

  // Colores: primary, secondary, danger, etc.
  @Input() color: 'primary' | 'secondary' | 'danger' = 'primary';

  // Tamaños: small, medium, large
  @Input() size: 'small' | 'medium' | 'large' = 'medium';

  // Nombre de ícono (puede ser font-awesome, material icons, etc.)
  @Input() icon?: string;

  // Permite clases css extra
  @Input() extraClasses: string = '';

  @Output() clicked = new EventEmitter<void>();

  onClick() {
    if (!this.disabled) {
      this.clicked.emit();
    }
  }
}
