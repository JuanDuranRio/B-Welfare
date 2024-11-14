import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'

@Component({
  selector: 'app-natural-person-resources',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './natural-person-resources.component.html',
  styleUrl: './natural-person-resources.component.css'
})
export class NaturalPersonResourcesComponent {
  constructor(private router: Router) {}
  menuIsVisible = false;
  saveResourceType = "fisico";
  toggleMenu() {

  }

  moverAPerfil() {
    this.router.navigate(['user-profile'])
  }

  moverAMainPage() {
    this.router.navigate(['main-information'])
  }

  moverAPlanes() {
    this.router.navigate([])
  }
  
  boxes = [
    {
      id: 1,
      image: 'Imagen.png',
      name: 'Encuesta'
    },
    {
      id: 2,
      image: 'Imagen.png',
      name: 'Encuesta'
    },
    {
      id: 3,
      image: 'Imagen.png',
      name: 'Encuesta'
    },
    {
      id: 4,
      image: 'Imagen.png',
      name: 'Encuesta'
    },
    {
      id: 5,
      image: 'Imagen.png',
      name: 'Encuesta'
    },
    {
      id: 6,
      image: 'Imagen.png',
      name: 'Encuesta'
    }
    
  ]
}
