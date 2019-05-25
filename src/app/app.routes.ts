import { Routes } from '@angular/router';
import { ProjectDetailsComponent } from './views/home/project-details/project-details.component';

export const rootRouterConfig: Routes = [
  { 
    path: '', 
    redirectTo: 'home', 
    pathMatch: 'full' 
  },
  { 
    path: 'home', 
    loadChildren: './views/home/home.module#HomeModule'
  },
  { 
    path: 'home/:id', 
    component: ProjectDetailsComponent,
    //loadChildren: './views/home/project-details/project-details.module#ProjectDetailsModule'
  },
  { 
    path: '**', 
    redirectTo: 'home'
  }
];

