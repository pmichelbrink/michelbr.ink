import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomeBlogComponent } from './home-blog.component';
import { DemoComponent } from './demo/demo.component';
import { ContactComponent } from './contact/contact.component';

export const HomeRoutes: Routes = [
  { path: 'demos', component: DemoComponent },
  { path: 'blog', component: HomeBlogComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', component: HomeComponent }
];