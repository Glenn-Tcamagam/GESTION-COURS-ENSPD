import { Component, OnDestroy, OnInit } from '@angular/core';
import { CoursService } from '../services/cours.service';
import { ActivatedRoute } from '@angular/router';
import { AddCoursRequest } from '../models/add-cours-request.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-cours',
  templateUrl: './add-cours.component.html',
  styleUrls: ['./add-cours.component.css']
})
export class AddCoursComponent {
  // model: AddCoursRequest;
  coursForm: FormGroup;
  userId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService
  ) {
    this.coursForm = this.fb.group({
      professeur_id: [''], // Champ caché pour l'ID du professeur
      name: ['', Validators.required],
      description: [''],
    });
  }
  ngOnInit() {
    // Récupérer l'ID du professeur
    this.route.queryParams.subscribe(params => {
      this.userId = params['userId'] ? Number(params['userId']) : null;

      // Si pas dans les paramètres, essayer de le récupérer du localStorage
      if (!this.userId) {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
          const user = JSON.parse(storedUser);
          this.userId = user.id;
        }
      }

      // Définir l'ID du professeur dans le formulaire
      if (this.userId) {
        this.coursForm.patchValue({
          professeur_id: this.userId
        });
      }
    });
  }


  onFormSubmit(){

    if (this.coursForm.valid) {
      // Récupérer toutes les valeurs du formulaire, y compris l'ID du professeur
      const coursData = this.coursForm.value;

      // Appeler le service pour ajouter le cours
      this.apiService.addCours(coursData).subscribe({
        next: (response) => {
          console.log('Cours ajouté avec succès', response);
          localStorage.setItem('user', JSON.stringify(response.user));
          const userId = response.user.id;


          // Réinitialiser le formulaire ou rediriger

          this.coursForm.reset({
            professeur_id: this.userId // Conserver l'ID du professeur après reset
          });
          this.router.navigate(['/addcours'],{ queryParams: { id: userId } });
        },
        error: (error) => {
          console.error('Erreur lors de l\'ajout du cours', error);
        }
      });
    }
   
  }



  



}
