import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-offer-company',
  standalone: true,
  imports: [ CommonModule, MatMenuModule,MatButtonModule ],
  templateUrl: './offer-company.component.html',
  styleUrl: './offer-company.component.css'
})
export class OfferCompanyComponent {
  personas = [
    { nombre: 'Lorenzo Villalobos', rol: 'Diseñador Gráfico', imagen: 'path/to/image1.jpg' },
    { nombre: 'Gabriela Lozano', rol: 'Artista Digital', imagen: 'path/to/image2.jpg' },
    { nombre: 'Samantha Navarro', rol: 'Marketing', imagen: 'path/to/image3.jpg' },
    { nombre: 'Lautaro Rodríguez', rol: 'SCRUM Master', imagen: 'path/to/image4.jpg' },
    { nombre: 'Nicolás Maduro', rol: 'Dictador', imagen: 'path/to/image5.jpg' },
    { nombre: 'Vladimir Putin', rol: 'Presidente', imagen: 'path/to/image6.jpg' }
  ];
}
