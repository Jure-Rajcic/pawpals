import { Routes } from '@angular/router';
import { HomeComponent } from './routes/home.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
  { path: 'home', component: HomeComponent },

];
