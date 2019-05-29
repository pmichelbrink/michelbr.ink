import { Routes } from '@angular/router';
import { ProjectDetailsComponent } from './views/home/project-details/project-details.component';
import { Error404Component } from './errors/404.component';
import { ProjectRouteActivator } from './views/home/project-details/project-route-activator.service';
import { ProjectsResolver } from './views/home/projects/projects-resolver.service';

export const rootRouterConfig: Routes = [
  { 
    path: '', 
    redirectTo: 'home', 
    pathMatch: 'full' ,
    resolve: {projects:ProjectsResolver}
  },
  { 
    path: 'home', 
    loadChildren: './views/home/home.module#HomeModule',
    resolve: {projects:ProjectsResolver}
  },
  { 
    path: 'home/:id', 
    component: ProjectDetailsComponent,
    canActivate: [ProjectRouteActivator]
  },
  { 
    path: '404', 
    component: Error404Component 
  },
  { 
    path: '**', 
    redirectTo: 'home'
  },
];

