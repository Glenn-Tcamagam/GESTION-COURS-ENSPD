import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AccueilComponent } from './accueilEtudiant/accueil.component';
import { AddCoursComponent } from './cours/add-cours/add-cours.component';
import { AddPostComponent } from './posts/add-post/add-post.component';
import { CoursListComponent } from './cours/cours-list/cours-list.component';
import { AccueilinitialComponent } from './accueilinitial/accueilinitial.component';
import { AccueilprofComponent } from './accueilprof/accueilprof.component';
import { CoursetudiantComponent } from './coursetudiant/coursetudiant.component';
import { EditCoursComponent } from './cours/edit-cours/edit-cours.component';
import { EditPostComponent } from './posts/edit-post/edit-post.component';
import { PostListComponent } from './posts/post-list/post-list.component';

const routes: Routes = [

  // ACCUEIL
{path:'', component: AccueilinitialComponent },
{path:'accueilinitial', component: AccueilinitialComponent },
{path:'accueilprof', component: AccueilprofComponent },
{path:'accueiletudiant', component: AccueilComponent },



//AUTH
{path:'login', component: LoginComponent },
{path:'register', component: RegisterComponent},


// COURS PROFESSEUR
{path: 'addcours', component: AddCoursComponent},
{path: 'courslistadmin', component: CoursListComponent},
{path: 'editcours', component: EditCoursComponent},



//POST
{path:'addpost', component: AddPostComponent},
{path:'postlistadmin', component: PostListComponent},
{path:'editpost', component: EditPostComponent},
{ path: '**', redirectTo: '', pathMatch: 'full' },

// COURS ETUDIANT
{path:'coursetudiant', component: CoursetudiantComponent},


];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
