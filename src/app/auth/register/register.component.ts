import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private apiService: ApiService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      role: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmpassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }

  // Validateur personnalisé pour vérifier la correspondance des mots de passe
  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password');
    const confirmPassword = form.get('confirmpassword');

    
  
    // Vérifiez d'abord que les contrôles ne sont pas null
    if (password && confirmPassword) {
      // Utilisez l'opérateur optionnel (?) pour accéder à la valeur
      if (password.value !== confirmPassword.value) {
        confirmPassword.setErrors({ passwordMismatch: true });
      } else {
        confirmPassword.setErrors(null);
      }
    }
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const data = {
        name: this.registerForm.get('nom')!.value,
        subname: this.registerForm.get('prenom')!.value,
        email: this.registerForm.get('email')!.value,
        role: this.registerForm.get('role')!.value,
        password: this.registerForm.get('password')!.value,
        password_confirmation: this.registerForm.get('confirmpassword')!.value
      };
      // Afficher toutes les valeurs du formulaire dans la console
      console.log('Valeurs du formulaire :', this.registerForm.value);
  
      // Votre logique d'inscription existante
      const { confirmpassword, ...userData } = this.registerForm.value;
  
      this.apiService.register(userData).subscribe({
        next: (response) => {
          console.log('Inscription réussie', response);
          alert('Utilisateur enregistré avec succès.');
          this.router.navigate(['/login']);
        },
        error: (error) => {
          console.error('Erreur d\'inscription', error);
          alert('Échec de l\'enregistrement.');
        }
      });
    } else {
      // Si le formulaire est invalide, vous pouvez afficher l'état complet du formulaire
      console.log('Formulaire invalide. État actuel du formulaire :', this.registerForm);
      alert('Veuillez remplir tous les champs correctement.');
    }
  }
}
  
