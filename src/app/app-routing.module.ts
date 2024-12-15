import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AddCoursComponent } from './cours/add-cours/add-cours.component';
import { AddPostComponent } from './posts/add-post/add-post.component';
import { CoursListComponent } from './cours/cours-list/cours-list.component';

const routes: Routes = [
{path:'', component: AccueilComponent },
{path:'login', component: LoginComponent },
{path:'register', component: RegisterComponent},


// COURS
{path: 'addcours', component: AddCoursComponent},
{path: 'courslistadmin', component: CoursListComponent},



//POST
{path:'addpost', component: AddPostComponent},
{ path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
