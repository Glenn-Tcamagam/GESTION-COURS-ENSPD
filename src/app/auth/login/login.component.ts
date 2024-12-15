import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 loginForm:FormGroup;
 apiUrl = 'http://127.0.0.1:8000/api/login'; // URL de l'API

constructor(
    private fb: FormBuilder, 
    private apiService: ApiService,
    private router: Router
  ) {
    // Initialisation du formulaire de connexion
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  getRole(loginData: { username: string; password: string }): string {
    // Remplacez cette logique par un appel API réel pour obtenir les informations utilisateur
    if (loginData.username === 'professeur') {
      return 'prof';
    } else if (loginData.username === 'etudiant') {
      return 'etudiant';
    }
    return 'unknown'; // Valeur par défaut si le rôle est introuvable
  }


  SubmitLogin() {
    if (this.loginForm.valid) {
        console.log('Données du formulaire de connexion :', this.loginForm.value);
        const loginData = this.loginForm.value; // Récupère les données du formulaire
        const userRole = this.getRole(loginData);
        
      // Redirection basée sur le rôle
      if (userRole === 'prof') {
        this.router.navigate(['/addcours']); // Redirige vers "addcours" pour les profs
      } else if (userRole === 'etudiant') {
        this.router.navigate(['/courslistadmin']); // Redirige vers "courslistadmin" pour les étudiants
      } else {
        alert('Rôle non reconnu'); // Gestion des rôles inconnus
      }
    } else {
       alert('Formulaire invalide');
        }
  }

}
