import { Routes } from '@angular/router';
import { HelloWorldComponent } from './shared/ui/hello-world.component';
import { HeaderComponent } from './core/layout/header.component';

export const routes: Routes = [
  { path: 'hello', component: HelloWorldComponent },
  { path: 'navbar', component: HeaderComponent },
  { path: '', redirectTo: '/hello', pathMatch: 'full' }, // Default route
];
