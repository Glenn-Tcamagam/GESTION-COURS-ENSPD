import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursService } from '../services/cours.service';
import { Subscription } from 'rxjs';
import { Cours } from '../models/cours.model';
import { UpdateCoursRequest } from '../models/update-cours-request.model';

@Component({
  selector: 'app-edit-cours',
  templateUrl: './edit-cours.component.html',
  styleUrls: ['./edit-cours.component.css']
})
export class EditCoursComponent implements OnInit, OnDestroy {
  id: string | null = null;
  paramsSubscription?: Subscription;
  editCoursSubscription?: Subscription;
  cours?: Cours;
  
  constructor(private route: ActivatedRoute, private coursService: CoursService, private router: Router){}
  ngOnInit(): void {
    this.paramsSubscription = this.route.paramMap.subscribe({
      next: (params) => {
        this.id = params.get('id');

        if(this.id){
           // get the data from the API for this category Id
           this.coursService.getCoursById(this.id)
           .subscribe({
             next: (response) => {
               this.cours = response;
             }
           });

        }
        
  }
})
  }


  onFormSubmit(): void {
    const updateCoursRequest: UpdateCoursRequest = {
      name: this.cours?.name ?? '',
      description: this.cours?.description ?? ''
    };

    // pass this object to service
    if (this.id) {
      this.editCoursSubscription = this.coursService.updateCours(this.id, updateCoursRequest)
      .subscribe({
        next: (response) => {
          this.router.navigateByUrl('/courslistadmin');
        }
      });
    }
  }

  onDelete():void{
    if (this.id) {
      this.coursService.deleteCours(this.id)
      .subscribe({
        next: (response) => {
          this.router.navigateByUrl('/courslistadmin');
        }
      })
    }
  }


  ngOnDestroy(): void {
    this.paramsSubscription?.unsubscribe();
    this.editCoursSubscription?.unsubscribe();
  }
}


