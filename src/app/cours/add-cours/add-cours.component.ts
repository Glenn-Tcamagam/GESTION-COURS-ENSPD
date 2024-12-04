import { Component, OnDestroy } from '@angular/core';
import { CoursService } from '../services/cours.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AddCoursRequest } from '../models/add-cours-request.model';

@Component({
  selector: 'app-add-cours',
  templateUrl: './add-cours.component.html',
  styleUrls: ['./add-cours.component.css']
})
export class AddCoursComponent implements OnDestroy {
  model: AddCoursRequest;
  private addCoursSubscription?: Subscription;

  constructor(private coursService: CoursService ,private router: Router) {
    this.model = {
      name: '',
      description: ''
    };
  }


  onFormSubmit(){
    this.addCoursSubscription = this.coursService.addCours(this.model)
    .subscribe({
      next: (response) => {
        this.router.navigateByUrl('/courslistadmin');
      }
    })
      }



  ngOnDestroy(): void {
    this.addCoursSubscription?.unsubscribe();
  }



}
