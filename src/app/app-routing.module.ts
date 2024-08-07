import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { authGuard } from './guards/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CreateStudentComponent } from './components/create-student/create-student.component';
import { AllStudentsComponent } from './components/all-students/all-students.component';
import { DetailsPageComponent } from './components/details-page/details-page.component';
import { notifyGuard } from './guards/notify.guard';
import { TodoFormComponent } from './components/todo-form/todo-form.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'dashboard', component: DashboardComponent , canActivate: [authGuard], children:[
    {path:'home', component: HomeComponent},
    {path:'about',component: AboutComponent},
    {path:'create-student', component: CreateStudentComponent, canDeactivate: [notifyGuard]},
    {path: 'create-edit/:id', component: CreateStudentComponent},
    {path:'all-students', component: AllStudentsComponent},
    {path:'details-page/:id',component: DetailsPageComponent},
    {
      path:'todoForm', component: TodoFormComponent
    }
  ]},
  {path:'' , component: LoginComponent},
  {path:'**',component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
