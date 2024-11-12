import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginCompanyComponent } from './login-company/login-company.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegisterCompanyComponent } from './register-company/register-company.component';
import { MainInformationComponent } from './main-information/main-information.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LoginCompanyComponent,LoginComponent,RegisterComponent,RegisterCompanyComponent,MainInformationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'B-Welfare';
}
