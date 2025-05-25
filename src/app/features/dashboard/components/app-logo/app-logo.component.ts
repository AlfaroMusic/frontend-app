import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './app-logo.component.html',
  styleUrls: ['./app-logo.component.css']
})
export class AppLogoComponent {
  @Input() src = '';
  @Input() alt = 'Logo';
  @Input() height = '40px';
  @Input() width = 'auto';
  @Input() className = '';

  @Output() clicked = new EventEmitter<void>();

  onClick() {
    this.clicked.emit();
  }
}
