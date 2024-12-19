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

  


  
    SubmitLogin() {
      if (this.loginForm.valid) {
        console.log('Données du formulaire de connexion :', this.loginForm.value);
        
        this.apiService.login(this.loginForm.value).subscribe({
          next: (response) => {
            // Stocker les informations de l'utilisateur et le token
            localStorage.setItem('user', JSON.stringify(response.user));
            localStorage.setItem('token', response.token);
            
            // Vérifier le rôle de l'utilisateur
            const userRole = response.user.role;
            const userId = response.user.id;
            
            // Redirection basée sur le rôle
            if (userRole === 'professeur') {
              this.router.navigate(['/addcours'],{ queryParams: { id: userId } });
            } else if (userRole === 'etudiant') {
              this.router.navigate(['/courslistadmin'], { queryParams: { id: userId } });
            } else {
              alert('Rôle non reconnu');
            }
          },
          error: (error) => {
            console.error('Erreur de connexion', error);
            alert('Identifiants incorrects');
          }
        });
      } else {
        alert('Formulaire invalide');
      }
    }

}
