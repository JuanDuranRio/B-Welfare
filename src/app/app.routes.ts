//import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainInformationComponent } from './main-information/main-information.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'main-information', component: MainInformationComponent },
    { path: '', redirectTo: 'main-information', pathMatch: 'full' },
    // Otras rutas...
];
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
//export const routes: Routes = [];
