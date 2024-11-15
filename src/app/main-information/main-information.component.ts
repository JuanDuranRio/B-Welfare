import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-information',
  standalone: true,
  imports: [],
  templateUrl: './main-information.component.html',
  styleUrl: './main-information.component.css',
})

export class MainInformationComponent {
  constructor(private router: Router) {}

  navegarALogin() {
    this.router.navigate(['login']);
  }

  navegarARecursos() {
    this.router.navigate(['resources-natural']);
  }

  navegarOffersCompany() {
    this.router.navigate(['offer-company']);
  }

  navegarAdminEmployees() {
    this.router.navigate(['admin-employees']);
  }

  navegarOffersWorkers() {
    this.router.navigate(['offer-workers']);
  }

  navegarPlanPlus() {
    this.router.navigate(['plan-plus']);
  }
}
