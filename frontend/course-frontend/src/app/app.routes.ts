import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { RegisterComponent } from './pages/register/register';
import { CourseDetailsComponent } from './pages/course-details/course-details';
import { MyCoursesComponent } from './pages/my-courses/my-courses';
import { AdminPanelComponent } from './pages/admin-panel/admin-panel';

export const routes: Routes = [
{ path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: HomeComponent },

  { path: 'register', component: RegisterComponent },

  { path: 'course/:id', component: CourseDetailsComponent },

  { path: 'my-courses', component: MyCoursesComponent },

  { path: 'admin', component: AdminPanelComponent }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule {}