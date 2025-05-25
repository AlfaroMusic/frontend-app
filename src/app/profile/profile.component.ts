import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  usuario = {
    nombre: 'Daniel',
    email: 'daniel@example.com',
    // agrega más datos que desees mostrar
  };

  constructor() {}

  ngOnInit(): void {
    // Aquí podrías cargar datos reales desde un servicio
  }

}
