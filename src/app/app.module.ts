import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { Http, HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { ProjectService } from './shared/services/project.service'
import { ProjectDetailsComponent } from './views/home/project-details/project-details.component';
import { Error404Component } from './errors/404.component';
import { ProjectRouteActivator } from './views/home/project-details/project-route-activator.service';
import { ProjectsResolver } from './views/home/projects/projects-resolver.service';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    SharedModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false })
  ],
  declarations: [
    AppComponent,
    ProjectDetailsComponent,
    Error404Component
  ],
  providers: [
    ProjectService, 
    ProjectRouteActivator,
    ProjectsResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }