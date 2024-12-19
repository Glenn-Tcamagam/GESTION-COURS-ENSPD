import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueilEtudiant/accueil.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AddCoursComponent } from './cours/add-cours/add-cours.component';
import { CoursListComponent } from './cours/cours-list/cours-list.component';
import { EditCoursComponent } from './cours/edit-cours/edit-cours.component';
import { AddPostComponent } from './posts/add-post/add-post.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { EditPostComponent } from './posts/edit-post/edit-post.component';
import { NavbarComponent } from './navbarEtudiant/navbar.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AccueilprofComponent } from './accueilprof/accueilprof.component';
import { NavbarprofComponent } from './navbarprof/navbarprof.component';
import { NavbarinitialComponent } from './navbarinitial/navbarinitial.component';
import { AccueilinitialComponent } from './accueilinitial/accueilinitial.component';
import { CoursetudiantComponent } from './coursetudiant/coursetudiant.component';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    LoginComponent,
    RegisterComponent,
    AddCoursComponent,
    CoursListComponent,
    EditCoursComponent,
    AddPostComponent,
    PostListComponent,
    EditPostComponent,
    NavbarComponent,
    AccueilprofComponent,
    NavbarprofComponent,
    NavbarinitialComponent,
    AccueilinitialComponent,
    CoursetudiantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
