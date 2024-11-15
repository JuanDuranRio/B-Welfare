import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-offer-workers',
  standalone: true,
  imports: [CommonModule, 
    MatButtonModule, 
    MatIconModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatExpansionModule
  ],
  templateUrl: './offer-workers.component.html',
  styleUrl: './offer-workers.component.css'
})
export class OfferWorkersComponent {
  items = [
    { title: 'Información adicional 1', content: 'Contenido del primer panel desplegable' },
    { title: 'Información adicional 2', content: 'Contenido del segundo panel desplegable' },
    { title: 'Información adicional 3', content: 'Contenido del tercer panel desplegable' }
  ];
}
