import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { 
  MatIconModule,
  MatCardModule,
  MatMenuModule,
  MatButtonModule,
  MatChipsModule,
  MatListModule,
  MatInputModule,
  MatRippleModule,
  MatSlideToggleModule,
  MatSnackBarModule
 } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NguCarouselModule } from '@ngu/carousel';
// import { CommonDirectivesModule } from '../../directives/common/common-directives.module';
import { SharedModule } from '../../shared/shared.module';
import { HomeRoutes } from "./home.routing";


import { HomeComponent } from './home.component';
import { HomeBlogComponent } from './home-blog.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { PortfolioCarouselComponent } from './projects/projects.component';
import { DemoComponent } from './demo/demo.component';

import { WINDOW_PROVIDERS } from '../../shared/helpers/window.helper';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    MatChipsModule,
    MatInputModule,
    MatListModule,
    MatRippleModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    FlexLayoutModule,
    NguCarouselModule,
    RouterModule.forChild(HomeRoutes)
  ],
  declarations: [
    HomeComponent,
    HomeBlogComponent,
    HeaderComponent, 
    HomePageComponent,
    BlogListComponent,
    BlogsComponent,  
    ContactComponent, 
    FooterComponent, 
    PortfolioCarouselComponent,
    DemoComponent,
  ],
  providers: [WINDOW_PROVIDERS]

})
export class HomeModule { }
