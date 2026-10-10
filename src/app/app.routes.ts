import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { HelpComponent } from './components/help/help.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: HomeComponent },
  { path: 'acceso', component: LoginComponent },
  { path: 'ayuda', component: HelpComponent },
  { path: 'registro', component: RegisterComponent },
  { path: '**', redirectTo: 'inicio' }
];
