import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TestmonialsComponent } from './components/testmonials/testmonials.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "admin", component: AdminComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactusComponent },
  { path: "projects", component: ProjectsComponent },
  { path: "testimonials", component: TestmonialsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
