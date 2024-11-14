//import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainInformationComponent } from './main-information/main-information.component';
import { NaturalPersonResourcesComponent } from './natural-person-resources/natural-person-resources.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CompanyResourcesComponent } from './company-resources/company-resources.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'main-information', component: MainInformationComponent },
    { path: '', redirectTo: 'main-information', pathMatch: 'full' },
    { path: 'resources-natural', component: NaturalPersonResourcesComponent},
    { path: 'user-profile', component: UserProfileComponent },
    { path: 'resources-company', component: CompanyResourcesComponent },
    { path: 'company-profile', component: CompanyProfileComponent },
    // Otras rutas...
];
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
//export const routes: Routes = [];
